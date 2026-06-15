const QUESTIONS_A = [
  {
    id: "Q_MOD_A_001", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một mô hình phân loại AI dự đoán một hình ảnh là \"Mèo\" với độ chính xác (Precision) là $80\\%$. Nếu trong một tập dữ liệu gồm $100$ ảnh mà mô hình dự đoán là Mèo, có bao nhiêu ảnh thực sự là mèo?",
    options: [
      "A. $20$",
      "B. $50$",
      "C. $80$",
      "D. $100$"
    ],
    correct_option: "C",
    explanation: "Độ chính xác (Precision) được tính bằng tỷ lệ số điểm dữ liệu thực sự tích cực (True Positive) trên tổng số điểm được dự đoán là tích cực. Với $80\\%$ của $100$ hình ảnh được dự đoán, ta có: $100 \\times 0.8 = 80$ ảnh thực sự là mèo."
  },
  {
    id: "Q_MOD_A_002", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho hai vector $u = [1, 2]$ và $v = [3, 4]$. Tích vô hướng (dot product) của hai vector $u \\cdot v$ bằng bao nhiêu?",
    options: [
      "A. $11$",
      "B. $14$",
      "C. $7$",
      "D. $10$"
    ],
    correct_option: "A",
    explanation: "Tích vô hướng của hai vector được tính bằng tổng các tích của các phần tử tương ứng: $u \\cdot v = (1 \\times 3) + (2 \\times 4) = 3 + 8 = 11$."
  },
  {
    id: "Q_MOD_A_003", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Trong học máy, một hình ảnh kỹ thuật số grayscale (ảnh xám) kích thước $28 \\times 28$ pixel thường được biểu diễn dưới dạng cấu trúc toán học nào sau đây?",
    options: [
      "A. Một Vector hàng có 28 phần tử.",
      "B. Một Ma trận (Matrix) kích thước $28 \\times 28$.",
      "C. Một Tập hợp không có thứ tự.",
      "D. Một Biến số vô hướng (Scalar)."
    ],
    correct_option: "B",
    explanation: "Ảnh xám là một lưới các điểm ảnh, mỗi điểm ảnh có một giá trị độ sáng. Do đó, nó được biểu diễn tự nhiên nhất bằng một ma trận hai chiều (2D Array/Matrix)."
  },
  {
    id: "Q_MOD_A_004", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Xét một hệ thống AI phát hiện gian lận thi cử. Xác suất để hệ thống báo động sai (sinh viên không gian lận nhưng AI bảo có) là $5\\%$. Nếu trong một phòng thi có $40$ sinh viên làm bài nghiêm túc, kỳ vọng về số sinh viên bị AI gắn cờ cảnh báo sai là bao nhiêu?",
    options: [
      "A. $0$ sinh viên",
      "B. $2$ sinh viên",
      "C. $5$ sinh viên",
      "D. $8$ sinh viên"
    ],
    correct_option: "B",
    explanation: "Giá trị kỳ vọng $E(X) = n \\times p = 40 \\times 0.05 = 2$ sinh viên."
  },
  {
    id: "Q_MOD_A_005", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Hàm số bậc hai $f(x) = x^2 - 4x + 5$ đạt giá trị nhỏ nhất (cực tiểu) tại điểm $x$ bằng bao nhiêu? (Gợi ý: Tìm điểm mà tại đó đạo hàm $f'(x) = 0$).",
    options: [
      "A. $x = 0$",
      "B. $x = 2$",
      "C. $x = 4$",
      "D. $x = -2$"
    ],
    correct_option: "B",
    explanation: "Đạo hàm của hàm số là $f'(x) = 2x - 4$. Cho $f'(x) = 0 \\Leftrightarrow 2x - 4 = 0 \\Leftrightarrow x = 2$. Đây chính là nguyên lý tìm điểm tối ưu tối thiểu trong các thuật toán huấn luyện AI."
  },
  {
    id: "Q_MOD_A_006", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Cho một ma trận dòng $A = [2, -1, 3]$ và một ma trận cột $B = \\begin{bmatrix} 4 \\\\ 0 \\\\ 1 \\end{bmatrix}$. Kết quả của phép nhân ma trận $A \\times B$ là gì?",
    options: [
      "A. Một ma trận kích thước $3 \\times 3$.",
      "B. Một giá trị vô hướng bằng $11$.",
      "C. Một giá trị vô hướng bằng $8$.",
      "D. Phép toán này không thực hiện được."
    ],
    correct_option: "B",
    explanation: "Phép nhân ma trận hàng $1 \\times 3$ với ma trận cột $3 \\times 1$ cho ra một vô hướng: $(2 \\times 4) + ((-1) \\times 0) + (3 \\times 1) = 8 + 0 + 3 = 11$."
  },
  {
    id: "Q_MOD_A_007", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Thống kê tại một ngã tư: Xác suất một phương tiện rẽ trái là $0.3$, đi thẳng là $0.5$, và rẽ phải là $0.2$. Nếu có 2 phương tiện di chuyển độc lập vào ngã tư, xác suất để **cả hai phương tiện cùng rẽ trái** là bao nhiêu?",
    options: [
      "A. $0.6$",
      "B. $0.09$",
      "C. $0.3$",
      "D. $0.15$"
    ],
    correct_option: "B",
    explanation: "Vì hai phương tiện di chuyển hoàn toàn độc lập: $P(A \\text{ và } B) = P(A) \\times P(B) = 0.3 \\times 0.3 = 0.09$."
  },
  {
    id: "Q_MOD_A_008", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "Trong các hàm kích hoạt (Activation Function) phổ biến, hàm **Sigmoid** $f(x) = \\frac{1}{1 + e^{-x}}$ nén tất cả các giá trị đầu vào vào khoảng nào?",
    options: [
      "A. $[-1, 1]$",
      "B. $[0, 1]$",
      "C. $[0, +\\infty)$",
      "D. $(-\\infty, +\\infty)$"
    ],
    correct_option: "B",
    explanation: "Khi $x \\to +\\infty$, $e^{-x} \\to 0 \\Rightarrow f(x) \\to 1$. Khi $x \\to -\\infty$, $e^{-x} \\to +\\infty \\Rightarrow f(x) \\to 0$. Do đó Sigmoid luôn nằm trong $[0, 1]$."
  },
  {
    id: "Q_MOD_A_009", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Cho ma trận $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$. Định thức (Determinant) của ma trận $A$, ký hiệu là $\\det(A)$, bằng bao nhiêu?",
    options: [
      "A. $5$",
      "B. $11$",
      "C. $3$",
      "D. $8$"
    ],
    correct_option: "A",
    explanation: "$\\det(A) = ad - bc = (2 \\times 4) - (3 \\times 1) = 8 - 3 = 5$."
  },
  {
    id: "Q_MOD_A_010", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Có 3 hộp đựng linh kiện điện tử. Hộp I có $10\\%$ linh kiện lỗi, Hộp II có $5\\%$ linh kiện lỗi, Hộp III có $20\\%$ linh kiện lỗi. Chọn ngẫu nhiên một hộp, rồi từ đó lấy ra 1 linh kiện. Xác suất để chọn trúng Hộp III **và** lấy ra một linh kiện lỗi là bao nhiêu?",
    options: [
      "A. $\\frac{1}{3} \\times 0.2$",
      "B. $\\frac{1}{3} + 0.2$",
      "C. $\\frac{1}{3} - 0.2$",
      "D. $\\frac{1}{3} / 0.2$"
    ],
    correct_option: "A",
    explanation: "Xác suất chọn ngẫu nhiên 1 trong 3 hộp là $\\frac{1}{3}$. Xác suất lấy được linh kiện lỗi trong Hộp III là $0.2$. Hai hành động diễn ra liên tiếp nên nhân lại: $\\frac{1}{3} \\times 0.2$."
  },
  {
    id: "Q_MOD_A_011", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Khi đo lường hiệu năng của mô hình AI dự báo giá nhà, nếu bạn muốn các sai số lớn bị phạt nặng hơn, bạn nên chọn hàm đo lường sai số nào?",
    options: [
      "A. MAE (Sai số tuyệt đối trung bình)",
      "B. MSE (Sai số bình phương trung bình)",
      "C. ACC (Độ chính xác dự báo tổng thể)",
      "D. F1 (Trung bình điều hòa F1-score)"
    ],
    correct_option: "B",
    explanation: "Hàm MSE thực hiện bình phương các khoảng cách sai số $(y_{true} - f(x))^2$. Khi sai số lớn, bình phương sẽ đẩy giá trị lỗi lên rất cao, giúp phạt nặng các điểm dữ liệu bị lệch nhiều (outliers)."
  },
  {
    id: "Q_MOD_A_012", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho vector $w = [3, 4]$. Khoảng cách Euclide (chuẩn $L_2$) của vector này từ gốc tọa độ $(0,0)$ bằng bao nhiêu?",
    options: [
      "A. $5$",
      "B. $7$",
      "C. $25$",
      "D. $12$"
    ],
    correct_option: "A",
    explanation: "Chuẩn $L_2$ của vector $w=[3, 4]$: $\\|w\\|_2 = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    id: "Q_MOD_A_013", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Nếu đạo hàm bậc nhất của một hàm chi phí (Loss function) tại điểm $x_0$ có giá trị là một số dương ($f'(x_0) > 0$), để giảm chi phí theo thuật toán Gradient Descent, ta cần dịch chuyển $x$ về phía nào?",
    options: [
      "A. Giảm giá trị của $x$ ($x_{new} < x_0$)",
      "B. Tăng giá trị của $x$ ($x_{new} > x_0$)",
      "C. Giữ nguyên giá trị $x$ ($x_{new} = x_0$)",
      "D. Nhân đôi giá trị của $x$ ($x_{new} = 2x_0$)"
    ],
    correct_option: "A",
    explanation: "Công thức Gradient Descent: $x_{new} = x_{old} - \\alpha \\times f'(x_{old})$. Nếu $f'(x_{old}) > 0$, ta trừ đi một số dương, làm $x_{new} < x_{old}$, tức là phải giảm $x$."
  },
  {
    id: "Q_MOD_A_014", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một xúc xắc cân đối 6 mặt được gieo 2 lần. Xác suất để tổng số chấm xuất hiện trong 2 lần gieo bằng $4$ là bao nhiêu?",
    options: [
      "A. $\\frac{1}{12}$",
      "B. $\\frac{1}{6}$",
      "C. $\\frac{1}{18}$",
      "D. $\\frac{1}{9}$"
    ],
    correct_option: "A",
    explanation: "Tổng số không gian mẫu: $6 \\times 6 = 36$. Các cặp có tổng bằng 4: $(1,3), (2,2), (3,1)$ → 3 trường hợp. Xác suất: $\\frac{3}{36} = \\frac{1}{12}$."
  },
  {
    id: "Q_MOD_A_015", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong một tập dữ liệu gồm lương của 5 kỹ sư AI lần lượt là: $20, 22, 25, 28, 95$ (triệu/tháng). Giá trị nào phản ánh sát nhất mức thu nhập phổ biến mà không bị ảnh hưởng bởi giá trị đột biến (outlier)?",
    options: [
      "A. Giá trị trung bình (Mean)",
      "B. Giá trị trung vị (Median)",
      "C. Giá trị cực đại (Maximum)",
      "D. Tổng tất cả giá trị (Sum)"
    ],
    correct_option: "B",
    explanation: "Giá trị trung bình (Mean) sẽ bị kéo lên cao bởi outlier $95$ ($\\approx 38$), không phản ánh đúng thực tế. Giá trị trung vị (Median) là $25$, phản ánh chính xác mức lương phổ biến hơn."
  },
  {
    id: "Q_MOD_A_016", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Phép toán nào dưới đây biến đổi một ma trận kích thước $m \\times n$ thành một ma trận kích thước $n \\times m$ bằng cách đổi dòng thành cột và cột thành dòng?",
    options: [
      "A. Nhân ma trận (Multiplication)",
      "B. Nghịch đảo ma trận (Inversion)",
      "C. Chuyển vị ma trận (Transpose)",
      "D. Tính định thức ma trận (Determinant)"
    ],
    correct_option: "C",
    explanation: "Ma trận chuyển vị (Transpose), ký hiệu là $A^T$, thu được bằng cách chuyển các dòng của ma trận $A$ thành các cột tương ứng và ngược lại."
  },
  {
    id: "Q_MOD_A_017", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Hàm số $f(x) = -x^2 + 6x - 1$ đạt giá trị lớn nhất (Cực đại) tại $x$ bằng bao nhiêu?",
    options: [
      "A. $x = 3$",
      "B. $x = -3$",
      "C. $x = 6$",
      "D. $x = 0$"
    ],
    correct_option: "A",
    explanation: "Tính đạo hàm: $f'(x) = -2x + 6$. Cho $f'(x) = 0 \\Leftrightarrow x = 3$. Vì hệ số của $x^2$ âm ($-1$), đây là điểm đạt giá trị lớn nhất."
  },
  {
    id: "Q_MOD_A_018", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Trong Học máy, hàm mất mát (Loss Function) phổ biến dành cho bài toán phân loại nhị phân (Binary Classification) là hàm nào?",
    options: [
      "A. Mean Squared Error (MSE loss)",
      "B. Binary Cross-Entropy (BCE loss)",
      "C. Smooth L1 Error (Huber loss)",
      "D. Mean Absolute Error (L1 loss)"
    ],
    correct_option: "B",
    explanation: "**Binary Cross-Entropy** đo lường khoảng cách giữa hai phân phối xác suất. Nó phạt rất nặng nếu mô hình dự đoán sai với độ tự tin cao, làm cho nó trở thành hàm mất mát tiêu chuẩn cho phân loại nhị phân."
  },
  {
    id: "Q_MOD_A_019", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Cho ma trận $A$ kích thước $3 \\times 2$ và ma trận $B$ kích thước $2 \\times 4$. Ma trận kết quả $C = A \\times B$ sẽ có kích thước là bao nhiêu?",
    options: [
      "A. Kích thước $3 \\times 4$",
      "B. Kích thước $2 \\times 2$",
      "C. Kích thước $3 \\times 2$",
      "D. Không nhân được ma trận"
    ],
    correct_option: "A",
    explanation: "Điều kiện nhân hai ma trận: số cột của ma trận trước bằng số dòng của ma trận sau ($2 = 2$). Kích thước kết quả: số dòng của $A$ × số cột của $B$ = $3 \\times 4$."
  },
  {
    id: "Q_MOD_A_020", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một hệ thống kiểm tra lỗi vi mạch tìm thấy trung bình 2 sản phẩm lỗi trên mỗi 100 sản phẩm. Nếu chọn ngẫu nhiên 1 sản phẩm để kiểm tra, xác suất chọn phải sản phẩm **không bị lỗi** là bao nhiêu?",
    options: [
      "A. $0.02$",
      "B. $0.2$",
      "C. $0.98$",
      "D. $0.5$"
    ],
    correct_option: "C",
    explanation: "Xác suất chọn phải sản phẩm lỗi là $\\frac{2}{100} = 0.02$. Xác suất không lỗi (biến cố đối): $1 - 0.02 = 0.98$."
  },
  {
    id: "Q_MOD_A_021", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Phép toán đạo hàm của hàm số $f(x) = 3x^2 + 5x - 2$ là gì?",
    options: [
      "A. $f'(x) = 3x + 5$",
      "B. $f'(x) = 6x + 5$",
      "C. $f'(x) = 6x - 2$",
      "D. $f'(x) = 6x^2 + 5$"
    ],
    correct_option: "B",
    explanation: "$(3x^2)' = 6x$; $(5x)' = 5$; $(-2)' = 0$. Vậy $f'(x) = 6x + 5$."
  },
  {
    id: "Q_MOD_A_022", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Khái niệm \"Phương sai\" (Variance) trong Thống kê mô tả điều gì của tập dữ liệu?",
    options: [
      "A. Giá trị có độ lớn cực đại thu được từ tập dữ liệu.",
      "B. Mức độ biến thiên phân tán dữ liệu quanh số trung bình.",
      "C. Giá trị xuất hiện với tần suất lớn nhất trong tập.",
      "D. Tổng số lượng các mẫu quan sát có trong tập dữ liệu."
    ],
    correct_option: "B",
    explanation: "Phương sai đo lường xem dữ liệu nằm tập trung sát quanh giá trị trung bình hay bị trải rộng phân tán ra xa. Phương sai càng lớn nghĩa là dữ liệu càng biến thiên mạnh."
  },
  {
    id: "Q_MOD_A_023", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho vector $v = [1, -2, 2]$. Chuẩn $L_1$ (tổng giá trị tuyệt đối) của vector này bằng bao nhiêu?",
    options: [
      "A. $3$",
      "B. $5$",
      "C. $9$",
      "D. $1$"
    ],
    correct_option: "B",
    explanation: "Chuẩn $L_1$ là tổng giá trị tuyệt đối của tất cả các phần tử: $\\|v\\|_1 = |1| + |-2| + |2| = 1 + 2 + 2 = 5$."
  },
  {
    id: "Q_MOD_A_024", module_id: "Module_A", difficulty: "Easy",
    tags: ["activation-functions"],
    content: "Hàm kích hoạt **ReLU** (Rectified Linear Unit) được định nghĩa là $f(x) = \\max(0, x)$. Phạm vi (range) đầu ra của hàm ReLU là khoảng nào?",
    options: [
      "A. $(-\\infty, +\\infty)$",
      "B. $[-1, 1]$",
      "C. $[0, 1]$",
      "D. $[0, +\\infty)$"
    ],
    correct_option: "D",
    explanation: "Hàm ReLU trả về $0$ khi $x < 0$ và trả về chính $x$ khi $x \\geq 0$. Do đó đầu ra luôn không âm, nằm trong khoảng $[0, +\\infty)$."
  },
  {
    id: "Q_MOD_A_025", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong thống kê, **Độ lệch chuẩn (Standard Deviation)** là gì?",
    options: [
      "A. Giá trị trung bình cộng của tất cả phần tử trong tập.",
      "B. Căn bậc hai phương sai, đo mức phân tán của dữ liệu.",
      "C. Điểm nằm chính giữa khi sắp xếp dãy số từ nhỏ đến lớn.",
      "D. Tích số của toàn bộ phần tử quan sát trong tập dữ liệu."
    ],
    correct_option: "B",
    explanation: "Độ lệch chuẩn $\\sigma = \\sqrt{\\text{Variance}}$. Nó có cùng đơn vị với dữ liệu gốc, giúp dễ hiểu hơn phương sai khi đánh giá mức độ biến thiên."
  },
  {
    id: "Q_MOD_A_026", module_id: "Module_A", difficulty: "Easy",
    tags: ["metrics"],
    content: "Công thức tính **Accuracy** (Độ chính xác tổng thể) của một mô hình phân loại là gì?",
    options: [
      "A. $\\text{Precision} = \\frac{TP}{TP + FP}$",
      "B. $\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}$",
      "C. $\\text{Recall} = \\frac{TP}{TP + FN}$",
      "D. $\\text{F1-score} = \\frac{2 \\cdot P \\cdot R}{P + R}$"
    ],
    correct_option: "B",
    explanation: "Accuracy = (Số dự đoán đúng) / (Tổng số dự đoán) = $\\frac{TP + TN}{TP + TN + FP + FN}$. Đây là chỉ số cơ bản nhất để đánh giá mô hình phân loại."
  },
  {
    id: "Q_MOD_A_027", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Ma trận đơn vị (Identity Matrix) $I$ có tính chất đặc biệt nào khi nhân với một ma trận $A$ bất kỳ (cùng kích thước phù hợp)?",
    options: [
      "A. $A \\times I = 0$",
      "B. $A \\times I = I$",
      "C. $A \\times I = A$",
      "D. $A \\times I = A^T$"
    ],
    correct_option: "C",
    explanation: "Ma trận đơn vị $I$ đóng vai trò như số $1$ trong phép nhân số học. Kết quả nhân bất kỳ ma trận $A$ với ma trận đơn vị $I$ (tương thích) luôn trả về chính $A$: $A \\times I = I \\times A = A$."
  },
  {
    id: "Q_MOD_A_028", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Theo định lý Bayes, nếu $P(B|A) = 0.9$, $P(A) = 0.01$, $P(B) = 0.1$, thì xác suất $P(A|B)$ bằng bao nhiêu?",
    options: [
      "A. $0.09$",
      "B. $0.90$",
      "C. $0.19$",
      "D. $0.01$"
    ],
    correct_option: "A",
    explanation: "Theo định lý Bayes: $P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)} = \\frac{0.9 \\times 0.01}{0.1} = \\frac{0.009}{0.1} = 0.09$."
  },
  {
    id: "Q_MOD_A_029", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Quy tắc **Chain Rule** (quy tắc dây chuyền) trong giải tích được sử dụng để tính đạo hàm của hàm hợp $h(x) = f(g(x))$. Công thức đúng là gì?",
    options: [
      "A. $h'(x) = f'(x) + g'(x)$",
      "B. $h'(x) = f'(g(x)) \\times g'(x)$",
      "C. $h'(x) = f'(x) \\times g'(x)$",
      "D. $h'(x) = f(g'(x))$"
    ],
    correct_option: "B",
    explanation: "Chain Rule: Đạo hàm của hàm hợp $h(x) = f(g(x))$ là $h'(x) = f'(g(x)) \\times g'(x)$. Đây là nền tảng của thuật toán Backpropagation trong học sâu."
  },
  {
    id: "Q_MOD_A_030", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "**Cosine Similarity** giữa hai vector $u$ và $v$ được tính bằng công thức nào? Nó thường dùng để đo lường sự tương đồng ngữ nghĩa trong NLP.",
    options: [
      "A. $\\frac{u \\cdot v}{\\|u\\| \\cdot \\|v\\|}$",
      "B. $\\frac{u - v}{\\|u\\| \\cdot \\|v\\|}$",
      "C. $\\frac{u \\cdot v}{\\|u\\| + \\|v\\|}$",
      "D. $\\frac{\\|u\\| \\cdot \\|v\\|}{u \\cdot v}$"
    ],
    correct_option: "A",
    explanation: "Cosine Similarity $= \\cos(\\theta) = \\frac{u \\cdot v}{\\|u\\|_2 \\times \\|v\\|_2}$. Giá trị nằm trong $[-1, 1]$: bằng $1$ là hoàn toàn giống nhau, bằng $0$ là vuông góc, bằng $-1$ là ngược chiều nhau."
  },
  {
    id: "Q_MOD_A_031", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "Hàm **Softmax** thường được sử dụng ở lớp đầu ra của mạng nơ-ron phân loại đa lớp. Điều gì xảy ra với tổng tất cả đầu ra của hàm Softmax?",
    options: [
      "A. Tổng các giá trị đầu ra bằng 0.",
      "B. Tổng các giá trị đầu ra bằng 1.",
      "C. Tổng các giá trị đầu ra bằng số lớp.",
      "D. Tổng các giá trị đầu ra là ngẫu nhiên."
    ],
    correct_option: "B",
    explanation: "Hàm Softmax chuyển đổi vector điểm số thô (logits) thành phân phối xác suất. Tổng tất cả đầu ra của Softmax luôn bằng $1$, mỗi giá trị biểu diễn xác suất thuộc về lớp tương ứng."
  },
  {
    id: "Q_MOD_A_032", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Công thức tính **F1-Score** là gì? Đây là chỉ số kết hợp giữa Precision và Recall.",
    options: [
      "A. $F1 = \\frac{Precision \\times Recall}{Precision + Recall}$",
      "B. $F1 = \\frac{Precision + Recall}{Precision \\times Recall}$",
      "C. $F1 = \\frac{2 \\times Precision \\times Recall}{Precision + Recall}$",
      "D. $F1 = \\frac{2 \\times (Precision + Recall)}{Precision \\times Recall}$"
    ],
    correct_option: "C",
    explanation: "F1-Score là trung bình điều hòa (harmonic mean) của Precision và Recall: $F1 = \\frac{2 \\times P \\times R}{P + R}$. Nó hữu ích khi cần cân bằng cả hai chỉ số, đặc biệt với tập dữ liệu mất cân bằng."
  },
  {
    id: "Q_MOD_A_033", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Trong học sâu, phép toán **Hadamard Product** (tích từng phần tử) giữa hai ma trận $A$ và $B$ cùng kích thước ký hiệu là $A \\odot B$. Phần tử tại vị trí $(i,j)$ của kết quả là gì?",
    options: [
      "A. Tổng hai phần tử tại cùng vị trí: $A_{ij} + B_{ij}$",
      "B. Tích hai phần tử tại cùng vị trí: $A_{ij} \\times B_{ij}$",
      "C. Tích thông thường giữa hàng $i$ và cột $j$ tương ứng",
      "D. Hiệu hai phần tử tại cùng vị trí: $A_{ij} - B_{ij}$"
    ],
    correct_option: "B",
    explanation: "Hadamard Product nhân từng phần tử tương ứng: $(A \\odot B)_{ij} = A_{ij} \\times B_{ij}$. Phép toán này yêu cầu hai ma trận có cùng kích thước và khác với phép nhân ma trận thông thường."
  },
  {
    id: "Q_MOD_A_034", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một kỹ sư AI muốn chọn ngẫu nhiên $k = 5$ ảnh từ tập $n = 100$ ảnh để kiểm tra thủ công. Số cách chọn mà **không** tính đến thứ tự là bao nhiêu (tổ hợp $C_{100}^5$)?",
    options: [
      "A. Tích số lặp $100 \\times 100 \\times 100 \\times 100 \\times 100$",
      "B. Tích số giảm $100 \\times 99 \\times 98 \\times 97 \\times 96$",
      "C. Tỷ lệ tổ hợp $\\frac{100!}{5! \\times 95!}$",
      "D. Tích số hoán vị $5 \\times 4 \\times 3 \\times 2 \\times 1$"
    ],
    correct_option: "C",
    explanation: "Tổ hợp chập $k$ của $n$ phần tử không tính thứ tự: $C_n^k = \\frac{n!}{k!(n-k)!} = \\frac{100!}{5! \\times 95!}$. Đây là công cụ cơ bản trong thống kê và xác suất."
  },
  {
    id: "Q_MOD_A_035", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Trong học máy, **Learning Rate** (tốc độ học $\\alpha$) trong thuật toán Gradient Descent có vai trò gì?",
    options: [
      "A. Xác định tổng số lượng lớp ẩn có trong mạng nơ-ron.",
      "B. Kiểm soát kích thước bước cập nhật tham số ngược gradient.",
      "C. Lựa chọn loại hàm kích hoạt tối ưu được sử dụng ở các lớp.",
      "D. Xác định tổng dung lượng kích thước dữ liệu huấn luyện mô hình."
    ],
    correct_option: "B",
    explanation: "Learning Rate $\\alpha$ kiểm soát bước nhảy: $\\theta_{new} = \\theta_{old} - \\alpha \\nabla L$. Nếu $\\alpha$ quá lớn, thuật toán có thể phân kỳ. Nếu quá nhỏ, huấn luyện sẽ rất chậm."
  },
  {
    id: "Q_MOD_A_036", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "**ROC Curve** (Receiver Operating Characteristic) trong đánh giá mô hình phân loại là đồ thị biểu diễn mối quan hệ giữa hai chỉ số nào?",
    options: [
      "A. Precision và Recall biến đổi theo các ngưỡng quyết định phân loại.",
      "B. True Positive Rate và False Positive Rate theo các ngưỡng quyết định.",
      "C. Accuracy và Loss biến đổi qua từng chu kỳ (epoch) huấn luyện mạng.",
      "D. Learning Rate và Validation Loss biến đổi theo thuật toán tối ưu."
    ],
    correct_option: "B",
    explanation: "ROC Curve vẽ **True Positive Rate (Recall/Sensitivity)** trên trục Y và **False Positive Rate (1 - Specificity)** trên trục X, tại nhiều ngưỡng quyết định khác nhau. Diện tích dưới đường cong (AUC) càng gần 1 thì mô hình càng tốt."
  },
  {
    id: "Q_MOD_A_037", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "**Eigenvalue** (giá trị riêng) $\\lambda$ của một ma trận vuông $A$ thỏa mãn phương trình nào, với $v$ là eigenvector (vector riêng) tương ứng?",
    options: [
      "A. $Av = \\lambda + v$",
      "B. $Av = \\lambda v$",
      "C. $A + v = \\lambda v$",
      "D. $A^T v = \\lambda$"
    ],
    correct_option: "B",
    explanation: "Định nghĩa: $Av = \\lambda v$, trong đó $\\lambda$ là eigenvalue và $v \\neq 0$ là eigenvector. Eigenvalue/eigenvector rất quan trọng trong PCA (Principal Component Analysis) để giảm chiều dữ liệu."
  },
  {
    id: "Q_MOD_A_038", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Trong học máy, kỹ thuật **Regularization L2 (Ridge)** thêm vào hàm mất mát một số hạng phạt là gì? Mục đích của nó là gì?",
    options: [
      "A. Thêm phạt $\\lambda \\sum |w_i|$ nhằm tạo ra các trọng số thưa thớt.",
      "B. Thêm phạt $\\lambda \\sum w_i^2$ nhằm giới hạn trọng số lớn, tránh overfitting.",
      "C. Thêm hằng số cộng $\\lambda$ nhằm tăng tốc độ hội tụ của mô hình mạng.",
      "D. Thêm nhiễu ngẫu nhiên $\\lambda \\epsilon$ trực tiếp vào tập dữ liệu huấn luyện."
    ],
    correct_option: "B",
    explanation: "L2 Regularization (Ridge) thêm hạng phạt $\\lambda \\sum_i w_i^2$ vào hàm mất mát. Điều này khuyến khích các trọng số nhỏ và phân tán đều, giúp mô hình không quá phụ thuộc vào một vài đặc trưng cụ thể, từ đó giảm Overfitting."
  },
  {
    id: "Q_MOD_A_039", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Hiện tượng **Vanishing Gradient** (tiêu biến đạo hàm) trong mạng nơ-ron sâu xảy ra khi nào và gây ra hậu quả gì?",
    options: [
      "A. Gradient bùng nổ cực đại qua các lớp, làm thay đổi trọng số quá lớn khiến mạng mất ổn định.",
      "B. Gradient suy giảm dần về 0 qua các lớp sâu, khiến các lớp đầu tiên gần như không được cập nhật.",
      "C. Tốc độ học (learning rate) thiết lập quá lớn, làm các tham số phân kỳ không thể hội tụ.",
      "D. Dữ liệu huấn luyện bị thiếu hụt nhãn nghiêm trọng, khiến việc tính toán đạo hàm bị sai lệch."
    ],
    correct_option: "B",
    explanation: "Khi lan truyền ngược qua nhiều lớp, gradient được nhân với đạo hàm của hàm kích hoạt lặp đi lặp lại. Hàm Sigmoid/Tanh có đạo hàm < 1, khiến gradient giảm dần theo cấp số nhân về gần 0 → các lớp đầu học rất chậm. ReLU và kỹ thuật Batch Normalization giúp giảm thiểu vấn đề này."
  },
  {
    id: "Q_MOD_A_040", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Trong phân tích thành phần chính (PCA - Principal Component Analysis), ma trận Covariance $\\Sigma$ của tập dữ liệu được dùng để làm gì?",
    options: [
      "A. Tính toán các giá trị kỳ vọng trung bình cộng của từng biến đặc trưng.",
      "B. Xác định hướng có biến thiên lớn nhất qua việc phân tích trị riêng.",
      "C. Quy đổi toàn bộ tập dữ liệu ban đầu về dạng phân phối chuẩn chuẩn hóa.",
      "D. Tìm kiếm và loại bỏ các thành phần đặc trưng có độ lệch chuẩn bằng 0."
    ],
    correct_option: "B",
    explanation: "PCA phân tích eigenvector/eigenvalue của ma trận Covariance để tìm các **Principal Components** – các hướng trong không gian đặc trưng mà dữ liệu có phương sai lớn nhất. Chiếu dữ liệu lên các hướng này giúp giảm chiều mà vẫn giữ được phần lớn thông tin."
  },
  {
    id: "Q_MOD_A_041", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Phân phối nào sau đây thường được dùng để mô hình hóa xác suất xảy ra của một sự kiện (chỉ có 2 kết quả: thành công/thất bại) trong $n$ lần thử độc lập?",
    options: [
      "A. Phân phối chuẩn (Normal/Gaussian)",
      "B. Phân phối nhị thức (Binomial)",
      "C. Phân phối Poisson",
      "D. Phân phối đều (Uniform)"
    ],
    correct_option: "B",
    explanation: "Phân phối nhị thức mô hình hóa số lần thành công trong $n$ phép thử Bernoulli độc lập, mỗi phép thử có xác suất thành công $p$. Công thức: $P(X=k) = C_n^k p^k (1-p)^{n-k}$."
  },
  {
    id: "Q_MOD_A_042", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Phép toán nào cho phép tìm ma trận $A^{-1}$ sao cho $A \\times A^{-1} = I$? Ma trận nghịch đảo này tồn tại khi nào?",
    options: [
      "A. Định thức ma trận bằng 0: $\\det(A) = 0$.",
      "B. Định thức ma trận khác 0: $\\det(A) \\neq 0$.",
      "C. Kích thước ma trận có số dòng bằng 1.",
      "D. Toàn bộ các phần tử ma trận đều dương."
    ],
    correct_option: "B",
    explanation: "Ma trận nghịch đảo $A^{-1}$ tồn tại khi và chỉ khi $\\det(A) \\neq 0$. Nếu $\\det(A) = 0$, ma trận được gọi là suy biến (singular) và không có nghịch đảo."
  },
  {
    id: "Q_MOD_A_043", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Đạo hàm của hàm số mũ $f(x) = e^x$ là gì?",
    options: [
      "A. $f'(x) = x \\cdot e^{x-1}$",
      "B. $f'(x) = e^x$",
      "C. $f'(x) = xe^x$",
      "D. $f'(x) = \\ln(x)$"
    ],
    correct_option: "B",
    explanation: "Hàm $f(x) = e^x$ có đạo hàm đặc biệt: $f'(x) = e^x$. Đây là hàm duy nhất bằng chính đạo hàm của nó, là nền tảng quan trọng trong giải tích và học máy."
  },
  {
    id: "Q_MOD_A_044", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "So sánh hàm **Tanh** với hàm **Sigmoid**: điểm khác biệt quan trọng nhất về phạm vi đầu ra là gì?",
    options: [
      "A. Hàm Tanh có miền giá trị là $[0, 1]$ còn hàm Sigmoid có miền giá trị là $[-1, 1]$.",
      "B. Hàm Tanh có miền giá trị là $[-1, 1]$ còn hàm Sigmoid có miền giá trị là $[0, 1]$.",
      "C. Cả hai hàm kích hoạt đều có miền giá trị đầu ra nằm hoàn toàn trong đoạn $[0, 1]$.",
      "D. Hàm Tanh có miền giá trị là $[0, +\\infty)$ còn hàm Sigmoid có miền giá trị là $[-1, 0]$."
    ],
    correct_option: "B",
    explanation: "Sigmoid có đầu ra trong $[0, 1]$, trong khi Tanh có đầu ra trong $[-1, 1]$. Tanh được chuẩn hóa xung quanh $0$ nên gradient trung bình gần $0$ hơn, thường giúp huấn luyện hội tụ nhanh hơn Sigmoid."
  },
  {
    id: "Q_MOD_A_045", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Trong bài toán phân loại nhị phân phát hiện ung thư, bạn **ưu tiên** không bỏ sót bệnh nhân thực sự bị ung thư (dù có thể báo nhầm). Bạn nên tối ưu chỉ số nào?",
    options: [
      "A. Chỉ số Precision (Đo mức độ chính xác của dự đoán dương tính)",
      "B. Chỉ số Specificity (Đo tỷ lệ âm tính thật trên thực tế)",
      "C. Chỉ số Recall (Đo tỷ lệ dương tính thật tránh bị bỏ sót)",
      "D. Chỉ số Accuracy (Đo tỷ lệ dự đoán chính xác trên toàn bộ mẫu)"
    ],
    correct_option: "C",
    explanation: "**Recall = TP / (TP + FN)** đo khả năng mô hình phát hiện tất cả các trường hợp dương tính thực sự. Trong y tế, bỏ sót bệnh nhân ung thư (False Negative) nguy hiểm hơn nhiều so với báo nhầm, nên Recall cao là ưu tiên."
  },
  {
    id: "Q_MOD_A_046", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Phép biến đổi **PCA (Principal Component Analysis)** thuộc loại kỹ thuật nào trong học máy và mục đích chính của nó là gì?",
    options: [
      "A. Kỹ thuật phân loại có giám sát nhằm dự đoán chính xác nhãn lớp.",
      "B. Kỹ thuật giảm chiều không giám sát nhằm giữ lại tối đa phương sai.",
      "C. Kỹ thuật sinh dữ liệu nhân tạo nhằm bổ sung thêm mẫu huấn luyện.",
      "D. Kỹ thuật tiền xử lý dữ liệu nhằm chuẩn hóa thuộc tính về $[0,1]$."
    ],
    correct_option: "B",
    explanation: "PCA là kỹ thuật giảm chiều (dimensionality reduction) không giám sát. Nó chiếu dữ liệu từ không gian $n$ chiều xuống $k$ chiều ($k < n$) sao cho giữ được nhiều phương sai nhất, giúp trực quan hóa và loại bỏ nhiễu."
  },
  {
    id: "Q_MOD_A_047", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "**KL-Divergence** (Kullback-Leibler Divergence) $D_{KL}(P \\| Q)$ đo lường điều gì giữa hai phân phối xác suất $P$ và $Q$?",
    options: [
      "A. Khoảng cách hình học Euclide thông thường giữa hai phân phối.",
      "B. Mức thông tin mất đi khi dùng phân phối Q xấp xỉ phân phối P.",
      "C. Xác suất xảy ra đồng thời của hai sự kiện hoàn toàn độc lập.",
      "D. Tích chập tích phân thu được từ hai phân phối xác suất khác nhau."
    ],
    correct_option: "B",
    explanation: "$D_{KL}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}$. KL-Divergence đo \"lượng thông tin\" cần thêm khi dùng $Q$ thay cho $P$. Nó không đối xứng ($D_{KL}(P\\|Q) \\neq D_{KL}(Q\\|P)$) và là nền tảng của Binary Cross-Entropy."
  },
  {
    id: "Q_MOD_A_048", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Trong tối ưu hóa, phương pháp **Stochastic Gradient Descent (SGD)** khác với **Batch Gradient Descent** như thế nào?",
    options: [
      "A. SGD dùng toàn bộ tập dữ liệu để tính toán đạo hàm tại mỗi chu kỳ, trong khi Batch GD chỉ dùng một mẫu duy nhất.",
      "B. SGD cập nhật tham số dựa trên từng mẫu dữ liệu đơn lẻ (hoặc nhóm nhỏ), giúp tính toán nhanh và dễ thoát cực tiểu cục bộ.",
      "C. SGD hoàn toàn không yêu cầu tính đạo hàm của hàm mất mát, trong khi Batch GD đòi hỏi tính toán gradient phức tạp.",
      "D. SGD và Batch GD có cùng cách thức cập nhật tham số và tốc độ hội tụ toán học tương đương trên mọi tập dữ liệu."
    ],
    correct_option: "B",
    explanation: "SGD cập nhật tham số sau mỗi mẫu (hoặc mini-batch), tạo ra gradient ồn ào (noisy) nhưng cập nhật thường xuyên hơn → hội tụ nhanh hơn với dữ liệu lớn và có khả năng thoát Local Minima nhờ tính ngẫu nhiên. Batch GD ổn định hơn nhưng chậm với tập dữ liệu lớn."
  },
  {
    id: "Q_MOD_A_049", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Trong bài toán phân loại với tập dữ liệu **mất cân bằng** (ví dụ 99% mẫu âm tính, 1% dương tính), tại sao Accuracy không phải là chỉ số đánh giá tốt?",
    options: [
      "A. Vì chỉ số Accuracy không có khả năng tính toán đối với tập dữ liệu có nhiều hơn hai lớp phân loại.",
      "B. Vì một mô hình dự đoán tất cả âm tính vẫn đạt Accuracy 99% nhưng không phát hiện được mẫu dương nào.",
      "C. Vì chỉ số Accuracy đòi hỏi dữ liệu đầu vào phải được chuẩn hóa hoàn toàn trước khi đánh giá mô hình.",
      "D. Vì chỉ số Accuracy chỉ được thiết kế để áp dụng cho các mô hình hồi quy dự đoán giá trị liên tục."
    ],
    correct_option: "B",
    explanation: "Với tập mất cân bằng 99%/1%, một mô hình \"ngốc\" luôn đoán âm tính đạt Accuracy 99% mà không học được gì. F1-Score, AUC-ROC, hoặc PR-AUC là các chỉ số phù hợp hơn để đánh giá bài toán này."
  },
  {
    id: "Q_MOD_A_050", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Phân tích giá trị suy biến (SVD - Singular Value Decomposition) phân tích ma trận $A$ thành dạng $A = U \\Sigma V^T$. Ma trận $\\Sigma$ trong phân tích này là gì?",
    options: [
      "A. Ma trận vuông có các phần tử trên đường chéo chính là trị riêng của ma trận gốc A.",
      "B. Ma trận chứa giá trị suy biến trên đường chéo chính và toàn bộ các phần tử còn lại bằng 0.",
      "C. Ma trận đơn vị chứa các phần tử 1 trên đường chéo chính và các phần tử khác đều bằng 0.",
      "D. Ma trận nghịch đảo chứa các giá trị đối xứng qua đường chéo chính của ma trận đầu vào A."
    ],
    correct_option: "B",
    explanation: "Trong SVD: $U$ và $V$ là các ma trận trực giao; $\\Sigma$ là ma trận đường chéo chứa **singular values** (căn bậc hai của eigenvalue của $A^TA$) trên đường chéo chính, sắp xếp từ lớn đến nhỏ. SVD là nền tảng của nhiều kỹ thuật ML như PCA, Matrix Factorization, LSA."
  },
  {
    id: "Q_MOD_A_051", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho vector $a = [3, -1]$ và $b = [2, 5]$. Vector tổng $c = a + b$ có tọa độ bằng bao nhiêu?",
    options: [
      "A. $c = [5, 4]$",
      "B. $c = [1, 6]$",
      "C. $c = [5, 6]$",
      "D. $c = [1, 4]$"
    ],
    correct_option: "A",
    explanation: "Phép cộng hai vector thực hiện cộng từng phần tử tương ứng của chúng với nhau: $c = [3+2, -1+5] = [5, 4]$."
  },
  {
    id: "Q_MOD_A_052", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Cho ma trận vuông $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$. Ma trận này thuộc loại ma trận nào sau đây?",
    options: [
      "A. Ma trận cột (Column matrix).",
      "B. Ma trận đơn vị (Identity matrix).",
      "C. Ma trận chéo (Diagonal matrix).",
      "D. Ma trận không (Zero matrix)."
    ],
    correct_option: "C",
    explanation: "Ma trận $A$ chỉ có các phần tử trên đường chéo chính khác 0, tất cả các phần tử ngoài đường chéo đều bằng 0, do đó nó là ma trận chéo."
  },
  {
    id: "Q_MOD_A_053", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Xét một biến cố $A$ có xác suất xảy ra là $P(A) = 0.15$. Xác suất của biến cố đối nghịch $\\bar{A}$ (tức là $A$ không xảy ra) là bao nhiêu?",
    options: [
      "A. $0.85$",
      "B. $0.15$",
      "C. $0.50$",
      "D. $0.00$"
    ],
    correct_option: "A",
    explanation: "Xác suất của biến cố đối được tính bằng công thức: $P(\\bar{A}) = 1 - P(A) = 1 - 0.15 = 0.85$."
  },
  {
    id: "Q_MOD_A_054", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Trong giải tích giới hạn của hàm lượng giác, giá trị của giới hạn $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$ bằng bao nhiêu?",
    options: [
      "A. $1$",
      "B. $0$",
      "C. $\\infty$",
      "D. $-1$"
    ],
    correct_option: "A",
    explanation: "Đây là giới hạn lượng giác cơ bản kinh điển trong toán học giải tích: $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$."
  },
  {
    id: "Q_MOD_A_055", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một đồng xu cân đối và đồng chất được tung lên 3 lần độc lập nhau. Không gian mẫu của phép thử này gồm bao nhiêu phần tử?",
    options: [
      "A. $8$",
      "B. $6$",
      "C. $4$",
      "D. $9$"
    ],
    correct_option: "A",
    explanation: "Mỗi lần tung đồng xu có 2 khả năng (Sấp/Ngửa). Do các lần tung độc lập, số kết quả có thể xảy ra là: $2 \\times 2 \\times 2 = 2^3 = 8$ phần tử."
  },
  {
    id: "Q_MOD_A_056", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong thống kê mô tả, đại lượng nào biểu diễn giá trị xuất hiện với tần suất nhiều nhất trong tập dữ liệu?",
    options: [
      "A. Mode (Giá trị yếu vị)",
      "B. Mean (Giá trị trung bình)",
      "C. Median (Giá trị trung vị)",
      "D. Range (Khoảng biến thiên)"
    ],
    correct_option: "A",
    explanation: "Yếu vị (Mode) là giá trị xuất hiện thường xuyên nhất (có tần số lớn nhất) trong một tập dữ liệu quan sát."
  },
  {
    id: "Q_MOD_A_057", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Nhân một vector $v$ bất kỳ với một hằng số dương $k > 1$ (phép toán $k \\cdot v$) sẽ làm thay đổi yếu tố nào sau đây của vector?",
    options: [
      "A. Tăng độ dài của vector và giữ nguyên hướng ban đầu.",
      "B. Tăng độ dài của vector và đảo ngược hướng ban đầu.",
      "C. Giữ nguyên độ dài vector và thay đổi hướng ban đầu.",
      "D. Giảm độ dài của vector và giữ nguyên hướng ban đầu."
    ],
    correct_option: "A",
    explanation: "Khi nhân vector với hằng số $k > 1$, độ dài của vector mới sẽ tăng lên $k$ lần, trong khi hướng của vector được giữ nguyên do $k$ là số dương."
  },
  {
    id: "Q_MOD_A_058", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho ma trận vuông $A$ kích thước $2 \\times 2$ có hàng thứ nhất là $[1, 2]$ và hàng thứ hai là $[2, 4]$. Định thức $\\det(A)$ bằng bao nhiêu?",
    options: [
      "A. $0$",
      "B. $1$",
      "C. $-2$",
      "D. $8$"
    ],
    correct_option: "A",
    explanation: "Định thức của ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ là: $\\det(A) = (1 \\times 4) - (2 \\times 2) = 4 - 4 = 0$. Hai dòng phụ thuộc tuyến tính nên định thức bằng 0."
  },
  {
    id: "Q_MOD_A_059", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Nếu hai biến cố $A$ và $B$ xung khắc hoàn toàn (không thể đồng thời xảy ra), công thức tính xác suất hợp $P(A \\cup B)$ là gì?",
    options: [
      "A. $P(A) + P(B)$",
      "B. $P(A) \\times P(B)$",
      "C. $P(A) - P(B)$",
      "D. $P(A) \\div P(B)$"
    ],
    correct_option: "A",
    explanation: "Với hai biến cố xung khắc, xác suất của hợp bằng tổng xác suất của từng biến cố: $P(A \\cup B) = P(A) + P(B)$."
  },
  {
    id: "Q_MOD_A_060", module_id: "Module_A", difficulty: "Easy",
    tags: ["metrics"],
    content: "Trong bài toán phân loại, nếu một mô hình luôn dự đoán mọi mẫu dữ liệu đều là nhãn âm tính (Negative), chỉ số nào sau đây chắc chắn sẽ bằng $0$?",
    options: [
      "A. Chỉ số Recall của lớp dương tính (True Positive Rate).",
      "B. Chỉ số Accuracy tổng thể trên toàn bộ tập dữ liệu.",
      "C. Chỉ số Specificity của lớp âm tính (True Negative Rate).",
      "D. Tổng số lượng mẫu dự đoán sai của mô hình phân loại."
    ],
    correct_option: "A",
    explanation: "Do mô hình dự đoán tất cả là âm tính nên không có mẫu nào được dự báo là dương tính (TP = 0). Vì vậy, Recall = TP / (TP + FN) = 0."
  },
  {
    id: "Q_MOD_A_061", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Cho hai ma trận $A$ kích thước $2 \\times 3$ và $B$ kích thước $3 \\times 2$. Phép toán nào sau đây không thể thực hiện được?",
    options: [
      "A. Phép cộng hai ma trận trực tiếp $A + B$",
      "B. Phép nhân hai ma trận trực tiếp $A \\times B$",
      "C. Phép nhân hai ma trận trực tiếp $B \\times A$",
      "D. Phép cộng chuyển vị ma trận $A + B^T$"
    ],
    correct_option: "A",
    explanation: "Phép cộng hai ma trận yêu cầu chúng phải có cùng kích thước. Ở đây $A$ ($2 \\times 3$) và $B$ ($3 \\times 2$) có kích thước khác nhau nên không thể cộng trực tiếp."
  },
  {
    id: "Q_MOD_A_062", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Đạo hàm bậc nhất của hàm số logarit tự nhiên $f(x) = \\ln(x)$ (với điều kiện $x > 0$) là gì?",
    options: [
      "A. $f'(x) = \\frac{1}{x}$",
      "B. $f'(x) = e^x$",
      "C. $f'(x) = \\frac{1}{x^2}$",
      "D. $f'(x) = x$"
    ],
    correct_option: "A",
    explanation: "Đạo hàm cơ bản của hàm logarit tự nhiên là: $(\\ln(x))' = \\frac{1}{x}$ với mọi $x > 0$."
  },
  {
    id: "Q_MOD_A_063", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Đại lượng thống kê nào sau đây đo lường khoảng cách từ giá trị nhỏ nhất đến giá trị lớn nhất trong một tập dữ liệu?",
    options: [
      "A. Range (Khoảng biến thiên của tập dữ liệu)",
      "B. Variance (Phương sai của tập dữ liệu)",
      "C. Mean (Giá trị trung bình của dữ liệu)",
      "D. Median (Giá trị trung vị của dữ liệu)"
    ],
    correct_option: "A",
    explanation: "Khoảng biến thiên (Range) là hiệu số giữa giá trị lớn nhất (Max) và giá trị nhỏ nhất (Min) trong tập dữ liệu quan sát."
  },
  {
    id: "Q_MOD_A_064", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một hộp chứa $3$ viên bi màu đỏ và $7$ viên bi màu xanh. Lấy ngẫu nhiên $1$ viên bi từ hộp. Xác suất lấy được viên bi màu đỏ là bao nhiêu?",
    options: [
      "A. $0.3$",
      "B. $0.7$",
      "C. $0.5$",
      "D. $1.0$"
    ],
    correct_option: "A",
    explanation: "Tổng số bi trong hộp là $3 + 7 = 10$ viên. Xác suất để lấy được viên bi đỏ là: $P = \\frac{3}{10} = 0.3$."
  },
  {
    id: "Q_MOD_A_065", module_id: "Module_A", difficulty: "Easy",
    tags: ["activation-functions"],
    content: "Hàm kích hoạt nào sau đây trả về giá trị 0 nếu đầu vào có giá trị âm, và giữ nguyên giá trị đầu vào nếu nó mang dấu dương?",
    options: [
      "A. Hàm kích hoạt ReLU",
      "B. Hàm kích hoạt Sigmoid",
      "C. Hàm kích hoạt Tanh",
      "D. Hàm kích hoạt Softmax"
    ],
    correct_option: "A",
    explanation: "Hàm kích hoạt ReLU (Rectified Linear Unit) được định nghĩa toán học là $f(x) = \\max(0, x)$, trả về 0 với đầu vào âm và giữ nguyên $x$ với đầu vào không âm."
  },
  {
    id: "Q_MOD_A_066", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Vector nào sau đây là một vector đơn vị (độ dài bằng 1) trong không gian Euclid 2 chiều?",
    options: [
      "A. $u = [0.6, 0.8]$",
      "B. $u = [1.0, 1.0]$",
      "C. $u = [0.5, 0.5]$",
      "D. $u = [0.0, 2.0]$"
    ],
    correct_option: "A",
    explanation: "Độ dài vector $u = [0.6, 0.8]$ được tính bằng: $\\|u\\| = \\sqrt{0.6^2 + 0.8^2} = \\sqrt{0.36 + 0.64} = \\sqrt{1.0} = 1$, do đó nó là vector đơn vị."
  },
  {
    id: "Q_MOD_A_067", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Cho ma trận vuông $A$ kích thước $3 \\times 3$. Vết (Trace) của ma trận $A$, ký hiệu là $\\text{tr}(A)$, được định nghĩa như thế nào?",
    options: [
      "A. Tổng tất cả các phần tử trên đường chéo chính.",
      "B. Tích tất cả các phần tử trên đường chéo chính.",
      "C. Định thức tổng quát thu được từ ma trận đó.",
      "D. Tổng tất cả phần tử nằm ngoài đường chéo chính."
    ],
    correct_option: "A",
    explanation: "Vết (Trace) của một ma trận vuông là tổng của tất cả các phần tử nằm trên đường chéo chính của ma trận đó: $\\text{tr}(A) = \\sum_{i=1}^n A_{ii}$."
  },
  {
    id: "Q_MOD_A_068", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong phân phối chuẩn đối xứng (Gaussian distribution), ba giá trị trung bình (Mean), trung vị (Median) và yếu vị (Mode) liên hệ thế nào?",
    options: [
      "A. Ba giá trị này trùng khít hoàn toàn với nhau.",
      "B. Giá trị trung bình lớn hơn hai giá trị còn lại.",
      "C. Giá trị trung vị luôn nằm giữa hai giá trị còn lại.",
      "D. Ba giá trị này hoàn toàn độc lập và khác biệt."
    ],
    correct_option: "A",
    explanation: "Do tính chất đối xứng hoàn hảo của phân phối chuẩn qua đỉnh của đường cong hình chuông, các giá trị Mean, Median và Mode trùng nhau tại trục đối xứng."
  },
  {
    id: "Q_MOD_A_069", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Xét hàm số hằng $f(x) = 5$. Đạo hàm bậc nhất của hàm số này theo biến số $x$ là gì?",
    options: [
      "A. $f'(x) = 0$",
      "B. $f'(x) = 5$",
      "C. $f'(x) = x$",
      "D. $f'(x) = 5x$"
    ],
    correct_option: "A",
    explanation: "Đạo hàm của bất kỳ hàm hằng số nào cũng luôn luôn bằng 0: $(c)' = 0$."
  },
  {
    id: "Q_MOD_A_070", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Trong không gian Euclid 2 chiều, góc giữa hai vector vuông góc với nhau bằng bao nhiêu độ?",
    options: [
      "A. $90^\\circ$",
      "B. $0^\\circ$",
      "C. $180^\\circ$",
      "D. $45^\\circ$"
    ],
    correct_option: "A",
    explanation: "Hai vector vuông góc với nhau khi và chỉ khi tích vô hướng bằng 0, điều này tương đương với góc giữa chúng bằng $90^\\circ$."
  },
  {
    id: "Q_MOD_A_071", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một biến ngẫu nhiên liên tục $X$ có hàm mật độ xác suất $f(x) = 2x$ trên khoảng $[0, 1]$ và $f(x) = 0$ ở các khoảng khác. Xác suất $P(0 \\le X \\le 0.5)$ bằng bao nhiêu?",
    options: [
      "A. $0.25$",
      "B. $0.50$",
      "C. $0.75$",
      "D. $0.125$"
    ],
    correct_option: "A",
    explanation: "Xác suất là tích phân của hàm mật độ: $P(0 \\le X \\le 0.5) = \\int_{0}^{0.5} 2x \\, dx = [x^2]_0^{0.5} = 0.5^2 - 0 = 0.25$."
  },
  {
    id: "Q_MOD_A_072", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Giả sử chiều cao của một quần thể tuân theo phân phối chuẩn với trung bình $\\mu = 170\\text{ cm}$ và độ lệch chuẩn $\\sigma = 5\\text{ cm}$. Tỷ lệ người có chiều cao từ $165\\text{ cm}$ đến $175\\text{ cm}$ chiếm khoảng bao nhiêu phần trăm?",
    options: [
      "A. Khoảng $68\\%$",
      "B. Khoảng $95\\%$",
      "C. Khoảng $99\\%$",
      "D. Khoảng $50\\%$"
    ],
    correct_option: "A",
    explanation: "Khoảng từ $165\\text{ cm}$ đến $175\\text{ cm}$ tương ứng với khoảng $[\\mu - \\sigma, \\mu + \\sigma]$. Theo quy tắc thực nghiệm phân phối chuẩn, khoảng này chứa xấp xỉ $68.27\\%$ phân bố dữ liệu."
  },
  {
    id: "Q_MOD_A_073", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Cho hàm số hai biến số $f(x, y) = x^2 y + 3y^3$. Đạo hàm riêng của hàm số theo biến $x$, ký hiệu là $\\frac{\\partial f}{\\partial x}$, bằng bao nhiêu?",
    options: [
      "A. $2xy$",
      "B. $x^2 + 9y^2$",
      "C. $2xy + 9y^2$",
      "D. $x^2$"
    ],
    correct_option: "A",
    explanation: "Khi tính đạo hàm riêng theo biến $x$, ta coi biến $y$ là hằng số. Đạo hàm thu được: $\\frac{\\partial f}{\\partial x} = \\frac{\\partial}{\\partial x}(x^2 y) + \\frac{\\partial}{\\partial x}(3y^3) = 2xy + 0 = 2xy$."
  },
  {
    id: "Q_MOD_A_074", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Cho ma trận vuông cấp hai có dạng tam giác $A = \\begin{bmatrix} 4 & 1 \\\\ 0 & 3 \\end{bmatrix}$. Các trị riêng (eigenvalues) của ma trận $A$ bằng bao nhiêu?",
    options: [
      "A. $\\lambda_1 = 4, \\lambda_2 = 3$",
      "B. $\\lambda_1 = 4, \\lambda_2 = 0$",
      "C. $\\lambda_1 = 1, \\lambda_2 = 3$",
      "D. $\\lambda_1 = 7, \\lambda_2 = 12$"
    ],
    correct_option: "A",
    explanation: "Đối với ma trận tam giác (trên hoặc dưới), các trị riêng chính là các phần tử nằm trên đường chéo chính. Do đó các trị riêng của $A$ là $4$ và $3$."
  },
  {
    id: "Q_MOD_A_075", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Xét một bài toán phân loại nhị phân. Nếu mô hình dự báo đúng 80 mẫu dương tính (TP), dự báo sai 20 mẫu dương tính (FP) và dự báo sai 10 mẫu âm tính (FN). Chỉ số Precision (Độ chính xác) của mô hình là bao nhiêu?",
    options: [
      "A. $80\\%$",
      "B. $88.9\\%$",
      "C. $75\\%$",
      "D. $72.7\\%$"
    ],
    correct_option: "A",
    explanation: "Precision được tính bằng công thức: $Precision = \\frac{TP}{TP + FP} = \\frac{80}{80 + 20} = \\frac{80}{100} = 80\\%$."
  },
  {
    id: "Q_MOD_A_076", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Cho ma trận vuông $A$. Nếu nhân tất cả các phần tử của một dòng trong ma trận $A$ với hằng số $k$ khác 0, định thức của ma trận mới thay đổi thế nào so với $\\det(A)$?",
    options: [
      "A. Tăng lên gấp $k$ lần giá trị ban đầu.",
      "B. Tăng lên gấp $k^2$ lần giá trị ban đầu.",
      "C. Giữ nguyên không thay đổi giá trị đó.",
      "D. Giảm đi đúng $k$ lần giá trị ban đầu."
    ],
    correct_option: "A",
    explanation: "Theo tính chất định thức ma trận, nếu nhân một dòng (hoặc một cột) của ma trận vuông với hằng số $k$ thì định thức của ma trận đó sẽ tăng lên gấp $k$ lần."
  },
  {
    id: "Q_MOD_A_077", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Tìm điểm cực đại của hàm số bậc ba $f(x) = x^3 - 3x$ trên tập số thực $\\mathbb{R}$?",
    options: [
      "A. $x = -1$",
      "B. $x = 1$",
      "C. $x = 0$",
      "D. $x = 3$"
    ],
    correct_option: "A",
    explanation: "Đạo hàm $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Đạo hàm bậc hai $f''(x) = 6x$. Ta có $f''(-1) = -6 < 0$ nên $x = -1$ là điểm cực đại."
  },
  {
    id: "Q_MOD_A_078", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một kỳ thi trắc nghiệm gồm $10$ câu hỏi, mỗi câu hỏi có $4$ phương án lựa chọn và chỉ có $1$ đáp án đúng. Một thí sinh khoanh ngẫu nhiên hoàn toàn. Kỳ vọng của số câu trả lời đúng là bao nhiêu?",
    options: [
      "A. $2.5$ câu",
      "B. $5.0$ câu",
      "C. $1.0$ câu",
      "D. $4.0$ câu"
    ],
    correct_option: "A",
    explanation: "Đây là phép thử nhị thức với số phép thử $n = 10$ và xác suất thành công mỗi câu $p = 0.25$. Giá trị kỳ vọng là $E(X) = n \\times p = 10 \\times 0.25 = 2.5$ câu."
  },
  {
    id: "Q_MOD_A_079", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Trong không gian vector, hai vector $u$ và $v$ được gọi là trực giao (orthogonal) với nhau khi và chỉ khi phép toán nào sau đây xảy ra?",
    options: [
      "A. Tích vô hướng của chúng bằng 0: $u \\cdot v = 0$.",
      "B. Tích chập của chúng bằng số 1: $u * v = 1$.",
      "C. Khoảng cách giữa chúng bằng 0: $\\|u - v\\| = 0$.",
      "D. Tổng hai vector đó bằng vector không: $u + v = 0$."
    ],
    correct_option: "A",
    explanation: "Định nghĩa trực giao trong không gian vector: hai vector trực giao khi và chỉ khi tích vô hướng (dot product) của chúng bằng 0."
  },
  {
    id: "Q_MOD_A_080", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Hệ số tương quan tuyến tính Pearson ($r$) giữa hai biến ngẫu nhiên $X$ và $Y$ nhận giá trị $r = -0.95$ cho biết điều gì về mối quan hệ giữa chúng?",
    options: [
      "A. Tương quan tuyến tính nghịch biến rất mạnh.",
      "B. Tương quan tuyến tính đồng biến rất mạnh.",
      "C. Không có mối liên hệ tuyến tính nào giữa chúng.",
      "D. Mối quan hệ phi tuyến tính có độ tin cậy thấp."
    ],
    correct_option: "A",
    explanation: "Hệ số tương quan Pearson có giá trị trong $[-1, 1]$. Giá trị $r = -0.95$ gần sát với $-1$, biểu thị một tương quan tuyến tính nghịch biến (ngược chiều) rất mạnh mẽ."
  },
  {
    id: "Q_MOD_A_081", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Khi sử dụng thuật toán tối ưu Gradient Descent, việc di chuyển ngược hướng với vector Gradient sẽ đưa ta đến hướng nào sau đây?",
    options: [
      "A. Hướng mà tại đó giá trị hàm số giảm đi nhanh nhất.",
      "B. Hướng mà tại đó giá trị hàm số tăng lên nhanh nhất.",
      "C. Hướng di chuyển trực diện tới điểm cực đại toàn cục.",
      "D. Hướng di chuyển mà giá trị hàm số giữ nguyên không đổi."
    ],
    correct_option: "A",
    explanation: "Vector Gradient chỉ hướng tăng nhanh nhất của hàm số. Do đó, đi ngược hướng gradient (phép trừ) sẽ đưa ta theo hướng giảm nhanh nhất của hàm số."
  },
  {
    id: "Q_MOD_A_082", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Cho một hệ phương trình tuyến tính gồm $3$ phương trình và $3$ ẩn số. Nếu ma trận hệ số có định thức khác $0$ ($\\det(A) \\neq 0$), hệ phương trình này có bao nhiêu nghiệm?",
    options: [
      "A. Hệ phương trình có nghiệm duy nhất.",
      "B. Hệ phương trình vô nghiệm hoàn toàn.",
      "C. Hệ phương trình có vô số nghiệm.",
      "D. Hệ phương trình có đúng hai nghiệm."
    ],
    correct_option: "A",
    explanation: "Theo quy tắc Cramer, một hệ phương trình tuyến tính vuông $Ax = b$ có định thức ma trận hệ số $\\det(A) \\neq 0$ thì luôn có một nghiệm duy nhất."
  },
  {
    id: "Q_MOD_A_083", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Xét hai biến ngẫu nhiên độc lập $X$ và $Y$. Công thức tính phương sai của tổng $\\text{Var}(X + Y)$ là gì?",
    options: [
      "A. $\\text{Var}(X) + \\text{Var}(Y)$",
      "B. $\\text{Var}(X) - \\text{Var}(Y)$",
      "C. $\\text{Var}(X) \\times \\text{Var}(Y)$",
      "D. $\\text{Var}(X) / \\text{Var}(Y)$"
    ],
    correct_option: "A",
    explanation: "Tổng quát: $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$. Do $X$ và $Y$ độc lập nên hiệp phương sai $\\text{Cov}(X,Y) = 0$, công thức rút gọn thành $\\text{Var}(X) + \\text{Var}(Y)$."
  },
  {
    id: "Q_MOD_A_084", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "Đạo hàm của hàm kích hoạt Sigmoid $f(x) = \\frac{1}{1 + e^{-x}}$ có thể biểu diễn qua chính nó bằng công thức nào?",
    options: [
      "A. $f'(x) = f(x)(1 - f(x))$",
      "B. $f'(x) = f(x)^2$",
      "C. $f'(x) = f(x)(1 + f(x))$",
      "D. $f'(x) = 1 - f(x)$"
    ],
    correct_option: "A",
    explanation: "Đạo hàm của hàm Sigmoid là: $f'(x) = \\frac{e^{-x}}{(1 + e^{-x})^2} = \\frac{1}{1+e^{-x}} \\times \\frac{e^{-x}}{1+e^{-x}} = f(x)(1 - f(x))$."
  },
  {
    id: "Q_MOD_A_085", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một biến ngẫu nhiên $X$ tuân theo phân phối Poisson với tham số kỳ vọng $\\lambda = 3$. Phương sai $\\text{Var}(X)$ của biến ngẫu nhiên này bằng bao nhiêu?",
    options: [
      "A. $3$",
      "B. $9$",
      "C. $\\sqrt{3}$",
      "D. $1.5$"
    ],
    correct_option: "A",
    explanation: "Đối với phân phối Poisson, một tính chất đặc trưng rất quan trọng là giá trị kỳ vọng và phương sai bằng nhau và bằng chính tham số $\\lambda$. Do đó $\\text{Var}(X) = 3$."
  },
  {
    id: "Q_MOD_A_086", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$. Giá trị vết (Trace) của ma trận $A^T$ (ma trận chuyển vị của $A$) bằng bao nhiêu?",
    options: [
      "A. $5$",
      "B. $4$",
      "C. $10$",
      "D. $7$"
    ],
    correct_option: "A",
    explanation: "Chuyển vị ma trận không làm đổi đường chéo chính nên vết của $A^T$ bằng vết của $A$. Tổng phần tử đường chéo chính: $\\text{tr}(A^T) = \\text{tr}(A) = 1 + 4 = 5$."
  },
  {
    id: "Q_MOD_A_087", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Chỉ số R-squared ($R^2$ - Hệ số xác định) trong mô hình hồi quy tuyến tính (Regression) đo lường điều gì?",
    options: [
      "A. Tỷ lệ biến thiên của biến phụ thuộc được giải thích bởi mô hình.",
      "B. Sai số bình phương trung bình của toàn bộ các điểm dự báo.",
      "C. Độ tương quan tuyến tính giữa các biến độc lập với nhau.",
      "D. Tỷ lệ dự đoán phân loại chính xác trên toàn bộ dữ liệu."
    ],
    correct_option: "A",
    explanation: "Hệ số xác định $R^2$ cho biết tỷ lệ phần trạng sự biến thiên của biến mục tiêu (biến phụ thuộc) được giải thích bởi các biến độc lập trong mô hình hồi quy."
  },
  {
    id: "Q_MOD_A_088", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Cho hai ma trận vuông $A$ và $B$ cùng kích thước $n \\times n$. Định lý về định thức của tích hai ma trận phát biểu thế nào?",
    options: [
      "A. $\\det(AB) = \\det(A) \\times \\det(B)$",
      "B. $\\det(AB) = \\det(A) + \\det(B)$",
      "C. $\\det(AB) = \\det(A) - \\det(B)$",
      "D. $\\det(AB) = \\det(A) \\div \\det(B)$"
    ],
    correct_option: "A",
    explanation: "Định lý định thức của tích ma trận: định thức của một tích các ma trận bằng tích các định thức của từng ma trận: $\\det(AB) = \\det(A) \\times \\det(B)$."
  },
  {
    id: "Q_MOD_A_089", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Cho hàm số một biến số $f(x) = x \\cdot e^x$. Đạo hàm bậc nhất $f'(x)$ bằng bao nhiêu?",
    options: [
      "A. $f'(x) = (x + 1)e^x$",
      "B. $f'(x) = e^x$",
      "C. $f'(x) = xe^x$",
      "D. $f'(x) = (x - 1)e^x$"
    ],
    correct_option: "A",
    explanation: "Sử dụng quy tắc đạo hàm của tích: $(uv)' = u'v + uv'$. Ở đây: $f'(x) = (x)'e^x + x(e^x)' = e^x + xe^x = (x + 1)e^x$."
  },
  {
    id: "Q_MOD_A_090", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Có 2 máy hoạt động độc lập. Xác suất máy 1 hỏng là $0.1$, máy 2 hỏng là $0.2$. Xác suất để **ít nhất một máy hoạt động bình thường** là bao nhiêu?",
    options: [
      "A. $0.98$",
      "B. $0.02$",
      "C. $0.72$",
      "D. $0.90$"
    ],
    correct_option: "A",
    explanation: "Xác suất để cả hai máy đều hỏng là $0.1 \\times 0.2 = 0.02$. Biến cố đối của \"cả hai máy hỏng\" là \"có ít nhất một máy hoạt động bình thường\": $1 - 0.02 = 0.98$."
  },
  {
    id: "Q_MOD_A_091", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Trong định lý giới hạn trung tâm (Central Limit Theorem), khi kích thước mẫu $n$ tiến ra vô cùng ($n \\to \\infty$), phân phối của số trung bình mẫu $\\bar{X}$ sẽ hội tụ về phân phối nào?",
    options: [
      "A. Phân phối chuẩn bất kể phân phối của quần thể ban đầu.",
      "B. Phân phối chuẩn chỉ khi quần thể ban đầu có phân phối chuẩn.",
      "C. Phân phối Poisson với kỳ vọng và phương sai bằng nhau.",
      "D. Phân phối đều trên khoảng chứa toàn bộ mẫu quan sát."
    ],
    correct_option: "A",
    explanation: "Định lý giới hạn trung tâm phát biểu rằng, với mẫu đủ lớn ($n \\ge 30$), phân phối của trung bình mẫu sẽ xấp xỉ phân phối chuẩn, bất kể phân phối ban đầu của quần thể là gì."
  },
  {
    id: "Q_MOD_A_092", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Trong tối ưu hóa đa biến, ma trận chứa toàn bộ các đạo hàm riêng bậc hai của một hàm số được gọi là gì? Nó đóng vai trò xác định tính lồi lõm của hàm số.",
    options: [
      "A. Ma trận Hessian",
      "B. Ma trận Jacobian",
      "C. Ma trận Covariance",
      "D. Ma trận Correlation"
    ],
    correct_option: "A",
    explanation: "Ma trận Hessian là ma trận vuông chứa các đạo hàm riêng cấp hai của một hàm số đa biến. Nó được dùng để kiểm tra điểm cực trị là cực đại, cực tiểu hay điểm yên ngựa."
  },
  {
    id: "Q_MOD_A_093", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Một ma trận vuông $A$ kích thước $n \\times n$ được gọi là ma trận trực giao (orthogonal matrix) nếu thỏa mãn điều kiện nào sau đây?",
    options: [
      "A. $A^T A = I$",
      "B. $A^T = A$",
      "C. $A^{-1} = A$",
      "D. $\\det(A) = 0$"
    ],
    correct_option: "A",
    explanation: "Một ma trận vuông $A$ trực giao nếu chuyển vị của nó cũng là nghịch đảo của nó, tức là $A^T A = A A^T = I$."
  },
  {
    id: "Q_MOD_A_094", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Trong phương pháp phân tích thành phần chính (PCA), ta tìm các vectơ riêng ứng với các trị riêng như thế nào của ma trận hiệp phương sai để làm các trục tọa độ mới?",
    options: [
      "A. Các trị riêng có giá trị lớn nhất.",
      "B. Các trị riêng có giá trị bằng số 0.",
      "C. Các trị riêng có giá trị nhỏ nhất.",
      "D. Các trị riêng có giá trị âm nhất."
    ],
    correct_option: "A",
    explanation: "Để giảm chiều dữ liệu mà vẫn giữ tối đa lượng thông tin (phương sai), PCA chọn các vectơ riêng tương ứng với các trị riêng lớn nhất của ma trận hiệp phương sai."
  },
  {
    id: "Q_MOD_A_095", module_id: "Module_A", difficulty: "Medium",
    tags: ["information-theory"],
    content: "Entropy thông tin $H(X)$ của một nguồn tin rời rạc có 2 trạng thái với xác suất xảy ra lần lượt là $p$ và $1-p$ đạt giá trị cực đại khi nào?",
    options: [
      "A. $p = 0.5$",
      "B. $p = 1.0$",
      "C. $p = 0.0$",
      "D. $p = 0.25$"
    ],
    correct_option: "A",
    explanation: "Entropy biểu thị độ không chắc chắn. Độ không chắc chắn lớn nhất khi 2 kết quả xảy ra với khả năng đồng đều nhất, tức là $p = 1 - p = 0.5$."
  },
  {
    id: "Q_MOD_A_096", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Cho hàm số $f(x, y) = 3x^2 + 2y^2 - 4x - 8y$. Điểm cực tiểu (cực trị tối ưu) của hàm số này nằm tại tọa độ $(x, y)$ nào?",
    options: [
      "A. $(2/3, 2)$",
      "B. $(0, 0)$",
      "C. $(1, 2)$",
      "D. $(4/3, 4)$"
    ],
    correct_option: "A",
    explanation: "Giải hệ phương trình đạo hàm riêng bằng 0: $\\frac{\\partial f}{\\partial x} = 6x - 4 = 0 \\Rightarrow x = 2/3$; $\\frac{\\partial f}{\\partial y} = 4y - 8 = 0 \\Rightarrow y = 2$. Do ma trận Hessian xác định dương nên đây là điểm cực tiểu."
  },
  {
    id: "Q_MOD_A_097", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Trong ước lượng thống kê, một ước lượng $\\hat{\\theta}$ được gọi là ước lượng không chệch (unbiased estimator) của tham số $\\theta$ nếu thỏa mãn điều kiện nào?",
    options: [
      "A. $E(\\hat{\\theta}) = \\theta$",
      "B. $\\text{Var}(\\hat{\\theta}) = 0$",
      "C. $\\hat{\\theta} = \\theta$",
      "D. $P(\\hat{\\theta} = \\theta) = 1$"
    ],
    correct_option: "A",
    explanation: "Một ước lượng là không chệch nếu giá trị kỳ vọng (trung bình) của phân phối mẫu của ước lượng đó bằng đúng giá trị của tham số quần thể cần ước lượng, tức $E(\\hat{\\theta}) = \\theta$."
  },
  {
    id: "Q_MOD_A_098", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Cho ma trận vuông $A$ kích thước $n \\times n$. Nếu ma trận $A$ có định thức $\\det(A) = 3$, định thức của ma trận nghịch đảo $\\det(A^{-1})$ bằng bao nhiêu?",
    options: [
      "A. $\\frac{1}{3}$",
      "B. $3$",
      "C. $-3$",
      "D. $9$"
    ],
    correct_option: "A",
    explanation: "Từ tính chất định thức của tích hai ma trận: $A A^{-1} = I \\Rightarrow \\det(A) \\times \\det(A^{-1}) = \\det(I) = 1 \\Rightarrow \\det(A^{-1}) = 1/\\det(A) = 1/3$."
  },
  {
    id: "Q_MOD_A_099", module_id: "Module_A", difficulty: "Medium",
    tags: ["information-theory"],
    content: "Hàm Cross-Entropy $H(P, Q) = -\\sum P(x) \\log Q(x)$ đạt giá trị nhỏ nhất khi phân phối dự báo $Q$ có quan hệ như thế nào với phân phối thực tế $P$?",
    options: [
      "A. Khi phân phối Q trùng khít hoàn toàn với phân phối P.",
      "B. Khi hai phân phối Q và P hoàn toàn độc lập với nhau.",
      "C. Khi phân phối Q có phương sai lớn gấp hai lần P.",
      "D. Khi định thức của phân phối Q tiến về giá trị không."
    ],
    correct_option: "A",
    explanation: "Theo bất đẳng thức Gibbs, hàm Cross-Entropy đạt giá trị tối thiểu bằng Entropy thực tế $H(P)$ khi và chỉ khi phân phối dự báo $Q$ trùng khớp hoàn toàn với phân phối xác suất thực tế $P$."
  },
  {
    id: "Q_MOD_A_100", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Xét hệ phương trình tuyến tính $Ax = b$ trong đó $A$ là ma trận kích thước $m \\times n$. Nếu số ẩn nhiều hơn số phương trình ($n > m$), khẳng định nào sau đây là **luôn đúng**?",
    options: [
      "A. Hệ phương trình không thể có nghiệm duy nhất.",
      "B. Hệ phương trình chắc chắn vô nghiệm hoàn toàn.",
      "C. Hệ phương trình chắc chắn có vô số nghiệm thực.",
      "D. Hệ phương trình luôn tồn tại một nghiệm duy nhất."
    ],
    correct_option: "A",
    explanation: "Khi số ẩn nhiều hơn số phương trình ($n > m$), hạng của ma trận hệ số $r(A) \\le m < n$. Nếu hệ có nghiệm thì luôn có ít nhất $n - r(A) > 0$ ẩn tự do, dẫn tới vô số nghiệm. Do đó hệ không bao giờ có nghiệm duy nhất."
  }
];
