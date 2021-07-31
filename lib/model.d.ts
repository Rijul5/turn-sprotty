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
import { SCompartment, SLabel, SShapeElement, SParentElement, SModelElementSchema, SChildElement, SGraphFactory, Expandable, RectangularNode, CircularNode } from "sprotty";
export declare class TURNModelFactory extends SGraphFactory {
    protected initializeChild(child: SChildElement, schema: SModelElementSchema, parent?: SParentElement): SChildElement;
}
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
//# sourceMappingURL=model.d.ts.map