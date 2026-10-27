import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AccessLayout } from '../../layouts/access-layout';
const nonBlank = (control: AbstractControl): ValidationErrors | null =>
  String(control.value ?? '').trim() ? null : { blank: true };
const institutional = (control: AbstractControl): ValidationErrors | null => {
  const value = String(control.value ?? '');
  if (!value.trim()) return { blank: true };
  if (Validators.email(control) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return { email: true };
  return value.split('@')[1].toLowerCase() === 'upc.edu.pe' ? null : { domain: true };
};
@Component({
  selector: 'app-access',
  standalone: true,
  imports: [AccessLayout, RouterLink, ReactiveFormsModule],
  templateUrl: './access.html',
  styleUrl: './access.css',
})
export class Access {
  readonly register = !!inject(ActivatedRoute).snapshot.data['register'];
  submitted = false;
  message = '';
  visible: Record<string, boolean> = {};
  readonly form = new FormGroup({
    role: new FormControl('estudiante', { nonNullable: true, validators: [Validators.required] }),
    names: new FormControl('', { nonNullable: true, validators: this.register ? [nonBlank] : [] }),
    surnames: new FormControl('', {
      nonNullable: true,
      validators: this.register ? [nonBlank] : [],
    }),
    email: new FormControl('', { nonNullable: true, validators: [institutional] }),
    password: new FormControl('', { nonNullable: true, validators: [nonBlank] }),
    confirmation: new FormControl('', {
      nonNullable: true,
      validators: this.register ? [nonBlank] : [],
    }),
  });
  error(name: keyof typeof this.form.controls): string {
    const c = this.form.controls[name];
    if (!this.submitted && !c.touched) return '';
    if (c.hasError('blank'))
      return name === 'email'
        ? 'Ingresa tu correo institucional.'
        : 'Este campo es obligatorio y no puede contener solo espacios.';
    if (c.hasError('email')) return 'Ingresa un correo con formato válido.';
    if (c.hasError('domain')) return 'Usa el dominio exacto @upc.edu.pe.';
    if (name === 'confirmation' && c.value !== this.form.controls.password.value)
      return 'Las contraseñas no coinciden.';
    return '';
  }
  submit() {
    this.submitted = true;
    this.message = '';
    this.form.markAllAsTouched();
    if (
      this.form.invalid ||
      (this.register && this.form.controls.password.value !== this.form.controls.confirmation.value)
    )
      return;
    this.message =
      'Datos válidos. Esta práctica solo valida el formulario; no envía datos ni realiza autenticaciones o registros.';
    this.form.controls.password.reset();
    this.form.controls.confirmation.reset();
    this.submitted = false;
  }
}
