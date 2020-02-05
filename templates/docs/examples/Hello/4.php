<?php

namespace App\Http;

use com\github\tncrazvan\catpaw\http\HttpEvent;
use com\github\tncrazvan\catpaw\http\HttpController;

class Hello extends HttpController{
    public function &main(HttpEvent &$e, array &$path, string &$content){
        $e->send("hello");
    }
    public function onClose():void{}
}
