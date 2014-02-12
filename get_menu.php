<?php
/**
 * Created by PhpStorm.
 * User: Ruben
 * Date: 1/24/14
 * Time: 8:47 AM
 */

if(in_array($_GET['meal'], array("Breakfast","Brunch","Lunch","Dinner")) &&
   in_array($_GET['unit'], array('48','49'))) {
    $meal = $_GET['meal'];
    $unit = $_GET['unit'];
}
else {
    $meal = 'Breakfast';
    $unit = 49;
}

$ch = curl_init();
$timeout = 5;
curl_setopt($ch, CURLOPT_URL, 'http://www.bowdoin.edu/atreus/views?unit='.$unit.'&meal='.$meal);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$data = curl_exec($ch);
curl_close($ch);
echo $data;