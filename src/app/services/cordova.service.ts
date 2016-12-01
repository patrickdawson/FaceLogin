import { Injectable } from '@angular/core';

declare var NativeStorage: any;
declare var navigator: any;

@Injectable()
export class CordovaService {
  onDeviceReady: Promise<any>;
  NativeStorage: any;
  camera: any;

  constructor() {
    // onDeviceReady
    this.onDeviceReady = new Promise<any>((resolve, reject) => {
      document.addEventListener("deviceready", () => {
        resolve();
      }, false);
    });

    // NativeStorage
    this.NativeStorage = {
      setItem: (key, value) => this.onDeviceReady
        .then(() => new Promise((resolve, reject) => NativeStorage.setItem(key, value, resolve, reject))),
      getItem: (key) => this.onDeviceReady
        .then(() => new Promise((resolve, reject) => NativeStorage.getItem(key, resolve, reject))),
      removeItem: (key) => this.onDeviceReady
        .then(() => new Promise((resolve, reject) => NativeStorage.remove(key, resolve, reject)))
    };

    // Camera
    this.camera = {
      getPicture: () => this.onDeviceReady
        .then(() => new Promise((resolve, reject) => navigator.camera.getPicture(resolve, reject, {
          quality: 100,
          destinationType: 1, // FILE_URI
          cameraDirection: 1, // front camera
        })))
    };
  }
}
