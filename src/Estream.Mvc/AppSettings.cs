﻿namespace Estream.Mvc
{
    public class AppSettings
    {
        public BaseUrls BaseUrls { get; set; }
    }

    public class BaseUrls
    {
        public string Api { get; set; }
        public string Auth { get; set; }
        public string Mvc { get; set; }
    }
}
