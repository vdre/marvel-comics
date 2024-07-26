import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class BackService {

  path = environment.path;


  constructor(
    private httpClient: HttpClient
  ) { }


  getResponse( optiosResponde: {method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', route:string, data?:object}): Promise<any>{
    return new Promise((resolve, reject)=>{
        const options:any = {
          body: optiosResponde.data,
        };
        this.httpClient.request(optiosResponde.method,this.path+optiosResponde.route, options)
        .subscribe({
          next: response => {
            resolve(response);
          },
          error: error => {
            reject(error);
          }
        })

    })
  }
}
