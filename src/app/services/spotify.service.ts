import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  //browse/new-releases?limit=20

  token: string =
    "BQAOyLquZTXRrEUoKmodBYZlY9J-qBLB3svavUEwdeDOpCJnvZYYW4GJsfC7it_oCi63Y_UWT3uGhh2N2VLk5Q4OoYf0WVN-BRMOqbqh3cm_IyqTZfJUpzWYElTw3DhoZxPLQhAfpqizJdLaPefjU36Mpo4j58s";
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const apiURL: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(apiURL, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((response) => response["albums"].items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(
      map((response) => response["artists"].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
