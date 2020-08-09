using Microsoft.EntityFrameworkCore;

namespace Indecision_App
{
    public class AppDbContent: DbContext
    {
        public AppDbContent(DbContextOptions<AppDbContent> options): base(options) { }
        public DbSet<Option> Options { get; set; }
    }
}
