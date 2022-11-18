"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_update-student_update-student_module_ts"],{

/***/ 5686:
/*!*****************************************************************!*\
  !*** ./src/app/update-student/update-student-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStudentPageRoutingModule": () => (/* binding */ UpdateStudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _update_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-student.page */ 9647);




const routes = [
    {
        path: '',
        component: _update_student_page__WEBPACK_IMPORTED_MODULE_0__.UpdateStudentPage
    }
];
let UpdateStudentPageRoutingModule = class UpdateStudentPageRoutingModule {
};
UpdateStudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateStudentPageRoutingModule);



/***/ }),

/***/ 8902:
/*!*********************************************************!*\
  !*** ./src/app/update-student/update-student.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStudentPageModule": () => (/* binding */ UpdateStudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-student-routing.module */ 5686);
/* harmony import */ var _update_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-student.page */ 9647);







let UpdateStudentPageModule = class UpdateStudentPageModule {
};
UpdateStudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _update_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateStudentPageRoutingModule,
        ],
        declarations: [_update_student_page__WEBPACK_IMPORTED_MODULE_1__.UpdateStudentPage],
    })
], UpdateStudentPageModule);



/***/ }),

/***/ 9647:
/*!*******************************************************!*\
  !*** ./src/app/update-student/update-student.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateStudentPage": () => (/* binding */ UpdateStudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-student.page.html?ngResource */ 1614);
/* harmony import */ var _update_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-student.page.scss?ngResource */ 1899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ 4339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let UpdateStudentPage = class UpdateStudentPage {
    constructor(studentService, activatedRouteService, formBuilder, alertController) {
        this.studentService = studentService;
        this.activatedRouteService = activatedRouteService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.careers = ['ISC', 'IC', 'IBQ', 'IGE', 'ARQ', 'IM', 'IE'];
    }
    ngOnInit() {
        this.activatedRouteService.queryParams.subscribe((params) => {
            this.student = this.studentService.getStudentByControlNumber(params.controlNumber);
        });
        this.myForm = this.formBuilder.group({
            controlNumber: [
                this.student.controlNumber,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]+$'),
                ]),
            ],
            name: [this.student.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            curp: [
                this.student.curp,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}([A-Z]{2})?([0-9]{2})?'),
                ]),
            ],
            age: [
                this.student.age,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(1[8-9]|[2-9][0-9]|100)$'),
                ]),
            ],
            nip: [
                this.student.nip,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(1[0-9]|[2-9][0-9]|[1-9][0-9]{2,3})$'),
                ]),
            ],
            email: [
                this.student.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()[]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
                ]),
            ],
            career: [this.student.career, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])],
            photo: [
                this.student.photo,
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
        this.myForm.get('name').markAsDirty();
        this.myForm.get('curp').markAsDirty();
        this.myForm.get('age').markAsDirty();
        this.myForm.get('email').markAsDirty();
        this.myForm.get('career').markAsDirty();
        this.myForm.get('photo').markAsDirty();
    }
    guardarEstudiante() {
        console.log(this.myForm.valid);
        if (this.myForm.valid) {
            this.updatedStudent = {
                controlNumber: this.myForm.get('controlNumber').value,
                name: this.myForm.get('name').value,
                curp: this.myForm.get('curp').value,
                age: this.myForm.get('age').value,
                nip: this.myForm.get('nip').value,
                email: this.myForm.get('email').value,
                career: this.myForm.get('career').value,
                photo: this.myForm.get('photo').value,
            };
            this.studentService.updateStudent(this.updatedStudent);
            this.presentAlert();
        }
        else {
            this.presentAlert2();
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Se actualizaron los datos del estudiante',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Verifica que los campos estén correctos',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
UpdateStudentPage.ctorParameters = () => [
    { type: _services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UpdateStudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-student',
        template: _update_student_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_student_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateStudentPage);



/***/ }),

/***/ 1899:
/*!********************************************************************!*\
  !*** ./src/app/update-student/update-student.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".btn {\n  float: right;\n  margin-top: 10px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1zdHVkZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcRGVzYXJyb2xsbyUyMGRlJTIwQXBsaWNhY2lvbmVzJTIwSGlicmlkYXNcXGJsYW5rMDFcXHNyY1xcYXBwXFx1cGRhdGUtc3R1ZGVudFxcdXBkYXRlLXN0dWRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJ1cGRhdGUtc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuIiwiLmJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 1614:
/*!********************************************************************!*\
  !*** ./src/app/update-student/update-student.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Modificar estudiante</ion-title>\n    <ion-tab-button slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-tab-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form [formGroup]=\"myForm\">\n      <!-- Número de control -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Número de control </ion-label>\n            <ion-input formControlName=\"controlNumber\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container\n              *ngFor=\"let item of validationMessages['controlNumber']\"\n            >\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('controlNumber').dirty || myForm.get('controlNumber').touched) &&\n                myForm.get('controlNumber').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Nombre -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Nombre completo </ion-label>\n            <ion-input formControlName=\"name\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['name']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('name').dirty || myForm.get('name').touched) &&\n                myForm.get('name').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- CURP -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> CURP </ion-label>\n            <ion-input formControlName=\"curp\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['curp']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('curp').dirty || myForm.get('curp').touched) &&\n                myForm.get('curp').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Edad -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Edad </ion-label>\n            <ion-input formControlName=\"age\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['age']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('age').dirty || myForm.get('age').touched) &&\n                myForm.get('age').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Nip -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> NIP </ion-label>\n            <ion-input formControlName=\"nip\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['nip']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('nip').dirty || myForm.get('nip').touched) &&\n                myForm.get('nip').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Email -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Email </ion-label>\n            <ion-input formControlName=\"email\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['email']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('email').dirty || myForm.get('email').touched) &&\n                myForm.get('email').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Carrera -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Carrera </ion-label>\n            <ion-select\n              formControlName=\"career\"\n              placeholder=\"Selecciona carrera\"\n            >\n              <ion-select-option *ngFor=\"let career of careers\" [value]=\"career\"\n                >{{ career }}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['career']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('career').dirty || myForm.get('career').touched) &&\n                myForm.get('career').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- Photo -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\"> Foto URL </ion-label>\n            <ion-input formControlName=\"photo\"> </ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let item of validationMessages['photo']\">\n              <div\n                class=\"error-message\"\n                *ngIf=\"\n                (myForm.get('photo').dirty || myForm.get('photo').touched) &&\n                myForm.get('photo').hasError(item.type)\"\n              >\n                {{item.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n  <ion-button (click)=\"guardarEstudiante()\" class=\"btn\" size=\"large\">\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\n    Guardar cambios\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_update-student_update-student_module_ts.js.map