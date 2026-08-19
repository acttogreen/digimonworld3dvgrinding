/**
 * DigiGrind - Digimon World 3 DV Grinding Support Tools
 * Refactored JavaScript Application (No Account System)
 */

/* ============================================================
   DATA
============================================================ */
const DefaultCSV = {
  digimondvtier: `name;tier;dv10
Greymon;1;99
Growlmon;1;99
Dinohumon;1;99
Grizzmon;1;99
Hookmon;1;99
Angemon;1;99
Kyubimon;1;99
ExVeemon;1;99
Stingmon;1;99
MetalGreymon;2;94
WarGrowlmon;2;94
Kyukimon;2;94
GrapLeomon;2;94
Armormon;2;94
MagnaAngemon;2;94
Taomon;2;94
Paildramon;2;94
SkullGreymon;2;94
MetalMamemon;2;94
Kabuterimon;2;94
Angewomon;2;94
Devimon;2;94
WarGreymon;3;89
Gallantmon;3;89
GuardiAngemon;3;89
Marsmon;3;89
Cannondramon;3;89
Seraphimon;3;89
Sakuyamon;3;89
Imperialdramon;3;89
BlackWarGreymon;3;89
MetalGarurumon;3;89
Rosemon;3;89
Digitamamon;3;89
Myotismon;3;89
Imperialdramon FighterMode;4;79
MegaGargomon;4;79
GranKuwagamon;4;79
Phoenixmon;4;79
MaloMyotismon;4;79
Omnimon;5;59
Imperialdramon PaladinMode;5;59
Diaboromon;5;59
Beelzemon;5;59`,

  expdvpoin: `"num";"digimon";"dv10";"dv9";"dv8";"dv7";"dv6";"dv5";"dv4";"dv3";"dv2";"dv1";"exp"
"1";"Kunemon";"1";"0";"0";"0";"0";"2";"0";"3";"5";"99";"6"
"2";"Tapirmon";"1";"0";"0";"0";"0";"2";"0";"3";"5";"99";"5"
"3";"Betamon";"2";"0";"0";"0";"3";"4";"5";"6";"10";"99";"10"
"4";"Kuwagamon";"2";"0";"0";"0";"3";"4";"5";"6";"10";"99";"11"
"5";"Crabmon";"3";"0";"0";"4";"5";"6";"7";"10";"15";"99";"17"
"6";"Kiwimon";"3";"0";"0";"4";"5";"6";"7";"10";"15";"99";"15"
"7";"Yanmamon";"3";"0";"0";"4";"5";"6";"7";"10";"15";"99";"16"
"8";"Dokugumon";"4";"0";"5";"0";"6";"8";"10";"13";"20";"99";"21"
"9";"Gizamon";"4";"0";"5";"0";"6";"8";"10";"13";"20";"99";"19"
"10";"Goburimon";"4";"0";"5";"0";"6";"8";"10";"13";"20";"99";"22"
"11";"Vegiemon";"4";"0";"5";"0";"6";"8";"10";"13";"20";"99";"20"
"12";"Minotarumon";"5";"0";"6";"7";"8";"10";"12";"16";"25";"99";"27"
"13";"Woodmon";"5";"0";"6";"7";"8";"10";"12";"16";"25";"99";"25"
"14";"Airdramon";"6";"0";"7";"8";"10";"12";"15";"20";"30";"99";"29"
"15";"Triceramon";"6";"0";"7";"8";"10";"12";"15";"20";"30";"99";"30"
"16";"Tyrannomon";"6";"0";"7";"8";"10";"12";"15";"20";"30";"99";"31"
"17";"Cardmon (T1)";"7";"0";"8";"10";"11";"14";"17";"23";"35";"99";"35"
"18";"Coelamon";"8";"0";"10";"11";"13";"16";"20";"26";"40";"99";"40"
"19";"DemiDevimon";"8";"0";"10";"11";"13";"16";"20";"26";"40";"99";"39"
"20";"Gekomon";"8";"0";"10";"11";"13";"16";"20";"26";"40";"99";"41"
"21";"Yanmamon (Green)";"8";"0";"10";"11";"13";"16";"20";"26";"40";"99";"40"
"22";"Bakemon";"9";"10";"11";"12";"15";"18";"22";"30";"45";"99";"46"
"23";"RedVegiemon";"9";"10";"11";"12";"15";"18";"22";"30";"45";"99";"45"
"24";"Apemon";"10";"11";"12";"14";"16";"20";"25";"33";"99";"0";"50"
"25";"Cardmon (A1)";"12";"13";"15";"17";"20";"24";"30";"40";"99";"0";"60"
"26";"Seadramon";"12";"13";"15";"17";"20";"24";"30";"40";"99";"0";"58"
"27";"Flymon";"13";"14";"16";"18";"21";"26";"32";"43";"99";"0";"66"
"28";"Kokatorimon";"13";"14";"16";"18";"21";"26";"32";"43";"99";"0";"96"
"29";"Baronmon";"16";"17";"20";"22";"26";"32";"40";"99";"0";"0";"80"
"30";"Cardmon (T2)";"17";"18";"21";"24";"28";"34";"42";"99";"0";"0";"85"
"31";"Shellmon";"18";"20";"22";"25";"30";"36";"45";"99";"0";"0";"91"
"32";"Woodmon (Green)";"19";"21";"23";"27";"31";"38";"47";"99";"0";"0";"76"
"33";"Dolphmon";"20";"22";"25";"28";"33";"40";"99";"0";"0";"0";"98"
"34";"Etemon";"20";"22";"25";"28";"33";"40";"99";"0";"0";"0";"100"
"35";"Ogremon";"20";"22";"25";"28";"33";"40";"99";"0";"0";"0";"102"
"36";"ShogunGekomon";"20";"22";"25";"28";"33";"40";"99";"0";"0";"0";"101"
"37";"Airdramon (Gold)";"21";"23";"26";"30";"35";"42";"99";"0";"0";"0";"104"
"38";"Dokugumon (Brown)";"21";"23";"26";"30";"35";"42";"99";"0";"0";"0";"105"
"39";"Goburimon (Red)";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"112"
"40";"Kokatorimon (Brown)";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"158"
"41";"Maildramon";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"110"
"42";"Tuskmon";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"112"
"43";"Vademon";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"109"
"44";"Hagurumon";"23";"25";"28";"32";"38";"46";"99";"0";"0";"0";"117"
"45";"Mammothmon";"23";"25";"28";"32";"38";"46";"99";"0";"0";"0";"116"
"46";"Thundermon";"23";"25";"28";"32";"38";"46";"99";"0";"0";"0";"115"
"47";"Andromon";"24";"26";"30";"34";"40";"48";"99";"0";"0";"0";"120"
"48";"Clockmon";"24";"26";"30";"34";"40";"48";"99";"0";"0";"0";"123"
"49";"Divermon";"24";"26";"30";"34";"40";"48";"99";"0";"0";"0";"118"
"50";"Mamemon";"25";"27";"31";"35";"41";"99";"0";"0";"0";"0";"110"
"51";"Numemon";"25";"27";"31";"35";"41";"99";"0";"0";"0";"0";"124"
"52";"Sukamon";"26";"28";"32";"37";"43";"99";"0";"0";"0";"0";"129"
"53";"Cardmon (A2)";"27";"30";"33";"38";"45";"99";"0";"0";"0";"0";"135"
"54";"Cyclonemon";"27";"30";"33";"38";"45";"99";"0";"0";"0";"0";"134"
"55";"Gesomon";"27";"30";"33";"38";"45";"99";"0";"0";"0";"0";"136"
"56";"Raremon";"27";"30";"33";"38";"45";"99";"0";"0";"0";"0";"135"
"57";"Guardromon (Blue)";"29";"32";"36";"41";"48";"99";"0";"0";"0";"0";"0"
"58";"Monzaemon";"29";"32";"36";"41";"48";"99";"0";"0";"0";"0";"0"
"59";"Nanimon";"29";"32";"36";"41";"48";"99";"0";"0";"0";"0";"0"
"60";"Tortomon";"29";"32";"36";"41";"48";"99";"0";"0";"0";"0";"145"
"61";"Kuwagamon (Green)";"30";"33";"37";"42";"99";"0";"0";"0";"0";"0";"0"
"62";"Tankmon";"30";"33";"37";"42";"99";"0";"0";"0";"0";"0";"0"
"63";"Musyamon";"31";"34";"38";"44";"99";"0";"0";"0";"0";"0";"180"
"64";"Numemon (Blue)";"31";"34";"38";"44";"99";"0";"0";"0";"0";"0";"222"
"65";"Phantomon";"31";"34";"38";"44";"99";"0";"0";"0";"0";"0";"154"
"66";"Musyamon (Green)";"32";"35";"40";"45";"99";"0";"0";"0";"0";"0";"160"
"67";"Flymon (Pink)";"33";"36";"41";"47";"99";"0";"0";"0";"0";"0";"165"
"68";"Minotarumon (Blue)";"33";"36";"41";"47";"99";"0";"0";"0";"0";"0";"167"
"69";"Blossomon";"34";"37";"42";"48";"99";"0";"0";"0";"0";"0";"168"
"70";"Ebidramon";"34";"37";"42";"48";"99";"0";"0";"0";"0";"0";"170"
"71";"Okuwamon";"34";"37";"42";"48";"99";"0";"0";"0";"0";"0";"172"
"72";"Gargoylemon";"35";"38";"43";"99";"0";"0";"0";"0";"0";"0";"0"
"73";"MegaSeadramon";"35";"38";"43";"99";"0";"0";"0";"0";"0";"0";"174"
"74";"Mummymon";"35";"38";"43";"99";"0";"0";"0";"0";"0";"0";"0"
"75";"Seadramon (Brown)";"35";"38";"43";"99";"0";"0";"0";"0";"0";"0";"175"
"76";"Brachiomon";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"0"
"77";"Blossomon (Pink)";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"179"
"78";"Deltamon";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"0"
"79";"Kurisarimon";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"255"
"80";"MetalTyrannomon";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"0"
"81";"Tortomon (Blue)";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"180"
"82";"Vilemon";"36";"40";"45";"99";"0";"0";"0";"0";"0";"0";"180"
"83";"Cardmon (T3)";"37";"41";"46";"99";"0";"0";"0";"0";"0";"0";"185"
"84";"MarineDevimon";"37";"41";"46";"99";"0";"0";"0";"0";"0";"0";"185"
"85";"Phantomon (Blue)";"37";"41";"46";"99";"0";"0";"0";"0";"0";"0";"0"
"86";"ShogunGekomon (Blue)";"37";"41";"46";"99";"0";"0";"0";"0";"0";"0";"179"
"87";"Cherrymon";"38";"42";"47";"99";"0";"0";"0";"0";"0";"0";"189"
"88";"Numemon (Brown)";"39";"43";"48";"99";"0";"0";"0";"0";"0";"0";"299"
"89";"SkullSatamon";"39";"43";"48";"99";"0";"0";"0";"0";"0";"0";"196"
"90";"Kurisarimon (Pink)";"40";"44";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"91";"Octomon";"40";"44";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"92";"Raremon (Pink)";"40";"44";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"93";"Cherrymon (Red)";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"203"
"94";"Drimogemon";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"95";"Flarerizamon";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"96";"Frigimon";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"97";"Meramon";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"98";"Mojyamon";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"99";"Triceramon (Red)";"41";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"100";"Cardmon (A3)";"42";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"101";"Fugamon";"42";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"102";"Cyclonemon (Pink)";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"103";"Devidramon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"104";"Icemon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"105";"Numemon (Aqua)";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"399"
"106";"Numemon (Red)";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"107";"Scorpiomon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"108";"SkullMeramon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"109";"Snimon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"215"
"110";"Tylomon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"111";"Vikemon";"43";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"112";"Antylamon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"113";"Chimeramon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"114";"Dragomon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"221"
"115";"Drimogemon (Brown)";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"220"
"116";"H-Kabuterimon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"222"
"117";"MegaSeadramon (Gold)";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"118";"MetalEtemon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"222"
"119";"MetalSeadramon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"120";"Numemon (White)";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"399"
"121";"Pukumon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0"
"122";"Rockmon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"220"
"123";"Arukenimon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"225"
"124";"Gryphonmon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"227"
"125";"KingEtemon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"126";"LadyDevimon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"224"
"127";"Quetzalmon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"128";"Tankmon (Blue)";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"227"
"129";"Valkyriemon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"225"
"130";"Whamon";"45";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"131";"Giromon";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0";"230"
"132";"Guardromon (White)";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0";"231"
"133";"Megadramon";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0";"233"
"134";"Vademon (Red)";"46";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"135";"Cardmon (A4)";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"210"
"136";"Cardmon (T4)";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"235"
"137";"Garbagemon";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"235"
"138";"Machinedramon";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"500"
"139";"Mammothmon (Silver)";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"140";"Roachmon";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"234"
"141";"Shadramon";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"142";"Vikemon (Blue)";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"236"
"143";"Whamon (Blue)";"47";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"144";"BlueMeramon";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"145";"Boltmon";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"146";"Ebidramon (Pink)";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"240"
"147";"Maildramon (Black)";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"148";"Snimon (Brown)";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"241"
"149";"Vilemon (Purple)";"48";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"150";"Antylamon (White)";"49";"99";"0";"0";"0";"0";"0";"0";"0";"0";"220"
"151";"Ghoulmon";"49";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"152";"Lynxmon";"49";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"153";"SkullMammothmon";"49";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"154";"Apokarimon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"155";"Armageddemon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"156";"Creepymon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"157";"Infermon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"158";"MetalSeadramon (Black)";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"159";"Piedmon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"160";"Puppetmon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"161";"Scorpiomon (Black)";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"
"162";"VenomMyotismon";"99";"0";"0";"0";"0";"0";"0";"0";"0";"0";"0"`,

  rawRookiePrefix: `name;level;exp\n`
};

