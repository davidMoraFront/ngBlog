import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { PostService } from "src/app/components/posts/post.service";
import { PostI } from "../../models/post.interface";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["titlePost", "tagsPost", "actions"];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.postSvc
      .getAllPosts()
      .subscribe(posts => (this.dataSource.data = posts));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditPost(post: PostI) {
    console.log("Edit", post);
  }

  onDeletePost(post: PostI) {
    console.log("Delete", post);
  }

  onNewPost() {
    console.log("New Post");
  }
}
