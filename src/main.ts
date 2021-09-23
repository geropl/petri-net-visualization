import cytoscape, * as cy from 'cytoscape';

// Use layout: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose
import * as fcose from 'cytoscape-fcose';
cy.use(fcose);


const node = (id: string): cy.ElementDefinition => {
    return {
        group: "nodes",
        data: { id },
    }
};

const edge = (source: string, target: string): cy.EdgeDefinition => {
    return {
        group: "edges",
        data: {
            source,
            target,
        }
    }
}

const c = cytoscape({
    elements: {
        nodes: [
            node("a"),
            node("b"),
            node("c"),
        ],
        edges: [
            edge("a", "b"),
            edge("b", "c"),
        ],
    },
});

// https://js.cytoscape.org/#collection/layout
// https://js.cytoscape.org/#layouts/layout-manipulation