import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quoteObj: Object;

  quoteField: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getQuote().subscribe(qt => {
      //console.log(qt.quote);
      this.quoteObj = qt.quote;
      //console.log(this.quoteObj, " this is a test in dash component");
    },
  err=> {
    console.log(err);
    return false;
  })
  }

  onSubmitQuote(){
    var quote = this.quoteField;
    
    this.authService.setQuote(quote).subscribe(
      data => console.log(data)
    );

    window.location.reload();
  }

}