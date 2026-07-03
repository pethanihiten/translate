/* ---------------- DATA ---------------- */
const TENSES = [
  {
    id:"present-simple", name:"Present Simple", emoji:"☀️",
    sub:"Daily habits & facts",
    formula:"Subject + V1 (s/es) + Object",
    hindi:"इस Tense का उपयोग रोज़मर्रा की आदतों, सामान्य तथ्यों और नियमित कार्यों को बताने के लिए किया जाता है।",
    sentences:[
      ["I go to school every day.","मैं हर दिन स्कूल जाता हूँ।"],
      ["She drinks tea every morning.","वह हर सुबह चाय पीती है।"],
      ["We play cricket on Sundays.","हम रविवार को क्रिकेट खेलते हैं।"],
      ["The sun rises in the east.","सूरज पूर्व में उगता है।"],
      ["He works in a bank.","वह एक बैंक में काम करता है।"],
      ["They live in Delhi.","वे दिल्ली में रहते हैं।"],
      ["My mother cooks delicious food.","मेरी माँ स्वादिष्ट खाना बनाती है।"],
      ["I brush my teeth twice a day.","मैं दिन में दो बार दाँत साफ करता हूँ।"],
      ["Birds fly in the sky.","पक्षी आसमान में उड़ते हैं।"],
      ["Water boils at 100 degrees.","पानी 100 डिग्री पर उबलता है।"]
    ]
  },
  {
    id:"present-continuous", name:"Present Continuous", emoji:"🏃",
    sub:"Actions happening now",
    formula:"Subject + is/am/are + V1+ing + Object",
    hindi:"इस Tense का उपयोग उन कार्यों के लिए होता है जो अभी, इसी समय हो रहे हैं।",
    sentences:[
      ["I am reading a book now.","मैं अभी एक किताब पढ़ रहा हूँ।"],
      ["She is cooking dinner.","वह रात का खाना बना रही है।"],
      ["They are playing in the garden.","वे बगीचे में खेल रहे हैं।"],
      ["He is watching television.","वह टेलीविज़न देख रहा है।"],
      ["We are learning English.","हम अंग्रेज़ी सीख रहे हैं।"],
      ["The baby is sleeping.","बच्चा सो रहा है।"],
      ["It is raining outside.","बाहर बारिश हो रही है।"],
      ["I am writing a letter.","मैं एक पत्र लिख रहा हूँ।"],
      ["You are talking too fast.","तुम बहुत तेज़ बोल रहे हो।"],
      ["The students are listening carefully.","छात्र ध्यान से सुन रहे हैं।"]
    ]
  },
  {
    id:"present-perfect", name:"Present Perfect", emoji:"✅",
    sub:"Completed, effect now",
    formula:"Subject + has/have + V3 + Object",
    hindi:"इस Tense का उपयोग उन कार्यों के लिए होता है जो अभी-अभी पूरे हुए हैं या जिनका प्रभाव अब भी है।",
    sentences:[
      ["I have finished my homework.","मैंने अपना होमवर्क पूरा कर लिया है।"],
      ["She has eaten her lunch.","उसने अपना दोपहर का खाना खा लिया है।"],
      ["They have visited Agra.","वे आगरा घूम चुके हैं।"],
      ["He has lost his keys.","उसने अपनी चाबियाँ खो दी हैं।"],
      ["We have learned a new lesson.","हमने एक नया पाठ सीख लिया है।"],
      ["I have seen this movie before.","मैंने यह फिल्म पहले देखी है।"],
      ["She has just arrived.","वह अभी-अभी पहुँची है।"],
      ["You have done a great job.","तुमने बहुत अच्छा काम किया है।"],
      ["The train has already left.","ट्रेन पहले ही जा चुकी है।"],
      ["I have known him for years.","मैं उसे सालों से जानता हूँ।"]
    ]
  },
  {
    id:"past-simple", name:"Past Simple", emoji:"⏪",
    sub:"Finished past actions",
    formula:"Subject + V2 + Object",
    hindi:"इस Tense का उपयोग उन कार्यों के लिए होता है जो भूतकाल में पूरे हो चुके हैं।",
    sentences:[
      ["I went to the market yesterday.","मैं कल बाज़ार गया था।"],
      ["She wrote a letter.","उसने एक पत्र लिखा।"],
      ["They watched a movie last night.","उन्होंने कल रात एक फिल्म देखी।"],
      ["He played football in the evening.","उसने शाम को फुटबॉल खेला।"],
      ["We visited our grandparents.","हम अपने दादा-दादी से मिलने गए।"],
      ["I ate breakfast at eight.","मैंने आठ बजे नाश्ता किया।"],
      ["She cleaned the whole house.","उसने पूरा घर साफ किया।"],
      ["The teacher explained the lesson.","शिक्षक ने पाठ समझाया।"],
      ["It rained heavily last week.","पिछले हफ्ते ज़ोरदार बारिश हुई।"],
      ["We bought new clothes.","हमने नए कपड़े खरीदे।"]
    ]
  },
  {
    id:"past-continuous", name:"Past Continuous", emoji:"🕰️",
    sub:"Ongoing in the past",
    formula:"Subject + was/were + V1+ing + Object",
    hindi:"इस Tense का उपयोग उन कार्यों के लिए होता है जो भूतकाल में किसी समय जारी थे।",
    sentences:[
      ["I was reading when she called.","जब उसने फोन किया तब मैं पढ़ रहा था।"],
      ["She was cooking in the kitchen.","वह रसोई में खाना बना रही थी।"],
      ["They were playing in the rain.","वे बारिश में खेल रहे थे।"],
      ["He was sleeping at noon.","वह दोपहर में सो रहा था।"],
      ["We were waiting for the bus.","हम बस का इंतज़ार कर रहे थे।"],
      ["It was getting dark.","अंधेरा हो रहा था।"],
      ["The children were laughing loudly.","बच्चे ज़ोर से हँस रहे थे।"],
      ["I was watching TV at that time.","उस समय मैं टीवी देख रहा था।"],
      ["You were talking on the phone.","तुम फोन पर बात कर रहे थे।"],
      ["The birds were singing in the morning.","सुबह पक्षी गा रहे थे।"]
    ]
  },
  {
    id:"future-simple", name:"Future Simple", emoji:"🚀",
    sub:"Actions yet to happen",
    formula:"Subject + will/shall + V1 + Object",
    hindi:"इस Tense का उपयोग उन कार्यों के लिए होता है जो भविष्य में होंगे।",
    sentences:[
      ["I will go to college tomorrow.","मैं कल कॉलेज जाऊँगा।"],
      ["She will cook dinner tonight.","वह आज रात खाना बनाएगी।"],
      ["They will visit us next week.","वे अगले हफ्ते हमसे मिलने आएँगे।"],
      ["He will pass the exam.","वह परीक्षा पास करेगा।"],
      ["We will start a new project.","हम एक नया प्रोजेक्ट शुरू करेंगे।"],
      ["It will rain in the evening.","शाम को बारिश होगी।"],
      ["I will help you with your work.","मैं तुम्हारे काम में मदद करूँगा।"],
      ["You will love this place.","तुम्हें यह जगह बहुत पसंद आएगी।"],
      ["The shop will open at nine.","दुकान नौ बजे खुलेगी।"],
      ["We shall meet again soon.","हम जल्द ही फिर मिलेंगे।"]
    ]
  },
  {
    id:"modal-would", name:"Would", emoji:"🙏",
    sub:"Polite requests & wishes",
    formula:"Subject + would + V1 + Object",
    hindi:"'Would' का उपयोग विनम्र निवेदन, इच्छा, और काल्पनिक स्थितियों के लिए किया जाता है।",
    sentences:[
      ["I would like a cup of tea.","मैं एक कप चाय लेना चाहूँगा।"],
      ["Would you help me, please?","क्या आप मेरी मदद करेंगे?"],
      ["She would visit us every summer.","वह हर गर्मी में हमसे मिलने आती थी।"],
      ["I would buy a car if I had money.","अगर मेरे पास पैसे होते तो मैं कार खरीदता।"],
      ["Would you like some water?","क्या आप थोड़ा पानी लेंगे?"],
      ["He would never tell a lie.","वह कभी झूठ नहीं बोलेगा।"],
      ["We would love to come to your party.","हमें आपकी पार्टी में आना अच्छा लगेगा।"],
      ["I would rather stay at home.","मैं घर पर रहना ज़्यादा पसंद करूँगा।"],
      ["They would play together as children.","बचपन में वे साथ खेला करते थे।"],
      ["Would it be okay if I sat here?","क्या मैं यहाँ बैठ जाऊँ तो ठीक रहेगा?"]
    ]
  },
  {
    id:"modal-could", name:"Could", emoji:"💪",
    sub:"Ability & polite asks",
    formula:"Subject + could + V1 + Object",
    hindi:"'Could' का उपयोग बीती क्षमता, विनम्र निवेदन और संभावना दिखाने के लिए किया जाता है।",
    sentences:[
      ["I could swim when I was young.","जब मैं छोटा था तब मैं तैर सकता था।"],
      ["Could you please open the window?","क्या आप कृपया खिड़की खोल देंगे?"],
      ["She could speak three languages.","वह तीन भाषाएँ बोल सकती थी।"],
      ["We could go for a walk later.","हम बाद में टहलने जा सकते हैं।"],
      ["Could I borrow your pen?","क्या मैं आपका पेन ले सकता हूँ?"],
      ["He could not come to the party.","वह पार्टी में नहीं आ सका।"],
      ["It could rain this evening.","आज शाम बारिश हो सकती है।"],
      ["Could you tell me the time?","क्या आप मुझे समय बता सकते हैं?"],
      ["They could finish the work early.","वे काम जल्दी खत्म कर सकते थे।"],
      ["I wish I could fly.","काश मैं उड़ सकता।"]
    ]
  },
  {
    id:"modal-should", name:"Should", emoji:"💡",
    sub:"Advice & duty",
    formula:"Subject + should + V1 + Object",
    hindi:"'Should' का उपयोग सलाह देने, सही काम बताने और कर्तव्य के लिए किया जाता है।",
    sentences:[
      ["You should drink more water.","तुम्हें अधिक पानी पीना चाहिए।"],
      ["We should respect our elders.","हमें अपने बड़ों का सम्मान करना चाहिए।"],
      ["He should study hard for the exam.","उसे परीक्षा के लिए मन लगाकर पढ़ना चाहिए।"],
      ["You should not waste food.","तुम्हें खाना बर्बाद नहीं करना चाहिए।"],
      ["I should call my mother.","मुझे अपनी माँ को फोन करना चाहिए।"],
      ["They should arrive on time.","उन्हें समय पर पहुँचना चाहिए।"],
      ["You should see a doctor.","तुम्हें डॉक्टर को दिखाना चाहिए।"],
      ["We should save money for the future.","हमें भविष्य के लिए पैसे बचाने चाहिए।"],
      ["She should apologize for her mistake.","उसे अपनी गलती के लिए माफी माँगनी चाहिए।"],
      ["You should sleep early tonight.","तुम्हें आज रात जल्दी सोना चाहिए।"]
    ]
  },
  {
    id:"modal-may", name:"May", emoji:"🤔",
    sub:"Permission & possibility",
    formula:"Subject + may + V1 + Object",
    hindi:"'May' का उपयोग अनुमति माँगने और संभावना दिखाने के लिए किया जाता है।",
    sentences:[
      ["May I come in?","क्या मैं अंदर आ सकता हूँ?"],
      ["It may rain tomorrow.","कल बारिश हो सकती है।"],
      ["You may sit here.","आप यहाँ बैठ सकते हैं।"],
      ["She may join us later.","वह बाद में हमारे साथ शामिल हो सकती है।"],
      ["May I use your phone?","क्या मैं आपका फोन इस्तेमाल कर सकता हूँ?"],
      ["They may not agree with us.","हो सकता है वे हमसे सहमत न हों।"],
      ["He may be at home now.","वह अभी घर पर हो सकता है।"],
      ["May God bless you.","भगवान आपका भला करे।"],
      ["You may leave when you finish.","काम खत्म होने पर आप जा सकते हैं।"],
      ["This may be the best choice.","यह सबसे अच्छा विकल्प हो सकता है।"]
    ]
  },
  {
    id:"modal-must", name:"Must", emoji:"⚠️",
    sub:"Necessity & strong duty",
    formula:"Subject + must + V1 + Object",
    hindi:"'Must' का उपयोग अनिवार्यता, ज़रूरी काम और प्रबल अनुमान के लिए किया जाता है।",
    sentences:[
      ["You must wear a helmet.","तुम्हें हेलमेट पहनना ही चाहिए।"],
      ["We must follow the rules.","हमें नियमों का पालन करना ही चाहिए।"],
      ["He must finish his work today.","उसे आज अपना काम पूरा करना ही होगा।"],
      ["You must not tell a lie.","तुम्हें झूठ नहीं बोलना चाहिए।"],
      ["I must reach office by nine.","मुझे नौ बजे तक ऑफिस पहुँचना ही है।"],
      ["Students must respect their teachers.","छात्रों को अपने शिक्षकों का सम्मान करना ही चाहिए।"],
      ["She must be very tired now.","वह अभी बहुत थकी हुई होगी।"],
      ["We must save water.","हमें पानी बचाना ही चाहिए।"],
      ["You must take your medicine on time.","तुम्हें समय पर दवा लेनी ही चाहिए।"],
      ["He must be the new teacher.","वह नया शिक्षक ही होगा।"]
    ]
  },
  {
    id:"had-past-perfect", name:"Had (Past Perfect)", emoji:"📜",
    sub:"Action before another past action",
    formula:"Subject + had + V3 + Object",
    hindi:"'Had' (Past Perfect) का उपयोग उस कार्य के लिए होता है जो भूतकाल में किसी दूसरे कार्य से पहले पूरा हो चुका था।",
    sentences:[
      ["I had finished my work before he came.","उसके आने से पहले मैं अपना काम पूरा कर चुका था।"],
      ["She had left when I called.","जब मैंने फोन किया तब वह जा चुकी थी।"],
      ["They had eaten before the guests arrived.","मेहमानों के आने से पहले वे खाना खा चुके थे।"],
      ["He had never seen the sea before.","उसने पहले कभी समुद्र नहीं देखा था।"],
      ["We had already booked the tickets.","हम पहले ही टिकट बुक कर चुके थे।"],
      ["I had studied English before moving here.","यहाँ आने से पहले मैंने अंग्रेज़ी पढ़ी थी।"],
      ["The train had left before we reached.","हमारे पहुँचने से पहले ट्रेन जा चुकी थी।"],
      ["She had cooked dinner by eight.","वह आठ बजे तक खाना बना चुकी थी।"],
      ["You had completed the form correctly.","तुमने फॉर्म सही से भर लिया था।"],
      ["They had lived there for ten years.","वे वहाँ दस साल से रह रहे थे।"]
    ]
  },
  {
    id:"have-has", name:"Have / Has (Possession)", emoji:"🎒",
    sub:"Showing possession & relations",
    formula:"Subject + have/has + Object",
    hindi:"'Have/Has' का उपयोग किसी चीज़ के पास होने (अधिकार), रिश्ते या विशेषता को बताने के लिए किया जाता है। (I/we/you/they → have, he/she/it → has)",
    sentences:[
      ["I have a new bicycle.","मेरे पास एक नई साइकिल है।"],
      ["She has two brothers.","उसके दो भाई हैं।"],
      ["They have a big house.","उनके पास एक बड़ा घर है।"],
      ["He has a good job.","उसके पास एक अच्छी नौकरी है।"],
      ["We have many friends.","हमारे बहुत सारे दोस्त हैं।"],
      ["I have a headache today.","आज मेरे सिर में दर्द है।"],
      ["The dog has a long tail.","कुत्ते की पूँछ लंबी है।"],
      ["You have beautiful eyes.","तुम्हारी आँखें सुंदर हैं।"],
      ["She has enough time to study.","उसके पास पढ़ने के लिए पर्याप्त समय है।"],
      ["We have a meeting tomorrow.","कल हमारी एक मीटिंग है।"]
    ]
  },
  {
    id:"has-have-been", name:"Has / Have Been", emoji:"⏳",
    sub:"Continuing action with since/for",
    formula:"Subject + has/have been + V1+ing + since/for + time",
    hindi:"'Has/Have been' (Present Perfect Continuous) का उपयोग उस कार्य के लिए होता है जो कुछ समय पहले शुरू हुआ और अब भी जारी है।",
    sentences:[
      ["I have been studying for two hours.","मैं दो घंटे से पढ़ रहा हूँ।"],
      ["She has been working since morning.","वह सुबह से काम कर रही है।"],
      ["They have been living here for five years.","वे पाँच साल से यहाँ रह रहे हैं।"],
      ["He has been playing since noon.","वह दोपहर से खेल रहा है।"],
      ["We have been waiting for an hour.","हम एक घंटे से इंतज़ार कर रहे हैं।"],
      ["It has been raining since last night.","कल रात से बारिश हो रही है।"],
      ["I have been learning English for a year.","मैं एक साल से अंग्रेज़ी सीख रहा हूँ।"],
      ["You have been talking for too long.","तुम बहुत देर से बात कर रहे हो।"],
      ["She has been feeling sick since Monday.","वह सोमवार से बीमार महसूस कर रही है।"],
      ["They have been building the house for months.","वे महीनों से घर बना रहे हैं।"]
    ]
  }
];

