const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
  ];
  
  const traversalBFS = function(graph) {
    const seen = {}
    const queue=[0]
    const ans =[]

    while(queue.length){
        const vetex = queue.shift()
        const connections = graph[vetex]
        ans.push(vetex)
        seen[vetex] = true

        for (let i=0; i< connections.length; i++){
            const connection = connections[i]
            if (!seen[connection]){
                queue.push(connection)
            }
        }
    }
    return ans
  }
  
  console.log(traversalBFS(adjacencyList));