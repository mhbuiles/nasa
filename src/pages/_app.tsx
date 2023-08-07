import type { AppProps } from "next/app";
import { FetchProvider } from "@context/fetch-context";
import { Layout } from "@components/layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SelectedPhotoProvider } from "@context/selected-photo-context";
import { Toaster } from "react-hot-toast";
import { CheckCircle, XCircle } from "phosphor-react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import "../globals.css";

const succesToastStyle = {
  backgroundColor: "#00AE42",
  color: "white",
  fontSize: "16px",
  fontWeight: "bolder",
};

const errorToastStyle = {
  backgroundColor: "#E1251B",
  color: "white",
  fontSize: "16px",
  fontWeight: "bolder",
};

export default function App({ Component, pageProps }: AppProps): ReactNode {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Layout>
          <FetchProvider>
            <SelectedPhotoProvider>
              <Component {...pageProps} />
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4500,
                  success: {
                    icon: <CheckCircle weight="regular" size={32} />,
                    style: succesToastStyle,
                  },
                  error: {
                    icon: <XCircle weight="regular" size={32} />,
                    style: errorToastStyle,
                  },
                }}
              />
            </SelectedPhotoProvider>
          </FetchProvider>
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
