<?php

namespace App\Http;

use com\github\tncrazvan\catpaw\tools\Status;
use com\github\tncrazvan\catpaw\http\HttpEvent;
use com\github\tncrazvan\catpaw\http\HttpResponse;
use com\github\tncrazvan\catpaw\http\HttpController;

class Hello extends HttpController{
    public function &main(HttpEvent &$e, array &$path, string &$content){
        return new HttpResponse([
            "Status" => Status::SUCCESS
        ],"hello");
    }
    public function onClose():void{}
}
