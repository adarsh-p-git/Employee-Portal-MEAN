import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers:any[],searchkey:string): any[] {
    const result:any=[]

    if(!allUsers || searchkey==""){
      return allUsers

    }
      allUsers.forEach((item=>{
        if(item.name?.trim().includes(searchkey.trim().toLowerCase())){
          result.push(item)
  }
  }))
    
    return result;
  }

}
