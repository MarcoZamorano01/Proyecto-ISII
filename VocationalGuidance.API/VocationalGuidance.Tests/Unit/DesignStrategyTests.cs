using FluentAssertions;
using VocationalGuidance.API.Strategies;


namespace VocationalGuidance.Tests.Unit
{
    public class DesignStrategyTests
    {
        [Fact]
        public void Should_Return_Career()
        {
            var strategy =
                new DesignStrategy();

            strategy.RecommendCareer()
                .Should()
                .Be("Ingeniería de Sistemas");
        }
    }
}
