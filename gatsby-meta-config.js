module.exports = {
  title: `Charles JH Ahn`,
  description: `안진형의 개발노트`,
  language: `ko`,
  siteUrl: `https://charlesahn0903.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-ETLWC86NHW', // Google Analytics Tracking ID
  author: {
    name: `안진형`,
    bio: {
      role: ['개발자', '삼수생', '19세'],
      description: '꿈과 열정으로 도전하는',
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/charlesahn0903`, 
      email: `charlesahn0903@gmail.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.02. ~ 2021.02.',
        activity: 'KAIST IP-CEO 10기',
        links: {
        }
      },
      {
        date: '2021.11.',
        activity: '2021 대한민국 인재상 수상 (부총리 겸 교육부장관상)',
        links: {
          post: 'https://www.hani.co.kr/arti/society/schooling/1040240.html'
        }
      },
      {
        date: '2023.12. ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
        }
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '시각장애인용 지폐 인식 및 구별기 개발',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
        post: ''
        },
      },
    ],
  },
};