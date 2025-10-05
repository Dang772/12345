import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to TikTok Downloader",
          "paste_link": "Paste TikTok video link here",
          "check_button": "Check",
          "download_button": "Download",
          "video_thumbnail": "Video Thumbnail",
          "owner_name": "Owner Name",
          "views_count": "Views",
          "likes_count": "Likes",
          "shares_count": "Shares",
          "quality_selection": "Select Video Quality",
          "4k_uhd": "4K Ultra HD",
          "1080p_fhd": "1080p Full HD",
          "720p_hd": "720p HD",
          "360p_sd": "360p Standard",
          "disclaimer": "For personal use only. This website does not support copyright infringement.",
          "ad_section": "Advertisement",
          "full_screen_ad": "Full-screen Ad",
          "tiktok_only": "Only TikTok videos are supported.",
          "download_success": "Video download initiated!",
          "download_failed": "Failed to download video. Please try again.",
          "website_description_title": "About Our TikTok Downloader",
          "website_description_text": "Our TikTok Downloader is a free and easy-to-use tool that allows you to download TikTok videos without watermark in high quality. Simply paste the video link, choose your desired quality, and download. We support various formats and resolutions to meet your needs. Our service is fast, reliable, and secure, ensuring a smooth and safe downloading experience. We are committed to providing the best service for our users.",
          "ad_section_2": "Another Ad",
          "ad_section_3": "More Ads"
        }
      },
      th: {
        translation: {
          "welcome": "ยินดีต้อนรับสู่ TikTok Downloader",
          "paste_link": "วางลิงก์วิดีโอ TikTok ที่นี่",
          "check_button": "ตรวจสอบ",
          "download_button": "ดาวน์โหลด",
          "video_thumbnail": "ภาพปกวิดีโอ",
          "owner_name": "ชื่อเจ้าของ",
          "views_count": "ยอดดู",
          "likes_count": "ยอดไลก์",
          "shares_count": "ยอดแชร์",
          "quality_selection": "เลือกคุณภาพวิดีโอ",
          "4k_uhd": "4K Ultra HD",
          "1080p_fhd": "1080p Full HD",
          "720p_hd": "720p HD",
          "360p_sd": "360p Standard",
          "disclaimer": "สำหรับใช้ส่วนตัวเท่านั้น เว็บไซต์นี้ไม่สนับสนุนการละเมิดลิขสิทธิ์",
          "ad_section": "โฆษณา",
          "full_screen_ad": "โฆษณาเต็มหน้าจอ",
          "tiktok_only": "รองรับเฉพาะวิดีโอ TikTok เท่านั้น",
          "download_success": "เริ่มการดาวน์โหลดวิดีโอแล้ว!",
          "download_failed": "ดาวน์โหลดวิดีโอไม่สำเร็จ กรุณาลองอีกครั้ง",
          "website_description_title": "เกี่ยวกับ TikTok Downloader ของเรา",
          "website_description_text": "TikTok Downloader ของเราเป็นเครื่องมือฟรีและใช้งานง่ายที่ช่วยให้คุณดาวน์โหลดวิดีโอ TikTok โดยไม่มีลายน้ำด้วยคุณภาพสูง เพียงแค่วางลิงก์วิดีโอ เลือกคุณภาพที่ต้องการ แล้วดาวน์โหลด เราสนับสนุนรูปแบบและความละเอียดที่หลากหลายเพื่อตอบสนองความต้องการของคุณ บริการของเราเร็ว เชื่อถือได้ และปลอดภัย ทำให้มั่นใจได้ถึงประสบการณ์การดาวน์โหลดที่ราบรื่นและปลอดภัย เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดแก่ผู้ใช้ของเรา",
          "ad_section_2": "โฆษณาเพิ่มเติม 1",
          "ad_section_3": "โฆษณาเพิ่มเติม 2"
        }
      },
      my: {
        translation: {
          "welcome": "TikTok Downloader မှ ကြိုဆိုပါသည်",
          "paste_link": "TikTok ဗီဒီယိုလင့်ခ်ကို ဤနေရာတွင် ထည့်ပါ",
          "check_button": "စစ်ဆေးရန်",
          "download_button": "ဒေါင်းလုဒ်လုပ်ရန်",
          "video_thumbnail": "ဗီဒီယိုပုံသေး",
          "owner_name": "ပိုင်ရှင်အမည်",
          "views_count": "ကြည့်ရှုမှုများ",
          "likes_count": "ကြိုက်နှစ်သက်မှုများ",
          "shares_count": "မျှဝေမှုများ",
          "quality_selection": "ဗီဒီယိုအရည်အသွေးရွေးချယ်ပါ",
          "4k_uhd": "4K Ultra HD",
          "1080p_fhd": "1080p Full HD",
          "720p_hd": "720p HD",
          "360p_sd": "360p Standard",
          "disclaimer": "ကိုယ်ပိုင်အသုံးပြုရန်အတွက်သာ။ ဤဝဘ်ဆိုဒ်သည် မူပိုင်ခွင့်ချိုးဖောက်မှုကို မပံ့ပိုးပါ။",
          "ad_section": "ကြော်ငြာ",
          "full_screen_ad": "မျက်နှာပြင်အပြည့်ကြော်ငြာ",
          "tiktok_only": "TikTok ဗီဒီယိုများကိုသာ ပံ့ပိုးသည်",
          "download_success": "ဗီဒီယိုဒေါင်းလုဒ်စတင်ပါပြီ။",
          "download_failed": "ဗီဒီယိုဒေါင်းလုဒ်မအောင်မြင်ပါ။ ကျေးဇူပြု၍ ထပ်မံကြိုးစားပါ။",
          "website_description_title": "ကျွန်ုပ်တို့၏ TikTok Downloader အကြောင်း",
          "website_description_text": "ကျွန်ုပ်တို့၏ TikTok Downloader သည် ရေစာမပါဘဲ အရည်အသွေးမြင့် TikTok ဗီဒီယိုများကို ဒေါင်းလုဒ်လုပ်ရန် ကူညီပေးသော အခမဲ့နှင့် အသုံးပြုရလွယ်ကူသော ကိရိယာတစ်ခုဖြစ်သည်။ ဗီဒီယိုလင့်ခ်ကို ကူးထည့်ပြီး သင်လိုချင်သော အရည်အသွေးကို ရွေးချယ်ကာ ဒေါင်းလုဒ်လုပ်ပါ။ သင်၏လိုအပ်ချက်များကို ဖြည့်ဆည်းရန် ပုံစံအမျိုးမျိုးနှင့် ရုပ်ထွက်များကို ကျွန်ုပ်တို့ ပံ့ပိုးပေးပါသည်။ ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုသည် မြန်ဆန်၊ ယုံကြည်စိတ်ချရပြီး လုံခြုံစိတ်ချရသောကြောင့် ချောမွေ့ပြီး ဘေးကင်းသော ဒေါင်းလုဒ်အတွေ့အကြုံကို အာမခံပါသည်။ ကျွန်ုပ်တို့သည် သုံးစွဲသူများအတွက် အကောင်းဆုံးဝန်ဆောင်မှုကို ပေးအပ်ရန် ကတိပြုပါသည်။",
          "ad_section_2": "နောက်ထပ်ကြော်ငြာ 1",
          "ad_section_3": "နောက်ထပ်ကြော်ငြာ 2"
        }
      }
    }
  });

export default i18n;
