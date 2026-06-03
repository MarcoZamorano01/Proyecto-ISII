import axiosClient from "./axiosClient";

export const saveResult =
    async (result) => {

        const response =
            await axiosClient.post(
                "/results",
                result
            );

        return response.data;
    };

export const createResult =
    async (data) => {

        const response =
            await axiosClient.post(
                "/results",
                data
            );

        return response.data;
    };

export const getResults =
    async () => {

        const response =
            await axiosClient.get(
                "/results"
            );

        return response.data;
    };

export const getMyResults =
    async () => {

        const response =
            await axiosClient.get(
                "/results/my-results"
            );

        return response.data;
    };