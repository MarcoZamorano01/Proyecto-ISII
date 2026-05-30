class QuestionFactory {

    static createTechnology(question) {

        return {
            ...question,
            category: "technology",
            icon: "💻"
        };
    }

    static createHealth(question) {

        return {
            ...question,
            category: "health",
            icon: "🧠"
        };
    }

    static createDesign(question) {

        return {
            ...question,
            category: "design",
            icon: "🎨"
        };
    }

    static create(type, question) {

        switch (type) {

            case "technology":
                return this.createTechnology(question);

            case "health":
                return this.createHealth(question);

            case "design":
                return this.createDesign(question);

            default:
                return question;
        }
    }
}

export default QuestionFactory;