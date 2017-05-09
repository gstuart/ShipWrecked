import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeachComponent } from './beach/beach.component';
import { JungleComponent } from './jungle/jungle.component';
import { HillComponent } from './hill/hill.component';
import { AboutComponent } from './about/about.component';
import { LightComponent } from './light/light.component';
<<<<<<< HEAD
=======
import { FightComponent } from './fight/fight.component';
import { StickComponent } from './stick/stick.component';
>>>>>>> b5c05c8b0e5c4ee68cba6904611e4ebf2ce64542

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
  },
  {
    path: 'light',
    component: LightComponent
  },
  {
    path: 'fight',
    component: FightComponent

  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
