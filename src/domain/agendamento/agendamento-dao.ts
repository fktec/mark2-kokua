import { Injectable} from "@angular/core";
import { Storage } from "@ionic/storage";
import { Agendamento } from "./agendamento";
import { LoginPage } from "../../pages/login/login";

import { NavController, App} from 'ionic-angular';
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { CalendarService } from "../calendario/calendar-service";

@Injectable()
export class AgendamentoDao{

    private nav: NavController

    constructor(private _calendarService: CalendarService, private _storage: Storage, private app: App, private _alertCtrl: AlertController){
        this.nav = app.getActiveNav();
    }


    gravar(agendamento: Agendamento,){

        // (TESTE) Mostra dados recebidos
        agendamento.realizaAgendamento();

        let key = agendamento.pegaKey();
        this.jaExiste(key)
        .then(existe => {
            if(existe) throw 'Agendamento já existente';                                                           // Gera uma Exception com essa mensagem
            this._storage.set(key, agendamento)
        })  
        .then(() => {
            this._alertCtrl.create({
                title: 'Agendamento realizado com sucesso',
                buttons: [{ text: 'Finalizar', handler: () => {
                    this.alertaPenultimo(agendamento);
                } 
                }]
              }).present();
        })  
        .catch((err) => {console.log(err)});
    }            
            
    
    jaExiste(key){
        return this._storage.get(key)
            .then(dado => {
                return dado ? true : false;
       });
    }

    // separar responsabilidade depois
    alertaPenultimo(agendamento: Agendamento){
        this._alertCtrl.create({
            title: "Deseja criar um lembrete no calendário?",
            buttons: [
            { text: 'Não', handler: () => {
                this.alertaFinal();
            }},{ text: 'Sim', handler: () => {
                this._calendarService.criarEvento(agendamento);
                this.alertaFinal();
            }}]
          }).present();
    }

    alertaFinal(){
        this._alertCtrl.create({
            title: "Deseja criar um evento no Facebook?",
            buttons: [
            { text: 'Não', handler: () => {
                this.nav.setRoot(LoginPage)
            }},{ text: 'Sim', handler: () => {
   //             alert("Criou evento no Facebook");
                this.nav.setRoot(LoginPage)
            }}]
          }).present();
    }

   


}