/* ---------------- RENDER ---------------- */
const tenseContainer = document.getElementById('tenseContainer');
const tabsEl = document.getElementById('tabs');
const practiceTenseSel = document.getElementById('practiceTense');

function buildTenses(){
  TENSES.forEach((t,i)=>{
    // tab
    const tab = document.createElement('div');
    tab.className = 'tab' + (i===0?' active':'');
    tab.textContent = t.emoji+' '+t.name;
    tab.dataset.target = t.id;
    tab.addEventListener('click',()=>goToTense(t.id,tab));
    tabsEl.appendChild(tab);

    // practice option
    const opt = document.createElement('option');
    opt.value = t.id; opt.textContent = t.name;
    practiceTenseSel.appendChild(opt);

    // card
    const card = document.createElement('div');
    card.className = 'tense-card' + (i===0?' open':'');
    card.id = t.id;
    card.innerHTML = `
      <div class="tense-head">
        <div class="tense-emoji">${t.emoji}</div>
        <div class="grow">
          <h2>${t.name}</h2>
          <div class="sub">${t.sub}</div>
        </div>
        <div class="chevron">▼</div>
      </div>
      <div class="tense-body">
        <div class="tense-inner">
          <div class="info-row">
            <div class="info-box">
              <div class="label">📐 Formula</div>
              <div class="formula">${t.formula}</div>
            </div>
            <div class="info-box">
              <div class="label">📖 Hindi Explanation</div>
              <div class="hindi">${t.hindi}</div>
            </div>
          </div>
          <ol class="sentences">
            ${t.sentences.map(s=>`
              <li class="sentence" data-text="${(s[0]+' '+s[1]).toLowerCase()}">
                <span class="en">${s[0]}</span>
                <span class="hi hindi">${s[1]}</span>
              </li>`).join('')}
          </ol>
        </div>
      </div>`;
    card.querySelector('.tense-head').addEventListener('click',()=>card.classList.toggle('open'));
    tenseContainer.appendChild(card);
  });
}
buildTenses();

