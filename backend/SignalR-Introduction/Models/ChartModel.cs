using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR_Introduction.Models
{
    public class ChartModel
    {
        public ChartModel()
        {
            Data = new List<int>();
        }

        public List<int> Data { get; set; }
        public string Label { get; set; }
    }
}
