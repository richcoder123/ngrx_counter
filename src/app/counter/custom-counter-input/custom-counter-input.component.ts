import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../state/counter.actions';
import { IinitalState } from '../state/counter.state';
import { getDeveloper } from '../state/counter.selectors';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;
  developer: string;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.select(getDeveloper).subscribe((developerName) => {
		console.log('Aman Gupta resolved observable');
    	this.developer = developerName;
    });
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customincrement({
      count: +this.value
    }))
  }

}
