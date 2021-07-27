"use strict";
/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.TURNLabel = exports.MAPStartLabel = exports.TURNHeaderNode = exports.MAPStartHeaderNode = exports.ModuleNode = exports.MAPStartNode = exports.TURNNode = void 0;
var lib_1 = require("sprotty/lib");
var TURNNode = /** @class */ (function (_super) {
    __extends(TURNNode, _super);
    function TURNNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strokeWidth = 1;
        return _this;
    }
    TURNNode.prototype.hasFeature = function (feature) {
        return feature === lib_1.selectFeature || feature === lib_1.boundsFeature
            || feature === lib_1.layoutContainerFeature || feature === lib_1.fadeFeature || feature === lib_1.hoverFeedbackFeature
            || feature === lib_1.popupFeature || (feature === lib_1.openFeature && this.trace !== undefined);
    };
    return TURNNode;
}(lib_1.RectangularNode));
exports.TURNNode = TURNNode;
var MAPStartNode = /** @class */ (function (_super) {
    __extends(MAPStartNode, _super);
    function MAPStartNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strokeWidth = 1;
        _this.name = '';
        return _this;
    }
    MAPStartNode.prototype.hasFeature = function (feature) {
        if (feature === lib_1.moveFeature)
            return false;
        else
            return _super.prototype.hasFeature.call(this, feature);
    };
    return MAPStartNode;
}(lib_1.CircularNode));
exports.MAPStartNode = MAPStartNode;
var ModuleNode = /** @class */ (function (_super) {
    __extends(ModuleNode, _super);
    function ModuleNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = false;
        return _this;
    }
    ModuleNode.prototype.hasFeature = function (feature) {
        return feature === lib_1.expandFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return ModuleNode;
}(TURNNode));
exports.ModuleNode = ModuleNode;
var MAPStartHeaderNode = /** @class */ (function (_super) {
    __extends(MAPStartHeaderNode, _super);
    function MAPStartHeaderNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MAPStartHeaderNode;
}(lib_1.SCompartment));
exports.MAPStartHeaderNode = MAPStartHeaderNode;
var TURNHeaderNode = /** @class */ (function (_super) {
    __extends(TURNHeaderNode, _super);
    function TURNHeaderNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TURNHeaderNode;
}(lib_1.SCompartment));
exports.TURNHeaderNode = TURNHeaderNode;
var MAPStartLabel = /** @class */ (function (_super) {
    __extends(MAPStartLabel, _super);
    function MAPStartLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MAPStartLabel.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === lib_1.selectFeature || (feature === lib_1.openFeature && this.trace !== undefined);
    };
    return MAPStartLabel;
}(lib_1.SLabel));
exports.MAPStartLabel = MAPStartLabel;
var TURNLabel = /** @class */ (function (_super) {
    __extends(TURNLabel, _super);
    function TURNLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TURNLabel.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === lib_1.selectFeature || (feature === lib_1.openFeature && this.trace !== undefined);
    };
    return TURNLabel;
}(lib_1.SLabel));
exports.TURNLabel = TURNLabel;
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = {
            width: 24,
            height: 24
        };
        return _this;
    }
    Tag.prototype.hasFeature = function (feature) {
        return feature === lib_1.boundsFeature || feature === lib_1.layoutContainerFeature || feature === lib_1.layoutableChildFeature || feature === lib_1.fadeFeature;
    };
    return Tag;
}(lib_1.SShapeElement));
exports.Tag = Tag;
//# sourceMappingURL=turn-models.js.map