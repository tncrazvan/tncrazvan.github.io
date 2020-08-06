<?php
function(string $username){
    return ServerFile::include('./templates/index.php',$username);
}