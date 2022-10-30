import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    count: number = 0;
    value: number = 10;
    interval: any;

    ngOnInit(): void {
    }

    increment(value = this.value) {
        this.count += value
    }

    uncrement(value = this.value) {
        if(this.count > 0){
            this.count -= value
        }else{
            alert('Le compteur ne peut pas être négatif')
        }
    }

    autoIncrement(){
        this.interval = setInterval(() => {
            this.increment();
        }, 10)
    }

    stopAutoIncrement(){
        clearInterval(this.interval);
        this.interval = undefined;
    }
}
