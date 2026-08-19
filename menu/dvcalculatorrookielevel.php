<?php
ob_start();
session_start();

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

// Impor Tabel 1
importCsvToSqlite(
    $db, 
    'digimondvtier', 
    "{$lokasifoldercsv}digimondvtier.csv", 
    ['name', 'tier', 'dv10'],
    "CREATE TABLE digimondvtier (name TEXT, tier INTEGER, dv10 INTEGER)"
);
// Impor Tabel 2
importCsvToSqlite(
    $db, 
    'rookielevelexp', 
    "{$lokasifoldercsv}rookielevelexp.csv", 
    ['name', 'level', 'exp'],
    "CREATE TABLE rookielevelexp (name TEXT, level INTEGER, exp INTEGER)"
);
// Impor Tabel 3
importCsvToSqlite(
    $db, 
    'expdvpoin', 
    "{$lokasifoldercsv}expdvpoin.csv", 
    ['num', 'digimon', 'dv10', 'dv9', 'dv8', 'dv7', 'dv6', 'dv5', 'dv4', 'dv3', 'dv2', 'dv1', 'exp'],
    "CREATE TABLE expdvpoin (
        num INTEGER,
        digimon TEXT,
        dv10 INTEGER,
        dv9 INTEGER,
        dv8 INTEGER,
        dv7 INTEGER,
        dv6 INTEGER,
        dv5 INTEGER,
        dv4 INTEGER,
        dv3 INTEGER,
        dv2 INTEGER,
        dv1 INTEGER,
        exp INTEGER
    )"
);

// Jalankan query dari $db yang sama sepuasnya!







if(isset($_REQUEST["rookiename"])) $rookiename=(string)$_REQUEST["rookiename"];
else $rookiename="Agumon";

if(isset($_REQUEST["rookielevel"])){
	if((int)$_REQUEST["rookielevel"]<5) $rookielevel=5;
	else $rookielevel=(int)$_REQUEST["rookielevel"];
}
else $rookielevel=5;

if(isset($_REQUEST["rookieexp"])) $rookieexp = (double) $_REQUEST["rookieexp"];
else $rookieexp=0;

if(isset($_REQUEST["digimontierdv"])) $digimontierdv=(string)$_REQUEST["digimontierdv"];
else $digimontierdv="Greymon";

if(isset($_REQUEST["digimontierdvlevel"])){
	if((int)$_REQUEST["digimontierdvlevel"]<1) $digimontierdvlevel=1;
	else $digimontierdvlevel = (double) $_REQUEST["digimontierdvlevel"];
}
else $digimontierdvlevel=1;

if(isset($_REQUEST["dvpoinlimit"])) $dvpoinlimit = (double) $_REQUEST["dvpoinlimit"];
else $dvpoinlimit=7;

$digimontierscore=10;
$sql = "select a.* from digimondvtier a where a.name='{$digimontierdv}'";
$result = $db->query($sql);
foreach ($result as $sia) {
	if($digimontierdvlevel > (int)$sia["dv10"]) $digimontierscore=50;
}

//die($rookiename . "-" . $rookielevel . "-" . $digimontierdv . "-" . $digimontierdvlevel . "-" . $digimontierscore . "-" . $dvpoinlimit);

$expawal=0;
$explanjut=0;


