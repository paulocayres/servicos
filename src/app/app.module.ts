import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './services/cursos.service';
import { CriaCursoModule } from './cria-curso/cria-curso.module';
import { LogService } from './services/log.service';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './meus-pipes/camel-case.pipe';
import {SettingsService} from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CamelCasePipe
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriaCursoModule,
    CursosModule
  ],
  providers: [
    CursosService,
    LogService,
    SettingsService,
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getlocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
