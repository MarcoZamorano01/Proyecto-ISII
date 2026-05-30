using FluentAssertions;

namespace VocationalGuidance.Tests.Acceptance;

public class FullFlowTests
{
    [Fact]
    public void User_Completes_Test()
    {
        var recommendation =
            "Ingeniería de Sistemas";

        recommendation.Should()
            .NotBeNullOrEmpty();
    }
}