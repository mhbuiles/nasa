import { CustomQueryOptions } from "./common/types";
import { useFetch } from "@context/fetch-context";
import {
  CURIOSITY_LATEST_PHOTOS_BASE_URL,
  CURIOSITY_PHOTOS_BASE_URL,
  OPPORTUNITY_LATEST_PHOTOS_BASE_URL,
  OPPORTUNITY_PHOTOS_BASE_URL,
  SPIRIT_LATEST_PHOTOS_BASE_URL,
  SPIRIT_PHOTOS_BASE_URL,
} from "@utils/constants";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const DEMO_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const curiosityRoverPhotosKeys = {
  all: ["curiosityRoverPhotos"] as const,
  lists: () => [...curiosityRoverPhotosKeys.all, "list"],
  list: (filters?: Record<string, unknown>) =>
    [...curiosityRoverPhotosKeys.lists(), filters] as const,
};

const opportunityRoverPhotosKeys = {
  all: ["opportunityRoverPhotos"] as const,
  lists: () => [...opportunityRoverPhotosKeys.all, "list"],
  list: (filters?: Record<string, unknown>) =>
    [...opportunityRoverPhotosKeys.lists(), filters] as const,
};

const spiritRoverPhotosKeys = {
  all: ["spiritRoverPhotos"] as const,
  lists: () => [...spiritRoverPhotosKeys.all, "list"],
  list: (filters?: Record<string, unknown>) =>
    [...spiritRoverPhotosKeys.lists(), filters] as const,
};

type RoverPhoto = {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  sol: number;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Array<{
      name: string;
      full_name: string;
    }>;
  };
};

type RoverPhotosPageAttr = {
  photos: Array<RoverPhoto>;
};

type RoverLatestPhotosPageAttr = {
  latest_photos: Array<RoverPhoto>;
};

type UseRoverPhotosFilters = {
  page?: number | null;
  camera?: string | null;
  earth_date?: string | null;
  sol?: number | null;
};

const useCuriosityRoverPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof curiosityRoverPhotosKeys.list,
    RoverPhotosPageAttr
  >
): UseQueryResult<RoverPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: curiosityRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverPhotosPageAttr>(
        CURIOSITY_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

const useCuriosityRoverLatestPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof curiosityRoverPhotosKeys.list,
    RoverLatestPhotosPageAttr
  >
): UseQueryResult<RoverLatestPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: curiosityRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverLatestPhotosPageAttr>(
        CURIOSITY_LATEST_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

const useOpportunityRoverPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof opportunityRoverPhotosKeys.list,
    RoverPhotosPageAttr
  >
): UseQueryResult<RoverPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: opportunityRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverPhotosPageAttr>(
        OPPORTUNITY_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

const useOpportunityRoverLatestPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof opportunityRoverPhotosKeys.list,
    RoverLatestPhotosPageAttr
  >
): UseQueryResult<RoverLatestPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: opportunityRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverLatestPhotosPageAttr>(
        OPPORTUNITY_LATEST_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

const useSpiritRoverPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof spiritRoverPhotosKeys.list,
    RoverPhotosPageAttr
  >
): UseQueryResult<RoverPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: spiritRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverPhotosPageAttr>(
        SPIRIT_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

const useSpiritRoverLatestPhotos = (
  filters?: UseRoverPhotosFilters,
  options?: CustomQueryOptions<
    typeof spiritRoverPhotosKeys.list,
    RoverLatestPhotosPageAttr
  >
): UseQueryResult<RoverLatestPhotosPageAttr> => {
  const apiRequest = useFetch();

  return useQuery({
    ...options,
    queryKey: spiritRoverPhotosKeys.list(filters),
    queryFn: async ({ signal }) => {
      const response = await apiRequest.get<RoverLatestPhotosPageAttr>(
        SPIRIT_LATEST_PHOTOS_BASE_URL as string,
        {
          params: { ...filters, api_key: DEMO_API_KEY },
          signal,
        }
      );

      return response.data;
    },
  });
};

export {
  useCuriosityRoverLatestPhotos,
  useCuriosityRoverPhotos,
  useOpportunityRoverLatestPhotos,
  useOpportunityRoverPhotos,
  useSpiritRoverLatestPhotos,
  useSpiritRoverPhotos,
};

export type { RoverPhoto };
