# Graph Algorithms Visualization

**Graph Algorithms Visualization** is an interactive web-based application that helps users explore and understand various graph algorithms through visual representation. This project is designed to make learning graph algorithms easier by offering an intuitive, interactive interface that allows users to visualize complex operations on graphs. 

The application leverages several popular algorithms, including Kruskal's, Dijkstra's, Kahn's, Kosaraju's, Disjoint Set Union (DSU), and others. Visualization is implemented using the HTML5 Canvas API for rendering nodes and edges, with added interactivity for dragging nodes and modifying edges. The design is further enhanced with Bootstrap CSS to ensure a clean and responsive layout.

## Features

- **Algorithm Implementations**:
  - **Kruskal's Algorithm**: Visualizes the minimum spanning tree (MST), highlighting the selected edges in the MST with animation.
  - **Dijkstra's Algorithm**: Displays shortest paths from a source node to all reachable nodes with step-by-step visuals.
  - **Kahn's Algorithm**: Provides topological sorting of directed acyclic graphs (DAG) and cycle detection in graphs.
  - **Kosaraju's Algorithm**: Detects and visualizes strongly connected components in directed graphs.
  - **Disjoint Set Union (DSU)**: Shows union-find operations, useful in Kruskal’s MST algorithm.
- **Graph Operations**:
  - **Canvas-based Rendering**: Nodes and edges are drawn using Canvas API for smooth visuals.
  - **Draggable Nodes**: Users can drag nodes to adjust layouts dynamically.
  - **Edge Creation**: Connect nodes by adding edges with optional weights, both for directed and undirected graphs.
  - **Interactive Result Display**: Results for cycle detection, bipartite checking, and topological sort are displayed within the HTML interface.
- **Responsive Design**:
  - **Bootstrap Integration**: Provides a clean layout, making the UI easy to navigate and compatible across devices.

### Prerequisites
A modern web browser with JavaScript enabled is needed to fully support the HTML5 Canvas API and Bootstrap.

## Usage

- **Initialize Nodes and Edges**: Use the interface to add edges by entering values and by clicking on the draw button.It automatically detect weighted and unweighted graph
- **Select and Run Algorithm**: Choose an algorithm from the left side button and press to start the visualization.
- **Dynamic Results**: Results, such as cycle detection and bipartite check results, are displayed in Right side Result section within the interface.
- **Reset for New Graphs**: Use the browser refresh to clear results and create a new graph layout.

### Available Algorithms and Their Visualization

- **Kruskal’s Algorithm**: Visualizes the Minimum Spanning Tree (MST) by highlighting selected edges with animation and displaying Disjoint Set Union (DSU) operations.
- **Dijkstra’s Algorithm**: Computes shortest paths from a source, showing paths with animation.
- **Kahn's Algorithm**: Shows topological ordering for Directed Acyclic Graphs (DAG).
- **Kosaraju's Algorithm**: Detects and displays strongly connected components in directed graphs.
- **Bipartite Check**: Determines if the graph is bipartite, with the result shown within the HTML interface.

## Technologies Used

- **JavaScript**: The core language used to implement algorithms and create an interactive interface.
- **HTML5 Canvas API**: Renders nodes, edges, and algorithmic visualizations on the canvas.
- **CSS (Bootstrap)**: Provides responsive design, making the UI visually appealing and easy to use.

## Graph Drawing and Layout Design

- **Canvas API for Drawing**: Nodes and edges are dynamically drawn and updated on the canvas.
- **Draggable Nodes**: Nodes can be dragged to adjust the graph layout visually.
- **Graph Options**: The project supports both directed and undirected graphs, with weighted edges for algorithms that require it.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for new features, optimizations, or bug fixes.


