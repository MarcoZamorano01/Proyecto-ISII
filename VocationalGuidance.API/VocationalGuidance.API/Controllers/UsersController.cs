using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserRepository _repository;

    public UsersController(
        UserRepository repository)
    {
        _repository = repository;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users =
            await _repository.GetAllAsync();

        return Ok(users);
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(
        int id)
    {
        var user =
            await _repository.GetByIdAsync(id);

        if (user == null)
        {
            return NotFound(
                "Usuario no encontrado");
        }

        return Ok(user);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> Create(
        User user)
    {
        await _repository.AddAsync(user);

        return CreatedAtAction(
            nameof(GetById),
            new { id = user.Id },
            user);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(
        int id,
        User user)
    {
        var existingUser =
            await _repository.GetByIdAsync(id);

        if (existingUser == null)
        {
            return NotFound(
                "Usuario no encontrado");
        }

        existingUser.Name =
            user.Name;

        existingUser.Email =
            user.Email;

        existingUser.Role =
            user.Role;

        await _repository.UpdateAsync(
            existingUser);

        return Ok(existingUser);
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(
        int id)
    {
        var existingUser =
            await _repository.GetByIdAsync(id);

        if (existingUser == null)
        {
            return NotFound(
                "Usuario no encontrado");
        }

        await _repository.DeleteAsync(id);

        return NoContent();
    }
}