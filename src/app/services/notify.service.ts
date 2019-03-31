import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class NotifyService {
  private readonly _config: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 0,
    panelClass: '',
  };
  snackBarAction = 'OK';

  errorMsgDuration = 10000;
  successMsgDuration = 3000;

  constructor(
    public translate: TranslateService,
    public snackBar: MatSnackBar
  ) {
    this.translate.get('ok').subscribe(res => {
      this.snackBarAction = res;
    });
  }

  /**
   * Muestra una notificación internacionalizando el mensaje (opcionalmente con parámetros)
   * @param msg key del mensaje a internacionalizar
   * @param params parámetros del mensaje
   * @param type tipo de notificación (success, error, ...)
   * @param time tiempo antes de cerrar la notificación
   */
  public notify(msg: string, params: any, type: string, time: number) {
    this.translate.get(msg, params).subscribe(res => {
      this._config.duration = time;
      this._config.panelClass = type;

      this.snackBar.open(res, this.snackBarAction, this._config);
    });
  }

  /**
   * Muestra el mensaje de error de la respuesta de API en la propiedad msg si está definida
   * o un error genérico si la propiedad msg no está definida
   * @param msg mensaje a mostrar en la notificación
   * @param msgToTranslate indica si el mensaje se debe traducir o no
   */
  public notifyFailMsg(msg: string, msgToTranslate = true) {
    if (msgToTranslate) {
      this.notify(msg, null, 'error', this.errorMsgDuration);
    } else {
      this._config.duration = this.errorMsgDuration;
      this._config.panelClass = 'error';

      this.snackBar.open(msg, this.snackBarAction, this._config);
    }
  }

  /**
   * Muestra un mensaje cuando alguna acción se ha ejecutado de forma correcta
   * @param msg mensaje a mostrar en la notificación
   * @param params parámetros que se pasaran al traducir el mensaje
   */
  public notifySuccessMsg(msg: string, params: any = null) {
    this.notify(msg, params, 'success', this.successMsgDuration);
  }
}
