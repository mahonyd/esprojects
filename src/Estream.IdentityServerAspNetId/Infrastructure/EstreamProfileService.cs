using Estream.IdentityServerAspNetId.Models;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

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
            if (!context.AllClaimsRequested)
            {
                claims = claims.Where(claim => context.RequestedClaimTypes.Contains(claim.Type)).ToList();
            }

            // Add User Properties
            claims.Add(new System.Security.Claims.Claim(StandardScopes.Email.Name, user.Email));
            claims.Add(new System.Security.Claims.Claim(StandardScopes.Address.Name, user.Address));
            claims.Add(new System.Security.Claims.Claim(StandardScopes.Phone.Name, user.Mobile));
            claims.Add(new System.Security.Claims.Claim(StandardScopes.Profile.Name, user.FullName));

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
