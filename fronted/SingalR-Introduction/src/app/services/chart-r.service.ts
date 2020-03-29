import { Injectable } from '@angular/core';
import { ChartModel } from '../models/chart-model';

import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class ChartRService {
  public data: ChartModel[];
  private hubConnection : signalR.HubConnection;
  public broadcastedData: ChartModel[];

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/chart')
                            .build();

    this.hubConnection.start()
          .then(() => console.log('Connection started'))
          .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }

  public broadcastChartData = () => {
    var tempData = this.data.map(obj => ({data: obj.data, label: obj.label}));
    this.hubConnection.invoke('broadcastchartdata', tempData)
    .catch(err => console.error(err));
  }
 
  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastchartdata', (data) => {
      this.broadcastedData = data;
    })
  }

  constructor() { }
}
