using FluentAssertions;
using VocationalGuidance.API.DTOs;
using VocationalGuidance.API.Services;

namespace VocationalGuidance.Tests.Unit;

public class RecommendationServiceTests
{
    private readonly RecommendationService _service =
        new RecommendationService();

    [Fact]
    public void Should_Return_Technology()
    {
        var dto = new TestRequestDto
        {
            TechnologyScore = 10,
            HealthScore = 2,
            DesignScore = 3
        };

        var result =
            _service.GenerateRecommendation(dto);

        result.Should()
            .Be("Ingeniería de Sistemas");
    }

    [Fact]
    public void Should_Return_Health()
    {
        var dto = new TestRequestDto
        {
            TechnologyScore = 1,
            HealthScore = 10,
            DesignScore = 2
        };

        var result =
            _service.GenerateRecommendation(dto);

        result.Should()
            .Be("Medicina");
    }

    [Fact]
    public void Should_Return_Design()
    {
        var dto = new TestRequestDto
        {
            TechnologyScore = 1,
            HealthScore = 2,
            DesignScore = 10
        };

        var result =
            _service.GenerateRecommendation(dto);

        result.Should()
            .Be("Diseño UX/UI");
    }
}