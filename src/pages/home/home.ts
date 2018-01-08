import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MapaService } from '../../domain/mapa/mapa-service';
import { CameraService } from '../../domain/camera/camera-service';

import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ValidacaoSlides } from '../../domain/validator/validacao-slides';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  @ViewChild(Slides) slides: Slides;
  public botaoContinuar: string = "Continuar";
  public agendamento: Agendamento;
  
  public meuForm: FormGroup;
  public ehTrue: boolean = false;
  public loader;

  
  constructor(public navCtrl: NavController,
     private _mapaService: MapaService,
     public _cameraService: CameraService,
     private _agendamentoService: AgendamentoService,
     public formBuilder: FormBuilder,
     private _validacaoService: ValidacaoSlides
     )
     {       
        this.agendamento = new Agendamento();
        this._agendamentoService.buscarCategorias(this.agendamento);
                
        // validation 
        this.meuForm = this._validacaoService.criaFormBuilder();
     }


  // carrega google maps
  ionViewDidLoad(){
    this._mapaService.initAutocomplete();    
    this.slides.lockSwipes(true);
  }

  escolheImagem(){
    this._cameraService.escolherImagem(this.agendamento);  
  }

  // A cada mudança no SLIDES
  slideChanged() {
    let slideIndex = this.slides.getActiveIndex();
    console.log("INDEX: " + slideIndex);
    slideIndex == 0 ? this.slides.lockSwipes(true) : this.slides.lockSwipes(false);                   // Bloqueia o slide, se no primeiro slide
    this.slides.isEnd() ? this.botaoContinuar = 'Finalizar': this.botaoContinuar = 'Continuar';       // Muda o texto, caso esteja no último slide
  }

  goToSlide() {
    if(this.slides.lockSwipes) this.slides.lockSwipes(false) ;                                        // Destrava o SWIPE se estiver travado

    if(this.slides.isEnd() || this.botaoContinuar == "Finalizar"){
      this.verificaCampos();
    }
     this.slides.slideNext();
  }

  verificaCampos(){
    if(!this.meuForm.valid){
        alert("Preencha todos os campos corretamente");
        this.ehTrue = true;
    }else{
        this._agendamentoService.agendar(this.agendamento, this._mapaService);     
    }
} 


  
}
 
  


