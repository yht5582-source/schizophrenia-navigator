'use strict';
// Original single-best-answer questions; rotate options so answer positions are balanced.
const questionSeeds=[
['basic','病程與診斷','24 歲，妄想、幻聽與功能下降持續四個月，活動期至少一個月，無足以解釋的其他病因。依本頁 DSM-5-TR 框架，最適當？',['考慮類思覺失調症並持續鑑別，及早處理精神病','已滿思覺失調症六個月病程條件','等滿六個月才能治療','只有幻聽即可確診'],'四個月未達本頁採用的六個月連續病程門檻；仍需完整條件與追蹤。治療精神病不必等到病程門檻滿足，且 ICD-11 與 DSM 的門檻不能混用。',[3,1]],
['basic','核心症狀','在其他條件也需確認的前提下，哪個組合符合「至少兩類，含至少一類核心症狀」的活動期結構？',['妄想＋幻覺，並確認臨床意義與時間','只有失眠＋食慾下降','只有動機缺乏＋情感平淡，無其他核心症狀','僅社交退縮即可'],'至少包含妄想、幻覺或解構性語言之一，且共至少兩類典型症狀。組合符合仍不等同確診，尚需病程、功能與鑑別資料。',[3]],
['basic','情緒與精神病','精神病症狀只在躁期出現，躁期完全緩解後即消失，從未在情緒發作以外出現。優先？',['評估雙相情緒障礙等情緒疾患合併精神病特徵','直接診為思覺失調症','只看妄想內容決定診斷','用抗精神病藥是否有效來確診'],'情緒發作與精神病的時間關係是重要鑑別。需重建整體病程；藥物有效不是確診或區分疾病的試驗。',[1,3]],
['basic','急性意識變化','72 歲，兩天內出現視幻覺、注意力波動、定向障礙及發燒。優先？',['急診評估譫妄與感染、代謝、藥物等原因','因有幻覺就診思覺失調症','等一個月再評估','只做精神量表，不做身體檢查'],'急性注意力及意識變化，伴發燒更需優先處理譫妄與身體急症。不能因有精神病症狀而忽略感染或代謝異常。',[3,0]],
['basic','藥物急症','用抗精神病藥期間，發燒、肌肉僵硬、意識變化及心跳快。應如何分流？',['立即急診評估惡性症候群等急症','當作一般復發，自行加倍原藥','等例行回診','只記 CGI-S，觀察一週'],'此組合需緊急醫療評估。停藥、支持治療及鑑別由急診與處方團隊處理，不能套用一般復發路徑自行加藥。',[0,4,5]],
['basic','高風險狀態','短暫、未確立的精神病樣經驗伴困擾及功能變化，尚未確立精神病。較適當？',['轉介評估，提供 CBT、家庭支持及共病處理並追蹤','常規開抗精神病藥預防發病','告知必然發病','不處理功能困難，只等待確診'],'高風險不表示必然發病。NICE 不建議僅為預防精神病而常規給予抗精神病藥；仍需處理困擾、功能與共病。',[1]],
['basic','整合照護','首次明顯精神病，排除急症後，哪個計畫最完整？',['早期介入團隊、共同藥物決策、心理社會治療及功能目標','只開藥，不追蹤功能','只向家屬說明，不詢問本人偏好','所有人用同一藥與固定劑量'],'初發應採以人為中心的整合照護，納入藥物、CBTp、家庭與就學就業支持。陽性症狀改善不一定代表所有生活困難都恢復。',[0,10]],
['basic','適當試藥','依從性可靠、無急症，正在滴定單一抗精神病藥，一般如何規劃初步療效評估？',['記錄療效與副作用，在適當劑量約 4–6 週評估','一天沒改善就判治療抗性','嗜睡即代表精神病治療足夠','一開始常規合併兩種藥'],'NICE 建議明確的個別治療試驗與適當劑量四至六週評估。嚴重副作用或風險需提早處理，不能硬等；亦須確認實際暴露與依從性。',[1]],
['basic','代謝共同決策','有糖尿病且很擔心增重，需要開始治療。如何使用藥物比較？',['納入代謝風險，權衡其他副作用與偏好並建立監測','所有藥物代謝風險都相同','直接放棄任何治療','只看體重，不看過去療效'],'應兼顧療效、既往反應、本人偏好及副作用輪廓。較低代謝影響仍有其他風險，應從治療開始就監測身體健康。',[0,2,4,6]],
['basic','維持治療','使用目前藥物後穩定且耐受良好，一般較適當？',['共同討論維持原有效藥與持續監測','症狀消失即自行突然停藥','因網頁列有其他候選就固定換藥','復發時才問副作用'],'APA 支持改善後持續抗精神病治療，通常維持有效且可耐受的藥物。減停需要共同決策、漸進與追蹤，不以暫時無症狀作唯一依據。',[0,10,1]],
['advanced','假性抗性','兩種藥被記為無效，但病人經常漏藥，劑量與實際療程不明。下一步？',['重建試藥與依從性資料，先評估假性抗性','直接認治療抗性並快速滴定 clozapine','不斷加入更多抗精神病藥','只看曾拿兩種藥的處方張數'],'曾開兩種藥不等於兩次足量足期且依從性可靠的無效試驗。核對暴露、交互作用、物質及診斷，必要時共同討論 LAI。',[1,2,10]],
['advanced','治療抗性','持續顯著症狀，兩種適當劑量與療程藥物無效，含非 clozapine 第二代藥；已核對依從性與其他原因。優先？',['轉介評估 clozapine 與專屬安全監測','無限輪換其他藥，避免討論 clozapine','自動加至超仿單劑量','只加安眠藥視為完整治療'],'排除假性抗性後，APA 與 NICE 支持評估 clozapine，並建立血球、心血管及腸道等監測。這不是自行換藥或套用快速滴定。',[0,1,2]],
['advanced','LAI','口服有效且耐受，但常忘記服藥，願考慮 LAI。正確？',['依偏好討論，核對製劑起始、口服重疊、腎功能及漏針規則','所有 LAI 起始和漏針規則完全相同','LAI 只適合有暴力行為者','改針劑就不用代謝監測'],'LAI 是共同決策選項，不是懲罰。各製劑的起始、重疊與漏針處置不同，改劑型後仍需評估效果與安全。',[0,10]],
['advanced','Clozapine ANC','看到 FDA 2025 年移除 clozapine REMS，就認為不用驗血。正確回應？',['REMS 移除不表示免除 ANC 監測，仍依當地仿單流程','全世界同時取消血球檢查','只在感染後首次抽血','總白血球正常就能忽略 ANC'],'REMS 是美國行政制度，移除不消除嚴重嗜中性白血球減少風險。仍依仿單與當地規範監測，不把美國行政變動直接套用台灣。',[9,8]],
['advanced','吸菸與濃度','服 clozapine，住院突然停菸，未調藥卻變得明顯嗜睡。最需考慮？',['停菸可能提高藥物暴露，通知團隊評估','一定是復發，直接加量','尼古丁貼片必然產生與菸煙相同酵素誘導','沒有抽搐就不處理'],'菸煙的酵素誘導與尼古丁不同。停止吸菸可增加 clozapine 暴露，也需查感染與交互作用，由團隊評估濃度和劑量。',[1,8]],
['advanced','腎功能處方','未透析，CrCl 25 mL/min，醫師考慮 risperidone。本頁引用仿單的嚴重腎功能異常起始參考？',['0.5 mg 每日兩次，慢速滴定並監測','一般成人最高劑量開始','所有 eGFR 都可直接當 CrCl','不審核直接套用所有透析病人'],'嚴重腎功能異常美國仿單起始參考是 0.5 mg 每日兩次，仍需處方審核。CrCl 不無條件等同 eGFR，透析須個別處理。',[5]],
['advanced','QTc 安全','準備調藥，QTc 510 ms 且有暈厥病史，較適當？',['先評估心律、電解質與其他藥物，儘速醫療處置，不自動加量','精神病嚴重就忽略 QTc','直接合併兩種延長 QT 藥','等下次年度檢查'],'這是明顯心律安全警訊，有暈厥應緊急評估。檢查可逆因素與藥物風險，不能只依精神症狀決定選藥與加量。',[0,4,5,6]],
['advanced','陰性症狀與功能','陽性症狀好轉，仍退縮、動機缺乏，伴嗜睡與低落。下一步？',['評估原發／次發陰性症狀、憂鬱、藥物與環境，納入復健','全部視為劑量不足','陽性症狀改善就忽略功能','一次 CGI-S 即可確認病因'],'需區分原發陰性症狀與憂鬱、鎮靜、環境等次發因素。量表要配合訪談、處方與功能評估；不能只靠加藥或單一分數。',[3,0,2]],
['advanced','代謝追蹤','哪個一般監測規劃較符合本頁 NICE 摘要？',['前六週每週體重，十二週再評估，並於十二週及年度檢視血壓、血糖或 HbA1c、血脂','首次量完體重後只等病人抱怨','只有 clozapine 要代謝監測','十二週代謝檢查完全取代 ANC'],'一般監測包括基線、早期體重與十二週／年度檢視；異常需提早。這與 clozapine 專屬 ANC 等安全監測是不同流程。',[1,8]],
['advanced','腸道警訊','服 clozapine，數日未排便，明顯腹痛、腹脹與嘔吐。應？',['立即醫療評估嚴重腸道低蠕動／阻塞等','常見便祕，等下次回診','ANC 正常即代表安全','自行增加 clozapine'],'Clozapine 相關腸道低蠕動可嚴重甚至致命；腹痛、腹脹與嘔吐需立即評估。ANC 正常不能排除腸道或心血管毒性。',[8]]
];
const quizQuestions=questionSeeds.map(([level,topic,prompt,options,explanation,refs],i)=>({id:i+1,level,topic,prompt,options:options.map((_,j)=>options[(j+i%4)%4]),answer:(4-i%4)%4,explanation,refs}));
let selections=new Map(),grades=new Map();
function feedback(q){const choice=grades.get(q.id);if(choice===undefined)return '';const ok=choice===q.answer;return `<div class="quiz-feedback${ok?'':' wrong'}"><strong>${ok?'答對了':'這題需要再看一次'}｜正解 ${String.fromCharCode(65+q.answer)}：${esc(q.options[q.answer])}</strong>${ok?'':`<p>你的選擇：${String.fromCharCode(65+choice)}．${esc(q.options[choice])}</p>`}<p>${esc(q.explanation)}</p><p class="muted">參考：${q.refs.map(i=>`<a href="${esc(sources[i][2])}" target="_blank" rel="noopener noreferrer">${esc(sources[i][0])}</a>`).join(' · ')}</p></div>`}
function quizStats(){return{selected:selections.size,graded:grades.size,correct:quizQuestions.filter(q=>grades.get(q.id)===q.answer).length}}
function updateQuiz(){let s=quizStats();$('quiz-score').innerHTML=`<span>已選答 <b>${s.selected} / 20</b></span><span>已批改 <b>${s.graded}</b></span><span>答對 <b>${s.correct} / ${s.graded}</b>${s.graded?`（${Math.round(s.correct/s.graded*100)}%）`:''}</span>`;let filter=v('quiz-filter'),visible=0;quizQuestions.forEach(q=>{const show=filter==='all'||filter===q.level||(filter==='wrong'&&grades.has(q.id)&&grades.get(q.id)!==q.answer)||(filter==='unanswered'&&!selections.has(q.id));$('question-'+q.id).hidden=!show;if(show)visible++});$('quiz-empty').hidden=visible>0}
function gradeQuestion(id){let q=quizQuestions.find(x=>x.id===id),choice=selections.get(id);if(choice===undefined){$('quiz-note-'+id).textContent='請先選擇答案，再檢查。';return false}grades.set(id,choice);$('quiz-note-'+id).textContent='';$('quiz-feedback-'+id).innerHTML=feedback(q);return true}
$('quiz-list').innerHTML=quizQuestions.map(q=>`<article class="quiz-question" id="question-${q.id}"><p class="quiz-meta">第 ${String(q.id).padStart(2,'0')} 題 · ${q.level==='basic'?'基礎':'進階'} · ${esc(q.topic)}</p><h2>${esc(q.prompt)}</h2><fieldset class="quiz-options"><legend>請選擇一個最適當答案</legend>${q.options.map((o,j)=>`<label class="quiz-option"><input type="radio" name="question-${q.id}" value="${j}" data-question="${q.id}"><span>${String.fromCharCode(65+j)}．${esc(o)}</span></label>`).join('')}</fieldset><button data-grade="${q.id}">檢查第 ${q.id} 題答案</button><p id="quiz-note-${q.id}" class="question-note" role="status"></p><div id="quiz-feedback-${q.id}" role="status" aria-live="polite"></div></article>`).join('');
$('quiz-list').addEventListener('change',e=>{if(!e.target.matches('input[data-question]'))return;let id=Number(e.target.dataset.question);selections.set(id,Number(e.target.value));grades.delete(id);$('quiz-note-'+id).textContent='';$('quiz-feedback-'+id).innerHTML='';updateQuiz()});$('quiz-list').addEventListener('click',e=>{let b=e.target.closest('[data-grade]');if(b){gradeQuestion(Number(b.dataset.grade));updateQuiz()}});$('quiz-filter').onchange=updateQuiz;
$('grade-all').onclick=()=>{quizQuestions.filter(q=>selections.has(q.id)).forEach(q=>gradeQuestion(q.id));updateQuiz();toast(selections.size?`已批改 ${selections.size} 題；未作答 ${20-selections.size} 題。`:'請先作答；未作答不計為錯題。')};
$('quiz-reset').onclick=()=>{if(!confirm('清除考題作答與解析，重新練習？臨床評估與追蹤保留。'))return;selections.clear();grades.clear();$('quiz-filter').value='all';$('quiz-list').querySelectorAll('input[type=radio]').forEach(el=>el.checked=false);quizQuestions.forEach(q=>{$('quiz-note-'+q.id).textContent='';$('quiz-feedback-'+q.id).innerHTML=''});updateQuiz();toast('考題已重設。')};updateQuiz();
const mapData=[
['安全與急症','safety',[0,3],[
['立即危險',['評估自傷／傷人意圖、計畫、工具、近期行為及命令性幻聽的失控風險。','保持平靜與安全距離，不爭辯妄想；有立即危險撥 119 或急診。','急性安全處理優先於量表、一般選藥及例行回診。']],
['身體與藥物急症',['急性注意力波動、混亂與定向障礙先排除譫妄及內科原因。','發燒、僵硬、意識改變、自主神經不穩警覺惡性症候群。','木僵、拒食、脫水或嚴重失能需緊急評估僵直症及其他原因。']],
['安全計畫',['記錄警訊、可聯絡照護團隊及就醫方式。','定期重評風險，不以一次量表低分取代完整評估。']]]],
['症候群、病程與鑑別','diagnosis',[3,1],[
['典型症狀',['妄想、幻覺、解構性語言、明顯解構／僵直行為與陰性症狀。','DSM-5-TR：至少兩類，含妄想、幻覺或解構性語言之一。','確認文化脈絡、活動期臨床意義，勿把特殊信念直接當妄想。']],
['時間與功能',['活動期通常至少一個月；有效治療可使活動期縮短。','思覺失調症連續病程至少六個月，且有功能下降；本頁不混用 ICD-11。','一至未滿六個月可考慮類思覺失調症；短暫性精神病尚需觀察完全恢復。']],
['鑑別與檢查',['釐清情緒發作比例及無情緒發作的精神病時間；考慮雙相、重鬱與情感性思覺失調症。','核對大麻、興奮劑、類固醇、其他藥物及身體／神經原因。','依病史選 CBC、電解質、肝腎、TSH、驗孕及毒物等；影像、EEG、腰椎穿刺依指徵，不以影像確診。']],
['病程旁證',['訪談本人與家屬，重建病前功能、起病、緩解與復發的時間軸。','自閉症／兒童期溝通障礙要額外確認顯著妄想或幻覺與病程。']]]],
['初發與整合照護','treatment',[0,1,10],[
['早期介入',['明顯精神病即及早轉介，不等待滿六個月。','藥物、心理社會治療、家屬支持與個案管理共同規劃。']],
['尚未確立精神病',['高風險狀態提供 CBT、家庭支持與共病處理。','不只為預防未來發病而常規使用抗精神病藥。']],
['復元目標',['本人選定有意義的目標：自主生活、睡眠、人際、學業或工作。','定期回顧目標與可接受副作用，不把症狀下降當作唯一成功。']]]],
['藥物共同決策與特殊族群','treatment',[0,2,4,5,6,7],[
['單一藥物試驗',['以過去有效性、本人偏好、可取得性、交互作用及副作用共同選藥。','低劑量開始、逐步滴定；適當劑量約四至六週評估，風險與副作用可更早處理。','不常規合併兩種抗精神病藥；換藥短期重疊等情境另由醫師規劃。']],
['副作用取捨',['Aripiprazole：代謝／泌乳激素影響相對較低，仍注意靜坐不能、失眠及衝動控制。','Risperidone：注意 EPS、泌乳激素及腎功能；Olanzapine：注意增重與代謝風險。','Quetiapine：注意嗜睡、低血壓與代謝；低劑量助眠不代表足量抗精神病治療。']],
['特殊族群',['CrCl 與 eGFR 不無條件互換；透析由精神科、腎臟科及藥師共同審核。','孕哺、明顯肝病、高齡與多重用藥需個別風險評估，不自行突然停藥。','QTc ≥500 ms 或暈厥等先處理心律與可逆因素；台灣品項／健保另核對當地規範。']]]],
['非反應與 Clozapine','treatment',[0,1,2,8,9],[
['先排除假性抗性',['重新檢視診斷、各次劑量、實際療程與依從性。','查漏藥、交互作用、物質使用及影響暴露的因素。']],
['何時評估 Clozapine',['兩種適當試藥無效（含非 clozapine 第二代藥），排除假性抗性後由專科評估。','持續顯著自殺風險也需專科考慮；立即危險仍先急症處置。']],
['專屬監測',['起始前及持續依當地仿單監測 ANC；REMS 移除不等於取消驗血。','關注心肌炎／心血管警訊、抽搐、姿勢性低血壓及感染。','每次詢問排便；嚴重腹痛、腹脹、嘔吐需緊急評估腸道低蠕動。']],
['濃度與中斷重啟',['感染、吸菸開始／停止及交互作用可改變濃度，通知團隊評估。','停藥後不自行恢復原劑量；依產品與中斷長短由團隊安排重新滴定。']]]],
['LAI 與維持治療','treatment',[0,1,10],[
['LAI 適用討論',['偏好針劑、常漏藥或依從性不明，可共同討論 LAI。','先確認相應口服藥耐受性、本人同意與就診可行性。']],
['產品特定規則',['各製劑的起始、口服重疊、間隔與漏針重啟不同。','核對腎功能限制與實際品項，不能套用單一換算或重啟規則。']],
['維持與減停',['有效且耐受良好通常維持原有效藥，持續評估效果與副作用。','若共同決定減停，採漸進與密切追蹤；停藥後至少監測兩年。','反覆復發者常需更長期治療，依個人復發風險及偏好規劃。']]]],
['副作用與身體健康','followup',[1,8,10],[
['基線與早期',['記錄體重、腰圍、脈搏／血壓、血糖或 HbA1c、血脂、泌乳激素、動作與營養活動。','ECG 依風險與指徵；前六週每週體重，同時檢視滴定與耐受性。']],
['十二週與年度',['十二週檢視體重、脈搏／血壓、血糖或 HbA1c、血脂。','年度檢視上述身體健康項目與腰圍；異常時提早複查。','一般代謝時程不取代 clozapine 的 ANC、心血管與腸道流程。']],
['每次回診詢問',['嗜睡、低血壓、便祕、EPS、靜坐不能、性功能及月經變化。','新不自主動作做結構化評估如 AIMS；依風險定期評估遲發性不自主運動。','靜坐不能可像焦躁，避免誤判為症狀惡化而直接加藥。']]]],
['量測、復發與長期復元','followup',[0,1,3,10],[
['多面向追蹤',['症狀、功能、服藥、睡眠、物質使用、藥物及實際劑量一併記錄。','CGI-S 為單項臨床嚴重度，不是確診工具或 PANSS；不能單獨決定停藥。','比較體重與代謝變化；透析、貧血時 HbA1c 解讀需注意限制。']],
['警訊與提早回診',['新失眠、退縮、猜疑、幻聽、漏藥或物質使用增加，提早聯絡團隊。','有立即危險、意識變化、發燒僵硬或嚴重失能直接急診。']],
['心理社會與銜接',['持續 CBTp、家庭衛教、社區復健與支持性就學就業。','陰性／認知困難重評憂鬱、藥物及環境，設定可觀察的生活目標。','安排回診與照護責任銜接；本機追蹤可匯出，但不等同正式病歷。']]]]
];
$('map-tree').innerHTML=mapData.map(([title,page,refs,nodes],i)=>`<article class="map-branch" id="branch-${i}" style="--branch:${['#6e8f69','#588781','#8b9865','#73959a','#a78063','#688b72','#8d8a6c','#7e87a2'][i]}"><details open><summary>${String(i+1).padStart(2,'0')}　${esc(title)}</summary><div class="map-children">${nodes.map(([name,leaves],j)=>`<details class="map-node" id="node-${i}-${j}"><summary>${esc(name)}</summary><ul>${leaves.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>`).join('')}</div><div class="map-source">參考：${refs.map(k=>`<a href="${esc(sources[k][2])}" target="_blank" rel="noopener noreferrer">${esc(sources[k][0])}</a>`).join('')}</div><button data-map-page="${page}">前往${page==='safety'?'安全初評':page==='diagnosis'?'診斷鑑別':page==='treatment'?'治療規劃':'追蹤評估'} →</button></details></article>`).join('');
let beforeSearch=null;
function mapFilter(){const query=v('map-search').trim().toLocaleLowerCase();if(query&&!beforeSearch)beforeSearch=Array.from($('map-tree').querySelectorAll('details')).map(el=>el.open);let count=0;mapData.forEach(([title,page,refs,nodes],i)=>{const parentMatch=title.toLocaleLowerCase().includes(query);let matching=0;nodes.forEach(([name,leaves],j)=>{let match=!query||parentMatch||(name+' '+leaves.join(' ')).toLocaleLowerCase().includes(query);$('node-'+i+'-'+j).hidden=!match;if(match){matching++;count++;if(query)$('node-'+i+'-'+j).open=true}});$('branch-'+i).hidden=!matching;if(query&&matching)$('branch-'+i).querySelector('details').open=true});if(!query&&beforeSearch){$('map-tree').querySelectorAll('details').forEach((el,i)=>el.open=beforeSearch[i]);beforeSearch=null}$('map-status').textContent=query?`「${v('map-search').trim()}」符合 ${count} 個子分支${count?'':'，請更換關鍵字'}。`:`8 大主分支、${mapData.reduce((n,x)=>n+x[3].length,0)} 個子分支；點選節點展開內容。`}
$('map-search').oninput=mapFilter;$('map-clear').onclick=()=>{$('map-search').value='';mapFilter()};$('map-expand').onclick=()=>{$('map-tree').querySelectorAll('details').forEach(el=>el.open=true);if(beforeSearch)beforeSearch=beforeSearch.map(()=>true)};$('map-collapse').onclick=()=>{$('map-tree').querySelectorAll('details').forEach(el=>el.open=false);if(beforeSearch)beforeSearch=beforeSearch.map(()=>false)};$('map-tree').addEventListener('click',e=>{let b=e.target.closest('[data-map-page]');if(b)go(b.dataset.mapPage)});mapFilter();
