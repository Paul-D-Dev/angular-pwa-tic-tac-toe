import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-btn',
  templateUrl: './install-btn.component.html',
  styleUrls: ['./install-btn.component.scss']
})
export class InstallBtnComponent implements OnInit {

  constructor() { }

  deferredPrompt;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }

  ngOnInit(): void {
  }

  // Methode Add To Home Screen
  a2hs(): any {
 // hide our user interface that shows our A2HS button
 this.showButton = false;
 // Show the prompt
 this.deferredPrompt.prompt();
 // Wait for the user to respond to the prompt
 this.deferredPrompt.userChoice
   .then((choiceResult) => {
     if (choiceResult.outcome === 'accepted') {
       console.log('User accepted the A2HS prompt');
     } else {
       console.log('User dismissed the A2HS prompt');
     }
     this.deferredPrompt = null;
   });
}



}
