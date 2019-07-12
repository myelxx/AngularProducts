import { BrowserModule } from '@angular/platform-browser'; //to run in browsers
import { NgModule } from '@angular/core'; //use to get the angular modules
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent} from './product/product.component';
import { ProductFormComponent} from './product/product-form.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent] //run this component
})

export class AppModule { }
