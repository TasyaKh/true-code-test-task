import axiosInstance from "./axiosInstance";

export const getMedia = async (id: number) => {
    const {data} = await axiosInstance.get(`/wp-json/wp/v2/media/${id}`);
    return data;
};
