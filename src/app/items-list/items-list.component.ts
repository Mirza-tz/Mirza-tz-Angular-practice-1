import { Component } from '@angular/core';
import { List } from '../models/list';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit {



newAppointmentTitle: string = "";
newAppointmentDate: Date = new Date();
items: List[] = [] 

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      let savedAppointments = localStorage.getItem("appointments");
      this.items = savedAppointments ? JSON.parse(savedAppointments) : [];
    }
  }


addAppointment() {
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
    let newAppointment: List = {
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }
    this.items.push(newAppointment)

    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date;

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("appointments", JSON.stringify(this.items));
    }

    
  }
}

deleteAppointment(index: number) {
this.items.splice(index, 1)
  localStorage.setItem("appointments", JSON.stringify(this.items))
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem("appointments", JSON.stringify(this.items));
  }
}

 
};


