<?php
ob_start();
session_start();

?>
<div style="padding-left:20px;padding-right:20px;width:100%;">
<h1>Daftar Digimon Musuh Beserta Informasi EXP & DV Poin</h1>
<p style='text-align:justify;'>informasi di bawah ini aku dapat dari situs <a href='https://gamefaqs.gamespot.com/ps/562323-digimon-world-3/faqs/78509' target='_blank'>https://gamefaqs.gamespot.com/ps/562323-digimon-world-3/faqs/78509</a><br />
Kolom paling kiri menampilkan nama semua Digimon dalam permainan. Baris judul menunjukkan nilai DV yang bisa Anda peroleh setelah memenangkan pertarungan. Setiap entri dalam tabel tersebut menunjukkan batas level MAKSIMUM bagi partner Rookie Anda agar bisa mendapatkan jumlah DV EXP tersebut dari pertarungan itu. Jika level partner Rookie Anda melebihi batas maksimum tersebut, ia akan mendapatkan nilai DV EXP yang tertera pada kolom di sebelah kanannya, hingga levelnya melampaui batas maksimum berikutnya.<br />
serta ditambahkan jumlah exp yang didapat setelah memenangkan pertarungan (data belum lengkap jadi, mohon dimaklumi).</p>
<p style='text-align:justify;'>contoh kasus, rookie level 31 melawan</p>
<ol>
<li>Musyamon<br />DV Point yg didapat sebesar 10 poin karena pas level maksimum 31 untuk dapat 10 poin, serta exp sebesar 180</li>
<li>Numemon (Blue)<br />DV Point yg didapat sebesar 10 poin karena pas level maksimum 31 untuk dapat 10 poin, namun exp didapat sebesar 222</li>
<li>Gesomon<br />DV Point yg didapat hanya 8 poin karena sudah terlanjur level rookie mencapai 31 sedangkan untuk (mendapat 10 poin dari gesomon maksimal level 27 / mendapat 8 poin dari gesomon maksimal level 30) dan 8 poin dari gesomon butuh maksimal level 33 serta exp yang didapat sebesar 136</li>
</ol>
<p style='text-align:justify;'>dari contoh kasus rookie level 31 melawan 3 digimon sebelumnya, jika dihitung 20 kali melakukan pertarungan, maka akan didapat hasil yaitu :</p>
<ol>
<li>Musyamon<br />10 DV.poin x 20 = 200 DV.poin<br />180exp x 20 = 3600exp</li>
<li>Numemon (Blue)<br />10 DV.poin x 20 = 200 DV.poin<br />222exp x 20 = 4440exp</li>
<li>Gesomon<br />8 DV.poin x 20 = 160 DV.poin<br />136exp x 20 = 2720exp</li>
</ol>

<p style='text-align:justify;'>dari terkumpulnya DV.Poin di atas, bisa didapat perhitungan DV Level yg akan didapat, tapi ada hal yang mempengaruhi rumus perhitungan DV Level yang didapat dari DV.Poin yang terkumpul dimana pengaruhnya yaitu "TIER Digimon" Contoh Rookie Level 31 dan digimon yg dipakai adalah SkullGreymon dimana merupakan digimon tier 2, rumusnya yaitu<br />
Levels 01 - 95 = 10 DVEXP per level<br />
Levels 95 - 99 = 50 DVEXP per level<br />
Total DVEXP = 1140<br />
serta jika dicontohkan lagi dengan digimon sebelumnya, kenaikan DV level yang didapat jika dihitung 20 kali melakukan pertarungan yaitu :</p>
<ol>
<li>Musyamon<br />200 DV.poin / 10 = 20 level jika skullgreymon masih level dibawah 95<br />200 DV.poin / 50 = 4 level jika skullgreymon Sudah mencapai 95 ke atas<br />180exp x 20 = 3600exp</li>
<li>Numemon (Blue)<br />200 DV.poin / 10 = 20 level jika skullgreymon masih level dibawah 95<br />200 DV.poin / 50 = 4 level jika skullgreymon Sudah mencapai 95 ke atas<br />222exp x 20 = 4440exp</li>
<li>Gesomon<br />160 DV.poin / 10 = 16 level jika skullgreymon masih level dibawah 95<br />160 DV.poin / 50 = 3.2, atau 3 level dan bersisa 10 DV.poin jika skullgreymon Sudah mencapai 95 ke atas<br />136exp x 20 = 2720exp</li>
</ol>
<p style='text-align:justify; font-size:20px;'><b>semoga penjelasan di atas bisa dipahami, jika aku mau mengoleksi semua evolusi digimon yang memerlukan DV Level, maka aku lebih memilih untuk mendapatkan DV level sebanyak-banyaknya tapi dengan penambahan EXP sedikit-dikitnya agar bisa farming DV level tanpa harus khawatir ada pengurangan pendapatan DV.Poin karena sudah terlanjur bertambah Rookie levelnya akibat terlampau banyaknya EXP yang didapat. namun, anda bebas mau gimana, mau cepat-naik rookie level ya OK, mau grinding DV leveling jg OK</b></p>
<p style='text-align:justify;'>Berikut Daftar Digimon beserta deskripsi terkait EXP & DV.Poin yang didapat jika bertarung 1 kali :</p>
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



	echo "<div class=\"scroll\"><table width=\"100%\">";
	echo "<tr><th RowSpan='2'>Digimon</th><th colspan='10'>DV Point</th><th rowspan='2'>EXP Point</th></tr><tr>";
	for($a=10; $a>=1; $a--){
		echo "<th>{$a}</th>";
	}
	echo "</tr>";
	$sql_sia = "select a.* from expdvpoin a order by a.num";
	$result = $db->query($sql_sia);
	foreach ($result as $sia) {
		echo "<tr><td>{$sia["digimon"]}</td>";
		for($a=10; $a>=1; $a--)
		{
			if($sia["dv" . $a]==0) $angkadisplaydv = '-';
			else $angkadisplaydv = (string) $sia["dv" . $a];
			echo "<td style='text-align:center;'>" . $angkadisplaydv . "</td>";
		}
		if($sia["exp"]==0) $angkadisplaydv = '-';
		else $angkadisplaydv = (string) $sia["exp"];
		echo "<td style='text-align:center;'>" . $angkadisplaydv . "</td>";
		echo "</tr>";
	}
	echo "<table><div>";
?>
</div>

<?php
ob_end_flush();
?>