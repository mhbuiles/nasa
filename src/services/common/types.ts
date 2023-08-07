import { UseQueryOptions } from "@tanstack/react-query";

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

export type { CustomQueryOptions };
