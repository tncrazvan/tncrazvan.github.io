<?php
fn(string $test,HttpEvent $e,HttpEventOnClose &$onCLose)  => new HelloPage($test,$e,$onCLose)