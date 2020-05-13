import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';

export class DOMHelper<T> {
    private fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>) {
      this.fixture = fixture;
    }
  
    singleText(tagName: string): string {
      const htmlelement = this.fixture.debugElement.query(By.css(tagName));
      if (htmlelement) {
        return htmlelement.nativeElement.textContent;
      }
    }
  
    count(tagName: string): number {
      const htmlelement = this.fixture.debugElement.queryAll(By.css(tagName));
      if(htmlelement) {
        return htmlelement.length;
      }
    }
  
    specificText(tagName:string, text: string): number {
      const htmlelement = this.fixture.debugElement.queryAll(By.css(tagName));
      if(htmlelement) {
        debugger;
        return htmlelement.filter((element) => element.nativeElement.textContent === text).length;
      }
    }
  }