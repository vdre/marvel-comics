import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from '../../core/service/back.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  @Output() optionAction = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private backService: BackService,
    private messageService: MessageService,
    private route: Router
  ) {
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      identification: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
  }

  create() {
    this.form.markAllAsTouched();
    if(this.form.invalid) {
      return;
    }
    this.backService.getResponse({
      method: 'POST',
      route: '/user/create-user',
      data: this.form.value
    }).then(response => {
      localStorage.setItem('user', JSON.stringify(response));
      this.route.navigate(['home'])
    }).catch(error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Atención',
        detail: `${error.error}`
      })
    })
  }

  sendOption() {
    this.form.untouched;
    this.optionAction.emit('login');
  }
}
