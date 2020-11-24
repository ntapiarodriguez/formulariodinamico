import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { ReactiveDinamicoComponent } from './pages/reactive-dinamico/reactive-dinamico.component';
import { ReactiveComponentesDinamicosComponent } from './pages/reactive-componentes-dinamicos/reactive-componentes-dinamicos.component';
import { TextoComponent } from './pages/reactive-componentes-dinamicos/inputs/texto/texto.component';
import { InputsDirective } from './pages/reactive-componentes-dinamicos/inputs.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FechaComponent } from './pages/reactive-componentes-dinamicos/inputs/fecha/fecha.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    ReactiveDinamicoComponent,
    ReactiveComponentesDinamicosComponent,
    TextoComponent,
    InputsDirective,
    FechaComponent
  ],
  entryComponents: [ TextoComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
