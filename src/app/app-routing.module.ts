import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos el componente
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { PaginasComponent } from './pages/paginas/paginas.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

// Declaramos rutas
const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'miCuenta', component: MiCuentaComponent},
  { path: 'paginas', component: PaginasComponent},
  { path: 'miCuenta', component: MiCuentaComponent}
  // { path: '**', component: NotFoundComponent } 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
