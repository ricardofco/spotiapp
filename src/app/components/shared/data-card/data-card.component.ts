import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-data-card",
  templateUrl: "./data-card.component.html",
  styleUrls: ["./data-card.component.css"],
})
export class DataCardComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  showDetails(item: any) {
    let artistId: string;
    if (item.type === "artist") {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(["/artist", artistId]);
  }
}
