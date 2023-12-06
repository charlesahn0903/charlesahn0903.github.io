module.exports = {
  title: `Charles JH Ahn`,
  description: ``,
  language: `ko`
  siteUrl: `https://charlesahn0903.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안진형`,
    bio: {
      role: `개발자`,
      description: ['변하지 않는 꿈과', '무한한 열정으로', '쉬지 않고 도전하는'],
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
        date: '2021.11.',
        activity: '2021 대한민국 인재상 수상 (부총리 겸 교육부장관상)',
        links: {
          news: 'https://www.ulsanpress.net/news/articleView.html?idxno=390655',
          maazine: 'https://www.hani.co.kr/arti/society/schooling/1040240.html'
        }
      },
      {
        date: '2023.12 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          //github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          //demo: 'https://www.zoomkoding.com',
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
         title: 'Will be updated!',
        // description:
        //   '',
        // techStack: ['', ''],
        // thumbnailUrl: 'blog.png',
        // links: {
        // post: '/gatsby-starter-zoomkoding-introduction',
        // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
        // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
