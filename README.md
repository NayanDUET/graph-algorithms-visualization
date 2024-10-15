#Graph Algorithms Visualization
Graph Algorithms Visualization is an interactive web-based application for visualizing various graph algorithms, designed to help users understand graph theory concepts through a visual, user-friendly interface. The project showcases popular algorithms such as Kruskal's, Dijkstra's, Kahn's, Kosaraju's, Disjoint Set Union (DSU), and more. It uses the HTML Canvas API for rendering nodes and edges, along with Bootstrap CSS for enhanced UI design.

#Features
Algorithm Implementations:
Kruskal's Algorithm: Visualizes the minimum spanning tree (MST) by dynamically highlighting selected edges.
Dijkstra's Algorithm: Displays shortest path results from a selected source node to all reachable nodes.
Kahn's Algorithm: Implements topological sorting for directed acyclic graphs (DAG) and detects cycles.
Kosaraju's Algorithm: Shows strongly connected components in directed graphs.
Disjoint Set Union (DSU): Visualizes union-find operations.
Canvas-based Visuals:
Node and Edge Rendering: Nodes and edges are drawn using the Canvas API.
Draggable Nodes: Nodes can be repositioned by dragging, allowing for custom layouts.
Interactive Edge Creation: Users can dynamically add and connect edges between nodes.
Graph Layout & Style:
Bootstrap Integration: Provides a clean, responsive layout with intuitive control elements.
Getting Started
Prerequisites
Ensure you have a modern web browser to fully support Canvas API and JavaScript.


#Usage
Initialize Nodes: Add nodes by entering values or by clicking on the draw graph.
Connect Edges: Select nodes to connect edges, specifying weights if needed.
Select Algorithm: Choose an algorithm from left side button to run the visualization.
Run: Use the run button to see the algorithm in action, and refresh to clear results for new inputs.
Algorithms and Visualizations
Kruskal’s Algorithm: Displays an MST by dynamically highlighting edges included in the MST, showcasing the union-find process.
Dijkstra’s Algorithm: Computes shortest paths, highlighting paths from the selected source node with animation.
Kahn's Algorithm: Provides topological ordering of nodes if possible and flags cycles in directed graphs.
Kosaraju's Algorithm: Visualizes strongly connected components in directed graphs.
Disjoint Set Union (DSU): Visual representation of union and find operations within the graph.
Technologies Used
JavaScript: Core language for implementing algorithms and interactive elements.
HTML5 Canvas API: Renders nodes, edges, and algorithm visualizations.
CSS (Bootstrap): Provides responsive design and styling.
Future Enhancements
Enhanced Visual Effects: Color-coding for nodes based on status (visited, unvisited, in MST, etc.).
Algorithm Selection Panel: Provide detailed algorithm explanations and pseudocode.
Export and Save Functionality: Allow users to export graphs as images or save graph data for later.
#Contributing
Feel free to submit issues or pull requests for new features, optimizations, or bug fixes.
