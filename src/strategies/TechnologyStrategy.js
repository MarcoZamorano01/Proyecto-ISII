class TechnologyStrategy {

    calculate(score) {

        if (score >= 2)
            return "Ingeniería de Sistemas";

        return "Tecnología General";
    }
}

export default TechnologyStrategy;