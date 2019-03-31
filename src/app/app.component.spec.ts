import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  const createComponent = createTestComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule, TranslateModule.forRoot()]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'ngx-seed'`, () => {
    expect(spectator.component.title).toEqual('ngx-seed');
  });

  // it(`should set language as en`, () => {
  //   expect(TranslateService.currentLang.toEqual('en'));
  // });
});
