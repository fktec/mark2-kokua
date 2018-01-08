import { Injectable } from "@angular/core";
import { AgendamentoDao } from "./agendamento-dao";
import { MapaService } from "../mapa/mapa-service";
import { Agendamento } from "./agendamento";
import { Http } from '@angular/http';
import { LoadingController } from "ionic-angular/components/loading/loading-controller";

@Injectable()
export class AgendamentoService {
    constructor(private _dao: AgendamentoDao, private _http: Http, private _loadingCtrl: LoadingController){}

    agendar(agendamento: Agendamento, mapa: MapaService){
        agendamento.addMapa(mapa);
        this._dao.gravar(agendamento);
    }

    buscarCategorias(agendamento: Agendamento){

        let loader = this._loadingCtrl.create({
            content: "Buscando Dados. Aguarde ...",
          });
          loader.present(); 		
        
        // aqui http, precisa vim já organizado por ordem alfabetica
        this._http
            .get("https://kokuatest.herokuapp.com/")
            .map(res => res.json())
            .toPromise()
            .then(categorias => {
                agendamento.categorias = categorias;
                loader.dismiss();
        });  
        
    }

}