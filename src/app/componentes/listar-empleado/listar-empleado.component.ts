import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  constructor(private datosEmpleados:CrudService) { }

  empleados:any;

  ngOnInit(): void {
    this.empleados = this.datosEmpleados.ObtenerDatos().subscribe(
      (data)=>{
      //  console.log(data)
        this.empleados = data;
      }
    )
    
  }

  borrarRegistro(id:any, i:any){
    if(window.confirm('Estas seguro de borrar este registro?')){
    this.datosEmpleados.BorrarEmpleado(id).subscribe( 
      (data)=>{
        
        this.empleados.splice(i,1);
      }
    )
    //console.log(id);
    //console.log(i);
  }
}
}
