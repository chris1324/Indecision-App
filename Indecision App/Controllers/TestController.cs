using Microsoft.AspNetCore.Mvc;
using System;

namespace Indecision_App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public object Get()
        {
            var random = new Random();

            return new { result = $"Test Api success : {random.Next(1, 100)}" };
        }
    }
}
