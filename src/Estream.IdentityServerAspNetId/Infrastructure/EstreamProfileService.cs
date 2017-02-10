using Estream.IdentityServerAspNetId.Models;
using IdentityModel;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using static IdentityServer4.IdentityServerConstants;

namespace Estream.IdentityServerAspNetId.Infrastructure
{
    public class EstreamProfileService : IProfileService
    {
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _claimsFactory;
        private readonly UserManager<ApplicationUser> _userManager;

        public EstreamProfileService(UserManager<ApplicationUser> userManager,
            IUserClaimsPrincipalFactory<ApplicationUser> claimsFactory)
        {
            _userManager = userManager;
            _claimsFactory = claimsFactory;
        }

        // not virtual or abstract, therefore not overridable
        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var sub = context.Subject.GetSubjectId();

            var user = await _userManager.FindByIdAsync(sub);
            var principal = await _claimsFactory.CreateAsync(user);

            var claims = principal.Claims.ToList();
            claims = claims.Where(claim => context.RequestedClaimTypes.Contains(claim.Type)).ToList();

            // Add User Properties
            claims.Add(new Claim(StandardScopes.Email, user.Email));
            claims.Add(new Claim(StandardScopes.Address, user.Address));
            claims.Add(new Claim(StandardScopes.Phone, user.Mobile));
            claims.Add(new Claim(StandardScopes.Profile, user.FullName));

            claims.Add(new Claim(JwtClaimTypes.GivenName, user.UserName));

            if (user.IsAdmin)
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "admin"));
            }
            else
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "user"));
            }

            if (user.DataEventRecordsRole == "dataEventRecords.admin")
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "dataEventRecords.admin"));
                claims.Add(new Claim(JwtClaimTypes.Role, "dataEventRecords.user"));
                claims.Add(new Claim(JwtClaimTypes.Role, "dataEventRecords"));
                claims.Add(new Claim(JwtClaimTypes.Scope, "dataEventRecords"));
            }
            else
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "dataEventRecords.user"));
                claims.Add(new Claim(JwtClaimTypes.Role, "dataEventRecords"));
                claims.Add(new Claim(JwtClaimTypes.Scope, "dataEventRecords"));
            }

            if (user.SecuredFilesRole == "securedFiles.admin")
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "securedFiles.admin"));
                claims.Add(new Claim(JwtClaimTypes.Role, "securedFiles.user"));
                claims.Add(new Claim(JwtClaimTypes.Role, "securedFiles"));
                claims.Add(new Claim(JwtClaimTypes.Scope, "securedFiles"));
            }
            else
            {
                claims.Add(new Claim(JwtClaimTypes.Role, "securedFiles.user"));
                claims.Add(new Claim(JwtClaimTypes.Role, "securedFiles"));
                claims.Add(new Claim(JwtClaimTypes.Scope, "securedFiles"));
            }

            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await _userManager.FindByIdAsync(sub);
            context.IsActive = user != null;
        }
    }
}
