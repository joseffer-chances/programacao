import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})

export class CustomerDetailsComponent implements OnInit {

  customer = new Customer() ;
  submitted = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dataService.getCustomer(+params['id']))
      .subscribe(customer => this.customer = customer);
  }

  onSubmit(): void {
    this.submitted = true;
    this.dataService.update(this.customer);
  }

  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
