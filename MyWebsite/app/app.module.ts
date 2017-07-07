import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import {HttpModule} from '@angular/http';
import { ProductDetailComponent } from "./products/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";
import {RouterModule} from '@angular/router';
import { ProductDetailGuard } from "./products/product-guard.service";
@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path:'products', 
          component : ProductListComponent 
        },
        {
          path:'product/:id',
          canActivate:[ProductDetailGuard],// call these guard before routing to this component.
          component:ProductDetailComponent
        },
        {
          path:'welcome',
          component:WelcomeComponent
        },
        {
          path:'',
          redirectTo:'welcome',
          pathMatch:'full'
        },
        {
          path:'**',
          redirectTo:'welcome',
          pathMatch:'full'

        }
      ]
    ) ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent
     ],
     providers:[ProductDetailGuard], // registering the service provider with app module
  bootstrap: [ AppComponent ]
})
export class AppModule { }
