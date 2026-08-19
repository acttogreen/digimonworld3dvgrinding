/**
 * Digimon World 3 / 2003 DV Grinding Support Tools
 * Client-Side JavaScript Application
 */

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
"38";"Dokugumon (Brown";"21";"23";"26";"30";"35";"42";"99";"0";"0";"0";"105"
"39";"Goburimon (Red)";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"112"
40;"Kokatorimon (Brown)";"22";"24";"27";"31";"36";"44";"99";"0";"0";"0";"158"
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
"62";"Tankmon";"30";"33";"37";"42";"99";"0";"0";"0";"0";"0";"0";"0"
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
"116";"H -Kabuterimon";"44";"48";"99";"0";"0";"0";"0";"0";"0";"0";"222"
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
  rawCSV: {
    digimondvtier: '',
    expdvpoin: '',
    rookielevelexp: ''
  },
  digimondvtier: [],
  expdvpoin: [],
  rookielevelexp: [],
  isLoaded: false
};

// Helper: Parse CSV with ';' delimiter and handle quotes
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length === 0) return [];
  const headers = lines[0].split(';').map(h => h.trim().replace(/^["']|["']$/g, ''));
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = lines[i].split(';').map(v => v.trim().replace(/^["']|["']$/g, ''));
    const row = {};
    headers.forEach((h, index) => {
      row[h] = values[index] !== undefined ? values[index] : '';
    });
    result.push(row);
  }
  return result;
}

// Load CSV Data with automatic fallback if fetch fails
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
  } catch (err) {
    console.warn('Gagal fetch file CSV lokal, menggunakan embedded CSV fallback.');
    AppState.rawCSV.digimondvtier = DefaultCSV.digimondvtier;
    AppState.rawCSV.expdvpoin = DefaultCSV.expdvpoin;
    AppState.rawCSV.rookielevelexp = DefaultCSV.rawRookiePrefix; // fallback base
  }

  processCSVState();
}

function processCSVState() {
  AppState.digimondvtier = parseCSV(AppState.rawCSV.digimondvtier).map(row => ({
    name: row.name,
    tier: parseInt(row.tier, 10) || 1,
    dv10: parseInt(row.dv10, 10) || 99
  }));

  AppState.expdvpoin = parseCSV(AppState.rawCSV.expdvpoin).map(row => ({
    num: parseInt(row.num, 10) || 0,
    digimon: row.digimon,
    dv10: parseInt(row.dv10, 10) || 0,
    dv9: parseInt(row.dv9, 10) || 0,
    dv8: parseInt(row.dv8, 10) || 0,
    dv7: parseInt(row.dv7, 10) || 0,
    dv6: parseInt(row.dv6, 10) || 0,
    dv5: parseInt(row.dv5, 10) || 0,
    dv4: parseInt(row.dv4, 10) || 0,
    dv3: parseInt(row.dv3, 10) || 0,
    dv2: parseInt(row.dv2, 10) || 0,
    dv1: parseInt(row.dv1, 10) || 0,
    exp: parseInt(row.exp, 10) || 0
  }));

  if (AppState.rawCSV.rookielevelexp.length > 20) {
    AppState.rookielevelexp = parseCSV(AppState.rawCSV.rookielevelexp).map(row => ({
      name: row.name,
      level: parseInt(row.level, 10) || 0,
      exp: parseInt(row.exp, 10) || 0
    }));
  }

  AppState.isLoaded = true;
}

// Navigation Tab Switcher
function emptymenu() {
  const sections = ['home', 'dvtable', 'dvcalculator', 'rookielevelexp', 'datacsv'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = '';
      el.style.display = 'none';
    }
  });
}

