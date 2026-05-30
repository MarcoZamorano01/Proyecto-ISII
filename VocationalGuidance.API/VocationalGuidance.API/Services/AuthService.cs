using BCrypt.Net;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using VocationalGuidance.API.DTOs;
using VocationalGuidance.API.Entities;
using VocationalGuidance.API.Repositories;

namespace VocationalGuidance.API.Services;

public class AuthService
{
    private readonly IConfiguration _configuration;

    private readonly UserRepository _repository;

    public AuthService(
        IConfiguration configuration,
        UserRepository repository)
    {
        _configuration = configuration;
        _repository = repository;
    }

    public async Task Register(
        RegisterDto dto)
    {
        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            PasswordHash =
                BCrypt.Net.BCrypt.HashPassword(
                    dto.Password),

            Role = "Student"
        };

        await _repository.AddAsync(user);
    }

    public async Task<string?> Login(
        LoginDto dto)
    {
        var user =
            await _repository
            .GetByEmailAsync(dto.Email);

        if (user == null)
            return null;

        var valid =
            BCrypt.Net.BCrypt.Verify(
                dto.Password,
                user.PasswordHash);

        if (!valid)
            return null;

        return GenerateToken(user);
    }

    private string GenerateToken(
        User user)
    {
        var key =
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    _configuration["Jwt:Key"]!));

        var credentials =
            new SigningCredentials(
                key,
                SecurityAlgorithms.HmacSha256);

        var claims =
            new[]
            {
                new Claim(
                    ClaimTypes.NameIdentifier,
                    user.Id.ToString()),

                new Claim(
                    ClaimTypes.Email,
                    user.Email),

                new Claim(
                    ClaimTypes.Role,
                    user.Role)
            };

        var token =
            new JwtSecurityToken(
                claims: claims,
                expires:
                    DateTime.Now.AddDays(1),
                signingCredentials:
                    credentials);

        return new JwtSecurityTokenHandler()
            .WriteToken(token);
    }
}