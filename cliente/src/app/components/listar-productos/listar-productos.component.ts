import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: producto[] = [];


  constructor(private _productoService: ProductoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
    
  }

  
  eliminarProductos(id: any) { this.toastr.info('RECARGUE LA PAGINA PORFAVOR','El producto fue eliminado con exito');
    this._productoService.eliminarProductos(id).subscribe(data => { 
      this.obtenerProductos();
      
    }, error => {
      console.log(error);
    })

  }
}