# AI ফাউন্ডেশন শেখার রিসোর্স গাইড
### (একজন AI ইঞ্জিনিয়ার/প্রফেসরের দৃষ্টিভঙ্গি থেকে প্রস্তুত)

---

## শেখার কৌশল — প্রথমে এটা বুঝে নিন

তোমার ট্র্যাকারে ৮টা সেকশন আছে, কিন্তু এগুলো **সিকোয়েনশিয়ালি** এক এক করে শেষ করার দরকার নেই। বাস্তবে যেভাবে শিখলে দ্রুত ও কার্যকর হবে:

1. **প্যারালাল ট্র্যাক রাখো** — Math আর Python একসাথে চালাও (শুধু math করলে বোরিং লাগবে, মোটিভেশন কমে যাবে)।
2. **"Just enough math, then code" পদ্ধতি** — পুরো ক্যালকুলাস/লিনিয়ার অ্যালজেব্রা কোর্স শেষ না করেই Classical ML-এ ঢুকে পড়ো। যেখানে গ্যাপ পাবে, তখন সেই নির্দিষ্ট টপিকে ফিরে যাও (Just-in-time learning)।
3. **প্রতিটা টপিকের পর ছোট কোড ইমপ্লিমেন্টেশন করো** — শুধু ভিডিও দেখলে ভুলে যাবে। NumPy দিয়ে from-scratch implementation করলে সবচেয়ে বেশি মনে থাকে।
4. **রিডিং অর্ডার:** Math → CS → Classical ML → Deep Learning → NLP/Transformer → LLM-specific → Infra → Research — এটা রুক্ষ গাইডলাইন, কড়া নিয়ম না।

---

## তোমার বর্তমান অবস্থা অনুযায়ী স্ট্র্যাটেজি

**অবস্থা:** Python শেষ। Math ও ML-এর কিছু টপিক শেষ, তবে আরও প্র্যাকটিস দরকার।

এই অবস্থায় নতুন করে "শেখা" নয়, বরং **টার্গেটেড প্র্যাকটিস + ফরওয়ার্ড মোমেন্টাম** — এই দুইটা একসাথে চালানোই সবচেয়ে কার্যকর হবে।

1. **Python নিয়ে আর সময় দিয়ো না** — ওটা শেষ, এখন থেকে Python শুধু টুল হিসেবে ব্যবহার হবে (implementation-এর জন্য), আলাদা করে প্র্যাকটিস করার দরকার নেই।

2. **Math/ML-এ "রিভিউ করে সব শেষ করো" ফাঁদে পোড়ো না** — যেসব টপিক শেষ করেছ, সেগুলো পুরোপুরি রিভাইজ করার দরকার নেই। বরং:
   - ট্র্যাকারের প্রতিটা শেষ করা টপিকের subs লিস্টটা একবার চোখ বুলাও — কোন লাইনটা পড়লে "হুম, এইটা ঠিক মনে নেই" মনে হয়, শুধু সেটাই টার্গেট করো।
   - দুর্বল টপিকগুলোর জন্য Khan Academy-তে গিয়ে সরাসরি সেই সাব-টপিক সার্চ করে ৫-১০টা এক্সারসাইজ সলভ করো (উপরের গাইড অনুযায়ী)।
   - ML টপিকের প্র্যাকটিসের জন্য scikit-learn ডকুমেন্টেশনের example code হাতে টাইপ করে চালাও, আর ছোট ছোট ভ্যারিয়েশন করে দেখো কী পরিবর্তন হয় (যেমন hyperparameter পাল্টে ফলাফল দেখা)।

3. **প্র্যাকটিসের সাথে ফরওয়ার্ড এগোও (parallel, sequential না)** — Math/ML প্র্যাকটিস শেষ হওয়া পর্যন্ত বসে না থেকে সমান্তরালে Deep Learning (সেকশন ৪) শুরু করে দাও। Karpathy-র Zero-to-Hero সিরিজ শুরু করলে ব্যাকপ্রপাগেশনেই আবার calculus/linear algebra রিভাইজ হয়ে যাবে প্র্যাকটিক্যাল কনটেক্সটে — এটা আলাদা করে math রিভিউ করার চেয়ে বেশি কার্যকর।

4. **"প্রমাণ" রাখো প্র্যাকটিসের** — প্রতিটা দুর্বল টপিক প্র্যাকটিস করার পর একটা ছোট কোড স্নিপেট বা এক-লাইন নোট লিখে রাখো (যেমন "eigenvalue — 5টা এক্সারসাইজ, সব ঠিক")। এতে ট্র্যাকারে চেকবক্স টিক দেওয়ার সময় confidence থাকবে যে সত্যিই বোঝা হয়েছে, শুধু ভিডিও দেখা হয়নি।

