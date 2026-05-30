using VocationalGuidance.API.DTOs;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Factories;

namespace VocationalGuidance.API.Services;

public class QuestionService
{
    public Question CreateQuestion(
        CreateQuestionDto dto)
    {
        return QuestionFactory.Create(
            dto.Text,
            dto.Category);
    }
}