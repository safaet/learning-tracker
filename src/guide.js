// Segment helpers: plain strings render as text, these mark bold/link/italic runs.
const B = (text) => ({ bold: text });
const L = (text, url) => ({ link: text, url });
const I = (text) => ({ italic: text });

export const GUIDE_TITLE = 'AI ফাউন্ডেশন শেখার রিসোর্স গাইড';
export const GUIDE_SUBTITLE = '(একজন AI ইঞ্জিনিয়ার/প্রফেসরের দৃষ্টিভঙ্গি থেকে প্রস্তুত)';

export const GUIDE = [
  {
    id: 'strategy',
    title: 'শেখার কৌশল — প্রথমে এটা বুঝে নিন',
    blocks: [
      { type: 'p', parts: ['তোমার ট্র্যাকারে ৮টা সেকশন আছে, কিন্তু এগুলো ', B('সিকোয়েনশিয়ালি'), ' এক এক করে শেষ করার দরকার নেই। বাস্তবে যেভাবে শিখলে দ্রুত ও কার্যকর হবে:'] },
      { type: 'ol', items: [
        [B('প্যারালাল ট্র্যাক রাখো'), ' — Math আর Python একসাথে চালাও (শুধু math করলে বোরিং লাগবে, মোটিভেশন কমে যাবে)।'],
        [B('"Just enough math, then code" পদ্ধতি'), ' — পুরো ক্যালকুলাস/লিনিয়ার অ্যালজেব্রা কোর্স শেষ না করেই Classical ML-এ ঢুকে পড়ো। যেখানে গ্যাপ পাবে, তখন সেই নির্দিষ্ট টপিকে ফিরে যাও (Just-in-time learning)।'],
        [B('প্রতিটা টপিকের পর ছোট কোড ইমপ্লিমেন্টেশন করো'), ' — শুধু ভিডিও দেখলে ভুলে যাবে। NumPy দিয়ে from-scratch implementation করলে সবচেয়ে বেশি মনে থাকে।'],
        [B('রিডিং অর্ডার:'), ' Math → CS → Classical ML → Deep Learning → NLP/Transformer → LLM-specific → Infra → Research — এটা রুক্ষ গাইডলাইন, কড়া নিয়ম না।'],
      ]},
    ],
  },
  {
    id: 'current-status',
    title: 'তোমার বর্তমান অবস্থা অনুযায়ী স্ট্র্যাটেজি',
    blocks: [
      { type: 'p', parts: [B('অবস্থা:'), ' Python শেষ। Math ও ML-এর কিছু টপিক শেষ, তবে আরও প্র্যাকটিস দরকার।'] },
      { type: 'p', parts: ['এই অবস্থায় নতুন করে "শেখা" নয়, বরং ', B('টার্গেটেড প্র্যাকটিস + ফরওয়ার্ড মোমেন্টাম'), ' — এই দুইটা একসাথে চালানোই সবচেয়ে কার্যকর হবে।'] },
      { type: 'ol', items: [
        [B('Python নিয়ে আর সময় দিয়ো না'), ' — ওটা শেষ, এখন থেকে Python শুধু টুল হিসেবে ব্যবহার হবে (implementation-এর জন্য), আলাদা করে প্র্যাকটিস করার দরকার নেই।'],
        {
          parts: [B('Math/ML-এ "রিভিউ করে সব শেষ করো" ফাঁদে পোড়ো না'), ' — যেসব টপিক শেষ করেছ, সেগুলো পুরোপুরি রিভাইজ করার দরকার নেই। বরং:'],
          children: [
            ['ট্র্যাকারের প্রতিটা শেষ করা টপিকের subs লিস্টটা একবার চোখ বুলাও — কোন লাইনটা পড়লে "হুম, এইটা ঠিক মনে নেই" মনে হয়, শুধু সেটাই টার্গেট করো।'],
            ['দুর্বল টপিকগুলোর জন্য Khan Academy-তে গিয়ে সরাসরি সেই সাব-টপিক সার্চ করে ৫-১০টা এক্সারসাইজ সলভ করো (উপরের গাইড অনুযায়ী)।'],
            ['ML টপিকের প্র্যাকটিসের জন্য scikit-learn ডকুমেন্টেশনের example code হাতে টাইপ করে চালাও, আর ছোট ছোট ভ্যারিয়েশন করে দেখো কী পরিবর্তন হয় (যেমন hyperparameter পাল্টে ফলাফল দেখা)।'],
          ],
        },
        [B('প্র্যাকটিসের সাথে ফরওয়ার্ড এগোও (parallel, sequential না)'), ' — Math/ML প্র্যাকটিস শেষ হওয়া পর্যন্ত বসে না থেকে সমান্তরালে Deep Learning (সেকশন ৪) শুরু করে দাও। Karpathy-র Zero-to-Hero সিরিজ শুরু করলে ব্যাকপ্রপাগেশনেই আবার calculus/linear algebra রিভাইজ হয়ে যাবে প্র্যাকটিক্যাল কনটেক্সটে — এটা আলাদা করে math রিভিউ করার চেয়ে বেশি কার্যকর।'],
        [B('"প্রমাণ" রাখো প্র্যাকটিসের'), ' — প্রতিটা দুর্বল টপিক প্র্যাকটিস করার পর একটা ছোট কোড স্নিপেট বা এক-লাইন নোট লিখে রাখো (যেমন "eigenvalue — 5টা এক্সারসাইজ, সব ঠিক")। এতে ট্র্যাকারে চেকবক্স টিক দেওয়ার সময় confidence থাকবে যে সত্যিই বোঝা হয়েছে, শুধু ভিডিও দেখা হয়নি।'],
        [B('সাপ্তাহিক রিদম:'), ' সপ্তাহে ৭০% সময় নতুন টপিক (Deep Learning-এ এগোনো) + ৩০% সময় পুরোনো Math/ML-এর টার্গেটেড প্র্যাকটিস — এই রেশিওটা রাখলে গতিও থাকবে, ফাউন্ডেশনও শক্ত থাকবে।'],
      ]},
    ],
    subsections: [
      {
        id: 'parallel-tracks',
        title: 'প্যারালাল ট্র্যাক — এখন থেকে ঠিক কী কী একসাথে চালাবে',
        blocks: [
          { type: 'p', parts: [B('ট্র্যাক A — Math (টার্গেটেড প্র্যাকটিস, প্রতিদিন ২০-৩০ মিনিট)')] },
          { type: 'ul', items: [
            ['Linear Algebra: Eigenvalues/eigenvectors, SVD, matrix calculus (Khan Academy exercise)'],
            ['Calculus: Jacobian, Hessian, Taylor series, Lagrange multipliers'],
            ["Probability: Bayes' theorem, MLE/MAP, hypothesis testing (StatQuest দিয়ে ঝালাই)"],
            ['Optimization: Adam/AdamW, learning rate scheduling — এখনো না ধরলে শুরু করো'],
          ]},
          { type: 'p', parts: [B('ট্র্যাক B — Classical ML (বাকি অংশ শেষ করা, scikit-learn দিয়ে হাতে-কলমে)')] },
          { type: 'ul', items: [
            ['Supervised: SVM, Decision Tree, kNN, Naive Bayes'],
            ['Unsupervised: k-Means, PCA, GMM'],
            ['Model evaluation: bias-variance, cross-validation, ROC/AUC'],
            ['Ensemble: Random Forest, XGBoost/LightGBM'],
          ]},
          { type: 'p', parts: [B('ট্র্যাক C — Deep Learning (নতুন, ফরওয়ার্ড মোমেন্টাম)')] },
          { type: 'ul', items: [
            ['NN basics + backpropagation (Karpathy video ১-২)'],
            ['Activation functions, forward/backward prop'],
            ['CNN বেসিক (filters, pooling, padding)'],
            ['PyTorch: tensors, autograd, training loop'],
          ]},
          { type: 'p', parts: [B('দৈনিক বিভাজন:'), ' ট্র্যাক A সকালে ছোট বার্স্টে (হালকা, ফোকাস কম লাগে), ট্র্যাক B/C বড় সেশনে বিকেলে/সন্ধ্যায় (ভারী কনসেপ্টের জন্য বেশি এনার্জি দরকার)।'] },
          { type: 'note', parts: ['এই লিস্টটা জেনারেল — ট্র্যাকারে ঠিক কোন সাব-টপিক এখনো আনচেকড সেটা জানা থাকলে এই লিস্ট আরও স্পেসিফিক করে দেওয়া যাবে।'] },
        ],
      },
      {
        id: 'remaining-topics-order',
        title: 'বাকি টপিকগুলো (CS বাকি অংশ, NLP, LLM, Infra, Research) কোন ক্রমে শেষ করবে',
        blocks: [
          { type: 'ol', items: [
            [B('বাকি CS অংশ হালকাভাবে ফিট করে নাও (DSA, OOP, Systems)'), ' — এগুলো DL-এর উপর সরাসরি নির্ভর করে না, তাই আলাদা একটা সপ্তাহ দিয়ে শেষ করার দরকার নেই। Track A-এর মতোই হালকা দৈনন্দিন বার্স্ট হিসেবে চালাও: NeetCode.io-তে সপ্তাহে ২-৩টা DSA প্রবলেম সলভ করো, OOP সাপ্তাহিক একটা সেশন, Systems (CPU/GPU/Linux) এক বসায় একটা ভিডিও দেখে শেষ করে ফেলো।'],
            [B('Track C (Deep Learning) শেষ করে NLP/Transformer-এ যাও'), " — Backprop, CNN, PyTorch training loop কমফোর্টেবল হলে RNN/LSTM শেষ করে সাথে সাথে সেকশন ৫-এ ঢুকে পড়ো (attention, transformer)। Jay Alammar-এর Illustrated Transformer পড়ে, তারপর Karpathy-র \"Let's build GPT\" ভিডিও দিয়ে নিজে attention কোড করো — এটা মাস্টার না করে পরের সেকশনে এগোনো ঠিক না।"],
            [B('NLP/Transformer শেষ হলে LLM-স্পেসিফিক টপিকে যাও'), ' — সেকশন ৬-এ কনসেপ্ট অনেক বেশি, একসঙ্গে সব না ধরে সাব-গ্রুপ করে এগোও: প্রথমে pretraining+scaling, তারপর fine-tuning (LoRA/QLoRA), তারপর alignment (RLHF/DPO), শেষে RAG+evaluation+safety। Hugging Face NLP/LLM Course এই সবকটার জন্য একটা মূল সুতো, সেখানেই প্র্যাকটিস কোড থাকে।'],
            [B('Infra (সেকশন ৭) আলাদা একটা "পড়ার বিষয়" না, LLM সেকশনের সাথে Just-in-time একসাথে করো'), ' — Vector DB (FAISS) শেখো যখন RAG করবে, distributed training শেখো যখন fine-tuning করবে (বাস্তব কাজে পড়লে বেশি আটকে যায়)। এই সেকশনটা concept-first না, project-first — একটা ছোট RAG প্রজেক্ট তৈরি করলে এই সেকশনের বেশিরভাগ নিজে থেকেই এসে যাবে।'],
            [B('Research skill (সেকশন ৮) একটা পেজ না, একটা অভ্যাস হিসেবে ধরো'), ' — বাকি সব সেকশন শেষ হবার দরকার নেই, এখন থেকেই সপ্তাহে ১টা arxiv পেপার পড়া শুরু করো (abstract→figures→method→results অর্ডারে)। DL/NLP/LLM যেটা পড়ছ, সেই টপিকেরই একটা পেপার পড়লে দুটো একসাথে রিইনফোর্স হয়।'],
          ]},
        ],
      },
    ],
  },
  {
    id: 'khan-academy',
    title: 'Khan Academy — কোথায় ব্যবহার করবে ও কিভাবে এক্সারসাইজ করবে',
    blocks: [
      { type: 'p', parts: ['Khan Academy ML-স্পেসিফিক কিছুর জন্য না, বরং একদম বেসিক গণিতের ফাউন্ডেশন মজবুত করার জন্য সবচেয়ে ভালো — বিশেষ করে ধাপে ধাপে exercise-সহ প্র্যাকটিস করতে চাইলে।'] },
    ],
    subsections: [
      {
        id: 'khan-topics',
        title: 'কোন টপিকে ব্যবহার করবে',
        blocks: [
          { type: 'ul', items: [
            [B('Linear Algebra'), ' — 3Blue1Brown ইন্টুইশন দেয়, Khan Academy হাতে-কলমে matrix multiplication/eigenvalue বসে বসে সমাধান করার প্র্যাকটিস দেয়। দুটো পরিপূরক।'],
            [B('Calculus'), ' — এখানে সবচেয়ে ভালো ফিট। Derivatives, chain rule, partial derivatives-এর বেসিক দুর্বল থাকলে "Differential Calculus" আর "Multivariable Calculus" কোর্স ধাপে ধাপে exercise-সহ শেখায়।'],
            [B('Probability & Statistics'), ' — random variables, distributions, expectation/variance-এর গোড়ার ধারণা পরিষ্কার করার জন্য ভালো, তারপর StatQuest দিয়ে ML-কনটেক্সটে অ্যাপ্লাই করা যায়।'],
            [B('Discrete Math'), ' — সীমিত কভারেজ (কিছু combinatorics/probability অংশ), গ্রাফ থিওরি নেই — এই টপিকের জন্য MIT OCW 6.042J ব্যবহার করাই ভালো।'],
            [B('কাজে দেবে না:'), ' Optimization, Information Theory (ML-স্পেসিফিক কনটেক্সট দরকার), এবং সেকশন ২-৮ (CS, Classical ML, Deep Learning, NLP, LLM, Infra, Research)।'],
          ]},
        ],
      },
      {
        id: 'khan-how-to',
        title: 'এক্সারসাইজ কোথায় ও কিভাবে করবে',
        blocks: [
          { type: 'ol', items: [
            [B('অ্যাকাউন্ট বানাও'), ' — khanacademy.org-এ ইমেইল/গুগল দিয়ে "Learner" হিসেবে সাইন আপ (সম্পূর্ণ ফ্রি)।'],
            [B('কোর্স খুঁজো'), ' — সার্চ বারে "Precalculus", "Differential Calculus", "Multivariable Calculus", বা "AP Statistics" লিখে সার্চ করো।'],
            [B('ভিডিও দেখে সাথে সাথেই Practice করো'), ' — প্রতিটা টপিকের নিচে ৫-১৫ মিনিটের ভিডিও থাকে, দেখার পরপরই "Practice" বাটনে ক্লিক করলে সেই টপিকেরই এক্সারসাইজ আসে।'],
            [B('ইন্টারঅ্যাক্টিভ সলভ করো'), ' — উত্তর দিলে সাথে সাথে ঠিক/ভুল বলে দেয়; ভুল হলে "Hint" বাটনে স্টেপ-বাই-স্টেপ সমাধান দেখা যায়।'],
            [B('Mastery সিস্টেম ফলো করো'), ' — একটা টপিকে কিছু প্রশ্ন ঠিক করলে সেটা "Familiar" থেকে "Proficient" হয়ে যায় (প্রোগ্রেস বারে দেখা যায়); পুরো ইউনিট প্রোফিসিয়েন্ট না হলেও মূল কনসেপ্ট ক্লিয়ার হলে পরের টপিকে চলে যাওয়া যায়।'],
            [B('রেগুলার রিভিউ'), ' — সিস্টেম নিজে থেকেই মাঝেমধ্যে পুরোনো টপিক থেকে "Review" প্রশ্ন দেখায়, এগুলো স্কিপ না করে সলভ করলে ভুলে যাওয়া কমে।'],
            [B('ML-কনটেক্সটে অ্যাপ্লাই করো'), ' — Khan Academy-তে একটা টপিক (যেমন derivative বা matrix multiplication) কমফোর্টেবল হয়ে গেলে NumPy দিয়ে ছোট কোড লিখে ভেরিফাই করো (যেমন হাতে ক্যালকুলেট করা derivative ', { code: 'numpy.gradient' }, ' বা PyTorch autograd দিয়ে চেক করা) — এতে pure math আর ML-এর মধ্যে সেতু তৈরি হয়।'],
          ]},
          { type: 'note', parts: [B('টিপ:'), ' পুরো ইউনিট লিনিয়ারলি করার দরকার নেই — ট্র্যাকারের সাব-টপিক (যেমন "Chain rule (multivariable)", "Eigenvalues ও eigenvectors") সরাসরি সার্চ করে সেই এক্সারসাইজে চলে যাওয়া যায়।'] },
        ],
      },
    ],
  },
  {
    id: 'math-resources',
    title: '১. গাণিতিক ভিত্তি (Mathematical Foundations)',
    subsections: [
      {
        id: 'res-linalg',
        title: 'Linear Algebra',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও (মাস্ট-ওয়াচ):'), ' ', L('3Blue1Brown – Essence of Linear Algebra', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'), ' — ইন্টুইশন বিল্ড করার জন্য সেরা, ১৬টা ছোট এপিসোড।'],
          [B('গভীরে যেতে:'), ' MIT OpenCourseWare – Gilbert Strang-এর "18.06 Linear Algebra" (YouTube-এ ফ্রি, পুরো লেকচার সিরিজ)।'],
          [B('কোডিং প্র্যাকটিস:'), ' fast.ai-এর "Computational Linear Algebra for Coders" (GitHub-এ নোটবুক আছে)।'],
          [B('রেফারেন্স বই:'), ' Gilbert Strang – ', I('Introduction to Linear Algebra'), '।'],
        ]}],
      },
      {
        id: 'res-calculus',
        title: 'Calculus',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও:'), ' ', L('3Blue1Brown – Essence of Calculus', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'), ' — একই স্টাইলে ইন্টুইটিভ।'],
          [B('মাল্টিভেরিয়েট ক্যালকুলাস (Jacobian, Hessian, gradient):'), ' Khan Academy-এর Multivariable Calculus কোর্স।'],
          [B('ML-ফোকাসড ক্যালকুলাস:'), ' deeplearning.ai-এর "Mathematics for Machine Learning" স্পেশালাইজেশন (Coursera, ৩টা কোর্সের একটা)।'],
        ]}],
      },
      {
        id: 'res-probstat',
        title: 'Probability & Statistics',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও:'), ' ', L('StatQuest with Josh Starmer', 'https://www.youtube.com/@statquest'), " — Bayes' theorem, MLE, hypothesis testing সব ছোট ছোট ক্লিয়ার ভিডিওতে ব্যাখ্যা করা।"],
          [B('কোর্স:'), ' Harvard-এর "Statistics 110: Probability" (Joe Blitzstein, YouTube-এ ফ্রি ফুল কোর্স)।'],
          [B('বই (রেফারেন্স):'), ' Wasserman – ', I('All of Statistics'), ' (advanced হলে)।'],
        ]}],
      },
      {
        id: 'res-optimization',
        title: 'Optimization',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও:'), ' StatQuest-এর Gradient Descent সিরিজ + [Sebastian Lague বা Andrej Karpathy-এর backprop videos]।'],
          [B('ইন্টারঅ্যাক্টিভ:'), ' distill.pub-এর "Why Momentum Really Works" আর্টিকেল — Adam/RMSprop-এর ইন্টুইশনের জন্য দুর্দান্ত।'],
          [B('প্র্যাকটিক্যাল:'), ' Sebastian Ruder-এর ব্লগ "An overview of gradient descent optimization algorithms" (ruder.io)।'],
        ]}],
      },
      {
        id: 'res-infotheory',
        title: 'Information Theory',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও:'), ' StatQuest-এর Entropy, Cross-Entropy, KL Divergence ভিডিওগুলো।'],
          [B('আর্টিকেল:'), ' Chris Olah-এর "Visual Information Theory" (colah.github.io) — entropy/KL divergence-এর সেরা ভিজ্যুয়াল ব্যাখ্যা।'],
        ]}],
      },
      {
        id: 'res-discrete',
        title: 'Discrete Math',
        blocks: [{ type: 'ul', items: [
          [B('কোর্স:'), ' MIT OCW – "Mathematics for Computer Science" (6.042J)।'],
          [B('গ্রাফ থিওরি বেসিক:'), ' freeCodeCamp-এর YouTube চ্যানেলে Graph Theory ক্র্যাশ কোর্স।'],
        ]}],
      },
    ],
  },
  {
    id: 'cs-resources',
    title: '২. প্রোগ্রামিং ও CS ফাউন্ডেশন',
    subsections: [
      {
        id: 'res-python',
        title: 'Python (ML-ফোকাসড)',
        blocks: [{ type: 'ul', items: [
          [B('কোর্স:'), ' ', L('freeCodeCamp – Python for Everybody (Dr. Chuck)', 'https://www.youtube.com/@freecodecamp'), ' বেসিকের জন্য।'],
          [B('NumPy/Pandas:'), ' Corey Schafer-এর YouTube সিরিজ + Kaggle-এর ফ্রি "Pandas" মাইক্রো-কোর্স (kaggle.com/learn)।'],
          [B('প্র্যাকটিস:'), ' Kaggle Learn-এর Python কোর্স ইন্টারঅ্যাক্টিভভাবে কোড লিখে শেখায়।'],
        ]}],
      },
      {
        id: 'res-dsa',
        title: 'Data Structures & Algorithms',
        blocks: [{ type: 'ul', items: [
          [B('কোর্স:'), ' ', L('NeetCode.io', 'https://neetcode.io/'), ' — DSA শেখা এবং প্র্যাকটিসের জন্য বর্তমানে সবচেয়ে জনপ্রিয় ফ্রি রিসোর্স।'],
          [B('ভিডিও:'), ' Abdul Bari-এর YouTube চ্যানেল (algorithm explanation-এ ক্লাসিক)।'],
          [B('বই (ঐচ্ছিক):'), ' ', I('Cracking the Coding Interview'), ' যদি ইন্টারভিউ প্রস্তুতিও লক্ষ্য হয়।'],
        ]}],
      },
      {
        id: 'res-oop',
        title: 'OOP',
        blocks: [{ type: 'ul', items: [
          [B('ভিডিও:'), ' Corey Schafer-এর Python OOP সিরিজ।'],
          [B('ডিজাইন প্যাটার্ন:'), ' refactoring.guru — ভিজ্যুয়াল উদাহরণসহ পরিচিতির জন্য যথেষ্ট।'],
        ]}],
      },
      {
        id: 'res-systems',
        title: 'Systems (CPU/GPU, Memory)',
        blocks: [{ type: 'ul', items: [
          [B('আর্টিকেল:'), ' "What Every Programmer Should Know About Memory" (Ulrich Drepper) — গভীরে যেতে চাইলে।'],
          [B('GPU বেসিক:'), ' NVIDIA-এর "CUDA Programming" ইন্ট্রো ভিডিও বা Karpathy-এর ব্লগ পোস্টগুলো ML ইঞ্জিনিয়ারিং প্রসঙ্গে GPU নিয়ে লেখা।'],
          [B('Linux/Shell:'), ' MIT-এর "The Missing Semester of Your CS Education" (missing.csail.mit.edu) — শেল, গিট, টুলিং সব একসাথে।'],
        ]}],
      },
    ],
  },
  {
    id: 'classic-ml-resources',
    title: '৩. ক্লাসিক্যাল মেশিন লার্নিং',
    blocks: [{ type: 'ul', items: [
      [B('প্রধান কোর্স (সবচেয়ে বেশি রেকমেন্ডেড):'), ' ', L('Andrew Ng – Machine Learning Specialization', 'https://www.coursera.org/specializations/machine-learning-introduction'), ' (Coursera, DeepLearning.AI) — Linear/Logistic Regression, bias-variance, regularization সব কভার করে, ফ্রি অডিট করা যায়।'],
      [B('ভিডিও চ্যানেল:'), ' StatQuest — প্রতিটা অ্যালগরিদম (Decision Tree, SVM, Random Forest, XGBoost) আলাদা আলাদা ভিডিওতে সহজভাবে ব্যাখ্যা করা।'],
      [B('হাতে-কলমে কোড:'), ' ', L('scikit-learn অফিসিয়াল ডকুমেন্টেশন', 'https://scikit-learn.org/stable/'), ' — প্রতিটা অ্যালগরিদমের সাথে example code আছে, এটা পড়েই বাস্তব প্র্যাকটিস করা যায়।'],
      [B('বই (রেফারেন্স):'), ' Aurélien Géron – ', I('Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow'), ' (সবচেয়ে প্র্যাকটিক্যাল বই এই বিষয়ে)।'],
      [B('Ensemble methods (XGBoost/LightGBM):'), ' এগুলোর অফিসিয়াল ডকুমেন্টেশনের "Getting Started" গাইড + Kaggle-এর কম্পিটিশন নোটবুক পড়ে শেখা সবচেয়ে কার্যকর।'],
    ]}],
  },
  {
    id: 'dl-resources',
    title: '৪. ডিপ লার্নিং',
    blocks: [{ type: 'ul', items: [
      [B('প্রধান কোর্স:'), ' ', L('Andrew Ng – Deep Learning Specialization', 'https://www.coursera.org/specializations/deep-learning'), ' (৫টা কোর্স: NN basics, hyperparameter tuning, CNN, sequence models)।'],
      [B('সবচেয়ে গুরুত্বপূর্ণ ভিডিও সিরিজ:'), ' ', L('Andrej Karpathy – Neural Networks: Zero to Hero', 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ'), ' — backpropagation থেকে GPT পর্যন্ত from-scratch কোড করে শেখায়, এই একটা প্লেলিস্ট অনেকের কাছে "গেম-চেঞ্জার"।'],
      [B('CNN-এর জন্য:'), ' Stanford CS231n (Fei-Fei Li/Karpathy-এর লেকচার, YouTube-এ ফ্রি + cs231n.github.io-তে নোট)।'],
      [B('RNN/LSTM:'), ' Chris Olah-এর ব্লগ পোস্ট "Understanding LSTM Networks" (colah.github.io) — এই টপিকে অনলাইনে সেরা ব্যাখ্যা হিসেবে পরিচিত।'],
      [B('PyTorch শেখার জন্য:'), ' ', L('PyTorch অফিসিয়াল "60 Minute Blitz" টিউটোরিয়াল', 'https://pytorch.org/tutorials/'), ' + Daniel Bourke-এর "Learn PyTorch for Deep Learning" (learnpytorch.io, ফ্রি ও প্রজেক্ট-বেসড)।'],
    ]}],
  },
  {
    id: 'nlp-resources',
    title: '৫. NLP ও Transformer ফাউন্ডেশন',
    blocks: [{ type: 'ul', items: [
      [B('সবচেয়ে গুরুত্বপূর্ণ একক রিসোর্স:'), ' ', L('Jay Alammar – "The Illustrated Transformer"', 'https://jalammar.github.io/illustrated-transformer/'), ' এবং "The Illustrated GPT-2" — ভিজ্যুয়াল ডায়াগ্রাম দিয়ে attention/transformer বোঝানো, প্রায় সবাই এটা দিয়ে শুরু করে।'],
      [B('কোর্স:'), ' Stanford CS224n – "NLP with Deep Learning" (Chris Manning, YouTube-এ ফুল লেকচার ফ্রি) — tokenization থেকে transformer আর্কিটেকচার পর্যন্ত।'],
      [B('হাতে-কলমে কোড:'), ' Karpathy-এর Zero-to-Hero সিরিজের "Let\'s build GPT from scratch" ভিডিওটা — attention mechanism নিজে কোড করে শেখার সেরা উপায়।'],
      [B('অরিজিনাল পেপার:'), ' "Attention Is All You Need" (arxiv.org) — Illustrated Transformer পড়ার পর পেপারটা লাইন বাই লাইন পড়ো।'],
      [B('পজিশনাল এনকোডিং (RoPE, ALiBi):'), ' EleutherAI-এর ব্লগ বা "The Illustrated RoPE" ধরনের আর্টিকেল সার্চ করে পড়া ভালো — এগুলো নতুন টপিক, ব্লগ পোস্ট বেশি আপ-টু-ডেট।'],
      [B('হাতে-কলমে লাইব্রেরি:'), ' ', L('Hugging Face NLP Course', 'https://huggingface.co/learn/nlp-course'), ' — সম্পূর্ণ ফ্রি, ইন্টারেক্টিভ, BERT/GPT আর্কিটেকচার প্র্যাকটিক্যালি ব্যবহার শেখায়।'],
    ]}],
  },
  {
    id: 'llm-resources',
    title: '৬. LLM-স্পেসিফিক টপিক',
    blocks: [{ type: 'ul', items: [
      [B('সবচেয়ে ভালো প্র্যাকটিক্যাল কোর্স:'), ' ', L('Hugging Face NLP Course', 'https://huggingface.co/learn/nlp-course'), ' (Transformers, fine-tuning) এবং তাদের নতুন ', L('LLM Course', 'https://huggingface.co/learn'), ' — pretraining, fine-tuning, alignment, quantization সব প্র্যাকটিক্যালি কভার করে।'],
      [B('স্কেলিং ল, প্রি-ট্রেনিং:'), ' Karpathy-এর "Let\'s build GPT-2 from scratch" ভিডিও (Zero-to-Hero সিরিজেরই একটা বড় পার্ট, "nanoGPT" রিপো সহ)।'],
      [B('Fine-tuning (LoRA/QLoRA/PEFT):'), ' Hugging Face PEFT লাইব্রেরির অফিসিয়াল ডকুমেন্টেশন ও ব্লগ; Sebastian Raschka-এর ব্লগ (sebastianraschka.com) — LoRA/QLoRA নিয়ে সবচেয়ে ক্লিয়ার প্র্যাকটিক্যাল লেখা।'],
      [B('Alignment (RLHF/DPO):'), ' Hugging Face-এর "Illustrated RLHF" ব্লগ পোস্ট + DPO পেপার (arxiv)।'],
      [B('Quantization:'), ' Hugging Face-এর "Making LLMs lighter with AutoGPTQ" ব্লগ পোস্ট।'],
      [B('Inference optimization (KV-cache, Flash Attention, speculative decoding):'), ' vLLM ও Hugging Face-এর ব্লগ পোস্ট, এবং Flash Attention-এর অরিজিনাল পেপার/ব্লগ (Tri Dao-এর সাইট)।'],
      [B('RAG:'), ' ', L('DeepLearning.AI-এর "LangChain: Chat with Your Data"', 'https://www.deeplearning.ai/short-courses/'), ' শর্ট কোর্স + Pinecone-এর "Learn" সেকশন (pinecone.io/learn) — chunking, embedding, hybrid search প্র্যাকটিক্যালি ব্যাখ্যা করা।'],
      [B('Evaluation:'), ' Hugging Face-এর "Evaluate" লাইব্রেরি ডকুমেন্টেশন + lmsys-এর "Chatbot Arena" ব্লগ (LLM-as-judge কনসেপ্টের জন্য)।'],
      [B('Safety:'), ' Anthropic ও OpenAI-এর নিজস্ব রিসার্চ ব্লগ পোস্ট (prompt injection, hallucination নিয়ে)।'],
    ]}],
  },
  {
    id: 'infra-resources',
    title: '৭. ইনফ্রাস্ট্রাকচার ও ইঞ্জিনিয়ারিং',
    blocks: [
      { type: 'ul', items: [
        [B('ডিস্ট্রিবিউটেড ট্রেনিং:'), ' Hugging Face-এর "Efficient Training on Multiple GPUs" ডকুমেন্টেশন পেজ — data/model/pipeline parallelism ও ZeRO স্টেজ প্র্যাকটিক্যালি ব্যাখ্যা করা।'],
        [B('Mixed precision:'), ' PyTorch অফিসিয়াল "Automatic Mixed Precision" টিউটোরিয়াল।'],
        [B('Vector DB:'), ' Pinecone-এর "Learn" সেকশন + FAISS-এর অফিসিয়াল উইকি (FAISS GitHub) — HNSW/IVF ইনডেক্সিং নিয়ে হাতে-কলমে।'],
        [B('MLOps:'), ' Weights & Biases (wandb.ai)-এর ফ্রি "MLOps" কোর্স (কোর্স নাম: "Effective MLOps")।'],
        [B('Model serving:'), ' vLLM-এর অফিসিয়াল ডকুমেন্টেশন + Hugging Face TGI (Text Generation Inference) গিটহাব রিডমি।'],
      ]},
      { type: 'p', parts: ['এই সেকশনটা মূলত ', B('করে শেখার'), ' জায়গা — একটা ছোট মডেল নিজে multi-GPU-তে ফাইন-টিউন করে দেখলে সবচেয়ে বেশি শেখা যায়, শুধু পড়ে না।'] },
    ],
  },
  {
    id: 'research-resources',
    title: '৮. গবেষণা স্কিল',
    blocks: [{ type: 'ul', items: [
      [B('পেপার পড়ার কৌশল:'), ' Andrew Ng-এর ভিডিও "How to Read Research Papers" (YouTube) — abstract → figures → method → results অর্ডারে পড়ার টেকনিক নিজেই শেখান।'],
      [B('পেপার খোঁজা:'), ' ', L('arxiv.org', 'https://arxiv.org'), ' (cs.CL, cs.LG ক্যাটাগরি) + ', L('Papers With Code', 'https://paperswithcode.com'), ' — কোড-সহ পেপার খুঁজতে সেরা।'],
      [B('Reproducibility প্র্যাকটিস:'), ' Papers With Code-এর "Reproducibility Checklist" পড়া এবং ছোট পেপার নিজে রিইমপ্লিমেন্ট করার চেষ্টা করা।'],
      [B('Research writing:'), ' "The Craft of Research" বইয়ের রিলেভেন্ট চ্যাপ্টার বা Google-এর "Technical Writing" ফ্রি কোর্স (developers.google.com/tech-writing)।'],
      [B('কমিউনিটি:'), ' NeurIPS/ICML/ACL-এর ওপেন-এক্সেস প্রসিডিংস পড়া, Twitter/X-এ AI researcher-দের ফলো করা (আপডেট থাকার সবচেয়ে বাস্তব উপায়)।'],
    ]}],
  },
  {
    id: 'top-3',
    title: 'সংক্ষেপে — কোন ৩টা রিসোর্স সবচেয়ে বেশি গুরুত্বপূর্ণ',
    blocks: [
      { type: 'p', parts: ['যদি সময় কম থাকে আর মাত্র কয়েকটা রিসোর্স বেছে নিতে হয়, এই তিনটা সবচেয়ে বেশি ভ্যালু দেবে:'] },
      { type: 'ol', items: [
        [B('Andrej Karpathy – Neural Networks: Zero to Hero'), ' (backprop থেকে GPT পর্যন্ত, from scratch কোড)'],
        [B('StatQuest with Josh Starmer'), ' (Math + Classical ML-এর ইন্টুইশনের জন্য)'],
        [B('Hugging Face NLP/LLM Course'), ' (মডার্ন LLM ইকোসিস্টেমে হাতে-কলমে কাজ করার জন্য)'],
      ]},
      { type: 'p', parts: ['এই তিনটা মিলিয়ে সেকশন ১, ৪, ৫, ৬-এর প্রায় ৭০% কভার হয়ে যায়।'] },
    ],
  },
];
