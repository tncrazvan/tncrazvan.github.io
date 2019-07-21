function joinGroup(groupId){
    return new Promise(function(resolve,reject){
        const group = new WebSocket("ws://"+location.host+"/@WebSocketGroupApplicationProgramInterface?join="+groupId);

        group.addEventListener("open",e=>{
            (resolve)(group);
            console.log("Connection enstablished");
        });

        group.addEventListener("error",e=>{
            (reject)(group);
            console.log("Connection closed");
        });
    });
}
