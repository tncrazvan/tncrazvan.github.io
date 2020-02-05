Components.Coding=function(){
    this.onload=async function(){
        let html = this.innerHTML;
        let language = this.hasAttribute("language")?this.getAttribute("language"):"plaintext";
        this.innerHTML = "";
        let code = await create("code."+language,html);
        code.classList.add("selectable");
        let pre = await create("pre",code)
        this.appendChild(pre);
  
        hljs.highlightBlock(code);

        this.css({
            display: "inline-block",
            padding: 0,
            margin: 0
        });
        code.css({
            display: "inline",
            background: "transparent",
            padding: 0,
            margin: 0
        });
        pre.css({
            margin: 0,
            paddingLeft: "0.5em",
            paddingRight: "0.7em",
            paddingTop: "0.1em",
            paddingBottom: "0.1em",
            border: "1px solid #2e2a38"
        });
    };
}