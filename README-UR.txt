GMP Services Temporary Email — Netlify project

اہم:
1) Netlify میں Site configuration > Environment variables میں
   TRYTEMPINBOX_API_KEY کی اصل API key موجود ہونی چاہیے۔
2) یہ project Netlify Functions استعمال کرتا ہے؛ اسے عام ZIP Drag & Drop سے
   publish کرنے سے پہلے functions deployment کا درست طریقہ درکار ہے۔
3) بہتر طریقہ: GitHub repository سے Netlify کو connect کریں، project root میں
   یہ تمام files رکھیں، پھر deploy کریں۔ یا Netlify CLI استعمال کریں۔
4) Deploy کے بعد test کریں:
   https://YOUR-DOMAIN/.netlify/functions/temp-mail
   براہِ راست browser میں کھولنے پر GET کے لیے 405 آنا متوقع ہے؛ اصل استعمال
   ویب سائٹ کے Generate Email بٹن سے POST request کے ذریعے ہوتا ہے۔
5) یہ TryTempInbox provider استعمال کرتا ہے؛ generated address @trytempinbox.com
   پر ہوگا، @gmp-services.org پر نہیں۔ addresses تقریباً 10 منٹ کے لیے ہوتے ہیں۔
6) API key کو کبھی index.html یا GitHub کے public code میں نہ ڈالیں۔
