import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Mon premier post",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, beatae perspiciatis laboriosam suscipit porro atqueipsum numquam! Eveniet, provident voluptatibus! Quaerat recusandae harum optio quam molestias  Expedita alias quisquam perspiciatis sed id ad, corrupti rem  reprehenderit minus aliquid saepe cupiditate illum. Illum earum nam, ducimus esse sequi repudiandae commodi error.",
      loveIts: 5,
      created_at: "2019-05-10"
    },
    {
      title: "Mon deuxième post",
      content:
        "Libero dolor quis nostrum ipsa, veniam corporis harum ratione possimus obcaecati, officiis atque rem fugit voluptatum quos!ipsum numquam! Eveniet, provident voluptatibus! Quaerat recusandae harum optio quam molestias  Expedita alias quisquam perspiciatis sed id ad, corrupti rem  Dolores quisquam exercitationem quaerat eum voluptate ut ipsam, laborum atque harum accusamus tempore",
      loveIts: 3,
      created_at: "2017-05-10"
    },
    {
      title: "Mon troisième post",
      content:
        "Cum odio animi odit sunt rem officiis quo unde repellendus doloremque dolores nam, aliquam in nostrum, error ab molestiae ipsum numquam! Eveniet, provident voluptatibus! Quaerat recusandae harum optio quam molestias  Expedita alias quisquam perspiciatis sed id ad, corrupti rem architecto dolorem quaerat nisi quia tempore excepturi provident sequi, optio est, numquam deleniti inventore officia.Voluptatibus aliquid ab repellendus molestiae esse!",
      loveIts: 0,
      created_at: "2016-05-10"
    }
  ];
}
