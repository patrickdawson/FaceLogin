import { Injectable } from '@angular/core';
import {CordovaService} from "./cordova.service";

const NATIVESTORAGE_LOG: string = "logs";

@Injectable()
export class ActionLogService {
  authlogs: Array<string> = [];

  constructor(private cordova: CordovaService) {
    this.cordova.NativeStorage.getItem(NATIVESTORAGE_LOG)
    .then(logs => this.authlogs = logs);
  }

  addLog(message: string) {
    console.log(`## ${message}`);
    return this.cordova.NativeStorage.getItem(NATIVESTORAGE_LOG)
    .then((logs) => {
      logs.push(message);
      this.authlogs = logs;
      return logs;
    }, () => {
      return [message];
    })
    .then(logs => this.cordova.NativeStorage.setItem(NATIVESTORAGE_LOG, logs));
  }
}
