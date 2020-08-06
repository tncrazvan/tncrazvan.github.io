<?php
function(string $test,HttpEvent $e,HttpEventOnClose &$onCLose) {
    return new HelloPage($test,$e,$onCLose);
}