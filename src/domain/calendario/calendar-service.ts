import { Injectable } from "@angular/core";
import { Calendar } from '@ionic-native/calendar';
import { Agendamento } from "../agendamento/agendamento";


@Injectable()
export class CalendarService{
    constructor(private _calendar: Calendar){}

    criarEvento(agendamento: Agendamento){
        this._calendar.createEvent(agendamento.evento, agendamento.localidade,
             agendamento.descricao, this.corrigiData(agendamento.dataInicial, agendamento.horaInicial), this.corrigiData(agendamento.dataFinal, agendamento.horaFinal)
            
            )
            .then(() => {alert("Evento criado no calendário com sucesso")})
            .catch((err) => alert("Erro ocorrido: " + err))    ;
    }

     // Devido ao passar p/ o calendar estar subtraindo 1 dia, e juntando com a hora
     corrigiData(data, hora){
        let date = new Date(data);
        return new Date(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate()+2) + " " + hora);
    }

}