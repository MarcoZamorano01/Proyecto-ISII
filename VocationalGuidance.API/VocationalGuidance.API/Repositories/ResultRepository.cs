using Microsoft.EntityFrameworkCore;

using VocationalGuidance.API.Data;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Repositories;

public class ResultRepository
    : IRepository<TestResult>
{
    private readonly ApplicationDbContext
        _context;

    public ResultRepository(
        ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<TestResult>>
    GetAllAsync()
    {
        return await _context
            .Results
            .Include(x => x.User)
            .ToListAsync();
    }

public async Task<List<TestResult>>
    GetByUserIdAsync(int userId)
    {
        return await _context.Results
            .Where(x => x.UserId == userId)
            .OrderByDescending(x => x.CreatedAt)
            .ToListAsync();
    }

    public async Task<TestResult?>
        GetByIdAsync(int id)
    {
        return await _context.Results
            .FindAsync(id);
    }

    public async Task AddAsync(
        TestResult entity)
    {
        _context.Results.Add(entity);

        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(
        TestResult entity)
    {
        _context.Results.Update(entity);

        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(
        int id)
    {
        var entity =
            await _context.Results
                .FindAsync(id);

        if (entity == null)
            return;

        _context.Results.Remove(entity);

        await _context.SaveChangesAsync();
    }
}