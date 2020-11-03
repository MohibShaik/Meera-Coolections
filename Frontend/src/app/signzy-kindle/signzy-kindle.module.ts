import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignzyKindleRoutingModule } from './signzy-kindle-routing.module';
import { WorkflowComponent } from './workflow/workflow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [WorkflowComponent],
  imports: [
    CommonModule,
    SignzyKindleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SignzyKindleModule {}
