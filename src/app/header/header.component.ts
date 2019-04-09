import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
 items: MenuItem[];

  constructor() { }
 
 

  ngOnInit() {
      this.items = [
          {
              label: 'Телефони',
              items: [{
                      label: 'Samsung', 
                     
                      items: [
                          {label: 'Project' },
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
            label: 'Годинники',
            items: [{
                    label: 'New', 
                   
                    items: [
                        {label: 'Project' },
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
          {
              label: 'Навушники',
              items: [
                  {label: 'Delete'},
                  {label: 'Refresh'}
              ]
          },
          {
            label: 'Аксесуари',
            items: [{
                    label: 'New', 
                   
                    items: [
                        {label: 'Project' },
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
      ];
  }
}
