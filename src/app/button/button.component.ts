import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() label: string = 'Default Button Label';
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
