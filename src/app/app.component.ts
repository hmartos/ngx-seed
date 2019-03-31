import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hmg-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ngx-seed';

  constructor(private readonly translate: TranslateService) {}

  ngOnInit() {
    // This language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }
}
