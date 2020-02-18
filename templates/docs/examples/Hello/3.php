<?php

namespace App\Http;

use com\github\tncrazvan\catpaw\http\HttpController;
use com\github\tncrazvan\catpaw\http\HttpEvent;

class Hello extends HttpController{
    public function main(){
        return new HttpResponse([],"this is Hello");
    }
    public function onClose():void{}
}
