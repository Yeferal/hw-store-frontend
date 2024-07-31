import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class Image {

    public imgForm: FormGroup = new FormGroup({
        img: new FormControl(null,null),
    });

    public files: any [] = [];
    public fileCapture: any;
    public preview: any;
    public previews: Array<any> = [];

    constructor(private sanitizer: DomSanitizer) {  }

    captureFile(event: any): any{
        this.fileCapture = event.target.files[0];
        this.extraerBase64(this.fileCapture).then((imagen: any) => {
            this.preview = imagen.base;
            // console.log(imagen);
            
        });

        this.files.push(this.fileCapture);
    }

    captureFiles(...items: any[]): any{
        for (let i = 0; i < items.length; i++) {
            this.fileCapture = items[i];
            this.extraerBase64(this.fileCapture).then((imagen: any) => {
                this.previews.push(imagen.base);
            });
            
        }

        this.files.push(this.fileCapture);
        
    }

    removeFile(event: any) {
        this.previews.splice(this.files.indexOf(event), 1);
        this.files.splice(this.files.indexOf(event), 1);
    }

    removeAllFile() {
      this.previews = [];
      this.files = [];
  }

    extraerBase64 = async ($event: any) => new Promise((resolve, reject):any => {
        try {
          const unsafeImg = window.URL.createObjectURL($event);
          const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
          const reader = new FileReader();
          reader.readAsDataURL($event);
          reader.onload = () => {
            resolve({
              // blob: $event,
              // image,
              base: reader.result
            });
          };
          reader.onerror = error => {
            resolve({
              // blob: $event,
              // image,
              base: null
            });
          };
        } catch (e) {
          return null;
        }
    });

    getFormFile(): any{
        try {
          const formFile = new FormData();
          // console.log(this.files);
          this.files.forEach( archivo => {
            // console.log(archivo);
            formFile.append('img',archivo);
          });
          // let file: any = this.captureFile;
        //   formFile.append('nombre',this.productForm.get('nombre')?.value);
        //   formFile.append('precio_unitario',this.productForm.get('precio_unitario')?.value);
        //   formFile.append('estado',this.productForm.get('estado')?.value);
        //   formFile.append('descripcion',this.productForm.get('descripcion')?.value);
          return formFile;
        } catch (error) {
          console.log(error);
          return ;
        }
    }
}
