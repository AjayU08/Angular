import {
  ElementRef,
  Directive,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[color]" //directive name here
})
export class CustomDirective {
  constructor(el: ElementRef) {
    // now u can access to dom
    el.nativeElement.style.background = "green";
    el.nativeElement.style.border = "1px solid #fff";
    el.nativeElement.style.borderRadius = "2px";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.color = "#fff";
    el.nativeElement.style.fontWeight = "bold";
    el.nativeElement.style.marginLeft = "4px";
    el.nativeElement.style.marginRight = "4px";
  } //to call DI

  @HostBinding("style.background") background: string;
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;

  @HostListener("mouseenter") mouseenter() {
    console.log("mouse entered 😃");
    this.background = "blue";
    this.transform = "rotate(360deg)";
    this.transition = "all 4.5s ease";
  } //method decoprators...
  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leaved......... 😃👏😀");
    this.background = "red";
    this.transform = "rotate(0deg)";
    this.transition = "all 0.5s ease";
  } //method decoprators...
}
