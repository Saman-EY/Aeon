import { translator, type Language } from './localized'

// Editorial rewrites retain the original URLs and the source's publication year.
// No exact publication date, external research attribution or client result is invented.
export function getArticles(lang: Language) {
  const t = translator(lang)
  return [
    {
      slug: 'quality-of-decisions-over-availability-of-capital',
      year: '2026',
      category: t('Decision science', 'Karar bilimi', 'علم تصمیم', 'Scienza delle decisioni'),
      title: t(
        'Capital is necessary. Decision quality still matters.',
        'Sermaye gereklidir. Karar kalitesi de önemlidir.',
        'سرمایه لازم است؛ کیفیت تصمیم هم اهمیت دارد.',
        'Il capitale è necessario. La qualità delle decisioni conta.',
      ),
      excerpt: t(
        'A useful decision connects evidence, alternatives and conditions for review.',
        'Faydalı bir karar kanıtları, alternatifleri ve inceleme koşullarını bağlar.',
        'تصمیم مفید، شواهد، گزینه‌ها و شرایط بازبینی را به هم متصل می‌کند.',
        'Una decisione utile collega evidenze, alternative e condizioni di revisione.',
      ),
      body: [
        t(
          'Access to capital can be a real constraint. It does not follow that securing capital resolves the question of how to use it. A finance team still needs to understand the evidence, compare alternatives and identify the assumptions that could change its view.',
          'Sermayeye erişim gerçek bir kısıt olabilir. Ancak sermaye bulmak, onun nasıl kullanılacağı sorusunu çözmez. Finans ekibi kanıtları anlamalı, alternatifleri karşılaştırmalı ve görüşünü değiştirebilecek varsayımları belirlemelidir.',
          'دسترسی به سرمایه می‌تواند محدودیتی واقعی باشد. اما تأمین سرمایه، پرسش نحوه استفاده از آن را حل نمی‌کند. تیم مالی همچنان باید شواهد را بفهمد، گزینه‌ها را مقایسه کند و فرضیاتی را بشناسد که می‌توانند نظرش را تغییر دهند.',
          'L’accesso al capitale può essere un vincolo reale. Ottenere capitale, però, non risolve la questione di come impiegarlo. Un team finanziario deve comprendere le evidenze, confrontare alternative e identificare le ipotesi che potrebbero cambiare la sua valutazione.',
        ),
        t(
          'This is the direction behind Axis: a decision brief that preserves the question, the financial consequences, the alternatives and the thresholds for reconsideration. The intended benefit is a process people can explain and learn from. A strong process does not guarantee a favourable outcome.',
          'Axis’in yönü budur: soruyu, finansal sonuçları, alternatifleri ve yeniden değerlendirme eşiklerini koruyan bir karar özeti. Hedef, insanların açıklayabileceği ve öğrenebileceği bir süreçtir. Güçlü bir süreç olumlu sonucu garanti etmez.',
          'جهت Axis همین است: خلاصه تصمیمی که پرسش، پیامد مالی، گزینه‌ها و آستانه بازبینی را حفظ کند. هدف، فرایندی قابل توضیح و یادگیری است. فرایند خوب، نتیجه مطلوب را تضمین نمی‌کند.',
          'Questa è la direzione di Axis: un documento che conserva domanda, conseguenze finanziarie, alternative e soglie per il riesame. L’obiettivo è un processo spiegabile e capace di generare apprendimento. Un processo solido non garantisce un esito favorevole.',
        ),
      ],
    },
    {
      slug: 'legible-risk-in-correlated-markets',
      year: '2026',
      category: t('Risk', 'Risk', 'ریسک', 'Rischio'),
      title: t(
        'Look beyond the risk of an individual trade.',
        'Tek bir işlemin riskinin ötesine bakın.',
        'ریسک را فراتر از یک معامله ببینید.',
        'Guardare oltre il rischio della singola operazione.',
      ),
      excerpt: t(
        'Positions that look separate may share the same underlying exposure.',
        'Ayrı görünen pozisyonlar aynı temel riski paylaşabilir.',
        'موقعیت‌های ظاهراً جدا ممکن است مواجهه مشترک داشته باشند.',
        'Posizioni apparentemente separate possono condividere la stessa esposizione sottostante.',
      ),
      body: [
        t(
          'A portfolio cannot be understood by inspecting each position in isolation. Several trades may depend on the same liquidity conditions, market factor or counterparty. Stress scenarios should ask how those dependencies could behave together.',
          'Bir portföy her pozisyon ayrı incelenerek anlaşılamaz. Birden çok işlem aynı likidite koşullarına, piyasa faktörüne veya karşı tarafa bağlı olabilir. Stres senaryoları bu bağımlılıkların birlikte nasıl davranabileceğini sormalıdır.',
          'پرتفوی را نمی‌توان با بررسی جداگانه هر موقعیت شناخت. چند معامله ممکن است به شرایط نقدینگی، عامل بازار یا طرف مقابل یکسان وابسته باشند. سناریوی فشار باید رفتار مشترک این وابستگی‌ها را بررسی کند.',
          'Un portafoglio non si comprende osservando le singole posizioni separatamente. Diverse operazioni possono dipendere dalla stessa liquidità, dallo stesso fattore di mercato o dalla stessa controparte. Gli scenari di stress devono esaminare il comportamento congiunto di queste dipendenze.',
        ),
        t(
          'The intended Aegis risk engine therefore considers aggregate exposure alongside trader behaviour and market conditions. Its research should test assumptions against historical data and explicit stress cases. A risk score is a model output to examine, not a promise that losses cannot occur.',
          'Bu nedenle hedeflenen Aegis risk motoru, toplam riski yatırımcı davranışı ve piyasa koşullarıyla birlikte ele alır. Araştırma varsayımları tarihsel veriler ve açık stres örnekleriyle test etmelidir. Risk puanı incelenecek bir model çıktısıdır; kayıp yaşanmayacağına dair söz değildir.',
          'به همین دلیل، موتور ریسک موردنظر Aegis مجموع مواجهه را در کنار رفتار معامله‌گر و شرایط بازار بررسی می‌کند. فرضیات باید با داده تاریخی و موارد فشار روشن آزموده شوند. امتیاز ریسک خروجی مدلی برای بررسی است، نه وعده نبود زیان.',
          'Il motore di rischio previsto per Aegis considera quindi l’esposizione aggregata insieme al comportamento del trader e alle condizioni di mercato. La ricerca deve verificare le ipotesi con dati storici e scenari di stress espliciti. Un punteggio di rischio è un risultato da valutare, non una promessa di assenza di perdite.',
        ),
      ],
    },
    {
      slug: 'protection-as-architecture',
      year: '2026',
      category: t('Protection', 'Koruma', 'حفاظت', 'Protezione'),
      title: t(
        'Risk controls and insurance have different roles.',
        'Risk kontrolleri ve sigortanın rolleri farklıdır.',
        'کنترل ریسک و بیمه نقش‌های متفاوتی دارند.',
        'Controlli del rischio e assicurazione hanno ruoli diversi.',
      ),
      excerpt: t(
        'Protection design starts with what is covered, what is excluded and who carries the risk.',
        'Koruma tasarımı teminatı, istisnaları ve riski kimin taşıdığını belirlemekle başlar.',
        'طراحی حفاظت با تعریف پوشش، استثناها و حامل ریسک شروع می‌شود.',
        'La protezione parte dalla definizione di coperture, esclusioni e soggetto che assume il rischio.',
      ),
      body: [
        t(
          'Position limits and monitoring can influence exposure before an event occurs. Insurance addresses defined contractual events and obligations. Treating the two as substitutes obscures both the controls a trader needs and the responsibilities a coverage arrangement creates.',
          'Pozisyon limitleri ve izleme, olay oluşmadan önce riski etkileyebilir. Sigorta tanımlı sözleşmesel olayları ve yükümlülükleri ele alır. Bunları birbirinin yerine koymak hem gerekli kontrolleri hem de teminatın doğurduğu sorumlulukları belirsizleştirir.',
          'محدودیت موقعیت و پایش می‌توانند پیش از رخداد بر مواجهه اثر بگذارند. بیمه با رویدادها و تعهدات قراردادی تعریف‌شده سروکار دارد. جایگزین دانستن این دو، هم کنترل لازم و هم مسئولیت پوشش را مبهم می‌کند.',
          'Limiti di posizione e monitoraggio possono influire sull’esposizione prima di un evento. L’assicurazione riguarda eventi e obblighi contrattuali definiti. Considerarli intercambiabili confonde sia i controlli necessari sia le responsabilità create dalla copertura.',
        ),
        t(
          'Aegis is intended to develop assessment, pricing and event-verification infrastructure. A future insurance partner would carry the obligations agreed in a valid policy. Before any offering, the economic model, partner responsibilities and applicable requirements need validation. The concept is not a current insurance offer.',
          'Aegis’in hedefi değerlendirme, fiyatlandırma ve olay doğrulama altyapısı geliştirmektir. Gelecekteki sigorta ortağı geçerli poliçede kararlaştırılan yükümlülükleri üstlenir. Her tekliften önce ekonomik model, ortak sorumlulukları ve geçerli gereklilikler doğrulanmalıdır. Bu kavram mevcut sigorta teklifi değildir.',
          'هدف Aegis توسعه زیرساخت ارزیابی، قیمت‌گذاری و تأیید رویداد است. شریک بیمه در آینده مسئولیت توافق‌شده در بیمه‌نامه معتبر را خواهد داشت. پیش از عرضه، مدل اقتصادی، مسئولیت شرکا و الزامات مرتبط نیاز به اعتبارسنجی دارند. این مفهوم، پیشنهاد بیمه فعال نیست.',
          'Aegis punta a sviluppare infrastrutture di valutazione, pricing e verifica degli eventi. Un futuro partner assicurativo assumerebbe gli obblighi previsti da una polizza valida. Prima di un’offerta vanno validati modello economico, responsabilità e requisiti applicabili. Il concetto non è un’offerta assicurativa attuale.',
        ),
      ],
    },
    {
      slug: 'infrastructure-behind-institutional-judgment',
      year: '2026',
      category: t('Infrastructure', 'Altyapı', 'زیرساخت', 'Infrastruttura'),
      title: t(
        'A decision is only as useful as its information.',
        'Bir karar, bilgisi kadar faydalıdır.',
        'کاربرد تصمیم به اطلاعات پشت آن وابسته است.',
        'Una decisione è utile quanto le informazioni che la sostengono.',
      ),
      excerpt: t(
        'Freshness, definitions and traceability belong in the decision process.',
        'Güncellik, tanımlar ve izlenebilirlik karar sürecinin parçasıdır.',
        'تازگی داده، تعریف و قابلیت پیگیری بخشی از فرایند تصمیم‌اند.',
        'Aggiornamento, definizioni e tracciabilità fanno parte del processo decisionale.',
      ),
      body: [
        t(
          'A dashboard can look precise while relying on stale records or inconsistent definitions. Before using a financial number, a team should know its source, period, calculation and limitations. Reconciliation is part of decision quality, not simply a reporting task.',
          'Bir gösterge paneli eski kayıtlara veya tutarsız tanımlara dayanırken kesin görünebilir. Finansal bir sayı kullanılmadan önce kaynağı, dönemi, hesabı ve sınırları bilinmelidir. Mutabakat yalnızca raporlama değil, karar kalitesinin parçasıdır.',
          'داشبورد می‌تواند دقیق به نظر برسد اما بر سوابق قدیمی یا تعریف ناسازگار تکیه کند. پیش از استفاده از عدد مالی، منبع، دوره، محاسبه و محدودیت آن باید روشن باشد. تطبیق داده بخشی از کیفیت تصمیم است، نه صرفاً وظیفه گزارش‌دهی.',
          'Un dashboard può apparire preciso pur usando dati obsoleti o definizioni incoerenti. Prima di usare un numero finanziario, il team dovrebbe conoscerne fonte, periodo, calcolo e limiti. La riconciliazione è parte della qualità delle decisioni, non solo del reporting.',
        ),
        t(
          'AEON’s shared foundation is intended to connect data, identity, AI and governance across its initiatives. Shared information should have clear access boundaries and ownership. The goal is consistent evidence without assuming that every initiative needs unrestricted access to every record.',
          'AEON’un ortak temeli, girişimler arasında veri, kimlik, yapay zekâ ve yönetişimi bağlamayı hedefler. Paylaşılan bilginin erişim sınırları ve sahipliği açık olmalıdır. Amaç her girişime her kayda sınırsız erişim vermek değil, tutarlı kanıt sağlamaktır.',
          'زیرساخت مشترک AEON برای اتصال داده، هویت، هوش مصنوعی و حاکمیت میان ابتکارها طراحی می‌شود. اطلاعات مشترک باید مرز دسترسی و مالکیت روشن داشته باشند. هدف، شواهد سازگار است، بدون فرض دسترسی نامحدود همه ابتکارها به همه سوابق.',
          'La base condivisa di AEON punta a collegare dati, identità, IA e governance tra le iniziative. Le informazioni condivise devono avere limiti di accesso e responsabilità chiari. L’obiettivo è avere evidenze coerenti, senza presumere accesso illimitato a ogni dato.',
        ),
      ],
    },
    {
      slug: 'time-horizon-as-strategy',
      year: '2026',
      category: t('Strategy', 'Strateji', 'راهبرد', 'Strategia'),
      title: t(
        'Long-term thinking needs short-term evidence.',
        'Uzun vadeli düşünce kısa vadeli kanıt gerektirir.',
        'نگاه بلندمدت به شواهد کوتاه‌مدت نیاز دارد.',
        'Il pensiero di lungo termine richiede evidenze nel breve.',
      ),
      excerpt: t(
        'A multi-year ambition still needs a clear first problem and useful next step.',
        'Uzun vadeli hedefin de net bir ilk soruna ve faydalı bir sonraki adıma ihtiyacı vardır.',
        'چشم‌انداز چندساله همچنان به مسئله اول روشن و گام بعدی مفید نیاز دارد.',
        'Un’ambizione pluriennale richiede comunque un primo problema chiaro e un passo utile.',
      ),
      body: [
        t(
          'A long horizon can help a group invest in foundations rather than chase every market cycle. It can also become a reason to postpone difficult validation. Durable ambition needs a practical sequence: identify a problem, test a focused solution and learn from the result.',
          'Uzun bir ufuk, grubun her piyasa döngüsünü kovalamak yerine temellere yatırım yapmasını sağlayabilir. Ancak zor doğrulamaları erteleme gerekçesine de dönüşebilir. Kalıcı hedef pratik bir sıra gerektirir: sorun belirlemek, odaklı çözümü test etmek ve sonuçtan öğrenmek.',
          'افق بلندمدت می‌تواند مجموعه را به سرمایه‌گذاری در بنیان‌ها به‌جای دنبال‌کردن هر چرخه بازار هدایت کند. اما ممکن است به بهانه تأخیر در اعتبارسنجی هم تبدیل شود. چشم‌انداز پایدار به ترتیب عملی نیاز دارد: مسئله، آزمون راه‌حل متمرکز و یادگیری از نتیجه.',
          'Un orizzonte lungo può favorire investimenti nelle fondamenta invece dell’inseguimento di ogni ciclo di mercato. Può però diventare una scusa per rimandare la validazione. Un’ambizione duratura richiede una sequenza pratica: identificare un problema, testare una soluzione mirata e imparare dai risultati.',
        ),
        t(
          'AEON’s intended sequence is to build useful internal systems, validate the first initiative and establish an appropriate corporate structure. The group’s public description should evolve with completed work. A plan for the future should remain distinguishable from a capability available today.',
          'AEON’un hedeflediği sıra, faydalı iç sistemler kurmak, ilk girişimi doğrulamak ve uygun kurumsal yapıyı oluşturmaktır. Kamuya açık tanım tamamlanan çalışmalarla gelişmelidir. Gelecek planı bugün mevcut yeteneklerden ayırt edilebilir olmalıdır.',
          'ترتیب موردنظر AEON ساخت سیستم داخلی مفید، اعتبارسنجی ابتکار اول و ایجاد ساختار شرکتی مناسب است. معرفی عمومی باید با کار تکمیل‌شده رشد کند. برنامه آینده باید از توانایی موجود امروز قابل تشخیص بماند.',
          'La sequenza prevista per AEON è costruire sistemi interni utili, validare la prima iniziativa e stabilire una struttura societaria adeguata. La descrizione pubblica deve evolvere con il lavoro completato. I piani futuri devono restare distinguibili dalle capacità disponibili oggi.',
        ),
      ],
    },
    {
      slug: 'ai-assisted-judgment-without-abdication',
      year: '2026',
      category: t('Technology', 'Teknoloji', 'فناوری', 'Tecnologia'),
      title: t(
        'AI should support judgment, with visible boundaries.',
        'Yapay zekâ, açık sınırlarla kararları desteklemelidir.',
        'هوش مصنوعی باید با مرز روشن از قضاوت پشتیبانی کند.',
        'L’IA deve sostenere il giudizio, con limiti visibili.',
      ),
      excerpt: t(
        'Separate financial calculations from interpretation and keep a reviewable trail.',
        'Finansal hesaplamaları yorumlamadan ayırın ve incelenebilir iz bırakın.',
        'محاسبه مالی را از تفسیر جدا کنید و مسیر قابل بررسی نگه دارید.',
        'Separare i calcoli finanziari dall’interpretazione e conservare una traccia verificabile.',
      ),
      body: [
        t(
          'Financial formulas and scenario calculations need reproducible inputs and rules. Language models can help structure questions and explain trade-offs, but their interpretations should not silently replace a financial engine. Each output needs a clear connection to its evidence.',
          'Finansal formüller ve senaryo hesapları tekrarlanabilir girdiler ve kurallar gerektirir. Dil modelleri soruları yapılandırıp ödünleşimleri açıklayabilir; ancak yorumları finansal motorun yerini sessizce almamalıdır. Her çıktı kanıtlarıyla açık bağlantı kurmalıdır.',
          'فرمول مالی و محاسبه سناریو به ورودی و قواعد تکرارپذیر نیاز دارند. مدل زبانی می‌تواند پرسش را ساختار دهد و بده‌بستان را توضیح دهد، اما تفسیر آن نباید بی‌سروصدا جای موتور مالی را بگیرد. هر خروجی باید به شواهدش متصل باشد.',
          'Formule finanziarie e calcoli di scenario richiedono input e regole riproducibili. I modelli linguistici possono strutturare domande e spiegare compromessi, ma le loro interpretazioni non devono sostituire tacitamente un motore finanziario. Ogni risultato deve essere collegato alle sue evidenze.',
        ),
        t(
          'Axis is intended to follow that separation. A human reviews assumptions, owns the decision and can later compare the outcome with the original reasoning. The purpose of AI is to make the decision easier to examine, not to make accountability disappear.',
          'Axis bu ayrımı izlemeyi hedefler. İnsan varsayımları inceler, kararın sorumluluğunu üstlenir ve daha sonra sonucu ilk gerekçelerle karşılaştırabilir. Yapay zekânın amacı sorumluluğu ortadan kaldırmak değil, kararı incelemeyi kolaylaştırmaktır.',
          'Axis با همین تفکیک طراحی می‌شود. انسان فرضیات را بررسی می‌کند، مسئول تصمیم می‌ماند و بعداً نتیجه را با منطق اولیه مقایسه می‌کند. هدف هوش مصنوعی، آسان‌کردن بررسی تصمیم است، نه حذف مسئولیت.',
          'Axis punta a rispettare questa separazione. Una persona verifica le ipotesi, assume la responsabilità della decisione e confronta poi l’esito con il ragionamento originale. L’IA deve rendere la decisione più esaminabile, non far scomparire la responsabilità.',
        ),
      ],
    },
  ]
}

export function readingMinutes(body: string[]) {
  return Math.max(1, Math.ceil(body.join(' ').trim().split(/\s+/u).length / 180))
}
