using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Text;
using VocationalGuidance.API.Data;
using VocationalGuidance.API.Repositories;
using VocationalGuidance.API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<VocationalAIService>();

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition(
        "Bearer",
        new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header
        });

    options.AddSecurityRequirement(
        new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference =
                        new OpenApiReference
                        {
                            Type =
                                ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                },
                Array.Empty<string>()
            }
        });
});

builder.Services.AddScoped<UserRepository>();

builder.Services.AddScoped<RecommendationService>();

builder.Services.AddScoped<QuestionService>();

builder.Services.AddScoped<AuthService>();

builder.Services.AddScoped<QuestionRepository>();

builder.Services.AddScoped<ResultRepository>();

builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
    {
        var connectionString =
            builder.Configuration.GetConnectionString(
                "DefaultConnection");

        options.UseMySql(
            connectionString,
            ServerVersion.AutoDetect(
                connectionString));
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "ReactPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters =
        new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,

            ValidateLifetime = true,

            ValidateIssuerSigningKey = true,

            IssuerSigningKey =
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(
                        builder.Configuration[
                        "Jwt:Key"]!))
        };
});

var app = builder.Build();

app.UseAuthentication();

app.UseAuthorization();

app.UseSwagger();

app.UseSwaggerUI();

app.UseCors("ReactPolicy");

app.MapControllers();

app.Run();