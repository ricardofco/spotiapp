import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import {Location} from '@angular/common';

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"],
})
export class ArtistComponent {
  artist: any = {};
  loading: boolean = true;
  constructor(private router: ActivatedRoute, private service: SpotifyService, private location: Location) {
    this.router.params.subscribe((params) => {
      this.getArtist(params["id"]);
    });
  }
  getArtist(id: string) {
    this.service.getArtist(id).subscribe((response) => {
      console.log(response);
      this.artist = response;
      this.loading = false;
    });
  }
  goBack() {
    this.location.back();
  }
}
