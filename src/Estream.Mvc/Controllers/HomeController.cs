using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using Microsoft.Extensions.Options;
using System.Net.Http;
using Estream.Mvc.Extensions.System.Net.Http;
using Microsoft.Extensions.Logging;

namespace Estream.Mvc.Controllers
{
    
    public class HomeController : Controller
    {
        private readonly AppSettings _appSettings;
        private readonly ILogger<HomeController> _logger;

        public HomeController(IOptions<AppSettings> appSettings, ILogger<HomeController> logger)
        {
            _appSettings = appSettings.Value;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public async Task<IActionResult> Secure()
        {
            ViewBag.IdentityToken = await HttpContext.Authentication.GetTokenAsync("id_token");
            ViewBag.AccessToken = await HttpContext.Authentication.GetTokenAsync("access_token");
            ViewBag.RefreshToken = await HttpContext.Authentication.GetTokenAsync("refresh_token");

            return View();
        }

        [Authorize]
        public async Task<IActionResult> CallApi()
        {
            var accessToken = await HttpContext.Authentication.GetTokenAsync("access_token");

            var client = new HttpClient();
            client.SetBearerToken(accessToken);
            //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            try
            {
                var response = await client.GetStringAsync(_appSettings.BaseUrls.Api + "/identity");
                //ViewBag.Json = JArray.Parse(response).ToString();
                return Ok(JArray.Parse(response).ToString());

            }
            catch (HttpRequestException ex)
            {
                _logger.LogError($"Error calling API: {ex}");
                return StatusCode(403);
            }

        }

        [Authorize(Policy = "Administrator")]

        public IActionResult Admin()
        {
            ViewData["Message"] = "Your administration application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
