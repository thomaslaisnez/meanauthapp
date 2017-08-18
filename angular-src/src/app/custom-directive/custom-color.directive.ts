import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ 
     selector: '[customColor]' 
})
export class CustomColorDirective implements AfterViewInit {
    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit(): void {
       this.elRef.nativeElement.style.color = 'blue';
       this.elRef.nativeElement.style.fontSize = '20px';
    }		
} 