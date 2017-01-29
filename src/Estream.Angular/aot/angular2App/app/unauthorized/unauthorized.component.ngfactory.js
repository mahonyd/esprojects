var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/unauthorized/unauthorized.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
export var Wrapper_UnauthorizedComponent = (function () {
    function Wrapper_UnauthorizedComponent() {
        this._changed = false;
        this.context = new import0.UnauthorizedComponent();
    }
    Wrapper_UnauthorizedComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UnauthorizedComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_UnauthorizedComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_UnauthorizedComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UnauthorizedComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UnauthorizedComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UnauthorizedComponent;
}());
var renderType_UnauthorizedComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_UnauthorizedComponent_Host0 = (function (_super) {
    __extends(View_UnauthorizedComponent_Host0, _super);
    function View_UnauthorizedComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UnauthorizedComponent_Host0, renderType_UnauthorizedComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UnauthorizedComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'unauthorized', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UnauthorizedComponent0(this.viewUtils, this, 0, this._el_0);
        this._UnauthorizedComponent_0_3 = new Wrapper_UnauthorizedComponent();
        this.compView_0.create(this._UnauthorizedComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._UnauthorizedComponent_0_3.context);
    };
    View_UnauthorizedComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UnauthorizedComponent) && (0 === requestNodeIndex))) {
            return this._UnauthorizedComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UnauthorizedComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UnauthorizedComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UnauthorizedComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_UnauthorizedComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UnauthorizedComponent_Host0;
}(import1.AppView));
export var UnauthorizedComponentNgFactory = new import7.ComponentFactory('unauthorized', View_UnauthorizedComponent_Host0, import0.UnauthorizedComponent);
var styles_UnauthorizedComponent = [];
var renderType_UnauthorizedComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_UnauthorizedComponent, {});
export var View_UnauthorizedComponent0 = (function (_super) {
    __extends(View_UnauthorizedComponent0, _super);
    function View_UnauthorizedComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_UnauthorizedComponent0, renderType_UnauthorizedComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_UnauthorizedComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '401: You have no rights to access this. Please Login', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    return View_UnauthorizedComponent0;
}(import1.AppView));
