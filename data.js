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
{jp:"作業最終確認",romaji:"sagyou saishuu kakunin",id:"konfirmasi akhir pekerjaan",en:"final work confirmation",cat:"Process"},

/* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 1 (100)
================================================= */

/* ===== Welding (Advanced) ===== */
{jp:"溶接施工要領書",romaji:"yousetsu sekou youryou sho",id:"dokumen prosedur pengelasan",en:"welding procedure specification",cat:"Welding"},
{jp:"溶接条件管理表",romaji:"yousetsu jouken kanrihyou",id:"tabel kontrol kondisi las",en:"welding condition control sheet",cat:"Welding"},
{jp:"溶接資格認証",romaji:"yousetsu shikaku ninshou",id:"sertifikasi pengelasan",en:"welding qualification certification",cat:"Welding"},
{jp:"溶接技能認定",romaji:"yousetsu ginou nintei",id:"pengakuan keterampilan las",en:"welding skill qualification",cat:"Welding"},
{jp:"溶接歪み対策",romaji:"yousetsu yugami taisaku",id:"pencegahan distorsi las",en:"welding distortion control",cat:"Welding"},
{jp:"溶接入熱管理",romaji:"yousetsu nyuunetsu kanri",id:"kontrol masukan panas las",en:"welding heat input control",cat:"Welding"},
{jp:"溶接記号指示",romaji:"yousetsu kigou shiji",id:"instruksi simbol las",en:"welding symbol instruction",cat:"Welding"},
{jp:"溶接欠陥判定",romaji:"yousetsu kekkan hantei",id:"penilaian cacat las",en:"weld defect judgement",cat:"Welding"},
{jp:"溶接補修基準",romaji:"yousetsu hoshuu kijun",id:"standar perbaikan las",en:"weld repair criteria",cat:"Welding"},
{jp:"溶接最終検査",romaji:"yousetsu saishuu kensa",id:"inspeksi akhir las",en:"final weld inspection",cat:"Welding"},

/* ===== Drawing / Symbol ===== */
{jp:"組立図",romaji:"kumitate zu",id:"gambar perakitan",en:"assembly drawing",cat:"Process"},
{jp:"部品図",romaji:"buhin zu",id:"gambar komponen",en:"part drawing",cat:"Process"},
{jp:"断面図",romaji:"danmen zu",id:"gambar potongan",en:"sectional view",cat:"Process"},
{jp:"公差指示",romaji:"kousa shiji",id:"instruksi toleransi",en:"tolerance indication",cat:"Process"},
{jp:"幾何公差",romaji:"kika kousa",id:"toleransi geometrik",en:"geometric tolerance",cat:"Process"},
{jp:"表面粗さ",romaji:"hyoumen arasa",id:"kekasaran permukaan",en:"surface roughness",cat:"Process"},
{jp:"溶接指示記号",romaji:"yousetsu shiji kigou",id:"simbol instruksi las",en:"welding instruction symbol",cat:"Process"},
{jp:"改訂履歴",romaji:"kaitei rireki",id:"riwayat revisi",en:"revision history",cat:"Process"},

/* ===== QC / ISO / JIS ===== */
{jp:"品質保証",romaji:"hinshitsu hoshou",id:"jaminan mutu",en:"quality assurance",cat:"Inspection"},
{jp:"品質保証体制",romaji:"hinshitsu hoshou taisei",id:"sistem jaminan mutu",en:"quality assurance system",cat:"Inspection"},
{jp:"内部監査",romaji:"naibu kansa",id:"audit internal",en:"internal audit",cat:"Inspection"},
{jp:"是正処置",romaji:"zeisei shochi",id:"tindakan korektif",en:"corrective action",cat:"Inspection"},
{jp:"予防処置",romaji:"yobou shochi",id:"tindakan pencegahan",en:"preventive action",cat:"Inspection"},
{jp:"不適合報告",romaji:"futekigou houkoku",id:"laporan ketidaksesuaian",en:"nonconformity report",cat:"Inspection"},
{jp:"管理基準",romaji:"kanri kijun",id:"standar pengendalian",en:"control standard",cat:"Inspection"},
{jp:"検査証明書",romaji:"kensa shoumeisho",id:"sertifikat inspeksi",en:"inspection certificate",cat:"Inspection"},
{jp:"品質目標",romaji:"hinshitsu mokuhyou",id:"target kualitas",en:"quality objective",cat:"Inspection"},
{jp:"工程監査",romaji:"koutei kansa",id:"audit proses",en:"process audit",cat:"Inspection"},

/* ===== Maintenance / Troubleshooting ===== */
{jp:"予防保全",romaji:"yobou hozen",id:"perawatan pencegahan",en:"preventive maintenance",cat:"Equipment"},
{jp:"定期保全",romaji:"teiki hozen",id:"perawatan berkala",en:"periodic maintenance",cat:"Equipment"},
{jp:"突発故障",romaji:"toppatsu koshou",id:"kerusakan mendadak",en:"sudden failure",cat:"Equipment"},
{jp:"故障原因分析",romaji:"koshou genin bunseki",id:"analisis penyebab kerusakan",en:"failure cause analysis",cat:"Equipment"},
{jp:"復旧作業",romaji:"fukkyuu sagyou",id:"pekerjaan pemulihan",en:"recovery work",cat:"Equipment"},
{jp:"稼働率改善",romaji:"kadouritsu kaizen",id:"peningkatan utilisasi mesin",en:"equipment utilization improvement",cat:"Equipment"},
{jp:"点検周期",romaji:"tenken shuuki",id:"interval pemeriksaan",en:"inspection interval",cat:"Equipment"},
{jp:"保全計画",romaji:"hozen keikaku",id:"rencana perawatan",en:"maintenance plan",cat:"Equipment"},

/* ===== Safety / SOP / Audit ===== */
{jp:"作業標準書",romaji:"sagyou hyoujunsho",id:"dokumen standar kerja",en:"standard operating procedure",cat:"Safety"},
{jp:"危険予知活動",romaji:"kiken yochi katsudou",id:"kegiatan prediksi bahaya",en:"hazard prediction activity",cat:"Safety"},
{jp:"リスク評価",romaji:"risuku hyouka",id:"penilaian risiko",en:"risk assessment",cat:"Safety"},
{jp:"安全監査",romaji:"anzen kansa",id:"audit keselamatan",en:"safety audit",cat:"Safety"},
{jp:"是正要求",romaji:"zeisei youkyuu",id:"permintaan perbaikan",en:"corrective request",cat:"Safety"},
{jp:"安全管理責任者",romaji:"anzen kanri sekininsha",id:"penanggung jawab keselamatan",en:"safety manager",cat:"Safety"},

/* ===== Production / Improvement ===== */
{jp:"量産体制",romaji:"ryousan taisei",id:"sistem produksi massal",en:"mass production system",cat:"Process"},
{jp:"生産計画",romaji:"seisan keikaku",id:"rencana produksi",en:"production planning",cat:"Process"},
{jp:"工程能力",romaji:"koutei nouryoku",id:"kapabilitas proses",en:"process capability",cat:"Process"},
{jp:"標準化",romaji:"hyoujunka",id:"standarisasi",en:"standardization",cat:"Process"},
{jp:"改善提案",romaji:"kaizen teian",id:"usulan perbaikan",en:"improvement proposal",cat:"Process"},
{jp:"継続的改善",romaji:"keizokuteki kaizen",id:"perbaikan berkelanjutan",en:"continuous improvement",cat:"Process"},
   
/* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 2 (100)
================================================= */

/* ===== Welding (Advanced) ===== */
{jp:"溶接施工計画",romaji:"yousetsu sekou keikaku",id:"rencana pelaksanaan pengelasan",en:"welding execution plan",cat:"Welding"},
{jp:"溶接条件承認",romaji:"yousetsu jouken shounin",id:"persetujuan kondisi las",en:"welding condition approval",cat:"Welding"},
{jp:"溶接条件検証",romaji:"yousetsu jouken kenshou",id:"verifikasi kondisi las",en:"welding condition verification",cat:"Welding"},
{jp:"溶接部評価",romaji:"yousetsu bu hyouka",id:"evaluasi bagian las",en:"weld area evaluation",cat:"Welding"},
{jp:"溶接品質保証",romaji:"yousetsu hinshitsu hoshou",id:"jaminan mutu pengelasan",en:"welding quality assurance",cat:"Welding"},
{jp:"溶接補修手順",romaji:"yousetsu hoshuu tejun",id:"prosedur perbaikan las",en:"weld repair procedure",cat:"Welding"},
{jp:"溶接再施工",romaji:"yousetsu saisekou",id:"pengelasan ulang",en:"re-welding execution",cat:"Welding"},
{jp:"溶接施工記録管理",romaji:"yousetsu sekou kiroku kanri",id:"manajemen catatan pengelasan",en:"welding execution record control",cat:"Welding"},
{jp:"溶接技能維持",romaji:"yousetsu ginou iji",id:"pemeliharaan skill las",en:"welding skill maintenance",cat:"Welding"},
{jp:"溶接作業適合性",romaji:"yousetsu sagyou tekigousei",id:"kesesuaian kerja las",en:"welding work conformity",cat:"Welding"},

