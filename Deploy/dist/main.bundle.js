webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#showOrder{\r\n  padding-left: 50px;\r\n}\r\n\r\n.card{\r\n  margin-left: 50px;\r\n}\r\n\r\n#map{\r\n  height: 200px;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\ntr:nth-child(1) {\r\n  background-color: #dddddd;\r\n}\r\n\r\nlogin{\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\ncard{\r\n  background-color: red;\r\n  background: red;\r\n}\r\n\r\n.bg-primary{\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [user]=\"LoggedInUser\" (Feature)=\"OnNavigate($event)\"></app-navbar>\n<app-homepage *ngIf=\"LoadedFeature == 'homepage'\"></app-homepage>\n<br>\n<div class=\"container\" *ngIf=\"LoadedFeature == 'Orders'\">\n <div class=\"row\">\n   <div class=\"col-sm-12 col-md-6 col-lg-4\" *ngFor=\"let order of Orders ; let i = index;\">\n       <div class=\"card text-white mb-3\"\n            [ngClass]=\"{'bg-danger' : i >= 0 && i<10 , 'bg-warning' : i >= 10 && i<15 , 'bg-success' : i >= 15  }\"\n            style=\"width: 18rem;\">\n         <div class=\"card-body\">\n           <h5 class=\"card-title\"> Order No : {{ i+1 }}</h5>\n           <p class=\"card-text\">User       : {{order.userId}} <br> cart value : {{order.cart_value}}</p>\n           <p class=\"card-text\">Location: {{order.location_lat}} , {{order.location_long}}</p>\n           <button type=\"button\" (click)=\"SendOrderDetail(order)\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n             View Details\n           </button>\n         </div>\n       </div>\n   </div>\n   <app-order-detail *ngIf=\"selectedOrder\" [user]=\"LoggedInUser\" [ShowOrder]=\"selectedOrder\" [dishes]=\"Dishes\" [quantities]=\"Quantity\"></app-order-detail>\n </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"table-booking\">\n      <app-table-booking *ngIf=\"LoadedFeature === 'TableBooking'\" [SelectedOrder]=\"Orders\"></app-table-booking>\n    </div>\n\n</div>\n\n<div class=\"container\" *ngIf=\"LoadedFeature === 'Menu'\">\n  <app-menu-item [Restaurant]=\"LoggedInUser\" [Menu]=\"MenuItems\"></app-menu-item>\n</div>\n\n<div class=\"container\">\n  <app-discount [CurrentOffers]=\"CurrentOffers\" [Restaurant]=\"LoggedInUser\" *ngIf=\"LoadedFeature === 'Offers'\"></app-discount>\n</div>\n\n<div class=\"container\">\n  <app-restaurant-info [Restaurant]=\"LoggedInUser\" *ngIf=\"LoadedFeature == 'info'\"></app-restaurant-info>\n</div>\n\n\n<div class=\"container login\" *ngIf=\"LoadedFeature === 'Login'\">\n  <app-login (LoginSuccess)=\"showOrders($event)\"></app-login>\n</div>\n\n<div class=\"container\" *ngIf=\"LoadedFeature === 'Signup'\">\n  <app-signup></app-signup>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ordersService) {
        this.ordersService = ordersService;
        this.CurrentOffers = [];
        this.LoadedFeature = 'Login';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.SendOrderDetail = function (Order) {
        this.selectedOrder = Order;
        this.Dishes = Object.keys(Order.dishes);
        this.Quantity = Object.values(Order.dishes);
    };
    AppComponent.prototype.OnNavigate = function (feature) {
        this.LoadedFeature = feature;
        if (feature === 'Login') {
            this.LoggedInUser = null;
        }
    };
    AppComponent.prototype.showOrders = function (user) {
        var _this = this;
        this.LoggedInUser = user;
        this.ordersService.getOrders(user.restaurant_id).subscribe(function (order) {
            _this.Orders = order;
            // console.log(this.Orders);
        });
        this.LoadedFeature = 'Orders';
        this.getMenuItems();
        this.getOffers();
    };
    AppComponent.prototype.getMenuItems = function () {
        var _this = this;
        this.ordersService.getMenuItem(this.LoggedInUser.restaurant_id).subscribe(function (item) {
            _this.MenuItems = item;
        });
    };
    AppComponent.prototype.getOffers = function () {
        var _this = this;
        this.ordersService.getOffers(this.LoggedInUser.restaurant_id).subscribe(function (offer) {
            _this.Offers = offer;
            _this.getCurrentOffer();
        });
    };
    AppComponent.prototype.getCurrentOffer = function () {
        if (this.CurrentOffers) {
            for (var i = 0; i < this.CurrentOffers.length; i++) {
                this.CurrentOffers.pop();
            }
        }
        if (this.Offers) {
            for (var i = 0; i < this.Offers.length; i++) {
                var open_1 = this.Offers[i].date + ' ' + this.Offers[i].start_time;
                var close_1 = this.Offers[i].date + ' ' + this.Offers[i].end_time;
                var start = new Date(open_1).getTime();
                var end = new Date(close_1).getTime();
                var currTime = new Date().getTime();
                if (currTime > start && currTime < end) {
                    this.CurrentOffers.push(this.Offers[i]);
                }
            }
        }
        else {
            console.log('Offers does not exist');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail_component__ = __webpack_require__("./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__orders_orders_component__ = __webpack_require__("./src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__table_booking_table_booking_component__ = __webpack_require__("./src/app/table-booking/table-booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menu_item_menu_item_component__ = __webpack_require__("./src/app/menu-item/menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__discount_discount_component__ = __webpack_require__("./src/app/discount/discount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__homepage_first_section_first_section_component__ = __webpack_require__("./src/app/homepage/first-section/first-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__homepage_second_section_second_section_component__ = __webpack_require__("./src/app/homepage/second-section/second-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__homepage_third_section_third_section_component__ = __webpack_require__("./src/app/homepage/third-section/third-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__homepage_fourth_section_fourth_section_component__ = __webpack_require__("./src/app/homepage/fourth-section/fourth-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__homepage_fifth_section_fifth_section_component__ = __webpack_require__("./src/app/homepage/fifth-section/fifth-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__homepage_sixth_section_sixth_section_component__ = __webpack_require__("./src/app/homepage/sixth-section/sixth-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__restaurant_info_restaurant_info_component__ = __webpack_require__("./src/app/restaurant-info/restaurant-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail_component__["a" /* OrderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__table_booking_table_booking_component__["a" /* TableBookingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__menu_item_menu_item_component__["a" /* MenuItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__discount_discount_component__["a" /* DiscountComponent */],
                __WEBPACK_IMPORTED_MODULE_17__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__homepage_first_section_first_section_component__["a" /* FirstSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__homepage_second_section_second_section_component__["a" /* SecondSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__homepage_third_section_third_section_component__["a" /* ThirdSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__homepage_fourth_section_fourth_section_component__["a" /* FourthSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__homepage_fifth_section_fifth_section_component__["a" /* FifthSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__homepage_sixth_section_sixth_section_component__["a" /* SixthSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__restaurant_info_restaurant_info_component__["a" /* RestaurantInfoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].firebase, 'BingeTesting'),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDCQmappvjvLYDo5fCzIfhpV_YZW0uGn7U'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_10__services_orders_service__["a" /* OrdersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/discount/discount.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discount/discount.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10\"></div>\n  <div class=\"col-sm-2\">\n    <button class=\"btn btn-group-lg\" (click)=\"ShowOfferForm()\">Add Offers</button>\n  </div>\n</div>\n<br>\n\n<div *ngIf=\"OfferForm\" class=\"container\">\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"Title\" class=\"col-sm-2 col-form-label\">Title</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"title\" class=\"form-control\" id=\"Title\" placeholder=\"Title\">\n      </div>\n    </div>\n    <div class=\"discount-form\">\n      <div class=\"form-group row\">\n        <label for=\"date\" class=\"col-sm-2 col-form-label\">Date</label>\n        <div class=\"col-sm-6\">\n          <input type=\"date\" name=\"date\" [(ngModel)]=\"date\" class=\"form-control\" id=\"date\" (change) = \"findDay(date)\">\n        </div>\n        <label for=\"day\" class=\"col-sm-1 col-form-label\">Day</label>\n        <div class=\"col-sm-3\">\n          <!--<input type=\"text\" id=\"day\" class=\"form-control\">-->\n          <select class=\"form-control\" name=\"day\" id=\"day\" [(ngModel)]=\"day\">\n            <option selected> Select Day </option>\n            <option value=\"0\">Sunday</option>\n            <option value=\"1\">Monday</option>\n            <option value=\"2\">Tuesday</option>\n            <option value=\"3\">Wednesday</option>\n            <option value=\"4\">Thursday</option>\n            <option value=\"5\">Friday</option>\n            <option value=\"6\">Saturday</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"start_time\" class=\"col-sm-2 col-form-label\">Start Time</label>\n        <div class=\"col-sm-4\">\n          <input type=\"time\" name=\"price\" [(ngModel)]=\"start_time\" class=\"form-control\" id=\"start_time\">\n        </div>\n        <label for=\"end_time\" class=\"col-sm-2 col-form-label\">End Time</label>\n        <div class=\"col-sm-4\">\n          <input type=\"time\" name=\"price\" [(ngModel)]=\"end_time\" class=\"form-control\" id=\"end_time\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"discount\" class=\"col-sm-2 col-form-label\">Discount</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" [(ngModel)]=\"percentage\" name=\"discount\" class=\"form-control\" id=\"discount\" placeholder=\"Discount\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" (click)=\"SaveOffer(name, date, start_time , end_time , percentage )\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-12\" *ngFor=\"let Offer of CurrentOffers\">\n      <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-header\"><h5>{{Offer.title}}</h5></div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Discount : {{ Offer.discount }}</h5>\n          <br>\n          <p class=\"card-text\">Date : {{ Offer.date }} <br>\n            Day : {{ Offer.day }} <br>\n            Open : {{ Offer.start_time }} <br>\n            Close : {{ Offer.end_time }} <br>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discount/discount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscountComponent = /** @class */ (function () {
    function DiscountComponent(Services) {
        this.Services = Services;
        this.OfferForm = false;
    }
    DiscountComponent.prototype.ngOnInit = function () {
    };
    DiscountComponent.prototype.findDay = function (date) {
        this.day = new Date(date).getDay();
        console.log(this.day);
    };
    DiscountComponent.prototype.ShowOfferForm = function () {
        if (this.OfferForm) {
            this.OfferForm = false;
        }
        else {
            this.OfferForm = true;
        }
    };
    DiscountComponent.prototype.SaveOffer = function (name, date, start_time, end_time, percentage) {
        switch (this.day) {
            case 0:
                this.day = 'Sunday';
                break;
            case 1:
                this.day = 'Monday';
                break;
            case 2:
                this.day = 'Tuesday';
                break;
            case 3:
                this.day = 'Wednesday';
                break;
            case 4:
                this.day = 'Thursday';
                break;
            case 5:
                this.day = 'Friday';
                break;
            case 6: this.day = 'Saturday';
        }
        percentage = percentage + '%';
        this.Services.SaveOffer(this.Restaurant.restaurant_id, name, date, this.day, start_time, end_time, percentage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], DiscountComponent.prototype, "Restaurant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], DiscountComponent.prototype, "CurrentOffers", void 0);
    DiscountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-discount',
            template: __webpack_require__("./src/app/discount/discount.component.html"),
            styles: [__webpack_require__("./src/app/discount/discount.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], DiscountComponent);
    return DiscountComponent;
}());



/***/ }),

/***/ "./src/app/homepage/fifth-section/fifth-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/fifth-section/fifth-section.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"download bg-primary text-center\" id=\"download\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mx-auto\">\n        <h2 class=\"section-heading\">Discover what all the buzz is about!</h2>\n        <p>Our app is available on any mobile device! Download now to get started!</p>\n        <div class=\"badges\">\n          <a class=\"badge-link\" href=\"#\"><img src=\"../../assets/img/google-play-badge.svg\" alt=\"\"></a>\n          <a class=\"badge-link\" href=\"#\"><img src=\"../../assets/img/app-store-badge.svg\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/homepage/fifth-section/fifth-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FifthSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FifthSectionComponent = /** @class */ (function () {
    function FifthSectionComponent() {
    }
    FifthSectionComponent.prototype.ngOnInit = function () {
    };
    FifthSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fifth-section',
            template: __webpack_require__("./src/app/homepage/fifth-section/fifth-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/fifth-section/fifth-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FifthSectionComponent);
    return FifthSectionComponent;
}());



/***/ }),

/***/ "./src/app/homepage/first-section/first-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/first-section/first-section.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row h-100\">\r\n      <div class=\"col-lg-7 my-auto\">\r\n        <div class=\"header-content mx-auto\">\r\n          <h1 class=\"mb-5\">\r\n            <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\r\n              <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\">\r\n                  Ye toh khaya hi nahi\r\n                </div>\r\n                <div class=\"carousel-item\">\r\n                  Waiting for your order inside the restaurant\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </h1>\r\n          <a href=\"#download\" class=\"btn btn-outline btn-xl js-scroll-trigger\">Discover Food Now!</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 my-auto\">\r\n        <br>\r\n        <div class=\"device-container\">\r\n          <div class=\"device-mockup iphone6_plus portrait black\">\r\n            <div class=\"device\">\r\n              <div class=\"screen\">\r\n                <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->\r\n                <img src=\"http://binge.digital/img/mainscreen.jpg\" class=\"img-fluid\" alt=\"\">\r\n              </div>\r\n              <div class=\"button\">\r\n                <!-- You can hook the \"home button\" to some JavaScript events or just remove it -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/homepage/first-section/first-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstSectionComponent = /** @class */ (function () {
    function FirstSectionComponent() {
    }
    FirstSectionComponent.prototype.ngOnInit = function () {
    };
    FirstSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-first-section',
            template: __webpack_require__("./src/app/homepage/first-section/first-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/first-section/first-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstSectionComponent);
    return FirstSectionComponent;
}());



/***/ }),

/***/ "./src/app/homepage/fourth-section/fourth-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/fourth-section/fourth-section.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/homepage/fourth-section/fourth-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourthSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FourthSectionComponent = /** @class */ (function () {
    function FourthSectionComponent() {
    }
    FourthSectionComponent.prototype.ngOnInit = function () {
    };
    FourthSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fourth-section',
            template: __webpack_require__("./src/app/homepage/fourth-section/fourth-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/fourth-section/fourth-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FourthSectionComponent);
    return FourthSectionComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif';\r\n}\r\n\r\na {\r\n  color: #fdcc52;\r\n  -webkit-transition: all .35s;\r\n  transition: all .35s;\r\n}\r\n\r\na:hover, a:focus {\r\n  color: #fcbd20;\r\n}\r\n\r\nhr {\r\n  max-width: 100px;\r\n  margin: 25px auto 0;\r\n  border-width: 1px;\r\n  border-color: rgba(34, 34, 34, 0.1);\r\n}\r\n\r\nhr.light {\r\n  border-color: white;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-weight: 200;\r\n  letter-spacing: 1px;\r\n}\r\n\r\np {\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nsection {\r\n  padding: 100px 0;\r\n}\r\n\r\nsection h2 {\r\n  font-size: 50px;\r\n}\r\n\r\n#mainNav {\r\n  border-color: rgba(34, 34, 34, 0.05);\r\n  background-color: white;\r\n  -webkit-transition: all .35s;\r\n  transition: all .35s;\r\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-weight: 200;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n  color: #fdcc52;\r\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\r\n  font-weight: 200;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n#mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\r\n  color: #fcbd20;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 12px;\r\n  padding: 8px 10px;\r\n  color: #222222;\r\n}\r\n\r\n#mainNav .navbar-nav > li > a {\r\n  font-size: 11px;\r\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#mainNav .navbar-nav > li > a.active {\r\n  color: #fdcc52 !important;\r\n  background-color: transparent;\r\n}\r\n\r\n#mainNav .navbar-nav > li > a.active:hover {\r\n  background-color: transparent;\r\n}\r\n\r\n#mainNav .navbar-nav > li > a,\r\n#mainNav .navbar-nav > li > a:focus {\r\n  color: #222222;\r\n}\r\n\r\n#mainNav .navbar-nav > li > a:hover,\r\n#mainNav .navbar-nav > li > a:focus:hover {\r\n  color: #fdcc52;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n  }\r\n  #mainNav .navbar-brand {\r\n    color: fade(white, 70%);\r\n  }\r\n  #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\r\n    color: white;\r\n  }\r\n  #mainNav .navbar-nav > li > a,\r\n  #mainNav .navbar-nav > li > a:focus {\r\n    color: rgba(255, 255, 255, 0.7);\r\n  }\r\n  #mainNav .navbar-nav > li > a:hover,\r\n  #mainNav .navbar-nav > li > a:focus:hover {\r\n    color: white;\r\n  }\r\n  #mainNav.navbar-shrink {\r\n    border-color: rgba(34, 34, 34, 0.1);\r\n    background-color: white;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand {\r\n    color: #222222;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand:hover, #mainNav.navbar-shrink .navbar-brand:focus {\r\n    color: #fdcc52;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-nav > li > a,\r\n  #mainNav.navbar-shrink .navbar-nav > li > a:focus {\r\n    color: #222222;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-nav > li > a:hover,\r\n  #mainNav.navbar-shrink .navbar-nav > li > a:focus:hover {\r\n    color: #fdcc52;\r\n  }\r\n}\r\n\r\nheader.masthead {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-top: 150px;\r\n  padding-bottom: 100px;\r\n  color: white;\r\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABkCAMAAADqvX3PAAAAKlBMVEUAAADX19fX19fBwcHT09PX19fW1tbT09PW1tbV1dXOzs7Ozs7BwcHV1dX5uIg2AAAADnRSTlMAPQAKH0czAAApFAAAAHys1goAAAHwSURBVHja7ZfdcuMwCEb1GUIDcd//dZuk2n5rZzCKOzuzFzo3+XNOBAIHtQosxwi0XUw/jjh2qN1pVzV43FJwJIDLuq5tvaNmzxeEZI5wWP/p9v0gypgGYhGH8fL28yyM7ycOJkFlJW3tZDHhRdBjIO22JR6a1BGMgTAWopvr6BC1jSB1MDWyXYfvkpDlg4iiV83lITiuoXZL+U4/ltcNq2MhogaYBWMYjYU8HHfSRdTrCIOLYImemrfz8dMO6DlVGYyFMWz3tmuGY6GgO1ikXVM51JDXurBO0nyEcyPTnvOXvmyb0hzqfV64jUUYw47Re9CZe6EbeC+M39+TcfK/gTFZuxZgOSag7aMASwGkrQW1Y2lLwXRMx3RMx3T8Pw67FpSOcA5RCccOcTMNL05aRw7Fn2kizA7+1VNH6ENAOBgOxiIK888dHPVqh+Q/yeknzQfHkhx+nqyjT0QFzDUd2Skp53lp7PdFnEkYIhzQv/KRzJUV0QdDSON5+S14CEW0vqSTiAPWWDknCLsY0BZxnNP0L/Z9YQEO8yznXZ2yNwfgTu7rNFgj9aamvS9eZljMTNOeoybSGNwQkvZ+3XrCU07t4HmWSBjDLBzEwdSzhMYcRPRZNYmgdjA1FyahcKQIqpKZs8N0TMd0TMd0/BvHF8n9f8tHo7HcAAAAAElFTkSuQmCC\"), #7b4397;\r\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABkCAMAAADqvX3PAAAAKlBMVEUAAADX19fX19fBwcHT09PX19fW1tbT09PW1tbV1dXOzs7Ozs7BwcHV1dX5uIg2AAAADnRSTlMAPQAKH0czAAApFAAAAHys1goAAAHwSURBVHja7ZfdcuMwCEb1GUIDcd//dZuk2n5rZzCKOzuzFzo3+XNOBAIHtQosxwi0XUw/jjh2qN1pVzV43FJwJIDLuq5tvaNmzxeEZI5wWP/p9v0gypgGYhGH8fL28yyM7ycOJkFlJW3tZDHhRdBjIO22JR6a1BGMgTAWopvr6BC1jSB1MDWyXYfvkpDlg4iiV83lITiuoXZL+U4/ltcNq2MhogaYBWMYjYU8HHfSRdTrCIOLYImemrfz8dMO6DlVGYyFMWz3tmuGY6GgO1ikXVM51JDXurBO0nyEcyPTnvOXvmyb0hzqfV64jUUYw47Re9CZe6EbeC+M39+TcfK/gTFZuxZgOSag7aMASwGkrQW1Y2lLwXRMx3RMx3T8Pw67FpSOcA5RCccOcTMNL05aRw7Fn2kizA7+1VNH6ENAOBgOxiIK888dHPVqh+Q/yeknzQfHkhx+nqyjT0QFzDUd2Skp53lp7PdFnEkYIhzQv/KRzJUV0QdDSON5+S14CEW0vqSTiAPWWDknCLsY0BZxnNP0L/Z9YQEO8yznXZ2yNwfgTu7rNFgj9aamvS9eZljMTNOeoybSGNwQkvZ+3XrCU07t4HmWSBjDLBzEwdSzhMYcRPRZNYmgdjA1FyahcKQIqpKZs8N0TMd0TMd0/BvHF8n9f8tHo7HcAAAAAElFTkSuQmCC\"), -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\r\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABkCAMAAADqvX3PAAAAKlBMVEUAAADX19fX19fBwcHT09PX19fW1tbT09PW1tbV1dXOzs7Ozs7BwcHV1dX5uIg2AAAADnRSTlMAPQAKH0czAAApFAAAAHys1goAAAHwSURBVHja7ZfdcuMwCEb1GUIDcd//dZuk2n5rZzCKOzuzFzo3+XNOBAIHtQosxwi0XUw/jjh2qN1pVzV43FJwJIDLuq5tvaNmzxeEZI5wWP/p9v0gypgGYhGH8fL28yyM7ycOJkFlJW3tZDHhRdBjIO22JR6a1BGMgTAWopvr6BC1jSB1MDWyXYfvkpDlg4iiV83lITiuoXZL+U4/ltcNq2MhogaYBWMYjYU8HHfSRdTrCIOLYImemrfz8dMO6DlVGYyFMWz3tmuGY6GgO1ikXVM51JDXurBO0nyEcyPTnvOXvmyb0hzqfV64jUUYw47Re9CZe6EbeC+M39+TcfK/gTFZuxZgOSag7aMASwGkrQW1Y2lLwXRMx3RMx3T8Pw67FpSOcA5RCccOcTMNL05aRw7Fn2kizA7+1VNH6ENAOBgOxiIK888dHPVqh+Q/yeknzQfHkhx+nqyjT0QFzDUd2Skp53lp7PdFnEkYIhzQv/KRzJUV0QdDSON5+S14CEW0vqSTiAPWWDknCLsY0BZxnNP0L/Z9YQEO8yznXZ2yNwfgTu7rNFgj9aamvS9eZljMTNOeoybSGNwQkvZ+3XrCU07t4HmWSBjDLBzEwdSzhMYcRPRZNYmgdjA1FyahcKQIqpKZs8N0TMd0TMd0/BvHF8n9f8tHo7HcAAAAAElFTkSuQmCC\"), linear-gradient(to left, #7b4397, #dc2430);\r\n}\r\n\r\nheader.masthead .header-content {\r\n  max-width: 500px;\r\n  margin-bottom: 100px;\r\n  text-align: center;\r\n}\r\n\r\nheader.masthead .header-content h1 {\r\n  font-size: 30px;\r\n}\r\n\r\nheader.masthead .device-container {\r\n  max-width: 325px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\nheader.masthead .device-container .screen img {\r\n  border-radius: 3px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  header.masthead {\r\n    height: 100vh;\r\n    min-height: 775px;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n  }\r\n  header.masthead .header-content {\r\n    margin-bottom: 0;\r\n    text-align: left;\r\n  }\r\n  header.masthead .header-content h1 {\r\n    font-size: 50px;\r\n  }\r\n  header.masthead .device-container {\r\n    max-width: 325px;\r\n  }\r\n}\r\n\r\nsection.download {\r\n  position: relative;\r\n  padding: 150px 0;\r\n}\r\n\r\nsection.download h2 {\r\n  font-size: 50px;\r\n  margin-top: 0;\r\n}\r\n\r\nsection.download .badges .badge-link {\r\n  display: block;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsection.download .badges .badge-link:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\nsection.download .badges .badge-link img {\r\n  height: 60px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section.download .badges .badge-link {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section.download h2 {\r\n    font-size: 70px;\r\n  }\r\n}\r\n\r\nsection.features .section-heading {\r\n  margin-bottom: 100px;\r\n}\r\n\r\nsection.features .section-heading h2 {\r\n  margin-top: 0;\r\n}\r\n\r\nsection.features .section-heading p {\r\n  margin-bottom: 0;\r\n}\r\n\r\nsection.features .device-container,\r\nsection.features .feature-item {\r\n  max-width: 325px;\r\n  margin: 0 auto;\r\n}\r\n\r\nsection.features .device-container {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  section.features .device-container {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\nsection.features .feature-item {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  text-align: center;\r\n}\r\n\r\nsection.features .feature-item h3 {\r\n  font-size: 30px;\r\n}\r\n\r\nsection.features .feature-item i {\r\n  font-size: 80px;\r\n  display: block;\r\n  margin-bottom: 15px;\r\n  background: -webkit-gradient(linear, right top, left top, from(#7b4397), to(#dc2430));\r\n  background: linear-gradient(to left, #7b4397, #dc2430);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\nsection.cta {\r\n  position: relative;\r\n  padding: 250px 0;\r\n  background-image: url('bg-cta.36ddbb2de498313fdacd.jpg');\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\nsection.cta .cta-content {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nsection.cta .cta-content h2 {\r\n  font-size: 50px;\r\n  max-width: 450px;\r\n  margin-top: 0;\r\n  margin-bottom: 25px;\r\n  color: white;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section.cta .cta-content h2 {\r\n    font-size: 80px;\r\n  }\r\n}\r\n\r\nsection.cta .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nsection.contact {\r\n  text-align: center;\r\n}\r\n\r\nsection.contact h2 {\r\n  margin-top: 0;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsection.contact h2 i {\r\n  color: #dd4b39;\r\n}\r\n\r\nsection.contact ul.list-social {\r\n  margin-bottom: 0;\r\n}\r\n\r\nsection.contact ul.list-social li a {\r\n  font-size: 40px;\r\n  line-height: 80px;\r\n  display: block;\r\n  width: 80px;\r\n  height: 80px;\r\n  color: white;\r\n  border-radius: 100%;\r\n}\r\n\r\nsection.contact ul.list-social li.social-twitter a {\r\n  background-color: #1da1f2;\r\n}\r\n\r\nsection.contact ul.list-social li.social-twitter a:hover {\r\n  background-color: #0d95e8;\r\n}\r\n\r\nsection.contact ul.list-social li.social-facebook a {\r\n  background-color: #3b5998;\r\n}\r\n\r\nsection.contact ul.list-social li.social-facebook a:hover {\r\n  background-color: #344e86;\r\n}\r\n\r\nsection.contact ul.list-social li.social-google-plus a {\r\n  background-color: #dd4b39;\r\n}\r\n\r\nsection.contact ul.list-social li.social-google-plus a:hover {\r\n  background-color: #d73925;\r\n}\r\n\r\nfooter {\r\n  padding: 25px 0;\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, 0.3);\r\n  background-color: #222222;\r\n}\r\n\r\nfooter p {\r\n  font-size: 12px;\r\n  margin: 0;\r\n}\r\n\r\nfooter ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\nfooter ul li a {\r\n  font-size: 12px;\r\n  color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\nfooter ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {\r\n  text-decoration: none;\r\n}\r\n\r\n.bg-primary {\r\n  background: #fdcc52;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#fdcc52), to(#fdc539));\r\n  background: linear-gradient(#fdcc52, #fdc539);\r\n}\r\n\r\n.text-primary {\r\n  color: #fdcc52;\r\n}\r\n\r\n.no-gutter > [class*='col-'] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.btn-outline {\r\n  color: white;\r\n  border: 1px solid;\r\n  border-color: white;\r\n}\r\n\r\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {\r\n  color: white;\r\n  border-color: #fdcc52;\r\n  background-color: #fdcc52;\r\n}\r\n\r\n.btn {\r\n  border-radius: 300px;\r\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.btn-xl {\r\n  font-size: 11px;\r\n  padding: 15px 45px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-first-section></app-first-section>\n<app-second-section></app-second-section>\n<app-third-section></app-third-section>\n<app-fourth-section></app-fourth-section>\n<app-fifth-section></app-fifth-section>\n<app-sixth-section></app-sixth-section>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/second-section/second-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/second-section/second-section.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"features\" id=\"features\">\n  <div class=\"container\">\n    <div class=\"section-heading text-center\">\n      <h2>Unlimited Features, Unlimited Fun</h2>\n      <p class=\"text-muted\">Check out what you can do with this app theme!</p>\n    </div>\n\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 my-auto\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"../../assets/img/img 1.jpg\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"../../assets/img/img 2.jpg\" alt=\"Second slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"../../assets/img/img 3.jpg\" alt=\"Third slide\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 my auto\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\">\n                <div class=\"feature-item\">\n                  <i class=\"icon-screen-smartphone text-primary\"></i>\n                  <h3>Device Mockups</h3>\n                  <p class=\"text-muted\">Ready to use HTML/CSS device mockups, no Photoshop required!</p>\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"feature-item\">\n                  <i class=\"icon-camera text-primary\"></i>\n                  <h3>Flexible Use</h3>\n                  <p class=\"text-muted\">Put an image, video, animation, or anything else in the screen!</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"feature-item\">\n                  <i class=\"icon-present text-primary\"></i>\n                  <h3>Free to Use</h3>\n                  <p class=\"text-muted\">As always, this theme is free to download and use for any purpose!</p>\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"feature-item\">\n                  <i class=\"icon-lock-open text-primary\"></i>\n                  <h3>Open Source</h3>\n                  <p class=\"text-muted\">Since this theme is MIT licensed, you can use it commercially!</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-6 my-auto\">-->\n\n      <!--</div>-->\n      <!--<div class=\"col-lg-6 my-auto\">-->\n        <!--<div class=\"container-fluid\">-->\n          <!--<div class=\"row\">-->\n            <!--<div class=\"col-lg-6\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\">-->\n              <!--<div class=\"feature-item\">-->\n                <!--<i class=\"icon-screen-smartphone text-primary\"></i>-->\n                <!--<h3>Device Mockups</h3>-->\n                <!--<p class=\"text-muted\">Ready to use HTML/CSS device mockups, no Photoshop required!</p>-->\n              <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-6\">-->\n              <!--<div class=\"feature-item\">-->\n                <!--<i class=\"icon-camera text-primary\"></i>-->\n                <!--<h3>Flexible Use</h3>-->\n                <!--<p class=\"text-muted\">Put an image, video, animation, or anything else in the screen!</p>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!--<div class=\"row\">-->\n            <!--<div class=\"col-lg-6\">-->\n              <!--<div class=\"feature-item\">-->\n                <!--<i class=\"icon-present text-primary\"></i>-->\n                <!--<h3>Free to Use</h3>-->\n                <!--<p class=\"text-muted\">As always, this theme is free to download and use for any purpose!</p>-->\n              <!--</div>-->\n            <!--</div>-->\n            <!--<div class=\"col-lg-6\">-->\n              <!--<div class=\"feature-item\">-->\n                <!--<i class=\"icon-lock-open text-primary\"></i>-->\n                <!--<h3>Open Source</h3>-->\n                <!--<p class=\"text-muted\">Since this theme is MIT licensed, you can use it commercially!</p>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/homepage/second-section/second-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondSectionComponent = /** @class */ (function () {
    function SecondSectionComponent() {
    }
    SecondSectionComponent.prototype.ngOnInit = function () {
    };
    SecondSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-second-section',
            template: __webpack_require__("./src/app/homepage/second-section/second-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/second-section/second-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondSectionComponent);
    return SecondSectionComponent;
}());



/***/ }),

/***/ "./src/app/homepage/sixth-section/sixth-section.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(239, 239, 239);\r\n  max-width: 1170px;\r\n  margin: auto auto;\r\n  padding: 0;\r\n}\r\n#contact{\r\n   background-color: #f7f7f7;\r\n }\r\n"

/***/ }),

