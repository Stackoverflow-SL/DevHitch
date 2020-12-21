import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public baseUrl: string;
  public apiPath: string;
  constructor(private http: HttpClient) { }


  /**
   * Returns user object
   */
  public getProfileData(): Observable<User> {
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
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(true);
      }, 1000);
    });
  }

  /**
 * Delete user account
 */
  public deleteAccount(): Observable<User> {
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