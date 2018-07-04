import { NgModule, SkipSelf, Optional } from '@angular/core';
// import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from "../utils/svg.util";

import 'hammerjs';

@NgModule({
  imports: [
    // HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, 
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('该模块已经存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);
  }
}
