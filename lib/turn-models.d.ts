import { SCompartment, SLabel, SShapeElement, Expandable, RectangularNode, CircularNode } from "sprotty/lib";
export declare class TURNNode extends RectangularNode {
    cssClass: string;
    trace: string | undefined;
    strokeWidth: number;
    hasFeature(feature: symbol): boolean;
}
export declare class MAPStartNode extends CircularNode {
    cssClass: string;
    trace: string | undefined;
    strokeWidth: number;
    name: string;
    status?: string;
    kernelNr: number;
    hasFeature(feature: symbol): boolean;
}
export declare class ModuleNode extends TURNNode implements Expandable {
    title: string;
    expanded: boolean;
    hasFeature(feature: symbol): boolean;
}
export declare class MAPStartHeaderNode extends SCompartment {
}
export declare class TURNHeaderNode extends SCompartment {
}
export declare class MAPStartLabel extends SLabel {
    trace: string | undefined;
    hasFeature(feature: symbol): boolean;
}
export declare class TURNLabel extends SLabel {
    trace: string | undefined;
    hasFeature(feature: symbol): boolean;
}
export declare class Tag extends SShapeElement {
    size: {
        width: number;
        height: number;
    };
    hasFeature(feature: symbol): boolean;
}
//# sourceMappingURL=turn-models.d.ts.map