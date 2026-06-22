export type Platform = "Kindle" | "Audible";

export type Entry = {
  slug: string;
  title: string;
  author: string;
  asin: string;
  platform: Platform;
  contentType: "本" | "ドキュメンタリー";
  genre: string;
  coverUrl?: string;
  hook: string;
  whyRead: string;
  recommenderStory: string;
  recommenderName: string;
  recommenderTag: string;
  sourceLabel: string;
  sourceUrl: string;
  status: "active" | "archived";
  onSale: boolean;
  saleName?: string;
  saleEndsLabel?: string;
  dateAdded: string;
};

const AFFILIATE_TAG = "yomimado91-22";

export function affiliateUrl(asin: string, platform: Platform = "Kindle"): string {
  if (platform === "Audible") {
    return `https://www.audible.co.jp/pd/${asin}?tag=${AFFILIATE_TAG}`;
  }
  return `https://www.amazon.co.jp/dp/${asin}/?tag=${AFFILIATE_TAG}`;
}

export const entries: Entry[] = [
  {
    slug: "1984",
    title: "一九八四年",
    author: "ジョージ・オーウェル（高橋和久 訳）",
    asin: "B009DEMC8W",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "BTSのRMが何度も読み返し、メンバーにも広がった一冊",
    whyRead:
      "監視社会と思考統制を描いたディストピア小説の代表作。時代を超えて読み継がれる一冊として、自由とは何かを問い直させる。",
    recommenderStory:
      "RMは2017年のインタビューで「読み返したくなる本」として本作を挙げている。さらにリアリティ番組『In the SOOP』では、RMが本作を読む場面が放送され、その後SUGA・j-hopeも同作を手に取る様子が映った。一人の愛読書から他メンバーへ伝播していった点が、単なる「好きな本」以上の存在感を物語っている。",
    recommenderName: "RM（BTSリーダー、Kim Namjoon）",
    recommenderTag: "音楽アーティスト",
    sourceLabel:
      "本人が好んで再読する作品として複数のメディア・ファンサイトで紹介されている",
    sourceUrl: "https://www.buzzfeed.com/kagrawal/books-rm-of-bts-has-read-or-recommended",
    status: "active",
    onSale: true,
    saleName: "早川書房 夏の超大セール 第1弾",
    saleEndsLabel: "7月13日まで",
    dateAdded: "2026-06-21",
  },
  {
    slug: "ikikata",
    title: "生き方",
    author: "稲盛和夫",
    asin: "B008BCCLBK",
    platform: "Kindle",
    contentType: "本",
    genre: "自己啓発",
    hook: "大谷翔平が「人生の教科書」と呼ぶ一冊",
    whyRead:
      "京セラ創業者が綴る、仕事と人生に向き合う哲学書。功利や効率を超えた「人としての筋の通し方」を説く、世代を超えて読まれる定番書。",
    recommenderStory:
      "大谷翔平は本書を「人生の教科書」として愛読していることが複数のメディアで報じられている。何度も読み返し、心に留まった言葉をノートに書き留めるという読書スタイルでも知られる。",
    recommenderName: "大谷翔平（プロ野球選手）",
    recommenderTag: "スポーツ選手",
    sourceLabel: "「人生の教科書」として愛読していることが複数メディアで報じられている",
    sourceUrl: "http://reading-data.digital-dokusho.jp/?eid=1791",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "gorin-no-sho",
    title: "五輪書",
    author: "宮本武蔵",
    asin: "B00DQA8IUA",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "大谷翔平が「一回読んだだけでは50も理解できない」と語る兵法書",
    whyRead:
      "剣豪・宮本武蔵が晩年に著した兵法書。勝負における心構えや鍛錬の哲学は、スポーツや仕事における「型」の追求にも通じる。",
    recommenderStory:
      "大谷翔平は本書を何度も読み返している愛読書として知られ、「五輪を1回読んだだけで100のうち50以上理解できる人は少ない」と自身のインタビューで語っている。",
    recommenderName: "大谷翔平（プロ野球選手）",
    recommenderTag: "スポーツ選手",
    sourceLabel: "本人インタビューで読み返している愛読書として言及",
    sourceUrl: "https://shibablog.online/",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "ryoma-ga-yuku",
    title: "竜馬がゆく（一）",
    author: "司馬遼太郎",
    asin: "B00D3CBFC4",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "孫正義が渡米を決意するきっかけになった歴史小説",
    whyRead:
      "幕末を生きた坂本龍馬を描いた歴史小説の傑作。時代を変える人物の生き方を通して、行動することの意味を教えてくれる一冊。",
    recommenderStory:
      "孫正義は高校時代に家庭教師から本作を薦められて愛読し、坂本龍馬の生き方に憧れて渡米を決意したという逸話が複数のメディアで紹介されている。",
    recommenderName: "孫正義（ソフトバンク創業者）",
    recommenderTag: "経営者・起業家",
    sourceLabel: "渡米を決意した逸話が複数メディアで紹介されている",
    sourceUrl: "https://note.com/uraraaonami/n/n32353a8bdd03",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "ningen-shikkaku",
    title: "人間失格",
    author: "太宰治",
    asin: "B0096PE4F2",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "又吉直樹と羽生結弦、二人の表現者が読んだ一冊",
    whyRead:
      "人間社会への違和感と孤独を描いた太宰治の代表作。生きることの痛みに正面から向き合う文学として、時代を超えて読まれ続けている。",
    recommenderStory:
      "お笑い芸人・作家の又吉直樹はインタビューで太宰治作品の中でも特に好む一冊として本作を挙げている。フィギュアスケートの羽生結弦は、プログラム「Echoes of Life」の準備段階で本作を読んでいたと語っている。",
    recommenderName: "又吉直樹 ／ 羽生結弦",
    recommenderTag: "芸人・コメディアン",
    sourceLabel: "又吉直樹のインタビュー、羽生結弦の発言として複数メディアで紹介",
    sourceUrl: "https://www.webdoku.jp/rensai/sakka/michi211_matayoshi/20191026_3.html",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "demian",
    title: "デミアン",
    author: "ヘルマン・ヘッセ（高橋健二 訳）",
    asin: "B01E6HG8MQ",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "BTSのMVとアルバムのコンセプトに影響を与えた青春文学",
    whyRead:
      "自我の確立と成長の苦悩を描いたヘッセの代表作。少年から大人になる過程の痛みと発見を、繊細な筆致で描き出す一冊。",
    recommenderStory:
      "RMは本作からの影響を公言しており、BTSのMV「Blood, Sweat & Tears」とアルバム「WINGS」のコンセプトは本作の世界観に着想を得たと、本人言及・複数メディアで報じられている。",
    recommenderName: "RM（BTSリーダー、Kim Namjoon）",
    recommenderTag: "音楽アーティスト",
    sourceLabel: "MVとアルバムのコンセプトへの影響が本人言及・複数メディアで報道",
    sourceUrl: "https://www.buzzfeed.com/kagrawal/books-rm-of-bts-has-read-or-recommended",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "zero-to-one",
    title: "ゼロ・トゥ・ワン 君はゼロから何を生み出せるか",
    author: "ピーター・ティール",
    asin: "B00NQ3QONK",
    platform: "Kindle",
    contentType: "本",
    genre: "ビジネス・経済",
    hook: "イーロン・マスクが起業家に薦める定番書",
    whyRead:
      "「競争するな、独占せよ」という挑戦的な主張で知られるスタートアップ論の定番書。ゼロから新しい価値を生み出す思考法を説く。",
    recommenderStory:
      "イーロン・マスクは本書を起業家への推薦書として複数回言及していることが報じられている。スタートアップの本質を「コピーではなく創造」に見出す思考は、マスク自身の経営哲学とも重なる。",
    recommenderName: "イーロン・マスク（経営者）",
    recommenderTag: "経営者・起業家",
    sourceLabel: "起業家への推薦書として本人が複数回言及",
    sourceUrl: "https://fs.blog/elon-musk-book-recommendations/",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "grit",
    title: "やり抜く力 GRIT",
    author: "アンジェラ・ダックワース",
    asin: "B01LMP9RLY",
    platform: "Kindle",
    contentType: "本",
    genre: "自己啓発",
    hook: "セリーナ・ウィリアムズが自身の成功と重ねた一冊",
    whyRead:
      "成功を決めるのは才能やIQではなく「情熱と粘り強さ」だと説く一冊。あらゆる分野の達成に通じる、努力の科学的な裏付けを提示する。",
    recommenderStory:
      "セリーナ・ウィリアムズは、自身の成功は才能だけでなく不断の努力によるものだという本書の考え方に強く共鳴していると発言している。",
    recommenderName: "セリーナ・ウィリアムズ（プロテニス選手）",
    recommenderTag: "スポーツ選手",
    sourceLabel: "自身の成功観と重なると本人が発言",
    sourceUrl: "https://www.newsbytesapp.com/news/lifestyle/serena-williams-favorite-books-for-mental-strength/story",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-21",
  },
  {
    slug: "all-the-pretty-horses",
    title: "All the Pretty Horses",
    author: "Cormac McCarthy（英語版）",
    asin: "B004FV4T5W",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "ブラッド・ピットが朗読を手がけたほど思い入れの強い一冊",
    whyRead:
      "テキサスの牧場を失った少年がメキシコへ渡る、ボーダー・トリロジー第一作。乾いた文体で描かれる青春と失われゆくアメリカの原風景。",
    recommenderStory:
      "ブラッド・ピットは本作のオーディオブック版で自ら朗読を担当している。出版元のコメントでも、マッカーシーの文体とピットの声が組み合わさることで物語が生き生きと立ち上がると評されている。",
    recommenderName: "ブラッド・ピット（俳優）",
    recommenderTag: "映画監督・俳優",
    sourceLabel: "本人がオーディオブックの朗読を担当",
    sourceUrl: "https://baos.pub/brad-pitts-favourite-books-are-badass-b96a47d1e251",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "don-quixote",
    title: "Don Quixote",
    author: "Miguel de Cervantes（英語版）",
    asin: "B07XXYKW3J",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "ブラッド・ピットが「言葉に浸りたい時」に手に取る古典",
    whyRead:
      "風車を巨人と思い込む騎士の冒険を描いた、近代小説の原点とされる一冊。滑稽さの中に人間の理想と現実の隔たりを映し出す。",
    recommenderStory:
      "ブラッド・ピットはインタビューで「言葉に浸りたい時に読み返すクラシック」として本作を挙げている。",
    recommenderName: "ブラッド・ピット（俳優）",
    recommenderTag: "映画監督・俳優",
    sourceLabel: "インタビューで読み返すクラシックとして言及",
    sourceUrl: "https://baos.pub/brad-pitts-favourite-books-are-badass-b96a47d1e251",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "crying-in-h-mart",
    title: "Crying in H Mart: A Memoir",
    author: "Michelle Zauner（英語版）",
    asin: "0525657746",
    platform: "Kindle",
    contentType: "本",
    genre: "エッセイ",
    hook: "Dua Lipaが自身のブッククラブで選んだ、食と家族をめぐる回想録",
    whyRead:
      "インディーロックバンド「Japanese Breakfast」のフロントウーマンが、韓国系の母を亡くした経験と料理を通じて自分のルーツを見つめ直す回想録。NYTベストセラー1位を1年以上記録した話題作。",
    recommenderStory:
      "Dua Lipaは自身のメディア「Service95」が運営するブッククラブで本作を選書している。グリーフ（悲嘆）と食、アイデンティティを重ねた物語として紹介されている。",
    recommenderName: "Dua Lipa（音楽アーティスト）",
    recommenderTag: "音楽アーティスト",
    sourceLabel: "Service95ブッククラブの選書として紹介",
    sourceUrl: "https://tertulia.com/editorial-list/dua-lipa-complete-book-club-picks",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "animal-farm",
    title: "動物農場〔新訳版〕",
    author: "ジョージ・オーウェル（山形浩生 訳）",
    asin: "B0CWKW8T5W",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "トーマス・ケラーが「人生に最も影響を与えた本」の一冊に選んだ寓話",
    whyRead:
      "全体主義への痛烈な風刺を寓話形式で描いた、『一九八四年』と並ぶオーウェルの代表作。権力がどのように腐敗していくかを動物たちの物語に託して描き、時代を超えて読み継がれている。",
    recommenderStory:
      "三ツ星シェフのトーマス・ケラーは、ニューヨークの書店One Grand Booksが手がける「人生に最も影響を与えた10冊」の選書リストに本作を選出。同リストには料理人としての原点となった『Ma Gastronomie』なども並び、料理だけでなく人格の形成に影響を与えた一冊として紹介している。",
    recommenderName: "トーマス・ケラー（シェフ）",
    recommenderTag: "料理人",
    sourceLabel: "One Grand Booksの選書リストで「人生に最も影響を与えた本」として紹介",
    sourceUrl: "https://onegrandbooks.com/shop/curators/chef/thomas-keller/",
    status: "active",
    onSale: true,
    saleName: "早川書房 夏の超大セール 第1弾",
    saleEndsLabel: "7月13日まで",
    dateAdded: "2026-06-22",
  },
  {
    slug: "snow-crash",
    title: "スノウ・クラッシュ〔新版〕 上",
    author: "ニール・スティーヴンスン（日暮雅通 訳）",
    asin: "B09Q8DB3TG",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "Nvidia CEOジェンスン・フアンが「メタバース」の構想を得たと語るSFの原点",
    whyRead:
      "「メタバース」という言葉を生み出した伝説的SF小説。仮想世界と現実が交錯する近未来を描き、30年後のテクノロジー業界の構想に直接影響を与えた一冊。",
    recommenderStory:
      "ジェンスン・フアンはインタビューで、自社の描く「メタバース」のビジョンが本作に着想を得たものであることを度々語っている。エンジニアたちに、AIとグラフィックス技術の進化がいつか本作のような相互接続された仮想世界を実現すると説き、社内でも紹介している作品。",
    recommenderName: "ジェンスン・フアン（Nvidia CEO）",
    recommenderTag: "経営者・起業家",
    sourceLabel: "メタバースの構想を得たと複数のインタビューで本人が言及",
    sourceUrl: "https://venturebeat.com/games/jensen-huang-interview-the-physical-world-and-the-metaverse-can-be-connected/",
    status: "active",
    onSale: true,
    saleName: "早川書房 夏の超大セール 第1弾",
    saleEndsLabel: "7月13日まで",
    dateAdded: "2026-06-22",
  },
  {
    slug: "remains-of-the-day",
    title: "日の名残り",
    author: "カズオ・イシグロ（土屋政雄 訳）",
    asin: "B009DEMAKM",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "ジェフ・ベゾスが「人生最高の一冊」と呼ぶブッカー賞受賞作",
    whyRead:
      "失われゆく英国貴族社会を、老執事の回想を通して描くイシグロの代表作。1989年ブッカー賞受賞。静謐な筆致の奥に、人生の選択と後悔というテーマが深く流れる。",
    recommenderStory:
      "ジェフ・ベゾスは本作を「私の人生最高の本」と公言しており、Amazon創業を後押しした「後悔最小化フレームワーク」の発想にもこの作品が影響したと伝えられている。社内では長年「ベゾスの愛読書」として知られている。",
    recommenderName: "ジェフ・ベゾス（Amazon創業者）",
    recommenderTag: "経営者・起業家",
    sourceLabel: "「人生最高の本」と本人が複数のインタビューで発言",
    sourceUrl: "https://www.cnbc.com/2017/10/05/bezos-favorite-kazuo-ishiguro-wins-the-nobel-prize-in-literature.html",
    status: "active",
    onSale: true,
    saleName: "Kindleストア 期間限定キャンペーン",
    saleEndsLabel: "7月13日まで",
    dateAdded: "2026-06-22",
  },
  {
    slug: "shiokari-toge",
    title: "塩狩峠",
    author: "三浦綾子",
    asin: "B009YES582",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "椎名林檎が文庫の帯に直筆コメントを寄せた、実話に基づく感動作",
    whyRead:
      "明治42年に実際に起きた鉄道事故をもとに、信仰と自己犠牲を描いた三浦綾子の代表作。多くの読者の心を動かし続けるロングセラー。",
    recommenderStory:
      "椎名林檎は中学時代、国語のテストに引用された本作の一節に感動し、全巻を購入して一日で読み終えたという。その思い入れの強さから、文庫版の帯には自身の写真とともに推薦コメントを寄せている。",
    recommenderName: "椎名林檎（音楽アーティスト）",
    recommenderTag: "音楽アーティスト",
    sourceLabel: "文庫版の帯に本人の推薦コメントが掲載されている",
    sourceUrl: "https://tsunatsuna.blog.ss-blog.jp/2005-02-23",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "norwegian-wood",
    title: "ノルウェイの森",
    author: "村上春樹",
    asin: "B07KVTV42B",
    platform: "Kindle",
    contentType: "本",
    genre: "小説",
    hook: "ハリー・スタイルズが「一日中読んでいたいと思った最初の本」と語る村上文学の代表作",
    whyRead:
      "喪失と再生を描いた村上春樹の代表的長編小説。1960年代末の青春の記憶を通じて、愛と死が静かに織り込まれる、時代も国境も越えて読み継がれる一冊。",
    recommenderStory:
      "ハリー・スタイルズはRolling Stone誌のインタビューで村上春樹を「お気に入りの作家」と語り、本作を「一日中これだけ読んでいたいと思った、おそらく初めての本」と評している。",
    recommenderName: "ハリー・スタイルズ（音楽アーティスト）",
    recommenderTag: "音楽アーティスト",
    sourceLabel: "Rolling Stone誌のインタビューで本人が発言",
    sourceUrl: "https://www.nypl.org/blog/2022/08/23/harry-styles-house-books",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "shinya-tokkyu-1",
    title: "深夜特急1―香港・マカオ―",
    author: "沢木耕太郎",
    asin: "B0096PE3WQ",
    platform: "Kindle",
    contentType: "本",
    genre: "ノンフィクション",
    hook: "作家・角田光代が「生きる上での想像力が培われた本」に選んだ紀行文学の名作",
    whyRead:
      "インドからロンドンへ、乗合いバスで大陸を横断する一年以上の放浪を描いた紀行文学の傑作。多くのバックパッカーの「旅のバイブル」として読み継がれている。",
    recommenderStory:
      "角田光代は、人生に静かに影響を与え心に定着していった12冊の一冊として本作を選び、「人との触れ合いが旅ならではのこと」だとその本質を言い表している。",
    recommenderName: "角田光代（作家）",
    recommenderTag: "文学・小説家",
    sourceLabel: "「& Premium」誌の連載で本人が選書・コメント",
    sourceUrl: "https://andpremium.jp/article/the-better-life-book-philosophy-02/",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
  {
    slug: "tom-sawyer-no-boken",
    title: "トム・ソーヤーの冒険",
    author: "マーク・トウェイン（土屋京子 訳）",
    asin: "B00H6XBE5Y",
    platform: "Kindle",
    contentType: "本",
    genre: "古典",
    hook: "爆笑問題・太田光が小学生時代に夢中になった「トム・ソーヤーごっこ」の原点",
    whyRead:
      "いたずら好きの少年トムが繰り広げる冒険を描いた、アメリカ文学を代表する一冊。子供の自由な心と大人になることへの葛藤を、痛快なユーモアとともに描く。",
    recommenderStory:
      "太田光は小学2、3年生のときに本作を読み、友達に「トム・ソーヤーごっこをやろう」と役を割り振っていたと振り返っている。みんながウルトラマンごっこをしたがる中、一人だけ違う遊びを提案していたという逸話が、彼の感性の原点をうかがわせる。",
    recommenderName: "太田光（爆笑問題）",
    recommenderTag: "芸人・コメディアン",
    sourceLabel: "Newsweek日本版「太田光を変えた5冊」での本人の発言",
    sourceUrl: "https://www.newsweekjapan.jp/stories/culture/2020/08/5-106.php",
    status: "active",
    onSale: false,
    dateAdded: "2026-06-22",
  },
];
