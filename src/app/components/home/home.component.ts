import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../store/user-data.selector';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private store: Store){}

  dataFilled = false

  name = ''
  email = ''
  theme = ''
  msg = ''

  users$ = this.store.select(selectUser).subscribe((data) => {
    this.name = data.name
    this.email = data.email
    this.theme = data.theme
    this.msg = data.msg
    if (data.name, data.email, data.theme, data.msg != ""){
      this.dataFilled = true
    }
  })


  ngOnInit(): void {
    console.log(this.dataFilled)
  }

}
