import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryISO } from 'projects/ngx-dialer-input/src/lib/enums/country-iso.enum';
import { PhoneNumberFormat } from 'projects/ngx-dialer-input/src/lib/enums/phone-number-format.enum';
import { SearchCountryField } from 'projects/ngx-dialer-input/src/lib/enums/search-country-field.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [
		CountryISO.UnitedStates,
		CountryISO.UnitedKingdom,
	];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required]),
	});

  get f() {
    return this.phoneForm.get('phone');
  }
}