async function menuload(menupilihan) {
  menupilihan = menupilihan || 'dvcalculator';
  
  if (!AppState.isLoaded) {
    const loader = document.getElementById('loadmenu');
    if (loader) loader.style.display = 'block';
    await loadCSVData();
    if (loader) loader.style.display = 'none';
  }

  emptymenu();
  const target = document.getElementById(menupilihan);
  if (!target) return;

  target.style.display = 'block';

  switch (menupilihan) {
    case 'home':
      renderHome(target);
      break;
    case 'dvtable':
      renderDVTable(target);
      break;
    case 'rookielevelexp':
      renderRookieLevelExpTable(target);
      break;
    case 'dvcalculator':
      renderDVCalculator(target);
      break;
    case 'datacsv':
      renderCSVViewer(target);
      break;
  }
}

// 1. Home View
function renderHome(container) {
  container.innerHTML = `
    <div style="padding-left:20px;padding-right:20px;width:100%;"><center>
      <h1>Selamat Datang di aplikasi<br />"Digimon World 3/2003 DV grinding"<br />Support Tool</h1>
      <h2>dimana aplikasi ini bertujuan untuk memberikan informasi saran grinding DV EXP berdasarkan Rookie Level Digimon yg tercatat untuk mendapatkan hasil saran yang efisien guna kemudahan grinding.</h2>
      silakan klik menu sesuai dengan fungsinya.
    </center></div>
  `;
}

