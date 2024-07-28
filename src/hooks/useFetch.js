import useSWR from "swr";
import { fetcher } from "../lib/http";

export const useFetch = (url) => {
  return useSWR(url, fetcher);
};
