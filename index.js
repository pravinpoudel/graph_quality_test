import { greadability } from "./greadbility.js";

(async function(){
    let edgeUrl = "assets/BH_edges_sfba.json";
    let nodeUrl = "assets/BH_nodes_sfba.json";
    
    let edgesList = [];
    let nodesList = [];
    const edgeResponse = await fetch(edgeUrl);
    if (!edgeResponse.ok) {
        const message = `An error has occured: ${edgeResponse.status}`;
        throw new Error(message);
    }
    let edgeResult = await edgeResponse.json();
    edgesList = edgeResult;

    let nodeResponse = await fetch(nodeUrl);
    let nodeResult =  await nodeResponse.json();
    nodesList = nodeResult;
    if (!nodeResponse.ok) {
        const message = `An error has occured: ${nodeResponse.status}`;
        throw new Error(message);
    }
    console.log("start")
    console.log(greadability(nodesList, edgesList));
    console.log("finished")
})();
