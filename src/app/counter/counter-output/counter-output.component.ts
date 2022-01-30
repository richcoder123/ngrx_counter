import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';
import { IinitalState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: number;

  constructor(private store: Store<IAppState>) { 
	this.store.select(getCounter).subscribe((counter) => {
		console.log('in the counter space');
		this.counter = counter;
    })
  }

  ngOnInit(): void {
  }

}
