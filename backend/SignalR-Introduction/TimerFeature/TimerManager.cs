using System;
using System.Threading;

namespace SignalR_Introduction.TimerFeature
{
    public class TimerManager
    {
        private Timer timer;
        private AutoResetEvent autoResetEvent;
        private Action action;

        public DateTime TimerStarted { get; set; }

        public TimerManager(Action action)
        {
            this.action = action;
            this.autoResetEvent = new AutoResetEvent(false);
            this.timer = new Timer(Execute, autoResetEvent, 1000, 2000);
            TimerStarted = DateTime.Now;
        }

        public void Execute(object stateInfo)
        {
            action();

            if((DateTime.Now - TimerStarted).Seconds > 60)
            {
                timer.Dispose();
            }
        }
    }
}
