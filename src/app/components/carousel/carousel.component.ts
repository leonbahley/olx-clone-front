import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ngbd-carousel-basic',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styles: [
    `
      /deep/ .picsum-img-wrapper {
        text-align: center;
        background-color: #fff;
        border-radius: 3px;
        height: 350px;
      }
      /deep/ .carousel-control-next-icon {
        background-color: #c5c8c9;
        border-radius: 3px;
      }
      /deep/ .carousel-control-prev-icon {
        background-color: #c5c8c9;
        border-radius: 3px;
      }
    `,
  ],
})
export class NgbdCarouselBasic {
  @Input() images!: string[];
}
