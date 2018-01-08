webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.vaiPara = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ProjetoIonic\NOVO\mapaTest\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>loginPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  TELA DE LOGIN\n  <button ion-button block (click)="vaiPara()">Logar</button>\n</ion-content>\n'/*ion-inline-end:"C:\ProjetoIonic\NOVO\mapaTest\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_mapa_mapa_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_camera_camera_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_agendamento_agendamento__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_agendamento_agendamento_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__domain_validator_validacao_slides__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, _mapaService, _cameraService, _agendamentoService, formBuilder, _validacaoService) {
        this.navCtrl = navCtrl;
        this._mapaService = _mapaService;
        this._cameraService = _cameraService;
        this._agendamentoService = _agendamentoService;
        this.formBuilder = formBuilder;
        this._validacaoService = _validacaoService;
        this.botaoContinuar = "Continuar";
        this.ehTrue = false;
        this.agendamento = new __WEBPACK_IMPORTED_MODULE_4__domain_agendamento_agendamento__["a" /* Agendamento */]();
        this._agendamentoService.buscarCategorias(this.agendamento);
        // validation 
        this.meuForm = this._validacaoService.criaFormBuilder();
    }
    // carrega google maps
    HomePage.prototype.ionViewDidLoad = function () {
        this._mapaService.initAutocomplete();
        this.slides.lockSwipes(true);
    };
    HomePage.prototype.escolheImagem = function () {
        this._cameraService.escolherImagem(this.agendamento);
    };
    // A cada mudança no SLIDES
    HomePage.prototype.slideChanged = function () {
        var slideIndex = this.slides.getActiveIndex();
        console.log("INDEX: " + slideIndex);
        slideIndex == 0 ? this.slides.lockSwipes(true) : this.slides.lockSwipes(false); // Bloqueia o slide, se no primeiro slide
        this.slides.isEnd() ? this.botaoContinuar = 'Finalizar' : this.botaoContinuar = 'Continuar'; // Muda o texto, caso esteja no último slide
    };
    HomePage.prototype.goToSlide = function () {
        if (this.slides.lockSwipes)
            this.slides.lockSwipes(false); // Destrava o SWIPE se estiver travado
        if (this.slides.isEnd() || this.botaoContinuar == "Finalizar") {
            this.verificaCampos();
        }
        this.slides.slideNext();
    };
    HomePage.prototype.verificaCampos = function () {
        if (!this.meuForm.valid) {
            alert("Preencha todos os campos corretamente");
            this.ehTrue = true;
        }
        else {
            this._agendamentoService.agendar(this.agendamento, this._mapaService);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ProjetoIonic\NOVO\mapaTest\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content-principal" padding>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()" pager>\n\n     <ion-slide>\n        <div [formGroup]="meuForm" class="div-mapa">\n          <input id="pac-input" class="controls" formControlName="mapa" name="mapa" type="text" placeholder="Nome do evento">\n          <div [class.invalid]="meuForm.controls.mapa.invalid && (ehTrue)"  #map id="map"></div>\n        </div>           \n      </ion-slide>\n\n\n    <!-- SLIDE FOTO  -->\n      <ion-slide >\n        <ion-content [formGroup]="meuForm" class="content-form">\n                \n          <ion-item class="item-foto">\n                <button class="item-borda circulo-foto botao-camera" (click)="escolheImagem()">\n                        <img formControlName="foto" name="foto" class="imagem-foto" *ngIf="agendamento.ehFoto()" [src]="agendamento.url">    \n                        <ion-icon *ngIf="!agendamento.ehFoto()" name="camera"></ion-icon>\n                </button>\n          </ion-item>              \n       \n          <ion-item [class.invalid]="meuForm.controls.evento.invalid && (ehTrue)" class="item-input-foto item-borda">\n              <ion-input maxlength="50" formControlName="evento" name="evento" class="input-foto" type="text" [(ngModel)]="agendamento.evento" placeholder="Nome do evento"></ion-input>\n          </ion-item>\n       \n      </ion-content>    \n      </ion-slide> \n\n      <!-- SLIDE CATEGORIA -->\n      <ion-slide>\n          <ion-content [formGroup]="meuForm" class="content-form">\n            \n              <ion-item [class.invalid]="meuForm.controls.categoria.invalid && (ehTrue)" class="item-select item-borda" >\n                  <ion-label>Categoria do evento</ion-label>\n                  <ion-select formControlName="categoria" name="categoria" class="slide-descricao-select" [(ngModel)]="agendamento.categoria">\n                    <ion-option *ngFor="let categoria of agendamento.categorias" >{{categoria}}</ion-option>\n                  </ion-select>\n                </ion-item>\n            \n              <ion-item [class.invalid]="meuForm.controls.descricao.invalid && (ehTrue)" class="item-textarea item-borda">\n                  <ion-textarea maxlength="150" formControlName="descricao" name="descricao" id="textarea-descricao"  rows="5"  [(ngModel)]="agendamento.descricao" placeholder="Descrição do evento"></ion-textarea>\n              </ion-item>\n        </ion-content>  \n      </ion-slide>\n\n      <!-- SLIDE DATA e SITE -->\n      <ion-slide>\n        <ion-content [formGroup]="meuForm" class="content-form">\n\n            <ion-label class="label-slide-data">Preencha com a data de início e fim do evento</ion-label>\n            <ion-grid [class.invalid]="(meuForm.controls.dataInicial.invalid || meuForm.controls.dataFinal.invalid || meuForm.controls.horaInicial.invalid || meuForm.controls.horaFinal.invalid) && (ehTrue)" class="grid-data-hora">\n                <ion-row>\n                    <ion-col>\n                        <ion-datetime [(ngModel)]="agendamento.dataInicial" formControlName="dataInicial" displayFormat="DD/MM/YY" name="dataInicial" placeholder="Data 1" ></ion-datetime>\n                    </ion-col>\n                    <ion-col>\n                        <ion-datetime [(ngModel)]="agendamento.dataFinal" formControlName="dataFinal" name="dataFinal" displayFormat="DD/MM/YY" placeholder="Data 2"></ion-datetime>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-datetime [(ngModel)]="agendamento.horaInicial" formControlName="horaInicial" name="horaInicial"  displayFormat="HH:mm" placeholder="Hora 1"></ion-datetime>\n                    </ion-col>\n                    <ion-col>\n                        <ion-datetime [(ngModel)]="agendamento.horaFinal" formControlName="horaFinal" name="horaFinal"  displayFormat="HH:mm" placeholder="Hora 2"></ion-datetime>\n                    </ion-col>\n                </ion-row>    \n            </ion-grid>        \n\n            <!-- Preço e site -->\n            <ion-label class="label-slide-data">Preço do ingresso</ion-label>\n\n            <ion-item [class.invalid]="meuForm.controls.precoMasculino.invalid && (ehTrue)" class="item-mascfem item-borda">\n                <ion-label >M:</ion-label>\n                <ion-input class="input-foto" formControlName="precoMasculino" name="precoMasculino" [(ngModel)]="agendamento.ingressoMasculino" type="number"></ion-input>\n            </ion-item>\n            <ion-item [class.invalid]="meuForm.controls.precoFeminino.invalid && (ehTrue)" class="item-mascfem item-borda">\n                <ion-label >F:</ion-label>\n                <ion-input class="input-foto" formControlName="precoFeminino" name="precoFeminino" [(ngModel)]="agendamento.ingressoFeminino" type="number"></ion-input>\n            </ion-item>\n\n          <ion-item [class.invalid]="meuForm.controls.site.invalid && (ehTrue)" class="input-site item-input-foto item-borda">\n              <ion-input maxlength="50" formControlName="site" name="site" class="input-foto" type="text" [(ngModel)]="agendamento.site" placeholder="Site de compra do ingresso"></ion-input>\n          </ion-item>\n       \n        \n          \n      </ion-content>  \n    </ion-slide>\n         \n    </ion-slides>\n    <button class="botao-geral" ion-button block type="submit" (click)="goToSlide()">{{botaoContinuar}}</button>\n    \n    \n  </ion-content>'/*ion-inline-end:"C:\ProjetoIonic\NOVO\mapaTest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__domain_mapa_mapa_service__["a" /* MapaService */],
            __WEBPACK_IMPORTED_MODULE_3__domain_camera_camera_service__["a" /* CameraService */],
            __WEBPACK_IMPORTED_MODULE_5__domain_agendamento_agendamento_service__["a" /* AgendamentoService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__domain_validator_validacao_slides__["a" /* ValidacaoSlides */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var localidade;
var lat;
var lng;
var MapaService = (function () {
    function MapaService() {
    }
    Object.defineProperty(MapaService.prototype, "localidade", {
        // GET E SETTER
        get: function () {
            return localidade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapaService.prototype, "latitude", {
        get: function () {
            return lat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapaService.prototype, "longitude", {
        get: function () {
            return lng;
        },
        enumerable: true,
        configurable: true
    });
    // CRIA O MAPA
    MapaService.prototype.initAutocomplete = function () {
        var map = this.map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -22.9500614, lng: -43.38328910000001 },
            zoom: 15,
            mapTypeId: 'roadmap',
            mapTypeControl: false
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                // Guardar localidade, lag, lng
                localidade = place.formatted_address;
                lat = place.geometry.location.lat();
                lng = place.geometry.location.lng();
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    };
    MapaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapaService);
    return MapaService;
}());

//# sourceMappingURL=mapa-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraService = (function () {
    function CameraService(_alertCtrl, _camera) {
        this._alertCtrl = _alertCtrl;
        this._camera = _camera;
        this._key = '';
    }
    Object.defineProperty(CameraService.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (newKey) {
            this._key = newKey;
        },
        enumerable: true,
        configurable: true
    });
    CameraService.prototype.gravaUrl = function (key, url) {
        localStorage.setItem(key, url);
    };
    CameraService.prototype.findUrl = function (agendamento) {
        var key = agendamento.pegaKey(agendamento);
        return localStorage.getItem(key);
    };
    CameraService.prototype.escolherImagem = function (agendamento) {
        var _this = this;
        var alert = this._alertCtrl.create();
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
            handler: function (data) {
                data == "foto" ?
                    _this.tiraFoto(agendamento)
                    :
                        _this.abreAlbum(agendamento);
            }
        });
        alert.present();
    };
    CameraService.prototype.tiraFoto = function (agendamento) {
        var _this = this;
        this._camera.getPicture({
            destinationType: this._camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            allowEdit: true,
            targetHeight: 500,
            targetWidth: 500
        }).then(function (url) {
            var key = agendamento.pegaKey();
            _this.gravaUrl(key, url);
            agendamento.url = url;
        }).catch(function (err) { return console.log(err); });
    };
    CameraService.prototype.abreAlbum = function (agendamento) {
        var _this = this;
        this._camera.getPicture({
            destinationType: this._camera.DestinationType.FILE_URI,
            targetHeight: 1000,
            targetWidth: 1000,
            sourceType: this._camera.PictureSourceType.PHOTOLIBRARY
        }).then(function (url) {
            var key = agendamento.pegaKey();
            _this.gravaUrl(key, url);
            agendamento.url = url;
        }).catch(function (err) { return console.log(err); });
    };
    CameraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraService);
    return CameraService;
}());

