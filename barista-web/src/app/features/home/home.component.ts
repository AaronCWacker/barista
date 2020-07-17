import { Component, OnInit } from '@angular/core';

import { AuthService, AuthServiceStatus } from '@app/features/auth/auth.service';
import { StatsApiService } from '@app/shared/api/api/stats-api.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private statsApi: StatsApiService) {}

  /* Data Variables */
  isLoggedIn: boolean;
  topComponentLicenseData: any;
  topComponentScansData: any;
  projectsAddedMonthly: any;
  monthlyProjectScans: any;
  highVulnerability: any;
  licenseOnCompliance: any;
  low: number = 0.25;
  med: number = 0.50;
  high: number = 0.75;

  /**
   * All initialization of the datasets & graphs occurs here.
   * Handles subscribing of data async's into data vars.
   */
  ngOnInit(): void {
    this.isLoggedIn = AuthService.isLoggedIn;

    this.statsApi.statsComponentsGet().subscribe((response) => {
      this.topComponentLicenseData = response;
    });

    this.statsApi.statsComponentsScansGet().subscribe((response) => {
      this.topComponentScansData = response;
    })

    this.statsApi.statsProjectsGet().subscribe((response) => {
      response = this.parseMonth(response);
      this.projectsAddedMonthly = response;
    })

    this.statsApi.statsProjectsScansGet().subscribe((response) => {
      response = this.parseMonth(response);
      this.monthlyProjectScans = response;
    })

    this.statsApi.statsHighVulnerabilityGet().subscribe((response) => {
      var displayName = this.displaySeverity(response);
      this.highVulnerability = [{"name": displayName, "value": response}];
    })

    this.statsApi.statsLicenseOnComplianceGet().subscribe((response) => {
      var displayName = this.displaySeverity(response);
      this.licenseOnCompliance = [{"name": displayName, "value": response}];
    })

    }

    displaySeverity(n: any){
      if(n < this.low){ return 'LOW' }
      else if(n < this.med){ return 'MEDIUM' }
      else if(n < this.high){ return 'HIGH' }
      else { return 'CRITICAL' }
    }

    parseMonth(data: any){
      for (var item of data){
        switch (item.name.substring(5, 7)) {
          case "01": {
            item.name = "Jan" + " '" + item.name.substring(2, 4);
            break;
          }
          case "02": {
            item.name = "Feb" + " '" + item.name.substring(2, 4);
            break;
          }
          case "03": {
            item.name = "Mar" + " '" + item.name.substring(2, 4);
            break;
          }
          case "04": {
            item.name = "Apr" + " '" + item.name.substring(2, 4);
            break;
          }
          case "05": {
            item.name = "May" + " '" + item.name.substring(2, 4);
            break;
          }
          case "06": {
            item.name = "Jun" + " '" + item.name.substring(2, 4);
            break;
          }
          case "07": {
            item.name = "Jul" + " '" + item.name.substring(2, 4);
            break;
          }
          case "08": {
            item.name = "Aug" + " '" + item.name.substring(2, 4);
            break;
          }
          case "09": {
            item.name = "Sep" + " '" + item.name.substring(2, 4);
            break;
          }
          case "10": {
            item.name = "Oct" + " '" + item.name.substring(2, 4);
            break;
          }
          case "11": {
            item.name = "Nov" + " '" + item.name.substring(2, 4);
            break;
          }
          case "12": {
            item.name = "Dec" + " '" + item.name.substring(2, 4);
            break;
          }
          default: {
            item.name = "Unknown" + " '" + item.name.substring(2, 4);
            break;
          }
        }
      }

      return data;
    }
}
