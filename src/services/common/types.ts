import { UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type ErrorAttr = AxiosError;

const isErrorAttr = (error: unknown): error is ErrorAttr => {
  if (
    axios.isAxiosError(error) &&
    error.response?.data instanceof Object &&
    "message" in error.response.data
  ) {
    return true;
  }

  return false;
};

type CustomQueryOptions<
  TKeyFactory extends (
    ...args: Array<any>
  ) => ReadonlyArray<
    string | Record<string, unknown> | number | undefined | null
  >,
  TData,
> = Omit<
  UseQueryOptions<TData, unknown, TData, ReturnType<TKeyFactory>>,
  "queryFn" | "queryKey"
>;

export type { ErrorAttr, CustomQueryOptions };
export { isErrorAttr };
