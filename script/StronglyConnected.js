 function StronglyConnected()
        {
            const result = isStronglyConnected();
            document.getElementById('resultStronglyConnected').innerText = 
                result ? "StronglyConnected : The graph is strongly connected." : "StronglyConnected : The graph is not strongly connected.";
        }

        
         //Kosaraju's algorithm.

        function isStronglyConnected() {

            const visited = new Set();
            
          
            const order = [];
            function dfs(node) {
                visited.add(node);
                const neighbors = adjListx.get(node) || [];
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) dfs(neighbor);
                }
                order.push(node); 
            }

            
            dfs(nodesx[0]);
            
           
            if (visited.size !== nodesx.length) return false;

           
            const reversedAdjList = new Map();
            for (let [node, neighbors] of adjListx) {
                for (let neighbor of neighbors) {
                    if (!reversedAdjList.has(neighbor)) reversedAdjList.set(neighbor, []);
                    reversedAdjList.get(neighbor).push(node);
                }
            }

            
            visited.clear();
            function dfsReversed(node) {
                visited.add(node);
                const neighbors = reversedAdjList.get(node) || [];
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) dfsReversed(neighbor);
                }
            }

            
            dfsReversed(order[order.length - 1]);

           
            return visited.size === nodesx.length;
        }