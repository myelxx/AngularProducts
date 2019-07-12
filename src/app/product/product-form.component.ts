import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  productName: string = "";
  productCode: string = "";
  releaseDate: string = "";
  description: string = "";
  price: number = 0;
  starRating: string = "";
  imageUrl: string = "";

  //Child component
  @Output() addProduct:
    EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddNewProduct() {
    if (this.productName == "" || this.productCode == "" || this.releaseDate == "" || this.description == "" || this.price == null || this.starRating == "" || this.imageUrl == "") {
      alert("Form is incomplete");
    } else {
      // Call parent's event listener method
      this.addProduct.emit({
        productName: this.productName,
        productCode: this.productCode,
        releaseDate: this.releaseDate,
        description: this.description,
        price: this.price,
        starRating: this.starRating,
        imageUrl: this.imageUrl
      });

      // Clear input fields
      this.productName = "";
      this.productCode = "";
      this.releaseDate = "";
      this.description = "";
      this.price = 0;
      this.starRating = "";
      this.imageUrl = "";
    }

  }

}