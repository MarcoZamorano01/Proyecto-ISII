using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.DTOs;

using VocationalGuidance.API.Services;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController
    : ControllerBase
{
    private readonly AuthService _service;

    public AuthController(
        AuthService service)
    {
        _service = service;
    }

    [HttpPost("register")]
    public async Task<IActionResult>
        Register(RegisterDto dto)
    {
        await _service.Register(dto);

        return Ok(
            new
            {
                message =
                "Usuario registrado"
            });
    }

    [HttpPost("login")]
    public async Task<IActionResult>
Login(LoginDto dto)
    {
        var result =
            await _service.Login(dto);

        if (result == null)
            return Unauthorized();

        return Ok(result);
    }
}