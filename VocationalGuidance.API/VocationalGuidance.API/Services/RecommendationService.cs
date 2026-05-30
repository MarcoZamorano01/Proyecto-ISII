using VocationalGuidance.API.DTOs;
using VocationalGuidance.API.Strategies;

namespace VocationalGuidance.API.Services;

public class RecommendationService
{
    public string GenerateRecommendation(
        TestRequestDto dto)
    {
        ICareerStrategy strategy;

        if (
            dto.TechnologyScore >
            dto.HealthScore &&
            dto.TechnologyScore >
            dto.DesignScore
        )
        {
            strategy =
                new TechnologyStrategy();
        }
        else if (
            dto.HealthScore >
            dto.DesignScore
        )
        {
            strategy =
                new HealthStrategy();
        }
        else
        {
            strategy =
                new DesignStrategy();
        }

        return strategy
            .RecommendCareer();
    }
}