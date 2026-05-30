using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/questions")]
public class QuestionsController
    : ControllerBase
{
    private readonly QuestionRepository
        _repository;

    public QuestionsController(
        QuestionRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(
            await _repository.GetAllAsync());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(
        int id)
    {
        var question =
            await _repository.GetByIdAsync(id);

        if (question == null)
            return NotFound();

        return Ok(question);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> Create(
        Question question)
    {
        await _repository.AddAsync(question);

        return Ok(question);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(
        int id,
        Question question)
    {
        question.Id = id;

        await _repository.UpdateAsync(
            question);

        return NoContent();
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(
        int id)
    {
        await _repository.DeleteAsync(id);

        return NoContent();
    }
}