import {
    Link
}
    from "react-router-dom";

function Navbar() {

    return (

        <nav>

            <Link to="/">
                Dashboard
            </Link>

            {" | "}

            <Link
                to="/users"
            >
                Usuarios
            </Link>

            {" | "}

            <Link
                to="/questions"
            >
                Preguntas
            </Link>

            {" | "}

            <Link
                to="/tests"
            >
                Tests
            </Link>

            {" | "}

            <Link
                to="/vocational-test"
            >
                Evaluación
            </Link>

            {" | "}

            <Link
                to="/results"
            >
                Resultados
            </Link>

        </nav>
    );
}

export default Navbar;