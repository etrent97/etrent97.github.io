<?php

$WeatherSource = "https://api.forecast.io/forecast/d3764c0f2dfeeb4d24e030a566f6196e/" . $_GET["lat"] . "," . $_GET["lng"];

header("Content-Type: application/json");

header("Cache-Control: no-cache");

readfile($WeatherSource);

?>