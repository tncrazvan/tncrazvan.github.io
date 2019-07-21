async function createGroup(name){
    const req = await fetch("/@Set/webSocketGroup?visibility=1&name="+name);
    const text = req.text();
    return text;
}
