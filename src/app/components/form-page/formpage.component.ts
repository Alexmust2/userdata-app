import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userData } from '../store/user-data.reducer';
import { addUserData} from '../store/user-data.actions'
import { Router } from '@angular/router';



@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {


  constructor (private router: Router ,private store: Store) {}


  userForm:userData = {
    name: '',
    email: '',
    theme: '',
    msg: ''
  }

  onReset() {
    this.userForm.email = ""
    this.userForm.name = ""
    this.userForm.theme = ""
    this.userForm.msg = ""

  }

  onSave() {
    if(this.userForm.email != "" && this.userForm.name != "" && this.userForm.theme != "" && this.userForm.msg != ""){
      this.store.dispatch(addUserData(this.userForm))
      this.router.navigate([""])
    } else {
      alert('Форма должна быть заполнена')
    }
  }

  ngOnInit(): void {

  }
}
