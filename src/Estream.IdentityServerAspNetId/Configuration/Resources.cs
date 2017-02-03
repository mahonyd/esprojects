using IdentityServer4.Models;
using System.Collections.Generic;

namespace Estream.IdentityServerAspNetId.Configuration
{
    public class Resources
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource("dataeventrecordsscope",new []{ "role", "admin", "user", "dataEventRecords", "dataEventRecords.admin" , "dataEventRecords.user" } ),
                new IdentityResource("securedfilesscope",new []{ "role", "admin", "user", "securedFiles", "securedFiles.admin", "securedFiles.user"} ),
                new IdentityResource("api1scope",new []{ "role", "admin", "user", "api1", "api1.admin", "api1.user" } ),
                new IdentityResource("api2scope",new []{ "role", "admin", "user", "api2", "api2.admin", "api2.user" } )
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("api1")
                {
                    ApiSecrets =
                    {
                        new Secret("api1".Sha256())
                    },
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "api1scope",
                            DisplayName = "Scope for api1 ApiResource"
                        }
                    },
                    UserClaims = { "role", "admin", "user", "api1", "api1.admin", "api1.user" }
                },
                new ApiResource("api2")
                {
                    ApiSecrets =
                    {
                        new Secret("api2".Sha256())
                    },
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "api2scope",
                            DisplayName = "Scope for api2 ApiResource"
                        }
                    },
                    UserClaims = { "role", "admin", "user", "api2", "api2.admin", "api2.user" }
                },
                new ApiResource("dataEventRecords")
                {
                    ApiSecrets =
                    {
                        new Secret("dataEventRecordsSecret".Sha256())
                    },
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "dataeventrecordsscope",
                            DisplayName = "Scope for the dataEventRecords ApiResource"
                        }
                    },
                    UserClaims = { "role", "admin", "user", "dataEventRecords", "dataEventRecords.admin", "dataEventRecords.user" }
                },
                new ApiResource("securedFiles")
                {
                    ApiSecrets =
                    {
                        new Secret("securedFilesSecret".Sha256())
                    },
                    Scopes =
                    {
                        new Scope
                        {
                            Name = "securedfilesscope",
                            DisplayName = "Scope for the securedFiles ApiResource"
                        }
                    },
                    UserClaims = { "role", "admin", "user", "securedFiles", "securedFiles.admin", "securedFiles.user" }
                }
            };
        }

        //public static IEnumerable<Scope> GetScopes()
        //{
        //    return new List<Scope>
        //    {
        //        StandardScopes.OpenId,
        //        StandardScopes.Profile,
        //        StandardScopes.Email,
        //        StandardScopes.Address,
        //        StandardScopes.OfflineAccess,

        //        new Scope
        //        {
        //            Name = "api1",
        //            DisplayName = "My API 1",
        //            Description = "My API 1",
        //            Type = ScopeType.Resource
        //        },

        //        new Scope
        //        {
        //            Name = "api2",
        //            DisplayName = "My API 2",
        //            Description = "My API 2",
        //            Type = ScopeType.Resource
        //        },
        //    };
        //}
    }
}
