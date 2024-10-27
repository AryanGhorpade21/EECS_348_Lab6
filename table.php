<?php
// size of the table
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $size = intval($_POST['size']);
    
    if ($size > 0) {
        echo "<h1>Table (1 to $size)</h1>";
        echo "<table border='1'>";
        // output for the start of the table
        echo "<tr><th>Start</th>"; 
        // Creatig  the table headers
        for ($i = 1; $i <= $size; $i++) {
            echo "<th>$i</th>"; 
        }
        echo "</tr>";
        //creating the  table rows and colums
        for ($row = 1; $row <= $size; $row++) {
            echo "<tr>";
            echo "<th>$row</th>"; 
            for ($col = 1; $col <= $size; $col++) {
                echo "<td>" . ($row * $col) . "</td>"; 
            }
            echo "</tr>";
        }
        
        echo "</table>";
    } else {
        echo "<h1>Please enter a valid number greater than 0.</h1>";
    }
} else {
    echo "<h1>No data submitted.</h1>";
}
?>