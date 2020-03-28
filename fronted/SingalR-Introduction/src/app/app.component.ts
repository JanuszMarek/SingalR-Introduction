import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SingalR-Introduction';

  constructor(
    public signalRService: SignalRService,
    private httpClient: HttpClient
  ){}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.httpClient.get('http://localhost:5001/api/chart')
    .subscribe(res => {
      console.log('res');
    })
  }
}
