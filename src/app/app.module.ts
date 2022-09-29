import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {SidebarComponent} from "./shared/layout/sidebar/sidebar.component";
import {LogoComponent} from "./shared/components/logo/logo.component";
import {AvatarComponent} from "./shared/components/avatar/avatar.component";
import {InvoiceModule} from "./components/invoice/invoice.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    InvoiceModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "", redirectTo:"invoices",pathMatch: "full"
      }
    ]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
