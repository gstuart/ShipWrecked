import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
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
import { BackComponent } from './back/back.component';
import { CaveContinueComponent } from './cave-continue/cave-continue.component';
import { FloatComponent } from './float/float.component';
import { PickComponent } from './pick/pick.component';
import { ShoreComponent } from './shore/shore.component';
import { LeaveComponent } from './leave/leave.component';
import { BoatComponent } from './boat/boat.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FlareComponent } from './flare/flare.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BeachComponent,
    JungleComponent,
    HillComponent,
    AboutComponent,
    LightComponent,
    FightComponent,
    StickComponent,
    GiveUpComponent,
    ScareComponent,
    ContinueComponent,
    KillComponent,
    OverComponent,
    SwimComponent,
    SharkComponent,
    GunComponent,
    FlightComponent,
    RunComponent,
    ClimbComponent,
    TreeComponent,
    StreamComponent,
    BankComponent,
    IslandComponent,
    CaveComponent,
    LeftComponent,
    RightComponent,
    FloatComponent,
    ShoreComponent,
    CaveContinueComponent,
    FloatComponent,
    BackComponent,
    PickComponent,
    LeaveComponent,
    BoatComponent,
    UserDetailComponent,
    FlareComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
