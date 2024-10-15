function createNodes(label) {
            nodesx.push(label);
            adjListx.set(label, []);
        }

        function initializeGraphs() {
            nodesx.length = 0;
            adjListx.clear();

            const edgeInput = document.getElementById('edges').value;
            const edgePairs = edgeInput.split(',');

            edgePairs.forEach(pair => {
                const parts = pair.split('-').map(s => s.trim());  // Split by space

              
                const from = parts[0];
                const to = parts[1];

               
                if (!adjListx.has(from)) createNodes(from);
                if (!adjListx.has(to)) createNodes(to);

              
                adjListx.get(from).push(to);
                
                if (graphType === 'undirected') {
                    adjListx.get(to).push(from);  
                }
            });

            
        }

        function detectCycleKahns() {
            const indegree = new Map();  
            const queue = [];            
            const kans = [];             
            let count = 0;               

           
            nodesx.forEach(node => indegree.set(node, 0));

          
            for (const [node, neighbors] of adjListx) {
                for (const neighbor of neighbors) {
                    indegree.set(neighbor, (indegree.get(neighbor) || 0) + 1);
                }
            }

           
            for (const node of nodesx) {
                if (indegree.get(node) === 0) {
                    queue.push(node);
                }
            }

         
            while (queue.length > 0) {
                const node = queue.shift();
                kans.push(node); 
                count++;         

              
                const neighbors = adjListx.get(node) || [];
                for (const neighbor of neighbors) {
                    indegree.set(neighbor, indegree.get(neighbor) - 1);
                  
                    if (indegree.get(neighbor) === 0) {
                        queue.push(neighbor);
                    }
                }
            }

        
            const hasCycle = count !== nodesx.length;

          
            const resultElement = document.getElementById('resultCycle');
            const topoSortElement = document.getElementById('topoSort');

            resultElement.innerText = hasCycle
                ? "Cycle: Yes"
                : "Cycle: No";

            topoSortElement.innerText = hasCycle
                ? "TopoSort: Cycle detected, no valid topological order"
                : "TopoSort:" + kans.join("->");
        }