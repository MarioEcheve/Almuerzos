import { Component, OnInit } from '@angular/core';
import { CentroCostosService } from 'app/services/centro-costos/centro-costos.service';
import { ICentroCostos } from 'app/models/centro-costos/centro-costos.model';
import { FormBuilder, Validators } from '@angular/forms';
import { TrabajadorService } from 'app/services/trabajador/trabajador.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  centroCostos: ICentroCostos[] = [];
  trabajadorForm = this.fb.group({
    rut: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    centroCostos: ['', Validators.required],
  });

  constructor(private centroCostosService: CentroCostosService, private fb: FormBuilder, private trabajadorService: TrabajadorService) {}

  ngOnInit() {
    this.listaCentroCostos();
  }
  listaCentroCostos() {
    this.centroCostosService.query().subscribe(res => {
      this.centroCostos = res.body;
    });
  }
  save() {
    this.trabajadorService
      .create({
        rut: this.trabajadorForm.get('rut')!.value,
        nombre: this.trabajadorForm.get('nombre')!.value,
        apellidos: this.trabajadorForm.get('apellidos')!.value,
        centroCostos: this.trabajadorForm.get('centroCostos')!.value,
      })
      .subscribe(
        trabajador => {
          this.showNotification('top', 'right');
          this.trabajadorForm.reset();
        },
        error => {
          this.showNotificationError('top', 'right');
        }
      );
  }
  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 2;

    $.notify(
      {
        icon: 'notifications',
        message: 'Trabajador Creado correctamente',
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
        message: 'Error Al crear al Trabajador',
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
