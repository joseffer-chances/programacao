import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private dataService: DataService) {}

  getCustomers() {
     return this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
     this.getCustomers();
  }

}
