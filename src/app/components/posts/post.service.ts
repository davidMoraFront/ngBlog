import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { PostI } from "src/app/shared/models/post.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private postsColletion: AngularFirestoreCollection<PostI>;

  constructor(private afs: AngularFirestore) {
    this.postsColletion = afs.collection<PostI>("posts");
  }

  public getAllPosts(): Observable<PostI[]> {
    return this.postsColletion.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as PostI;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  public getOnePost(id: PostI): Observable<PostI> {
    return this.afs.doc<PostI>(`posts/${id}`).valueChanges();
  }

  public deletePostById(post: PostI) {
    return this.postsColletion.doc(post.id).delete();
  }

  public updatePostById(post: PostI) {
    return this.postsColletion.doc(post.id).update(post);
  }
}
