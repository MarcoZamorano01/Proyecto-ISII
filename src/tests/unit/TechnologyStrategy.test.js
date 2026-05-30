import TechnologyStrategy
    from "../../strategies/TechnologyStrategy";

describe(
    "TechnologyStrategy",
    () => {

        test(
            "debe recomendar ingeniería",
            () => {

                const strategy =
                    new TechnologyStrategy();

                const result =
                    strategy.calculate(5);

                expect(result)
                    .toBe(
                        "Ingeniería de Sistemas"
                    );
            }
        );
    }
);