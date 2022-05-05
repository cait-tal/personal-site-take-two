import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme(theme: string) {
    document.body.removeAttribute("class");
    if(theme == 'dark') {
      document.body.classList.toggle("dark-theme");
    } 
    else if (theme == 'light') {
      document.body.classList.toggle("light-theme");
    }
    else if (theme == 'space') {
      document.body.classList.toggle("space-theme");
    } else if (theme == 'retro') {
      document.body.classList.toggle("retro-theme");
    }
    
  }

}
