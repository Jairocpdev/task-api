import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SearchService } from '../../services/search.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  RouterLink,
  FormsModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm = '';

  constructor(
    private searchService: SearchService
  ) {}

  onSearch(): void {
    this.searchService.setSearch(this.searchTerm);
  }
}