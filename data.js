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
{jp:"段取り",romaji:"dandori",id:"persiapan kerja",en:"setup",cat:"Process"},
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
{jp:"確認",romaji:"kakunin",id:"konfirmasi",en:"confirmation",cat:"Process"},
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
{jp:"完了",romaji:"kanryou",id:"selesai",en:"completed",cat:"Process"},
/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接線",romaji:"yousetsu sen",id:"garis las",en:"weld line",cat:"Welding"},
{jp:"溶接部",romaji:"yousetsu bu",id:"bagian las",en:"welded part",cat:"Welding"},
{jp:"溶接金属",romaji:"yousetsu kinzoku",id:"logam las",en:"weld metal",cat:"Welding"},
{jp:"溶融池",romaji:"youryuu chi",id:"kolam leleh",en:"molten pool",cat:"Welding"},
{jp:"溶接欠陥率",romaji:"yousetsu kekkan ritsu",id:"tingkat cacat las",en:"weld defect rate",cat:"Welding"},
{jp:"溶接継ぎ目",romaji:"yousetsu tsugime",id:"sambungan las",en:"weld seam",cat:"Welding"},
{jp:"溶接角度",romaji:"yousetsu kakudo",id:"sudut pengelasan",en:"welding angle",cat:"Welding"},
{jp:"溶接品質",romaji:"yousetsu hinshitsu",id:"kualitas pengelasan",en:"welding quality",cat:"Welding"},
{jp:"溶接工程",romaji:"yousetsu koutei",id:"proses pengelasan",en:"welding process",cat:"Welding"},
{jp:"溶接準備",romaji:"yousetsu junbi",id:"persiapan pengelasan",en:"welding preparation",cat:"Welding"},

/* ===== Material ===== */
{jp:"厚板",romaji:"atsu ita",id:"plat tebal",en:"thick plate",cat:"Material"},
{jp:"薄板",romaji:"usu ita",id:"plat tipis",en:"thin plate",cat:"Material"},
{jp:"丸棒",romaji:"marubou",id:"batang bulat",en:"round bar",cat:"Material"},
{jp:"角材",romaji:"kakuzai",id:"batang kotak",en:"square bar",cat:"Material"},
{jp:"材料特性",romaji:"zairyou tokusei",id:"karakteristik material",en:"material property",cat:"Material"},
{jp:"耐摩耗性",romaji:"taimamousei",id:"tahan aus",en:"wear resistance",cat:"Material"},
{jp:"延性",romaji:"ensei",id:"keuletan",en:"ductility",cat:"Material"},
{jp:"脆性",romaji:"zeisei",id:"getas",en:"brittleness",cat:"Material"},
{jp:"材料証明書",romaji:"zairyou shoumeisho",id:"sertifikat material",en:"material certificate",cat:"Material"},
{jp:"規定材質",romaji:"kitei zaishitsu",id:"spesifikasi material",en:"specified material",cat:"Material"},

