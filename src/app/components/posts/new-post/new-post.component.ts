import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostI } from "../../../shared/models/post.interface";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"]
})
export class NewPostComponent implements OnInit {
  private image: any;
  constructor(private postSvc: PostService) {}

  public newPostForm = new FormGroup({
    titlePost: new FormControl("", Validators.required),
    contentPost: new FormControl("", Validators.required),
    tagsPost: new FormControl("", Validators.required),
    imagePost: new FormControl("", Validators.required)
  });

  ngOnInit() {}

  addNewPost(data: PostI) {
    console.log("Data", data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
