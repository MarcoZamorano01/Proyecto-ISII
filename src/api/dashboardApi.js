import axiosClient
from "./axiosClient";

export const getDashboardStats =
    async () => {

        const response =
            await axiosClient.get(
                "/dashboard"
            );

        return response.data;
    };