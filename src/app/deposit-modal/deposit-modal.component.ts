import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {
  @Input() name: string;
  @Input() balance: number;

  balanceInput = new FormControl('', Validators.required);

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onDeposit() {
    const newBalance = this.balance + this.balanceInput.value;
    this.modalCtrl.dismiss(newBalance, 'deposited');
  }

}
