import {Component, inject, OnInit, PLATFORM_ID, REQUEST} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ``
})
export class AppComponent implements OnInit {
  // in app.config.server.ts i set RenderMode.Server to every route, so I expect this will ALWAYS be available in SSR - no exceptions.
  private _req = inject(REQUEST, {optional: true});

  private _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    console.log({
      isBrowser: this._isBrowser,
      requestAvailable: !!this._req
    });

    if(!this._isBrowser && !!this._req){
      console.error('why do i exist. im a inconsistency between prod and dev and will cause bugs');
    }
  }
}
