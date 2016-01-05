import {bootstrap} from 'angular2/bootstrap';
import {Component, View} from 'angular2/core';
import {TimerWrapper} from 'angular2/src/facade/async';

@Component({selector: 'slow-init'})
@View({
  template: `
    <div id='page-loaded'>
      <span class='val'>{{pageLoaded}}</span>
    </div>
  `
})
class SlowInitApplication {
  pageLoaded = 'waiting...';

  constructor() {
    TimerWrapper.setTimeout(() => { this.pageLoaded = 'ready'; }, 3000);
  }
}

export function main() {
  bootstrap(SlowInitApplication);
}