//# sourceMappingURL=camera-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agendamento_dao__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendamentoService = (function () {
    function AgendamentoService(_dao, _http, _loadingCtrl) {
        this._dao = _dao;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
    }
    AgendamentoService.prototype.agendar = function (agendamento, mapa) {
        agendamento.addMapa(mapa);
        this._dao.gravar(agendamento);
    };
    AgendamentoService.prototype.buscarCategorias = function (agendamento) {
        var loader = this._loadingCtrl.create({
            content: "Buscando Dados. Aguarde ...",
        });
        loader.present();
        // aqui http, precisa vim já organizado por ordem alfabetica
        this._http
            .get("https://kokuatest.herokuapp.com/")
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (categorias) {
            agendamento.categorias = categorias;
            loader.dismiss();
        });
    };
    AgendamentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agendamento_dao__["a" /* AgendamentoDao */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], AgendamentoService);
    return AgendamentoService;
}());

//# sourceMappingURL=agendamento-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendario_calendar_service__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgendamentoDao = (function () {
    function AgendamentoDao(_calendarService, _storage, app, _alertCtrl) {
        this._calendarService = _calendarService;
        this._storage = _storage;
        this.app = app;
        this._alertCtrl = _alertCtrl;
        this.nav = app.getActiveNav();
    }
    AgendamentoDao.prototype.gravar = function (agendamento) {
        var _this = this;
        // (TESTE) Mostra dados recebidos
        agendamento.realizaAgendamento();
        var key = agendamento.pegaKey();
        this.jaExiste(key)
            .then(function (existe) {
            if (existe)
                throw 'Agendamento já existente'; // Gera uma Exception com essa mensagem
            _this._storage.set(key, agendamento);
        })
            .then(function () {
            _this._alertCtrl.create({
                title: 'Agendamento realizado com sucesso',
                buttons: [{ text: 'Finalizar', handler: function () {
                            _this.alertaPenultimo(agendamento);
                        }
                    }]
            }).present();
        })
            .catch(function (err) { console.log(err); });
    };
    AgendamentoDao.prototype.jaExiste = function (key) {
        return this._storage.get(key)
            .then(function (dado) {
            return dado ? true : false;
        });
    };
    // separar responsabilidade depois
    AgendamentoDao.prototype.alertaPenultimo = function (agendamento) {
        var _this = this;
        this._alertCtrl.create({
            title: "Deseja criar um lembrete no calendário?",
            buttons: [
                { text: 'Não', handler: function () {
                        _this.alertaFinal();
                    } }, { text: 'Sim', handler: function () {
                        _this._calendarService.criarEvento(agendamento);
                        _this.alertaFinal();
                    } }
            ]
        }).present();
    };
    AgendamentoDao.prototype.alertaFinal = function () {
        var _this = this;
        this._alertCtrl.create({
            title: "Deseja criar um evento no Facebook?",
            buttons: [
                { text: 'Não', handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
                    } }, { text: 'Sim', handler: function () {
                        //             alert("Criou evento no Facebook");
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
                    } }
            ]
        }).present();
    };
    AgendamentoDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__calendario_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], AgendamentoDao);
    return AgendamentoDao;
}());

