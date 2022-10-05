import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products/products';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public products: Products[] = [];

  constructor(private serverHttp: ServerHttpService) { }

  public ngOnInit(): void {
    this.serverHttp.getProducts().subscribe(data =>  {
      console.log(data);
      this.products = data;
    });
  }
}
