import QuestionFactory
    from "../factories/QuestionFactory";

const defaultQuestions = [

    QuestionFactory.create(
        "technology",
        {
            text:
                "¿Te gusta programar?"
        }
    ),

    QuestionFactory.create(
        "technology",
        {
            text:
                "¿Te gustan las matemáticas?"
        }
    ),

    QuestionFactory.create(
        "health",
        {
            text:
                "¿Te gusta ayudar personas?"
        }
    ),

    QuestionFactory.create(
        "health",
        {
            text:
                "¿Te interesa la psicología?"
        }
    ),

    QuestionFactory.create(
        "design",
        {
            text:
                "¿Te gusta dibujar?"
        }
    ),

    QuestionFactory.create(
        "design",
        {
            text:
                "¿Te interesa el diseño gráfico?"
        }
    )
];

export default defaultQuestions;