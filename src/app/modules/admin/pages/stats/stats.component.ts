import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../core/services/admin.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats: any;
  statsData: any;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getStats()
      .subscribe(res => {
        this.stats = res;
        this.getStatsData();
      }, err => {
        console.log(err);
      })
  }

  getStatsData(): void {
    // for (const [i, value] of this.stats.entries()) {
    //   this.statsData[i].name = 'averageBill';
    //   this.statsData[i].value = value.averageBill;
    //   this.statsData[i].name = 'profit';
    //   this.statsData[i].value = value.profit;
    //   this.statsData[i].name = 'marginality';
    //   this.statsData[i].value = value.marginality;
    //   this.statsData[i].name = 'salesVolume';
    //   this.statsData[i].value = value.salesVolume;
    // }
    console.log(this.statsData);
  }

}
