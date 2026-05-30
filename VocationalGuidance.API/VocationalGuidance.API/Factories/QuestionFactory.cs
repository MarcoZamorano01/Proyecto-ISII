using VocationalGuidance.API.Entities;

namespace VocationalGuidance.API.Factories;

public static class QuestionFactory
{
    public static Question Create(
        string text,
        string category)
    {
        return new Question
        {
            Text = text,
            Category = category
        };
    }
}