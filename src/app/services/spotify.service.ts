import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  url: string = "https://api.spotify.com/v1/browse/new-releases?limit=20";
  token: string =
    "BQCxU8JdKyY3qpyZykh0hbg7ijdUWp01kPQJsFkO96FzNkOFYfp1t0oL6-QTk1vn3OiHxJtajl50BLBWNYD1Y2qxQUiPuMFEU9Y2ubkBHJEaZnAKECQPdfiM5VOJw_gv436hnLTqDQiiDt7LIsdh1pZG7rGwPfo";
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get(this.url, { headers });
  }
}