/* ===== Drawing / Symbol (Advanced) ===== */
{jp:"寸法公差表",romaji:"sunpou kousa hyou",id:"tabel toleransi dimensi",en:"dimensional tolerance table",cat:"Process"},
{jp:"基準面",romaji:"kijun men",id:"bidang acuan",en:"datum surface",cat:"Process"},
{jp:"基準線",romaji:"kijun sen",id:"garis acuan",en:"datum line",cat:"Process"},
{jp:"投影法",romaji:"touei hou",id:"metode proyeksi gambar",en:"projection method",cat:"Process"},
{jp:"縮尺",romaji:"shukusha",id:"skala gambar",en:"drawing scale",cat:"Process"},
{jp:"図面番号",romaji:"zumen bangou",id:"nomor gambar",en:"drawing number",cat:"Process"},
{jp:"承認印",romaji:"shounin in",id:"stempel persetujuan",en:"approval stamp",cat:"Process"},
{jp:"改訂番号",romaji:"kaitei bangou",id:"nomor revisi",en:"revision number",cat:"Process"},

/* ===== QC / ISO / JIS (Advanced) ===== */
{jp:"品質マニュアル",romaji:"hinshitsu manyuaru",id:"manual mutu",en:"quality manual",cat:"Inspection"},
{jp:"文書管理",romaji:"bunsho kanri",id:"pengendalian dokumen",en:"document control",cat:"Inspection"},
{jp:"記録管理",romaji:"kiroku kanri",id:"pengendalian rekaman",en:"record control",cat:"Inspection"},
{jp:"是正予防処置",romaji:"zeisei yobou shochi",id:"tindakan korektif & pencegahan",en:"corrective and preventive action",cat:"Inspection"},
{jp:"品質監査計画",romaji:"hinshitsu kansa keikaku",id:"rencana audit mutu",en:"quality audit plan",cat:"Inspection"},
{jp:"監査指摘事項",romaji:"kansa shiteki jikou",id:"temuan audit",en:"audit finding",cat:"Inspection"},
{jp:"是正完了確認",romaji:"zeisei kanryou kakunin",id:"verifikasi penyelesaian koreksi",en:"corrective completion verification",cat:"Inspection"},
{jp:"品質データ分析",romaji:"hinshitsu deeta bunseki",id:"analisis data kualitas",en:"quality data analysis",cat:"Inspection"},
{jp:"管理図",romaji:"kanrizu",id:"peta kendali",en:"control chart",cat:"Inspection"},
{jp:"工程能力指数",romaji:"koutei nouryoku shisuu",id:"indeks kapabilitas proses",en:"process capability index",cat:"Inspection"},

/* ===== Maintenance / Troubleshooting (Advanced) ===== */
{jp:"予知保全",romaji:"yochi hozen",id:"perawatan prediktif",en:"predictive maintenance",cat:"Equipment"},
{jp:"保全履歴",romaji:"hozen rireki",id:"riwayat perawatan",en:"maintenance history",cat:"Equipment"},
{jp:"異常検知",romaji:"ijou kenchi",id:"deteksi abnormal",en:"abnormality detection",cat:"Equipment"},
{jp:"振動分析",romaji:"shindou bunseki",id:"analisis getaran",en:"vibration analysis",cat:"Equipment"},
{jp:"故障モード",romaji:"koshou moodo",id:"mode kegagalan",en:"failure mode",cat:"Equipment"},
{jp:"保全標準",romaji:"hozen hyoujun",id:"standar perawatan",en:"maintenance standard",cat:"Equipment"},
{jp:"修理完了報告",romaji:"shuuri kanryou houkoku",id:"laporan selesai perbaikan",en:"repair completion report",cat:"Equipment"},
{jp:"設備信頼性",romaji:"setsubi shinraisei",id:"keandalan mesin",en:"equipment reliability",cat:"Equipment"},

/* ===== Safety / SOP / Audit (Advanced) ===== */
{jp:"安全作業手順",romaji:"anzen sagyou tejun",id:"prosedur kerja aman",en:"safe work procedure",cat:"Safety"},
{jp:"危険源特定",romaji:"kiken gen tokutei",id:"identifikasi sumber bahaya",en:"hazard identification",cat:"Safety"},
{jp:"リスク低減措置",romaji:"risuku teigen sochi",id:"langkah pengurangan risiko",en:"risk reduction measure",cat:"Safety"},
{jp:"安全点検記録",romaji:"anzen tenken kiroku",id:"catatan inspeksi keselamatan",en:"safety inspection record",cat:"Safety"},
{jp:"安全監査計画",romaji:"anzen kansa keikaku",id:"rencana audit keselamatan",en:"safety audit plan",cat:"Safety"},
{jp:"是正措置報告",romaji:"zeisei sochi houkoku",id:"laporan tindakan korektif",en:"corrective action report",cat:"Safety"},
{jp:"安全教育実施",romaji:"anzen kyouiku jisshi",id:"pelaksanaan pelatihan keselamatan",en:"safety training implementation",cat:"Safety"},

/* ===== Production / Improvement (Advanced) ===== */
{jp:"生産性向上",romaji:"seisansei koujou",id:"peningkatan produktivitas",en:"productivity improvement",cat:"Process"},
{jp:"ラインバランス",romaji:"rain baransu",id:"keseimbangan lini",en:"line balancing",cat:"Process"},
{jp:"標準作業票",romaji:"hyoujun sagyou hyou",id:"lembar kerja standar",en:"standard work sheet",cat:"Process"},
{jp:"工程改善計画",romaji:"koutei kaizen keikaku",id:"rencana perbaikan proses",en:"process improvement plan",cat:"Process"},
{jp:"作業分析",romaji:"sagyou bunseki",id:"analisis kerja",en:"work analysis",cat:"Process"},
{jp:"生産実績管理",romaji:"seisan jisseki kanri",id:"manajemen realisasi produksi",en:"production performance control",cat:"Process"},
{jp:"標準時間設定",romaji:"hyoujun jikan settei",id:"penetapan waktu standar",en:"standard time setting",cat:"Process"},
{jp:"改善効果測定",romaji:"kaizen kouka sokutei",id:"pengukuran hasil perbaikan",en:"improvement effect measurement",cat:"Process"},

 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 3 (100)
================================================= */

/* ===== Root Cause / Problem Solving ===== */
{jp:"根本原因分析",romaji:"konpon genin bunseki",id:"analisis akar penyebab",en:"root cause analysis",cat:"Inspection"},
{jp:"なぜなぜ分析",romaji:"naze naze bunseki",id:"analisis 5 mengapa",en:"5 why analysis",cat:"Inspection"},
{jp:"特性要因図",romaji:"tokusei youin zu",id:"diagram sebab-akibat",en:"fishbone diagram",cat:"Inspection"},
{jp:"問題定義",romaji:"mondai teigi",id:"pendefinisian masalah",en:"problem definition",cat:"Inspection"},
{jp:"暫定対策",romaji:"zantei taisaku",id:"tindakan sementara",en:"temporary countermeasure",cat:"Inspection"},
{jp:"恒久対策",romaji:"koukyuu taisaku",id:"tindakan permanen",en:"permanent countermeasure",cat:"Inspection"},
{jp:"再発防止策",romaji:"saihatsu boushi saku",id:"langkah pencegahan ulang",en:"recurrence prevention",cat:"Inspection"},
{jp:"効果確認",romaji:"kouka kakunin",id:"verifikasi efektivitas",en:"effectiveness verification",cat:"Inspection"},

/* ===== FMEA / Risk ===== */
{jp:"故障モード影響解析",romaji:"koshou moodo eikyou kaiseki",id:"analisis dampak mode kegagalan",en:"failure mode and effects analysis",cat:"Inspection"},
{jp:"リスク優先数",romaji:"risuku yuusen suu",id:"angka prioritas risiko",en:"risk priority number",cat:"Inspection"},
{jp:"重大度",romaji:"juudodo",id:"tingkat keparahan",en:"severity",cat:"Inspection"},
{jp:"発生頻度",romaji:"hassei hindo",id:"frekuensi kejadian",en:"occurrence",cat:"Inspection"},
{jp:"検出度",romaji:"kenshutsudo",id:"tingkat deteksi",en:"detection",cat:"Inspection"},
{jp:"リスク評価表",romaji:"risuku hyouka hyou",id:"tabel evaluasi risiko",en:"risk assessment table",cat:"Inspection"},
{jp:"リスク低減計画",romaji:"risuku teigen keikaku",id:"rencana pengurangan risiko",en:"risk mitigation plan",cat:"Inspection"},
{jp:"残留リスク",romaji:"zanryuu risuku",id:"risiko tersisa",en:"residual risk",cat:"Inspection"},

/* ===== Control Plan / SPC ===== */
{jp:"管理計画書",romaji:"kanri keikakusho",id:"dokumen rencana pengendalian",en:"control plan",cat:"Inspection"},
{jp:"管理特性",romaji:"kanri tokusei",id:"karakteristik kendali",en:"control characteristic",cat:"Inspection"},
{jp:"測定頻度",romaji:"sokutei hindo",id:"frekuensi pengukuran",en:"measurement frequency",cat:"Inspection"},
{jp:"異常判定基準",romaji:"ijou hantei kijun",id:"kriteria penilaian abnormal",en:"abnormal judgement criteria",cat:"Inspection"},
{jp:"統計的工程管理",romaji:"toukeiteki koutei kanri",id:"pengendalian proses statistik",en:"statistical process control",cat:"Inspection"},
{jp:"管理限界",romaji:"kanri genkai",id:"batas kendali",en:"control limit",cat:"Inspection"},
{jp:"中心線",romaji:"chuushin sen",id:"garis tengah",en:"center line",cat:"Inspection"},
{jp:"傾向管理",romaji:"keikou kanri",id:"manajemen tren",en:"trend control",cat:"Inspection"},

