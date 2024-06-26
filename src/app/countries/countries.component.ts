import { Component } from '@angular/core';
import { Country } from './country';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  public forecasts: Country[] = [];
  countries: Country[] | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCountries();

  }

  getCountries() {
    this.http.get<Country[]>(environment.baseUrl+'api/Countries').subscribe(
      {
       next : result => this.countries ,
       error : (error: any) => console.error(error)
      }

      
    );  
  }
}