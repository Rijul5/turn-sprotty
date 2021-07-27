"use strict";
/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("sprotty/css/sprotty.css");
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var views_1 = require("./views");
var turn_models_1 = require("./turn-models");
var model_factory_1 = require("./model-factory");
var turnDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(sprotty_1.TYPES.ILogger).to(sprotty_1.ConsoleLogger).inSingletonScope();
    rebind(sprotty_1.TYPES.LogLevel).toConstantValue(sprotty_1.LogLevel.warn);
    rebind(sprotty_1.TYPES.IModelFactory).to(model_factory_1.TURNModelFactory).inSingletonScope();
    var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
    sprotty_1.configureModelElement(context, 'graph', sprotty_1.SGraph, sprotty_1.SGraphView);
    sprotty_1.configureModelElement(context, 'turnnode:goal', turn_models_1.TURNNode, views_1.GoalNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:softgoal', turn_models_1.TURNNode, views_1.SoftgoalNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:softgoaltry', turn_models_1.TURNNode, views_1.SoftgoalNodeViewTry);
    sprotty_1.configureModelElement(context, 'turnnode:belief', turn_models_1.TURNNode, views_1.BeliefNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:actor', turn_models_1.TURNNode, views_1.ModuleNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:task', turn_models_1.TURNNode, views_1.TaskNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:indicator', turn_models_1.TURNNode, views_1.IndicatorNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:resource', turn_models_1.TURNNode, views_1.ResourceNodeView);
    sprotty_1.configureModelElement(context, 'label:heading', sprotty_1.SLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'label:text', sprotty_1.SLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'turnlabel:text', turn_models_1.TURNLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'label:classHeader', sprotty_1.SLabel, sprotty_1.SLabelView);
    sprotty_1.configureModelElement(context, 'comp:comp', sprotty_1.SCompartment, sprotty_1.SCompartmentView);
    sprotty_1.configureModelElement(context, 'comp:classHeader', sprotty_1.SCompartment, views_1.HeaderCompartmentView);
    sprotty_1.configureModelElement(context, 'edge:dependency', sprotty_1.SEdge, views_1.DependencyEdgeView);
    sprotty_1.configureModelElement(context, 'edge:decomposition', sprotty_1.SEdge, views_1.DecompositionEdgeView);
    sprotty_1.configureModelElement(context, 'edge:contribute', sprotty_1.SEdge, views_1.ContributeEdgeView);
    sprotty_1.configureModelElement(context, 'edge:correlated', sprotty_1.SEdge, views_1.CorrelationEdgeView);
    sprotty_1.configureModelElement(context, 'html', sprotty_1.HtmlRoot, sprotty_1.HtmlRootView);
    sprotty_1.configureModelElement(context, 'pre-rendered', sprotty_1.PreRenderedElement, sprotty_1.PreRenderedView);
    sprotty_1.configureModelElement(context, sprotty_1.ExpandButtonHandler.TYPE, sprotty_1.SButton, sprotty_1.ExpandButtonView);
});
function createContainer(widgetId) {
    var container = new inversify_1.Container();
    sprotty_1.loadDefaultModules(container);
    container.load(turnDiagramModule);
    //        container.bind(TYPES.ModelSource).to(TheiaDiagramServer).inSingletonScope()
    sprotty_1.overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: widgetId
    });
    return container;
}
exports.default = createContainer;
//# sourceMappingURL=di.config.js.map