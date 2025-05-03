const quizData = [
    // ==========================================
    // === 深海生物 説明当てクイズデータ (20問) ===
    // === 画像パスは各自で設定してください    ===
    // ==========================================
    {
        questionText: "暗い深海（しんかい）で、頭から伸びる竿（さお）の先にある発光器（はっこうき）で獲物（えもの）をおびき寄せる魚。オスはメスより非常に小さい。",
        options: [
            { name: "チョウチンアンコウ", imagePath: "images/chochinankou.png" }, // 画像ファイル名を指定
            { name: "オニキンメ", imagePath: "images/onikinme.png" }, // 以下同様
            { name: "フクロウナギ", imagePath: "images/fukurounagi.png" },
            { name: "デメニギス", imagePath: "images/demenigisu.png" }
        ],
        answer: "チョウチンアンコウ"
    },
    {
        questionText: "世界最大級の無脊椎（むせきつい）動物として知られ、非常に長い触腕（しょくわん）を持つ巨大なイカ。マッコウクジラと戦うこともあると言われる。",
        options: [
            { name: "ダイオウイカ", imagePath: "images/daiouika.png" },
            { name: "コウモリダコ", imagePath: "images/koumoridako.png" },
            { name: "メンダコ", imagePath: "images/mendako.png" },
            { name: "ダンボオクトパス", imagePath: "images/danbo_octopus.png" } // 例:ダンボオクトパスのファイル名
        ],
        answer: "ダイオウイカ"
    },
    {
        questionText: "水深200～1000mに生息（せいそく）。平たい体と耳のようなヒレが特徴的（とくちょうてき）なタコの仲間。墨袋（すみぶくろ）は持たない。",
        options: [
            { name: "メンダコ", imagePath: "images/mendako.png" },
            { name: "ダンボオクトパス", imagePath: "images/danbo_octopus.png" },
            { name: "コウモリダコ", imagePath: "images/koumoridako.png" },
            { name: "ジュウモンジダコ", imagePath: "images/juumonjidako.png" } // 例:ジュウモンジダコのファイル名
        ],
        answer: "メンダコ"
    },
    {
        questionText: "「生きている化石（かせき）」とも呼ばれる原始的（げんしてき）なサメの仲間。ゴジラのモチーフになったとされる。",
        options: [
            { name: "ラブカ", imagePath: "images/rabuka.png" },
            { name: "ミツクリザメ", imagePath: "images/mitsukurizame.png" },
            { name: "メガマウスザメ", imagePath: "images/megamouth.png" },
            { name: "オンデンザメ", imagePath: "images/ondenzame.png" } // 架空の選択肢や別のサメ
        ],
        answer: "ラブカ"
    },
    {
        questionText: "頭部（とうぶ）が透明（とうめい）なドームで覆（おお）われており、その中に筒状（つつじょう）の緑色の目がある不思議な魚。目は真上を向いていることが多い。",
        options: [
            { name: "デメニギス", imagePath: "images/demenigisu.png" },
            { name: "ムネエソ", imagePath: "images/muneeso.png" },
            { name: "ハダカイワシ", imagePath: "images/hadakaiwashi.png" },
            { name: "ホウライエソ", imagePath: "images/houraieso.png" }
        ],
        answer: "デメニギス"
    },
    {
        questionText: "大きな口と袋のように伸びる胃を持つウナギの仲間。小さな目と長い体が特徴。",
        options: [
            { name: "フクロウナギ", imagePath: "images/fukurounagi.png" },
            { name: "リュウグウノツカイ", imagePath: "images/ryugu.png" },
            { name: "ラブカ", imagePath: "images/rabuka.png" },
            { name: "ミズウオ", imagePath: "images/mizuuo.png" }
        ],
        answer: "フクロウナギ"
    },
    {
        questionText: "数多（かずおお）くの手のような突起（とっき）をのばしている。体はゼリー状（じょう）でやわらかい。",
        options: [
            { name: "ギガントキプリス", imagePath: "images/gigantocypris.png" }, // 丸い目の甲殻類のイラスト
            { name: "ダイオウグソクムシ", imagePath: "images/daiougusokumushi.png" },
            { name: "タカアシガニ", imagePath: "images/takaashigani.png" },
            { name: "センジュナマコ", imagePath: "images/senjunamako.png" } // 架空の選択肢や別の生物
        ],
        answer: "ギガントキプリス" // 画像に対応する名前
    },
    {
        questionText: "長く多数の触手（しょくしゅ）を持つ大型のクラゲ。最大（さいだい）で２ｍ以上（いじょう）にもなる。",
        options: [
            { name: "キタユウレイクラゲ", imagePath: "images/kitayureikurage.png" }, // 長い触手のクラゲのイラスト
            { name: "ミズクラゲ", imagePath: "images/mizukurage.png" }, // 例: ミズクラゲのファイル名
            { name: "カツオノエボシ", imagePath: "images/katsuonoeboshi.png" }, // 架空の選択肢や別のクラゲ
            { name: "アンドンクラゲ", imagePath: "images/andonkurage.png" }
        ],
        answer: "キタユウレイクラゲ" // 画像に対応する名前
    },
    {
        questionText: "体がぺたんこで、腹部（ふくぶ）に発光器（はっこうき）が並（なら）んでいるのが特徴。骸骨（がいこつ）のように見える種（しゅ）もいる。",
        options: [
            { name: "ムネエソ", imagePath: "images/muneeso.png" }, // 体が透けて骨が見える魚
            { name: "ハダカイワシ", imagePath: "images/hadakaiwashi.png" },
            { name: "デメニギス", imagePath: "images/demenigisu.png" },
            { name: "ホテイウオ", imagePath: "images/hoteiuo.png" } // 架空の選択肢
        ],
        answer: "ムネエソ"
    },
    {
        questionText: "傘（かさ）のような膜（まく）と8本の腕（うで）を持つタコの仲間。光を発することができる。吸盤（きゅうばん）は1列。",
        options: [
            { name: "コウモリダコ", imagePath: "images/koumoridako.png" },
            { name: "メンダコ", imagePath: "images/mendako.png" },
            { name: "ダイオウイカ", imagePath: "images/daiouika.png" },
            { name: "ダンボオクトパス", imagePath: "images/danbo_octopus.png" }
        ],
        answer: "コウモリダコ"
    },
    {
        questionText: "ダンゴムシやフナムシに近い仲間で、深海の海底に生息する大型の甲殻類（こうかくるい）。「深海の掃除屋（そうじや）」とも呼ばれる。",
        options: [
            { name: "ダイオウグソクムシ", imagePath: "images/daiougusokumushi.png" },
            { name: "タカアシガニ", imagePath: "images/takaashigani.png" },
            { name: "オオグチボヤ", imagePath: "images/ooguchiboya.png" }, // 架空の選択肢
            { name: "センジュナマコ", imagePath: "images/senjunamako.png" }
        ],
        answer: "ダイオウグソクムシ"
    },
    {
        questionText: "大きな目が特徴で、体が赤く、食用（しょくよう）としても知られる深海魚。目が光を反射（はんしゃ）するため「光る眼」と呼ばれることも。",
        options: [
            { name: "キンメダイ", imagePath: "images/kinmedai.png" }, // 赤くて目が大きい魚
            { name: "アコウダイ", imagePath: "images/akoudai.png" }, // 架空の選択肢
            { name: "メヌケ", imagePath: "images/menuke.png" }, // 架空の選択肢
            { name: "ホウボウ", imagePath: "images/houbou.png" } // 架空の選択肢
        ],
        answer: "キンメダイ"
    },
    {
        questionText: "体中に多くの発光器（はっこうき）を持ち、群（む）れで行動（こうどう）することが多い小型の深海魚。昼夜（ちゅうや）で生活している深度（しんど）を変える。",
        options: [
            { name: "ハダカイワシ", imagePath: "images/hadakaiwashi.png" }, // 小型の発光魚
            { name: "ムネエソ", imagePath: "images/muneeso.png" },
            { name: "ホウライエソ", imagePath: "images/houraieso.png" }, // 架空の選択肢
            { name: "チョウチンアンコウ", imagePath: "images/chochinankou.png" }
        ],
        answer: "ハダカイワシ"
    },
    {
        questionText: "大きな耳のようなヒレを持ち、これをパタパタさせて泳ぐ姿（すがた）が愛（あい）らしいのタコの仲間。ディズニーのキャラクターからつけられた名前（なまえ）",
        options: [
            { name: "ダンボオクトパス", imagePath: "images/danbo_octopus.png" }, // 耳付きタコ
            { name: "メンダコ", imagePath: "images/mendako.png" },
            { name: "コウモリダコ", imagePath: "images/koumoridako.png" },
            { name: "ジュウモンジダコ", imagePath: "images/juumonjidako.png" } // 架空の選択肢
        ],
        answer: "ダンボオクトパス"
    },
    {
        questionText: "非常に大きな口を持つサメ。プランクトンを主食（しゅしょく）とし、性質（せいしつ）はおとなしいと考えられている。",
        options: [
            { name: "メガマウスザメ", imagePath: "images/megamouth.png" }, // 口が大きいサメ
            { name: "ジンベエザメ", imagePath: "images/jinbeizame.png" }, // 架空の選択肢
            { name: "ウバザメ", imagePath: "images/ubazame.png" }, // 架空の選択肢
            { name: "ミツクリザメ", imagePath: "images/mitsukurizame.png" }
        ],
        answer: "メガマウスザメ"
    },
    {
        questionText: "ゼラチン質（しつ）の柔（やわ）らかい体と大きな口、鋭（するど）い歯を持つ深海魚。大きな背びれも特徴。",
        options: [
            { name: "ミズウオ", imagePath: "images/mizuuo.png" }, // 帆のような背びれの魚
            { name: "タチウオ", imagePath: "images/tachiuo.png" }, // 架空の選択肢
            { name: "フクロウナギ", imagePath: "images/fukurounagi.png" },
            { name: "リュウグウノツカイ", imagePath: "images/ryugu.png" }
        ],
        answer: "ミズウオ"
    },
    {
        questionText: "体に比べて非常に大きな頭と牙（きば）のような歯を持つ深海魚。その恐（おそ）ろしい顔つきから名前が付けられた。",
        options: [
            { name: "オニキンメ", imagePath: "images/onikinme.png" }, // いかつい顔の魚
            { name: "チョウチンアンコウ", imagePath: "images/chochinankou.png" },
            { name: "ホウライエソ", imagePath: "images/houraieso.png" },
            { name: "メヒカリ", imagePath: "images/mehikari.png" }
        ],
        answer: "オニキンメ"
    },
    {
        questionText: "植物のような見た目をしているが、ヒトデやウニに近い動物の仲間。羽のような腕（うで）でプランクトンを捕（と）らえる。",
        options: [
            { name: "ウミユリ", imagePath: "images/umiyuri.png" }, // 植物のような生物
            { name: "ピンポンツリースポンジ", imagePath: "images/pingpongtreesponge.png" }, // 架空の選択肢
            { name: "センジュナマコ", imagePath: "images/senjunamako.png" }, // 架空の選択肢
            { name: "オオグチボヤ", imagePath: "images/ooguchiboya.png" } // 近い仲間
        ],
        answer: "ウミユリ"
    },
    {
        questionText: "非常に長い脚（あし）を持つ、世界最大のカニ。日本の太平洋側の深海に生息している。",
        options: [
            { name: "タカアシガニ", imagePath: "images/takaashigani.png" }, // 足長カニ
            { name: "ズワイガニ", imagePath: "images/zuwaigani.png" }, // 架空の選択肢
            { name: "ワタリガニ", imagePath: "images/watarigani.png" }, // 架空の選択肢
            { name: "サワガニ", imagePath: "images/sawagani.png" } // 架空の選択肢
        ],
        answer: "タカアシガニ"
    },
    {
        questionText: "襲（おそ）われるときは体を自分から切って逃げることもある、非常に長い銀色（ぎんいろ）の体と赤いひれを持つ深海魚。地震（じしん）の前触（まえぶ）れとして現（あらわ）れるという伝説（でんせつ）もある。",
        options: [
            { name: "リュウグウノツカイ", imagePath: "images/ryugu.png" }, // 長くて赤いヒレの魚
            { name: "フジクジラ", imagePath: "images/fujikujira.png" }, // 近い仲間
            { name: "フクロウナギ", imagePath: "images/fukurounagi.png" }, // 架空の選択肢
            { name: "ハダカイワシ", imagePath: "images/hadakaiwashi.png" } // 近い仲間
        ],
        answer: "リュウグウノツカイ"
    }
    // ==========================================
];


