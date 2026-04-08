import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { SpacexApiService } from '../../services/spacex-api.service';
import { Launch } from '../../models/spacex-launch.model';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatListModule,
    SafeUrlPipe
  ],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.scss'
})
export class MissionDetailsComponent implements OnInit {
  launch: Launch | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexApi: SpacexApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadLaunch(+id);
    }
  }

  loadLaunch(flightNumber: number): void {
    this.isLoading = true;
    this.spacexApi.getLaunchById(flightNumber).subscribe({
      next: (data) => {
        this.launch = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load mission details.';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }

  getStatusText(success: boolean | null): string {
    if (success === true) return 'Success';
    if (success === false) return 'Failed';
    return 'Upcoming';
  }

  getYoutubeEmbedUrl(youtubeId: string): string {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }
}