/* ===== Equipment ===== */
{jp:"操作装置",romaji:"sousa souchi",id:"perangkat operasi",en:"operating device",cat:"Equipment"},
{jp:"自動停止",romaji:"jidou teishi",id:"berhenti otomatis",en:"automatic stop",cat:"Equipment"},
{jp:"過負荷",romaji:"kafuka",id:"beban berlebih",en:"overload",cat:"Equipment"},
{jp:"警報装置",romaji:"keihou souchi",id:"alat alarm",en:"alarm device",cat:"Equipment"},
{jp:"制御スイッチ",romaji:"seigyo suitchi",id:"saklar kontrol",en:"control switch",cat:"Equipment"},
{jp:"温度センサー",romaji:"ondo sensaa",id:"sensor suhu",en:"temperature sensor",cat:"Equipment"},
{jp:"圧力センサー",romaji:"atsuryoku sensaa",id:"sensor tekanan",en:"pressure sensor",cat:"Equipment"},
{jp:"駆動部",romaji:"kudoubu",id:"bagian penggerak",en:"drive unit",cat:"Equipment"},
{jp:"装置点検",romaji:"souchi tenken",id:"pemeriksaan alat",en:"equipment inspection",cat:"Equipment"},
{jp:"設備停止",romaji:"setsubi teishi",id:"penghentian mesin",en:"equipment shutdown",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査方法",romaji:"kensa houhou",id:"metode inspeksi",en:"inspection method",cat:"Inspection"},
{jp:"測定値",romaji:"sokuteichi",id:"nilai ukur",en:"measured value",cat:"Inspection"},
{jp:"判定基準",romaji:"hantei kijun",id:"kriteria penilaian",en:"judgement criteria",cat:"Inspection"},
{jp:"合否判定",romaji:"gouhi hantei",id:"penentuan lulus/tidak",en:"pass/fail judgement",cat:"Inspection"},
{jp:"検査証明",romaji:"kensa shoumei",id:"sertifikat inspeksi",en:"inspection certificate",cat:"Inspection"},
{jp:"検査頻度",romaji:"kensa hindo",id:"frekuensi inspeksi",en:"inspection frequency",cat:"Inspection"},
{jp:"検査対象",romaji:"kensa taishou",id:"objek inspeksi",en:"inspection target",cat:"Inspection"},
{jp:"立会検査",romaji:"tachiai kensa",id:"inspeksi bersama",en:"witness inspection",cat:"Inspection"},
{jp:"初品検査",romaji:"shohin kensa",id:"inspeksi produk awal",en:"first article inspection",cat:"Inspection"},
{jp:"抜取検査",romaji:"nukitori kensa",id:"inspeksi sampling",en:"sampling inspection",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接不良",romaji:"yousetsu furyou",id:"las cacat",en:"poor welding",cat:"Defect"},
{jp:"形状不良",romaji:"keijou furyou",id:"bentuk tidak sesuai",en:"shape defect",cat:"Defect"},
{jp:"表面欠陥",romaji:"hyoumen kekkan",id:"cacat permukaan",en:"surface defect",cat:"Defect"},
{jp:"過剰溶着",romaji:"kajou youchaku",id:"las berlebih",en:"excess weld",cat:"Defect"},
{jp:"溶接不足",romaji:"yousetsu busoku",id:"las kurang",en:"insufficient weld",cat:"Defect"},
{jp:"再加工",romaji:"saikakou",id:"proses ulang",en:"rework",cat:"Defect"},
{jp:"補修",romaji:"hoshuu",id:"perbaikan",en:"repair",cat:"Defect"},
{jp:"手直し",romaji:"tenaoshi",id:"perbaikan manual",en:"touch-up",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全確認",romaji:"anzen kakunin",id:"konfirmasi keselamatan",en:"safety check",cat:"Safety"},
{jp:"作業許可",romaji:"sagyou kyoka",id:"izin kerja",en:"work permit",cat:"Safety"},
{jp:"保護区域",romaji:"hogo kuiki",id:"area perlindungan",en:"protected area",cat:"Safety"},
{jp:"危険区域",romaji:"kiken kuiki",id:"area berbahaya",en:"danger zone",cat:"Safety"},
{jp:"感電防止",romaji:"kanden boushi",id:"pencegahan sengatan",en:"electric shock prevention",cat:"Safety"},
{jp:"火花注意",romaji:"hibana chuui",id:"waspada percikan",en:"spark caution",cat:"Safety"},
{jp:"高温注意",romaji:"kouon chuui",id:"waspada panas tinggi",en:"high temperature warning",cat:"Safety"},
{jp:"安全教育",romaji:"anzen kyouiku",id:"pelatihan keselamatan",en:"safety training",cat:"Safety"},

/* ===== Tools ===== */
{jp:"測定ゲージ",romaji:"sokutei geeji",id:"gauge ukur",en:"measuring gauge",cat:"Tools"},
{jp:"溶接治具",romaji:"yousetsu jigu",id:"jig las",en:"welding jig",cat:"Tools"},
{jp:"固定具",romaji:"koteigu",id:"alat pengikat",en:"fixture",cat:"Tools"},
{jp:"研磨工具",romaji:"kenma kougu",id:"alat poles",en:"polishing tool",cat:"Tools"},
{jp:"切削工具",romaji:"sessaku kougu",id:"alat potong",en:"cutting tool",cat:"Tools"},
{jp:"工具点検",romaji:"kougu tenken",id:"pemeriksaan alat",en:"tool inspection",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程順",romaji:"koutei jun",id:"urutan proses",en:"process sequence",cat:"Process"},
{jp:"工程変更",romaji:"koutei henkou",id:"perubahan proses",en:"process change",cat:"Process"},
{jp:"作業計画",romaji:"sagyou keikaku",id:"rencana kerja",en:"work plan",cat:"Process"},
{jp:"作業時間",romaji:"sagyou jikan",id:"waktu kerja",en:"working time",cat:"Process"},
{jp:"標準時間",romaji:"hyoujun jikan",id:"waktu standar",en:"standard time",cat:"Process"},
{jp:"進捗",romaji:"shinchoku",id:"kemajuan kerja",en:"progress",cat:"Process"},
{jp:"完了報告",romaji:"kanryou houkoku",id:"laporan selesai",en:"completion report",cat:"Process"},

/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接長さ",romaji:"yousetsu nagasa",id:"panjang las",en:"weld length",cat:"Welding"},
{jp:"溶接幅",romaji:"yousetsu haba",id:"lebar las",en:"weld width",cat:"Welding"},
{jp:"溶接深さ",romaji:"yousetsu fukasa",id:"kedalaman las",en:"weld depth",cat:"Welding"},
{jp:"溶接開始点",romaji:"yousetsu kaishiten",id:"titik mulai las",en:"weld start point",cat:"Welding"},
{jp:"溶接終了点",romaji:"yousetsu shuuryouten",id:"titik akhir las",en:"weld end point",cat:"Welding"},
{jp:"溶接記号",romaji:"yousetsu kigou",id:"simbol las",en:"welding symbol",cat:"Welding"},
{jp:"溶接仕様",romaji:"yousetsu shiyou",id:"spesifikasi las",en:"welding specification",cat:"Welding"},
{jp:"溶接条件表",romaji:"yousetsu joukenhyou",id:"tabel kondisi las",en:"welding condition sheet",cat:"Welding"},
{jp:"溶接順序",romaji:"yousetsu junjo",id:"urutan pengelasan",en:"welding sequence",cat:"Welding"},
{jp:"溶接方向",romaji:"yousetsu houkou",id:"arah pengelasan",en:"welding direction",cat:"Welding"},

/* ===== Material ===== */
{jp:"平板",romaji:"heiban",id:"plat datar",en:"flat plate",cat:"Material"},
{jp:"曲げ材",romaji:"magezai",id:"material tekuk",en:"bent material",cat:"Material"},
{jp:"丸パイプ",romaji:"maru paipu",id:"pipa bulat",en:"round pipe",cat:"Material"},
{jp:"角パイプ",romaji:"kaku paipu",id:"pipa kotak",en:"square pipe",cat:"Material"},
{jp:"板材",romaji:"itazai",id:"bahan plat",en:"plate material",cat:"Material"},
{jp:"線材",romaji:"senzai",id:"bahan kawat",en:"wire material",cat:"Material"},
{jp:"材質記号",romaji:"zaishitsu kigou",id:"kode material",en:"material code",cat:"Material"},
{jp:"材料番号",romaji:"zairyou bangou",id:"nomor material",en:"material number",cat:"Material"},
{jp:"材料厚",romaji:"zairyou atsu",id:"ketebalan material",en:"material thickness",cat:"Material"},
{jp:"材料幅",romaji:"zairyou haba",id:"lebar material",en:"material width",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接電源装置",romaji:"yousetsu dengen souchi",id:"unit daya las",en:"welding power unit",cat:"Equipment"},
{jp:"制御ユニット",romaji:"seigyo yunitto",id:"unit kontrol",en:"control unit",cat:"Equipment"},
{jp:"表示ランプ",romaji:"hyouji ranpu",id:"lampu indikator",en:"indicator lamp",cat:"Equipment"},
{jp:"操作レバー",romaji:"sousa rebā",id:"tuas operasi",en:"operation lever",cat:"Equipment"},
{jp:"駆動モーター",romaji:"kudou mootaa",id:"motor penggerak",en:"drive motor",cat:"Equipment"},
{jp:"冷却水",romaji:"reikyaku sui",id:"air pendingin",en:"cooling water",cat:"Equipment"},
{jp:"保護カバー",romaji:"hogo kabā",id:"penutup pelindung",en:"protective cover",cat:"Equipment"},
{jp:"装置異常",romaji:"souchi ijou",id:"kelainan alat",en:"equipment abnormality",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査範囲",romaji:"kensa han-i",id:"cakupan inspeksi",en:"inspection scope",cat:"Inspection"},
{jp:"検査項目",romaji:"kensa koumoku",id:"item inspeksi",en:"inspection item",cat:"Inspection"},
{jp:"測定基準",romaji:"sokutei kijun",id:"standar pengukuran",en:"measurement standard",cat:"Inspection"},
{jp:"検査精度",romaji:"kensa seido",id:"akurasi inspeksi",en:"inspection accuracy",cat:"Inspection"},
{jp:"検査時間",romaji:"kensa jikan",id:"waktu inspeksi",en:"inspection time",cat:"Inspection"},
{jp:"検査場所",romaji:"kensa basho",id:"lokasi inspeksi",en:"inspection location",cat:"Inspection"},
{jp:"検査完了",romaji:"kensa kanryou",id:"inspeksi selesai",en:"inspection completed",cat:"Inspection"},
{jp:"検査待ち",romaji:"kensa machi",id:"menunggu inspeksi",en:"waiting for inspection",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"外観不良",romaji:"gaikan furyou",id:"cacat tampilan",en:"appearance defect",cat:"Defect"},
{jp:"溶接割れ",romaji:"yousetsu ware",id:"retak las",en:"weld crack",cat:"Defect"},
{jp:"溶接ムラ",romaji:"yousetsu mura",id:"hasil las tidak rata",en:"uneven welding",cat:"Defect"},
{jp:"溶接過多",romaji:"yousetsu kata",id:"las berlebihan",en:"over welding",cat:"Defect"},
{jp:"溶接不足部",romaji:"yousetsu busoku bu",id:"bagian las kurang",en:"under-welded area",cat:"Defect"},
{jp:"欠損",romaji:"kesson",id:"bagian hilang",en:"missing part",cat:"Defect"},
{jp:"不完全",romaji:"fukanzen",id:"tidak sempurna",en:"imperfect",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全標識",romaji:"anzen hyoushiki",id:"rambu keselamatan",en:"safety sign",cat:"Safety"},
{jp:"立入注意",romaji:"tachiiri chuui",id:"hati-hati masuk area",en:"entry caution",cat:"Safety"},
{jp:"保護装備",romaji:"hogo soubi",id:"perlengkapan pelindung",en:"protective gear",cat:"Safety"},
{jp:"火気厳禁",romaji:"kaki genkin",id:"dilarang api",en:"no open flame",cat:"Safety"},
{jp:"高所作業",romaji:"kousho sagyou",id:"kerja di ketinggian",en:"work at height",cat:"Safety"},
{jp:"安全点検",romaji:"anzen tenken",id:"pemeriksaan keselamatan",en:"safety inspection",cat:"Safety"},
{jp:"防護柵",romaji:"bougosaku",id:"pagar pelindung",en:"safety fence",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接ハンマー",romaji:"yousetsu hanmaa",id:"palu las",en:"welding hammer",cat:"Tools"},
{jp:"チッピングハンマー",romaji:"chippingu hanmaa",id:"palu terak",en:"chipping hammer",cat:"Tools"},
{jp:"ワイヤブラシ",romaji:"waiya burashi",id:"sikat kawat",en:"wire brush",cat:"Tools"},
{jp:"切断刃",romaji:"setsudan yaiba",id:"mata potong",en:"cutting blade",cat:"Tools"},
{jp:"固定クランプ",romaji:"kotei kuranpu",id:"klem pengikat",en:"fixing clamp",cat:"Tools"},
{jp:"工具箱",romaji:"kougubako",id:"kotak alat",en:"tool box",cat:"Tools"},

/* ===== Process ===== */
{jp:"作業工程",romaji:"sagyou koutei",id:"tahap kerja",en:"work process",cat:"Process"},
{jp:"工程確認",romaji:"koutei kakunin",id:"cek proses",en:"process check",cat:"Process"},
{jp:"作業中断",romaji:"sagyou chuudan",id:"hentikan pekerjaan",en:"work interruption",cat:"Process"},
{jp:"再開",romaji:"saikai",id:"lanjut kembali",en:"resume",cat:"Process"},
{jp:"作業完了確認",romaji:"sagyou kanryou kakunin",id:"konfirmasi selesai kerja",en:"work completion check",cat:"Process"},
{jp:"報告",romaji:"houkoku",id:"laporan",en:"report",cat:"Process"},
{jp:"連絡",romaji:"renraku",id:"koordinasi",en:"communication",cat:"Process"},

/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接熱影響部",romaji:"yousetsu netsu eikyou bu",id:"daerah terpengaruh panas las",en:"heat affected zone",cat:"Welding"},
{jp:"溶接始端",romaji:"yousetsu shitan",id:"awal pengelasan",en:"weld start",cat:"Welding"},
{jp:"溶接終端",romaji:"yousetsu shuutan",id:"akhir pengelasan",en:"weld termination",cat:"Welding"},
{jp:"溶接電極角",romaji:"yousetsu denkyoku kaku",id:"sudut elektroda las",en:"electrode angle",cat:"Welding"},
{jp:"溶接姿勢区分",romaji:"yousetsu shisei kubun",id:"klasifikasi posisi las",en:"welding position classification",cat:"Welding"},
{jp:"溶接欠陥防止",romaji:"yousetsu kekkan boushi",id:"pencegahan cacat las",en:"weld defect prevention",cat:"Welding"},
{jp:"溶接条件設定",romaji:"yousetsu jouken settei",id:"pengaturan kondisi las",en:"welding condition setting",cat:"Welding"},
{jp:"溶接後処理",romaji:"yousetsu go shori",id:"perlakuan setelah las",en:"post-weld treatment",cat:"Welding"},
{jp:"溶接準備作業",romaji:"yousetsu junbi sagyou",id:"pekerjaan persiapan las",en:"welding preparation work",cat:"Welding"},
{jp:"溶接技能",romaji:"yousetsu ginou",id:"keahlian mengelas",en:"welding skill",cat:"Welding"},

/* ===== Material ===== */
{jp:"鋼板",romaji:"kouban",id:"plat baja",en:"steel plate",cat:"Material"},
{jp:"材料ロット",romaji:"zairyou rotto",id:"lot material",en:"material lot",cat:"Material"},
{jp:"材料検査",romaji:"zairyou kensa",id:"inspeksi material",en:"material inspection",cat:"Material"},
{jp:"材料表面",romaji:"zairyou hyoumen",id:"permukaan material",en:"material surface",cat:"Material"},
{jp:"材料状態",romaji:"zairyou joutai",id:"kondisi material",en:"material condition",cat:"Material"},
{jp:"材料寸法",romaji:"zairyou sunpou",id:"dimensi material",en:"material dimension",cat:"Material"},
{jp:"材料重量",romaji:"zairyou juuryou",id:"berat material",en:"material weight",cat:"Material"},
{jp:"材料形状",romaji:"zairyou keijou",id:"bentuk material",en:"material shape",cat:"Material"},
{jp:"材料管理",romaji:"zairyou kanri",id:"manajemen material",en:"material management",cat:"Material"},
{jp:"材料選定",romaji:"zairyou sentei",id:"pemilihan material",en:"material selection",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接制御装置",romaji:"yousetsu seigyo souchi",id:"alat kontrol pengelasan",en:"welding control device",cat:"Equipment"},
{jp:"溶接冷却装置",romaji:"yousetsu reikyaku souchi",id:"alat pendingin las",en:"welding cooling unit",cat:"Equipment"},
{jp:"機器設定",romaji:"kiki settei",id:"pengaturan mesin",en:"equipment setting",cat:"Equipment"},
{jp:"装置起動",romaji:"souchi kidou",id:"menyalakan alat",en:"equipment startup",cat:"Equipment"},
{jp:"装置停止操作",romaji:"souchi teishi sousa",id:"operasi penghentian alat",en:"equipment stop operation",cat:"Equipment"},
{jp:"機器異音",romaji:"kiki ion",id:"suara tidak normal mesin",en:"abnormal machine noise",cat:"Equipment"},
{jp:"機器温度",romaji:"kiki ondo",id:"suhu mesin",en:"equipment temperature",cat:"Equipment"},
{jp:"装置警告",romaji:"souchi keikoku",id:"peringatan alat",en:"equipment warning",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査工程",romaji:"kensa koutei",id:"tahap inspeksi",en:"inspection process",cat:"Inspection"},
{jp:"検査記録表",romaji:"kensa kirokuhyou",id:"lembar catatan inspeksi",en:"inspection record sheet",cat:"Inspection"},
{jp:"測定誤差",romaji:"sokutei gosa",id:"kesalahan ukur",en:"measurement error",cat:"Inspection"},
{jp:"検査基準書",romaji:"kensa kijunsho",id:"dokumen standar inspeksi",en:"inspection standard document",cat:"Inspection"},
{jp:"検査判定者",romaji:"kensa hanteisha",id:"petugas penilai",en:"inspection judge",cat:"Inspection"},
{jp:"検査履歴",romaji:"kensa rireki",id:"riwayat inspeksi",en:"inspection history",cat:"Inspection"},
{jp:"検査合格品",romaji:"kensa goukakuhin",id:"produk lolos inspeksi",en:"approved product",cat:"Inspection"},
{jp:"検査不合格品",romaji:"kensa fugoukakuhin",id:"produk gagal inspeksi",en:"rejected product",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接不完全",romaji:"yousetsu fukanzen",id:"pengelasan tidak sempurna",en:"incomplete welding",cat:"Defect"},
{jp:"外観異常",romaji:"gaikan ijou",id:"kelainan tampilan",en:"appearance abnormality",cat:"Defect"},
{jp:"溶接凹凸",romaji:"yousetsu outotsu",id:"las tidak rata",en:"uneven weld surface",cat:"Defect"},
{jp:"欠陥発生",romaji:"kekkan hassei",id:"terjadi cacat",en:"defect occurrence",cat:"Defect"},
{jp:"再溶接",romaji:"sai yousetsu",id:"pengelasan ulang",en:"re-welding",cat:"Defect"},
{jp:"不具合箇所",romaji:"fuguai kasho",id:"bagian bermasalah",en:"problem area",cat:"Defect"},
{jp:"品質低下",romaji:"hinshitsu teika",id:"penurunan kualitas",en:"quality deterioration",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全対策",romaji:"anzen taisaku",id:"tindakan keselamatan",en:"safety measures",cat:"Safety"},
{jp:"作業前点検",romaji:"sagyou mae tenken",id:"pemeriksaan sebelum kerja",en:"pre-work inspection",cat:"Safety"},
{jp:"保護手順",romaji:"hogo tejun",id:"prosedur perlindungan",en:"protection procedure",cat:"Safety"},
{jp:"安全基準",romaji:"anzen kijun",id:"standar keselamatan",en:"safety standard",cat:"Safety"},
{jp:"危険表示",romaji:"kiken hyouji",id:"tanda bahaya",en:"danger sign",cat:"Safety"},
{jp:"安全通路",romaji:"anzen tsuuro",id:"jalur aman",en:"safety passage",cat:"Safety"},
{jp:"作業環境",romaji:"sagyou kankyou",id:"lingkungan kerja",en:"work environment",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接ペンチ",romaji:"yousetsu penchi",id:"tang las",en:"welding pliers",cat:"Tools"},
{jp:"電動グラインダー",romaji:"dendou guraindaa",id:"gerinda listrik",en:"electric grinder",cat:"Tools"},
{jp:"切断ディスク",romaji:"setsudan disuku",id:"cakram potong",en:"cutting disc",cat:"Tools"},
{jp:"測定スケール",romaji:"sokutei sukeeru",id:"skala ukur",en:"measuring scale",cat:"Tools"},
{jp:"工具管理",romaji:"kougu kanri",id:"manajemen alat",en:"tool management",cat:"Tools"},
{jp:"工具使用",romaji:"kougu shiyou",id:"penggunaan alat",en:"tool usage",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程計画",romaji:"koutei keikaku",id:"perencanaan proses",en:"process planning",cat:"Process"},
{jp:"工程調整",romaji:"koutei chousei",id:"penyesuaian proses",en:"process adjustment",cat:"Process"},
{jp:"作業割当",romaji:"sagyou wariate",id:"pembagian tugas",en:"work assignment",cat:"Process"},
{jp:"作業指示書",romaji:"sagyou shijisho",id:"lembar instruksi kerja",en:"work instruction sheet",cat:"Process"},
{jp:"作業実績",romaji:"sagyou jisseki",id:"realisasi kerja",en:"work performance",cat:"Process"},
{jp:"工程完了",romaji:"koutei kanryou",id:"proses selesai",en:"process completed",cat:"Process"},
{jp:"作業評価",romaji:"sagyou hyouka",id:"evaluasi kerja",en:"work evaluation",cat:"Process"},

 /* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接電流値",romaji:"yousetsu denryuu chi",id:"nilai arus las",en:"welding current value",cat:"Welding"},
{jp:"溶接電圧値",romaji:"yousetsu denatsu chi",id:"nilai tegangan las",en:"welding voltage value",cat:"Welding"},
{jp:"溶接速度設定",romaji:"yousetsu sokudo settei",id:"pengaturan kecepatan las",en:"welding speed setting",cat:"Welding"},
{jp:"溶接入熱",romaji:"yousetsu nyuunetsu",id:"masukan panas las",en:"welding heat input",cat:"Welding"},
{jp:"溶接姿勢記号",romaji:"yousetsu shisei kigou",id:"simbol posisi las",en:"welding position symbol",cat:"Welding"},
{jp:"溶接施工法",romaji:"yousetsu sekouhou",id:"metode pelaksanaan las",en:"welding procedure",cat:"Welding"},
{jp:"溶接施工条件",romaji:"yousetsu sekou jouken",id:"kondisi pelaksanaan las",en:"welding procedure condition",cat:"Welding"},
{jp:"溶接作業者",romaji:"yousetsu sagyousha",id:"operator las",en:"welding operator",cat:"Welding"},
{jp:"溶接資格",romaji:"yousetsu shikaku",id:"sertifikasi las",en:"welding qualification",cat:"Welding"},
{jp:"溶接教育",romaji:"yousetsu kyouiku",id:"pelatihan pengelasan",en:"welding training",cat:"Welding"},

/* ===== Material ===== */
{jp:"材料保管",romaji:"zairyou hokan",id:"penyimpanan material",en:"material storage",cat:"Material"},
{jp:"材料搬入",romaji:"zairyou hanyuu",id:"material masuk",en:"material receiving",cat:"Material"},
{jp:"材料搬出",romaji:"zairyou hanshutsu",id:"material keluar",en:"material dispatch",cat:"Material"},
{jp:"材料表示",romaji:"zairyou hyouji",id:"penandaan material",en:"material marking",cat:"Material"},
{jp:"材料汚染",romaji:"zairyou osen",id:"kontaminasi material",en:"material contamination",cat:"Material"},
{jp:"材料劣化",romaji:"zairyou rekka",id:"degradasi material",en:"material degradation",cat:"Material"},
{jp:"材料温度",romaji:"zairyou ondo",id:"suhu material",en:"material temperature",cat:"Material"},
{jp:"材料識別",romaji:"zairyou shikibetsu",id:"identifikasi material",en:"material identification",cat:"Material"},
{jp:"材料規格書",romaji:"zairyou kikakusho",id:"dokumen spesifikasi material",en:"material specification sheet",cat:"Material"},
{jp:"材料不適合",romaji:"zairyou futekigou",id:"material tidak sesuai",en:"material nonconformity",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接電流制御",romaji:"yousetsu denryuu seigyo",id:"kontrol arus las",en:"welding current control",cat:"Equipment"},
{jp:"溶接電圧制御",romaji:"yousetsu denatsu seigyo",id:"kontrol tegangan las",en:"welding voltage control",cat:"Equipment"},
{jp:"装置校正",romaji:"souchi kousei",id:"kalibrasi alat",en:"equipment calibration",cat:"Equipment"},
{jp:"装置清掃",romaji:"souchi seisou",id:"pembersihan alat",en:"equipment cleaning",cat:"Equipment"},
{jp:"機器寿命",romaji:"kiki jumyou",id:"umur mesin",en:"equipment lifespan",cat:"Equipment"},
{jp:"機器負荷",romaji:"kiki fuka",id:"beban mesin",en:"equipment load",cat:"Equipment"},
{jp:"機器異常停止",romaji:"kiki ijou teishi",id:"mesin berhenti abnormal",en:"abnormal equipment stop",cat:"Equipment"},
{jp:"装置復旧",romaji:"souchi fukkyuu",id:"pemulihan alat",en:"equipment recovery",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査計画",romaji:"kensa keikaku",id:"rencana inspeksi",en:"inspection plan",cat:"Inspection"},
{jp:"検査実施",romaji:"kensa jisshi",id:"pelaksanaan inspeksi",en:"inspection execution",cat:"Inspection"},
{jp:"測定結果",romaji:"sokutei kekka",id:"hasil pengukuran",en:"measurement result",cat:"Inspection"},
{jp:"検査承認",romaji:"kensa shounin",id:"persetujuan inspeksi",en:"inspection approval",cat:"Inspection"},
{jp:"検査是正",romaji:"kensa zeisei",id:"perbaikan hasil inspeksi",en:"inspection correction",cat:"Inspection"},
{jp:"検査報告書",romaji:"kensa houkokusho",id:"laporan inspeksi",en:"inspection report",cat:"Inspection"},
{jp:"検査保留",romaji:"kensa horyuu",id:"inspeksi ditunda",en:"inspection on hold",cat:"Inspection"},
{jp:"検査終了",romaji:"kensa shuuryou",id:"akhir inspeksi",en:"inspection finished",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接表面不良",romaji:"yousetsu hyoumen furyou",id:"cacat permukaan las",en:"weld surface defect",cat:"Defect"},
{jp:"溶接内部欠陥",romaji:"yousetsu naibu kekkan",id:"cacat internal las",en:"internal weld defect",cat:"Defect"},
{jp:"溶接焼け",romaji:"yousetsu yake",id:"bekas panas las",en:"weld burn mark",cat:"Defect"},
{jp:"溶接欠落",romaji:"yousetsu ketsuraku",id:"bagian las hilang",en:"missing weld",cat:"Defect"},
{jp:"溶接偏肉",romaji:"yousetsu henniku",id:"ketebalan las tidak merata",en:"uneven weld thickness",cat:"Defect"},
{jp:"外観損傷",romaji:"gaikan sonshou",id:"kerusakan tampilan",en:"appearance damage",cat:"Defect"},
{jp:"品質異常",romaji:"hinshitsu ijou",id:"abnormal kualitas",en:"quality abnormality",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"作業安全確認",romaji:"sagyou anzen kakunin",id:"cek keselamatan kerja",en:"work safety confirmation",cat:"Safety"},
{jp:"保護具着用",romaji:"hogogu chakuyou",id:"wajib APD",en:"protective equipment required",cat:"Safety"},
{jp:"感電注意",romaji:"kanden chuui",id:"awas sengatan listrik",en:"electric shock warning",cat:"Safety"},
{jp:"高温注意表示",romaji:"kouon chuui hyouji",id:"peringatan suhu tinggi",en:"high temperature warning sign",cat:"Safety"},
{jp:"作業区域区分",romaji:"sagyou kuiki kubun",id:"pembagian area kerja",en:"work area zoning",cat:"Safety"},
{jp:"保護柵設置",romaji:"bougosaku setchi",id:"pemasangan pagar pengaman",en:"safety fence installation",cat:"Safety"},
{jp:"安全管理者",romaji:"anzen kanrisha",id:"petugas K3",en:"safety officer",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接トング",romaji:"yousetsu tongu",id:"penjepit las",en:"welding tongs",cat:"Tools"},
{jp:"温度計",romaji:"ondokei",id:"termometer",en:"thermometer",cat:"Tools"},
{jp:"圧力計測器",romaji:"atsuryoku keisokuki",id:"alat ukur tekanan",en:"pressure measuring device",cat:"Tools"},
{jp:"工具校正",romaji:"kougu kousei",id:"kalibrasi alat",en:"tool calibration",cat:"Tools"},
{jp:"工具清掃",romaji:"kougu seisou",id:"pembersihan alat",en:"tool cleaning",cat:"Tools"},
{jp:"工具交換",romaji:"kougu koukan",id:"penggantian alat",en:"tool replacement",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程開始",romaji:"koutei kaishi",id:"awal proses",en:"process start",cat:"Process"},
{jp:"工程停止",romaji:"koutei teishi",id:"hentikan proses",en:"process stop",cat:"Process"},
{jp:"工程再開",romaji:"koutei saikai",id:"lanjutkan proses",en:"process restart",cat:"Process"},
{jp:"作業順守",romaji:"sagyou junshu",id:"kepatuhan kerja",en:"work compliance",cat:"Process"},
{jp:"工程評価",romaji:"koutei hyouka",id:"evaluasi proses",en:"process evaluation",cat:"Process"},
{jp:"工程改善提案",romaji:"koutei kaizen teian",id:"usulan perbaikan proses",en:"process improvement proposal",cat:"Process"},
{jp:"作業完了報告",romaji:"sagyou kanryou houkoku",id:"laporan selesai kerja",en:"work completion report",cat:"Process"},
  
/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接電流調整",romaji:"yousetsu denryuu chousei",id:"penyesuaian arus las",en:"welding current adjustment",cat:"Welding"},
{jp:"溶接電圧調整",romaji:"yousetsu denatsu chousei",id:"penyesuaian tegangan las",en:"welding voltage adjustment",cat:"Welding"},
{jp:"溶接トラブル",romaji:"yousetsu toraburu",id:"masalah pengelasan",en:"welding trouble",cat:"Welding"},
{jp:"溶接条件確認",romaji:"yousetsu jouken kakunin",id:"cek kondisi las",en:"welding condition check",cat:"Welding"},
{jp:"溶接開始確認",romaji:"yousetsu kaishi kakunin",id:"konfirmasi mulai las",en:"welding start confirmation",cat:"Welding"},
{jp:"溶接終了確認",romaji:"yousetsu shuuryou kakunin",id:"konfirmasi selesai las",en:"welding end confirmation",cat:"Welding"},
{jp:"溶接作業時間",romaji:"yousetsu sagyou jikan",id:"waktu kerja las",en:"welding working time",cat:"Welding"},
{jp:"溶接品質確認",romaji:"yousetsu hinshitsu kakunin",id:"cek kualitas las",en:"welding quality check",cat:"Welding"},
{jp:"溶接技能評価",romaji:"yousetsu ginou hyouka",id:"evaluasi skill las",en:"welding skill evaluation",cat:"Welding"},
{jp:"溶接作業指示",romaji:"yousetsu sagyou shiji",id:"instruksi kerja las",en:"welding work instruction",cat:"Welding"},

/* ===== Material ===== */
{jp:"材料受入検査",romaji:"zairyou ukeire kensa",id:"inspeksi material masuk",en:"incoming material inspection",cat:"Material"},
{jp:"材料保管場所",romaji:"zairyou hokan basho",id:"lokasi penyimpanan material",en:"material storage location",cat:"Material"},
{jp:"材料移動",romaji:"zairyou idou",id:"pemindahan material",en:"material movement",cat:"Material"},
{jp:"材料在庫",romaji:"zairyou zaiko",id:"stok material",en:"material inventory",cat:"Material"},
{jp:"材料残量",romaji:"zairyou zanryou",id:"sisa material",en:"remaining material",cat:"Material"},
{jp:"材料使用量",romaji:"zairyou shiyouryou",id:"jumlah pemakaian material",en:"material consumption",cat:"Material"},
{jp:"材料発注",romaji:"zairyou hatchuu",id:"pemesanan material",en:"material ordering",cat:"Material"},
{jp:"材料受払",romaji:"zairyou ukeharai",id:"keluar masuk material",en:"material issue/receipt",cat:"Material"},
{jp:"材料表示ラベル",romaji:"zairyou hyouji raberu",id:"label material",en:"material label",cat:"Material"},
{jp:"材料状態確認",romaji:"zairyou joutai kakunin",id:"cek kondisi material",en:"material condition check",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接装置設定",romaji:"yousetsu souchi settei",id:"pengaturan alat las",en:"welding equipment setup",cat:"Equipment"},
{jp:"溶接装置点検",romaji:"yousetsu souchi tenken",id:"pemeriksaan alat las",en:"welding equipment inspection",cat:"Equipment"},
{jp:"溶接装置故障",romaji:"yousetsu souchi koshou",id:"kerusakan alat las",en:"welding equipment failure",cat:"Equipment"},
{jp:"溶接装置復旧",romaji:"yousetsu souchi fukkyuu",id:"pemulihan alat las",en:"welding equipment recovery",cat:"Equipment"},
{jp:"装置稼働",romaji:"souchi kadou",id:"operasi mesin",en:"equipment operation",cat:"Equipment"},
{jp:"装置停止",romaji:"souchi teishi",id:"penghentian alat",en:"equipment stop",cat:"Equipment"},
{jp:"装置警報",romaji:"souchi keihou",id:"alarm mesin",en:"equipment alarm",cat:"Equipment"},
{jp:"装置表示",romaji:"souchi hyouji",id:"tampilan mesin",en:"equipment display",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査準備",romaji:"kensa junbi",id:"persiapan inspeksi",en:"inspection preparation",cat:"Inspection"},
{jp:"検査実績",romaji:"kensa jisseki",id:"realisasi inspeksi",en:"inspection record result",cat:"Inspection"},
{jp:"検査進捗",romaji:"kensa shinchoku",id:"progress inspeksi",en:"inspection progress",cat:"Inspection"},
{jp:"検査指示",romaji:"kensa shiji",id:"instruksi inspeksi",en:"inspection instruction",cat:"Inspection"},
{jp:"検査不具合",romaji:"kensa fuguai",id:"masalah inspeksi",en:"inspection issue",cat:"Inspection"},
{jp:"検査改善",romaji:"kensa kaizen",id:"perbaikan inspeksi",en:"inspection improvement",cat:"Inspection"},
{jp:"検査報告",romaji:"kensa houkoku",id:"pelaporan inspeksi",en:"inspection reporting",cat:"Inspection"},
{jp:"検査完了報告",romaji:"kensa kanryou houkoku",id:"laporan selesai inspeksi",en:"inspection completion report",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接不具合",romaji:"yousetsu fuguai",id:"masalah las",en:"welding problem",cat:"Defect"},
{jp:"溶接欠陥箇所",romaji:"yousetsu kekkan kasho",id:"bagian cacat las",en:"weld defect area",cat:"Defect"},
{jp:"溶接品質不良",romaji:"yousetsu hinshitsu furyou",id:"kualitas las buruk",en:"poor weld quality",cat:"Defect"},
{jp:"補修溶接",romaji:"hoshuu yousetsu",id:"pengelasan perbaikan",en:"repair welding",cat:"Defect"},
{jp:"手直し溶接",romaji:"tenaoshi yousetsu",id:"las perbaikan manual",en:"touch-up welding",cat:"Defect"},
{jp:"不良発生",romaji:"furyou hassei",id:"terjadi cacat",en:"defect occurrence",cat:"Defect"},
{jp:"不良対策",romaji:"furyou taisaku",id:"tindakan cacat",en:"defect countermeasure",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全作業",romaji:"anzen sagyou",id:"kerja aman",en:"safe working",cat:"Safety"},
{jp:"作業前安全確認",romaji:"sagyou mae anzen kakunin",id:"cek keselamatan sebelum kerja",en:"pre-work safety check",cat:"Safety"},
{jp:"安全注意事項",romaji:"anzen chuui jikou",id:"hal yang perlu diperhatikan",en:"safety precautions",cat:"Safety"},
{jp:"保護具点検",romaji:"hogogu tenken",id:"pemeriksaan APD",en:"PPE inspection",cat:"Safety"},
{jp:"作業禁止",romaji:"sagyou kinshi",id:"dilarang bekerja",en:"work prohibited",cat:"Safety"},
{jp:"非常停止",romaji:"hijou teishi",id:"henti darurat",en:"emergency stop",cat:"Safety"},
{jp:"安全報告",romaji:"anzen houkoku",id:"laporan keselamatan",en:"safety report",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接ブラシ",romaji:"yousetsu burashi",id:"sikat las",en:"welding brush",cat:"Tools"},
{jp:"溶接スパナ",romaji:"yousetsu supana",id:"kunci pas las",en:"welding spanner",cat:"Tools"},
{jp:"測定治具",romaji:"sokutei jigu",id:"jig ukur",en:"measuring jig",cat:"Tools"},
{jp:"工具点検表",romaji:"kougu tenkenhyou",id:"lembar cek alat",en:"tool inspection sheet",cat:"Tools"},
{jp:"工具配置",romaji:"kougu haichi",id:"penataan alat",en:"tool arrangement",cat:"Tools"},
{jp:"工具返却",romaji:"kougu henkyaku",id:"pengembalian alat",en:"tool return",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程監視",romaji:"koutei kanshi",id:"pemantauan proses",en:"process monitoring",cat:"Process"},
{jp:"工程異常",romaji:"koutei ijou",id:"abnormal proses",en:"process abnormality",cat:"Process"},
{jp:"工程是正",romaji:"koutei zeisei",id:"koreksi proses",en:"process correction",cat:"Process"},
{jp:"工程再評価",romaji:"koutei sai hyouka",id:"evaluasi ulang proses",en:"process re-evaluation",cat:"Process"},
{jp:"作業改善",romaji:"sagyou kaizen",id:"perbaikan kerja",en:"work improvement",cat:"Process"},
{jp:"作業標準書",romaji:"sagyou hyoujunsho",id:"dokumen standar kerja",en:"work standard document",cat:"Process"},
{jp:"作業完了連絡",romaji:"sagyou kanryou renraku",id:"pemberitahuan selesai kerja",en:"work completion notice",cat:"Process"},
   
 /* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接計画",romaji:"yousetsu keikaku",id:"rencana pengelasan",en:"welding plan",cat:"Welding"},
{jp:"溶接作業標準",romaji:"yousetsu sagyou hyoujun",id:"standar kerja las",en:"welding work standard",cat:"Welding"},
{jp:"溶接線確認",romaji:"yousetsu sen kakunin",id:"cek garis las",en:"weld line check",cat:"Welding"},
{jp:"溶接前処理",romaji:"yousetsu mae shori",id:"perlakuan sebelum las",en:"pre-weld treatment",cat:"Welding"},
{jp:"溶接後検査",romaji:"yousetsu go kensa",id:"inspeksi setelah las",en:"post-weld inspection",cat:"Welding"},
{jp:"溶接治具使用",romaji:"yousetsu jigu shiyou",id:"penggunaan jig las",en:"use of welding jig",cat:"Welding"},
{jp:"溶接品質管理",romaji:"yousetsu hinshitsu kanri",id:"kontrol kualitas las",en:"welding quality control",cat:"Welding"},
{jp:"溶接記録",romaji:"yousetsu kiroku",id:"catatan pengelasan",en:"welding record",cat:"Welding"},
{jp:"溶接条件逸脱",romaji:"yousetsu jouken itsudatsu",id:"penyimpangan kondisi las",en:"welding condition deviation",cat:"Welding"},
{jp:"溶接是正",romaji:"yousetsu zeisei",id:"koreksi pengelasan",en:"welding correction",cat:"Welding"},

/* ===== Material ===== */
{jp:"材料入庫",romaji:"zairyou nyuuko",id:"material masuk gudang",en:"material warehousing",cat:"Material"},
{jp:"材料出庫",romaji:"zairyou shukko",id:"material keluar gudang",en:"material release",cat:"Material"},
{jp:"材料保護",romaji:"zairyou hogo",id:"perlindungan material",en:"material protection",cat:"Material"},
{jp:"材料表面状態",romaji:"zairyou hyoumen joutai",id:"kondisi permukaan material",en:"material surface condition",cat:"Material"},
{jp:"材料切断",romaji:"zairyou setsudan",id:"pemotongan material",en:"material cutting",cat:"Material"},
{jp:"材料曲げ",romaji:"zairyou mage",id:"pembengkokan material",en:"material bending",cat:"Material"},
{jp:"材料成形",romaji:"zairyou seikei",id:"pembentukan material",en:"material forming",cat:"Material"},
{jp:"材料加工前",romaji:"zairyou kakou mae",id:"sebelum proses material",en:"before material processing",cat:"Material"},
{jp:"材料加工後",romaji:"zairyou kakou go",id:"setelah proses material",en:"after material processing",cat:"Material"},
{jp:"材料管理番号",romaji:"zairyou kanri bangou",id:"nomor kontrol material",en:"material control number",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接機起動",romaji:"yousetsuki kidou",id:"menyalakan mesin las",en:"start welding machine",cat:"Equipment"},
{jp:"溶接機停止",romaji:"yousetsuki teishi",id:"mematikan mesin las",en:"stop welding machine",cat:"Equipment"},
{jp:"溶接機設定値",romaji:"yousetsuki settei chi",id:"nilai set mesin las",en:"welding machine set value",cat:"Equipment"},
{jp:"溶接機点検表",romaji:"yousetsuki tenkenhyou",id:"cek list mesin las",en:"welding machine checklist",cat:"Equipment"},
{jp:"溶接機異常",romaji:"yousetsuki ijou",id:"abnormal mesin las",en:"welding machine abnormality",cat:"Equipment"},
{jp:"設備稼働率",romaji:"setsubi kadouritsu",id:"tingkat utilisasi mesin",en:"equipment utilization rate",cat:"Equipment"},
{jp:"設備停止時間",romaji:"setsubi teishi jikan",id:"waktu berhenti mesin",en:"equipment downtime",cat:"Equipment"},
{jp:"設備保全",romaji:"setsubi hozen",id:"pemeliharaan mesin",en:"equipment maintenance",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査立会",romaji:"kensa tachiai",id:"hadir saat inspeksi",en:"inspection attendance",cat:"Inspection"},
{jp:"検査証跡",romaji:"kensa shouseki",id:"jejak inspeksi",en:"inspection traceability",cat:"Inspection"},
{jp:"検査対象品",romaji:"kensa taishouhin",id:"produk yang diperiksa",en:"inspection target product",cat:"Inspection"},
{jp:"検査条件",romaji:"kensa jouken",id:"kondisi inspeksi",en:"inspection condition",cat:"Inspection"},
{jp:"検査是正処置",romaji:"kensa zeisei shochi",id:"tindakan korektif inspeksi",en:"inspection corrective action",cat:"Inspection"},
{jp:"検査完了承認",romaji:"kensa kanryou shounin",id:"persetujuan selesai inspeksi",en:"inspection completion approval",cat:"Inspection"},
{jp:"検査保管",romaji:"kensa hokan",id:"penyimpanan hasil inspeksi",en:"inspection record storage",cat:"Inspection"},
{jp:"検査引継",romaji:"kensa hikitsugi",id:"serah terima inspeksi",en:"inspection handover",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接欠陥原因",romaji:"yousetsu kekkan genin",id:"penyebab cacat las",en:"cause of weld defect",cat:"Defect"},
{jp:"溶接欠陥対策",romaji:"yousetsu kekkan taisaku",id:"pencegahan cacat las",en:"weld defect countermeasure",cat:"Defect"},
{jp:"不良解析",romaji:"furyou kaiseki",id:"analisa cacat",en:"defect analysis",cat:"Defect"},
{jp:"不良分類",romaji:"furyou bunrui",id:"klasifikasi cacat",en:"defect classification",cat:"Defect"},
{jp:"外観検出",romaji:"gaikan kenshutsu",id:"deteksi visual",en:"visual detection",cat:"Defect"},
{jp:"再発防止",romaji:"saihatsu boushi",id:"pencegahan terulang",en:"recurrence prevention",cat:"Defect"},
{jp:"品質不安定",romaji:"hinshitsu fuantei",id:"kualitas tidak stabil",en:"unstable quality",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全巡回",romaji:"anzen junkai",id:"patroli keselamatan",en:"safety patrol",cat:"Safety"},
{jp:"作業安全基準",romaji:"sagyou anzen kijun",id:"standar kerja aman",en:"work safety standard",cat:"Safety"},
{jp:"危険予知",romaji:"kiken yochi",id:"prediksi bahaya",en:"hazard prediction",cat:"Safety"},
{jp:"作業前ミーティング",romaji:"sagyou mae miitingu",id:"briefing sebelum kerja",en:"pre-work meeting",cat:"Safety"},
{jp:"安全掲示",romaji:"anzen keiji",id:"papan informasi keselamatan",en:"safety notice board",cat:"Safety"},
{jp:"安全遵守",romaji:"anzen junshu",id:"kepatuhan keselamatan",en:"safety compliance",cat:"Safety"},
{jp:"安全改善",romaji:"anzen kaizen",id:"perbaikan keselamatan",en:"safety improvement",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接クランプ",romaji:"yousetsu kuranpu",id:"klem las",en:"welding clamp",cat:"Tools"},
{jp:"溶接治具点検",romaji:"yousetsu jigu tenken",id:"cek jig las",en:"welding jig inspection",cat:"Tools"},
{jp:"測定器保管",romaji:"sokuteiki hokan",id:"penyimpanan alat ukur",en:"measuring tool storage",cat:"Tools"},
{jp:"工具使用記録",romaji:"kougu shiyou kiroku",id:"catatan penggunaan alat",en:"tool usage record",cat:"Tools"},
{jp:"工具破損",romaji:"kougu hason",id:"kerusakan alat",en:"tool damage",cat:"Tools"},
{jp:"工具補充",romaji:"kougu hojū",id:"penambahan alat",en:"tool replenishment",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程計測",romaji:"koutei keisoku",id:"pengukuran proses",en:"process measurement",cat:"Process"},
{jp:"工程確認記録",romaji:"koutei kakunin kiroku",id:"catatan cek proses",en:"process check record",cat:"Process"},
{jp:"作業分担",romaji:"sagyou buntan",id:"pembagian pekerjaan",en:"work allocation",cat:"Process"},
{jp:"工程最適化",romaji:"koutei saiteki ka",id:"optimasi proses",en:"process optimization",cat:"Process"},
{jp:"作業効率",romaji:"sagyou kouritsu",id:"efisiensi kerja",en:"work efficiency",cat:"Process"},
{jp:"工程改善効果",romaji:"koutei kaizen kouka",id:"efek perbaikan proses",en:"process improvement effect",cat:"Process"},
{jp:"作業報告書",romaji:"sagyou houkokusho",id:"laporan kerja",en:"work report",cat:"Process"},
   
/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接部位確認",romaji:"yousetsu bui kakunin",id:"cek bagian las",en:"weld area check",cat:"Welding"},
{jp:"溶接施工記録",romaji:"yousetsu sekou kiroku",id:"catatan pelaksanaan las",en:"welding execution record",cat:"Welding"},
{jp:"溶接条件管理",romaji:"yousetsu jouken kanri",id:"manajemen kondisi las",en:"welding condition management",cat:"Welding"},
{jp:"溶接不具合対応",romaji:"yousetsu fuguai taiou",id:"penanganan masalah las",en:"welding trouble 대응",cat:"Welding"},
{jp:"溶接技能試験",romaji:"yousetsu ginou shiken",id:"uji keterampilan las",en:"welding skill test",cat:"Welding"},
{jp:"溶接作業区分",romaji:"yousetsu sagyou kubun",id:"klasifikasi pekerjaan las",en:"welding work classification",cat:"Welding"},
{jp:"溶接管理者",romaji:"yousetsu kanrisha",id:"pengawas pengelasan",en:"welding supervisor",cat:"Welding"},
{jp:"溶接教育資料",romaji:"yousetsu kyouiku shiryou",id:"materi pelatihan las",en:"welding training material",cat:"Welding"},
{jp:"溶接標準書",romaji:"yousetsu hyoujunsho",id:"dokumen standar las",en:"welding standard document",cat:"Welding"},
{jp:"溶接作業許可",romaji:"yousetsu sagyou kyoka",id:"izin kerja las",en:"welding work permit",cat:"Welding"},

/* ===== Material ===== */
{jp:"材料検収",romaji:"zairyou kenshuu",id:"penerimaan material",en:"material acceptance",cat:"Material"},
{jp:"材料区分",romaji:"zairyou kubun",id:"klasifikasi material",en:"material classification",cat:"Material"},
{jp:"材料トレーサビリティ",romaji:"zairyou tore-sabiriti",id:"ketertelusuran material",en:"material traceability",cat:"Material"},
{jp:"材料洗浄",romaji:"zairyou senjou",id:"pencucian material",en:"material cleaning",cat:"Material"},
{jp:"材料乾燥",romaji:"zairyou kansou",id:"pengeringan material",en:"material drying",cat:"Material"},
{jp:"材料保温",romaji:"zairyou hoon",id:"penjagaan suhu material",en:"material temperature keeping",cat:"Material"},
{jp:"材料変形",romaji:"zairyou henkei",id:"deformasi material",en:"material deformation",cat:"Material"},
{jp:"材料破損",romaji:"zairyou hason",id:"kerusakan material",en:"material damage",cat:"Material"},
{jp:"材料不足",romaji:"zairyou busoku",id:"kekurangan material",en:"material shortage",cat:"Material"},
{jp:"材料余剰",romaji:"zairyou yojou",id:"kelebihan material",en:"material surplus",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接機校正",romaji:"yousetsuki kousei",id:"kalibrasi mesin las",en:"welding machine calibration",cat:"Equipment"},
{jp:"溶接機保全",romaji:"yousetsuki hozen",id:"pemeliharaan mesin las",en:"welding machine maintenance",cat:"Equipment"},
{jp:"溶接機点検結果",romaji:"yousetsuki tenken kekka",id:"hasil cek mesin las",en:"welding machine inspection result",cat:"Equipment"},
{jp:"設備更新",romaji:"setsubi koushin",id:"pembaruan mesin",en:"equipment renewal",cat:"Equipment"},
{jp:"設備配置",romaji:"setsubi haichi",id:"penempatan mesin",en:"equipment layout",cat:"Equipment"},
{jp:"設備能力",romaji:"setsubi nouryoku",id:"kapasitas mesin",en:"equipment capacity",cat:"Equipment"},
{jp:"設備異常記録",romaji:"setsubi ijou kiroku",id:"catatan abnormal mesin",en:"equipment abnormal record",cat:"Equipment"},
{jp:"設備稼働計画",romaji:"setsubi kadou keikaku",id:"rencana operasi mesin",en:"equipment operation plan",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査準備完了",romaji:"kensa junbi kanryou",id:"siap inspeksi",en:"inspection ready",cat:"Inspection"},
{jp:"検査実施者",romaji:"kensa jisshisha",id:"pelaksana inspeksi",en:"inspection executor",cat:"Inspection"},
{jp:"検査結果判定",romaji:"kensa kekka hantei",id:"penilaian hasil inspeksi",en:"inspection result judgement",cat:"Inspection"},
{jp:"検査記録管理",romaji:"kensa kiroku kanri",id:"manajemen catatan inspeksi",en:"inspection record management",cat:"Inspection"},
{jp:"検査頻度管理",romaji:"kensa hindo kanri",id:"manajemen frekuensi inspeksi",en:"inspection frequency management",cat:"Inspection"},
{jp:"検査是正完了",romaji:"kensa zeisei kanryou",id:"perbaikan inspeksi selesai",en:"inspection correction completed",cat:"Inspection"},
{jp:"検査承認者",romaji:"kensa shouninsha",id:"penyetujui inspeksi",en:"inspection approver",cat:"Inspection"},
{jp:"検査文書",romaji:"kensa bunsho",id:"dokumen inspeksi",en:"inspection document",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接欠陥記録",romaji:"yousetsu kekkan kiroku",id:"catatan cacat las",en:"weld defect record",cat:"Defect"},
{jp:"溶接欠陥再発",romaji:"yousetsu kekkan sai hatsu",id:"cacat las terulang",en:"recurrent weld defect",cat:"Defect"},
{jp:"不良品隔離",romaji:"furyouhin kakuri",id:"isolasi produk cacat",en:"defective product isolation",cat:"Defect"},
{jp:"不良品識別",romaji:"furyouhin shikibetsu",id:"identifikasi produk cacat",en:"defective product identification",cat:"Defect"},
{jp:"不良是正記録",romaji:"furyou zeisei kiroku",id:"catatan koreksi cacat",en:"defect correction record",cat:"Defect"},
{jp:"品質問題報告",romaji:"hinshitsu mondai houkoku",id:"laporan masalah kualitas",en:"quality issue report",cat:"Defect"},
{jp:"不良傾向",romaji:"furyou keikou",id:"tren cacat",en:"defect trend",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全確認手順",romaji:"anzen kakunin tejun",id:"prosedur cek keselamatan",en:"safety check procedure",cat:"Safety"},
{jp:"作業中安全管理",romaji:"sagyou chuu anzen kanri",id:"pengawasan keselamatan kerja",en:"work safety management",cat:"Safety"},
{jp:"保護具管理",romaji:"hogogu kanri",id:"manajemen APD",en:"PPE management",cat:"Safety"},
{jp:"危険作業",romaji:"kiken sagyou",id:"pekerjaan berbahaya",en:"hazardous work",cat:"Safety"},
{jp:"安全通報",romaji:"anzen tsuuhou",id:"pelaporan keselamatan",en:"safety reporting",cat:"Safety"},
{jp:"作業安全評価",romaji:"sagyou anzen hyouka",id:"evaluasi keselamatan kerja",en:"work safety evaluation",cat:"Safety"},
{jp:"安全管理計画",romaji:"anzen kanri keikaku",id:"rencana manajemen keselamatan",en:"safety management plan",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接定規",romaji:"yousetsu jougi",id:"penggaris las",en:"welding ruler",cat:"Tools"},
{jp:"溶接ゲージ",romaji:"yousetsu geeji",id:"pengukur las",en:"welding gauge",cat:"Tools"},
{jp:"工具使用ルール",romaji:"kougu shiyou ruuru",id:"aturan penggunaan alat",en:"tool usage rules",cat:"Tools"},
{jp:"工具点検実施",romaji:"kougu tenken jisshi",id:"pelaksanaan cek alat",en:"tool inspection execution",cat:"Tools"},
{jp:"工具修理",romaji:"kougu shuuri",id:"perbaikan alat",en:"tool repair",cat:"Tools"},
{jp:"工具廃棄",romaji:"kougu haiki",id:"pembuangan alat",en:"tool disposal",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程監査",romaji:"koutei kansa",id:"audit proses",en:"process audit",cat:"Process"},
{jp:"工程標準化",romaji:"koutei hyoujunka",id:"standarisasi proses",en:"process standardization",cat:"Process"},
{jp:"工程改善活動",romaji:"koutei kaizen katsudou",id:"aktivitas perbaikan proses",en:"process improvement activity",cat:"Process"},
{jp:"作業手配",romaji:"sagyou tehai",id:"penyiapan pekerjaan",en:"work arrangement",cat:"Process"},
{jp:"作業実施記録",romaji:"sagyou jisshi kiroku",id:"catatan pelaksanaan kerja",en:"work execution record",cat:"Process"},
{jp:"工程変更管理",romaji:"koutei henkou kanri",id:"manajemen perubahan proses",en:"process change management",cat:"Process"},
{jp:"作業完了承認",romaji:"sagyou kanryou shounin",id:"persetujuan selesai kerja",en:"work completion approval",cat:"Process"},
   
/* =================================================
   TAMBAHAN 100 KOSAKATA BARU (ANTI DUPLIKAT)
================================================= */

/* ===== Welding ===== */
{jp:"溶接作業計画書",romaji:"yousetsu sagyou keikakusho",id:"dokumen rencana kerja las",en:"welding work plan document",cat:"Welding"},
{jp:"溶接条件標準",romaji:"yousetsu jouken hyoujun",id:"standar kondisi las",en:"welding condition standard",cat:"Welding"},
{jp:"溶接線位置",romaji:"yousetsu sen ichi",id:"posisi garis las",en:"weld line position",cat:"Welding"},
{jp:"溶接前点検",romaji:"yousetsu mae tenken",id:"pemeriksaan sebelum las",en:"pre-welding inspection",cat:"Welding"},
{jp:"溶接後冷却",romaji:"yousetsu go reikyaku",id:"pendinginan setelah las",en:"post-weld cooling",cat:"Welding"},
{jp:"溶接作業記録表",romaji:"yousetsu sagyou kirokuhyou",id:"lembar catatan kerja las",en:"welding work record sheet",cat:"Welding"},
{jp:"溶接欠陥検出",romaji:"yousetsu kekkan kenshutsu",id:"deteksi cacat las",en:"weld defect detection",cat:"Welding"},
{jp:"溶接条件変更",romaji:"yousetsu jouken henkou",id:"perubahan kondisi las",en:"welding condition change",cat:"Welding"},
{jp:"溶接品質基準",romaji:"yousetsu hinshitsu kijun",id:"standar kualitas las",en:"welding quality standard",cat:"Welding"},
{jp:"溶接工程管理",romaji:"yousetsu koutei kanri",id:"manajemen proses las",en:"welding process management",cat:"Welding"},

/* ===== Material ===== */
{jp:"材料管理表",romaji:"zairyou kanrihyou",id:"tabel manajemen material",en:"material management sheet",cat:"Material"},
{jp:"材料受入記録",romaji:"zairyou ukeire kiroku",id:"catatan penerimaan material",en:"material receiving record",cat:"Material"},
{jp:"材料検査記録",romaji:"zairyou kensa kiroku",id:"catatan inspeksi material",en:"material inspection record",cat:"Material"},
{jp:"材料保管期限",romaji:"zairyou hokan kigen",id:"batas waktu simpan material",en:"material storage period",cat:"Material"},
{jp:"材料梱包",romaji:"zairyou konpou",id:"pengemasan material",en:"material packaging",cat:"Material"},
{jp:"材料搬送",romaji:"zairyou hansou",id:"transportasi material",en:"material transport",cat:"Material"},
{jp:"材料開封",romaji:"zairyou kaifuu",id:"pembukaan kemasan material",en:"material unpacking",cat:"Material"},
{jp:"材料切断寸法",romaji:"zairyou setsudan sunpou",id:"ukuran potong material",en:"material cutting dimension",cat:"Material"},
{jp:"材料仮置き",romaji:"zairyou karioki",id:"penempatan sementara material",en:"temporary material placement",cat:"Material"},
{jp:"材料在庫管理",romaji:"zairyou zaiko kanri",id:"manajemen stok material",en:"material inventory management",cat:"Material"},

/* ===== Equipment ===== */
{jp:"溶接装置点検周期",romaji:"yousetsu souchi tenken shuuki",id:"periode cek alat las",en:"welding equipment inspection interval",cat:"Equipment"},
{jp:"溶接装置稼働状況",romaji:"yousetsu souchi kadou joukyou",id:"status operasi alat las",en:"welding equipment operation status",cat:"Equipment"},
{jp:"溶接装置異常表示",romaji:"yousetsu souchi ijou hyouji",id:"indikasi abnormal alat las",en:"welding equipment abnormal indication",cat:"Equipment"},
{jp:"設備点検計画",romaji:"setsubi tenken keikaku",id:"rencana pemeriksaan mesin",en:"equipment inspection plan",cat:"Equipment"},
{jp:"設備保全記録",romaji:"setsubi hozen kiroku",id:"catatan perawatan mesin",en:"equipment maintenance record",cat:"Equipment"},
{jp:"設備停止要因",romaji:"setsubi teishi youin",id:"penyebab berhentinya mesin",en:"equipment stop cause",cat:"Equipment"},
{jp:"設備改善提案",romaji:"setsubi kaizen teian",id:"usulan perbaikan mesin",en:"equipment improvement proposal",cat:"Equipment"},
{jp:"設備点検完了",romaji:"setsubi tenken kanryou",id:"selesai pemeriksaan mesin",en:"equipment inspection completed",cat:"Equipment"},

/* ===== Inspection (QC) ===== */
{jp:"検査準備手順",romaji:"kensa junbi tejun",id:"prosedur persiapan inspeksi",en:"inspection preparation procedure",cat:"Inspection"},
{jp:"検査実施計画",romaji:"kensa jisshi keikaku",id:"rencana pelaksanaan inspeksi",en:"inspection execution plan",cat:"Inspection"},
{jp:"検査基準値",romaji:"kensa kijunchi",id:"nilai standar inspeksi",en:"inspection standard value",cat:"Inspection"},
{jp:"検査合格基準",romaji:"kensa goukaku kijun",id:"kriteria lulus inspeksi",en:"inspection acceptance criteria",cat:"Inspection"},
{jp:"検査結果登録",romaji:"kensa kekka touroku",id:"input hasil inspeksi",en:"inspection result registration",cat:"Inspection"},
{jp:"検査履歴管理",romaji:"kensa rireki kanri",id:"manajemen riwayat inspeksi",en:"inspection history management",cat:"Inspection"},
{jp:"検査是正計画",romaji:"kensa zeisei keikaku",id:"rencana perbaikan inspeksi",en:"inspection corrective plan",cat:"Inspection"},
{jp:"検査最終確認",romaji:"kensa saishuu kakunin",id:"konfirmasi akhir inspeksi",en:"final inspection confirmation",cat:"Inspection"},

/* ===== Defect (NG) ===== */
{jp:"溶接欠陥傾向",romaji:"yousetsu kekkan keikou",id:"tren cacat las",en:"weld defect trend",cat:"Defect"},
{jp:"溶接欠陥分析",romaji:"yousetsu kekkan bunseki",id:"analisis cacat las",en:"weld defect analysis",cat:"Defect"},
{jp:"溶接欠陥是正",romaji:"yousetsu kekkan zeisei",id:"koreksi cacat las",en:"weld defect correction",cat:"Defect"},
{jp:"溶接欠陥対処",romaji:"yousetsu kekkan taisho",id:"penanganan cacat las",en:"weld defect handling",cat:"Defect"},
{jp:"不良品再加工",romaji:"furyouhin saikakou",id:"rework produk cacat",en:"defective product rework",cat:"Defect"},
{jp:"不良品廃棄記録",romaji:"furyouhin haiki kiroku",id:"catatan pembuangan produk cacat",en:"defective product disposal record",cat:"Defect"},
{jp:"品質是正処置",romaji:"hinshitsu zeisei shochi",id:"tindakan korektif kualitas",en:"quality corrective action",cat:"Defect"},

/* ===== Safety (K3) ===== */
{jp:"安全管理体制",romaji:"anzen kanri taisei",id:"sistem manajemen keselamatan",en:"safety management system",cat:"Safety"},
{jp:"作業安全手順書",romaji:"sagyou anzen tejunsho",id:"dokumen prosedur aman",en:"work safety procedure document",cat:"Safety"},
{jp:"危険作業申請",romaji:"kiken sagyou shinsei",id:"permohonan kerja berbahaya",en:"hazardous work application",cat:"Safety"},
{jp:"安全装置点検",romaji:"anzen souchi tenken",id:"pemeriksaan alat keselamatan",en:"safety device inspection",cat:"Safety"},
{jp:"安全記録管理",romaji:"anzen kiroku kanri",id:"manajemen catatan keselamatan",en:"safety record management",cat:"Safety"},
{jp:"作業安全報告",romaji:"sagyou anzen houkoku",id:"laporan keselamatan kerja",en:"work safety report",cat:"Safety"},
{jp:"安全教育計画",romaji:"anzen kyouiku keikaku",id:"rencana pelatihan keselamatan",en:"safety training plan",cat:"Safety"},

/* ===== Tools ===== */
{jp:"溶接治具管理",romaji:"yousetsu jigu kanri",id:"manajemen jig las",en:"welding jig management",cat:"Tools"},
{jp:"工具点検計画",romaji:"kougu tenken keikaku",id:"rencana pemeriksaan alat",en:"tool inspection plan",cat:"Tools"},
{jp:"工具保管場所",romaji:"kougu hokan basho",id:"lokasi penyimpanan alat",en:"tool storage location",cat:"Tools"},
{jp:"工具使用状況",romaji:"kougu shiyou joukyou",id:"status penggunaan alat",en:"tool usage status",cat:"Tools"},
{jp:"工具不足",romaji:"kougu busoku",id:"kekurangan alat",en:"tool shortage",cat:"Tools"},
{jp:"工具発注",romaji:"kougu hatchuu",id:"pemesanan alat",en:"tool ordering",cat:"Tools"},

/* ===== Process ===== */
{jp:"工程管理表",romaji:"koutei kanrihyou",id:"tabel kontrol proses",en:"process control sheet",cat:"Process"},
{jp:"工程進捗管理",romaji:"koutei shinchoku kanri",id:"manajemen progres proses",en:"process progress management",cat:"Process"},
{jp:"作業計画変更",romaji:"sagyou keikaku henkou",id:"perubahan rencana kerja",en:"work plan change",cat:"Process"},
{jp:"作業実施管理",romaji:"sagyou jisshi kanri",id:"manajemen pelaksanaan kerja",en:"work execution management",cat:"Process"},
{jp:"工程レビュー",romaji:"koutei rebyuu",id:"tinjauan proses",en:"process review",cat:"Process"},
{jp:"工程改善記録",romaji:"koutei kaizen kiroku",id:"catatan perbaikan proses",en:"process improvement record",cat:"Process"},
{jp:"作業最終確認",romaji:"sagyou saishuu kakunin",id:"konfirmasi akhir pekerjaan",en:"final work confirmation",cat:"Process"}
  
];
