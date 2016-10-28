using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;
using Microsoft.Extensions.Options;

namespace Estream.Mvc.Controllers
{
    
    public class HomeController : Controller
    {
        private readonly AppSettings _appSettings;

        public HomeController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
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
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            var response = await client.GetStringAsync(_appSettings.BaseUrls.Api + "/identity");

            ViewBag.Json = JArray.Parse(response).ToString();
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

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
