export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Salary Calculator - Erablue</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            erablue: {
              yellow: '#F7C948',
              'yellow-hover': '#E5B83D',
              dark: '#1a1a2e',
              gray: '#6B7280'
            }
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .hero-bg {
      background: linear-gradient(135deg, rgba(247,201,72,0.1) 0%, rgba(255,255,255,0.95) 100%),
                  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="15" fill="none" stroke="%23F7C948" stroke-width="0.5" opacity="0.3"/><circle cx="80" cy="30" r="20" fill="none" stroke="%23F7C948" stroke-width="0.5" opacity="0.2"/><circle cx="60" cy="70" r="25" fill="none" stroke="%23F7C948" stroke-width="0.5" opacity="0.25"/></svg>');
      background-size: cover;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] { -moz-appearance: textfield; }
  </style>
</head>
<body class="bg-gray-50 min-h-screen">
  <!-- Header -->
  <header class="bg-erablue-yellow shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-erablue-yellow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <span class="text-red-600 font-bold text-xl">era</span><span class="text-blue-600 font-bold text-xl">blue</span>
            <span class="text-gray-800 font-semibold ml-2">Backend & Business Process Department</span>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <a href="#" class="hover:text-gray-600">HCGA</a>
          <a href="#" class="hover:text-gray-600">Tools</a>
          <a href="#" class="hover:text-gray-600">About Us</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Sub Header -->
  <div class="bg-white border-b py-3">
    <div class="max-w-7xl mx-auto px-4 flex items-center gap-2 text-gray-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
      <span class="font-semibold text-gray-800">Salary Calculator</span>
      <span class="text-gray-400">—</span>
      <span>KPI-Based Compensation Calculator</span>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-bg py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Salary Calculator
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Calculate compensation based on KPI achievement with Revenue (70%) and Profit (30%) weighting.
      </p>
    </div>
  </section>

  <!-- Main Calculator -->
  <main class="max-w-6xl mx-auto px-4 py-8 -mt-4">
    <div class="grid lg:grid-cols-3 gap-6">
      
      <!-- Column 1: Level & Salary -->
      <div class="space-y-6">
        <!-- Level Selection -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="w-7 h-7 bg-erablue-yellow rounded-full flex items-center justify-center text-sm font-bold text-gray-800">1</span>
            Select Level
          </h2>
          <div class="space-y-2" id="levelButtons">
            <button onclick="setLevel('head')" data-level="head" class="level-btn w-full p-4 rounded-lg text-left transition-all border-2 border-gray-200 hover:border-erablue-yellow">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-800">Head</span>
                <span class="text-sm text-gray-500">50% - 200%</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">100% Variable - High Risk/High Reward</p>
            </button>
            <button onclick="setLevel('manager')" data-level="manager" class="level-btn w-full p-4 rounded-lg text-left transition-all border-2 border-erablue-yellow bg-erablue-yellow/10">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-800">Manager</span>
                <span class="text-sm text-gray-500">75% - 150%</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">50% Fixed + 50% Variable - Balanced</p>
            </button>
            <button onclick="setLevel('staff')" data-level="staff" class="level-btn w-full p-4 rounded-lg text-left transition-all border-2 border-gray-200 hover:border-erablue-yellow">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-gray-800">Staff</span>
                <span class="text-sm text-gray-500">85% - 130%</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">70% Fixed + 30% Variable - Stable</p>
            </button>
          </div>
        </div>

        <!-- Contract Salary -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="w-7 h-7 bg-erablue-yellow rounded-full flex items-center justify-center text-sm font-bold text-gray-800">2</span>
            Contract Salary
          </h2>
          <div class="relative">
            <input type="number" id="contractSalary" value="10000000" oninput="calculate()"
              class="w-full text-xl font-semibold p-4 rounded-lg border-2 border-gray-200 focus:border-erablue-yellow focus:outline-none transition-colors">
            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">VND</span>
          </div>
          <p class="text-sm text-gray-500 mt-2" id="salaryFormatted">= 10,000,000 VND</p>
        </div>
      </div>

      <!-- Column 2: KPI Inputs -->
      <div class="bg-white rounded-xl shadow-sm border p-6">
        <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span class="w-7 h-7 bg-erablue-yellow rounded-full flex items-center justify-center text-sm font-bold text-gray-800">3</span>
          KPI Achievement
        </h2>

        <!-- Revenue -->
        <div class="mb-6">
          <div class="flex justify-between items-center mb-3">
            <label class="font-medium text-gray-700 flex items-center gap-2">
              <span class="text-lg">📈</span> Revenue
              <span class="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">70%</span>
            </label>
            <span id="revenuePercent" class="text-lg font-bold text-orange-500">80.0%</span>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">Target (Billion)</label>
              <input type="number" id="revenueTarget" value="100" oninput="calculate()"
                class="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors">
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">Actual (Billion)</label>
              <input type="number" id="revenueActual" value="80" oninput="calculate()"
                class="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors">
            </div>
          </div>
          <!-- Progress bar -->
          <div class="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div id="revenueBar" class="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300" style="width: 80%"></div>
          </div>
        </div>

        <!-- Profit -->
        <div>
          <div class="flex justify-between items-center mb-3">
            <label class="font-medium text-gray-700 flex items-center gap-2">
              <span class="text-lg">💎</span> Profit
              <span class="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-semibold">30%</span>
            </label>
            <span id="profitPercent" class="text-lg font-bold text-purple-500">150.0%</span>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">Target (Billion)</label>
              <input type="number" id="profitTarget" value="10" oninput="calculate()"
                class="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors">
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">Actual (Billion)</label>
              <input type="number" id="profitActual" value="15" oninput="calculate()"
                class="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors">
            </div>
          </div>
          <!-- Progress bar -->
          <div class="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div id="profitBar" class="h-full bg-gradient-to-r from-purple-400 to-purple-500 transition-all duration-300" style="width: 100%"></div>
          </div>
        </div>

        <!-- KPI Formula -->
        <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Formula</p>
          <code class="text-sm text-gray-600">
            KPI = (Revenue% × 0.7) + (Profit% × 0.3)
          </code>
        </div>
      </div>

      <!-- Column 3: Results -->
      <div class="space-y-6">
        <!-- KPI Score -->
        <div class="bg-gradient-to-br from-erablue-yellow/20 to-orange-100 rounded-xl shadow-sm border border-erablue-yellow/30 p-6">
          <h3 class="text-sm text-gray-600 mb-1">KPI Score</h3>
          <div class="text-5xl font-bold text-gray-800 mb-4" id="kpiScore">101.0%</div>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500">Revenue contribution</span>
              <span class="text-orange-600 font-mono" id="revenueContrib">80% × 70% = 56%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Profit contribution</span>
              <span class="text-purple-600 font-mono" id="profitContrib">150% × 30% = 45%</span>
            </div>
          </div>
        </div>

        <!-- Salary Breakdown -->
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Breakdown</h3>
          
          <!-- Visual bar -->
          <div class="h-8 rounded-full overflow-hidden flex bg-gray-100 mb-4" id="salaryBar">
            <div class="bg-green-500 flex items-center justify-center text-xs font-bold text-white transition-all" id="fixedBar" style="width: 50%">Fixed</div>
            <div class="bg-blue-500 flex items-center justify-center text-xs font-bold text-white transition-all" id="variableBar" style="width: 50%">Variable</div>
          </div>

          <div class="space-y-3">
            <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <div>
                <span class="text-green-700 font-medium">Fixed Part</span>
                <p class="text-xs text-gray-500" id="fixedFormula">10M × 50%</p>
              </div>
              <span class="text-green-700 font-bold" id="fixedAmount">5,000,000</span>
            </div>

            <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <span class="text-blue-700 font-medium">Variable Part</span>
                <p class="text-xs text-gray-500" id="variableFormula">10M × 50% × 101%</p>
              </div>
              <span class="text-blue-700 font-bold" id="variableAmount">5,050,000</span>
            </div>

            <div class="border-t pt-3">
              <div class="flex justify-between text-gray-500">
                <span>Raw Total</span>
                <span class="font-mono" id="rawTotal">10,050,000</span>
              </div>
            </div>

            <!-- Min/Max Range -->
            <div class="bg-gray-50 rounded-lg p-3 border">
              <div class="flex justify-between text-xs text-gray-500 mb-2">
                <span id="minLabel">Floor (75%)</span>
                <span id="maxLabel">Cap (150%)</span>
              </div>
              <div class="relative h-3 bg-gray-200 rounded-full">
                <div class="absolute h-full bg-gradient-to-r from-erablue-yellow to-green-400 rounded-full transition-all" id="rangeBar" style="width: 52%"></div>
                <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow border-2 border-erablue-yellow transition-all" id="rangeIndicator" style="left: 52%"></div>
              </div>
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span id="minAmount">7,500,000</span>
                <span id="maxAmount">15,000,000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Result -->
        <div class="rounded-xl shadow-lg p-6 border-2 transition-all" id="resultCard">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-sm text-gray-600">Final Salary</h3>
            <span id="capStatus" class="text-xs px-2 py-1 rounded hidden"></span>
          </div>
          <div class="text-4xl font-bold text-gray-800 mb-1" id="finalSalary">10,050,000</div>
          <div class="text-lg text-gray-500">VND</div>
          <div class="mt-3 flex items-center gap-2">
            <span class="text-2xl font-bold" id="salaryPercent">100.5%</span>
            <span class="text-gray-500">of contract</span>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-100 border-t py-6 mt-8">
    <div class="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
      <p>© 2024 Erablue - Backend & Business Process Department</p>
      <p class="mt-1">KPI Salary Calculator v1.0</p>
    </div>
  </footer>

  <script>
    // Configuration
    const LEVEL_CONFIG = {
      head:    { fixed: 0,   variable: 1,   min: 0.5,  max: 2.0  },
      manager: { fixed: 0.5, variable: 0.5, min: 0.75, max: 1.5  },
      staff:   { fixed: 0.7, variable: 0.3, min: 0.85, max: 1.3  }
    };

    let currentLevel = 'manager';

    function formatNumber(num) {
      return new Intl.NumberFormat('vi-VN').format(Math.round(num));
    }

    function formatPercent(num) {
      return (num * 100).toFixed(1) + '%';
    }

    function setLevel(level) {
      currentLevel = level;
      
      // Update button styles
      document.querySelectorAll('.level-btn').forEach(btn => {
        const isSelected = btn.dataset.level === level;
        btn.className = 'level-btn w-full p-4 rounded-lg text-left transition-all border-2 ' + 
          (isSelected ? 'border-erablue-yellow bg-erablue-yellow/10' : 'border-gray-200 hover:border-erablue-yellow');
      });
      
      calculate();
    }

    function calculate() {
      const config = LEVEL_CONFIG[currentLevel];
      
      // Get values
      const contractSalary = parseFloat(document.getElementById('contractSalary').value) || 0;
      const revenueTarget = parseFloat(document.getElementById('revenueTarget').value) || 1;
      const revenueActual = parseFloat(document.getElementById('revenueActual').value) || 0;
      const profitTarget = parseFloat(document.getElementById('profitTarget').value) || 1;
      const profitActual = parseFloat(document.getElementById('profitActual').value) || 0;

      // Calculate achievements
      const revenueAchievement = revenueActual / revenueTarget;
      const profitAchievement = profitActual / profitTarget;
      
      // KPI Score
      const kpiScore = (revenueAchievement * 0.7) + (profitAchievement * 0.3);
      
      // Salary parts
      const fixedPart = contractSalary * config.fixed;
      const variablePart = contractSalary * config.variable * kpiScore;
      const rawTotal = fixedPart + variablePart;
      
      // Min/Max
      const minSalary = contractSalary * config.min;
      const maxSalary = contractSalary * config.max;
      const finalSalary = Math.min(Math.max(rawTotal, minSalary), maxSalary);
      
      // Check caps
      const isCappedMin = rawTotal < minSalary;
      const isCappedMax = rawTotal > maxSalary;
      const salaryMultiplier = finalSalary / contractSalary;

      // Update UI
      document.getElementById('salaryFormatted').textContent = '= ' + formatNumber(contractSalary) + ' VND';
      
      // KPI Section
      document.getElementById('revenuePercent').textContent = formatPercent(revenueAchievement);
      document.getElementById('revenuePercent').className = 'text-lg font-bold ' + (revenueAchievement >= 1 ? 'text-green-500' : 'text-orange-500');
      document.getElementById('revenueBar').style.width = Math.min(100, revenueAchievement * 100) + '%';
      
      document.getElementById('profitPercent').textContent = formatPercent(profitAchievement);
      document.getElementById('profitPercent').className = 'text-lg font-bold ' + (profitAchievement >= 1 ? 'text-green-500' : 'text-purple-500');
      document.getElementById('profitBar').style.width = Math.min(100, profitAchievement * 100) + '%';
      
      // KPI Score
      document.getElementById('kpiScore').textContent = formatPercent(kpiScore);
      document.getElementById('revenueContrib').textContent = formatPercent(revenueAchievement) + ' × 70% = ' + formatPercent(revenueAchievement * 0.7);
      document.getElementById('profitContrib').textContent = formatPercent(profitAchievement) + ' × 30% = ' + formatPercent(profitAchievement * 0.3);
      
      // Breakdown
      const fixedWidth = rawTotal > 0 ? (fixedPart / rawTotal) * 100 : 0;
      const variableWidth = rawTotal > 0 ? (variablePart / rawTotal) * 100 : 0;
      
      document.getElementById('fixedBar').style.width = fixedWidth + '%';
      document.getElementById('fixedBar').textContent = fixedWidth > 10 ? 'Fixed' : '';
      document.getElementById('variableBar').style.width = variableWidth + '%';
      document.getElementById('variableBar').textContent = variableWidth > 10 ? 'Variable' : '';
      
      document.getElementById('fixedFormula').textContent = formatNumber(contractSalary) + ' × ' + formatPercent(config.fixed);
      document.getElementById('fixedAmount').textContent = formatNumber(fixedPart);
      
      document.getElementById('variableFormula').textContent = formatNumber(contractSalary) + ' × ' + formatPercent(config.variable) + ' × ' + formatPercent(kpiScore);
      document.getElementById('variableAmount').textContent = formatNumber(variablePart);
      
      document.getElementById('rawTotal').textContent = formatNumber(rawTotal);
      
      // Range
      document.getElementById('minLabel').textContent = 'Floor (' + formatPercent(config.min) + ')';
      document.getElementById('maxLabel').textContent = 'Cap (' + formatPercent(config.max) + ')';
      document.getElementById('minAmount').textContent = formatNumber(minSalary);
      document.getElementById('maxAmount').textContent = formatNumber(maxSalary);
      
      const rangePosition = Math.min(100, Math.max(0, (salaryMultiplier - config.min) / (config.max - config.min) * 100));
      document.getElementById('rangeBar').style.width = rangePosition + '%';
      document.getElementById('rangeIndicator').style.left = rangePosition + '%';
      
      // Final Result
      document.getElementById('finalSalary').textContent = formatNumber(finalSalary);
      document.getElementById('salaryPercent').textContent = formatPercent(salaryMultiplier);
      document.getElementById('salaryPercent').className = 'text-2xl font-bold ' + (salaryMultiplier >= 1 ? 'text-green-600' : 'text-orange-600');
      
      // Result card styling
      const resultCard = document.getElementById('resultCard');
      const capStatus = document.getElementById('capStatus');
      
      if (isCappedMin) {
        resultCard.className = 'rounded-xl shadow-lg p-6 border-2 transition-all bg-red-50 border-red-300';
        capStatus.textContent = '⚠️ Floor Applied';
        capStatus.className = 'text-xs px-2 py-1 rounded bg-red-100 text-red-600';
      } else if (isCappedMax) {
        resultCard.className = 'rounded-xl shadow-lg p-6 border-2 transition-all bg-green-50 border-green-300';
        capStatus.textContent = '🎯 Cap Reached!';
        capStatus.className = 'text-xs px-2 py-1 rounded bg-green-100 text-green-600';
      } else {
        resultCard.className = 'rounded-xl shadow-lg p-6 border-2 transition-all bg-gradient-to-br from-erablue-yellow/10 to-green-50 border-erablue-yellow/50';
        capStatus.className = 'text-xs px-2 py-1 rounded hidden';
      }
    }

    // Initial calculation
    calculate();
  </script>
</body>
</html>`;
