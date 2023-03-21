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
  roomList: Array<Room> = [];

  constructor(private mainpageService: MainpageService) {}

  ngOnInit() {
    this.getMenus();
    this.getRooms();
  }

  getMenus(): void {
    this.mainpageService.getMenus().subscribe((menus) => {
      this.menuList = menus.content;
    });
  }

  getRooms(): void {
    this.mainpageService.getRooms().subscribe((room) => {
      this.roomList = room.content;
    });
  }
}
