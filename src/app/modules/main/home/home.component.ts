import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.commonService.getUser().subscribe((res) => {
      console.log("result....", res);
      
    });
  }

}
