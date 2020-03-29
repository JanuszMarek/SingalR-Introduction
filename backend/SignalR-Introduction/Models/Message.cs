using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR_Introduction.Models
{
    public class Message
    {
        public string ClientUniqueId { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
    }
}
