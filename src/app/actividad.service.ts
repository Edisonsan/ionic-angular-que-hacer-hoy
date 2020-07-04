import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  constructor(private _httpClient: HttpClient) {}

  // *Traeremos una sola actividad con este metodo.
  getActividad(actividadId: string) {
    return this._httpClient.get(API);
  }

  // *Metodo para traer todas las actividades disponibles.
  getTodas() {
    return this._httpClient.get(API);
  }
}

const API = 'http://orangevalleycaa.org/api/videos';
