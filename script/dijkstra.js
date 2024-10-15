   function findAndDisplayPath() {
            const source = document.getElementById('source').value;
            const destination = document.getElementById('destination').value;
            const result = dijkstra(source, destination);

            document.getElementById('resultPath').innerText = "Shortest Path: " + result.path.join(" -> ");
            document.getElementById('resultCost').innerText = "Cost: " + result.cost;

            drawPath(result.path);
        }

        function dijkstra(start, end) {
            const distances = {};
            const previous = {};
            const pq = new PriorityQueue();

            for (let node of nodes) {
                distances[node.label] = Infinity;
                previous[node.label] = null;
                pq.enqueue(node.label, Infinity);
            }
            distances[start] = 0;
            pq.enqueue(start, 0);

            while (!pq.isEmpty()) {
                const smallest = pq.dequeue().val;

                if (smallest === end) {
                    const path = [];
                    let current = smallest;
                    while (previous[current]) {
                        path.push(current);
                        current = previous[current];
                    }
                    path.push(start);
                    return { path: path.reverse(), cost: distances[end] };
                }

                for (let neighbor of adjList.get(smallest)) {
                    const alt = distances[smallest] + neighbor.weight;
                    if (alt < distances[neighbor.node]) {
                        distances[neighbor.node] = alt;
                        previous[neighbor.node] = smallest;
                        pq.enqueue(neighbor.node, alt);
                    }
                }
            }
            return { path: [], cost: Infinity }; // No path found
        }

        class Node {
            constructor(val, priority) {
                this.val = val;
                this.priority = priority;
            }
        }

        class PriorityQueue {
            constructor() {
                this.values = [];
            }
            enqueue(val, priority) {
                const newNode = new Node(val, priority);
                this.values.push(newNode);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.values.length - 1;
                const element = this.values[idx];
                while (idx > 0) {
                    const parentIdx = Math.floor((idx - 1) / 2);
                    const parent = this.values[parentIdx];
                    if (element.priority >= parent.priority) break;
                    this.values[parentIdx] = element;
                    this.values[idx] = parent;
                    idx = parentIdx;
                }
            }
            dequeue() {
                const min = this.values[0];
                const end = this.values.pop();
                if (this.values.length > 0) {
                    this.values[0] = end;
                    this.sinkDown();
                }
                return min;
            }
            sinkDown() {
                let idx = 0;
                const length = this.values.length;
                const element = this.values[0];
                while (true) {
                    let leftChildIdx = 2 * idx + 1;
                    let rightChildIdx = 2 * idx + 2;
                    let leftChild, rightChild;
                    let swap = null;

                    if (leftChildIdx < length) {
                        leftChild = this.values[leftChildIdx];
                        if (leftChild.priority < element.priority) {
                            swap = leftChildIdx;
                        }
                    }
                    if (rightChildIdx < length) {
                        rightChild = this.values[rightChildIdx];
                        if (
                            (swap === null && rightChild.priority < element.priority) ||
                            (swap !== null && rightChild.priority < leftChild.priority)
                        ) {
                            swap = rightChildIdx;
                        }
                    }
                    if (swap === null) break;
                    this.values[idx] = this.values[swap];
                    this.values[swap] = element;
                    idx = swap;
                }
            }
            isEmpty() {
                return this.values.length === 0;
            }
        }


        function drawPath(path, delay = 500) {
                let i = 0;

                function drawNextSegment() {
                if (i < path.length - 1) {
                    const fromNode = nodes.find(n => n.label === path[i]);
                    const toNode = nodes.find(n => n.label === path[i + 1]);

                    // Animate the drawing from the start node to the end node
                    let progress = 0; // To track the progress of the animation
                    const animationStep = () => {
                        ctx.strokeStyle = 'green';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        // Calculate the current position based on progress
                        const currentX = fromNode.x + (toNode.x - fromNode.x) * progress;
                        const currentY = fromNode.y + (toNode.y - fromNode.y) * progress;
                        
                        ctx.moveTo(fromNode.x, fromNode.y);
                        ctx.lineTo(currentX, currentY);
                        ctx.stroke();

                        progress += 0.01; // spreed of animation
                        if (progress <= 1) {
                            requestAnimationFrame(animationStep); // Continue the animation
                        } else {
                            // Move to the next segment
                            i++;
                            setTimeout(drawNextSegment, delay); // Delay before drawing the next segment
                        }
                    };
                    animationStep(); // Start the animation for this segment
                }
            }

            drawNextSegment(); // Initiate the first segment drawing
        }