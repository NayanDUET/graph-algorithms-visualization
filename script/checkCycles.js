 function checkCycles()
        {
            if(graphType === 'undirected')
            {
                checkCyclesUndirected();
            }
            else if(graphType === 'directed')
            {
               detectCycleKahns();
            }
        }