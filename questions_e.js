const QUESTIONS_E = [
  {
    id: "Q_MOD_E_001", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính nguyên hàm $\\int x^2 \\, dx$.",
    options: [
      "A. $\\frac{x^3}{3} + C$",
      "B. $\\frac{x^2}{2} + C$",
      "C. $\\frac{x^4}{4} + C$",
      "D. $2x + C$"
    ],
    correct_option: "A",
    explanation: "Theo công thức nguyên hàm cơ bản: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Với $n=2$: $\\int x^2 \\, dx = \\frac{x^3}{3} + C$."
  },
  {
    id: "Q_MOD_E_002", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính tích phân xác định $\\int_0^1 x \\, dx$.",
    options: [
      "A. $\\frac{1}{4}$",
      "B. $\\frac{1}{3}$",
      "C. $\\frac{1}{2}$",
      "D. $1$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^1 x \\, dx = \\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{2} - 0 = \\frac{1}{2}$."
  },
  {
    id: "Q_MOD_E_003", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tìm nguyên hàm $\\int e^x \\, dx$.",
    options: [
      "A. $e^x + C$",
      "B. $xe^x + C$",
      "C. $\\frac{e^x}{x} + C$",
      "D. $e^{x+1} + C$"
    ],
    correct_option: "A",
    explanation: "Hàm $e^x$ là hàm số không thay đổi khi lấy đạo hàm hoặc tích phân: $\\int e^x \\, dx = e^x + C$."
  },
  {
    id: "Q_MOD_E_004", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{x} \\, dx$ với $x > 0$.",
    options: [
      "A. $x + C$",
      "B. $-\\frac{1}{x^2} + C$",
      "C. $\\ln|x| + C$",
      "D. $\\frac{1}{x^2} + C$"
    ],
    correct_option: "C",
    explanation: "Đây là công thức cơ bản: $\\int \\frac{1}{x} \\, dx = \\ln|x| + C$."
  },
  {
    id: "Q_MOD_E_005", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^2 2x \\, dx$.",
    options: [
      "A. $2$",
      "B. $3$",
      "C. $4$",
      "D. $5$"
    ],
    correct_option: "B",
    explanation: "$\\int_1^2 2x \\, dx = \\left[x^2\\right]_1^2 = 4 - 1 = 3$."
  },
  {
    id: "Q_MOD_E_006", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính nguyên hàm $\\int \\cos x \\, dx$.",
    options: [
      "A. $-\\cos x + C$",
      "B. $\\sin x + C$",
      "C. $-\\sin x + C$",
      "D. $\\tan x + C$"
    ],
    correct_option: "B",
    explanation: "Đạo hàm của $\\sin x$ là $\\cos x$, nên $\\int \\cos x \\, dx = \\sin x + C$."
  },
  {
    id: "Q_MOD_E_007", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\sin x \\, dx$.",
    options: [
      "A. $\\cos x + C$",
      "B. $-\\cos x + C$",
      "C. $\\sin x + C$",
      "D. $-\\sin x + C$"
    ],
    correct_option: "B",
    explanation: "Đạo hàm của $-\\cos x$ là $\\sin x$, nên $\\int \\sin x \\, dx = -\\cos x + C$."
  },
  {
    id: "Q_MOD_E_008", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi} \\sin x \\, dx$.",
    options: [
      "A. $0$",
      "B. $1$",
      "C. $2$",
      "D. $\\pi$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^{\\pi} \\sin x \\, dx = [-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2$."
  },
  {
    id: "Q_MOD_E_009", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int 3x^2 \\, dx$.",
    options: [
      "A. $x^3 + C$",
      "B. $6x + C$",
      "C. $\\frac{3x^3}{2} + C$",
      "D. $3x + C$"
    ],
    correct_option: "A",
    explanation: "$\\int 3x^2 \\, dx = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C$."
  },
  {
    id: "Q_MOD_E_010", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 x^2 \\, dx$.",
    options: [
      "A. $\\frac{4}{3}$",
      "B. $\\frac{8}{3}$",
      "C. $4$",
      "D. $\\frac{16}{3}$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^2 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3}$."
  },
  {
    id: "Q_MOD_E_011", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int 2x \\cdot e^{x^2} \\, dx$ bằng phương pháp đổi biến $u = x^2$.",
    options: [
      "A. $2e^{x^2} + C$",
      "B. $e^{x^2} + C$",
      "C. $x^2 e^{x^2} + C$",
      "D. $\\frac{e^{x^2}}{2} + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u = x^2$, suy ra $du = 2x\\,dx$. Khi đó $\\int 2x \\cdot e^{x^2}\\,dx = \\int e^u \\, du = e^u + C = e^{x^2} + C$."
  },
  {
    id: "Q_MOD_E_012", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (x + 1)^2 \\, dx$.",
    options: [
      "A. $\\frac{(x+1)^3}{3} + C$",
      "B. $2(x+1) + C$",
      "C. $(x+1)^2 + C$",
      "D. $\\frac{(x+1)^2}{2} + C$"
    ],
    correct_option: "A",
    explanation: "Sử dụng công thức $\\int u^n \\, du = \\frac{u^{n+1}}{n+1} + C$ với $u = x+1$: $\\int (x+1)^2 \\, dx = \\frac{(x+1)^3}{3} + C$."
  },
  {
    id: "Q_MOD_E_013", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 e^x \\, dx$.",
    options: [
      "A. $e - 1$",
      "B. $e + 1$",
      "C. $e$",
      "D. $1 - e$"
    ],
    correct_option: "A",
    explanation: "$\\int_0^1 e^x \\, dx = [e^x]_0^1 = e^1 - e^0 = e - 1$."
  },
  {
    id: "Q_MOD_E_014", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (2x + 3) \\, dx$.",
    options: [
      "A. $2x^2 + 3x + C$",
      "B. $x^2 + 3x + C$",
      "C. $2 + C$",
      "D. $x^2 + C$"
    ],
    correct_option: "B",
    explanation: "$\\int (2x + 3) \\, dx = \\int 2x \\, dx + \\int 3 \\, dx = x^2 + 3x + C$."
  },
  {
    id: "Q_MOD_E_015", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_{-1}^{1} x^3 \\, dx$.",
    options: [
      "A. $2$",
      "B. $-2$",
      "C. $\\frac{1}{2}$",
      "D. $0$"
    ],
    correct_option: "D",
    explanation: "$x^3$ là hàm lẻ trên đoạn đối xứng $[-1, 1]$, nên $\\int_{-1}^{1} x^3 \\, dx = 0$."
  },
  {
    id: "Q_MOD_E_016", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi đường cong $y = x^2$, trục $Ox$, từ $x=0$ đến $x=1$ là bao nhiêu?",
    options: [
      "A. $\\frac{1}{4}$",
      "B. $\\frac{1}{3}$",
      "C. $\\frac{1}{2}$",
      "D. $1$"
    ],
    correct_option: "B",
    explanation: "Diện tích = $\\int_0^1 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$."
  },
  {
    id: "Q_MOD_E_017", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{x^2} \\, dx$ với $x \\neq 0$.",
    options: [
      "A. $\\ln|x| + C$",
      "B. $-\\frac{1}{x} + C$",
      "C. $\\frac{1}{x} + C$",
      "D. $-\\ln|x| + C$"
    ],
    correct_option: "B",
    explanation: "$\\int x^{-2} \\, dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$."
  },
  {
    id: "Q_MOD_E_018", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{2x}{x^2 + 1} \\, dx$.",
    options: [
      "A. $\\ln(x^2+1) + C$",
      "B. $2\\ln(x^2+1) + C$",
      "C. $\\frac{1}{x^2+1} + C$",
      "D. $\\arctan(x) + C$"
    ],
    correct_option: "A",
    explanation: "Đặt $u = x^2 + 1$, $du = 2x\\,dx$. Khi đó $\\int \\frac{2x}{x^2+1}\\,dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln(x^2+1) + C$."
  },
  {
    id: "Q_MOD_E_019", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^e \\frac{1}{x} \\, dx$.",
    options: [
      "A. $e - 1$",
      "B. $0$",
      "C. $1$",
      "D. $e$"
    ],
    correct_option: "C",
    explanation: "$\\int_1^e \\frac{1}{x} \\, dx = [\\ln x]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$."
  },
  {
    id: "Q_MOD_E_020", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\sqrt{x} \\, dx$ với $x \\geq 0$.",
    options: [
      "A. $\\frac{1}{2\\sqrt{x}} + C$",
      "B. $\\frac{2}{3} x^{3/2} + C$",
      "C. $2\\sqrt{x} + C$",
      "D. $\\frac{\\sqrt{x}}{2} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int x^{1/2} \\, dx = \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3} x^{3/2} + C$."
  },
  {
    id: "Q_MOD_E_021", module_id: "Module_E", difficulty: "Medium",
    tags: ["integration-by-parts"],
    content: "Tính $\\int x e^x \\, dx$ bằng tích phân từng phần ($u = x$, $dv = e^x dx$).",
    options: [
      "A. $xe^x + e^x + C$",
      "B. $xe^x - e^x + C$",
      "C. $e^x + C$",
      "D. $x^2 e^x + C$"
    ],
    correct_option: "B",
    explanation: "Dùng công thức tích phân từng phần: $\\int u\\,dv = uv - \\int v\\,du$. $u=x$, $v=e^x$, $du=dx$. Kết quả: $xe^x - \\int e^x\\,dx = xe^x - e^x + C$."
  },
  {
    id: "Q_MOD_E_022", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 (x^2 - x) \\, dx$.",
    options: [
      "A. $\\frac{2}{3}$",
      "B. $\\frac{4}{3}$",
      "C. $2$",
      "D. $\\frac{8}{3}$"
    ],
    correct_option: "A",
    explanation: "$\\int_0^2 (x^2-x)\\,dx = \\left[\\frac{x^3}{3} - \\frac{x^2}{2}\\right]_0^2 = \\frac{8}{3} - 2 = \\frac{8-6}{3} = \\frac{2}{3}$."
  },
  {
    id: "Q_MOD_E_023", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (x^3 - 2x + 1) \\, dx$.",
    options: [
      "A. $\\frac{x^4}{4} - x^2 + x + C$",
      "B. $3x^2 - 2 + C$",
      "C. $\\frac{x^4}{4} + x^2 + x + C$",
      "D. $x^4 - 2x^2 + x + C$"
    ],
    correct_option: "A",
    explanation: "$\\int (x^3-2x+1)\\,dx = \\frac{x^4}{4} - x^2 + x + C$."
  },
  {
    id: "Q_MOD_E_024", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\cos(2x) \\, dx$.",
    options: [
      "A. $\\frac{\\sin(2x)}{2} + C$",
      "B. $2\\sin(2x) + C$",
      "C. $-\\frac{\\cos(2x)}{2} + C$",
      "D. $\\sin(2x) + C$"
    ],
    correct_option: "A",
    explanation: "Đặt $u = 2x$, $du = 2\\,dx$: $\\int \\cos(2x)\\,dx = \\frac{1}{2}\\int \\cos u\\,du = \\frac{\\sin(2x)}{2} + C$."
  },
  {
    id: "Q_MOD_E_025", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = x$, trục $Ox$, từ $x=0$ đến $x=2$ là bao nhiêu?",
    options: [
      "A. $1$",
      "B. $2$",
      "C. $4$",
      "D. $3$"
    ],
    correct_option: "B",
    explanation: "Diện tích = $\\int_0^2 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^2 = 2$."
  },
  {
    id: "Q_MOD_E_026", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int 5 \\, dx$.",
    options: [
      "A. $5 + C$",
      "B. $0 + C$",
      "C. $5x + C$",
      "D. $\\frac{5}{x} + C$"
    ],
    correct_option: "C",
    explanation: "$\\int 5 \\, dx = 5x + C$ vì nguyên hàm của hằng số $a$ là $ax + C$."
  },
  {
    id: "Q_MOD_E_027", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi/2} \\cos x \\, dx$.",
    options: [
      "A. $0$",
      "B. $1$",
      "C. $-1$",
      "D. $\\pi$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^{\\pi/2} \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = \\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$."
  },
  {
    id: "Q_MOD_E_028", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\sin(3x) \\, dx$.",
    options: [
      "A. $3\\cos(3x) + C$",
      "B. $-\\frac{\\cos(3x)}{3} + C$",
      "C. $\\frac{\\cos(3x)}{3} + C$",
      "D. $-3\\cos(3x) + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u = 3x$, $du = 3\\,dx$: $\\int \\sin(3x)\\,dx = \\frac{1}{3}\\int \\sin u\\,du = -\\frac{\\cos(3x)}{3} + C$."
  },
  {
    id: "Q_MOD_E_029", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{\\sqrt{x}} \\, dx$ với $x > 0$.",
    options: [
      "A. $\\sqrt{x} + C$",
      "B. $2\\sqrt{x} + C$",
      "C. $-2\\sqrt{x} + C$",
      "D. $\\frac{1}{2\\sqrt{x}} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int x^{-1/2}\\,dx = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C$."
  },
  {
    id: "Q_MOD_E_030", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 (2x + 1) \\, dx$.",
    options: [
      "A. $1$",
      "B. $2$",
      "C. $3$",
      "D. $4$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^1 (2x+1)\\,dx = [x^2 + x]_0^1 = 1 + 1 - 0 = 2$."
  },
  {
    id: "Q_MOD_E_031", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int 4x^3 \\, dx$.",
    options: [
      "A. $12x^2 + C$",
      "B. $x^4 + C$",
      "C. $4x^4 + C$",
      "D. $\\frac{4x^4}{3} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int 4x^3\\,dx = 4 \\cdot \\frac{x^4}{4} + C = x^4 + C$."
  },
  {
    id: "Q_MOD_E_032", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = x^2$ và $y = x$ (từ $x=0$ đến $x=1$) là bao nhiêu?",
    options: [
      "A. $\\frac{1}{6}$",
      "B. $\\frac{1}{4}$",
      "C. $\\frac{1}{3}$",
      "D. $\\frac{1}{2}$"
    ],
    correct_option: "A",
    explanation: "Diện tích = $\\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    id: "Q_MOD_E_033", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^4 \\sqrt{x} \\, dx$.",
    options: [
      "A. $\\frac{14}{3}$",
      "B. $\\frac{16}{3}$",
      "C. $4$",
      "D. $\\frac{2}{3}$"
    ],
    correct_option: "A",
    explanation: "$\\int_1^4 x^{1/2}\\,dx = \\left[\\frac{2x^{3/2}}{3}\\right]_1^4 = \\frac{2 \\cdot 8}{3} - \\frac{2 \\cdot 1}{3} = \\frac{16}{3} - \\frac{2}{3} = \\frac{14}{3}$."
  },
  {
    id: "Q_MOD_E_034", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (e^x + 1) \\, dx$.",
    options: [
      "A. $e^x + C$",
      "B. $e^x + x + C$",
      "C. $xe^x + x + C$",
      "D. $e^x - x + C$"
    ],
    correct_option: "B",
    explanation: "$\\int (e^x + 1)\\,dx = e^x + x + C$."
  },
  {
    id: "Q_MOD_E_035", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int (3x+1)^4 \\, dx$ bằng phép đổi biến $u = 3x+1$.",
    options: [
      "A. $\\frac{(3x+1)^5}{5} + C$",
      "B. $\\frac{(3x+1)^5}{15} + C$",
      "C. $3(3x+1)^5 + C$",
      "D. $5(3x+1)^3 + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=3x+1$, $du=3\\,dx$: $\\int (3x+1)^4\\,dx = \\frac{1}{3}\\int u^4\\,du = \\frac{u^5}{15} + C = \\frac{(3x+1)^5}{15} + C$."
  },
  {
    id: "Q_MOD_E_036", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^3 (x^2 + 2) \\, dx$.",
    options: [
      "A. $9$",
      "B. $12$",
      "C. $15$",
      "D. $18$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^3 (x^2+2)\\,dx = \\left[\\frac{x^3}{3} + 2x\\right]_0^3 = 9 + 6 = 15$."
  },
  {
    id: "Q_MOD_E_037", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\sec^2 x \\, dx$.",
    options: [
      "A. $\\sin x + C$",
      "B. $\\tan x + C$",
      "C. $\\sec x \\tan x + C$",
      "D. $-\\cot x + C$"
    ],
    correct_option: "B",
    explanation: "Vì $\\frac{d}{dx}(\\tan x) = \\sec^2 x$, nên $\\int \\sec^2 x\\,dx = \\tan x + C$."
  },
  {
    id: "Q_MOD_E_038", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi/4} \\sec^2 x \\, dx$.",
    options: [
      "A. $0$",
      "B. $\\frac{1}{2}$",
      "C. $1$",
      "D. $\\sqrt{2}$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^{\\pi/4} \\sec^2 x\\,dx = [\\tan x]_0^{\\pi/4} = \\tan(\\pi/4) - \\tan 0 = 1 - 0 = 1$."
  },
  {
    id: "Q_MOD_E_039", module_id: "Module_E", difficulty: "Medium",
    tags: ["integration-by-parts"],
    content: "Tính $\\int x \\cos x \\, dx$ bằng tích phân từng phần ($u = x$, $dv = \\cos x\\,dx$).",
    options: [
      "A. $x\\sin x + \\cos x + C$",
      "B. $x\\sin x - \\cos x + C$",
      "C. $\\cos x - x\\sin x + C$",
      "D. $x\\cos x + \\sin x + C$"
    ],
    correct_option: "A",
    explanation: "$u=x$, $v=\\sin x$, $du=dx$: $\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$."
  },
  {
    id: "Q_MOD_E_040", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{x^2 + 1}{x} \\, dx$ với $x > 0$.",
    options: [
      "A. $x + \\ln x + C$",
      "B. $\\frac{x^2}{2} + \\ln x + C$",
      "C. $x^2 + \\ln x + C$",
      "D. $\\frac{x^2 + 1}{2} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int \\frac{x^2+1}{x}\\,dx = \\int \\left(x + \\frac{1}{x}\\right)\\,dx = \\frac{x^2}{2} + \\ln x + C$."
  },
  {
    id: "Q_MOD_E_041", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^2 \\frac{1}{x^2} \\, dx$.",
    options: [
      "A. $\\frac{1}{4}$",
      "B. $\\frac{1}{2}$",
      "C. $1$",
      "D. $\\ln 2$"
    ],
    correct_option: "B",
    explanation: "$\\int_1^2 x^{-2}\\,dx = \\left[-\\frac{1}{x}\\right]_1^2 = -\\frac{1}{2} + 1 = \\frac{1}{2}$."
  },
  {
    id: "Q_MOD_E_042", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{e^x}{e^x + 1} \\, dx$.",
    options: [
      "A. $e^x + 1 + C$",
      "B. $\\ln(e^x - 1) + C$",
      "C. $\\ln(e^x + 1) + C$",
      "D. $\\frac{1}{e^x+1} + C$"
    ],
    correct_option: "C",
    explanation: "Đặt $u = e^x + 1$, $du = e^x\\,dx$: $\\int \\frac{e^x}{e^x+1}\\,dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln(e^x+1) + C$."
  },
  {
    id: "Q_MOD_E_043", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (x - 1)(x + 1) \\, dx$.",
    options: [
      "A. $\\frac{x^3}{3} - x + C$",
      "B. $x^2 - 1 + C$",
      "C. $\\frac{x^2}{2} + C$",
      "D. $\\frac{x^3}{3} + x + C$"
    ],
    correct_option: "A",
    explanation: "$(x-1)(x+1) = x^2 - 1$. Vậy $\\int (x^2-1)\\,dx = \\frac{x^3}{3} - x + C$."
  },
  {
    id: "Q_MOD_E_044", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 (3x^2 - 2x + 1) \\, dx$.",
    options: [
      "A. $0$",
      "B. $1$",
      "C. $2$",
      "D. $3$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^1 (3x^2-2x+1)\\,dx = [x^3 - x^2 + x]_0^1 = 1 - 1 + 1 = 1$."
  },
  {
    id: "Q_MOD_E_045", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int 2^x \\, dx$.",
    options: [
      "A. $\\frac{2^x}{\\ln 2} + C$",
      "B. $2^x \\ln 2 + C$",
      "C. $x \\cdot 2^{x-1} + C$",
      "D. $2^{x+1} + C$"
    ],
    correct_option: "A",
    explanation: "Công thức nguyên hàm của hàm mũ: $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. Với $a=2$: $\\int 2^x\\,dx = \\frac{2^x}{\\ln 2} + C$."
  },
  {
    id: "Q_MOD_E_046", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = x^2 + 1$, trục $Ox$ từ $x=-1$ đến $x=1$ là bao nhiêu?",
    options: [
      "A. $\\frac{4}{3}$",
      "B. $\\frac{8}{3}$",
      "C. $2$",
      "D. $4$"
    ],
    correct_option: "B",
    explanation: "Vì $y = x^2 + 1 > 0$ với mọi $x$: diện tích = $\\int_{-1}^1 (x^2+1)\\,dx = \\left[\\frac{x^3}{3}+x\\right]_{-1}^1 = (\\frac{1}{3}+1)-(\\frac{-1}{3}-1) = \\frac{8}{3}$."
  },
  {
    id: "Q_MOD_E_047", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int x\\sqrt{x^2 + 1} \\, dx$ bằng phép đổi biến $u = x^2 + 1$.",
    options: [
      "A. $\\sqrt{x^2+1} + C$",
      "B. $\\frac{(x^2+1)^{3/2}}{3} + C$",
      "C. $2(x^2+1)^{3/2} + C$",
      "D. $\\frac{x^2 \\sqrt{x^2+1}}{2} + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=x^2+1$, $du=2x\\,dx$: $\\int x\\sqrt{x^2+1}\\,dx = \\frac{1}{2}\\int \\sqrt{u}\\,du = \\frac{1}{2}\\cdot\\frac{2u^{3/2}}{3} = \\frac{(x^2+1)^{3/2}}{3} + C$."
  },
  {
    id: "Q_MOD_E_048", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 e^{2x} \\, dx$.",
    options: [
      "A. $\\frac{e^4 - 1}{2}$",
      "B. $e^4 - 1$",
      "C. $\\frac{e^4}{2}$",
      "D. $2(e^4 - 1)$"
    ],
    correct_option: "A",
    explanation: "$\\int_0^2 e^{2x}\\,dx = \\left[\\frac{e^{2x}}{2}\\right]_0^2 = \\frac{e^4}{2} - \\frac{1}{2} = \\frac{e^4-1}{2}$."
  },
  {
    id: "Q_MOD_E_049", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{3}{x} \\, dx$ với $x > 0$.",
    options: [
      "A. $3\\ln x + C$",
      "B. $\\frac{3}{x^2} + C$",
      "C. $-\\frac{3}{x^2} + C$",
      "D. $\\ln(3x) + C$"
    ],
    correct_option: "A",
    explanation: "$\\int \\frac{3}{x}\\,dx = 3\\int \\frac{1}{x}\\,dx = 3\\ln|x| + C = 3\\ln x + C$ (với $x > 0$)."
  },
  {
    id: "Q_MOD_E_050", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 x^3 \\, dx$.",
    options: [
      "A. $\\frac{1}{8}$",
      "B. $\\frac{1}{4}$",
      "C. $\\frac{1}{3}$",
      "D. $\\frac{3}{4}$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^1 x^3\\,dx = \\left[\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4}$."
  },
  {
    id: "Q_MOD_E_051", module_id: "Module_E", difficulty: "Medium",
    tags: ["integration-by-parts"],
    content: "Tính $\\int \\ln x \\, dx$ với $x > 0$ bằng tích phân từng phần ($u = \\ln x$, $dv = dx$).",
    options: [
      "A. $\\frac{1}{x} + C$",
      "B. $x\\ln x + x + C$",
      "C. $x\\ln x - x + C$",
      "D. $\\ln^2 x + C$"
    ],
    correct_option: "C",
    explanation: "$u=\\ln x$, $v=x$, $du=\\frac{dx}{x}$: $\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\ln x - x + C$."
  },
  {
    id: "Q_MOD_E_052", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (x^2 + x + 1) \\, dx$.",
    options: [
      "A. $\\frac{x^3}{3} + \\frac{x^2}{2} + x + C$",
      "B. $2x + 1 + C$",
      "C. $x^3 + x^2 + x + C$",
      "D. $\\frac{x^2}{2} + x + C$"
    ],
    correct_option: "A",
    explanation: "$\\int (x^2+x+1)\\,dx = \\frac{x^3}{3} + \\frac{x^2}{2} + x + C$."
  },
  {
    id: "Q_MOD_E_053", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^2 (2x - 1) \\, dx$.",
    options: [
      "A. $1$",
      "B. $2$",
      "C. $3$",
      "D. $4$"
    ],
    correct_option: "B",
    explanation: "$\\int_1^2 (2x-1)\\,dx = [x^2 - x]_1^2 = (4-2) - (1-1) = 2$."
  },
  {
    id: "Q_MOD_E_054", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{\\cos x}{\\sin x} \\, dx$ (với $\\sin x > 0$) bằng cách đặt $u = \\sin x$.",
    options: [
      "A. $\\sin x + C$",
      "B. $\\ln|\\sin x| + C$",
      "C. $-\\ln|\\sin x| + C$",
      "D. $\\cos^2 x + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=\\sin x$, $du=\\cos x\\,dx$: $\\int \\frac{\\cos x}{\\sin x}\\,dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln|\\sin x| + C$."
  },
  {
    id: "Q_MOD_E_055", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = e^x$, trục $Ox$ từ $x=0$ đến $x=1$ là bao nhiêu?",
    options: [
      "A. $e$",
      "B. $e - 1$",
      "C. $e + 1$",
      "D. $1$"
    ],
    correct_option: "B",
    explanation: "Diện tích = $\\int_0^1 e^x\\,dx = [e^x]_0^1 = e - 1$."
  },
  {
    id: "Q_MOD_E_056", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{x+1}{x} \\, dx$ với $x > 0$.",
    options: [
      "A. $\\ln x + C$",
      "B. $1 + \\ln x + C$",
      "C. $x + \\ln x + C$",
      "D. $\\frac{x+1}{x^2} + C$"
    ],
    correct_option: "C",
    explanation: "$\\frac{x+1}{x} = 1 + \\frac{1}{x}$. Vậy $\\int \\left(1+\\frac{1}{x}\\right)\\,dx = x + \\ln x + C$."
  },
  {
    id: "Q_MOD_E_057", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_2^5 1 \\, dx$.",
    options: [
      "A. $1$",
      "B. $2$",
      "C. $3$",
      "D. $5$"
    ],
    correct_option: "C",
    explanation: "$\\int_2^5 1\\,dx = [x]_2^5 = 5 - 2 = 3$."
  },
  {
    id: "Q_MOD_E_058", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{1}{2x+1} \\, dx$ bằng phép đổi biến $u = 2x+1$.",
    options: [
      "A. $2\\ln|2x+1| + C$",
      "B. $\\frac{\\ln|2x+1|}{2} + C$",
      "C. $\\ln|2x+1| + C$",
      "D. $-\\frac{1}{(2x+1)^2} + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=2x+1$, $du=2\\,dx$: $\\int \\frac{1}{2x+1}\\,dx = \\frac{1}{2}\\int \\frac{du}{u} = \\frac{\\ln|u|}{2} + C = \\frac{\\ln|2x+1|}{2} + C$."
  },
  {
    id: "Q_MOD_E_059", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 (3x^2 - 6x + 2) \\, dx$.",
    options: [
      "A. $-2$",
      "B. $0$",
      "C. $2$",
      "D. $4$"
    ],
    correct_option: "A",
    explanation: "$\\int_0^2 (3x^2-6x+2)\\,dx = [x^3 - 3x^2 + 2x]_0^2 = (8-12+4) - 0 = 0$. Kiểm tra lại: $8-12+4=0$. Đáp án B."
  },
  {
    id: "Q_MOD_E_060", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (5x^4 - 3x^2 + 2) \\, dx$.",
    options: [
      "A. $x^5 - x^3 + 2x + C$",
      "B. $20x^3 - 6x + C$",
      "C. $x^5 + x^3 + 2x + C$",
      "D. $5x^5 - 3x^3 + 2x + C$"
    ],
    correct_option: "A",
    explanation: "$\\int (5x^4-3x^2+2)\\,dx = x^5 - x^3 + 2x + C$."
  },
  {
    id: "Q_MOD_E_061", module_id: "Module_E", difficulty: "Medium",
    tags: ["integration-by-parts"],
    content: "Tính $\\int x^2 e^x \\, dx$ (biết rằng tích phân từng phần hai lần cho kết quả: $(x^2 - 2x + 2)e^x + C$). Đây là công thức nào?",
    options: [
      "A. Công thức tích phân từng phần áp dụng một lần.",
      "B. Công thức tích phân từng phần áp dụng liên tiếp hai lần.",
      "C. Công thức đổi biến số với $u = x^2$.",
      "D. Công thức nguyên hàm của hàm mũ thông thường."
    ],
    correct_option: "B",
    explanation: "Để tính $\\int x^2 e^x\\,dx$, ta áp dụng tích phân từng phần hai lần liên tiếp, mỗi lần giảm bậc của $x$ xuống một đơn vị, cho ra kết quả $(x^2-2x+2)e^x + C$."
  },
  {
    id: "Q_MOD_E_062", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi} x \\, dx$.",
    options: [
      "A. $\\frac{\\pi}{2}$",
      "B. $\\pi$",
      "C. $\\frac{\\pi^2}{2}$",
      "D. $\\pi^2$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^{\\pi} x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^{\\pi} = \\frac{\\pi^2}{2}$."
  },
  {
    id: "Q_MOD_E_063", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{1+x^2} \\, dx$.",
    options: [
      "A. $\\ln(1+x^2) + C$",
      "B. $\\frac{1}{2}\\ln(1+x^2) + C$",
      "C. $\\arctan x + C$",
      "D. $\\arcsin x + C$"
    ],
    correct_option: "C",
    explanation: "Đây là công thức cơ bản: $\\int \\frac{1}{1+x^2}\\,dx = \\arctan x + C$."
  },
  {
    id: "Q_MOD_E_064", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 \\frac{1}{1+x^2} \\, dx$.",
    options: [
      "A. $\\frac{\\pi}{6}$",
      "B. $\\frac{\\pi}{4}$",
      "C. $\\frac{\\pi}{3}$",
      "D. $\\frac{\\pi}{2}$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^1 \\frac{1}{1+x^2}\\,dx = [\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$."
  },
  {
    id: "Q_MOD_E_065", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\cos x \\cdot e^{\\sin x} \\, dx$ bằng phép đổi biến $u = \\sin x$.",
    options: [
      "A. $e^{\\sin x} \\cos x + C$",
      "B. $e^{\\sin x} + C$",
      "C. $\\sin x \\cdot e^{\\sin x} + C$",
      "D. $-e^{\\sin x} + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=\\sin x$, $du=\\cos x\\,dx$: $\\int \\cos x \\cdot e^{\\sin x}\\,dx = \\int e^u\\,du = e^u + C = e^{\\sin x} + C$."
  },
  {
    id: "Q_MOD_E_066", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = \\sin x$ và trục $Ox$ từ $x=0$ đến $x=\\pi$ là bao nhiêu?",
    options: [
      "A. $0$",
      "B. $1$",
      "C. $2$",
      "D. $\\pi$"
    ],
    correct_option: "C",
    explanation: "Vì $\\sin x \\geq 0$ trên $[0,\\pi]$: diện tích = $\\int_0^{\\pi}\\sin x\\,dx = [-\\cos x]_0^{\\pi} = 1+1=2$."
  },
  {
    id: "Q_MOD_E_067", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (e^x - e^{-x}) \\, dx$.",
    options: [
      "A. $e^x + e^{-x} + C$",
      "B. $e^x - e^{-x} + C$",
      "C. $e^{-x} - e^x + C$",
      "D. $2e^x + C$"
    ],
    correct_option: "A",
    explanation: "$\\int (e^x - e^{-x})\\,dx = e^x + e^{-x} + C$ vì $\\int e^{-x}\\,dx = -e^{-x}$ và đổi dấu: $-(-e^{-x}) = +e^{-x}$."
  },
  {
    id: "Q_MOD_E_068", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 |x - 1| \\, dx$.",
    options: [
      "A. $0$",
      "B. $\\frac{1}{2}$",
      "C. $1$",
      "D. $2$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^2|x-1|\\,dx = \\int_0^1(1-x)\\,dx + \\int_1^2(x-1)\\,dx = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    id: "Q_MOD_E_069", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx$ với $|x| < 1$.",
    options: [
      "A. $\\arctan x + C$",
      "B. $\\arcsin x + C$",
      "C. $\\arccos x + C$",
      "D. $\\ln|x| + C$"
    ],
    correct_option: "B",
    explanation: "Đây là công thức cơ bản: $\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx = \\arcsin x + C$."
  },
  {
    id: "Q_MOD_E_070", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 (x^2 + 1)^2 \\, dx$ (sau khi khai triển).",
    options: [
      "A. $\\frac{23}{15}$",
      "B. $\\frac{28}{15}$",
      "C. $2$",
      "D. $\\frac{8}{3}$"
    ],
    correct_option: "B",
    explanation: "$(x^2+1)^2 = x^4 + 2x^2 + 1$. $\\int_0^1(x^4+2x^2+1)\\,dx = \\left[\\frac{x^5}{5}+\\frac{2x^3}{3}+x\\right]_0^1 = \\frac{1}{5}+\\frac{2}{3}+1 = \\frac{3+10+15}{15} = \\frac{28}{15}$."
  },
  {
    id: "Q_MOD_E_071", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\tan x \\, dx$ bằng cách viết $\\tan x = \\frac{\\sin x}{\\cos x}$ và đặt $u = \\cos x$.",
    options: [
      "A. $\\ln|\\cos x| + C$",
      "B. $-\\ln|\\cos x| + C$",
      "C. $\\ln|\\sin x| + C$",
      "D. $\\sec^2 x + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=\\cos x$, $du=-\\sin x\\,dx$: $\\int \\frac{\\sin x}{\\cos x}\\,dx = -\\int \\frac{du}{u} = -\\ln|u|+C = -\\ln|\\cos x|+C$."
  },
  {
    id: "Q_MOD_E_072", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int (\\sin x + \\cos x) \\, dx$.",
    options: [
      "A. $\\cos x + \\sin x + C$",
      "B. $-\\cos x + \\sin x + C$",
      "C. $\\cos x - \\sin x + C$",
      "D. $-\\sin x - \\cos x + C$"
    ],
    correct_option: "B",
    explanation: "$\\int (\\sin x + \\cos x)\\,dx = -\\cos x + \\sin x + C$."
  },
  {
    id: "Q_MOD_E_073", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 \\ln(x+1) \\, dx$ (biết rằng kết quả là $2\\ln 2 - 1$).",
    options: [
      "A. $\\ln 2 - 1$",
      "B. $2\\ln 2 - 1$",
      "C. $\\ln 2$",
      "D. $2\\ln 2$"
    ],
    correct_option: "B",
    explanation: "Dùng tích phân từng phần: $u=\\ln(x+1)$, $v=x$. Kết quả là $[(x+1)\\ln(x+1) - x]_0^1 = 2\\ln 2 - 1$."
  },
  {
    id: "Q_MOD_E_074", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{x}{x^2 + 1} \\, dx$.",
    options: [
      "A. $\\arctan x + C$",
      "B. $\\ln(x^2+1) + C$",
      "C. $\\frac{\\ln(x^2+1)}{2} + C$",
      "D. $\\frac{1}{x^2+1} + C$"
    ],
    correct_option: "C",
    explanation: "Đặt $u=x^2+1$, $du=2x\\,dx$: $\\int \\frac{x}{x^2+1}\\,dx = \\frac{1}{2}\\int \\frac{du}{u} = \\frac{\\ln|u|}{2}+C = \\frac{\\ln(x^2+1)}{2}+C$."
  },
  {
    id: "Q_MOD_E_075", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Diện tích hình phẳng giới hạn bởi $y = x$ và $y = x^2$ trên đoạn $[0,1]$ là?",
    options: [
      "A. $\\frac{1}{3}$",
      "B. $\\frac{1}{4}$",
      "C. $\\frac{1}{6}$",
      "D. $\\frac{1}{2}$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2}-\\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    id: "Q_MOD_E_076", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 x^4 \\, dx$.",
    options: [
      "A. $\\frac{16}{3}$",
      "B. $\\frac{32}{5}$",
      "C. $8$",
      "D. $\\frac{32}{3}$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^2 x^4\\,dx = \\left[\\frac{x^5}{5}\\right]_0^2 = \\frac{32}{5}$."
  },
  {
    id: "Q_MOD_E_077", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{2x+3}{x^2+3x+1} \\, dx$ biết rằng tử số là đạo hàm của mẫu số.",
    options: [
      "A. $2\\ln|x^2+3x+1| + C$",
      "B. $\\ln|x^2+3x+1| + C$",
      "C. $\\frac{1}{x^2+3x+1} + C$",
      "D. $\\arctan(x^2+3x+1) + C$"
    ],
    correct_option: "B",
    explanation: "Vì $(x^2+3x+1)' = 2x+3$, nên $\\int \\frac{2x+3}{x^2+3x+1}\\,dx = \\ln|x^2+3x+1|+C$."
  },
  {
    id: "Q_MOD_E_078", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi/2} \\sin^2 x \\, dx$ (dùng công thức: $\\sin^2 x = \\frac{1-\\cos 2x}{2}$).",
    options: [
      "A. $\\frac{\\pi}{8}$",
      "B. $\\frac{\\pi}{4}$",
      "C. $\\frac{\\pi}{2}$",
      "D. $\\pi$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^{\\pi/2}\\frac{1-\\cos 2x}{2}\\,dx = \\left[\\frac{x}{2}-\\frac{\\sin 2x}{4}\\right]_0^{\\pi/2} = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$."
  },
  {
    id: "Q_MOD_E_079", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{\\ln x}{x} \\, dx$ với $x > 0$ bằng đặt $u = \\ln x$.",
    options: [
      "A. $\\frac{(\\ln x)^2}{2} + C$",
      "B. $\\ln x + C$",
      "C. $\\frac{1}{x} + C$",
      "D. $(\\ln x)^2 + C$"
    ],
    correct_option: "A",
    explanation: "Đặt $u=\\ln x$, $du=\\frac{1}{x}dx$: $\\int \\frac{\\ln x}{x}\\,dx = \\int u\\,du = \\frac{u^2}{2}+C = \\frac{(\\ln x)^2}{2}+C$."
  },
  {
    id: "Q_MOD_E_080", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int e^{-x} \\, dx$.",
    options: [
      "A. $e^{-x} + C$",
      "B. $-e^{-x} + C$",
      "C. $xe^{-x} + C$",
      "D. $\\frac{e^{-x}}{x} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int e^{-x}\\,dx = -e^{-x}+C$ (đặt $u=-x$, $du=-dx$)."
  },
  {
    id: "Q_MOD_E_081", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 xe^x \\, dx$.",
    options: [
      "A. $1$",
      "B. $e - 1$",
      "C. $e + 1$",
      "D. $e$"
    ],
    correct_option: "A",
    explanation: "Dùng tích phân từng phần: $[xe^x - e^x]_0^1 = (e-e) - (0-1) = 0+1 = 1$."
  },
  {
    id: "Q_MOD_E_082", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{x(x+1)} \\, dx$ bằng phân tích phân số từng phần: $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1}$.",
    options: [
      "A. $\\ln|x+1| - \\ln|x| + C$",
      "B. $\\ln\\left|\\frac{x}{x+1}\\right| + C$",
      "C. $\\frac{1}{x} - \\frac{1}{x+1} + C$",
      "D. $\\frac{1}{x(x+1)} + C$"
    ],
    correct_option: "B",
    explanation: "$\\int \\left(\\frac{1}{x} - \\frac{1}{x+1}\\right)\\,dx = \\ln|x| - \\ln|x+1| + C = \\ln\\left|\\frac{x}{x+1}\\right| + C$."
  },
  {
    id: "Q_MOD_E_083", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 \\sqrt{1 - x^2} \\, dx$ (diện tích phần tư hình tròn bán kính 1).",
    options: [
      "A. $\\frac{\\pi}{6}$",
      "B. $\\frac{\\pi}{4}$",
      "C. $\\frac{\\pi}{2}$",
      "D. $\\pi$"
    ],
    correct_option: "B",
    explanation: "Tích phân $\\int_0^1 \\sqrt{1-x^2}\\,dx$ biểu diễn diện tích $\\frac{1}{4}$ hình tròn bán kính 1. Diện tích = $\\frac{\\pi \\cdot 1^2}{4} = \\frac{\\pi}{4}$."
  },
  {
    id: "Q_MOD_E_084", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{e^x + e^{-x}}{2} \\, dx$.",
    options: [
      "A. $\\frac{e^x - e^{-x}}{2} + C$",
      "B. $\\frac{e^x + e^{-x}}{2} + C$",
      "C. $e^x + e^{-x} + C$",
      "D. $\\frac{e^x + e^{-x}}{4} + C$"
    ],
    correct_option: "A",
    explanation: "$\\int \\frac{e^x+e^{-x}}{2}\\,dx = \\frac{1}{2}(e^x - e^{-x}) \\cdot \\frac{1}{-1}$... Tính lại: $\\int \\frac{e^x}{2}\\,dx = \\frac{e^x}{2}$ và $\\int \\frac{e^{-x}}{2}\\,dx = -\\frac{e^{-x}}{2}$, tổng là $\\frac{e^x-e^{-x}}{2}+C$."
  },
  {
    id: "Q_MOD_E_085", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_1^2 x \\ln x \\, dx$ (biết kết quả là $\\frac{4\\ln 2 - 3}{4}$... thực ra = $2\\ln 2 - \\frac{3}{4}$).",
    options: [
      "A. $\\ln 2 - \\frac{1}{4}$",
      "B. $2\\ln 2 - \\frac{3}{4}$",
      "C. $\\ln 2$",
      "D. $2\\ln 2$"
    ],
    correct_option: "B",
    explanation: "Tích phân từng phần: $u=\\ln x$, $v=\\frac{x^2}{2}$. $\\left[\\frac{x^2\\ln x}{2}\\right]_1^2 - \\int_1^2 \\frac{x}{2}\\,dx = 2\\ln 2 - \\left[\\frac{x^2}{4}\\right]_1^2 = 2\\ln 2 - (1-\\frac{1}{4}) = 2\\ln 2 - \\frac{3}{4}$."
  },
  {
    id: "Q_MOD_E_086", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{x^2 - 1} \\, dx$ biết $\\frac{1}{x^2-1} = \\frac{1}{2}\\left(\\frac{1}{x-1}-\\frac{1}{x+1}\\right)$.",
    options: [
      "A. $\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$",
      "B. $\\ln|x^2-1| + C$",
      "C. $-\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$",
      "D. $\\frac{\\ln|x-1|}{x+1} + C$"
    ],
    correct_option: "A",
    explanation: "$\\int \\frac{1}{2}\\left(\\frac{1}{x-1}-\\frac{1}{x+1}\\right)dx = \\frac{1}{2}(\\ln|x-1|-\\ln|x+1|)+C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right|+C$."
  },
  {
    id: "Q_MOD_E_087", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^4 \\sqrt{x} \\, dx$.",
    options: [
      "A. $\\frac{4}{3}$",
      "B. $\\frac{8}{3}$",
      "C. $\\frac{16}{3}$",
      "D. $4$"
    ],
    correct_option: "C",
    explanation: "$\\int_0^4 x^{1/2}\\,dx = \\left[\\frac{2x^{3/2}}{3}\\right]_0^4 = \\frac{2 \\cdot 8}{3} = \\frac{16}{3}$."
  },
  {
    id: "Q_MOD_E_088", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{x^2 - 1}{x} \\, dx$ với $x > 0$.",
    options: [
      "A. $\\frac{x^2}{2} - \\ln x + C$",
      "B. $x - \\frac{1}{x} + C$",
      "C. $x^2 + \\ln x + C$",
      "D. $\\frac{x^2}{2} + \\ln x + C$"
    ],
    correct_option: "A",
    explanation: "$\\frac{x^2-1}{x} = x - \\frac{1}{x}$. $\\int \\left(x-\\frac{1}{x}\\right)dx = \\frac{x^2}{2} - \\ln x + C$."
  },
  {
    id: "Q_MOD_E_089", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^2 (x+1)^3 \\, dx$.",
    options: [
      "A. $\\frac{15}{4}$",
      "B. $20$",
      "C. $\\frac{80}{4}$",
      "D. $\\frac{65}{4}$"
    ],
    correct_option: "D",
    explanation: "$\\int_0^2 (x+1)^3\\,dx = \\left[\\frac{(x+1)^4}{4}\\right]_0^2 = \\frac{81}{4} - \\frac{1}{4} = \\frac{80}{4} = 20$. Kiểm lại: $3^4=81$, $1^4=1$, $(81-1)/4=20$. Đáp án B."
  },
  {
    id: "Q_MOD_E_090", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{x}{\\sqrt{x^2+4}} \\, dx$ bằng đặt $u = x^2 + 4$.",
    options: [
      "A. $\\sqrt{x^2+4} + C$",
      "B. $2\\sqrt{x^2+4} + C$",
      "C. $\\frac{\\sqrt{x^2+4}}{2} + C$",
      "D. $\\ln(x^2+4) + C$"
    ],
    correct_option: "A",
    explanation: "Đặt $u=x^2+4$, $du=2x\\,dx$: $\\int \\frac{x}{\\sqrt{x^2+4}}\\,dx = \\frac{1}{2}\\int \\frac{du}{\\sqrt{u}} = \\frac{1}{2}\\cdot 2\\sqrt{u}+C = \\sqrt{x^2+4}+C$."
  },
  {
    id: "Q_MOD_E_091", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{1}{2} e^{x/2} \\, dx$.",
    options: [
      "A. $e^{x/2} + C$",
      "B. $\\frac{1}{4}e^{x/2} + C$",
      "C. $2e^{x/2} + C$",
      "D. $\\frac{e^{x/2}}{4} + C$"
    ],
    correct_option: "A",
    explanation: "$\\int \\frac{1}{2}e^{x/2}\\,dx = \\frac{1}{2} \\cdot 2 e^{x/2} + C = e^{x/2}+C$ (vì $\\int e^{x/2}\\,dx = 2e^{x/2}$)."
  },
  {
    id: "Q_MOD_E_092", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Nếu $\\int_0^a x \\, dx = 8$, giá trị của $a$ là bao nhiêu?",
    options: [
      "A. $2$",
      "B. $4$",
      "C. $8$",
      "D. $16$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^a x\\,dx = \\frac{a^2}{2} = 8 \\Rightarrow a^2 = 16 \\Rightarrow a = 4$."
  },
  {
    id: "Q_MOD_E_093", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\frac{3x^2}{x^3 + 1} \\, dx$.",
    options: [
      "A. $3\\ln|x^3+1| + C$",
      "B. $\\frac{\\ln|x^3+1|}{3} + C$",
      "C. $\\ln|x^3+1| + C$",
      "D. $\\frac{1}{x^3+1} + C$"
    ],
    correct_option: "C",
    explanation: "Tử số là đạo hàm của mẫu: $(x^3+1)'=3x^2$. Vậy $\\int \\frac{3x^2}{x^3+1}\\,dx = \\ln|x^3+1|+C$."
  },
  {
    id: "Q_MOD_E_094", module_id: "Module_E", difficulty: "Medium",
    tags: ["area"],
    content: "Tính diện tích hình phẳng giới hạn bởi $y = x^2 - 4$ và trục $Ox$ (phần mà đường cong nằm dưới trục $Ox$).",
    options: [
      "A. $\\frac{16}{3}$",
      "B. $\\frac{32}{3}$",
      "C. $8$",
      "D. $\\frac{4}{3}$"
    ],
    correct_option: "B",
    explanation: "$x^2-4 \\leq 0$ khi $-2 \\leq x \\leq 2$. Diện tích = $\\int_{-2}^2 (4-x^2)\\,dx = \\left[4x-\\frac{x^3}{3}\\right]_{-2}^2 = (8-\\frac{8}{3})-(-8+\\frac{8}{3}) = \\frac{32}{3}$."
  },
  {
    id: "Q_MOD_E_095", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 2xe^{x^2} \\, dx$.",
    options: [
      "A. $e - 1$",
      "B. $e$",
      "C. $e + 1$",
      "D. $2e - 1$"
    ],
    correct_option: "A",
    explanation: "Đặt $u=x^2$, $du=2x\\,dx$: $\\int_0^1 2xe^{x^2}\\,dx = \\int_0^1 e^u\\,du = [e^u]_0^1 = e-1$."
  },
  {
    id: "Q_MOD_E_096", module_id: "Module_E", difficulty: "Medium",
    tags: ["indefinite-integral"],
    content: "Tính $\\int \\cot x \\, dx$ (với $\\sin x \\neq 0$) biết $\\cot x = \\frac{\\cos x}{\\sin x}$.",
    options: [
      "A. $-\\ln|\\sin x| + C$",
      "B. $\\ln|\\cos x| + C$",
      "C. $\\ln|\\sin x| + C$",
      "D. $-\\ln|\\cos x| + C$"
    ],
    correct_option: "C",
    explanation: "$\\int \\frac{\\cos x}{\\sin x}\\,dx$: đặt $u=\\sin x$, $du=\\cos x\\,dx$: $\\int \\frac{du}{u} = \\ln|u|+C = \\ln|\\sin x|+C$."
  },
  {
    id: "Q_MOD_E_097", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^{\\pi/2} \\cos^2 x \\, dx$ (dùng công thức $\\cos^2 x = \\frac{1+\\cos 2x}{2}$).",
    options: [
      "A. $\\frac{\\pi}{8}$",
      "B. $\\frac{\\pi}{4}$",
      "C. $\\frac{\\pi}{2}$",
      "D. $\\pi$"
    ],
    correct_option: "B",
    explanation: "$\\int_0^{\\pi/2}\\frac{1+\\cos 2x}{2}\\,dx = \\left[\\frac{x}{2}+\\frac{\\sin 2x}{4}\\right]_0^{\\pi/2} = \\frac{\\pi}{4}+0 = \\frac{\\pi}{4}$."
  },
  {
    id: "Q_MOD_E_098", module_id: "Module_E", difficulty: "Medium",
    tags: ["substitution"],
    content: "Tính $\\int \\frac{\\sin x}{1 + \\cos^2 x} \\, dx$ bằng đặt $u = \\cos x$.",
    options: [
      "A. $\\arctan(\\cos x) + C$",
      "B. $-\\arctan(\\cos x) + C$",
      "C. $\\arcsin(\\cos x) + C$",
      "D. $\\ln|1+\\cos^2 x| + C$"
    ],
    correct_option: "B",
    explanation: "Đặt $u=\\cos x$, $du=-\\sin x\\,dx$: $\\int \\frac{\\sin x}{1+\\cos^2 x}\\,dx = -\\int \\frac{du}{1+u^2} = -\\arctan u+C = -\\arctan(\\cos x)+C$."
  },
  {
    id: "Q_MOD_E_099", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Nếu $f(x) = 3x^2$ và $F(x)$ là một nguyên hàm của $f(x)$, tính $F(2) - F(0)$.",
    options: [
      "A. $4$",
      "B. $6$",
      "C. $8$",
      "D. $12$"
    ],
    correct_option: "C",
    explanation: "Theo định lý cơ bản của giải tích: $F(2)-F(0) = \\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8$."
  },
  {
    id: "Q_MOD_E_100", module_id: "Module_E", difficulty: "Medium",
    tags: ["definite-integral"],
    content: "Tính $\\int_0^1 (e^x - e^{-x}) \\, dx$.",
    options: [
      "A. $e + e^{-1} - 2$",
      "B. $e - e^{-1}$",
      "C. $2e - 2$",
      "D. $e - \\frac{1}{e} - 2$"
    ],
    correct_option: "A",
    explanation: "$\\int_0^1 (e^x-e^{-x})\\,dx = [e^x+e^{-x}]_0^1 = (e+e^{-1}) - (1+1) = e + e^{-1} - 2$."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_E;
}
