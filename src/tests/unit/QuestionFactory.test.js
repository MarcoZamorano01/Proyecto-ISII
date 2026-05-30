import QuestionFactory
    from "../../factories/QuestionFactory";

describe(
    "QuestionFactory",
    () => {

        test(
            "debe crear pregunta technology",
            () => {

                const result =
                    QuestionFactory.create(
                        "technology",
                        {
                            text:
                                "Programar"
                        }
                    );

                expect(
                    result.category
                ).toBe(
                    "technology"
                );

                expect(
                    result.icon
                ).toBe("💻");
            }
        );
    }
);