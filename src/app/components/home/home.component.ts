import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean = true;
  errorMessage: string = "";
  error: boolean;

  constructor(private service: SpotifyService) {
    this.service.getNewReleases().subscribe(
      (response: any) => {
        this.newSongs = response;
        this.loading = false;
      },
      (err) => {
        this.errorMessage = err.error.error.message;
        this.error = true;
        this.loading = false;
      }
    );
  }
}
