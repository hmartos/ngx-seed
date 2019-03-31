import { ErrorHandlerService } from './error-handler.service';
import { NotifyService } from './notify.service';
import { createService } from '@netbasal/spectator';

describe('ErrorHandlerService', () => {
  const spectator = createService({
    service: ErrorHandlerService,
    mocks: [NotifyService]
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should handle connection errors (status 0)', () => {
    const indirectError = { status: 0, statusText: 'Connection Error' };
    const spyOnConsole = spyOn(console, 'error');

    spectator.service.handleRequestError(indirectError);

    expect(spyOnConsole).toHaveBeenCalledWith(
      'Connection error. Check URL and backend status.',
      indirectError
    );
  });

  it('should log to console type 500 errors', () => {
    const indirectError = { status: 500, statusText: 'Internal Server Error' };
    const spyOnConsole = spyOn(console, 'error');
    const notifyService = spectator.get<NotifyService>(NotifyService);

    spectator.service.handleRequestError(indirectError);

    expect(notifyService.notifyFailMsg).toHaveBeenCalledWith('internalServerError', true);
    expect(spyOnConsole).toHaveBeenCalledWith(
      'Internal server error, see logs or debug request on backend for further details',
      indirectError
    );
  });

  it('should log to console other errors', () => {
    const indirectError = {
      status: 2099,
      statusText: 'System under Alien attack',
    };
    const spyOnConsole = spyOn(console, 'error');
    const notifyService = spectator.get<NotifyService>(NotifyService);

    spectator.service.handleRequestError(indirectError);

    expect(notifyService.notifyFailMsg).toHaveBeenCalledWith('unexpectedError', true);
    expect(spyOnConsole).toHaveBeenCalledWith(
      'Unhandled response error status',
      indirectError
    );
  });
});
