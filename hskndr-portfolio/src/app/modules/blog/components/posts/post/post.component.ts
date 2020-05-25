import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } =
      {
        id: '1',
        titlePost: 'Post one',
        contentPost: `Por qué lo usamos?
      Es un hecho establecido hace demasiado tiempo que un lector se distraerá
       con el contenido del texto de un sitio mientras que mira su diseño.
       El punto de usar Lorem Ipsum es que tiene una distribución más o menos
       normal de las letras, al contrario de usar textos como por ejemplo
       "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español
       que se puede leer. Muchos paquetes de autoedición y editores de páginas web
        usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
        "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto
         si se encuentran en estado de desarrollo. Muchas versiones han evolucionado
         a través de los años, algunas veces por accidente, otras veces a propósito
         (por ejemplo insertándole humor y cosas por el estilo).`,
        imagePost: 'https://picsum.photos/id/237/200/300',
      };
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.post.id = this.route.snapshot.params.id;
  }

}
