import { Component } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrayNews: INews[] = [
    {titulo: 'Entrega de la práctica 3', imagen: 'https://media.istockphoto.com/id/1491196684/es/foto/empresarios-que-celebran-el-%C3%A9xito-en-una-oficina.jpg?s=612x612&w=0&k=20&c=xDtSPGJw40Mr8b8U3tO8tPLnG8XrXe_rn8KYRpjaU20=', cuerpo: 'Comenzamos el  máster con la primera entrega de la práctica 3, realizando un trabajo enfocado en HTML y CSS', fecha:'2 de junio de 2025'},
    {titulo: 'Entrega de la práctica 4', imagen: 'https://media.istockphoto.com/id/643285752/es/foto/lo-hemos-hecho-otra-vez.jpg?s=612x612&w=0&k=20&c=uoFllI0F-_rvZF22XLyvfRVASRgQu82m03yb_nbvBkg=', cuerpo: 'Con esta 2 entrega hemos puesto a prueba vuestros conocimientos de Javascript y el manejo de el DOM', fecha:'30 de junio de 2025'},
  ]
  
  newPost: INews = {
    titulo: '',
    imagen: '',
    cuerpo: '',
    fecha: ''
  };

  errorMessage = '';
  successMessage = '';

  publicarNoticia() {
    const { titulo, imagen, cuerpo, fecha } = this.newPost;

    if (!titulo || !imagen || !cuerpo || !fecha) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      this.successMessage = '';
      return;
    }

    this.arrayNews.unshift({ ...this.newPost });
    this.newPost = { titulo: '', imagen: '', cuerpo: '', fecha: '' };
    this.errorMessage = '';
    this.successMessage = '✅ Noticia publicada correctamente.';

    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

  eliminarNoticia(index: number) {
    this.arrayNews.splice(index, 1);
  }

}
