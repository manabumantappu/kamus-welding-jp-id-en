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
{jp:"作業完了報告",romaji:"sagyou kanryou houkoku",id:"laporan selesai kerja",en:"work completion report",cat:"Process"}
  
   
];
