import { Component } from '@angular/core';
import { Menu, Room } from '../struc';

import { MainpageService } from './mainpage.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  providers: [MainpageService],
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  menuList: Array<Menu> = [];

  constructor(private mainpageService: MainpageService) {}

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.mainpageService.getMenus().subscribe((menus) => {
      this.menuList = menus;
      console.log('MENUS', menus);
    });
  }
}
