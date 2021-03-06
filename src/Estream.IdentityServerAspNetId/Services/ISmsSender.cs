﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estream.IdentityServerAspNetId.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
