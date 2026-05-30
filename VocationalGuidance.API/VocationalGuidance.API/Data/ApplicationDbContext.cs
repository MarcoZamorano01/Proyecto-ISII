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

    public DbSet<User> Users => Set<User>();

    public DbSet<Question> Questions => Set<Question>();

    public DbSet<TestResult> Results => Set<TestResult>();
}