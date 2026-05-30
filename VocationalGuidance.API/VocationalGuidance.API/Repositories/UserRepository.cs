using Microsoft.EntityFrameworkCore;
using VocationalGuidance.API.Data;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Repositories;

public class UserRepository
    : IRepository<User>
{
    private readonly ApplicationDbContext _context;

    public UserRepository(
        ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<User>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<User?> GetByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task AddAsync(User user)
    {
        _context.Users.Add(user);

        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(User user)
    {
        _context.Users.Update(user);

        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var user =
            await _context.Users.FindAsync(id);

        if (user == null)
            return;

        _context.Users.Remove(user);

        await _context.SaveChangesAsync();
    }

    public async Task<User?> GetByEmailAsync(
    string email)
    {
        return await _context.Users
            .FirstOrDefaultAsync(
                x => x.Email == email);
    }
}