import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean = false;
  timer: any = null;
  WAIT_INTERVAL: number = 1000;
  errorMessage: string = "";
  error: boolean;

  constructor(private service: SpotifyService) {}

  search(value: string) {
    if (value.length === 0) {
      this.loading = false;
      this.artists = [];
      return;
    }
    this.loading = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.triggerChange(value),
      this.WAIT_INTERVAL
    );
  }
  triggerChange = (value: string) => {
    this.service.getArtists(value).subscribe(
      (response) => {
        this.artists = response;
        this.loading = false;
      },
      (err) => {
        this.errorMessage = err.error.error.message;
        this.error = true;
        this.loading = false;
      }
    );
  };
}
