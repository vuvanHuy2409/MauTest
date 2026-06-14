const QUESTIONS_A = [
  {
    id: "Q_MOD_A_001", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một mô hình phân loại AI dự đoán một hình ảnh là \"Mèo\" với độ chính xác (Precision) là $80\\%$. Nếu trong một tập dữ liệu gồm $100$ ảnh mà mô hình dự đoán là Mèo, có bao nhiêu ảnh thực sự là mèo?",
    options: ["A. $20$", "B. $50$", "C. $80$", "D. $100$"],
    correct_option: "C",
    explanation: "Độ chính xác (Precision) được tính bằng tỷ lệ số điểm dữ liệu thực sự tích cực (True Positive) trên tổng số điểm được dự đoán là tích cực. Với $80\\%$ của $100$ hình ảnh được dự đoán, ta có: $100 \\times 0.8 = 80$ ảnh thực sự là mèo."
  },
  {
    id: "Q_MOD_A_002", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho hai vector $u = [1, 2]$ và $v = [3, 4]$. Tích vô hướng (dot product) của hai vector $u \\cdot v$ bằng bao nhiêu?",
    options: ["A. $11$", "B. $14$", "C. $7$", "D. $10$"],
    correct_option: "A",
    explanation: "Tích vô hướng của hai vector được tính bằng tổng các tích của các phần tử tương ứng: $u \\cdot v = (1 \\times 3) + (2 \\times 4) = 3 + 8 = 11$."
  },
  {
    id: "Q_MOD_A_003", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Trong học máy, một hình ảnh kỹ thuật số grayscale (ảnh xám) kích thước $28 \\times 28$ pixel thường được biểu diễn dưới dạng cấu trúc toán học nào sau đây?",
    options: ["A. Một Vector hàng có 28 phần tử.", "B. Một Ma trận (Matrix) kích thước $28 \\times 28$.", "C. Một Tập hợp không có thứ tự.", "D. Một Biến số vô hướng (Scalar)."],
    correct_option: "B",
    explanation: "Ảnh xám là một lưới các điểm ảnh, mỗi điểm ảnh có một giá trị độ sáng. Do đó, nó được biểu diễn tự nhiên nhất bằng một ma trận hai chiều (2D Array/Matrix)."
  },
  {
    id: "Q_MOD_A_004", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Xét một hệ thống AI phát hiện gian lận thi cử. Xác suất để hệ thống báo động sai (sinh viên không gian lận nhưng AI bảo có) là $5\\%$. Nếu trong một phòng thi có $40$ sinh viên làm bài nghiêm túc, kỳ vọng về số sinh viên bị AI gắn cờ cảnh báo sai là bao nhiêu?",
    options: ["A. $0$ sinh viên", "B. $2$ sinh viên", "C. $5$ sinh viên", "D. $8$ sinh viên"],
    correct_option: "B",
    explanation: "Giá trị kỳ vọng $E(X) = n \\times p = 40 \\times 0.05 = 2$ sinh viên."
  },
  {
    id: "Q_MOD_A_005", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Hàm số bậc hai $f(x) = x^2 - 4x + 5$ đạt giá trị nhỏ nhất (cực tiểu) tại điểm $x$ bằng bao nhiêu? (Gợi ý: Tìm điểm mà tại đó đạo hàm $f'(x) = 0$).",
    options: ["A. $x = 0$", "B. $x = 2$", "C. $x = 4$", "D. $x = -2$"],
    correct_option: "B",
    explanation: "Đạo hàm của hàm số là $f'(x) = 2x - 4$. Cho $f'(x) = 0 \\Leftrightarrow 2x - 4 = 0 \\Leftrightarrow x = 2$. Đây chính là nguyên lý tìm điểm tối ưu tối thiểu trong các thuật toán huấn luyện AI."
  },
  {
    id: "Q_MOD_A_006", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Cho một ma trận dòng $A = [2, -1, 3]$ và một ma trận cột $B = \\begin{bmatrix} 4 \\\\ 0 \\\\ 1 \\end{bmatrix}$. Kết quả của phép nhân ma trận $A \\times B$ là gì?",
    options: ["A. Một ma trận kích thước $3 \\times 3$.", "B. Một giá trị vô hướng bằng $11$.", "C. Một giá trị vô hướng bằng $8$.", "D. Phép toán này không thực hiện được."],
    correct_option: "B",
    explanation: "Phép nhân ma trận hàng $1 \\times 3$ với ma trận cột $3 \\times 1$ cho ra một vô hướng: $(2 \\times 4) + ((-1) \\times 0) + (3 \\times 1) = 8 + 0 + 3 = 11$."
  },
  {
    id: "Q_MOD_A_007", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Thống kê tại một ngã tư: Xác suất một phương tiện rẽ trái là $0.3$, đi thẳng là $0.5$, và rẽ phải là $0.2$. Nếu có 2 phương tiện di chuyển độc lập vào ngã tư, xác suất để **cả hai phương tiện cùng rẽ trái** là bao nhiêu?",
    options: ["A. $0.6$", "B. $0.09$", "C. $0.3$", "D. $0.15$"],
    correct_option: "B",
    explanation: "Vì hai phương tiện di chuyển hoàn toàn độc lập: $P(A \\text{ và } B) = P(A) \\times P(B) = 0.3 \\times 0.3 = 0.09$."
  },
  {
    id: "Q_MOD_A_008", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "Trong các hàm kích hoạt (Activation Function) phổ biến, hàm **Sigmoid** $f(x) = \\frac{1}{1 + e^{-x}}$ nén tất cả các giá trị đầu vào vào khoảng nào?",
    options: ["A. $[-1, 1]$", "B. $[0, 1]$", "C. $[0, +\\infty)$", "D. $(-\\infty, +\\infty)$"],
    correct_option: "B",
    explanation: "Khi $x \\to +\\infty$, $e^{-x} \\to 0 \\Rightarrow f(x) \\to 1$. Khi $x \\to -\\infty$, $e^{-x} \\to +\\infty \\Rightarrow f(x) \\to 0$. Do đó Sigmoid luôn nằm trong $[0, 1]$."
  },
  {
    id: "Q_MOD_A_009", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Cho ma trận $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}$. Định thức (Determinant) của ma trận $A$, ký hiệu là $\\det(A)$, bằng bao nhiêu?",
    options: ["A. $5$", "B. $11$", "C. $3$", "D. $8$"],
    correct_option: "A",
    explanation: "$\\det(A) = ad - bc = (2 \\times 4) - (3 \\times 1) = 8 - 3 = 5$."
  },
  {
    id: "Q_MOD_A_010", module_id: "Module_A", difficulty: "Hard",
    tags: ["probability-statistics"],
    content: "Có 3 hộp đựng linh kiện điện tử. Hộp I có $10\\%$ linh kiện lỗi, Hộp II có $5\\%$ linh kiện lỗi, Hộp III có $20\\%$ linh kiện lỗi. Chọn ngẫu nhiên một hộp, rồi từ đó lấy ra 1 linh kiện. Xác suất để chọn trúng Hộp III **và** lấy ra một linh kiện lỗi là bao nhiêu?",
    options: ["A. $\\frac{1}{3} \\times 0.2$", "B. $\\frac{1}{3} + 0.2$", "C. $0.2$", "D. $\\frac{1}{3} \\times (0.1 + 0.05 + 0.2)$"],
    correct_option: "A",
    explanation: "Xác suất chọn ngẫu nhiên 1 trong 3 hộp là $\\frac{1}{3}$. Xác suất lấy được linh kiện lỗi trong Hộp III là $0.2$. Hai hành động diễn ra liên tiếp nên nhân lại: $\\frac{1}{3} \\times 0.2$."
  },
  {
    id: "Q_MOD_A_011", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Khi đo lường hiệu năng của mô hình AI dự báo giá nhà, nếu bạn muốn các sai số lớn bị phạt nặng hơn, bạn nên chọn hàm đo lường sai số nào?",
    options: ["A. MAE (Sai số tuyệt đối trung bình)", "B. MSE (Sai số bình phương trung bình)", "C. Accuracy (Độ chính xác)", "D. F1-Score"],
    correct_option: "B",
    explanation: "Hàm MSE thực hiện bình phương các khoảng cách sai số $(y_{true} - f(x))^2$. Khi sai số lớn, bình phương sẽ đẩy giá trị lỗi lên rất cao, giúp phạt nặng các điểm dữ liệu bị lệch nhiều (outliers)."
  },
  {
    id: "Q_MOD_A_012", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho vector $w = [3, 4]$. Khoảng cách Euclide (chuẩn $L_2$) của vector này từ gốc tọa độ $(0,0)$ bằng bao nhiêu?",
    options: ["A. $5$", "B. $7$", "C. $25$", "D. $12$"],
    correct_option: "A",
    explanation: "Chuẩn $L_2$ của vector $w=[3, 4]$: $\\|w\\|_2 = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    id: "Q_MOD_A_013", module_id: "Module_A", difficulty: "Hard",
    tags: ["calculus"],
    content: "Nếu đạo hàm bậc nhất của một hàm chi phí (Loss function) tại điểm $x_0$ có giá trị là một số dương ($f'(x_0) > 0$), để giảm chi phí theo thuật toán Gradient Descent, ta cần dịch chuyển $x$ về phía nào?",
    options: ["A. Giảm giá trị của $x$ ($x_{new} < x_0$)", "B. Tăng giá trị của $x$ ($x_{new} > x_0$)", "C. Giữ nguyên $x$ vì đã đạt tối ưu", "D. Tăng gấp đôi giá trị của $x$"],
    correct_option: "A",
    explanation: "Công thức Gradient Descent: $x_{new} = x_{old} - \\alpha \\times f'(x_{old})$. Nếu $f'(x_{old}) > 0$, ta trừ đi một số dương, làm $x_{new} < x_{old}$, tức là phải giảm $x$."
  },
  {
    id: "Q_MOD_A_014", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một xúc xắc cân đối 6 mặt được gieo 2 lần. Xác suất để tổng số chấm xuất hiện trong 2 lần gieo bằng $4$ là bao nhiêu?",
    options: ["A. $\\frac{1}{12}$", "B. $\\frac{1}{6}$", "C. $\\frac{1}{18}$", "D. $\\frac{1}{9}$"],
    correct_option: "A",
    explanation: "Tổng số không gian mẫu: $6 \\times 6 = 36$. Các cặp có tổng bằng 4: $(1,3), (2,2), (3,1)$ → 3 trường hợp. Xác suất: $\\frac{3}{36} = \\frac{1}{12}$."
  },
  {
    id: "Q_MOD_A_015", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong một tập dữ liệu gồm lương của 5 kỹ sư AI lần lượt là: $20, 22, 25, 28, 95$ (triệu/tháng). Giá trị nào phản ánh sát nhất mức thu nhập phổ biến mà không bị ảnh hưởng bởi giá trị đột biến (outlier)?",
    options: ["A. Giá trị trung bình (Mean)", "B. Giá trị trung vị (Median)", "C. Giá trị cực đại (Max)", "D. Tổng số lương"],
    correct_option: "B",
    explanation: "Giá trị trung bình (Mean) sẽ bị kéo lên cao bởi outlier $95$ ($\\approx 38$), không phản ánh đúng thực tế. Giá trị trung vị (Median) là $25$, phản ánh chính xác mức lương phổ biến hơn."
  },
  {
    id: "Q_MOD_A_016", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Phép toán nào dưới đây biến đổi một ma trận kích thước $m \\times n$ thành một ma trận kích thước $n \\times m$ bằng cách đổi dòng thành cột và cột thành dòng?",
    options: ["A. Nhân ma trận", "B. Nghịch đảo ma trận", "C. Chuyển vị ma trận (Transpose)", "D. Định thức ma trận"],
    correct_option: "C",
    explanation: "Ma trận chuyển vị (Transpose), ký hiệu là $A^T$, thu được bằng cách chuyển các dòng của ma trận $A$ thành các cột tương ứng và ngược lại."
  },
  {
    id: "Q_MOD_A_017", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Hàm số $f(x) = -x^2 + 6x - 1$ đạt giá trị lớn nhất (Cực đại) tại $x$ bằng bao nhiêu?",
    options: ["A. $x = 3$", "B. $x = -3$", "C. $x = 6$", "D. $x = 0$"],
    correct_option: "A",
    explanation: "Tính đạo hàm: $f'(x) = -2x + 6$. Cho $f'(x) = 0 \\Leftrightarrow x = 3$. Vì hệ số của $x^2$ âm ($-1$), đây là điểm đạt giá trị lớn nhất."
  },
  {
    id: "Q_MOD_A_018", module_id: "Module_A", difficulty: "Hard",
    tags: ["metrics"],
    content: "Trong Học máy, hàm mất mát (Loss Function) phổ biến dành cho bài toán phân loại nhị phân (Binary Classification) là hàm nào?",
    options: ["A. Mean Squared Error (MSE)", "B. Binary Cross-Entropy", "C. Huber Loss", "D. L1 Loss"],
    correct_option: "B",
    explanation: "**Binary Cross-Entropy** đo lường khoảng cách giữa hai phân phối xác suất. Nó phạt rất nặng nếu mô hình dự đoán sai với độ tự tin cao, làm cho nó trở thành hàm mất mát tiêu chuẩn cho phân loại nhị phân."
  },
  {
    id: "Q_MOD_A_019", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Cho ma trận $A$ kích thước $3 \\times 2$ và ma trận $B$ kích thước $2 \\times 4$. Ma trận kết quả $C = A \\times B$ sẽ có kích thước là bao nhiêu?",
    options: ["A. $3 \\times 4$", "B. $2 \\times 2$", "C. $3 \\times 2$", "D. Phép nhân này không thực hiện được."],
    correct_option: "A",
    explanation: "Điều kiện nhân hai ma trận: số cột của ma trận trước bằng số dòng của ma trận sau ($2 = 2$). Kích thước kết quả: số dòng của $A$ × số cột của $B$ = $3 \\times 4$."
  },
  {
    id: "Q_MOD_A_020", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Một hệ thống kiểm tra lỗi vi mạch tìm thấy trung bình 2 sản phẩm lỗi trên mỗi 100 sản phẩm. Nếu chọn ngẫu nhiên 1 sản phẩm để kiểm tra, xác suất chọn phải sản phẩm **không bị lỗi** là bao nhiêu?",
    options: ["A. $0.02$", "B. $0.2$", "C. $0.98$", "D. $0.5$"],
    correct_option: "C",
    explanation: "Xác suất chọn phải sản phẩm lỗi là $\\frac{2}{100} = 0.02$. Xác suất không lỗi (biến cố đối): $1 - 0.02 = 0.98$."
  },
  {
    id: "Q_MOD_A_021", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Phép toán đạo hàm của hàm số $f(x) = 3x^2 + 5x - 2$ là gì?",
    options: ["A. $f'(x) = 3x + 5$", "B. $f'(x) = 6x + 5$", "C. $f'(x) = 6x - 2$", "D. $f'(x) = 6x^2 + 5$"],
    correct_option: "B",
    explanation: "$(3x^2)' = 6x$; $(5x)' = 5$; $(-2)' = 0$. Vậy $f'(x) = 6x + 5$."
  },
  {
    id: "Q_MOD_A_022", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Khái niệm \"Phương sai\" (Variance) trong Thống kê mô tả điều gì của tập dữ liệu?",
    options: ["A. Giá trị lớn nhất của tập dữ liệu.", "B. Mức độ phân tán/biến thiên của các điểm dữ liệu so với giá trị trung bình.", "C. Giá trị xuất hiện nhiều nhất trong tập dữ liệu.", "D. Số lượng các phần tử có trong tập dữ liệu."],
    correct_option: "B",
    explanation: "Phương sai đo lường xem dữ liệu nằm tập trung sát quanh giá trị trung bình hay bị trải rộng phân tán ra xa. Phương sai càng lớn nghĩa là dữ liệu càng biến thiên mạnh."
  },
  {
    id: "Q_MOD_A_023", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Cho vector $v = [1, -2, 2]$. Chuẩn $L_1$ (tổng giá trị tuyệt đối) của vector này bằng bao nhiêu?",
    options: ["A. $3$", "B. $5$", "C. $9$", "D. $1$"],
    correct_option: "B",
    explanation: "Chuẩn $L_1$ là tổng giá trị tuyệt đối của tất cả các phần tử: $\\|v\\|_1 = |1| + |-2| + |2| = 1 + 2 + 2 = 5$."
  },
  {
    id: "Q_MOD_A_024", module_id: "Module_A", difficulty: "Easy",
    tags: ["activation-functions"],
    content: "Hàm kích hoạt **ReLU** (Rectified Linear Unit) được định nghĩa là $f(x) = \\max(0, x)$. Phạm vi (range) đầu ra của hàm ReLU là khoảng nào?",
    options: ["A. $(-\\infty, +\\infty)$", "B. $[-1, 1]$", "C. $[0, 1]$", "D. $[0, +\\infty)$"],
    correct_option: "D",
    explanation: "Hàm ReLU trả về $0$ khi $x < 0$ và trả về chính $x$ khi $x \\geq 0$. Do đó đầu ra luôn không âm, nằm trong khoảng $[0, +\\infty)$."
  },
  {
    id: "Q_MOD_A_025", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Trong thống kê, **Độ lệch chuẩn (Standard Deviation)** là gì?",
    options: ["A. Giá trị trung bình cộng của tập dữ liệu.", "B. Căn bậc hai của phương sai, dùng để đo mức độ phân tán của dữ liệu.", "C. Giá trị ở giữa khi sắp xếp dữ liệu từ nhỏ đến lớn.", "D. Tích của tất cả các phần tử trong tập dữ liệu."],
    correct_option: "B",
    explanation: "Độ lệch chuẩn $\\sigma = \\sqrt{\\text{Variance}}$. Nó có cùng đơn vị với dữ liệu gốc, giúp dễ hiểu hơn phương sai khi đánh giá mức độ biến thiên."
  },
  {
    id: "Q_MOD_A_026", module_id: "Module_A", difficulty: "Easy",
    tags: ["metrics"],
    content: "Công thức tính **Accuracy** (Độ chính xác tổng thể) của một mô hình phân loại là gì?",
    options: ["A. $\\frac{TP}{TP + FP}$", "B. $\\frac{TP + TN}{TP + TN + FP + FN}$", "C. $\\frac{TP}{TP + FN}$", "D. $\\frac{2 \\times Precision \\times Recall}{Precision + Recall}$"],
    correct_option: "B",
    explanation: "Accuracy = (Số dự đoán đúng) / (Tổng số dự đoán) = $\\frac{TP + TN}{TP + TN + FP + FN}$. Đây là chỉ số cơ bản nhất để đánh giá mô hình phân loại."
  },
  {
    id: "Q_MOD_A_027", module_id: "Module_A", difficulty: "Easy",
    tags: ["linear-algebra"],
    content: "Ma trận đơn vị (Identity Matrix) $I$ có tính chất đặc biệt nào khi nhân với một ma trận $A$ bất kỳ (cùng kích thước phù hợp)?",
    options: ["A. $A \\times I = 0$", "B. $A \\times I = I$", "C. $A \\times I = A$", "D. $A \\times I = A^T$"],
    correct_option: "C",
    explanation: "Ma trận đơn vị $I$ đóng vai trò như số $1$ trong phép nhân số học. Kết quả nhân bất kỳ ma trận $A$ với ma trận đơn vị $I$ (tương thích) luôn trả về chính $A$: $A \\times I = I \\times A = A$."
  },
  {
    id: "Q_MOD_A_028", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Theo định lý Bayes, nếu $P(B|A) = 0.9$, $P(A) = 0.01$, $P(B) = 0.1$, thì xác suất $P(A|B)$ bằng bao nhiêu?",
    options: ["A. $0.09$", "B. $0.9$", "C. $0.09$", "D. $0.001$"],
    correct_option: "A",
    explanation: "Theo định lý Bayes: $P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)} = \\frac{0.9 \\times 0.01}{0.1} = \\frac{0.009}{0.1} = 0.09$."
  },
  {
    id: "Q_MOD_A_029", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Quy tắc **Chain Rule** (quy tắc dây chuyền) trong giải tích được sử dụng để tính đạo hàm của hàm hợp $h(x) = f(g(x))$. Công thức đúng là gì?",
    options: ["A. $h'(x) = f'(x) + g'(x)$", "B. $h'(x) = f'(g(x)) \\times g'(x)$", "C. $h'(x) = f'(x) \\times g'(x)$", "D. $h'(x) = f(g'(x))$"],
    correct_option: "B",
    explanation: "Chain Rule: Đạo hàm của hàm hợp $h(x) = f(g(x))$ là $h'(x) = f'(g(x)) \\times g'(x)$. Đây là nền tảng của thuật toán Backpropagation trong học sâu."
  },
  {
    id: "Q_MOD_A_030", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "**Cosine Similarity** giữa hai vector $u$ và $v$ được tính bằng công thức nào? Nó thường dùng để đo lường sự tương đồng ngữ nghĩa trong NLP.",
    options: ["A. $\\frac{u \\cdot v}{\\|u\\| \\times \\|v\\|}$", "B. $\\|u - v\\|_2$", "C. $u \\cdot v$", "D. $\\frac{\\|u\\|}{\\|v\\|}$"],
    correct_option: "A",
    explanation: "Cosine Similarity $= \\cos(\\theta) = \\frac{u \\cdot v}{\\|u\\|_2 \\times \\|v\\|_2}$. Giá trị nằm trong $[-1, 1]$: bằng $1$ là hoàn toàn giống nhau, bằng $0$ là vuông góc, bằng $-1$ là ngược chiều nhau."
  },
  {
    id: "Q_MOD_A_031", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "Hàm **Softmax** thường được sử dụng ở lớp đầu ra của mạng nơ-ron phân loại đa lớp. Điều gì xảy ra với tổng tất cả đầu ra của hàm Softmax?",
    options: ["A. Tổng bằng $0$.", "B. Tổng bằng $1$.", "C. Tổng bằng số lớp phân loại.", "D. Tổng là một số ngẫu nhiên."],
    correct_option: "B",
    explanation: "Hàm Softmax chuyển đổi vector điểm số thô (logits) thành phân phối xác suất. Tổng tất cả đầu ra của Softmax luôn bằng $1$, mỗi giá trị biểu diễn xác suất thuộc về lớp tương ứng."
  },
  {
    id: "Q_MOD_A_032", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Công thức tính **F1-Score** là gì? Đây là chỉ số kết hợp giữa Precision và Recall.",
    options: ["A. $F1 = Precision + Recall$", "B. $F1 = \\frac{Precision + Recall}{2}$", "C. $F1 = \\frac{2 \\times Precision \\times Recall}{Precision + Recall}$", "D. $F1 = \\frac{Precision}{Recall}$"],
    correct_option: "C",
    explanation: "F1-Score là trung bình điều hòa (harmonic mean) của Precision và Recall: $F1 = \\frac{2 \\times P \\times R}{P + R}$. Nó hữu ích khi cần cân bằng cả hai chỉ số, đặc biệt với tập dữ liệu mất cân bằng."
  },
  {
    id: "Q_MOD_A_033", module_id: "Module_A", difficulty: "Medium",
    tags: ["matrix-operations"],
    content: "Trong học sâu, phép toán **Hadamard Product** (tích từng phần tử) giữa hai ma trận $A$ và $B$ cùng kích thước ký hiệu là $A \\odot B$. Phần tử tại vị trí $(i,j)$ của kết quả là gì?",
    options: ["A. Tổng $A_{ij} + B_{ij}$", "B. Tích $A_{ij} \\times B_{ij}$", "C. Tích ma trận thông thường của hàng $i$ và cột $j$.", "D. Hiệu $A_{ij} - B_{ij}$"],
    correct_option: "B",
    explanation: "Hadamard Product nhân từng phần tử tương ứng: $(A \\odot B)_{ij} = A_{ij} \\times B_{ij}$. Phép toán này yêu cầu hai ma trận có cùng kích thước và khác với phép nhân ma trận thông thường."
  },
  {
    id: "Q_MOD_A_034", module_id: "Module_A", difficulty: "Medium",
    tags: ["probability-statistics"],
    content: "Một kỹ sư AI muốn chọn ngẫu nhiên $k = 5$ ảnh từ tập $n = 100$ ảnh để kiểm tra thủ công. Số cách chọn mà **không** tính đến thứ tự là bao nhiêu (tổ hợp $C_{100}^5$)?",
    options: ["A. $100^5$", "B. $100 \\times 99 \\times 98 \\times 97 \\times 96$", "C. $\\frac{100!}{5! \\times 95!}$", "D. $5!$"],
    correct_option: "C",
    explanation: "Tổ hợp chập $k$ của $n$ phần tử không tính thứ tự: $C_n^k = \\frac{n!}{k!(n-k)!} = \\frac{100!}{5! \\times 95!}$. Đây là công cụ cơ bản trong thống kê và xác suất."
  },
  {
    id: "Q_MOD_A_035", module_id: "Module_A", difficulty: "Medium",
    tags: ["calculus"],
    content: "Trong học máy, **Learning Rate** (tốc độ học $\\alpha$) trong thuật toán Gradient Descent có vai trò gì?",
    options: ["A. Xác định số lượng lớp ẩn trong mạng nơ-ron.", "B. Kiểm soát độ lớn của bước cập nhật tham số theo hướng ngược gradient.", "C. Xác định hàm kích hoạt được sử dụng.", "D. Xác định kích thước tập dữ liệu huấn luyện."],
    correct_option: "B",
    explanation: "Learning Rate $\\alpha$ kiểm soát bước nhảy: $\\theta_{new} = \\theta_{old} - \\alpha \\nabla L$. Nếu $\\alpha$ quá lớn, thuật toán có thể phân kỳ. Nếu quá nhỏ, huấn luyện sẽ rất chậm."
  },
  {
    id: "Q_MOD_A_036", module_id: "Module_A", difficulty: "Hard",
    tags: ["metrics"],
    content: "**ROC Curve** (Receiver Operating Characteristic) trong đánh giá mô hình phân loại là đồ thị biểu diễn mối quan hệ giữa hai chỉ số nào?",
    options: ["A. Precision và Recall theo ngưỡng quyết định (threshold).", "B. True Positive Rate (Recall) và False Positive Rate theo ngưỡng quyết định.", "C. Accuracy và Loss theo số epoch huấn luyện.", "D. Learning Rate và Validation Loss."],
    correct_option: "B",
    explanation: "ROC Curve vẽ **True Positive Rate (Recall/Sensitivity)** trên trục Y và **False Positive Rate (1 - Specificity)** trên trục X, tại nhiều ngưỡng quyết định khác nhau. Diện tích dưới đường cong (AUC) càng gần 1 thì mô hình càng tốt."
  },
  {
    id: "Q_MOD_A_037", module_id: "Module_A", difficulty: "Hard",
    tags: ["linear-algebra"],
    content: "**Eigenvalue** (giá trị riêng) $\\lambda$ của một ma trận vuông $A$ thỏa mãn phương trình nào, với $v$ là eigenvector (vector riêng) tương ứng?",
    options: ["A. $Av = \\lambda + v$", "B. $Av = \\lambda v$", "C. $A + v = \\lambda v$", "D. $A^T v = \\lambda$"],
    correct_option: "B",
    explanation: "Định nghĩa: $Av = \\lambda v$, trong đó $\\lambda$ là eigenvalue và $v \\neq 0$ là eigenvector. Eigenvalue/eigenvector rất quan trọng trong PCA (Principal Component Analysis) để giảm chiều dữ liệu."
  },
  {
    id: "Q_MOD_A_038", module_id: "Module_A", difficulty: "Hard",
    tags: ["probability-statistics"],
    content: "Trong học máy, kỹ thuật **Regularization L2 (Ridge)** thêm vào hàm mất mát một số hạng phạt là gì? Mục đích của nó là gì?",
    options: ["A. Thêm $\\lambda \\sum |w_i|$ để làm thưa trọng số (Sparse weights).", "B. Thêm $\\lambda \\sum w_i^2$ để ngăn các trọng số quá lớn, giảm Overfitting.", "C. Thêm một hằng số $\\lambda$ để tăng tốc độ học.", "D. Thêm nhiễu ngẫu nhiên vào dữ liệu."],
    correct_option: "B",
    explanation: "L2 Regularization (Ridge) thêm hạng phạt $\\lambda \\sum_i w_i^2$ vào hàm mất mát. Điều này khuyến khích các trọng số nhỏ và phân tán đều, giúp mô hình không quá phụ thuộc vào một vài đặc trưng cụ thể, từ đó giảm Overfitting."
  },
  {
    id: "Q_MOD_A_039", module_id: "Module_A", difficulty: "Hard",
    tags: ["calculus"],
    content: "Hiện tượng **Vanishing Gradient** (tiêu biến đạo hàm) trong mạng nơ-ron sâu xảy ra khi nào và gây ra hậu quả gì?",
    options: ["A. Khi gradient bùng nổ lên rất lớn, khiến trọng số thay đổi quá nhiều.", "B. Khi gradient bị nhân nhiều lần qua các lớp và dần về 0, khiến các lớp đầu gần như không được cập nhật.", "C. Khi tốc độ học quá cao khiến mô hình phân kỳ.", "D. Khi dữ liệu huấn luyện bị thiếu nhãn."],
    correct_option: "B",
    explanation: "Khi lan truyền ngược qua nhiều lớp, gradient được nhân với đạo hàm của hàm kích hoạt lặp đi lặp lại. Hàm Sigmoid/Tanh có đạo hàm < 1, khiến gradient giảm dần theo cấp số nhân về gần 0 → các lớp đầu học rất chậm. ReLU và kỹ thuật Batch Normalization giúp giảm thiểu vấn đề này."
  },
  {
    id: "Q_MOD_A_040", module_id: "Module_A", difficulty: "Hard",
    tags: ["matrix-operations"],
    content: "Trong phân tích thành phần chính (PCA - Principal Component Analysis), ma trận Covariance $\\Sigma$ của tập dữ liệu được dùng để làm gì?",
    options: ["A. Tính giá trị trung bình của từng đặc trưng.", "B. Tìm hướng phương sai lớn nhất (Principal Components) thông qua phân tích eigenvector.", "C. Chuẩn hóa dữ liệu về phân phối chuẩn.", "D. Loại bỏ các đặc trưng có phương sai bằng 0."],
    correct_option: "B",
    explanation: "PCA phân tích eigenvector/eigenvalue của ma trận Covariance để tìm các **Principal Components** – các hướng trong không gian đặc trưng mà dữ liệu có phương sai lớn nhất. Chiếu dữ liệu lên các hướng này giúp giảm chiều mà vẫn giữ được phần lớn thông tin."
  },
  {
    id: "Q_MOD_A_041", module_id: "Module_A", difficulty: "Easy",
    tags: ["probability-statistics"],
    content: "Phân phối nào sau đây thường được dùng để mô hình hóa xác suất xảy ra của một sự kiện (chỉ có 2 kết quả: thành công/thất bại) trong $n$ lần thử độc lập?",
    options: ["A. Phân phối chuẩn (Normal/Gaussian)", "B. Phân phối nhị thức (Binomial)", "C. Phân phối Poisson", "D. Phân phối đều (Uniform)"],
    correct_option: "B",
    explanation: "Phân phối nhị thức mô hình hóa số lần thành công trong $n$ phép thử Bernoulli độc lập, mỗi phép thử có xác suất thành công $p$. Công thức: $P(X=k) = C_n^k p^k (1-p)^{n-k}$."
  },
  {
    id: "Q_MOD_A_042", module_id: "Module_A", difficulty: "Easy",
    tags: ["matrix-operations"],
    content: "Phép toán nào cho phép tìm ma trận $A^{-1}$ sao cho $A \\times A^{-1} = I$? Ma trận nghịch đảo này tồn tại khi nào?",
    options: ["A. Khi $\\det(A) = 0$.", "B. Khi $\\det(A) \\neq 0$ (ma trận không suy biến).", "C. Khi ma trận là ma trận hàng.", "D. Khi ma trận có tất cả phần tử dương."],
    correct_option: "B",
    explanation: "Ma trận nghịch đảo $A^{-1}$ tồn tại khi và chỉ khi $\\det(A) \\neq 0$. Nếu $\\det(A) = 0$, ma trận được gọi là suy biến (singular) và không có nghịch đảo."
  },
  {
    id: "Q_MOD_A_043", module_id: "Module_A", difficulty: "Easy",
    tags: ["calculus"],
    content: "Đạo hàm của hàm số mũ $f(x) = e^x$ là gì?",
    options: ["A. $f'(x) = x \\cdot e^{x-1}$", "B. $f'(x) = e^x$", "C. $f'(x) = xe^x$", "D. $f'(x) = \\ln(x)$"],
    correct_option: "B",
    explanation: "Hàm $f(x) = e^x$ có đạo hàm đặc biệt: $f'(x) = e^x$. Đây là hàm duy nhất bằng chính đạo hàm của nó, là nền tảng quan trọng trong giải tích và học máy."
  },
  {
    id: "Q_MOD_A_044", module_id: "Module_A", difficulty: "Medium",
    tags: ["activation-functions"],
    content: "So sánh hàm **Tanh** với hàm **Sigmoid**: điểm khác biệt quan trọng nhất về phạm vi đầu ra là gì?",
    options: ["A. Tanh có phạm vi $[0, 1]$ còn Sigmoid có phạm vi $[-1, 1]$.", "B. Tanh có phạm vi $[-1, 1]$ còn Sigmoid có phạm vi $[0, 1]$.", "C. Cả hai đều có phạm vi $[0, 1]$.", "D. Tanh có phạm vi $[0, +\\infty)$ còn Sigmoid có phạm vi $[-1, 0]$."],
    correct_option: "B",
    explanation: "Sigmoid có đầu ra trong $[0, 1]$, trong khi Tanh có đầu ra trong $[-1, 1]$. Tanh được chuẩn hóa xung quanh $0$ nên gradient trung bình gần $0$ hơn, thường giúp huấn luyện hội tụ nhanh hơn Sigmoid."
  },
  {
    id: "Q_MOD_A_045", module_id: "Module_A", difficulty: "Medium",
    tags: ["metrics"],
    content: "Trong bài toán phân loại nhị phân phát hiện ung thư, bạn **ưu tiên** không bỏ sót bệnh nhân thực sự bị ung thư (dù có thể báo nhầm). Bạn nên tối ưu chỉ số nào?",
    options: ["A. Precision (Độ chính xác dự đoán dương tính)", "B. Specificity (Tỷ lệ âm tính thật)", "C. Recall (Độ nhạy / True Positive Rate)", "D. Accuracy (Độ chính xác tổng thể)"],
    correct_option: "C",
    explanation: "**Recall = TP / (TP + FN)** đo khả năng mô hình phát hiện tất cả các trường hợp dương tính thực sự. Trong y tế, bỏ sót bệnh nhân ung thư (False Negative) nguy hiểm hơn nhiều so với báo nhầm, nên Recall cao là ưu tiên."
  },
  {
    id: "Q_MOD_A_046", module_id: "Module_A", difficulty: "Medium",
    tags: ["linear-algebra"],
    content: "Phép biến đổi **PCA (Principal Component Analysis)** thuộc loại kỹ thuật nào trong học máy và mục đích chính của nó là gì?",
    options: ["A. Kỹ thuật phân loại có giám sát, mục đích dự đoán nhãn.", "B. Kỹ thuật giảm chiều dữ liệu không giám sát, mục đích giữ lại phần lớn phương sai.", "C. Kỹ thuật tăng cường dữ liệu, mục đích tạo thêm mẫu.", "D. Kỹ thuật chuẩn hóa, mục đích đưa dữ liệu về $[0,1]$."],
    correct_option: "B",
    explanation: "PCA là kỹ thuật giảm chiều (dimensionality reduction) không giám sát. Nó chiếu dữ liệu từ không gian $n$ chiều xuống $k$ chiều ($k < n$) sao cho giữ được nhiều phương sai nhất, giúp trực quan hóa và loại bỏ nhiễu."
  },
  {
    id: "Q_MOD_A_047", module_id: "Module_A", difficulty: "Hard",
    tags: ["probability-statistics"],
    content: "**KL-Divergence** (Kullback-Leibler Divergence) $D_{KL}(P \\| Q)$ đo lường điều gì giữa hai phân phối xác suất $P$ và $Q$?",
    options: ["A. Khoảng cách Euclide giữa hai phân phối.", "B. Mức độ khác biệt/\"thông tin mất đi\" khi dùng $Q$ để xấp xỉ phân phối thực $P$.", "C. Xác suất chung của hai sự kiện độc lập.", "D. Tích chập của hai phân phối."],
    correct_option: "B",
    explanation: "$D_{KL}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}$. KL-Divergence đo \"lượng thông tin\" cần thêm khi dùng $Q$ thay cho $P$. Nó không đối xứng ($D_{KL}(P\\|Q) \\neq D_{KL}(Q\\|P)$) và là nền tảng của Binary Cross-Entropy."
  },
  {
    id: "Q_MOD_A_048", module_id: "Module_A", difficulty: "Hard",
    tags: ["calculus"],
    content: "Trong tối ưu hóa, phương pháp **Stochastic Gradient Descent (SGD)** khác với **Batch Gradient Descent** như thế nào?",
    options: ["A. SGD dùng toàn bộ tập dữ liệu mỗi bước cập nhật, Batch GD dùng từng mẫu.", "B. SGD cập nhật tham số sau mỗi mẫu đơn (hoặc mini-batch nhỏ), giúp hội tụ nhanh hơn và có thể thoát Local Minima.", "C. SGD không cần đạo hàm, còn Batch GD cần đạo hàm.", "D. SGD và Batch GD hoàn toàn tương đương về mọi mặt."],
    correct_option: "B",
    explanation: "SGD cập nhật tham số sau mỗi mẫu (hoặc mini-batch), tạo ra gradient ồn ào (noisy) nhưng cập nhật thường xuyên hơn → hội tụ nhanh hơn với dữ liệu lớn và có khả năng thoát Local Minima nhờ tính ngẫu nhiên. Batch GD ổn định hơn nhưng chậm với tập dữ liệu lớn."
  },
  {
    id: "Q_MOD_A_049", module_id: "Module_A", difficulty: "Hard",
    tags: ["metrics"],
    content: "Trong bài toán phân loại với tập dữ liệu **mất cân bằng** (ví dụ 99% mẫu âm tính, 1% dương tính), tại sao Accuracy không phải là chỉ số đánh giá tốt?",
    options: ["A. Vì Accuracy không tính được khi có hơn 2 lớp.", "B. Vì một mô hình dự đoán tất cả là âm tính vẫn đạt Accuracy 99% nhưng hoàn toàn vô dụng.", "C. Vì Accuracy yêu cầu dữ liệu phải được chuẩn hóa.", "D. Vì Accuracy chỉ áp dụng cho bài toán hồi quy."],
    correct_option: "B",
    explanation: "Với tập mất cân bằng 99%/1%, một mô hình \"ngốc\" luôn đoán âm tính đạt Accuracy 99% mà không học được gì. F1-Score, AUC-ROC, hoặc PR-AUC là các chỉ số phù hợp hơn để đánh giá bài toán này."
  },
  {
    id: "Q_MOD_A_050", module_id: "Module_A", difficulty: "Hard",
    tags: ["matrix-operations"],
    content: "Phân tích giá trị suy biến (SVD - Singular Value Decomposition) phân tích ma trận $A$ thành dạng $A = U \\Sigma V^T$. Ma trận $\\Sigma$ trong phân tích này là gì?",
    options: ["A. Ma trận vuông với các phần tử là eigenvalue của $A$.", "B. Ma trận chứa các singular values (giá trị suy biến) trên đường chéo chính, các phần tử khác bằng 0.", "C. Ma trận đơn vị.", "D. Ma trận ngược của $A$."],
    correct_option: "B",
    explanation: "Trong SVD: $U$ và $V$ là các ma trận trực giao; $\\Sigma$ là ma trận đường chéo chứa **singular values** (căn bậc hai của eigenvalue của $A^TA$) trên đường chéo chính, sắp xếp từ lớn đến nhỏ. SVD là nền tảng của nhiều kỹ thuật ML như PCA, Matrix Factorization, LSA."
  }
];
