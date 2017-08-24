import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
  Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: 
  Street: {{address.street}}
  City: {{address.city}}
  State: {{address.state}}
  </p>
<h3>Hobies:</h3> {{hobbies}}

  
  `,
})
export class UserComponent  
{
   name = 'Narendra'; 
   email= "narendra@gmail.com"
   address= {
     street: `650 grassmere park`,
     city: `Nashville`,
     state: `TN`
   }
   hobbies:string[];

   constructor(){
       this.name = 'Naren';
       this.hobbies = ['Music','Painting','cricket'];
    }
    
  }
