import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { Calendar } from '@ionic-native/calendar';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { MapaService } from '../domain/mapa/mapa-service';
import { CameraService } from '../domain/camera/camera-service';
import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { CalendarService } from '../domain/calendario/calendar-service';
import { ValidacaoSlides } from '../domain/validator/validacao-slides';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


function provideStorage(){
  return new Storage({
    name: 'agendamentos',
    storeName: 'agendamento'
  });
}

@NgModule({
  
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Storage, useFactory: provideStorage},
    MapaService,
    CameraService,
    AgendamentoService,
    CalendarService,
    ValidacaoSlides,
    AgendamentoDao
  ]
  
})
export class AppModule {}
