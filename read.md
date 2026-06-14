Dưới đây là mã nguồn hiển thị của toàn bộ file tài liệu đặc tả hệ thống hoàn chỉnh (bao gồm cả phần giới thiệu, cấu trúc dữ liệu, 50 câu hỏi mẫu đã trộn và thuật toán cấu hình).

Toàn bộ văn bản dưới đây được đóng gói gọn gàng trong một khối mã Markdown duy nhất để bạn có thể sao chép trực tiếp (Copy) vào file `QUIZ_SYSTEM_SPEC.md` trong hệ thống của mình mà không cần phải chỉnh sửa lại định dạng.

```markdown
# AI Training Program - Entrance Examination Quiz System Specification

This document outlines the comprehensive system architecture, data schemas, frontend rendering directives, and an item bank of 50 sample questions with built-in answers and explanations. This file serves as the complete technical blueprint for building an automated, randomized entry-examination quiz system.

---

## 1. Core Architecture Overview

The system operates as a **Constrained Random Exam Generator**. Instead of serving static test papers, the engine dynamically selects questions from a structured database (Item Bank) while strictly satisfying predefined multi-dimensional constraints (Module distribution, difficulty leveling, and non-overlapping sub-topics).

---

## 2. Question Object Data Schema

Every question object within the system database must adhere to the following JSON-compatible schema to ensure programmatic parsability.

### Schema Fields
* `id` (String): Unique identifier acting as the Primary Key (e.g., `Q_MOD_A_001`).
* `module_id` (Enum): Categorizes the question into one of the four mandatory domains (`Module_A`, `Module_B`, `Module_C`, `Module_D`).
* `difficulty` (Enum): Flags the complexity layer for blueprint balancing (`Easy`, `Medium`, `Hard`).
* `tags` (Array of Strings): Sub-topic tags used to prevent content duplication within a single exam paper.
* `content` (String/Markdown): The actual question text. Must support LaTeX rendering for mathematical syntax and standard markdown formatting for code blocks.
* `options` (Array of Strings): A list of exactly 4 multiple-choice options.
* `correct_option` (String/Char): The correct choice reference (`"A"`, `"B"`, `"C"`, or `"D"`).
* `explanation` (String/Markdown): Comprehensive step-by-step logic detailing why the correct option is valid, rendered post-examination.

### JSON Schema Blueprint Example
```json
{
  "id": "Q_2026_MOD_A_042",
  "module_id": "Module_A",
  "difficulty": "Medium",
  "tags": ["linear-algebra", "matrix-multiplication"],
  "content": "Given a row vector $A = [2, -1, 3]$ and a column vector $B = \\begin{bmatrix} 4 \\\\ 0 \\\\ 1 \\end{bmatrix}$, calculate the matrix product $A \\times B$.",
  "options": [
    "A. A $3 \\times 3$ matrix",
    "B. A scalar value of 11",
    "C. A scalar value of 8",
    "D. The operation is mathematically undefined"
  ],
  "correct_option": "B",
  "explanation": "The product of a $1 \\times 3$ matrix and a $3 \\times 1$ matrix yields a $1 \\times 1$ scalar. Calculated as: $(2 \\times 4) + ((-1) \\times 0) + (3 \\times 1) = 8 + 0 + 3 = 11$."
}

```

---

## 3. Examination Structural Blueprint

The exam generator engine must strictly enforce the following structural limits based on the program's admissions criteria:

### Global Parameters

* **Total Time Duration:** 90 Minutes (Hard-coded countdown timer in the User Interface).
* **Total Score:** 100 Points.
* **Question Format:** Multiple Choice Questions (MCQ) mixed with occasional scenario-based structured queries.

### Domain Weight Distribution (25% Per Module)

The selection engine must split the total question quota ($N$) equally across the four blocks:

| Module Identifier | Core Domain Designation | Targeted Sub-Topic Tags |
| --- | --- | --- |
| **Module A** | Mathematical Foundations & Quantitative Reasoning | `linear-algebra`, `probability-statistics`, `calculus`, `matrix-operations`, `activation-functions` |
| **Module B** | Programming Techniques & Data Processing | `python-syntax`, `data-structures`, `algorithms`, `data-preprocessing`, `tokenization`, `data-augmentation` |
| **Module C** | AI Knowledge & AI Product Thinking | `supervised-learning`, `unsupervised-learning`, `computer-vision`, `nlp`, `llm`, `rag`, `ux-metrics` |
| **Module D** | Logic Reasoning, Ethics & Behavioral Judgment | `propositional-logic`, `data-privacy`, `pii-masking`, `algorithmic-bias`, `open-source-licensing` |

---

## 4. Test Generation Algorithm Constraints

To maintain an optimal psychometric balance, the generation script must apply the following logical filters during the relational query execution:

### 1. Difficulty Tier Balancing

For each individual module, the selected subset of questions must match the following distribution to ensure proper candidate differentiation:

* **Easy:** 40% (Tests basic definitions and syntax recognition)
* **Medium:** 40% (Requires calculation, multi-step debugging, or code tracing)
* **Hard:** 20% (Evaluates system-level architecture design, logical deduction puzzles, or ethical risk assessment)

### 2. Tag Deduplication Filter

The picking engine must minimize tag collision. For instance, if an exam paper draws 10 questions for Module A, the algorithm should sort by distinct tags to ensure that the system does not pick 5 questions purely on `matrix-multiplication`, thereby omitting `probability-statistics`.

### 3. Procedural Execution Pseudocode

```text
FUNCTION GenerateExamPaper(TargetQuestionCount):
    Initialize ExamPaperList as Empty List
    QuotaPerModule = TargetQuestionCount / 4
    
    FOR Each Module IN ["Module_A", "Module_B", "Module_C", "Module_D"]:
        EasyCount   = Floor(QuotaPerModule * 0.40)
        MediumCount = Floor(QuotaPerModule * 0.40)
        HardCount   = QuotaPerModule - (EasyCount + MediumCount)
        
        Fetch Random EasyCount   FROM ItemBank WHERE module_id == CurrentModule AND difficulty == "Easy"
        Fetch Random MediumCount FROM ItemBank WHERE module_id == CurrentModule AND difficulty == "Medium"
        Fetch Random HardCount   FROM ItemBank WHERE module_id == CurrentModule AND difficulty == "Hard"
        
        Append fetched questions to ExamPaperList
        
    Shuffle(ExamPaperList) // Scramble order to prevent cross-candidate cheating
    RETURN ExamPaperList

```

---

## 5. UI/UX Rendering Directives

When building the frontend engine parsing this Markdown metadata, ensure the following rendering engines are implemented:

1. **MathJax / KaTeX Integration:** Required to properly format mathematical expressions enclosed within `$` or `$$` notation blocks.
2. **PrismJS / Highlight.js Web Component:** Required to syntax-highlight Python scripts inside markdown backticks (````python`), maintaining vital block indentations.

---

## 6. System Item Bank (50 Core Sample Questions)

### MODULE A: MATHEMATICAL FOUNDATIONS & QUANTITATIVE REASONING

#### Q1 (Module A / Easy / Tag: probability-statistics)

Một mô hình phân loại AI dự đoán một hình ảnh là "Mèo" với độ chính xác (Precision) là $80\%$. Nếu trong một tập dữ liệu gồm $100$ ảnh mà mô hình dự đoán là Mèo, có bao nhiêu ảnh thực sự là mèo?

* A. $20$
* B. $50$
* C. $80$
* D. $100$
* **Correct Option:** C
* **Explanation:** Độ chính xác (Precision) được tính bằng tỷ lệ số điểm dữ liệu thực sự tích cực (True Positive) trên tổng số điểm được dự đoán là tích cực. Với $80\%$ của $100$ hình ảnh được dự đoán, ta có: $100 \times 0.8 = 80$ ảnh thực sự là mèo.

#### Q2 (Module A / Easy / Tag: linear-algebra)

Cho hai vector $u = [1, 2]$ and $v = [3, 4]$. Tích vô hướng (dot product) của hai vector $u \cdot v$ bằng bao nhiêu?

* A. $11$
* B. $14$
* C. $7$
* D. $10$
* **Correct Option:** A
* **Explanation:** Tích vô hướng của hai vector được tính bằng tổng các tích của các phần tử tương ứng: $u \cdot v = (1 \times 3) + (2 \times 4) = 3 + 8 = 11$.

#### Q3 (Module A / Easy / Tag: linear-algebra)

Trong học máy, một hình ảnh kỹ thuật số grayscale (ảnh xám) kích thước $28 \times 28$ pixel thường được biểu diễn dưới dạng cấu trúc toán học nào sau đây?

* A. Một Vector hàng có 28 phần tử.
* B. Một Ma trận (Matrix) kích thước $28 \times 28$.
* C. Một Tập hợp không có thứ tự.
* D. Một Biến số vô hướng (Scalar).
* **Correct Option:** B
* **Explanation:** Ảnh xám là một lưới các điểm ảnh, mỗi điểm ảnh có một giá trị độ sáng. Do đó, nó được biểu diễn tự nhiên nhất bằng một ma trận hai chiều (2D Array/Matrix).

#### Q4 (Module A / Medium / Tag: probability-statistics)

Xét một hệ thống AI phát hiện gian lận thi cử. Xác suất để hệ thống báo động sai (sinh viên không gian lận nhưng AI bảo có) là $5\%$. Nếu trong một phòng thi có $40$ sinh viên làm bài nghiêm túc, kỳ vọng (số lượng trung bình) về số sinh viên bị AI gắn cờ cảnh báo sai là bao nhiêu?

