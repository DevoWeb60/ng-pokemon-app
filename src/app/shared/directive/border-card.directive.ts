import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
    initalColor: string = "#f5f5f5";
    defaultColor: string = "#FF9688";
    defaultHeight: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initalColor);
        this.setHeight(this.defaultHeight);
    }

    @Input("pkmnBorderCard") borderColor: string;
    // @Input() pkmnBorderCard: string; // Sans Alias

    @HostListener("mouseenter") onMouseEnter(): void {
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener("mouseleave") onMouseLeave(): void {
        this.setBorder(this.initalColor);
    }

    private setBorder(color: string): void {
        const border = `solid 4px ${color}`;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number): void {
        this.el.nativeElement.style.height = `${height}px`;
    }
}
