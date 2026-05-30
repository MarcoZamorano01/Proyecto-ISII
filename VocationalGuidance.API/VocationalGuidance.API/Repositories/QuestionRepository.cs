using Microsoft.EntityFrameworkCore;
using VocationalGuidance.API.Data;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Repositories;

public class QuestionRepository
    : IRepository<Question>
{
    private readonly ApplicationDbContext _context;

    public QuestionRepository(
        ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Question>> GetAllAsync()
    {
        return await _context.Questions.ToListAsync();
    }

    public async Task<Question?> GetByIdAsync(
        int id)
    {
        return await _context.Questions
            .FindAsync(id);
    }

    public async Task AddAsync(
        Question entity)
    {
        _context.Questions.Add(entity);

        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(
        Question entity)
    {
        _context.Questions.Update(entity);

        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(
        int id)
    {
        var entity =
            await _context.Questions
                .FindAsync(id);

        if (entity == null)
            return;

        _context.Questions.Remove(entity);

        await _context.SaveChangesAsync();
    }
}