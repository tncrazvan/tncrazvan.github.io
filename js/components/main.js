(async ()=>{
    const index = await (await fetch("articles/index.json")).json();
    foreach(index,(article,i)=>{
        const item = create("div.menu-item",article.title);
        menu.appendChild(item);
        setOnRelease(item,async e=>{
            /*if(document.body.offsetWidth < 980){
                menu.hide();
            }else{
                window["top-menu"].style.left=Pixel(menu.offsetLeft+menu.offsetWidth);
            }*/
            menu.hide();
            await setContent(articles,article.uri,article.hash);
            setTimeout(()=>{
                root.style.opacity=1;
            });
            
        });
        if(i===0) release(item);
    });


    (async function poll(){
        await foreach(document.getElementsByTagName("pre"),async item=>{
            if(!item.hasAttribute("highlighted") && item.hasAttribute("highlight")){
                let data;
                if(item.hasAttribute("src")){
                    let request = await fetch(item.getAttribute("src"));
                    data = await request.text();
                    
                }else{
                    data = item.innerText;
                }
                const language = item.getAttribute("highlight");
                
                item.classList.add(language);
                item.innerText = data;
                hljs.highlightBlock(item);
                item.setAttribute("highlighted","");
            }
            
            item.style.maxWidth=Pixel(main.offsetWidth-50);
        });
        setTimeout(poll,100);
    })();
})();