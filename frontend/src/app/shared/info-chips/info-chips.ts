import {Component, input } from '@angular/core';
import { MatChip, MatChipSet } from '@angular/material/chips';

@Component({
  selector: 'app-info-chips',
  imports: [
    MatChip,
    MatChipSet
  ],
  templateUrl: './info-chips.html',
  styleUrl: './info-chips.scss',
})
export class InfoChips {
  public chipContent= input<string[]>();
}
