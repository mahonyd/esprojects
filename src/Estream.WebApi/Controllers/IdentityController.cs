using IdentityModel.Client;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Estream.WebApi.Controllers
{
    [Route("identity")]
    [Authorize]
    public class IdentityController : ControllerBase
    {
        private readonly AppSettings _appSettings;

        public IdentityController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Claim> claims = new List<Claim>();
            foreach (var c in User.Claims)
            {
                claims.Add(new Claim("API1: " + c.Type, c.Value));
            }

            //var api1Claims = new JsonResult(from c in User.Claims select new { c.Type, c.Value });

            var userToken = await HttpContext.Authentication.GetTokenAsync("access_token");
            var accessToken = DelegateAsync(userToken);

            var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken.Result.AccessToken);
            var response = await client.GetStringAsync(_appSettings.BaseUrls.BackendApi + "/backendidentity");

            List<Claim> api2Claims = JsonConvert.DeserializeObject<List<Claim>>(response, new ClaimConverter());
            foreach (var c in api2Claims)
            {
                claims.Add(new Claim("API2: " + c.Type, c.Value));
            }

            return new JsonResult(claims);
        }

        public async Task<TokenResponse> DelegateAsync(string userToken)
        {
            var disco = await DiscoveryClient.GetAsync(_appSettings.BaseUrls.Auth);

            var payload = new
            {
                token = userToken
            };

            // create token client
            var client = new TokenClient(disco.TokenEndpoint, "api1.client", "secret");

            // send custom grant to token endpoint, return response
            return await client.RequestCustomGrantAsync("delegation", "api2", payload);
        }
    }
}
