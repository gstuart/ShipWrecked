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
    OverComponent
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
