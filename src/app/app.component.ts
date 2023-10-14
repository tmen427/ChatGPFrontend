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

  link: string = "https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/02/07/remarks-of-president-joe-biden-state-of-the-union-address-as-prepared-for-delivery/"


  constructor(private http:HttpService){}
    ngOnInit() {
     
    }

    search = new FormControl('');
    
    clickme() {
      this.link = "anchor tag is Clicked";
      return this.link;
    }
    

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

      // code for when the response timeouts 
      // console.log(this.ChatGpResponse.length)
      // if (this.ChatGpResponse.length===0) {
    
      //   let finalClock = Date.now(); 
      //   let time = Math.floor((finalClock-startTimeClock)/1000); 

      //   while (time>=2) {
      //   console.log('in the while loop')
      //     console.log(time)
      //   this.warningmessage = true;   
      //   this.showProgressBar = false; 
      //   //unsubscribe if the response from the api takes too long 
      //     this.Subscription.unsubscribe(); 
      //     break; 
      //   }
      // }


    }
    
    }
}


