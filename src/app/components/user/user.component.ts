import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Search} from '../../models/search.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input()
  twitter: Search;

  @Input()
  ready: boolean;

  constructor() {}

  isEmptyTwitter(): boolean {
    return this.ready;
  }
}