5. **সাপ্তাহিক রিদম:** সপ্তাহে ৭০% সময় নতুন টপিক (Deep Learning-এ এগোনো) + ৩০% সময় পুরোনো Math/ML-এর টার্গেটেড প্র্যাকটিস — এই রেশিওটা রাখলে গতিও থাকবে, ফাউন্ডেশনও শক্ত থাকবে।

### প্যারালাল ট্র্যাক — এখন থেকে ঠিক কী কী একসাথে চালাবে

**ট্র্যাক A — Math (টার্গেটেড প্র্যাকটিস, প্রতিদিন ২০-৩০ মিনিট)**
- Linear Algebra: Eigenvalues/eigenvectors, SVD, matrix calculus (Khan Academy exercise)
- Calculus: Jacobian, Hessian, Taylor series, Lagrange multipliers
- Probability: Bayes' theorem, MLE/MAP, hypothesis testing (StatQuest দিয়ে ঝালাই)
- Optimization: Adam/AdamW, learning rate scheduling — এখনো না ধরলে শুরু করো

**ট্র্যাক B — Classical ML (বাকি অংশ শেষ করা, scikit-learn দিয়ে হাতে-কলমে)**
- Supervised: SVM, Decision Tree, kNN, Naive Bayes
- Unsupervised: k-Means, PCA, GMM
- Model evaluation: bias-variance, cross-validation, ROC/AUC
- Ensemble: Random Forest, XGBoost/LightGBM

**ট্র্যাক C — Deep Learning (নতুন, ফরওয়ার্ড মোমেন্টাম)**
- NN basics + backpropagation (Karpathy video ১-২)
- Activation functions, forward/backward prop
- CNN বেসিক (filters, pooling, padding)
- PyTorch: tensors, autograd, training loop

**দৈনিক বিভাজন:** ট্র্যাক A সকালে ছোট বার্স্টে (হালকা, ফোকাস কম লাগে), ট্র্যাক B/C বড় সেশনে বিকেলে/সন্ধ্যায় (ভারী কনসেপ্টের জন্য বেশি এনার্জি দরকার)।

> এই লিস্টটা জেনারেল — ট্র্যাকারে ঠিক কোন সাব-টপিক এখনো আনচেকড সেটা জানা থাকলে এই লিস্ট আরও স্পেসিফিক করে দেওয়া যাবে।

### বাকি টপিকগুলো (CS বাকি অংশ, NLP, LLM, Infra, Research) কোন ক্রমে শেষ করবে

1. **বাকি CS অংশ হালকাভাবে ফিট করে নাও (DSA, OOP, Systems)** — এগুলো DL-এর উপর সরাসরি নির্ভর করে না, তাই আলাদা একটা সপ্তাহ দিয়ে শেষ করার দরকার নেই। Track A-এর মতোই হালকা দৈনন্দিন বার্স্ট হিসেবে চালাও: NeetCode.io-তে সপ্তাহে ২-৩টা DSA প্রবলেম সলভ করো, OOP সাপ্তাহিক একটা সেশন, Systems (CPU/GPU/Linux) এক বসায় একটা ভিডিও দেখে শেষ করে ফেলো।

2. **Track C (Deep Learning) শেষ করে NLP/Transformer-এ যাও** — Backprop, CNN, PyTorch training loop কমফোর্টেবল হলে RNN/LSTM শেষ করে সাথে সাথে সেকশন ৫-এ ঢুকে পড়ো (attention, transformer)। Jay Alammar-এর Illustrated Transformer পড়ে, তারপর Karpathy-র "Let's build GPT" ভিডিও দিয়ে নিজে attention কোড করো — এটা মাস্টার না করে পরের সেকশনে এগোনো ঠিক না।

3. **NLP/Transformer শেষ হলে LLM-স্পেসিফিক টপিকে যাও** — সেকশন ৬-এ কনসেপ্ট অনেক বেশি, একসঙ্গে সব না ধরে সাব-গ্রুপ করে এগোও: প্রথমে pretraining+scaling, তারপর fine-tuning (LoRA/QLoRA), তারপর alignment (RLHF/DPO), শেষে RAG+evaluation+safety। Hugging Face NLP/LLM Course এই সবকটার জন্য একটা মূল সুতো, সেখানেই প্র্যাকটিস কোড থাকে।

