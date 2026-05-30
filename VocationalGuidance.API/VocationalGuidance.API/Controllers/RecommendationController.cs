using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.DTOs;

using VocationalGuidance.API.Services;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/recommendation")]
public class RecommendationController
    : ControllerBase
{
    private readonly RecommendationService
        _service;

    public RecommendationController(
        RecommendationService service)
    {
        _service = service;
    }

    [HttpPost]
    public IActionResult Generate(
        TestRequestDto dto)
    {
        var recommendation =
            _service.GenerateRecommendation(
                dto);

        return Ok(
            new
            {
                recommendation
            });
    }
}