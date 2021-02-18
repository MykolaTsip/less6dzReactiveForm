import {Component} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ALL
  // myForm: FormGroup;

//   // 1
// email: FormControl = new FormControl('');
//
// constructor() {
// this.myForm = new FormGroup({
//   email: this.email,
//   password: new FormControl('')
// });
// }

  // // 2
  // constructor() {
  //   this.myForm = new FormGroup({
  //     email: new FormControl([''], [Validators.email, Validators.required]),
  //     password: new FormControl([''], [Validators.required])
  //   });
  // }


//   // 3
// constructor(private formBuilder: FormBuilder) {
// this.myForm =  formBuilder.group({
//   email: ['', [Validators.email, Validators.required]],
//   password: ''
// });
// }


//   // 4
// constructor() {
// this.myForm = new FormGroup({
//   email: new FormControl('', [Validators.required, Validators.email, Validators.min(4)]),
//   password: new FormControl('', [Validators.required, Validators.min(4)]),
//   confirmPass: new FormControl('', [Validators.required, Validators.min(4)])
// },
//   this.confPass.bind(this));
// }
//
//
// confPass(form: FormGroup): null | object {
//   const {value: password} = form.controls.password;
//   const {value: confirmPass} = form.controls.confirmPass;
//   return password === confirmPass ? null : {errConfPass: true};
// }


  // ALL
//   show(myForm: FormGroup): void {
//     console.log(myForm);
//   }


  registForm: FormGroup;

  constructor() {
    this.registForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required])
    },
     this.validatorsForm.bind(this),
      this.confirmPass.bind(this)
    );
  }

  validatorsForm(form: FormGroup): null | object {

    const {value: login} = form.controls.login;

    // const {value: pass} = form.controls.pass;
    // const  {value: confirmPass} = form.controls.confirmPass;

    if (login.length < 5 ) {
      return {lessFive: true};
    }
    else if (login.length > 10 ) {
      return {moreTen: true};
    }
   // else if (pass === confirmPass) {
   //    return {passErr: true};
   //  }

    else {
      return null;
    }
  }

  confirmPass(form: FormGroup): null | object {

    const {value: pass} = form.controls.pass;
    const {value: confirmPass} = form.controls.confirmPass;
    return pass === confirmPass ? null : {errConfPass: true};
  }

  registData(registForm: FormGroup): void {
    console.log(registForm);
  }
}
