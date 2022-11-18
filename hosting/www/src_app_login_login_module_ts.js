"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);






let LoginPage = class LoginPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.myForm = this.formBuilder.group({
                user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
            });
            this.validationMessages = {
                user: [
                    {
                        type: 'required',
                        message: 'Usuario requerido',
                    },
                ],
                password: [
                    {
                        type: 'required',
                        message: 'Password requerido',
                    },
                ],
            };
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.onLoginSuccess(this.myForm.get('user').value, this.myForm.get('password').value);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);




let AuthenticationService = class AuthenticationService {
    constructor(router, alertController) {
        this.router = router;
        this.alertController = alertController;
        this.users = [{ user: 'god', password: 'god' }];
    }
    onLoginSuccess(user, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (user === this.users[0].user && password === this.users[0].password) {
                yield this.router.navigate(['/home']);
            }
            else {
                this.presentAlert();
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Credenciales no válidas',
                message: 'Pulsa F12 y verifica el mensaje en consola',
                buttons: ['OK'],
            });
            console.log('user: god\npassword: god');
            yield alert.present();
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthenticationService);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".card-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.card-container ion-card {\n  max-width: 600px;\n}\n.card-container ion-card .ion-white-bkg {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.card-container ion-card .ion-white-bkg img {\n  height: 60%;\n}\n.card-container ion-card .welcome #trigger-icon {\n  float: right;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 576px) {\n  .card-container ion-card .ion-blue-bkg {\n    max-height: 200px;\n  }\n  .card-container ion-card .welcome {\n    min-height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcRGVzYXJyb2xsbyUyMGRlJTIwQXBsaWNhY2lvbmVzJTIwSGlicmlkYXNcXGJsYW5rMDFcXHNyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURBSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERE07RUFDRSxXQUFBO0FDR1I7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FETUE7RUFHTTtJQUNFLGlCQUFBO0VDTE47RURPSTtJQUNFLGlCQUFBO0VDTE47QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAuaW9uLXdoaXRlLWJrZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWUge1xyXG4gICAgICAjdHJpZ2dlci1pY29uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAuaW9uLWJsdWUtYmtnIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgfVxyXG4gICAgICAud2VsY29tZSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLWNvbnRhaW5lciBpb24tY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG4uY2FyZC1jb250YWluZXIgaW9uLWNhcmQgLmlvbi13aGl0ZS1ia2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciBpb24tY2FyZCAuaW9uLXdoaXRlLWJrZyBpbWcge1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5jYXJkLWNvbnRhaW5lciBpb24tY2FyZCAud2VsY29tZSAjdHJpZ2dlci1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2FyZC1jb250YWluZXIgaW9uLWNhcmQgLmlvbi1ibHVlLWJrZyB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmNhcmQtY29udGFpbmVyIGlvbi1jYXJkIC53ZWxjb21lIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"card-container\">\n    <ion-card>\n      <ion-row>\n        <ion-col size-md=\"3\" size=\"12\" class=\"ion-padding ion-white-bkg\">\n          <img\n            src=\"../../assets/itt_escudo.png\"\n            alt=\"Logo Tec\"\n            loading=\"lazy\"\n          />\n        </ion-col>\n        <ion-col size-md=\"9\" size=\"12\" class=\"welcome\">\n          <ion-card-header>\n            <ion-card-title>\n              ¡Bienvenido a la app de estudiantes!\n            </ion-card-title>\n            <form [formGroup]=\"myForm\">\n              <!-- nombre de usuario -->\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\"> Usuario </ion-label>\n                    <ion-input formControlName=\"user\"> </ion-input>\n                  </ion-item>\n                  <div>\n                    <ng-container\n                      *ngFor=\"let item of validationMessages['user']\"\n                    >\n                      <div\n                        class=\"error-message\"\n                        *ngIf=\"\n                (myForm.get('user').dirty || myForm.get('user').touched) &&\n                myForm.get('user').hasError(item.type)\"\n                      >\n                        {{item.message}}\n                      </div>\n                    </ng-container>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <!-- password -->\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\"> Password </ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\">\n                    </ion-input>\n                  </ion-item>\n                  <div>\n                    <ng-container\n                      *ngFor=\"let item of validationMessages['password']\"\n                    >\n                      <div\n                        class=\"error-message\"\n                        *ngIf=\"\n                (myForm.get('password').dirty || myForm.get('password').touched) &&\n                myForm.get('password').hasError(item.type)\"\n                      >\n                        {{item.message}}\n                      </div>\n                    </ng-container>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-button (click)=\"login()\" color=\"primary\">\n              Iniciar sesión\n            </ion-button>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map