import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comics } from '../../types/comics';
import { MessageService } from 'primeng/api';
import { BackService } from '../../service/back.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-view-comic',
  templateUrl: './view-comic.component.html',
  styleUrls: ['./view-comic.component.scss']
})
export class ViewComicComponent {

 comic!: Comics;
  @Input() set getShow(show: boolean) {
    this.show = show;
  }

  @Input() set getComic(comic: Comics) {
    this.comic = comic;
  }

  @Input() isFavorite = false;

  @Output() close = new EventEmitter();

  show = false;

  user!:User;

  constructor(
    private messageService: MessageService,
    private backService: BackService
  ) {
    
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  closeView() {
    this.close.emit();
  }

  addFavorite() {
    const data = {
      title: this.comic.title, 
      description: this.comic.description, 
      creators: JSON.stringify(this.comic.creators), 
      prices: JSON.stringify(this.comic.prices), 
      thumbnail: JSON.stringify(this.comic.thumbnail), 
      user_id: this.user.id
    }

    this.backService.getResponse({
      method: 'POST',
      route: '/user/create-comic',
      data
    }).then(response => {
      this.closeView();
      this.messageService.add({
        severity: 'success',
        summary: 'Atención',
        detail: `Favorito agregado`
      })
    }).catch(error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Atención',
        detail: `${error.error}`
      })
    })
  }
}
