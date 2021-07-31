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
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/diagram.css");
require("sprotty/css/sprotty.css");
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var custom_edge_router_1 = require("./custom-edge-router");
var model_1 = require("./model");
var views_1 = require("./views");
var turnDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(sprotty_1.TYPES.ILogger).to(sprotty_1.ConsoleLogger).inSingletonScope();
    rebind(sprotty_1.TYPES.LogLevel).toConstantValue(sprotty_1.LogLevel.warn);
    rebind(sprotty_1.TYPES.IModelFactory).to(model_1.TURNModelFactory).inSingletonScope();
    unbind(sprotty_1.ManhattanEdgeRouter);
    bind(sprotty_1.ManhattanEdgeRouter).to(custom_edge_router_1.CustomRouter).inSingletonScope();
    var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
    sprotty_1.configureModelElement(context, 'graph', sprotty_1.SGraph, sprotty_1.SGraphView, {
        enable: [sprotty_1.hoverFeedbackFeature, sprotty_1.popupFeature]
    });
    sprotty_1.configureModelElement(context, 'turnnode:goal', model_1.TURNNode, views_1.GoalNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:softgoal', model_1.TURNNode, views_1.SoftgoalNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:softgoaltry', model_1.TURNNode, views_1.SoftgoalNodeViewTry);
    sprotty_1.configureModelElement(context, 'turnnode:belief', model_1.TURNNode, views_1.BeliefNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:actor', model_1.TURNNode, views_1.ModuleNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:task', model_1.TURNNode, views_1.TaskNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:indicator', model_1.TURNNode, views_1.IndicatorNodeView);
    sprotty_1.configureModelElement(context, 'turnnode:resource', model_1.TURNNode, views_1.ResourceNodeView);
    sprotty_1.configureModelElement(context, 'label:heading', sprotty_1.SLabel, sprotty_1.SLabelView, {
        enable: [sprotty_1.editLabelFeature]
    });
    sprotty_1.configureModelElement(context, 'label:text', sprotty_1.SLabel, sprotty_1.SLabelView, {
        enable: [sprotty_1.editLabelFeature]
    });
    sprotty_1.configureModelElement(context, 'turnlabel:text', model_1.TURNLabel, sprotty_1.SLabelView, {
        enable: [sprotty_1.editLabelFeature]
    });
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
    sprotty_1.configureCommand(context, sprotty_1.CreateElementCommand);
});
function createTURNDiagramContainer(widgetId) {
    var container = new inversify_1.Container();
    sprotty_1.loadDefaultModules(container, { exclude: [sprotty_1.labelEditUiModule] });
    container.load(turnDiagramModule);
    sprotty_1.overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: widgetId,
        hiddenDiv: widgetId + '_hidden'
    });
    return container;
}
exports.createTURNDiagramContainer = createTURNDiagramContainer;
//# sourceMappingURL=di.config.js.map