<?php
$conn=pg_connect("host=localhost dbname:postgres user=postgres password=patientino port=5432");

if ($conn){
	echo "Successful Addition => ";
}
else{
	echo "something went wrong => ";
}
?>