// === DOM要素取得などは変更なし ===
const questionTextElement = document.getElementById('question-text');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const finalFeedbackElement = document.getElementById('final-feedback'); // 結果表示用
const restartBtn = document.getElementById('restart-btn');
const progressElement = document.getElementById('progress');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// === loadQuestion 関数を修正 ===
function loadQuestion() {
    selectedAnswer = null;
    feedbackElement.textContent = '';
    feedbackElement.className = '';
    optionsElement.innerHTML = '';

    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        // 問題文を設定 (innerHTML を使って <ruby> タグを解釈させる)
        questionTextElement.innerHTML = currentQuestion.questionText; // ★修正点
        progressElement.textContent = `問題 ${currentQuestionIndex + 1} / ${quizData.length}`;

        const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn-image');
            button.dataset.name = option.name;

            const img = document.createElement('img');
            img.src = option.imagePath;
            img.alt = option.name;

            const nameSpan = document.createElement('span');
            nameSpan.textContent = option.name;

            button.appendChild(img);
            button.appendChild(nameSpan);

            button.addEventListener('click', () => handleAnswer(option.name, button));
            optionsElement.appendChild(button);
        });

        nextBtn.style.display = 'none';
    } else {
        showResults();
    }
}

// === handleAnswer 関数は変更なし ===
function handleAnswer(selectedName, button) {
    if (selectedAnswer) return;

    selectedAnswer = selectedName;
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    const optionButtons = optionsElement.querySelectorAll('.option-btn-image');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.name === correctAnswer) {
             if (selectedName !== correctAnswer) {
                 btn.classList.add('reveal-correct');
            }
        }
    });

    if (selectedName === correctAnswer) {
        score++;
        button.classList.add('correct');
        feedbackElement.textContent = "正解！";
        feedbackElement.className = 'correct-feedback';
    } else {
        button.classList.add('incorrect');
        feedbackElement.textContent = `残念！ 正解は「${correctAnswer}」でした。`;
        feedbackElement.className = 'incorrect-feedback';
    }

    if (currentQuestionIndex < quizData.length - 1) {
        nextBtn.textContent = '次の問題へ';
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.textContent = '結果を見る';
        nextBtn.style.display = 'inline-block';
    }
}

