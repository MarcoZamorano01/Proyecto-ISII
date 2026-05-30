using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;

using VocationalGuidance.API.Controllers;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.Tests.Unit;

public class QuestionsControllerTests
{
    [Fact]
    public async Task Should_Return_Questions()
    {
        var repository =
            new Mock<QuestionRepository>(null);

        var controller =
            new QuestionsController(
                repository.Object);

        var result =
            controller.GetType();

        result.Should()
            .NotBeNull();
    }
}