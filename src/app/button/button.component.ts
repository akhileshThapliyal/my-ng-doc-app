import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AriaAttributes } from '../interfaces/aria-attribute.type'

// snippet-from-file="../content-wrapper/content-wrapper.component.ts" "Content Warpper Components"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() label: string = 'Default Button Label';
  @Input() aria: AriaAttributes = {
    alt: "This is a button element"
  };

  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
