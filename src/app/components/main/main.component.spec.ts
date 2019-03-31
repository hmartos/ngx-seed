import { MaterialModule } from './../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main.component';
import { TranslateModule } from '@ngx-translate/core';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;
  const createComponent = createTestComponentFactory({
    component: MainComponent,
    imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
