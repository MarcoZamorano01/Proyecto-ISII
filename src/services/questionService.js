import LocalStorageRepository
    from "../repositories/LocalStorageRepository";

const repository =
    new LocalStorageRepository(
        "questions"
    );

const questionService = {

    getAll: () =>
        repository.getAll(),

    create: (question) =>
        repository.create(question),

    update: (id, question) =>
        repository.update(id, question),

    delete: (id) =>
        repository.delete(id),
};

export default questionService;