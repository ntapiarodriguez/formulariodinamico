import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveComponentesDinamicosComponent } from './pages/reactive-componentes-dinamicos/reactive-componentes-dinamicos.component';
import { ReactiveDinamicoComponent } from './pages/reactive-dinamico/reactive-dinamico.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactivo', component: ReactiveComponent},
  {path: 'reactivo-dinamico', component: ReactiveDinamicoComponent},
  {path: 'componentes-dinamicos', component: ReactiveComponentesDinamicosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
