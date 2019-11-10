import { GetStartedComponent } from './components/get-started/get-started.component';
import { DdrBlockListTestComponent } from './components/components-ddr/ddr-block-list-test/ddr-block-list-test.component';
import { DdrDetailTestComponent } from './components/components-ddr/ddr-detail-test/ddr-detail-test.component';
import { DdrConfigurationTestComponent } from './components/components-ddr/ddr-configuration-test/ddr-configuration-test.component';
import { DdrLoadIframeTestComponent } from './components/components-ddr/ddr-load-iframe-test/ddr-load-iframe-test.component';
import { DdrDropdownTestComponent } from './components/components-ddr/ddr-dropdown-test/ddr-dropdown-test.component';
import { DdrClickoutsideTestComponent } from './components/components-ddr/ddr-clickoutside-test/ddr-clickoutside-test.component';
import { DdrToastTestComponent } from './components/components-ddr/ddr-toast-test/ddr-toast-test.component';
import { DdrSpinnerTestComponent } from './components/components-ddr/ddr-spinner-test/ddr-spinner-test.component';
import { DdrJoinPipeTestComponent } from './components/components-ddr/ddr-join-pipe-test/ddr-join-pipe-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'ddr-join-pipe', component: DdrJoinPipeTestComponent},
  { path: 'ddr-spinner', component: DdrSpinnerTestComponent},
  { path: 'ddr-toast', component: DdrToastTestComponent},
  { path: 'ddr-clickoutside', component: DdrClickoutsideTestComponent},
  { path: 'ddr-dropdown', component: DdrDropdownTestComponent},
  { path: 'ddr-load-iframe', component: DdrLoadIframeTestComponent},
  { path: 'ddr-configuration', component: DdrConfigurationTestComponent},
  { path: 'ddr-detail', component: DdrDetailTestComponent},
  { path: 'ddr-block-list', component: DdrBlockListTestComponent},
  { path: 'get-started', component: GetStartedComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'get-started'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
