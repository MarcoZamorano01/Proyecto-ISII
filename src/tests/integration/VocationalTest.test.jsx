import {
    render,
    screen
}
    from "@testing-library/react";

import userEvent
    from "@testing-library/user-event";

import VocationalTest
    from "../../pages/VocationalTest";

describe(
    "Vocational Test",
    () => {

        test(
            "debe completar evaluación",
            async () => {

                render(
                    <VocationalTest />
                );

                const buttons =
                    screen.getAllByText(
                        "Sí"
                    );

                for (
                    let i = 0;
                    i < 6;
                    i++
                ) {

                    await userEvent.click(
                        screen.getByText(
                            "Sí"
                        )
                    );
                }

                expect(
                    screen.getByText(
                        "Resultado"
                    )
                ).toBeInTheDocument();
            }
        );
    }
);