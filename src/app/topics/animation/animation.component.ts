import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-animation',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('* => closed', [animate('1s')]),
      transition('* => open', [animate('0.5s')]),
      transition('open <=> closed', [animate('0.5s')]),
      transition('* => open', [animate('1s', style({ opacity: '*' }))]),
      transition('* => *', [animate('1s')]),
    ]),
  ],
  templateUrl: 'animation.component.html',
  styleUrls: ['animation.component.css'],
})
export class AnimationComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);
    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);
    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);
    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);
    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);
    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
