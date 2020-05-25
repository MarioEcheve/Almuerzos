import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/services/request-util';
import { ICentroCostos } from 'app/models/centro-costos/centro-costos.model';

type EntityResponseType = HttpResponse<ICentroCostos>;
type EntityArrayResponseType = HttpResponse<ICentroCostos[]>;

@Injectable({ providedIn: 'root' })
export class CentroCostosService {
  SERVER_API_URL = 'http://localhost:8080/';
  public resourceUrl = this.SERVER_API_URL + 'api/centro-costos';

  constructor(protected http: HttpClient) {}

  create(centroCostos: ICentroCostos): Observable<EntityResponseType> {
    return this.http.post<ICentroCostos>(this.resourceUrl, centroCostos, { observe: 'response' });
  }

  update(centroCostos: ICentroCostos): Observable<EntityResponseType> {
    return this.http.put<ICentroCostos>(this.resourceUrl, centroCostos, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICentroCostos>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICentroCostos[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
