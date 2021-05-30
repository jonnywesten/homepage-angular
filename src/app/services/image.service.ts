import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
  }

  public get(imgSrc: string) {
    return environment.backendUrl + '/img/' + imgSrc;
  }
}
