import { Injectable } from '@angular/core';
import { FilmModel } from './models/FilmModel';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  ngOnInt() {

  }
  getAll() {
    fetch("${environnement.api_url}api/films", { method: 'GET' }).then(
      rep => rep.json()
    ).then(
      rep => console.log(rep)
    )
  }
  addFilm() {
    fetch("${environnement.api_url}api/films", { method: 'POST' }).then(
      rep => rep.json()
    ).then(
      rep => console.log(rep)
    )
  }
  getById(id) {
    fetch("${environnement.api_url}api/" + id, { method: 'GET' }).then(
      rep => rep.json()
    ).then(
      rep => console.log(rep)
    )
  }
}