$sql = "select a.* from rookielevelexp a where a.name='{$rookiename}' and a.level={$rookielevel}";
$result = $db->query($sql);
foreach ($result as $sia) {
	$expawal=(int)$sia["exp"];
	$explanjut=$expawal;
	if($rookielevel==99){
		echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie Next EXP for Level UP</p><p class=\"parag\">????</p>";
	}
	else
	{
		$rookielevelnext=$rookielevel+1;

		$sql = "select a.* from rookielevelexp a where a.name='{$rookiename}' and a.level={$rookielevelnext}";
		$result = $db->query($sql);
		foreach ($result as $sia) {
			$explanjut=(int)$sia["exp"];

			if($rookieexp > $expawal && $rookieexp < $explanjut){
				$expawal = $rookieexp;
			}
		}
	}

	echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie current EXP</p><p class=\"parag\">{$expawal}</p>";
	if($rookielevel==99){
		echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie Next EXP for Level UP</p><p class=\"parag\">????</p>";
	}
	else
	{
		echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie Next EXP for Level UP</p><p class=\"parag\">{$explanjut}</p>";
	}

	$expselisih = $explanjut - $expawal;
	echo "<p style=\"text-align:left; margin:0; padding:0; \">EXP total yg diperlukan untuk next level</p><p class=\"parag\">{$expselisih}</p>";
	
	$colomDVEarn = "(CASE WHEN {$rookielevel} <= a.dv10 THEN 10
	WHEN {$rookielevel} <= a.dv9  THEN 9
	WHEN {$rookielevel} <= a.dv8  THEN 8
	WHEN {$rookielevel} <= a.dv7  THEN 7
	WHEN {$rookielevel} <= a.dv6  THEN 6
	WHEN {$rookielevel} <= a.dv5  THEN 5
	WHEN {$rookielevel} <= a.dv4  THEN 4
	WHEN {$rookielevel} <= a.dv3  THEN 3
	WHEN {$rookielevel} <= a.dv2  THEN 2
	WHEN {$rookielevel} <= a.dv1  THEN 1
	ELSE 0 
END)";
	$colombattlecountfornextlevel = "(CASE WHEN a.exp>0 THEN floor({$expselisih}/a.exp) ELSE 0 END)";
	$colomdvpointtotal = "(($colombattlecountfornextlevel)*($colomDVEarn))";

	$sqldigimonsaran = "select {$colomDVEarn} as 'DVPoinearn', {$colombattlecountfornextlevel} as 'battlecount', {$colomdvpointtotal} as 'DVPoinTotal', ({$colomdvpointtotal}/{$digimontierscore}) as 'DVLevelTotalDecimal', floor({$colomdvpointtotal}/{$digimontierscore}) as 'DVLevelTotal', ({$colomdvpointtotal}%{$digimontierscore}) as 'DVPointTotalLeft', ({$colombattlecountfornextlevel}*a.exp) as 'EXPTotal', a.* from expdvpoin a where ({$colomDVEarn}>={$dvpoinlimit}) and a.dv10<={$rookielevel}+5 and a.exp>0 order by (floor({$colomdvpointtotal}/{$digimontierscore})) desc";
	$result = $db->query($sqldigimonsaran);
	echo "<p>*catatan :
	<br />rumus Battle Count = floor(EXP total yg diperlukan untuk next level / EXP dari setiap digimon musuh per battle) {floor maksudnya rumus mengabaikan bilangan angka di belakang koma}
	<br />rumus Dv.Point Total = Dv.Point x Battle Count
	<br />rumus Dv.Level Total = floor(Dv.Point Total / {$digimontierscore}) darimana angka {$digimontierscore}? cek situs <a href='https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/47657837' target='_blank'>digimon tier</a> dan lihat jg berapa Digimon Tier Level yang and masukkan
	<br />rumus EXP Total = EXP digimon x Battle Count
	<br />tabel dibawah diurutkan berdasarkan DV. Level dari terbanyak sampai tersedikit.
	</p>";
	echo "<div class=\"scroll\"><table width=\"100%\">";
	echo "<tr><th>Digimon</th><th>EXP Point</th><th>DV Point</th><th>Battle Count</th><th>Dv.Point Total</th><th>Dv.Level Total</th><th>Dv.Point Sisa</th><th>EXP Total</th></tr>";
	foreach ($result as $sia) {
		echo "<tr><td>{$sia["digimon"]}</td>";
		echo "<td style='text-align:center;'>{$sia["exp"]}</td>";
		echo "<td style='text-align:center;'>" . (int) $sia["DVPoinearn"] . "</td>";
		echo "<td style='text-align:center;'>" . (int) $sia["battlecount"] . "</td>";
		echo "<td style='text-align:center;'>" . (int) $sia["DVPoinTotal"] . "</td>";
		echo "<td style='text-align:center;' title='{$sia["DVLevelTotalDecimal"]}'>" . (int) $sia["DVLevelTotal"] . "</td>";
		echo "<td style='text-align:center;'>" . (int) $sia["DVPointTotalLeft"] . "</td>";
		echo "<td style='text-align:center;'>" . (int) $sia["EXPTotal"] . "</td>";
		echo "</tr>";
	}
	echo "</table></div>";
}
ob_end_flush();
?>