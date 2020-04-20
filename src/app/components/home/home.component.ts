import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];

  constructor(private service: SpotifyService) {
    this.service.getNewReleases().subscribe((response: any) => {
      this.newSongs = response;
    });
  }

  ngOnInit(): void {}
}
