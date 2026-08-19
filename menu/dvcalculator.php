<?php
ob_start();
session_start();

?>
<div style="padding-left:20px;padding-right:20px;width:100%;">
<h1>DV Level Grinding Support Tool</h1>
<p style='text-align:justify;'>Menu ini akan memudahkan anda untuk melakukan grinding DV Level dimana dengan input yang anda berikan menghasilkan output saran yang efektif dalam prosesnya. Silakan Masukan Input pada menu di bawah ini :</p>

<?php
$lokasifoldercsv = "../datacsv/";
// 1. Buat Database SQLite Sementara di Memory
$db = new PDO('sqlite::memory:');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// 2. Buat Tabel rookielevelexp
$db->exec("CREATE TABLE rookielevelexp (
    name TEXT,
    level INTEGER,
    exp INTEGER
)");
// 3. Import Data dari CSV ke SQLite In-Memory
$namaFile = "{$lokasifoldercsv}rookielevelexp.csv";
if (($handle = fopen($namaFile, "r")) !== FALSE) {
    fgetcsv($handle, 1000, ";"); // Skip Header
    
    $stmt = $db->prepare("INSERT INTO rookielevelexp (name, level, exp) VALUES (?, ?, ?)");
    while (($row = fgetcsv($handle, 1000, ";")) !== FALSE) {
        $stmt->execute($row);
    }
    fclose($handle);
}
// 4. Jalankan Query SQL Kamu
$sql = "SELECT a.name FROM rookielevelexp a GROUP BY a.name ORDER BY a.name";
$result = $db->query($sql);

// 5. Tampilkan Hasil dalam Dropdown / Option
echo "<p style=\"text-align:left; margin:0; padding:0; \">Pilih Rookie</p><p class=\"parag\"><select class=\"sstext\" name=\"rookiename\">";
foreach ($result as $row) {
    $name = htmlspecialchars($row['name']);
    echo "<option value='{$name}'>{$name}</option>";
}
echo "</select></p>";




echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie Level (masukkan level digimon rookienya, range mulai dari 5 s/d 99, jika dikosongkan, otomatis dianggap level 5)</p><p class=\"parag\"><input class=\"sstext\" type=\"text\" maxlength='2' style=\"\" name=\"rookielevel\" value=\"\" onkeypress=\"javascript: return numberkey(event);\" placeholder=\"masukkan level digimon rookienya, range mulai dari 5 s/d 99\" /></p>";

echo "<p style=\"text-align:left; margin:0; padding:0; \">Rookie EXP </p><p class=\"parag\"><input class=\"sstext\" type=\"text\" maxlength='6' style=\"\" name=\"rookieexp\" value=\"\" onkeypress=\"javascript: return numberkey(event);\" placeholder=\"masukkan exp digimon rookienya\" /></p>";




echo "<p style=\"text-align:left; margin:0; padding:0; \">Pilih Digimon Tier yg Dipakai untuk farmin DV.Level</p><p class=\"parag\"><select class=\"sstext\" name=\"digimontierdv\">";
$namaFile = "{$lokasifoldercsv}digimondvtier.csv";
if (file_exists($namaFile)) {
    if (($handle = fopen($namaFile, 'r')) !== FALSE) {
        // Lewati baris pertama (header: name;tier;dv10)
        fgetcsv($handle, 1000, ';');

        // Baca baris demi baris menggunakan separator ';'
        while (($data = fgetcsv($handle, 1000, ';')) !== FALSE) {
            // $data[0] = name (Greymon, Growlmon, dll)
            // $data[1] = tier
            // $data[2] = dv10

            $nama = htmlspecialchars($data[0]);
            $tier = htmlspecialchars($data[1]);
            $dv10 = htmlspecialchars($data[2]);

            // Menampilkan nama Digimon dengan info Tambahan (Tier & DV10) di dropdown
            echo "<option value='{$nama}'>{$nama} (Tier {$tier} - DV10: {$dv10})</option>";
		echo "<option value=\"{$nama}\">{$nama} (tier  {$tier}, 1 - {$dv10})</option>";
        }

        fclose($handle);
    }
} else {
	echo "<option value=\"nnn\">tabel daftar digimon tidak ada</option>";
}
echo "</select></p>";




echo "<p style=\"text-align:left; margin:0; padding:0; \">Digimon Tier Level (masukkan level digimon tier karena akan mempengaruhi perhitunghan DV.poin dan DV Level yg didapat), range mulai dari 1 s/d 99, jika dikosongkan, otomatis dianggap level 1)</p><p class=\"parag\"><input class=\"sstext\" type=\"text\" maxlength='2' style=\"\" name=\"digimontierdvlevel\" value=\"\" onkeypress=\"javascript: return numberkey(event);\" placeholder=\"masukkan level digimon tier nya, range mulai dari 1 s/d 99\" /></p>";

echo "<p style=\"text-align:left; margin:0; padding:0; \">Pilih Batas DV.Point yang mau ditampilkan (semakin kecil angka yg diambil, semakin banyak tampilan hasil grindingnya</p><p class=\"parag\"><select class=\"sstext\" name=\"dvpoinlimit\">";
for($i=10; $i>=1; $i--)
{
	echo "<option value=\"{$i}\">{$i}</option>";
}
echo "</select></p>";



echo "<p class=\"parag\"><button class='btn' style='width:100%;' onclick=\"javascript: loadelementdata('rookiedes', 'dvcalculatorrookielevel.php', 'rookiename=' + document.getElementsByName('rookiename')[0].value + '&rookielevel=' + document.getElementsByName('rookielevel')[0].value + '&rookieexp=' + document.getElementsByName('rookieexp')[0].value + '&digimontierdv=' + document.getElementsByName('digimontierdv')[0].value + '&digimontierdvlevel=' + document.getElementsByName('digimontierdvlevel')[0].value + '&dvpoinlimit=' + document.getElementsByName('dvpoinlimit')[0].value);\">proses 1</button></p>";

?>
<span id='rookiedes'></span>


</div>

<script type="text/javascript">
alert('Halo');
</script>

<?php
ob_end_flush();
?>