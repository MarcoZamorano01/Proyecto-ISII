using FluentAssertions;
using VocationalGuidance.API.Observers;
using VocationalGuidance.API.Services;

namespace VocationalGuidance.Tests.Unit;

public class ObserverTests
{
    [Fact]
    public void Should_Create_Observer()
    {
        var subject =
            new ResultSubject();

        var dashboard =
            new DashboardObserver();

        subject.Attach(dashboard);

        subject.Should()
            .NotBeNull();
    }
}