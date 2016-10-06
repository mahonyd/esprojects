﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace Estream.IdentityServer.Models
{
    public class LoginViewModel : LoginInputModel
    {
        public LoginViewModel(HttpContext httpContext)
        {
            ExternalProviders = httpContext.Authentication.GetAuthenticationSchemes()
                .Where(x => x.DisplayName != null)
                .Select(x => new ExternalProvider {
                    DisplayName = x.DisplayName,
                    AuthenticationScheme = x.AuthenticationScheme
                });
        }

        public LoginViewModel(HttpContext httpContext, LoginInputModel other)
            : this(httpContext)
        {
            Username = other.Username;
            Password = other.Password;
            ReturnUrl = other.ReturnUrl;
        }

        public string ErrorMessage { get; set; }
        public IEnumerable<ExternalProvider> ExternalProviders { get; set; }
    }

    public class ExternalProvider
    {
        public string DisplayName { get; set; }
        public string AuthenticationScheme { get; set; }
    }
}