var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../angular2App/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/animation/animation_queue';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/http/src/backends/browser_jsonp';
import * as import28 from '@angular/http/src/backends/jsonp_backend';
import * as import29 from '@angular/common/src/location/location';
import * as import30 from '@angular/router/src/url_tree';
import * as import31 from '@angular/router/src/router_outlet_map';
import * as import32 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import33 from '@angular/router/src/router_preloader';
import * as import34 from '../../../angular2App/app/app.constants';
import * as import35 from '../../../angular2App/app/services/SecurityService';
import * as import36 from '../../../angular2App/app/securefile/SecureFileService';
import * as import37 from '../../../angular2App/app/dataeventrecords/DataEventRecordsService';
import * as import39 from './home/home.component.ngfactory';
import * as import40 from './forbidden/forbidden.component.ngfactory';
import * as import41 from './unauthorized/unauthorized.component.ngfactory';
import * as import42 from './securefile/securefiles.component.ngfactory';
import * as import43 from './dataeventrecords/dataeventrecords-create.component.ngfactory';
import * as import44 from './dataeventrecords/dataeventrecords-edit.component.ngfactory';
import * as import45 from './dataeventrecords/dataeventrecords-list.component.ngfactory';
import * as import46 from './app.component.ngfactory';
import * as import47 from '@angular/core/src/application_tokens';
import * as import48 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import49 from '@angular/platform-browser/src/dom/events/key_events';
import * as import50 from '@angular/core/src/zone/ng_zone';
import * as import51 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import52 from '@angular/common/src/location/platform_location';
import * as import53 from '@angular/common/src/location/location_strategy';
import * as import54 from '../../../angular2App/app/home/home.component';
import * as import55 from '../../../angular2App/app/forbidden/forbidden.component';
import * as import56 from '../../../angular2App/app/unauthorized/unauthorized.component';
import * as import57 from '../../../angular2App/app/securefile/securefiles.component';
import * as import58 from '../../../angular2App/app/dataeventrecords/dataeventrecords-create.component';
import * as import59 from '../../../angular2App/app/dataeventrecords/dataeventrecords-edit.component';
import * as import60 from '../../../angular2App/app/dataeventrecords/dataeventrecords-list.component';
import * as import61 from '@angular/router/src/url_handling_strategy';
import * as import62 from '@angular/router/src/route_reuse_strategy';
import * as import63 from '@angular/router/src/router';
import * as import64 from '@angular/core/src/console';
import * as import65 from '@angular/core/src/i18n/tokens';
import * as import66 from '@angular/core/src/error_handler';
import * as import67 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import68 from '@angular/platform-browser/src/dom/animation_driver';
import * as import69 from '@angular/core/src/render/api';
import * as import70 from '@angular/core/src/security';
import * as import71 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import72 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import73 from '@angular/http/src/interfaces';
import * as import74 from '@angular/http/src/http';
import * as import75 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import76 from '@angular/router/src/router_config_loader';
import * as import77 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import39.HomeComponentNgFactory,
            import40.ForbiddenComponentNgFactory,
            import41.UnauthorizedComponentNgFactory,
            import42.SecureFilesComponentNgFactory,
            import43.DataEventRecordsCreateComponentNgFactory,
            import44.DataEventRecordsEditComponentNgFactory,
            import45.DataEventRecordsListComponentNgFactory,
            import46.AppComponentNgFactory
        ], [import46.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_10", {
        get: function () {
            if ((this.__LOCALE_ID_10 == null)) {
                (this.__LOCALE_ID_10 = 'en-US');
            }
            return this.__LOCALE_ID_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_11", {
        get: function () {
            if ((this.__NgLocalization_11 == null)) {
                (this.__NgLocalization_11 = new import9.NgLocaleLocalization(this._LOCALE_ID_10));
            }
            return this.__NgLocalization_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_16", {
        get: function () {
            if ((this.__ApplicationRef_16 == null)) {
                (this.__ApplicationRef_16 = this._ApplicationRef__15);
            }
            return this.__ApplicationRef_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_17", {
        get: function () {
            if ((this.__Compiler_17 == null)) {
                (this.__Compiler_17 = new import13.Compiler());
            }
            return this.__Compiler_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_18", {
        get: function () {
            if ((this.__APP_ID_18 == null)) {
                (this.__APP_ID_18 = import47._appIdRandomProviderFactory());
            }
            return this.__APP_ID_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_19", {
        get: function () {
            if ((this.__DOCUMENT_19 == null)) {
                (this.__DOCUMENT_19 = import4._document());
            }
            return this.__DOCUMENT_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_20", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_20 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_20 = new import14.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_21", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_21 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_21 = [
                    new import48.DomEventsPlugin(),
                    new import49.KeyEventsPlugin(),
                    new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_20)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_22", {
        get: function () {
            if ((this.__EventManager_22 == null)) {
                (this.__EventManager_22 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_21, this.parent.get(import50.NgZone)));
            }
            return this.__EventManager_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_23", {
        get: function () {
            if ((this.__DomSharedStylesHost_23 == null)) {
                (this.__DomSharedStylesHost_23 = new import16.DomSharedStylesHost(this._DOCUMENT_19));
            }
            return this.__DomSharedStylesHost_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_24", {
        get: function () {
            if ((this.__AnimationDriver_24 == null)) {
                (this.__AnimationDriver_24 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_25", {
        get: function () {
            if ((this.__DomRootRenderer_25 == null)) {
                (this.__DomRootRenderer_25 = new import17.DomRootRenderer_(this._DOCUMENT_19, this._EventManager_22, this._DomSharedStylesHost_23, this._AnimationDriver_24, this._APP_ID_18));
            }
            return this.__DomRootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_26", {
        get: function () {
            if ((this.__NgProbeToken_26 == null)) {
                (this.__NgProbeToken_26 = [import7.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import51._createConditionalRootRenderer(this._DomRootRenderer_25, this.parent.get(import51.NgProbeToken, null), this._NgProbeToken_26));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import18.DomSanitizerImpl());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_30", {
        get: function () {
            if ((this.__AnimationQueue_30 == null)) {
                (this.__AnimationQueue_30 = new import19.AnimationQueue(this.parent.get(import50.NgZone)));
            }
            return this.__AnimationQueue_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_31", {
        get: function () {
            if ((this.__ViewUtils_31 == null)) {
                (this.__ViewUtils_31 = new import20.ViewUtils(this._RootRenderer_27, this._Sanitizer_29, this._AnimationQueue_30));
            }
            return this.__ViewUtils_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_32", {
        get: function () {
            if ((this.__IterableDiffers_32 == null)) {
                (this.__IterableDiffers_32 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_33", {
        get: function () {
            if ((this.__KeyValueDiffers_33 == null)) {
                (this.__KeyValueDiffers_33 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_34", {
        get: function () {
            if ((this.__SharedStylesHost_34 == null)) {
                (this.__SharedStylesHost_34 = this._DomSharedStylesHost_23);
            }
            return this.__SharedStylesHost_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_35", {
        get: function () {
            if ((this.__Title_35 == null)) {
                (this.__Title_35 = new import21.Title());
            }
            return this.__Title_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_36", {
        get: function () {
            if ((this.__RadioControlRegistry_36 == null)) {
                (this.__RadioControlRegistry_36 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_37", {
        get: function () {
            if ((this.__BrowserXhr_37 == null)) {
                (this.__BrowserXhr_37 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_38", {
        get: function () {
            if ((this.__ResponseOptions_38 == null)) {
                (this.__ResponseOptions_38 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_39", {
        get: function () {
            if ((this.__XSRFStrategy_39 == null)) {
                (this.__XSRFStrategy_39 = import8._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_40", {
        get: function () {
            if ((this.__XHRBackend_40 == null)) {
                (this.__XHRBackend_40 = new import25.XHRBackend(this._BrowserXhr_37, this._ResponseOptions_38, this._XSRFStrategy_39));
            }
            return this.__XHRBackend_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_41", {
        get: function () {
            if ((this.__RequestOptions_41 == null)) {
                (this.__RequestOptions_41 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_42", {
        get: function () {
            if ((this.__Http_42 == null)) {
                (this.__Http_42 = import8.httpFactory(this._XHRBackend_40, this._RequestOptions_41));
            }
            return this.__Http_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserJsonp_43", {
        get: function () {
            if ((this.__BrowserJsonp_43 == null)) {
                (this.__BrowserJsonp_43 = new import27.BrowserJsonp());
            }
            return this.__BrowserJsonp_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_JSONPBackend_44", {
        get: function () {
            if ((this.__JSONPBackend_44 == null)) {
                (this.__JSONPBackend_44 = new import28.JSONPBackend_(this._BrowserJsonp_43, this._ResponseOptions_38));
            }
            return this.__JSONPBackend_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Jsonp_45", {
        get: function () {
            if ((this.__Jsonp_45 == null)) {
                (this.__Jsonp_45 = import8.jsonpFactory(this._JSONPBackend_44, this._RequestOptions_41));
            }
            return this.__Jsonp_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_46", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_46 == null)) {
                (this.__ROUTER_CONFIGURATION_46 = {});
            }
            return this.__ROUTER_CONFIGURATION_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_47", {
        get: function () {
            if ((this.__LocationStrategy_47 == null)) {
                (this.__LocationStrategy_47 = import7.provideLocationStrategy(this.parent.get(import52.PlatformLocation), this.parent.get(import53.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_46));
            }
            return this.__LocationStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_48", {
        get: function () {
            if ((this.__Location_48 == null)) {
                (this.__Location_48 = new import29.Location(this._LocationStrategy_47));
            }
            return this.__Location_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_49", {
        get: function () {
            if ((this.__UrlSerializer_49 == null)) {
                (this.__UrlSerializer_49 = new import30.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_50", {
        get: function () {
            if ((this.__RouterOutletMap_50 == null)) {
                (this.__RouterOutletMap_50 = new import31.RouterOutletMap());
            }
            return this.__RouterOutletMap_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_51", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_51 == null)) {
                (this.__NgModuleFactoryLoader_51 = new import32.SystemJsNgModuleLoader(this._Compiler_17, this.parent.get(import32.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_52", {
        get: function () {
            if ((this.__ROUTES_52 == null)) {
                (this.__ROUTES_52 = [[
                        {
                            path: '',
                            component: import54.HomeComponent
                        },
                        {
                            path: 'home',
                            component: import54.HomeComponent
                        },
                        {
                            path: 'Forbidden',
                            component: import55.ForbiddenComponent
                        },
                        {
                            path: 'Unauthorized',
                            component: import56.UnauthorizedComponent
                        },
                        {
                            path: 'securefile/securefiles',
                            component: import57.SecureFilesComponent
                        },
                        {
                            path: 'dataeventrecords',
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'list',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'create',
                                    component: import58.DataEventRecordsCreateComponent
                                },
                                {
                                    path: 'edit/:id',
                                    component: import59.DataEventRecordsEditComponent
                                },
                                {
                                    path: 'list',
                                    component: import60.DataEventRecordsListComponent
                                }
                            ]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_53", {
        get: function () {
            if ((this.__Router_53 == null)) {
                (this.__Router_53 = import7.setupRouter(this._ApplicationRef_16, this._UrlSerializer_49, this._RouterOutletMap_50, this._Location_48, this, this._NgModuleFactoryLoader_51, this._Compiler_17, this._ROUTES_52, this._ROUTER_CONFIGURATION_46, this.parent.get(import61.UrlHandlingStrategy, null), this.parent.get(import62.RouteReuseStrategy, null)));
            }
            return this.__Router_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_54", {
        get: function () {
            if ((this.__ActivatedRoute_54 == null)) {
                (this.__ActivatedRoute_54 = import7.rootRoute(this._Router_53));
            }
            return this.__ActivatedRoute_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_58", {
        get: function () {
            if ((this.__PreloadAllModules_58 == null)) {
                (this.__PreloadAllModules_58 = new import33.PreloadAllModules());
            }
            return this.__PreloadAllModules_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_59", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_59 == null)) {
                (this.__ROUTER_INITIALIZER_59 = import7.initialRouterNavigation(this._Router_53, this._ApplicationRef_16, this._RouterPreloader_57, this._ROUTER_CONFIGURATION_46));
            }
            return this.__ROUTER_INITIALIZER_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_60", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_60 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_60 = [this._ROUTER_INITIALIZER_59]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Configuration_61", {
        get: function () {
            if ((this.__Configuration_61 == null)) {
                (this.__Configuration_61 = new import34.Configuration());
            }
            return this.__Configuration_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SecurityService_62", {
        get: function () {
            if ((this.__SecurityService_62 == null)) {
                (this.__SecurityService_62 = new import35.SecurityService(this._Http_42, this._Configuration_61, this._Router_53));
            }
            return this.__SecurityService_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SecureFileService_63", {
        get: function () {
            if ((this.__SecureFileService_63 == null)) {
                (this.__SecureFileService_63 = new import36.SecureFileService(this._Http_42, this._Configuration_61, this._SecurityService_62));
            }
            return this.__SecureFileService_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DataEventRecordsService_64", {
        get: function () {
            if ((this.__DataEventRecordsService_64 == null)) {
                (this.__DataEventRecordsService_64 = new import37.DataEventRecordsService(this._Http_42, this._Configuration_61, this._SecurityService_62));
            }
            return this.__DataEventRecordsService_64;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._ROUTER_FORROOT_GUARD_5 = import7.provideForRootGuard(this.parent.get(import63.Router, null));
        this._RouterModule_6 = new import7.RouterModule(this._ROUTER_FORROOT_GUARD_5);
        this._HttpModule_7 = new import8.HttpModule();
        this._JsonpModule_8 = new import8.JsonpModule();
        this._AppModule_9 = new import1.AppModule();
        this._ErrorHandler_12 = import4.errorHandler();
        this._ApplicationInitStatus_13 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER, null));
        this._Testability_14 = new import11.Testability(this.parent.get(import50.NgZone));
        this._ApplicationRef__15 = new import12.ApplicationRef_(this.parent.get(import50.NgZone), this.parent.get(import64.Console), this, this._ErrorHandler_12, this, this._ApplicationInitStatus_13, this.parent.get(import11.TestabilityRegistry, null), this._Testability_14);
        this._NoPreloading_55 = new import33.NoPreloading();
        this._PreloadingStrategy_56 = this._NoPreloading_55;
        this._RouterPreloader_57 = new import33.RouterPreloader(this._Router_53, this._NgModuleFactoryLoader_51, this._Compiler_17, this, this._PreloadingStrategy_56);
        return this._AppModule_9;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_5;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_6;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_7;
        }
        if ((token === import8.JsonpModule)) {
            return this._JsonpModule_8;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_9;
        }
        if ((token === import65.LOCALE_ID)) {
            return this._LOCALE_ID_10;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_11;
        }
        if ((token === import66.ErrorHandler)) {
            return this._ErrorHandler_12;
        }
        if ((token === import10.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_13;
        }
        if ((token === import11.Testability)) {
            return this._Testability_14;
        }
        if ((token === import12.ApplicationRef_)) {
            return this._ApplicationRef__15;
        }
        if ((token === import12.ApplicationRef)) {
            return this._ApplicationRef_16;
        }
        if ((token === import13.Compiler)) {
            return this._Compiler_17;
        }
        if ((token === import47.APP_ID)) {
            return this._APP_ID_18;
        }
        if ((token === import67.DOCUMENT)) {
            return this._DOCUMENT_19;
        }
        if ((token === import14.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_20;
        }
        if ((token === import15.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_21;
        }
        if ((token === import15.EventManager)) {
            return this._EventManager_22;
        }
        if ((token === import16.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_23;
        }
        if ((token === import68.AnimationDriver)) {
            return this._AnimationDriver_24;
        }
        if ((token === import17.DomRootRenderer)) {
            return this._DomRootRenderer_25;
        }
        if ((token === import12.NgProbeToken)) {
            return this._NgProbeToken_26;
        }
        if ((token === import69.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import18.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import70.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import19.AnimationQueue)) {
            return this._AnimationQueue_30;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_31;
        }
        if ((token === import71.IterableDiffers)) {
            return this._IterableDiffers_32;
        }
        if ((token === import72.KeyValueDiffers)) {
            return this._KeyValueDiffers_33;
        }
        if ((token === import16.SharedStylesHost)) {
            return this._SharedStylesHost_34;
        }
        if ((token === import21.Title)) {
            return this._Title_35;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_36;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_37;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_38;
        }
        if ((token === import73.XSRFStrategy)) {
            return this._XSRFStrategy_39;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_40;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_41;
        }
        if ((token === import74.Http)) {
            return this._Http_42;
        }
        if ((token === import27.BrowserJsonp)) {
            return this._BrowserJsonp_43;
        }
        if ((token === import28.JSONPBackend)) {
            return this._JSONPBackend_44;
        }
        if ((token === import74.Jsonp)) {
            return this._Jsonp_45;
        }
        if ((token === import7.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_46;
        }
        if ((token === import53.LocationStrategy)) {
            return this._LocationStrategy_47;
        }
        if ((token === import29.Location)) {
            return this._Location_48;
        }
        if ((token === import30.UrlSerializer)) {
            return this._UrlSerializer_49;
        }
        if ((token === import31.RouterOutletMap)) {
            return this._RouterOutletMap_50;
        }
        if ((token === import75.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_51;
        }
        if ((token === import76.ROUTES)) {
            return this._ROUTES_52;
        }
        if ((token === import63.Router)) {
            return this._Router_53;
        }
        if ((token === import77.ActivatedRoute)) {
            return this._ActivatedRoute_54;
        }
        if ((token === import33.NoPreloading)) {
            return this._NoPreloading_55;
        }
        if ((token === import33.PreloadingStrategy)) {
            return this._PreloadingStrategy_56;
        }
        if ((token === import33.RouterPreloader)) {
            return this._RouterPreloader_57;
        }
        if ((token === import33.PreloadAllModules)) {
            return this._PreloadAllModules_58;
        }
        if ((token === import7.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_59;
        }
        if ((token === import47.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_60;
        }
        if ((token === import34.Configuration)) {
            return this._Configuration_61;
        }
        if ((token === import35.SecurityService)) {
            return this._SecurityService_62;
        }
        if ((token === import36.SecureFileService)) {
            return this._SecureFileService_63;
        }
        if ((token === import37.DataEventRecordsService)) {
            return this._DataEventRecordsService_64;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__15.ngOnDestroy();
        this._RouterPreloader_57.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
