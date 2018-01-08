import { Injectable } from "@angular/core";
import { Camera } from "@ionic-native/camera";
import { Agendamento } from "../agendamento/agendamento";
import { AlertController } from "ionic-angular/components/alert/alert-controller";


@Injectable()
export class CameraService{

    private  _key = '';

    constructor(private _alertCtrl: AlertController, private _camera: Camera){}


    get key(){
        return this._key;
    }

    set key(newKey){
        this._key = newKey;
    }

    gravaUrl(key, url){

        localStorage.setItem(key, url);
    }

    findUrl(agendamento){
        let key = agendamento.pegaKey(agendamento);
        return localStorage.getItem(key);
    }

    escolherImagem(agendamento: Agendamento){
  
        let alert = this._alertCtrl.create();
        alert.setTitle('Selecione uma imagem');
        
        // usar interfaces futuramente
        alert.addInput({
            type: 'radio',
            label: 'Escolher imagem',
            value: 'imagem',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Tirar foto',
            value: 'foto',
        });
        
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
            handler: data => {
                data == "foto" ? 
                    this.tiraFoto(agendamento)
                : 
                    this.abreAlbum(agendamento);
            }
        });
        alert.present();
    }
    
    

    tiraFoto(agendamento: Agendamento){
        
        this._camera.getPicture({
            destinationType: this._camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            correctOrientation: true,
        
            allowEdit: true,					
			targetHeight: 500,					
			targetWidth: 500
        }).then(url => {
            let key = agendamento.pegaKey();
            this.gravaUrl(key, url);  
            agendamento.url = url;    
        }).catch((err) => console.log(err));
    }


    abreAlbum(agendamento: Agendamento){
    
        this._camera.getPicture({
            destinationType: this._camera.DestinationType.FILE_URI,
            targetHeight: 1000,					
            targetWidth: 1000,
            sourceType: this._camera.PictureSourceType.PHOTOLIBRARY

        }).then(url => {
            let key = agendamento.pegaKey();
            this.gravaUrl(key, url);  
            agendamento.url = url;    
        }).catch((err) => console.log(err));
    }


}