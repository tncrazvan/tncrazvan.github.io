<?php
public function __construct(
    WebSocketEvent $event,
    ?WebSocketEventOnOpen &$onOpen = null,
    ?WebSocketEventOnMessage &$onMessage = null, 
    ?WebSocketEventOnClose &$onClose = null
    ){
    $onOpen = new Open();
    $onMessage = new Message($event);
    $onClose = new Close();
}