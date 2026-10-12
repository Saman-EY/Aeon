export const languages = ['en', 'tr', 'fa', 'it'] as const
export type Language = (typeof languages)[number]
export const languageNames = { en: 'English', tr: 'Türkçe', fa: 'فارسی', it: 'Italiano' }
export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}
export function translator(lang: Language) {
  return (en: string, tr: string, fa: string, it: string) =>
    [en, tr, fa, it][languages.indexOf(lang)]
}

export function getCopy(lang: Language) {
  const t = translator(lang)
  return {
    nav: [
      t('Ecosystem', 'Ekosistem', 'اکوسیستم', 'Ecosistema'),
      t('Thesis', 'Yaklaşım', 'فلسفه', 'Approccio'),
      t('Insights', 'Görüşler', 'دیدگاه‌ها', 'Approfondimenti'),
      t('About', 'Hakkımızda', 'درباره ما', 'Chi siamo'),
      t('Contact', 'İletişim', 'تماس', 'Contatti'),
    ],
    language: t('Language', 'Dil', 'زبان', 'Lingua'),
    skip: t('Skip to content', 'İçeriğe geç', 'رفتن به محتوا', 'Vai al contenuto'),
    home: t('Home', 'Ana sayfa', 'صفحه اصلی', 'Home'),
    menu: t('Navigation menu', 'Gezinme menüsü', 'منوی ناوبری', 'Menu di navigazione'),
    company: t('Company', 'Şirket', 'مجموعه', 'Gruppo'),
    connect: t('Connect', 'Bağlantı', 'ارتباط', 'Contatti'),
    rights: t(
      'All rights reserved.',
      'Tüm hakları saklıdır.',
      'تمام حقوق محفوظ است.',
      'Tutti i diritti riservati.',
    ),
    formation: t(
      'Financial & technology group in development',
      'Geliştirilmekte olan finans ve teknoloji grubu',
      'گروه مالی و فناوری در حال توسعه',
      'Gruppo finanziario e tecnologico in sviluppo',
    ),
    hero: t(
      'Building financial infrastructure for the long term.',
      'Uzun vadeli finansal altyapılar inşa ediyoruz.',
      'زیرساخت‌های مالی را با نگاه بلندمدت می‌سازیم.',
      'Costruiamo infrastrutture finanziarie per il lungo termine.',
    ),
    description: t(
      'AEON is developing a financial and technology group focused on financial decision intelligence, trading risk, digital asset finance, and financial crime intelligence.',
      'AEON; finansal karar zekâsı, alım satım riski, dijital varlık finansmanı ve finansal suç analizi alanlarına odaklanan bir finans ve teknoloji grubu geliştiriyor.',
      'AEON در حال توسعه یک گروه مالی و فناوری با تمرکز بر هوشمندی تصمیم‌های مالی، ریسک معاملات، خدمات مالی دارایی‌های دیجیتال و هوشمندی جرائم مالی است.',
      'AEON sta sviluppando un gruppo finanziario e tecnologico focalizzato sul supporto alle decisioni finanziarie, sul rischio di trading, sulla finanza degli asset digitali e sull’analisi dei reati finanziari.',
    ),
    explore: t(
      'Explore the ecosystem',
      'Ekosistemi keşfedin',
      'آشنایی با اکوسیستم',
      'Esplora l’ecosistema',
    ),
    conversation: t(
      'Discuss a collaboration',
      'İş birliğini görüşelim',
      'گفتگو درباره همکاری',
      'Parliamo di una collaborazione',
    ),
    readThesis: t(
      'Read our approach',
      'Yaklaşımımızı okuyun',
      'مطالعه فلسفه ما',
      'Leggi il nostro approccio',
    ),
    initiative: t(
      'Initiative in development',
      'Geliştirilmekte olan girişim',
      'ابتکار در حال توسعه',
      'Iniziativa in sviluppo',
    ),
    groupTitle: t(
      'One group. Four connected initiatives.',
      'Bir grup. Birbirine bağlı dört girişim.',
      'یک گروه؛ چهار ابتکار مرتبط.',
      'Un gruppo. Quattro iniziative connesse.',
    ),
    groupIntro: t(
      'AEON’s ambition is to build, develop and eventually own complementary financial and technology businesses. Each initiative has a distinct problem and audience, supported by shared foundations.',
      'AEON’un hedefi, birbirini tamamlayan finans ve teknoloji işletmeleri kurmak, geliştirmek ve zaman içinde bunların sahibi olmaktır. Ortak temellerle desteklenen her girişimin kendine özgü bir sorunu ve hedef kitlesi vardır.',
      'هدف AEON ساخت، توسعه و در بلندمدت مالکیت کسب‌وکارهای مکمل مالی و فناوری است. هر ابتکار مسئله و مخاطب مشخص خود را دارد و از زیرساخت مشترک بهره می‌گیرد.',
      'AEON punta a creare, sviluppare e, nel tempo, possedere imprese finanziarie e tecnologiche complementari. Ogni iniziativa affronta un problema specifico per un pubblico distinto, con basi condivise.',
    ),
    detail: t(
      'Explore this initiative',
      'Bu girişimi keşfedin',
      'آشنایی با این ابتکار',
      'Scopri questa iniziativa',
    ),
    shared: t('Shared foundations', 'Ortak temeller', 'زیرساخت مشترک', 'Basi condivise'),
    sharedBody: t(
      'Data, identity, AI and governance connect the initiatives. This shared foundation supports the group; it is not a fifth company.',
      'Veri, kimlik, yapay zekâ ve yönetişim girişimleri birbirine bağlar. Bu ortak temel grubu destekler; beşinci bir şirket değildir.',
      'داده، هویت، هوش مصنوعی و حاکمیت، ابتکارها را به هم متصل می‌کنند. این زیرساخت پشتوانه گروه است و شرکت پنجم محسوب نمی‌شود.',
      'Dati, identità, IA e governance collegano le iniziative. Questa base sostiene il gruppo e non costituisce una quinta società.',
    ),
    current: t('Our current focus', 'Mevcut odağımız', 'تمرکز فعلی ما', 'Il nostro focus attuale'),
    currentBody: t(
      'We are defining the first useful problems, building internal systems and validating how each initiative could become a sustainable business. The website describes our direction, not a portfolio of live financial services.',
      'İlk faydalı kullanım alanlarını belirliyor, iç sistemler kuruyor ve her girişimin sürdürülebilir bir işletmeye nasıl dönüşebileceğini değerlendiriyoruz. Bu site yönümüzü anlatır; faal finansal hizmetler portföyü sunmaz.',
      'در حال تعریف مسائل اولویت‌دار، ساخت سیستم‌های داخلی و اعتبارسنجی مسیر تبدیل هر ابتکار به یک کسب‌وکار پایدار هستیم. این سایت جهت حرکت ما را معرفی می‌کند؛ مجموعه‌ای از خدمات مالی فعال را عرضه نمی‌کند.',
      'Definiamo i primi problemi utili da risolvere, costruiamo sistemi interni e valutiamo come ogni iniziativa possa diventare un’attività sostenibile. Il sito descrive la nostra direzione, non un portafoglio di servizi finanziari già operativi.',
    ),
    thesisTitle: t(
      'Access to capital alone does not create a good decision.',
      'Sermayeye erişim tek başına iyi bir karar yaratmaz.',
      'دسترسی به سرمایه، به‌تنهایی تصمیم خوب ایجاد نمی‌کند.',
      'L’accesso al capitale, da solo, non produce una buona decisione.',
    ),
    thesisIntro: t(
      'Capital matters. So do the evidence, assumptions and accountability behind its use. We build around the relationship between decision quality, risk and long-term value.',
      'Sermaye önemlidir. Kullanımının arkasındaki kanıtlar, varsayımlar ve sorumluluk da önemlidir. Karar kalitesi, risk ve uzun vadeli değer arasındaki ilişkiye odaklanıyoruz.',
      'سرمایه مهم است؛ شواهد، فرضیات و مسئولیت‌پذیری در استفاده از آن هم مهم‌اند. رویکرد ما بر رابطه کیفیت تصمیم، ریسک و ارزش بلندمدت بنا شده است.',
      'Il capitale conta, così come le evidenze, le ipotesi e la responsabilità nel suo utilizzo. Ci concentriamo sul rapporto tra qualità delle decisioni, rischio e valore di lungo termine.',
    ),
    insightsTitle: t(
      'Notes on the systems behind finance.',
      'Finansın arkasındaki sistemler üzerine notlar.',
      'یادداشت‌هایی درباره سیستم‌های پشت امور مالی.',
      'Note sui sistemi alla base della finanza.',
    ),
    insightsIntro: t(
      'Editorial perspectives on decisions, risk and infrastructure. These notes describe our thinking rather than verified product results.',
      'Kararlar, risk ve altyapı üzerine editoryal görüşler. Bu notlar doğrulanmış ürün sonuçlarını değil, düşünce yaklaşımımızı anlatır.',
      'دیدگاه‌های تحریری درباره تصمیم، ریسک و زیرساخت. این یادداشت‌ها بیانگر رویکرد فکری ما هستند، نه نتایج تأییدشده محصول.',
      'Riflessioni editoriali su decisioni, rischio e infrastruttura. Queste note descrivono il nostro approccio, non risultati di prodotto verificati.',
    ),
    allInsights: t('All insights', 'Tüm görüşler', 'همه دیدگاه‌ها', 'Tutti gli approfondimenti'),
    editorial: t('AEON editorial', 'AEON editoryal', 'تحریریه AEON', 'Redazione AEON'),
    minute: t('min read', 'dk okuma', 'دقیقه مطالعه', 'min di lettura'),
    published: t('Year', 'Yıl', 'سال', 'Anno'),
    related: t('Continue reading', 'Okumaya devam edin', 'ادامه مطالعه', 'Continua a leggere'),
    aboutTitle: t(
      'An institution in formation, with a long-term mandate.',
      'Uzun vadeli bir hedefle şekillenen bir kurum.',
      'مجموعه‌ای در حال شکل‌گیری، با افق بلندمدت.',
      'Un’istituzione in formazione, con un obiettivo di lungo termine.',
    ),
    aboutBody: t(
      'AEON is being built as a financial and technology group. Our aim is to develop complementary businesses, coordinate their resources and establish the foundations for responsible growth. This is a formation-stage initiative; descriptions of future businesses are not claims of existing subsidiaries or licensed services.',
      'AEON bir finans ve teknoloji grubu olarak kurulmaktadır. Amacımız birbirini tamamlayan işletmeler geliştirmek, kaynaklarını koordine etmek ve sorumlu büyümenin temellerini oluşturmaktır. Girişim kuruluş aşamasındadır; gelecekteki işletmelere ilişkin açıklamalar mevcut iştirakler veya lisanslı hizmetler anlamına gelmez.',
      'AEON به‌عنوان یک گروه مالی و فناوری در حال شکل‌گیری است. هدف ما توسعه کسب‌وکارهای مکمل، هماهنگی منابع آن‌ها و ایجاد بنیان رشد مسئولانه است. توصیف کسب‌وکارهای آینده، ادعای وجود شرکت‌های ثبت‌شده زیرمجموعه یا خدمات دارای مجوز نیست.',
      'AEON è in costruzione come gruppo finanziario e tecnologico. Vogliamo sviluppare attività complementari, coordinarne le risorse e creare basi per una crescita responsabile. L’iniziativa è in fase di formazione: le descrizioni delle attività future non attestano società controllate già esistenti o servizi autorizzati.',
    ),
    aboutNext: t(
      'From defined problems to validated businesses.',
      'Tanımlanmış sorunlardan doğrulanmış işletmelere.',
      'از مسئله مشخص تا کسب‌وکار اعتبارسنجی‌شده.',
      'Da problemi definiti ad attività validate.',
    ),
    aboutNextBody: t(
      'The next steps are practical: define the first customer problem, build a narrow prototype, test its usefulness and formalize the appropriate structure. Progress will be documented through actual work rather than implied scale.',
      'Sonraki adımlar somuttur: ilk müşteri sorununu tanımlamak, odaklı bir prototip geliştirmek, faydasını test etmek ve uygun yapıyı resmileştirmek. İlerleme, varsayılan ölçekle değil gerçek çalışmalarla belgelenecektir.',
      'گام‌های بعدی عملی‌اند: تعریف مسئله مشتری اول، ساخت نمونه‌ای محدود، آزمون کاربرد آن و رسمی‌کردن ساختار مناسب. پیشرفت را با کار واقعی نشان می‌دهیم، نه با القای مقیاسی که هنوز وجود ندارد.',
      'I prossimi passi sono concreti: definire il primo problema del cliente, costruire un prototipo mirato, verificarne l’utilità e formalizzare la struttura adatta. Documenteremo i progressi attraverso il lavoro reale, senza suggerire una scala non ancora raggiunta.',
    ),
    problem: t('The problem', 'Sorun', 'مسئله', 'Il problema'),
    audience: t('Intended audience', 'Hedef kitle', 'مخاطب هدف', 'Pubblico previsto'),
    output: t('Intended output', 'Hedeflenen çıktı', 'خروجی موردنظر', 'Risultato previsto'),
    focus: t('Focus areas', 'Odak alanları', 'حوزه‌های تمرکز', 'Aree di interesse'),
    example: t(
      'Illustrative workflow',
      'Örnek iş akışı',
      'جریان کار نمایشی',
      'Flusso illustrativo',
    ),
    exampleNote: t(
      'Concept illustration, not a live product or client result.',
      'Kavramsal örnek; faal ürün veya müşteri sonucu değildir.',
      'نمایش مفهومی؛ محصول فعال یا نتیجه مشتری واقعی نیست.',
      'Esempio concettuale, non un prodotto operativo o un risultato di un cliente.',
    ),
    contactTitle: t(
      'A useful conversation starts with a clear problem.',
      'Faydalı bir görüşme, net bir sorunla başlar.',
      'گفتگوی مفید با یک مسئله روشن شروع می‌شود.',
      'Una conversazione utile inizia da un problema chiaro.',
    ),
    contactIntro: t(
      'Tell us what you are working on, which initiative interests you and what kind of collaboration you have in mind.',
      'Üzerinde çalıştığınız konuyu, ilgilendiğiniz girişimi ve düşündüğünüz iş birliğini anlatın.',
      'از موضوع کارتان، ابتکار موردعلاقه و نوع همکاری موردنظر بگویید.',
      'Raccontaci su cosa lavori, quale iniziativa ti interessa e quale collaborazione hai in mente.',
    ),
    name: t('Full name', 'Ad soyad', 'نام و نام خانوادگی', 'Nome e cognome'),
    email: t('Email', 'E-posta', 'ایمیل', 'Email'),
    organization: t(
      'Organization (optional)',
      'Kurum (isteğe bağlı)',
      'سازمان (اختیاری)',
      'Organizzazione (facoltativa)',
    ),
    topic: t('Initiative', 'Girişim', 'ابتکار', 'Iniziativa'),
    purpose: t('Purpose of contact', 'İletişim amacı', 'هدف تماس', 'Motivo del contatto'),
    message: t('Message', 'Mesaj', 'پیام', 'Messaggio'),
    send: t('Send message', 'Mesaj gönder', 'ارسال پیام', 'Invia messaggio'),
    sending: t('Sending…', 'Gönderiliyor…', 'در حال ارسال…', 'Invio in corso…'),
    sent: t(
      'Your message has been recorded.',
      'Mesajınız kaydedildi.',
      'پیام شما ثبت شد.',
      'Il messaggio è stato registrato.',
    ),
    failed: t(
      'The message was not recorded. Please try again later.',
      'Mesaj kaydedilemedi. Lütfen daha sonra tekrar deneyin.',
      'پیام ثبت نشد. لطفاً بعداً دوباره تلاش کنید.',
      'Il messaggio non è stato registrato. Riprova più tardi.',
    ),
    unavailable: t(
      'The contact form is not accepting messages yet.',
      'İletişim formu henüz mesaj kabul etmiyor.',
      'فرم تماس هنوز پیام دریافت نمی‌کند.',
      'Il modulo di contatto non accetta ancora messaggi.',
    ),
    direct: t('Direct contact', 'Doğrudan iletişim', 'تماس مستقیم', 'Contatto diretto'),
    emailCta: t('Send an email', 'E-posta gönderin', 'ارسال ایمیل', 'Invia un’email'),
    noEmail: t(
      'A direct contact channel will be published when available.',
      'Doğrudan iletişim kanalı hazır olduğunda yayımlanacaktır.',
      'مسیر تماس مستقیم پس از آماده‌شدن اعلام می‌شود.',
      'Un canale di contatto diretto sarà pubblicato quando disponibile.',
    ),
    general: t('General / AEON', 'Genel / AEON', 'عمومی / AEON', 'Generale / AEON'),
    purposes: [
      t(
        'Development collaboration',
        'Geliştirme iş birliği',
        'همکاری توسعه',
        'Collaborazione allo sviluppo',
      ),
      t(
        'Customer discovery / pilot discussion',
        'Müşteri keşfi / pilot görüşmesi',
        'گفتگوی مسئله مشتری / پایلوت',
        'Analisi delle esigenze / confronto su un pilota',
      ),
      t('Research', 'Araştırma', 'پژوهش', 'Ricerca'),
      t('Media / other', 'Medya / diğer', 'رسانه / سایر', 'Media / altro'),
    ],
    privacy: t('Privacy', 'Gizlilik', 'حریم خصوصی', 'Privacy'),
    privacyNote: t(
      'Your contact details and message are used to review and respond to your inquiry. Please do not include confidential financial or identity information.',
      'İletişim bilgileriniz ve mesajınız, talebinizi incelemek ve yanıtlamak için kullanılır. Lütfen gizli finansal veya kimlik bilgileri eklemeyin.',
      'اطلاعات تماس و پیام شما برای بررسی و پاسخ به درخواست استفاده می‌شوند. لطفاً اطلاعات محرمانه مالی یا هویتی را وارد نکنید.',
      'I tuoi recapiti e il messaggio sono utilizzati per esaminare e rispondere alla richiesta. Non includere informazioni finanziarie o identificative riservate.',
    ),
    privacyTitle: t(
      'How this website handles information.',
      'Bu site bilgileri nasıl işler?',
      'این سایت چگونه با اطلاعات برخورد می‌کند؟',
      'Come questo sito gestisce le informazioni.',
    ),
    privacyBody: t(
      'The website does not include advertising or analytics trackers. The language preference is stored only in your browser. If the contact form is enabled, the submitted name, email, organization and message are sent to the configured contact service for follow-up. The form is unavailable until that service is configured. External font services may receive standard connection data when fonts are loaded.',
      'Site reklam veya analitik takip araçları içermez. Dil tercihi yalnızca tarayıcınızda saklanır. İletişim formu etkinse ad, e-posta, kurum ve mesaj takip amacıyla yapılandırılmış iletişim hizmetine gönderilir. Hizmet yapılandırılana kadar form kullanılamaz. Yazı tipleri yüklenirken harici yazı tipi hizmetleri standart bağlantı verileri alabilir.',
      'این سایت ابزار ردیابی تبلیغاتی یا تحلیلی ندارد. انتخاب زبان فقط در مرورگر شما ذخیره می‌شود. اگر فرم تماس فعال باشد، نام، ایمیل، سازمان و پیام برای پیگیری به سرویس تماس تنظیم‌شده ارسال می‌شوند. تا اتصال این سرویس، فرم غیرفعال است. هنگام بارگذاری فونت، سرویس خارجی فونت ممکن است اطلاعات معمول اتصال را دریافت کند.',
      'Il sito non include tracciatori pubblicitari o analitici. La preferenza linguistica è salvata solo nel browser. Se il modulo è attivo, nome, email, organizzazione e messaggio sono inviati al servizio di contatto configurato per il seguito della richiesta. Il modulo resta indisponibile finché tale servizio non è configurato. Durante il caricamento dei caratteri, i servizi esterni possono ricevere i normali dati di connessione.',
    ),
    privacyContact: t(
      'For requests about submitted information, use the direct contact channel when available. Retention and deletion procedures must be finalized before accepting public inquiries.',
      'Gönderilen bilgilerle ilgili talepler için mevcut olduğunda doğrudan iletişim kanalını kullanın. Saklama ve silme süreçleri, herkese açık talepler alınmadan önce tamamlanmalıdır.',
      'برای درخواست مربوط به اطلاعات ارسالی، پس از فعال‌شدن از مسیر تماس مستقیم استفاده کنید. روش نگهداری و حذف اطلاعات باید پیش از دریافت عمومی پیام‌ها نهایی شود.',
      'Per richieste relative ai dati inviati, usa il contatto diretto quando disponibile. Le procedure di conservazione e cancellazione devono essere definite prima di accettare richieste pubbliche.',
    ),
    notFound: t(
      'This page could not be found.',
      'Bu sayfa bulunamadı.',
      'این صفحه پیدا نشد.',
      'Questa pagina non è stata trovata.',
    ),
    notFoundBody: t(
      'Return to the homepage or explore the ecosystem.',
      'Ana sayfaya dönün veya ekosistemi keşfedin.',
      'به صفحه اصلی برگردید یا با اکوسیستم آشنا شوید.',
      'Torna alla homepage o esplora l’ecosistema.',
    ),
  }
}

