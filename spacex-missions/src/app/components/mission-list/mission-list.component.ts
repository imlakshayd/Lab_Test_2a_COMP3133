import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { SpacexApiService } from '../../services/spacex-api.service';
import { Launch } from '../../models/spacex-launch.model';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MissionFilterComponent
  ],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.scss'
})
export class MissionListComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private spacexApi: SpacexApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLaunches();
  }

  loadLaunches(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.spacexApi.getAllLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.filteredLaunches = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load launches. Please try again.';
        this.isLoading = false;
      }
    });
  }

  onFilterChanged(filters: { year: string; success: string }): void {
    let result = this.launches;

    if (filters.year) {
      result = result.filter(l => l.launch_year === filters.year);
    }

    if (filters.success === 'true') {
      result = result.filter(l => l.launch_success === true);
    } else if (filters.success === 'false') {
      result = result.filter(l => l.launch_success === false);
    }

    this.filteredLaunches = result;
  }

  viewDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }

  getStatusColor(success: boolean | null): string {
    if (success === true) return 'primary';
    if (success === false) return 'warn';
    return 'accent';
  }

  getStatusText(success: boolean | null): string {
    if (success === true) return 'Success';
    if (success === false) return 'Failed';
    return 'Upcoming';
  }
}
