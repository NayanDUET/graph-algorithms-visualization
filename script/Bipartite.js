function isBipartite() {
            const colors = new Map(); // Map to store colors of nodes

            // Helper function to perform BFS for each component
            function bfsCheck(startNode) {
                const queue = [startNode];
                colors.set(startNode, 0); // Start coloring this node with color 0

                while (queue.length > 0) {
                    const current = queue.shift();
                    const currentColor = colors.get(current);

                    // Check neighbors of the current node
                    for (const neighbor of adjListx.get(current) || []) {
                        if (!colors.has(neighbor)) {
                           
                            colors.set(neighbor, 1 - currentColor);
                            queue.push(neighbor);

                        } else if (colors.get(neighbor) === currentColor) {
                            // If a neighbor has the same color, the graph is not bipartite
                            document.getElementById('resultBipartite').innerText = "Bipartite: The graph is not bipartite.";
                            return false;
                        }
                    }
                }
                return true;
            }

            // Iterate through all nodes to ensure we check disconnected components
            for (const node of nodesx) {
                if (!colors.has(node)) { // If the node is not yet colored
                    if (!bfsCheck(node)) {
                        return; // Stop if any component is not bipartite
                    }
                }
            }
            document.getElementById('resultBipartite').innerText = "Bipartite: The graph is bipartite.";
        }