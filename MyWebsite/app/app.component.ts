import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
    selector:'pm-app',
    templateUrl:'app/app.component.html',
    providers:[ProductService] // this service is available to this component and any nested component
})
export class AppComponent { 
     pageTitle:string = "ACME Product Management"
}

