function checkCyclesUndirected() {
            const parent = {};

            function find(x) {
                if (parent[x] === undefined) parent[x] = x;
                if (parent[x] !== x) parent[x] = find(parent[x]);
                return parent[x];
            }

            function union(x, y) {
                const rootX = find(x);
                const rootY = find(y);
                if (rootX !== rootY) parent[rootX] = rootY;
            }

            let hasCycle = false;
            edges.forEach(({ from, to }) => {
                if (find(from) === find(to)) {
                    hasCycle = true;
                } else {
                    union(from, to);
                }
            });

            document.getElementById('resultCycle').innerText = 'Cycle: ' + (hasCycle ? 'Yes' : 'No');
        }