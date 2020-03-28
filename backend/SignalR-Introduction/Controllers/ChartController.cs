using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR_Introduction.DataStorage;
using SignalR_Introduction.HubConfig;
using SignalR_Introduction.TimerFeature;

namespace SignalR_Introduction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : Controller
    {
        private IHubContext<ChartHub> hub;

        public ChartController(IHubContext<ChartHub> hub)
        {
            this.hub = hub;
        }

        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => hub.Clients.All.SendAsync("transferchartdata", DataManager.GetData()));

            return Ok();
        }
    }
}