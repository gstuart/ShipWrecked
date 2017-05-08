import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeachComponent } from './beach/beach.component';

const appRoutes: Routes =[
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path:'beach',
    component: BeachComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
