import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export type ArticleType = {
  id: number;
  iconName: string;
  title: string;
  text: string;
};
export type ArticlesListType = [];

export function useArticles() {
  const { data, error, isLoading } = useSWR("/api/blog", fetcher);
  console.log(data);
  return {
    articles: data === undefined ? [] : JSON.parse(data),
    isLoading,
    isError: error,
  };
}