/* ===== TPM / Maintenance ===== */
{jp:"全員参加保全",romaji:"zen-in sanka hozen",id:"perawatan total partisipatif",en:"total productive maintenance",cat:"Equipment"},
{jp:"自主保全",romaji:"jishu hozen",id:"perawatan mandiri",en:"autonomous maintenance",cat:"Equipment"},
{jp:"計画保全",romaji:"keikaku hozen",id:"perawatan terencana",en:"planned maintenance",cat:"Equipment"},
{jp:"初期管理",romaji:"shoki kanri",id:"manajemen tahap awal",en:"early equipment management",cat:"Equipment"},
{jp:"設備総合効率",romaji:"setsubi sougou kouritsu",id:"efektivitas total peralatan",en:"overall equipment effectiveness",cat:"Equipment"},
{jp:"停止ロス",romaji:"teishi rosu",id:"kerugian karena berhenti",en:"downtime loss",cat:"Equipment"},
{jp:"速度ロス",romaji:"sokudo rosu",id:"kerugian kecepatan",en:"speed loss",cat:"Equipment"},
{jp:"不良ロス",romaji:"furyou rosu",id:"kerugian akibat cacat",en:"defect loss",cat:"Equipment"},

/* ===== Safety / Risk Assessment ===== */
{jp:"危険源評価",romaji:"kiken gen hyouka",id:"evaluasi sumber bahaya",en:"hazard evaluation",cat:"Safety"},
{jp:"作業リスク評価",romaji:"sagyou risuku hyouka",id:"penilaian risiko kerja",en:"work risk assessment",cat:"Safety"},
{jp:"リスクマトリクス",romaji:"risuku matorikusu",id:"matriks risiko",en:"risk matrix",cat:"Safety"},
{jp:"安全対策立案",romaji:"anzen taisaku ritsuan",id:"perencanaan tindakan keselamatan",en:"safety countermeasure planning",cat:"Safety"},
{jp:"安全是正処置",romaji:"anzen zeisei shochi",id:"tindakan korektif keselamatan",en:"safety corrective action",cat:"Safety"},
{jp:"安全レビュー",romaji:"anzen rebyuu",id:"tinjauan keselamatan",en:"safety review",cat:"Safety"},
{jp:"作業許可制度",romaji:"sagyou kyoka seido",id:"sistem izin kerja",en:"work permit system",cat:"Safety"},

/* ===== Production / Improvement ===== */
{jp:"工程最適化",romaji:"koutei saiteki ka",id:"optimasi proses",en:"process optimization",cat:"Process"},
{jp:"ムダ排除",romaji:"muda haijo",id:"eliminasi pemborosan",en:"waste elimination",cat:"Process"},
{jp:"ボトルネック",romaji:"botorunekku",id:"titik hambatan",en:"bottleneck",cat:"Process"},
{jp:"タクトタイム",romaji:"takuto taimu",id:"waktu siklus target",en:"takt time",cat:"Process"},
{jp:"工程設計",romaji:"koutei sekkei",id:"perancangan proses",en:"process design",cat:"Process"},
{jp:"生産能力計画",romaji:"seisan nouryoku keikaku",id:"perencanaan kapasitas produksi",en:"production capacity planning",cat:"Process"},
{jp:"改善ロードマップ",romaji:"kaizen roodomaappu",id:"peta jalan perbaikan",en:"improvement roadmap",cat:"Process"},
{jp:"成果指標",romaji:"seika shihyou",id:"indikator kinerja",en:"performance indicator",cat:"Process"},
  
/* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 4 (100)
================================================= */

/* ===== APQP / Planning ===== */
{jp:"先行製品品質計画",romaji:"senkou seihin hinshitsu keikaku",id:"perencanaan kualitas produk awal",en:"advanced product quality planning",cat:"Inspection"},
{jp:"品質計画書",romaji:"hinshitsu keikakusho",id:"dokumen perencanaan mutu",en:"quality planning document",cat:"Inspection"},
{jp:"製品要求事項",romaji:"seihin youkyuu jikou",id:"persyaratan produk",en:"product requirement",cat:"Inspection"},
{jp:"工程フロー図",romaji:"koutei furo-zu",id:"diagram alur proses",en:"process flow diagram",cat:"Process"},
{jp:"設計検証",romaji:"sekkei kenshou",id:"verifikasi desain",en:"design verification",cat:"Inspection"},
{jp:"設計妥当性確認",romaji:"sekkei datousei kakunin",id:"validasi desain",en:"design validation",cat:"Inspection"},
{jp:"量産準備",romaji:"ryousan junbi",id:"persiapan produksi massal",en:"mass production preparation",cat:"Process"},
{jp:"品質目標設定",romaji:"hinshitsu mokuhyou settei",id:"penetapan target mutu",en:"quality objective setting",cat:"Inspection"},

/* ===== PPAP ===== */
{jp:"生産部品承認プロセス",romaji:"seisan buhin shounin purosesu",id:"proses persetujuan part produksi",en:"production part approval process",cat:"Inspection"},
{jp:"初期サンプル",romaji:"shoki sanpuru",id:"sampel awal",en:"initial sample",cat:"Inspection"},
{jp:"外観承認",romaji:"gaikan shounin",id:"persetujuan tampilan",en:"appearance approval",cat:"Inspection"},
{jp:"寸法測定結果",romaji:"sunpou sokutei kekka",id:"hasil ukur dimensi",en:"dimensional measurement result",cat:"Inspection"},
{jp:"材料試験成績",romaji:"zairyou shiken seiseki",id:"hasil uji material",en:"material test result",cat:"Inspection"},
{jp:"工程能力証明",romaji:"koutei nouryoku shoumei",id:"bukti kapabilitas proses",en:"process capability evidence",cat:"Inspection"},
{jp:"初回生産承認",romaji:"shokai seisan shounin",id:"persetujuan produksi awal",en:"initial production approval",cat:"Inspection"},

/* ===== MSA / Gauge R&R ===== */
{jp:"測定システム解析",romaji:"sokutei shisutemu kaiseki",id:"analisis sistem pengukuran",en:"measurement system analysis",cat:"Inspection"},
{jp:"ゲージ再現性",romaji:"geeji saigensei",id:"reprodusibilitas alat ukur",en:"gauge reproducibility",cat:"Inspection"},
{jp:"ゲージ反復性",romaji:"geeji hanpukusei",id:"repeatabilitas alat ukur",en:"gauge repeatability",cat:"Inspection"},
{jp:"測定ばらつき",romaji:"sokutei baratsuki",id:"variasi pengukuran",en:"measurement variation",cat:"Inspection"},
{jp:"測定誤差要因",romaji:"sokutei gosa youin",id:"faktor kesalahan ukur",en:"measurement error factor",cat:"Inspection"},
{jp:"測定信頼性",romaji:"sokutei shinraisei",id:"keandalan pengukuran",en:"measurement reliability",cat:"Inspection"},
{jp:"測定基準適合",romaji:"sokutei kijun tekigou",id:"kesesuaian standar ukur",en:"measurement standard conformity",cat:"Inspection"},

/* ===== ISO / JIS Advanced ===== */
{jp:"国際規格",romaji:"kokusai kikaku",id:"standar internasional",en:"international standard",cat:"Inspection"},
{jp:"日本工業規格",romaji:"nihon kougyou kikaku",id:"standar industri Jepang",en:"japanese industrial standard",cat:"Inspection"},
{jp:"規格要求事項",romaji:"kikaku youkyuu jikou",id:"persyaratan standar",en:"standard requirement",cat:"Inspection"},
{jp:"規格適合証明",romaji:"kikaku tekigou shoumei",id:"sertifikat kesesuaian standar",en:"certificate of conformity",cat:"Inspection"},
{jp:"監査チェックリスト",romaji:"kansa chekku risuto",id:"daftar periksa audit",en:"audit checklist",cat:"Inspection"},
{jp:"是正期限",romaji:"zeisei kigen",id:"batas waktu perbaikan",en:"corrective action deadline",cat:"Inspection"},
{jp:"規格改訂対応",romaji:"kikaku kaitei taiou",id:"penyesuaian revisi standar",en:"standard revision 대응",cat:"Inspection"},

/* ===== Equipment / Calibration ===== */
{jp:"校正証明書",romaji:"kousei shoumeisho",id:"sertifikat kalibrasi",en:"calibration certificate",cat:"Equipment"},
{jp:"校正周期管理",romaji:"kousei shuuki kanri",id:"manajemen interval kalibrasi",en:"calibration interval control",cat:"Equipment"},
{jp:"校正期限切れ",romaji:"kousei kigen gire",id:"kalibrasi kedaluwarsa",en:"calibration expired",cat:"Equipment"},
{jp:"測定機器管理",romaji:"sokutei kiki kanri",id:"manajemen alat ukur",en:"measuring equipment management",cat:"Equipment"},
{jp:"校正不適合",romaji:"kousei futekigou",id:"ketidaksesuaian kalibrasi",en:"calibration nonconformity",cat:"Equipment"},
{jp:"基準器",romaji:"kijunki",id:"alat ukur standar",en:"reference standard",cat:"Equipment"},

