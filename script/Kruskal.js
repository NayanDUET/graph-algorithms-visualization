 function find(parent, i) {
            if (parent[i] === i) return i;
            return parent[i] = find(parent, parent[i]); // Path compression
        }

        function union(parent, rank, x, y) {
            const rootX = find(parent, x);
            const rootY = find(parent, y);

            if (rootX !== rootY) {
                if (rank[rootX] < rank[rootY]) {
                    parent[rootX] = rootY;
                } else if (rank[rootX] > rank[rootY]) {
                    parent[rootY] = rootX;
                } else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
            }
        }


        function runKruskal() {

            if(weightType === 'unweighted')
            {
               calljaquery2();

               return;
               
            }

            const mstEdges = [];
            let totalWeight = 0;

            // Sort edges by weight
            edges.sort((a, b) => a.weight - b.weight);

            const parent = {};
            const rank = {};

            nodes.forEach(node => {
                parent[node.label] = node.label;
                rank[node.label] = 0;
            });

            // Kruskal's algorithm
            edges.forEach(edge => {
                const { from, to, weight } = edge;
                const rootFrom = find(parent, from);
                const rootTo = find(parent, to);

                if (rootFrom !== rootTo) {
                    mstEdges.push(edge);
                    totalWeight += weight;
                    union(parent, rank, rootFrom, rootTo);
                }
            });

           
            document.getElementById('resultMST').innerText = 
                'Minimum Spanning Tree: ' + mstEdges.map(e => `${e.from}-${e.to}`).join(", ") +
                `\nTotal Weight: ${totalWeight}`;

           
            const ctx = canvas.getContext('2d');
            ctx.lineWidth = 2;  
            let edgeIndex = 0;

            function animateNextEdge() {
                if (edgeIndex < mstEdges.length) {
                    animateEdge(ctx, mstEdges[edgeIndex], () => {
                        edgeIndex++;
                        animateNextEdge();
                    });
                }
            }

            animateNextEdge();  
        }

      
        function animateEdge(ctx, edge, onComplete) {
            const { from, to } = edge;
            const startNode = nodes.find(node => node.label === from);
            const endNode = nodes.find(node => node.label === to);

            if (!startNode || !endNode) return;

            const dx = endNode.x - startNode.x;
            const dy = endNode.y - startNode.y;
            const steps = 100;  
            let progress = 0;

            function draw() {
                progress++;
                const x = startNode.x + (dx * progress) / steps;
                const y = startNode.y + (dy * progress) / steps;

                ctx.strokeStyle = 'green';
                ctx.beginPath();
                ctx.moveTo(startNode.x, startNode.y);
                ctx.lineTo(x, y);
                ctx.stroke();

                if (progress < steps) {
                    requestAnimationFrame(draw);
                } else {
                    onComplete();
                }
            }

            draw();
        }

        function calljaquery2()
        {
           $(document).ready(function() {
        
            const alertBox = $("#alertBox2");

            alertBox.show().addClass("show");

            setTimeout(function() {
                alertBox.removeClass("show"); 
                setTimeout(function() {
                    alertBox.hide();
                }, 500); 
            }, 3000);
        
          });
        }