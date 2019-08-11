import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  appareilList = [
    {
      name: "Machine à laver",
      status: "allumé"
    },
    {
      name: "Machine à café",
      status: "veille"
    },
    {
      name: "Machine à pop-corn",
      status: "veille"
    },
    {
      name: "Machine à coudre",
      status: "éteint"
    }
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  onAllumer() {
    console.log("On allume tout !");
  }
}
