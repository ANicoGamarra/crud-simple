import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  Id:any;
  empleado:any;
  formularioDeEmpleado:FormGroup;

  constructor(private activeRoute:ActivatedRoute, private datosEmpleadoService:CrudService, formulario:FormBuilder, private router:Router) {
    this.Id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.Id);
    datosEmpleadoService.ObtenerEmpleado(this.Id).subscribe(
      (data)=>{
        console.log(data);
        this.formularioDeEmpleado.setValue({
          nombre:data.nombre ,
          correo:data.correo 
        })
      }
    )

    this.formularioDeEmpleado = formulario.group({
      nombre: [''],
      correo: ['']
    });
   }

   enviarDatos(){
     this.empleado = this.formularioDeEmpleado.value;
     console.log(this.empleado);
     this.empleado.id = this.Id;
     console.log(this.empleado);
     this.datosEmpleadoService.EditarEmpleado(this.empleado).subscribe(
       (data)=>{
         console.log(data);
         this.router.navigate(['listar-empleado']);
       }
     )
   }  

  ngOnInit(): void {

  }

 

}
