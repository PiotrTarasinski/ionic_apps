import { Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomValidator } from '../validation';
import { RatingService } from '../rating.service';
import { User } from '../clases/user';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private ratingService: RatingService,
    private navController: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getUser();
      (this.userForm = this.formBuilder.group({
        firstName: [this.user.firstName, [CustomValidator.nameValidator]],
        lastName: [this.user.lastName, [CustomValidator.nameValidator]],
        ratingCount: [this.user.ratingCount, [CustomValidator.ratingCountValidator]]
      }));
  }

  getUser(): void {
    this.ratingService.getUser().subscribe(user => (this.user = user));
  }

  isDisabled(): boolean {
    if (!this.user.average) {
      return true;
    }
    return false;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.userForm.get('firstName').disable();
    this.userForm.get('lastName').disable();
    this.userForm.get('ratingCount').disable();
    this.user.firstName = this.userForm.get('firstName').value;
    this.user.lastName = this.userForm.get('lastName').value;
    this.user.ratingCount = this.userForm.get('ratingCount').value;
    this.user.rates = [];
    for (let i = 0; i < this.user.ratingCount; i++) {
      this.user.rates.push('2');
    }
    this.navController.navigateForward('rates');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast
      .present()
      .then(
        () => new Promise(resolve => setTimeout(navigator['app'].exitApp, 2500))
      );
  }
}
