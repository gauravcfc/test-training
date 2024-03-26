import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass',
})
export class OverviewComponent implements OnInit {
  // fName: string | null = null;
  // lName = null;
  // phNumber = 0;
  // email = '';
  // isAgreed = false;

  overviewForm!: FormGroup;

  // fb: FormBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.overviewForm = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      phNumber: new FormControl(null),
      email: new FormControl(null),
      isAgreed: new FormControl(false),
    });
  }

  onSubmitForm(): void {
    console.log('for submitted!', this.overviewForm.value);

    // this.phNumber = 0;

    // console.log('lName', this.lName);
    // console.log('fname', this.fName);

    // pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}';
  }
}
