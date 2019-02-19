import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, 
        MatSidenavModule, MatListModule,  } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
    ], 
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatSidenavModule, 
        MatListModule, 
    ]
})
export class AppMaterialModule {}