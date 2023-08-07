import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type PhotoDetails = {
  imgSrc: string;
  earthDate: string;
  roverName: string;
  roverLandingDate: string;
  roverStatus: string;
  camera: string;
};

type SelectedPhotoContextType = {
  selectedPhoto: PhotoDetails;
  setSelectedPhoto: Dispatch<SetStateAction<PhotoDetails>>;
};

type SelectedPhotoProviderProps = {
  children?: React.ReactNode;
};

const defaultState = {
  imgSrc: "",
  earthDate: "",
  roverName: "",
  roverLandingDate: "",
  roverStatus: "",
  camera: "",
};

const SelectedPhotoContext = createContext<SelectedPhotoContextType | null>(
  null
);

const SelectedPhotoProvider = ({
  children,
}: SelectedPhotoProviderProps): React.ReactElement => {
  const [selectedPhoto, setSelectedPhoto] =
    useState<SelectedPhotoContextType["selectedPhoto"]>(defaultState);

  return (
    <SelectedPhotoContext.Provider value={{ selectedPhoto, setSelectedPhoto }}>
      {children}
    </SelectedPhotoContext.Provider>
  );
};

const useSelectedPhoto = (): SelectedPhotoContextType => {
  const context = useContext(SelectedPhotoContext);
  if (context === null) {
    throw new Error(
      "useSelectedPhoto must be used within a SelectedPhotoProvider"
    );
  }

  return context;
};

export { SelectedPhotoProvider, SelectedPhotoContext, useSelectedPhoto };
