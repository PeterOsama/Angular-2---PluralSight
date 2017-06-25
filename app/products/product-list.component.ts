import { Component , OnInit} from '@angular/core';
import{IProduct} from './product';
import { productService } from './product.service';
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl:'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class productlistcomponent implements OnInit{
    pageTitle:string ="product List";
    imageWidth:number =50;
    imageMargin:number =2;
    showImage:boolean =false;
    listFilter:string ='';
    products:IProduct[];




    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    ngOnInit(): void{
        console.log("in oninit");
        this.products =this._productService.getProducts();
    }
    onRatingClicked(message:string):void {
        this.pageTitle='product List '+ message ;
    }
    

    /*
    private _productService ;
    constructor(ProductService : productService){
        _productService=ProductService;
    }
    */

    constructor(private _productService:productService){
    }
    



}