import { RoverPhoto } from "@services/rover-photos";

type PhotoPreviewProps = {
  onClick: (photo: RoverPhoto) => void;
  photo: RoverPhoto;
};

export const PhotoPreview = ({
  onClick,
  photo,
}: PhotoPreviewProps): React.ReactElement => {
  return (
    <div className="w-44 cursor-pointer" onClick={() => onClick(photo)}>
      <img src={photo.img_src} alt="mars rover photo" />
    </div>
  );
};
