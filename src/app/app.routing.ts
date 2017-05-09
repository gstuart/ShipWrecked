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
import { OverComponent } from './over/over.component';
import { SwimComponent } from './swim/swim.component';
import { SharkComponent } from './shark/shark.component';
import { RunComponent } from './run/run.component';
import { GunComponent } from './gun/gun.component';
import { FlightComponent } from './flight/flight.component';
import { ClimbComponent } from './climb/climb.component';
import { TreeComponent } from './tree/tree.component';
import { StreamComponent } from './stream/stream.component';
import { BankComponent } from './bank/bank.component';
import { IslandComponent } from './island/island.component';
import { CaveComponent } from './cave/cave.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { FloatComponent } from './float/float.component';

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
  },
  {
    path: 'over',
    component: OverComponent
  },
  {
    path: 'swim',
    component: SwimComponent
  },
  {
    path: 'shark',
    component: SharkComponent
  },
  {
    path: 'run',
    component: RunComponent
  },
  {
    path: 'gun',
    component: GunComponent
  },
  {
    path: 'flight',
    component: FlightComponent
  },
  {
    path: 'climb',
    component: ClimbComponent
  },
  {
    path: 'tree',
    component:TreeComponent
  },
  {
    path: 'stream',
    component: StreamComponent
  },
  {
    path: 'bank',
    component: BankComponent
  },
  {
    path: 'island',
    component: IslandComponent
  },
  {
    path: 'cave',
    component: CaveComponent
  },
  {
    path: 'left',
    component: LeftComponent
  },
  {
    path: 'right',
    component: RightComponent
  },
  {
    path: 'float',
    component: FloatComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
