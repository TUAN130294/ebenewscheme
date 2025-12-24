# Salary Calculator - Erablue

KPI-Based Compensation Calculator với 3 ngôn ngữ (VI/ID/EN).

## 📁 Cấu Trúc Thư Mục

```
ebenewscheme/
├── index.html      # Trang chính
├── logo.png        # Logo Erablue (BẠN CẦN THÊM FILE NÀY)
└── README.md       # File này
```

## 🚀 Deploy lên Cloudflare Pages

### Cách 1: Qua GitHub (Khuyên dùng)

1. Push code lên GitHub repo
2. Vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Chọn **Workers & Pages** → **Create application** → **Pages**
4. Chọn **Connect to Git** → Chọn repo `ebenewscheme`
5. Build settings:
   - Framework preset: `None`
   - Build command: (để trống)
   - Build output directory: `/`
6. Click **Save and Deploy**

### Cách 2: Direct Upload

1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Chọn **Workers & Pages** → **Create application** → **Pages**
3. Chọn **Upload assets**
4. Kéo thả thư mục chứa `index.html` và `logo.png`
5. Click **Deploy site**

## ⚠️ QUAN TRỌNG

Đảm bảo file `logo.png` nằm cùng thư mục với `index.html`.

## 🌐 Custom Domain (Optional)

Sau khi deploy xong:
1. Vào **Pages project** → **Custom domains**
2. Thêm domain: `salary.erablue.com` (hoặc domain khác)
3. Cập nhật DNS theo hướng dẫn

## 🎨 Features

- ✅ 3 ngôn ngữ: Tiếng Việt, Bahasa Indonesia, English
- ✅ 3 cấp bậc: Head, Manager, Staff
- ✅ Tính KPI: Revenue (70%) + Profit (30%)
- ✅ Responsive mobile/desktop
- ✅ Lưu ngôn ngữ preference

## 📝 License

© 2024 Erablue Electronics - Backend & Business Process Department
