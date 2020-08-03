import {Component, Input, OnInit} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {ThemePalette} from '@angular/material/core';
import {Search} from './models/search.model';
import {ApolloQueryResult} from 'apollo-client';

const CurrentUser = gql`
  query CurrentUser($name: String) {
    twitter {
      search(q: $name) {
        id
        created_at
        text
        user {
          screen_name
          name
          profile_image_url
        }
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  @Input()
  color: ThemePalette = 'primary';

  title = '';
  arrTweets: Search;
  ready: boolean;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.ready = false;
    this.doRequest();
  }

  showTweet(): void {
    this.ready = this.title !== '' && this.arrTweets !== undefined;
  }

  checkQuestion(): string {
    return this.title.toString();
  }

  doRequest(): void {
    this.apollo.watchQuery({
      query: CurrentUser,
      variables: {
        name: this.checkQuestion()
      }
    }).result().then( (data: ApolloQueryResult<Search>) => {
      return this.arrTweets = data.data;
    });

    this.showTweet();
  }
}
