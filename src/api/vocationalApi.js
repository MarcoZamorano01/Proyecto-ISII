import axiosClient from "./axiosClient";

export const getQuestions =
    async () => {

        const response =
            await axiosClient.get(
                "/questions"
            );

        return response.data;
    };

export const submitVocationalTest =
    async (answers) => {

        const response =
            await axiosClient.post(
                "/results/evaluate",
                answers
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