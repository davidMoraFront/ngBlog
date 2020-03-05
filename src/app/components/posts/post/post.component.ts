import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  public post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } = {
    id: "1",
    titlePost: "Post One",
    contentPost: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    imagePost: "https://picsum.photos/id/237/200/300"
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post.id = this.route.snapshot.params.id;
  }
}
