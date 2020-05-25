import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentroCostosService } from 'app/services/centro-costos/centro-costos.service';
declare var $: any;
@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.css'],
})
export class CentroCostosComponent implements OnInit {
  centroCostosForm = this.fb.group({
    codigo: ['', Validators.required],
    nombre: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private centroCostosService: CentroCostosService) {}

  ngOnInit(): void {}

  save() {
    this.centroCostosService
      .create({
        codigo: this.centroCostosForm.get('codigo')!.value,
        nombre: this.centroCostosForm.get('nombre')!.value,
      })
      .subscribe(
        centroCostos => {
          this.showNotification('top', 'right');
          this.centroCostosForm.reset();
        },
        error => {
          this.showNotificationError('top', 'right');
        }
      );
  }
  cancelar() {
    this.centroCostosForm.reset();
  }
  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 2;

    $.notify(
      {
        icon: 'notifications',
        message: 'Centro de Costos Creado correctamente',
      },
      {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align,
        },
        template:
          '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>',
      }
    );
  }

  showNotificationError(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 4;

    $.notify(
      {
        icon: 'notifications',
        message: 'Error Al crear al Centro de Costos',
      },
      {
        type: type[color],
        timer: 4000,
        placement: {
          from: from,
          align: align,
        },
        template:
          '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>',
      }
    );
  }
}
