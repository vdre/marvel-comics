import { Component } from '@angular/core';
import { BackService } from '../../core/service/back.service';
import { Comics, listResult } from 'src/app/core/types/comics';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loader = true;
  loaderMore = false;
  limit = 30;
  offset = 0;

  listComics: Comics[] = [];

  comic!:Comics | undefined;

  showModal = true;
  
  constructor(
    private backService: BackService,
    private messageService: MessageService,
    private router: Router
  ) {
    
  }
  

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.backService.getResponse({
      method: 'GET',
      route: `/marvel/get-list-comics?limit=${this.limit}&offset=${this.offset}`
    }).then((response: listResult) => {
      this.listComics.push(...response.results);
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
    this.getComics();
  }

  logout(){
    this.closeModal();
    localStorage.clear();
    this.router.navigate(['/home-public']);
  }

}
