import "../../styles/HomePage.css";

function HomePage() {

    const careers = [
        {
            title: "Ingeniería de Sistemas",
            description: "Desarrollo de software, IA, bases de datos y tecnología.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
        {
            title: "Medicina",
            description: "Cuidado de la salud, diagnóstico y tratamiento de pacientes.",
            image: "data:image/jpeg;base64,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",
        },
        {
            title: "Administración de Empresas",
            description: "Gestión, finanzas, liderazgo y emprendimiento.",
            image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        },
        {
            title: "Diseño Gráfico",
            description: "Creatividad visual, branding y experiencia digital.",
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
        },
        {
            title: "Psicología",
            description: "Estudio del comportamiento humano y salud mental.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
        },
        {
            title: "Derecho",
            description: "Leyes, justicia y asesoría legal profesional.",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        }
    ];

    return (

        <div className="home-container">

            {/* HERO */}
            <div className="hero">

                <h1>🎓 Bienvenido Estudiante</h1>

                <p>
                    Descubre carreras universitarias y encuentra tu vocación ideal
                </p>

            </div>

            {/* GRID DE CARRERAS */}
            <div className="careers-grid">

                {careers.map((c, index) => (

                    <div className="career-card" key={index}>

                        <img src={c.image} alt={c.title} />

                        <div className="career-content">

                            <h3>{c.title}</h3>

                            <p>{c.description}</p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default HomePage;