import { DepositModalComponent } from './../deposit-modal/deposit-modal.component';
import { ModalController, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  accounts = [
    {
      name: 'Hussein Muhammad',
      balance: 1000
    },
    {
      name: 'Ahmad Rashid',
      balance: 1200
    }
  ];

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  async openModal(account) {
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent,
      componentProps: { name: account.name, balance: account.balance }
    });

    await modal.present();

    const { data: newBalance, role } = await modal.onWillDismiss();
    if (role === 'deposited') {
      const index = this.accounts.findIndex(acc => acc.name === account.name);
      this.accounts[index].balance = newBalance;

      const alert = await this.alertCtrl.create({ header: 'Success', message: 'Amount has been Deposited', buttons: ['Close'] });
      await alert.present();
    }
  }

}
