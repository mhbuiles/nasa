import { Card } from "@components/card";
import { HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import { useSelectedPhoto } from "@context/selected-photo-context";

const PhotoDetails = (): React.ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const { selectedPhoto } = useSelectedPhoto();

  const onClickBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center w-full p-12">
      <Card
        topContent={
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-initial items-center">
              <HiChevronLeft
                size="32px"
                onClick={onClickBack}
                className="cursor-pointer"
              />
              <p>Back to list</p>
            </div>
            <h1 className="flex flex-initial font-bold text-2xl">
              Photo details
            </h1>
          </div>
        }
      >
        <div className="flex gap-12 p-10">
          <div className="text-xs max-w-lg">
            <img src={selectedPhoto.imgSrc} alt="mars rover photo" />
          </div>
          <div className="flex flex-col text-blue">
            <h6 className="text-2xl text-center font-bold">Photo id: {id}</h6>
            <ul className="m-2 p-2 list-disc">
              <li className="text-xl">
                Taken by{" "}
                <span className="font-bold">{selectedPhoto.roverName}</span>{" "}
                Rover
              </li>
              <li className="text-xl">With camera: {selectedPhoto.camera}</li>
              <li className="text-xl">
                On earth date: {selectedPhoto.earthDate}
              </li>
              <li className="text-xl">
                Rover landed in {selectedPhoto.roverLandingDate}
              </li>
              <li className="text-xl">
                Rover is currently{" "}
                <span className="font-bold">{selectedPhoto.roverStatus}</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetails;
