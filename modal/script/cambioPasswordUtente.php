<?php
require_once "../../caricaClassi.php";
require_once "../../connettiAlDB.php";
require_once "../../funzioni.php";
Session::open();
$utente = Session::get("utente");
$info = Session::get("info");

if(GlobalVar::SERVER("REQUEST_METHOD") !== "POST" || (!(GlobalVar::issetPOST("vecchiaPwd") && GlobalVar::issetPOST("nuovaPwd")))) header("Location: ../../");

$vecchiapwd = GlobalVar::POST("vecchiaPwd");
$nuovapwd = GlobalVar::POST("nuovaPwd");

echo cambioPasswordUtente($db, $utente->getID(), $vecchiapwd, $nuovapwd);