/* ===== Production / System ===== */
{jp:"品質マネジメントシステム",romaji:"hinshitsu manejimento shisutemu",id:"sistem manajemen mutu",en:"quality management system",cat:"Process"},
{jp:"トレーサビリティ管理",romaji:"toreesabiriti kanri",id:"manajemen ketertelusuran",en:"traceability management",cat:"Process"},
{jp:"変更管理",romaji:"henkou kanri",id:"manajemen perubahan",en:"change management",cat:"Process"},
{jp:"承認フロー",romaji:"shounin furo-",id:"alur persetujuan",en:"approval flow",cat:"Process"},
{jp:"品質データ管理",romaji:"hinshitsu deeta kanri",id:"pengelolaan data mutu",en:"quality data management",cat:"Process"},
{jp:"継続改善活動",romaji:"keizoku kaizen katsudou",id:"aktivitas perbaikan berkelanjutan",en:"continuous improvement activity",cat:"Process"},
   
 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 5 (100)
================================================= */

/* ===== Lean Manufacturing ===== */
{jp:"リーン生産方式",romaji:"riin seisan houshiki",id:"sistem produksi lean",en:"lean manufacturing",cat:"Process"},
{jp:"ジャストインタイム",romaji:"jasuto in taimu",id:"produksi tepat waktu",en:"just in time",cat:"Process"},
{jp:"かんばん方式",romaji:"kanban houshiki",id:"sistem kanban",en:"kanban system",cat:"Process"},
{jp:"平準化",romaji:"heijunka",id:"perataan produksi",en:"production leveling",cat:"Process"},
{jp:"ムダ",romaji:"muda",id:"pemborosan",en:"waste",cat:"Process"},
{jp:"ムラ",romaji:"mura",id:"ketidakteraturan",en:"unevenness",cat:"Process"},
{jp:"ムリ",romaji:"muri",id:"beban berlebih",en:"overburden",cat:"Process"},
{jp:"価値流れ図",romaji:"kachi nagare zu",id:"peta aliran nilai",en:"value stream mapping",cat:"Process"},
{jp:"セル生産",romaji:"seru seisan",id:"produksi sel",en:"cell production",cat:"Process"},
{jp:"標準在庫",romaji:"hyoujun zaiko",id:"stok standar",en:"standard inventory",cat:"Process"},

/* ===== Six Sigma ===== */
{jp:"シックスシグマ",romaji:"shikkusu shiguma",id:"six sigma",en:"six sigma",cat:"Inspection"},
{jp:"DMAIC",romaji:"demaikku",id:"tahapan DMAIC",en:"DMAIC methodology",cat:"Inspection"},
{jp:"ばらつき低減",romaji:"baratsuki teigen",id:"pengurangan variasi",en:"variation reduction",cat:"Inspection"},
{jp:"工程ばらつき",romaji:"koutei baratsuki",id:"variasi proses",en:"process variation",cat:"Inspection"},
{jp:"σ水準",romaji:"shiguma suijun",id:"tingkat sigma",en:"sigma level",cat:"Inspection"},
{jp:"不良率",romaji:"furyouritsu",id:"tingkat cacat",en:"defect rate",cat:"Inspection"},
{jp:"改善プロジェクト",romaji:"kaizen purojekuto",id:"proyek perbaikan",en:"improvement project",cat:"Inspection"},
{jp:"品質特性",romaji:"hinshitsu tokusei",id:"karakteristik kualitas",en:"quality characteristic",cat:"Inspection"},

/* ===== DOE / Statistik ===== */
{jp:"実験計画法",romaji:"jikken keikakuhou",id:"metode perancangan eksperimen",en:"design of experiments",cat:"Inspection"},
{jp:"要因",romaji:"youin",id:"faktor",en:"factor",cat:"Inspection"},
{jp:"水準",romaji:"suijun",id:"level",en:"level",cat:"Inspection"},
{jp:"交互作用",romaji:"kougo sayou",id:"interaksi faktor",en:"interaction effect",cat:"Inspection"},
{jp:"応答",romaji:"outou",id:"respon",en:"response",cat:"Inspection"},
{jp:"分散分析",romaji:"bunsan bunseki",id:"analisis varians",en:"analysis of variance",cat:"Inspection"},
{jp:"回帰分析",romaji:"kaiki bunseki",id:"analisis regresi",en:"regression analysis",cat:"Inspection"},
{jp:"信頼区間",romaji:"shinrai kukan",id:"rentang kepercayaan",en:"confidence interval",cat:"Inspection"},

/* ===== Statistical Quality ===== */
{jp:"標準偏差",romaji:"hyoujun hensha",id:"simpangan baku",en:"standard deviation",cat:"Inspection"},
{jp:"平均値",romaji:"heikin chi",id:"nilai rata-rata",en:"mean value",cat:"Inspection"},
{jp:"中央値",romaji:"chuuchi",id:"nilai tengah",en:"median",cat:"Inspection"},
{jp:"分布",romaji:"bunpu",id:"distribusi",en:"distribution",cat:"Inspection"},
{jp:"正規分布",romaji:"seiki bunpu",id:"distribusi normal",en:"normal distribution",cat:"Inspection"},
{jp:"工程能力分析",romaji:"koutei nouryoku bunseki",id:"analisis kapabilitas proses",en:"process capability analysis",cat:"Inspection"},
{jp:"工程能力比",romaji:"koutei nouryoku hi",id:"rasio kapabilitas proses",en:"process capability ratio",cat:"Inspection"},

/* ===== Production & Improvement ===== */
{jp:"サイクルタイム",romaji:"saikuru taimu",id:"waktu siklus",en:"cycle time",cat:"Process"},
{jp:"リードタイム",romaji:"riido taimu",id:"waktu tunggu produksi",en:"lead time",cat:"Process"},
{jp:"生産ロス",romaji:"seisan rosu",id:"kerugian produksi",en:"production loss",cat:"Process"},
{jp:"稼働分析",romaji:"kadou bunseki",id:"analisis operasional",en:"operation analysis",cat:"Process"},
{jp:"負荷分析",romaji:"fuka bunseki",id:"analisis beban kerja",en:"workload analysis",cat:"Process"},
{jp:"能力ギャップ",romaji:"nouryoku gyappu",id:"kesenjangan kemampuan",en:"capacity gap",cat:"Process"},
{jp:"改善テーマ設定",romaji:"kaizen teema settei",id:"penentuan tema perbaikan",en:"improvement theme setting",cat:"Process"},
{jp:"成果レビュー",romaji:"seika rebyuu",id:"tinjauan hasil",en:"result review",cat:"Process"},

/* ===== Management / KPI ===== */
{jp:"重要業績評価指標",romaji:"juuyou gyouseki hyouka shihyou",id:"indikator kinerja utama",en:"key performance indicator",cat:"Process"},
{jp:"目標管理",romaji:"mokuhyou kanri",id:"manajemen target",en:"management by objectives",cat:"Process"},
{jp:"進捗管理",romaji:"shinchoku kanri",id:"manajemen progres",en:"progress management",cat:"Process"},
{jp:"成果測定",romaji:"seika sokutei",id:"pengukuran hasil",en:"performance measurement",cat:"Process"},
{jp:"業務改善",romaji:"gyoumu kaizen",id:"perbaikan operasional",en:"business improvement",cat:"Process"},
{jp:"管理レビュー",romaji:"kanri rebyuu",id:"tinjauan manajemen",en:"management review",cat:"Process"},
   
 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 6 (100)
================================================= */

/* ===== TPM / Reliability ===== */
{jp:"平均故障間隔",romaji:"heikin koshou kankaku",id:"rata-rata waktu antar kerusakan",en:"mean time between failures",cat:"Equipment"},
{jp:"平均修復時間",romaji:"heikin shuufuku jikan",id:"rata-rata waktu perbaikan",en:"mean time to repair",cat:"Equipment"},
{jp:"信頼性工学",romaji:"shinraisei kougaku",id:"rekayasa keandalan",en:"reliability engineering",cat:"Equipment"},
{jp:"信頼度",romaji:"shinraido",id:"tingkat keandalan",en:"reliability",cat:"Equipment"},
{jp:"故障率",romaji:"koshouritsu",id:"laju kegagalan",en:"failure rate",cat:"Equipment"},
{jp:"寿命分布",romaji:"jumyou bunpu",id:"distribusi umur pakai",en:"lifetime distribution",cat:"Equipment"},
{jp:"予備品管理",romaji:"yobihin kanri",id:"manajemen suku cadang",en:"spare parts management",cat:"Equipment"},
{jp:"保全KPI",romaji:"hozen KPI",id:"indikator kinerja perawatan",en:"maintenance KPI",cat:"Equipment"},
{jp:"設備健全性",romaji:"setsubi kenzen sei",id:"kesehatan peralatan",en:"equipment health",cat:"Equipment"},
{jp:"劣化診断",romaji:"rekka shindan",id:"diagnosis degradasi",en:"degradation diagnosis",cat:"Equipment"},

