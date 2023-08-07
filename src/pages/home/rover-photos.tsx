import { PhotoPreview } from "./photo-preview";
import { classNames } from "@utils/formatters";
import { useRouter } from "next/router";
import { useSelectedPhoto } from "@context/selected-photo-context";
import {
  CAMERAS_DICTIONARY,
  CURIOSITY_ROVER_CAMERAS,
  EARTH_DATE_DAY,
  HOME_PAGE_TABS,
  SOL_DATE,
  SPIRIT_ROVER_CAMERAS,
} from "@utils/constants";
import { CustomSwitch, Pagination } from "@components/lib";
import { Fragment, useState } from "react";
import { HiCheck, HiChevronDown } from "react-icons/hi";
import { Listbox, Transition } from "@headlessui/react";
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

type CameraType = (typeof CAMERAS_DICTIONARY)[number];

const defaultCamera = CAMERAS_DICTIONARY.find(
  (camera) => camera.abbreviation === "all"
);

export const RoverPhotos = ({ tab }: RoverPhotosProps): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [camera, setCamera] = useState(defaultCamera?.abbreviation);
  const [earthDate, setEarthDate] = useState<boolean>(false);
  const [sol, setSol] = useState<boolean>(false);

  const { setSelectedPhoto } = useSelectedPhoto();
  const router = useRouter();

  const isCuriosity = tab === HOME_PAGE_TABS["curiosity"];
  const isOpportunity = tab === HOME_PAGE_TABS["opportunity"];
  const isSpirit = tab === HOME_PAGE_TABS["spirit"];

  const cameraOptions = [defaultCamera].concat(
    isCuriosity ? CURIOSITY_ROVER_CAMERAS : SPIRIT_ROVER_CAMERAS
  );

  const isDefaultCamera = camera === defaultCamera?.abbreviation;
  const filtersApplied = !isDefaultCamera || earthDate || sol;

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
        camera,
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
        camera,
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
        camera,
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

  const nexPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const previousPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const onChangeCamera = (event) => setCamera(event.target.value);
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

  console.log(camera, "camera");

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
        <div className="w-96 mx-28">
          {/* <p className="text-xs">Select a camera</p> */}
          <Listbox
            value={camera || defaultCamera?.abbreviation}
            onChange={(event) => {
              setCamera(
                CAMERAS_DICTIONARY.find((camera) => camera.name === event)
                  ?.abbreviation
              );
            }}
          >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{camera}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiChevronDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {cameraOptions.map((camera) => (
                    <Listbox.Option
                      key={camera?.abbreviation}
                      className={({ active }) =>
                        classNames(
                          "relative cursor-default select-none py-2 pl-10 pr-4",
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        )
                      }
                      value={camera?.abbreviation}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {camera?.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
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
