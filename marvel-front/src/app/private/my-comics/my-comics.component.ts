import { Component } from '@angular/core';
import { BackService } from '../../core/service/back.service';
import { Comics, listResult } from 'src/app/core/types/comics';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from '../../core/types/user';

@Component({
  selector: 'app-my-comics',
  templateUrl: './my-comics.component.html',
  styleUrls: ['./my-comics.component.scss']
})
export class MyComicsComponent {
  loader = true;
  loaderMore = false;
  limit = 30;
  offset = 0;

  listComics: Comics[] = [];

  comic!:Comics | undefined;

  showModal = true;
  user!:User;
  
  constructor(
    private backService: BackService,
    private messageService: MessageService,
    private router: Router
  ) {
    
  }
  

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.getMyComics();
  }

  getMyComics() {
    this.backService.getResponse({
      method: 'GET',
      route: `/user/get-comics-user?user_id=${this.user.id}`
    }).then((response: Comics[] | any) => {
      this.listComics = response.map((comic: { creators: string; prices: string; thumbnail: string; }) => (
        {
          ...comic,
          creators: JSON.parse(comic.creators), 
          prices: JSON.parse(comic.prices), 
          thumbnail: JSON.parse(comic.thumbnail), 
        }
      ));
      console.log("getMyComics ~ this.listComics:", this.listComics)
      
    }).catch(error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Atención',
        detail: `${error.error}`
      })
    }).finally(() => {
      this.loader = false;
      this.loaderMore = false;
    })
  }

  viewComic(comic:Comics){
    this.comic = comic;
    this.showModal = true
  }

  closeModal(){
    this.showModal = false
    this.comic = undefined;
  }

  showMore(){
    this.loaderMore = true;
    this.offset += this.limit;
    this.getMyComics();
  }

  logout(){
    this.closeModal();
    localStorage.clear();
    this.router.navigate(['/home-public']);
  }
}