4. **Infra (সেকশন ৭) আলাদা একটা "পড়ার বিষয়" না, LLM সেকশনের সাথে Just-in-time একসাথে করো** — Vector DB (FAISS) শেখো যখন RAG করবে, distributed training শেখো যখন fine-tuning করবে (বাস্তব কাজে পড়লে বেশি আটকে যায়)। এই সেকশনটা concept-first না, project-first — একটা ছোট RAG প্রজেক্ট তৈরি করলে এই সেকশনের বেশিরভাগ নিজে থেকেই এসে যাবে।

5. **Research skill (সেকশন ৮) একটা পেজ না, একটা অভ্যাস হিসেবে ধরো** — বাকি সব সেকশন শেষ হবার দরকার নেই, এখন থেকেই সপ্তাহে ১টা arxiv পেপার পড়া শুরু করো (abstract→figures→method→results অর্ডারে)। DL/NLP/LLM যেটা পড়ছ, সেই টপিকেরই একটা পেপার পড়লে দুটো একসাথে রিইনফোর্স হয়।

---

## Khan Academy — কোথায় ব্যবহার করবে ও কিভাবে এক্সারসাইজ করবে

Khan Academy ML-স্পেসিফিক কিছুর জন্য না, বরং একদম বেসিক গণিতের ফাউন্ডেশন মজবুত করার জন্য সবচেয়ে ভালো — বিশেষ করে ধাপে ধাপে exercise-সহ প্র্যাকটিস করতে চাইলে।

### কোন টপিকে ব্যবহার করবে
- **Linear Algebra** — 3Blue1Brown ইন্টুইশন দেয়, Khan Academy হাতে-কলমে matrix multiplication/eigenvalue বসে বসে সমাধান করার প্র্যাকটিস দেয়। দুটো পরিপূরক।
- **Calculus** — এখানে সবচেয়ে ভালো ফিট। Derivatives, chain rule, partial derivatives-এর বেসিক দুর্বল থাকলে "Differential Calculus" আর "Multivariable Calculus" কোর্স ধাপে ধাপে exercise-সহ শেখায়।
- **Probability & Statistics** — random variables, distributions, expectation/variance-এর গোড়ার ধারণা পরিষ্কার করার জন্য ভালো, তারপর StatQuest দিয়ে ML-কনটেক্সটে অ্যাপ্লাই করা যায়।
- **Discrete Math** — সীমিত কভারেজ (কিছু combinatorics/probability অংশ), গ্রাফ থিওরি নেই — এই টপিকের জন্য MIT OCW 6.042J ব্যবহার করাই ভালো।
- **কাজে দেবে না:** Optimization, Information Theory (ML-স্পেসিফিক কনটেক্সট দরকার), এবং সেকশন ২-৮ (CS, Classical ML, Deep Learning, NLP, LLM, Infra, Research)।

### এক্সারসাইজ কোথায় ও কিভাবে করবে
1. **অ্যাকাউন্ট বানাও** — khanacademy.org-এ ইমেইল/গুগল দিয়ে "Learner" হিসেবে সাইন আপ (সম্পূর্ণ ফ্রি)।
2. **কোর্স খুঁজো** — সার্চ বারে "Precalculus", "Differential Calculus", "Multivariable Calculus", বা "AP Statistics" লিখে সার্চ করো।
3. **ভিডিও দেখে সাথে সাথেই Practice করো** — প্রতিটা টপিকের নিচে ৫-১৫ মিনিটের ভিডিও থাকে, দেখার পরপরই "Practice" বাটনে ক্লিক করলে সেই টপিকেরই এক্সারসাইজ আসে।
4. **ইন্টারঅ্যাক্টিভ সলভ করো** — উত্তর দিলে সাথে সাথে ঠিক/ভুল বলে দেয়; ভুল হলে "Hint" বাটনে স্টেপ-বাই-স্টেপ সমাধান দেখা যায়।
5. **Mastery সিস্টেম ফলো করো** — একটা টপিকে কিছু প্রশ্ন ঠিক করলে সেটা "Familiar" থেকে "Proficient" হয়ে যায় (প্রোগ্রেস বারে দেখা যায়); পুরো ইউনিট প্রোফিসিয়েন্ট না হলেও মূল কনসেপ্ট ক্লিয়ার হলে পরের টপিকে চলে যাওয়া যায়।
6. **রেগুলার রিভিউ** — সিস্টেম নিজে থেকেই মাঝেমধ্যে পুরোনো টপিক থেকে "Review" প্রশ্ন দেখায়, এগুলো স্কিপ না করে সলভ করলে ভুলে যাওয়া কমে।
7. **ML-কনটেক্সটে অ্যাপ্লাই করো** — Khan Academy-তে একটা টপিক (যেমন derivative বা matrix multiplication) কমফোর্টেবল হয়ে গেলে NumPy দিয়ে ছোট কোড লিখে ভেরিফাই করো (যেমন হাতে ক্যালকুলেট করা derivative `numpy.gradient` বা PyTorch autograd দিয়ে চেক করা) — এতে pure math আর ML-এর মধ্যে সেতু তৈরি হয়।

