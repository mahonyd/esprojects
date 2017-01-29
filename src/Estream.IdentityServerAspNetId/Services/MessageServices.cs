using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Twilio;

namespace Estream.IdentityServerAspNetId.Services
{
    // This class is used by the application to send Email and SMS
    // when you turn on two-factor authentication in ASP.NET Identity.
    // For more details see this link http://go.microsoft.com/fwlink/?LinkID=532713
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        public AuthMessageSender(IOptions<AppSettings> settings)
        {
            _settings = settings;
        }

        private IOptions<AppSettings> _settings;

        public Task SendEmailAsync(string email, string subject, string message)
        {
            // Plug in your email service here to send an email.
            return Task.FromResult(0);
        }

        public async Task SendSmsAsync(string number, string message)
        {
            //var twilio = new Twilio.Clients.TwilioRestClient(
            //Options.SID,           // Account Sid from dashboard
            //Options.AuthToken);    // Auth Token

            //var twilioRequest = new Twilio.Http.Request(
            //Options.SID,           // Account Sid from dashboard
            //Options.AuthToken);    // Auth Token

            //var result = twilio.RequestAsync(Options.SendNumber, number, message);

            //return Task.FromResult(0);

            using (var client = new HttpClient())
            {
                var byteArray = Encoding.ASCII.GetBytes($"{_settings.Value.TwilioConfig.TwilioId}:{_settings.Value.TwilioConfig.TwilioToken}");
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                var content = new FormUrlEncodedContent(new[]
                {
                     //new KeyValuePair<string, string>("To",$"+91984XXXXXXX"),
                     new KeyValuePair<string, string>("To", $"{number}"),
                     new KeyValuePair<string, string>("From", _settings.Value.TwilioConfig.TwilioPhoneNumber),
                     new KeyValuePair<string, string>("Body", message)
                });

                await client.PostAsync(_settings.Value.TwilioConfig.TwilioUrl, content);
            }
        }
    }
}
