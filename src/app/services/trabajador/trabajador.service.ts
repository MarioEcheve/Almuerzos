import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/services/request-util';
import { ITrabajador } from 'app/models/trabajador/trabajador.model';

type EntityResponseType = HttpResponse<ITrabajador>;
type EntityArrayResponseType = HttpResponse<ITrabajador[]>;

@Injectable({ providedIn: 'root' })
export class TrabajadorService {
  SERVER_API_URL = 'http://localhost:8080/';
  public resourceUrl = this.SERVER_API_URL + 'api/trabajadors';

  constructor(protected http: HttpClient) {}

  create(trabajador: ITrabajador): Observable<EntityResponseType> {
    return this.http.post<ITrabajador>(this.resourceUrl, trabajador, { observe: 'response' });
  }

  update(trabajador: ITrabajador): Observable<EntityResponseType> {
    return this.http.put<ITrabajador>(this.resourceUrl, trabajador, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITrabajador>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITrabajador[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
