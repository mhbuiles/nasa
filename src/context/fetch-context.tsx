import axios, { AxiosInstance } from "axios";
import { createContext, useContext } from "react";

const FetchContext = createContext<AxiosInstance | null>(null);

type FetchProviderProps = {
  children?: React.ReactNode;
};
const FetchProvider = ({
  children,
}: FetchProviderProps): React.ReactElement => {
  const apiRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <FetchContext.Provider value={apiRequest}>{children}</FetchContext.Provider>
  );
};

const useFetch = (): AxiosInstance => {
  const context = useContext(FetchContext);
  if (context === null) {
    throw new Error("useFetch must be used within a FetchProvider");
  }

  return context;
};
export { FetchProvider, useFetch };
