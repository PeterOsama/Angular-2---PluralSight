import { Component } from '@angular/core';
import { productService } from './products/product.service';
@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1></div>
        <pm-products></pm-products>
    `,
    providers: [productService]
})
export class AppComponent {
    pageTitle: string = 'prioritize'
 }
