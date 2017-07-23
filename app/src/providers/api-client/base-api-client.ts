import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseApiClient {
  protected BaseUrl: string;

  constructor(protected http: Http) {
    this.BaseUrl = "/api";
    //this.BaseUrl = "http://localhost:3000/api/v1";
    //this.BaseUrl = "http://bluebird.ikecode.com.br/api/v1";
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
