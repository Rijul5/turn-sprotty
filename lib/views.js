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
exports.CircleNodeView = exports.angle = exports.DashedArrowEdgeView = exports.ArrowEdgeView = exports.ContributeEdgeView = exports.CorrelationEdgeView = exports.DashedEdgeView = exports.DecompositionEdgeView = exports.DependencyEdgeView = exports.CompositionEdgeView = exports.NoteView = exports.UsesNodeView = exports.CaseNodeView = exports.ActorNodeView = exports.ChoiceNodeView = exports.ModuleNodeView2 = exports.BeliefNodeView = exports.GoalNodeView = exports.SoftgoalNodeViewTry = exports.SoftgoalNodeView = exports.IndicatorNodeView = exports.TaskNodeView = exports.ModuleNodeView = exports.ClassNodeView2 = exports.TagView = exports.HeaderCompartmentView = exports.ResourceNodeView = exports.ClassNodeView = void 0;
/** @jsx svg */
var snabbdom_jsx_1 = require("snabbdom-jsx");
var lib_1 = require("sprotty/lib");
var ClassNodeView = /** @class */ (function () {
    function ClassNodeView() {
    }
    ClassNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": true },
            snabbdom_jsx_1.svg("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', 'goal');
        return vnode;
    };
    return ClassNodeView;
}());
exports.ClassNodeView = ClassNodeView;
var ResourceNodeView = /** @class */ (function () {
    function ResourceNodeView() {
    }
    ResourceNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": true },
            snabbdom_jsx_1.svg("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node));
        return vnode;
    };
    return ResourceNodeView;
}());
exports.ResourceNodeView = ResourceNodeView;
var HeaderCompartmentView = /** @class */ (function () {
    function HeaderCompartmentView() {
    }
    HeaderCompartmentView.prototype.render = function (model, context) {
        var translate = "translate(" + model.bounds.x + ", " + model.bounds.y + ")";
        var parentSize = model.parent.size;
        var width = Math.max(0, parentSize.width);
        var height = Math.max(0, model.size.height);
        var vnode = snabbdom_jsx_1.svg("g", { transform: translate, "class-comp": "{true}" },
            snabbdom_jsx_1.svg("rect", { "class-classHeader": true, x: 0, y: 0, width: width, height: height }),
            context.renderChildren(model));
        return vnode;
    };
    return HeaderCompartmentView;
}());
exports.HeaderCompartmentView = HeaderCompartmentView;
var TagView = /** @class */ (function () {
    function TagView() {
    }
    TagView.prototype.render = function (element, context) {
        var radius = 0.5 * element.size.width;
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("circle", { "class-tag": true, r: radius, cx: radius, cy: radius }),
            context.renderChildren(element));
    };
    return TagView;
}());
exports.TagView = TagView;
var ClassNodeView2 = /** @class */ (function () {
    function ClassNodeView2() {
    }
    ClassNodeView2.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": true },
            snabbdom_jsx_1.svg("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, width: 20, height: 5, fill: "#ffffff" }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', 'goal');
        return vnode;
    };
    return ClassNodeView2;
}());
exports.ClassNodeView2 = ClassNodeView2;
var ModuleNodeView = /** @class */ (function () {
    function ModuleNodeView() {
    }
    ModuleNodeView.prototype.render = function (node, context) {
        return snabbdom_jsx_1.svg("g", { "class-sprotty-node": true, "class-module": true, "class-mouseover": node.hoverFeedback },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, x: 0, y: 0, rx: "5", ry: "5", width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node));
    };
    return ModuleNodeView;
}());
exports.ModuleNodeView = ModuleNodeView;
var TaskNodeView = /** @class */ (function () {
    function TaskNodeView() {
    }
    TaskNodeView.prototype.render = function (model, context) {
        var width = Math.max(0, model.size.width * 0.5);
        var height = Math.max(0, model.size.height * 0.5);
        var rhombStr = "M 0," + height + " l " + width + "," + height + " l " + width + ",-" + height + " l -" + width + ",-" + height + "z";
        return snabbdom_jsx_1.svg("g", { "class-sprotty-node": "{true}", "class-choice": true },
            snabbdom_jsx_1.svg("path", { d: rhombStr, "class-choice": true }),
            context.renderChildren(model));
    };
    return TaskNodeView;
}());
exports.TaskNodeView = TaskNodeView;
var IndicatorNodeView = /** @class */ (function () {
    function IndicatorNodeView() {
    }
    IndicatorNodeView.prototype.render = function (node, context) {
        var radius = node.size.width;
        var rhombStr = "m 30 30, h 75 l 20 20 l -20 20 h -40 l -20 -20 l 17 -20 z";
        return snabbdom_jsx_1.svg("g", { "class-sprotty-node": true, "class-module": true, "class-mouseover": node.hoverFeedback },
            snabbdom_jsx_1.svg("path", { d: rhombStr, "class-selected": node.selected, r: radius }),
            context.renderChildren(node));
    };
    return IndicatorNodeView;
}());
exports.IndicatorNodeView = IndicatorNodeView;
var SoftgoalNodeView = /** @class */ (function () {
    function SoftgoalNodeView() {
    }
    SoftgoalNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": "{true}" },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), rx: Math.max(node.size.width * 0.5, 0), ry: 10 }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', node.cssClass);
        return vnode;
    };
    return SoftgoalNodeView;
}());
exports.SoftgoalNodeView = SoftgoalNodeView;
var SoftgoalNodeViewTry = /** @class */ (function () {
    function SoftgoalNodeViewTry() {
    }
    SoftgoalNodeViewTry.prototype.render = function (example, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-example": "{true}" },
            snabbdom_jsx_1.svg("rect", { "class-example": true, "class-selected": example.selected, "class-example-label": true, x: 0, y: 0, width: Math.max(0, example.bounds.width), height: Math.max(0, example.bounds.height), rx: Math.max(example.size.width * 0.5, 0), ry: 10 }),
            context.renderChildren(example));
        lib_1.setAttr(vnode, 'class', example.cssClass);
        return vnode;
    };
    return SoftgoalNodeViewTry;
}());
exports.SoftgoalNodeViewTry = SoftgoalNodeViewTry;
var GoalNodeView = /** @class */ (function (_super) {
    __extends(GoalNodeView, _super);
    function GoalNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoalNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": true },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), rx: Math.max(node.size.height * 0.5, 0), ry: Math.max(node.size.height * 0.5, 0) }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', node.cssClass);
        return vnode;
    };
    return GoalNodeView;
}(SoftgoalNodeView));
exports.GoalNodeView = GoalNodeView;
var BeliefNodeView = /** @class */ (function () {
    function BeliefNodeView() {
    }
    BeliefNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": "{true}" },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, "stroke-dasharray": true, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), rx: Math.max(node.size.width * 1, 0), ry: 40 }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', node.cssClass);
        return vnode;
    };
    return BeliefNodeView;
}());
exports.BeliefNodeView = BeliefNodeView;
var ModuleNodeView2 = /** @class */ (function () {
    function ModuleNodeView2() {
    }
    ModuleNodeView2.prototype.render = function (node, context) {
        var radius = this.getRadius(node);
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("circle", { "class-sprotty-node": true, fill: "#ffffff", "class-task": true, "class-mouseover": node.hoverFeedback, "class-selected": node.selected, "class-running": node.status === 'running', "class-finished": node.status === 'finished', r: radius, cx: radius, cy: radius }),
            snabbdom_jsx_1.svg("text", { x: radius, y: radius + 5, "class-text": true }, node.name));
    };
    ModuleNodeView2.prototype.getRadius = function (node) {
        return 4;
    };
    return ModuleNodeView2;
}());
exports.ModuleNodeView2 = ModuleNodeView2;
var ChoiceNodeView = /** @class */ (function () {
    function ChoiceNodeView() {
    }
    ChoiceNodeView.prototype.render = function (model, context) {
        var width = Math.max(0, model.size.width * 0.5);
        var height = Math.max(0, model.size.height * 0.5);
        var rhombStr = "M 0," + height + " l " + width + "," + height + " l " + width + ",-" + height + " l -" + width + ",-" + height + "z";
        return snabbdom_jsx_1.svg("g", { "class-sprotty-node": "{true}", "class-choice": true },
            snabbdom_jsx_1.svg("path", { d: rhombStr, "class-choice": true }),
            context.renderChildren(model));
    };
    return ChoiceNodeView;
}());
exports.ChoiceNodeView = ChoiceNodeView;
var ActorNodeView = /** @class */ (function () {
    function ActorNodeView() {
    }
    ActorNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { id: 'layer1', fill: 'none', stroke: '#000' },
            snabbdom_jsx_1.svg("path", { id: 'path1884', d: 'M 627.96063 486.81354 A 192.0369 175.71376 0 1 1 243.88684,486.81354 A 192.0369 175.71376 0 1 1 627.96063 486.81354 z', transform: 'matrix(.6624 0 0 .72394 -139.126 -214.818)', strokeWidth: '3' }),
            snabbdom_jsx_1.svg("path", { d: 'M 149.63121,265.30877 C 149.63121,434.30124 149.63121,433.82115 149.63121,433.82115 L 149,583.60992', id: 'path3657', fillRule: 'evenodd', strokeWidth: '3' }),
            snabbdom_jsx_1.svg("path", { d: 'M 276.81568,368.27664 L 21.18432,367.64528 L 276.81568,368.27664 z', id: 'path4548', fillRule: 'evenodd', strokeWidth: '3.369' }),
            snabbdom_jsx_1.svg("path", { d: 'M 19,717.46096 L 148,580.46096 L 278,718.46096 L 148,583.46096 L 19,717.46096 z', id: 'path6322', fillRule: 'evenodd', strokeWidth: '3', fill: "#ffffff" }));
        lib_1.setAttr(vnode, 'class', node.cssClass);
        return vnode;
    };
    return ActorNodeView;
}());
exports.ActorNodeView = ActorNodeView;
var CaseNodeView = /** @class */ (function () {
    function CaseNodeView() {
    }
    CaseNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": "{true}" },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), rx: Math.max(node.size.width * 0.5, 0), ry: 10 }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', 'case');
        return vnode;
    };
    return CaseNodeView;
}());
exports.CaseNodeView = CaseNodeView;
var UsesNodeView = /** @class */ (function (_super) {
    __extends(UsesNodeView, _super);
    function UsesNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsesNodeView.prototype.render = function (node, context) {
        var vnode = snabbdom_jsx_1.svg("g", { "class-sprotty-node": true },
            snabbdom_jsx_1.svg("rect", { "class-body": true, "class-selected": node.selected, x: 0, y: 0, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), rx: Math.max(node.size.height * 0.5, 0), ry: Math.max(node.size.height * 0.5, 0) }),
            context.renderChildren(node));
        lib_1.setAttr(vnode, 'class', node.cssClass);
        return vnode;
    };
    return UsesNodeView;
}(CaseNodeView));
exports.UsesNodeView = UsesNodeView;
var NoteView = /** @class */ (function () {
    function NoteView() {
    }
    NoteView.prototype.render = function (node, context) {
        return snabbdom_jsx_1.svg("g", { "class-note": true, "class-mouseover": node.hoverFeedback },
            snabbdom_jsx_1.svg("path", { "class-front": true, d: "M 0,0 l 15,0 l 0,10 l 10,0 l 0,25 l -25,0 Z", fill: "#FFEB8A" }),
            snabbdom_jsx_1.svg("path", { "class-noteEdge": true, d: "M 15,0 l 0,10 l 10,0 Z", fill: "#FFCC40" }));
    };
    return NoteView;
}());
exports.NoteView = NoteView;
var CompositionEdgeView = /** @class */ (function (_super) {
    __extends(CompositionEdgeView, _super);
    function CompositionEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositionEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        var r = 6;
        var rhombStr = "M 0,0 l" + r + "," + (r / 2) + " l" + r + ",-" + (r / 2) + " l-" + r + ",-" + (r / 2) + " l-" + r + "," + (r / 2) + " Z";
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, "class-composition": true, d: rhombStr, transform: "rotate(" + angle(p1, p2) + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    CompositionEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return CompositionEdgeView.SOURCE_CORRECTION;
    };
    CompositionEdgeView.SOURCE_CORRECTION = Math.sqrt(1 * 1 + 2 * 2);
    return CompositionEdgeView;
}(lib_1.PolylineEdgeView));
exports.CompositionEdgeView = CompositionEdgeView;
var DependencyEdgeView = /** @class */ (function (_super) {
    __extends(DependencyEdgeView, _super);
    function DependencyEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DependencyEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        var rhombStr = "m 0, 10 m 15 -28 h 10 a10,10 0 0,1 10,10 v 10 a10,10 0 0,1 -10,10 h -10 v -30 z";
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, "class-composition": true, d: rhombStr, fill: "#FFEB8A", transform: "rotate(" + angle(p1, p2) + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    DependencyEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return DependencyEdgeView.SOURCE_CORRECTION;
    };
    DependencyEdgeView.SOURCE_CORRECTION = Math.sqrt(1 * 1 + 2 * 2);
    return DependencyEdgeView;
}(lib_1.PolylineEdgeView));
exports.DependencyEdgeView = DependencyEdgeView;
var DecompositionEdgeView = /** @class */ (function (_super) {
    __extends(DecompositionEdgeView, _super);
    function DecompositionEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecompositionEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        var r = 6;
        var rhombStr = "M 0,0 l" + r + "," + (r / 2) + " l" + r + ",-" + (r / 2) + " l-" + r + ",-" + (r / 2) + " l-" + r + "," + (r / 2) + " Z";
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, "class-composition": true, d: rhombStr, transform: "rotate(" + angle(p1, p2) + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    DecompositionEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return DecompositionEdgeView.SOURCE_CORRECTION;
    };
    DecompositionEdgeView.SOURCE_CORRECTION = Math.sqrt(1 * 1 + 2 * 2);
    return DecompositionEdgeView;
}(lib_1.PolylineEdgeView));
exports.DecompositionEdgeView = DecompositionEdgeView;
var DashedEdgeView = /** @class */ (function (_super) {
    __extends(DashedEdgeView, _super);
    function DashedEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashedEdgeView.prototype.renderLine = function (edge, segments, context) {
        var firstPoint = segments[0];
        var path = "M " + firstPoint.x + "," + firstPoint.y;
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += "L " + p.x + "," + p.y;
        }
        return snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, "class-dashed": true, d: path });
    };
    return DashedEdgeView;
}(lib_1.PolylineEdgeView));
exports.DashedEdgeView = DashedEdgeView;
var CorrelationEdgeView = /** @class */ (function (_super) {
    __extends(CorrelationEdgeView, _super);
    function CorrelationEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CorrelationEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p1, p2) + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    CorrelationEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return CompositionEdgeView.SOURCE_CORRECTION;
    };
    CorrelationEdgeView.SOURCE_CORRECTION = Math.sqrt(1 * 1 + 2.5 * 2.5);
    return CorrelationEdgeView;
}(DashedEdgeView));
exports.CorrelationEdgeView = CorrelationEdgeView;
var ContributeEdgeView = /** @class */ (function (_super) {
    __extends(ContributeEdgeView, _super);
    function ContributeEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContributeEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p1, p2) + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    ContributeEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return CompositionEdgeView.SOURCE_CORRECTION;
    };
    ContributeEdgeView.SOURCE_CORRECTION = Math.sqrt(1 * 1 + 2.5 * 2.5);
    return ContributeEdgeView;
}(lib_1.PolylineEdgeView));
exports.ContributeEdgeView = ContributeEdgeView;
var ArrowEdgeView = /** @class */ (function (_super) {
    __extends(ArrowEdgeView, _super);
    function ArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + 2 * (p2.x) + " " + 2 * (p2.y) + ")" })
        ];
    };
    ArrowEdgeView.prototype.getTargetAnchorCorrection = function (edge) {
        return ArrowEdgeView.TARGET_CORRECTION;
    };
    ArrowEdgeView.TARGET_CORRECTION = Math.sqrt(1 * 1 + 2.5 * 2.5);
    return ArrowEdgeView;
}(lib_1.PolylineEdgeView));
exports.ArrowEdgeView = ArrowEdgeView;
var DashedArrowEdgeView = /** @class */ (function (_super) {
    __extends(DashedArrowEdgeView, _super);
    function DashedArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashedArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            snabbdom_jsx_1.svg("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" })
        ];
    };
    DashedArrowEdgeView.prototype.getTargetAnchorCorrection = function (edge) {
        return DashedArrowEdgeView.TARGET_CORRECTION;
    };
    DashedArrowEdgeView.TARGET_CORRECTION = Math.sqrt(1 * 1 + 2.5 * 2.5);
    return DashedArrowEdgeView;
}(DashedEdgeView));
exports.DashedArrowEdgeView = DashedArrowEdgeView;
function angle(x0, x1) {
    return lib_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
}
exports.angle = angle;
var CircleNodeView = /** @class */ (function () {
    function CircleNodeView() {
    }
    CircleNodeView.prototype.render = function (node, context) {
        var radius = this.getRadius(node);
        return snabbdom_jsx_1.svg("g", null,
            snabbdom_jsx_1.svg("circle", { "class-sprotty-node": true, "class-selected": node.selected, r: radius, cx: radius, cy: radius }),
            snabbdom_jsx_1.svg("text", { x: radius, y: radius + 7, "class-sprotty-text": true }, node.id.substr(4)));
    };
    CircleNodeView.prototype.getRadius = function (node) {
        return 40;
    };
    return CircleNodeView;
}());
exports.CircleNodeView = CircleNodeView;
//# sourceMappingURL=views.js.map