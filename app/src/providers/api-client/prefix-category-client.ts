import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BaseApiClient } from './base-api-client';
import { PrefixCategory } from './models'

@Injectable()
export class PrefixCategoryClient extends BaseApiClient {

  private resourceName: string;

  constructor(protected http: Http) {
    super(http);

    this.resourceName = "/prefix-categories";
  }

  _allPrefixCategories: Array<PrefixCategory> = new Array<PrefixCategory>(
    // new PrefixCategory({
    //   id: 1,
    //   name: 'Pessoal'
    // }),
    // new PrefixCategory({
    //   id: 2,
    //   name: 'Motivacional'
    // })
  );

  getAll(): Promise<PrefixCategory[]> {
    var url = `${this.BaseUrl}${this.resourceName}`;
    console.log('GET ' + url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as PrefixCategory[])
      .catch(this.handleError);
  }

  get(id: number): Promise<PrefixCategory[]> {
    return this.http.get(`${this.BaseUrl}${this.resourceName}/${id}`)
      .toPromise()
      .then(response => response.json() as PrefixCategory[])
      .catch(this.handleError);
  }
}