// === showResults 関数を修正 ===
function showResults() {
    questionArea.style.display = 'none';
    resultArea.style.display = 'block';
    scoreElement.textContent = `${quizData.length} 問中 ${score} 問正解！`;

    let finalFeedbackMsg = ""; // 表示するメッセージ

    if (score === quizData.length) { // 満点の場合
        finalFeedbackMsg = "よくやった。<ruby>財宝<rt>ざいほう</rt></ruby>のありかのヒントを<ruby>与<rt>あた</rt></ruby>えよう。『こごろ』だ。<ruby>忘<rt>わす</rt></ruby>れるな、、、";
    } else { // 満点でない場合
        // スコアに応じた励ましの言葉 (例)
        let encouragement = "";
        const percentage = (score / quizData.length) * 100;
        if (percentage >= 70) {
            encouragement = "おしい！あともう<ruby>少<rt>すこ</rt></ruby>し！";
        } else if (percentage >= 40) {
            encouragement = "まずまずだな！";
        } else {
            encouragement = "<ruby>次<rt>つぎ</rt></ruby>は<ruby>期待<rt>きたい</rt></ruby>しているぞ！";
        }
        // メッセージを組み立てる (<br>で改行)
        finalFeedbackMsg = `${encouragement}<br><ruby>全問正解<rt>ぜんもんせいかい</rt></ruby>したもののには<ruby>褒美<rt>ほうび</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えよう。`;
    }

    // finalFeedbackElementにメッセージを設定 (innerHTML を使う)
    finalFeedbackElement.innerHTML = finalFeedbackMsg; // ★修正点
}

// === イベントリスナーは変更なし ===
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultArea.style.display = 'none';
    questionArea.style.display = 'block';
    loadQuestion();
});

// 初期読み込み
loadQuestion();
