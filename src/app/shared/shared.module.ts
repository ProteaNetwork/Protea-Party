import { TokenService } from './token.service';
import { Web3Service } from './web3.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { UportService } from './uport.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [ Web3Service, TokenService, UportService ],
  declarations: [  ],
  exports: [ MaterialModule]
})
export class SharedModule { }
