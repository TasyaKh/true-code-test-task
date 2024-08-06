import axiosInstance from "./axiosInstance";
import {IComment} from "../types/types";

export const getComments = async ():Promise<IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>(`/wp-json/wp/v2/comments`);
    return data;
};
