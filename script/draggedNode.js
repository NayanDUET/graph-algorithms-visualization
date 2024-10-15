
        let isDragging = false;
        let draggedNode = null;

        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);

        function onMouseDown(event) {
            const { offsetX, offsetY } = event;
            // Check if a node was clicked
            draggedNode = nodes.find(node => Math.hypot(node.x - offsetX, node.y - offsetY) < 20);
            if (draggedNode) {
                isDragging = true;
            }
        }

        function onMouseMove(event) {
            if (isDragging && draggedNode) {
                const { offsetX, offsetY } = event;
                // Update node position
                draggedNode.x = offsetX;
                draggedNode.y = offsetY;
                draw(); // Redraw canvas with updated positions
            }
        }

        function onMouseUp() {
            isDragging = false;
            draggedNode = null;
        }