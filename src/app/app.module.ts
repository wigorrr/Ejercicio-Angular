import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConverterFormComponent } from './converter/components/converter-form/converter-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MoneyPipe } from '../app/converter/components/pipes/money.pipe';

const appRoutes: Routes = [
  {path: '', component: ConverterFormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ConverterFormComponent,
    MoneyPipe
  ],
  imports: [
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
