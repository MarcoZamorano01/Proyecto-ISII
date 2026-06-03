namespace VocationalGuidance.API.DTOs;

public class ResultDto
{
    public int Id { get; set; }

    public string UserName { get; set; } = "";

    public string Category { get; set; } = "";

    public string Recommendation { get; set; } = "";

    public DateTime CreatedAt { get; set; }
}