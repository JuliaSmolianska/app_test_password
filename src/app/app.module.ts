import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PasswordCheckerComponent } from './app.component';

@NgModule({
  declarations: [PasswordCheckerComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [PasswordCheckerComponent],
})
export class AppModule {}
