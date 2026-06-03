import axiosClient from "./axiosClient";

export const getUsers = async () => {

    const response =
        await axiosClient.get(
            "/users"
        );

    return response.data;
};

export const getUserById =
    async (id) => {

        const response =
            await axiosClient.get(
                `/users/${id}`
            );

        return response.data;
    };
export const createUser =
    async (user) => {

        const response =
            await axiosClient.post(
                "/users",
                user
            );

        return response.data;
    };

export const updateUser =
    async (id, user) => {

        const response =
            await axiosClient.put(
                `/users/${id}`,
                user
            );

        return response.data;
    };

export const deleteUser =
    async (id) => {

        await axiosClient.delete(
            `/users/${id}`
        );
    };