import { ResponsiveBreakpoints } from './../../constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isMobile(): boolean {
    return (window.innerWidth < ResponsiveBreakpoints.MOBILE) ? true : false;
  }
 }
