import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IinitalState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  counter: number;
  counter$: Observable<IinitalState>;

  constructor(private store: Store< { counter: IinitalState } >) { 
	  this.counter$ = this.store.select("counter");
  }

  ngOnInit(): void {
  }

}