/* ===== Maintenance Planning / Execution ===== */
{jp:"長期保全計画",romaji:"chouki hozen keikaku",id:"rencana perawatan jangka panjang",en:"long-term maintenance plan",cat:"Equipment"},
{jp:"短期保全計画",romaji:"tanki hozen keikaku",id:"rencana perawatan jangka pendek",en:"short-term maintenance plan",cat:"Equipment"},
{jp:"保全作業指示書",romaji:"hozen sagyou shijisho",id:"instruksi kerja perawatan",en:"maintenance work instruction",cat:"Equipment"},
{jp:"保全作業標準",romaji:"hozen sagyou hyoujun",id:"standar kerja perawatan",en:"maintenance work standard",cat:"Equipment"},
{jp:"点検基準",romaji:"tenken kijun",id:"kriteria pemeriksaan",en:"inspection criteria",cat:"Equipment"},
{jp:"点検記録表",romaji:"tenken kirokuhyou",id:"lembar catatan pemeriksaan",en:"inspection record sheet",cat:"Equipment"},
{jp:"整備履歴管理",romaji:"seibi rireki kanri",id:"manajemen riwayat servis",en:"service history management",cat:"Equipment"},
{jp:"修理計画",romaji:"shuuri keikaku",id:"rencana perbaikan",en:"repair plan",cat:"Equipment"},

/* ===== Safety Management System ===== */
{jp:"安全マネジメントシステム",romaji:"anzen manejimento shisutemu",id:"sistem manajemen keselamatan",en:"safety management system",cat:"Safety"},
{jp:"労働安全衛生方針",romaji:"roudou anzen eisei houshin",id:"kebijakan K3",en:"occupational health and safety policy",cat:"Safety"},
{jp:"安全目標",romaji:"anzen mokuhyou",id:"target keselamatan",en:"safety objective",cat:"Safety"},
{jp:"危険源管理",romaji:"kiken gen kanri",id:"pengendalian sumber bahaya",en:"hazard control",cat:"Safety"},
{jp:"安全パフォーマンス",romaji:"anzen pafo-mansu",id:"kinerja keselamatan",en:"safety performance",cat:"Safety"},
{jp:"事故調査",romaji:"jiko chousa",id:"investigasi kecelakaan",en:"accident investigation",cat:"Safety"},
{jp:"ヒヤリハット",romaji:"hiyari hatto",id:"nyaris celaka",en:"near miss",cat:"Safety"},
{jp:"安全是正計画",romaji:"anzen zeisei keikaku",id:"rencana koreksi keselamatan",en:"safety corrective plan",cat:"Safety"},

/* ===== Compliance / Audit ===== */
{jp:"法令遵守",romaji:"hourei junshu",id:"kepatuhan hukum",en:"legal compliance",cat:"Inspection"},
{jp:"内部規程",romaji:"naibu kitei",id:"peraturan internal",en:"internal regulation",cat:"Inspection"},
{jp:"遵守状況確認",romaji:"junshu joukyou kakunin",id:"cek kepatuhan",en:"compliance status check",cat:"Inspection"},
{jp:"監査計画書",romaji:"kansa keikakusho",id:"dokumen rencana audit",en:"audit plan document",cat:"Inspection"},
{jp:"監査証跡",romaji:"kansa shouseki",id:"jejak audit",en:"audit trail",cat:"Inspection"},
{jp:"監査是正",romaji:"kansa zeisei",id:"koreksi audit",en:"audit corrective action",cat:"Inspection"},
{jp:"遵法監査",romaji:"junpou kansa",id:"audit kepatuhan hukum",en:"compliance audit",cat:"Inspection"},
{jp:"是正完了報告",romaji:"zeisei kanryou houkoku",id:"laporan selesai koreksi",en:"corrective completion report",cat:"Inspection"},

/* ===== Operations / Continuity ===== */
{jp:"事業継続計画",romaji:"jigyou keizoku keikaku",id:"rencana keberlanjutan bisnis",en:"business continuity plan",cat:"Process"},
{jp:"災害対応計画",romaji:"saigai taiou keikaku",id:"rencana tanggap bencana",en:"disaster response plan",cat:"Process"},
{jp:"緊急対応手順",romaji:"kinkyuu taiou tejun",id:"prosedur tanggap darurat",en:"emergency response procedure",cat:"Process"},
{jp:"操業継続",romaji:"sougyou keizoku",id:"kelangsungan operasi",en:"operational continuity",cat:"Process"},
{jp:"復旧優先順位",romaji:"fukkyuu yuusen juni",id:"prioritas pemulihan",en:"recovery priority",cat:"Process"},
{jp:"代替工程",romaji:"daitai koutei",id:"proses alternatif",en:"alternative process",cat:"Process"},
{jp:"供給リスク",romaji:"kyoukyuu risuku",id:"risiko pasokan",en:"supply risk",cat:"Process"},
{jp:"安定供給",romaji:"antei kyoukyuu",id:"pasokan stabil",en:"stable supply",cat:"Process"},

/* ===== Data / Digitalization ===== */
{jp:"設備データ収集",romaji:"setsubi deeta shuushuu",id:"pengumpulan data peralatan",en:"equipment data collection",cat:"Process"},
{jp:"稼働データ分析",romaji:"kadou deeta bunseki",id:"analisis data operasi",en:"operation data analysis",cat:"Process"},
{jp:"予知保全システム",romaji:"yochi hozen shisutemu",id:"sistem perawatan prediktif",en:"predictive maintenance system",cat:"Process"},
{jp:"データ可視化",romaji:"deeta kashika",id:"visualisasi data",en:"data visualization",cat:"Process"},
{jp:"異常アラート",romaji:"ijou ara-to",id:"peringatan abnormal",en:"abnormal alert",cat:"Process"},
{jp:"ダッシュボード",romaji:"dasshuboodo",id:"papan dashboard",en:"dashboard",cat:"Process"},

/* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 7 (100)
   Energy / Environment / ESG / Sustainability
================================================= */

/* ===== Energy Management ===== */
{jp:"エネルギー管理",romaji:"enerugii kanri",id:"manajemen energi",en:"energy management",cat:"Process"},
{jp:"エネルギー使用量",romaji:"enerugii shiyouryou",id:"konsumsi energi",en:"energy consumption",cat:"Process"},
{jp:"省エネルギー",romaji:"shou enerugii",id:"penghematan energi",en:"energy saving",cat:"Process"},
{jp:"電力ピーク管理",romaji:"denryoku piiku kanri",id:"manajemen beban puncak listrik",en:"electric power peak control",cat:"Process"},
{jp:"エネルギー効率",romaji:"enerugii kouritsu",id:"efisiensi energi",en:"energy efficiency",cat:"Process"},
{jp:"使用量モニタリング",romaji:"shiyouryou monitaringu",id:"pemantauan konsumsi",en:"consumption monitoring",cat:"Process"},
{jp:"エネルギー原単位",romaji:"enerugii gentanni",id:"intensitas energi",en:"energy intensity",cat:"Process"},
{jp:"エネルギー改善計画",romaji:"enerugii kaizen keikaku",id:"rencana perbaikan energi",en:"energy improvement plan",cat:"Process"},

/* ===== Environment / ISO 14001 ===== */
{jp:"環境マネジメントシステム",romaji:"kankyou manejimento shisutemu",id:"sistem manajemen lingkungan",en:"environmental management system",cat:"Safety"},
{jp:"環境方針",romaji:"kankyou houshin",id:"kebijakan lingkungan",en:"environmental policy",cat:"Safety"},
{jp:"環境目標",romaji:"kankyou mokuhyou",id:"target lingkungan",en:"environmental objective",cat:"Safety"},
{jp:"環境影響評価",romaji:"kankyou eikyou hyouka",id:"penilaian dampak lingkungan",en:"environmental impact assessment",cat:"Safety"},
{jp:"環境法令遵守",romaji:"kankyou hourei junshu",id:"kepatuhan hukum lingkungan",en:"environmental legal compliance",cat:"Safety"},
{jp:"環境監査",romaji:"kankyou kansa",id:"audit lingkungan",en:"environmental audit",cat:"Safety"},
{jp:"是正予防処置",romaji:"zeisei yobou shochi",id:"tindakan korektif & pencegahan",en:"corrective and preventive action",cat:"Safety"},
{jp:"環境改善活動",romaji:"kankyou kaizen katsudou",id:"kegiatan perbaikan lingkungan",en:"environmental improvement activity",cat:"Safety"},

/* ===== Waste / Emission ===== */
{jp:"廃棄物管理",romaji:"haikibutsu kanri",id:"manajemen limbah",en:"waste management",cat:"Safety"},
{jp:"産業廃棄物",romaji:"sangyou haikibutsu",id:"limbah industri",en:"industrial waste",cat:"Safety"},
{jp:"分別回収",romaji:"bunbetsu kaishuu",id:"pengumpulan terpilah",en:"waste segregation",cat:"Safety"},
{jp:"再資源化",romaji:"saishigenka",id:"daur ulang",en:"resource recycling",cat:"Safety"},
{jp:"排出量管理",romaji:"haishutsuryou kanri",id:"manajemen emisi",en:"emission control",cat:"Safety"},
{jp:"温室効果ガス",romaji:"onshitsu kouka gasu",id:"gas rumah kaca",en:"greenhouse gas",cat:"Safety"},
{jp:"CO2排出量",romaji:"CO2 haishutsuryou",id:"emisi CO2",en:"CO2 emission",cat:"Safety"},
{jp:"削減目標",romaji:"sakugen mokuhyou",id:"target pengurangan",en:"reduction target",cat:"Safety"},

