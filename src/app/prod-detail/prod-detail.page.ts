import { Component, OnInit } from '@angular/core';

import { ServerHttpService } from '../Services/server-http.service';
import { Products } from '../models/products/products';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.page.html',
  styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {
  public products: Products[] = [];

  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit() {
    this.serverHttp.getProducts().subscribe((data) =>  {
      console.log('getProducts', data);
      this.products = data;
    });
  }

}
