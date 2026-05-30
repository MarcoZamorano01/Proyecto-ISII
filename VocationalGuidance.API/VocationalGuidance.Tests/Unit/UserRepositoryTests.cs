using FluentAssertions;

using Moq;

using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.Tests.Unit;

public class UserRepositoryTests
{
    [Fact]
    public async Task Should_Return_User()
    {
        var repository =
            new Mock<IRepository<User>>();

        repository.Setup(
            x => x.GetByIdAsync(1))
            .ReturnsAsync(
                new User
                {
                    Id = 1,
                    Name = "Juan"
                });

        var user =
            await repository.Object
                .GetByIdAsync(1);

        user.Should()
            .NotBeNull();

        user!.Name.Should()
            .Be("Juan");
    }
}