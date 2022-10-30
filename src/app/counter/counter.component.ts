import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    count: number = 0;
    interval: any;

    ngOnInit(): void {
    }

    increment() {
        this.count++
    }

    uncrement() {
        if(this.count > 0){
            this.count--
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
