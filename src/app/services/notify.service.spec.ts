import { NotifyService } from './notify.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createService } from '@netbasal/spectator';

describe('NotifyService', () => {
  const spectator = createService({
    service: NotifyService,
    imports: [MatSnackBarModule, TranslateModule.forRoot(), NoopAnimationsModule]
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should call notify method', () => {
    const translateService = spectator.get<TranslateService>(TranslateService);
    const spyGetTranslation = spyOn(translateService, 'get').and.callThrough();
    const matSnackBar = spectator.get<MatSnackBar>(MatSnackBar);
    const spyOpenSnackBar = spyOn(matSnackBar, 'open').and.callThrough();
    
    spectator.service.notify('unexpectedError', null, 'error', 5000);

    expect(spyGetTranslation).toHaveBeenCalled();
    expect(spyOpenSnackBar).toHaveBeenCalledWith('unexpectedError', 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: 'error',
    });
  });

  it('should call notifyFailMsg method', () => {
    const notifyService = spectator.get<NotifyService>(NotifyService);
    const spyNotify = spyOn(notifyService, 'notify').and.callThrough();

    spectator.service.notifyFailMsg('errorMessage');

    expect(spyNotify).toHaveBeenCalledWith('errorMessage', null, 'error', 10000);
  });

  it('should call notifySuccessMsg method', () => {
    const notifyService = spectator.get<NotifyService>(NotifyService);
    const spyNotify = spyOn(notifyService, 'notify').and.callThrough();

    spectator.service.notifySuccessMsg('successMessage');

    expect(spyNotify).toHaveBeenCalledWith('successMessage', null, 'success', 3000);
  });
});