export function getInitiatives(lang: Language) {
  const t = translator(lang)
  return [
    {
      id: 'axis',
      name: 'AEON Axis',
      role: t(
        'Financial decision intelligence',
        'Finansal karar zekâsı',
        'هوشمندی تصمیم‌های مالی',
        'Supporto intelligente alle decisioni finanziarie',
      ),
      summary: t(
        'From financial signals to scenarios, decisions and a memory of why they were made.',
        'Finansal sinyallerden senaryolara, kararlara ve karar gerekçelerinin hafızasına.',
        'از نشانه‌های مالی تا سناریو، تصمیم و ثبت منطق پشت آن.',
        'Dai segnali finanziari agli scenari, alle decisioni e alla memoria delle loro ragioni.',
      ),
      problem: t(
        'Finance teams have reports, but often lack a connected view of what changed, why it matters and which decision should be reviewed.',
        'Finans ekiplerinin raporları vardır; ancak neyin değiştiği, neden önemli olduğu ve hangi kararın gözden geçirilmesi gerektiği çoğu zaman bağlantılı biçimde görülemez.',
        'تیم مالی گزارش دارد، اما اغلب نمی‌تواند تغییر، اهمیت آن و تصمیم نیازمند بازبینی را در یک تصویر مرتبط ببیند.',
        'I team finanziari dispongono di report, ma spesso manca una visione connessa di cosa è cambiato, perché conta e quale decisione rivedere.',
      ),
      audience: t(
        'CFOs, finance leaders and corporate finance teams.',
        'CFO’lar, finans yöneticileri ve kurumsal finans ekipleri.',
        'مدیران مالی، رهبران مالی و تیم‌های مالی شرکت‌ها.',
        'CFO, responsabili finanziari e team di finanza aziendale.',
      ),
      output: t(
        'A decision brief connecting evidence, financial consequences, alternatives, thresholds and review dates. Calculations belong to a financial engine; interpretation supports human judgment.',
        'Kanıtları, finansal sonuçları, alternatifleri, eşikleri ve inceleme tarihlerini birleştiren karar özeti. Hesaplamalar finansal motor tarafından yapılır; yorumlama insan kararını destekler.',
        'خلاصه تصمیم شامل شواهد، پیامد مالی، گزینه‌ها، آستانه‌ها و زمان بازبینی. محاسبات به موتور مالی سپرده می‌شوند و تفسیر، قضاوت انسانی را پشتیبانی می‌کند.',
        'Un documento decisionale che collega evidenze, conseguenze finanziarie, alternative, soglie e date di revisione. Un motore finanziario esegue i calcoli; l’interpretazione sostiene il giudizio umano.',
      ),
      domains: [
        t(
          'Liquidity & working capital',
          'Likidite ve işletme sermayesi',
          'نقدینگی و سرمایه در گردش',
          'Liquidità e capitale circolante',
        ),
        t(
          'Scenario modelling',
          'Senaryo modelleme',
          'مدل‌سازی سناریو',
          'Modellazione degli scenari',
        ),
        t('Capital allocation', 'Sermaye tahsisi', 'تخصیص سرمایه', 'Allocazione del capitale'),
        t('Decision memory', 'Karar hafızası', 'حافظه تصمیم', 'Memoria delle decisioni'),
      ],
      steps: [
        t('Receivables change', 'Alacaklar değişir', 'تغییر مطالبات', 'Variazione dei crediti'),
        t(
          'Cash impact simulated',
          'Nakit etkisi simüle edilir',
          'شبیه‌سازی اثر نقدی',
          'Simulazione dell’impatto sulla cassa',
        ),
        t(
          'Options & thresholds',
          'Seçenekler ve eşikler',
          'گزینه‌ها و آستانه‌ها',
          'Alternative e soglie',
        ),
        t(
          'Human decision & review',
          'İnsan kararı ve inceleme',
          'تصمیم و بازبینی انسانی',
          'Decisione e revisione umana',
        ),
      ],
    },
    {
      id: 'aegis',
      name: 'AEON Aegis',
      role: t(
        'Trading risk & insurance infrastructure',
        'Alım satım riski ve sigorta altyapısı',
        'زیرساخت ریسک معاملات و بیمه',
        'Infrastruttura per il rischio di trading e l’assicurazione',
      ),
      summary: t(
        'Risk assessment, pricing and protection design for trading ecosystems.',
        'Alım satım ekosistemleri için risk değerlendirmesi, fiyatlandırma ve koruma tasarımı.',
        'ارزیابی ریسک، قیمت‌گذاری و طراحی حفاظت برای اکوسیستم معاملات.',
        'Valutazione del rischio, pricing e progettazione della protezione per gli ecosistemi di trading.',
      ),
      problem: t(
        'A trade’s risk depends on trader behaviour, aggregate exposure and market conditions. Fixed protection without these inputs can misprice the risk.',
        'Bir işlemin riski yatırımcı davranışına, toplam pozisyona ve piyasa koşullarına bağlıdır. Bu girdiler olmadan sabit koruma riski yanlış fiyatlayabilir.',
        'ریسک معامله به رفتار معامله‌گر، مجموع مواجهه و شرایط بازار وابسته است. حفاظت ثابت بدون این ورودی‌ها ممکن است ریسک را نادرست قیمت‌گذاری کند.',
        'Il rischio di un’operazione dipende dal comportamento del trader, dall’esposizione aggregata e dalle condizioni di mercato. Una protezione fissa priva di questi dati può prezzare male il rischio.',
      ),
      audience: t(
        'Brokers, trading platforms, prop firms and potential insurance partners.',
        'Aracı kurumlar, işlem platformları, prop firmalar ve potansiyel sigorta ortakları.',
        'بروکرها، پلتفرم‌های معاملاتی، شرکت‌های پراپ و شرکای بالقوه بیمه.',
        'Broker, piattaforme di trading, prop firm e potenziali partner assicurativi.',
      ),
      output: t(
        'A risk engine and coverage simulator are the intended starting point. Any future insurance offering would require suitable licensed partners and validated economics. Aegis is not presented as an active insurer.',
        'Hedeflenen başlangıç bir risk motoru ve teminat simülatörüdür. Gelecekteki sigorta teklifleri uygun lisanslı ortaklar ve doğrulanmış ekonomik modeller gerektirir. Aegis faal bir sigortacı olarak sunulmaz.',
        'نقطه شروع موردنظر، موتور ریسک و شبیه‌ساز پوشش است. عرضه بیمه در آینده به شریک دارای مجوز مناسب و اعتبارسنجی اقتصادی نیاز دارد. Aegis در این سایت بیمه‌گر فعال معرفی نمی‌شود.',
        'Il punto di partenza previsto è un motore di rischio con simulatore di copertura. Un’offerta assicurativa futura richiederebbe partner autorizzati idonei e un modello economico validato. Aegis non è presentata come assicuratore operativo.',
      ),
      domains: [
        t(
          'Behavioural risk profiles',
          'Davranışsal risk profilleri',
          'پروفایل ریسک رفتاری',
          'Profili di rischio comportamentale',
        ),
        t('Portfolio exposure', 'Portföy riski', 'مواجهه پرتفوی', 'Esposizione di portafoglio'),
        t(
          'Dynamic risk pricing',
          'Dinamik risk fiyatlandırması',
          'قیمت‌گذاری پویای ریسک',
          'Pricing dinamico del rischio',
        ),
        t(
          'Verified event workflows',
          'Doğrulanmış olay iş akışları',
          'جریان رویدادهای قابل تأیید',
          'Flussi per eventi verificati',
        ),
      ],
      steps: [
        t(
          'Trade & exposure data',
          'İşlem ve pozisyon verileri',
          'داده معامله و مواجهه',
          'Dati di operazione ed esposizione',
        ),
        t('Risk assessment', 'Risk değerlendirmesi', 'ارزیابی ریسک', 'Valutazione del rischio'),
        t(
          'Coverage simulation',
          'Teminat simülasyonu',
          'شبیه‌سازی پوشش',
          'Simulazione della copertura',
        ),
        t(
          'Potential partner integration',
          'Olası ortak entegrasyonu',
          'اتصال بالقوه به شریک',
          'Possibile integrazione con partner',
        ),
      ],
    },
    {
      id: 'arca',
      name: 'AEON Arca',
      role: t(
        'Digital asset financial infrastructure',
        'Dijital varlık finansal altyapısı',
        'زیرساخت مالی دارایی‌های دیجیتال',
        'Infrastruttura finanziaria per asset digitali',
      ),
      summary: t(
        'Exploring the foundations that connect digital assets, treasury and settlement.',
        'Dijital varlıkları, hazine yönetimini ve takası birleştiren temelleri araştırıyoruz.',
        'بررسی بنیان اتصال دارایی دیجیتال، خزانه و تسویه.',
        'Esplorare le basi che collegano asset digitali, tesoreria e regolamento.',
      ),
      problem: t(
        'Digital asset activity spans custody, transactions and liquidity, often across disconnected systems. Institutional use requires clear ownership, reliable records and appropriate controls.',
        'Dijital varlık faaliyetleri, çoğu zaman bağlantısız sistemlerde saklama, işlem ve likiditeyi kapsar. Kurumsal kullanım açık mülkiyet, güvenilir kayıtlar ve uygun kontroller gerektirir.',
        'فعالیت دارایی دیجیتال شامل نگهداری، تراکنش و نقدینگی در سیستم‌های اغلب جدا از هم است. کاربرد سازمانی به مالکیت روشن، سوابق قابل اعتماد و کنترل مناسب نیاز دارد.',
        'Le attività in asset digitali includono custodia, transazioni e liquidità, spesso in sistemi separati. L’utilizzo istituzionale richiede titolarità chiara, registri affidabili e controlli adeguati.',
      ),
      audience: t(
        'Potential institutional digital-finance users and infrastructure partners.',
        'Potansiyel kurumsal dijital finans kullanıcıları ve altyapı ortakları.',
        'کاربران بالقوه مالی دیجیتال سازمانی و شرکای زیرساخت.',
        'Potenziali utenti istituzionali della finanza digitale e partner infrastrutturali.',
      ),
      output: t(
        'A research-led definition of the first service, its operating model and its dependencies. Custody, treasury and settlement remain areas to evaluate, not services currently offered. Arca is not presented as a licensed bank.',
        'İlk hizmetin, işletim modelinin ve bağımlılıklarının araştırmaya dayalı tanımı. Saklama, hazine ve takas değerlendirilecek alanlardır; şu anda sunulan hizmetler değildir. Arca lisanslı bir banka olarak sunulmaz.',
        'تعریف مبتنی بر پژوهش برای خدمت اول، مدل عملیاتی و وابستگی‌های آن. نگهداری، خزانه و تسویه حوزه‌های بررسی‌اند و اکنون عرضه نمی‌شوند. Arca بانک دارای مجوز معرفی نمی‌شود.',
        'Una definizione basata sulla ricerca del primo servizio, del modello operativo e delle dipendenze. Custodia, tesoreria e regolamento sono aree da valutare, non servizi già offerti. Arca non è presentata come banca autorizzata.',
      ),
      domains: [
        t(
          'Custody research',
          'Saklama araştırması',
          'پژوهش نگهداری دارایی',
          'Ricerca sulla custodia',
        ),
        t('Treasury workflows', 'Hazine iş akışları', 'جریان کار خزانه', 'Flussi di tesoreria'),
        t(
          'Settlement architecture',
          'Takas mimarisi',
          'معماری تسویه',
          'Architettura del regolamento',
        ),
        t('Control & compliance', 'Kontrol ve uyum', 'کنترل و انطباق', 'Controlli e conformità'),
      ],
      steps: [
        t('Institutional need', 'Kurumsal ihtiyaç', 'نیاز سازمانی', 'Esigenza istituzionale'),
        t('Operating model', 'İşletim modeli', 'مدل عملیاتی', 'Modello operativo'),
        t(
          'Controls & dependencies',
          'Kontroller ve bağımlılıklar',
          'کنترل‌ها و وابستگی‌ها',
          'Controlli e dipendenze',
        ),
        t(
          'First service validation',
          'İlk hizmet doğrulaması',
          'اعتبارسنجی خدمت اول',
          'Validazione del primo servizio',
        ),
      ],
    },
    {
      id: 'axon',
      name: 'AEON Axon',
      role: t(
        'Financial crime intelligence',
        'Finansal suç analizi',
        'هوشمندی جرائم مالی',
        'Analisi dei reati finanziari',
      ),
      summary: t(
        'Connecting transactions, entities and evidence for explainable investigations.',
        'Açıklanabilir incelemeler için işlemleri, varlıkları ve kanıtları birbirine bağlamak.',
        'اتصال تراکنش، موجودیت و شواهد برای بررسی قابل توضیح.',
        'Collegare transazioni, soggetti ed evidenze per indagini comprensibili.',
      ),
      problem: t(
        'An isolated alert rarely explains a financial network. Investigators need to connect identities, ownership and transaction patterns without mistaking a signal for proof.',
        'Tek bir uyarı finansal ağı nadiren açıklar. İncelemecilerin bir sinyali kanıt sanmadan kimlikleri, mülkiyeti ve işlem örüntülerini bağlaması gerekir.',
        'هشدار منفرد به‌ندرت شبکه مالی را توضیح می‌دهد. بررسی‌کننده باید هویت، مالکیت و الگوی تراکنش را به هم متصل کند، بدون اینکه نشانه را با اثبات اشتباه بگیرد.',
        'Un singolo avviso raramente spiega una rete finanziaria. Chi indaga deve collegare identità, proprietà e schemi di transazione senza confondere un segnale con una prova.',
      ),
      audience: t(
        'Compliance teams, financial institutions and investigation professionals.',
        'Uyum ekipleri, finansal kurumlar ve inceleme uzmanları.',
        'تیم‌های انطباق، مؤسسات مالی و متخصصان بررسی.',
        'Team di conformità, istituzioni finanziarie e professionisti delle indagini.',
      ),
      output: t(
        'An intended investigation workflow combining rules, entity resolution, graph analysis and case review. Human assessment remains responsible for interpreting signals and deciding the next step.',
        'Kurallar, varlık eşleştirme, grafik analizi ve dosya incelemesini birleştiren hedef iş akışı. Sinyallerin yorumlanması ve sonraki adıma karar verilmesi insan değerlendirmesinin sorumluluğundadır.',
        'جریان بررسی موردنظر با ترکیب قواعد، تطبیق موجودیت، تحلیل گراف و بررسی پرونده. تفسیر نشانه‌ها و انتخاب گام بعدی همچنان مسئولیت ارزیابی انسانی است.',
        'Un flusso previsto che unisce regole, riconciliazione delle identità, analisi a grafo e revisione dei casi. L’interpretazione dei segnali e la scelta del passo successivo restano affidate alla valutazione umana.',
      ),
      domains: [
        t('Transaction networks', 'İşlem ağları', 'شبکه تراکنش‌ها', 'Reti di transazioni'),
        t(
          'Entity resolution',
          'Varlık eşleştirme',
          'تطبیق موجودیت‌ها',
          'Riconciliazione delle identità',
        ),
        t('Ownership analysis', 'Mülkiyet analizi', 'تحلیل مالکیت', 'Analisi della proprietà'),
        t('Case review', 'Dosya incelemesi', 'بررسی پرونده', 'Revisione dei casi'),
      ],
      steps: [
        t(
          'Transactions & entities',
          'İşlemler ve varlıklar',
          'تراکنش‌ها و موجودیت‌ها',
          'Transazioni e soggetti',
        ),
        t('Network & behaviour', 'Ağ ve davranış', 'شبکه و رفتار', 'Rete e comportamento'),
        t(
          'Explainable signals',
          'Açıklanabilir sinyaller',
          'نشانه‌های قابل توضیح',
          'Segnali comprensibili',
        ),
        t(
          'Human case review',
          'İnsan tarafından inceleme',
          'بررسی انسانی پرونده',
          'Revisione umana del caso',
        ),
      ],
    },
  ]
}

