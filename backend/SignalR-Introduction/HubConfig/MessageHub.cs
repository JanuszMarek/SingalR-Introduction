using Microsoft.AspNetCore.SignalR;
using SignalR_Introduction.Models;
using System.Threading.Tasks;

namespace SignalR_Introduction.HubConfig
{
    public class MessageHub: Hub
    {
        public async Task NewMessage(Message msg)
        {
            //test merga
            await Clients.All.SendAsync("messageReceived", msg);
            //comment
            //comment two
            //comment three
            //comment 4
            //Uczę się nowych rzeczy z mężusiem :D 
        }
    }
}