// 2. DV Poin Table View
function renderDVTable(container) {
  let html = `
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
      
      <div class="scroll"><table width="100%">
        <thead>
          <tr><th rowspan="2">Digimon</th><th colspan="10">DV Point</th><th rowspan="2">EXP Point</th></tr>
          <tr>
  `;
  
  for (let a = 10; a >= 1; a--) {
    html += `<th>${a}</th>`;
  }
  html += `</tr></thead><tbody>`;

  const sortedData = [...AppState.expdvpoin].sort((a, b) => a.num - b.num);
  sortedData.forEach(row => {
    html += `<tr><td>${row.digimon}</td>`;
    for (let a = 10; a >= 1; a--) {
      const val = row[`dv${a}`];
      html += `<td style='text-align:center;'>${val === 0 ? '-' : val}</td>`;
    }
    html += `<td style='text-align:center;'>${row.exp === 0 ? '-' : row.exp}</td></tr>`;
  });

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

// 3. Rookie Level EXP View
function renderRookieLevelExpTable(container) {
  let html = `
    <div style="padding-left:20px;padding-right:20px;width:100%;">
      <h1>Daftar Digimon Rookie serta EXP yang diperlukan untuk LevelUp</h1>
      <p style='text-align:justify;'>informasi di bawah ini aku dapat dari situs <a href='https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/64473556' target='_blank'>https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/64473556</a><br /></p>
  `;

  const rookieNames = [...new Set(AppState.rookielevelexp.map(r => r.name))].sort();
  const levels = [...new Set(AppState.rookielevelexp.map(r => r.level))].sort((a, b) => a - b);

  html += `<div class="scroll"><table width="100%"><thead><tr><th>Level</th>`;
  rookieNames.forEach(name => {
    html += `<th>${name}</th>`;
  });
  html += `</tr></thead><tbody>`;

  levels.forEach(lvl => {
    html += `<tr><td>${lvl}</td>`;
    rookieNames.forEach(name => {
      const entry = AppState.rookielevelexp.find(r => r.name === name && r.level === lvl);
      html += `<td style='text-align:center;'>${entry ? entry.exp : 0}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

// 4. DV Calculator Form & Logic
function renderDVCalculator(container) {
  const rookieNames = [...new Set(AppState.rookielevelexp.map(r => r.name))].sort();

  let html = `
    <div style="padding-left:20px;padding-right:20px;width:100%;">
      <h1>DV Level Grinding Support Tool</h1>
      <p style='text-align:justify;'>Menu ini akan memudahkan anda untuk melakukan grinding DV Level dimana dengan input yang anda berikan menghasilkan output saran yang efektif dalam prosesnya. Silakan Masukan Input pada menu di bawah ini :</p>
      
      <p style="text-align:left; margin:0; padding:0;">Pilih Rookie</p>
      <p class="parag">
        <select class="sstext" id="rookiename">
  `;

  rookieNames.forEach(name => {
    html += `<option value="${name}">${name}</option>`;
  });

  html += `
        </select>
      </p>

      <p style="text-align:left; margin:0; padding:0;">Rookie Level (masukkan level digimon rookienya, range mulai dari 5 s/d 99, jika dikosongkan, otomatis dianggap level 5)</p>
      <p class="parag">
        <input class="sstext" type="text" maxlength="2" id="rookielevel" placeholder="masukkan level digimon rookienya, range mulai dari 5 s/d 99" onkeypress="return numberkey(event);" />
      </p>

      <p style="text-align:left; margin:0; padding:0;">Rookie EXP</p>
      <p class="parag">
        <input class="sstext" type="text" maxlength="6" id="rookieexp" placeholder="masukkan exp digimon rookienya" onkeypress="return numberkey(event);" />
      </p>

      <p style="text-align:left; margin:0; padding:0;">Pilih Digimon Tier yg Dipakai untuk farming DV.Level</p>
      <p class="parag">
        <select class="sstext" id="digimontierdv">
  `;

  AppState.digimondvtier.forEach(item => {
    html += `<option value="${item.name}">${item.name} (Tier ${item.tier} - DV10: ${item.dv10})</option>`;
  });

  html += `
        </select>
      </p>

      <p style="text-align:left; margin:0; padding:0;">Digimon Tier Level (masukkan level digimon tier karena akan mempengaruhi perhitungan DV.poin dan DV Level yg didapat, range mulai dari 1 s/d 99, jika dikosongkan, otomatis dianggap level 1)</p>
      <p class="parag">
        <input class="sstext" type="text" maxlength="2" id="digimontierdvlevel" placeholder="masukkan level digimon tier nya, range mulai dari 1 s/d 99" onkeypress="return numberkey(event);" />
      </p>

      <p style="text-align:left; margin:0; padding:0;">Pilih Batas DV.Point yang mau ditampilkan (semakin kecil angka yg diambil, semakin banyak tampilan hasil grindingnya)</p>
      <p class="parag">
        <select class="sstext" id="dvpoinlimit">
  `;

  for (let i = 10; i >= 1; i--) {
    html += `<option value="${i}">${i}</option>`;
  }

  html += `
        </select>
      </p>

      <p class="parag">
        <button class="btn" style="width:100%;" onclick="processDVCalculator();">proses</button>
      </p>

      <span id="rookiedes"></span>
    </div>
  `;

  container.innerHTML = html;
}

// 5. Raw Data CSV Reader & Custom Upload View
function renderCSVViewer(container) {
  let html = `
    <div style="padding-left:20px;padding-right:20px;width:100%;">
      <h1>Data CSV Reader & Base Data Manager</h1>
      <p style="text-align:justify;">Halaman ini menampilkan isi mentah dari file Base Data CSV yang dibaca oleh sistem. Anda juga dapat mengunggah file CSV kustom dari komputer Anda.</p>
      
      <div style="margin-bottom: 20px;">
        <h3>1. digimondvtier.csv (${AppState.digimondvtier.length} data)</h3>
        <textarea id="csv_tier_text" style="width:100%; height:120px; font-family:monospace;">${AppState.rawCSV.digimondvtier}</textarea>
      </div>

      <div style="margin-bottom: 20px;">
        <h3>2. expdvpoin.csv (${AppState.expdvpoin.length} data)</h3>
        <textarea id="csv_exp_text" style="width:100%; height:160px; font-family:monospace;">${AppState.rawCSV.expdvpoin}</textarea>
      </div>

      <div style="margin-bottom: 20px;">
        <h3>3. rookielevelexp.csv (${AppState.rookielevelexp.length} data)</h3>
        <textarea id="csv_rookie_text" style="width:100%; height:160px; font-family:monospace;">${AppState.rawCSV.rookielevelexp}</textarea>
      </div>

      <div style="margin-top: 15px;">
        <button class="btn" onclick="applyCustomCSVText();">Terapkan Perubahan Data CSV</button>
        <button class="btn" style="background:#555;" onclick="reloadDefaultCSVData();">Reset ke CSV Default</button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function applyCustomCSVText() {
  const tierText = document.getElementById('csv_tier_text').value;
  const expText = document.getElementById('csv_exp_text').value;
  const rookieText = document.getElementById('csv_rookie_text').value;

  AppState.rawCSV.digimondvtier = tierText;
  AppState.rawCSV.expdvpoin = expText;
  AppState.rawCSV.rookielevelexp = rookieText;

  processCSVState();
  alert('Data CSV berhasil diperbarui dan diterapkan ke sistem!');
}

function reloadDefaultCSVData() {
  loadCSVData().then(() => {
    menuload('datacsv');
    alert('Data CSV telah direset!');
  });
}

// Calculate & Display Grinding Support Output
function processDVCalculator() {
  const rookieName = document.getElementById('rookiename').value || 'Agumon';
  
  let rookieLevel = parseInt(document.getElementById('rookielevel').value, 10);
  if (isNaN(rookieLevel) || rookieLevel < 5) rookieLevel = 5;

  const rookieExpInput = parseFloat(document.getElementById('rookieexp').value);
  const rookieExp = isNaN(rookieExpInput) ? 0 : rookieExpInput;

  const digimonTierDvName = document.getElementById('digimontierdv').value || 'Greymon';
  
  let digimonTierDvLevel = parseFloat(document.getElementById('digimontierdvlevel').value);
  if (isNaN(digimonTierDvLevel) || digimonTierDvLevel < 1) digimonTierDvLevel = 1;

  const dvPoinLimitInput = parseFloat(document.getElementById('dvpoinlimit').value);
  const dvPoinLimit = isNaN(dvPoinLimitInput) ? 7 : dvPoinLimitInput;

  let digimonTierScore = 10;
  const tierObj = AppState.digimondvtier.find(t => t.name === digimonTierDvName);
  if (tierObj && digimonTierDvLevel > tierObj.dv10) {
    digimonTierScore = 50;
  }

  let expAwal = 0;
  let expLanjut = 0;

  const currentLevelRow = AppState.rookielevelexp.find(r => r.name === rookieName && r.level === rookieLevel);
  if (currentLevelRow) {
    expAwal = currentLevelRow.exp;
    expLanjut = expAwal;
  }

  let isLevel99 = (rookieLevel === 99);
  if (!isLevel99) {
    const nextLevelRow = AppState.rookielevelexp.find(r => r.name === rookieName && r.level === (rookieLevel + 1));
    if (nextLevelRow) {
      expLanjut = nextLevelRow.exp;
      if (rookieExp > expAwal && rookieExp < expLanjut) {
        expAwal = rookieExp;
      }
    }
  }

  const expSelisih = expLanjut - expAwal;

  let outputHtml = '';

  outputHtml += `<p style="text-align:left; margin:0; padding:0; ">Rookie current EXP</p><p class="parag">${expAwal}</p>`;
  if (isLevel99) {
    outputHtml += `<p style="text-align:left; margin:0; padding:0; ">Rookie Next EXP for Level UP</p><p class="parag">????</p>`;
  } else {
    outputHtml += `<p style="text-align:left; margin:0; padding:0; ">Rookie Next EXP for Level UP</p><p class="parag">${expLanjut}</p>`;
  }
  outputHtml += `<p style="text-align:left; margin:0; padding:0; ">EXP total yg diperlukan untuk next level</p><p class="parag">${expSelisih}</p>`;

  const recommendations = [];

  AppState.expdvpoin.forEach(enemy => {
    let dvEarn = 0;
    if (rookieLevel <= enemy.dv10) dvEarn = 10;
    else if (rookieLevel <= enemy.dv9) dvEarn = 9;
    else if (rookieLevel <= enemy.dv8) dvEarn = 8;
    else if (rookieLevel <= enemy.dv7) dvEarn = 7;
    else if (rookieLevel <= enemy.dv6) dvEarn = 6;
    else if (rookieLevel <= enemy.dv5) dvEarn = 5;
    else if (rookieLevel <= enemy.dv4) dvEarn = 4;
    else if (rookieLevel <= enemy.dv3) dvEarn = 3;
    else if (rookieLevel <= enemy.dv2) dvEarn = 2;
    else if (rookieLevel <= enemy.dv1) dvEarn = 1;
    else dvEarn = 0;

    if (dvEarn >= dvPoinLimit && enemy.dv10 <= (rookieLevel + 5) && enemy.exp > 0) {
      const battleCount = enemy.exp > 0 ? Math.floor(expSelisih / enemy.exp) : 0;
      const dvPoinTotal = battleCount * dvEarn;
      const dvLevelTotalDecimal = (dvPoinTotal / digimonTierScore).toFixed(2);
      const dvLevelTotal = Math.floor(dvPoinTotal / digimonTierScore);
      const dvPointTotalLeft = dvPoinTotal % digimonTierScore;
      const expTotal = battleCount * enemy.exp;

      recommendations.push({
        digimon: enemy.digimon,
        exp: enemy.exp,
        dvEarn: dvEarn,
        battleCount: battleCount,
        dvPoinTotal: dvPoinTotal,
        dvLevelTotalDecimal: dvLevelTotalDecimal,
        dvLevelTotal: dvLevelTotal,
        dvPointTotalLeft: dvPointTotalLeft,
        expTotal: expTotal
      });
    }
  });

  recommendations.sort((a, b) => b.dvLevelTotal - a.dvLevelTotal);

  outputHtml += `
    <p>*catatan :
    <br />rumus Battle Count = floor(EXP total yg diperlukan untuk next level / EXP dari setiap digimon musuh per battle) {floor maksudnya rumus mengabaikan bilangan angka di belakang koma}
    <br />rumus Dv.Point Total = Dv.Point x Battle Count
    <br />rumus Dv.Level Total = floor(Dv.Point Total / ${digimonTierScore}) darimana angka ${digimonTierScore}? cek situs <a href='https://gamefaqs.gamespot.com/boards/562323-digimon-world-3/47657837' target='_blank'>digimon tier</a> dan lihat jg berapa Digimon Tier Level yang anda masukkan
    <br />rumus EXP Total = EXP digimon x Battle Count
    <br />tabel dibawah diurutkan berdasarkan DV. Level dari terbanyak sampai tersedikit.
    </p>
    <div class="scroll"><table width="100%">
      <thead>
        <tr><th>Digimon</th><th>EXP Point</th><th>DV Point</th><th>Battle Count</th><th>Dv.Point Total</th><th>Dv.Level Total</th><th>Dv.Point Sisa</th><th>EXP Total</th></tr>
      </thead>
      <tbody>
  `;

  recommendations.forEach(row => {
    outputHtml += `
      <tr>
        <td>${row.digimon}</td>
        <td style='text-align:center;'>${row.exp}</td>
        <td style='text-align:center;'>${row.dvEarn}</td>
        <td style='text-align:center;'>${row.battleCount}</td>
        <td style='text-align:center;'>${row.dvPoinTotal}</td>
        <td style='text-align:center;' title='${row.dvLevelTotalDecimal}'>${row.dvLevelTotal}</td>
        <td style='text-align:center;'>${row.dvPointTotalLeft}</td>
        <td style='text-align:center;'>${row.expTotal}</td>
      </tr>
    `;
  });

  outputHtml += `</tbody></table></div>`;

  document.getElementById('rookiedes').innerHTML = outputHtml;
}

// Global Event Listeners & Initial Load
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (['home', 'dvtable', 'dvcalculator', 'rookielevelexp', 'datacsv'].includes(hash)) {
    menuload(hash);
  } else {
    menuload('dvcalculator');
  }
});
