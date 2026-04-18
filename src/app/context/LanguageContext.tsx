"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "id" | "en" | "ja" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ──────────────────────────────────────────
// Translation dictionaries
// ──────────────────────────────────────────
const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "nav.getInTouch": "Hubungi Saya",

    // Hero
    "hero.available": "TERSEDIA UNTUK KERJA",
    "hero.heading1": "MEMBANGUN MASA DEPAN",
    "hero.heading2": "DENGAN",
    "hero.headingHighlight": "KODE",
    "hero.role": "Mahasiswa Informatika",
    "hero.roleSeparator": "|",
    "hero.roleTitle": "Junior Web Developer",
    "hero.subtitle": "Saya membangun aplikasi web modern dengan fokus pada pengembangan yang bersih dan skalabel.",
    "hero.university": "Universitas Negeri Surabaya",
    "hero.viewWork": "Lihat Proyek",
    "hero.viewCV": "Lihat CV",
    "hero.contact": "Hubungi Saya",
    "hero.scroll": "GULIR",

    // About
    "about.label": "01 — TENTANG",
    "about.heading": "TENTANG SAYA",
    "about.p1": "Perkenalkan, saya mahasiswa dari Universitas Negeri Surabaya yang memiliki minat dan semangat tinggi di bidang pengembangan web modern.",
    "about.p2": "Sebagai seorang junior web developer, saya senang bekerja dengan teknologi terkini untuk membangun aplikasi web yang rapi, efisien, dan berkualitas. Saya selalu mengutamakan kualitas kode dan performa di setiap proyek yang saya kerjakan.",
    "about.p3": "Saya terus belajar dan mengembangkan keahlian di bidang pengembangan web, serta terbuka untuk berkolaborasi dalam proyek-proyek yang bermanfaat.",
    "about.yearsExp": "Tahun Pengalaman",
    "about.projectsDone": "Proyek Selesai",

    // Projects
    "projects.label": "02 — KARYA",
    "projects.heading": "PROYEK",
    "projects.viewAll": "Lihat Semua Proyek",

    // Contact
    "contact.label": "03 — KONTAK",
    "contact.heading1": "MARI BEKERJA",
    "contact.heading2": "BERSAMA",
    "contact.description": "Tertarik untuk berdiskusi atau berkolaborasi? Saya senang mendengar ide-ide baru dan terbuka untuk peluang kerja sama.",
    "contact.connect": "MARI TERHUBUNG",
    "contact.followMe": "IKUTI SAYA",
    "contact.name": "Nama",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.namePlaceholder": "Nama Anda",
    "contact.emailPlaceholder": "email@anda.com",
    "contact.messagePlaceholder": "Ceritakan tentang proyek Anda...",
    "contact.send": "Kirim Pesan",

    // Footer
    "footer.rights": "Hak cipta dilindungi.",
  },
  en: {
    // Navbar
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",

    // Hero
    "hero.available": "AVAILABLE FOR WORK",
    "hero.heading1": "BUILDING THE FUTURE",
    "hero.heading2": "WITH",
    "hero.headingHighlight": "CODE",
    "hero.role": "Informatics Student",
    "hero.roleSeparator": "|",
    "hero.roleTitle": "Junior Web Developer",
    "hero.subtitle": "I build modern web applications with a strong focus on clean, scalable development.",
    "hero.university": "Surabaya State University",
    "hero.viewWork": "View My Work",
    "hero.viewCV": "View CV",
    "hero.contact": "Get in Touch",
    "hero.scroll": "SCROLL",

    // About
    "about.label": "01 — ABOUT",
    "about.heading": "ABOUT ME",
    "about.p1": "I am a student from Surabaya State University with a strong passion and focus on modern web development.",
    "about.p2": "As a junior web developer, I enjoy working with modern technologies to design clean architectures and transform complex business logic into efficient solutions. I prioritize code quality, maintainability, and performance in every project I work on.",
    "about.p3": "I am continuously improving my web development expertise and open to collaborating on impactful web projects and real-world applications.",
    "about.yearsExp": "Years Experience",
    "about.projectsDone": "Projects Done",

    // Projects
    "projects.label": "02 — WORK",
    "projects.heading": "PROJECT",
    "projects.viewAll": "View All Projects",

    // Contact
    "contact.label": "03 — CONTACT",
    "contact.heading1": "LET'S WORK",
    "contact.heading2": "TOGETHER",
    "contact.description": "Interested in discussing or collaborating? I'd love to hear new ideas and am open to partnership opportunities.",
    "contact.connect": "LET'S CONNECT",
    "contact.followMe": "FOLLOW ME",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  ja: {
    // Navbar
    "nav.about": "自己紹介",
    "nav.projects": "プロジェクト",
    "nav.contact": "連絡先",
    "nav.getInTouch": "お問い合わせ",

    // Hero
    "hero.available": "仕事を募集中",
    "hero.heading1": "未来を構築する",
    "hero.heading2": "",
    "hero.headingHighlight": "コード",
    "hero.role": "情報学部生",
    "hero.roleSeparator": "|",
    "hero.roleTitle": "ジュニアウェブ開発者",
    "hero.subtitle": "クリーンでスケーラブルな開発に重点を置いた、モダンなWebアプリケーションを構築しています。",
    "hero.university": "スラバヤ州立大学",
    "hero.viewWork": "作品を見る",
    "hero.viewCV": "履歴書を見る",
    "hero.contact": "お問い合わせ",
    "hero.scroll": "スクロール",

    // About
    "about.label": "01 — 自己紹介",
    "about.heading": "私について",
    "about.p1": "スラバヤ州立大学の学生で、モダンなWeb開発に強い情熱と関心を持っています。",
    "about.p2": "ウェブ開発者として、モダンな技術を使ってクリーンなアーキテクチャを設計し、複雑なビジネスロジックを効率的なソリューションに変換することを楽しんでいます。",
    "about.p3": "ウェブ開発の専門知識を継続的に向上させ、インパクトのあるプロジェクトでのコラボレーションに前向きです。",
    "about.yearsExp": "年の経験",
    "about.projectsDone": "完了プロジェクト",

    // Projects
    "projects.label": "02 — 作品",
    "projects.heading": "プロジェクト",
    "projects.viewAll": "全プロジェクトを見る",

    // Contact
    "contact.label": "03 — 連絡先",
    "contact.heading1": "一緒に",
    "contact.heading2": "働きましょう",
    "contact.description": "ディスカッションやコラボレーションに興味がありますか？新しいアイデアをお聞きし、協力の機会を歓迎します。",
    "contact.connect": "つながりましょう",
    "contact.followMe": "フォローする",
    "contact.name": "名前",
    "contact.email": "メール",
    "contact.message": "メッセージ",
    "contact.namePlaceholder": "お名前",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "プロジェクトについて教えてください...",
    "contact.send": "メッセージを送信",

    // Footer
    "footer.rights": "全著作権所有。",
  },
  ar: {
    // Navbar
    "nav.about": "عني",
    "nav.projects": "المشاريع",
    "nav.contact": "اتصل",
    "nav.getInTouch": "تواصل معي",

    // Hero
    "hero.available": "متاح للعمل",
    "hero.heading1": "بناء المستقبل",
    "hero.heading2": "بـ",
    "hero.headingHighlight": "الكود",
    "hero.role": "طالب المعلوماتية",
    "hero.roleSeparator": "|",
    "hero.roleTitle": "مطور ويب مبتدئ",
    "hero.subtitle": "أبني تطبيقات ويب حديثة مع التركيز على التطوير النظيف والقابل للتوسع.",
    "hero.university": "جامعة سورابايا الحكومية",
    "hero.viewWork": "عرض أعمالي",
    "hero.viewCV": "عرض السيرة الذاتية",
    "hero.contact": "تواصل معي",
    "hero.scroll": "مرر",

    // About
    "about.label": "٠١ — عني",
    "about.heading": "من أنا",
    "about.p1": "أنا طالب من جامعة سورابايا الحكومية ولدي شغف قوي وتركيز على تطوير الويب الحديث.",
    "about.p2": "كمطور ويب، أستمتع بالعمل مع التقنيات الحديثة لتصميم معماريات نظيفة وتحويل منطق الأعمال المعقد إلى حلول فعالة.",
    "about.p3": "أعمل باستمرار على تحسين خبرتي في تطوير الويب ومنفتح على التعاون في مشاريع ويب مؤثرة.",
    "about.yearsExp": "سنوات الخبرة",
    "about.projectsDone": "مشاريع منجزة",

    // Projects
    "projects.label": "٠٢ — أعمال",
    "projects.heading": "المشاريع",
    "projects.viewAll": "عرض جميع المشاريع",

    // Contact
    "contact.label": "٠٣ — اتصل",
    "contact.heading1": "لنعمل",
    "contact.heading2": "معاً",
    "contact.description": "مهتم بالنقاش أو التعاون؟ يسعدني سماع أفكار جديدة وأنا منفتح على فرص الشراكة.",
    "contact.connect": "لنتواصل",
    "contact.followMe": "تابعني",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.namePlaceholder": "اسمك",
    "contact.emailPlaceholder": "بريدك@الإلكتروني.com",
    "contact.messagePlaceholder": "أخبرني عن مشروعك...",
    "contact.send": "إرسال الرسالة",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

export const languageNames: Record<Language, string> = {
  id: "🇮🇩 Bahasa Indonesia",
  en: "🇬🇧 English",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-lang") as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-lang", language);
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
