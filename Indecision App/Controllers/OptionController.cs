using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Indecision_App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OptionController : ControllerBase
    {
        private readonly AppDbContent _context;
        public OptionController(AppDbContent context)
        {
            _context = context;
        }

        // GET: api/option
        [HttpGet]
        public async Task<List<Option>> Get()
        {
            return await _context.Options.ToListAsync();
        }

        // POST: api/option
        [HttpPost]
        public async Task<Option> Post([FromQuery]string optionName)
        {
            var option = new Option { Name = optionName };
            _context.Add(option);

            await _context.SaveChangesAsync();

            return option;
        }

        // DELETE: api/option
        [HttpDelete]
        public async Task Delete(int id)
        {
            var option = await _context.Options.FirstOrDefaultAsync(x => x.OptionId == id);
            _context.Remove(option);

            await _context.SaveChangesAsync();
        }

        // DELETE: api/option/DeleteAll
        [HttpDelete("[action]")]
        public async Task DeleteAll()
        {
            var options = await _context.Options.ToListAsync();
            _context.RemoveRange(options);

            await _context.SaveChangesAsync();
        }
    }
}
