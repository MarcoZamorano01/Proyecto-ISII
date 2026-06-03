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

    [HttpGet("categories")]
    public async Task<IActionResult>
    GetCategories()
    {
        var questions =
            await _repository.GetAllAsync();

        var categories =
            questions
            .Select(q => q.Category)
            .Distinct()
            .OrderBy(c => c)
            .ToList();

        return Ok(categories);
    }

    [HttpGet("category/{category}")]
    public async Task<IActionResult>
    GetByCategory(
        string category)
        {
        var questions =
            await _repository.GetAllAsync();

        var result =
            questions
            .Where(q =>
                q.Category
                .ToLower() ==
                category.ToLower())
            .ToList();

        return Ok(result);
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