/***/ "./src/app/homepage/sixth-section/sixth-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sixth-section\">\n  <br>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <!--            CONTACT FORM                         -->\n        <div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-sm-offset-2\">\n                  <div>\n                    <h2>CONTACT US</h2>\n                  </div>\n                  <form method=\"post\" data-form-title=\"CONTACT US\">\n                    <input type=\"hidden\" data-form-email=\"true\">\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" name=\"name\" required=\"\" placeholder=\"Name*\" data-form-field=\"Name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"email\" class=\"form-control\" name=\"email\" required=\"\" placeholder=\"Email*\" data-form-field=\"Email\">\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"tel\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" data-form-field=\"Phone\">\n                    </div>\n                    <div class=\"form-group\">\n                      <textarea class=\"form-control\" name=\"message\" placeholder=\"Message\" rows=\"7\" data-form-field=\"Message\"></textarea>\n                    </div>\n                    <div>\n                      <button type=\"submit\" class=\"btn btn-lg btn-danger\">CONTACT US</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--                     END                             -->\n\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <section class=\"contact bg-primary\" id=\"contact\">\n          <div class=\"container\">\n            <h2>We\n              <i class=\"fa fa-heart\"></i>\n              new friends!</h2>\n            <ul class=\"list-inline list-social\">\n              <li class=\"list-inline-item social-twitter\">\n                <a href=\"#\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item social-facebook\">\n                <a href=\"#\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item social-google-plus\">\n                <a href=\"#\">\n                  <i class=\"fa fa-google-plus\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/sixth-section/sixth-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SixthSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SixthSectionComponent = /** @class */ (function () {
    function SixthSectionComponent() {
    }
    SixthSectionComponent.prototype.ngOnInit = function () {
    };
    SixthSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-sixth-section',
            template: __webpack_require__("./src/app/homepage/sixth-section/sixth-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/sixth-section/sixth-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SixthSectionComponent);
    return SixthSectionComponent;
}());



