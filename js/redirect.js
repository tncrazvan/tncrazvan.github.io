async function redirect(){
    const index = JSON.parse((await new GetHttpPromise("articles/index.json")).response);
    let inputHash = window.location.hash;
    for(let i = 0; i < index.length; i++){
        let article = index[i];
        if(inputHash === "" || inputHash === "#"){
            inputHash = "#intro";
        }
        if(article.hash !== inputHash) continue;
        setContent(articles,article.uri);
        return;
    }
    setContent(articles,"404.html");
    return;
}