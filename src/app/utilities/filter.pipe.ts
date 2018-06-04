import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
    var filteredItems = [];
for (let index = 0; index < items.length; index++) {
  if (items[index].username.toLowerCase().includes(searchText)) {
    filteredItems.push(items[index]);
  }
  // items.filter( it => {
  //   console.log(it);
    //toLowerCase().includes(searchText)
//  });
} return filteredItems;

   }
}