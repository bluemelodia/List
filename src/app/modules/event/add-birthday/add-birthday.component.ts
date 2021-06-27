import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CalendarType } from '../../../types/calendar/calendar.types';
import { HeaderLevel } from '../../../types/header.types';
import { 
  BirthdayCheck,
  BirthdayCheckboxes,
} from '../../../types/event.types';

import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrls: ['./add-birthday.component.css']
})
export class AddBirthdayComponent implements OnInit {
  birthdayChecks: BirthdayCheck[] = BirthdayCheckboxes;
  birthdayForm: FormGroup;
  headerLevel = HeaderLevel;

  public calendarType: CalendarType = CalendarType.Lunar;
  public submitted = false;

  constructor( 
    private fb: FormBuilder,
    private customValidator: ValidationService,
  ) { }

  ngOnInit(): void {
    /* Set the controls for the form. */
    this.birthdayForm = this.fb.group({
      name: [
        '', 
        [
          Validators.required,
          Validators.minLength(5),
          this.customValidator.nameValidator()
        ],
      ],
      date: this.fb.group({
        birthday: ['', [Validators.required]],
      }),
      lunar: this.fb.control(false),
      options: this.fb.array(this.birthdayChecks.map(
        (check: BirthdayCheck) => this.fb.control({ [check.id]: check.value }))
      )
    },
    { 
      updateOn: 'submit'
    });
  }

  /* returns the form controls of the form. */
  get birthdayFormControl() {
    return this.birthdayForm.controls;
  }

  get lunarFormControl() {
    return this.birthdayFormControl.lunar;
  }

  /* methods to get / set the checkbox values */
  private checkbox(index: number) {
    return this.birthdayFormControl.options?.value[index];
  }

  public checkboxValue(index: number): boolean {
    return !!Object.values(this.checkbox(index))[0];
  }

  private checkboxKey(index: number): string {
    return Object.keys(this.checkbox(index))[0];
  }

  public toggleLunarValue() {
    this.birthdayForm.get('lunar').patchValue(!this.lunarFormControl.value);
  }

  public toggleCheckbox(index: number) {
    const checkArray: FormArray = this.birthdayForm.get('options') as FormArray;
  
    let i: number = 0;
    checkArray.controls.forEach((item: FormControl) => {
        if (i === index) {
          item.patchValue({ [this.checkboxKey(index)]: !this.checkboxValue(index) });
        }
        i++;
      });
  }

  onSubmit(): void {
    this.submitted = true;
    console.log("===> is form valid: ", this.birthdayForm.valid, this.birthdayForm, this.birthdayForm.controls.options);
    console.log("===> name: ", this.birthdayForm.get('name').dirty, this.birthdayForm.get('name').touched);
  }
}