**টিপ:** পুরো ইউনিট লিনিয়ারলি করার দরকার নেই — ট্র্যাকারের সাব-টপিক (যেমন "Chain rule (multivariable)", "Eigenvalues ও eigenvectors") সরাসরি সার্চ করে সেই এক্সারসাইজে চলে যাওয়া যায়।

---

## ১. গাণিতিক ভিত্তি (Mathematical Foundations)

### Linear Algebra
- **ভিডিও (মাস্ট-ওয়াচ):** [3Blue1Brown – Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — ইন্টুইশন বিল্ড করার জন্য সেরা, ১৬টা ছোট এপিসোড।
- **গভীরে যেতে:** MIT OpenCourseWare – Gilbert Strang-এর "18.06 Linear Algebra" (YouTube-এ ফ্রি, পুরো লেকচার সিরিজ)।
- **কোডিং প্র্যাকটিস:** fast.ai-এর "Computational Linear Algebra for Coders" (GitHub-এ নোটবুক আছে)।
- **রেফারেন্স বই:** Gilbert Strang – *Introduction to Linear Algebra*।

### Calculus
- **ভিডিও:** [3Blue1Brown – Essence of Calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) — একই স্টাইলে ইন্টুইটিভ।
- **মাল্টিভেরিয়েট ক্যালকুলাস (Jacobian, Hessian, gradient):** Khan Academy-এর Multivariable Calculus কোর্স।
- **ML-ফোকাসড ক্যালকুলাস:** deeplearning.ai-এর "Mathematics for Machine Learning" স্পেশালাইজেশন (Coursera, ৩টা কোর্সের একটা)।

### Probability & Statistics
- **ভিডিও:** [StatQuest with Josh Starmer](https://www.youtube.com/@statquest) — Bayes' theorem, MLE, hypothesis testing সব ছোট ছোট ক্লিয়ার ভিডিওতে ব্যাখ্যা করা।
- **কোর্স:** Harvard-এর "Statistics 110: Probability" (Joe Blitzstein, YouTube-এ ফ্রি ফুল কোর্স)।
- **বই (রেফারেন্স):** Wasserman – *All of Statistics* (advanced হলে)।

### Optimization
- **ভিডিও:** StatQuest-এর Gradient Descent সিরিজ + [Sebastian Lague বা Andrej Karpathy-এর backprop videos]।
- **ইন্টারঅ্যাক্টিভ:** distill.pub-এর "Why Momentum Really Works" আর্টিকেল — Adam/RMSprop-এর ইন্টুইশনের জন্য দুর্দান্ত।
- **প্র্যাকটিক্যাল:** Sebastian Ruder-এর ব্লগ "An overview of gradient descent optimization algorithms" (ruder.io)।

### Information Theory
- **ভিডিও:** StatQuest-এর Entropy, Cross-Entropy, KL Divergence ভিডিওগুলো।
- **আর্টিকেল:** Chris Olah-এর "Visual Information Theory" (colah.github.io) — entropy/KL divergence-এর সেরা ভিজ্যুয়াল ব্যাখ্যা।

### Discrete Math
- **কোর্স:** MIT OCW – "Mathematics for Computer Science" (6.042J)।
- **গ্রাফ থিওরি বেসিক:** freeCodeCamp-এর YouTube চ্যানেলে Graph Theory ক্র্যাশ কোর্স।

---

## ২. প্রোগ্রামিং ও CS ফাউন্ডেশন

### Python (ML-ফোকাসড)
- **কোর্স:** [freeCodeCamp – Python for Everybody (Dr. Chuck)](https://www.youtube.com/@freecodecamp) বেসিকের জন্য।
- **NumPy/Pandas:** Corey Schafer-এর YouTube সিরিজ + Kaggle-এর ফ্রি "Pandas" মাইক্রো-কোর্স (kaggle.com/learn)।
- **প্র্যাকটিস:** Kaggle Learn-এর Python কোর্স ইন্টারঅ্যাক্টিভভাবে কোড লিখে শেখায়।

### Data Structures & Algorithms
- **কোর্স:** [NeetCode.io](https://neetcode.io/) — DSA শেখা এবং প্র্যাকটিসের জন্য বর্তমানে সবচেয়ে জনপ্রিয় ফ্রি রিসোর্স।
- **ভিডিও:** Abdul Bari-এর YouTube চ্যানেল (algorithm explanation-এ ক্লাসিক)।
- **বই (ঐচ্ছিক):** *Cracking the Coding Interview* যদি ইন্টারভিউ প্রস্তুতিও লক্ষ্য হয়।

### OOP
- **ভিডিও:** Corey Schafer-এর Python OOP সিরিজ।
- **ডিজাইন প্যাটার্ন:** refactoring.guru — ভিজ্যুয়াল উদাহরণসহ পরিচিতির জন্য যথেষ্ট।

### Systems (CPU/GPU, Memory)
- **আর্টিকেল:** "What Every Programmer Should Know About Memory" (Ulrich Drepper) — গভীরে যেতে চাইলে।
- **GPU বেসিক:** NVIDIA-এর "CUDA Programming" ইন্ট্রো ভিডিও বা Karpathy-এর ব্লগ পোস্টগুলো ML ইঞ্জিনিয়ারিং প্রসঙ্গে GPU নিয়ে লেখা।
- **Linux/Shell:** MIT-এর "The Missing Semester of Your CS Education" (missing.csail.mit.edu) — শেল, গিট, টুলিং সব একসাথে।

---

## ৩. ক্লাসিক্যাল মেশিন লার্নিং

- **প্রধান কোর্স (সবচেয়ে বেশি রেকমেন্ডেড):** [Andrew Ng – Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) (Coursera, DeepLearning.AI) — Linear/Logistic Regression, bias-variance, regularization সব কভার করে, ফ্রি অডিট করা যায়।
- **ভিডিও চ্যানেল:** StatQuest — প্রতিটা অ্যালগরিদম (Decision Tree, SVM, Random Forest, XGBoost) আলাদা আলাদা ভিডিওতে সহজভাবে ব্যাখ্যা করা।
- **হাতে-কলমে কোড:** [scikit-learn অফিসিয়াল ডকুমেন্টেশন](https://scikit-learn.org/stable/) — প্রতিটা অ্যালগরিদমের সাথে example code আছে, এটা পড়েই বাস্তব প্র্যাকটিস করা যায়।
- **বই (রেফারেন্স):** Aurélien Géron – *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (সবচেয়ে প্র্যাকটিক্যাল বই এই বিষয়ে)।
- **Ensemble methods (XGBoost/LightGBM):** এগুলোর অফিসিয়াল ডকুমেন্টেশনের "Getting Started" গাইড + Kaggle-এর কম্পিটিশন নোটবুক পড়ে শেখা সবচেয়ে কার্যকর।

---

## ৪. ডিপ লার্নিং

- **প্রধান কোর্স:** [Andrew Ng – Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) (৫টা কোর্স: NN basics, hyperparameter tuning, CNN, sequence models)।
- **সবচেয়ে গুরুত্বপূর্ণ ভিডিও সিরিজ:** [Andrej Karpathy – Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ) — backpropagation থেকে GPT পর্যন্ত from-scratch কোড করে শেখায়, এই একটা প্লেলিস্ট অনেকের কাছে "গেম-চেঞ্জার"।
- **CNN-এর জন্য:** Stanford CS231n (Fei-Fei Li/Karpathy-এর লেকচার, YouTube-এ ফ্রি + cs231n.github.io-তে নোট)।
- **RNN/LSTM:** Chris Olah-এর ব্লগ পোস্ট "Understanding LSTM Networks" (colah.github.io) — এই টপিকে অনলাইনে সেরা ব্যাখ্যা হিসেবে পরিচিত।
- **PyTorch শেখার জন্য:** [PyTorch অফিসিয়াল "60 Minute Blitz" টিউটোরিয়াল](https://pytorch.org/tutorials/) + Daniel Bourke-এর "Learn PyTorch for Deep Learning" (learnpytorch.io, ফ্রি ও প্রজেক্ট-বেসড)।

---

## ৫. NLP ও Transformer ফাউন্ডেশন

- **সবচেয়ে গুরুত্বপূর্ণ একক রিসোর্স:** [Jay Alammar – "The Illustrated Transformer"](https://jalammar.github.io/illustrated-transformer/) এবং "The Illustrated GPT-2" — ভিজ্যুয়াল ডায়াগ্রাম দিয়ে attention/transformer বোঝানো, প্রায় সবাই এটা দিয়ে শুরু করে।
- **কোর্স:** Stanford CS224n – "NLP with Deep Learning" (Chris Manning, YouTube-এ ফুল লেকচার ফ্রি) — tokenization থেকে transformer আর্কিটেকচার পর্যন্ত।
- **হাতে-কলমে কোড:** Karpathy-এর Zero-to-Hero সিরিজের "Let's build GPT from scratch" ভিডিওটা — attention mechanism নিজে কোড করে শেখার সেরা উপায়।
- **অরিজিনাল পেপার:** "Attention Is All You Need" (arxiv.org) — Illustrated Transformer পড়ার পর পেপারটা লাইন বাই লাইন পড়ো।
- **পজিশনাল এনকোডিং (RoPE, ALiBi):** EleutherAI-এর ব্লগ বা "The Illustrated RoPE" ধরনের আর্টিকেল সার্চ করে পড়া ভালো — এগুলো নতুন টপিক, ব্লগ পোস্ট বেশি আপ-টু-ডেট।
- **হাতে-কলমে লাইব্রেরি:** [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) — সম্পূর্ণ ফ্রি, ইন্টারেক্টিভ, BERT/GPT আর্কিটেকচার প্র্যাকটিক্যালি ব্যবহার শেখায়।

---

## ৬. LLM-স্পেসিফিক টপিক

- **সবচেয়ে ভালো প্র্যাকটিক্যাল কোর্স:** [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course) (Transformers, fine-tuning) এবং তাদের নতুন [LLM Course](https://huggingface.co/learn) — pretraining, fine-tuning, alignment, quantization সব প্র্যাকটিক্যালি কভার করে।
- **স্কেলিং ল, প্রি-ট্রেনিং:** Karpathy-এর "Let's build GPT-2 from scratch" ভিডিও (Zero-to-Hero সিরিজেরই একটা বড় পার্ট, "nanoGPT" রিপো সহ)।
- **Fine-tuning (LoRA/QLoRA/PEFT):** Hugging Face PEFT লাইব্রেরির অফিসিয়াল ডকুমেন্টেশন ও ব্লগ; Sebastian Raschka-এর ব্লগ (sebastianraschka.com) — LoRA/QLoRA নিয়ে সবচেয়ে ক্লিয়ার প্র্যাকটিক্যাল লেখা।
- **Alignment (RLHF/DPO):** Hugging Face-এর "Illustrated RLHF" ব্লগ পোস্ট + DPO পেপার (arxiv)।
- **Quantization:** Hugging Face-এর "Making LLMs lighter with AutoGPTQ" ব্লগ পোস্ট।
- **Inference optimization (KV-cache, Flash Attention, speculative decoding):** vLLM ও Hugging Face-এর ব্লগ পোস্ট, এবং Flash Attention-এর অরিজিনাল পেপার/ব্লগ (Tri Dao-এর সাইট)।
- **RAG:** [DeepLearning.AI-এর "LangChain: Chat with Your Data"](https://www.deeplearning.ai/short-courses/) শর্ট কোর্স + Pinecone-এর "Learn" সেকশন (pinecone.io/learn) — chunking, embedding, hybrid search প্র্যাকটিক্যালি ব্যাখ্যা করা।
- **Evaluation:** Hugging Face-এর "Evaluate" লাইব্রেরি ডকুমেন্টেশন + lmsys-এর "Chatbot Arena" ব্লগ (LLM-as-judge কনসেপ্টের জন্য)।
- **Safety:** Anthropic ও OpenAI-এর নিজস্ব রিসার্চ ব্লগ পোস্ট (prompt injection, hallucination নিয়ে)।

---

## ৭. ইনফ্রাস্ট্রাকচার ও ইঞ্জিনিয়ারিং

- **ডিস্ট্রিবিউটেড ট্রেনিং:** Hugging Face-এর "Efficient Training on Multiple GPUs" ডকুমেন্টেশন পেজ — data/model/pipeline parallelism ও ZeRO স্টেজ প্র্যাকটিক্যালি ব্যাখ্যা করা।
- **Mixed precision:** PyTorch অফিসিয়াল "Automatic Mixed Precision" টিউটোরিয়াল।
- **Vector DB:** Pinecone-এর "Learn" সেকশন + FAISS-এর অফিসিয়াল উইকি (FAISS GitHub) — HNSW/IVF ইনডেক্সিং নিয়ে হাতে-কলমে।
- **MLOps:** Weights & Biases (wandb.ai)-এর ফ্রি "MLOps" কোর্স (কোর্স নাম: "Effective MLOps")।
- **Model serving:** vLLM-এর অফিসিয়াল ডকুমেন্টেশন + Hugging Face TGI (Text Generation Inference) গিটহাব রিডমি।

এই সেকশনটা মূলত **করে শেখার** জায়গা — একটা ছোট মডেল নিজে multi-GPU-তে ফাইন-টিউন করে দেখলে সবচেয়ে বেশি শেখা যায়, শুধু পড়ে না।

---

## ৮. গবেষণা স্কিল

- **পেপার পড়ার কৌশল:** Andrew Ng-এর ভিডিও "How to Read Research Papers" (YouTube) — abstract → figures → method → results অর্ডারে পড়ার টেকনিক নিজেই শেখান।
- **পেপার খোঁজা:** [arxiv.org](https://arxiv.org) (cs.CL, cs.LG ক্যাটাগরি) + [Papers With Code](https://paperswithcode.com) — কোড-সহ পেপার খুঁজতে সেরা।
- **Reproducibility প্র্যাকটিস:** Papers With Code-এর "Reproducibility Checklist" পড়া এবং ছোট পেপার নিজে রিইমপ্লিমেন্ট করার চেষ্টা করা।
- **Research writing:** "The Craft of Research" বইয়ের রিলেভেন্ট চ্যাপ্টার বা Google-এর "Technical Writing" ফ্রি কোর্স (developers.google.com/tech-writing)।
- **কমিউনিটি:** NeurIPS/ICML/ACL-এর ওপেন-এক্সেস প্রসিডিংস পড়া, Twitter/X-এ AI researcher-দের ফলো করা (আপডেট থাকার সবচেয়ে বাস্তব উপায়)।

---

## deeplearning.ai — কোন কোর্স/শর্ট কোর্স দেখা যায়

deeplearning.ai-তে দুই ধরনের কনটেন্ট আছে — **Specializations** (গভীর, মাল্টি-কোর্স, ঘন্টার হিসেবে অনেক বড়) আর **Short Courses** (১-২ ঘন্টার ফ্রি, স্পেসিফিক টপিক)।

### Specializations (গভীর, ফাউন্ডেশনাল)
- **Mathematics for Machine Learning and Data Science** — calculus, linear algebra, probability, statistics (সেকশন ১-এর সাথে সরাসরি মেলে)
- **Machine Learning Specialization** (Andrew Ng, Stanford Online) — সেকশন ৩
- **Deep Learning Specialization** — CNN, RNN, LSTM, Transformer বেসিক — সেকশন ৪-৫

### Short Courses — LLM/Transformer সেকশনের জন্য
- **Attention in Transformers: Concepts and Code in PyTorch** — StatQuest-এর Josh Starmer নিজেই শেখান, attention mechanism হাতে-কলমে PyTorch-এ কোড করে (সেকশন ৫-এর attention টপিকের জন্য একদম পারফেক্ট ফিট)
- **Transformers in Practice** — model behavior বোঝা, debug করা, deployment decision
- **Build and Train an LLM with JAX** — ২০M প্যারামিটারের একটা LLM নিজে স্ক্র্যাচ থেকে ট্রেইন করা (সেকশন ৬-এর pretraining টপিকের জন্য চমৎকার প্র্যাকটিক্যাল)
- **Post-training of LLMs** (University of Washington + NexusFlow) — SFT, DPO, RL দিয়ে alignment (সেকশন ৬-এর alignment সাব-টপিকের সাথে সরাসরি ম্যাচ)
- **Fine-tuning & RL for LLMs: Intro to Post-training** (AMD) — আরেকটা fine-tuning/RL-ফোকাসড কোর্স
- **Retrieval Augmented Generation (RAG)** (Zain Hasan, ৫ মডিউল) — architecture থেকে deployment/evaluation পর্যন্ত (সেকশন ৬-এর RAG টপিক)
- **Fast & Efficient LLM Inference with vLLM** — vLLM দিয়ে deploy/benchmark (সেকশন ৬-এর inference optimization)
- **Embedding Models: from Architecture to Implementation** — embedding মডেল বানানো, semantic retrieval

### অন্যান্য (ট্র্যাকারের বাইরে কিন্তু কাজের)
- **MCP: Build Rich-Context AI Apps with Anthropic** — Model Context Protocol
- **Agentic AI** (Andrew Ng) — multi-step agent সিস্টেম
- এগুলো ট্র্যাকারে নেই, কিন্তু বর্তমান LLM ইকোসিস্টেমে (Agents, MCP) খুব রিলেভেন্ট

**নোট:** short course গুলো learn.deeplearning.ai-তে সম্পূর্ণ ফ্রি। Specialization গুলো Coursera-তে, audit মোডে ফ্রি দেখা যায়, শুধু certificate পেইড।

---

## RAG প্রজেক্টের জন্য কী কী জানতে হবে

RAG প্রজেক্টে কাজ করার জন্য ৬টা মূল জ্ঞান-এলাকা, প্রতিটার সাথে নির্দিষ্ট রিসোর্স:

### ১. কোর RAG আর্কিটেকচার (ফাউন্ডেশন)
retriever, vector DB, chunking, generation pipeline — এগুলো পরিষ্কার সাব কিছুর বেস।
- deeplearning.ai — "Retrieval Augmented Generation (RAG)" (Zain Hasan, ৫ মডিউল: keyword+semantic+hybrid search, vector DB scaling, chunking/query parsing/reranking, LLM+hallucination+agentic, evaluation)
- deeplearning.ai — "Building and Evaluating Advanced RAG" (sentence-window retrieval, auto-merging retrieval, RAG triad evaluation)
- Pinecone Learn (pinecone.io/learn) — চাংকিং, hybrid search নিয়ে প্র্যাকটিক্যাল আর্টিকেল

### ২. Chunking strategies (retrieval-miss সমস্যার সরাসরি কারণ হতে পারে)
- deeplearning.ai RAG কোর্সের মডিউল ৩ (chunking, query parsing, reranking) সরাসরি প্রাসঙ্গিক
- Pinecone-এর "Chunking Strategies for LLM Applications" আর্টিকেল
- LlamaIndex ডকুমেন্টেশনের "Node Parsers/Text Splitters" সেকশন — sentence-window vs semantic chunking তুলনা

### ৩. Multilingual/Bengali embeddings ও cross-lingual retrieval
- BGE-M3 পেপার/মডেল কার্ড (Hugging Face) — dense+sparse+multi-vector, ১০০+ ভাষা
- arxiv পেপার: "Cost-Efficient Cross-Lingual RAG for Low-Resource Languages: A Case Study in Bengali Agricultural Advisory" (২০২৬) — এক্সাক্ট প্রবলেম ডোমেইনের কেস স্টাডি, translation-centric আর্কিটেকচার ব্যাখ্যা করে
- Banglish-এর জন্য বিশেষভাবে: query normalization/transliteration আর query rewriting নিয়ে আর্টিকেল খোঁজো (romanized Bengali → Bengali script conversion)

### ৪. Hybrid Search (dense + BM25/sparse)
Banglish query dense embedding-এ miss হলে keyword-based sparse search অনেক সময় catch করতে পারে।
- deeplearning.ai RAG কোর্স মডিউল ২ (keyword search TF-IDF/BM25, semantic search, hybrid pipeline বিল্ড+ইভ্যালুয়েট)
- BGE-M3-এর sparse retrieval head ব্যবহার করা যায় — FlagEmbedding লাইব্রেরির ডকুমেন্টেশন দেখো

### ৫. Reranking
top_k আর কোনো reranker না থাকলে প্রথম রিট্রিভালেই ভুল হলে সরাসরি জেনারেশনে চলে যায়।
- bge-reranker-v2-m3 — কীভাবে pipeline-এ বসাতে হয় তার জন্য Hugging Face মডেল কার্ড
- deeplearning.ai RAG কোর্স মডিউল ৩-এ reranking কভার আছে

### ৬. Evaluation (RAGAS / RAG Triad)
"agent বলে not in database কিন্তু sources দেখায়" — এই ধরনের bug সিস্টেমেটিকভাবে ধরার জন্য evaluation framework দরকার।
- RAGAS ডকুমেন্টেশন (docs.ragas.io) — Context Precision/Recall, Faithfulness, Answer Relevancy মেট্রিক
- deeplearning.ai "Building and Evaluating Advanced RAG" — RAG triad: Context Relevance, Groundedness, Answer Relevance

**অগ্রাধিকার:** Chunking → Hybrid Search → Reranking → Evaluation — এই অর্ডারে গেলে সবচেয়ে দ্রুত রেজাল্ট পাওয়া যাবে।

---

## সংক্ষেপে — কোন ৩টা রিসোর্স সবচেয়ে বেশি গুরুত্বপূর্ণ

যদি সময় কম থাকে আর মাত্র কয়েকটা রিসোর্স বেছে নিতে হয়, এই তিনটা সবচেয়ে বেশি ভ্যালু দেবে:

1. **Andrej Karpathy – Neural Networks: Zero to Hero** (backprop থেকে GPT পর্যন্ত, from scratch কোড)
2. **StatQuest with Josh Starmer** (Math + Classical ML-এর ইন্টুইশনের জন্য)
3. **Hugging Face NLP/LLM Course** (মডার্ন LLM ইকোসিস্টেমে হাতে-কলমে কাজ করার জন্য)

এই তিনটা মিলিয়ে সেকশন ১, ৪, ৫, ৬-এর প্রায় ৭০% কভার হয়ে যায়।