export function getPrinciples(lang: Language) {
  const t = translator(lang)
  return [
    {
      title: t(
        'Make reasoning visible.',
        'Gerekçeleri görünür kılın.',
        'منطق تصمیم را روشن کنید.',
        'Rendere visibili le ragioni.',
      ),
      body: t(
        'A decision should preserve its evidence, assumptions and alternatives so it can be reviewed when conditions change.',
        'Bir karar, koşullar değiştiğinde incelenebilmesi için kanıtlarını, varsayımlarını ve alternatiflerini korumalıdır.',
        'تصمیم باید شواهد، فرضیات و گزینه‌هایش را حفظ کند تا با تغییر شرایط قابل بازبینی باشد.',
        'Una decisione deve conservare evidenze, ipotesi e alternative per essere rivedibile quando cambiano le condizioni.',
      ),
    },
    {
      title: t(
        'Price risk before committing.',
        'Taahhütten önce riski değerlendirin.',
        'پیش از تعهد، ریسک را بسنجید.',
        'Valutare il rischio prima di impegnarsi.',
      ),
      body: t(
        'Exposure, timing and reversibility matter. Protection and insurance can complement a sound risk process; they do not replace it.',
        'Pozisyon, zamanlama ve geri döndürülebilirlik önemlidir. Koruma ve sigorta sağlam bir risk sürecini tamamlayabilir; onun yerini almaz.',
        'مواجهه، زمان و برگشت‌پذیری اهمیت دارند. حفاظت و بیمه می‌توانند فرایند درست ریسک را تکمیل کنند، اما جایگزین آن نیستند.',
        'Esposizione, tempi e reversibilità contano. Protezione e assicurazione possono integrare un processo di rischio solido, ma non sostituirlo.',
      ),
    },
    {
      title: t(
        'Keep people accountable.',
        'İnsan sorumluluğunu koruyun.',
        'مسئولیت انسانی را حفظ کنید.',
        'Mantenere la responsabilità umana.',
      ),
      body: t(
        'Technology should calculate, connect and clarify. People remain responsible for decisions and the consequences of using a system.',
        'Teknoloji hesaplamalı, bağlantı kurmalı ve netleştirmelidir. Kararlardan ve bir sistemi kullanmanın sonuçlarından insanlar sorumludur.',
        'فناوری باید محاسبه کند، ارتباط بسازد و ابهام را کم کند. مسئولیت تصمیم و پیامد استفاده از سیستم با انسان است.',
        'La tecnologia deve calcolare, collegare e chiarire. Le persone restano responsabili delle decisioni e delle conseguenze dell’utilizzo di un sistema.',
      ),
    },
    {
      title: t(
        'Build for the long term.',
        'Uzun vade için inşa edin.',
        'برای بلندمدت بسازید.',
        'Costruire per il lungo termine.',
      ),
      body: t(
        'Choose useful problems, validate a focused solution and grow through repeatable systems. Governance and reliable information are part of the foundation.',
        'Faydalı sorunlar seçin, odaklı bir çözümü doğrulayın ve tekrarlanabilir sistemlerle büyüyün. Yönetişim ve güvenilir bilgi temelin parçasıdır.',
        'مسئله مفید انتخاب کنید، راه‌حل متمرکز را اعتبارسنجی کنید و با سیستم‌های تکرارپذیر رشد کنید. حاکمیت و اطلاعات قابل اعتماد بخشی از بنیان‌اند.',
        'Scegliere problemi utili, validare una soluzione mirata e crescere con sistemi ripetibili. Governance e informazioni affidabili fanno parte delle fondamenta.',
      ),
    },
  ]
}
