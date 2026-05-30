# 📱 Markets Dashboard PWA

실시간 주식/코인/환율 대시보드 — Yahoo Finance + CoinGecko 연동

## 데이터 소스
- **한국/미국 주식**: Yahoo Finance (무료, API 키 불필요)
- **암호화폐**: CoinGecko (무료, API 키 불필요)
- **환율**: Yahoo Finance

## Vercel 배포 방법 (5분)

### 1. GitHub에 올리기
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/[내계정]/market-dashboard.git
git push -u origin main
```

### 2. Vercel 배포
1. [vercel.com](https://vercel.com) 접속 → GitHub 로그인
2. **Add New Project** → 위 저장소 선택
3. **Root Directory**: `public` 로 설정
4. **Deploy** 클릭 → 완료!

### 3. 아이폰에 설치
1. 발급된 URL (예: `my-dashboard.vercel.app`) 을 Safari로 열기
2. 하단 공유 버튼 탭
3. **홈 화면에 추가** 탭
4. 앱처럼 실행 ✅

## 폴더 구조
```
market-dashboard/
├── api/
│   └── stock.js        ← Vercel Serverless (Yahoo Finance 프록시)
├── public/
│   ├── index.html      ← 메인 앱
│   ├── manifest.json   ← PWA 설정
│   └── sw.js           ← 서비스 워커
├── vercel.json
└── package.json
```

## 자동 갱신 주기
- 시세: 30초마다 자동 갱신
- 수동 새로고침 버튼 제공
