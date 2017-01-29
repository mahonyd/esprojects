var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/dataeventrecords/dataeventrecords-list.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../angular2App/app/dataeventrecords/DataEventRecordsService';
import * as import9 from '../../../../angular2App/app/services/SecurityService';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/router/src/directives/router_link';
export var Wrapper_DataEventRecordsListComponent = (function () {
    function Wrapper_DataEventRecordsListComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.DataEventRecordsListComponent(p0, p1, p2);
    }
    Wrapper_DataEventRecordsListComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DataEventRecordsListComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DataEventRecordsListComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DataEventRecordsListComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DataEventRecordsListComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DataEventRecordsListComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DataEventRecordsListComponent;
}());
var renderType_DataEventRecordsListComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DataEventRecordsListComponent_Host0 = (function (_super) {
    __extends(View_DataEventRecordsListComponent_Host0, _super);
    function View_DataEventRecordsListComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsListComponent_Host0, renderType_DataEventRecordsListComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'dataeventrecords-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DataEventRecordsListComponent0(this.viewUtils, this, 0, this._el_0);
        this._DataEventRecordsListComponent_0_3 = new Wrapper_DataEventRecordsListComponent(this.injectorGet(import8.DataEventRecordsService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._DataEventRecordsListComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DataEventRecordsListComponent_0_3.context);
    };
    View_DataEventRecordsListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DataEventRecordsListComponent) && (0 === requestNodeIndex))) {
            return this._DataEventRecordsListComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DataEventRecordsListComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DataEventRecordsListComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DataEventRecordsListComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DataEventRecordsListComponent_Host0;
}(import1.AppView));
export var DataEventRecordsListComponentNgFactory = new import7.ComponentFactory('dataeventrecords-list', View_DataEventRecordsListComponent_Host0, import0.DataEventRecordsListComponent);
var styles_DataEventRecordsListComponent = [];
var renderType_DataEventRecordsListComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DataEventRecordsListComponent, {});
export var View_DataEventRecordsListComponent0 = (function (_super) {
    __extends(View_DataEventRecordsListComponent0, _super);
    function View_DataEventRecordsListComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsListComponent0, renderType_DataEventRecordsListComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import11.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import13.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import12.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1
        ]), null);
        return null;
    };
    View_DataEventRecordsListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import14.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_DataEventRecordsListComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_DataEventRecordsListComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_DataEventRecordsListComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_DataEventRecordsListComponent0;
}(import1.AppView));
var View_DataEventRecordsListComponent1 = (function (_super) {
    __extends(View_DataEventRecordsListComponent1, _super);
    function View_DataEventRecordsListComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsListComponent1, renderType_DataEventRecordsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_37 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Name', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Timestamp', null);
        this._text_23 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_25 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_12, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_28 = new import11.ViewContainer(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import13.TemplateRef_(this, 28, this._anchor_28);
        this._NgFor_28_6 = new import15.Wrapper_NgFor(this._vc_28.vcRef, this._TemplateRef_28_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_29 = this.renderer.createText(this._el_26, '\n                ', null);
        this._text_30 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_10, '\n\n        ', null);
        this._text_32 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ]), null);
        return null;
    };
    View_DataEventRecordsListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import18.NgFor) && (28 === requestNodeIndex))) {
            return this._NgFor_28_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_28_0_0 = this.parentView.context.DataEventRecords;
        this._NgFor_28_6.check_ngForOf(currVal_28_0_0, throwOnChange, false);
        this._NgFor_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        var currVal_37 = import3.inlineInterpolate(1, '', this.parentView.context.message, '');
        if (import3.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_7, currVal_37);
            this._expr_37 = currVal_37;
        }
    };
    View_DataEventRecordsListComponent1.prototype.destroyInternal = function () {
        this._vc_28.destroyNestedViews();
    };
    View_DataEventRecordsListComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsListComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 28)) {
            return new View_DataEventRecordsListComponent2(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_DataEventRecordsListComponent1;
}(import1.AppView));
var View_DataEventRecordsListComponent2 = (function (_super) {
    __extends(View_DataEventRecordsListComponent2, _super);
    function View_DataEventRecordsListComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsListComponent2, renderType_DataEventRecordsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_22 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsListComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', new import3.InlineArray2(2, 'style', 'height:20px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import11.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import12.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_6 = new import11.ViewContainer(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_12, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Delete', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_13));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._text_15
        ]), [disposable_0]);
        return null;
    };
    View_DataEventRecordsListComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import14.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import14.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsListComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.parentView.context.securityService.HasAdminRole;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = !this.parentView.parentView.context.securityService.HasAdminRole;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_22 = import3.inlineInterpolate(1, '', this.context.$implicit.Timestamp, '');
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setText(this._text_10, currVal_22);
            this._expr_22 = currVal_22;
        }
    };
    View_DataEventRecordsListComponent2.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_DataEventRecordsListComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsListComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_DataEventRecordsListComponent3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_DataEventRecordsListComponent4(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_DataEventRecordsListComponent2.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.Delete(this.context.$implicit.Id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DataEventRecordsListComponent2;
}(import1.AppView));
var View_DataEventRecordsListComponent3 = (function (_super) {
    __extends(View_DataEventRecordsListComponent3, _super);
    function View_DataEventRecordsListComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsListComponent3, renderType_DataEventRecordsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._arr_3 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_4 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsListComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'a', new import3.InlineArray2(2, 'href', ''), null);
        this._RouterLinkWithHref_0_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import10.Router, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import20.ActivatedRoute, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import21.LocationStrategy, this.parentView.parentView.parentIndex));
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_DataEventRecordsListComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsListComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_3(('/dataeventrecords/edit/' + this.parentView.context.$implicit.Id));
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterLinkWithHref_0_3.checkHost(this, this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.Name, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_DataEventRecordsListComponent3.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.ngOnDestroy();
    };
    View_DataEventRecordsListComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsListComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_DataEventRecordsListComponent3;
}(import1.AppView));
var View_DataEventRecordsListComponent4 = (function (_super) {
    __extends(View_DataEventRecordsListComponent4, _super);
    function View_DataEventRecordsListComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsListComponent4, renderType_DataEventRecordsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsListComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_DataEventRecordsListComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.Name, '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_DataEventRecordsListComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DataEventRecordsListComponent4;
}(import1.AppView));
