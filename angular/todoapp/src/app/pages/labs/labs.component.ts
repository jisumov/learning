import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ]
  name = 'José';
  age = 23;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'José',
    age: 23,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola!');
  }

  changeHandler(event: Event) {
    console.log(event);
  }
}
