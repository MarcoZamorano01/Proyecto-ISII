import axiosClient from "./axiosClient";

export const getQuestions = async () => {

    const response =
        await axiosClient.get(
            "/questions"
        );

    return response.data;
};

export const getCategories =
async () => {

    const response =
        await axiosClient.get(
            "/questions/categories"
        );

    return response.data;
};

export const getQuestionsByCategory =
async (category) => {

    const response =
        await axiosClient.get(
            `/questions/category/${category}`
        );

    return response.data;
};

export const createQuestion =
    async (question) => {

        const response =
            await axiosClient.post(
                "/questions",
                question
            );

        return response.data;
    };

export const deleteQuestion =
    async (id) => {

        await axiosClient.delete(
            `/questions/${id}`
        );
    };

export const getQuestionById =
    async (id) => {

        const response =
            await axiosClient.get(
                `/questions/${id}`
            );

        return response.data;
    };

export const updateQuestion =
    async (id, question) => {

        const response =
            await axiosClient.put(
                `/questions/${id}`,
                question
            );

        return response.data;
    };