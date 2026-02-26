# Loan Form (React)

واجهة بسيطة لطلب قرض (Loan Request) مبنية بـ React.  
المشروع عبارة عن فورم يجمع بيانات المستخدم (الاسم/الموبايل/السن/هل موظف/شريحة الراتب) مع Modal يظهر عند الإرسال لتأكيد نجاح إرسال الطلب.

---

## Features

- Form UI بسيط وحديث (Card + Gradient Background).
- حقول:
  - Name
  - Phone Number
  - Age
  - Employee (Checkbox)
  - Salary Range (Select)
- زر Submit بيبقى Disabled لحد ما كل الحقول المطلوبة تتملي.
- Success Modal بعد الإرسال + إمكانية إغلاقه.

---

## Tech Stack

- React
- Create React App (react-scripts)
- CSS (بدون مكتبات خارجية)

---

## Getting Started

### 1) Clone
```bash
git clone https://github.com/mostafaahmed-mern/Loan-Form.git
cd Loan-Form
2) Install dependencies
npm install
3) Run
npm start

هيفتح على:

http://localhost:3000

Available Scripts

npm start تشغيل المشروع في وضع التطوير

npm test تشغيل الاختبارات

npm run build Build للإنتاج

npm run eject (غير مستحسن إلا لو محتاج تحكم كامل)

Project Structure (مختصر)
src/
  components/
    LoanForm.js
    Modal.js
    Modal.css
  loanformstylee.css
  App.js
  index.js
Notes / Behavior

عند الضغط على Submit يتم منع Refresh (preventDefault) ويظهر الـ Modal.

الضغط خارج الـ Modal يقفله، والضغط داخله لا يقفله (stopPropagation).
<img width="1377" height="868" alt="image" src="https://github.com/user-attachments/assets/7cd7468d-95a3-4ba2-9438-6cb2435f0f5c" />

<img width="1884" height="930" alt="image" src="https://github.com/user-attachments/assets/e5a92fad-eaff-4f14-b525-89684cf7bcd8" />
