"use strict";
/********************************************************************************
 * Copyright (c) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var TURNModelFactory = /** @class */ (function (_super) {
    __extends(TURNModelFactory, _super);
    function TURNModelFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TURNModelFactory.prototype.initializeChild = function (child, schema, parent) {
        _super.prototype.initializeChild.call(this, child, schema, parent);
        if (child instanceof sprotty_1.SEdge) {
            child.routerKind = sprotty_1.ManhattanEdgeRouter.KIND;
            child.targetAnchorCorrection = Math.sqrt(5);
        }
        else if (child instanceof sprotty_1.SLabel) {
            child.edgePlacement = {
                rotate: true,
                position: 0.6
            };
        }
        return child;
    };
    TURNModelFactory = __decorate([
        inversify_1.injectable()
    ], TURNModelFactory);
    return TURNModelFactory;
}(sprotty_1.SGraphFactory));
exports.TURNModelFactory = TURNModelFactory;
var TURNNode = /** @class */ (function (_super) {
    __extends(TURNNode, _super);
    function TURNNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strokeWidth = 1;
        return _this;
    }
    TURNNode.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.selectFeature || feature === sprotty_1.boundsFeature
            || feature === sprotty_1.layoutContainerFeature || feature === sprotty_1.fadeFeature || feature === sprotty_1.hoverFeedbackFeature
            || feature === sprotty_1.popupFeature || (feature === sprotty_1.openFeature && this.trace !== undefined);
    };
    return TURNNode;
}(sprotty_1.RectangularNode));
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
        if (feature === sprotty_1.moveFeature)
            return false;
        else
            return _super.prototype.hasFeature.call(this, feature);
    };
    return MAPStartNode;
}(sprotty_1.CircularNode));
exports.MAPStartNode = MAPStartNode;
var ModuleNode = /** @class */ (function (_super) {
    __extends(ModuleNode, _super);
    function ModuleNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = false;
        return _this;
    }
    ModuleNode.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.expandFeature || _super.prototype.hasFeature.call(this, feature);
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
}(sprotty_1.SCompartment));
exports.MAPStartHeaderNode = MAPStartHeaderNode;
var TURNHeaderNode = /** @class */ (function (_super) {
    __extends(TURNHeaderNode, _super);
    function TURNHeaderNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TURNHeaderNode;
}(sprotty_1.SCompartment));
exports.TURNHeaderNode = TURNHeaderNode;
var MAPStartLabel = /** @class */ (function (_super) {
    __extends(MAPStartLabel, _super);
    function MAPStartLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MAPStartLabel.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === sprotty_1.selectFeature || (feature === sprotty_1.openFeature && this.trace !== undefined);
    };
    return MAPStartLabel;
}(sprotty_1.SLabel));
exports.MAPStartLabel = MAPStartLabel;
var TURNLabel = /** @class */ (function (_super) {
    __extends(TURNLabel, _super);
    function TURNLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TURNLabel.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === sprotty_1.selectFeature || (feature === sprotty_1.openFeature && this.trace !== undefined);
    };
    return TURNLabel;
}(sprotty_1.SLabel));
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
        return feature === sprotty_1.boundsFeature || feature === sprotty_1.layoutContainerFeature || feature === sprotty_1.layoutableChildFeature || feature === sprotty_1.fadeFeature;
    };
    return Tag;
}(sprotty_1.SShapeElement));
exports.Tag = Tag;
//# sourceMappingURL=model.js.map