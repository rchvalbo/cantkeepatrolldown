<?php

/**
* grab x-headers 
*/
function getUserIP() {
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif(filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }
    return $ip;
}

/**
* fopen's json output of ipaddr
*/
function getUserLoc($ip_addr) {
    return json_decode(file_get_contents("http://ipinfo.io/{$ip_addr}/json"));
}

/**
* appends users data to json file
*/
function logUser($user_data) {
    if ($json_data == null) {
        echo 'no data';
        echo json_last_error();
    } else {
        $fp = fopen('assets/json/clients.json', 'a+');
        fwrite($fp, json_encode($user_data));
        fclose($fp); 
    }
}

// apply ip to var
$vistor_ipv4 = getUserIP();

// get user loc based on ipv4
$getVerbose = getUserLoc($vistor_ipv4);

// write to json file
logUser($getVerbose);

?>