* A. $0$ sinh viên
* B. $2$ sinh viên
* C. $5$ sinh viên
* D. $8$ sinh viên
* **Correct Option:** B
* **Explanation:** Giá trị kỳ vọng $E(X) = n \times p = 40 \times 0.05 = 2$ sinh viên.

#### Q5 (Module A / Medium / Tag: calculus)

Hàm số bậc hai $f(x) = x^2 - 4x + 5$ đạt giá trị nhỏ nhất (cực tiểu) tại điểm $x$ bằng bao nhiêu? (Gợi ý: Tìm điểm mà tại đó đạo hàm $f'(x) = 0$).

* A. $x = 0$
* B. $x = 2$
* C. $x = 4$
* D. $x = -2$
* **Correct Option:** B
* **Explanation:** Đạo hàm của hàm số là $f'(x) = 2x - 4$. Cho $f'(x) = 0 \Leftrightarrow 2x - 4 = 0 \Leftrightarrow x = 2$. Đây chính là nguyên lý tìm điểm tối ưu tối thiểu trong các thuật toán huấn luyện AI.

#### Q6 (Module A / Medium / Tag: linear-algebra)

Cho một ma trận dòng (Vector hàng) $A = [2, -1, 3]$ và một ma trận cột (Vector cột) $B = \begin{bmatrix} 4 \\ 0 \\ 1 \end{bmatrix}$. Kết quả của phép nhân ma trận $A \times B$ là gì?

* A. Một ma trận kích thước $3 \times 3$.
* B. Một giá trị vô hướng bằng $11$.
* C. Một giá trị vô hướng bằng $8$.
* D. Phép toán này không thực hiện được.
* **Correct Option:** B
* **Explanation:** Phép nhân ma trận hàng kích thước $1 \times 3$ với ma trận cột kích thước $3 \times 1$ sẽ cho ra một giá trị vô hướng (ma trận kích thước $1 \times 1$). Cách tính: $(2 \times 4) + ((-1) \times 0) + (3 \times 1) = 8 + 0 + 3 = 11$.

#### Q7 (Module A / Medium / Tag: probability-statistics)

Thống kê tại một ngã tư cho thấy: Xác suất một phương tiện giao thông rẽ trái là $0.3$, đi thẳng là $0.5$, và rẽ phải là $0.2$. Nếu có 2 phương tiện di chuyển độc lập vào ngã tư, xác suất để **cả hai phương tiện cùng rẽ trái** là bao nhiêu?

* A. $0.6$
* B. $0.09$
* C. $0.3$
* D. $0.15$
* **Correct Option:** B
* **Explanation:** Vì hai phương tiện di chuyển hoàn toàn độc lập, xác suất của hai biến cố đồng thời xảy ra (biến cố giao) bằng tích các xác suất thành phần: $P(A \text{ và } B) = P(A) \times P(B) = 0.3 \times 0.3 = 0.09$.

#### Q8 (Module A / Medium / Tag: activation-functions)

Trong các hàm kích hoạt (Activation Function) phổ biến của mạng nơ-ron, hàm **Sigmoid** $f(x) = \frac{1}{1 + e^{-x}}$ nén tất cả các giá trị đầu vào vào khoảng nào sau đây?

* A. $[-1, 1]$
* B. $[0, 1]$
* C. $[0, +\infty)$
* D. $(-\infty, +\infty)$
* **Correct Option:** B
* **Explanation:** Giá trị của $e^{-x}$ luôn dương với mọi $x$. Khi $x \to +\infty$, $e^{-x} \to 0 \Rightarrow f(x) \to 1$. Khi $x \to (-\infty)$, $e^{-x} \to +\infty \Rightarrow f(x) \to 0$. Do đó hàm Sigmoid giới hạn đầu ra luôn nằm trong khoảng $[0, 1]$.

#### Q9 (Module A / Medium / Tag: matrix-operations)

Cho ma trận $A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$. Định thức (Determinant) của ma trận $A$, ký hiệu là $\det(A)$, bằng bao nhiêu?

* A. $5$
* B. $11$
* C. $3$
* D. $8$
* **Correct Option:** A
* **Explanation:** Định thức của ma trận $2 \times 2$ dạng $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ được tính bằng công thức: $ad - bc$. Áp dụng vào bài: $(2 \times 4) - (3 \times 1) = 8 - 3 = 5$.

#### Q10 (Module A / Hard / Tag: probability-statistics)

Có 3 hộp đựng linh kiện điện tử. Hộp I có $10\%$ linh kiện lỗi, Hộp II có $5\%$ linh kiện lỗi, Hộp III có $20\%$ linh kiện lỗi. Chọn ngẫu nhiên một hộp, rồi từ đó lấy ra 1 linh kiện. Xác suất để chọn trúng Hộp III **và** lấy ra một linh kiện lỗi là bao nhiêu?

* A. $\frac{1}{3} \times 0.2$
* B. $\frac{1}{3} + 0.2$
* C. $0.2$
* D. $\frac{1}{3} \times (0.1 + 0.05 + 0.2)$
* **Correct Option:** A
* **Explanation:** Xác suất chọn ngẫu nhiên 1 trong 3 hộp là $\frac{1}{3}$. Xác suất lấy được linh kiện lỗi trong Hộp III là $20\%$ ($0.2$). Do hai hành động diễn ra liên tiếp, ta nhân chúng lại: $\frac{1}{3} \times 0.2$.

#### Q11 (Module A / Medium / Tag: metrics)

Khi đo lường hiệu năng của mô hình AI dự báo giá nhà, nếu bạn muốn các sai số lớn (lệch nhiều so với thực tế) bị phạt nặng hơn, bạn nên chọn hàm đo lường sai số nào?

* A. MAE (Sai số tuyệt đối trung bình)
* B. MSE (Sai số bình phương trung bình)
* C. Accuracy (Độ chính xác)
* D. F1-Score
* **Correct Option:** B
* **Explanation:** Hàm MSE thực hiện bình phương các khoảng cách sai số $(y_{true} - f(x))^2$. Khi sai số lớn, bình phương lên sẽ đẩy giá trị lỗi lên rất cao so với sai số nhỏ, giúp phạt nặng các điểm dữ liệu bị lệch nhiều (outliers).

#### Q12 (Module A / Easy / Tag: linear-algebra)

Cho vector $w = [3, 4]$. Khoảng cách Euclide (độ dài/chuẩn $L_2$) của vector này từ gốc tọa độ $(0,0)$ bằng bao nhiêu?

* A. $5$
* B. $7$
* C. $25$
* D. $12$
* **Correct Option:** A
* **Explanation:** Chuẩn $L_2$ (Khoảng cách Euclide) của vector $w=[3, 4]$ được tính bằng: $\sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.

#### Q13 (Module A / Hard / Tag: calculus)

Nếu đạo hàm bậc nhất của một hàm chi phí (Loss function) tại điểm $x_0$ có giá trị là một số dương ($f'(x_0) > 0$), để giảm chi phí theo thuật toán Gradient Descent, ta cần dịch chuyển $x$ về phía nào?

* A. Giảm giá trị của $x$ ($x_{new} < x_0$)
* B. Tăng giá trị của $x$ ($x_{new} > x_0$)
* C. Giữ nguyên $x$ vì đã đạt tối ưu
* D. Tăng gấp đôi giá trị của $x$
* **Correct Option:** A
* **Explanation:** Công thức cập nhật của Gradient Descent là: $x_{new} = x_{old} - \alpha \times f'(x_{old})$. Nếu $f'(x_{old}) > 0$, ta có phép trừ một số dương, làm cho $x_{new}$ nhỏ hơn $x_{old}$. Nghĩa là phải giảm $x$.

#### Q14 (Module A / Medium / Tag: probability-statistics)

Một xúc xắc cân đối 6 mặt được gieo 2 lần. Xác suất để tổng số chấm xuất hiện trong 2 lần gieo bằng $4$ là bao nhiêu?

* A. $\frac{1}{12}$
* B. $\frac{1}{6}$
* C. $\frac{1}{18}$
* D. $\frac{1}{9}$
* **Correct Option:** A
* **Explanation:** Tổng số không gian mẫu khi gieo xúc xắc 2 lần là $6 \times 6 = 36$ trường hợp. Các cặp có tổng bằng 4 là: $(1,3), (2,2), (3,1)$ -> có 3 trường hợp thuận lợi. Xác suất là $\frac{3}{36} = \frac{1}{12}$.

#### Q15 (Module A / Easy / Tag: probability-statistics)

Trong một tập dữ liệu gồm lương của 5 kỹ sư AI lần lượt là: $20, 22, 25, 28, 95$ (triệu/tháng). Giá trị nào phản ánh sát nhất mức thu nhập phổ biến của nhóm này mà không bị ảnh hưởng bởi giá trị đột biến (outlier)?

* A. Giá trị trung bình (Mean)
* B. Giá trị trung vị (Median)
* C. Giá trị cực đại (Max)
* D. Tổng số lương
* **Correct Option:** B
* **Explanation:** Trong tập dữ liệu có giá trị $95$ lớn bất thường (Outlier). Giá trị trung bình (Mean) sẽ bị kéo lên cao ($\approx 38$), không phản ánh đúng thực tế. Giá trị trung vị (Median - số ở giữa sau khi sắp xếp) là $25$, phản ánh chính xác mức lương phổ biến hơn.

#### Q16 (Module A / Easy / Tag: matrix-operations)

Phép toán nào dưới đây biến đổi một ma trận kích thước $m \times n$ thành một ma trận kích thước $n \times m$ bằng cách đổi dòng thành cột và cột thành dòng?

* A. Nhân ma trận
* B. Nghịch đảo ma trận
* C. Chuyển vị ma trận (Transpose)
* D. Định thức ma trận
* **Correct Option:** C
* **Explanation:** Ma trận chuyển vị (Transpose), ký hiệu là $A^T$, thu được bằng cách chuyển các dòng của ma trận $A$ thành các cột tương ứng và ngược lại.

#### Q17 (Module A / Medium / Tag: calculus)

Hàm số $f(x) = -x^2 + 6x - 1$ đạt giá trị lớn nhất (Cực đại) tại $x$ bằng bao nhiêu?

* A. $x = 3$
* B. $x = -3$
* C. $x = 6$
* D. $x = 0$
* **Correct Option:** A
* **Explanation:** Tính đạo hàm: $f'(x) = -2x + 6$. Cho $f'(x) = 0 \Leftrightarrow -2x + 6 = 0 \Leftrightarrow x = 3$. Vì hệ số của $x^2$ âm ($-1$), đồ thị là một parabol quay bề lõm xuống dưới, đỉnh chính là điểm đạt giá trị lớn nhất.

#### Q18 (Module A / Hard / Tag: metrics)

Trong Học máy, hàm mất mát (Loss Function) phổ biến dành cho bài toán phân loại nhị phân (Binary Classification - ví dụ dự đoán Email là Spam hoặc Không Spam) là hàm nào?

* A. Mean Squared Error (MSE)
* B. Binary Cross-Entropy
* C. Huber Loss
* D. L1 Loss
* **Correct Option:** B
* **Explanation:** **Binary Cross-Entropy** đo lường khoảng cách giữa hai phân phối xác suất. Nó phạt rất nặng nếu mô hình dự đoán sai với độ tự tin cao, làm cho nó trở thành hàm mất mát tiêu chuẩn cho phân loại nhị phân.

#### Q19 (Module A / Easy / Tag: matrix-operations)

Cho ma trận $A$ kích thước $3 \times 2$ và ma trận $B$ kích thước $2 \times 4$. Ma trận kết quả $C = A \times B$ sẽ có kích thước (số dòng $\times$ số cột) là bao nhiêu?

* A. $3 \times 4$
* B. $2 \times 2$
* C. $3 \times 2$
* D. Phép nhân này không thực hiện được.
* **Correct Option:** A
* **Explanation:** Điều kiện để nhân hai ma trận là số cột của ma trận trước bằng số dòng của ma trận sau ($2 = 2$). Kích thước của ma trận kết quả sẽ lấy số dòng của ma trận trước và số cột của ma trận sau, tức là $3 \times 4$.

#### Q20 (Module A / Easy / Tag: probability-statistics)

Một hệ thống kiểm tra lỗi vi mạch camera tìm thấy trung bình 2 sản phẩm lỗi trên mỗi 100 sản phẩm. Nếu chọn ngẫu nhiên 1 sản phẩm để kiểm tra, xác suất chọn phải sản phẩm **không bị lỗi** là bao nhiêu?

* A. $0.02$
* B. $0.2$
* C. $0.98$
* D. $0.5$
* **Correct Option:** C
* **Explanation:** Xác suất chọn phải sản phẩm lỗi là $\frac{2}{100} = 0.02$. Biến cố chọn sản phẩm "không lỗi" là biến cố đối của sản phẩm "lỗi", do đó xác suất là: $1 - 0.02 = 0.98$ (tức $98\%$).

#### Q21 (Module A / Easy / Tag: calculus)

Phép toán đạo hàm của hàm số $f(x) = 3x^2 + 5x - 2$ là gì?

* A. $f'(x) = 3x + 5$
* B. $f'(x) = 6x + 5$
* C. $f'(x) = 6x - 2$
* D. $f'(x) = 6x^2 + 5$
* **Correct Option:** B
* **Explanation:** Theo công thức đạo hàm cơ bản: $(x^n)' = n \cdot x^{n-1}$ và $(cx)' = c$. Ta có: $(3x^2)' = 3 \cdot 2x = 6x$; $(5x)' = 5$; $(-2)' = 0$. Vậy $f'(x) = 6x + 5$.

#### Q22 (Module A / Easy / Tag: probability-statistics)

Khái niệm "Phương sai" (Variance) trong Thống kê mô tả điều gì của tập dữ liệu?

* A. Giá trị lớn nhất của tập dữ liệu.
* B. Mức độ phân tán/biến thiên của các điểm dữ liệu so với giá trị trung bình.
* C. Giá trị xuất hiện nhiều nhất trong tập dữ liệu.
* D. Số lượng các phần tử có trong tập dữ liệu.
* **Correct Option:** B
* **Explanation:** Phương sai đo lường xem dữ liệu nằm tập trung sát quanh giá trị trung bình hay bị trải rộng phân tán ra xa. Phương sai càng lớn nghĩa là dữ liệu càng biến thiên mạnh.

---

### MODULE B: PROGRAMMING TECHNIQUES & DATA PROCESSING

#### Q23 (Module B / Medium / Tag: syntax-python)

Cho đoạn mã giả sau:

```python
def khu_nhieu(data):
    result = []
    for x in data:
        if x is not None and x >= 0:
            result.append(x)
    return result

```

Nếu đầu vào là `data = [1, -5, None, 10, 0]`, hàm sẽ trả về kết quả nào?

* A. `[1, 10]`
* B. `[1, 10, 0]`
* C. `[1, -5, 10, 0]`
* D. Lỗi Runtime do có giá trị `None`
* **Correct Option:** B
* **Explanation:** Điều kiện `x is not None and x >= 0` sẽ lọc bỏ các giá trị rỗng (`None`) và các số âm ($-5$). Số `0` thỏa mãn điều kiện $\ge 0$ nên kết quả giữ lại gồm: `1`, `10`, và `0`.

#### Q24 (Module B / Easy / Tag: data-preprocessing)

Khi chuẩn bị dữ liệu hình ảnh để huấn luyện một mô hình Computer Vision, bước "Chuẩn hóa" (Normalization) đưa giá trị các điểm ảnh (pixel) từ đoạn $[0, 255]$ về đoạn $[0, 1]$ nhằm mục đích gì chính?

* A. Giảm kích thước tệp hình ảnh để tiết kiệm bộ nhớ lưu trữ.
* B. Giúp thuật toán tối ưu (gradient descent) hội tụ nhanh hơn và ổn định hơn.
* C. Biến đổi ảnh màu thành ảnh xám.
* D. Tăng độ phân giải của hình ảnh.
* **Correct Option:** B
* **Explanation:** Việc đưa dữ liệu về cùng một khoảng thang đo (scale) giúp các bước tính toán đạo hàm và cập nhật trọng số trong mạng nơ-ron diễn ra cân bằng, tránh hiện tượng bùng nổ hoặc tiêu biến gradient.

#### Q25 (Module B / Easy / Tag: data-structures)

Khi xây dựng một tính năng "Lịch sử thao tác" (Undo/Redo) cho một công cụ dán nhãn dữ liệu AI (Data Labeling Tool), cấu trúc dữ liệu nào sau đây là phù hợp nhất để lưu trữ các bước thực hiện theo cơ chế "Vào sau, Ra trước" (LIFO)?

* A. Hàng đợi (Queue)
* B. Ngăn xếp (Stack)
* C. Mảng một chiều (Array)
* D. Bảng băm (Hash Table)
* **Correct Option:** B
* **Explanation:** Thao tác Undo đòi hỏi phải lấy ra hành động gần đây nhất vừa được thêm vào, tuân theo đúng nguyên lý LIFO (Last In, First Out) của Ngăn xếp (Stack).

#### Q26 (Module B / Easy / Tag: syntax-python)

In Python, consider the following script:

```python
labels = ['cat', 'dog', 'cat', 'cat', 'dog', 'bird']
count_dict = {}
for label in labels:
    count_dict[label] = count_dict.get(label, 0) + 1

```

Sau khi chạy, giá trị của `count_dict['cat']` là bao nhiêu?

* A. 1
* B. 2
* C. 3
* D. 5
* **Correct Option:** C
* **Explanation:** Vòng lặp duyệt qua danh sách, mỗi lần gặp 'cat' nó sẽ tăng giá trị đếm lên 1. Từ 'cat' xuất hiện 3 lần trong danh sách `labels`.

#### Q27 (Module B / Medium / Tag: data-preprocessing)

Bạn phát hiện tập dữ liệu bảng (Tabular data) của mình có một cột mang tên "Tuổi" nhưng có một số hàng bị trống (giá trị `NaN` hoặc `Null`). Phương pháp nào sau đây **không** nên dùng nếu muốn giữ lại tối đa số lượng hàng dữ liệu?

* A. Thay thế các giá trị trống bằng giá trị trung bình (Mean) của cột "Tuổi".
* B. Thay thế các giá trị trống bằng giá trị trung vị (Median) của cột "Tuổi".
* C. Xóa bỏ hoàn toàn tất cả các hàng có chứa giá trị trống ở cột "Tuổi".
* D. Dự đoán giá trị trống bằng một mô hình hồi quy phụ dựa trên các cột khác.
* **Correct Option:** C
* **Explanation:** Việc xóa bỏ hàng (Drop rows) sẽ làm mất đi dữ liệu của các cột khác trong hàng đó, không thỏa mãn tiêu chí "giữ lại tối đa số lượng hàng".

#### Q28 (Module B / Medium / Tag: algorithms)

Hãy quan sát hàm đệ quy được viết bằng Python dưới đây:

```python
def tinh_toan(n):
    if n <= 1:
        return 1
    return n * tinh_toan(n - 1)

```

Nếu ta gọi hàm với giá trị `tinh_toan(4)`, kết quả trả về sẽ là bao nhiêu?

* A. $4$
* B. $10$
* C. $24$
* D. $120$
* **Correct Option:** C
* **Explanation:** Đây là hàm tính Giai thừa ($n!$) bằng đệ quy. Luồng chạy của `tinh_toan(4)` sẽ là: $4 \times 3 \times 2 \times 1 = 24$.

#### Q29 (Module B / Easy / Tag: tokenization)

Trong quá trình xử lý dữ liệu dạng văn bản (NLP) tiếng Việt trước khi đưa vào mô hình AI, bước "Tokenization" (Tách từ) đóng vai trò gì?

* A. Chuyển đổi toàn bộ văn bản từ chữ hoa thành chữ thường.
* B. Sửa các lỗi chính tả có trong đoạn văn bản gốc.
* C. Cắt đoạn văn bản thành các đơn vị từ hoặc cụm từ có nghĩa (ví dụ: "trí tuệ", "nhân tạo") thay vì để rời rạc từng chữ cái.
* D. Dịch đoạn văn bản đó sang tiếng Anh.
* **Correct Option:** C
* **Explanation:** Tokenization giúp AI hiểu đúng cụm từ có nghĩa thay vì hiểu sai thành các từ đơn lẻ đối với các ngôn ngữ có từ ghép như tiếng Việt.

#### Q30 (Module B / Easy / Tag: syntax-python)

Xét đoạn mã Python sau:

```python
arr = [1, 2, 3, 4, 5]
new_arr = [x * 2 for x in arr if x % 2 != 0]

```

Giá trị của `new_arr` sau khi thực hiện là gì?

* A. `[2, 4, 6, 8, 10]`
* B. `[4, 8]`
* C. `[2, 6, 10]`
* D. `[1, 3, 5]`
* **Correct Option:** C
* **Explanation:** Điều kiện `if x % 2 != 0` lọc ra các số lẻ `1, 3, 5`. Biểu thức `x * 2` nhân đôi các số này lên $\rightarrow$ thu được `[2, 6, 10]`.

#### Q31 (Module B / Easy / Tag: data-structures)

Cấu trúc dữ liệu nào dựa trên nguyên tắc **FIFO (First In, First Out)**, thường được dùng để thiết lập hàng đợi xử lý luồng ảnh từ các camera gửi về máy chủ AI?

* A. Stack (Ngăn xếp)
* B. Queue (Hàng đợi)
* C. Tree (Cây)
* D. Graph (Đồ thị)
* **Correct Option:** B
* **Explanation:** Hàng đợi (Queue) hoạt động theo nguyên tắc FIFO (Vào trước, Ra trước). Ảnh nào do camera gửi đến trước sẽ được xếp hàng xử lý trước.

#### Q32 (Module B / Easy / Tag: syntax-python)

Hàm nào sau đây trong các thư viện lập trình xử lý chuỗi thường được dùng để chuyển đổi chuỗi `"  AI và Đời Sống  "` thành `"AI và Đời Sống"` (loại bỏ khoảng trắng thừa ở hai đầu)?

* A. `split()`
* B. `replace()`
* C. `strip()`
* D. `lower()`
* **Correct Option:** C
* **Explanation:** Trong Python, hàm `strip()` được thiết kế để loại bỏ toàn bộ các ký tự khoảng trắng thừa ở hai đầu của một chuỗi văn bản.

#### Q33 (Module B / Easy / Tag: syntax-python)

Khi viết mã nguồn huấn luyện mô hình, nếu bạn gặp lỗi **"IndexError: list index out of range"**, điều này có nghĩa là gì?

* A. Biến của bạn chưa được định nghĩa.
* B. Bạn đang cố truy cập vào một phần tử tại vị trí chỉ số không tồn tại trong danh sách.
* C. Máy tính bị tràn bộ nhớ RAM.
* D. Kiểu dữ liệu truyền vào hàm bị sai.
* **Correct Option:** B
* **Explanation:** Lỗi này xảy ra khi bạn cố gắng truy cập phần tử bằng chỉ số vượt quá độ dài danh sách (ví dụ danh sách có 3 phần tử nhưng gọi index số 5).

#### Q34 (Module B / Easy / Tag: data-augmentation)

Trong xử lý dữ liệu ảnh, việc lật ảnh (Flip), xoay ảnh (Rotate), hoặc thay đổi độ sáng ngẫu nhiên của các ảnh có sẵn trong tập huấn luyện nhằm mục đích tăng số lượng và tính đa dạng của dữ liệu được gọi là kỹ thuật gì?

* A. Data Normalization (Chuẩn hóa dữ liệu)
* B. Data Augmentation (Tăng cường dữ liệu)
* C. Data Cleaning (Làm sạch dữ liệu)
* D. Feature Selection (Chọn lọc đặc trưng)
* **Correct Option:** B
* **Explanation:** Tăng cường dữ liệu (Data Augmentation) là kỹ thuật tạo ra các mẫu dữ liệu mới nhân tạo từ dữ liệu gốc nhằm làm phong phú tập huấn luyện, giúp mô hình tránh quá khớp.

#### Q35 (Module B / Medium / Tag: syntax-python)

Cho đoạn mã Python sau:

```python
def check_data(val):
    try:
        return 10 / val
    except ZeroDivisionError:
        return "Lỗi chia cho 0"
    except TypeError:
        return "Lỗi kiểu dữ liệu"

```

Nếu gọi `check_data("AI")`, kết quả trả về là gì?

* A. `Lỗi chia cho 0`
* B. `Lỗi kiểu dữ liệu`
* C. Chương trình bị crash và dừng hoạt động
* D. `None`
* **Correct Option:** B
* **Explanation:** Phép toán `10 / "AI"` thực hiện phép chia giữa một số và một chuỗi chữ. Điều này gây ra lỗi sai kiểu dữ liệu (`TypeError`) và bị khối `except TypeError` bắt lại.

#### Q36 (Module B / Easy / Tag: data-structures)

Bạn muốn lưu trữ thông tin cấu hình của một mô hình AI bao gồm các cặp `Tên tham số` và `Giá trị`. Cấu trúc dữ liệu nào trong Python hỗ trợ truy xuất nhanh nhất theo cơ chế khóa-giá trị (key-value)?

* A. List
* B. Tuple
* C. Dictionary
* D. Set
* **Correct Option:** C
* **Explanation:** Dictionary trong Python lưu trữ dữ liệu dưới dạng `{key: value}` dựa trên cơ chế bảng băm (Hash table), giúp việc tìm kiếm theo khóa đạt tốc độ tối ưu $O(1)$.

#### Q37 (Module B / Medium / Tag: data-preprocessing)

Khi làm việc với dữ liệu dạng bảng, khái niệm **"One-Hot Encoding"** thường được dùng để xử lý loại dữ liệu nào?

* A. Dữ liệu số liên tục.
* B. Dữ liệu dạng phân loại chữ/nhãn (Categorical) không có thứ tự (ví dụ: Đỏ, Xanh, Vàng).
* C. Dữ liệu dạng ngày tháng năm.
* D. Dữ liệu dạng ảnh độ phân giải cao.
* **Correct Option:** B
* **Explanation:** Thuật toán AI chỉ hiểu dữ liệu số. Kỹ thuật **One-Hot Encoding** tách cột phân loại chữ thành các cột nhị phân riêng biệt (`0` hoặc `1`) mà không áp đặt thứ tự lớn nhỏ sai lệch lên dữ liệu.

#### Q38 (Module B / Easy / Tag: algorithms)

Đoạn code Python dưới đây thực hiện thuật toán tìm kiếm nào?

```python
def find_item(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

```

* A. Tìm kiếm nhị phân (Binary Search)
* B. Tìm kiếm tuyến tính (Linear Search)
* C. Tìm kiếm theo chiều sâu (DFS)
* D. Sắp xếp nổi bọt (Bubble Sort)
* **Correct Option:** B
* **Explanation:** Đoạn mã dùng vòng lặp duyệt lần lượt qua từng phần tử từ đầu đến cuối mảng để so sánh với mục tiêu (`target`), đây chính là Tìm kiếm tuyến tính.

#### Q39 (Module B / Easy / Tag: data-structures)

Tại sao khi lưu trữ cơ sở dữ liệu lớn phục vụ hệ thống AI, người ta thường hạn chế dùng file Excel (`.xlsx`) mà ưu tiên dùng file dạng `.csv` hoặc các hệ quản trị CSDL (như MySQL, PostgreSQL)?

* A. File Excel chạy nhanh hơn nhưng tốn dung lượng hơn.
* B. File CSV hoặc CSDL lưu trữ văn bản thuần túy/cấu trúc tối giản, giúp việc đọc/ghi bằng mã lập trình nhanh hơn và không bị giới hạn số dòng lớn như Excel.
* C. Excel không thể lưu trữ được số thập phân.
* D. File Excel dễ bị nhiễm virus AI hơn.
* **Correct Option:** B
* **Explanation:** Định dạng CSV hoặc hệ CSDL lưu dữ liệu tối giản dạng thô, giúp hệ thống đọc ghi dữ liệu lớn nhanh hơn và phá bỏ giới hạn tối đa khoảng 1 triệu dòng của Excel.

#### Q40 (Module B / Easy / Tag: syntax-python)

Trong Python, kết quả của phép toán `11 // 3` và `11 % 3` lần lượt là gì?

* A. `3` và `2`
* B. `3.66` và `2`
* C. `3` và `1`
* D. `2` và `3`
* **Correct Option:** A
* **Explanation:** Toán tử `//` là phép chia lấy phần nguyên ($11$ chia $3$ được $3$). Toán tử `%` là phép chia lấy phần dư ($11$ chia $3$ dư $2$).

#### Q41 (Module B / Easy / Tag: syntax-python)

Đoạn mã Python nào sau đây dùng để mở và đọc nội dung một file văn bản mang tên `data.txt` một cách an toàn nhất (tự động đóng file sau khi dùng xong kể cả khi gặp lỗi)?

* A. `file = open('data.txt', 'r')`
* B. `with open('data.txt', 'r') as file:`
* C. `read_file('data.txt')`
* D. `import data.txt`
* **Correct Option:** B
* **Explanation:** Cú pháp `with ... as ...` (Context Manager) đảm bảo tài nguyên hệ thống luôn được đóng lại một cách tự động và an toàn sau khi khối lệnh kết thúc, tránh rò rỉ bộ nhớ.

#### Q42 (Module B / Easy / Tag: algorithms)

Thuật toán Sắp xếp nổi bọt (Bubble Sort) hoạt động bằng cách nào?

* A. Chia đôi mảng liên tục rồi gộp lại theo thứ tự.
* B. Duyệt qua mảng nhiều lần, so sánh các cặp phần tử kề nhau và hoán đổi chúng nếu sai thứ tự cho đến khi mảng được sắp xếp.
* C. Chọn phần tử ngẫu nhiên làm chốt (Pivot) rồi phân loại mảng.
* D. Lấy ngẫu nhiên các phần tử và xếp vào vị trí trống.
* **Correct Option:** B
* **Explanation:** Bubble Sort hoạt động bằng cách liên tục đổi chỗ các phần tử kề nhau nếu chúng đứng sai thứ tự, làm cho các phần tử lớn nhất "nổi" dần về cuối mảng.

#### Q43 (Module B / Easy / Tag: data-preprocessing)

Khi dữ liệu hình ảnh đầu vào quá lớn, việc giảm kích thước ảnh (ví dụ từ $1920 \times 1080$ về $224 \times 224$) trước khi đưa vào mô hình Deep Learning có tác dụng chính là gì?

* A. Giúp mô hình nhận diện màu sắc đẹp hơn.
* B. Giảm số lượng tham số tính toán, tăng tốc độ huấn luyện và giảm tải bộ nhớ GPU/RAM.
* C. Làm tăng độ chi tiết của các vật thể nhỏ trong ảnh.
* D. Chuyển ảnh màu thành ảnh đen trắng.
* **Correct Option:** B
* **Explanation:** Resize ảnh về kích thước tiêu chuẩn nhỏ hơn giúp cắt giảm hàng triệu tham số không cần thiết, giúp cân bằng giữa độ chính xác và hiệu năng phần cứng.

#### Q44 (Module B / Easy / Tag: data-structures)

Trong cấu trúc dữ liệu, một **Đồ thị (Graph)** bao gồm những thành phần cốt lõi nào?

* A. Các nút (Nodes/Vertices) và các cạnh kết nối (Edges).
* B. Các dòng và các cột.
* C. Các phần tử xếp chồng lên nhau tuân theo cơ chế LIFO.
* D. Các cặp Khóa (Key) và Giá trị (Value).
* **Correct Option:** A
* **Explanation:** Đồ thị là cấu trúc dữ liệu phi tuyến tính, gồm một tập hợp các đỉnh (Nodes) kết nối với nhau bởi các đường nối gọi là cạnh (Edges).

---

### MODULE C: AI KNOWLEDGE & AI PRODUCT THINKING

#### Q45 (Module C / Easy / Tag: computer-vision)

Hệ thống tự động nhận diện và trích xuất thông tin biển số xe từ camera giao thông thuộc lĩnh vực nào sau đây của Trí tuệ nhân tạo?

* A. Xử lý ngôn ngữ tự nhiên (NLP)
* B. Thị giác máy tính (Computer Vision)
* C. Hệ thống gợi ý (Recommender Systems)
* D. Khai phá dữ liệu âm thanh (Audio Mining)
* **Correct Option:** B
* **Explanation:** Nhận diện biển số xe liên quan trực tiếp đến việc xử lý, phân tích và hiểu thông tin từ hình ảnh/video đầu vào, đây là bài toán kinh diễn của Thị giác máy tính (Computer Vision).

#### Q46 (Module C / Medium / Tag: product-ux)

Một ứng dụng AI gợi ý món ăn cho người dùng dựa trên sở thích lịch sử. Sau khi triển khai, người dùng phàn nàn rằng ứng dụng "liên tục gợi ý đi gợi ý lại đúng 1 món duy nhất mà họ từng khen ngon, gây nhàm chán". Với tư cách là kỹ sư sản phẩm AI, bạn sẽ đề xuất cải tiến thuật toán theo hướng nào?

* A. Tắt hệ thống gợi ý và chuyển sang hiển thị ngẫu nhiên hoàn toàn.
* B. Tăng trọng số của các món ăn cũ để đảm bảo độ chính xác tối đa.
* C. Thêm cơ chế "Khám phá" (Exploration) bằng cách lồng ghép các món ăn mới có thuộc tính tương tự hoặc món thịnh hành để tăng tính đa dạng.
* D. Yêu cầu người dùng tự nhập tay món ăn họ muốn ăn mỗi ngày.
* **Correct Option:** C
* **Explanation:** Một hệ thống gợi ý tốt cần cân bằng giữa "Khai thác" (Exploration - những gì người dùng đã thích) và "Khám phá" (Exploration - đề xuất cái mới tương tự) để tránh hiện tượng "bẫy lọc" gây nhàm chán.

#### Q47 (Module C / Easy / Tag: llm)

Mô hình ngôn ngữ lớn (LLM) như GPT-4 hay các hệ thống chatbot thông minh hoạt động dựa trên việc dự đoán từ tiếp theo trong câu thuộc nhóm học máy nào?

* A. Học có giám sát (Supervised Learning) hoặc Học tự giám sát (Self-Supervised Learning)
* B. Học không giám sát thuần túy (Unsupervised Learning)
* C. Học tăng cường không cần dữ liệu (Reinforcement Learning)
* D. Thuật toán tìm kiếm theo chiều sâu (DFS)
* **Correct Option:** A
* **Explanation:** Việc dự đoán từ tiếp theo dựa trên các từ đã xuất hiện phía trước sử dụng chính các văn bản có sẵn làm "nhãn" tự nhiên để học, đây là bản chất của Học tự giám sát (Self-Supervised).

#### Q48 (Module C / Medium / Tag: product-ux)

Trường đại học muốn tích hợp một AI kiểm duyệt bài viết tự động trên mạng xã hội nội bộ của sinh viên nhằm loại bỏ các nội dung toxic, thô tục hoặc spam. Tuy nhiên, hệ thống ban đầu hoạt động quá nhạy cảm, liên tục khóa nhầm các bài viết thảo luận học thuật bình thường chỉ vì có chứa một vài từ ngữ mang tính tranh luận gay gắt. Là người phát triển sản phẩm, bạn nên làm gì?

* A. Tắt bỏ hoàn toàn AI và quay lại duyệt bài bằng tay 100%.
* B. Điều chỉnh ngưỡng tin cậy (Confidence Threshold) của AI cao lên, chỉ khóa bài khi độ chắc chắn vi phạm đạt mức rất cao (ví dụ $>95\%$), đồng thời bổ sung nút "Khiếu nại" cho sinh viên.
* C. Đổi nhãn tất cả các từ mang tính tranh luận thành từ cấm để AI khóa triệt để hơn.
* D. Khóa luôn tài khoản của những sinh viên phàn nàn để hệ thống ổn định.
* **Correct Option:** B
* **Explanation:** Nâng ngưỡng tin cậy (Confidence Threshold) giúp giảm tỷ lệ phạt nhầm (False Positive), và quy trình vận hành sản phẩm luôn cần một bước dự phòng (nút khiếu nại) để con người can thiệp khi AI sai sót.

#### Q49 (Module C / Medium / Tag: computer-vision)

Một công ty phát triển hệ thống AI để tự động phát hiện hành vi "vượt đèn đỏ" từ camera giao thông. Hệ thống hoạt động bằng cách kiểm tra xem xe có cắt qua vạch dừng khi đèn đang đỏ hay không. Bài toán này sử dụng luồng xử lý chính nào dưới đây?

* A. Nhận diện giọng nói để nghe tiếng còi xe.
* B. Kết hợp giữa Phát hiện vật thể (YOLO để tìm xe, vạch, đèn) và Theo dõi chuyển động (Tracking vệt di chuyển của xe).
* C. Mô hình ngôn ngữ lớn (LLM) để đọc biển số xe.
* D. Thuật toán gom cụm không giám sát (Clustering) để đếm số lượng xe.
* **Correct Option:** B
* **Explanation:** Để bắt lỗi vượt đèn đỏ, AI cần nhận diện được vật thể tĩnh/động (xe, đèn tín hiệu) và sau đó theo dõi (Track) vị trí tọa độ của xe qua từng khung hình xem nó có cắt qua vạch giới hạn hay không.

#### Q50 (Module C / Medium / Tag: rag)

Bạn xây dựng một Chatbot AI tư vấn tuyển sinh cho trường Đại học. Trong tuần đầu tiên ra mắt, hệ thống gặp hiện tượng "ảo tưởng" (Hallucination) – Chatbot tự bịa ra một ngành học không hề có thật của trường và tư vấn sai cho học sinh. Giải pháp nào dưới đây là tối ưu nhất?

* A. Xóa bỏ chatbot và thuê người trực chat thủ công như cũ.
* B. Áp dụng kỹ thuật RAG (Retrieval-Augmented Generation) để bắt buộc Chatbot chỉ được tìm và trả lời dựa trên tài liệu tuyển sinh chính thức được cung cấp.
* C. Phạt tiền mô hình AI mỗi lần nó trả lời sai.
* D. Khóa tính năng đặt câu hỏi của học sinh, chỉ cho chọn các câu hỏi có sẵn.
* **Correct Option:** B
* **Explanation:** **RAG (Retrieval-Augmented Generation)** giới hạn không gian dữ liệu của LLM vào kho tài liệu chuẩn được cung cấp, giúp giảm thiểu tối đa hiện tượng "bịa đặt" thông tin (Hallucination).

#### Q51 (Module C / Hard / Tag: overfitting)

Khi huấn luyện một mô hình học máy, hiện tượng mô hình **"học vẹt"** – đạt độ chính xác cực kỳ cao ($99\%$) trên tập dữ liệu dùng để học (Train set) nhưng khi áp dụng vào dữ liệu thực tế mới (Test set) thì kết quả lại rất tệ ($50\%$) được gọi là hiện tượng gì?

* A. Underfitting (Chưa khớp)
* B. Overfitting (Quá khớp)
* C. Optimization (Tối ưu hóa)
* D. Vanishing Gradient (Tiêu biến đạo hàm)
* **Correct Option:** B
* **Explanation:** Hiện tượng quá khớp (Overfitting) xảy ra khi mô hình quá phức tạp hoặc học quá kỹ các chi tiết, nhiễu của tập dữ liệu Train khiến nó mất đi khả năng khái quát hóa dữ liệu mới.

#### Q52 (Module C / Medium / Tag: metrics)

Một hệ thống AI tự động phát hiện thư rác (Spam Filter) nhận diện nhầm một email cực kỳ quan trọng từ đối tác của công ty là "Spam" và tự động xóa đi. Trong các chỉ số đo lường, sai sót này đã làm tăng chỉ số nào sau đây của mô hình?

* A. True Positive
* B. False Positive
* C. True Negative
* D. False Negative
* **Correct Option:** B
* **Explanation:** Hệ thống báo động nhầm một mẫu vốn mang thuộc tính bình thường (Âm tính) thành thuộc tính vi phạm (Dương tính) được gọi là lỗi **False Positive** (Dương tính giả / Báo động nhầm).

#### Q53 (Module C / Easy / Tag: nlp)

Công nghệ nào sau đây cho phép một ứng dụng dịch thuật AI (như Google Translate) có thể nghe giọng nói của bạn, chuyển nó thành văn bản, dịch sang ngôn ngữ khác, và phát lại bằng giọng nói nhân tạo?

* A. Chỉ cần thị giác máy tính (Computer Vision)
* B. Sự kết hợp giữa Nhận diện giọng nói (STT), Xử lý ngôn ngữ tự nhiên (NLP) và Tổng hợp giọng nói (TTS).
* C. Hệ thống chuyên gia dựa trên các tập luật logic cố định (Rule-based).
* D. Thuật toán tìm kiếm đồ thị.
* **Correct Option:** B
* **Explanation:** Quy trình này tích hợp 3 phân hệ AI độc lập: Speech-to-Text (STT) dịch âm thanh thành chữ; NLP dịch thuật ngôn ngữ; và Text-to-Speech (TTS) chuyển văn bản thành giọng đọc nhân tạo.

#### Q54 (Module C / Easy / Tag: llm)

Nhà trường muốn phát triển một ứng dụng AI hỗ trợ sinh viên tự động tóm tắt nội dung các slide bài giảng dài thành các ý chính để ôn thi. Đầu vào là file PDF/Powerpoint, đầu ra là văn bản tóm tắt ngắn. Bạn nên đề xuất tích hợp mô hình AI thuộc nhóm nào?

* A. Object Detection (Phát hiện vật thể)
* B. Generative AI / Large Language Model (AI tạo sinh / Mô hình ngôn ngữ lớn)
* C. Time Series Forecasting (Dự báo chuỗi thời gian)
* D. Clustering (Gom cụm dữ liệu)
* **Correct Option:** B
* **Explanation:** Hiểu ngữ cảnh và tóm tắt văn bản dài (Text Summarization) là tính năng cốt lõi và là thế mạnh lớn nhất của AI tạo sinh và mô hình ngôn ngữ lớn (LLM).

#### Q55 (Module C / Medium / Tag: product-ux)

Bạn triển khai hệ thống AI nhận diện khuôn mặt để nhân viên điểm danh tại cửa công ty. Vào mùa đông, rất nhiều người phàn nàn hệ thống không nhận diện được do họ đeo khẩu trang dày và đội mũ len kín tai. Cách giải quyết nào là hợp lý và tối ưu nhất về mặt sản phẩm?

* A. Yêu cầu toàn bộ nhân viên không được đội mũ và đeo khẩu trang khi đi làm bất kể thời tiết.
* B. Huấn luyện lại mô hình bằng cách bổ sung thêm dữ liệu hình ảnh người đeo khẩu trang/đội mũ, tập trung trích xuất đặc trưng từ vùng mắt và lông mày.
* C. Đổi sang dùng hệ thống nhận diện bằng giọng nói đặt ở ngoài đường.
* D. Hạ độ chính xác yêu cầu của hệ thống xuống $10\%$ để ai đi qua cũng được điểm danh thành công.
* **Correct Option:** B
* **Explanation:** Về mặt sản phẩm, ta không bắt người dùng thay đổi thói quen thiết yếu. Giải pháp tối ưu là bổ sung dữ liệu huấn luyện mang tính thực tế để AI học được cách nhận diện qua các bộ phận không bị che khuất (vùng mắt).

#### Q56 (Module C / Easy / Tag: unsupervised-learning)

Thuật toán **K-Means** thuộc nhóm học máy nào sau đây?

* A. Học có giám sát (Supervised Learning)
* B. Học không giám sát (Unsupervised Learning)
* C. Học tăng cường (Reinforcement Learning)
* D. Mạng nơ-ron sâu sinh tạo (Generative AI)
* **Correct Option:** B
* **Explanation:** K-Means là thuật toán gom cụm (Clustering). Nó hoạt động trên tập dữ liệu **không có nhãn trước** nhằm tự động phân nhóm các điểm dữ liệu tương đồng vào chung một cụm, thuộc nhóm Học không giám sát.

#### Q57 (Module C / Medium / Tag: supervised-learning)

Khi xây dựng mô hình AI dự báo giá cổ phiếu dựa trên dữ liệu lịch sử đóng cửa qua các ngày trong 5 năm qua, bản chất bài toán này thuộc loại nào?

* A. Phân loại (Classification)
* B. Hồi quy chuỗi thời gian (Time Series Regression)
* C. Gom cụm dữ liệu (Clustering)
* D. Thị giác máy tính (Computer Vision)
* **Correct Option:** B
* **Explanation:** Giá cổ phiếu là một giá trị số liên tục (Hồi quy) và dữ liệu được sắp xếp phụ thuộc trực tiếp vào mốc thời gian liên tục (Chuỗi thời gian - Time Series).

#### Q58 (Module C / Medium / Tag: transfer-learning)

Kỹ thuật nào dưới đây cho phép bạn lấy một mô hình AI lớn đã được huấn luyện sẵn trên hàng triệu hình ảnh (như ResNet hoặc MobileNet) để áp dụng và tinh chỉnh (Fine-tune) vào bài toán nhận diện bệnh cây trồng cụ thể của bạn với tập dữ liệu nhỏ?

* A. Reinforcement Learning (Học tăng cường)
* B. Transfer Learning (Học chuyển giao)
* C. Random Forest
* D. Linear Regression
* **Correct Option:** B
* **Explanation:** **Transfer Learning** tận dụng mạng tri thức đặc trưng (đường nét, hình khối) mà mô hình lớn đã học được trước đó để tinh chỉnh sang một bài toán mới, giúp tiết kiệm tài nguyên và không cần tập dữ liệu khổng lồ.

#### Q59 (Module C / Medium / Tag: product-ux)

Một ứng dụng thương mại điện tử tích hợp AI để gợi ý sản phẩm cho người dùng. Số liệu cho thấy hệ thống gợi ý rất chính xác các sản phẩm người dùng quan tâm, nhưng doanh thu không tăng vì giao diện hiển thị phần gợi ý này bị giấu quá sâu ở cuối trang, khiến người dùng không nhìn thấy. Vấn đề ở đây nằm ở đâu?

* A. Thuật toán AI bị lỗi kỹ thuật nặng.
* B. Dữ liệu huấn luyện AI bị thiếu.
* C. Trải nghiệm người dùng (UX) và thiết kế sản phẩm chưa tối ưu để khai thác sức mạnh của AI.
* D. Mô hình AI chạy quá chậm.
* **Correct Option:** C
* **Explanation:** Một sản phẩm AI thành công không chỉ cần mô hình thông minh, mà cần một thiết kế trải nghiệm người dùng (UI/UX) hợp lý để đưa kết quả của AI tiếp cận khách hàng một cách tự nhiên và đúng thời điểm.

#### Q60 (Module C / Easy / Tag: computer-vision)

Khi phát triển một ứng dụng camera AI giám sát giao thông ngoài trời để phạt nguội xe máy không đội mũ bảo hiểm, yếu tố môi trường nào sau đây **ít ảnh hưởng nhất** đến độ chính xác của mô hình Object Detection khi vận hành thực tế?

* A. Sự thay đổi thời tiết giữa trời nắng gắt và trời mưa giông.
* B. Hậu cảnh có bóng cây đổ xuống lòng đường thay đổi theo thời gian trong ngày.
* C. Tiếng còi xe và âm thanh tiếng động cơ trên đường phố.
* D. Ánh đèn pha của ô tô rọi ngược chiều vào camera vào ban đêm.
* **Correct Option:** C
* **Explanation:** Mô hình Object Detection xử lý đầu vào là dữ liệu hình ảnh, do đó các yếu tố về ánh sáng, bóng đổ trực tiếp tác động lên pixel ảnh. Tiếng ồn âm thanh không thuộc luồng đầu vào nên không ảnh hưởng.

---

### MODULE D: LOGIC REASONING, ETHICS & BEHAVIORAL JUDGMENT

#### Q61 (Module D / Medium / Tag: pure-logic)

Có 3 mô hình AI: X, Y, và Z. Biết rằng: Mô hình X xử lý nhanh hơn mô hình Y. Mô hình Z xử lý chậm hơn mô hình Y. Phát biểu nào sau đây chắc chắn đúng?

* A. Mô hình Z xử lý nhanh nhất.
* B. Mô hình X xử lý nhanh hơn mô hình Z.
* C. Mô hình Y xử lý nhanh nhất.
* D. Mô hình X và mô hình Z có tốc độ bằng nhau.
* **Correct Option:** B
* **Explanation:** Từ dữ kiện bài toán, ta có thứ tự tốc độ xử lý từ nhanh đến chậm là: $X > Y > Z$. Do đó, mô hình X chắc chắn xử lý nhanh hơn mô hình Z.

#### Q62 (Module D / Easy / Tag: data-ethics)

Bạn được giao nhiệm vụ thu thập hình ảnh khuôn mặt của sinh viên trong trường để xây dựng hệ thống điểm danh tự động. Hành vi nào sau đây tuân thủ đúng nguyên tắc **Đạo đức dữ liệu (Data Ethics)**?

* A. Bí mật đặt camera ẩn tại cửa lớp để thu thập dữ liệu tự nhiên nhất mà không cần báo trước.
* B. Tự ý tải toàn bộ ảnh cá nhân công khai của sinh viên trên mạng xã hội về làm dữ liệu huấn luyện.
* C. Thông báo rõ ràng mục đích, cách thức bảo mật thông tin và gửi biểu mẫu cam kết đồng thuận (Consent form) cho sinh viên ký trước khi chụp ảnh thu thập dữ liệu.
* D. Chia sẻ công khai tập dữ liệu khuôn mặt này lên mạng để các khóa sau cùng sử dụng làm bài tập lớn.
* **Correct Option:** C
* **Explanation:** Quyền riêng tư và sự đồng thuận minh bạch (Informed Consent) từ chủ thể dữ liệu là nguyên tắc cốt lõi mang tính pháp lý trong đạo đức dữ liệu AI.

#### Q63 (Module D / Hard / Tag: ai-bias)

Một công ty công nghệ dùng dữ liệu hồ sơ tuyển dụng của 10 năm qua để huấn luyện AI lọc CV kỹ sư phần mềm. Do lịch sử ngành này trong quá khứ có tỷ lệ nam giới nộp đơn vượt trội, AI sau khi huấn luyện có xu hướng tự động đánh rớt các CV có chứa từ khóa liên quan đến "nữ" (Ví dụ: "Hội cựu nữ sinh viên"). Hiện tượng này được gọi là gì?

* A. Lỗi quá khớp (Overfitting)
* B. Định kiến hệ thống trong dữ liệu (Data Bias / Algorithmic Bias)
* C. Lỗi ảo tưởng dữ liệu (Hallucination)
* D. Tối ưu hóa toàn cục
* **Correct Option:** B
* **Explanation:** AI học từ dữ liệu lịch sử. Nếu dữ liệu phản ánh sự mất cân bằng hoặc định kiến sẵn có của con người, AI sẽ lặp lại và khuếch đại định kiến đó. Đây gọi là hiện tượng Định kiến (Bias).

#### Q64 (Module D / Medium / Tag: pure-logic)

Một nhóm nghiên cứu AI tuyên bố: *"Tất cả các mô hình deep learning có trên 1 tỷ tham số đều cần GPU để chạy. Mô hình AI mang tên 'Alpha' không cần GPU để chạy."* Dựa vào tuyên bố trên, kết luận nào sau đây là chính xác nhất?

* A. Mô hình Alpha có trên 1 tỷ tham số.
* B. Mô hình Alpha không phải là deep learning.
* C. Mô hình Alpha có dưới hoặc bằng 1 tỷ tham số.
* D. Tuyên bố của nhóm nghiên cứu bị sai.
* **Correct Option:** C
* **Explanation:** Theo quy tắc phủ định của mệnh đề kéo theo ($P \rightarrow Q$ thì $\neg Q \rightarrow \neg P$). Vì Alpha không cần GPU ($\neg Q$), nên Alpha không thể là "mô hình deep learning có trên 1 tỷ tham số". Do đó, nó phải có dưới hoặc bằng 1 tỷ tham số.

#### Q65 (Module D / Hard / Tag: data-privacy)

Bạn đang làm việc với một tập dữ liệu lớn chứa thông tin hành vi mua sắm của khách hàng để huấn luyện AI. Bạn phát hiện ra trong file dữ liệu có chứa cả số CCCD, số điện thoại và địa chỉ nhà riêng của khách hàng dưới dạng văn bản thô (Plain text). Hành động nào sau đây thể hiện tư duy đúng đắn về an toàn dữ liệu?

* A. Cứ để nguyên dữ liệu như vậy và huấn luyện mô hình vì dữ liệu càng chi tiết AI càng thông minh.
* B. Tiến hành loại bỏ hoặc mã hóa băm (Anonymization/Hashing) các trường thông tin định danh cá nhân (PII) này trước khi đưa vào huấn luyện hoặc chia sẻ với đội nhóm.
* C. Đăng tải tập dữ liệu này lên các hội nhóm lập trình công khai để nhờ họ tối ưu hộ code xử lý dữ liệu.
* D. Xóa toàn bộ tập dữ liệu và báo cáo là không thể làm được dự án.
* **Correct Option:** B
* **Explanation:** CCCD, số điện thoại, địa chỉ là các thông tin định danh cá nhân nhạy cảm (PII). Việc ẩn danh hóa hoặc băm mã hóa bảo mật là bắt buộc để bảo vệ quyền riêng tư trước khi đưa vào các phân hệ huấn luyện.

#### Q66 (Module D / Medium / Tag: pure-logic)

Hãy suy luận logic dựa trên các dữ kiện sau:

* Mọi sinh viên học ngành Công nghệ thông tin (CNTT) đều phải học môn Lập trình.
* Một số thành viên của Câu lạc bộ AI không phải là sinh viên ngành CNTT.
Phát biểu nào sau đây **chắc chắn đúng**?

* A. Mọi thành viên của Câu lạc bộ AI đều không biết lập trình.
* B. Một số thành viên của Câu lạc bộ AI biết lập trình.
* C. Có những người học môn Lập trình nhưng không thuộc ngành CNTT.
* D. Không có đủ cơ sở để khẳng định các phát biểu A, B, C chắc chắn đúng.
* **Correct Option:** D
* **Explanation:** Mệnh đề 1: CNTT $\rightarrow$ Lập trình (không có nghĩa Lập trình $\rightarrow$ CNTT). Mệnh đề 2: Một số thành viên CLB AI không thuộc CNTT, những người này có thể tự học lập trình hoặc không học (đề bài không nhắc tới). Vì vậy các phát biểu A, B, C đều là suy đoán vô căn cứ.

#### Q67 (Module D / Medium / Tag: pure-logic)

Hãy suy luận logic từ các phát biểu sau:

* Không có kỹ sư AI nào lười biếng.
* Một số người thích chơi game là kỹ sư AI.
Phát biểu nào sau đây **chắc chắn đúng**?

* A. Tất cả những người thích chơi game đều không lười biếng.
* B. Một số người thích chơi game không lười biếng.
* C. Mọi người lười biếng đều thích chơi game.
* D. Kỹ sư AI không thích chơi game.
* **Correct Option:** B
* **Explanation:** Dữ kiện 2 cho biết một nhóm giao nhau: Một số người chơi game là kỹ sư AI. Dữ kiện 1 khẳng định toàn bộ kỹ sư AI đều chăm chỉ (không lười biếng). Do đó, những người vừa thích chơi game vừa là kỹ sư AI chắc chắn là những người không lười biếng.

#### Q68 (Module D / Easy / Tag: open-source-licensing)

Một lập trình viên sử dụng mã nguồn mở của một tác giả khác được chia sẻ trên GitHub với giấy phép **MIT License** để xây dựng ứng dụng AI thương mại kiếm tiền cho mình. Hành vi này có vi phạm đạo đức hoặc bản quyền không?

* A. Có vi phạm, vì dùng code của người khác để kiếm tiền là trái phép.
* B. Không vi phạm, vì giấy phép MIT cho phép sao chép, sửa đổi và thương mại hóa hoàn toàn miễn phí, miễn là đính kèm tuyên bố bản quyền gốc của tác giả.
* C. Có vi phạm, trừ khi lập trình viên này phải chia cho tác giả gốc $50\%$ doanh thu.
* D. Chỉ vi phạm nếu hệ thống AI đó chạy bị lỗi.
* **Correct Option:** B
* **Explanation:** Giấy phép MIT là giấy phép mã nguồn mở tự do. Nó cho phép thương mại hóa hoàn toàn miễn phí, yêu cầu duy nhất là phải giữ nguyên thông báo bản quyền và quyền miễn trừ trách nhiệm của tác giả gốc trong source code.

#### Q69 (Module D / Hard / Tag: data-ethics)

Trong việc phát triển AI y tế giúp bác sĩ chẩn đoán ung thư qua ảnh chụp X-quang, hành vi nào sau đây được coi là **thiếu trách nhiệm đạo đức nghề nghiệp**?

* A. Thử nghiệm và kiểm định mô hình cực kỳ khắt khe trên nhiều bệnh viện khác nhau trước khi đưa vào sử dụng.
* B. Giấu kín các ca mà AI chẩn đoán sai để làm đẹp báo cáo và tăng doanh số bán phần mềm.
* C. Luôn thiết kế hệ thống hiển thị rõ "Mức độ tin cậy" (Confidence) để bác sĩ làm căn cứ tham khảo cuối cùng.
* D. Bảo mật tuyệt đối danh tính và hồ sơ của các bệnh nhân cung cấp ảnh X-quang.
* **Correct Option:** B
* **Explanation:** Việc cố tình che giấu sai sót của mô hình AI trong y tế là hành vi vi phạm nghiêm trọng đạo đức, vì nó có thể trực tiếp làm sai lệch kết quả điều trị và gây nguy hiểm đến tính mạng của người bệnh.

#### Q70 (Module D / Easy / Tag: pure-logic)

Đọc tình huống sau: Ba sinh viên An, Bình, và Cường cùng tham gia một cuộc thi Hackathon về AI.

* Nếu An đoạt giải thì Bình cũng đoạt giải.
* Thừa nhận rằng An đã đoạt giải.
Kết luận nào sau đây chắc chắn đúng về mặt logic?

* A. Chỉ có An đoạt giải.
* B. Bình chắc chắn đoạt giải.
* C. Cường chắc chắn đoạt giải.
* D. Cả ba bạn đều không đoạt giải.
* **Correct Option:** B
* **Explanation:** Mệnh đề logic có dạng: $A \rightarrow B$ (Nếu An được giải thì Bình được giải). Đề bài khẳng định vế $A$ xảy ra (An đã đoạt giải), theo quy tắc Modus Ponens, vế $B$ chắc chắn phải xảy ra $\rightarrow$ Bình chắc chắn đoạt giải.

#### Q71 (Module D / Hard / Tag: ai-bias)

Một ứng dụng AI tuyển dụng nhân sự tự động liên tục loại bỏ hồ sơ của các ứng viên đến từ một vùng miền cụ thể mà không dựa trên năng lực. Nguyên nhân gốc rễ của hành vi phân biệt đối xử này của AI thường bắt nguồn từ đâu?

* A. Do AI tự phát triển ý thức và ghét vùng miền đó.
* B. Do dữ liệu dùng để huấn luyện AI trong quá khứ chứa định kiến của con người (người lọc hồ sơ cũ có xu hướng loại bỏ hồ sơ vùng miền đó), và AI đã học lại định kiến này.
* C. Do thuật toán sử dụng quá nhiều ma trận.
* D. Do máy tính chạy hệ thống bị quá nhiệt.
* **Correct Option:** B
* **Explanation:** Mô hình AI không tự sinh ra định kiến vùng miền. Hiện tượng phân biệt đối xử này xảy ra là do dữ liệu lịch sử đầu vào được thu thập từ con người đã có sẵn định kiến đó và AI ghi nhận lại quy luật này.

#### Q72 (Module D / Medium / Tag: pure-logic)

Hãy suy luận logic dựa trên các dữ kiện sau:

* Mọi mô hình ngôn ngữ lớn (LLM) đều tiêu tốn rất nhiều tài nguyên phần cứng.
* Hệ thống AI mang tên "EcoChat" không tiêu tốn nhiều tài nguyên phần cứng.
Phát biểu nào sau đây **chắc chắn đúng**?

* A. EcoChat là một mô hình ngôn ngữ lớn chạy tối ưu.
* B. EcoChat không phải là một mô hình ngôn ngữ lớn.
* C. EcoChat sử dụng thuật toán nhân ma trận thông minh.
* D. EcoChat là phần mềm độc hại.
* **Correct Option:** B
* **Explanation:** Mệnh đề: $LLM \rightarrow Tốn\_tài\_nguyên$. Do EcoChat không tốn tài nguyên, theo logic phản chứng ($\neg Q \rightarrow \neg P$), EcoChat chắc chắn không phải là mô hình LLM.

#### Q73 (Module D / Hard / Tag: data-privacy)

Việc một kỹ sư AI âm thầm cài đặt một đoạn code ngầm trong ứng dụng để thu thập toàn bộ lịch sử gõ bàn phím (Keylogger) của người dùng nhằm lấy dữ liệu hội thoại thực tế huấn luyện AI mà không được sự cho phép của họ là vi phạm nguyên tắc đạo đức nào nghiêm trọng nhất?

* A. Tính minh bạch và Quyền riêng tư cá nhân (Privacy).
* B. Hiện tượng Quá khớp dữ liệu.
* C. Tốc độ tối ưu hóa hệ thống.
* D. Giấy phép mã nguồn mở MIT.
* **Correct Option:** A
* **Explanation:** Thu thập dữ liệu nhạy cảm một cách lén lút vi phạm nghiêm trọng quyền riêng tư và tính minh bạch thông tin cốt lõi đối với người dùng (Informed Consent).

#### Q74 (Module D / Medium / Tag: pure-logic)

Đọc tình huống logic sau: Có 3 lập trình viên là Nam, Hải và Quốc. Biết rằng:

* Người giỏi Python nhất là người lớn tuổi nhất.
* Hải trẻ tuổi hơn Quốc.
* Nam lớn tuổi hơn Quốc.
Ai là người giỏi Python nhất?

* A. Hải
* B. Quốc
* C. Nam
* D. Không thể xác định được từ dữ kiện trên.
* **Correct Option:** C
* **Explanation:** Sắp xếp thứ tự tuổi từ lớn đến nhỏ dựa vào dữ kiện: Nam > Quốc, Quốc > Hải $\Rightarrow$ Nam > Quốc > Hải. Vậy Nam là người lớn tuổi nhất, đồng nghĩa Nam là người giỏi Python nhất.

#### Q75 (Module D / Medium / Tag: data-ethics)

Thuật ngữ "Explainable AI" (XAI - AI có thể giải thích được) hướng tới mục tiêu đạo đức và kỹ thuật nào trong phát triển Trí tuệ nhân tạo?

* A. Làm cho AI có khả năng tự viết báo cáo văn bản thay con người.
* B. Biến các mô hình AI từ dạng "Hộp đen" (Black-box) phức tạp thành các hệ thống có quy trình ra quyết định rõ ràng, minh bạch để con người hiểu được tại sao AI đưa ra kết quả đó.
* C. Giúp AI tự động giải thích các bài tập toán cho học sinh.
* D. Tăng độ chính xác của mô hình lên $100\%$.
* **Correct Option:** B
* **Explanation:** XAI giúp minh bạch hóa các quyết định nội bộ của AI, điều này đặc biệt quan trọng và mang tính bắt buộc trong các lĩnh vực nhạy cảm cao như Y tế (Chẩn đoán bệnh) và Tài chính (Duyệt hồ sơ vay vốn).

#### Q76 (Module D / Easy / Tag: data-ethics)

Khi một dự án AI thất bại do mô hình liên tục đưa ra dự đoán sai lệch nghiêm trọng gây thiệt hại về tiền bạc cho khách hàng, trách nhiệm giải trình cuối cùng thuộc về ai?

* A. Thuật toán AI vì nó tự tính toán sai.
* B. Chiếc máy tính/máy chủ chạy thuật toán do bị quá tải.
* C. Đội ngũ con người phát triển, kiểm định và vận hành dự án AI đó.
* D. Khách hàng vì họ đã tin tưởng vào công nghệ.
* **Correct Option:** C
* **Explanation:** AI là một công cụ do con người tạo ra, huấn luyện và vận hành. Do đó, con người (kỹ sư, quản lý dự án, công ty công nghệ) phải chịu trách nhiệm hoàn toàn về mặt pháp lý và đạo đức đối với các hệ quả do sản phẩm của mình gây ra.

---

*End of Specification File.*

```

```