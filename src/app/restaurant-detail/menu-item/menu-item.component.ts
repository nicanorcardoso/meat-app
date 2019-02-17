import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem 
  //sempre que tiver uma propriedade que o componente parent 
  //ira informar pra vocẽ é necessário marcala com @Input
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
