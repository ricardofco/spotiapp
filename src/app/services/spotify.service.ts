import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  //browse/new-releases?limit=20

  token: string =
    "BQDvWnk3tZ0pYnYY2RdnmytmoTe3n5oWZteCPDTyacanftSEiL5lP4uqIpEGn0u3cnfI5Y72vPioWxBTppT1l0QFZqVpRXg3Cw-KMpCN5MBju0YxxZ_FS3DnNbBrFsZARqiwgBN4rzEAKztHMjHRKrwZJeEErXA";
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

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(
      map((response) => response["artists"].items)
    );
  }
}
