const QUESTIONS_MATH = [
  // ==========================================
  // MODULE A: Vector & Phép toán Vector (001 - 010)
  // ==========================================
  {
    "id": "Q_MATH_A_001",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["math", "vector", "dot-product"],
    "content": "Cho hai vector $\\vec{u} = (2, 3)$ và $\\vec{v} = (4, -1)$ trong không gian $\\mathbb{R}^2$. Tích vô hướng (dot product) $\\vec{u} \\cdot \\vec{v}$ bằng bao nhiêu?",
    "options": [
      "A. 5",
      "B. 11",
      "C. -5",
      "D. 8"
    ],
    "correct_option": "A",
    "explanation": "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = 2 \\times 4 + 3 \\times (-1) = 8 - 3 = 5$.",
    "solution": "**Bước 1:** Xác định công thức tích vô hướng: $\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$.\n**Bước 2:** Thay số: $2 \\times 4 + 3 \\times (-1) = 8 - 3 = 5$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_A_002",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["math", "vector", "length"],
    "content": "Độ dài (chuẩn L2) của vector $\\vec{w} = (3, -4)$ trong không gian $\\mathbb{R}^2$ bằng bao nhiêu?",
    "options": [
      "A. 5",
      "B. 7",
      "C. $\\sqrt{7}$",
      "D. 25"
    ],
    "correct_option": "A",
    "explanation": "Độ dài vector $\\vec{w}$ ký hiệu là $\\|\\vec{w}\\|_2 = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
    "solution": "**Bước 1:** Độ dài vector bằng căn bậc hai của tổng bình phương các tọa độ: $\\|\\vec{w}\\| = \\sqrt{w_1^2 + w_2^2}$.\n**Bước 2:** Tính: $\\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_A_003",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["math", "vector", "addition"],
    "content": "Cho hai vector $\\vec{a} = (1, 5, -2)$ và $\\vec{b} = (-2, 0, 3)$ trong không gian $\\mathbb{R}^3$. Vector tổng $\\vec{a} + \\vec{b}$ có tọa độ là gì?",
    "options": [
      "A. $(-1, 5, 1)$",
      "B. $(3, 5, -5)$",
      "C. $(-2, 0, -6)$",
      "D. $(-1, 5, -5)$"
    ],
    "correct_option": "A",
    "explanation": "Phép cộng vector được tính theo từng thành phần: $\\vec{a} + \\vec{b} = (1 + (-2), 5 + 0, -2 + 3) = (-1, 5, 1)$.",
    "solution": "**Bước 1:** Cộng từng thành phần tương ứng: $x = 1 + (-2) = -1$, $y = 5 + 0 = 5$, $z = -2 + 3 = 1$.\n**Bước 2:** Vector tổng là $(-1, 5, 1)$. Chọn A."
  },
  {
    "id": "Q_MATH_A_004",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["math", "vector", "scalar-multiplication"],
    "content": "Cho vector $\\vec{v} = (2, -1, 4)$. Kết quả của phép nhân vô hướng $-3 \\vec{v}$ là vector nào dưới đây?",
    "options": [
      "A. $(-6, 3, -12)$",
      "B. $(6, -3, 12)$",
      "C. $(-6, -3, -12)$",
      "D. $(-6, 3, 12)$"
    ],
    "correct_option": "A",
    "explanation": "Nhân một số với một vector bằng cách nhân số đó với từng tọa độ: $-3 \\times (2, -1, 4) = (-6, 3, -12)$.",
    "solution": "**Bước 1:** Nhân hệ số $-3$ vào từng phần tử của vector.\n**Bước 2:** $-3 \\times 2 = -6$, $-3 \\times (-1) = 3$, $-3 \\times 4 = -12$.\n**Bước 3:** Vector thu được là $(-6, 3, -12)$. Chọn A."
  },
  {
    "id": "Q_MATH_A_005",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["math", "vector", "orthogonal"],
    "content": "Hai vector $\\vec{u}$ và $\\vec{v}$ phi thập phân (khác không) được gọi là vuông góc (orthogonal) với nhau khi và chỉ khi tích vô hướng của chúng thỏa mãn điều kiện gì?",
    "options": [
      "A. $\\vec{u} \\cdot \\vec{v} = 0$",
      "B. $\\vec{u} \\cdot \\vec{v} = 1$",
      "C. $\\vec{u} \\cdot \\vec{v} = -1$",
      "D. $\\vec{u} \\cdot \\vec{v} \\neq 0$"
    ],
    "correct_option": "A",
    "explanation": "Theo định nghĩa, hai vector vuông góc với nhau khi góc giữa chúng là $90^\\circ$, dẫn tới $\\cos(90^\\circ) = 0$, do đó tích vô hướng $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta) = 0$.",
    "solution": "**Bước 1:** Nhớ lại mối quan hệ giữa tích vô hướng và góc giữa hai vector.\n**Bước 2:** Hai vector vuông góc tương đương tích vô hướng bằng 0.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_A_006",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["math", "vector", "angle"],
    "content": "Góc $\\theta$ giữa hai vector $\\vec{u} = (1, 0)$ và $\\vec{v} = (1, 1)$ trong $\\mathbb{R}^2$ bằng bao nhiêu độ?",
    "options": [
      "A. $45^\\circ$",
      "B. $30^\\circ$",
      "C. $60^\\circ$",
      "D. $90^\\circ$"
    ],
    "correct_option": "A",
    "explanation": "Ta có $\\vec{u} \\cdot \\vec{v} = 1 \\times 1 + 0 \\times 1 = 1$. Độ dài $\\|\\vec{u}\\| = 1$, $\\|\\vec{v}\\| = \\sqrt{1^2+1^2} = \\sqrt{2}$. Do đó $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = \\frac{1}{\\sqrt{2}} \\Rightarrow \\theta = 45^\\circ$.",
    "solution": "**Bước 1:** Tính tích vô hướng: $1 \\times 1 + 0 \\times 1 = 1$.\n**Bước 2:** Tính độ dài hai vector: $\\|\\vec{u}\\| = 1$, $\\|\\vec{v}\\| = \\sqrt{2}$.\n**Bước 3:** Tính $\\cos(\\theta) = \\frac{1}{1 \\times \\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\theta = 45^\\circ$. Chọn A."
  },
  {
    "id": "Q_MATH_A_007",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["math", "vector", "distance"],
    "content": "Khoảng cách Euclid giữa hai điểm $A(1, 2, 3)$ và $B(3, 2, 1)$ trong không gian $\\mathbb{R}^3$ bằng bao nhiêu?",
    "options": [
      "A. $2\\sqrt{2}$",
      "B. 4",
      "C. 8",
      "D. 2"
    ],
    "correct_option": "A",
    "explanation": "Khoảng cách giữa hai điểm là độ dài vector hiệu $\\vec{AB} = (3-1, 2-2, 1-3) = (2, 0, -2)$. Độ dài $\\|\\vec{AB}\\| = \\sqrt{2^2 + 0^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$.",
    "solution": "**Bước 1:** Tìm tọa độ vector $\\vec{AB} = (2, 0, -2)$.\n**Bước 2:** Tính độ dài: $\\sqrt{2^2 + 0^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_A_008",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["math", "vector", "unit-vector"],
    "content": "Vector đơn vị (unit vector) cùng hướng với vector $\\vec{v} = (3, 4)$ là vector nào sau đây?",
    "options": [
      "A. $(0.6, 0.8)$",
      "B. $(3, 4)$",
      "C. $(0.3, 0.4)$",
      "D. $(0.5, 0.5)$"
    ],
    "correct_option": "A",
    "explanation": "Độ dài $\\|\\vec{v}\\| = \\sqrt{3^2 + 4^2} = 5$. Vector đơn vị $\\vec{u} = \\frac{\\vec{v}}{\\|\\vec{v}\\|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right) = (0.6, 0.8)$.",
    "solution": "**Bước 1:** Tính độ dài vector $\\|\\vec{v}\\| = 5$.\n**Bước 2:** Chia tọa độ của vector cho độ dài: $(3/5, 4/5) = (0.6, 0.8)$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_A_009",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["math", "vector", "projection"],
    "content": "Cho hai vector $\\vec{u} = (2, 1)$ và $\\vec{v} = (3, 4)$. Hình chiếu vuông góc (projection) của vector $\\vec{u}$ lên phương của vector $\\vec{v}$, ký hiệu là $\\text{proj}_{\\vec{v}}(\\vec{u})$, có tọa độ là gì?",
    "options": [
      "A. $(1.2, 1.6)$",
      "B. $(2.4, 3.2)$",
      "C. $(0.6, 0.8)$",
      "D. $(1.5, 2.0)$"
    ],
    "correct_option": "A",
    "explanation": "Công thức hình chiếu: $\\text{proj}_{\\vec{v}}(\\vec{u}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{v}\\|^2} \\vec{v}$. Ta có $\\vec{u} \\cdot \\vec{v} = 2 \\times 3 + 1 \\times 4 = 10$. Độ dài $\\|\\vec{v}\\|^2 = 3^2 + 4^2 = 25$. Kết quả: $\\frac{10}{25} \\vec{v} = 0.4 \\times (3, 4) = (1.2, 1.6)$.",
    "solution": "**Bước 1:** Tính tích vô hướng $\\vec{u} \\cdot \\vec{v} = 10$.\n**Bước 2:** Tính bình phương độ dài $\\|\\vec{v}\\|^2 = 25$.\n**Bước 3:** Áp dụng công thức: $\\frac{10}{25} (3, 4) = 0.4 \\times (3, 4) = (1.2, 1.6)$. Chọn A."
  },
  {
    "id": "Q_MATH_A_010",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["math", "vector", "linear-independence"],
    "content": "Điều kiện nào sau đây chứng tỏ bộ ba vector $\\vec{v_1}, \\vec{v_2}, \\vec{v_3}$ trong không gian $\\mathbb{R}^3$ độc lập tuyến tính (linearly independent)?",
    "options": [
      "A. Phương trình vector $c_1\\vec{v_1} + c_2\\vec{v_2} + c_3\\vec{v_3} = \\vec{0}$ chỉ có nghiệm duy nhất là $c_1 = c_2 = c_3 = 0$.",
      "B. Tồn tại một vector biểu diễn được qua hai vector còn lại.",
      "C. Tích vô hướng của từng cặp vector bằng 0.",
      "D. Ma trận ghép bởi ba vector này có định thức bằng 0."
    ],
    "correct_option": "A",
    "explanation": "Theo định nghĩa, một hệ vector độc lập tuyến tính khi và chỉ khi tổ hợp tuyến tính của chúng bằng vector không buộc các hệ số c1, c2, c3 đều bằng không.",
    "solution": "**Bước 1:** Định nghĩa độc lập tuyến tính.\n**Bước 2:** $c_1\\vec{v_1} + c_2\\vec{v_2} + c_3\\vec{v_3} = \\vec{0} \\Rightarrow c_i = 0$ với mọi $i$.\n**Bước 3:** Chọn A."
  },

  // ==========================================
  // MODULE B: Ma trận & Kích thước ma trận (011 - 020)
  // ==========================================
  {
    "id": "Q_MATH_B_011",
    "module_id": "Module_B",
    "difficulty": "Easy",
    "tags": ["math", "matrix", "dimension"],
    "content": "Một ma trận $A$ gồm 4 dòng và 3 cột. Kích thước (dimension) của ma trận $A$ được viết là gì?",
    "options": [
      "A. $4 \\times 3$",
      "B. $3 \\times 4$",
      "C. 12",
      "D. $[4, 3]$"
    ],
    "correct_option": "A",
    "explanation": "Kích thước ma trận được ký hiệu dưới dạng số dòng $\\times$ số cột. Ma trận gồm 4 dòng, 3 cột có kích thước $4 \\times 3$.",
    "solution": "**Bước 1:** Đếm số hàng (dòng) trước, cột sau.\n**Bước 2:** Định dạng: Số_hàng $\\times$ Số_cột $\\Rightarrow 4 \\times 3$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_012",
    "module_id": "Module_B",
    "difficulty": "Easy",
    "tags": ["math", "matrix", "identity"],
    "content": "Ma trận đơn vị (identity matrix) cấp 2, ký hiệu là $I_2$, có cấu trúc như thế nào?",
    "options": [
      "A. $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Ma trận đơn vị là ma trận vuông có các phần tử trên đường chéo chính bằng 1 và tất cả các phần tử khác bằng 0.",
    "solution": "**Bước 1:** Đường chéo chính chứa các số 1.\n**Bước 2:** Các phần tử còn lại là 0. Ma trận cấp 2 là $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_013",
    "module_id": "Module_B",
    "difficulty": "Easy",
    "tags": ["math", "matrix", "addition"],
    "content": "Cho hai ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ và $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$. Kết quả phép cộng $A + B$ là ma trận nào?",
    "options": [
      "A. $\\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 5 & 12 \\\\ 21 & 32 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 6 & 6 \\\\ 10 & 10 \\end{bmatrix}$",
      "D. Phép toán không thực hiện được do khác kích thước"
    ],
    "correct_option": "A",
    "explanation": "Hai ma trận cùng kích thước cộng bằng cách cộng các phần tử ở vị trí tương ứng: $\\begin{bmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Cộng các phần tử tương ứng: $1+5=6, 2+6=8, 3+7=10, 4+8=12$.\n**Bước 2:** Biểu diễn kết quả dưới dạng ma trận.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_014",
    "module_id": "Module_B",
    "difficulty": "Easy",
    "tags": ["math", "matrix", "diagonal"],
    "content": "Một ma trận vuông mà tất cả các phần tử nằm ngoài đường chéo chính đều bằng 0 được gọi là ma trận gì?",
    "options": [
      "A. Ma trận chéo (Diagonal matrix)",
      "B. Ma trận tam giác trên",
      "C. Ma trận đơn vị",
      "D. Ma trận không"
    ],
    "correct_option": "A",
    "explanation": "Theo định nghĩa, ma trận chéo (Diagonal matrix) là ma trận vuông có $a_{ij} = 0$ với mọi $i \\neq j$. Các phần tử trên đường chéo chính có thể tùy ý.",
    "solution": "**Bước 1:** Định nghĩa ma trận có các phần tử ngoài đường chéo chính bằng 0.\n**Bước 2:** Đó là ma trận chéo.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_015",
    "module_id": "Module_B",
    "difficulty": "Easy",
    "tags": ["math", "matrix", "scalar-multiplication"],
    "content": "Cho ma trận $A = \\begin{bmatrix} 2 & -1 \\\\ 0 & 3 \\end{bmatrix}$. Kết quả của phép nhân vô hướng $2A$ là gì?",
    "options": [
      "A. $\\begin{bmatrix} 4 & -2 \\\\ 0 & 6 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 4 & -1 \\\\ 0 & 6 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 4 & -2 \\\\ 0 & 3 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 2 & -2 \\\\ 0 & 6 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Phép nhân vô hướng thực hiện bằng cách nhân hệ số với tất cả các phần tử của ma trận: $2 \\times \\begin{bmatrix} 2 & -1 \\\\ 0 & 3 \\end{bmatrix} = \\begin{bmatrix} 4 & -2 \\\\ 0 & 6 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Nhân số 2 vào từng phần tử của ma trận.\n**Bước 2:** Các phần tử trở thành $4, -2, 0, 6$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_016",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": ["math", "matrix", "compatibility"],
    "content": "Điều kiện cần và đủ để hai ma trận $A$ và $B$ có thể cộng được với nhau là gì?",
    "options": [
      "A. Cả hai ma trận phải có cùng kích thước (cùng số dòng và số cột).",
      "B. Số cột của ma trận $A$ bằng số dòng của ma trận $B$.",
      "C. Cả hai ma trận phải là ma trận vuông.",
      "D. Số dòng của ma trận $A$ bằng số cột của ma trận $B$."
    ],
    "correct_option": "A",
    "explanation": "Phép cộng ma trận được định nghĩa trên các cặp phần tử tương ứng, do đó hai ma trận bắt buộc phải có cùng kích thước mới có thể thực hiện phép cộng.",
    "solution": "**Bước 1:** Nhớ lại định nghĩa cộng ma trận.\n**Bước 2:** Phép cộng thực hiện theo từng phần tử tương ứng -> kích thước phải bằng nhau.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_017",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": ["math", "matrix", "symmetric"],
    "content": "Một ma trận vuông $A$ được gọi là ma trận đối xứng (symmetric matrix) nếu nó thỏa mãn thuộc tính nào dưới đây?",
    "options": [
      "A. $A = A^T$ (bằng ma trận chuyển vị của nó)",
      "B. $A = -A^T$",
      "C. $A \\times A^T = I$",
      "D. Các phần tử trên đường chéo chính đều bằng 0"
    ],
    "correct_option": "A",
    "explanation": "Ma trận đối xứng là ma trận vuông mà các phần tử đối xứng qua đường chéo chính bằng nhau, tức là $a_{ij} = a_{ji}$, điều này tương đương với $A = A^T$.",
    "solution": "**Bước 1:** Định nghĩa đối xứng qua đường chéo chính.\n**Bước 2:** Điều này nghĩa là đổi dòng thành cột vẫn giữ nguyên giá trị -> $A = A^T$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_018",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": ["math", "matrix", "skew-symmetric"],
    "content": "Ma trận vuông $A$ thỏa mãn $A^T = -A$ được gọi là ma trận gì?",
    "options": [
      "A. Ma trận phản đối xứng (skew-symmetric matrix)",
      "B. Ma trận đối xứng",
      "C. Ma trận trực giao",
      "D. Ma trận nghịch đảo"
    ],
    "correct_option": "A",
    "explanation": "Ma trận phản đối xứng là ma trận vuông thỏa mãn $A^T = -A$, nghĩa là $a_{ji} = -a_{ij}$ với mọi vị trí. Đặc biệt, đường chéo chính của nó bắt buộc phải gồm toàn các số 0.",
    "solution": "**Bước 1:** Nhận biết biểu thức $A^T = -A$.\n**Bước 2:** Đây là định nghĩa của ma trận phản đối xứng.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_019",
    "module_id": "Module_B",
    "difficulty": "Hard",
    "tags": ["math", "matrix", "orthogonal-matrix"],
    "content": "Ma trận trực giao (orthogonal matrix) là ma trận vuông $Q$ thỏa mãn tính chất nào sau đây?",
    "options": [
      "A. $Q^T Q = Q Q^T = I$ (chuyển vị bằng nghịch đảo)",
      "B. $Q^2 = I$",
      "C. $\\det(Q) = 0$",
      "D. Các dòng của $Q$ phụ thuộc tuyến tính"
    ],
    "correct_option": "A",
    "explanation": "Ma trận trực giao $Q$ là ma trận vuông có các vector cột (và vector dòng) tạo thành một hệ trực chuẩn. Điều này tương đương với $Q^T = Q^{-1}$, hay $Q^T Q = I$.",
    "solution": "**Bước 1:** Định nghĩa ma trận trực giao.\n**Bước 2:** Tích của ma trận với chuyển vị của nó bằng ma trận đơn vị: $Q^T Q = I$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_B_020",
    "module_id": "Module_B",
    "difficulty": "Hard",
    "tags": ["math", "matrix", "trace"],
    "content": "Vết (Trace) của một ma trận vuông $A$, ký hiệu là $\\text{tr}(A)$, được tính bằng cách nào?",
    "options": [
      "A. Tổng các phần tử nằm trên đường chéo chính.",
      "B. Tích các phần tử nằm trên đường chéo chính.",
      "C. Tổng toàn bộ phần tử trong ma trận.",
      "D. Định thức của ma trận đó."
    ],
    "correct_option": "A",
    "explanation": "Vết của ma trận vuông là tổng các phần tử thuộc đường chéo chính của ma trận đó: $\\text{tr}(A) = \\sum_{i=1}^n a_{ii}$.",
    "solution": "**Bước 1:** Xem định nghĩa toán học của Vết (Trace).\n**Bước 2:** $\\text{tr}(A) = a_{11} + a_{22} + ... + a_{nn}$ (tổng đường chéo chính).\n**Bước 3:** Chọn A."
  },

  // ==========================================
  // MODULE C: Phép nhân ma trận (021 - 030)
  // ==========================================
  {
    "id": "Q_MATH_C_021",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["math", "matrix-multiplication", "compatibility"],
    "content": "Cho ma trận $A$ kích thước $m \\times n$ và ma trận $B$ kích thước $p \\times q$. Điều kiện để có thể thực hiện phép nhân ma trận $A \\times B$ là gì?",
    "options": [
      "A. $n = p$ (số cột của $A$ bằng số dòng của $B$)",
      "B. $m = q$ (số dòng của $A$ bằng số cột của $B$)",
      "C. $n = q$ (số cột của $A$ bằng số cột của $B$)",
      "D. Hai ma trận phải cùng kích thước ($m=p$ và $n=q$)"
    ],
    "correct_option": "A",
    "explanation": "Phép nhân ma trận $A \\times B$ chỉ định nghĩa được khi số lượng cột của ma trận đứng trước ($A$) bằng số lượng dòng của ma trận đứng sau ($B$), tức là $n = p$.",
    "solution": "**Bước 1:** Xét quy tắc nhân ma trận: cột của ma trận trước bằng dòng của ma trận sau.\n**Bước 2:** Với kích thước $m \\times n$ và $p \\times q$, ta cần $n = p$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_C_022",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["math", "matrix-multiplication", "dimension"],
    "content": "Cho ma trận $A$ kích thước $3 \\times 2$ và ma trận $B$ kích thước $2 \\times 5$. Ma trận kết quả $C = A \\times B$ sẽ có kích thước là bao nhiêu?",
    "options": [
      "A. $3 \\times 5$",
      "B. $2 \\times 2$",
      "C. $3 \\times 2$",
      "D. Phép nhân không thực hiện được"
    ],
    "correct_option": "A",
    "explanation": "Số cột của $A$ (2) bằng số dòng của $B$ (2), phép nhân hợp lệ. Kích thước ma trận kết quả sẽ lấy số dòng của $A$ và số cột của $B$, tức là $3 \\times 5$.",
    "solution": "**Bước 1:** Phép nhân $(3 \\times 2) \\times (2 \\times 5)$ hợp lệ vì $2 = 2$.\n**Bước 2:** Kích thước đầu ra: dòng của bảng đầu (3) và cột của bảng sau (5) -> $3 \\times 5$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_C_023",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["math", "matrix-multiplication", "calculation"],
    "content": "Cho vector hàng $A = [2, 3]$ và vector cột $B = \\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}$. Phép nhân ma trận $A \\times B$ cho kết quả bằng bao nhiêu?",
    "options": [
      "A. 7",
      "B. $\\begin{bmatrix} 10 & -3 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 10 \\\\ -3 \\end{bmatrix}$",
      "D. 13"
    ],
    "correct_option": "A",
    "explanation": "Nhân ma trận kích thước $1 \\times 2$ với $2 \\times 1$ thu được ma trận $1 \\times 1$ (số vô hướng): $2 \\times 5 + 3 \\times (-1) = 10 - 3 = 7$.",
    "solution": "**Bước 1:** Phép nhân vector hàng và vector cột: $[2, 3] \\times \\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}$.\n**Bước 2:** Tính: $2 \\times 5 + 3 \\times (-1) = 7$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_C_024",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["math", "matrix-multiplication", "identity"],
    "content": "Cho ma trận vuông $A$ cấp $n \\times n$ và ma trận đơn vị $I_n$. Phép nhân $A \\times I_n$ cho kết quả bằng gì?",
    "options": [
      "A. $A$",
      "B. $I_n$",
      "C. Ma trận không $O$",
      "D. $A^2$"
    ],
    "correct_option": "A",
    "explanation": "Ma trận đơn vị $I$ hoạt động như số 1 trong phép nhân số thông thường. Nhân bất kỳ ma trận vuông $A$ nào với $I$ đều bằng chính nó: $A I = I A = A$.",
    "solution": "**Bước 1:** Nhớ lại tính chất của ma trận đơn vị.\n**Bước 2:** $A \\times I = A$. Chọn A."
  },
  {
    "id": "Q_MATH_C_025",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["math", "matrix-multiplication", "non-commutative"],
    "content": "Phép nhân ma trận có tính chất giao hoán không? Nói cách khác, với hai ma trận vuông $A$ và $B$ cùng cấp, khẳng định nào luôn đúng?",
    "options": [
      "A. Nói chung $A \\times B \\neq B \\times A$ (phép nhân không giao hoán).",
      "B. Luôn có $A \\times B = B \\times A$ (tính chất giao hoán).",
      "C. Chỉ giao hoán khi $A$ và $B$ là ma trận không.",
      "D. $A \\times B = - B \\times A$"
    ],
    "correct_option": "A",
    "explanation": "Phép nhân ma trận nói chung không có tính chất giao hoán ($AB \\neq BA$). Tính chất giao hoán chỉ xảy ra trong các trường hợp đặc biệt (như nhân với ma trận đơn vị, ma trận nghịch đảo của chính nó, v.v.).",
    "solution": "**Bước 1:** Xem xét tính giao hoán của phép nhân ma trận.\n**Bước 2:** Phép nhân ma trận phụ thuộc vào thứ tự nhân, nói chung $AB \\neq BA$. Chọn A."
  },
  {
    "id": "Q_MATH_C_026",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["math", "matrix-multiplication", "calculation"],
    "content": "Cho hai ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$ và $B = \\begin{bmatrix} 4 & 1 \\\\ 2 & 5 \\end{bmatrix}$. Phần tử ở dòng 1, cột 2 (chỉ số 1-based) của ma trận tích $C = A \\times B$ bằng bao nhiêu?",
    "options": [
      "A. 11",
      "B. 8",
      "C. 9",
      "D. 15"
    ],
    "correct_option": "A",
    "explanation": "Phần tử dòng 1 cột 2 của ma trận tích $C$ được tính bằng tích vô hướng giữa dòng 1 của $A$ và cột 2 của $B$: $C_{12} = A_{11} B_{12} + A_{12} B_{22} = 1 \\times 1 + 2 \\times 5 = 1 + 10 = 11$.",
    "solution": "**Bước 1:** Dòng 1 của $A$ là $[1, 2]$. Cột 2 của $B$ là $\\begin{bmatrix} 1 \\\\ 5 \\end{bmatrix}$.\n**Bước 2:** Tính: $1 \\times 1 + 2 \\times 5 = 11$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_C_027",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["math", "matrix-multiplication", "calculation"],
    "content": "Cho ma trận $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 3 \\end{bmatrix}$ và vector cột $x = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$. Vector kết quả của phép nhân $A \\times x$ là gì?",
    "options": [
      "A. $\\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 4 & 7 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 2 \\\\ 6 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Nhân ma trận $2 \\times 2$ với vector cột $2 \\times 1$ cho kết quả vector cột $2 \\times 1$:\n$A x = \\begin{bmatrix} 2 \\times 1 + 1 \\times 2 \\\\ 1 \\times 1 + 3 \\times 2 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Nhân dòng 1 của $A$ với $x$: $2 \\times 1 + 1 \\times 2 = 4$.\n**Bước 2:** Nhân dòng 2 của $A$ with $x$: $1 \\times 1 + 3 \\times 2 = 7$.\n**Bước 3:** Kết quả là vector cột $\\begin{bmatrix} 4 \\\\ 7 \\end{bmatrix}$. Chọn A."
  },
  {
    "id": "Q_MATH_C_028",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["math", "matrix-multiplication", "properties"],
    "content": "Với ba ma trận $A, B, C$ có kích thước phù hợp để thực hiện các phép toán, phát biểu nào sau đây **SAI**?",
    "options": [
      "A. $A(B + C) = AB + AC$ (Tính chất phân phối bên trái)",
      "B. $(AB)C = A(BC)$ (Tính chất kết hợp)",
      "C. $AB = 0 \\Rightarrow A = 0$ hoặc $B = 0$",
      "D. $(AB)^T = B^T A^T$ (Chuyển vị của tích)"
    ],
    "correct_option": "C",
    "explanation": "Trong đại số tuyến tính, tích của hai ma trận bằng ma trận không ($AB = 0$) **không** đồng nghĩa với việc $A$ hoặc $B$ phải bằng ma trận không (tồn tại các ước của không). Các phát biểu khác đều đúng.",
    "solution": "**Bước 1:** Xét tính chất phép nhân ma trận.\n**Bước 2:** Ví dụ $A = \\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ đều khác 0 nhưng $AB = 0$.\n**Bước 3:** C sai. Chọn C."
  },
  {
    "id": "Q_MATH_C_029",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["math", "matrix-multiplication", "outer-product"],
    "content": "Tích ngoài (outer product) của hai vector $\\vec{u} = (2, 3)$ và $\\vec{v} = (1, 5)$ được biểu diễn dưới dạng tích ma trận $\\vec{u} \\otimes \\vec{v} = \\vec{u} \\vec{v}^T$. Kích thước và kết quả của tích này là gì?",
    "options": [
      "A. Ma trận $2 \\times 2$, $\\begin{bmatrix} 2 & 10 \\\\ 3 & 15 \\end{bmatrix}$",
      "B. Số vô hướng, 17",
      "C. Ma trận $2 \\times 2$, $\\begin{bmatrix} 2 & 3 \\\\ 10 & 15 \\end{bmatrix}$",
      "D. Vector hàng, $[2, 10, 3, 15]$"
    ],
    "correct_option": "A",
    "explanation": "Tích ngoài $\\vec{u} \\vec{v}^T = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix} \\begin{bmatrix} 1 & 5 \\end{bmatrix} = \\begin{bmatrix} 2 \\times 1 & 2 \\times 5 \\\\ 3 \\times 1 & 3 \\times 5 \\end{bmatrix} = \\begin{bmatrix} 2 & 10 \\\\ 3 & 15 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Vector cột $\\vec{u}$ ($2 \\times 1$) nhân vector hàng $\\vec{v}^T$ ($1 \\times 2$) tạo ra ma trận $2 \\times 2$.\n**Bước 2:** Tính từng phần tử $a_{ij} = u_i v_j$: dòng 1 là $[2 \\times 1, 2 \\times 5] = [2, 10]$, dòng 2 là $[3 \\times 1, 3 \\times 5] = [3, 15]$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_C_030",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["math", "matrix-multiplication", "diagonalization"],
    "content": "Cho ma trận chéo $D = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. Kết quả phép lũy thừa ma trận $D^3$ là ma trận nào?",
    "options": [
      "A. $\\begin{bmatrix} 8 & 0 \\\\ 0 & 27 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 6 & 0 \\\\ 0 & 9 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 8 & 8 \\\\ 8 & 27 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Đối với ma trận chéo, phép lũy thừa $D^k$ được thực hiện đơn giản bằng cách lũy thừa các phần tử trên đường chéo chính lên bậc $k$: $D^3 = \\begin{bmatrix} 2^3 & 0 \\\\ 0 & 3^3 \\end{bmatrix} = \\begin{bmatrix} 8 & 0 \\\\ 0 & 27 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Nhớ lại tính chất lũy thừa của ma trận chéo.\n**Bước 2:** Lũy thừa bậc 3 cho các phần tử đường chéo: $2^3 = 8, 3^3 = 27$.\n**Bước 3:** Chọn A."
  },

  // ==========================================
  // MODULE D: Định thức ma trận (031 - 040)
  // ==========================================
  {
    "id": "Q_MATH_D_031",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["math", "determinant", "calculation"],
    "content": "Tính định thức (determinant) của ma trận $A = \\begin{bmatrix} 4 & 3 \\\\ 1 & 2 \\end{bmatrix}$.",
    "options": [
      "A. 5",
      "B. 10",
      "C. 11",
      "D. 6"
    ],
    "correct_option": "A",
    "explanation": "Định thức của ma trận $2 \\times 2$ dạng $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ là $ad - bc$. Ta có: $\\det(A) = 4 \\times 2 - 3 \\times 1 = 8 - 3 = 5$.",
    "solution": "**Bước 1:** Áp dụng công thức tính định thức ma trận cấp 2: $\\det(A) = ad - bc$.\n**Bước 2:** Thay số: $4 \\times 2 - 3 \\times 1 = 5$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_032",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["math", "determinant", "properties"],
    "content": "Cho ma trận vuông $A$. Nếu ta đổi chỗ hai dòng (hoặc hai cột) bất kỳ của $A$ cho nhau thì định thức mới sẽ như thế nào so với định thức cũ?",
    "options": [
      "A. Đổi dấu (nhân với -1)",
      "B. Không thay đổi",
      "C. Bằng 0",
      "D. Trở thành nghịch đảo"
    ],
    "correct_option": "A",
    "explanation": "Một tính chất cơ bản của định thức là khi đổi chỗ hai dòng (hoặc hai cột) của một ma trận vuông cho nhau, định thức của ma trận mới sẽ đổi dấu.",
    "solution": "**Bước 1:** Nhớ lại tính chất của định thức đối với phép biến đổi sơ cấp dòng.\n**Bước 2:** Đổi chỗ hai dòng làm định thức đổi dấu.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_033",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["math", "determinant", "zero"],
    "content": "Một ma trận vuông $A$ có định thức bằng 0 ($\\det(A) = 0$) được gọi là ma trận gì?",
    "options": [
      "A. Ma trận kỳ dị (singular matrix)",
      "B. Ma trận không kỳ dị (non-singular matrix)",
      "C. Ma trận đơn vị",
      "D. Ma trận đối xứng"
    ],
    "correct_option": "A",
    "explanation": "Ma trận kỳ dị (singular matrix) là ma trận vuông có định thức bằng 0, nghĩa là ma trận đó không khả nghịch (không có ma trận nghịch đảo).",
    "solution": "**Bước 1:** Tìm thuật ngữ cho ma trận có định thức bằng 0.\n**Bước 2:** Đó là ma trận kỳ dị (singular). Chọn A."
  },
  {
    "id": "Q_MATH_D_034",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["math", "determinant", "diagonal"],
    "content": "Định thức của một ma trận tam giác (hoặc ma trận chéo) được tính bằng cách nào nhanh nhất?",
    "options": [
      "A. Tích của tất cả các phần tử nằm trên đường chéo chính.",
      "B. Tổng của tất cả các phần tử nằm trên đường chéo chính.",
      "C. Định thức luôn bằng 1.",
      "D. Tổng của các phần tử đường chéo nhân với -1."
    ],
    "correct_option": "A",
    "explanation": "Đối với ma trận tam giác trên, tam giác dưới hoặc ma trận chéo, định thức luôn bằng tích của các phần tử nằm trên đường chéo chính: $\\det(A) = \\prod_{i=1}^n a_{ii}$.",
    "solution": "**Bước 1:** Tính chất định thức của ma trận tam giác.\n**Bước 2:** Định thức bằng tích các phần tử đường chéo chính.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_035",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["math", "determinant", "properties"],
    "content": "Cho hai ma trận vuông $A$ và $B$ cùng cấp có $\\det(A) = 3$ và $\\det(B) = -2$. Định thức của ma trận tích $AB$, ký hiệu $\\det(AB)$, bằng bao nhiêu?",
    "options": [
      "A. -6",
      "B. 1",
      "C. 1.5",
      "D. -1.5"
    ],
    "correct_option": "A",
    "explanation": "Định thức của tích hai ma trận bằng tích các định thức của từng ma trận: $\\det(AB) = \\det(A) \\times \\det(B) = 3 \\times (-2) = -6$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức của tích: $\\det(AB) = \\det(A)\\det(B)$.\n**Bước 2:** Tính: $3 \\times (-2) = -6$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_036",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["math", "determinant", "scalar-multiplication"],
    "content": "Cho ma trận vuông $A$ cấp $3 \\times 3$ có định thức $\\det(A) = 5$. Định thức của ma trận $2A$ bằng bao nhiêu?",
    "options": [
      "A. 40",
      "B. 10",
      "C. 15",
      "D. 30"
    ],
    "correct_option": "A",
    "explanation": "Với ma trận $A$ cấp $n \\times n$, nhân ma trận với số thực $k$ sẽ làm định thức tăng lên $k^n$ lần: $\\det(kA) = k^n \\det(A)$. Ở đây $n=3, k=2$, do đó $\\det(2A) = 2^3 \\times 5 = 8 \\times 5 = 40$.",
    "solution": "**Bước 1:** Áp dụng công thức $\\det(kA) = k^n \\det(A)$ với $n$ là cấp ma trận.\n**Bước 2:** Cấp ma trận là 3, hệ số $k=2$, $\\det(A)=5$.\n**Bước 3:** Tính: $2^3 \\times 5 = 8 \\times 5 = 40$. Chọn A."
  },
  {
    "id": "Q_MATH_D_037",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["math", "determinant", "calculation"],
    "content": "Tính định thức của ma trận $3 \\times 3$ sau:\n$B = \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix}$.",
    "options": [
      "A. 24",
      "B. 15",
      "C. 0",
      "D. 30"
    ],
    "correct_option": "A",
    "explanation": "Ma trận $B$ là ma trận tam giác trên vì mọi phần tử bên dưới đường chéo chính đều bằng 0. Định thức của nó bằng tích các phần tử đường chéo chính: $1 \\times 4 \\times 6 = 24$.",
    "solution": "**Bước 1:** Nhận xét $B$ là ma trận tam giác trên.\n**Bước 2:** Định thức bằng $1 \\times 4 \\times 6 = 24$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_038",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["math", "determinant", "calculation-3x3"],
    "content": "Tính định thức của ma trận $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 3 & 1 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix}$.",
    "options": [
      "A. 13",
      "B. 9",
      "C. 1",
      "D. 7"
    ],
    "correct_option": "A",
    "explanation": "Khai triển Laplace theo dòng 1:\n$\\det(A) = 1 \\times \\det\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} - 0 \\times \\det\\begin{bmatrix} 3 & 0 \\\\ 0 & 1 \\end{bmatrix} + 2 \\times \\det\\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$\n$= 1 \\times (1 \\times 1 - 0) + 2 \\times (3 \\times 2 - 1 \\times 0) = 1 \\times 1 + 2 \\times 6 = 1 + 12 = 13$.",
    "solution": "**Bước 1:** Khai triển Laplace theo dòng 1: $1 \\times \\det\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix} + 2 \\times \\det\\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$.\n**Bước 2:** Tính các định thức $2 \\times 2$ tương ứng: $1 - 0 = 1$ và $6 - 0 = 6$.\n**Bước 3:** Cộng lại: $1 \\times 1 + 2 \\times 6 = 13$. Chọn A."
  },
  {
    "id": "Q_MATH_D_039",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["math", "determinant", "properties"],
    "content": "Cho ma trận vuông $A$. Khẳng định nào sau đây liên quan đến định thức của ma trận chuyển vị $A^T$ là đúng?",
    "options": [
      "A. $\\det(A^T) = \\det(A)$",
      "B. $\\det(A^T) = -\\det(A)$",
      "C. $\\det(A^T) = \\frac{1}{\\det(A)}$",
      "D. $\\det(A^T) = 0$"
    ],
    "correct_option": "A",
    "explanation": "Định thức của ma trận chuyển vị luôn bằng định thức của ma trận ban đầu: $\\det(A^T) = \\det(A)$.",
    "solution": "**Bước 1:** Nhớ lại tính chất của định thức đối với phép chuyển vị.\n**Bước 2:** Chuyển vị đổi dòng thành cột nhưng không đổi định thức. $\\det(A^T) = \\det(A)$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_D_040",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["math", "determinant", "invertibility"],
    "content": "Hệ phương trình tuyến tính dạng $A x = 0$ (với $A$ là ma trận vuông) có nghiệm duy nhất (nghiệm tầm thường $x = 0$) khi và chỉ khi định thức $\\det(A)$ thỏa mãn điều kiện gì?",
    "options": [
      "A. $\\det(A) \\neq 0$",
      "B. $\\det(A) = 0$",
      "C. $\\det(A) > 1$",
      "D. $\\det(A) = 1$"
    ],
    "correct_option": "A",
    "explanation": "Hệ phương trình thuần nhất $Ax=0$ có nghiệm duy nhất khi và chỉ khi ma trận hệ số $A$ khả nghịch, tương đương với định thức $\\det(A) \\neq 0$.",
    "solution": "**Bước 1:** Hệ $Ax=0$ có nghiệm duy nhất tương đương $A$ khả nghịch.\n**Bước 2:** Điều kiện khả nghịch là $\\det(A) \\neq 0$.\n**Bước 3:** Chọn A."
  },

  // ==========================================
  // MODULE E: Ma trận chuyển vị & Nghịch đảo (041 - 050)
  // ==========================================
  {
    "id": "Q_MATH_E_041",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["math", "transpose", "calculation"],
    "content": "Cho ma trận $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$. Ma trận chuyển vị $A^T$ là ma trận nào?",
    "options": [
      "A. $\\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 4 & 5 & 6 \\\\ 1 & 2 & 3 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 3 & 2 & 1 \\\\ 6 & 5 & 4 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Ma trận chuyển vị $A^T$ thu được bằng cách chuyển đổi hàng của $A$ thành các cột tương ứng: hàng 1 $[1,2,3]$ thành cột 1, hàng 2 $[4,5,6]$ thành cột 2.",
    "solution": "**Bước 1:** Lấy dòng 1 của $A$ viết thành cột 1 của $A^T$: $\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$.\n**Bước 2:** Lấy dòng 2 của $A$ viết thành cột 2 của $A^T$: $\\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix}$.\n**Bước 3:** Gộp lại được ma trận kích thước $3 \\times 2$. Chọn A."
  },
  {
    "id": "Q_MATH_E_042",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["math", "inverse", "existence"],
    "content": "Điều kiện để một ma trận vuông $A$ có ma trận nghịch đảo (khả nghịch) là gì?",
    "options": [
      "A. Định thức $\\det(A) \\neq 0$",
      "B. Định thức $\\det(A) = 0$",
      "C. Các phần tử trên đường chéo chính phải khác 0",
      "D. Ma trận phải có kích thước lẻ"
    ],
    "correct_option": "A",
    "explanation": "Một ma trận vuông $A$ khả nghịch (tồn tại nghịch đảo $A^{-1}$) khi và chỉ khi nó là ma trận không kỳ dị, tức là định thức của nó khác không ($\\det(A) \\neq 0$).",
    "solution": "**Bước 1:** Nhớ lại định lý về sự tồn tại ma trận nghịch đảo.\n**Bước 2:** Điều kiện tiên quyết: $\\det(A) \\neq 0$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_E_043",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["math", "inverse", "calculation-2x2"],
    "content": "Cho ma trận $A = \\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix}$. Tìm ma trận nghịch đảo $A^{-1}$.",
    "options": [
      "A. $\\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} 3 & 5 \\\\ 1 & 2 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} -2 & 5 \\\\ 1 & -3 \\end{bmatrix}$",
      "D. $\\begin{bmatrix} 2 & -5 \\\\ -1 & 3 \\end{bmatrix}$"
    ],
    "correct_option": "A",
    "explanation": "Công thức nghịch đảo ma trận $2 \\times 2$ dạng $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ là $A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Ta có $\\det(A) = 2 \\times 3 - 5 \\times 1 = 1$. Do đó $A^{-1} = \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$.",
    "solution": "**Bước 1:** Tính $\\det(A) = 6 - 5 = 1$.\n**Bước 2:** Đổi chỗ hai phần tử đường chéo chính (2 và 3 thành 3 và 2), đổi dấu hai phần tử còn lại (5 và 1 thành -5 và -1).\n**Bước 3:** Chia cho định thức: $\\frac{1}{1} \\begin{bmatrix} 3 & -5 \\\\ -1 & 2 \\end{bmatrix}$. Chọn A."
  },
  {
    "id": "Q_MATH_E_044",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["math", "inverse", "properties"],
    "content": "Cho ma trận khả nghịch $A$ và ma trận nghịch đảo $A^{-1}$. Tích của hai ma trận $A \\times A^{-1}$ bằng ma trận nào?",
    "options": [
      "A. Ma trận đơn vị $I$",
      "B. Ma trận không $O$",
      "C. Chính ma trận $A$",
      "D. Ma trận chuyển vị $A^T$"
    ],
    "correct_option": "A",
    "explanation": "Theo định nghĩa của ma trận nghịch đảo, tích của một ma trận với nghịch đảo của nó luôn bằng ma trận đơn vị: $A A^{-1} = A^{-1} A = I$.",
    "solution": "**Bước 1:** Khái niệm ma trận nghịch đảo.\n**Bước 2:** $A A^{-1} = I$. Chọn A."
  },
  {
    "id": "Q_MATH_E_045",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["math", "transpose", "properties"],
    "content": "Với hai ma trận $A$ và $B$ có kích thước phù hợp, đẳng thức nào sau đây luôn đúng đối với phép chuyển vị?",
    "options": [
      "A. $(AB)^T = B^T A^T$",
      "B. $(AB)^T = A^T B^T$",
      "C. $(AB)^T = A^T + B^T$",
      "D. $(AB)^T = (BA)^T$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển vị của tích hai ma trận bằng tích các chuyển vị theo thứ tự ngược lại: $(AB)^T = B^T A^T$.",
    "solution": "**Bước 1:** Nhớ lại tính chất của chuyển vị tích.\n**Bước 2:** Đẳng thức đúng là $(AB)^T = B^T A^T$. Chọn A."
  },
  {
    "id": "Q_MATH_E_046",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["math", "inverse", "properties"],
    "content": "Với hai ma trận khả nghịch $A$ và $B$ cùng cấp, nghịch đảo của tích $AB$, ký hiệu là $(AB)^{-1}$, được tính như thế nào?",
    "options": [
      "A. $(AB)^{-1} = B^{-1} A^{-1}$",
      "B. $(AB)^{-1} = A^{-1} B^{-1}$",
      "C. $(AB)^{-1} = A^{-1} + B^{-1}$",
      "D. $(AB)^{-1} = B A$"
    ],
    "correct_option": "A",
    "explanation": "Nghịch đảo của tích bằng tích các nghịch đảo theo thứ tự ngược lại: $(AB)^{-1} = B^{-1} A^{-1}$.",
    "solution": "**Bước 1:** Nhớ lại tính chất nghịch đảo của tích ma trận.\n**Bước 2:** $(AB)^{-1} = B^{-1} A^{-1}$. Chọn A."
  },
  {
    "id": "Q_MATH_E_047",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["math", "inverse", "determinant"],
    "content": "Cho ma trận vuông khả nghịch $A$ có định thức $\\det(A) = 4$. Định thức của ma trận nghịch đảo $\\det(A^{-1})$ bằng bao nhiêu?",
    "options": [
      "A. 0.25 (tức $\\frac{1}{4}$)",
      "B. -4",
      "C. 4",
      "D. 16"
    ],
    "correct_option": "A",
    "explanation": "Định thức của ma trận nghịch đảo bằng nghịch đảo của định thức ma trận ban đầu: $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{4} = 0.25$.",
    "solution": "**Bước 1:** Công thức liên hệ định thức nghịch đảo: $\\det(A^{-1}) = 1/\\det(A)$.\n**Bước 2:** Tính: $1/4 = 0.25$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_E_048",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["math", "transpose", "properties"],
    "content": "Cho ma trận $A$ bất kỳ. Kết quả của phép toán $(A^T)^T$ (chuyển vị hai lần) bằng gì?",
    "options": [
      "A. $A$",
      "B. $-A$",
      "C. $A^T$",
      "D. Ma trận đơn vị $I$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển vị của ma trận chuyển vị trả về chính ma trận gốc ban đầu: $(A^T)^T = A$.",
    "solution": "**Bước 1:** Chuyển vị lần một: đổi dòng thành cột.\n**Bước 2:** Chuyển vị lần hai: đổi cột thành dòng (quay lại ban đầu).\n**Bước 3:** Kết quả bằng $A$. Chọn A."
  },
  {
    "id": "Q_MATH_E_049",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["math", "inverse", "diagonal"],
    "content": "Cho ma trận chéo $D = \\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 0.5 & 0 \\\\ 0 & 0 & -2 \\end{bmatrix}$. Tìm ma trận nghịch đảo $D^{-1}$.",
    "options": [
      "A. $\\begin{bmatrix} 0.2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & -0.5 \\end{bmatrix}$",
      "B. $\\begin{bmatrix} -5 & 0 & 0 \\\\ 0 & -0.5 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}$",
      "C. $\\begin{bmatrix} 1/5 & 0 & 0 \\\\ 0 & 1/2 & 0 \\\\ 0 & 0 & -1/2 \\end{bmatrix}$",
      "D. Ma trận không khả nghịch do chứa phần tử âm"
    ],
    "correct_option": "A",
    "explanation": "Nghịch đảo của một ma trận chéo khả nghịch được tạo bằng cách nghịch đảo từng phần tử trên đường chéo chính: $\\text{diag}(5, 0.5, -2)^{-1} = \\text{diag}(1/5, 1/0.5, 1/-2) = \\text{diag}(0.2, 2, -0.5)$.",
    "solution": "**Bước 1:** Lấy nghịch đảo các số trên chéo: $1/5 = 0.2$, $1/0.5 = 2$, $1/-2 = -0.5$.\n**Bước 2:** Tạo ma trận chéo mới với các giá trị này.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MATH_E_050",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["math", "inverse", "orthogonal"],
    "content": "Cho ma trận trực giao $Q$. Khẳng định nào sau đây về ma trận nghịch đảo $Q^{-1}$ luôn đúng?",
    "options": [
      "A. $Q^{-1} = Q^T$",
      "B. $Q^{-1} = -Q$",
      "C. $Q^{-1}$ không tồn tại",
      "D. $Q^{-1} = Q$"
    ],
    "correct_option": "A",
    "explanation": "Theo định nghĩa của ma trận trực giao, $Q^T Q = I$, điều này trực tiếp suy ra ma trận nghịch đảo của ma trận trực giao bằng chính ma trận chuyển vị của nó: $Q^{-1} = Q^T$.",
    "solution": "**Bước 1:** Ma trận trực giao thỏa mãn $Q^T Q = I$.\n**Bước 2:** Theo định nghĩa nghịch đảo, nếu $B A = I$ thì $B = A^{-1}$. Do đó $Q^T = Q^{-1}$.\n**Bước 3:** Chọn A."
  }
];
