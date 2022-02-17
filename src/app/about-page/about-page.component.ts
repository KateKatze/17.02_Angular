import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  infos: Array<{name: string, date: string, address: string, tel: string, description: string}> = [
    {
      name: "Joe Doe",
      date: "01.01.2000",
      address: "Favoriten Str. 222, 1110 Vienna",
      tel: "01/5223-32-32",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti omnis voluptatum repellendus aliquid totam illum doloremque delectus minima repellat reiciendis aut similique, itaque hic magni! Similique eveniet id dolores? Impedit asperiores, veritatis modi quae necessitatibus expedita facilis laboriosam aspernatur est alias officiis dolorum possimus eius molestias distinctio id repellat doloremque ullam nulla ad atque velit. In rem obcaecati sequi. Fuga modi recusandae eaque est quod nihil inventore amet, eligendi dicta doloremque, deleniti earum cupiditate soluta nobis? Aut repellendus fugiat iure quidem dolorem quasi, eum perspiciatis! Aut omnis sint rem."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
