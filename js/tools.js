function hasTouch() {  
    try {  
      document.createEvent("TouchEvent");  
      return true;  
    } catch (e) {  
      return false;  
    }  
  }

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvent');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

function triggerTouchEvent (node, eventType) {
    var clickEvent = document.createEvent ('TouchEvent');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

function release(element){
    element.pressed = true;
    if(hasTouch()){
        triggerTouchEvent(element,"touchend");
    }else{
        triggerMouseEvent(element,"mouseup");
    }
}

function press(element){
    if(hasTouch()){
        triggerTouchEvent(element,"touchstart");
    }else{
        triggerMouseEvent(element,"mousedown");
    }
}

function setOnRelease(element,f){
    if(hasTouch()){
        element.addEventListener('touchstart',e=>{
            element.pressed = true;
        },false);

        element.addEventListener('touchend',e=>{
            if(element.pressed){
                element.pressed = false;
                if(e.target === element || (e.target.parentNode === element && e.target.parentNode !== menu)){
                    (f)(e);
                }
            }
        },false);
    }else{
        element.addEventListener('mousedown',e=>{
            element.pressed = true;
        },false);
        
        element.addEventListener('mouseup', e=>{
            if(element.pressed){
                element.pressed = false;
                if(e.target === element || (e.target.parentNode === element && e.target.parentNode !== menu)){
                    (f)(e);
                }
            }
        },false);
    }
}

function setOnPress(element,f){
    if(hasTouch()){
        element.addEventListener('touchstart',e=>{
            if(e.target === element || (e.target.parentNode === element && e.target.parentNode !== menu)){
                (f)(e);
            }
        });
    }else{
        element.addEventListener('mousedown', e=>{
            if(e.target === element || (e.target.parentNode === element && e.target.parentNode !== menu)){
                (f)(e);
            }
        },false);
    }
}

let webroot = new Includer({
    "css":"css",
    "js":"js",
    "components":"."
});

async function setContent(target,uri){
    return new Promise(async resolve=>{
        target.className = "animated-pop hide-pop";
        let contents = (await new GetHttpPromise(uri)).response;
        let canShow = false;
        setTimeout(()=>{
            canShow = true;
        },200);
        (async function poll(){
            if(!canShow) setTimeout(poll,10);
            else{
                target.applyHtml(contents);
                target.className = "animated-pop show-pop";
                (resolve)();
            }
        })();
    });
    
}

function setView(uri){
    return setContent(main,"views/"+uri+".html");
}

function Spinner(){
   return create("div.spinner",[
       create("div.rect1"),
       create("div.rect2"),
       create("div.rect3"),
       create("div.rect4"),
       create("div.rect5")
   ]);
}

function showMain(){
    return showContent(main);
}

function hideMain(){
    return hideContent(main);
}

function showContent(element){
    return new Promise(resolve=>{
        element.className = "home-main animated-pop show-pop";
        setTimeout(()=>{
            (resolve)();
            element.style.overflow = "auto";
        },200);
    });
}

function hideContent(element){
    return new Promise(resolve=>{
        element.style.overflow = "hidden";
        element.className = "home-main animated-pop hide-pop";
        setTimeout(()=>{
            (resolve)();
        },200);
    });
}