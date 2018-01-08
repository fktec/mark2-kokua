import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';


@Injectable()
export class ValidacaoSlides{

    constructor(public formBuilder: FormBuilder){}

    // Futuramente criar classes de validador especificas
    criaFormBuilder(){
        return this.formBuilder.group({
            categoria: ['', Validators.required],
            descricao: ['', Validators.required],
            evento: ['', Validators.required],
            precoMasculino: [0, Validators.required],
            precoFeminino: [0, Validators.required],
            site: ['', Validators.required],
            mapa: ['', Validators.required],
            dataInicial: ['', Validators.required],
            dataFinal: ['', Validators.required],
            horaInicial: ['', Validators.required],
            horaFinal: ['', Validators.required]
          });
    }

    

       

}