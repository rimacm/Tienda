import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { PaginasComponent } from './pages/paginas/paginas.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TiendaComponent,
    InicioComponent,
    NosotrosComponent,
    MiCuentaComponent,
    PaginasComponent,
    PiePaginaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
