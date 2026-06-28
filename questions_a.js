const QUESTIONS_A = [
  {
    "id": "Q_MOD_A_001",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $2 \\times 3$ và ma trận $B$ kích thước $3 \\times 4$. Ma trận tích $C = A \\times B$ sẽ có kích thước (số dòng $\\times$ số cột) là bao nhiêu?",
    "options": [
      "A. $3 \\times 3$",
      "B. $2 \\times 4$",
      "C. $4 \\times 2$",
      "D. Phép nhân ma trận này không thực hiện được."
    ],
    "correct_option": "B",
    "explanation": "Quy tắc nhân ma trận: Để nhân ma trận $A$ (kích thước $m \\times n$) với ma trận $B$ (kích thước $p \\times q$), điều kiện bắt buộc là số cột của ma trận trước phải bằng số dòng của ma trận sau ($n = p$). Kích thước của ma trận tích $C$ sẽ là $m \\times q$. Ở đây, $n = 3 = p$, nên phép nhân hợp lệ và kích thước tích là $2 \\times 4$.",
    "solution": "**Bước 1:** Kiểm tra điều kiện nhân ma trận:\n- Số cột của $A$ ($2 \\times 3$) là $3$.\n- Số dòng của $B$ ($3 \\times 4$) là $3$.\n- Số cột của $A$ = Số dòng của $B$ = $3$. Phép nhân khả thi.\n**Bước 2:** Xác định kích thước ma trận tích:\n- Số dòng bằng số dòng của $A$ ($2$).\n- Số cột bằng số cột của $B$ ($4$).\n- Kích thước tích là $2 \\times 4$.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_002",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức (determinant) của ma trận $2 \\times 2$ sau: $A = \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix}$.",
    "options": [
      "A. $10$",
      "B. $14$",
      "C. $12$",
      "D. $8$"
    ],
    "correct_option": "A",
    "explanation": "Công thức tính định thức của ma trận $2 \\times 2$ dạng $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ là $\\det(A) = ad - bc$. Áp dụng vào ma trận đã cho: $\\det(A) = (4 \\times 3) - (2 \\times 1) = 12 - 2 = 10$.",
    "solution": "**Bước 1:** Áp dụng công thức $\\det(A) = ad - bc$.\n**Bước 2:** Thay thế các phần tử: $a = 4$, $b = 2$, $c = 1$, $d = 3$.\n**Bước 3:** Tính toán: $\\det(A) = 4 \\times 3 - 2 \\times 1 = 12 - 2 = 10$. Chọn A."
  },
  {
    "id": "Q_MOD_A_003",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Điều gì xảy ra đối với hệ phương trình tuyến tính $A \\cdot x = b$ nếu định thức của ma trận hệ số $\\det(A) = 0$?",
    "options": [
      "A. Hệ luôn luôn có một nghiệm duy nhất.",
      "B. Ma trận $A$ không khả nghịch (singular matrix), hệ phương trình sẽ vô nghiệm hoặc có vô số nghiệm.",
      "C. Ma trận $A$ khả nghịch, ta luôn tính được nghiệm $x = A^{-1} \\cdot b$.",
      "D. Định thức bằng 0 không ảnh hưởng gì đến tính chất nghiệm của hệ."
    ],
    "correct_option": "B",
    "explanation": "Khi $\\det(A) = 0$, ma trận $A$ được gọi là ma trận kỳ dị (singular matrix) và không tồn tại ma trận nghịch đảo $A^{-1}$. Do đó, hệ phương trình tuyến tính $A \\cdot x = b$ không thể có nghiệm duy nhất mà rơi vào trường hợp vô nghiệm (nếu các phương trình mâu thuẫn) hoặc vô số nghiệm (nếu các phương trình phụ thuộc tuyến tính).",
    "solution": "**Bước 1:** Nhớ lại định lý về sự tồn tại nghịch đảo ma trận:\n- Ma trận $A$ khả nghịch (có nghịch đảo $A^{-1}$) khi và chỉ khi $\\det(A) \\neq 0$.\n**Bước 2:** Khi $\\det(A) = 0$, không thể dùng công thức $x = A^{-1}b$ để tìm nghiệm duy nhất.\n**Bước 3:** Hệ sẽ vô nghiệm hoặc có vô số nghiệm. Chọn B."
  },
  {
    "id": "Q_MOD_A_004",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho hai vector cột $u = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$ và $v = \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix}$. Tích vô hướng (dot product) $u^T \\cdot v$ bằng bao nhiêu?",
    "options": [
      "A. $32$",
      "B. $15$",
      "C. $28$",
      "D. Phép nhân không hợp lệ vì kích thước không khớp."
    ],
    "correct_option": "A",
    "explanation": "Tích vô hướng (dot product) của hai vector cùng chiều được tính bằng tổng tích các phần tử tương ứng: $u \\cdot v = (1 \\times 4) + (2 \\times 5) + (3 \\times 6) = 4 + 10 + 18 = 32$. Dạng ma trận $u^T v$ biểu diễn phép nhân dòng $1 \\times 3$ với cột $3 \\times 1$, cho ra kết quả vô hướng là $32$.",
    "solution": "**Bước 1:** Tính nhân các phần tử tương ứng của hai vector:\n- Phần tử 1: $1 \\times 4 = 4$\n- Phần tử 2: $2 \\times 5 = 10$\n- Phần tử 3: $3 \\times 6 = 18$\n**Bước 2:** Cộng dồn các tích: $4 + 10 + 18 = 32$.\n**Bước 3:** Kết quả là 32. Chọn A."
  },
  {
    "id": "Q_MOD_A_005",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Cho ma trận $A$ vuông cấp $n$. Nhận định nào sau đây về định thức của ma trận chuyển vị $A^T$ là đúng?",
    "options": [
      "A. $\\det(A^T) = -\\det(A)$",
      "B. $\\det(A^T) = \\frac{1}{\\det(A)}$",
      "C. $\\det(A^T) = \\det(A)$",
      "D. $\\det(A^T) = 0$"
    ],
    "correct_option": "C",
    "explanation": "Một thuộc tính cơ bản của định thức là phép chuyển vị không làm thay đổi giá trị định thức của ma trận vuông: $\\det(A^T) = \\det(A)$.",
    "solution": "**Bước 1:** Đối chiếu tính chất định thức trong giáo trình Đại số tuyến tính.\n**Bước 2:** Phép chuyển vị đổi các dòng thành cột và ngược lại, nhưng định thức tính theo dòng hay theo cột đều tương đương.\n**Bước 3:** Kết luận $\\det(A^T) = \\det(A)$. Chọn C."
  },
  {
    "id": "Q_MOD_A_006",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Nếu ma trận vuông $A$ có một dòng toàn chữ số $0$, định thức $\\det(A)$ sẽ bằng bao nhiêu?",
    "options": [
      "A. Bằng 1",
      "B. Bằng 0",
      "C. Bằng kích thước dòng của $A$",
      "D. Không xác định được"
    ],
    "correct_option": "B",
    "explanation": "Theo phương pháp khai triển Laplace để tính định thức, nếu ta chọn dòng toàn số $0$ để khai triển thì tất cả các số hạng trong tổng khai triển đều chứa thừa số $0$. Do đó định thức của ma trận sẽ bằng $0$.",
    "solution": "**Bước 1:** Khai triển định thức theo dòng toàn số 0.\n**Bước 2:** Mỗi số hạng có dạng $0 \\times C_{ij} = 0$.\n**Bước 3:** Định thức bằng 0. Chọn B."
  },
  {
    "id": "Q_MOD_A_007",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Tính phần tử ở dòng 1, cột 2 của ma trận tích $C = A \\times B$, biết:\n$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$.",
    "options": [
      "A. $19$",
      "B. $22$",
      "C. $23$",
      "D. $43$"
    ],
    "correct_option": "B",
    "explanation": "Phần tử ở dòng 1, cột 2 của ma trận tích $C$ (tức $C_{12}$) được tính bằng tích vô hướng của dòng 1 của ma trận $A$ và cột 2 của ma trận $B$: $C_{12} = A_{11}B_{12} + A_{12}B_{22} = (1 \\times 6) + (2 \\times 8) = 6 + 16 = 22$.",
    "solution": "**Bước 1:** Xác định dòng 1 của $A$: $[1, 2]$.\n**Bước 2:** Xác định cột 2 của $B$: $\\begin{bmatrix} 6 \\\\ 8 \\end{bmatrix}$.\n**Bước 3:** Nhân vô hướng: $(1 \\times 6) + (2 \\times 8) = 6 + 16 = 22$. Chọn B."
  },
  {
    "id": "Q_MOD_A_008",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Cho hai ma trận vuông $A$ và $B$ cùng cấp khả nghịch. Định thức của tích hai ma trận $\\det(A \\cdot B)$ bằng biểu thức nào sau đây?",
    "options": [
      "A. $\\det(A) + \\det(B)$",
      "B. $\\det(A) \\cdot \\det(B)$",
      "C. $\\det(A) - \\det(B)$",
      "D. $\\frac{\\det(A)}{\\det(B)}$"
    ],
    "correct_option": "B",
    "explanation": "Theo định lý nhân định thức, định thức của tích hai ma trận vuông bằng tích các định thức của từng ma trận: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$.",
    "solution": "**Bước 1:** Áp dụng định lý Cauchy-Binet về tích định thức.\n**Bước 2:** Với hai ma trận vuông cùng cấp, ta có $\\det(AB) = \\det(A)\\det(B)$.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_009",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "math",
      "linear-algebra",
      "identity-matrix"
    ],
    "content": "Tính định thức của ma trận đơn vị (Identity Matrix) vuông cấp 3: $I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
    "options": [
      "A. $0$",
      "B. $1$",
      "C. $3$",
      "D. Không xác định"
    ],
    "correct_option": "B",
    "explanation": "Ma trận đơn vị là ma trận đường chéo có các phần tử trên đường chéo chính bằng $1$. Định thức của ma trận đường chéo bằng tích các phần tử trên đường chéo chính: $\\det(I) = 1 \\times 1 \\times 1 = 1$.",
    "solution": "**Bước 1:** Nhận diện ma trận đường chéo chính.\n**Bước 2:** Tính tích các phần tử đường chéo: $1 \\times 1 \\times 1 = 1$.\n**Bước 3:** Định thức bằng 1. Chọn B."
  },
  {
    "id": "Q_MOD_A_010",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận tam giác trên sau: $T = \\begin{bmatrix} 2 & 3 & 4 \\\\ 0 & 5 & 6 \\\\ 0 & 0 & 3 \\end{bmatrix}$.",
    "options": [
      "A. $0$",
      "B. $10$",
      "C. $30$",
      "D. $15$"
    ],
    "correct_option": "C",
    "explanation": "Định thức của một ma trận tam giác (tam giác trên hoặc tam giác dưới) bằng tích của tất cả các phần tử nằm trên đường chéo chính của nó. Ta có: $\\det(T) = 2 \\times 5 \\times 3 = 30$.",
    "solution": "**Bước 1:** Nhận diện ma trận $T$ là ma trận tam giác trên (các phần tử phía dưới đường chéo chính đều bằng 0).\n**Bước 2:** Áp dụng tính chất định thức ma trận tam giác: tích các phần tử chéo chính.\n**Bước 3:** Tính toán: $2 \\times 5 \\times 3 = 30$. Chọn C."
  },
  {
    "id": "Q_MOD_A_011",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Nếu ta nhân một dòng của ma trận vuông $A$ cấp $n$ với hằng số $k \\neq 0$ để được ma trận $B$, thì định thức của ma trận mới liên hệ với định thức cũ thế nào?",
    "options": [
      "A. $\\det(B) = \\det(A)$",
      "B. $\\det(B) = k \\cdot \\det(A)$",
      "C. $\\det(B) = k^n \\cdot \\det(A)$",
      "D. $\\det(B) = \\frac{1}{k} \\cdot \\det(A)$"
    ],
    "correct_option": "B",
    "explanation": "Khi nhân một dòng duy nhất (hoặc một cột duy nhất) của ma trận vuông với một hằng số $k$, định thức của ma trận mới sẽ gấp $k$ lần định thức ban đầu: $\\det(B) = k \\cdot \\det(A)$. Lưu ý: Chỉ khi nhân toàn bộ ma trận với $k$ (nghĩa là nhân tất cả $n$ dòng với $k$), định thức mới bằng $k^n \\cdot \\det(A)$.",
    "solution": "**Bước 1:** Nhớ lại tính chất biến đổi sơ cấp của dòng ảnh hưởng tới định thức:\n- Nhân 1 dòng với $k$ làm định thức nhân với $k$.\n**Bước 2:** Ở đây chỉ nhân một dòng đơn lẻ, do đó $\\det(B) = k \\cdot \\det(A)$.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_012",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Cho ma trận vuông $A$ khả nghịch. Mối liên hệ giữa định thức của ma trận nghịch đảo $\\det(A^{-1})$ và định thức $\\det(A)$ là gì?",
    "options": [
      "A. $\\det(A^{-1}) = -\\det(A)$",
      "B. $\\det(A^{-1}) = \\frac{1}{\\det(A)}$",
      "C. $\\det(A^{-1}) = \\det(A)$",
      "D. $\\det(A^{-1}) = 0$"
    ],
    "correct_option": "B",
    "explanation": "Vì $A \\cdot A^{-1} = I$, lấy định thức hai vế ta được $\\det(A \\cdot A^{-1}) = \\det(I) \\Rightarrow \\det(A) \\cdot \\det(A^{-1}) = 1 \\Rightarrow \\det(A^{-1}) = \\frac{1}{\\det(A)}$.",
    "solution": "**Bước 1:** Xuất phát từ định nghĩa ma trận nghịch đảo $A \\cdot A^{-1} = I$.\n**Bước 2:** Áp dụng tính chất định thức tích: $\\det(A)\\det(A^{-1}) = \\det(I) = 1$.\n**Bước 3:** Suy ra $\\det(A^{-1}) = \\frac{1}{\\det(A)}$. Chọn B."
  },
  {
    "id": "Q_MOD_A_013",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Phép nhân ma trận $A \\times B$ có tính chất giao hoán hay không? (Nghĩa là $A \\times B$ có luôn bằng $B \\times A$ hay không?)",
    "options": [
      "A. Luôn luôn giao hoán đối với mọi ma trận.",
      "B. Không giao hoán nói chung. Ngay cả khi cả hai tích đều tồn tại và cùng kích thước, thông thường $A \\times B \\neq B \\times A$.",
      "C. Giao hoán khi và chỉ khi một trong hai ma trận là ma trận dòng.",
      "D. Chỉ giao hoán khi hai ma trận có các phần tử là số âm."
    ],
    "correct_option": "B",
    "explanation": "Phép nhân ma trận nói chung không có tính chất giao hoán ($A \\times B \\neq B \\times A$). Thậm chí, khi $A \\times B$ tính được thì chưa chắc $B \\times A$ đã thực hiện được do điều kiện ràng buộc về kích thước dòng cột.",
    "solution": "**Bước 1:** Xét tính giao hoán của phép nhân ma trận:\n- Bản chất phép nhân ma trận là tổ hợp tuyến tính của các dòng và cột.\n- Thay đổi thứ tự nhân dẫn đến việc nhân các dòng và cột khác nhau hoàn toàn.\n**Bước 2:** Kết luận phép nhân ma trận không giao hoán nói chung. Chọn B."
  },
  {
    "id": "Q_MOD_A_014",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Vết (Trace) của một ma trận vuông $A$, ký hiệu là $\\text{tr}(A)$, được định nghĩa toán học là gì?",
    "options": [
      "A. Là tích của các phần tử trên đường chéo chính.",
      "B. Tương đương với định thức của ma trận.",
      "C. Là tổng của tất cả các phần tử nằm trên đường chéo chính.",
      "D. Là số lượng phần tử khác 0 của ma trận."
    ],
    "correct_option": "C",
    "explanation": "Vết (Trace) của một ma trận vuông là tổng các phần tử nằm trên đường chéo chính của ma trận đó: $\\text{tr}(A) = \\sum_{i=1}^n A_{ii}$.",
    "solution": "**Bước 1:** Nhớ lại định nghĩa của Trace (Vết ma trận).\n**Bước 2:** Trace chỉ áp dụng cho ma trận vuông, tính bằng tổng các phần tử chéo chính.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_A_015",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-properties"
    ],
    "content": "Nếu đổi chỗ hai dòng bất kỳ của ma trận vuông $A$ cho nhau để được ma trận $B$, định thức mới sẽ như thế nào?",
    "options": [
      "A. $\\det(B) = \\det(A)$",
      "B. $\\det(B) = -\\det(A)$",
      "C. $\\det(B) = 0$",
      "D. $\\det(B) = 2\\det(A)$"
    ],
    "correct_option": "B",
    "explanation": "Một tính chất quan trọng của định thức: khi đổi chỗ hai dòng (hoặc hai cột) bất kỳ của ma trận vuông cho nhau, định thức của ma trận mới sẽ đổi dấu: $\\det(B) = -\\det(A)$.",
    "solution": "**Bước 1:** Đổi chỗ hai dòng là phép biến đổi sơ cấp dòng loại 1.\n**Bước 2:** Phép biến đổi này làm định thức nhân với $-1$.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_016",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "dataframe"
    ],
    "content": "Trong thư viện Pandas, lệnh nào được dùng để tải dữ liệu từ một tệp tin CSV vào một DataFrame?",
    "options": [
      "A. `pd.load_csv('file.csv')`",
      "B. `pd.read_csv('file.csv')`",
      "C. `pd.open_csv('file.csv')`",
      "D. `pd.DataFrame.from_csv('file.csv')`"
    ],
    "correct_option": "B",
    "explanation": "Pandas cung cấp hàm `pd.read_csv('path')` để đọc dữ liệu từ file CSV và tự động phân tích cú pháp để đưa vào cấu trúc 2D DataFrame.",
    "solution": "**Bước 1:** Gọi hàm tương tác tệp CSV của Pandas.\n**Bước 2:** Hàm chuẩn là `read_csv`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_017",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "indexing"
    ],
    "content": "Cho DataFrame `df`. Lệnh nào dùng để lọc ra các dòng dữ liệu có giá trị cột `'age'` lớn hơn 30?",
    "options": [
      "A. `df.filter('age' > 30)`",
      "B. `df[df['age'] > 30]`",
      "C. `df.select(df['age'] > 30)`",
      "D. `df.where('age' > 30)`"
    ],
    "correct_option": "B",
    "explanation": "Trong Pandas, lọc dữ liệu (boolean indexing) được thực hiện bằng cách truyền một Series điều kiện Boolean vào cặp ngoặc vuông của DataFrame: `df[df['age'] > 30]`. Biểu thức `df['age'] > 30` sinh ra một Series True/False, DataFrame dùng Series này để lọc dòng.",
    "solution": "**Bước 1:** Tạo điều kiện Boolean: `df['age'] > 30`.\n**Bước 2:** Đưa biểu thức này vào chỉ mục ngoặc vuông để lọc DataFrame: `df[condition]`.\n**Bước 3:** Biểu thức hoàn chỉnh là `df[df['age'] > 30]`. Chọn B."
  },
  {
    "id": "Q_MOD_A_018",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "missing-data"
    ],
    "content": "Để đếm tổng số lượng giá trị bị khuyết thiếu (NaN/None) trong mỗi cột của DataFrame `df`, ta dùng kết hợp các hàm nào?",
    "options": [
      "A. `df.isnull().sum()`",
      "B. `df.isna().count()`",
      "C. `df.missing().total()`",
      "D. `df.count_nan()`"
    ],
    "correct_option": "A",
    "explanation": "`df.isnull()` (hoặc `df.isna()`) trả về một DataFrame chứa các giá trị Boolean (True nếu khuyết thiếu, False nếu có dữ liệu). Khi gọi tiếp `.sum()`, Pandas coi True là 1 và False là 0, cộng dồn theo từng cột để cho ra tổng số lượng ô khuyết thiếu.",
    "solution": "**Bước 1:** `df.isnull()` xác định vị trí khuyết thiếu dưới dạng ô logic True.\n**Bước 2:** Gọi `.sum()` để cộng dồn các giá trị True (1) theo trục cột.\n**Bước 3:** Sự kết hợp tạo nên `df.isnull().sum()`. Chọn A."
  },
  {
    "id": "Q_MOD_A_019",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "aggregation"
    ],
    "content": "Để tính giá trị trung bình (mean) của cột dữ liệu `'score'` trong DataFrame `df`, ta sử dụng phương thức nào?",
    "options": [
      "A. `df['score'].average()`",
      "B. `df['score'].mean()`",
      "C. `average(df['score'])`",
      "D. `df['score'].sum() / len(df)`"
    ],
    "correct_option": "B",
    "explanation": "Pandas cung cấp phương thức `.mean()` cho Series và DataFrame để tính toán trung bình số học một cách nhanh chóng, tự động bỏ qua các giá trị NaN.",
    "solution": "**Bước 1:** Truy xuất cột: `df['score']`.\n**Bước 2:** Áp dụng phương thức tính trung bình: `.mean()`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_020",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "groupby"
    ],
    "content": "Đoạn code nào thực hiện gom nhóm dữ liệu theo cột `'category'` rồi tính tổng giá trị cột `'sales'` của từng nhóm?",
    "options": [
      "A. `df.groupby('category')['sales'].sum()`",
      "B. `df.group('category').sum('sales')`",
      "C. `df.groupby('category').aggregate('sales', sum)`",
      "D. `df['sales'].groupby('category').total()`"
    ],
    "correct_option": "A",
    "explanation": "Quy trình GroupBy trong Pandas tuân theo cơ chế Split-Apply-Combine. `df.groupby('category')` thực hiện chia nhóm (split), `['sales']` chọn cột cần tính toán, và `.sum()` áp dụng phép cộng tổng cho từng nhóm (apply & combine).",
    "solution": "**Bước 1:** Gọi phương thức nhóm: `df.groupby('category')`.\n**Bước 2:** Trích xuất cột số liệu: `['sales']`.\n**Bước 3:** Sử dụng hàm thu gọn: `.sum()`. Kết quả là A."
  },
  {
    "id": "Q_MOD_A_021",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "merge"
    ],
    "content": "Để thực hiện ghép hai DataFrame `df1` và `df2` dựa trên một cột chung mang tên `'user_id'` (tương đương với phép JOIN trong SQL), ta dùng hàm nào?",
    "options": [
      "A. `pd.concat([df1, df2], axis=1)`",
      "B. `pd.merge(df1, df2, on='user_id')`",
      "C. `df1.join(df2)`",
      "D. `pd.append(df1, df2)`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `pd.merge(left, right, on='column')` được thiết kế để liên kết dữ liệu giữa hai DataFrame dựa trên các giá trị khóa chung, mặc định là Inner Join. Hàm `pd.concat` dùng để nối ghép cơ học các bảng theo hàng hoặc cột mà không đối chiếu nội dung giá trị khóa.",
    "solution": "**Bước 1:** Phân tích nhu cầu: Ghép dữ liệu dựa trên giá trị cột chung `'user_id'`.\n**Bước 2:** Hàm thích hợp là `pd.merge()` với đối số `on='user_id'`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_022",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "drop"
    ],
    "content": "Lệnh nào dùng để xóa cột mang tên `'address'` khỏi DataFrame `df` và trả về DataFrame mới?",
    "options": [
      "A. `df.drop('address', axis=0)`",
      "B. `df.drop('address', axis=1)`",
      "C. `df.delete('address')`",
      "D. `df.remove('address')`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.drop(name, axis)` xóa phần tử. Để xóa cột, bắt buộc phải chỉ định `axis=1` (hoặc `axis='columns'`). Nếu chọn `axis=0` (mặc định), Pandas sẽ tìm kiếm nhãn hàng (index) mang tên `'address'` để xóa và báo lỗi KeyError nếu không tìm thấy.",
    "solution": "**Bước 1:** Sử dụng phương thức `.drop()`.\n**Bước 2:** Để chỉ định thao tác trên cột (chứ không phải dòng), đặt tham số `axis=1`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_023",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "missing-data"
    ],
    "content": "Để thay thế tất cả các giá trị khuyết thiếu (NaN) trong DataFrame `df` bằng số `0` tại chỗ, ta sử dụng cú pháp nào?",
    "options": [
      "A. `df.fillna(0, inplace=True)`",
      "B. `df.replace_nan(0)`",
      "C. `df.dropna(value=0)`",
      "D. `df.null_to_zero()`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.fillna(value)` dùng để thay thế giá trị khuyết thiếu bằng một giá trị xác định. Tham số `inplace=True` cho phép sửa đổi trực tiếp lên đối tượng DataFrame hiện tại mà không cần tạo bản sao mới.",
    "solution": "**Bước 1:** Nhận diện phương thức thay thế dữ liệu thiếu: `.fillna()`.\n**Bước 2:** Để thực hiện sửa trực tiếp lên bảng dữ liệu gốc (in-place), thêm tham số `inplace=True`.\n**Bước 3:** Cú pháp hoàn chỉnh là `df.fillna(0, inplace=True)`. Chọn A."
  },
  {
    "id": "Q_MOD_A_024",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "statistics"
    ],
    "content": "Phương thức nào trong Pandas giúp hiển thị nhanh một bảng tóm tắt thống kê mô tả của tất cả các cột dạng số trong DataFrame (bao gồm count, mean, std, min, các mốc phân vị 25%, 50%, 75% và max)?",
    "options": [
      "A. `df.summary()`",
      "B. `df.describe()`",
      "C. `df.info()`",
      "D. `df.statistics()`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `df.describe()` tự động quét tất cả các cột kiểu số trong DataFrame và tính toán các chỉ số thống kê mô tả cơ bản của chúng, giúp nhà phân tích có cái nhìn tổng quan về phân phối dữ liệu.",
    "solution": "**Bước 1:** Tìm hàm thống kê mô tả nhanh của DataFrame.\n- `info()`: Hiển thị kiểu dữ liệu và bộ nhớ.\n- `describe()`: Tính toán các chỉ số thống kê như trung bình, độ lệch chuẩn, max, min.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_A_025",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "indexing"
    ],
    "content": "Sự khác biệt cốt lõi giữa hai thuộc tính định vị dữ liệu `df.loc` và `df.iloc` là gì?",
    "options": [
      "A. `df.loc` dùng cho các cột, `df.iloc` dùng cho các dòng.",
      "B. `df.loc` truy xuất dữ liệu dựa trên **nhãn/tên (label-based)** của dòng hoặc cột, còn `df.iloc` truy xuất dựa trên **chỉ số vị trí số nguyên (integer position-based)** bắt đầu từ 0.",
      "C. `df.loc` chỉ đọc dữ liệu, `df.iloc` có thể sửa đổi dữ liệu.",
      "D. Không có sự khác biệt nào."
    ],
    "correct_option": "B",
    "explanation": "`df.loc[row_label, col_label]` nhận tham số là nhãn chuỗi hoặc điều kiện logic. `df.iloc[row_position, col_position]` (chữ `i` trong iloc viết tắt của **i**nteger) chỉ chấp nhận chỉ số index dạng số nguyên mô tả vị trí vật lý trong bảng dữ liệu.",
    "solution": "**Bước 1:** Phân tích từ khóa:\n- `loc`: Location (định vị bằng nhãn tên).\n- `iloc`: Integer Location (định vị bằng chỉ số nguyên).\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_A_026",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "columns"
    ],
    "content": "Lệnh nào sau đây dùng để đổi tên cột `'old_name'` thành `'new_name'` trong DataFrame `df`?",
    "options": [
      "A. `df.rename(columns={'old_name': 'new_name'})`",
      "B. `df.rename_column('old_name', 'new_name')`",
      "C. `df.columns.replace('old_name', 'new_name')`",
      "D. `df.change_name('old_name', 'new_name')`"
    ],
    "correct_option": "A",
    "explanation": "Để thay đổi tên của các cột, ta dùng phương thức `.rename()` và truyền một từ điển (dictionary) ánh xạ tên cũ sang tên mới vào đối số `columns`.",
    "solution": "**Bước 1:** Dùng phương thức `.rename()`.\n**Bước 2:** Chỉ định ánh xạ cột thông qua từ điển cấp cho thuộc tính `columns`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_A_027",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "properties"
    ],
    "content": "Để lấy ra kích thước của DataFrame dưới dạng một tuple chứa số dòng và số cột (ví dụ `(100, 5)`), ta truy cập thuộc tính nào?",
    "options": [
      "A. `df.size`",
      "B. `df.shape`",
      "C. `df.len()`",
      "D. `df.dimensions`"
    ],
    "correct_option": "B",
    "explanation": "Thuộc tính `df.shape` trả về một tuple mô tả cấu trúc số chiều của DataFrame `(rows, columns)`. Thuộc tính `df.size` trả về tổng số lượng ô dữ liệu (dòng $\\times$ cột).",
    "solution": "**Bước 1:** Phân biệt `shape` và `size`:\n- `df.shape` trả về tuple số dòng và cột.\n- `df.size` trả về tổng số phần tử.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_A_028",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "sorting"
    ],
    "content": "Phương thức nào dùng để sắp xếp các dòng của DataFrame `df` theo giá trị của cột `'salary'` giảm dần?",
    "options": [
      "A. `df.sort_values(by='salary', ascending=False)`",
      "B. `df.sort_by('salary', descending=True)`",
      "C. `df.sort_values(by='salary', reverse=True)`",
      "D. `df.order_by('salary', ascending=False)`"
    ],
    "correct_option": "A",
    "explanation": "Pandas sử dụng phương thức `sort_values(by='column_name')` để sắp xếp dữ liệu. Để xếp giảm dần, ta phải thiết lập đối số `ascending=False`.",
    "solution": "**Bước 1:** Gọi phương thức sắp xếp giá trị: `.sort_values()`.\n**Bước 2:** Chỉ định cột sắp xếp: `by='salary'`.\n**Bước 3:** Thiết lập chiều giảm dần bằng `ascending=False`. Chọn A."
  },
  {
    "id": "Q_MOD_A_029",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "duplicates"
    ],
    "content": "Để loại bỏ tất cả các dòng trùng lặp hoàn toàn trong DataFrame `df` và chỉ giữ lại một dòng duy nhất đại diện, ta dùng phương thức nào?",
    "options": [
      "A. `df.remove_duplicates()`",
      "B. `df.drop_duplicates()`",
      "C. `df.clean_duplicates()`",
      "D. `df.unique()`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `df.drop_duplicates()` sẽ tìm kiếm và xóa bỏ các dòng có toàn bộ giá trị trùng nhau, trả về DataFrame sạch không còn dòng lặp.",
    "solution": "**Bước 1:** Xác định phương thức xóa trùng lặp trong Pandas.\n**Bước 2:** Tên phương thức chính xác là `drop_duplicates()`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_030",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "columns"
    ],
    "content": "Lệnh nào sau đây dùng để lấy ra danh sách tên của tất cả các cột trong DataFrame `df`?",
    "options": [
      "A. `df.get_columns()`",
      "B. `df.columns`",
      "C. `df.keys`",
      "D. `df.headers()`"
    ],
    "correct_option": "B",
    "explanation": "Thuộc tính `df.columns` trả về một đối tượng Index chứa danh sách tên của toàn bộ các cột trong DataFrame. Ta có thể chuyển nó sang dạng list bằng cách gọi `list(df.columns)`.",
    "solution": "**Bước 1:** Truy xuất thuộc tính cột của DataFrame.\n**Bước 2:** Thuộc tính đó là `.columns`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_031",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 2 & 1 \\\\\\\\ 5 & 4 \\\\end{bmatrix}$.",
    "options": [
      "A. $-3$",
      "B. $13$",
      "C. $6$",
      "D. $3$"
    ],
    "correct_option": "D",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (2 \\\\times 4) - (1 \\\\times 5) = 8 - 5 = 3$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=2, b=1, c=5, d=4$.\n**Bước 3:** Tính toán kết quả: $2 \\\\times 4 - 1 \\\\times 5 = 8 - 5 = 3$. Chọn phương án D."
  },
  {
    "id": "Q_MOD_A_032",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 9 & 2 \\\\\\\\ 7 & 1 \\\\end{bmatrix}$.",
    "options": [
      "A. $61$",
      "B. $-5$",
      "C. $5$",
      "D. $23$"
    ],
    "correct_option": "B",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (9 \\\\times 1) - (2 \\\\times 7) = 9 - 14 = -5$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=9, b=2, c=7, d=1$.\n**Bước 3:** Tính toán kết quả: $9 \\\\times 1 - 2 \\\\times 7 = 9 - 14 = -5$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_033",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 4 & 9 \\\\\\\\ 1 & 9 \\\\end{bmatrix}$.",
    "options": [
      "A. $45$",
      "B. $27$",
      "C. $-27$",
      "D. $-77$"
    ],
    "correct_option": "B",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (4 \\\\times 9) - (9 \\\\times 1) = 36 - 9 = 27$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=4, b=9, c=1, d=9$.\n**Bước 3:** Tính toán kết quả: $4 \\\\times 9 - 9 \\\\times 1 = 36 - 9 = 27$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_034",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 4 & 8 \\\\\\\\ 5 & 1 \\\\end{bmatrix}$.",
    "options": [
      "A. $36$",
      "B. $44$",
      "C. $-36$",
      "D. $12$"
    ],
    "correct_option": "C",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (4 \\\\times 1) - (8 \\\\times 5) = 4 - 40 = -36$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=4, b=8, c=5, d=1$.\n**Bước 3:** Tính toán kết quả: $4 \\\\times 1 - 8 \\\\times 5 = 4 - 40 = -36$. Chọn phương án C."
  },
  {
    "id": "Q_MOD_A_035",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 6 & 5 \\\\\\\\ 3 & 4 \\\\end{bmatrix}$.",
    "options": [
      "A. $9$",
      "B. $-2$",
      "C. $-9$",
      "D. $39$"
    ],
    "correct_option": "A",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (6 \\\\times 4) - (5 \\\\times 3) = 24 - 15 = 9$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=6, b=5, c=3, d=4$.\n**Bước 3:** Tính toán kết quả: $6 \\\\times 4 - 5 \\\\times 3 = 24 - 15 = 9$. Chọn phương án A."
  },
  {
    "id": "Q_MOD_A_036",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 7 & 2 \\\\\\\\ 6 & 6 \\\\end{bmatrix}$.",
    "options": [
      "A. $17$",
      "B. $30$",
      "C. $-30$",
      "D. $54$"
    ],
    "correct_option": "B",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (7 \\\\times 6) - (2 \\\\times 6) = 42 - 12 = 30$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=7, b=2, c=6, d=6$.\n**Bước 3:** Tính toán kết quả: $7 \\\\times 6 - 2 \\\\times 6 = 42 - 12 = 30$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_037",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 9 & 2 \\\\\\\\ 7 & 2 \\\\end{bmatrix}$.",
    "options": [
      "A. $-4$",
      "B. $59$",
      "C. $4$",
      "D. $32$"
    ],
    "correct_option": "C",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (9 \\\\times 2) - (2 \\\\times 7) = 18 - 14 = 4$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=9, b=2, c=7, d=2$.\n**Bước 3:** Tính toán kết quả: $9 \\\\times 2 - 2 \\\\times 7 = 18 - 14 = 4$. Chọn phương án C."
  },
  {
    "id": "Q_MOD_A_038",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 4 & 2 \\\\\\\\ 1 & 4 \\\\end{bmatrix}$.",
    "options": [
      "A. $14$",
      "B. $-14$",
      "C. $18$",
      "D. $-4$"
    ],
    "correct_option": "A",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (4 \\\\times 4) - (2 \\\\times 1) = 16 - 2 = 14$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=4, b=2, c=1, d=4$.\n**Bước 3:** Tính toán kết quả: $4 \\\\times 4 - 2 \\\\times 1 = 16 - 2 = 14$. Chọn phương án A."
  },
  {
    "id": "Q_MOD_A_039",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 2 & 7 \\\\\\\\ 5 & 8 \\\\end{bmatrix}$.",
    "options": [
      "A. $19$",
      "B. $-19$",
      "C. $-46$",
      "D. $51$"
    ],
    "correct_option": "B",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (2 \\\\times 8) - (7 \\\\times 5) = 16 - 35 = -19$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=2, b=7, c=5, d=8$.\n**Bước 3:** Tính toán kết quả: $2 \\\\times 8 - 7 \\\\times 5 = 16 - 35 = -19$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_040",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "determinant"
    ],
    "content": "Tính định thức của ma trận $2 \\\\times 2$ sau: $M = \\\\begin{bmatrix} 6 & 4 \\\\\\\\ 5 & 2 \\\\end{bmatrix}$.",
    "options": [
      "A. $32$",
      "B. $-8$",
      "C. $22$",
      "D. $8$"
    ],
    "correct_option": "B",
    "explanation": "Định thức của ma trận vuông cấp 2: $\\\\det(M) = (6 \\\\times 2) - (4 \\\\times 5) = 12 - 20 = -8$.",
    "solution": "**Bước 1:** Sử dụng công thức định thức $\\\\det(M) = ad - bc$ cho ma trận $\\\\begin{bmatrix} a & b \\\\\\\\ c & d \\\\end{bmatrix}$.\n**Bước 2:** Thay thế các hệ số: $a=6, b=4, c=5, d=2$.\n**Bước 3:** Tính toán kết quả: $6 \\\\times 2 - 4 \\\\times 5 = 12 - 20 = -8$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_041",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $4 \\times 2$ và ma trận $B$ kích thước $2 \\times 5$. Kích thước của ma trận tích $C = A \\times B$ là bao nhiêu?",
    "options": [
      "A. Phép nhân không thực hiện được.",
      "B. $4 \\times 5$",
      "C. $2 \\times 2$",
      "D. $2 \\times 4$"
    ],
    "correct_option": "B",
    "explanation": "Kích thước ma trận tích bằng số dòng của ma trận đầu nhân với số cột của ma trận sau: $4 \\times 5 = 4 \\times 5$.",
    "solution": "**Bước 1:** Kiểm tra số cột ma trận thứ nhất ($2$) và số dòng ma trận thứ hai ($2$). Chúng bằng nhau nên nhân được.\n**Bước 2:** Lấy dòng của ma trận trước ($4$) ghép với cột ma trận sau ($5$).\n**Bước 3:** Kích thước là $4 \\times 5$. Chọn phương án B."
  },
  {
    "id": "Q_MOD_A_042",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $5 \\times 3$ và ma trận $B$ kích thước $3 \\times 2$. Kích thước của ma trận tích $C = A \\times B$ là bao nhiêu?",
    "options": [
      "A. $3 \\times 3$",
      "B. Phép nhân không thực hiện được.",
      "C. $6 \\times 3$",
      "D. $5 \\times 2$"
    ],
    "correct_option": "D",
    "explanation": "Kích thước ma trận tích bằng số dòng của ma trận đầu nhân với số cột của ma trận sau: $5 \\times 2 = 5 \\times 2$.",
    "solution": "**Bước 1:** Kiểm tra số cột ma trận thứ nhất ($3$) và số dòng ma trận thứ hai ($3$). Chúng bằng nhau nên nhân được.\n**Bước 2:** Lấy dòng của ma trận trước ($5$) ghép với cột ma trận sau ($2$).\n**Bước 3:** Kích thước là $5 \\times 2$. Chọn phương án D."
  },
  {
    "id": "Q_MOD_A_043",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $1 \\times 4$ và ma trận $B$ kích thước $4 \\times 1$. Kích thước của ma trận tích $C = A \\times B$ là bao nhiêu?",
    "options": [
      "A. $4 \\times 4$",
      "B. $3 \\times 4$",
      "C. $1 \\times 1$",
      "D. Phép nhân không thực hiện được."
    ],
    "correct_option": "C",
    "explanation": "Kích thước ma trận tích bằng số dòng của ma trận đầu nhân với số cột của ma trận sau: $1 \\times 1 = 1 \\times 1$.",
    "solution": "**Bước 1:** Kiểm tra số cột ma trận thứ nhất ($4$) và số dòng ma trận thứ hai ($4$). Chúng bằng nhau nên nhân được.\n**Bước 2:** Lấy dòng của ma trận trước ($1$) ghép với cột ma trận sau ($1$).\n**Bước 3:** Kích thước là $1 \\times 1$. Chọn phương án C."
  },
  {
    "id": "Q_MOD_A_044",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $3 \\times 3$ và ma trận $B$ kích thước $3 \\times 1$. Kích thước của ma trận tích $C = A \\times B$ là bao nhiêu?",
    "options": [
      "A. $5 \\times 6$",
      "B. $3 \\times 3$",
      "C. $3 \\times 1$",
      "D. Phép nhân không thực hiện được."
    ],
    "correct_option": "C",
    "explanation": "Kích thước ma trận tích bằng số dòng của ma trận đầu nhân với số cột của ma trận sau: $3 \\times 1 = 3 \\times 1$.",
    "solution": "**Bước 1:** Kiểm tra số cột ma trận thứ nhất ($3$) và số dòng ma trận thứ hai ($3$). Chúng bằng nhau nên nhân được.\n**Bước 2:** Lấy dòng của ma trận trước ($3$) ghép với cột ma trận sau ($1$).\n**Bước 3:** Kích thước là $3 \\times 1$. Chọn phương án C."
  },
  {
    "id": "Q_MOD_A_045",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "math",
      "linear-algebra",
      "matrix-multiplication"
    ],
    "content": "Cho ma trận $A$ kích thước $2 \\times 5$ và ma trận $B$ kích thước $5 \\times 3$. Kích thước của ma trận tích $C = A \\times B$ là bao nhiêu?",
    "options": [
      "A. Phép nhân không thực hiện được.",
      "B. $5 \\times 5$",
      "C. $2 \\times 3$",
      "D. $4 \\times 6$"
    ],
    "correct_option": "C",
    "explanation": "Kích thước ma trận tích bằng số dòng của ma trận đầu nhân với số cột của ma trận sau: $2 \\times 3 = 2 \\times 3$.",
    "solution": "**Bước 1:** Kiểm tra số cột ma trận thứ nhất ($5$) và số dòng ma trận thứ hai ($5$). Chúng bằng nhau nên nhân được.\n**Bước 2:** Lấy dòng của ma trận trước ($2$) ghép với cột ma trận sau ($3$).\n**Bước 3:** Kích thước là $2 \\times 3$. Chọn phương án C."
  },
  {
    "id": "Q_MOD_A_046",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "dataframe"
    ],
    "content": "Để loại bỏ các dòng có giá trị khuyết thiếu (NaN) trong DataFrame `df`, ta sử dụng phương thức nào?",
    "options": [
      "A. `df.dropna()`",
      "B. `df.remove_nan()`",
      "C. `df.clean()`",
      "D. `df.delete_null()`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `dropna()` dùng để loại bỏ các hàng hoặc cột chứa giá trị khuyết thiếu trong DataFrame.",
    "solution": "**Bước 1:** Trong Pandas, để loại bỏ dòng chứa dữ liệu trống, ta gọi hàm `dropna()`. Chọn A."
  },
  {
    "id": "Q_MOD_A_047",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "indexing"
    ],
    "content": "Lệnh nào sau đây dùng để đặt lại chỉ số (index) của DataFrame `df` về dạng số nguyên bắt đầu từ 0 và loại bỏ chỉ mục cũ?",
    "options": [
      "A. `df.reset_index(drop=True)`",
      "B. `df.reindex()`",
      "C. `df.clean_index()`",
      "D. `df.set_index(0)`"
    ],
    "correct_option": "A",
    "explanation": "`reset_index(drop=True)` thiết lập lại chỉ mục của DataFrame thành dãy số nguyên từ 0 và tham số `drop=True` giúp ngăn việc chèn chỉ mục cũ thành một cột mới trong DataFrame.",
    "solution": "**Bước 1:** Gọi `.reset_index()` để đặt lại chỉ mục.\n**Bước 2:** Dùng `drop=True` để tránh tạo cột chỉ mục cũ. Chọn A."
  },
  {
    "id": "Q_MOD_A_048",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "properties"
    ],
    "content": "Lệnh nào dùng để in ra thông tin tổng quan của DataFrame `df`, bao gồm kiểu dữ liệu của cột, số lượng giá trị không khuyết thiếu (Non-Null) và dung lượng bộ nhớ tiêu thụ?",
    "options": [
      "A. `df.describe()`",
      "B. `df.info()`",
      "C. `df.summary()`",
      "D. `df.show_types()`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `df.info()` cung cấp thông tin kỹ thuật chi tiết của DataFrame như tổng số dòng, kiểu dữ liệu từng cột, số lượng ô có dữ liệu thực tế và dung lượng RAM đang chiếm dụng.",
    "solution": "**Bước 1:** Thống kê mô tả toán học dùng `describe()`.\n**Bước 2:** Xem cấu trúc kiểu dữ liệu hệ thống dùng `info()`. Chọn B."
  },
  {
    "id": "Q_MOD_A_049",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "filtering"
    ],
    "content": "Lệnh nào dùng để lọc ra các dòng của DataFrame `df` mà cột `'city'` có giá trị nằm trong danh sách `['Hanoi', 'Saigon']`?",
    "options": [
      "A. `df[df['city'].isin(['Hanoi', 'Saigon'])]`",
      "B. `df[df['city'] == ['Hanoi', 'Saigon']]`",
      "C. `df.filter('city' in ['Hanoi', 'Saigon'])`",
      "D. `df.select('city', ['Hanoi', 'Saigon'])`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.isin(list)` của Series trả về Boolean Series xác định xem giá trị ô có thuộc danh sách truyền vào không, thích hợp để lọc dữ liệu đa điều kiện.",
    "solution": "**Bước 1:** Hàm `.isin()` kiểm tra xem giá trị cột có thuộc tập hợp cho trước hay không. Chọn A."
  },
  {
    "id": "Q_MOD_A_050",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "pandas",
      "aggregation"
    ],
    "content": "Để lấy ra giá trị lớn nhất của cột `'salary'` trong DataFrame `df`, ta sử dụng hàm nào?",
    "options": [
      "A. `df['salary'].max()`",
      "B. `df['salary'].highest()`",
      "C. `max(df['salary'])`",
      "D. Cả A và C đều đúng"
    ],
    "correct_option": "D",
    "explanation": "Có thể sử dụng phương thức built-in `.max()` của Pandas Series (`df['salary'].max()`) hoặc hàm tích hợp sẵn của Python (`max(series)`) để tìm giá trị lớn nhất.",
    "solution": "**Bước 1:** Cả phương thức `.max()` của Pandas và hàm `max()` mặc định của Python đều chạy được trên đối tượng Series. Chọn D."
  }
];
