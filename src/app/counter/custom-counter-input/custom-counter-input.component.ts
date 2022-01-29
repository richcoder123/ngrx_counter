import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from '../state/counter.actions';
import { IinitalState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;

  constructor(private store: Store<{state: IinitalState}>) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customincrement({
      count: +this.value
    }))
  }

}
