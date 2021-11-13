const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0]
  ];
  
  const DFSTraversal =(vetex, graph, seen, ans)=>{
      ans.push(vetex)
      seen[vetex] = true

      const connections = graph[vetex]
      for(let i=0; i< connections.length; i++){
         if(!seen[i] && connections[i]>0){
             DFSTraversal(i, graph, seen, ans)
         }
          
      }
    return ans
  }

  console.log(DFSTraversal(0, adjacencyMatrix, {}, []))


