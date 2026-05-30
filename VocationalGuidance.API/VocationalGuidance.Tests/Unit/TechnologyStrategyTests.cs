using FluentAssertions;
using VocationalGuidance.API.Strategies;

namespace VocationalGuidance.Tests.Unit;

public class TechnologyStrategyTests
{
    [Fact]
    public void Should_Return_Career()
    {
        var strategy =
            new TechnologyStrategy();

        strategy.RecommendCareer()
            .Should()
            .Be("Ingeniería de Sistemas");
    }
}