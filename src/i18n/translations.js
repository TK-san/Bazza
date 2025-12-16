/**
 * Translations for Bazza App
 * Supported languages: English (en), Malay (ms), Mandarin (zh)
 */

const translations = {
  en: {
    // App Info
    appName: 'Bazza',
    appTagline: 'Whatever you need',
    appDescription: 'Whatever you need',
    appSubDescription: 'Offer your skills or find help from trusted locals in your community',
    version: 'Bazza v0.1.0 MVP • Made in Malaysia',

    // Navigation
    nav: {
      offers: 'Offers',
      requests: 'Requests',
      profile: 'Profile',
    },

    // Home Page
    home: {
      signIn: 'Sign In',
      createAccount: 'Create Account',
      browseAsGuest: 'Browse as Guest',
      terms: 'Terms',
      privacy: 'Privacy',
      help: 'Help',
    },

    // Sign In Page
    signIn: {
      welcomeBack: 'Welcome back',
      signInToContinue: 'Sign in to continue',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '12-345 6789',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      forgotPassword: 'Forgot password?',
      signInButton: 'Sign In',
      orContinueWith: 'or continue with',
      noAccount: "Don't have an account?",
      register: 'Register',
    },

    // Register Page
    register: {
      createAccount: 'Create Account',
      joinBazza: 'Join Bazza today',
      fullName: 'Full Name',
      namePlaceholder: 'Enter your name',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '12-345 6789',
      password: 'Password',
      passwordPlaceholder: 'Create a password',
      confirmPassword: 'Confirm Password',
      confirmPlaceholder: 'Confirm your password',
      termsText: 'By registering, you agree to our',
      termsLink: 'Terms of Service',
      and: 'and',
      privacyLink: 'Privacy Policy',
      createButton: 'Create Account',
      orSignUpWith: 'or sign up with',
      haveAccount: 'Already have an account?',
      signIn: 'Sign In',
    },

    // Offers Page
    offers: {
      title: 'Services Available',
      subtitle: 'Pull to refresh',
      services: 'services',
      noServices: 'No services found',
      tryFilters: 'Try changing your filters',
      beFirst: 'Be the first to offer one!',
      browseByCategory: 'Browse by Category',
    },

    // Requests Page
    requests: {
      title: 'Help Needed',
      subtitle: 'Pull to refresh',
      requestsCount: 'requests',
      noRequests: 'No requests found',
      tryFilters: 'Try changing your filters',
      checkLater: 'Check back later!',
      browseByCategory: 'Browse by Category',
    },

    // Profile Page
    profile: {
      guestUser: 'Guest User',
      browsingAsGuest: 'Browsing as guest',
      quickActions: 'Quick Actions',
      offerService: 'Offer Service',
      postRequest: 'Post Request',
      myFavorites: 'My Favorites',
      savedItems: 'Saved services & requests',
      myActivity: 'My Activity',
      activityDesc: 'View your offers & requests',
      reviews: 'Reviews',
      reviewsDesc: 'See what others say about you',
      settings: 'Settings',
      settingsDesc: 'App preferences',
      language: 'Language',
      languageDesc: 'Change app language',
      signOut: 'Sign Out',
    },

    // Favorites Page
    favorites: {
      title: 'My Favorites',
      savedItems: 'saved items',
      services: 'Services',
      requests: 'Requests',
      noSavedOffers: 'No saved services',
      noSavedRequests: 'No saved requests',
      tapToSave: 'Tap the heart icon on any',
      toSaveHere: 'to save it here',
      service: 'service',
      request: 'request',
    },

    // Cards
    cards: {
      jobs: 'jobs',
      lookingForHelp: 'Looking for help',
      urgent: 'URGENT',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
    },

    // Location Filter
    location: {
      allLocations: 'All Locations',
      klangValley: 'Klang Valley',
      kl: 'Kuala Lumpur',
      pj: 'Petaling Jaya',
      subang: 'Subang Jaya',
      shahAlam: 'Shah Alam',
      cheras: 'Cheras',
      bangsar: 'Bangsar',
      montKiara: 'Mont Kiara',
      damansara: 'Damansara',
      setapak: 'Setapak',
      putrajaya: 'Putrajaya',
      ampang: 'Ampang',
      kepong: 'Kepong',
    },

    // Categories
    categories: {
      all: 'All',
      cleaning: 'Cleaning',
      transport: 'Transport',
      repair: 'Repair',
      tutoring: 'Tutoring',
      cooking: 'Cooking',
      tech: 'Technology',
      errands: 'Errands',
      beauty: 'Beauty',
    },

    // Pull to Refresh
    refresh: {
      pullToRefresh: 'Pull to refresh',
      releaseToRefresh: 'Release to refresh',
      refreshing: 'Refreshing...',
    },

    // Language Names
    languages: {
      en: 'English',
      ms: 'Bahasa Melayu',
      zh: '中文',
    },

    // Availability
    availability: {
      weekends: 'Weekends',
      twentyFourSeven: '24/7',
      monSat: 'Mon-Sat',
      eveningsWeekends: 'Evenings & Weekends',
      threeDayNotice: 'With 3-day notice',
      flexible: 'Flexible',
      sevenAmNinePm: '7am-9pm daily',
      sixAmTenPm: '6am-10pm',
    },

    // Date Needed
    dateNeeded: {
      thisSaturday: 'This Saturday',
      ongoing: 'Ongoing',
      todayTomorrow: 'Today/Tomorrow',
      daily: 'Daily',
    },

    // Service Offers
    serviceOffers: {
      offer1: {
        title: 'Home Cleaning Service',
        description: 'Professional home cleaning. I bring my own supplies. Available weekends in Klang Valley area.',
      },
      offer2: {
        title: 'Airport Transfer - KLIA/KLIA2',
        description: 'Comfortable car for airport pickup and drop-off. Can accommodate up to 4 passengers with luggage.',
      },
      offer3: {
        title: 'Aircon Service & Repair',
        description: 'Chemical wash, gas top-up, and repair for all aircon brands. 6 years experience.',
      },
      offer4: {
        title: 'Math & Science Tuition (SPM)',
        description: 'Experienced tutor for Add Math, Physics, and Chemistry. Online or home visit available.',
      },
      offer5: {
        title: 'Catering - Nasi Lemak & Local Food',
        description: 'Homemade nasi lemak and traditional Malay dishes for events. Minimum 20 pax.',
      },
      offer6: {
        title: 'Website Development',
        description: 'Modern responsive websites using React. E-commerce, portfolio, or business sites.',
      },
      offer7: {
        title: 'Plumbing Services',
        description: 'Fix leaky pipes, clogged drains, water heater installation. Fast response.',
      },
      offer8: {
        title: 'Personal Fitness Training',
        description: 'Certified PT. Weight loss, muscle building, or general fitness. Home or gym sessions.',
      },
    },

    // Service Requests
    serviceRequests: {
      request1: {
        title: 'Need help moving furniture',
        description: 'Moving from condo in Mont Kiara to landed house in Damansara. Need 2-3 people to help carry furniture.',
      },
      request2: {
        title: 'Looking for Mandarin tutor',
        description: 'Want to learn conversational Mandarin. Complete beginner. Prefer weekend classes.',
      },
      request3: {
        title: 'URGENT: Aircon not cooling',
        description: 'My bedroom aircon suddenly stopped cooling. Brand is Daikin. Need someone ASAP!',
      },
      request4: {
        title: 'Makeup artist for wedding',
        description: 'Looking for MUA for my nikah ceremony. Traditional Malay bridal look. Date: 15 Feb 2025.',
      },
      request5: {
        title: 'Weekly house cleaning',
        description: 'Looking for reliable cleaner for 3-bedroom apartment. Once a week, preferably Saturday morning.',
      },
      request6: {
        title: 'Dog walker needed',
        description: 'Need someone to walk my 2 golden retrievers every morning. 30-45 mins walk.',
      },
    },
  },

  ms: {
    // App Info
    appName: 'Bazza',
    appTagline: 'Semua Pun Ada',
    appDescription: 'Semua Pun Ada',
    appSubDescription: 'Tawarkan kemahiran anda atau dapatkan bantuan daripada penduduk tempatan',
    version: 'Bazza v0.1.0 MVP • Dibuat di Malaysia',

    // Navigation
    nav: {
      offers: 'Tawaran',
      requests: 'Permintaan',
      profile: 'Profil',
    },

    // Home Page
    home: {
      signIn: 'Log Masuk',
      createAccount: 'Daftar Akaun',
      browseAsGuest: 'Layari Sebagai Tetamu',
      terms: 'Terma',
      privacy: 'Privasi',
      help: 'Bantuan',
    },

    // Sign In Page
    signIn: {
      welcomeBack: 'Selamat kembali',
      signInToContinue: 'Log masuk untuk teruskan',
      phoneNumber: 'Nombor Telefon',
      phonePlaceholder: '12-345 6789',
      password: 'Kata Laluan',
      passwordPlaceholder: 'Masukkan kata laluan anda',
      forgotPassword: 'Lupa kata laluan?',
      signInButton: 'Log Masuk',
      orContinueWith: 'atau teruskan dengan',
      noAccount: 'Tiada akaun?',
      register: 'Daftar',
    },

    // Register Page
    register: {
      createAccount: 'Daftar Akaun',
      joinBazza: 'Sertai Bazza hari ini',
      fullName: 'Nama Penuh',
      namePlaceholder: 'Masukkan nama anda',
      phoneNumber: 'Nombor Telefon',
      phonePlaceholder: '12-345 6789',
      password: 'Kata Laluan',
      passwordPlaceholder: 'Cipta kata laluan',
      confirmPassword: 'Sahkan Kata Laluan',
      confirmPlaceholder: 'Sahkan kata laluan anda',
      termsText: 'Dengan mendaftar, anda bersetuju dengan',
      termsLink: 'Terma Perkhidmatan',
      and: 'dan',
      privacyLink: 'Dasar Privasi',
      createButton: 'Daftar Akaun',
      orSignUpWith: 'atau daftar dengan',
      haveAccount: 'Sudah ada akaun?',
      signIn: 'Log Masuk',
    },

    // Offers Page
    offers: {
      title: 'Perkhidmatan Tersedia',
      subtitle: 'Tarik untuk muat semula',
      services: 'perkhidmatan',
      noServices: 'Tiada perkhidmatan dijumpai',
      tryFilters: 'Cuba tukar penapis anda',
      beFirst: 'Jadilah yang pertama menawarkan!',
      browseByCategory: 'Layari mengikut Kategori',
    },

    // Requests Page
    requests: {
      title: 'Bantuan Diperlukan',
      subtitle: 'Tarik untuk muat semula',
      requestsCount: 'permintaan',
      noRequests: 'Tiada permintaan dijumpai',
      tryFilters: 'Cuba tukar penapis anda',
      checkLater: 'Semak kemudian!',
      browseByCategory: 'Layari mengikut Kategori',
    },

    // Profile Page
    profile: {
      guestUser: 'Pengguna Tetamu',
      browsingAsGuest: 'Melayari sebagai tetamu',
      quickActions: 'Tindakan Pantas',
      offerService: 'Tawar Perkhidmatan',
      postRequest: 'Hantar Permintaan',
      myFavorites: 'Kegemaran Saya',
      savedItems: 'Perkhidmatan & permintaan tersimpan',
      myActivity: 'Aktiviti Saya',
      activityDesc: 'Lihat tawaran & permintaan anda',
      reviews: 'Ulasan',
      reviewsDesc: 'Lihat apa kata orang tentang anda',
      settings: 'Tetapan',
      settingsDesc: 'Keutamaan aplikasi',
      language: 'Bahasa',
      languageDesc: 'Tukar bahasa aplikasi',
      signOut: 'Log Keluar',
    },

    // Favorites Page
    favorites: {
      title: 'Kegemaran Saya',
      savedItems: 'item tersimpan',
      services: 'Perkhidmatan',
      requests: 'Permintaan',
      noSavedOffers: 'Tiada perkhidmatan tersimpan',
      noSavedRequests: 'Tiada permintaan tersimpan',
      tapToSave: 'Ketik ikon hati pada mana-mana',
      toSaveHere: 'untuk simpan di sini',
      service: 'perkhidmatan',
      request: 'permintaan',
    },

    // Cards
    cards: {
      jobs: 'kerja',
      lookingForHelp: 'Mencari bantuan',
      urgent: 'SEGERA',
      addToFavorites: 'Tambah ke kegemaran',
      removeFromFavorites: 'Buang dari kegemaran',
    },

    // Location Filter
    location: {
      allLocations: 'Semua Lokasi',
      klangValley: 'Lembah Klang',
      kl: 'Kuala Lumpur',
      pj: 'Petaling Jaya',
      subang: 'Subang Jaya',
      shahAlam: 'Shah Alam',
      cheras: 'Cheras',
      bangsar: 'Bangsar',
      montKiara: 'Mont Kiara',
      damansara: 'Damansara',
      setapak: 'Setapak',
      putrajaya: 'Putrajaya',
      ampang: 'Ampang',
      kepong: 'Kepong',
    },

    // Categories
    categories: {
      all: 'Semua',
      cleaning: 'Pembersihan',
      transport: 'Pengangkutan',
      repair: 'Pembaikan',
      tutoring: 'Tuisyen',
      cooking: 'Masakan',
      tech: 'Teknologi',
      errands: 'Urusan',
      beauty: 'Kecantikan',
    },

    // Pull to Refresh
    refresh: {
      pullToRefresh: 'Tarik untuk muat semula',
      releaseToRefresh: 'Lepaskan untuk muat semula',
      refreshing: 'Memuat semula...',
    },

    // Language Names
    languages: {
      en: 'English',
      ms: 'Bahasa Melayu',
      zh: '中文',
    },

    // Availability
    availability: {
      weekends: 'Hujung Minggu',
      twentyFourSeven: '24/7',
      monSat: 'Isn-Sab',
      eveningsWeekends: 'Petang & Hujung Minggu',
      threeDayNotice: 'Dengan notis 3 hari',
      flexible: 'Fleksibel',
      sevenAmNinePm: '7pg-9mlm setiap hari',
      sixAmTenPm: '6pg-10mlm',
    },

    // Date Needed
    dateNeeded: {
      thisSaturday: 'Sabtu Ini',
      ongoing: 'Berterusan',
      todayTomorrow: 'Hari Ini/Esok',
      daily: 'Setiap Hari',
    },

    // Service Offers
    serviceOffers: {
      offer1: {
        title: 'Perkhidmatan Pembersihan Rumah',
        description: 'Pembersihan rumah profesional. Saya bawa bekalan sendiri. Tersedia hujung minggu di kawasan Lembah Klang.',
      },
      offer2: {
        title: 'Pengangkutan Lapangan Terbang - KLIA/KLIA2',
        description: 'Kereta selesa untuk pengambilan dan penghantaran ke lapangan terbang. Boleh memuatkan sehingga 4 penumpang dengan bagasi.',
      },
      offer3: {
        title: 'Servis & Pembaikan Aircond',
        description: 'Cuci kimia, tambah gas, dan pembaikan untuk semua jenama aircond. Pengalaman 6 tahun.',
      },
      offer4: {
        title: 'Tuisyen Matematik & Sains (SPM)',
        description: 'Tutor berpengalaman untuk Add Math, Fizik, dan Kimia. Dalam talian atau lawatan rumah tersedia.',
      },
      offer5: {
        title: 'Katering - Nasi Lemak & Makanan Tempatan',
        description: 'Nasi lemak buatan sendiri dan hidangan Melayu tradisional untuk acara. Minimum 20 orang.',
      },
      offer6: {
        title: 'Pembangunan Laman Web',
        description: 'Laman web responsif moden menggunakan React. E-dagang, portfolio, atau laman perniagaan.',
      },
      offer7: {
        title: 'Perkhidmatan Paip',
        description: 'Baiki paip bocor, longkang tersumbat, pemasangan pemanas air. Respons pantas.',
      },
      offer8: {
        title: 'Latihan Kecergasan Peribadi',
        description: 'PT bertauliah. Penurunan berat, pembinaan otot, atau kecergasan umum. Sesi di rumah atau gim.',
      },
    },

    // Service Requests
    serviceRequests: {
      request1: {
        title: 'Perlukan bantuan memindah perabot',
        description: 'Berpindah dari kondo di Mont Kiara ke rumah bertanah di Damansara. Perlukan 2-3 orang untuk membantu mengangkat perabot.',
      },
      request2: {
        title: 'Mencari tutor Mandarin',
        description: 'Mahu belajar perbualan Mandarin. Pemula. Lebih suka kelas hujung minggu.',
      },
      request3: {
        title: 'SEGERA: Aircond tidak sejuk',
        description: 'Aircond bilik tidur saya tiba-tiba tidak sejuk. Jenama Daikin. Perlukan seseorang SEGERA!',
      },
      request4: {
        title: 'Artis solekan untuk perkahwinan',
        description: 'Mencari MUA untuk majlis nikah saya. Solekan pengantin Melayu tradisional. Tarikh: 15 Feb 2025.',
      },
      request5: {
        title: 'Pembersihan rumah mingguan',
        description: 'Mencari pembersih yang boleh dipercayai untuk apartmen 3 bilik. Sekali seminggu, lebih baik Sabtu pagi.',
      },
      request6: {
        title: 'Perlukan pengasuh anjing',
        description: 'Perlukan seseorang untuk membawa jalan 2 ekor golden retriever saya setiap pagi. Jalan 30-45 minit.',
      },
    },
  },

  zh: {
    // App Info
    appName: 'Bazza',
    appTagline: '所需的一切，尽在这里',
    appDescription: '所需的一切，尽在这里',
    appSubDescription: '提供您的技能或从社区中寻找可信赖的帮助',
    version: 'Bazza v0.1.0 MVP • 马来西亚制造',

    // Navigation
    nav: {
      offers: '服务',
      requests: '需求',
      profile: '我的',
    },

    // Home Page
    home: {
      signIn: '登录',
      createAccount: '注册账户',
      browseAsGuest: '游客浏览',
      terms: '条款',
      privacy: '隐私',
      help: '帮助',
    },

    // Sign In Page
    signIn: {
      welcomeBack: '欢迎回来',
      signInToContinue: '登录以继续',
      phoneNumber: '手机号码',
      phonePlaceholder: '12-345 6789',
      password: '密码',
      passwordPlaceholder: '输入您的密码',
      forgotPassword: '忘记密码？',
      signInButton: '登录',
      orContinueWith: '或使用以下方式登录',
      noAccount: '没有账户？',
      register: '注册',
    },

    // Register Page
    register: {
      createAccount: '注册账户',
      joinBazza: '立即加入 Bazza',
      fullName: '全名',
      namePlaceholder: '输入您的姓名',
      phoneNumber: '手机号码',
      phonePlaceholder: '12-345 6789',
      password: '密码',
      passwordPlaceholder: '创建密码',
      confirmPassword: '确认密码',
      confirmPlaceholder: '确认您的密码',
      termsText: '注册即表示您同意我们的',
      termsLink: '服务条款',
      and: '和',
      privacyLink: '隐私政策',
      createButton: '注册账户',
      orSignUpWith: '或使用以下方式注册',
      haveAccount: '已有账户？',
      signIn: '登录',
    },

    // Offers Page
    offers: {
      title: '可用服务',
      subtitle: '下拉刷新',
      services: '项服务',
      noServices: '未找到服务',
      tryFilters: '尝试更改筛选条件',
      beFirst: '成为第一个提供服务的人！',
      browseByCategory: '按类别浏览',
    },

    // Requests Page
    requests: {
      title: '需要帮助',
      subtitle: '下拉刷新',
      requestsCount: '项需求',
      noRequests: '未找到需求',
      tryFilters: '尝试更改筛选条件',
      checkLater: '稍后再来看看！',
      browseByCategory: '按类别浏览',
    },

    // Profile Page
    profile: {
      guestUser: '游客用户',
      browsingAsGuest: '以游客身份浏览',
      quickActions: '快捷操作',
      offerService: '提供服务',
      postRequest: '发布需求',
      myFavorites: '我的收藏',
      savedItems: '已保存的服务和需求',
      myActivity: '我的活动',
      activityDesc: '查看您的服务和需求',
      reviews: '评价',
      reviewsDesc: '查看他人对您的评价',
      settings: '设置',
      settingsDesc: '应用偏好设置',
      language: '语言',
      languageDesc: '更改应用语言',
      signOut: '退出登录',
    },

    // Favorites Page
    favorites: {
      title: '我的收藏',
      savedItems: '已保存项目',
      services: '服务',
      requests: '需求',
      noSavedOffers: '没有保存的服务',
      noSavedRequests: '没有保存的需求',
      tapToSave: '点击任意',
      toSaveHere: '上的心形图标保存到这里',
      service: '服务',
      request: '需求',
    },

    // Cards
    cards: {
      jobs: '单',
      lookingForHelp: '寻求帮助',
      urgent: '紧急',
      addToFavorites: '添加到收藏',
      removeFromFavorites: '从收藏中移除',
    },

    // Location Filter
    location: {
      allLocations: '所有地区',
      klangValley: '巴生谷',
      kl: '吉隆坡',
      pj: '八打灵再也',
      subang: '梳邦再也',
      shahAlam: '莎阿南',
      cheras: '蕉赖',
      bangsar: '孟沙',
      montKiara: '满家乐',
      damansara: '白沙罗',
      setapak: '泗岩沫',
      putrajaya: '布城',
      ampang: '安邦',
      kepong: '甲洞',
    },

    // Categories
    categories: {
      all: '全部',
      cleaning: '清洁',
      transport: '交通',
      repair: '维修',
      tutoring: '补习',
      cooking: '烹饪',
      tech: '科技',
      errands: '跑腿',
      beauty: '美容',
    },

    // Pull to Refresh
    refresh: {
      pullToRefresh: '下拉刷新',
      releaseToRefresh: '释放刷新',
      refreshing: '刷新中...',
    },

    // Language Names
    languages: {
      en: 'English',
      ms: 'Bahasa Melayu',
      zh: '中文',
    },

    // Availability
    availability: {
      weekends: '周末',
      twentyFourSeven: '全天候',
      monSat: '周一至周六',
      eveningsWeekends: '晚间和周末',
      threeDayNotice: '需提前3天预约',
      flexible: '灵活',
      sevenAmNinePm: '每天7点-21点',
      sixAmTenPm: '6点-22点',
    },

    // Date Needed
    dateNeeded: {
      thisSaturday: '本周六',
      ongoing: '长期',
      todayTomorrow: '今天/明天',
      daily: '每天',
    },

    // Service Offers
    serviceOffers: {
      offer1: {
        title: '家庭清洁服务',
        description: '专业家庭清洁。自带清洁用品。巴生谷地区周末可预约。',
      },
      offer2: {
        title: '机场接送 - KLIA/KLIA2',
        description: '舒适汽车接送机场。可容纳4名乘客及行李。',
      },
      offer3: {
        title: '空调维修保养',
        description: '化学清洗、加气、维修所有品牌空调。6年经验。',
      },
      offer4: {
        title: '数学与科学补习 (SPM)',
        description: '经验丰富的导师，教授高级数学、物理和化学。可线上或上门授课。',
      },
      offer5: {
        title: '餐饮服务 - 椰浆饭及本地美食',
        description: '自制椰浆饭和传统马来菜肴，适合活动餐饮。最少20人份。',
      },
      offer6: {
        title: '网站开发',
        description: '使用React构建现代响应式网站。电商、作品集或企业网站。',
      },
      offer7: {
        title: '水管维修服务',
        description: '修复漏水管道、疏通排水管、安装热水器。快速响应。',
      },
      offer8: {
        title: '私人健身训练',
        description: '认证私教。减脂、增肌或一般健身。家庭或健身房训练。',
      },
    },

    // Service Requests
    serviceRequests: {
      request1: {
        title: '需要帮忙搬家具',
        description: '从满家乐公寓搬到白沙罗独立屋。需要2-3人帮忙搬运家具。',
      },
      request2: {
        title: '寻找中文家教',
        description: '想学习日常中文会话。零基础。希望周末上课。',
      },
      request3: {
        title: '紧急：空调不制冷',
        description: '卧室空调突然不制冷了。大金品牌。急需维修！',
      },
      request4: {
        title: '婚礼化妆师',
        description: '为我的nikah仪式寻找化妆师。传统马来新娘妆容。日期：2025年2月15日。',
      },
      request5: {
        title: '每周家庭清洁',
        description: '为3房公寓寻找可靠的清洁工。每周一次，最好周六早上。',
      },
      request6: {
        title: '需要遛狗服务',
        description: '需要人每天早上帮忙遛我的2只金毛。30-45分钟。',
      },
    },
  },
};

export default translations;
