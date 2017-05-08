import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeachComponent } from './beach/beach.component';
import { JungleComponent } from './jungle/jungle.component';
import { HillComponent } from './hill/hill.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },
  {
    path: 'jungle',
    component: JungleComponent
  },
  {
    path: 'hill',
    component: HillComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
