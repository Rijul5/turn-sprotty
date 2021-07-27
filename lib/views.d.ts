import { RenderingContext, SEdge, SCompartment, PolylineEdgeView, Point, IView } from "sprotty/lib";
import { VNode } from "snabbdom/vnode";
import { TURNNode, ModuleNode, MAPStartNode, Tag } from "./turn-models";
export declare class ClassNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class ResourceNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class HeaderCompartmentView implements IView {
    render(model: SCompartment, context: RenderingContext): VNode;
}
export declare class TagView implements IView {
    render(element: Tag, context: RenderingContext): VNode;
}
export declare class ClassNodeView2 implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class ModuleNodeView implements IView {
    render(node: ModuleNode, context: RenderingContext): VNode;
}
export declare class TaskNodeView implements IView {
    render(model: TURNNode, context: RenderingContext): VNode;
}
export declare class IndicatorNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class SoftgoalNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class SoftgoalNodeViewTry implements IView {
    render(example: TURNNode, context: RenderingContext): VNode;
}
export declare class GoalNodeView extends SoftgoalNodeView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class BeliefNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class ModuleNodeView2 implements IView {
    render(node: MAPStartNode, context: RenderingContext): VNode;
    protected getRadius(node: TURNNode): number;
}
export declare class ChoiceNodeView implements IView {
    render(model: TURNNode, context: RenderingContext): VNode;
}
export declare class ActorNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class CaseNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class UsesNodeView extends CaseNodeView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class NoteView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
}
export declare class CompositionEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly SOURCE_CORRECTION: number;
    protected getSourceAnchorCorrection(edge: SEdge): number;
}
export declare class DependencyEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly SOURCE_CORRECTION: number;
    protected getSourceAnchorCorrection(edge: SEdge): number;
}
export declare class DecompositionEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly SOURCE_CORRECTION: number;
    protected getSourceAnchorCorrection(edge: SEdge): number;
}
export declare class DashedEdgeView extends PolylineEdgeView {
    protected renderLine(edge: SEdge, segments: Point[], context: RenderingContext): VNode;
}
export declare class CorrelationEdgeView extends DashedEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly SOURCE_CORRECTION: number;
    protected getSourceAnchorCorrection(edge: SEdge): number;
}
export declare class ContributeEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly SOURCE_CORRECTION: number;
    protected getSourceAnchorCorrection(edge: SEdge): number;
}
export declare class ArrowEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly TARGET_CORRECTION: number;
    protected getTargetAnchorCorrection(edge: SEdge): number;
}
export declare class DashedArrowEdgeView extends DashedEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    static readonly TARGET_CORRECTION: number;
    protected getTargetAnchorCorrection(edge: SEdge): number;
}
export declare function angle(x0: Point, x1: Point): number;
export declare class CircleNodeView implements IView {
    render(node: TURNNode, context: RenderingContext): VNode;
    protected getRadius(node: TURNNode): number;
}
//# sourceMappingURL=views.d.ts.map