const AppState = {
  rawCSV: { digimondvtier: '', expdvpoin: '', rookielevelexp: '' },
  digimondvtier: [],
  expdvpoin: [],
  rookielevelexp: [],
  isLoaded: false,
  currentPage: 'home'
};

/* ============================================================
   CSV PARSER
============================================================ */
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (!lines.length) return [];
  const headers = lines[0].split(';').map(h => h.trim().replace(/^["']|["']$/g, ''));
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = lines[i].split(';').map(v => v.trim().replace(/^["']|["']$/g, ''));
    const row = {};
    headers.forEach((h, idx) => { row[h] = values[idx] !== undefined ? values[idx] : ''; });
    result.push(row);
  }
  return result;
}

async function loadCSVData() {
  try {
    const [tierRes, expDvRes, rookieRes] = await Promise.all([
      fetch('datacsv/digimondvtier.csv').then(r => { if (!r.ok) throw new Error(); return r.text(); }),
      fetch('datacsv/expdvpoin.csv').then(r => { if (!r.ok) throw new Error(); return r.text(); }),
      fetch('datacsv/rookielevelexp.csv').then(r => { if (!r.ok) throw new Error(); return r.text(); })
    ]);
    AppState.rawCSV.digimondvtier = tierRes;
    AppState.rawCSV.expdvpoin = expDvRes;
    AppState.rawCSV.rookielevelexp = rookieRes;
  } catch {
    console.warn('Using embedded CSV fallback.');
    AppState.rawCSV.digimondvtier = DefaultCSV.digimondvtier;
    AppState.rawCSV.expdvpoin = DefaultCSV.expdvpoin;
    AppState.rawCSV.rookielevelexp = DefaultCSV.rawRookiePrefix;
  }
  processCSVState();
}

function processCSVState() {
  AppState.digimondvtier = parseCSV(AppState.rawCSV.digimondvtier).map(r => ({
    name: r.name, tier: parseInt(r.tier) || 1, dv10: parseInt(r.dv10) || 99
  }));
  AppState.expdvpoin = parseCSV(AppState.rawCSV.expdvpoin).map(r => ({
    num: parseInt(r.num) || 0, digimon: r.digimon,
    dv10: parseInt(r.dv10)||0, dv9: parseInt(r.dv9)||0,
    dv8:  parseInt(r.dv8) ||0, dv7: parseInt(r.dv7)||0,
    dv6:  parseInt(r.dv6) ||0, dv5: parseInt(r.dv5)||0,
    dv4:  parseInt(r.dv4) ||0, dv3: parseInt(r.dv3)||0,
    dv2:  parseInt(r.dv2) ||0, dv1: parseInt(r.dv1)||0,
    exp:  parseInt(r.exp)  ||0
  }));
  if (AppState.rawCSV.rookielevelexp.length > 20) {
    AppState.rookielevelexp = parseCSV(AppState.rawCSV.rookielevelexp).map(r => ({
      name: r.name, level: parseInt(r.level)||0, exp: parseInt(r.exp)||0
    }));
  }
  AppState.isLoaded = true;
}

/* ============================================================
   NAVIGATION
============================================================ */
const breadcrumbLabels = {
  home: 'Home',
  dvcalculator: 'DV Grinding Calculator',
  dvtable: 'DV Point Table',
  rookielevelexp: 'Rookie Level EXP',
  datacsv: 'Data CSV Manager'
};

async function navigateTo(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  document.getElementById('breadcrumb-label').textContent = breadcrumbLabels[page] || page;
  closeSidebar();

  if (!AppState.isLoaded) {
    document.getElementById('loading-overlay').classList.remove('hidden');
    await loadCSVData();
    document.getElementById('loading-overlay').classList.add('hidden');
  }

  AppState.currentPage = page;
  const content = document.getElementById('content');
  content.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'page-view';
  content.appendChild(wrapper);

  switch (page) {
    case 'home':          renderHome(wrapper); break;
    case 'dvcalculator': renderDVCalculator(wrapper); break;
    case 'dvtable':      renderDVTable(wrapper); break;
    case 'rookielevelexp': renderRookieLevelExpTable(wrapper); break;
    case 'datacsv':      renderCSVViewer(wrapper); break;
  }
}

/* ============================================================
   SIDEBAR / THEME
============================================================ */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-icon').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('digigrind-theme', isDark ? 'light' : 'dark');
}
function loadTheme() {
  const saved = localStorage.getItem('digigrind-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('theme-icon').className = saved === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

/* ============================================================
   HOME VIEW
============================================================ */
function renderHome(el) {
  el.innerHTML = `
    <div class="home-hero">
      <div class="home-hero-icon">&#9876;&#65039;</div>
      <h1>Selamat Datang di<br><span>DigiGrind Tools</span></h1>
      <p>Aplikasi pendukung grinding DV Level &amp; EXP pada Digimon World 3 / 2003.
         Dapatkan saran efisien berdasarkan Rookie Level dan Digimon yang kamu gunakan.</p>
      <button class="btn btn-primary" onclick="navigateTo('dvcalculator')">
        <i class="fa-solid fa-calculator"></i> Mulai DV Calculator
      </button>
      <div class="home-cards">
        <div class="home-feature-card" onclick="navigateTo('dvcalculator')">
          <div class="icon" style="background:rgba(99,102,241,0.15);color:var(--accent)">
            <i class="fa-solid fa-calculator"></i>
          </div>
          <h3>DV Grinding Calculator</h3>
          <p>Hitung rekomendasi musuh terbaik untuk grinding DV Level berdasarkan Rookie Level kamu.</p>
        </div>
        <div class="home-feature-card" onclick="navigateTo('dvtable')">
          <div class="icon" style="background:rgba(34,211,238,0.15);color:var(--accent2)">
            <i class="fa-solid fa-table"></i>
          </div>
          <h3>DV Point Table</h3>
          <p>Lihat tabel lengkap DV Point &amp; EXP dari setiap musuh Digimon dalam permainan.</p>
        </div>
        <div class="home-feature-card" onclick="navigateTo('rookielevelexp')">
          <div class="icon" style="background:rgba(168,85,247,0.15);color:var(--accent3)">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>Rookie Level EXP</h3>
          <p>Tabel EXP yang dibutuhkan tiap Rookie Digimon untuk naik level.</p>
        </div>
        <div class="home-feature-card" onclick="navigateTo('datacsv')">
          <div class="icon" style="background:rgba(16,185,129,0.15);color:var(--success)">
            <i class="fa-solid fa-database"></i>
          </div>
          <h3>Data CSV Manager</h3>
          <p>Lihat &amp; edit base data CSV yang digunakan oleh sistem secara langsung.</p>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   DV POINT TABLE
============================================================ */
function renderDVTable(el) {
  const dvBadgeClass = v => {
    if (v >= 10) return 'badge-blue';
    if (v >= 8)  return 'badge-cyan';
    if (v >= 6)  return 'badge-purple';
    if (v >= 4)  return 'badge-yellow';
    if (v >= 1)  return 'badge-gray';
    return '';
  };

  let html = `
    <div class="page-header">
      <div class="page-title"><i class="fa-solid fa-table" style="color:var(--accent2);margin-right:10px;"></i>Daftar DV Point &amp; EXP Musuh</div>
      <div class="page-subtitle">Sumber: <a href="https://gamefaqs.gamespot.com/ps/562323-digimon-world-3/faqs/78509" target="_blank" style="color:var(--accent)">GameFAQs</a></div>
    </div>
    <div class="note-box">
      <i class="fa-solid fa-circle-info"></i>
      <strong>Cara Baca Tabel:</strong> Angka pada kolom DV = batas level MAKSIMUM Rookie untuk mendapat DV Point sebesar kolom tersebut.
      Nilai <strong>99</strong> = selalu dapat. Nilai <strong>—</strong> = tidak bisa mendapat poin di kolom itu.
    </div>
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon blue"><i class="fa-solid fa-dragon"></i></div>
        <div class="stat-label">Total Musuh</div>
        <div class="stat-value">${AppState.expdvpoin.length}</div>
        <div class="stat-meta">Data tersedia</div>
      </div>
      <div class="stat-card cyan">
        <div class="stat-icon cyan"><i class="fa-solid fa-bolt"></i></div>
        <div class="stat-label">Max DV Point</div>
        <div class="stat-value">10</div>
        <div class="stat-meta">Per pertarungan</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon green"><i class="fa-solid fa-star"></i></div>
        <div class="stat-label">Max EXP</div>
        <div class="stat-value">500</div>
        <div class="stat-meta">Machinedramon</div>
      </div>
    </div>
    <div class="card" style="padding:0;">
      <div class="table-wrapper"><table><thead><tr>
        <th>Digimon</th>`;

  for (let a = 10; a >= 1; a--) html += `<th class="td-center">DV${a}</th>`;
  html += `<th class="td-center">EXP</th></tr></thead><tbody>`;

  [...AppState.expdvpoin].sort((a,b) => a.num - b.num).forEach(row => {
    html += `<tr><td><strong>${row.digimon}</strong></td>`;
    for (let a = 10; a >= 1; a--) {
      const val = row[`dv${a}`];
      html += val === 0
        ? `<td class="td-center" style="color:var(--text-muted)">—</td>`
        : `<td class="td-center"><span class="badge ${dvBadgeClass(a)}">${val}</span></td>`;
    }
    html += `<td class="td-center">${row.exp > 0 ? `<span class="badge badge-green">${row.exp}</span>` : `<span style="color:var(--text-muted)">—</span>`}</td></tr>`;
  });

  html += `</tbody></table></div></div>`;
  el.innerHTML = html;
}

/* ============================================================
   ROOKIE LEVEL EXP TABLE
============================================================ */
function renderRookieLevelExpTable(el) {
  const rookieNames = [...new Set(AppState.rookielevelexp.map(r => r.name))].sort();
  const levels = [...new Set(AppState.rookielevelexp.map(r => r.level))].sort((a,b) => a - b);

  let html = `
    <div class="page-header">
      <div class="page-title"><i class="fa-solid fa-chart-line" style="color:var(--accent3);margin-right:10px;"></i>Tabel EXP per Level Rookie</div>
      <div class="page-subtitle">Sumber: <a href="https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/64473556" target="_blank" style="color:var(--accent)">GameFAQs</a></div>
    </div>`;

  if (!rookieNames.length) {
    html += `<div class="note-box" style="text-align:center;padding:40px;">
      <i class="fa-solid fa-circle-exclamation" style="color:var(--warning);"></i>
      <strong>Data belum tersedia.</strong> Upload file <code>rookielevelexp.csv</code> di menu <strong>Data CSV Manager</strong>.
    </div>`;
    el.innerHTML = html; return;
  }

  html += `
    <div class="stats-grid">
      <div class="stat-card purple">
        <div class="stat-icon purple"><i class="fa-solid fa-user"></i></div>
        <div class="stat-label">Rookie Digimon</div>
        <div class="stat-value">${rookieNames.length}</div>
        <div class="stat-meta">Dalam data</div>
      </div>
      <div class="stat-card cyan">
        <div class="stat-icon cyan"><i class="fa-solid fa-arrow-up"></i></div>
        <div class="stat-label">Level Range</div>
        <div class="stat-value">${levels[0]}–${levels[levels.length-1]}</div>
        <div class="stat-meta">Level tersedia</div>
      </div>
    </div>
    <div class="card" style="padding:0;">
      <div class="table-wrapper"><table><thead><tr><th>Level</th>`;

  rookieNames.forEach(n => { html += `<th class="td-center">${n}</th>`; });
  html += `</tr></thead><tbody>`;
  levels.forEach(lvl => {
    html += `<tr><td><strong>Lv.${lvl}</strong></td>`;
    rookieNames.forEach(name => {
      const entry = AppState.rookielevelexp.find(r => r.name === name && r.level === lvl);
      html += `<td class="td-center">${entry ? `<span class="badge badge-blue">${entry.exp.toLocaleString()}</span>` : `<span style="color:var(--text-muted)">—</span>`}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table></div></div>`;
  el.innerHTML = html;
}

/* ============================================================
   DV CALCULATOR
============================================================ */
function renderDVCalculator(el) {
  const rookieNames = [...new Set(AppState.rookielevelexp.map(r => r.name))].sort();
  let rookieOptions = rookieNames.map(n => `<option value="${n}">${n}</option>`).join('');
  if (!rookieOptions) rookieOptions = `<option value="Agumon">Agumon (Data belum ada)</option>`;
  let tierOptions = AppState.digimondvtier.map(item =>
    `<option value="${item.name}">${item.name} (Tier ${item.tier} – DV10 max Lv.${item.dv10})</option>`
  ).join('');
  let dvLimitOptions = '';
  for (let i = 10; i >= 1; i--) dvLimitOptions += `<option value="${i}" ${i===7?'selected':''}>${i} DV Point</option>`;

  el.innerHTML = `
    <div class="page-header">
      <div class="page-title"><i class="fa-solid fa-calculator" style="color:var(--accent);margin-right:10px;"></i>DV Level Grinding Calculator</div>
      <div class="page-subtitle">Masukkan data Rookie dan Digimon tier untuk mendapat rekomendasi musuh terbaik.</div>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><i class="fa-solid fa-sliders"></i> Input Parameter</div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label" for="calc-rookie">Pilih Rookie Digimon</label>
          <select class="form-control" id="calc-rookie">${rookieOptions}</select>
        </div>
        <div class="form-group">
          <label class="form-label" for="calc-rookie-level">Rookie Level <span>(5–99)</span></label>
          <input class="form-control" type="number" id="calc-rookie-level" min="5" max="99" placeholder="Contoh: 31">
        </div>
        <div class="form-group">
          <label class="form-label" for="calc-rookie-exp">Rookie EXP Saat Ini</label>
          <input class="form-control" type="number" id="calc-rookie-exp" min="0" placeholder="Contoh: 15000">
        </div>
        <div class="form-group">
          <label class="form-label" for="calc-dv-digimon">Digimon Tier untuk Farming DV</label>
          <select class="form-control" id="calc-dv-digimon">${tierOptions}</select>
        </div>
        <div class="form-group">
          <label class="form-label" for="calc-dv-level">Level Digimon Tier <span>(1–99)</span></label>
          <input class="form-control" type="number" id="calc-dv-level" min="1" max="99" placeholder="Contoh: 50">
        </div>
        <div class="form-group">
          <label class="form-label" for="calc-dv-limit">Minimal DV Point Ditampilkan</label>
          <select class="form-control" id="calc-dv-limit">${dvLimitOptions}</select>
        </div>
      </div>
      <button class="btn btn-primary btn-full" onclick="processDVCalculator()">
        <i class="fa-solid fa-magnifying-glass"></i> Hitung &amp; Tampilkan Rekomendasi
      </button>
    </div>
    <div id="calc-result" class="result-panel"></div>
  `;
}

function processDVCalculator() {
  const rookieName = document.getElementById('calc-rookie').value || 'Agumon';
  let rookieLevel = parseInt(document.getElementById('calc-rookie-level').value, 10);
  if (isNaN(rookieLevel) || rookieLevel < 5) rookieLevel = 5;
  if (rookieLevel > 99) rookieLevel = 99;

  const rookieExpInput = parseFloat(document.getElementById('calc-rookie-exp').value);
  const rookieExp = isNaN(rookieExpInput) ? 0 : rookieExpInput;

  const digimonTierName = document.getElementById('calc-dv-digimon').value || 'Greymon';
  let digimonTierLevel = parseFloat(document.getElementById('calc-dv-level').value);
  if (isNaN(digimonTierLevel) || digimonTierLevel < 1) digimonTierLevel = 1;

  const dvPoinLimit = parseFloat(document.getElementById('calc-dv-limit').value) || 7;

  let digimonTierScore = 10;
  const tierObj = AppState.digimondvtier.find(t => t.name === digimonTierName);
  if (tierObj && digimonTierLevel > tierObj.dv10) digimonTierScore = 50;

  let expAwal = 0, expLanjut = 0;
  const currentLvRow = AppState.rookielevelexp.find(r => r.name === rookieName && r.level === rookieLevel);
  if (currentLvRow) { expAwal = currentLvRow.exp; expLanjut = expAwal; }

  const isLevel99 = (rookieLevel === 99);
  if (!isLevel99) {
    const nextLvRow = AppState.rookielevelexp.find(r => r.name === rookieName && r.level === (rookieLevel + 1));
    if (nextLvRow) {
      expLanjut = nextLvRow.exp;
      if (rookieExp > expAwal && rookieExp < expLanjut) expAwal = rookieExp;
    }
  }
  const expSelisih = expLanjut - expAwal;

  const recs = [];
  AppState.expdvpoin.forEach(enemy => {
    let dvEarn = 0;
    if      (rookieLevel <= enemy.dv10) dvEarn = 10;
    else if (rookieLevel <= enemy.dv9)  dvEarn = 9;
    else if (rookieLevel <= enemy.dv8)  dvEarn = 8;
    else if (rookieLevel <= enemy.dv7)  dvEarn = 7;
    else if (rookieLevel <= enemy.dv6)  dvEarn = 6;
    else if (rookieLevel <= enemy.dv5)  dvEarn = 5;
    else if (rookieLevel <= enemy.dv4)  dvEarn = 4;
    else if (rookieLevel <= enemy.dv3)  dvEarn = 3;
    else if (rookieLevel <= enemy.dv2)  dvEarn = 2;
    else if (rookieLevel <= enemy.dv1)  dvEarn = 1;

    if (dvEarn >= dvPoinLimit && enemy.dv10 <= (rookieLevel + 5) && enemy.exp > 0) {
      const battleCount = Math.floor(expSelisih / enemy.exp);
      const dvPoinTotal = battleCount * dvEarn;
      const dvLevelTotal = Math.floor(dvPoinTotal / digimonTierScore);
      const dvPointLeft  = dvPoinTotal % digimonTierScore;
      recs.push({
        digimon: enemy.digimon, exp: enemy.exp, dvEarn,
        battleCount, dvPoinTotal, dvLevelTotal, dvPointLeft,
        dvLevelDecimal: (dvPoinTotal / digimonTierScore).toFixed(2),
        expTotal: battleCount * enemy.exp
      });
    }
  });
  recs.sort((a,b) => b.dvLevelTotal - a.dvLevelTotal);

  const dvBadge = v => v >= 10 ? 'badge-blue' : v >= 7 ? 'badge-cyan' : v >= 4 ? 'badge-purple' : 'badge-gray';

  const resultEl = document.getElementById('calc-result');
  resultEl.classList.add('visible');

  let html = `
    <div class="card-title" style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:18px;">
      <i class="fa-solid fa-chart-bar" style="color:var(--accent);"></i> Hasil Kalkulasi
    </div>
    <div class="result-info-grid">
      <div class="result-info-item">
        <div class="result-info-label">Rookie</div>
        <div class="result-info-value accent">${rookieName} Lv.${rookieLevel}</div>
      </div>
      <div class="result-info-item">
        <div class="result-info-label">EXP Saat Ini</div>
        <div class="result-info-value">${expAwal.toLocaleString()}</div>
      </div>
      <div class="result-info-item">
        <div class="result-info-label">EXP Next Level</div>
        <div class="result-info-value cyan">${isLevel99 ? '????' : expLanjut.toLocaleString()}</div>
      </div>
      <div class="result-info-item">
        <div class="result-info-label">EXP Dibutuhkan</div>
        <div class="result-info-value green">${expSelisih.toLocaleString()}</div>
      </div>
      <div class="result-info-item">
        <div class="result-info-label">Tier Digimon</div>
        <div class="result-info-value accent">${digimonTierName}</div>
      </div>
      <div class="result-info-item">
        <div class="result-info-label">DV Score/Level</div>
        <div class="result-info-value">${digimonTierScore} poin</div>
      </div>
    </div>
    <div class="note-box">
      <i class="fa-solid fa-circle-info"></i>
      <strong>Rumus:</strong>
      Battle Count = floor(EXP Dibutuhkan &divide; EXP musuh) &nbsp;|&nbsp;
      DV Total = DV Point &times; Battle Count &nbsp;|&nbsp;
      DV Level = floor(DV Total &divide; ${digimonTierScore}) &nbsp;|&nbsp;
      Tabel urut dari DV Level terbanyak.
      Ref: <a href="https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/47657837" target="_blank">tier formula</a>.
    </div>
  `;

  if (!recs.length) {
    html += `<div class="note-box" style="text-align:center;padding:30px;">
      <i class="fa-solid fa-triangle-exclamation" style="color:var(--warning);"></i>
      Tidak ada musuh yang memenuhi kriteria. Coba turunkan minimal DV Point.
    </div>`;
  } else {
    html += `
      <div class="card" style="padding:0;">
        <div class="table-wrapper"><table><thead><tr>
          <th>#</th><th>Digimon Musuh</th>
          <th class="td-center">EXP/Battle</th><th class="td-center">DV/Battle</th>
          <th class="td-center">Battle Count</th><th class="td-center">DV Poin Total</th>
          <th class="td-center">DV Level +</th><th class="td-center">DV Sisa</th>
          <th class="td-center">EXP Total</th>
        </tr></thead><tbody>`;

    recs.forEach((row, idx) => {
      const rank = idx === 0 ? '&#129351;' : idx === 1 ? '&#129352;' : idx === 2 ? '&#129353;' : `${idx+1}`;
      html += `
        <tr>
          <td>${rank}</td>
          <td><strong>${row.digimon}</strong></td>
          <td class="td-center"><span class="badge badge-yellow">${row.exp}</span></td>
          <td class="td-center"><span class="badge ${dvBadge(row.dvEarn)}">${row.dvEarn}</span></td>
          <td class="td-center">${row.battleCount.toLocaleString()}</td>
          <td class="td-center"><span class="badge badge-purple">${row.dvPoinTotal.toLocaleString()}</span></td>
          <td class="td-center" title="Desimal: ${row.dvLevelDecimal}">
            <span class="badge badge-blue" style="font-size:13px;">+${row.dvLevelTotal}</span>
          </td>
          <td class="td-center">${row.dvPointLeft}</td>
          <td class="td-center">${row.expTotal.toLocaleString()}</td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;
  }

  resultEl.innerHTML = html;
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   CSV VIEWER
============================================================ */
function renderCSVViewer(el) {
  el.innerHTML = `
    <div class="page-header">
      <div class="page-title"><i class="fa-solid fa-database" style="color:var(--success);margin-right:10px;"></i>Data CSV Manager</div>
      <div class="page-subtitle">Lihat &amp; edit base data CSV yang digunakan sistem. Perubahan berlaku setelah klik Terapkan.</div>
    </div>
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon blue"><i class="fa-solid fa-dragon"></i></div>
        <div class="stat-label">DV Tier Data</div>
        <div class="stat-value">${AppState.digimondvtier.length}</div>
        <div class="stat-meta">Digimon tier entries</div>
      </div>
      <div class="stat-card cyan">
        <div class="stat-icon cyan"><i class="fa-solid fa-table"></i></div>
        <div class="stat-label">EXP/DV Data</div>
        <div class="stat-value">${AppState.expdvpoin.length}</div>
        <div class="stat-meta">Enemy entries</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon purple"><i class="fa-solid fa-chart-line"></i></div>
        <div class="stat-label">Rookie EXP Data</div>
        <div class="stat-value">${AppState.rookielevelexp.length}</div>
        <div class="stat-meta">Level entries</div>
      </div>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><i class="fa-solid fa-dragon"></i> 1. digimondvtier.csv (${AppState.digimondvtier.length} data)</div>
      <textarea class="csv-textarea" id="csv_tier_text" style="height:160px;">${AppState.rawCSV.digimondvtier}</textarea>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><i class="fa-solid fa-table"></i> 2. expdvpoin.csv (${AppState.expdvpoin.length} data)</div>
      <textarea class="csv-textarea" id="csv_exp_text" style="height:200px;">${AppState.rawCSV.expdvpoin}</textarea>
    </div>
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><i class="fa-solid fa-chart-line"></i> 3. rookielevelexp.csv (${AppState.rookielevelexp.length} data)</div>
      <textarea class="csv-textarea" id="csv_rookie_text" style="height:200px;">${AppState.rawCSV.rookielevelexp}</textarea>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="applyCustomCSVText()">
        <i class="fa-solid fa-check"></i> Terapkan Perubahan
      </button>
      <button class="btn btn-secondary" onclick="reloadDefaultCSVData()">
        <i class="fa-solid fa-rotate"></i> Reset ke Default
      </button>
    </div>
  `;
}

function applyCustomCSVText() {
  AppState.rawCSV.digimondvtier   = document.getElementById('csv_tier_text').value;
  AppState.rawCSV.expdvpoin       = document.getElementById('csv_exp_text').value;
  AppState.rawCSV.rookielevelexp  = document.getElementById('csv_rookie_text').value;
  processCSVState();
  alert('Data CSV berhasil diperbarui!');
}

function reloadDefaultCSVData() {
  loadCSVData().then(() => {
    navigateTo('datacsv');
    alert('Data CSV telah direset ke default!');
  });
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  loadTheme();
  document.getElementById('loading-overlay').classList.remove('hidden');
  await loadCSVData();
  document.getElementById('loading-overlay').classList.add('hidden');

  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'dvcalculator', 'dvtable', 'rookielevelexp', 'datacsv'];
  navigateTo(validPages.includes(hash) ? hash : 'home');
});
