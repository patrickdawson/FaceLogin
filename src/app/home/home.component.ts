import { Component, OnInit } from '@angular/core';
import {ActionLogService} from "../services/action-log.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private actionLog: ActionLogService) { }

  ngOnInit() {
  }

}
