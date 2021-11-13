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
  
  const DFSTraversal =(vetex, graph, seen, ans)=>{
      ans.push(vetex)
      seen[vetex] = true

      const connections = graph[vetex]
      for(let i=0; i< connections.length; i++){
          const connection = connections[i]
          if(!seen[connection]){
              DFSTraversal(connection, graph, seen, ans)
          }
      }
    return ans
  }

  console.log(DFSTraversal(0, adjacencyList, {}, []))


