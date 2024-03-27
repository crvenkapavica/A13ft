import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { ElementRef } from "@angular/core";

describe('HighlightDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirectiveDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
