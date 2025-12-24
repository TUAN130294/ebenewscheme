# Salary Calculator - Cloudflare Workers

KPI-Based Compensation Calculator for Erablue.

## 🚀 Quick Deploy

### Option 1: Using Wrangler CLI

```bash
# Install dependencies
npm install

# Login to Cloudflare
npx wrangler login

# Deploy
npm run deploy
```

### Option 2: Direct Deploy

```bash
# Install wrangler globally
npm install -g wrangler

# Login
wrangler login

# Deploy from this directory
wrangler deploy
```

### Option 3: Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Create Worker**
4. Replace the code with contents of `worker.js`
5. Click **Save and Deploy**

## 🔧 Local Development

```bash
npm run dev
# Opens at http://localhost:8787
```

## 📁 Project Structure

```
salary-calculator-worker/
├── worker.js          # Main worker code (HTML + JS embedded)
├── wrangler.toml      # Cloudflare configuration
├── package.json       # NPM scripts
└── README.md          # This file
```

## ⚙️ Configuration

### Custom Domain (Optional)

Edit `wrangler.toml`:

```toml
routes = [
  { pattern = "salary.erablue.com/*", zone_name = "erablue.com" }
]
```

### Using Cloudflare Tunnel

If deploying behind Cloudflare Tunnel:

```bash
# In your tunnel config (config.yml)
ingress:
  - hostname: salary.internal.erablue.com
    service: http://localhost:8787
```

## 📊 Features

- **3 Salary Levels**: Head, Manager, Staff
- **KPI Calculation**: Revenue (70%) + Profit (30%)
- **Real-time Updates**: Instant calculation on input
- **Min/Max Caps**: Automatic floor and ceiling enforcement
- **Visual Breakdown**: Progress bars and salary distribution

## 🎨 Customization

### Change Level Configuration

In `worker.js`, modify the `LEVEL_CONFIG` object:

```javascript
const LEVEL_CONFIG = {
  head:    { fixed: 0,   variable: 1,   min: 0.5,  max: 2.0  },
  manager: { fixed: 0.5, variable: 0.5, min: 0.75, max: 1.5  },
  staff:   { fixed: 0.7, variable: 0.3, min: 0.85, max: 1.3  }
};
```

### Change KPI Weights

Modify the calculation in the `calculate()` function:

```javascript
// Current: 70% Revenue, 30% Profit
const kpiScore = (revenueAchievement * 0.7) + (profitAchievement * 0.3);
```

## 📝 License

MIT - Erablue Backend & Business Process Department
