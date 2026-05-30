using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Observers;

public class DashboardObserver
    : IObserver
{
    public void Update(
        string message)
    {
        Console.WriteLine(
            $"Dashboard actualizado: {message}");
    }
}