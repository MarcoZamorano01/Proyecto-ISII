using Microsoft.EntityFrameworkCore;
using VocationalGuidance.API.Entities;

namespace VocationalGuidance.API.Data;

public class ApplicationDbContext
    : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users
    {
        get;
        set;
    }

    public DbSet<Question> Questions
    {
        get;
        set;
    }

    public DbSet<TestResult> Results
    {
        get;
        set;
    }
}