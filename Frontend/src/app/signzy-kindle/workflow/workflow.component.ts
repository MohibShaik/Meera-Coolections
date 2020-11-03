import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent implements OnInit {
  public open: boolean;
  public user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.open = true;
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  public signOut(): void {
    this.router.navigate(['']).then((res) => {
      window.location.reload(true);
    });
  }
}
