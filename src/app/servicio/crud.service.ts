import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost:8080/api';

  constructor(private clienteHttp: HttpClient) { }

  ObtenerDatos():Observable<any>{
    return this.clienteHttp.get(this.API+"/findAll");
  }

  AgregarEmpleado(empleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"/new",empleado);
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.delete(this.API+"/delete/"+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"/findById/"+id);
  }

  EditarEmpleado(empleado:Empleado):Observable<any>{
    return this.clienteHttp.put(this.API+"/edit",empleado);
  }

}
