var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/securefile/securefiles.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../../angular2App/app/securefile/SecureFileService';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../../angular2App/app/app.constants';
import * as import11 from '../../../../angular2App/app/services/SecurityService';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/change_detection/change_detection_util';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
export var Wrapper_SecureFilesComponent = (function () {
    function Wrapper_SecureFilesComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.SecureFilesComponent(p0, p1);
    }
    Wrapper_SecureFilesComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SecureFilesComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SecureFilesComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_SecureFilesComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SecureFilesComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SecureFilesComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SecureFilesComponent;
}());
var renderType_SecureFilesComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_SecureFilesComponent_Host0 = (function (_super) {
    __extends(View_SecureFilesComponent_Host0, _super);
    function View_SecureFilesComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SecureFilesComponent_Host0, renderType_SecureFilesComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_SecureFilesComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'securefiles', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SecureFilesComponent0(this.viewUtils, this, 0, this._el_0);
        this._SecureFileService_0_3 = new import5.SecureFileService(this.injectorGet(import9.Http, this.parentIndex), this.injectorGet(import10.Configuration, this.parentIndex), this.injectorGet(import11.SecurityService, this.parentIndex));
        this._SecureFilesComponent_0_4 = new Wrapper_SecureFilesComponent(this._SecureFileService_0_3, this.injectorGet(import11.SecurityService, this.parentIndex));
        this.compView_0.create(this._SecureFilesComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._SecureFilesComponent_0_4.context);
    };
    View_SecureFilesComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.SecureFileService) && (0 === requestNodeIndex))) {
            return this._SecureFileService_0_3;
        }
        if (((token === import0.SecureFilesComponent) && (0 === requestNodeIndex))) {
            return this._SecureFilesComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_SecureFilesComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SecureFilesComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SecureFilesComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SecureFilesComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SecureFilesComponent_Host0;
}(import1.AppView));
export var SecureFilesComponentNgFactory = new import8.ComponentFactory('securefiles', View_SecureFilesComponent_Host0, import0.SecureFilesComponent);
var styles_SecureFilesComponent = [];
var renderType_SecureFilesComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_SecureFilesComponent, {});
export var View_SecureFilesComponent0 = (function (_super) {
    __extends(View_SecureFilesComponent0, _super);
    function View_SecureFilesComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SecureFilesComponent0, renderType_SecureFilesComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways);
    }
    View_SecureFilesComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import12.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import14.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import13.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1
        ]), null);
        return null;
    };
    View_SecureFilesComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import15.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_SecureFilesComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_SecureFilesComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_SecureFilesComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_SecureFilesComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_SecureFilesComponent0;
}(import1.AppView));
var View_SecureFilesComponent1 = (function (_super) {
    __extends(View_SecureFilesComponent1, _super);
    function View_SecureFilesComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SecureFilesComponent1, renderType_SecureFilesComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_34 = import17.UNINITIALIZED;
    }
    View_SecureFilesComponent1.prototype.createInternal = function (rootSelector) {
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
        this._text_20 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_22 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_12, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, '\n                    ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_23, null);
        this._vc_25 = new import12.ViewContainer(25, 23, this, this._anchor_25);
        this._TemplateRef_25_5 = new import14.TemplateRef_(this, 25, this._anchor_25);
        this._NgFor_25_6 = new import16.Wrapper_NgFor(this._vc_25.vcRef, this._TemplateRef_25_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_26 = this.renderer.createText(this._el_23, '\n                ', null);
        this._text_27 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_28 = this.renderer.createText(this._el_10, '\n\n        ', null);
        this._text_29 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n', null);
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
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30
        ]), null);
        return null;
    };
    View_SecureFilesComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import19.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        return notFoundResult;
    };
    View_SecureFilesComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_25_0_0 = this.parentView.context.Files;
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, false);
        this._NgFor_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        var currVal_34 = import3.inlineInterpolate(1, '', this.parentView.context.message, '');
        if (import3.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_7, currVal_34);
            this._expr_34 = currVal_34;
        }
    };
    View_SecureFilesComponent1.prototype.destroyInternal = function () {
        this._vc_25.destroyNestedViews();
    };
    View_SecureFilesComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SecureFilesComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_SecureFilesComponent2(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        return null;
    };
    return View_SecureFilesComponent1;
}(import1.AppView));
var View_SecureFilesComponent2 = (function (_super) {
    __extends(View_SecureFilesComponent2, _super);
    function View_SecureFilesComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SecureFilesComponent2, renderType_SecureFilesComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_6 = import17.UNINITIALIZED;
    }
    View_SecureFilesComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', new import3.InlineArray2(2, 'style', 'height:20px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_3));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5
        ]), [disposable_0]);
        return null;
    };
    View_SecureFilesComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6 = import3.inlineInterpolate(1, 'Download ', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_SecureFilesComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SecureFilesComponent2.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.DownloadFileById(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SecureFilesComponent2;
}(import1.AppView));
