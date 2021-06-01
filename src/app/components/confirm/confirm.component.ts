import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
export interface ConfirmModel {
  SelectedCategory:string;
  SelecetedConvertor:string;
  SelecetedValue:string;
  answer:string;

}
@Component({
    selector: 'confirm',
    template: `
      <div class="modal-content">
        <div class="modal-header">
      <h4>Result</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
            <p>your Selected Category</p>
            </div>
            <div class="col-6">
            <p>{{SelectedCategory}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
          <p>your Selected Convertor</p>
            </div>
            <div class="col-6">
          <p>{{SelecetedConvertor}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
          <p>your Selected Value</p>
            </div>
            <div class="col-6">
          <p>{{SelecetedValue}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
          <p>your Result is:</p>
            </div>
            <div class="col-6">
          <p>{{answer}}</p>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
        </div>
      </div>
    `
})
export class ConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {

  SelectedCategory:string;
  SelecetedConvertor:string;
  SelecetedValue:string;
  answer:string;
  constructor() {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
