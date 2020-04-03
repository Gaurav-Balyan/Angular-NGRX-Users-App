import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { GetUsers } from './../../store/actions/user.actions';
import { IAppState } from '../../store/state/app.state';
import { selectUserList } from '../../store/selectors/user.selectors';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit(): void {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
