import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public baseUrl: string;
  public apiPath: string;
  public fullUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiPath = environment.userApiPath;
    this.fullUrl = `${this.baseUrl}/${this.apiPath}`;
    console.log(this.fullUrl);
  }


  /**
   * Returns user object
   */
  public getProfileData(id: string): Observable<User> {
    const url = `${this.fullUrl}/${id}`;
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(userObject);
      }, 1000);
    });
  }

  /**
   * Updates users object
   */
  public updateProfileData(user: User): Observable<User> {
    const url = `${this.fullUrl}/update`;
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

  /**
 * Delete user account
 */
  public deleteAccount(id: string): Observable<User> {
    const url = `${this.fullUrl}/delete/${id}`;
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

  /**
* Updates user password
*/
  public updatePassword(): Observable<any> {
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

  /**
* Get users list
*/
  public getAllProfiles(): Observable<any> {
    const url = `${this.fullUrl}/list`;
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

}

export const userObject: User = new User(
  'U001',
  'Chamod',
  'Perera',
  'hcsperera@gmail.com',
  '',
  'https://avatars1.githubusercontent.com/u/19349315?s=460&u=0c5e235d9529fccdbfb37a31ed69655a6cd8dbb0&v=4',
  'Horana',
  [],
  'GCE'
);