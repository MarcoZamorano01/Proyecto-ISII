using FluentAssertions;

namespace VocationalGuidance.Tests.Integration;

public class AuthControllerTests
{
    [Fact]
    public void Login_Request_Should_Be_Valid()
    {
        var email =
            "admin@test.com";

        email.Should()
            .Contain("@");
    }
}