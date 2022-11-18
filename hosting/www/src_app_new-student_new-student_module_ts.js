"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-student_new-student_module_ts"],{

/***/ 7635:
/*!***********************************************************!*\
  !*** ./src/app/new-student/new-student-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageRoutingModule": () => (/* binding */ NewStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page */ 4589);




const routes = [
    {
        path: '',
        component: _new_student_page__WEBPACK_IMPORTED_MODULE_0__.NewStudentPage
    }
];
let NewStudentPageRoutingModule = class NewStudentPageRoutingModule {
};
NewStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewStudentPageRoutingModule);



/***/ }),

/***/ 1682:
/*!***************************************************!*\
  !*** ./src/app/new-student/new-student.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPageModule": () => (/* binding */ NewStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student-routing.module */ 7635);
/* harmony import */ var _new_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page */ 4589);







let NewStudentPageModule = class NewStudentPageModule {
};
NewStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewStudentPageRoutingModule,
        ],
        declarations: [_new_student_page__WEBPACK_IMPORTED_MODULE_1__.NewStudentPage],
    })
], NewStudentPageModule);



/***/ }),

/***/ 4589:
/*!*************************************************!*\
  !*** ./src/app/new-student/new-student.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewStudentPage": () => (/* binding */ NewStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-student.page.html?ngResource */ 1195);
/* harmony import */ var _new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-student.page.scss?ngResource */ 8637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ 4339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let NewStudentPage = class NewStudentPage {
    constructor(studentService, formBuilder, alertController) {
        this.studentService = studentService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.careers = ['ISC', 'IC', 'IBQ', 'IGE', 'ARQ', 'IM', 'IE'];
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            controlNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]+$'),
                ]),
            ],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            curp: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}([A-Z]{2})?([0-9]{2})?'),
                ]),
            ],
            age: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(1[8-9]|[2-9][0-9]|100)$'),
                ]),
            ],
            nip: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(1[0-9]|[2-9][0-9]|[1-9][0-9]{2,3})$'),
                ]),
            ],
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()[]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
                ]),
            ],
            career: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            photo: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^((http(s?)?)://)?([wW]{3}.)?[a-zA-Z0-9-.]+.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?(/[0-9]{3,})*$'),
                ]),
            ],
        });
        this.validationMessages = {
            controlNumber: [
                {
                    type: 'required',
                    message: 'Número de control obligatorio',
                },
                {
                    type: 'minlength',
                    message: 'Número de control debe ser de 8 dígitos',
                },
                {
                    type: 'maxlength',
                    message: 'Número de control debe ser de 8 dígitos',
                },
                {
                    type: 'pattern',
                    message: 'Número de control solo son dígitos',
                },
            ],
            name: [
                {
                    type: 'required',
                    message: 'El nombre es requerido',
                },
            ],
            curp: [
                {
                    type: 'required',
                    message: 'CURP requerido',
                },
                {
                    type: 'pattern',
                    message: 'El CURP ingresado no es válido',
                },
            ],
            age: [
                {
                    type: 'required',
                    message: 'La edad es requerida',
                },
                {
                    type: 'pattern',
                    message: 'Edad debe ser mayor a 17',
                },
            ],
            nip: [
                {
                    type: 'required',
                    message: 'El nip es requerido',
                },
                {
                    type: 'pattern',
                    message: 'El nip deberá ser mayor a 9 y menor a 10,000',
                },
            ],
            email: [
                {
                    type: 'required',
                    message: 'El correo electrónico es requerido',
                },
                {
                    type: 'pattern',
                    message: 'El correo electrónico no es válido',
                },
            ],
            career: [
                {
                    type: 'required',
                    message: 'Selecciona una carrera',
                },
            ],
            photo: [
                {
                    type: 'required',
                    message: 'La URL de la foto es requerida',
                },
                {
                    type: 'pattern',
                    message: 'La URL ingresada no es válida',
                },
            ],
        };
    }
    addStudent() {
        this.newStudent = this.myForm[0];
        this.studentService.newStudent(this.student);
    }
    guardarEstudiante() {
        if (this.myForm.valid) {
            this.newStudent = {
                controlNumber: this.myForm.get('controlNumber').value,
                name: this.myForm.get('name').value,
                curp: this.myForm.get('curp').value,
                age: this.myForm.get('age').value,
                nip: this.myForm.get('nip').value,
                email: this.myForm.get('email').value,
                career: this.myForm.get('career').value,
                photo: this.myForm.get('photo').value,
            };
            this.studentService.newStudent(this.newStudent);
            this.myForm.reset();
            this.presentAlert();
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Se guardó el nuevo estudiante',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
NewStudentPage.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
NewStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new-student',
        template: _new_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewStudentPage);



/***/ }),

/***/ 8637:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".error-message {\n  color: #ff4961;\n  text-align: right;\n  padding-right: 5px;\n  padding-top: 5px;\n  font-size: 13px;\n}\n\n.btn {\n  float: right;\n  margin-top: 10px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1zdHVkZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcRGVzYXJyb2xsbyUyMGRlJTIwQXBsaWNhY2lvbmVzJTIwSGlicmlkYXNcXGJsYW5rMDFcXHNyY1xcYXBwXFxuZXctc3R1ZGVudFxcbmV3LXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoibmV3LXN0dWRlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjZmY0OTYxO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmZjQ5NjE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 1195:
/*!**************************************************************!*\
  !*** ./src/app/new-student/new-student.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Agregar nuevo estudiante</ion-title>\n    <ion-tab-button slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-tab-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form [formGroup]=\"myForm\">\n      <!-- Número de control -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Número de control </ion-label>\n            <ion-input formControlName=\"controlNumber\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container\n              *ngFor=\"let item of validationMessages['controlNumber']\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('controlNumber').dirty || myForm.get('controlNumber').touched) &&\n                myForm.get('controlNumber').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Nombre -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Nombre completo </ion-label>\n            <ion-input formControlName=\"name\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['name']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('name').dirty || myForm.get('name').touched) &&\n                myForm.get('name').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- CURP -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> CURP </ion-label>\n            <ion-input formControlName=\"curp\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['curp']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('curp').dirty || myForm.get('curp').touched) &&\n                myForm.get('curp').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Edad -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Edad </ion-label>\n            <ion-input formControlName=\"age\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['age']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('age').dirty || myForm.get('age').touched) &&\n                myForm.get('age').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Nip -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> NIP </ion-label>\n            <ion-input formControlName=\"nip\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['nip']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('nip').dirty || myForm.get('nip').touched) &&\n                myForm.get('nip').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Email -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Email </ion-label>\n            <ion-input formControlName=\"email\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['email']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('email').dirty || myForm.get('email').touched) &&\n                myForm.get('email').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Carrera -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Carrera </ion-label>\n            <ion-select\n              formControlName=\"career\"\n              placeholder=\"Selecciona carrera\"\n            >\n              <ion-select-option *ngFor=\"let career of careers\" [value]=\"career\"\n                >{{ career }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['career']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('career').dirty || myForm.get('career').touched) &&\n                myForm.get('career').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Photo -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Foto URL </ion-label>\n            <ion-input formControlName=\"photo\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['photo']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('photo').dirty || myForm.get('photo').touched) &&\n                myForm.get('photo').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n  <ion-button (click)=\"guardarEstudiante()\" class=\"btn\" size=\"large\">\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\n    Guardar\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-student_new-student_module_ts.js.map