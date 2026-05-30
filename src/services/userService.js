import LocalStorageRepository
    from "../repositories/LocalStorageRepository";

const repository =
    new LocalStorageRepository("users");

const userService = {

    getAll: () =>
        repository.getAll(),

    getById: (id) =>
        repository.getById(id),

    create: (user) =>
        repository.create(user),

    update: (id, user) =>
        repository.update(id, user),

    delete: (id) =>
        repository.delete(id),
};

export default userService;