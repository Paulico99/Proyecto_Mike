import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DataTableModule} from '../../../../node_modules/primeng/components/datatable/datatable';
import {InputTextModule} from '../../../../node_modules/primeng/components/inputtext/inputtext';
import {ToggleButtonModule} from '../../../../node_modules/primeng/components/togglebutton/togglebutton';
import {RadioButtonModule} from '../../../../node_modules/primeng/components/radiobutton/radiobutton';
import { CarreraRoutingModule } from './carrera-routing.module';
import { CarreraComponent } from './carrera.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CarreraRoutingModule,
        PageHeaderModule,
        RadioButtonModule,
        DataTableModule,
        InputTextModule,
        ToggleButtonModule,
        FormsModule,
        NgbModule.forRoot(),  
        DataTableModule,
        InputTextModule,
        ToggleButtonModule
    ],
    declarations: [CarreraComponent]
})
export class CarreraModule { }
