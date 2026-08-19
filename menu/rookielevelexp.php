<?php
ob_start();
session_start();

?>
<div style="padding-left:20px;padding-right:20px;width:100%;">
<h1>Daftar Digimon Rookie serta EXP yang diperlukan untuk LevelUp</h1>
<p style='text-align:justify;'>informasi di bawah ini aku dapat dari situs <a href='https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/64473556' target='_blank'>https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/64473556</a><br /></p>
<?php
$lokasifoldercsv = "../datacsv/";
$namaFile = "{$lokasifoldercsv}rookielevelexp.csv";

$db = new PDO('sqlite::memory:');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// Daftarkan fungsi floor PHP ke dalam SQLite
$db->sqliteCreateFunction('floor', 'floor', 1);

// Function re-usable untuk impor CSV ke SQLite
function importCsvToSqlite($db, $tableName, $csvFile, $columns, $createTableSql) {
    $db->exec($createTableSql);
    
    if (($handle = fopen($csvFile, "r")) !== FALSE) {
        fgetcsv($handle, 1000, ";"); // Skip Header
        
        $placeholders = implode(',', array_fill(0, count($columns), '?'));
        $stmt = $db->prepare("INSERT INTO {$tableName} VALUES ({$placeholders})");
        
        while (($row = fgetcsv($handle, 1000, ";")) !== FALSE) {
            $stmt->execute($row);
        }
        fclose($handle);
    }
}

importCsvToSqlite(
    $db, 
    'rookielevelexp', 
    "{$lokasifoldercsv}rookielevelexp.csv", 
    ['name', 'level', 'exp'],
    "CREATE TABLE rookielevelexp (name TEXT, level INTEGER, exp INTEGER)"
);

$tavleheaddigimon="";
$queryheaddigimon="";
$digimoncount=0;
$sql_sia = "select distinct a.name from rookielevelexp a order by a.name";
	$result = $db->query($sql_sia);
	foreach ($result as $sia) {
		$digimoncount++;
		$tavleheaddigimon=$tavleheaddigimon . "<th>{$sia["name"]}</th>";
		$queryheaddigimon=$queryheaddigimon . ", SUM(CASE WHEN a.name = '{$sia["name"]}' THEN a.exp ELSE 0 END) AS '{$sia["name"]}'";
	}


$sql_sia = "SELECT a.level {$queryheaddigimon}  FROM rookielevelexp a GROUP BY a.level";
	echo "<div class=\"scroll\"><table width=\"100%\">";
	echo "<tr><th>Level</th>{$tavleheaddigimon}</tr>";
	$result = $db->query($sql_sia);
	foreach ($result as $sia) {
		echo "<tr><td>{$sia["level"]}</td>";
		for($a=1; $a<=$digimoncount; $a++)
		{
			echo "<td style='text-align:center;'>" . $sia[$a] . "</td>";
		}
		echo "</tr>";
	}
?>
</div>

<?php
ob_end_flush();
?>