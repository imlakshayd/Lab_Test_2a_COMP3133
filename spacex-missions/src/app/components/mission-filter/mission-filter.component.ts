import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Launch } from '../../models/spacex-launch.model';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.scss'
})
export class MissionFilterComponent implements OnChanges {
  @Input() launches: Launch[] = [];
  @Output() filterChanged = new EventEmitter<{ year: string; success: string }>();

  selectedYear = '';
  selectedSuccess = '';
  availableYears: string[] = [];

  ngOnChanges(): void {
    this.buildYearList();
  }

  buildYearList(): void {
    const years = new Set(this.launches.map(l => l.launch_year));
    this.availableYears = Array.from(years).sort();
  }

  applyFilters(): void {
    this.filterChanged.emit({
      year: this.selectedYear,
      success: this.selectedSuccess
    });
  }

  clearFilters(): void {
    this.selectedYear = '';
    this.selectedSuccess = '';
    this.applyFilters();
  }
}
