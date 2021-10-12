import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';

const routes: Routes = [{
  path: 'mascotas',
  component:MascotasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
