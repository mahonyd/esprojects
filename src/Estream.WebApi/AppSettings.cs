using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estream.WebApi
{
    public class AppSettings
    {
        public BaseUrls BaseUrls { get; set; }
    }

    public class BaseUrls
    {
        public string Api { get; set; }
        public string Auth { get; set; }
    }
}
