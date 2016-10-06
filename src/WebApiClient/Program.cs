using IdentityModel.Client;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebApiClient
{
    public class Program
    {
        public static void Main(string[] args)
        {
            MainAsync().Wait();

        }

        static async Task MainAsync()
        {
            // discover endpoints from metadata
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");

            // request token
            var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }

            Console.WriteLine(tokenResponse.Json);

            // call api
            var client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            var response = await client.GetAsync("http://localhost:5001/identity");
            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine(response.StatusCode);
            }

            var content = response.Content.ReadAsStringAsync().Result;
            Console.WriteLine(JArray.Parse(content));

            // request token
            var tokenClientForApiWithPwd = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
            var tokenResponseForApiWithPwd = await tokenClientForApiWithPwd.RequestResourceOwnerPasswordAsync("alice", "password", "api1");

            if (tokenResponseForApiWithPwd.IsError)
            {
                Console.WriteLine(tokenResponseForApiWithPwd.Error);
                return;
            }

            Console.WriteLine(tokenResponseForApiWithPwd.Json);

            var responseForApiWithPwd = await client.GetAsync("http://localhost:5001/identity");
            if (!responseForApiWithPwd.IsSuccessStatusCode)
            {
                Console.WriteLine(responseForApiWithPwd.StatusCode);
            }

            var contentForApiWithPwd = responseForApiWithPwd.Content.ReadAsStringAsync().Result;
            Console.WriteLine(JArray.Parse(contentForApiWithPwd));

            Console.WriteLine("\n\n");

        }
    }
}
