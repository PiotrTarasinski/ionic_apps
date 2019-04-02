import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';
import { User } from '../clases/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss']
})
export class RatesPage implements OnInit {
  user: User;
  rates = [];

  constructor(
    private ratingService: RatingService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.ratingService.getUser().subscribe(user => (this.user = user));
  }

  confirmRates(): void {
    let sum = 0;
    this.user.rates.forEach(rate => {
      sum += Number.parseInt(rate);
    });
    this.user.average = sum / this.user.rates.length;
    this.navController.navigateForward('home');
  }

  customTrackBy (index: number, obj: any): any {
    return index;
  }
}
