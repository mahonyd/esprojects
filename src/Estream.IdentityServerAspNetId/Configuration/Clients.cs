using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static IdentityServer4.IdentityServerConstants;

namespace Estream.IdentityServerAspNetId.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "api1.client",
                    ClientName = "Delegated Api Client",

                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedGrantTypes = GrantTypes.List("delegation"),

                    AllowedScopes = new List<string>
                    {
                        "api2",
                        "api2scope"
                    }
                },

                new Client
                {
                    ClientId = "client",
                    ClientName = "Protected Api Client",

                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    // secret for authentication
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    // scopes that client has access to
                    AllowedScopes = new List<string>
                    {
                        "api1",
                        "api1scope"
                    }
                },

                new Client
                {
                    ClientId = "ro.client",
                    ClientName = "Protected Api Client with Password",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = new List<string>
                    {
                        "api1",
                        "api1scope"
                    }
                },

                // OpenID Connect implicit flow client (MVC)
                //new Client
                //{
                //    ClientId = "mvc",
                //    ClientName = "MVC Client",
                //    AllowedGrantTypes = GrantTypes.Implicit,

                //    // where to redirect to after login
                //    RedirectUris = new List<string>
                //    {
                //        "http://localhost:5002/signin-oidc"
                //    },

                //    // where to redirect to after logout
                //    PostLogoutRedirectUris = new List<string>
                //    {
                //        "http://localhost:5002"
                //    },

                //    AllowedScopes = new List<string>
                //    {
                //        StandardScopes.OpenId.Name,
                //        StandardScopes.Profile.Name
                //    }
                //}

                // OpenID Connect hybrid flow client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,

                    RequireConsent = true,

                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    RedirectUris = new List<string>
                    {
                        "http://localhost:5002/signin-oidc"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:5002"
                    },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "role",
                        "api1",
                        "api1scope",
                        "role"
                    },
                    AllowOfflineAccess = true

                },

                // JavaScript Client
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,

                    RedirectUris = new List<string>
                    {
                        "http://localhost:5003/callback.html"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:5003/index.html"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:5003"
                    },

                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId,
                        StandardScopes.Profile,
                        "api1"
                    }
                },

                new Client
                {
                    ClientName = "Angular 2 Client",
                    ClientId = "angular2client",
                    RequireConsent = false,
                    AccessTokenType = AccessTokenType.Reference,
                    //AccessTokenLifetime = 600, // 10 minutes, default 60 minutes
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string>
                    {
                        "http://localhost:5004"

                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:5004" + "/Unauthorized"
                    },
                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:5004"
                    },
                    AllowedScopes = new List<string>
                    {
                        "openid",
                        "dataEventRecords",
                        "dataeventrecordsscope",
                        "securedFiles",
                        "securedfilesscope",
                        "role"

                    }
                }

            };
        }
    }
}
