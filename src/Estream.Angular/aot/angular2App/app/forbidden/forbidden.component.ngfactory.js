var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/forbidden/forbidden.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
export var Wrapper_ForbiddenComponent = (function () {
    function Wrapper_ForbiddenComponent() {
        this._changed = false;
        this.context = new import0.ForbiddenComponent();
    }
    Wrapper_ForbiddenComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ForbiddenComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ForbiddenComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ForbiddenComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ForbiddenComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ForbiddenComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ForbiddenComponent;
}());
var renderType_ForbiddenComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ForbiddenComponent_Host0 = (function (_super) {
    __extends(View_ForbiddenComponent_Host0, _super);
    function View_ForbiddenComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ForbiddenComponent_Host0, renderType_ForbiddenComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ForbiddenComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'forbidden', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ForbiddenComponent0(this.viewUtils, this, 0, this._el_0);
        this._ForbiddenComponent_0_3 = new Wrapper_ForbiddenComponent();
        this.compView_0.create(this._ForbiddenComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ForbiddenComponent_0_3.context);
    };
    View_ForbiddenComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ForbiddenComponent) && (0 === requestNodeIndex))) {
            return this._ForbiddenComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ForbiddenComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ForbiddenComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ForbiddenComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ForbiddenComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ForbiddenComponent_Host0;
}(import1.AppView));
export var ForbiddenComponentNgFactory = new import7.ComponentFactory('forbidden', View_ForbiddenComponent_Host0, import0.ForbiddenComponent);
var styles_ForbiddenComponent = [];
var renderType_ForbiddenComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ForbiddenComponent, {});
export var View_ForbiddenComponent0 = (function (_super) {
    __extends(View_ForbiddenComponent0, _super);
    function View_ForbiddenComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ForbiddenComponent0, renderType_ForbiddenComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ForbiddenComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '403: You have no rights to access this.', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    return View_ForbiddenComponent0;
}(import1.AppView));
