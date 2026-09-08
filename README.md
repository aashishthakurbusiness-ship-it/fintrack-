# FinTrack+

> Minimal, production-ready AI personal finance web application featuring natural-language expense entry, multimodal receipt scanning, automated financial advisory, and overspending detection.

---

## Architecture Overview

```
FinTrack+/
├── frontend/                   # Next.js 15+ App Router, TypeScript, Tailwind CSS
│   ├── src/
│   │   ├── app/                # App router routes & pages
│   │   │   ├── layout.tsx      # Unified shell layout with responsive navigation
│   │   │   ├── page.tsx        # Fintech Dashboard shell & metrics
│   │   │   ├── transactions/   # Transaction ledger & auto-categorization shell
│   │   │   ├── add-expense/    # Natural language & manual expense entry shell
│   │   │   ├── scan-receipt/   # Receipt & screenshot OCR processing shell
│   │   │   ├── ai-advisor/     # AI financial advisor & EMI simulation shell
│   │   │   ├── analytics/      # Burn rate, cash flow velocity & trends shell
│   │   │   ├── budgets/        # Budget ceilings & overspending alerts shell
│   │   │   └── settings/       # System configuration & API credentials shell
│   │   ├── components/
│   │   │   ├── layout/         # Sidebar, Header, and Shell components
│   │   │   ├── ui/             # Reusable Button, Card, Badge, Input, StatCard, StatusIndicator
│   │   │   └── dashboard/      # MetricsGrid, QuickActions, RecentTransactionsShell, etc.
│   │   ├── lib/
│   │   │   ├── api.ts          # Typed frontend-to-backend API client
│   │   │   └── utils.ts        # Formatting and Tailwind utility helpers
│   │   └── types/              # TypeScript interfaces for API and domain models
│   ├── .env.example
│   └── package.json
│
├── backend/                    # Python 3.10+ ASGI backend with FastAPI
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── endpoints/  # /health, /system status endpoints
│   │   │   │   └── api.py      # Versioned router aggregator
│   │   ├── core/
│   │   │   └── config.py       # Pydantic BaseSettings, CORS, and environment loader
│   │   ├── schemas/            # Pydantic request & response schemas
│   │   └── main.py             # ASGI FastAPI app with CORS middleware
│   ├── requirements.txt
│   ├── .env.example
│   └── venv/                   # Python virtual environment
│
└── README.md
```

---

## Prerequisites

- **Node.js**: v18+ (tested on v24.15.0)
- **npm**: v9+ (tested on v11.12.1)
- **Python**: 3.10+ (tested on 3.14.5)

---

## Environment Setup

### 1. Backend Environment

In `backend/`:
```bash
cd backend
cp .env.example .env
```

Default variables:
```env
PROJECT_NAME="FinTrack+ API"
VERSION="0.1.0"
ENVIRONMENT="development"
DEBUG=True
PORT=8000
HOST="0.0.0.0"
CORS_ORIGINS=["http://localhost:3000","http://127.0.0.1:3000"]
```

### 2. Frontend Environment

In `frontend/`:
```bash
cd frontend
cp .env.example .env.local
```

Default variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Running Locally

### Start the FastAPI Backend

1. Navigate to `backend/`:
   ```bash
   cd backend
   ```
2. Activate the virtual environment:
   - **Windows (PowerShell)**:
     ```powershell
     .\venv\Scripts\Activate.ps1
     ```
   - **Windows (CMD)**:
     ```cmd
     .\venv\Scripts\activate.bat
     ```
   - **macOS/Linux**:
     ```bash
     source venv/bin/activate
     ```
3. (Optional if already installed):
   ```bash
   pip install -r requirements.txt
   ```
4. Launch the server:
   ```bash
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```
5. Verify:
   - Interactive Swagger Docs: [http://127.0.0.1:8000/api/v1/docs](http://127.0.0.1:8000/api/v1/docs)
   - Health Check: [http://127.0.0.1:8000/api/v1/health](http://127.0.0.1:8000/api/v1/health)
   - System Capabilities: [http://127.0.0.1:8000/api/v1/system/status](http://127.0.0.1:8000/api/v1/system/status)

---

### Start the Next.js Frontend

1. Navigate to `frontend/`:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Launch development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The live status indicator in the top header will automatically query the FastAPI backend and display:
```
● FastAPI: Online (v0.1.0)
```

---

## Navigation Routes

| Route | View | Description |
|---|---|---|
| `/` | **Dashboard** | Net worth metrics, cash flow telemetry, proactive AI brief, quick actions |
| `/transactions` | **Transactions** | Historical entries ledger, export, and auto-categorization tags |
| `/add-expense` | **Add Expense** | Dual natural-language parsing input & structured entry form |
| `/scan-receipt` | **Scan Receipt** | Multimodal upload dropzone, camera capture & extracted preview |
| `/ai-advisor` | **AI Advisor** | Interactive financial copilot stream & EMI/affordability simulator |
| `/analytics` | **Analytics** | Cash flow velocity (income vs burn rate) and category breakdown |
| `/budgets` | **Budgets** | Category spending caps, utilization percentages & overspending alerts |
| `/settings` | **Settings** | Backend connection telemetry, Supabase settings, and LLM preferences |

---

## Next Steps / Roadmap

1. **Supabase Database & Auth**: Initialize PostgreSQL migration schemas (`transactions`, `categories`, `budgets`, `receipts`) and Supabase JWT authentication.
2. **Natural Language Parser**: Implement LLM-powered extraction in FastAPI to convert conversational input into structured transactions.
3. **Multimodal Vision OCR**: Integrate image parsing on Supabase Storage for receipt line-item breakdown.
4. **Autonomous AI Advisor**: Connect reasoning agents for personalized budgeting recommendations and overspending alerts.