/* ===== ESG ===== */
{jp:"ESG経営",romaji:"ESG keiei",id:"manajemen ESG",en:"ESG management",cat:"Process"},
{jp:"環境配慮",romaji:"kankyou hairyo",id:"kepedulian lingkungan",en:"environmental consideration",cat:"Process"},
{jp:"社会的責任",romaji:"shakaiteki sekinin",id:"tanggung jawab sosial",en:"social responsibility",cat:"Process"},
{jp:"企業統治",romaji:"kigyou touchi",id:"tata kelola perusahaan",en:"corporate governance",cat:"Process"},
{jp:"コンプライアンス",romaji:"konpuraiansu",id:"kepatuhan",en:"compliance",cat:"Process"},
{jp:"情報開示",romaji:"jouhou kaiji",id:"keterbukaan informasi",en:"information disclosure",cat:"Process"},
{jp:"持続可能性",romaji:"jizoku kanousei",id:"keberlanjutan",en:"sustainability",cat:"Process"},
{jp:"ESG評価",romaji:"ESG hyouka",id:"penilaian ESG",en:"ESG evaluation",cat:"Process"},

/* ===== Sustainability / CSR ===== */
{jp:"持続可能な開発",romaji:"jizoku kanou na kaihatsu",id:"pembangunan berkelanjutan",en:"sustainable development",cat:"Process"},
{jp:"CSR活動",romaji:"CSR katsudou",id:"kegiatan CSR",en:"corporate social responsibility activity",cat:"Process"},
{jp:"地域貢献",romaji:"chiiki kouken",id:"kontribusi masyarakat",en:"community contribution",cat:"Process"},
{jp:"環境配慮設計",romaji:"kankyou hairyo sekkei",id:"desain ramah lingkungan",en:"eco-friendly design",cat:"Process"},
{jp:"サプライチェーン管理",romaji:"sapurai cheen kanri",id:"manajemen rantai pasok",en:"supply chain management",cat:"Process"},
{jp:"責任ある調達",romaji:"sekinin aru choutatsu",id:"pengadaan bertanggung jawab",en:"responsible sourcing",cat:"Process"},
{jp:"持続可能調達",romaji:"jizoku kanou choutatsu",id:"pengadaan berkelanjutan",en:"sustainable procurement",cat:"Process"},
{jp:"環境報告書",romaji:"kankyou houkokusho",id:"laporan lingkungan",en:"environmental report",cat:"Process"},

/* ===== Risk / Governance ===== */
{jp:"企業リスク管理",romaji:"kigyou risuku kanri",id:"manajemen risiko perusahaan",en:"enterprise risk management",cat:"Process"},
{jp:"事業リスク評価",romaji:"jigyou risuku hyouka",id:"penilaian risiko bisnis",en:"business risk assessment",cat:"Process"},
{jp:"不正防止",romaji:"fusei boushi",id:"pencegahan kecurangan",en:"fraud prevention",cat:"Process"},
{jp:"内部統制",romaji:"naibu tousei",id:"pengendalian internal",en:"internal control",cat:"Process"},
{jp:"ガバナンス体制",romaji:"gabanansu taisei",id:"struktur tata kelola",en:"governance structure",cat:"Process"},
{jp:"監督責任",romaji:"kantoku sekinin",id:"tanggung jawab pengawasan",en:"oversight responsibility",cat:"Process"},
{jp:"倫理規範",romaji:"rinri kihan",id:"kode etik",en:"code of ethics",cat:"Process"},
{jp:"是正措置管理",romaji:"zeisei sochi kanri",id:"manajemen tindakan korektif",en:"corrective action management",cat:"Process"},

 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 8 (100)
   Digital Manufacturing / IoT / Smart Factory / DX
================================================= */

/* ===== Digital Manufacturing ===== */
{jp:"デジタル製造",romaji:"dejitaru seizou",id:"manufaktur digital",en:"digital manufacturing",cat:"Process"},
{jp:"スマートファクトリー",romaji:"sumaato fakutorii",id:"pabrik pintar",en:"smart factory",cat:"Process"},
{jp:"製造DX",romaji:"seizou DX",id:"transformasi digital manufaktur",en:"manufacturing DX",cat:"Process"},
{jp:"デジタルツイン",romaji:"dejitaru tsuin",id:"kembaran digital",en:"digital twin",cat:"Process"},
{jp:"工程デジタル化",romaji:"koutei dejitaru ka",id:"digitalisasi proses",en:"process digitalization",cat:"Process"},
{jp:"仮想検証",romaji:"kasou kenshou",id:"verifikasi virtual",en:"virtual verification",cat:"Process"},
{jp:"生産シミュレーション",romaji:"seisan shimyureeshon",id:"simulasi produksi",en:"production simulation",cat:"Process"},
{jp:"設備仮想化",romaji:"setsubi kasou ka",id:"virtualisasi peralatan",en:"equipment virtualization",cat:"Process"},

/* ===== IoT / Sensors ===== */
{jp:"産業用IoT",romaji:"sangyou you IoT",id:"IoT industri",en:"industrial IoT",cat:"Equipment"},
{jp:"センサーデータ",romaji:"sensaa deeta",id:"data sensor",en:"sensor data",cat:"Equipment"},
{jp:"リアルタイム監視",romaji:"riarutaimu kanshi",id:"pemantauan waktu nyata",en:"real-time monitoring",cat:"Equipment"},
{jp:"稼働状態取得",romaji:"kadou joutai shutoku",id:"pengambilan status operasi",en:"operation status acquisition",cat:"Equipment"},
{jp:"異常検知アルゴリズム",romaji:"ijou kenchi arugorizumu",id:"algoritma deteksi abnormal",en:"anomaly detection algorithm",cat:"Equipment"},
{jp:"センサー校正",romaji:"sensaa kousei",id:"kalibrasi sensor",en:"sensor calibration",cat:"Equipment"},
{jp:"データ収集基盤",romaji:"deeta shuushuu kiban",id:"platform pengumpulan data",en:"data collection platform",cat:"Equipment"},
{jp:"エッジデバイス",romaji:"ejji debaisu",id:"perangkat edge",en:"edge device",cat:"Equipment"},

/* ===== Automation / Robotics ===== */
{jp:"自動化設備",romaji:"jidouka setsubi",id:"peralatan otomatis",en:"automation equipment",cat:"Equipment"},
{jp:"協働ロボット",romaji:"kyoudou robotto",id:"robot kolaboratif",en:"collaborative robot",cat:"Equipment"},
{jp:"ロボットティーチング",romaji:"robotto tiichingu",id:"pengajaran robot",en:"robot teaching",cat:"Equipment"},
{jp:"自動搬送",romaji:"jidou hansou",id:"transportasi otomatis",en:"automated transport",cat:"Equipment"},
{jp:"AGV",romaji:"AGV",id:"kendaraan berpemandu otomatis",en:"automated guided vehicle",cat:"Equipment"},
{jp:"制御ロジック",romaji:"seigyo rojikku",id:"logika kontrol",en:"control logic",cat:"Equipment"},
{jp:"自動停止機能",romaji:"jidou teishi kinou",id:"fungsi berhenti otomatis",en:"automatic stop function",cat:"Equipment"},
{jp:"安全インターロック",romaji:"anzen intarokku",id:"interlock keselamatan",en:"safety interlock",cat:"Equipment"},

/* ===== Data / Analytics ===== */
{jp:"ビッグデータ分析",romaji:"biggu deeta bunseki",id:"analisis big data",en:"big data analytics",cat:"Process"},
{jp:"製造データ解析",romaji:"seizou deeta kaiseki",id:"analisis data manufaktur",en:"manufacturing data analysis",cat:"Process"},
{jp:"予測分析",romaji:"yosoku bunseki",id:"analisis prediktif",en:"predictive analytics",cat:"Process"},
{jp:"品質データ連携",romaji:"hinshitsu deeta renkei",id:"integrasi data kualitas",en:"quality data integration",cat:"Process"},
{jp:"トレーサビリティシステム",romaji:"toreesabiriti shisutemu",id:"sistem ketertelusuran",en:"traceability system",cat:"Process"},
{jp:"データクレンジング",romaji:"deeta kurenjingu",id:"pembersihan data",en:"data cleansing",cat:"Process"},
{jp:"可視化ダッシュボード",romaji:"kashika dasshuboodo",id:"dashboard visualisasi",en:"visualization dashboard",cat:"Process"},
{jp:"KPIモニタリング",romaji:"KPI monitaringu",id:"pemantauan KPI",en:"KPI monitoring",cat:"Process"},

/* ===== Systems / IT ===== */
{jp:"製造実行システム",romaji:"seizou jikkou shisutemu",id:"sistem eksekusi manufaktur",en:"manufacturing execution system",cat:"Process"},
{jp:"MES連携",romaji:"MES renkei",id:"integrasi MES",en:"MES integration",cat:"Process"},
{jp:"ERP連携",romaji:"ERP renkei",id:"integrasi ERP",en:"ERP integration",cat:"Process"},
{jp:"生産計画最適化",romaji:"seisan keikaku saiteki ka",id:"optimasi rencana produksi",en:"production planning optimization",cat:"Process"},
{jp:"データ標準化",romaji:"deeta hyoujunka",id:"standarisasi data",en:"data standardization",cat:"Process"},
{jp:"システム可用性",romaji:"shisutemu kayousei",id:"ketersediaan sistem",en:"system availability",cat:"Process"},
{jp:"障害対応",romaji:"shougai taiou",id:"penanganan gangguan sistem",en:"system incident response",cat:"Process"},
{jp:"バックアップ管理",romaji:"bakkuappu kanri",id:"manajemen pencadangan",en:"backup management",cat:"Process"},

