# AI Prompt: توليد تطبيق إدارة الإنتاجية وتتبع العادات

## الوصف الهدف

أريدك، كنموذج ذكاء اصطناعي، أن تنتج مشروعًا كاملًا لتطبيق ويب احترافي مبني باستخدام React وTailwind CSS، بدون استخدام أي frameworks أخرى (مثل Vue أو Angular)، ويشمل جميع الصفحات والمكونات التالية:

1. **صفحة Dashboard**
2. **صفحة Habits**
3. **صفحة Progress Map**
4. **صفحة Mindset**
5. **صفحة AI Assistant**

كما يجب أن تُنشئ الواجهة الأمامية بأحدث ممارسات React (Functional Components، Hooks، React Router v6). وتستخدم Tailwind CSS للتصميم فقط.

---

## المتطلبات التقنية

- **React** (إنشاء المشروع باستخدام `create-react-app` أو `Vite + React`)
- **React Router v6** للتنقل بين الصفحات
- **Tailwind CSS** للتصميم
- **Chart.js** أو **Recharts** للرسوم البيانية
- **LocalStorage** لإدارة بيانات المستخدم (لا حاجة لقاعدة بيانات خارجية)

---

## هيكلية المجلدات

```plaintext
src/
├── components/
│   ├── Navbar.jsx
│   ├── DashboardCard.jsx
│   ├── ProgressTimeline.jsx
│   ├── HabitItem.jsx
│   ├── QuoteBox.jsx
│   ├── MeditationTimer.jsx
│   └── AIChat.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Habits.jsx
│   ├── Progress.jsx
│   ├── Mindset.jsx
│   └── AI.jsx
├── App.jsx
├── index.js
└── index.css  # يحتوي @tailwind directives
```

---

## مكونات الصفحات والعناصر

- **Navbar.jsx**: شريط تنقل علوي يحتوي على روابط لصفحات التطبيق.

- **Dashboard.jsx**: عرض بطاقات ملخصة للدخلات:
  - Completed Tasks
  - Active Habits
  - Last Update

- **Habits.jsx**:
  - قائمة HabitItem لكل عادة مع اسمها ومؤشر Streak.
  - زر `Mark Done` لكل يوم.

- **Progress.jsx**:
  - مكون ProgressTimeline يعرض Timeline بالأحداث.
  - أزرار للتصفية الزمني (يومي، أسبوعي، شهري).

- **Mindset.jsx**:
  - QuoteBox لعرض اقتباس يومي.
  - MeditationTimer لإنشاء مؤقت تأمل.
  - Gratitude Journal textarea لتدوين الامتنان.

- **AI.jsx**:
  - AIChat: واجهة محادثة بسيطة تستدعي OpenAI API.
  - قائمة بالحوار والتخزين في LocalStorage.

---

## خطوات البناء

1. **إنشاء المشروع**:
   ```bash
   npx create-react-app productivity-app  # أو create-vite
   ```
2. **تثبيت الحزم**:
   ```bash
   npm install react-router-dom tailwindcss chart.js
   npx tailwindcss init -p
   ```
3. **تهيئة Tailwind** في `tailwind.config.js`:
   ```js
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: { extend: {} },
     plugins: [],
   };
   ```
4. **إضافة Tailwind** في `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. **بناء المكونات والصفحات** بحسب الهيكل أعلاه.
6. **إعداد React Router** في `App.jsx` لتعريف المسارات.
7. **تطبيق تصاميم Tailwind** على جميع المكونات.
8. **اختبار التطبيق** والتأكد من عمل التنقل والوظائف.

---

يرجى توليد كل ملف من الملفات المذكورة (`.jsx`، `.css`) بالمحتوى الأساسي المطلوب، مع تعليقات بسيطة تشرح الأجزاء الرئيسية في كل ملف.

*نهاية المطالبة*
