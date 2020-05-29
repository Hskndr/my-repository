import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostI } from '../../shared/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) {

  }

  //Métodos
  public getAllPosts(): Observable<PostI[]> {
    return this.afs.
      collection('posts').
      snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ));
  }

  //Obtener un Post
  public getOnePost(id: PostI): Observable<PostI> {
    return this.afs.doc<PostI>(`post/${id}`).valueChanges();
  }
}
