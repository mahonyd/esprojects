var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../angular2App/app/home/home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
export var Wrapper_HomeComponent = (function () {
    function Wrapper_HomeComponent() {
        this._changed = false;
        this.context = new import0.HomeComponent();
    }
    Wrapper_HomeComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_HomeComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_HomeComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_HomeComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_HomeComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_HomeComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_HomeComponent;
}());
var renderType_HomeComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_HomeComponent_Host0 = (function (_super) {
    __extends(View_HomeComponent_Host0, _super);
    function View_HomeComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent_Host0, renderType_HomeComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_HomeComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'home', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_HomeComponent0(this.viewUtils, this, 0, this._el_0);
        this._HomeComponent_0_3 = new Wrapper_HomeComponent();
        this.compView_0.create(this._HomeComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._HomeComponent_0_3.context);
    };
    View_HomeComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) {
            return this._HomeComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_HomeComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomeComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_HomeComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_HomeComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_HomeComponent_Host0;
}(import1.AppView));
export var HomeComponentNgFactory = new import7.ComponentFactory('home', View_HomeComponent_Host0, import0.HomeComponent);
var styles_HomeComponent = [];
var renderType_HomeComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_HomeComponent, {});
export var View_HomeComponent0 = (function (_super) {
    __extends(View_HomeComponent0, _super);
    function View_HomeComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_HomeComponent0, renderType_HomeComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_HomeComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Welcome', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    return View_HomeComponent0;
}(import1.AppView));