function goToTense(id,tab){
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  tab.classList.add('active');
  const card = document.getElementById(id);
  card.classList.add('open');
  card.scrollIntoView({behavior:'smooth',block:'start'});
}

/* ---------------- THEME ---------------- */
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click',()=>{
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme', dark?'light':'dark');
  themeBtn.textContent = dark?'🌙':'☀️';
});

/* ---------------- HIDE HINDI ---------------- */
const hindiBtn = document.getElementById('hindiToggle');
hindiBtn.addEventListener('click',()=>{
  document.body.classList.toggle('hide-hindi');
  const hidden = document.body.classList.contains('hide-hindi');
  hindiBtn.style.opacity = hidden? .45 : 1;
  hindiBtn.title = hidden? 'Show Hindi' : 'Hide Hindi';
});

/* ---------------- EXPAND / COLLAPSE ---------------- */
document.getElementById('expandAll').addEventListener('click',()=>
  document.querySelectorAll('.tense-card').forEach(c=>c.classList.add('open')));
document.getElementById('collapseAll').addEventListener('click',()=>
  document.querySelectorAll('.tense-card').forEach(c=>c.classList.remove('open')));

/* ---------------- SEARCH ---------------- */
const search = document.getElementById('search');
const noResults = document.getElementById('noResults');
search.addEventListener('input',()=>{
  const q = search.value.trim().toLowerCase();
  let totalVisible = 0;
  document.querySelectorAll('.tense-card').forEach(card=>{
    let cardVisible = 0;
    card.querySelectorAll('.sentence').forEach(li=>{
      const en = li.querySelector('.en');
      const hi = li.querySelector('.hi');
      const text = li.dataset.text;
      const show = !q || text.includes(q);
      li.style.display = show? '' : 'none';
      if(show){cardVisible++; totalVisible++;}
      // highlight
      en.innerHTML = highlight(en.textContent,q);
      hi.innerHTML = highlight(hi.textContent,q);
    });
    if(q){
      card.style.display = cardVisible? '' : 'none';
      if(cardVisible) card.classList.add('open');
    } else {
      card.style.display='';
    }
  });
  noResults.style.display = (q && totalVisible===0)? 'block':'none';
});
function highlight(text,q){
  if(!q) return text;
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return text.replace(new RegExp('('+safe+')','ig'),'<span class="hl">$1</span>');
}

