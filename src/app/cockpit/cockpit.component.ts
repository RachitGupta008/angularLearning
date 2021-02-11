import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElements = [];
  @Output() newServer = new EventEmitter<{name: string, content: string}>();
  @Output() newBluePrint = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverName: HTMLInputElement) {
    this.newServer.emit({
      name: serverName.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.newBluePrint.emit({
      name: serverName.value,
      content: this.newServerContent
    });
  }

}
