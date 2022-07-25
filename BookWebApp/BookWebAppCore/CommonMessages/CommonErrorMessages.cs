namespace BookWebAppCore.CommonMessages
{
    public class CommonErrorMessages
    {
        public static string GetServiceResultErrorMessage(Exception e)
        {
            return $"A server error occured, details: {e.Message}";
        }
    }
}
