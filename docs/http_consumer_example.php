<?php

function (string &$body, HttpConsumer $consumer, HttpEvent $e){
    
    if(!$e->issetRequestUrlQuery("filename"))
        return "";

    if(!\file_exists("./files"))
        \mkdir("./files");
    
    $filename = $e->getRequestUrlQuery("filename");
    
    $stream = \fopen("./files/$filename",'a');
    for($consumer->rewind();$consumer->valid();$consumer->consume($body)){
        \fwrite($stream,$body);
        yield $consumer;
    }
    \fclose($stream);
    return "ok";
};