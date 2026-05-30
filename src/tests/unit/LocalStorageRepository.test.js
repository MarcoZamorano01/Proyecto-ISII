import LocalStorageRepository
    from "../../repositories/LocalStorageRepository";

describe(
    "Repository",
    () => {

        test(
            "debe guardar datos",
            () => {

                const repository =
                    new LocalStorageRepository(
                        "test"
                    );

                repository.create({
                    name: "Juan"
                });

                const data =
                    repository.getAll();

                expect(
                    data.length
                ).toBe(1);
            }
        );
    }
);