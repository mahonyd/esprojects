var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/dataeventrecords/dataeventrecords-create.component';
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
import * as import15 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import16 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import17 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '@angular/core/src/change_detection/change_detection_util';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/forms/src/directives/default_value_accessor';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_model';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '@angular/forms/src/directives/ng_control_status';
export var Wrapper_DataEventRecordsCreateComponent = (function () {
    function Wrapper_DataEventRecordsCreateComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.DataEventRecordsCreateComponent(p0, p1, p2);
    }
    Wrapper_DataEventRecordsCreateComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DataEventRecordsCreateComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DataEventRecordsCreateComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DataEventRecordsCreateComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DataEventRecordsCreateComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DataEventRecordsCreateComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DataEventRecordsCreateComponent;
}());
var renderType_DataEventRecordsCreateComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DataEventRecordsCreateComponent_Host0 = (function (_super) {
    __extends(View_DataEventRecordsCreateComponent_Host0, _super);
    function View_DataEventRecordsCreateComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsCreateComponent_Host0, renderType_DataEventRecordsCreateComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsCreateComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'dataeventrecords-create', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_DataEventRecordsCreateComponent0(this.viewUtils, this, 0, this._el_0);
        this._DataEventRecordsCreateComponent_0_3 = new Wrapper_DataEventRecordsCreateComponent(this.injectorGet(import8.DataEventRecordsService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._DataEventRecordsCreateComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._DataEventRecordsCreateComponent_0_3.context);
    };
    View_DataEventRecordsCreateComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.DataEventRecordsCreateComponent) && (0 === requestNodeIndex))) {
            return this._DataEventRecordsCreateComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsCreateComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DataEventRecordsCreateComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DataEventRecordsCreateComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_DataEventRecordsCreateComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DataEventRecordsCreateComponent_Host0;
}(import1.AppView));
export var DataEventRecordsCreateComponentNgFactory = new import7.ComponentFactory('dataeventrecords-create', View_DataEventRecordsCreateComponent_Host0, import0.DataEventRecordsCreateComponent);
var styles_DataEventRecordsCreateComponent = [];
var renderType_DataEventRecordsCreateComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_DataEventRecordsCreateComponent, {});
export var View_DataEventRecordsCreateComponent0 = (function (_super) {
    __extends(View_DataEventRecordsCreateComponent0, _super);
    function View_DataEventRecordsCreateComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_DataEventRecordsCreateComponent0, renderType_DataEventRecordsCreateComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_DataEventRecordsCreateComponent0.prototype.createInternal = function (rootSelector) {
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
    View_DataEventRecordsCreateComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import14.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsCreateComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_DataEventRecordsCreateComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_DataEventRecordsCreateComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_DataEventRecordsCreateComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_DataEventRecordsCreateComponent0;
}(import1.AppView));
var View_DataEventRecordsCreateComponent1 = (function (_super) {
    __extends(View_DataEventRecordsCreateComponent1, _super);
    function View_DataEventRecordsCreateComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsCreateComponent1, renderType_DataEventRecordsCreateComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_60 = import18.UNINITIALIZED;
    }
    View_DataEventRecordsCreateComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default col-md-12'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_7 = new import11.ViewContainer(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import13.TemplateRef_(this, 7, this._anchor_7);
        this._NgIf_7_6 = new import12.Wrapper_NgIf(this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Name', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_18_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_18));
        this._NG_VALUE_ACCESSOR_18_4 = [this._DefaultValueAccessor_18_3.context];
        this._NgModel_18_5 = new import16.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_18_4);
        this._NgControl_18_6 = this._NgModel_18_5.context;
        this._NgControlStatus_18_7 = new import17.Wrapper_NgControlStatus(this._NgControl_18_6);
        this._text_19 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_20 = this.renderer.createText(this._el_11, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Description', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_31_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_31));
        this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
        this._NgModel_31_5 = new import16.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_31_4);
        this._NgControl_31_6 = this._NgModel_31_5.context;
        this._NgControlStatus_31_7 = new import17.Wrapper_NgControlStatus(this._NgControl_31_6);
        this._text_32 = this.renderer.createText(this._el_29, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, 'Create', null);
        this._text_43 = this.renderer.createText(this._el_39, '\n            ', null);
        this._text_44 = this.renderer.createText(this._el_37, '\n        ', null);
        this._text_45 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_46 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        this._NgModel_18_5.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_31));
        this._NgModel_31_5.subscribe(this, this.eventHandler(this.handleEvent_31), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._text_46
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_DataEventRecordsCreateComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import14.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === import20.DefaultValueAccessor) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_4;
        }
        if (((token === import22.NgModel) && (18 === requestNodeIndex))) {
            return this._NgModel_18_5.context;
        }
        if (((token === import23.NgControl) && (18 === requestNodeIndex))) {
            return this._NgControl_18_6;
        }
        if (((token === import24.NgControlStatus) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_7.context;
        }
        if (((token === import20.DefaultValueAccessor) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_4;
        }
        if (((token === import22.NgModel) && (31 === requestNodeIndex))) {
            return this._NgModel_31_5.context;
        }
        if (((token === import23.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_6;
        }
        if (((token === import24.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_7.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsCreateComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.parentView.context.DataEventRecord;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = this.parentView.context.DataEventRecord.Name;
        this._NgModel_18_5.check_model(currVal_18_1_0, throwOnChange, false);
        this._NgModel_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_7.ngDoCheck(this, this._el_18, throwOnChange);
        this._DefaultValueAccessor_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_1_0 = this.parentView.context.DataEventRecord.Description;
        this._NgModel_31_5.check_model(currVal_31_1_0, throwOnChange, false);
        this._NgModel_31_5.ngDoCheck(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_7.ngDoCheck(this, this._el_31, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        var currVal_60 = import3.inlineInterpolate(1, '\n        ', this.parentView.context.message, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setText(this._text_3, currVal_60);
            this._expr_60 = currVal_60;
        }
        this._NgControlStatus_18_7.checkHost(this, this, this._el_18, throwOnChange);
        this._NgControlStatus_31_7.checkHost(this, this, this._el_31, throwOnChange);
    };
    View_DataEventRecordsCreateComponent1.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
        this._NgModel_18_5.ngOnDestroy();
        this._NgModel_31_5.ngOnDestroy();
    };
    View_DataEventRecordsCreateComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsCreateComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 7)) {
            return new View_DataEventRecordsCreateComponent2(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    View_DataEventRecordsCreateComponent1.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.DataEventRecord.Name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DataEventRecordsCreateComponent1.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_31_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.DataEventRecord.Description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DataEventRecordsCreateComponent1.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Create() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DataEventRecordsCreateComponent1;
}(import1.AppView));
var View_DataEventRecordsCreateComponent2 = (function (_super) {
    __extends(View_DataEventRecordsCreateComponent2, _super);
    function View_DataEventRecordsCreateComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_DataEventRecordsCreateComponent2, renderType_DataEventRecordsCreateComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_DataEventRecordsCreateComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Id', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_6_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_6));
        this._NG_VALUE_ACCESSOR_6_4 = [this._DefaultValueAccessor_6_3.context];
        this._NgModel_6_5 = new import16.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_6_4);
        this._NgControl_6_6 = this._NgModel_6_5.context;
        this._NgControlStatus_6_7 = new import17.Wrapper_NgControlStatus(this._NgControl_6_6);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_6));
        this._NgModel_6_5.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7
        ]), [disposable_0]);
        return null;
    };
    View_DataEventRecordsCreateComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.DefaultValueAccessor) && (6 === requestNodeIndex))) {
            return this._DefaultValueAccessor_6_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (6 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_6_4;
        }
        if (((token === import22.NgModel) && (6 === requestNodeIndex))) {
            return this._NgModel_6_5.context;
        }
        if (((token === import23.NgControl) && (6 === requestNodeIndex))) {
            return this._NgControl_6_6;
        }
        if (((token === import24.NgControlStatus) && (6 === requestNodeIndex))) {
            return this._NgControlStatus_6_7.context;
        }
        return notFoundResult;
    };
    View_DataEventRecordsCreateComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_6_1_0 = this.parentView.parentView.context.DataEventRecord.Id;
        this._NgModel_6_5.check_model(currVal_6_1_0, throwOnChange, false);
        this._NgModel_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatus_6_7.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatus_6_7.checkHost(this, this, this._el_6, throwOnChange);
    };
    View_DataEventRecordsCreateComponent2.prototype.destroyInternal = function () {
        this._NgModel_6_5.ngOnDestroy();
    };
    View_DataEventRecordsCreateComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DataEventRecordsCreateComponent2.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.DataEventRecord.Id = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DataEventRecordsCreateComponent2;
}(import1.AppView));