/* ---------------- PRACTICE ---------------- */
const checkBtn = document.getElementById('checkBtn');
const practiceInput = document.getElementById('practiceInput');
const practiceResult = document.getElementById('practiceResult');

function tokenize(s){
  return s.toLowerCase().replace(/[^a-z0-9\s]/g,'').split(/\s+/).filter(Boolean);
}
function similarity(a,b){
  const A = new Set(tokenize(a)), B = new Set(tokenize(b));
  if(!A.size||!B.size) return 0;
  let inter=0; A.forEach(w=>{if(B.has(w))inter++;});
  return inter/new Set([...A,...B]).size; // Jaccard
}

checkBtn.addEventListener('click',()=>{
  const input = practiceInput.value.trim();
  if(!input){
    practiceResult.innerHTML = '<div class="result-card hindi">⚠️ कृपया पहले एक वाक्य लिखें। Please type a sentence first.</div>';
    return;
  }
  const pick = practiceTenseSel.value;
  const pool = [];
  TENSES.forEach(t=>{
    if(pick==='all'||pick===t.id)
      t.sentences.forEach(s=>pool.push({tense:t.name,en:s[0],hi:s[1]}));
  });
  const scored = pool.map(p=>({...p,score:similarity(input,p.en)}))
                     .sort((a,b)=>b.score-a.score).slice(0,3);

  let html = '';
  const best = scored[0];
  const pct = Math.round(best.score*100);
  let verdict, cls;
  if(pct>=60){verdict='Excellent! Very close match. 🎉'; cls='match-good';}
  else if(pct>=25){verdict='Good attempt! Compare the words below. 👍'; cls='match-mid';}
  else{verdict='Keep practicing! See the closest examples. 💪'; cls='match-mid';}

  html += `<div class="result-card">
    <div><strong>Your sentence:</strong> ${escapeHtml(input)}</div>
    <div style="margin-top:6px"><span class="${cls}">${verdict}</span>
    &nbsp;<span style="color:var(--muted)">(closest match ${pct}%)</span></div>
  </div>`;

  html += '<div style="font-weight:700;margin:6px 2px">📌 Closest sample examples:</div>';
  scored.forEach(s=>{
    html += `<div class="result-card">
      <span class="tag">${s.tense} • ${Math.round(s.score*100)}% match</span>
      <div class="en" style="font-weight:600">${s.en}</div>
      <div class="hi hindi" style="color:var(--hindi);margin-top:2px">${s.hi}</div>
    </div>`;
  });
  practiceResult.innerHTML = html;
});
function escapeHtml(s){
  return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
