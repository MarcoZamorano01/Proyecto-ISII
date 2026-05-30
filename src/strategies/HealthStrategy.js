class HealthStrategy {

    calculate(score) {

        if (score >= 2)
            return "Psicología";

        return "Trabajo Social";
    }
}

export default HealthStrategy;