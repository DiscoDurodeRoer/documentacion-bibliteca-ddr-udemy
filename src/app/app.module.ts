import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules

import { DdrJoinPipeModule } from 'ddr-join-pipe';
import { DdrSpinnerModule } from 'ddr-spinner';
import { DdrToastModule } from 'ddr-toast';
import { DdrClickOutsideModule } from 'ddr-click-outside';
import { DdrDropdownModule } from 'ddr-dropdown';
import { DdrLoadIframeModule } from 'ddr-load-iframe';
import { DdrConfigurationModule, DdrConfigurationService } from 'ddr-configuration';
import { DdrDetailModule } from 'ddr-detail';
import { DdrBlockListModule } from 'ddr-block-list';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

// Components
import { DdrBlockListTestComponent } from './components/components-ddr/ddr-block-list-test/ddr-block-list-test.component';
import { DdrClickoutsideTestComponent } from './components/components-ddr/ddr-clickoutside-test/ddr-clickoutside-test.component';
import { DdrConfigurationTestComponent } from './components/components-ddr/ddr-configuration-test/ddr-configuration-test.component';
import { DdrDetailTestComponent } from './components/components-ddr/ddr-detail-test/ddr-detail-test.component';
import { DdrDropdownTestComponent } from './components/components-ddr/ddr-dropdown-test/ddr-dropdown-test.component';
import { DdrJoinPipeTestComponent } from './components/components-ddr/ddr-join-pipe-test/ddr-join-pipe-test.component';
import { DdrLoadIframeTestComponent } from './components/components-ddr/ddr-load-iframe-test/ddr-load-iframe-test.component';
import { DdrSpinnerTestComponent } from './components/components-ddr/ddr-spinner-test/ddr-spinner-test.component';
import { DdrToastTestComponent } from './components/components-ddr/ddr-toast-test/ddr-toast-test.component';
import { MenuComponentsComponent } from './components/menu-components/menu-components.component';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { DdrBaseTestComponent } from './components/components-ddr/ddr-base-test/ddr-base-test.component';

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('assets/data/data.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DdrBlockListTestComponent,
    DdrClickoutsideTestComponent,
    DdrConfigurationTestComponent,
    DdrDetailTestComponent,
    DdrDropdownTestComponent,
    DdrJoinPipeTestComponent,
    DdrLoadIframeTestComponent,
    DdrSpinnerTestComponent,
    DdrToastTestComponent,
    MenuComponentsComponent,
    MenuTopComponent,
    DdrBaseTestComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrToastModule,
    DdrClickOutsideModule,
    DdrDropdownModule,
    DdrLoadIframeModule,
    DdrConfigurationModule,
    DdrDetailModule,
    DdrBlockListModule,
    CodeHighlighterModule
  ],
  providers: [
    DdrConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DdrConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
