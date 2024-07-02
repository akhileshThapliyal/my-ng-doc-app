import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// snippet-from-file="../content-wrapper/content-wrapper.component.ts" "Content Warpper Components"
//snippet "Button1 Component"
@Component({
  selector: 'app-button-1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss', './button1.component.tokens.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button1Component {

  @Input() label: string = 'Default Button1 Label';
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
//snippet