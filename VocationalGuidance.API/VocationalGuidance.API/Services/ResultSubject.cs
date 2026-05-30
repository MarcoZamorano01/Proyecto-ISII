using VocationalGuidance.API.Interfaces;

namespace VocationalGuidance.API.Services;

public class ResultSubject
    : ISubject
{
    private readonly List<IObserver>
        _observers = [];

    private string _message = "";

    public void Attach(
        IObserver observer)
    {
        _observers.Add(observer);
    }

    public void Detach(
        IObserver observer)
    {
        _observers.Remove(observer);
    }

    public void Notify()
    {
        foreach (var observer
                 in _observers)
        {
            observer.Update(
                _message);
        }
    }

    public void SetResult(
        string message)
    {
        _message = message;

        Notify();
    }
}