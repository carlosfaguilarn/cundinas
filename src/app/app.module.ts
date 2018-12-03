import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; 

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { FiltroPipe } from "../pipes/filtro/filtro";

import { 
  MenuPage, 
  InicioPage, 
  CundinasPage, 
  HistorialPage, 
  LoginPage, 
  DetalleCundinaPage, 
  AddCundinaPage, 
  TarjetasPage, 
  AddTarjetaPage, 
  NotificacionesPage,
  RegistroPage,
  AddIntegrantePage
} from "../pages/index.pages";
import { NotificacionesProvider } from '../providers/notificaciones';
import { UserProvider } from '../providers/user';
import { CardsProvider } from '../providers/cards';
import { CundinaProvider } from '../providers/cundina';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    InicioPage, 
    CundinasPage, 
    HistorialPage,
    LoginPage,
    DetalleCundinaPage,
    AddCundinaPage,
    TarjetasPage, 
    AddTarjetaPage,
    NotificacionesPage,
    RegistroPage,
    AddIntegrantePage,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    InicioPage, 
    CundinasPage, 
    HistorialPage,
    LoginPage,
    DetalleCundinaPage,
    AddCundinaPage,
    TarjetasPage, 
    AddTarjetaPage,
    NotificacionesPage,
    RegistroPage,
    AddIntegrantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotificacionesProvider,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardsProvider,
    CundinaProvider
  ]
})
export class AppModule {}