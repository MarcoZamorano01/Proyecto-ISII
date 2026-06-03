using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using VocationalGuidance.API.Data;
using VocationalGuidance.API.DTOs;

namespace VocationalGuidance.API.Controllers;

[ApiController]
[Route("api/dashboard")]
public class DashboardController
    : ControllerBase
{
    private readonly
        ApplicationDbContext
        _context;

    public DashboardController(
        ApplicationDbContext context)
    {
        _context = context;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet]
    public IActionResult GetStats()
    {
        var resultsByDate =
            _context.Results
                .AsEnumerable()
                .GroupBy(
                    r => r.CreatedAt
                        .ToString("yyyy-MM-dd"))
                .ToDictionary(
                    g => g.Key,
                    g => g.Count());

        var stats =
            new DashboardDto
            {
                TotalUsers =
                    _context.Users.Count(),

                TotalQuestions =
                    _context.Questions.Count(),

                TotalResults =
                    _context.Results.Count(),

                TotalCategories =
                    _context.Questions
                        .Select(
                            q => q.Category)
                        .Distinct()
                        .Count(),

                ResultsByCategory =
                    _context.Results
                        .GroupBy(
                            r => r.Category)
                        .Select(
                            g =>
                                new CategoryStatDto
                                {
                                    Category =
                                        g.Key,

                                    Count =
                                        g.Count()
                                })
                        .ToList(),

                ResultsByDate =
                    resultsByDate
            };

        return Ok(stats);
    }
}