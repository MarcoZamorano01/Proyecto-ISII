namespace VocationalGuidance.API.DTOs;

public class DashboardDto
{
    public int TotalUsers { get; set; }

    public int TotalQuestions { get; set; }

    public int TotalResults { get; set; }

    public int TotalCategories { get; set; }


    public List<CategoryStatDto>
        ResultsByCategory
    {
        get;
        set;
    } = [];

    public Dictionary<string, int>
        ResultsByDate
    {
        get;
        set;
    } = new();
}

    public class CategoryStatDto
    {
        public string Category
        {
            get;
            set;
        } = "";

        public int Count
        {
            get;
            set;
        }
    }

    