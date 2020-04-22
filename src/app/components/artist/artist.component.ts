import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"],
})
export class ArtistComponent {
  artist: any = {};
  tracks: any[] = [];
  loading: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private service: SpotifyService,
    private location: Location
  ) {
    this.router.params.subscribe((params) => {
      this.getArtist(params["id"]);
      this.getTopTracks(params["id"]);
    });
  }
  getArtist(id: string) {
    this.service.getArtist(id).subscribe((response) => {
      this.artist = response;
    });
  }
  getTopTracks(artistId: string) {
    this.service.getTopTracks(artistId).subscribe((response) => {
      console.log(response);
      this.tracks = response;
      this.loading = false;
    });
  }
  goBack() {
    this.location.back();
  }
}
