class DesignStrategy {

    calculate(score) {

        if (score >= 2)
            return "Diseño UX/UI";

        return "Diseño Gráfico";
    }
}

export default DesignStrategy;