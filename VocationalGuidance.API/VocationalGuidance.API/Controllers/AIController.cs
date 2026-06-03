using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.DTOs;
using VocationalGuidance.API.Services;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/ai")]
public class AIController
    : ControllerBase
{
    private readonly VocationalAIService
        _service;

    public AIController(
        VocationalAIService service)
    {
        _service = service;
    }


    [HttpPost("chat")]
    public async Task<IActionResult> Chat(
        ChatRequestDto dto)
    {
        var response =
            await _service.AskAsync(
                dto.Message);

        return Ok(
            new ChatResponseDto
            {
                Response = response
            });
    }
}