/* ===== Cyber / Security ===== */
{jp:"サイバーセキュリティ",romaji:"saibaa sekyuriti",id:"keamanan siber",en:"cybersecurity",cat:"Safety"},
{jp:"アクセス制御",romaji:"akusesu seigyo",id:"kontrol akses",en:"access control",cat:"Safety"},
{jp:"認証管理",romaji:"ninshou kanri",id:"manajemen autentikasi",en:"authentication management",cat:"Safety"},
{jp:"脆弱性対策",romaji:"zeijakusei taisaku",id:"mitigasi kerentanan",en:"vulnerability mitigation",cat:"Safety"},
{jp:"ログ管理",romaji:"rogu kanri",id:"manajemen log",en:"log management",cat:"Safety"},
{jp:"不正アクセス",romaji:"fusei akusesu",id:"akses tidak sah",en:"unauthorized access",cat:"Safety"},
{jp:"セキュリティ監査",romaji:"sekyuriti kansa",id:"audit keamanan",en:"security audit",cat:"Safety"},
{jp:"インシデント対応",romaji:"inshidento taiou",id:"penanganan insiden",en:"incident response",cat:"Safety"},

/* ===== DX Governance ===== */
{jp:"DX戦略",romaji:"DX senryaku",id:"strategi DX",en:"DX strategy",cat:"Process"},
{jp:"データガバナンス",romaji:"deeta gabanansu",id:"tata kelola data",en:"data governance",cat:"Process"},
{jp:"IT統制",romaji:"IT tousei",id:"pengendalian TI",en:"IT control",cat:"Process"},
{jp:"変更影響分析",romaji:"henkou eikyou bunseki",id:"analisis dampak perubahan",en:"change impact analysis",cat:"Process"},
{jp:"運用標準",romaji:"unyou hyoujun",id:"standar operasional TI",en:"IT operation standard",cat:"Process"},
{jp:"展開計画",romaji:"tenkai keikaku",id:"rencana implementasi",en:"deployment plan",cat:"Process"},

 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 9 (100)
   AI / ML / Vision Inspection / Autonomous Factory
================================================= */

/* ===== AI / Machine Learning ===== */
{jp:"人工知能",romaji:"jinkou chinou",id:"kecerdasan buatan",en:"artificial intelligence",cat:"Process"},
{jp:"機械学習",romaji:"kikai gakushuu",id:"pembelajaran mesin",en:"machine learning",cat:"Process"},
{jp:"深層学習",romaji:"shinsou gakushuu",id:"pembelajaran mendalam",en:"deep learning",cat:"Process"},
{jp:"学習データ",romaji:"gakushuu deeta",id:"data pelatihan",en:"training data",cat:"Process"},
{jp:"教師あり学習",romaji:"kyoushi ari gakushuu",id:"pembelajaran terawasi",en:"supervised learning",cat:"Process"},
{jp:"教師なし学習",romaji:"kyoushi nashi gakushuu",id:"pembelajaran tak terawasi",en:"unsupervised learning",cat:"Process"},
{jp:"モデル精度",romaji:"moderu seido",id:"akurasi model",en:"model accuracy",cat:"Process"},
{jp:"推論処理",romaji:"suiron shori",id:"proses inferensi",en:"inference processing",cat:"Process"},

/* ===== Vision Inspection ===== */
{jp:"画像検査",romaji:"gazou kensa",id:"inspeksi visual otomatis",en:"vision inspection",cat:"Inspection"},
{jp:"外観検査AI",romaji:"gaikan kensa AI",id:"AI inspeksi tampilan",en:"AI visual inspection",cat:"Inspection"},
{jp:"欠陥検出",romaji:"kekkan kenshutsu",id:"deteksi cacat",en:"defect detection",cat:"Inspection"},
{jp:"画像処理",romaji:"gazou shori",id:"pemrosesan citra",en:"image processing",cat:"Inspection"},
{jp:"特徴量抽出",romaji:"tokuchouryou chushutsu",id:"ekstraksi fitur",en:"feature extraction",cat:"Inspection"},
{jp:"誤検出",romaji:"gokenshutsu",id:"deteksi salah",en:"false detection",cat:"Inspection"},
{jp:"検出率",romaji:"kenshutsuritsu",id:"tingkat deteksi",en:"detection rate",cat:"Inspection"},
{jp:"検査自動化",romaji:"kensa jidouka",id:"otomatisasi inspeksi",en:"inspection automation",cat:"Inspection"},

/* ===== Autonomous Factory ===== */
{jp:"自律型工場",romaji:"jiritsu gata koujou",id:"pabrik otonom",en:"autonomous factory",cat:"Process"},
{jp:"自己最適化",romaji:"jiko saiteki ka",id:"optimasi mandiri",en:"self-optimization",cat:"Process"},
{jp:"自動判断",romaji:"jidou handan",id:"keputusan otomatis",en:"automatic decision making",cat:"Process"},
{jp:"無人運転",romaji:"mujin unten",id:"operasi tanpa operator",en:"unmanned operation",cat:"Process"},
{jp:"自律制御",romaji:"jiritsu seigyo",id:"kontrol otonom",en:"autonomous control",cat:"Process"},
{jp:"フィードバック制御",romaji:"fiidobakku seigyo",id:"kontrol umpan balik",en:"feedback control",cat:"Process"},
{jp:"自己学習",romaji:"jiko gakushuu",id:"pembelajaran mandiri",en:"self-learning",cat:"Process"},
{jp:"自動最適化",romaji:"jidou saiteki ka",id:"optimasi otomatis",en:"automatic optimization",cat:"Process"},

/* ===== Advanced Quality Automation ===== */
{jp:"品質予測",romaji:"hinshitsu yosoku",id:"prediksi kualitas",en:"quality prediction",cat:"Inspection"},
{jp:"異常予測",romaji:"ijou yosoku",id:"prediksi abnormal",en:"anomaly prediction",cat:"Inspection"},
{jp:"品質AIモデル",romaji:"hinshitsu AI moderu",id:"model AI kualitas",en:"quality AI model",cat:"Inspection"},
{jp:"リアルタイム品質監視",romaji:"riarutaimu hinshitsu kanshi",id:"monitor kualitas real-time",en:"real-time quality monitoring",cat:"Inspection"},
{jp:"品質自動判定",romaji:"hinshitsu jidou hantei",id:"penilaian kualitas otomatis",en:"automatic quality judgement",cat:"Inspection"},
{jp:"工程異常検知",romaji:"koutei ijou kenchi",id:"deteksi abnormal proses",en:"process anomaly detection",cat:"Inspection"},
{jp:"品質ばらつき抑制",romaji:"hinshitsu baratsuki yokusei",id:"pengendalian variasi kualitas",en:"quality variation control",cat:"Inspection"},
{jp:"品質フィードバック",romaji:"hinshitsu fiidobakku",id:"umpan balik kualitas",en:"quality feedback",cat:"Inspection"},

/* ===== Robotics & Automation Intelligence ===== */
{jp:"知能ロボット",romaji:"chinou robotto",id:"robot cerdas",en:"intelligent robot",cat:"Equipment"},
{jp:"ロボット認識",romaji:"robotto ninshiki",id:"pengenalan robot",en:"robot perception",cat:"Equipment"},
{jp:"経路計画",romaji:"keiro keikaku",id:"perencanaan jalur",en:"path planning",cat:"Equipment"},
{jp:"衝突回避",romaji:"shoutotsu kaihi",id:"penghindaran tabrakan",en:"collision avoidance",cat:"Equipment"},
{jp:"協調制御",romaji:"kyouchou seigyo",id:"kontrol terkoordinasi",en:"cooperative control",cat:"Equipment"},
{jp:"自律移動ロボット",romaji:"jiritsu idou robotto",id:"robot bergerak otonom",en:"autonomous mobile robot",cat:"Equipment"},
{jp:"ロボット安全AI",romaji:"robotto anzen AI",id:"AI keselamatan robot",en:"robot safety AI",cat:"Equipment"},
{jp:"ロボット最適動作",romaji:"robotto saiteki dousa",id:"gerakan optimal robot",en:"robot motion optimization",cat:"Equipment"},

/* ===== AI Governance / Ethics ===== */
{jp:"AIガバナンス",romaji:"AI gabanansu",id:"tata kelola AI",en:"AI governance",cat:"Process"},
{jp:"AI倫理",romaji:"AI rinri",id:"etika AI",en:"AI ethics",cat:"Process"},
{jp:"モデル説明性",romaji:"moderu setsumeisei",id:"keterjelasan model",en:"model explainability",cat:"Process"},
{jp:"アルゴリズム偏り",romaji:"arugorizumu katayori",id:"bias algoritma",en:"algorithm bias",cat:"Process"},
{jp:"データ品質管理",romaji:"deeta hinshitsu kanri",id:"manajemen kualitas data",en:"data quality management",cat:"Process"},
{jp:"AIリスク管理",romaji:"AI risuku kanri",id:"manajemen risiko AI",en:"AI risk management",cat:"Process"},
{jp:"モデル監査",romaji:"moderu kansa",id:"audit model",en:"model audit",cat:"Process"},
{jp:"AI導入評価",romaji:"AI dounyuu hyouka",id:"evaluasi implementasi AI",en:"AI implementation evaluation",cat:"Process"},

