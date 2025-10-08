# TikTok Video Downloader

เว็บไซต์ดาวน์โหลดวิดีโอ TikTok ที่ทันสมัย รองรับหลายภาษา และมีฟีเจอร์ PWA

## ✨ คุณสมบัติหลัก

- 🎬 **ดาวน์โหลดวิดีโอ TikTok** - รองรับการดาวน์โหลดวิดีโอจาก TikTok ในคุณภาพสูง
- 📊 **แสดงข้อมูลวิดีโอ** - แสดงภาพปก, ชื่อเจ้าของ, ยอดดู, ยอดไลก์, และยอดแชร์
- 🎯 **เลือกคุณภาพวิดีโอ** - รองรับหลายคุณภาพ (4K, 1080p, 720p, 360p)
- 🎵 **ดาวน์โหลดเสียง (เพลง)** - รองรับการดาวน์โหลดเฉพาะเสียงจากวิดีโอ TikTok
- 🌍 **รองรับหลายภาษา** - ไทย, พม่า, อังกฤษ พร้อมตรวจจับประเทศอัตโนมัติ
- 📱 **PWA Support** - สามารถติดตั้งเป็นแอปบนหน้าจอหลักได้
- 🎨 **ธีม TikTok** - ดีไซน์สีสันสดใสตามธีม TikTok
- 📺 **โฆษณา** - มีพื้นที่สำหรับแสดงโฆษณาหลายจุด
- 📱 **Responsive Design** - รองรับทั้งมือถือและคอมพิวเตอร์

## 🛠️ เทคโนโลยีที่ใช้

### Frontend
- **React.js** - JavaScript library สำหรับสร้าง UI
- **Vite** - Build tool ที่รวดเร็ว
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **i18next** - Internationalization framework
- **Vite PWA Plugin** - PWA support

### Backend
- **Flask** - Python web framework
- **yt-dlp** - Video downloader library
- **Flask-CORS** - CORS support

## 📦 การติดตั้ง

### ข้อกำหนดเบื้องต้น
- Node.js 22.x หรือสูงกว่า
- Python 3.11 หรือสูงกว่า
- pnpm (สำหรับจัดการ package ของ frontend)

### ติดตั้ง Frontend

```bash
cd frontend
pnpm install
```

### ติดตั้ง Backend

```bash
cd backend
pip3 install -r requirements.txt
```

## 🚀 การรันโปรเจกต์

### รัน Frontend (Development Mode)

```bash
cd frontend
npm run dev
```

Frontend จะรันที่ `http://localhost:5173`

### รัน Backend

```bash
cd backend
python3 -m src.main
```

Backend จะรันที่ `http://localhost:5000`

## 📁 โครงสร้างโปรเจกต์

```
.
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # UI components
│   │   │   └── ui/         # Reusable UI components
│   │   ├── lib/            # Utility functions
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   ├── i18n.js         # Internationalization config
│   │   ├── main.jsx        # Application entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
│
└── backend/                 # Flask backend application
    ├── src/
    │   ├── routes/         # API routes
    │   │   └── tiktok.py   # TikTok video processing
    │   └── main.py         # Backend entry point
    └── requirements.txt    # Backend dependencies
```

## 🌐 API Endpoints

### POST `/api/tiktok/info`
ดึงข้อมูลวิดีโอจาก TikTok

**Request Body:**
```json
{
  "url": "https://www.tiktok.com/@user/video/..."
}
```

**Response:**
```json
{
  "title": "Video Title",
  "thumbnail": "https://...",
  "owner": "@username",
  "views": 1000000,
  "likes": 50000,
  "shares": 5000,
  "duration": 30,
  "formats": [
    {
      "quality": "1080p",
      "format_id": "..."
    }
  ]
}
```

### POST `/api/tiktok/download`
ดาวน์โหลดวิดีโอจาก TikTok

**Request Body:**
```json
{
  "url": "https://www.tiktok.com/@user/video/...",
  "format_id": "..."
}
```

**Response:**
ไฟล์วิดีโอ (binary)

## 🌍 การรองรับหลายภาษา

เว็บไซต์จะตรวจจับประเทศของผู้ใช้อัตโนมัติจาก IP address และแสดงภาษาที่เหมาะสม:

- 🇹🇭 **ประเทศไทย** → ภาษาไทย
- 🇲🇲 **ประเทศพม่า** → ภาษาพม่า
- 🌍 **ประเทศอื่นๆ** → ภาษาอังกฤษ

หากตรวจจับประเทศไม่สำเร็จ จะใช้ภาษาอังกฤษเป็นค่าเริ่มต้น

## 📱 PWA (Progressive Web App)

เว็บไซต์รองรับ PWA ซึ่งผู้ใช้สามารถ:
- ติดตั้งเป็นแอปบนหน้าจอหลัก
- ใช้งานแบบออฟไลน์ (บางฟีเจอร์)
- ได้รับประสบการณ์การใช้งานแบบ native app

## 🎨 ธีมและดีไซน์

- **สีหลัก:** พื้นหลังสีดำ/เทาเข้ม พร้อม neon accents (ชมพู, ม่วง, น้ำเงิน)
- **Gradient:** ใช้ gradient สีสันสดใสตามธีม TikTok
- **Responsive:** รองรับทุกขนาดหน้าจอ
- **Animations:** มี smooth transitions และ hover effects

## 📺 พื้นที่โฆษณา

เว็บไซต์มีพื้นที่สำหรับแสดงโฆษณาหลายจุด:
1. **Video Ad Section** - โฆษณาวิดีโอด้านบน (16:9)
2. **Full-screen Ad** - โฆษณาเต็มหน้าจอก่อนดาวน์โหลด
3. **Recommended Apps** - แนะนำแอปยอดนิยม
4. **Additional Ad Sections** - โฆษณาเพิ่มเติม 2 ส่วนที่ด้านล่าง

## 📝 หมายเหตุ

- เว็บไซต์นี้สร้างขึ้นเพื่อการศึกษาและใช้งานส่วนตัวเท่านั้น
- ไม่สนับสนุนการละเมิดลิขสิทธิ์
- ผู้ใช้ควรปฏิบัติตามข้อกำหนดและเงื่อนไขของ TikTok

## 📄 License

MIT License

## 👨‍💻 Developer

Created with ❤️ by Manus AI

---

© 2025 TikTok Downloader - All Rights Reserved
