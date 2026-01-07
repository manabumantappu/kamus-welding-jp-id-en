/* =========================
   DATA KAMUS WELDING (50)
   JP - Romaji - ID - EN
========================= */

const data = [

/* ===== Welding ===== */
{jp:"溶接",romaji:"yousetsu",id:"pengelasan",en:"welding",cat:"Welding"},
{jp:"半自動溶接",romaji:"hanjidou yousetsu",id:"las semi otomatis",en:"semi-automatic welding",cat:"Welding"},
{jp:"TIG溶接",romaji:"tig yousetsu",id:"las TIG",en:"TIG welding",cat:"Welding"},
{jp:"MIG溶接",romaji:"mig yousetsu",id:"las MIG",en:"MIG welding",cat:"Welding"},
{jp:"アーク溶接",romaji:"aaku yousetsu",id:"las busur",en:"arc welding",cat:"Welding"},
{jp:"スポット溶接",romaji:"supotto yousetsu",id:"las titik",en:"spot welding",cat:"Welding"},

/* ===== Material ===== */
{jp:"鋼材",romaji:"kouzai",id:"baja",en:"steel material",cat:"Material"},
{jp:"ステンレス",romaji:"sutenresu",id:"stainless steel",en:"stainless steel",cat:"Material"},
{jp:"アルミ",romaji:"arumi",id:"aluminium",en:"aluminum",cat:"Material"},
{jp:"板厚",romaji:"itaita",id:"ketebalan plat",en:"plate thickness",cat:"Material"},
{jp:"母材",romaji:"bozai",id:"logam induk",en:"base metal",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接機",romaji:"yousetsuki",id:"mesin las",en:"welding machine",cat:"Equipment"},
{jp:"トーチ",romaji:"toochi",id:"torch",en:"torch",cat:"Equipment"},
{jp:"電極",romaji:"denkyoku",id:"elektroda",en:"electrode",cat:"Equipment"},
{jp:"ワイヤ",romaji:"waiya",id:"kawat las",en:"welding wire",cat:"Equipment"},
{jp:"ガスボンベ",romaji:"gasubonbe",id:"tabung gas",en:"gas cylinder",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査",romaji:"kensa",id:"inspeksi",en:"inspection",cat:"Inspection"},
{jp:"外観検査",romaji:"gaikan kensa",id:"inspeksi visual",en:"visual inspection",cat:"Inspection"},
{jp:"水没検査",romaji:"suibotsu kensa",id:"tes rendam",en:"immersion test",cat:"Inspection"},
{jp:"寸法検査",romaji:"sunpou kensa",id:"pemeriksaan dimensi",en:"dimensional inspection",cat:"Inspection"},
{jp:"合格",romaji:"goukaku",id:"lulus",en:"pass",cat:"Inspection"},
{jp:"不合格",romaji:"fugoukaku",id:"tidak lulus",en:"fail",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"不良",romaji:"furyou",id:"cacat",en:"defect",cat:"Defect"},
{jp:"割れ",romaji:"ware",id:"retak",en:"crack",cat:"Defect"},
{jp:"ブローホール",romaji:"buroo hooru",id:"lubang pori",en:"blow hole",cat:"Defect"},
{jp:"溶け込み不足",romaji:"tokekomi busoku",id:"kurang penetrasi",en:"lack of penetration",cat:"Defect"},
{jp:"歪み",romaji:"yugami",id:"distorsi",en:"distortion",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全",romaji:"anzen",id:"keselamatan",en:"safety",cat:"Safety"},
{jp:"保護具",romaji:"hogogu",id:"alat pelindung diri",en:"protective equipment",cat:"Safety"},
{jp:"安全靴",romaji:"anzen kutsu",id:"sepatu keselamatan",en:"safety shoes",cat:"Safety"},
{jp:"保護手袋",romaji:"hogo tebukuro",id:"sarung tangan pelindung",en:"protective gloves",cat:"Safety"},
{jp:"火傷",romaji:"yakedo",id:"luka bakar",en:"burn injury",cat:"Safety"},

/* ===== Tools ===== */
{jp:"グラインダー",romaji:"guraindaa",id:"gerinda",en:"grinder",cat:"Tools"},
{jp:"ハンマー",romaji:"hanmaa",id:"palu",en:"hammer",cat:"Tools"},
{jp:"クランプ",romaji:"kuranpu",id:"penjepit",en:"clamp",cat:"Tools"},
{jp:"測定工具",romaji:"sokutei kougu",id:"alat ukur",en:"measuring tools",cat:"Tools"},

/* ===== Process ===== */
{jp:"作業手順",romaji:"sagyou tejun",id:"prosedur kerja",en:"work procedure",cat:"Process"},
{jp:"前工程",romaji:"zenkoutei",id:"proses sebelumnya",en:"previous process",cat:"Process"},
{jp:"後工程",romaji:"koukoutei",id:"proses berikutnya",en:"next process",cat:"Process"},
{jp:"段取り",romaji:"dandori",id:"persiapan kerja",en:"setup",cat:"Process"}
/* =================================================
   TAMBAHAN 100 KOSAKATA (TOTAL JADI 150)
================================================= */

/* ===== Welding ===== */
{jp:"溶加材",romaji:"youkazai",id:"bahan tambah las",en:"filler material",cat:"Welding"},
{jp:"溶接棒",romaji:"yousetsubou",id:"batang las",en:"welding rod",cat:"Welding"},
{jp:"溶接姿勢",romaji:"yousetsu shisei",id:"posisi pengelasan",en:"welding position",cat:"Welding"},
{jp:"立向き溶接",romaji:"tate muki yousetsu",id:"las vertikal",en:"vertical welding",cat:"Welding"},
{jp:"下向き溶接",romaji:"shita muki yousetsu",id:"las datar",en:"flat welding",cat:"Welding"},
{jp:"溶接電流",romaji:"yousetsu denryuu",id:"arus las",en:"welding current",cat:"Welding"},
{jp:"溶接電圧",romaji:"yousetsu denatsu",id:"tegangan las",en:"welding voltage",cat:"Welding"},
{jp:"溶接速度",romaji:"yousetsu sokudo",id:"kecepatan las",en:"welding speed",cat:"Welding"},
{jp:"予熱",romaji:"yonetsu",id:"pemanasan awal",en:"preheating",cat:"Welding"},
{jp:"後熱",romaji:"konetsu",id:"pemanasan setelah las",en:"post heating",cat:"Welding"},

/* ===== Material ===== */
{jp:"炭素鋼",romaji:"tanso kou",id:"baja karbon",en:"carbon steel",cat:"Material"},
{jp:"合金鋼",romaji:"goukin kou",id:"baja paduan",en:"alloy steel",cat:"Material"},
{jp:"軟鋼",romaji:"nankou",id:"baja lunak",en:"mild steel",cat:"Material"},
{jp:"硬度",romaji:"kodo",id:"kekerasan",en:"hardness",cat:"Material"},
{jp:"引張強さ",romaji:"hikippari tsuyosa",id:"kekuatan tarik",en:"tensile strength",cat:"Material"},
{jp:"溶融点",romaji:"youryuu ten",id:"titik leleh",en:"melting point",cat:"Material"},
{jp:"表面",romaji:"hyoumen",id:"permukaan",en:"surface",cat:"Material"},
{jp:"母材割れ",romaji:"bozai ware",id:"retak logam induk",en:"base metal crack",cat:"Material"},

/* ===== Equipment ===== */
{jp:"電源",romaji:"dengen",id:"sumber listrik",en:"power supply",cat:"Equipment"},
{jp:"制御盤",romaji:"seigyoban",id:"panel kontrol",en:"control panel",cat:"Equipment"},
{jp:"冷却装置",romaji:"reikyaku souchi",id:"alat pendingin",en:"cooling unit",cat:"Equipment"},
{jp:"圧力計",romaji:"atsuryokukei",id:"pengukur tekanan",en:"pressure gauge",cat:"Equipment"},
{jp:"電流計",romaji:"denryuukei",id:"pengukur arus",en:"ammeter",cat:"Equipment"},
{jp:"電圧計",romaji:"denatsukei",id:"pengukur tegangan",en:"voltmeter",cat:"Equipment"},
{jp:"遮断器",romaji:"shadanki",id:"pemutus arus",en:"circuit breaker",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査基準",romaji:"kensa kijun",id:"standar inspeksi",en:"inspection standard",cat:"Inspection"},
{jp:"検査結果",romaji:"kensa kekka",id:"hasil inspeksi",en:"inspection result",cat:"Inspection"},
{jp:"測定",romaji:"sokutei",id:"pengukuran",en:"measurement",cat:"Inspection"},
{jp:"公差",romaji:"kousa",id:"toleransi",en:"tolerance",cat:"Inspection"},
{jp:"記録",romaji:"kiroku",id:"catatan",en:"record",cat:"Inspection"},
{jp:"再検査",romaji:"saikensa",id:"inspeksi ulang",en:"re-inspection",cat:"Inspection"},
{jp:"品質",romaji:"hinshitsu",id:"kualitas",en:"quality",cat:"Inspection"},
{jp:"品質管理",romaji:"hinshitsu kanri",id:"manajemen mutu",en:"quality control",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"スパッタ",romaji:"supatta",id:"percikan las",en:"spatter",cat:"Defect"},
{jp:"オーバーラップ",romaji:"oobaa rappu",id:"tumpang tindih las",en:"overlap",cat:"Defect"},
{jp:"アンダーカット",romaji:"andaa katto",id:"alur tergerus",en:"undercut",cat:"Defect"},
{jp:"溶接欠陥",romaji:"yousetsu kekkan",id:"cacat pengelasan",en:"welding defect",cat:"Defect"},
{jp:"未溶着",romaji:"miyouchaku",id:"tidak menyatu",en:"incomplete fusion",cat:"Defect"},
{jp:"外れ",romaji:"hazure",id:"lepas",en:"detachment",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"注意",romaji:"chuui",id:"peringatan",en:"caution",cat:"Safety"},
{jp:"危険",romaji:"kiken",id:"bahaya",en:"danger",cat:"Safety"},
{jp:"立入禁止",romaji:"tachiiri kinshi",id:"dilarang masuk",en:"no entry",cat:"Safety"},
{jp:"感電",romaji:"kanden",id:"tersengat listrik",en:"electric shock",cat:"Safety"},
{jp:"火災",romaji:"kasai",id:"kebakaran",en:"fire",cat:"Safety"},
{jp:"保護メガネ",romaji:"hogo megane",id:"kacamata pelindung",en:"safety goggles",cat:"Safety"},
{jp:"安全帯",romaji:"anzen obi",id:"sabuk keselamatan",en:"safety belt",cat:"Safety"},

/* ===== Tools ===== */
{jp:"ドライバー",romaji:"doraibaa",id:"obeng",en:"screwdriver",cat:"Tools"},
{jp:"レンチ",romaji:"renchi",id:"kunci pas",en:"wrench",cat:"Tools"},
{jp:"ペンチ",romaji:"penchi",id:"tang",en:"pliers",cat:"Tools"},
{jp:"ノギス",romaji:"nogisu",id:"jangka sorong",en:"vernier caliper",cat:"Tools"},
{jp:"定規",romaji:"jougi",id:"penggaris",en:"ruler",cat:"Tools"},
{jp:"測定器",romaji:"sokuteiki",id:"alat ukur",en:"measuring instrument",cat:"Tools"},

/* ===== Process ===== */
{jp:"作業開始",romaji:"sagyou kaishi",id:"mulai kerja",en:"start work",cat:"Process"},
{jp:"作業終了",romaji:"sagyou shuuryou",id:"selesai kerja",en:"end work",cat:"Process"},
{jp:"工程管理",romaji:"koutei kanri",id:"kontrol proses",en:"process control",cat:"Process"},
{jp:"改善",romaji:"kaizen",id:"perbaikan berkelanjutan",en:"improvement",cat:"Process"},
{jp:"標準作業",romaji:"hyoujun sagyou",id:"pekerjaan standar",en:"standard work",cat:"Process"},
{jp:"作業指示",romaji:"sagyou shiji",id:"instruksi kerja",en:"work instruction",cat:"Process"},
{jp:"確認",romaji:"kakunin",id:"konfirmasi",en:"confirmation",cat:"Process"}
/* =================================================
   TAMBAHAN 100 KOSAKATA (LANJUTAN)
================================================= */

/* ===== Welding ===== */
{jp:"溶接条件",romaji:"yousetsu jouken",id:"kondisi pengelasan",en:"welding condition",cat:"Welding"},
{jp:"溶接継手",romaji:"yousetsu tsugite",id:"sambungan las",en:"welded joint",cat:"Welding"},
{jp:"突合せ溶接",romaji:"tsukiawase yousetsu",id:"las tumpul",en:"butt welding",cat:"Welding"},
{jp:"隅肉溶接",romaji:"sumini ku yousetsu",id:"las sudut",en:"fillet welding",cat:"Welding"},
{jp:"多層溶接",romaji:"tasou yousetsu",id:"las berlapis",en:"multi-pass welding",cat:"Welding"},
{jp:"仮付け",romaji:"karizuke",id:"tack weld",en:"tack welding",cat:"Welding"},
{jp:"溶接音",romaji:"yousetsu on",id:"suara las",en:"welding sound",cat:"Welding"},
{jp:"溶接煙",romaji:"yousetsu kemuri",id:"asap las",en:"welding fume",cat:"Welding"},
{jp:"溶接ビード",romaji:"yousetsu biido",id:"manik las",en:"weld bead",cat:"Welding"},
{jp:"溶接歪み",romaji:"yousetsu yugami",id:"distorsi las",en:"welding distortion",cat:"Welding"},

/* ===== Material ===== */
{jp:"鋳鉄",romaji:"chuutetsu",id:"besi cor",en:"cast iron",cat:"Material"},
{jp:"非鉄金属",romaji:"hitetsu kinzoku",id:"logam non ferrous",en:"non-ferrous metal",cat:"Material"},
{jp:"銅",romaji:"dou",id:"tembaga",en:"copper",cat:"Material"},
{jp:"真鍮",romaji:"shinchu",id:"kuningan",en:"brass",cat:"Material"},
{jp:"密度",romaji:"mitsudo",id:"massa jenis",en:"density",cat:"Material"},
{jp:"熱伝導率",romaji:"netsu dendouritsu",id:"konduktivitas panas",en:"thermal conductivity",cat:"Material"},
{jp:"耐熱性",romaji:"tainetsusei",id:"tahan panas",en:"heat resistance",cat:"Material"},
{jp:"耐腐食性",romaji:"taifushokusei",id:"tahan korosi",en:"corrosion resistance",cat:"Material"},
{jp:"表面処理",romaji:"hyoumen shori",id:"perlakuan permukaan",en:"surface treatment",cat:"Material"},
{jp:"被覆材",romaji:"hifukuzai",id:"bahan pelapis",en:"coating material",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接ロボット",romaji:"yousetsu robotto",id:"robot las",en:"welding robot",cat:"Equipment"},
{jp:"操作パネル",romaji:"sousa paneru",id:"panel operasi",en:"operation panel",cat:"Equipment"},
{jp:"配線",romaji:"haisen",id:"kabel instalasi",en:"wiring",cat:"Equipment"},
{jp:"接地",romaji:"setchi",id:"grounding",en:"grounding",cat:"Equipment"},
{jp:"冷却ファン",romaji:"reikyaku fan",id:"kipas pendingin",en:"cooling fan",cat:"Equipment"},
{jp:"ヒューズ",romaji:"hyuuzu",id:"sekring",en:"fuse",cat:"Equipment"},
{jp:"電源スイッチ",romaji:"dengen suitchi",id:"saklar listrik",en:"power switch",cat:"Equipment"},
{jp:"圧縮空気",romaji:"asshuku kuuki",id:"udara bertekanan",en:"compressed air",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査員",romaji:"kensain",id:"inspektor",en:"inspector",cat:"Inspection"},
{jp:"判定",romaji:"hantei",id:"penilaian",en:"judgement",cat:"Inspection"},
{jp:"検査表",romaji:"kensahyou",id:"lembar inspeksi",en:"inspection sheet",cat:"Inspection"},
{jp:"規格",romaji:"kikaku",id:"standar",en:"standard",cat:"Inspection"},
{jp:"不適合",romaji:"futekigou",id:"ketidaksesuaian",en:"nonconformity",cat:"Inspection"},
{jp:"是正",romaji:"zeisei",id:"tindakan korektif",en:"corrective action",cat:"Inspection"},
{jp:"検証",romaji:"kenshou",id:"verifikasi",en:"verification",cat:"Inspection"},
{jp:"承認",romaji:"shounin",id:"persetujuan",en:"approval",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"欠け",romaji:"kake",id:"terkelupas",en:"chipping",cat:"Defect"},
{jp:"変形",romaji:"henkei",id:"deformasi",en:"deformation",cat:"Defect"},
{jp:"焼け",romaji:"yake",id:"terbakar",en:"burn mark",cat:"Defect"},
{jp:"未完成",romaji:"mikansei",id:"belum selesai",en:"incomplete",cat:"Defect"},
{jp:"傷",romaji:"kizu",id:"goresan",en:"scratch",cat:"Defect"},
{jp:"汚れ",romaji:"yogore",id:"kotoran",en:"contamination",cat:"Defect"},
{jp:"寸法不良",romaji:"sunpou furyou",id:"cacat dimensi",en:"dimensional defect",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"保護面",romaji:"hogo men",id:"pelindung wajah",en:"face shield",cat:"Safety"},
{jp:"作業服",romaji:"sagyou fuku",id:"baju kerja",en:"workwear",cat:"Safety"},
{jp:"防火",romaji:"bouka",id:"pencegahan kebakaran",en:"fire prevention",cat:"Safety"},
{jp:"避難",romaji:"hinan",id:"evakuasi",en:"evacuation",cat:"Safety"},
{jp:"非常口",romaji:"hijouguchi",id:"pintu darurat",en:"emergency exit",cat:"Safety"},
{jp:"保護帽",romaji:"hogo boushi",id:"helm keselamatan",en:"safety helmet",cat:"Safety"},
{jp:"作業中",romaji:"sagyou chuu",id:"sedang bekerja",en:"work in progress",cat:"Safety"},

/* ===== Tools ===== */
{jp:"電動ドリル",romaji:"dendou doriru",id:"bor listrik",en:"electric drill",cat:"Tools"},
{jp:"切断機",romaji:"setsudanki",id:"mesin potong",en:"cutting machine",cat:"Tools"},
{jp:"ヤスリ",romaji:"yasuri",id:"kikir",en:"file tool",cat:"Tools"},
{jp:"バイス",romaji:"baisu",id:"ragum",en:"vise",cat:"Tools"},
{jp:"スパナ",romaji:"supana",id:"kunci pas",en:"spanner",cat:"Tools"},
{jp:"六角レンチ",romaji:"rokkaku renchi",id:"kunci L",en:"hex wrench",cat:"Tools"},

/* ===== Process ===== */
{jp:"準備",romaji:"junbi",id:"persiapan",en:"preparation",cat:"Process"},
{jp:"点検",romaji:"tenken",id:"pengecekan",en:"checking",cat:"Process"},
{jp:"清掃",romaji:"seisou",id:"pembersihan",en:"cleaning",cat:"Process"},
{jp:"組立",romaji:"kumitate",id:"perakitan",en:"assembly",cat:"Process"},
{jp:"分解",romaji:"bunkai",id:"pembongkaran",en:"disassembly",cat:"Process"},
{jp:"運搬",romaji:"unpan",id:"pemindahan",en:"transportation",cat:"Process"},
{jp:"完了",romaji:"kanryou",id:"selesai",en:"completed",cat:"Process"}
   
];
