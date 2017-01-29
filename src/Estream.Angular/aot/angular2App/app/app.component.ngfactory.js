var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../angular2App/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../angular2App/app/services/SecurityService';
import * as import9 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/router/src/directives/router_outlet';
export var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new import0.AppComponent(p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.SecurityService, this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
export var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._arr_65 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_66 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_67 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_68 = import3.pureProxy1(function (p0) {
            return [p0];
        });
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'container', 'style', 'margin-top: 15px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-default'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'button', new import3.InlineArray16(12, 'aria-controls', 'navbar', 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbar', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_12 = this.renderer.createText(this._el_11, 'Toggle navigation', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_15 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_17 = this.renderer.createText(this._el_9, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_9, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_19 = this.renderer.createText(this._el_9, '\n                ', null);
        this._text_20 = this.renderer.createText(this._el_7, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_7, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._RouterLinkWithHref_21_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'img', new import3.InlineArray8(6, 'height', '40', 'src', 'assets/damienbod.jpg', 'style', 'margin-top:-10px;'), null);
        this._text_23 = this.renderer.createText(this._el_7, '\n            ', null);
        this._text_24 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray4(4, 'class', 'navbar-collapse collapse', 'id', 'navbar'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_29, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_30_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_31 = this.renderer.createText(this._el_30, 'DataEventRecords', null);
        this._text_32 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_33, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_34_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_35 = this.renderer.createText(this._el_34, 'Create DataEventRecord', null);
        this._text_36 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_37, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_38_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import15.LocationStrategy, this.parentIndex));
        this._text_39 = this.renderer.createText(this._el_38, 'Secured Files Download', null);
        this._text_40 = this.renderer.createText(this._el_27, '\n\n                    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._vc_42 = new import10.ViewContainer(42, 41, this, this._anchor_42);
        this._TemplateRef_42_5 = new import16.TemplateRef_(this, 42, this._anchor_42);
        this._NgIf_42_6 = new import11.Wrapper_NgIf(this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._anchor_45 = this.renderer.createTemplateAnchor(this._el_44, null);
        this._vc_45 = new import10.ViewContainer(45, 44, this, this._anchor_45);
        this._TemplateRef_45_5 = new import16.TemplateRef_(this, 45, this._anchor_45);
        this._NgIf_45_6 = new import11.Wrapper_NgIf(this._vc_45.vcRef, this._TemplateRef_45_5);
        this._text_46 = this.renderer.createText(this._el_27, '\n\n                ', null);
        this._text_47 = this.renderer.createText(this._el_25, '\n            ', null);
        this._text_48 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_49 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_0, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_51 = new import10.ViewContainer(51, 0, this, this._el_51);
        this._RouterOutlet_51_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import17.RouterOutletMap, this.parentIndex), this._vc_51.vcRef, this.parentView.injectorGet(import18.ComponentFactoryResolver, this.parentIndex), null);
        this._text_52 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_21));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_34, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_34));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_38));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._anchor_42,
            this._text_43,
            this._el_44,
            this._anchor_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLinkWithHref_21_3.context;
        }
        if (((token === import19.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLinkWithHref_30_3.context;
        }
        if (((token === import19.RouterLinkWithHref) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._RouterLinkWithHref_34_3.context;
        }
        if (((token === import19.RouterLinkWithHref) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._RouterLinkWithHref_38_3.context;
        }
        if (((token === import16.TemplateRef) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === import20.NgIf) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        if (((token === import16.TemplateRef) && (45 === requestNodeIndex))) {
            return this._TemplateRef_45_5;
        }
        if (((token === import20.NgIf) && (45 === requestNodeIndex))) {
            return this._NgIf_45_6.context;
        }
        if (((token === import21.RouterOutlet) && (51 === requestNodeIndex))) {
            return this._RouterOutlet_51_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_21_0_0 = this._arr_65('/dataeventrecords/list');
        this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0, throwOnChange, false);
        this._RouterLinkWithHref_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_30_0_0 = this._arr_66('/dataeventrecords/list');
        this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLinkWithHref_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        var currVal_34_0_0 = this._arr_67('/dataeventrecords/create');
        this._RouterLinkWithHref_34_3.check_routerLink(currVal_34_0_0, throwOnChange, false);
        this._RouterLinkWithHref_34_3.ngDoCheck(this, this._el_34, throwOnChange);
        var currVal_38_0_0 = this._arr_68('/securefile/securefiles');
        this._RouterLinkWithHref_38_3.check_routerLink(currVal_38_0_0, throwOnChange, false);
        this._RouterLinkWithHref_38_3.ngDoCheck(this, this._el_38, throwOnChange);
        var currVal_42_0_0 = !this.context.securityService.IsAuthorized;
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        var currVal_45_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_45_6.check_ngIf(currVal_45_0_0, throwOnChange, false);
        this._NgIf_45_6.ngDoCheck(this, this._anchor_45, throwOnChange);
        this._RouterOutlet_51_5.ngDoCheck(this, this._el_51, throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_45.detectChangesInNestedViews(throwOnChange);
        this._vc_51.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_21_3.checkHost(this, this, this._el_21, throwOnChange);
        this._RouterLinkWithHref_30_3.checkHost(this, this, this._el_30, throwOnChange);
        this._RouterLinkWithHref_34_3.checkHost(this, this, this._el_34, throwOnChange);
        this._RouterLinkWithHref_38_3.checkHost(this, this, this._el_38, throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_42.destroyNestedViews();
        this._vc_45.destroyNestedViews();
        this._vc_51.destroyNestedViews();
        this._RouterLinkWithHref_21_3.ngOnDestroy();
        this._RouterLinkWithHref_30_3.ngOnDestroy();
        this._RouterLinkWithHref_34_3.ngOnDestroy();
        this._RouterLinkWithHref_38_3.ngOnDestroy();
        this._RouterOutlet_51_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 42)) {
            return new View_AppComponent1(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        if ((nodeIndex == 45)) {
            return new View_AppComponent2(this.viewUtils, this, 45, this._anchor_45, this._vc_45);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_21_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_30_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_34 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_34_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_38_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent0;
}(import1.AppView));
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'navigationLinkButton'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Login', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Login() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent1;
}(import1.AppView));
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'class', 'navigationLinkButton'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'Logout', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Logout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent2;
}(import1.AppView));
