import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  artists: any[] = [];
  timer: any = null;
  WAIT_INTERVAL: number = 1000;
  constructor(private service: SpotifyService) {}

  search(value: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.triggerChange(value),
      this.WAIT_INTERVAL
    );
  }
  triggerChange = (value: string) => {
    if (value.length > 0) {
      this.service.getArtist(value).subscribe((response) => {
        this.artists = response;
        console.log(this.artists);
      });
    } else {
      this.artists = [];
    }
  };
}
