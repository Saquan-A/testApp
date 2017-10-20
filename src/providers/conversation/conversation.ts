import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the ConversationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversationProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello ConversationProvider Provider');
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('bb6c0bb7-3e55-4f95-b407-6dfb667cf874:8kazFeMXqBWI'));


  }

  load(texts: string) {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }




  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    let workspace_id: string = '5f641ff8-945a-40ad-aeb0-198592cf9ea0';
    let username: string = 'bb6c0bb7-3e55-4f95-b407-6dfb667cf874';
    let password: string = '8kazFeMXqBWI';
  //  let urlSearchParams = new URLSearchParams();


  //  urlSearchParams.append('username', username);
  //  urlSearchParams.append('password', password);

    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    console.log(headers);
    //let payload: string = '{"input": "some text here!"}';
    //this.http.post('https://gateway.watsonplatform.net/conversation/api/'+workspace_id, urlSearchParams)
    this.http.post('https://gateway.watsonplatform.net/conversation/api/v1/workspaces/' + workspace_id + '/message/?version=2017-05-26', {input: {text: texts}}, {headers: headers})
    //this.http.get('https://gateway.watsonplatform.net/conversation/api/v1/workspaces/' + workspace_id + '/message')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);

      });
  });
}

}
