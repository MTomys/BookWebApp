namespace BookWebAppCore.Utils
{
    public class ServiceResult<T>
    {
        public T Data { get; init; }
        public bool IsOperationSuccessful { get; init; }
        public string OperationMessage { get; init; } 
    }
}