/***/ }),

/***/ "./src/app/homepage/third-section/third-section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/third-section/third-section.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/homepage/third-section/third-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdSectionComponent = /** @class */ (function () {
    function ThirdSectionComponent() {
    }
    ThirdSectionComponent.prototype.ngOnInit = function () {
    };
    ThirdSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-third-section',
            template: __webpack_require__("./src/app/homepage/third-section/third-section.component.html"),
            styles: [__webpack_require__("./src/app/homepage/third-section/third-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThirdSectionComponent);
    return ThirdSectionComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton{\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Username</label>\n          <input type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(username,password)\">LogIn</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(ordersService) {
        this.ordersService = ordersService;
        this.LoginSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getUsers().subscribe(function (user) {
            _this.Users = user;
        });
    };
    LoginComponent.prototype.login = function (username, password) {
        if (this.Users) {
            for (var i = 0; i < this.Users.length; i++) {
                if (this.Users[i].username === username && this.Users[i].password === password) {
                    console.log('success');
                    this.LoginUser = this.Users[i];
                    this.LoginSuccess.emit(this.Users[i]);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "LoginSuccess", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-item/menu-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Restaurant\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\"></div>\r\n    <div class=\"col-sm-2\">\r\n      <button class=\"btn btn-group-lg\" (click)=\"ShowMenuForm()\">Add Menu Item</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <!-----------Menu Item Form------------------->\r\n\r\n  <div *ngIf=\"MenuForm\" class=\"menu-form\">\r\n    <form>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Title\" class=\"col-sm-2 col-form-label\">Title</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" id=\"Title\" placeholder=\"Title\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"exampleFormControlTextarea1\" class=\"col-sm-2 col-form-label\">Description</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea class=\"form-control\" name=\"desc\" [(ngModel)]=\"desc\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"CategoryType\" class=\"col-sm-2 col-form-label\">Category</label>\r\n        <div class=\"col-sm-10\">\r\n          <select name=\"CategoryType\" class=\"custom-select\" name=\"CategoryType\" [(ngModel)]=\"category\" id=\"CategoryType\">\r\n            <option selected>Category Type</option>\r\n            <option>French</option>\r\n            <option>Cocktail</option>\r\n            <option>Desert</option>\r\n            <option>Sushi</option>\r\n            <option>Thai/Asian</option>\r\n            <option>Coffee</option>\r\n            <option>Pizza</option>\r\n            <option>Burger</option>\r\n            <option>Salad</option>\r\n            <option>Breakfast</option>\r\n            <option>Italian</option>\r\n            <option>Modern India</option>\r\n            <option>Middle Eastern</option>\r\n            <option>Sea Food</option>\r\n            <option>Mexican</option>\r\n            <option>European</option>\r\n            <option>Brewery</option>\r\n            <option>Other</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Price\" class=\"col-sm-2 col-form-label\">Price</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" class=\"form-control\" id=\"Price\" placeholder=\"Price\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"veg-nonveg\" class=\"col-sm-2 col-form-label\">Veg/Non-Veg</label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"custom-select\" name=\"veg/non-veg\" [(ngModel)]=\"veg\" id=\"veg-nonveg\">\r\n            <option selected>Category</option>\r\n            <option value=\"1\">Veg</option>\r\n            <option value=\"2\">Non Veg</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Course Type\" class=\"col-sm-2 col-form-label\">Course Type</label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"custom-select\" name=\"courseType\" [(ngModel)]=\"course_type\" id=\"Course Type\">\r\n            <option selected>Course Type</option>\r\n            <option>course 1</option>\r\n            <option>course 2</option>\r\n            <option>course 3</option>\r\n            <option>course 4</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Serving\" class=\"col-sm-2 col-form-label\">Serving</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"number\" name=\"Serving\" [(ngModel)]=\"Serving\" class=\"form-control\" id=\"Serving\" placeholder=\"Serving\">\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" (click)=\"SaveMenu(title,desc,category,price,veg,course_type,serving)\" class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n  </div>\r\n  <br>\r\n\r\n  <!-------------Menu Table--------------------->\r\n\r\n  <table class=\"table table-striped\">\r\n    <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">Title</th>\r\n      <th scope=\"col\">Price</th>\r\n      <th scope=\"col\">Veg/Non-Veg</th>\r\n      <th scope=\"col\">Category</th>\r\n      <th scope=\"col\">Serving</th>\r\n      <th scope=\"col\">Edit</th>\r\n      <th scope=\"col\">Delete</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of Menu\">\r\n      <td>{{item.title}}</td>\r\n      <td>{{item.price}}</td>\r\n      <td *ngIf=\"item.veg === 0 \">Non-veg</td>\r\n      <td *ngIf=\"item.veg === 1 \" >Veg</td>\r\n      <td> {{ item.category }}</td>\r\n      <td>{{ item.serving }}</td>\r\n      <td><button class=\"btn btn-primary btn-sm\">Edit</button></td>\r\n      <td><button class=\"btn btn-danger btn-sm\">Delete</button></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/menu-item/menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent(orderService) {
        this.orderService = orderService;
        this.MenuForm = false;
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.ShowMenuForm = function () {
        if (this.MenuForm) {
            this.MenuForm = false;
        }
        else {
            this.MenuForm = true;
        }
    };
    MenuItemComponent.prototype.SaveMenu = function (title, desc, category, price, veg, course_type, serving) {
        // console.log(title, desc , category , price , 0 , course_type , serving);
        if (veg === '1') {
            this.orderService.SaveMenuItem(this.Restaurant.restaurant_id, title, desc, category, price, 0, course_type, serving);
        }
        else {
            this.orderService.SaveMenuItem(this.Restaurant.restaurant_id, title, desc, category, price, 1, course_type, serving);
        }
        console.log(this.title);
        this.title = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "Restaurant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "Menu", void 0);
    MenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-menu-item',
            template: __webpack_require__("./src/app/menu-item/menu-item.component.html"),
            styles: [__webpack_require__("./src/app/menu-item/menu-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" (click)=\"featureSelected('homepage')\">Binge</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div *ngIf=\"user\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Orders')\">Orders <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('TableBooking')\">Table-Booking <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Menu')\">Menu Items <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Offers')\">Offers <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('info')\">Restaurant Info<span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n\n    <ul *ngIf=\"!user\" class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Signup')\">Signup <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Login')\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n\n    <ul *ngIf=\"user\" class=\"navbar-nav navbar-right\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"featureSelected('Login')\">Logout <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.Feature = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.featureSelected = function (str) {
        this.Feature.emit(str);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "Feature", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/***/ (function(module, exports) {

module.exports = "/*agm-map {*/\r\n  /*height: 250px;*/\r\n  /*width: 100%;*/\r\n  /*}*/\r\n  h5{\r\n  color: #000;\r\n}\r\n  .modal-body{\r\n  color: #000;\r\n}\r\n  .googleMap{\r\n  height: 300px;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> {{ ShowOrder.userId }} </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!--<agm-map [latitude]=\"ShowOrder.location_lat\" [longitude]=\"ShowOrder.location_long\">-->\n          <!--<agm-marker [latitude]=\"ShowOrder.location_lat\" [longitude]=\"ShowOrder.location_long\"></agm-marker>-->\n        <!--</agm-map>-->\n        <button class=\"btn btn-primary\" (click)=\"initMap()\">View map</button>\n        <div class=\"googleMap\" id=\"map\"></div>\n      </div>\n      <div class=\"modal-body\" *ngFor=\"let dish of dishes\">\n        <p *ngFor=\"let quantity of quantities\"> {{ dish }} - {{ quantity }}</p>\n      </div>\n      <div class=\"modal-body\">\n        <p>cart value : {{ ShowOrder.cart_value }}</p>\n        <p> <strong> payment via: Credit-Card</strong></p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"UpdateOrder(ShowOrder,'Recieved')\">Order Recieved</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"UpdateOrder(ShowOrder,'MealPrepared')\">Meal Prepared</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"UpdateOrder(ShowOrder , 'Delivered')\">Order Delivered</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(ordersService) {
        this.ordersService = ordersService;
        this.viewMap = false;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent.prototype.DeleteOrder = function (order) {
        this.ordersService.DeleteOrder(this.user.restaurant_id, order);
        this.ShowOrder = null;
        // console.log(order);
    };
    OrderDetailComponent.prototype.UpdateOrder = function (order, status) {
        // console.log(this.dishes);
        this.ordersService.UpdateOrder(this.user.restaurant_id, order, status);
    };
    // GOOGELE MAPS
    OrderDetailComponent.prototype.initMap = function () {
        this.viewMap = !this.viewMap;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: this.ShowOrder.location_lat, lng: this.ShowOrder.location_long }
        });
        directionsDisplay.setMap(map);
        this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    OrderDetailComponent.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay) {
        var start = new google.maps.LatLng(this.ShowOrder.location_lat, this.ShowOrder.location_long);
        var end = new google.maps.LatLng(28.5244, 77.1855);
        var req = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };
        directionsService.route(req, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderDetailComponent.prototype, "ShowOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderDetailComponent.prototype, "dishes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderDetailComponent.prototype, "quantities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderDetailComponent.prototype, "user", void 0);
    OrderDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-order-detail',
            template: __webpack_require__("./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__("./src/app/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-info/restaurant-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurant-info/restaurant-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-form\">\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"Email\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-10\">\n        <input type=\"email\" [(ngModel)]=\"Email\" name=\"title\" class=\"form-control\" id=\"Email\" placeholder=\"abc@gmail.com\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"exampleFormControlTextarea1\" class=\"col-sm-2 col-form-label\">Description</label>\n      <div class=\"col-sm-10\">\n        <textarea class=\"form-control\" name=\"desc\" [(ngModel)]=\"desc\" id=\"exampleFormControlTextarea1\" rows=\"2\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"exampleFormControlTextarea2\" class=\"col-sm-2 col-form-label\">Address</label>\n      <div class=\"col-sm-10\">\n        <textarea class=\"form-control\" name=\"Address\" [(ngModel)]=\"Address\" id=\"exampleFormControlTextarea2\" rows=\"2\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"FacebookLink\" class=\"col-sm-2 col-form-label\">Twitter Link</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"FacebookLink\" name=\"FacebookLink\" class=\"form-control\" id=\"FacebookLink\" placeholder=\"www.facebook.com/xyz\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"TwitterLink\" class=\"col-sm-2 col-form-label\">Twitter Link</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"TwitterLink\" name=\"TwitterLink\" class=\"form-control\" id=\"TwitterLink\" placeholder=\"www.twitter.com/xyz\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"Location\" class=\"col-sm-2 col-form-label\">Resaturant Location</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"Location\" name=\"Location\" class=\"form-control\" id=\"Location\" placeholder=\"Chandini chowk,New Delhi\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"Contact\" class=\"col-sm-2 col-form-label\">Contact Number</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"Contact_No\" name=\"Contact\" class=\"form-control\" id=\"Contact\" placeholder=\"+91-9871878432\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"Name\" class=\"col-sm-2 col-form-label\">Restaurant Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" [(ngModel)]=\"RestaurantName\" name=\"title\" class=\"form-control\" id=\"Name\" placeholder=\"\">\n      </div>\n    </div>\n    <button type=\"submit\" (click)=\"SaveInfo()\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/restaurant-info/restaurant-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantInfoComponent = /** @class */ (function () {
    function RestaurantInfoComponent(Service) {
        this.Service = Service;
    }
    RestaurantInfoComponent.prototype.ngOnInit = function () {
    };
    RestaurantInfoComponent.prototype.SaveInfo = function () {
        // console.log(this.Restaurant.restaurant_id, this.Email, this.desc, this.Address, this.FacebookLink, this.TwitterLink,
        //   this.Location, this.Contact_No, this.RestaurantName);
        var location_lat;
        var location_long;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': this.Location }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                location_lat = results[0].geometry.location.lat();
                location_long = results[0].geometry.location.lng();
            }
        });
        this.Service.addRestaurantInfo(this.Restaurant.restaurant_id, this.Email, this.desc, this.Address, this.FacebookLink, this.TwitterLink, location_lat, location_long, this.Contact_No, this.RestaurantName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], RestaurantInfoComponent.prototype, "Restaurant", void 0);
    RestaurantInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-restaurant-info',
            template: __webpack_require__("./src/app/restaurant-info/restaurant-info.component.html"),
            styles: [__webpack_require__("./src/app/restaurant-info/restaurant-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], RestaurantInfoComponent);
    return RestaurantInfoComponent;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(afs) {
        this.afs = afs;
        this.UsersCollection = this.afs.collection('login/');
        this.Users = this.afs.collection('login').valueChanges();
    }
    OrdersService.prototype.getOrders = function (restaurant_id) {
        this.OrdersCollection = this.afs.collection("orders/" + restaurant_id + "/order", function (ref) { return ref.orderBy('location_lat', 'asc'); });
        this.Orders = this.OrdersCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.Orders;
    };
    OrdersService.prototype.DeleteOrder = function (restaurant_id, order) {
        // console.log(order);
        this.OrdersDoc = this.afs.doc("orders/" + restaurant_id + "/order/" + order.id);
        this.OrdersDoc.delete();
    };
    OrdersService.prototype.UpdateOrder = function (restaurant_id, order, status) {
        order.status = status;
        this.OrdersDoc = this.afs.doc("orders/" + restaurant_id + "/order/" + order.id);
        this.OrdersDoc.update(order);
    };
    OrdersService.prototype.getUsers = function () {
        return this.Users;
    };
    OrdersService.prototype.signup = function (username, password, Id) {
        console.log(username, password, Id);
        this.UserCollection = this.afs.collection('login');
        this.UserCollection.add({ username: username, password: password, restaurant_id: Id });
    };
    OrdersService.prototype.getMenuItem = function (restaurant_id) {
        this.MenuItems = this.afs.collection("Menu/" + restaurant_id + "/course 1").snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.MenuItems;
    };
    OrdersService.prototype.SaveMenuItem = function (restaurant_id, title, desc, category, price, veg, course_type, serving) {
        console.log(title, desc, category, price, veg, course_type, serving);
        this.afs.collection("Menu/" + restaurant_id + "/" + course_type).add({
            title: title,
            description: desc,
            category: category,
            price: price,
            veg: veg,
            serving: serving
        });
    };
    OrdersService.prototype.SaveOffer = function (restaurant_id, title, date, day, start_time, end_time, discount) {
        console.log(restaurant_id, title, date, day, start_time, end_time, discount);
        this.afs.collection("Offers/" + restaurant_id + "/offer").add({
            title: title,
            date: date,
            day: day,
            start_time: start_time,
            end_time: end_time,
            discount: discount
        });
    };
    OrdersService.prototype.addRestaurantInfo = function (restaurant_id, Email, desc, Address, FacebookLink, TwitterLink, Location_lat, Location_long, ContactNo, RestaurantName) {
        this.afs.collection("Restaurant Info").add({
            Email: Email,
            Description: desc,
            Address: Address,
            FacebookLink: FacebookLink,
            TwitterLink: TwitterLink,
            Latitude: Location_lat,
            Longitude: Location_long,
            Contact: ContactNo,
            RestaurantName: RestaurantName
        });
    };
    OrdersService.prototype.getOffers = function (restaurant_id) {
        this.Offers = this.afs.collection("Offers/" + restaurant_id + "/offer").snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        return this.Offers;
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton{\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Username</label>\n          <input type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Username\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your information with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Id</label>\n          <input type=\"email\" class=\"form-control\" name=\"Id\" [(ngModel)]=\"Id\" placeholder=\"Id\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signup(username,password,Id)\">Signup</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(ordersService) {
        this.ordersService = ordersService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (username, password, Id) {
        this.ordersService.signup(username, password, Id);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/table-booking/table-booking.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/table-booking/table-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"SelectedOrder\">\r\n  <table class=\"table table-striped\">\r\n    <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">Time</th>\r\n      <th scope=\"col\">Date</th>\r\n      <th scope=\"col\">User</th>\r\n      <th scope=\"col\">Person</th>\r\n      <th scope=\"col\">Table No.</th>\r\n      <th scope=\"col\">status</th>\r\n      <th scope=\"col\">Action</th>\r\n      <th scope=\"col\">Assign Table</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let order of SelectedOrder\">\r\n      <td>10:00</td>\r\n      <td>09-4-2018</td>\r\n      <td> {{ order.userId }} </td>\r\n      <td>5</td>\r\n      <td> {{ TableNo || 7 }} </td>\r\n      <td> {{ status || \"Rejected\" }} </td>\r\n      <td> <select [(ngModel)]=\"status\" class=\"form-control form-control-sm\">\r\n        <option>Approve</option>\r\n        <option>Reject</option>\r\n      </select>\r\n      </td>\r\n      <td><select [(ngModel)]=\"TableNo\" class=\"form-control form-control-sm\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n        <option>3</option>\r\n        <option>4</option>\r\n        <option>5</option>\r\n        <option>6</option>\r\n        <option>7</option>\r\n        <option>8</option>\r\n        <option>9</option>\r\n        <option>10</option>\r\n      </select>\r\n      </td>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/table-booking/table-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableBookingComponent = /** @class */ (function () {
    function TableBookingComponent() {
    }
    TableBookingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], TableBookingComponent.prototype, "SelectedOrder", void 0);
    TableBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table-booking',
            template: __webpack_require__("./src/app/table-booking/table-booking.component.html"),
            styles: [__webpack_require__("./src/app/table-booking/table-booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableBookingComponent);
    return TableBookingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyDLAnATlnf23w5xhAebPcFQw2POdrGK-NQ',
        authDomain: 'bingetesting.firebaseapp.com',
        databaseURL: 'https://bingetesting.firebaseio.com',
        projectId: 'bingetesting',
        storageBucket: 'bingetesting.appspot.com',
        messagingSenderId: '254566168359'
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map