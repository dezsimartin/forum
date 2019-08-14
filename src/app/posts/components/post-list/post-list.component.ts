import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : Array<Post> = [];

  constructor(private postService : PostService,
              private userService: UserService) { }

  ngOnInit() {
    this.postService.getAll().subscribe( (posts : Array<Post>) => {
      console.log(posts)
      this.posts = posts;
    });
  }

}