//# sourceMappingURL=agendamento-dao.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_calendar__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarService = (function () {
    function CalendarService(_calendar) {
        this._calendar = _calendar;
    }
    CalendarService.prototype.criarEvento = function (agendamento) {
        this._calendar.createEvent(agendamento.evento, agendamento.localidade, agendamento.descricao, this.corrigiData(agendamento.dataInicial, agendamento.horaInicial), this.corrigiData(agendamento.dataFinal, agendamento.horaFinal))
            .then(function () { alert("Evento criado no calendário com sucesso"); })
            .catch(function (err) { return alert("Erro ocorrido: " + err); });
    };
    // Devido ao passar p/ o calendar estar subtraindo 1 dia, e juntando com a hora
    CalendarService.prototype.corrigiData = function (data, hora) {
        var date = new Date(data);
        return new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 2) + " " + hora);
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_calendar__["a" /* Calendar */]])
    ], CalendarService);
    return CalendarService;
}());

//# sourceMappingURL=calendar-service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidacaoSlides; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidacaoSlides = (function () {
    function ValidacaoSlides(formBuilder) {
        this.formBuilder = formBuilder;
    }
    // Futuramente criar classes de validador especificas
    ValidacaoSlides.prototype.criaFormBuilder = function () {
        return this.formBuilder.group({
            categoria: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            descricao: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            evento: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            precoMasculino: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            precoFeminino: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            site: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            mapa: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dataInicial: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            dataFinal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            horaInicial: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            horaFinal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    ValidacaoSlides = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ValidacaoSlides);
    return ValidacaoSlides;
}());

