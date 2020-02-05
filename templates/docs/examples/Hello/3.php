<?php

namespace App\Http;

use com\github\tncrazvan\catpaw\http\HttpController;
use com\github\tncrazvan\catpaw\http\HttpEvent;

class Hello extends HttpController{
    public function &main(HttpEvent &$e, array &$path, string &$content){

    }
    public function onClose():void{}
}
