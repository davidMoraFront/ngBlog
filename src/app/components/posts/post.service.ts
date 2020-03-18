import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { PostI } from "src/app/shared/models/post.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private afs: AngularFirestore) {}

  public getAllPosts(): Observable<PostI[]> {
    return this.afs
      .collection("posts")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
