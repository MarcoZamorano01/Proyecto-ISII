namespace VocationalGuidance.API.Interfaces;

public interface ISubject
{
    void Attach(IObserver observer);

    void Detach(IObserver observer);

    void Notify();
}