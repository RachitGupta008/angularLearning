import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  addNewServer(newServer : {name:string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: newServer.name,
      content: newServer.content
    });
  }

  addNewBluePrint(newBluePrint : {name:string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: newBluePrint.name,
      content: newBluePrint.content
    });
  }

}
