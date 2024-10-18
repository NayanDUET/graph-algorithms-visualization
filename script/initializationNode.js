 const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const nodes = [];
        const edges = [];
       
        const adjList = new Map();
        let graphType = 'undirected'; // Default to undirected
        weightType = 'weighted';


         const nodesx = [];
        const adjListx = new Map();

        function setGraphType(type) {
            graphType = type;
           
        }

        function createNode(label) {
            const x = Math.floor(Math.random() * 500) + 50;
            const y = Math.floor(Math.random() * 500) + 50;
            nodes.push({ x, y, label, color: 'white', distance: Infinity, prev: null });
            adjList.set(label, []);
        }

        function initializeGraph() {

            initializeGraphs();
        nodes.length = 0;
        edges.length = 0;
        adjList.clear();

        const edgeInput = document.getElementById('edges').value;
        const edgePairs = edgeInput.split(',');

        edgePairs.forEach(pair => {
            const parts = pair.split('-').map(s => s.trim());  

        
            const from = parts[0];
            const to = parts[1];
            const weight = parts[2] ? parseInt(parts[2]) : null;

            

          
            if (!adjList.has(from)) createNode(from);
            if (!adjList.has(to)) createNode(to);

          
            edges.push({ from, to, weight });
          

            adjList.get(from).push({ node: to, weight });

          
            if (graphType === 'undirected') {
              
                adjList.get(to).push({ node: from, weight });
            }
        });

        

        draw();
    }


        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            edges.forEach(edge => {
                const startNode = nodes.find(n => n.label === edge.from);
                const endNode = nodes.find(n => n.label === edge.to);

               
                ctx.strokeStyle = 'lightgray';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(startNode.x, startNode.y);
                ctx.lineTo(endNode.x, endNode.y);
                ctx.stroke();

            
                if (edge.weight !== null) {

                    const midX = (startNode.x + endNode.x) / 2;
                    const midY = (startNode.y + endNode.y) / 2;
                    ctx.fillStyle = 'lightgrays';
                    ctx.font = '14px Arial';
                    ctx.fillText(edge.weight, midX, midY);
                }
                
                if(edge.weight === null)
                {
                    weightType = 'unweighted';
                }

             
                if (graphType === 'directed') {
                    const angle = Math.atan2(endNode.y - startNode.y, endNode.x - startNode.x);
                    const arrowLength = 15;
                    const offset = 21;

                    const arrowX = endNode.x - offset * Math.cos(angle);
                    const arrowY = endNode.y - offset * Math.sin(angle);

                    ctx.beginPath();
                    ctx.moveTo(arrowX, arrowY);
                    ctx.lineTo(
                        arrowX - arrowLength * Math.cos(angle - Math.PI / 6),
                        arrowY - arrowLength * Math.sin(angle - Math.PI / 6)
                    );
                    ctx.lineTo(
                        arrowX - arrowLength * Math.cos(angle + Math.PI / 6),
                        arrowY - arrowLength * Math.sin(angle + Math.PI / 6)
                    );
                    ctx.closePath();
                    ctx.fill();
                }
            });

           
            nodes.forEach(node => {
                ctx.fillStyle = node.color;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = 'green';
                ctx.stroke();

                ctx.fillStyle = 'red';
                ctx.fillText(node.label, node.x - 5, node.y + 5);
                ctx.fillStyle = 'lightgrays';

            });
        }