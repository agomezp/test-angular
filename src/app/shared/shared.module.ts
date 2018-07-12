import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        HeaderComponent,
        NotfoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbComponent,
        HeaderComponent,
        NotfoundComponent,
        SidebarComponent
    ]
})

export class SharedModule {}


