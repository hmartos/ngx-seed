import { Injectable } from '@angular/core';
import { NotifyService } from './notify.service';

@Injectable()
export class ErrorHandlerService {
  constructor(public notifyService: NotifyService) {}

  /**
   * Request error handler.
   * Handles backend errors like connection error and various request status codes.
   */
  handleRequestError(error) {
    if (error instanceof Error) {
      // Client-side error
      console.error('An error occurred in the frontend', error);
    } else {
      // Backend error
      if (error.status === 0) {
        // Connection error
        console.error('Connection error. Check URL and backend status.', error);
      } else {
        // Other error (403, 500, ...)
        console.error('An error occurred in the backend', error);
        switch (error.status) {
          case 500:
            this.notifyService.notifyFailMsg('internalServerError', true);

            console.error(
              'Internal server error, see logs or debug request on backend for further details',
              error
            );
            break;
          default:
            this.notifyService.notifyFailMsg('unexpectedError', true);

            console.error('Unhandled response error status', error);
            break;
        }
      }
    }
  }
}
