import axiosClient from "./axiosClient";

export const sendMessage = async (message) => {

    const response =
        await axiosClient.post(
            "/ai/chat",
            {
                message
            }
        );

    return response.data;
};