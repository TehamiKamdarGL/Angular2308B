import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products = [
    {
      'name': 'Beauty Mascara',
      'actualprice': 1800,
      'discount': 0,
      'stock': 54
    },
    {
      'name': 'Eye Liner',
      'actualprice': 1500,
      'discount': 0.15,
      'stock': 10
    },
    {
      'name': 'Lipstick',
      'actualprice': 1550,
      'discount': 0.13,
      'stock': 15
    },
    {
      'name': 'Blushon',
      'actualprice': 1999,
      'discount': 0.21,
      'stock': 0
    },
    {
      'name': 'Highlighter',
      'actualprice': 2500,
      'discount': 0.21,
      'stock': 13
    },
    {
      'name': 'Face Mask',
      'actualprice': 1800,
      'discount': 0.2,
      'stock': 10
    },
    {
      'name': 'Face Wash',
      'actualprice': 550,
      'discount': 0,
      'stock': 21
    },
    {
      'name': 'Leather Belt',
      'actualprice': 1800,
      'discount': 0.5,
      'stock': 15
    },
    {
      'name': 'Leather Belt',
      'actualprice': 1800,
      'discount': 0.5,
      'stock': 16
    },


  ];


}
