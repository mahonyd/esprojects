using System.Linq;
using System.Security.Claims;

namespace Estream.IdentityServerAspNetId.Extensions
{
    public static class EstreamUserPrincipalExtensions
    {
        public static string FirstName(this ClaimsPrincipal user)
        {
            if (user.Identity.IsAuthenticated)
            {
                return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.GivenName).Value;
            }

            return "";
        }

        public static string LastName(this ClaimsPrincipal user)
        {
            if (user.Identity.IsAuthenticated)
            {
                return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.Surname).Value;
            }

            return "";
        }

        public static string Address(this ClaimsPrincipal user)
        {
            if (user.Identity.IsAuthenticated)
            {
                return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.StreetAddress).Value;
            }

            return "";
        }

        public static string Mobile(this ClaimsPrincipal user)
        {
            if (user.Identity.IsAuthenticated)
            {
                return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.MobilePhone).Value;
            }

            return "";
        }

        public static string Country(this ClaimsPrincipal user)
        {
            if (user.Identity.IsAuthenticated)
            {
                return user.Claims.FirstOrDefault(v => v.Type == ClaimTypes.Country).Value;
            }

            return "";
        }
    }
}