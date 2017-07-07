import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    
    transform(value: IProduct[],filterBy:string):IProduct[] {

        var filteredProductList = [];
        filterBy = filterBy? filterBy.toLocaleLowerCase() : null;
        
        if(filterBy!=null && filterBy!=""){

            for(var i=0;i<value.length;i++)
            {
                    if(value[i].productName.toLocaleLowerCase().includes(filterBy))
                        filteredProductList.push(value[i]);
            }
            return filteredProductList
        }
        else
            return value;

       
    }

}