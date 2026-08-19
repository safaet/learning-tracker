// Sourced from docs/learning-resources.md, section "RAG প্রজেক্টের জন্য কী কী জানতে হবে".
// Same shape as data.js's DATA (array of {id, title, topics}) so progress.js works unmodified —
// here it's a single section whose 6 topics are the 6 knowledge-area subsections from the doc.

export const RAG_INTRO = 'RAG প্রজেক্টে কাজ করার জন্য ৬টা মূল জ্ঞান-এলাকা, প্রতিটার সাথে নির্দিষ্ট রিসোর্স:';

export const priorityNote = 'Chunking → Hybrid Search → Reranking → Evaluation — এই অর্ডারে গেলে সবচেয়ে দ্রুত রেজাল্ট পাওয়া যাবে।';

export const RAG_DATA = [
  {
    id: 'rag-project',
    title: '৬টি মূল জ্ঞান-এলাকা',
    topics: [
      {
        id: 'core-arch',
        title: '১. কোর RAG আর্কিটেকচার (ফাউন্ডেশন)',
        note: 'retriever, vector DB, chunking, generation pipeline — এগুলো পরিষ্কার সাব কিছুর বেস।',
        subs: [
          'deeplearning.ai — "Retrieval Augmented Generation (RAG)" (Zain Hasan, ৫ মডিউল: keyword+semantic+hybrid search, vector DB scaling, chunking/query parsing/reranking, LLM+hallucination+agentic, evaluation)',
          'deeplearning.ai — "Building and Evaluating Advanced RAG" (sentence-window retrieval, auto-merging retrieval, RAG triad evaluation)',
          'Pinecone Learn (pinecone.io/learn) — চাংকিং, hybrid search নিয়ে প্র্যাকটিক্যাল আর্টিকেল',
        ],
        resources: [
          { text: 'deeplearning.ai — Retrieval Augmented Generation (RAG)', url: 'https://www.deeplearning.ai/short-courses/' },
          { text: 'deeplearning.ai — Building and Evaluating Advanced RAG', url: 'https://www.deeplearning.ai/short-courses/' },
          { text: 'Pinecone Learn', url: 'https://www.pinecone.io/learn/' },
        ],
      },
      {
        id: 'chunking',
        title: '২. Chunking Strategies',
        note: 'retrieval-miss সমস্যার সরাসরি কারণ হতে পারে।',
        subs: [
          'deeplearning.ai RAG কোর্সের মডিউল ৩ (chunking, query parsing, reranking) সরাসরি প্রাসঙ্গিক',
          'Pinecone-এর "Chunking Strategies for LLM Applications" আর্টিকেল',
          'LlamaIndex ডকুমেন্টেশনের "Node Parsers/Text Splitters" সেকশন — sentence-window vs semantic chunking তুলনা',
        ],
        resources: [
          { text: 'deeplearning.ai RAG কোর্স (মডিউল ৩: chunking, query parsing, reranking)', url: 'https://www.deeplearning.ai/short-courses/' },
          { text: 'Pinecone — Chunking Strategies for LLM Applications', url: 'https://www.pinecone.io/learn/' },
          { text: 'LlamaIndex ডকুমেন্টেশন', url: 'https://docs.llamaindex.ai/' },
        ],
      },
      {
        id: 'multilingual',
        title: '৩. Multilingual/Bengali Embeddings ও Cross-lingual Retrieval',
        subs: [
          'BGE-M3 পেপার/মডেল কার্ড (Hugging Face) — dense+sparse+multi-vector, ১০০+ ভাষা',
          'arxiv পেপার: "Cost-Efficient Cross-Lingual RAG for Low-Resource Languages: A Case Study in Bengali Agricultural Advisory" (২০২৬) — এক্সাক্ট প্রবলেম ডোমেইনের কেস স্টাডি, translation-centric আর্কিটেকচার ব্যাখ্যা করে',
          'Banglish-এর জন্য বিশেষভাবে: query normalization/transliteration আর query rewriting নিয়ে আর্টিকেল খোঁজো (romanized Bengali → Bengali script conversion)',
        ],
        resources: [
          { text: 'BGE-M3 — মডেল কার্ড (Hugging Face)', url: 'https://huggingface.co/BAAI/bge-m3' },
        ],
      },
      {
        id: 'hybrid-search',
        title: '৪. Hybrid Search (Dense + BM25/Sparse)',
        note: 'Banglish query dense embedding-এ miss হলে keyword-based sparse search অনেক সময় catch করতে পারে।',
        subs: [
          'deeplearning.ai RAG কোর্স মডিউল ২ (keyword search TF-IDF/BM25, semantic search, hybrid pipeline বিল্ড+ইভ্যালুয়েট)',
          'BGE-M3-এর sparse retrieval head ব্যবহার করা যায় — FlagEmbedding লাইব্রেরির ডকুমেন্টেশন দেখো',
        ],
        resources: [
          { text: 'deeplearning.ai RAG কোর্স (মডিউল ২: keyword + semantic + hybrid search)', url: 'https://www.deeplearning.ai/short-courses/' },
          { text: 'FlagEmbedding লাইব্রেরি ডকুমেন্টেশন', url: 'https://github.com/FlagOpen/FlagEmbedding' },
        ],
      },
      {
        id: 'reranking',
        title: '৫. Reranking',
        note: 'top_k আর কোনো reranker না থাকলে প্রথম রিট্রিভালেই ভুল হলে সরাসরি জেনারেশনে চলে যায়।',
        subs: [
          'bge-reranker-v2-m3 — কীভাবে pipeline-এ বসাতে হয় তার জন্য Hugging Face মডেল কার্ড',
          'deeplearning.ai RAG কোর্স মডিউল ৩-এ reranking কভার আছে',
        ],
        resources: [
          { text: 'bge-reranker-v2-m3 — মডেল কার্ড (Hugging Face)', url: 'https://huggingface.co/BAAI/bge-reranker-v2-m3' },
          { text: 'deeplearning.ai RAG কোর্স (মডিউল ৩: reranking)', url: 'https://www.deeplearning.ai/short-courses/' },
        ],
      },
      {
        id: 'evaluation',
        title: '৬. Evaluation (RAGAS / RAG Triad)',
        note: '"agent বলে not in database কিন্তু sources দেখায়" — এই ধরনের bug সিস্টেমেটিকভাবে ধরার জন্য evaluation framework দরকার।',
        subs: [
          'RAGAS ডকুমেন্টেশন (docs.ragas.io) — Context Precision/Recall, Faithfulness, Answer Relevancy মেট্রিক',
          'deeplearning.ai "Building and Evaluating Advanced RAG" — RAG triad: Context Relevance, Groundedness, Answer Relevance',
        ],
        resources: [
          { text: 'RAGAS ডকুমেন্টেশন', url: 'https://docs.ragas.io' },
          { text: 'deeplearning.ai — Building and Evaluating Advanced RAG', url: 'https://www.deeplearning.ai/short-courses/' },
        ],
      },
    ],
  },
];
