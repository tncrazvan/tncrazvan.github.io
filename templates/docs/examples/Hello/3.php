<?php

namespace App\Http;

use com\github\tncrazvan\catpaw\http\HttpResponse;
use com\github\tncrazvan\catpaw\http\HttpController;

class Hello extends HttpController{
    public function main(){
        return new HttpResponse([],"this is Hello");
    }
    public function onClose():void{}
}
