import { PageNotFoundComponent } from './page-not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { MaterialModule } from 'src/app/material.module';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<PageNotFoundComponent>;
  const createComponent = createTestComponentFactory({
    component: PageNotFoundComponent,
    imports: [RouterTestingModule, TranslateModule.forRoot(), MaterialModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
