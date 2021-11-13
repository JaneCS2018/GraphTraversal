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


//   const traversalBFS = function(graph) {
//     const seen = {};
//     const queue = [0];
//     const values = [];
  
//     while(queue.length) {
//       const vertex = queue.shift();
      
//       values.push(vertex);
//       seen[vertex] = true;
  
//       const connections = graph[vertex];
//       for(let v = 0; v < connections.length; v++) {
//         if(connections[v] > 0 && !seen[v]) {
//           queue.push(v);
//         }
//       }
//     }
  
//     return values;
//   }

  const traversalBFS =(graph)=>{
      const seen ={}
      const queue = [0]
      const ans = []

      while(queue.length){
          const vertex = queue.shift()
          const connections = graph[vertex]
          seen[vertex] = true
          ans.push(vertex)

          for(let i=0; i< connections.length; i++){
              if (!seen[i] && connections[i]>0){
                  queue.push(i)
              }
          }
      }
      return ans
  }

  console.log(traversalBFS(adjacencyMatrix))