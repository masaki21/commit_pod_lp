
export type Language = 'ja' | 'en' | 'id' | 'vi' | 'it' | 'es' | 'pt' | 'ko' | 'zh';

export const translations: Record<Language, any> = {
  ja: {
    nav: { howTo: '使い方', startApp: 'Web版を起動' },
    hero: {
      pwaBadge: 'PWA対応：ブラウザで即体験',
      title: '筋トレ飯は、',
      titleAccent: '「鍋」一択でした。',
      subtitle: 'インスタで人気の「コミット鍋」がついにアプリ化。計算・買い物・調理をすべてスマホひとつで完結。',
      ctaStart: '今すぐ無料で開始',
      ctaHowTo: '使い方を見る'
    },
    calc: {
      title: 'PFC Quick Calculator',
      step1Title: '基本情報を入力',
      height: '身長 (cm)',
      weight: '体重 (kg)',
      next: '次へ進む',
      goalTitle: '目的を選んでください',
      goals: {
        bulk: { label: '筋肉を大きくしたい', sub: 'Bulk Up' },
        recomp: { label: '筋肉維持・体脂肪減少', sub: 'Recomposition' },
        cut: { label: '体脂肪を落としたい', sub: 'Cutting' }
      },
      calcBtn: '計算結果を見る',
      resultTitle: 'Target Daily Intake',
      protein: 'タンパク質',
      fat: '脂質',
      carb: '炭水化物',
      pwaHint: 'これに基づいた「最強の鍋プラン」を Web版アプリ で今すぐ作成できます。',
      pwaCta: 'Web版で即体験'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: '身体を変えるための、最も合理的なアプローチ。',
      pfcTitle: '自動PFC算出',
      pfcDesc: '身体データに基づき、バルクアップ・減量に最適な摂取量をミリ単位で管理。',
      nabeTitle: '最強の鍋ビルド',
      nabeDesc: '2食・5食まとめて計算。高タンパク・低脂質な具材をAIがセレクト。',
      listTitle: '買い物リスト',
      listDesc: '必要な分量だけをリスト化。スーパーでの迷いをゼロにし、時短を実現。',
      cookTitle: '仕込みガイド',
      cookDesc: '「切って入れるだけ」。誰でも15分でプロ級の筋トレ鍋が完成。'
    },
    howTo: {
      title: 'How to Commit',
      subtitle: 'わずか4ステップで、あなたの自炊革命が始まります。',
      step1: { title: '自分を知る', desc: '身長・体重・目的からAIが目標数値を算出。もう迷わない。' },
      step2: { title: '鍋を組む', desc: 'お好みのベースと具材を選んでプラン作成。理想値とのマッチ度を確認。' },
      step3: { title: 'まとめ買い', desc: '自動生成されたリストに従って買い物。無駄な出費もカット。' },
      step4: { title: '一気に仕込む', desc: 'ガイドを見ながらまとめて調理。あとは食べる時に加熱するだけ。' }
    },
    faq: {
      title: 'よくある質問',
      q1: 'なぜ「鍋」なのですか？',
      a1: '鍋は「低脂質・高タンパク・大量の野菜」を同時に摂取でき、かつ調理が簡単（切って煮るだけ）だからです。最も継続しやすい筋トレ飯の究極形です。',
      q2: '一人暮らしでも大丈夫ですか？',
      a2: 'もちろんです。2食分または5食分のプランを選択でき、一人暮らしの冷蔵庫事情に合わせた買い物・ストック管理をサポートします。',
      q3: '料理が苦手ですができますか？',
      a3: 'ご安心ください。レシピはすべて「仕込みガイド」付きです。火加減や切り方のコツまで、写真付きのステップバイステップで案内します。'
    },
    footer: {
      desc: '筋トレ初心者のための自炊支援プラットフォーム。PFC管理を「鍋」という究極のフォーマットで効率化します。'
    }
  },
  en: {
    nav: { howTo: 'How to use', startApp: 'Launch App' },
    hero: {
      pwaBadge: 'PWA Ready: Experience instantly in browser',
      title: 'The ultimate fitness meal is',
      titleAccent: 'The "Hot Pot".',
      subtitle: 'The Instagram-famous "Commit Pot" is now an app. Calculation, shopping, and cooking all in your smartphone.',
      ctaStart: 'Start for free now',
      ctaHowTo: 'See how it works'
    },
    calc: {
      title: 'PFC Quick Calculator',
      step1Title: 'Enter Basic Info',
      height: 'Height (cm)',
      weight: 'Weight (kg)',
      next: 'Next',
      goalTitle: 'Select your goal',
      goals: {
        bulk: { label: 'Build Muscle', sub: 'Bulk Up' },
        recomp: { label: 'Maintain & Lose Fat', sub: 'Recomposition' },
        cut: { label: 'Lose Fat', sub: 'Cutting' }
      },
      calcBtn: 'View Results',
      resultTitle: 'Target Daily Intake',
      protein: 'Protein',
      fat: 'Fat',
      carb: 'Carbs',
      pwaHint: 'Create the ultimate hot pot plan based on these results in the Web App now.',
      pwaCta: 'Experience Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'The most rational approach to changing your body.',
      pfcTitle: 'Auto PFC Calculation',
      pfcDesc: 'Manage optimal intake for bulking or cutting based on your body data.',
      nabeTitle: 'Ultimate Pot Builder',
      nabeDesc: 'Calculate 2 or 5 meals at once. AI selects high-protein, low-fat ingredients.',
      listTitle: 'Shopping List',
      listDesc: 'List only the amounts you need. Eliminate confusion at the supermarket.',
      cookTitle: 'Cooking Guide',
      cookDesc: 'Just chop and simmer. Anyone can complete pro-level fitness pots in 15 min.'
    },
    howTo: {
      title: 'How to Commit',
      subtitle: 'Your home-cooking revolution starts in just 4 steps.',
      step1: { title: 'Know Yourself', desc: 'AI calculates target values from height, weight, and goals. No more guessing.' },
      step2: { title: 'Build the Pot', desc: 'Choose your base and ingredients. Check the match with your ideal values.' },
      step3: { title: 'Bulk Buy', desc: 'Shop according to the auto-generated list. Cut unnecessary expenses.' },
      step4: { title: 'Batch Prep', desc: 'Cook all at once following the guide. Just heat when you want to eat.' }
    },
    faq: {
      title: 'FAQ',
      q1: 'Why "Hot Pot"?',
      a1: 'Hot pot allows you to consume low fat, high protein, and plenty of vegetables simultaneously with easy prep (just chop and boil). It is the ultimate sustainable fitness meal.',
      q2: 'Is it okay for living alone?',
      a2: 'Absolutely. You can choose plans for 2 or 5 meals, supporting shopping and stock management for a single-person fridge.',
      q3: 'I am not good at cooking. Can I do it?',
      a3: 'Dont worry. All recipes come with a "Prep Guide". We provide step-by-step guidance including heat control and cutting tips with photos.'
    },
    footer: {
      desc: 'Home cooking support platform for fitness beginners. Efficiency for PFC management through the ultimate format of "Hot Pot".'
    }
  },
  id: {
    nav: { howTo: 'Cara pakai', startApp: 'Buka Aplikasi' },
    hero: {
      pwaBadge: 'Siap PWA: Alami langsung di browser',
      title: 'Makanan fitness terbaik adalah',
      titleAccent: '"Hot Pot".',
      subtitle: '"Commit Pot" yang populer di Instagram kini hadir sebagai aplikasi. Perhitungan, belanja, dan memasak semua di smartphone Anda.',
      ctaStart: 'Mulai gratis sekarang',
      ctaHowTo: 'Lihat cara kerjanya'
    },
    calc: {
      title: 'PFC Quick Calculator',
      step1Title: 'Masukkan Info Dasar',
      height: 'Tinggi (cm)',
      weight: 'Berat (kg)',
      next: 'Berikutnya',
      goalTitle: 'Pilih tujuan Anda',
      goals: {
        bulk: { label: 'Membangun Otot', sub: 'Bulk Up' },
        recomp: { label: 'Menjaga & Bakar Lemak', sub: 'Recomposition' },
        cut: { label: 'Membakar Lemak', sub: 'Cutting' }
      },
      calcBtn: 'Lihat Hasil',
      resultTitle: 'Target Asupan Harian',
      protein: 'Protein',
      fat: 'Lemak',
      carb: 'Karbohidrat',
      pwaHint: 'Buat rencana hot pot terbaik berdasarkan hasil ini di Web App sekarang.',
      pwaCta: 'Coba Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'Pendekatan paling rasional untuk mengubah tubuh Anda.',
      pfcTitle: 'Perhitungan PFC Otomatis',
      pfcDesc: 'Kelola asupan optimal untuk bulking atau cutting berdasarkan data tubuh Anda.',
      nabeTitle: 'Pembangun Pot Terbaik',
      nabeDesc: 'Hitung 2 atau 5 porsi sekaligus. AI memilih bahan protein tinggi dan rendah lemak.',
      listTitle: 'Daftar Belanja',
      listDesc: 'Daftar hanya jumlah yang Anda butuhkan. Hindari kebingungan di supermarket.',
      cookTitle: 'Panduan Memasak',
      cookDesc: 'Cukup potong dan rebus. Siapa pun bisa membuat hot pot fitness level pro dalam 15 menit.'
    },
    howTo: {
      title: 'Cara Komit',
      subtitle: 'Revolusi memasak rumah Anda dimulai hanya dalam 4 langkah.',
      step1: { title: 'Kenali Diri', desc: 'AI menghitung nilai target dari tinggi, berat, dan tujuan. Tidak ada lagi tebakan.' },
      step2: { title: 'Bangun Pot', desc: 'Pilih dasar dan bahan Anda. Periksa kesesuaian dengan nilai ideal Anda.' },
      step3: { title: 'Belanja Sekaligus', desc: 'Belanja sesuai daftar otomatis. Kurangi pengeluaran yang tidak perlu.' },
      step4: { title: 'Persiapan Batch', desc: 'Masak sekaligus mengikuti panduan. Tinggal panaskan saat ingin makan.' }
    },
    faq: {
      title: 'Pertanyaan Umum',
      q1: 'Mengapa "Hot Pot"?',
      a1: 'Hot pot memungkinkan Anda mengonsumsi rendah lemak, protein tinggi, dan banyak sayuran sekaligus dengan persiapan mudah. Ini adalah makanan fitness berkelanjutan yang terbaik.',
      q2: 'Apakah cocok untuk yang tinggal sendiri?',
      a2: 'Tentu saja. Anda bisa memilih rencana untuk 2 atau 5 porsi, mendukung belanja dan manajemen stok untuk kulkas satu orang.',
      q3: 'Saya tidak pandai memasak. Bisa?',
      a3: 'Jangan khawatir. Semua resep dilengkapi "Panduan Persiapan". Kami memberikan panduan langkah demi langkah termasuk tips memotong dan kontrol api.'
    },
    footer: {
      desc: 'Platform dukungan memasak rumah untuk pemula fitness. Efisiensi untuk manajemen PFC melalui format utama "Hot Pot".'
    }
  },
  vi: {
    nav: { howTo: 'Cách sử dụng', startApp: 'Mở ứng dụng' },
    hero: {
      pwaBadge: 'Hỗ trợ PWA: Trải nghiệm ngay trên trình duyệt',
      title: 'Bữa ăn thể hình tối thượng là',
      titleAccent: '"Lẩu (Hot Pot)".',
      subtitle: '"Commit Pot" nổi tiếng trên Instagram nay đã có ứng dụng. Tính toán, đi chợ và nấu nướng tất cả trên smartphone.',
      ctaStart: 'Bắt đầu miễn phí ngay',
      ctaHowTo: 'Xem cách hoạt động'
    },
    calc: {
      title: 'Tính PFC nhanh',
      step1Title: 'Nhập thông tin cơ bản',
      height: 'Chiều cao (cm)',
      weight: 'Cân nặng (kg)',
      next: 'Tiếp theo',
      goalTitle: 'Chọn mục tiêu của bạn',
      goals: {
        bulk: { label: 'Tăng cơ', sub: 'Bulk Up' },
        recomp: { label: 'Giữ cơ & Giảm mỡ', sub: 'Recomposition' },
        cut: { label: 'Giảm mỡ', sub: 'Cutting' }
      },
      calcBtn: 'Xem kết quả',
      resultTitle: 'Mục tiêu dinh dưỡng hàng ngày',
      protein: 'Đạm (Protein)',
      fat: 'Béo (Fat)',
      carb: 'Bột đường (Carbs)',
      pwaHint: 'Tạo kế hoạch lẩu tối thượng dựa trên kết quả này trong ứng dụng Web ngay.',
      pwaCta: 'Trải nghiệm ứng dụng Web'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'Phương pháp hợp lý nhất để thay đổi cơ thể bạn.',
      pfcTitle: 'Tự động tính PFC',
      pfcDesc: 'Quản lý lượng hấp thụ tối ưu để tăng cơ hoặc giảm mỡ dựa trên dữ liệu cơ thể.',
      nabeTitle: 'Xây dựng nồi lẩu tối thượng',
      nabeDesc: 'Tính toán 2 hoặc 5 bữa cùng lúc. AI chọn nguyên liệu giàu đạm, ít béo.',
      listTitle: 'Danh sách đi chợ',
      listDesc: 'Liệt kê đúng số lượng bạn cần. Không còn bối rối khi đi siêu thị.',
      cookTitle: 'Hướng dẫn chuẩn bị',
      cookDesc: 'Chỉ cần thái và nấu. Bất kỳ ai cũng có thể hoàn thành nồi lẩu thể hình chuyên nghiệp trong 15 phút.'
    },
    howTo: {
      title: 'Cách thực hiện',
      subtitle: 'Cuộc cách mạng nấu ăn tại nhà của bạn bắt đầu chỉ với 4 bước.',
      step1: { title: 'Hiểu bản thân', desc: 'AI tính toán các chỉ số mục tiêu từ chiều cao, cân nặng và mục tiêu.' },
      step2: { title: 'Lên thực đơn', desc: 'Chọn nước dùng và nguyên liệu. Kiểm tra mức độ phù hợp với chỉ số lý tưởng.' },
      step3: { title: 'Mua sắm', desc: 'Đi chợ theo danh sách tự động. Cắt giảm chi tiêu không cần thiết.' },
      step4: { title: 'Chuẩn bị hàng loạt', desc: 'Nấu tất cả cùng lúc theo hướng dẫn. Chỉ cần hâm nóng khi muốn ăn.' }
    },
    faq: {
      title: 'Câu hỏi thường gặp',
      q1: 'Tại sao lại là "Lẩu"?',
      a1: 'Lẩu cho phép bạn nạp ít béo, nhiều đạm và nhiều rau cùng lúc với chuẩn bị dễ dàng. Đây là bữa ăn thể hình bền vững tối thượng.',
      q2: 'Ở một mình có dùng được không?',
      a2: 'Chắc chắn rồi. Bạn có thể chọn kế hoạch cho 2 hoặc 5 bữa, phù hợp với tủ lạnh của người ở một mình.',
      q3: 'Tôi không giỏi nấu ăn có làm được không?',
      a3: 'Đừng lo lắng. Tất cả công thức đều có "Hướng dẫn chuẩn bị" từng bước bằng hình ảnh.'
    },
    footer: {
      desc: 'Nền tảng hỗ trợ nấu ăn tại nhà cho người mới tập thể hình. Hiệu quả quản lý PFC qua định dạng "Lẩu" tối thượng.'
    }
  },
  it: {
    nav: { howTo: 'Come funziona', startApp: 'Avvia App' },
    hero: {
      pwaBadge: 'Pronto per PWA: Esperienza istantanea nel browser',
      title: 'Il pasto fitness definitivo è',
      titleAccent: 'Il "Hot Pot".',
      subtitle: 'Il famoso "Commit Pot" di Instagram è ora un app. Calcolo, spesa e cucina tutto sul tuo smartphone.',
      ctaStart: 'Inizia gratis ora',
      ctaHowTo: 'Scopri come funziona'
    },
    calc: {
      title: 'Calcolatore PFC Rapido',
      step1Title: 'Inserisci Info di Base',
      height: 'Altezza (cm)',
      weight: 'Peso (kg)',
      next: 'Avanti',
      goalTitle: 'Seleziona il tuo obiettivo',
      goals: {
        bulk: { label: 'Costruire Muscoli', sub: 'Bulk Up' },
        recomp: { label: 'Mantenere e Dimagrire', sub: 'Recomposition' },
        cut: { label: 'Dimagrire', sub: 'Cutting' }
      },
      calcBtn: 'Vedi Risultati',
      resultTitle: 'Obiettivo Giornaliero',
      protein: 'Proteine',
      fat: 'Grassi',
      carb: 'Carboidrati',
      pwaHint: 'Crea il piano hot pot definitivo basato su questi risultati nella Web App ora.',
      pwaCta: 'Prova la Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'L approccio più razionale per cambiare il tuo corpo.',
      pfcTitle: 'Calcolo PFC Automatico',
      pfcDesc: 'Gestisci l apporto ottimale per massa o definizione in base ai tuoi dati corporei.',
      nabeTitle: 'Creatore Pot Definitivo',
      nabeDesc: 'Calcola 2 o 5 pasti alla volta. L IA seleziona ingredienti iperproteici e poveri di grassi.',
      listTitle: 'Lista della Spesa',
      listDesc: 'Elenca solo le quantità necessarie. Elimina la confusione al supermercato.',
      cookTitle: 'Guida alla Cucina',
      cookDesc: 'Basta tagliare e bollire. Chiunque può preparare hot pot fitness professionali in 15 min.'
    },
    howTo: {
      title: 'Come Impegnarsi',
      subtitle: 'La tua rivoluzione in cucina inizia in soli 4 passaggi.',
      step1: { title: 'Conosci Te Stesso', desc: 'L IA calcola i valori target da altezza, peso e obiettivi.' },
      step2: { title: 'Componi il Pot', desc: 'Scegli base e ingredienti. Controlla la corrispondenza con i tuoi valori ideali.' },
      step3: { title: 'Spesa Cumulativa', desc: 'Fai la spesa secondo la lista generata. Taglia le spese inutili.' },
      step4: { title: 'Preparazione Batch', desc: 'Cucina tutto insieme seguendo la guida. Scalda quando vuoi mangiare.' }
    },
    faq: {
      title: 'FAQ',
      q1: 'Perché "Hot Pot"?',
      a1: 'L hot pot ti permette di consumare pochi grassi, molte proteine e tante verdure contemporaneamente con una preparazione semplice.',
      q2: 'Va bene per chi vive da solo?',
      a2: 'Assolutamente. Puoi scegliere piani per 2 o 5 pasti, ideale per il frigorifero di una singola persona.',
      q3: 'Non so cucinare bene. Posso farcela?',
      a3: 'Non preoccuparti. Tutte le ricette includono una "Guida alla Preparazione" passo dopo passo.'
    },
    footer: {
      desc: 'Piattaforma di supporto alla cucina domestica per principianti del fitness. Efficienza per la gestione dei PFC.'
    }
  },
  es: {
    nav: { howTo: 'Cómo usar', startApp: 'Abrir App' },
    hero: {
      pwaBadge: 'Listo para PWA: Experiencia instantánea en el navegador',
      title: 'La comida fitness definitiva es',
      titleAccent: 'El "Hot Pot".',
      subtitle: 'El famoso "Commit Pot" de Instagram ahora es una aplicación. Cálculo, compras y cocina, todo en tu smartphone.',
      ctaStart: 'Empieza gratis ahora',
      ctaHowTo: 'Ver cómo funciona'
    },
    calc: {
      title: 'Calculadora PFC Rápida',
      step1Title: 'Introduce Info Básica',
      height: 'Altura (cm)',
      weight: 'Peso (kg)',
      next: 'Siguiente',
      goalTitle: 'Selecciona tu objetivo',
      goals: {
        bulk: { label: 'Ganar Músculo', sub: 'Bulk Up' },
        recomp: { label: 'Mantener y Perder Grasa', sub: 'Recomposition' },
        cut: { label: 'Perder Grasa', sub: 'Cutting' }
      },
      calcBtn: 'Ver Resultados',
      resultTitle: 'Objetivo Diario',
      protein: 'Proteína',
      fat: 'Grasa',
      carb: 'Carbohidratos',
      pwaHint: 'Crea el plan de hot pot definitivo basado en estos resultados en la Web App ahora.',
      pwaCta: 'Probar Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'El enfoque más racional para cambiar tu cuerpo.',
      pfcTitle: 'Cálculo PFC Automático',
      pfcDesc: 'Gestiona la ingesta óptima para ganar masa o definir según tus datos corporales.',
      nabeTitle: 'Creador Pot Definitivo',
      nabeDesc: 'Calcula 2 o 5 comidas a la vez. La IA selecciona ingredientes altos en proteína y bajos en grasa.',
      listTitle: 'Lista de Compras',
      listDesc: 'Enumera solo las cantidades que necesitas. Elimina la confusión en el supermercado.',
      cookTitle: 'Guía de Cocina',
      cookDesc: 'Solo corta y hierve. Cualquiera puede preparar hot pots fitness profesionales en 15 min.'
    },
    howTo: {
      title: 'Cómo Comprometerse',
      subtitle: 'Tu revolución en la cocina comienza en solo 4 pasos.',
      step1: { title: 'Conócete', desc: 'La IA calcula los valores objetivo a partir de tu altura, peso y metas.' },
      step2: { title: 'Arma el Pot', desc: 'Elige base e ingredientes. Comprueba la coincidencia con tus valores ideales.' },
      step3: { title: 'Compra en Lote', desc: 'Compra según la lista generada automáticamente. Reduce gastos innecesarios.' },
      step4: { title: 'Prepáralo Todo', desc: 'Cocina todo junto siguiendo la guía. Solo calienta cuando quieras comer.' }
    },
    faq: {
      title: 'FAQ',
      q1: '¿Por qué "Hot Pot"?',
      a1: 'El hot pot te permite consumir poca grasa, mucha proteína y muchas verduras simultáneamente con una preparación fácil.',
      q2: '¿Es apto para quienes viven solos?',
      a2: 'Absolutamente. Puedes elegir planes para 2 o 5 comidas, ideal para el frigorífico de una sola persona.',
      q3: 'No se me da bien cocinar. ¿Puedo hacerlo?',
      a3: 'No te preocupes. Todas las recetas incluyen una "Guía de Preparación" paso a paso.'
    },
    footer: {
      desc: 'Plataforma de apoyo para cocinar en casa para principiantes del fitness. Eficiencia para la gestión de PFC.'
    }
  },
  pt: {
    nav: { howTo: 'Como usar', startApp: 'Abrir App' },
    hero: {
      pwaBadge: 'Pronto para PWA: Experiência instantânea no navegador',
      title: 'A refeição fitness definitiva é',
      titleAccent: 'O "Hot Pot".',
      subtitle: 'O famoso "Commit Pot" do Instagram agora é um app. Cálculo, compras e culinária, tudo no seu smartphone.',
      ctaStart: 'Começar grátis agora',
      ctaHowTo: 'Ver como funciona'
    },
    calc: {
      title: 'Calculadora PFC Rápida',
      step1Title: 'Insira Info Básica',
      height: 'Altura (cm)',
      weight: 'Peso (kg)',
      next: 'Próximo',
      goalTitle: 'Selecione seu objetivo',
      goals: {
        bulk: { label: 'Ganhar Músculo', sub: 'Bulk Up' },
        recomp: { label: 'Manter e Perder Gordura', sub: 'Recomposition' },
        cut: { label: 'Perder Gordura', sub: 'Cutting' }
      },
      calcBtn: 'Ver Resultados',
      resultTitle: 'Objetivo Diário',
      protein: 'Proteína',
      fat: 'Gordura',
      carb: 'Carboidratos',
      pwaHint: 'Crie o plano de hot pot definitivo baseado nesses resultados no Web App agora.',
      pwaCta: 'Testar Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: 'A abordagem mais racional para mudar seu corpo.',
      pfcTitle: 'Cálculo PFC Automático',
      pfcDesc: 'Gerencie a ingestão ideal para ganho de massa ou definição com base nos seus dados.',
      nabeTitle: 'Criador Pot Definitivo',
      nabeDesc: 'Calcule 2 ou 5 refeições de uma vez. IA seleciona ingredientes ricos em proteína e pobres em gordura.',
      listTitle: 'Lista de Compras',
      listDesc: 'Liste apenas as quantidades que precisa. Elimine confusões no supermercado.',
      cookTitle: 'Guia de Culinária',
      cookDesc: 'Basta cortar e ferver. Qualquer um pode preparar hot pots fitness profissionais em 15 min.'
    },
    howTo: {
      title: 'Como se Comprometer',
      subtitle: 'Sua revolução na cozinha começa em apenas 4 passos.',
      step1: { title: 'Conheça-se', desc: 'A IA calcula os valores alvo a partir da sua altura, peso e objetivos.' },
      step2: { title: 'Monte o Pot', desc: 'Escolha base e ingredientes. Verifique a correspondência com seus valores ideais.' },
      step3: { title: 'Compra em Lote', desc: 'Compre de acordo com a lista gerada. Corte gastos desnecessários.' },
      step4: { title: 'Prepare Tudo', desc: 'Cozinhe tudo junto seguindo o guia. Só aquecer quando quiser comer.' }
    },
    faq: {
      title: 'FAQ',
      q1: 'Por que "Hot Pot"?',
      a1: 'O hot pot permite consumir pouca gordura, muita proteína e muitos vegetais simultaneamente com preparação fácil.',
      q2: 'É bom para quem mora sozinho?',
      a2: 'Com certeza. Você pode escolher planos para 2 ou 5 refeições, ideal para geladeiras de uma pessoa.',
      q3: 'Não sou bom na cozinha. Consigo fazer?',
      a3: 'Não se preocupe. Todas as receitas incluem um "Guia de Preparação" passo a passo.'
    },
    footer: {
      desc: 'Plataforma de suporte para cozinhar em casa para iniciantes no fitness. Eficiência para gestão de PFC.'
    }
  },
  ko: {
    nav: { howTo: '사용법', startApp: '앱 실행' },
    hero: {
      pwaBadge: 'PWA 지원: 브라우저에서 바로 체험',
      title: '최고의 피트니스 식단은',
      titleAccent: '바로 "전골"입니다.',
      subtitle: '인스타그램에서 화제가 된 "커밋 팟"이 드디어 앱으로 출시. 계산, 쇼핑, 조리까지 스마트폰 하나로 해결하세요.',
      ctaStart: '지금 무료로 시작하기',
      ctaHowTo: '사용법 보기'
    },
    calc: {
      title: 'PFC 빠른 계산기',
      step1Title: '기본 정보 입력',
      height: '신장 (cm)',
      weight: '체중 (kg)',
      next: '다음',
      goalTitle: '목표를 선택하세요',
      goals: {
        bulk: { label: '근육 증가', sub: 'Bulk Up' },
        recomp: { label: '유지 및 체지방 감소', sub: 'Recomposition' },
        cut: { label: '체지방 감소', sub: 'Cutting' }
      },
      calcBtn: '결과 보기',
      resultTitle: '일일 목표 섭취량',
      protein: '단백질',
      fat: '지방',
      carb: '탄수화물',
      pwaHint: '이 결과를 바탕으로 웹 앱에서 지금 바로 최고의 전골 계획을 만들어보세요.',
      pwaCta: '웹 앱 체험하기'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: '당신의 몸을 바꾸기 위한 가장 합리적인 접근법.',
      pfcTitle: '자동 PFC 계산',
      pfcDesc: '신체 데이터를 바탕으로 벌크업이나 다이어트에 최적화된 섭취량을 밀리그램 단위로 관리.',
      nabeTitle: '최강의 전골 빌더',
      nabeDesc: '2끼 또는 5끼를 한꺼번에 계산. 고단백, 저지방 식재료를 AI가 선별.',
      listTitle: '장보기 리스트',
      listDesc: '필요한 양만 리스트화. 마트에서의 고민을 없애고 시간을 단축.',
      cookTitle: '조리 가이드',
      cookDesc: '재료를 썰어 넣기만 하면 끝. 누구나 15분 만에 프로급 피트니스 전골 완성.'
    },
    howTo: {
      title: '커밋 방법',
      subtitle: '단 4단계로 당신의 자취 요리 혁명이 시작됩니다.',
      step1: { title: '자신을 알기', desc: 'AI가 신장, 체중, 목표로부터 목표 수치를 산출합니다.' },
      step2: { title: '전골 구성하기', desc: '선호하는 베이스와 재료를 선택하여 계획을 세웁니다.' },
      step3: { title: '한꺼번에 장보기', desc: '자동 생성된 리스트에 따라 쇼핑합니다. 불필요한 지출을 줄이세요.' },
      step4: { title: '일괄 조리하기', desc: '가이드를 따라 한 번에 조리합니다. 먹을 때 데우기만 하세요.' }
    },
    faq: {
      title: '자주 묻는 질문',
      q1: '왜 "전골"인가요?',
      a1: '전골은 저지방, 고단백, 풍부한 채소를 동시에 섭취할 수 있고 조리가 간단하기 때문입니다.',
      q2: '혼자 살아도 괜찮을까요?',
      a2: '물론입니다. 2끼 또는 5끼 계획을 선택할 수 있어 1인 가구 냉장고 사정에 최적화되어 있습니다.',
      q3: '요리를 못 하는데 가능할까요?',
      a3: '걱정 마세요. 모든 레시피는 사진이 포함된 단계별 조리 가이드를 제공합니다.'
    },
    footer: {
      desc: '피트니스 초보자를 위한 자취 지원 플랫폼. 전골이라는 궁극의 포맷을 통해 PFC 관리를 효율화합니다.'
    }
  },
  zh: {
    nav: { howTo: '使用方法', startApp: '启动 Web 版' },
    hero: {
      pwaBadge: '支持 PWA：浏览器即刻体验',
      title: '终极健身餐，',
      titleAccent: '非“火锅”莫属。',
      subtitle: 'Instagram 热门的“Commit Pot”终于应用化。计算、采购、烹饪，全部在手机上完成。',
      ctaStart: '立即免费开始',
      ctaHowTo: '查看使用方法'
    },
    calc: {
      title: 'PFC 快速计算器',
      step1Title: '输入基本信息',
      height: '身高 (cm)',
      weight: '体重 (kg)',
      next: '下一步',
      goalTitle: '请选择目标',
      goals: {
        bulk: { label: '增肌', sub: 'Bulk Up' },
        recomp: { label: '维持及减脂', sub: 'Recomposition' },
        cut: { label: '减脂', sub: 'Cutting' }
      },
      calcBtn: '查看结果',
      resultTitle: '每日目标摄入量',
      protein: '蛋白质',
      fat: '脂肪',
      carb: '碳水化合物',
      pwaHint: '根据此结果，立即在 Web App 中创建最强火锅方案。',
      pwaCta: '体验 Web App'
    },
    features: {
      title: 'COMMIT FOR THE BODY',
      subtitle: '改变身体最理性的方式。',
      pfcTitle: '自动 PFC 计算',
      pfcDesc: '根据身体数据，精确管理适合增肌或减脂的最佳摄入量。',
      nabeTitle: '最强火锅构建器',
      nabeDesc: '一次计算 2 餐或 5 餐。AI 筛选高蛋白、低脂肪的食材。',
      listTitle: '采购清单',
      listDesc: '仅列出所需的份量。消除在超市的纠结，实现高效购物。',
      cookTitle: '烹饪指南',
      cookDesc: '“切好放进去就行”。只需 15 分钟，任何人都能做出专业级健身火锅。'
    },
    howTo: {
      title: '如何开始',
      subtitle: '只需 4 个步骤，开启你的家庭烹饪革命。',
      step1: { title: '了解自己', desc: 'AI 根据身高、体重和目标计算出目标数值。不再盲目猜测。' },
      step2: { title: '组合火锅', desc: '选择底料和食材创建方案。检查与理想数值的匹配度。' },
      step3: { title: '批量采购', desc: '根据自动生成的清单进行购物。减少不必要的开支。' },
      step4: { title: '批量烹饪', desc: '跟随指南一次性烹饪。吃的时候加热即可。' }
    },
    faq: {
      title: '常见问题',
      q1: '为什么选择“火锅”？',
      a1: '火锅可以同时摄入低脂肪、高蛋白和大量蔬菜，且烹饪简单（切煮即可）。它是最易坚持的健身餐。',
      q2: '一个人住也可以吗？',
      a2: '当然。你可以选择 2 餐或 5 餐的方案，适合单身人士的冰箱存储管理。',
      q3: '不擅长厨艺也可以吗？',
      a3: '请放心。所有菜谱均附带“烹饪指南”。提供带图片的步骤说明。'
    },
    footer: {
      desc: '专为健身初学者设计的自炊支援平台。通过“火锅”这一终极形式实现 PFC 管理的高效化。'
    }
  }
};
