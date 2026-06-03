using System.Text;
using System.Text.Json;

namespace VocationalGuidance.API.Services;

public class VocationalAIService
{
    private readonly IConfiguration _configuration;

    public VocationalAIService(
        IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<string> AskAsync(
        string userMessage)
    {
        var apiKey =
            _configuration["Groq:ApiKey"];

        using var http =
            new HttpClient();

        http.DefaultRequestHeaders.Add(
            "Authorization",
            $"Bearer {apiKey}");

        var body = new
        {
            model = "llama-3.3-70b-versatile",
            messages = new[]
            {
                new
                {
                    role = "system",
                    content =
                    """
                    Eres un orientador vocacional.

                    Solo respondes preguntas sobre:
                    - carreras universitarias
                    - orientación académica
                    - profesiones
                    - habilidades
                    - aptitudes
                    """
                },
                new
                {
                    role = "user",
                    content = userMessage
                }
            }
        };

        var response =
            await http.PostAsync(
                "https://api.groq.com/openai/v1/chat/completions",
                new StringContent(
                    JsonSerializer.Serialize(body),
                    Encoding.UTF8,
                    "application/json"));

        var json =
            await response.Content
                .ReadAsStringAsync();

        using var doc =
            JsonDocument.Parse(json);

        return doc.RootElement
            .GetProperty("choices")[0]
            .GetProperty("message")
            .GetProperty("content")
            .GetString()
            ?? "";
    }
}