using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HL.YahooWeather;

namespace rainygarden.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        [HttpGet("[action]")]
        public async Task<Weather> GetWeather(string Query = "Stockholm")
        {
            YahooWeather w = await YahooWeather.LoadAsync(Query);
            Weather Result = new Weather()
            {
                location = w.Location.ToString()
            };
            foreach (var forecast in w.Forecasts)
            {
                var F = new Forecast()
                {
                    Key = Result.Forecasts.Count + 1,
                    HighC = forecast.High,
                    LowC = forecast.Low,
                    Summary = forecast.Text,
                    Date = forecast.Date
                };
                Result.Forecasts.Add(F);
            }
            return Result;
        }

        public class Weather
        {
            public string location { get; set; }
            public List<Forecast> Forecasts { get; set; } = new List<Forecast>();
        }
        public class Forecast
        {
            public int Key { get; set; }
            public int HighC { get; set; }
            public int LowC { get; set; }
            public int HighF
            {
                get
                {
                    return 32 + (int)(HighC / 0.5556);
                }
            }
            public int LowF
            {
                get
                {
                    return 32 + (int)(LowC / 0.5556);
                }
            }
            public string Summary { get; set; }
            public DateTime Date { get; set; }
        }
    }
}