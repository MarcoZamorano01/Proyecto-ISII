using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VocationalGuidance.API.Migrations
{
    /// <inheritdoc />
    public partial class AddScoreToResults : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
    name: "Score",
    table: "Results",
    type: "int",
    nullable: false,
    defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
