import { Component, NgModule } from '@angular/core';
import { Service } from './services/service';
import { Invoice, ItemRef, Line, CustomerRef, SalesItemLineDetail } from './model/invoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})

export class AppComponent {
  title = 'grainbox';

  constructor(private service: Service) {}

  private addInvoice() {
    const invoice = new Invoice();
    // const itemRef = new ItemRef();
    // const customerRef = new CustomerRef();
    // const detail = new SalesItemLineDetail();
    // const line = new Line();
    // line.amount = 100.00;
    // line.detailType = 'SalesItemLineDetail';
    // line.detail = detail;
    // customerRef.value = 59;
    // detail.itemRef = itemRef;
    // itemRef.value = '6';
    invoice.line = [
      {
        "Amount": 999.00,
        "DetailType": "SalesItemLineDetail",
        "SalesItemLineDetail": {
          "ItemRef": {
            "value": "3" // concrete
          }
        }
      }
    ]

    invoice.customerRef = {
      "value": "1" //adwin
    }

    console.log(invoice);

    this.service.addInvoice(invoice);

  }
}
