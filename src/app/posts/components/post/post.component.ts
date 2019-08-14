import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  @Input() post : Post;
  public name : string;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUserById(this.post.userId).subscribe((user : User) => this.name = user.name);
  }

}
