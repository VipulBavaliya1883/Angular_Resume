import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: any;
  products: any[] = [
    { id: 1, name: "Shoes", price: 500, display: "../assets/shoes.jpg" },
    { id: 2, name: "Shirts", price: 250, display: "../assets/shirts.jpg" },
    { id: 3, name: "Socks", price: 90, display: "../assets/socks.webp" },
    { id: 4, name: "Smart Watch", price: 80, display: "../assets/smart_watch.jpg" },
    { id: 5, name: "Bags", price: 450, display: "../assets/bag.jpg" },
    { id: 6, name: "Tie", price: 150, display: "../assets/tie.jpg" },
    { id: 7, name: "Jacket", price: 800, display: "../assets/jacket.jpg" },
    { id: 8, name: "iphone 13", price: 800, display: "../assets/iphone 13.jpg" },
    { id: 9, name: "Bluetooth", price: 800, display: "../assets/Bluetooth.jpg" },
  ]
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.product = this.products[data['id']]
    })
    console.log(this.product)
  }

}
