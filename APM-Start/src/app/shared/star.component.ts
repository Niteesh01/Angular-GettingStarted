import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
    starWidth: number;

    onClick(): void {
      //console.log('clicked');
        this.ratingClicked.emit(this.rating);
    }

    ngOnChanges(): void {
      this.starWidth = this.rating * 75 / 5;
    }



}