/* ===== Smart Factory Operations ===== */
{jp:"自動運転ライン",romaji:"jidou unten rain",id:"lini otomatis penuh",en:"fully automated line",cat:"Process"},
{jp:"柔軟生産",romaji:"juunan seisan",id:"produksi fleksibel",en:"flexible manufacturing",cat:"Process"},
{jp:"需要予測",romaji:"juyou yosoku",id:"prediksi permintaan",en:"demand forecasting",cat:"Process"},
{jp:"生産最適配分",romaji:"seisan saiteki haibun",id:"alokasi produksi optimal",en:"optimal production allocation",cat:"Process"},
{jp:"在庫最適化",romaji:"zaiko saiteki ka",id:"optimasi persediaan",en:"inventory optimization",cat:"Process"},
{jp:"自動計画立案",romaji:"jidou keikaku ritsuan",id:"perencanaan otomatis",en:"automatic planning",cat:"Process"},
{jp:"スマート保全",romaji:"sumaato hozen",id:"perawatan pintar",en:"smart maintenance",cat:"Process"},
{jp:"次世代工場",romaji:"jisedai koujou",id:"pabrik generasi berikutnya",en:"next-generation factory",cat:"Process"},
   
 /* =================================================
   ADVANCED INDUSTRIAL VOCAB – BATCH 10 (100)
   Global Manufacturing / Digital Supply Chain
================================================= */

/* ===== Global Manufacturing ===== */
{jp:"グローバル製造",romaji:"guroobaru seizou",id:"manufaktur global",en:"global manufacturing",cat:"Process"},
{jp:"海外拠点",romaji:"kaigai kyoten",id:"fasilitas luar negeri",en:"overseas site",cat:"Process"},
{jp:"多拠点生産",romaji:"takyo ten seisan",id:"produksi multi lokasi",en:"multi-site production",cat:"Process"},
{jp:"国際分業",romaji:"kokusai bungyou",id:"pembagian kerja internasional",en:"international division of labor",cat:"Process"},
{jp:"製造最適配置",romaji:"seizou saiteki haichi",id:"penempatan manufaktur optimal",en:"optimal manufacturing allocation",cat:"Process"},
{jp:"生産標準統一",romaji:"seisan hyoujun touitsu",id:"penyeragaman standar produksi",en:"production standard harmonization",cat:"Process"},
{jp:"品質標準統合",romaji:"hinshitsu hyoujun tougou",id:"integrasi standar kualitas",en:"quality standard integration",cat:"Process"},
{jp:"グローバル展開",romaji:"guroobaru tenkai",id:"ekspansi global",en:"global deployment",cat:"Process"},

/* ===== Digital Supply Chain ===== */
{jp:"デジタルサプライチェーン",romaji:"dejitaru sapurai cheen",id:"rantai pasok digital",en:"digital supply chain",cat:"Process"},
{jp:"需要連動生産",romaji:"juyou rendou seisan",id:"produksi berbasis permintaan",en:"demand-driven production",cat:"Process"},
{jp:"供給計画最適化",romaji:"kyoukyuu keikaku saiteki ka",id:"optimasi perencanaan pasokan",en:"supply planning optimization",cat:"Process"},
{jp:"在庫可視化",romaji:"zaiko kashika",id:"visualisasi stok",en:"inventory visibility",cat:"Process"},
{jp:"サプライリスク管理",romaji:"sapurai risuku kanri",id:"manajemen risiko pasokan",en:"supply risk management",cat:"Process"},
{jp:"サプライチェーン最適化",romaji:"sapurai cheen saiteki ka",id:"optimasi rantai pasok",en:"supply chain optimization",cat:"Process"},
{jp:"調達デジタル化",romaji:"choutatsu dejitaru ka",id:"digitalisasi pengadaan",en:"procurement digitalization",cat:"Process"},
{jp:"物流最適化",romaji:"butsuryuu saiteki ka",id:"optimasi logistik",en:"logistics optimization",cat:"Process"},

/* ===== International Standard / Compliance ===== */
{jp:"国際品質基準",romaji:"kokusai hinshitsu kijun",id:"standar kualitas internasional",en:"international quality standard",cat:"Inspection"},
{jp:"規制要件遵守",romaji:"kisei youken junshu",id:"kepatuhan persyaratan regulasi",en:"regulatory compliance",cat:"Inspection"},
{jp:"輸出管理",romaji:"yushutsu kanri",id:"manajemen ekspor",en:"export control",cat:"Inspection"},
{jp:"輸入規制",romaji:"yunyuu kisei",id:"regulasi impor",en:"import regulation",cat:"Inspection"},
{jp:"認証取得",romaji:"ninshou shutoku",id:"perolehan sertifikasi",en:"certification acquisition",cat:"Inspection"},
{jp:"第三者監査",romaji:"daisansha kansa",id:"audit pihak ketiga",en:"third-party audit",cat:"Inspection"},
{jp:"適合宣言",romaji:"tekigou sengen",id:"deklarasi kesesuaian",en:"declaration of conformity",cat:"Inspection"},
{jp:"国際監査対応",romaji:"kokusai kansa taiou",id:"penanganan audit internasional",en:"international audit 대응",cat:"Inspection"},

/* ===== Enterprise System ===== */
{jp:"全社最適化",romaji:"zensha saiteki ka",id:"optimasi tingkat perusahaan",en:"enterprise optimization",cat:"Process"},
{jp:"統合管理システム",romaji:"tougou kanri shisutemu",id:"sistem manajemen terintegrasi",en:"integrated management system",cat:"Process"},
{jp:"基幹システム",romaji:"kikan shisutemu",id:"sistem inti perusahaan",en:"core system",cat:"Process"},
{jp:"全社データ連携",romaji:"zensha deeta renkei",id:"integrasi data perusahaan",en:"enterprise data integration",cat:"Process"},
{jp:"マスターデータ管理",romaji:"masutaa deeta kanri",id:"manajemen master data",en:"master data management",cat:"Process"},
{jp:"業務プロセス統合",romaji:"gyoumu purosesu tougou",id:"integrasi proses bisnis",en:"business process integration",cat:"Process"},
{jp:"ITアーキテクチャ",romaji:"IT aakitekucha",id:"arsitektur TI",en:"IT architecture",cat:"Process"},
{jp:"システム拡張性",romaji:"shisutemu kakuchousei",id:"skalabilitas sistem",en:"system scalability",cat:"Process"},

/* ===== Global Quality & Governance ===== */
{jp:"グローバル品質管理",romaji:"guroobaru hinshitsu kanri",id:"manajemen kualitas global",en:"global quality management",cat:"Inspection"},
{jp:"品質統制",romaji:"hinshitsu tousei",id:"pengendalian mutu terpusat",en:"quality governance",cat:"Inspection"},
{jp:"品質戦略",romaji:"hinshitsu senryaku",id:"strategi kualitas",en:"quality strategy",cat:"Inspection"},
{jp:"グローバルKPI",romaji:"guroobaru KPI",id:"indikator kinerja global",en:"global KPI",cat:"Inspection"},
{jp:"品質ベンチマーク",romaji:"hinshitsu benchimaaku",id:"pembandingan mutu",en:"quality benchmark",cat:"Inspection"},
{jp:"継続的改善文化",romaji:"keizokuteki kaizen bunka",id:"budaya perbaikan berkelanjutan",en:"continuous improvement culture",cat:"Inspection"},
{jp:"企業成熟度",romaji:"kigyou seijukudo",id:"tingkat kematangan organisasi",en:"organizational maturity",cat:"Inspection"},
{jp:"品質ロードマップ",romaji:"hinshitsu roodomaappu",id:"peta jalan kualitas",en:"quality roadmap",cat:"Inspection"},

/* ===== Risk / Resilience ===== */
{jp:"供給網レジリエンス",romaji:"kyoukyuu mou rejiriensu",id:"ketahanan rantai pasok",en:"supply chain resilience",cat:"Process"},
{jp:"事業継続戦略",romaji:"jigyou keizoku senryaku",id:"strategi keberlanjutan bisnis",en:"business continuity strategy",cat:"Process"},
{jp:"リスク分散",romaji:"risuku bunsan",id:"diversifikasi risiko",en:"risk diversification",cat:"Process"},
{jp:"危機管理体制",romaji:"kiki kanri taisei",id:"sistem manajemen krisis",en:"crisis management framework",cat:"Process"},
{jp:"回復計画",romaji:"kaifuku keikaku",id:"rencana pemulihan",en:"recovery plan",cat:"Process"},
{jp:"冗長化設計",romaji:"joujouka sekkei",id:"desain redundansi",en:"redundancy design",cat:"Process"},
{jp:"代替供給源",romaji:"daitai kyoukyuu gen",id:"sumber pasokan alternatif",en:"alternative supplier",cat:"Process"},
{jp:"安定操業",romaji:"antei sougyou",id:"operasi stabil",en:"stable operation",cat:"Process"}
 
  
   
];
