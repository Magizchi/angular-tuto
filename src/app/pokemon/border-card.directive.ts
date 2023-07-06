import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
})
export class BorderCardDirective {
  constructor(private element: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pokemonBorderCard') boderColor: string | undefined; // alias
  // @Input() pokemonBorderCard: string | undefined; // sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.boderColor ||'#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }
}
