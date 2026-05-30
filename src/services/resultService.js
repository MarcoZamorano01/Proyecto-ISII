import LocalStorageRepository
    from "../repositories/LocalStorageRepository";

const repository =
    new LocalStorageRepository(
        "results"
    );

const resultService = {

    getAll: () =>
        repository.getAll(),

    create: (result) =>
        repository.create(result)
};

export default resultService;