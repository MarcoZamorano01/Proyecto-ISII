using Microsoft.AspNetCore.Mvc;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserRepository _repository;

    public UsersController(
        UserRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(
            await _repository.GetAllAsync());
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        User user)
    {
        await _repository.AddAsync(user);

        return Ok(user);
    }
}