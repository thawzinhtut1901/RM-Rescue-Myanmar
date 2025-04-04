import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../api";

export const useGetNews = () => 
    useQuery({
        queryKey: ["news"],
        queryFn: () => newsApi()
    })