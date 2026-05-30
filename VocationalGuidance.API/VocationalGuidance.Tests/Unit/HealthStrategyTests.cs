using FluentAssertions;
using VocationalGuidance.API.Strategies;

namespace VocationalGuidance.Tests.Unit
{
    public class HealthStrategyTests
    {
        [Fact]
        public void Should_Return_Career()
        {
            var strategy =
                new HealthStrategy();

            strategy.RecommendCareer()
                .Should()
                .Be("Psicologia");
        }
    }
}
