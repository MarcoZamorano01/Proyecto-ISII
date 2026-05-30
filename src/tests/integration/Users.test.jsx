import {
    render,
    screen
}
    from "@testing-library/react";

import userEvent
    from "@testing-library/user-event";

import Users
    from "../../pages/Users";

describe(
    "Users",
    () => {

        test(
            "crear usuario",
            async () => {

                render(
                    <Users />
                );

                const input =
                    screen.getByRole(
                        "textbox"
                    );

                await userEvent.type(
                    input,
                    "Pedro"
                );

                await userEvent.click(
                    screen.getByText(
                        "Guardar"
                    )
                );

                expect(
                    screen.getByText(
                        "Pedro"
                    )
                ).toBeInTheDocument();

            }
        );
    }
);