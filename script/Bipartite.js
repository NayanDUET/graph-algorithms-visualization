function isBipartite() {
            const colors = new Map(); 
         
            function bfsCheck(startNode) {
                const queue = [startNode];
                colors.set(startNode, 0);

                while (queue.length > 0) {
                    const current = queue.shift();
                    const currentColor = colors.get(current);

                 
                    for (const neighbor of adjListx.get(current) || []) {
                        if (!colors.has(neighbor)) {
                           
                            colors.set(neighbor, 1 - currentColor);
                            queue.push(neighbor);

                        } else if (colors.get(neighbor) === currentColor) {
                          
                            document.getElementById('resultBipartite').innerText = "Bipartite: The graph is not bipartite.";
                            return false;
                        }
                    }
                }
                return true;
            }

        
            for (const node of nodesx) {
                if (!colors.has(node)) { 
                    if (!bfsCheck(node)) {
                        return;
                    }
                }
            }
            document.getElementById('resultBipartite').innerText = "Bipartite: The graph is bipartite.";
        }