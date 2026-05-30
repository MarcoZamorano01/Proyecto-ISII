using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Observers;

public class NotificationObserver
    : IObserver
{
    public void Update(
        string message)
    {
        Console.WriteLine(
            $"Notificación enviada: {message}");
    }
}