var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/dataeventrecords/dataeventrecords-edit.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../angular2App/app/dataeventrecords/DataEventRecordsService';
import * as import9 from '../../../../angular2App/app/services/SecurityService';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import18 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import19 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/forms/src/directives/default_value_accessor';
import * as import22 from '@angular/forms/src/directives/control_value_accessor';
import * as import23 from '@angular/forms/src/directives/ng_model';
import * as import24 from '@angular/forms/src/directives/ng_control';
import * as import25 from '@angular/forms/src/directives/ng_control_status';
export var Wrapper_DataEventRecordsEditComponent = (function () {
    function Wrapper_DataEventRecordsEditComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.DataEventRecordsEditComponent(p0, p1, p2, p3);
    }
    Wrapper_DataEventRecordsEditComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DataEventRecordsEditComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_DataEventRecordsEditComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DataEventRecordsEditComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DataEventRecordsEditComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DataEventRecordsEditComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DataEventRecordsEditComponent;
}());
var renderType_DataEventRecordsEditComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DataEventRecordsEditComponent_Host0 = (function (_super) {
    __extends(View_DataEventRecordsEditComponent_Host0, _super);
    function View_DataEventRecordsEditComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsEditComponent_Host0, renderType_DataEventRecordsEditComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsEditComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'dataeventrecords-edit', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DataEventRecordsEditComponent0(this.viewUtils, this, 0, this._el_0);
        this._DataEventRecordsEditComponent_0_3 = new Wrapper_DataEventRecordsEditComponent(this.injectorGet(import8.DataEventRecordsService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.ActivatedRoute, this.parentIndex), this.injectorGet(import11.Router, this.parentIndex));
        this.compView_0.create(this._DataEventRecordsEditComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DataEventRecordsEditComponent_0_3.context);
    };
    View_DataEventRecordsEditComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DataEventRecordsEditComponent) && (0 === requestNodeIndex))) {
            return this._DataEventRecordsEditComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsEditComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DataEventRecordsEditComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DataEventRecordsEditComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._DataEventRecordsEditComponent_0_3.ngOnDestroy();
    };
    View_DataEventRecordsEditComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DataEventRecordsEditComponent_Host0;
}(import1.AppView));
export var DataEventRecordsEditComponentNgFactory = new import7.ComponentFactory('dataeventrecords-edit', View_DataEventRecordsEditComponent_Host0, import0.DataEventRecordsEditComponent);
var styles_DataEventRecordsEditComponent = [];
var renderType_DataEventRecordsEditComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DataEventRecordsEditComponent, {});
export var View_DataEventRecordsEditComponent0 = (function (_super) {
    __extends(View_DataEventRecordsEditComponent0, _super);
    function View_DataEventRecordsEditComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsEditComponent0, renderType_DataEventRecordsEditComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsEditComponent0.prototype.createInternal = function (rootSelector) {
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
    View_DataEventRecordsEditComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import15.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsEditComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_DataEventRecordsEditComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_DataEventRecordsEditComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_DataEventRecordsEditComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_DataEventRecordsEditComponent0;
}(import1.AppView));
var View_DataEventRecordsEditComponent1 = (function (_super) {
    __extends(View_DataEventRecordsEditComponent1, _super);
    function View_DataEventRecordsEditComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsEditComponent1, renderType_DataEventRecordsEditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_19 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsEditComponent1.prototype.createInternal = function (rootSelector) {
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
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import12.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import14.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import13.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n', null);
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
            this._anchor_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), null);
        return null;
    };
    View_DataEventRecordsEditComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import15.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsEditComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.parentView.context.DataEventRecord;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        var currVal_19 = import3.inlineInterpolate(1, '', this.parentView.context.message, '');
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_7, currVal_19);
            this._expr_19 = currVal_19;
        }
    };
    View_DataEventRecordsEditComponent1.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
    };
    View_DataEventRecordsEditComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsEditComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_DataEventRecordsEditComponent2(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        return null;
    };
    return View_DataEventRecordsEditComponent1;
}(import1.AppView));
var View_DataEventRecordsEditComponent2 = (function (_super) {
    __extends(View_DataEventRecordsEditComponent2, _super);
    function View_DataEventRecordsEditComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsEditComponent2, renderType_DataEventRecordsEditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_69 = import16.UNINITIALIZED;
        this._expr_70 = import16.UNINITIALIZED;
    }
    View_DataEventRecordsEditComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'Id', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n                ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_16 = this.renderer.createText(this._el_15, 'Name', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n                        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_20_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_20));
        this._NG_VALUE_ACCESSOR_20_4 = [this._DefaultValueAccessor_20_3.context];
        this._NgModel_20_5 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_20_4);
        this._NgControl_20_6 = this._NgModel_20_5.context;
        this._NgControlStatus_20_7 = new import19.Wrapper_NgControlStatus(this._NgControl_20_6);
        this._text_21 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._text_22 = this.renderer.createText(this._el_13, '\n                ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_29 = this.renderer.createText(this._el_28, 'Description', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                        ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_33_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3.context];
        this._NgModel_33_5 = new import18.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_33_4);
        this._NgControl_33_6 = this._NgModel_33_5.context;
        this._NgControlStatus_33_7 = new import19.Wrapper_NgControlStatus(this._NgControl_33_6);
        this._text_34 = this.renderer.createText(this._el_31, '\n                    ', null);
        this._text_35 = this.renderer.createText(this._el_26, '\n                ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_42 = this.renderer.createText(this._el_41, 'Timestamp', null);
        this._text_43 = this.renderer.createText(this._el_39, '\n                    ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_39, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_45 = this.renderer.createText(this._el_44, '', null);
        this._text_46 = this.renderer.createText(this._el_39, '\n                ', null);
        this._text_47 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_49 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_51 = this.renderer.createText(this._el_50, '\n                    ', null);
        this._el_52 = import3.createRenderElement(this.renderer, this._el_50, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_53 = this.renderer.createText(this._el_52, '\n                        ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_52, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_55 = this.renderer.createText(this._el_54, 'Update', null);
        this._text_56 = this.renderer.createText(this._el_52, '\n                    ', null);
        this._text_57 = this.renderer.createText(this._el_50, '\n                ', null);
        this._text_58 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_20));
        this._NgModel_20_5.subscribe(this, this.eventHandler(this.handleEvent_20), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_33));
        this._NgModel_33_5.subscribe(this, this.eventHandler(this.handleEvent_33), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_54, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_54));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_DataEventRecordsEditComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.DefaultValueAccessor) && (20 === requestNodeIndex))) {
            return this._DefaultValueAccessor_20_3.context;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_20_4;
        }
        if (((token === import23.NgModel) && (20 === requestNodeIndex))) {
            return this._NgModel_20_5.context;
        }
        if (((token === import24.NgControl) && (20 === requestNodeIndex))) {
            return this._NgControl_20_6;
        }
        if (((token === import25.NgControlStatus) && (20 === requestNodeIndex))) {
            return this._NgControlStatus_20_7.context;
        }
        if (((token === import21.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3.context;
        }
        if (((token === import22.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_4;
        }
        if (((token === import23.NgModel) && (33 === requestNodeIndex))) {
            return this._NgModel_33_5.context;
        }
        if (((token === import24.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_6;
        }
        if (((token === import25.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_7.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsEditComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_20_3.ngDoCheck(this, this._el_20, throwOnChange);
        var currVal_20_1_0 = this.parentView.parentView.context.DataEventRecord.Name;
        this._NgModel_20_5.check_model(currVal_20_1_0, throwOnChange, false);
        this._NgModel_20_5.ngDoCheck(this, this._el_20, throwOnChange);
        this._NgControlStatus_20_7.ngDoCheck(this, this._el_20, throwOnChange);
        this._DefaultValueAccessor_33_3.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_33_1_0 = this.parentView.parentView.context.DataEventRecord.Description;
        this._NgModel_33_5.check_model(currVal_33_1_0, throwOnChange, false);
        this._NgModel_33_5.ngDoCheck(this, this._el_33, throwOnChange);
        this._NgControlStatus_33_7.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_69 = import3.inlineInterpolate(1, '', this.parentView.parentView.context.DataEventRecord.Id, '');
        if (import3.checkBinding(throwOnChange, this._expr_69, currVal_69)) {
            this.renderer.setText(this._text_8, currVal_69);
            this._expr_69 = currVal_69;
        }
        this._NgControlStatus_20_7.checkHost(this, this, this._el_20, throwOnChange);
        this._NgControlStatus_33_7.checkHost(this, this, this._el_33, throwOnChange);
        var currVal_70 = import3.inlineInterpolate(1, '', this.parentView.parentView.context.DataEventRecord.Timestamp, '');
        if (import3.checkBinding(throwOnChange, this._expr_70, currVal_70)) {
            this.renderer.setText(this._text_45, currVal_70);
            this._expr_70 = currVal_70;
        }
    };
    View_DataEventRecordsEditComponent2.prototype.destroyInternal = function () {
        this._NgModel_20_5.ngOnDestroy();
        this._NgModel_33_5.ngOnDestroy();
    };
    View_DataEventRecordsEditComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsEditComponent2.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_20_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.DataEventRecord.Name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DataEventRecordsEditComponent2.prototype.handleEvent_33 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_33_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.DataEventRecord.Description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DataEventRecordsEditComponent2.prototype.handleEvent_54 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.Update() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DataEventRecordsEditComponent2;
}(import1.AppView));
