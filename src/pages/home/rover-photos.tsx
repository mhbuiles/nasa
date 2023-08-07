import { PhotoPreview } from "./photo-preview";
import { classNames } from "@utils/formatters";
import { useRouter } from "next/router";
import { useSelectedPhoto } from "@context/selected-photo-context";
import { useState } from "react";
import {
  CAMERAS_DICTIONARY,
  CURIOSITY_ROVER_CAMERAS,
  EARTH_DATE_DAY,
  HOME_PAGE_TABS,
  SOL_DATE,
  SPIRIT_ROVER_CAMERAS,
} from "@utils/constants";
import { CustomSwitch, Pagination, Select } from "@components/lib";
import {
  RoverPhoto,
  useCuriosityRoverLatestPhotos,
  useCuriosityRoverPhotos,
  useOpportunityRoverLatestPhotos,
  useOpportunityRoverPhotos,
  useSpiritRoverLatestPhotos,
  useSpiritRoverPhotos,
} from "@services/rover-photos";

type RoverPhotosProps = {
  tab: string;
};

const defaultCamera = "All";

export const RoverPhotos = ({ tab }: RoverPhotosProps): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [camera, setCamera] = useState("All");
  const [earthDate, setEarthDate] = useState<boolean>(false);
  const [sol, setSol] = useState<boolean>(false);

  const { setSelectedPhoto } = useSelectedPhoto();
  const router = useRouter();

  const isCuriosity = tab === HOME_PAGE_TABS["curiosity"];
  const isOpportunity = tab === HOME_PAGE_TABS["opportunity"];
  const isSpirit = tab === HOME_PAGE_TABS["spirit"];

  const cameraOptions = [defaultCamera].concat(
    isCuriosity
      ? CURIOSITY_ROVER_CAMERAS.map((camera) => camera.name)
      : SPIRIT_ROVER_CAMERAS.map((camera) => camera.name)
  );

  const isDefaultCamera = camera === defaultCamera;
  const filtersApplied = !isDefaultCamera || earthDate || sol;
  const selectedCamera = CAMERAS_DICTIONARY.find(
    (element) => element.name === camera
  )?.abbreviation;

  const { data: curiosityLatestPhotos, isFetching: fetchingCuriosityLatest } =
    useCuriosityRoverLatestPhotos(
      {
        page,
      },
      { enabled: isCuriosity }
    );

  const { data: curiosityPhotos, isFetching: fetchingCuriosity } =
    useCuriosityRoverPhotos(
      {
        page,
        camera: selectedCamera,
        earth_date: earthDate ? EARTH_DATE_DAY : null,
        sol: sol ? SOL_DATE : null,
      },
      {
        enabled: isCuriosity && filtersApplied,
      }
    );

  const {
    data: opportunityLatesPhotos,
    isFetching: fetchingOpportunityLatest,
  } = useOpportunityRoverLatestPhotos(
    {
      page,
    },
    { enabled: isOpportunity }
  );

  const { data: opportunityPhotos, isFetching: fetchingOpportunity } =
    useOpportunityRoverPhotos(
      {
        page,
        camera: selectedCamera,
        earth_date: earthDate ? EARTH_DATE_DAY : null,
        sol: sol ? SOL_DATE : null,
      },
      {
        enabled: isOpportunity && filtersApplied,
      }
    );

  const { data: spiritLatestPhotos, isFetching: fetchingSpiritLatest } =
    useSpiritRoverLatestPhotos(
      {
        page,
      },
      { enabled: isSpirit }
    );

  const { data: spiritPhotos, isFetching: fetchingSpirit } =
    useSpiritRoverPhotos(
      {
        page,
        camera: selectedCamera,
        earth_date: earthDate ? EARTH_DATE_DAY : null,
        sol: sol ? SOL_DATE : null,
      },
      {
        enabled: isSpirit && filtersApplied,
      }
    );

  const isFetching =
    fetchingCuriosity ||
    fetchingCuriosityLatest ||
    fetchingOpportunity ||
    fetchingOpportunityLatest ||
    fetchingSpirit ||
    fetchingSpiritLatest;

  const latestPhotos = () => {
    if (isCuriosity) return curiosityLatestPhotos?.latest_photos;
    if (isOpportunity) return opportunityLatesPhotos?.latest_photos;
    if (isSpirit) return spiritLatestPhotos?.latest_photos;

    return [];
  };

  const photos = () => {
    if (isCuriosity) return curiosityPhotos?.photos;
    if (isOpportunity) return opportunityPhotos?.photos;
    if (isSpirit) return spiritPhotos?.photos;

    return [];
  };

  const dataLength = filtersApplied ? photos()?.length : latestPhotos()?.length;

  const onQueryBySolDate = () => setSol((prevState) => !prevState);
  const onQueryByEarthDateDay = () => setEarthDate((prevState) => !prevState);

  const onClickPhoto = (photo: RoverPhoto) => {
    setSelectedPhoto({
      imgSrc: photo.img_src,
      roverLandingDate: photo.rover.landing_date,
      roverName: photo.rover.name,
      roverStatus: photo.rover.status,
      earthDate: photo.earth_date,
      camera: photo.camera.full_name,
    });
    router.push(`/photo-details/${photo.id}`);
  };

  const nexPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-0">
      <div className="flex items-center justify-around w-full p-0">
        <CustomSwitch
          checked={sol}
          onChange={onQueryBySolDate}
          label="Query by Sol date"
        />
        <CustomSwitch
          checked={earthDate}
          onChange={onQueryByEarthDateDay}
          label="Query by Earth date"
        />
        <Select
          value={camera}
          onChange={setCamera}
          label="Pick a camera"
          options={cameraOptions}
        />
      </div>
      <div
        className={classNames(
          dataLength === 0 || isFetching ? "grid-cols-1" : "grid-cols-5",
          "grid gap-2 max-h-96 overflow-scroll p-2"
        )}
      >
        {isFetching && (
          <h6 className="font-bold text-xl text-dark-blue m-6 text-center">
            Loading...
          </h6>
        )}
        {dataLength === 0 && !isFetching && (
          <h6 className="font-bold text-xl text-dark-blue m-6 text-center">
            There's no data to display, try applying other filters, or clear
            them all to see latest photos from this rover.
          </h6>
        )}
        {!isFetching &&
          (filtersApplied
            ? photos()?.map((photo) => (
                <PhotoPreview
                  key={photo.id.toString()}
                  photo={photo}
                  onClick={onClickPhoto}
                />
              ))
            : latestPhotos()?.map((photo) => (
                <PhotoPreview
                  key={photo.id.toString()}
                  photo={photo}
                  onClick={onClickPhoto}
                />
              )))}
      </div>
      <Pagination
        canNextPage={dataLength === 25}
        canPreviousPage={page > 1}
        previousPage={previousPage}
        nextPage={nexPage}
      />
    </div>
  );
};
