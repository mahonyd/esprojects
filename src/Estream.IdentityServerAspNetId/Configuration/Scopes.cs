using IdentityServer4.Models;
using System.Collections.Generic;

namespace Estream.IdentityServerAspNetId.Configuration
{
    public class Scopes
    {
        public static IEnumerable<Scope> GetScopes()
        {
            return new List<Scope>
            {
                StandardScopes.OpenId,
                StandardScopes.Profile,
                StandardScopes.Email,
                StandardScopes.Address,
                StandardScopes.OfflineAccess,

                new Scope
                {
                    Name = "api1",
                    DisplayName = "My API 1",
                    Description = "My API 1",
                    Type = ScopeType.Resource
                },

                new Scope
                {
                    Name = "api2",
                    DisplayName = "My API 2",
                    Description = "My API 2",
                    Type = ScopeType.Resource
                }
            };
        }
    }
}
