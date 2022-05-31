import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector:   'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls:  ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoform: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  editing: boolean=false;

  constructor(private fb:                FormBuilder,
              private router:            Router,
              private toastr:            ToastrService,
              private _productoService : ProductoService,
              private aRouter:           ActivatedRoute) {
    this.productoform = this.fb.group( {
      nombre:         ['', Validators.required],
      peso:           ['', Validators.required],
      proveedor:      ['', Validators.required],
      unidades:       ['', Validators.required],
      placa_vehiculo: ['', Validators.required],
      observaciones:  ['', Validators.required],
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
    
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.productoform)

    let PRODUCTO: producto = {
      nombre:         this.productoform.get('nombre')?.value,
      peso:           this.productoform.get('peso')?.value,
      proveedor:      this.productoform.get('proveedor')?.value,
      unidades:       this.productoform.get('unidades')?.value,
      placa_vehiculo: this.productoform.get('placa_vehiculo')?.value,
      observaciones:  this.productoform.get('observaciones')?.value,
    }

    if(this.id !== null) {
      //Edita el producto si existe
      this._productoService.editarProductos(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('¡El producto fue Actualizado con exito!', '¡Producto Actualizado!');
        this.router.navigate(['/']);
        
      },error => {
        console.log(error);
        this.productoform.reset();
      })
    }else{
      //Agrega el producto si no existe
        console.log (PRODUCTO);
        this._productoService.guardarProductos(PRODUCTO).subscribe(data => {
          this.toastr.success('¡El producto fue registrado con exito!', '¡Producto ingresado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.productoform.reset();
          this.toastr.error('Algo salió mal :C')
        })
    }
        
  }

  esEditar(){

    if(this.id !== null){
      this.titulo = "Editar producto";
      this._productoService.obtenerProductos(this.id).subscribe(data => {
        
        this.productoform.setValue({
          nombre :         data.nombre,
          peso :           data.peso,
          proveedor :      data.proveedor,
          unidades :       data.unidades,
          placa_vehiculo : data.placa_vehiculo,
          observaciones :  data.observaciones
        })
      })
    }
  }

}
