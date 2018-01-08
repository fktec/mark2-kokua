import { MapaService } from "../mapa/mapa-service";

// ../../assets/imgs/logo.png
export class Agendamento{

    public categorias: string[];

    constructor(public localidade:string = '',
                public lat:number = 0,
                public lng:number = 0,
                public url = '',
                public evento: string = '',
                public categoria: string = '',
                public descricao: string = '',
                public dataInicial: string = '',
                public dataFinal: string = '',
                public horaInicial: string = '',
                public horaFinal: string = '',
                public ingressoMasculino: number = 0,
                public ingressoFeminino: number = 0,
                public site: string = '',
                ){}

    ehFoto(){
        return this.url ? true : false;
    }

    addMapa(mapa: MapaService){
        this.localidade = mapa.localidade;
        this.lat = mapa.latitude;
        this.lng = mapa.longitude;
    }
    
    pegaKey(){
        return this.evento.replace(/( )+/g,'') + "!@" + this.categoria.replace(/( )+/g,'');
    }

    // Teste
    realizaAgendamento(){

        
        alert(    
                this.evento + ", " + "\n" +
                this.categoria + ", " + "\n" +
                this.descricao + ", " + "\n" +
                this.dataInicial + ", " + "\n" +
                this.dataFinal + ", " + "\n" +
                this.horaInicial + ", " + "\n" +
                this.horaFinal + ", " + "\n" +
                this.ingressoMasculino + ", " + "\n" +
                this.ingressoFeminino + ", " + "\n" +
                this.site + "\n" +
                "Localidade: " + this.localidade + "\n" +
                "Lat: " + this.lat + "\n" +
                "Long: " + this.lng + "\n" +  
                "Imagem: " + this.url);  
        }           
                 
                
}