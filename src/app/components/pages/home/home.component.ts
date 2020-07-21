import { Component, OnInit } from "@angular/core";
import { PostService } from "../../posts/post.service";
import { Observable } from "rxjs";
import { PostI } from "src/app/shared/models/post.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    // this.postSvc.getAllPosts().subscribe(res => console.log("POSTS", res));
    this.posts$ = this.postSvc.getAllPosts();
  }
}
