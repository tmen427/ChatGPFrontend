import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  
  title = 'ChatGpt';
  ChatGpResponse: string = "";
  showProgressBar: boolean = false; 
  timeForSearch: number = 0; 
  panelOpenState: boolean = false; 
  warningmessage: boolean = false; 
  Subscription: any; 
  timeoutId: any; 

  constructor(private http:HttpService){}
    ngOnInit() {
     
    }

    search = new FormControl('');
    

    updateSearch() {
      this.ChatGpResponse = "";
      this.warningmessage = false; 
      this.timeForSearch = 0; 
      this.AskChatGp();   
    }

    clearSearch() {
      this.search.setValue("");
      this.ChatGpResponse = "";
      this.showProgressBar = false; 
      this.warningmessage = false; 
      this.timeForSearch = 0; 
      //unsubsribe immediatly here also 
      this.Subscription.unsubscribe(); 
      //stop the settimeout brelow from progressing
      clearTimeout(this.timeoutId); 
    }

    AskChatGp() {
      let search = this.search.value as string; 
      let searchBar = search.trim(); 
      let startTimeClock = Date.now(); 
   
       //if the searchbar has a value then do the search
    if (searchBar.length>0) {  
      this.showProgressBar = true; 
      
      this.Subscription = this.http.SearchBackend(searchBar).subscribe((response)=>{
        this.ChatGpResponse = response;
        
        //when you get a response reveal how long it took
      if (this.ChatGpResponse.length > 0) {
        this.showProgressBar = false; 
        let finalTimeClock = Date.now(); 
        let time = Math.floor((finalTimeClock-startTimeClock)/1000); 
        this.timeForSearch = time;  
        }
     });

     //cancel the request after 10 seconds,unless cancellation is pressed
    this.timeoutId = setTimeout(() => {
      this.warningmessage = true;   
      this.showProgressBar = false; 
      //unsubscribe if the response from the api takes too long 
        this.Subscription.unsubscribe(); 

    }, 20000);
    }
    
    }
}


