class RecommendationContext {

    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    execute(score) {
        return this.strategy.calculate(score);
    }
}

export default RecommendationContext;