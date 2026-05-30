import LocalStorageRepository
    from "../repositories/LocalStorageRepository";

const repository =
    new LocalStorageRepository("tests");

const testService = {

    getAll: () =>
        repository.getAll(),

    create: (test) =>
        repository.create(test),

    update: (id, test) =>
        repository.update(id, test),

    delete: (id) =>
        repository.delete(id),
};

export default testService;