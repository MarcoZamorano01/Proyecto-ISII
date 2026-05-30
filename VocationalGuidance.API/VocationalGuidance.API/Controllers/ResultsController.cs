using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/results")]
public class ResultsController
    : ControllerBase
{
    private readonly ResultRepository
        _repository;

    public ResultsController(
        ResultRepository repository)
    {
        _repository = repository;
    }

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(
            await _repository.GetAllAsync());
    }

    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(
        int id)
    {
        var result =
            await _repository.GetByIdAsync(id);

        if (result == null)
            return NotFound();

        return Ok(result);
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Create(
        TestResult result)
    {
        result.CreatedAt =
            DateTime.UtcNow;

        await _repository.AddAsync(
            result);

        return Ok(result);
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(
        int id)
    {
        await _repository.DeleteAsync(id);

        return NoContent();
    }
}