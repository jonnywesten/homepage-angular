import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {
  }

  public data;

  load(lang?) {
    this.http.get('https://code-smart.com/content/en.json')
      .toPromise()
      .then((res: any) => {
        this.data = res;
      });
  }
}
