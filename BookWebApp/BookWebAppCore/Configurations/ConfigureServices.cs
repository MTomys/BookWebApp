using BookWebAppCore.Data;
using BookWebAppCore.Interfaces;
using BookWebAppCore.Repositories;
using BookWebAppCore.Services;
using Microsoft.EntityFrameworkCore;

namespace BookWebAppCore.Configurations
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IBookRepository, BookRepository>();
            services.AddScoped<IBookAuthorRepository, BookAuthorRepository>();
            services.AddScoped<IBookService, BookService>();
            services.AddScoped<IBookAuthorService, BookAuthorService>();

            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });

            return services;
        }
    }
}
