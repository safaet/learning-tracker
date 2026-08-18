export const DATA = [
  { id: 'math', title: '১. গাণিতিক ভিত্তি', topics: [
    { id: 'linalg', title: 'Linear Algebra', subs: [
      'Scalars, vectors, matrices, tensors',
      'Matrix addition, multiplication, transpose, inverse',
      'Dot product, cross product, norms (L1, L2, Frobenius)',
      'Vector spaces, span, basis, linear independence',
      'Rank, null space, column space',
      'Eigenvalues ও eigenvectors, eigendecomposition',
      'Singular Value Decomposition (SVD)',
      'Orthogonality, orthonormal vectors, projections',
      'Positive definite matrices',
      'Matrix calculus'
    ]},
    { id: 'calculus', title: 'Calculus', subs: [
      'Limits, continuity',
      'Derivatives, partial derivatives',
      'Chain rule (multivariable)',
      'Gradient, directional derivative',
      'Jacobian matrix, Hessian matrix',
      'Taylor series expansion',
      'Convex vs non-convex functions',
      'Lagrange multipliers'
    ]},
    { id: 'probstat', title: 'Probability & Statistics', subs: [
      'Random variables (discrete, continuous)',
      'Distributions: Bernoulli, Binomial, Gaussian, Poisson, Categorical, Multinomial',
      'Joint, marginal, conditional probability',
      "Bayes' theorem",
      'Expectation, variance, covariance, correlation',
      'Independence, conditional independence',
      'Maximum Likelihood Estimation (MLE)',
      'Maximum A Posteriori (MAP)',
      'Central Limit Theorem',
      'Hypothesis testing, p-values, confidence intervals',
      'Markov chains (বেসিক)'
    ]},
    { id: 'opt', title: 'Optimization', subs: [
      'Gradient Descent (batch, mini-batch, stochastic)',
      'Momentum, Nesterov Accelerated Gradient',
      'Adagrad, RMSprop, Adam, AdamW',
      'Learning rate scheduling (step decay, cosine, warmup)',
      'Convexity, local vs global minima, saddle points',
      'Regularization (L1/Lasso, L2/Ridge)',
      'Constrained optimization বেসিক'
    ]},
    { id: 'infotheory', title: 'Information Theory', subs: [
      'Entropy, joint entropy, conditional entropy',
      'Cross-entropy',
      'KL Divergence, JS Divergence',
      'Mutual information',
      'Perplexity'
    ]},
    { id: 'discrete', title: 'Discrete Math', subs: [
      'Set theory বেসিক',
      'Combinatorics (permutations, combinations)',
      'Graph theory: nodes, edges, trees, DAGs',
      'Big-O notation, algorithmic complexity'
    ]}
  ]},
  { id: 'cs', title: '২. প্রোগ্রামিং ও CS ফাউন্ডেশন', topics: [
    { id: 'python', title: 'Python', subs: [
      'Core syntax, data structures (list, dict, set, tuple)',
      'NumPy: arrays, broadcasting, vectorized operations',
      'Pandas: DataFrames, data manipulation',
      'Generators, decorators, context managers',
      'Multiprocessing/multithreading বেসিক'
    ]},
    { id: 'dsa', title: 'Data Structures & Algorithms', subs: [
      'Arrays, linked lists, stacks, queues',
      'Trees (binary trees, BST), graphs',
      'Hash tables',
      'Sorting (merge sort, quick sort), binary search',
      'Dynamic programming বেসিক',
      'Recursion'
    ]},
    { id: 'oop', title: 'OOP', subs: [
      'Classes, inheritance, polymorphism, encapsulation',
      'Design patterns (বেসিক পরিচিতি)'
    ]},
    { id: 'systems', title: 'Systems', subs: [
      'CPU vs GPU architecture',
      'Memory hierarchy (RAM, cache, VRAM)',
      'Parallel computing (SIMD, threads, processes)',
      'বেসিক Linux/shell কমান্ড'
    ]}
  ]},
  { id: 'classic-ml', title: '৩. ক্লাসিক্যাল মেশিন লার্নিং', topics: [
    { id: 'supervised', title: 'Supervised Learning', subs: [
      'Linear Regression (closed-form, gradient descent)',
      'Logistic Regression, decision boundary',
      'Decision Trees (Gini, entropy, information gain)',
      'Support Vector Machines (kernels, margin)',
      'k-Nearest Neighbors',
      'Naive Bayes'
    ]},
    { id: 'unsupervised', title: 'Unsupervised Learning', subs: [
      'k-Means clustering',
      'Hierarchical clustering',
      'PCA (dimensionality reduction)',
      't-SNE, UMAP',
      'Gaussian Mixture Models'
    ]},
    { id: 'modeleval', title: 'Model Evaluation & Theory', subs: [
      'Bias-variance tradeoff',
      'Overfitting, underfitting',
      'Train/validation/test split, cross-validation',
      'Confusion matrix, precision, recall, F1-score',
      'ROC curve, AUC',
      'Regularization (L1, L2, elastic net)'
    ]},
    { id: 'ensemble', title: 'Ensemble Methods', subs: [
      'Bagging, Random Forest',
      'Boosting (AdaBoost, Gradient Boosting)',
      'XGBoost, LightGBM'
    ]}
  ]},
  { id: 'dl', title: '৪. ডিপ লার্নিং', topics: [
    { id: 'nnbasics', title: 'Neural Network Basics', subs: [
      'Perceptron, multi-layer perceptron',
      'Activation functions: Sigmoid, Tanh, ReLU, Leaky ReLU, GELU, SiLU/Swish',
      'Forward propagation'
    ]},
    { id: 'backprop', title: 'Backpropagation', subs: [
      'Computational graphs',
      'Chain rule application',
      'Vanishing/exploding gradients',
      'Gradient clipping'
    ]},
    { id: 'cnn', title: 'CNN', subs: [
      'Convolution operation, filters/kernels',
      'Pooling (max, average)',
      'Padding, stride',
      'Classic architectures: LeNet, AlexNet, ResNet (concept)'
    ]},
    { id: 'rnn', title: 'RNN / LSTM / GRU', subs: [
      'Sequential data processing',
      'Vanishing gradient problem in RNNs',
      'LSTM gates (forget, input, output)',
      'GRU (simplified LSTM)',
      'Transformer কী সমস্যা সমাধান করেছে তা বোঝা'
    ]},
    { id: 'regtrain', title: 'Regularization & Training Techniques', subs: [
      'Dropout',
      'Batch Normalization, Layer Normalization',
      'Weight initialization (Xavier, He)',
      'Early stopping',
      'Data augmentation'
    ]},
    { id: 'pytorch', title: 'PyTorch', subs: [
      'Tensors, autograd',
      '`nn.Module`, training loop',
      'Custom datasets, dataloaders'
    ]}
  ]},
  { id: 'nlp', title: '৫. NLP ও Transformer ফাউন্ডেশন', topics: [
    { id: 'tokenization', title: 'Tokenization', subs: [
      'Word-level vs subword-level tokenization',
      'Byte Pair Encoding (BPE)',
      'WordPiece, SentencePiece',
      'Vocabulary size tradeoffs'
    ]},
    { id: 'embeddings', title: 'Embeddings', subs: [
      'One-hot encoding সীমাবদ্ধতা',
      'Word2Vec (CBOW, Skip-gram)',
      'GloVe',
      'Contextual embeddings (ELMo concept)'
    ]},
    { id: 'attention', title: 'Attention Mechanism', subs: [
      'Why attention (RNN bottleneck সমস্যা)',
      'Query, Key, Value vectors',
      'Scaled dot-product attention',
      'Self-attention vs cross-attention',
      'Multi-head attention'
    ]},
    { id: 'transformer', title: 'Transformer Architecture', subs: [
      'Encoder block, decoder block',
      'Feed-forward layers',
      'Residual connections',
      'Layer norm placement (pre-norm vs post-norm)',
      '"Attention is All You Need" পেপার লাইন বাই লাইন'
    ]},
    { id: 'posenc', title: 'Positional Encoding', subs: [
      'Sinusoidal positional encoding',
      'Learned positional embeddings',
      'RoPE (Rotary Positional Embedding)',
      'ALiBi'
    ]},
    { id: 'archs', title: 'Model Architectures', subs: [
      'Encoder-only (BERT) — masked LM, classification',
      'Decoder-only (GPT) — causal LM, generation',
      'Encoder-Decoder (T5) — seq2seq'
    ]}
  ]},
  { id: 'llm', title: '৬. LLM-স্পেসিফিক টপিক', topics: [
    { id: 'pretraining', title: 'Pretraining', subs: [
      'Causal language modeling objective',
      'Masked language modeling objective',
      'Data curation, deduplication, filtering',
      'Tokenizer training on corpus'
    ]},
    { id: 'scaling', title: 'Scaling Laws', subs: [
      'Kaplan et al. scaling laws',
      'Chinchilla scaling laws (compute-optimal)',
      'Parameter count vs data size tradeoffs'
    ]},
    { id: 'finetuning', title: 'Fine-tuning', subs: [
      'Full fine-tuning',
      'LoRA (Low-Rank Adaptation)',
      'QLoRA (quantized LoRA)',
      'PEFT — Adapters, Prefix tuning'
    ]},
    { id: 'alignment', title: 'Alignment', subs: [
      'Instruction tuning (SFT)',
      'RLHF (reward model + PPO)',
      'DPO (Direct Preference Optimization)',
      'Constitutional AI concept'
    ]},
    { id: 'quant', title: 'Quantization', subs: [
      'INT8, INT4 quantization',
      'GPTQ, AWQ',
      'Post-training vs quantization-aware training'
    ]},
    { id: 'inference', title: 'Inference Optimization', subs: [
      'KV-cache',
      'Speculative decoding',
      'Continuous batching',
      'Flash Attention'
    ]},
    { id: 'rag', title: 'RAG', subs: [
      'Chunking strategies',
      'Embedding models for retrieval',
      'Vector similarity search (cosine, dot product)',
      'Retrieval + generation pipeline',
      'Re-ranking',
      'Hybrid search (dense + sparse/BM25)'
    ]},
    { id: 'evaluation', title: 'Evaluation', subs: [
      'Perplexity',
      'BLEU, ROUGE',
      'Benchmark suites: MMLU, HellaSwag, TruthfulQA',
      'Human evaluation methodologies',
      'LLM-as-judge'
    ]},
    { id: 'safety', title: 'Safety', subs: [
      'Hallucination causes ও mitigation',
      'Prompt injection',
      'Bias in models'
    ]}
  ]},
  { id: 'infra', title: '৭. ইনফ্রাস্ট্রাকচার ও ইঞ্জিনিয়ারিং', topics: [
    { id: 'disttrain', title: 'Distributed Training', subs: [
      'Data parallelism',
      'Model parallelism, tensor parallelism',
      'Pipeline parallelism',
      'ZeRO (DeepSpeed) stages'
    ]},
    { id: 'precision', title: 'Precision & Efficiency', subs: [
      'FP32, FP16, BF16 mixed precision',
      'Gradient accumulation',
      'Gradient checkpointing'
    ]},
    { id: 'hardware', title: 'Hardware', subs: [
      'GPU architecture (CUDA cores, tensor cores, VRAM)',
      'Multi-GPU communication (NCCL concept)'
    ]},
    { id: 'vectordb', title: 'Vector Databases', subs: [
      'FAISS, Pinecone, Weaviate, Milvus',
      'Indexing methods (HNSW, IVF)'
    ]},
    { id: 'mlops', title: 'MLOps', subs: [
      'Experiment tracking (W&B, MLflow)',
      'Model versioning',
      'Model serving (vLLM, TGI concept)'
    ]}
  ]},
  { id: 'research', title: '৮. গবেষণা স্কিল', topics: [
    { id: 'research-skills', title: 'Research Practice', subs: [
      'পেপার পড়ার কৌশল (abstract → figures → method → results)',
      'arXiv, Papers With Code ব্যবহার',
      'Reproducibility — কোড থেকে রেজাল্ট রিপ্রোডিউস করা',
      'Ablation study ডিজাইন করা',
      'Baseline তুলনা',
      'Research writing — clarity, structure',
      'Community involvement (NeurIPS, ICML, ACL)'
    ]}
  ]}
];
