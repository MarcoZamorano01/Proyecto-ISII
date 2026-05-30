using FluentAssertions;
using VocationalGuidance.API.Factories;

namespace VocationalGuidance.Tests.Unit;

public class QuestionFactoryTests
{
    [Fact]
    public void Should_Create_Question()
    {
        var question =
            QuestionFactory.Create(
                "¿Te gusta programar?",
                "Technology");

        question.Should().NotBeNull();

        question.Text.Should()
            .Be("¿Te gusta programar?");

        question.Category.Should()
            .Be("Technology");
    }

    [Fact]
    public void Should_Assign_Category()
    {
        var question =
            QuestionFactory.Create(
                "¿Te gusta diseñar?",
                "Design");

        question.Category.Should()
            .Be("Design");
    }
}