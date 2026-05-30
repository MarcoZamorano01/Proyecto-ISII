namespace VocationalGuidance.API.Entities;

public class TestResult
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Recommendation { get; set; } = "";

    public string Category { get; set; } = "";

    public DateTime CreatedAt { get; set; }
}