namespace Estream.IdentityServerAspNetId
{
    public class AppSettings
    {
        public BaseUrls BaseUrls { get; set; }
        public TwilioConfig TwilioConfig { get; set; }
    }

    public class BaseUrls
    {
        public string Api { get; set; }
        public string Auth { get; set; }
        public string Mvc { get; set; }
        public string JSClient { get; set; }
    }

    public class TwilioConfig
    {
        public string TwilioUrl { get; set; }
        public string TwilioId { get; set; }
        public string TwilioToken { get; set; }
        public string TwilioPhoneNumber { get; set; }
    }
    
}
