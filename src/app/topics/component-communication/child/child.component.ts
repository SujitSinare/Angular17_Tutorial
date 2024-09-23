import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() parentText: string = "";

  childusername: string = "";

  @Output() messageEmitter = new EventEmitter<string>();

  sendMessage() {
    this.messageEmitter.emit(this.childusername);
  }

}
