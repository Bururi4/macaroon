import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffects]'
})
export class ButtonEffectsDirective implements OnInit {

  @Input() buttonEffectsDefaultBgColor: string = 'purple';
  @Input() buttonEffectsMouseOverBgColor: string = 'red';

  constructor() {

  }

  private _backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isMouseOver: boolean = false;
  @HostBinding('class.isMouseOver')
  get getIsMouseOver() {
    return this._isMouseOver;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.changeBgColor(this.buttonEffectsMouseOverBgColor);
    this._isMouseOver = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.changeBgColor(this.buttonEffectsDefaultBgColor);
    this._isMouseOver = false;
  }

  ngOnInit() {
    this.changeBgColor(this.buttonEffectsDefaultBgColor);
  }

  changeBgColor(color: string) {
    this._backgroundColor = color;
  }
}
