import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @ViewChild('search') search!: ElementRef;

  constructor(private router: Router) {}

  searchItems = () => {
    this.router.navigate(['/search'], {
      queryParams: { name: this.search.nativeElement.value },
    });
  };
}
