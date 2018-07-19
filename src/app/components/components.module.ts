import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ProgressbarComponent } from './progressbar/progressbar.component';

import { PAGES_ROUTES } from '../pages/pages.routes';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';

@NgModule ({
    declarations: [
        // ProgressbarComponent
      GraficoDonaComponent],
      imports: [
        // FormsModule,
        // PAGES_ROUTES
      ],
      providers: []
})

export class ComponentsModule {}
