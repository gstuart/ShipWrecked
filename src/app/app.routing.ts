import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BeachComponent } from './beach/beach.component';
import { JungleComponent } from './jungle/jungle.component';
import { HillComponent } from './hill/hill.component';
import { AboutComponent } from './about/about.component';
import { LightComponent } from './light/light.component';
import { FightComponent } from './fight/fight.component';
import { StickComponent } from './stick/stick.component';
import { GiveUpComponent } from './give-up/give-up.component';
import { ScareComponent } from './scare/scare.component';
import { ContinueComponent } from './continue/continue.component';
import { KillComponent } from './kill/kill.component';

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
  },
  {

    path: 'give',
    component: GiveUpComponent
  },
  {
    path: 'stick',
    component: StickComponent
  },
  {
    path: 'scare',
    component: ScareComponent
  },
  {
    path: 'continue',
    component: ContinueComponent
  },
  {
    path: 'kill',
    component: KillComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