//# sourceMappingURL=validacao-slides.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__domain_mapa_mapa_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domain_camera_camera_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__domain_agendamento_agendamento_dao__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__domain_agendamento_agendamento_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__domain_calendario_calendar_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__domain_validator_validacao_slides__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_toPromise__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */]({
        name: 'agendamentos',
        storeName: 'agendamento'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* Storage */], useFactory: provideStorage },
                __WEBPACK_IMPORTED_MODULE_11__domain_mapa_mapa_service__["a" /* MapaService */],
                __WEBPACK_IMPORTED_MODULE_12__domain_camera_camera_service__["a" /* CameraService */],
                __WEBPACK_IMPORTED_MODULE_14__domain_agendamento_agendamento_service__["a" /* AgendamentoService */],
                __WEBPACK_IMPORTED_MODULE_15__domain_calendario_calendar_service__["a" /* CalendarService */],
                __WEBPACK_IMPORTED_MODULE_16__domain_validator_validacao_slides__["a" /* ValidacaoSlides */],
                __WEBPACK_IMPORTED_MODULE_13__domain_agendamento_agendamento_dao__["a" /* AgendamentoDao */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ProjetoIonic\NOVO\mapaTest\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ProjetoIonic\NOVO\mapaTest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Agendamento; });
// ../../assets/imgs/logo.png
var Agendamento = (function () {
    function Agendamento(localidade, lat, lng, url, evento, categoria, descricao, dataInicial, dataFinal, horaInicial, horaFinal, ingressoMasculino, ingressoFeminino, site) {
        if (localidade === void 0) { localidade = ''; }
        if (lat === void 0) { lat = 0; }
        if (lng === void 0) { lng = 0; }
        if (url === void 0) { url = ''; }
        if (evento === void 0) { evento = ''; }
        if (categoria === void 0) { categoria = ''; }
        if (descricao === void 0) { descricao = ''; }
        if (dataInicial === void 0) { dataInicial = ''; }
        if (dataFinal === void 0) { dataFinal = ''; }
        if (horaInicial === void 0) { horaInicial = ''; }
        if (horaFinal === void 0) { horaFinal = ''; }
        if (ingressoMasculino === void 0) { ingressoMasculino = 0; }
        if (ingressoFeminino === void 0) { ingressoFeminino = 0; }
        if (site === void 0) { site = ''; }
        this.localidade = localidade;
        this.lat = lat;
        this.lng = lng;
        this.url = url;
        this.evento = evento;
        this.categoria = categoria;
        this.descricao = descricao;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.horaInicial = horaInicial;
        this.horaFinal = horaFinal;
        this.ingressoMasculino = ingressoMasculino;
        this.ingressoFeminino = ingressoFeminino;
        this.site = site;
    }
    Agendamento.prototype.ehFoto = function () {
        return this.url ? true : false;
    };
    Agendamento.prototype.addMapa = function (mapa) {
        this.localidade = mapa.localidade;
        this.lat = mapa.latitude;
        this.lng = mapa.longitude;
    };
    Agendamento.prototype.pegaKey = function () {
        return this.evento.replace(/( )+/g, '') + "!@" + this.categoria.replace(/( )+/g, '');
    };
    // Teste
    Agendamento.prototype.realizaAgendamento = function () {
        alert(this.evento + ", " + "\n" +
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
    };
    return Agendamento;
}());

//# sourceMappingURL=agendamento.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map