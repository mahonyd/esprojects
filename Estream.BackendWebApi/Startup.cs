using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Estream.BackendWebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Get AppSettings configuration
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));

            services.AddAuthorization(options =>
            {
                options.AddPolicy("api2Admin", policyAdmin =>
                {
                    policyAdmin.RequireClaim("role", "api2.admin");
                });
                options.AddPolicy("api2User", policyUser =>
                {
                    policyUser.RequireClaim("role", "api2.user");
                });

            });

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IOptions<AppSettings> settings)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            {
                Authority = settings.Value.BaseUrls.Auth,
                AllowedScopes = new List<string> { "api2" },
                ApiSecret = "api2Secret",
                ApiName = "api2",

                RequireHttpsMetadata = false
            });

            app.UseMvc();
        }
    }
}
