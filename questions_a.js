const QUESTIONS_A = [
  {
    "id": "Q_MOD_A_001",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một cửa hàng bán điện thoại có chương trình giảm giá $10\\%$ cho tất cả sản phẩm. Nếu một chiếc điện thoại có giá gốc là $10$ triệu đồng, khách hàng sẽ được giảm bao nhiêu tiền?",
    "options": [
      "A. $1.0$ triệu đồng.",
      "B. $2.0$ triệu đồng.",
      "C. $3.0$ triệu đồng.",
      "D. $4.0$ triệu đồng."
    ],
    "correct_option": "A",
    "explanation": "Số tiền được giảm bằng giá gốc nhân với phần trăm giảm giá: $10 \\times 10\\% = 10 \\times 0.1 = 1$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_002",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Trong một kho dữ liệu ảnh, tuần thứ nhất thu thập được $120$ bức ảnh mèo và tuần thứ hai thu thập được $80$ bức ảnh mèo. Tổng số ảnh mèo thu được sau hai tuần là bao nhiêu?",
    "options": [
      "A. $180$ bức ảnh mèo.",
      "B. $200$ bức ảnh mèo.",
      "C. $220$ bức ảnh mèo.",
      "D. $240$ bức ảnh mèo."
    ],
    "correct_option": "B",
    "explanation": "Tổng số ảnh mèo sau hai tuần được tính bằng phép cộng đơn giản: $120 + 80 = 200$ bức ảnh."
  },
  {
    "id": "Q_MOD_A_003",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Điểm số môn Toán của một học sinh trong 3 lần kiểm tra lần lượt là $7$, $8$ và $9$. Điểm trung bình cộng của học sinh này sau 3 lần kiểm tra là bao nhiêu?",
    "options": [
      "A. $6.0$ điểm.",
      "B. $7.0$ điểm.",
      "C. $8.0$ điểm.",
      "D. $9.0$ điểm."
    ],
    "correct_option": "C",
    "explanation": "Điểm trung bình cộng được tính bằng tổng số điểm chia cho số lần kiểm tra: $(7 + 8 + 9) / 3 = 24 / 3 = 8$ điểm."
  },
  {
    "id": "Q_MOD_A_004",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Khi gieo một đồng xu cân đối và đồng chất một lần, xác suất để đồng xu xuất hiện mặt ngửa (N) là bao nhiêu?",
    "options": [
      "A. $25\\%$",
      "B. $50\\%$",
      "C. $75\\%$",
      "D. $90\\%$"
    ],
    "correct_option": "B",
    "explanation": "Đồng xu có 2 mặt (Sấp và Ngửa) với khả năng xuất hiện như nhau. Do đó, xác suất xuất hiện mặt ngửa là $1/2 = 50\\%$."
  },
  {
    "id": "Q_MOD_A_005",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một học sinh trả lời đúng $16$ câu trên tổng số $20$ câu hỏi của một bài kiểm tra. Tỷ lệ phần trăm câu trả lời đúng của học sinh này là bao nhiêu?",
    "options": [
      "A. $70\\%$",
      "B. $80\\%$",
      "C. $90\\%$",
      "D. $60\\%$"
    ],
    "correct_option": "B",
    "explanation": "Tỷ lệ phần trăm câu trả lời đúng được tính bằng: $(16 / 20) \\times 100\\% = 0.8 \\times 100\\% = 80\\%$."
  },
  {
    "id": "Q_MOD_A_006",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một lập trình viên viết được $15$ dòng mã nguồn (code) mỗi giờ. Nếu lập trình viên đó làm việc liên tục trong $4$ giờ, tổng số dòng mã nguồn viết được là bao nhiêu?",
    "options": [
      "A. $50$ dòng mã.",
      "B. $60$ dòng mã.",
      "C. $70$ dòng mã.",
      "D. $80$ dòng mã."
    ],
    "correct_option": "B",
    "explanation": "Tổng số dòng mã nguồn viết được trong $4$ giờ là: $15 \\times 4 = 60$ dòng mã."
  },
  {
    "id": "Q_MOD_A_007",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Gieo một con xúc xắc cân đối và đồng chất $6$ mặt (được đánh số chấm từ $1$ đến $6$). Xác suất để gieo được mặt có số chấm là $5$ bằng bao nhiêu?",
    "options": [
      "A. $1/6$",
      "B. $2/6$",
      "C. $3/6$",
      "D. $4/6$"
    ],
    "correct_option": "A",
    "explanation": "Xúc xắc có $6$ mặt có khả năng xuất hiện như nhau. Chỉ có $1$ mặt có số chấm là $5$. Do đó xác suất là $1/6$."
  },
  {
    "id": "Q_MOD_A_008",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "activation-functions"
    ],
    "content": "Một dự án phần mềm dự kiến hoàn thành trong $30$ ngày. Sau $12$ ngày làm việc, số ngày còn lại để hoàn thành dự án theo đúng kế hoạch là bao nhiêu?",
    "options": [
      "A. $15$ ngày.",
      "B. $18$ ngày.",
      "C. $20$ ngày.",
      "D. $22$ ngày."
    ],
    "correct_option": "B",
    "explanation": "Số ngày còn lại được tính bằng phép trừ đơn giản: $30 - 12 = 18$ ngày."
  },
  {
    "id": "Q_MOD_A_009",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Nhiệt độ đo được tại một trạm khí tượng trong 4 ngày liên tiếp lần lượt là $20^\\circ\\text{C}$, $22^\\circ\\text{C}$, $24^\\circ\\text{C}$ và $26^\\circ\\text{C}$. Nhiệt độ trung bình trong 4 ngày đó là bao nhiêu?",
    "options": [
      "A. $21^\\circ\\text{C}$",
      "B. $23^\\circ\\text{C}$",
      "C. $25^\\circ\\text{C}$",
      "D. $27^\\circ\\text{C}$"
    ],
    "correct_option": "B",
    "explanation": "Nhiệt độ trung bình cộng của 4 ngày là: $(20 + 22 + 24 + 26) / 4 = 92 / 4 = 23^\\circ\\text{C}$."
  },
  {
    "id": "Q_MOD_A_010",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Trong một khảo sát gồm $50$ người, có $30$ người nói rằng họ thường xuyên sử dụng mạng xã hội. Tỷ lệ phần trăm người sử dụng mạng xã hội trong cuộc khảo sát này là bao nhiêu?",
    "options": [
      "A. $40\\%$",
      "B. $50\\%$",
      "C. $60\\%$",
      "D. $70\\%$"
    ],
    "correct_option": "C",
    "explanation": "Tỷ lệ phần trăm được tính bằng: $(30 / 50) \\times 100\\% = 0.6 \\times 100\\% = 60\\%$."
  },
  {
    "id": "Q_MOD_A_011",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một chiếc hộp chứa $3$ quả bóng đỏ và $2$ quả bóng xanh. Nếu bạn lấy ngẫu nhiên một quả bóng từ hộp, xác suất để quả bóng đó có màu đỏ là bao nhiêu?",
    "options": [
      "A. $1/5$",
      "B. $2/5$",
      "C. $3/5$",
      "D. $4/5$"
    ],
    "correct_option": "C",
    "explanation": "Tổng số quả bóng trong hộp là $3 + 2 = 5$ quả. Số quả bóng đỏ là $3$. Xác suất chọn được quả bóng đỏ là $3/5$."
  },
  {
    "id": "Q_MOD_A_012",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một công ty chia đều $80$ máy tính cho $4$ phòng ban. Mỗi phòng ban sẽ nhận được bao nhiêu chiếc máy tính?",
    "options": [
      "A. $15$ máy.",
      "B. $20$ máy.",
      "C. $25$ máy.",
      "D. $30$ máy."
    ],
    "correct_option": "B",
    "explanation": "Số máy tính mỗi phòng ban nhận được là: $80 / 4 = 20$ máy."
  },
  {
    "id": "Q_MOD_A_013",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Số lượng người dùng của một ứng dụng di động tăng từ $100$ người lên $120$ người. Tỷ lệ phần trăm tăng trưởng số lượng người dùng là bao nhiêu?",
    "options": [
      "A. $10\\%$",
      "B. $15\\%$",
      "C. $20\\%$",
      "D. $25\\%$"
    ],
    "correct_option": "C",
    "explanation": "Số người tăng thêm là: $120 - 100 = 20$ người. Tỷ lệ tăng là: $(20 / 100) \\times 100\\% = 20\\%$."
  },
  {
    "id": "Q_MOD_A_014",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Trong một ngày, một nhân viên bán hàng chốt được $8$ đơn hàng vào buổi sáng và $5$ đơn hàng vào buổi chiều. Tổng số đơn hàng nhân viên đó chốt được trong ngày là bao nhiêu?",
    "options": [
      "A. $11$ đơn.",
      "B. $12$ đơn.",
      "C. $13$ đơn.",
      "D. $14$ đơn."
    ],
    "correct_option": "C",
    "explanation": "Tổng số đơn hàng chốt được trong ngày là: $8 + 5 = 13$ đơn hàng."
  },
  {
    "id": "Q_MOD_A_015",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Khi tung một đồng xu cân đối và đồng chất hai lần liên tiếp, có bao nhiêu kết quả có thể xảy ra ở cả hai lần tung?",
    "options": [
      "A. $2$ kết quả.",
      "B. $4$ kết quả.",
      "C. $6$ kết quả.",
      "D. $8$ kết quả."
    ],
    "correct_option": "B",
    "explanation": "Mỗi lần tung có 2 kết quả có thể xảy ra (Sấp hoặc Ngửa). Hai lần tung độc lập có tổng số kết quả là: $2 \\times 2 = 4$ kết quả (SS, SN, NS, NN)."
  },
  {
    "id": "Q_MOD_A_016",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Ba bạn học sinh có cân nặng lần lượt là $40\\text{ kg}$, $42\\text{ kg}$ và $44\\text{ kg}$. Cân nặng trung bình của ba bạn là bao nhiêu?",
    "options": [
      "A. $41\\text{ kg}$",
      "B. $42\\text{ kg}$",
      "C. $43\\text{ kg}$",
      "D. $44\\text{ kg}$"
    ],
    "correct_option": "B",
    "explanation": "Cân nặng trung bình được tính bằng: $(40 + 42 + 44) / 3 = 126 / 3 = 42\\text{ kg}$."
  },
  {
    "id": "Q_MOD_A_017",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một cửa hàng thời trang giảm giá một chiếc áo từ $200$ nghìn đồng xuống còn $160$ nghìn đồng. Chiếc áo này đã được giảm giá bao nhiêu phần trăm?",
    "options": [
      "A. $10\\%$",
      "B. $15\\%$",
      "C. $20\\%$",
      "D. $25\\%$"
    ],
    "correct_option": "C",
    "explanation": "Số tiền được giảm là: $200 - 160 = 40$ nghìn đồng. Phần trăm giảm giá là: $(40 / 200) \\times 100\\% = 20\\%$."
  },
  {
    "id": "Q_MOD_A_018",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một học sinh mua $3$ quyển vở với giá $10$ nghìn đồng mỗi quyển và $1$ chiếc bút với giá $5$ nghìn đồng. Tổng số tiền học sinh đó phải trả là bao nhiêu?",
    "options": [
      "A. $30$ nghìn.",
      "B. $35$ nghìn.",
      "C. $40$ nghìn.",
      "D. $45$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Tổng số tiền học sinh phải trả là: $(3 \\times 10) + 5 = 30 + 5 = 35$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_019",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Gieo một con xúc xắc cân đối và đồng chất $6$ mặt (từ $1$ đến $6$ chấm). Xác suất để gieo được mặt có số chấm là số chẵn (các số $2, 4, 6$) bằng bao nhiêu?",
    "options": [
      "A. $1/2$",
      "B. $1/3$",
      "C. $1/4$",
      "D. $1/6$"
    ],
    "correct_option": "A",
    "explanation": "Các mặt có số chấm chẵn là $2, 4, 6$ (gồm 3 mặt). Tổng số mặt của xúc xắc là 6. Xác suất gieo được mặt chẵn là: $3/6 = 1/2$."
  },
  {
    "id": "Q_MOD_A_020",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một nhóm gồm $5$ sinh viên cùng nhau làm một bài tập lớn và nhận được phần thưởng trị giá $500$ nghìn đồng. Nếu chia đều số tiền này, mỗi sinh viên sẽ được bao nhiêu?",
    "options": [
      "A. $80$ nghìn.",
      "B. $90$ nghìn.",
      "C. $100$ nghìn.",
      "D. $110$ nghìn."
    ],
    "correct_option": "C",
    "explanation": "Số tiền mỗi sinh viên nhận được sau khi chia đều là: $500 / 5 = 100$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_021",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Trong lớp học có $40$ học sinh, trong đó có $60\\%$ là học sinh nữ. Số học sinh nữ của lớp học đó là bao nhiêu?",
    "options": [
      "A. $22$ bạn nữ.",
      "B. $24$ bạn nữ.",
      "C. $26$ bạn nữ.",
      "D. $28$ bạn nữ."
    ],
    "correct_option": "B",
    "explanation": "Số học sinh nữ của lớp học là: $40 \\times 60\\% = 40 \\times 0.6 = 24$ học sinh nữ."
  },
  {
    "id": "Q_MOD_A_022",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Điểm số của 4 thành viên trong một đội chơi trò chơi lần lượt là $10$, $12$, $14$ và $16$. Điểm số trung bình của các thành viên trong đội này là bao nhiêu?",
    "options": [
      "A. $11$ điểm.",
      "B. $12$ điểm.",
      "C. $13$ điểm.",
      "D. $14$ điểm."
    ],
    "correct_option": "C",
    "explanation": "Điểm số trung bình của đội là: $(10 + 12 + 14 + 16) / 4 = 52 / 4 = 13$ điểm."
  },
  {
    "id": "Q_MOD_A_023",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Trong một ngăn kéo có $4$ chiếc bút đen và $6$ chiếc bút xanh. Bạn nhắm mắt và lấy ngẫu nhiên ra $1$ chiếc bút. Xác suất lấy được chiếc bút màu xanh là bao nhiêu?",
    "options": [
      "A. $0.4$",
      "B. $0.5$",
      "C. $0.6$",
      "D. $0.7$"
    ],
    "correct_option": "C",
    "explanation": "Tổng số bút trong ngăn kéo là: $4 + 6 = 10$ chiếc. Xác suất để lấy được chiếc bút màu xanh là: $6 / 10 = 0.6$."
  },
  {
    "id": "Q_MOD_A_024",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "activation-functions"
    ],
    "content": "Một trang web tin tức nhận được $150$ lượt truy cập trong giờ đầu tiên và $250$ lượt truy cập trong giờ thứ hai. Tổng số lượt truy cập trang web nhận được sau hai giờ là bao nhiêu?",
    "options": [
      "A. $360$ lượt.",
      "B. $380$ lượt.",
      "C. $400$ lượt.",
      "D. $420$ lượt."
    ],
    "correct_option": "C",
    "explanation": "Tổng số lượt truy cập trang web sau hai giờ được tính bằng phép cộng đơn giản: $150 + 250 = 400$ lượt."
  },
  {
    "id": "Q_MOD_A_025",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một chiếc máy tính xách tay có giá $15$ triệu đồng. Nếu cửa hàng áp dụng mức thuế VAT là $10\\%$, số tiền thuế VAT mà người mua phải trả thêm cho chiếc máy tính này là bao nhiêu?",
    "options": [
      "A. $1.0$ triệu.",
      "B. $1.5$ triệu.",
      "C. $2.0$ triệu.",
      "D. $2.5$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền thuế VAT được tính bằng: $15 \\times 10\\% = 15 \\times 0.1 = 1.5$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_026",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Nếu bạn mua 5 chiếc bánh ngọt với giá 12 nghìn đồng mỗi chiếc, bạn phải trả tổng cộng bao nhiêu tiền?",
    "options": [
      "A. 50 nghìn.",
      "B. 60 nghìn.",
      "C. 70 nghìn.",
      "D. 80 nghìn."
    ],
    "correct_option": "B",
    "explanation": "Tổng số tiền phải trả được tính bằng phép nhân đơn giản: $5 \\times 12 = 60$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_027",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một bình chứa nước có dung tích tối đa là 20 lít. Hiện tại nước trong bình đang chiếm $40\\%$ dung tích. Trong bình hiện có bao nhiêu lít nước?",
    "options": [
      "A. 6 lít nước.",
      "B. 8 lít nước.",
      "C. 10 lít nước.",
      "D. 12 lít nước."
    ],
    "correct_option": "B",
    "explanation": "Số lít nước hiện có trong bình là: $20 \\times 40\\% = 20 \\times 0.4 = 8$ lít nước."
  },
  {
    "id": "Q_MOD_A_028",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một đồng xu cân đối và đồng chất được tung lên. Xác suất để đồng xu xuất hiện mặt sấp (S) là bao nhiêu?",
    "options": [
      "A. $1/4$",
      "B. $1/2$",
      "C. $3/4$",
      "D. $1/3$"
    ],
    "correct_option": "B",
    "explanation": "Đồng xu có 2 mặt (Sấp và Ngửa) với khả năng xuất hiện như nhau. Do đó, xác suất xuất hiện mặt sấp là $1/2$."
  },
  {
    "id": "Q_MOD_A_029",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một vận động viên chạy cự ly ngắn trong 3 lần chạy thử đạt thành tích lần lượt là $10$ giây, $11$ giây và $12$ giây. Thời gian chạy trung bình của vận động viên này là bao nhiêu?",
    "options": [
      "A. $10$ giây.",
      "B. $11$ giây.",
      "C. $12$ giây.",
      "D. $13$ giây."
    ],
    "correct_option": "B",
    "explanation": "Thời gian chạy trung bình cộng là: $(10 + 11 + 12) / 3 = 33 / 3 = 11$ giây."
  },
  {
    "id": "Q_MOD_A_030",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một cửa hàng có $120$ quả táo. Sau một ngày bán hàng, cửa hàng còn lại $45$ quả táo. Hỏi cửa hàng đã bán được bao nhiêu quả táo?",
    "options": [
      "A. $65$ quả.",
      "B. $75$ quả.",
      "C. $85$ quả.",
      "D. $95$ quả."
    ],
    "correct_option": "B",
    "explanation": "Số quả táo cửa hàng đã bán được là: $120 - 45 = 75$ quả táo."
  },
  {
    "id": "Q_MOD_A_031",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "activation-functions"
    ],
    "content": "Một nhân viên văn phòng có mức lương là 10 triệu đồng mỗi tháng. Người này quyết định tiết kiệm $20\\%$ mức lương của mình. Số tiền tiết kiệm mỗi tháng là bao nhiêu?",
    "options": [
      "A. $1.0$ triệu.",
      "B. $2.0$ triệu.",
      "C. $3.0$ triệu.",
      "D. $4.0$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền tiết kiệm mỗi tháng được tính bằng: $10 \\times 20\\% = 10 \\times 0.2 = 2$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_032",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Gieo một con xúc xắc cân đối và đồng chất 6 mặt. Xác suất để gieo được mặt có số chấm là số lẻ (các số $1, 3, 5$) bằng bao nhiêu?",
    "options": [
      "A. $1/6$",
      "B. $2/6$",
      "C. $3/6$",
      "D. $4/6$"
    ],
    "correct_option": "C",
    "explanation": "Các mặt lẻ là $1, 3, 5$ (gồm 3 mặt). Tổng số mặt của xúc xắc là 6. Xác suất gieo được mặt có số chấm lẻ là: $3/6$."
  },
  {
    "id": "Q_MOD_A_033",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một lớp học trực tuyến có $60$ học viên đăng ký ban đầu. Sau một tuần, có thêm $15$ học viên mới tham gia. Tổng số học viên hiện tại của lớp là bao nhiêu?",
    "options": [
      "A. $70$ người.",
      "B. $75$ người.",
      "C. $80$ người.",
      "D. $85$ người."
    ],
    "correct_option": "B",
    "explanation": "Tổng số học viên của lớp là: $60 + 15 = 75$ học viên."
  },
  {
    "id": "Q_MOD_A_034",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một nhóm bạn gồm 5 người có số tiền tiết kiệm lần lượt là $10$, $20$, $30$, $40$ và $50$ nghìn đồng. Số tiền tiết kiệm trung bình của mỗi người trong nhóm là bao nhiêu?",
    "options": [
      "A. $25$ nghìn.",
      "B. $30$ nghìn.",
      "C. $35$ nghìn.",
      "D. $40$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Số tiền tiết kiệm trung bình của mỗi người là: $(10 + 20 + 30 + 40 + 50) / 5 = 150 / 5 = 30$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_035",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một món đồ chơi có giá niêm yết là $50$ nghìn đồng. Người mua phải trả thêm phí giao hàng bằng $10\\%$ giá niêm yết của món đồ. Chi phí giao hàng là bao nhiêu?",
    "options": [
      "A. $4.0$ nghìn.",
      "B. $5.0$ nghìn.",
      "C. $6.0$ nghìn.",
      "D. $7.0$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Phí giao hàng được tính là: $50 \\times 10\\% = 50 \\times 0.1 = 5$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_036",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Trong một túi kẹo có chứa $8$ chiếc kẹo màu dâu và $2$ chiếc kẹo màu nho. Nếu lấy ngẫu nhiên một chiếc kẹo từ túi, xác suất lấy được kẹo màu dâu là bao nhiêu?",
    "options": [
      "A. $0.6$",
      "B. $0.7$",
      "C. $0.8$",
      "D. $0.9$"
    ],
    "correct_option": "C",
    "explanation": "Tổng số kẹo là: $8 + 2 = 10$ chiếc. Xác suất để chọn được kẹo màu dâu là: $8 / 10 = 0.8$."
  },
  {
    "id": "Q_MOD_A_037",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một xưởng sản xuất giày làm được $40$ đôi giày mỗi ngày. Sau $5$ ngày làm việc liên tục, xưởng đó sẽ sản xuất được tổng cộng bao nhiêu đôi giày?",
    "options": [
      "A. $180$ đôi.",
      "B. $200$ đôi.",
      "C. $220$ đôi.",
      "D. $240$ đôi."
    ],
    "correct_option": "B",
    "explanation": "Tổng số đôi giày sản xuất được sau $5$ ngày là: $40 \\times 5 = 200$ đôi."
  },
  {
    "id": "Q_MOD_A_038",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Nhiệt độ trung bình trong tuần của một thành phố được đo từ thứ Hai đến thứ Sáu (5 ngày) lần lượt là: $25, 27, 26, 28, 29$ độ C. Nhiệt độ trung bình của 5 ngày này là bao nhiêu?",
    "options": [
      "A. $26$ độ C.",
      "B. $27$ độ C.",
      "C. $28$ độ C.",
      "D. $29$ độ C."
    ],
    "correct_option": "B",
    "explanation": "Nhiệt độ trung bình cộng là: $(25 + 27 + 26 + 28 + 29) / 5 = 135 / 5 = 27$ độ C."
  },
  {
    "id": "Q_MOD_A_039",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một cuốn sách có giá bìa là 80 nghìn đồng. Vào ngày lễ, cửa hàng sách áp dụng chương trình giảm giá $25\\%$. Cuốn sách đó được giảm giá bao nhiêu tiền?",
    "options": [
      "A. 15 nghìn.",
      "B. 20 nghìn.",
      "C. 25 nghìn.",
      "D. 30 nghìn."
    ],
    "correct_option": "B",
    "explanation": "Số tiền được giảm giá của cuốn sách là: $80 \\times 25\\% = 80 \\times 0.25 = 20$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_040",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một công ty muốn đóng gói 120 món quà vào các hộp quà, mỗi hộp chứa đúng 6 món quà. Hỏi công ty cần chuẩn bị bao nhiêu hộp quà như thế?",
    "options": [
      "A. 15 hộp quà.",
      "B. 20 hộp quà.",
      "C. 25 hộp quà.",
      "D. 30 hộp quà."
    ],
    "correct_option": "B",
    "explanation": "Số lượng hộp quà cần chuẩn bị được tính bằng phép chia: $120 / 6 = 20$ hộp quà."
  },
  {
    "id": "Q_MOD_A_041",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Khi gieo một con xúc xắc 6 mặt cân đối và đồng chất, xác suất để gieo được mặt có số chấm lớn hơn $4$ (tức là mặt 5 và mặt 6) bằng bao nhiêu?",
    "options": [
      "A. $1/6$",
      "B. $2/6$",
      "C. $3/6$",
      "D. $4/6$"
    ],
    "correct_option": "B",
    "explanation": "Có 2 mặt thỏa mãn là mặt 5 và mặt 6. Tổng số mặt là 6. Do đó xác suất gieo được số chấm lớn hơn $4$ là $2/6$."
  },
  {
    "id": "Q_MOD_A_042",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Trong một hộp linh kiện có $50$ sản phẩm, người ta phát hiện có $2$ sản phẩm bị lỗi. Tỷ lệ sản phẩm lỗi trong hộp này chiếm bao nhiêu phần trăm?",
    "options": [
      "A. $2\\%$",
      "B. $4\\%$",
      "C. $6\\%$",
      "D. $8\\%$"
    ],
    "correct_option": "B",
    "explanation": "Tỷ lệ phần trăm sản phẩm bị lỗi là: $(2 / 50) \\times 100\\% = 0.04 \\times 100\\% = 4\\%$."
  },
  {
    "id": "Q_MOD_A_043",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một người đi xe máy đi được quãng đường $90\\text{ km}$ trong vòng $2$ giờ. Vận tốc trung bình của người đi xe máy đó là bao nhiêu?",
    "options": [
      "A. $40\\text{ km/h}$",
      "B. $45\\text{ km/h}$",
      "C. $50\\text{ km/h}$",
      "D. $55\\text{ km/h}$"
    ],
    "correct_option": "B",
    "explanation": "Vận tốc trung bình được tính bằng quãng đường chia cho thời gian: $90 / 2 = 45\\text{ km/h}$."
  },
  {
    "id": "Q_MOD_A_044",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "statistics"
    ],
    "content": "Điểm số thi môn Tiếng Anh của 4 học sinh lần lượt là $5$, $7$, $8$ và $10$. Điểm số trung bình cộng môn Tiếng Anh của nhóm học sinh này là bao nhiêu?",
    "options": [
      "A. $6.5$ điểm.",
      "B. $7.5$ điểm.",
      "C. $8.5$ điểm.",
      "D. $9.0$ điểm."
    ],
    "correct_option": "B",
    "explanation": "Điểm trung bình = $(5 + 7 + 8 + 10) \\div 4 = 30 \\div 4 = 7.5$ điểm."
  },
  {
    "id": "Q_MOD_A_045",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "statistics"
    ],
    "content": "Một lớp học có $30$ học sinh, trong đó $60\\%$ là nữ. Số học sinh nữ trong lớp là bao nhiêu?",
    "options": [
      "A. $12$ học sinh nữ.",
      "B. $15$ học sinh nữ.",
      "C. $18$ học sinh nữ.",
      "D. $20$ học sinh nữ."
    ],
    "correct_option": "C",
    "explanation": "Số học sinh nữ = $30 \\times 60\\% = 30 \\times 0.6 = 18$ học sinh nữ."
  },
  {
    "id": "Q_MOD_A_046",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "arithmetic"
    ],
    "content": "Một cửa hàng có $200$ sản phẩm. Sau khi bán được $75\\%$ số sản phẩm, cửa hàng còn lại bao nhiêu sản phẩm?",
    "options": [
      "A. $40$ sản phẩm.",
      "B. $50$ sản phẩm.",
      "C. $60$ sản phẩm.",
      "D. $75$ sản phẩm."
    ],
    "correct_option": "B",
    "explanation": "Số sản phẩm đã bán = $200 \\times 75\\% = 150$. Số còn lại = $200 - 150 = 50$ sản phẩm."
  },
  {
    "id": "Q_MOD_A_047",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "arithmetic"
    ],
    "content": "Một xe đạp đi được $15$ km trong $1$ giờ. Hỏi trong $3$ giờ xe đó đi được bao nhiêu km?",
    "options": [
      "A. $30$ km.",
      "B. $40$ km.",
      "C. $45$ km.",
      "D. $50$ km."
    ],
    "correct_option": "C",
    "explanation": "Quãng đường đi được = $15 \\times 3 = 45$ km."
  },
  {
    "id": "Q_MOD_A_048",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Tung một con súc sắc cân đối. Xác suất để mặt xuất hiện có số chấm là số chẵn là bao nhiêu?",
    "options": [
      "A. $\\frac{1}{6}$",
      "B. $\\frac{1}{3}$",
      "C. $\\frac{1}{2}$",
      "D. $\\frac{2}{3}$"
    ],
    "correct_option": "C",
    "explanation": "Các mặt số chẵn là: 2, 4, 6 (có 3 mặt). Xác suất = $\\frac{3}{6} = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_049",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "arithmetic"
    ],
    "content": "Một bình nước có dung tích $2.5$ lít. Nếu mỗi lần uống $250$ ml, hỏi uống bao nhiêu lần thì hết bình?",
    "options": [
      "A. $8$ lần.",
      "B. $10$ lần.",
      "C. $12$ lần.",
      "D. $15$ lần."
    ],
    "correct_option": "B",
    "explanation": "$2.5$ lít = $2500$ ml. Số lần uống = $2500 \\div 250 = 10$ lần."
  },
  {
    "id": "Q_MOD_A_050",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "statistics"
    ],
    "content": "Dãy số sau: $2, 4, 6, 8, 10$. Giá trị trung bình cộng của dãy số này là bao nhiêu?",
    "options": [
      "A. $4$",
      "B. $5$",
      "C. $6$",
      "D. $7$"
    ],
    "correct_option": "C",
    "explanation": "Trung bình cộng = $(2+4+6+8+10) \\div 5 = 30 \\div 5 = 6$."
  },
  {
    "id": "Q_MOD_A_051",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một máy in có thể in được $25$ trang giấy mỗi phút. Hỏi nếu máy in đó hoạt động liên tục trong $8$ phút thì in được bao nhiêu trang giấy?",
    "options": [
      "A. $180$ trang.",
      "B. $200$ trang.",
      "C. $220$ trang.",
      "D. $240$ trang."
    ],
    "correct_option": "B",
    "explanation": "Tổng số trang giấy in được trong $8$ phút là: $25 \\times 8 = 200$ trang."
  },
  {
    "id": "Q_MOD_A_052",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một bể nước chứa được tối đa $500$ lít nước. Hiện tại bể đang chứa lượng nước bằng $60\\%$ dung tích của bể. Lượng nước hiện có trong bể là bao nhiêu lít?",
    "options": [
      "A. $250$ lít.",
      "B. $300$ lít.",
      "C. $350$ lít.",
      "D. $400$ lít."
    ],
    "correct_option": "B",
    "explanation": "Lượng nước có trong bể là: $500 \\times 60\\% = 500 \\times 0.6 = 300$ lít nước."
  },
  {
    "id": "Q_MOD_A_053",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một trò chơi bốc thăm có $10$ tấm thẻ được đánh số từ $1$ đến $10$. Lấy ngẫu nhiên $1$ tấm thẻ. Xác suất để lấy được tấm thẻ ghi số $7$ là bao nhiêu?",
    "options": [
      "A. $0.1$",
      "B. $0.2$",
      "C. $0.3$",
      "D. $0.4$"
    ],
    "correct_option": "A",
    "explanation": "Có $10$ tấm thẻ có khả năng lấy được như nhau. Chỉ có $1$ thẻ ghi số $7$. Xác suất lấy được thẻ số $7$ là: $1/10 = 0.1$."
  },
  {
    "id": "Q_MOD_A_054",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Số lượng tin nhắn một người nhận được trong 3 ngày lần lượt là $12$, $15$ và $18$ tin nhắn. Số tin nhắn trung bình nhận được mỗi ngày của người đó là bao nhiêu?",
    "options": [
      "A. $13$ tin.",
      "B. $15$ tin.",
      "C. $17$ tin.",
      "D. $19$ tin."
    ],
    "correct_option": "B",
    "explanation": "Số tin nhắn trung bình mỗi ngày là: $(12 + 15 + 18) / 3 = 45 / 3 = 15$ tin nhắn."
  },
  {
    "id": "Q_MOD_A_055",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một cửa hàng điện máy bán được $150$ chiếc tivi trong tháng Giêng và bán được $180$ chiếc tivi trong tháng Hai. Tổng số tivi bán được trong hai tháng đó là bao nhiêu?",
    "options": [
      "A. $310$ chiếc.",
      "B. $330$ chiếc.",
      "C. $350$ chiếc.",
      "D. $370$ chiếc."
    ],
    "correct_option": "B",
    "explanation": "Tổng số tivi bán được trong cả hai tháng là: $150 + 180 = 330$ chiếc."
  },
  {
    "id": "Q_MOD_A_056",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một chiếc tai nghe bluetooth có giá bán chưa thuế là $400$ nghìn đồng. Thuế giá trị gia tăng VAT của chiếc tai nghe là $10\\%$. Số tiền thuế VAT của sản phẩm này là bao nhiêu?",
    "options": [
      "A. $30$ nghìn.",
      "B. $40$ nghìn.",
      "C. $50$ nghìn.",
      "D. $60$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Số tiền thuế VAT của chiếc tai nghe là: $400 \\times 10\\% = 400 \\times 0.1 = 40$ nghìn đồng."
  },
  {
    "id": "Q_MOD_A_057",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một chiếc hộp chứa $6$ viên bi màu vàng và $4$ viên bi màu đỏ. Nếu bốc ngẫu nhiên một viên bi từ hộp, xác suất để bốc được viên bi màu vàng là bao nhiêu?",
    "options": [
      "A. $0.4$",
      "B. $0.6$",
      "C. $0.8$",
      "D. $1.0$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số bi trong hộp là $6 + 4 = 10$ viên. Số bi vàng là $6$. Xác suất bốc được viên bi vàng là: $6/10 = 0.6$."
  },
  {
    "id": "Q_MOD_A_058",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Chiều cao của 4 cây con trong vườn lần lượt đo được là $8\\text{ cm}$, $10\\text{ cm}$, $12\\text{ cm}$ và $14\\text{ cm}$. Chiều cao trung bình của 4 cây con này là bao nhiêu?",
    "options": [
      "A. $10\\text{ cm}$",
      "B. $11\\text{ cm}$",
      "C. $12\\text{ cm}$",
      "D. $13\\text{ cm}$"
    ],
    "correct_option": "B",
    "explanation": "Chiều cao trung bình của 4 cây con là: $(8 + 10 + 12 + 14) / 4 = 44 / 4 = 11\\text{ cm}$."
  },
  {
    "id": "Q_MOD_A_059",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một bình gas có trọng lượng ban đầu chứa đầy gas là $13\\text{ kg}$. Sau một thời gian sử dụng, gas bị tiêu hao hết $5\\text{ kg}$. Trọng lượng còn lại của bình gas là bao nhiêu?",
    "options": [
      "A. $6\\text{ kg}$",
      "B. $8\\text{ kg}$",
      "C. $7\\text{ kg}$",
      "D. $9\\text{ kg}$"
    ],
    "correct_option": "B",
    "explanation": "Trọng lượng còn lại của bình gas được tính bằng phép trừ: $13 - 5 = 8\\text{ kg}$."
  },
  {
    "id": "Q_MOD_A_060",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Bạn gửi tiết kiệm $100$ triệu đồng vào ngân hàng với lãi suất $6\\%$ một năm. Sau một năm, số tiền lãi bạn nhận được từ ngân hàng là bao nhiêu?",
    "options": [
      "A. $4.0$ triệu.",
      "B. $6.0$ triệu.",
      "C. $5.0$ triệu.",
      "D. $7.0$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền lãi sau một năm gửi tiết kiệm là: $100 \\times 6\\% = 100 \\times 0.06 = 6$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_061",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một nhóm học sinh có $3$ bạn nam và $7$ bạn nữ. Chọn ngẫu nhiên một bạn làm lớp trưởng. Xác suất chọn trúng một bạn nam làm lớp trưởng là bao nhiêu?",
    "options": [
      "A. $0.1$",
      "B. $0.3$",
      "C. $0.5$",
      "D. $0.7$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số học sinh là $3 + 7 = 10$ bạn. Số bạn nam là $3$. Xác suất chọn trúng một bạn nam là: $3 / 10 = 0.3$."
  },
  {
    "id": "Q_MOD_A_062",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một đội công nhân cần sửa quãng đường dài $150\\text{ m}$ trong $5$ ngày. Hỏi trung bình mỗi ngày đội công nhân đó phải sửa bao nhiêu mét đường?",
    "options": [
      "A. $25\\text{ m}$",
      "B. $30\\text{ m}$",
      "C. $35\\text{ m}$",
      "D. $40\\text{ m}$"
    ],
    "correct_option": "B",
    "explanation": "Trung bình mỗi ngày đội phải sửa số mét đường là: $150 / 5 = 30\\text{ m}$."
  },
  {
    "id": "Q_MOD_A_063",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Số điểm đạt được của một người chơi qua 3 ván game lần lượt là $80$ điểm, $90$ điểm và $100$ điểm. Số điểm trung bình của người đó qua 3 ván game là bao nhiêu?",
    "options": [
      "A. $85$ điểm.",
      "B. $90$ điểm.",
      "C. $95$ điểm.",
      "D. $80$ điểm."
    ],
    "correct_option": "B",
    "explanation": "Điểm trung bình cộng qua 3 ván game của người chơi là: $(80 + 90 + 100) / 3 = 270 / 3 = 90$ điểm."
  },
  {
    "id": "Q_MOD_A_064",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Mua một món đồ điện tử giá $10$ triệu đồng, cửa hàng yêu cầu thanh toán trước $30\\%$ giá trị sản phẩm. Số tiền cần thanh toán trước là bao nhiêu?",
    "options": [
      "A. $2.0$ triệu.",
      "B. $3.0$ triệu.",
      "C. $4.0$ triệu.",
      "D. $5.0$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền cần thanh toán trước cho món đồ điện tử là: $10 \\times 30\\% = 10 \\times 0.3 = 3$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_065",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "activation-functions"
    ],
    "content": "Gieo một con xúc xắc 6 mặt cân đối và đồng chất. Xác suất gieo được mặt có số chấm nhỏ hơn $3$ (tức là mặt 1 hoặc mặt 2) bằng bao nhiêu?",
    "options": [
      "A. $1/6$",
      "B. $2/6$",
      "C. $3/6$",
      "D. $4/6$"
    ],
    "correct_option": "B",
    "explanation": "Các mặt có số chấm nhỏ hơn $3$ là mặt 1 và mặt 2 (gồm 2 mặt). Tổng số mặt của xúc xắc là 6. Xác suất gieo được là $2/6$."
  },
  {
    "id": "Q_MOD_A_066",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một cửa hàng sách bán được $45$ cuốn sách vào tuần thứ nhất và bán được $55$ cuốn sách vào tuần thứ hai. Tổng số sách cửa hàng bán được trong hai tuần là bao nhiêu?",
    "options": [
      "A. $90$ cuốn.",
      "B. $100$ cuốn.",
      "C. $110$ cuốn.",
      "D. $120$ cuốn."
    ],
    "correct_option": "B",
    "explanation": "Tổng số cuốn sách bán được trong cả hai tuần là: $45 + 55 = 100$ cuốn."
  },
  {
    "id": "Q_MOD_A_067",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Thời gian tự học mỗi ngày của một sinh viên trong 4 ngày lần lượt là $2$ giờ, $3$ giờ, $4$ giờ và $5$ giờ. Thời gian tự học trung bình mỗi ngày của sinh viên này là bao nhiêu?",
    "options": [
      "A. $3.0$ giờ.",
      "B. $3.5$ giờ.",
      "C. $4.0$ giờ.",
      "D. $4.5$ giờ."
    ],
    "correct_option": "B",
    "explanation": "Thời gian tự học trung bình cộng mỗi ngày là: $(2 + 3 + 4 + 5) / 4 = 14 / 4 = 3.5$ giờ."
  },
  {
    "id": "Q_MOD_A_068",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một cuốn sách dày $200$ trang. Bạn đã đọc được $15\\%$ tổng số trang sách của cuốn sách đó. Số trang sách bạn đã đọc được là bao nhiêu?",
    "options": [
      "A. $20$ trang.",
      "B. $30$ trang.",
      "C. $40$ trang.",
      "D. $50$ trang."
    ],
    "correct_option": "B",
    "explanation": "Số trang sách bạn đã đọc được là: $200 \\times 15\\% = 200 \\times 0.15 = 30$ trang."
  },
  {
    "id": "Q_MOD_A_069",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một hộp chứa $8$ quả bóng trắng và $2$ quả bóng đen có kích thước như nhau. Lấy ngẫu nhiên $1$ quả bóng từ hộp. Xác suất lấy được quả bóng đen là bao nhiêu?",
    "options": [
      "A. $0.1$",
      "B. $0.2$",
      "C. $0.3$",
      "D. $0.4$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số bóng trong hộp là $8 + 2 = 10$ quả. Xác suất để lấy được quả bóng đen là: $2 / 10 = 0.2$."
  },
  {
    "id": "Q_MOD_A_070",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một chiếc xe ô tô chở hàng thực hiện $5$ chuyến đi, mỗi chuyến chở được $12$ tấn hàng hóa. Tổng khối lượng hàng hóa ô tô đã chở được sau 5 chuyến là bao nhiêu?",
    "options": [
      "A. $50$ tấn.",
      "B. $60$ tấn.",
      "C. $70$ tấn.",
      "D. $80$ tấn."
    ],
    "correct_option": "B",
    "explanation": "Tổng khối lượng hàng hóa chở được sau 5 chuyến là: $5 \\times 12 = 60$ tấn."
  },
  {
    "id": "Q_MOD_A_071",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một lớp học có $50$ học sinh, trong đó có $8\\%$ học sinh đạt học lực xuất sắc. Hỏi lớp học đó có bao nhiêu học sinh đạt học lực xuất sắc?",
    "options": [
      "A. $2$ học sinh.",
      "B. $4$ học sinh.",
      "C. $6$ học sinh.",
      "D. $8$ học sinh."
    ],
    "correct_option": "B",
    "explanation": "Số học sinh đạt học lực xuất sắc của lớp học đó là: $50 \\times 8\\% = 50 \\times 0.08 = 4$ học sinh."
  },
  {
    "id": "Q_MOD_A_072",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Điểm số môn Hóa học của một nhóm 3 học sinh lần lượt là $6$, $8$ và $10$. Điểm số trung bình cộng môn Hóa học của nhóm học sinh này là bao nhiêu?",
    "options": [
      "A. $7.0$ điểm.",
      "B. $8.0$ điểm.",
      "C. $9.0$ điểm.",
      "D. $6.0$ điểm."
    ],
    "correct_option": "B",
    "explanation": "Điểm số trung bình cộng của 3 học sinh là: $(6 + 8 + 10) / 3 = 24 / 3 = 8$ điểm."
  },
  {
    "id": "Q_MOD_A_073",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Trong một hộp quà có chứa $4$ chiếc kẹo vị cam và $6$ chiếc kẹo vị táo. Nếu chọn ngẫu nhiên một chiếc kẹo, xác suất chọn được chiếc kẹo vị cam là bao nhiêu?",
    "options": [
      "A. $0.2$",
      "B. $0.4$",
      "C. $0.6$",
      "D. $0.8$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số chiếc kẹo là $4 + 6 = 10$ chiếc. Xác suất chọn được chiếc kẹo vị cam là: $4 / 10 = 0.4$."
  },
  {
    "id": "Q_MOD_A_074",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một bình nước đang chứa $15$ lít nước. Người ta đổ thêm vào bình $7$ lít nước nữa. Hỏi tổng lượng nước có trong bình sau khi đổ thêm là bao nhiêu lít?",
    "options": [
      "A. $20$ lít.",
      "B. $22$ lít.",
      "C. $24$ lít.",
      "D. $26$ lít."
    ],
    "correct_option": "B",
    "explanation": "Tổng lượng nước có trong bình sau khi đổ thêm là: $15 + 7 = 22$ lít nước."
  },
  {
    "id": "Q_MOD_A_075",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một cửa hàng thời trang áp dụng mức giảm giá $30\\%$ cho một đôi giày thể thao có giá gốc là $1$ triệu đồng. Đôi giày đó được giảm giá bao nhiêu tiền?",
    "options": [
      "A. $200$ nghìn.",
      "B. $300$ nghìn.",
      "C. $400$ nghìn.",
      "D. $500$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Số tiền được giảm giá của đôi giày thể thao là: $1,000,000 \\times 30\\% = 300,000$ đồng (tức là $300$ nghìn đồng)."
  },
  {
    "id": "Q_MOD_A_076",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một xưởng sản xuất may mặc may được $12$ chiếc áo sơ mi mỗi giờ. Nếu xưởng hoạt động liên tục trong $5$ giờ thì sản xuất được bao nhiêu chiếc áo?",
    "options": [
      "A. $50$ chiếc.",
      "B. $60$ chiếc.",
      "C. $70$ chiếc.",
      "D. $80$ chiếc."
    ],
    "correct_option": "B",
    "explanation": "Tổng số chiếc áo sơ mi sản xuất được trong $5$ giờ là: $12 \\times 5 = 60$ chiếc."
  },
  {
    "id": "Q_MOD_A_077",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một khu vườn trồng cây ăn quả có tổng cộng $200$ cây, trong đó có $40\\%$ là cây cam. Số cây cam có trong khu vườn đó là bao nhiêu cây?",
    "options": [
      "A. $60$ cây cam.",
      "B. $80$ cây cam.",
      "C. $70$ cây cam.",
      "D. $90$ cây cam."
    ],
    "correct_option": "B",
    "explanation": "Số cây cam có trong khu vườn là: $200 \\times 40\\% = 200 \\times 0.4 = 80$ cây cam."
  },
  {
    "id": "Q_MOD_A_078",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Khi gieo một đồng xu cân đối và đồng chất một lần, xác suất để đồng xu xuất hiện mặt sấp (S) là bao nhiêu?",
    "options": [
      "A. $25\\%$",
      "B. $50\\%$",
      "C. $75\\%$",
      "D. $90\\%$"
    ],
    "correct_option": "B",
    "explanation": "Đồng xu có 2 mặt (Sấp và Ngửa) với khả năng xuất hiện như nhau. Do đó, xác suất xuất hiện mặt sấp là $1/2 = 50\\%$."
  },
  {
    "id": "Q_MOD_A_079",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một người đi bộ trong 3 ngày đi được quãng đường lần lượt là $4\\text{ km}$, $5\\text{ km}$ và $6\\text{ km}$. Quãng đường trung bình mỗi ngày người đó đi được là bao nhiêu?",
    "options": [
      "A. $4\\text{ km}$",
      "B. $5\\text{ km}$",
      "C. $6\\text{ km}$",
      "D. $7\\text{ km}$"
    ],
    "correct_option": "B",
    "explanation": "Quãng đường trung bình mỗi ngày người đó đi được là: $(4 + 5 + 6) / 3 = 15 / 3 = 5\\text{ km}$."
  },
  {
    "id": "Q_MOD_A_080",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một xe khách khởi hành từ bến xe với $45$ hành khách. Tại trạm dừng chân thứ nhất, có $15$ hành khách xuống xe. Số hành khách còn lại trên xe là bao nhiêu?",
    "options": [
      "A. $25$ người.",
      "B. $30$ người.",
      "C. $35$ người.",
      "D. $40$ người."
    ],
    "correct_option": "B",
    "explanation": "Số hành khách còn lại trên xe là: $45 - 15 = 30$ người."
  },
  {
    "id": "Q_MOD_A_081",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một nhân viên thu ngân bán được lượng hàng trị giá $10$ triệu đồng. Cửa hàng áp dụng mức hoa hồng trích thưởng là $5\\%$. Số tiền hoa hồng nhân viên nhận được là bao nhiêu?",
    "options": [
      "A. $400$ nghìn.",
      "B. $500$ nghìn.",
      "C. $600$ nghìn.",
      "D. $700$ nghìn."
    ],
    "correct_option": "B",
    "explanation": "Số tiền hoa hồng nhận được là: $10 \\times 5\\% = 10 \\times 0.05 = 0.5$ triệu đồng (tức là $500$ nghìn đồng)."
  },
  {
    "id": "Q_MOD_A_082",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Gieo một con xúc xắc 6 mặt cân đối và đồng chất. Xác suất gieo được mặt có số chấm lớn hơn $5$ (tức là chỉ có mặt 6) bằng bao nhiêu?",
    "options": [
      "A. $1/6$",
      "B. $2/6$",
      "C. $3/6$",
      "D. $4/6$"
    ],
    "correct_option": "A",
    "explanation": "Chỉ có $1$ mặt thỏa mãn (mặt 6) trên tổng số $6$ mặt. Do đó xác suất gieo được là $1/6$."
  },
  {
    "id": "Q_MOD_A_083",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một công ty phân phối đều $120$ hộp sữa cho $4$ lớp học mẫu giáo. Mỗi lớp học mẫu giáo sẽ nhận được bao nhiêu hộp sữa?",
    "options": [
      "A. $25$ hộp sữa.",
      "B. $30$ hộp sữa.",
      "C. $35$ hộp sữa.",
      "D. $40$ hộp sữa."
    ],
    "correct_option": "B",
    "explanation": "Số hộp sữa mỗi lớp học mẫu giáo nhận được là: $120 / 4 = 30$ hộp."
  },
  {
    "id": "Q_MOD_A_084",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "activation-functions"
    ],
    "content": "Cân nặng của 5 giỏ hoa quả lần lượt đo được là $6\\text{ kg}$, $7\\text{ kg}$, $8\\text{ kg}$, $9\\text{ kg}$ và $10\\text{ kg}$. Cân nặng trung bình của 5 giỏ hoa quả này là bao nhiêu?",
    "options": [
      "A. $7\\text{ kg}$",
      "B. $8\\text{ kg}$",
      "C. $9\\text{ kg}$",
      "D. $6\\text{ kg}$"
    ],
    "correct_option": "B",
    "explanation": "Cân nặng trung bình của 5 giỏ hoa quả là: $(6 + 7 + 8 + 9 + 10) / 5 = 40 / 5 = 8\\text{ kg}$."
  },
  {
    "id": "Q_MOD_A_085",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một bình chứa nước dung tích tối đa là $80$ lít. Hiện tại bể chứa nước đang đầy $50\\%$ dung tích. Thể tích nước hiện có trong bình là bao nhiêu lít?",
    "options": [
      "A. $30$ lít nước.",
      "B. $40$ lít nước.",
      "C. $50$ lít nước.",
      "D. $60$ lít nước."
    ],
    "correct_option": "B",
    "explanation": "Thể tích nước hiện có trong bình là: $80 \\times 50\\% = 80 \\times 0.5 = 40$ lít nước."
  },
  {
    "id": "Q_MOD_A_086",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một chiếc hộp chứa $7$ viên bi màu trắng và $3$ viên bi màu vàng có kích thước như nhau. Lấy ngẫu nhiên $1$ viên bi. Xác suất lấy được viên bi màu vàng là bao nhiêu?",
    "options": [
      "A. $0.1$",
      "B. $0.3$",
      "C. $0.5$",
      "D. $0.7$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số viên bi trong hộp là $7 + 3 = 10$ viên. Xác suất lấy được viên bi màu vàng là: $3 / 10 = 0.3$."
  },
  {
    "id": "Q_MOD_A_087",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một học sinh viết được $20$ dòng nhật ký mỗi ngày. Hỏi sau $7$ ngày liên tục viết nhật ký, học sinh đó viết được tổng cộng bao nhiêu dòng?",
    "options": [
      "A. $120$ dòng.",
      "B. $140$ dòng.",
      "C. $160$ dòng.",
      "D. $180$ dòng."
    ],
    "correct_option": "B",
    "explanation": "Tổng số dòng nhật ký viết được sau $7$ ngày là: $20 \\times 7 = 140$ dòng."
  },
  {
    "id": "Q_MOD_A_088",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Điểm số đánh giá chất lượng dịch vụ của một nhà hàng trong 3 ngày lần lượt là $7$, $9$ và $8$ điểm. Điểm số đánh giá trung bình của nhà hàng là bao nhiêu?",
    "options": [
      "A. $6.0$ điểm.",
      "B. $8.0$ điểm.",
      "C. $7.0$ điểm.",
      "D. $9.0$ điểm."
    ],
    "correct_option": "B",
    "explanation": "Điểm số đánh giá trung bình cộng là: $(7 + 9 + 8) / 3 = 24 / 3 = 8$ điểm."
  },
  {
    "id": "Q_MOD_A_089",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Một chiếc máy tính cũ có giá bán lại là $5$ triệu đồng. Cửa hàng đồng ý giảm giá thêm $20\\%$ cho khách hàng. Số tiền khách hàng được giảm giá là bao nhiêu?",
    "options": [
      "A. $0.5$ triệu.",
      "B. $1.0$ triệu.",
      "C. $1.5$ triệu.",
      "D. $2.0$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền được giảm giá là: $5 \\times 20\\% = 5 \\times 0.2 = 1.0$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_090",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một túi chứa $9$ quả bóng màu vàng và $1$ quả bóng màu đỏ có kích thước như nhau. Lấy ngẫu nhiên $1$ quả bóng. Xác suất lấy được quả bóng màu đỏ là bao nhiêu?",
    "options": [
      "A. $0.05$",
      "B. $0.10$",
      "C. $0.15$",
      "D. $0.20$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số bóng trong túi là $9 + 1 = 10$ quả. Xác suất lấy được quả bóng màu đỏ là: $1 / 10 = 0.1$ (tức là $0.10$)."
  },
  {
    "id": "Q_MOD_A_091",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một bể bơi mini ban đầu đang chứa $60$ lít nước. Người ta bơm thêm vào bể $40$ lít nước nữa. Tổng số lít nước có trong bể sau khi bơm thêm là bao nhiêu?",
    "options": [
      "A. $80$ lít nước.",
      "B. $100$ lít nước.",
      "C. $120$ lít nước.",
      "D. $140$ lít nước."
    ],
    "correct_option": "B",
    "explanation": "Tổng số lít nước có trong bể sau khi bơm thêm là: $60 + 40 = 100$ lít nước."
  },
  {
    "id": "Q_MOD_A_092",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Thời gian hoàn thành một vòng chạy của 4 vận động viên lần lượt là $50$ giây, $52$ giây, $48$ giây và $50$ giây. Thời gian chạy trung bình của 4 vận động viên là bao nhiêu?",
    "options": [
      "A. $49$ giây.",
      "B. $50$ giây.",
      "C. $51$ giây.",
      "D. $52$ giây."
    ],
    "correct_option": "B",
    "explanation": "Thời gian chạy trung bình cộng của 4 vận động viên là: $(50 + 52 + 48 + 50) / 4 = 200 / 4 = 50$ giây."
  },
  {
    "id": "Q_MOD_A_093",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Một bình đựng sữa có dung tích tối đa là $2$ lít. Hiện tại lượng sữa trong bình đang chiếm $25\\%$ dung tích. Lượng sữa hiện có trong bình là bao nhiêu lít?",
    "options": [
      "A. $0.3$ lít sữa.",
      "B. $0.5$ lít sữa.",
      "C. $0.7$ lít sữa.",
      "D. $0.9$ lít sữa."
    ],
    "correct_option": "B",
    "explanation": "Lượng sữa hiện có trong bình là: $2 \\times 25\\% = 2 \\times 0.25 = 0.5$ lít sữa."
  },
  {
    "id": "Q_MOD_A_094",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một nhóm làm việc gồm có $4$ nhân viên nữ và $6$ nhân viên nam. Chọn ngẫu nhiên $1$ người làm nhóm trưởng. Xác suất chọn được một nhân viên nữ là bao nhiêu?",
    "options": [
      "A. $0.2$",
      "B. $0.4$",
      "C. $0.6$",
      "D. $0.8$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số nhân viên trong nhóm là $4 + 6 = 10$ người. Xác suất chọn được một nhân viên nữ là: $4 / 10 = 0.4$."
  },
  {
    "id": "Q_MOD_A_095",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "information-theory"
    ],
    "content": "Một trang web bán hàng trực tuyến nhận được $300$ đơn đặt hàng trong tuần thứ nhất và $400$ đơn đặt hàng trong tuần thứ hai. Tổng số đơn hàng sau hai tuần là bao nhiêu?",
    "options": [
      "A. $600$ đơn.",
      "B. $700$ đơn.",
      "C. $800$ đơn.",
      "D. $900$ đơn."
    ],
    "correct_option": "B",
    "explanation": "Tổng số đơn đặt hàng sau hai tuần được tính bằng phép cộng đơn giản: $300 + 400 = 700$ đơn hàng."
  },
  {
    "id": "Q_MOD_A_096",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Nhiệt độ phòng đo được vào buổi sáng là $22^\\circ\\text{C}$ và vào buổi chiều là $28^\\circ\\text{C}$. Nhiệt độ trung bình cộng của phòng trong ngày hôm đó là bao nhiêu?",
    "options": [
      "A. $24^\\circ\\text{C}$",
      "B. $25^\\circ\\text{C}$",
      "C. $26^\\circ\\text{C}$",
      "D. $27^\\circ\\text{C}$"
    ],
    "correct_option": "B",
    "explanation": "Nhiệt độ trung bình cộng trong ngày là: $(22 + 28) / 2 = 50 / 2 = 25^\\circ\\text{C}$."
  },
  {
    "id": "Q_MOD_A_097",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "probability-statistics"
    ],
    "content": "Một chiếc máy tính bảng có giá gốc là $6$ triệu đồng. Nhân dịp khai trương, cửa hàng thực hiện giảm giá $10\\%$ chiếc máy tính bảng đó. Số tiền được giảm giá là bao nhiêu?",
    "options": [
      "A. $0.4$ triệu.",
      "B. $0.6$ triệu.",
      "C. $0.8$ triệu.",
      "D. $1.0$ triệu."
    ],
    "correct_option": "B",
    "explanation": "Số tiền khách hàng được giảm giá là: $6 \\times 10\\% = 6 \\times 0.1 = 0.6$ triệu đồng."
  },
  {
    "id": "Q_MOD_A_098",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "matrix-operations"
    ],
    "content": "Trong một hộp phấn viết bảng có chứa $8$ viên phấn màu trắng và $2$ viên phấn màu đỏ. Chọn ngẫu nhiên $1$ viên phấn. Xác suất chọn trúng viên phấn màu đỏ là bao nhiêu?",
    "options": [
      "A. $0.1$",
      "B. $0.2$",
      "C. $0.3$",
      "D. $0.4$"
    ],
    "correct_option": "B",
    "explanation": "Tổng số viên phấn là $8 + 2 = 10$ viên. Xác suất chọn trúng viên phấn màu đỏ là: $2 / 10 = 0.2$."
  },
  {
    "id": "Q_MOD_A_099",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "information-theory"
    ],
    "content": "Một người thợ làm vườn trồng được $15$ cây hoa hồng mỗi ngày. Hỏi sau $6$ ngày làm vườn liên tục, người thợ đó trồng được tổng cộng bao nhiêu cây hoa hồng?",
    "options": [
      "A. $80$ cây hoa.",
      "B. $90$ cây hoa.",
      "C. $100$ cây hoa.",
      "D. $110$ cây hoa."
    ],
    "correct_option": "B",
    "explanation": "Tổng số cây hoa hồng người thợ đó trồng được sau $6$ ngày là: $15 \\times 6 = 90$ cây."
  },
  {
    "id": "Q_MOD_A_100",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "linear-algebra"
    ],
    "content": "Một đội tuyển bóng đá tham gia thi đấu $20$ trận trong mùa giải và đã giành chiến thắng $70\\%$ số trận đấu đó. Hỏi đội tuyển đã giành chiến thắng bao nhiêu trận đấu?",
    "options": [
      "A. $12$ trận thắng.",
      "B. $14$ trận thắng.",
      "C. $16$ trận thắng.",
      "D. $18$ trận thắng."
    ],
    "correct_option": "B",
    "explanation": "Số trận thắng đội tuyển giành được trong mùa giải là: $20 \\times 70\\% = 20 \\times 0.7 = 14$ trận thắng."
  },
  {
    "id": "Q_MOD_A_101",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (2x^2 + 3x) \\, dx$.",
    "options": [
      "A. $I = \\frac{34}{3}$",
      "B. $I = \\frac{35}{3}$",
      "C. $I = \\frac{33}{3}$",
      "D. $I = \\frac{36}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{2}{3}x^3 + \\frac{3}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{2}{3}(2)^3 + \\frac{3}{2}(2)^2\\right) - 0 = \\frac{16}{3} + 6 = \\frac{34}{3}$."
  },
  {
    "id": "Q_MOD_A_102",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/3} \\sin(3x) \\, dx$.",
    "options": [
      "A. $I = \\frac{2}{3}$",
      "B. $I = \\frac{1}{3}$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(3x)$ là $F(x) = -\\frac{\\cos(3x)}{3}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/3) - F(0) = -\\frac{\\cos(\\pi)}{3} - \\left(-\\frac{\\cos(0)}{3}\\right) = \\frac{1}{3} + \\frac{1}{3} = \\frac{2}{3}$."
  },
  {
    "id": "Q_MOD_A_103",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{3x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^3 - 1}{3}$",
      "B. $I = e^3 - 1$",
      "C. $I = \\frac{e^3}{3}$",
      "D. $I = \\frac{e^3 + 1}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{3x}$ là $F(x) = \\frac{1}{3}e^{3x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^3 - 1}{3}$."
  },
  {
    "id": "Q_MOD_A_104",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} \\frac{1}{x + 2} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(\\frac{4}{2}\\right)$",
      "B. $I = \\ln(4)$",
      "C. $I = \\ln(2)$",
      "D. $I = \\frac{1}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+2}$ là $F(x) = \\ln|x+2|$. Áp dụng công thức: $I = \\ln|2+2| - \\ln|0+2| = \\ln(4) - \\ln(2) = \\ln\\left(\\frac{4}{2}\\right)$."
  },
  {
    "id": "Q_MOD_A_105",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_106",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (1x^2 + 4x) \\, dx$.",
    "options": [
      "A. $I = \\frac{32}{3}$",
      "B. $I = \\frac{33}{3}$",
      "C. $I = \\frac{31}{3}$",
      "D. $I = \\frac{34}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{1}{3}x^3 + \\frac{4}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{1}{3}(2)^3 + \\frac{4}{2}(2)^2\\right) - 0 = \\frac{8}{3} + 8 = \\frac{32}{3}$."
  },
  {
    "id": "Q_MOD_A_107",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/2} \\sin(2x) \\, dx$.",
    "options": [
      "A. $I = \\frac{2}{2}$",
      "B. $I = \\frac{1}{2}$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(2x)$ là $F(x) = -\\frac{\\cos(2x)}{2}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/2) - F(0) = -\\frac{\\cos(\\pi)}{2} - \\left(-\\frac{\\cos(0)}{2}\\right) = \\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2}$."
  },
  {
    "id": "Q_MOD_A_108",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{2x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^2 - 1}{2}$",
      "B. $I = e^2 - 1$",
      "C. $I = \\frac{e^2}{2}$",
      "D. $I = \\frac{e^2 + 1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{2x}$ là $F(x) = \\frac{1}{2}e^{2x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^2 - 1}{2}$."
  },
  {
    "id": "Q_MOD_A_109",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{3} \\frac{1}{x + 1} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(4\\right)$",
      "B. $I = \\ln(4)$",
      "C. $I = \\ln(1)$",
      "D. $I = \\frac{1}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+1}$ là $F(x) = \\ln|x+1|$. Áp dụng công thức: $I = \\ln|3+1| - \\ln|0+1| = \\ln(4) - \\ln(1) = \\ln\\left(\\frac{4}{1}\\right)$."
  },
  {
    "id": "Q_MOD_A_110",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_111",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (3x^2 + 5x) \\, dx$.",
    "options": [
      "A. $I = 18$",
      "B. $I = 19$",
      "C. $I = 17$",
      "D. $I = \\frac{20}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{3}{3}x^3 + \\frac{5}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{3}{3}(2)^3 + \\frac{5}{2}(2)^2\\right) - 0 = \\frac{24}{3} + 10 = 18$."
  },
  {
    "id": "Q_MOD_A_112",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/1} \\sin(1x) \\, dx$.",
    "options": [
      "A. $I = 2$",
      "B. $I = 1$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{1}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(1x)$ là $F(x) = -\\frac{\\cos(1x)}{1}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/1) - F(0) = -\\frac{\\cos(\\pi)}{1} - \\left(-\\frac{\\cos(0)}{1}\\right) = \\frac{1}{1} + \\frac{1}{1} = \\frac{2}{1}$."
  },
  {
    "id": "Q_MOD_A_113",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{3x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^3 - 1}{3}$",
      "B. $I = e^3 - 1$",
      "C. $I = \\frac{e^3}{3}$",
      "D. $I = \\frac{e^3 + 1}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{3x}$ là $F(x) = \\frac{1}{3}e^{3x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^3 - 1}{3}$."
  },
  {
    "id": "Q_MOD_A_114",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} \\frac{1}{x + 3} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(\\frac{5}{3}\\right)$",
      "B. $I = \\ln(5)$",
      "C. $I = \\ln(3)$",
      "D. $I = \\frac{1}{5}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+3}$ là $F(x) = \\ln|x+3|$. Áp dụng công thức: $I = \\ln|2+3| - \\ln|0+3| = \\ln(5) - \\ln(3) = \\ln\\left(\\frac{5}{3}\\right)$."
  },
  {
    "id": "Q_MOD_A_115",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_116",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (2x^2 + 2x) \\, dx$.",
    "options": [
      "A. $I = \\frac{28}{3}$",
      "B. $I = \\frac{29}{3}$",
      "C. $I = \\frac{27}{3}$",
      "D. $I = \\frac{30}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{2}{3}x^3 + \\frac{2}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{2}{3}(2)^3 + \\frac{2}{2}(2)^2\\right) - 0 = \\frac{16}{3} + 4 = \\frac{28}{3}$."
  },
  {
    "id": "Q_MOD_A_117",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/3} \\sin(3x) \\, dx$.",
    "options": [
      "A. $I = \\frac{2}{3}$",
      "B. $I = \\frac{1}{3}$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(3x)$ là $F(x) = -\\frac{\\cos(3x)}{3}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/3) - F(0) = -\\frac{\\cos(\\pi)}{3} - \\left(-\\frac{\\cos(0)}{3}\\right) = \\frac{1}{3} + \\frac{1}{3} = \\frac{2}{3}$."
  },
  {
    "id": "Q_MOD_A_118",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{2x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^2 - 1}{2}$",
      "B. $I = e^2 - 1$",
      "C. $I = \\frac{e^2}{2}$",
      "D. $I = \\frac{e^2 + 1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{2x}$ là $F(x) = \\frac{1}{2}e^{2x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^2 - 1}{2}$."
  },
  {
    "id": "Q_MOD_A_119",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{3} \\frac{1}{x + 2} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(\\frac{5}{2}\\right)$",
      "B. $I = \\ln(5)$",
      "C. $I = \\ln(2)$",
      "D. $I = \\frac{1}{5}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+2}$ là $F(x) = \\ln|x+2|$. Áp dụng công thức: $I = \\ln|3+2| - \\ln|0+2| = \\ln(5) - \\ln(2) = \\ln\\left(\\frac{5}{2}\\right)$."
  },
  {
    "id": "Q_MOD_A_120",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_121",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (1x^2 + 3x) \\, dx$.",
    "options": [
      "A. $I = \\frac{26}{3}$",
      "B. $I = \\frac{27}{3}$",
      "C. $I = \\frac{25}{3}$",
      "D. $I = \\frac{28}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{1}{3}x^3 + \\frac{3}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{1}{3}(2)^3 + \\frac{3}{2}(2)^2\\right) - 0 = \\frac{8}{3} + 6 = \\frac{26}{3}$."
  },
  {
    "id": "Q_MOD_A_122",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/2} \\sin(2x) \\, dx$.",
    "options": [
      "A. $I = \\frac{2}{2}$",
      "B. $I = \\frac{1}{2}$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(2x)$ là $F(x) = -\\frac{\\cos(2x)}{2}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/2) - F(0) = -\\frac{\\cos(\\pi)}{2} - \\left(-\\frac{\\cos(0)}{2}\\right) = \\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2}$."
  },
  {
    "id": "Q_MOD_A_123",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{3x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^3 - 1}{3}$",
      "B. $I = e^3 - 1$",
      "C. $I = \\frac{e^3}{3}$",
      "D. $I = \\frac{e^3 + 1}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{3x}$ là $F(x) = \\frac{1}{3}e^{3x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^3 - 1}{3}$."
  },
  {
    "id": "Q_MOD_A_124",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} \\frac{1}{x + 1} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(3\\right)$",
      "B. $I = \\ln(3)$",
      "C. $I = \\ln(1)$",
      "D. $I = \\frac{1}{3}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+1}$ là $F(x) = \\ln|x+1|$. Áp dụng công thức: $I = \\ln|2+1| - \\ln|0+1| = \\ln(3) - \\ln(1) = \\ln\\left(\\frac{3}{1}\\right)$."
  },
  {
    "id": "Q_MOD_A_125",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_126",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{2} (3x^2 + 4x) \\, dx$.",
    "options": [
      "A. $I = 16$",
      "B. $I = 17$",
      "C. $I = 15$",
      "D. $I = \\frac{18}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Ta tìm nguyên hàm của hàm số: $F(x) = \\frac{3}{3}x^3 + \\frac{4}{2}x^2$. Áp dụng công thức Newton-Leibniz: $I = F(2) - F(0) = \\left(\\frac{3}{3}(2)^3 + \\frac{4}{2}(2)^2\\right) - 0 = \\frac{24}{3} + 8 = 16$."
  },
  {
    "id": "Q_MOD_A_127",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{\\pi/1} \\sin(1x) \\, dx$.",
    "options": [
      "A. $I = 2$",
      "B. $I = 1$",
      "C. $I = 0$",
      "D. $I = \\frac{\\pi}{1}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\sin(1x)$ là $F(x) = -\\frac{\\cos(1x)}{1}$. Áp dụng công thức Newton-Leibniz: $I = F(\\pi/1) - F(0) = -\\frac{\\cos(\\pi)}{1} - \\left(-\\frac{\\cos(0)}{1}\\right) = \\frac{1}{1} + \\frac{1}{1} = \\frac{2}{1}$."
  },
  {
    "id": "Q_MOD_A_128",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{1} e^{2x} \\, dx$.",
    "options": [
      "A. $I = \\frac{e^2 - 1}{2}$",
      "B. $I = e^2 - 1$",
      "C. $I = \\frac{e^2}{2}$",
      "D. $I = \\frac{e^2 + 1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $e^{2x}$ là $F(x) = \\frac{1}{2}e^{2x}$. Áp dụng công thức Newton-Leibniz: $I = F(1) - F(0) = \\frac{e^2 - 1}{2}$."
  },
  {
    "id": "Q_MOD_A_129",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định sau: $I = \\int_0^{3} \\frac{1}{x + 3} \\, dx$.",
    "options": [
      "A. $I = \\ln\\left(\\frac{6}{3}\\right)$",
      "B. $I = \\ln(6)$",
      "C. $I = \\ln(3)$",
      "D. $I = \\frac{1}{6}$"
    ],
    "correct_option": "A",
    "explanation": "Nguyên hàm của $\\frac{1}{x+3}$ là $F(x) = \\ln|x+3|$. Áp dụng công thức: $I = \\ln|3+3| - \\ln|0+3| = \\ln(6) - \\ln(3) = \\ln\\left(\\frac{6}{3}\\right)$."
  },
  {
    "id": "Q_MOD_A_130",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân xác định bằng phương pháp tích phân từng phần: $I = \\int_0^{1} x e^x \\, dx$.",
    "options": [
      "A. $I = 1$",
      "B. $I = e$",
      "C. $I = e - 1$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $u = x \\Rightarrow du = dx$ và $dv = e^x dx \\Rightarrow v = e^x$. Áp dụng công thức tích phân từng phần: $I = [x e^x]_0^1 - \\int_0^1 e^x dx = (1 \\cdot e^1 - 0) - [e^x]_0^1 = e - (e - 1) = 1$."
  },
  {
    "id": "Q_MOD_A_131",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_132",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_133",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_134",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_135",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_136",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_137",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_138",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_139",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_140",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_141",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_142",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_143",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_144",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_145",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_146",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_147",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_148",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Xác định tính hội tụ và tính giá trị tích phân suy rộng: $I = \\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx$.",
    "options": [
      "A. Tích phân hội tụ và $I = 2$",
      "B. Tích phân phân kỳ",
      "C. Tích phân hội tụ và $I = 1$",
      "D. Tích phân hội tụ và $I = \\frac{1}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân có điểm bất thường tại $x = 0$. Tính giới hạn: $I = \\lim_{{a \\to 0^+}} \\int_a^1 x^{-1/2} dx = \\lim_{{a \\to 0^+}} [2\\sqrt{x}]_a^1 = \\lim_{{a \\to 0^+}} (2 - 2\\sqrt{a}) = 2$."
  },
  {
    "id": "Q_MOD_A_149",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_{2}^{\\infty} \\frac{1}{x^2} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{2}$",
      "B. Tích phân phân kỳ",
      "C. $I = 2$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_{2}^{b} x^{-2} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{x}\\right]_{2}^{b} = \\lim_{b \\to \\infty} \\left(-\\frac{1}{b} + \\frac{1}{2}\\right) = \\frac{1}{2}$."
  },
  {
    "id": "Q_MOD_A_150",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân suy rộng sau: $I = \\int_0^{\\infty} e^{-4x} \\, dx$.",
    "options": [
      "A. $I = \\frac{1}{4}$",
      "B. $I = 4$",
      "C. Tích phân phân kỳ",
      "D. $I = 1$"
    ],
    "correct_option": "A",
    "explanation": "Tính giới hạn: $I = \\lim_{b \\to \\infty} \\int_0^b e^{-4x} \\, dx = \\lim_{b \\to \\infty} \\left[-\\frac{1}{4}e^{-4x}\\right]_0^b = \\lim_{b \\to \\infty} \\left(-\\frac{1}{4}e^{-4b} + \\frac{1}{4}\\right) = \\frac{1}{4}$."
  },
  {
    "id": "Q_MOD_A_151",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 1] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 3$",
      "C. $I = 0.5$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{1} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{1} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{1}{2} \\times \\frac{4}{2} = \\frac{1}{2} \\times 2 = 1$."
  },
  {
    "id": "Q_MOD_A_152",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_153",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 3] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 9$",
      "B. $I = 11$",
      "C. $I = 4.5$",
      "D. $I = 18$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{3} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{3} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{9}{2} \\times \\frac{4}{2} = \\frac{9}{2} \\times 2 = 9$."
  },
  {
    "id": "Q_MOD_A_154",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_155",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 2] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 4$",
      "B. $I = 6$",
      "C. $I = 2.0$",
      "D. $I = 8$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{2} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{2} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{4}{2} \\times \\frac{4}{2} = \\frac{4}{2} \\times 2 = 4$."
  },
  {
    "id": "Q_MOD_A_156",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_157",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 1] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 3$",
      "C. $I = 0.5$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{1} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{1} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{1}{2} \\times \\frac{4}{2} = \\frac{1}{2} \\times 2 = 1$."
  },
  {
    "id": "Q_MOD_A_158",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_159",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 3] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 9$",
      "B. $I = 11$",
      "C. $I = 4.5$",
      "D. $I = 18$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{3} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{3} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{9}{2} \\times \\frac{4}{2} = \\frac{9}{2} \\times 2 = 9$."
  },
  {
    "id": "Q_MOD_A_160",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_161",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 2] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 4$",
      "B. $I = 6$",
      "C. $I = 2.0$",
      "D. $I = 8$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{2} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{2} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{4}{2} \\times \\frac{4}{2} = \\frac{4}{2} \\times 2 = 4$."
  },
  {
    "id": "Q_MOD_A_162",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_163",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 1] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 3$",
      "C. $I = 0.5$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{1} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{1} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{1}{2} \\times \\frac{4}{2} = \\frac{1}{2} \\times 2 = 1$."
  },
  {
    "id": "Q_MOD_A_164",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_165",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 3] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 9$",
      "B. $I = 11$",
      "C. $I = 4.5$",
      "D. $I = 18$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{3} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{3} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{9}{2} \\times \\frac{4}{2} = \\frac{9}{2} \\times 2 = 9$."
  },
  {
    "id": "Q_MOD_A_166",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_167",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 2] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 4$",
      "B. $I = 6$",
      "C. $I = 2.0$",
      "D. $I = 8$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{2} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{2} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{4}{2} \\times \\frac{4}{2} = \\frac{4}{2} \\times 2 = 4$."
  },
  {
    "id": "Q_MOD_A_168",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_169",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp trên miền chữ nhật $D = [0, 1] \\times [0, 2]$: $I = \\iint_D x y \\, dx dy$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 3$",
      "C. $I = 0.5$",
      "D. $I = 2$"
    ],
    "correct_option": "A",
    "explanation": "Tích phân hai lớp trên miền chữ nhật có thể tách thành tích hai tích phân một lớp độc lập: $I = \\left(\\int_0^{1} x \\, dx\\right) \\times \\left(\\int_0^{2} y \\, dy\\right) = \\left[\\frac{x^2}{2}\\right]_0^{1} \\times \\left[\\frac{y^2}{2}\\right]_0^{2} = \\frac{1}{2} \\times \\frac{4}{2} = \\frac{1}{2} \\times 2 = 1$."
  },
  {
    "id": "Q_MOD_A_170",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau: $I = \\iint_D (x + y) \\, dx dy$ với miền $D = [0, 1] \\times [0, 1]$.",
    "options": [
      "A. $I = 1$",
      "B. $I = 2$",
      "C. $I = \\frac{1}{2}$",
      "D. $I = 0$"
    ],
    "correct_option": "A",
    "explanation": "Ta tính tích phân lần lượt: $I = \\int_0^1 \\left( \\int_0^1 (x+y) \\, dy \\right) dx = \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 dx = \\int_0^1 \\left( x + \\frac{1}{2} \\right) dx = \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1$."
  },
  {
    "id": "Q_MOD_A_171",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền $D$ giới hạn bởi hình tròn $x^2 + y^2 \\leq 16$ bằng cách sử dụng tích phân hai lớp $S = \\iint_D dx dy$.",
    "options": [
      "A. $S = 16\\pi$",
      "B. $S = 8\\pi$",
      "C. $S = 16\\pi^2$",
      "D. $S = \\frac{16\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển sang tọa độ cực với $r \\in [0, 4]$ và $\\theta \\in [0, 2\\pi]$, ta có: $S = \\int_0^{2\\pi} d\\theta \\int_0^{4} r \\, dr = 2\\pi \\left[\\frac{r^2}{2}\\right]_0^{4} = 2\\pi \\frac{16}{2} = 16\\pi$."
  },
  {
    "id": "Q_MOD_A_172",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau bằng cách chuyển sang tọa độ cực: $I = \\iint_D (x^2 + y^2) \\, dx dy$ với miền $D$ là hình tròn đơn vị $x^2 + y^2 \\leq 1$.",
    "options": [
      "A. $I = \\frac{\\pi}{2}$",
      "B. $I = \\pi$",
      "C. $I = 2\\pi$",
      "D. $I = \\frac{\\pi}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $x = r\\cos\\theta$, $y = r\\sin\\theta$, miền tích phân trở thành $r \\in [0, 1]$, $\\theta \\in [0, 2\\pi]$. Khi đó: $I = \\int_0^{2\\pi} d\\theta \\int_0^1 r^2 \\cdot r \\, dr = 2\\pi \\left[\\frac{r^4}{4}\\right]_0^1 = 2\\pi \\frac{1}{4} = \\frac{\\pi}{2}$."
  },
  {
    "id": "Q_MOD_A_173",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Khi chuyển tích phân hai lớp từ hệ tọa độ Đề-các $(x, y)$ sang hệ tọa độ cực $(r, \\theta)$ với công thức đổi biến $x = r\\cos\\theta$, $y = r\\sin\\theta$, phần tử diện tích $dx dy$ được thay thế bằng biểu thức nào sau đây?",
    "options": [
      "A. $r \\, dr d\\theta$",
      "B. $dr d\\theta$",
      "C. $r^2 dr d\\theta$",
      "D. $\\frac{1}{r} dr d\\theta$"
    ],
    "correct_option": "A",
    "explanation": "Trong phép đổi biến số tọa độ cực, định thức Jacobi là $J = \\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r$. Do đó, vi phân diện tích biến đổi thành: $dx dy = |J| dr d\\theta = r dr d\\theta$."
  },
  {
    "id": "Q_MOD_A_174",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền $D$ giới hạn bởi hình tròn $x^2 + y^2 \\leq 16$ bằng cách sử dụng tích phân hai lớp $S = \\iint_D dx dy$.",
    "options": [
      "A. $S = 16\\pi$",
      "B. $S = 8\\pi$",
      "C. $S = 16\\pi^2$",
      "D. $S = \\frac{16\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển sang tọa độ cực với $r \\in [0, 4]$ và $\\theta \\in [0, 2\\pi]$, ta có: $S = \\int_0^{2\\pi} d\\theta \\int_0^{4} r \\, dr = 2\\pi \\left[\\frac{r^2}{2}\\right]_0^{4} = 2\\pi \\frac{16}{2} = 16\\pi$."
  },
  {
    "id": "Q_MOD_A_175",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau bằng cách chuyển sang tọa độ cực: $I = \\iint_D (x^2 + y^2) \\, dx dy$ với miền $D$ là hình tròn đơn vị $x^2 + y^2 \\leq 1$.",
    "options": [
      "A. $I = \\frac{\\pi}{2}$",
      "B. $I = \\pi$",
      "C. $I = 2\\pi$",
      "D. $I = \\frac{\\pi}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $x = r\\cos\\theta$, $y = r\\sin\\theta$, miền tích phân trở thành $r \\in [0, 1]$, $\\theta \\in [0, 2\\pi]$. Khi đó: $I = \\int_0^{2\\pi} d\\theta \\int_0^1 r^2 \\cdot r \\, dr = 2\\pi \\left[\\frac{r^4}{4}\\right]_0^1 = 2\\pi \\frac{1}{4} = \\frac{\\pi}{2}$."
  },
  {
    "id": "Q_MOD_A_176",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Khi chuyển tích phân hai lớp từ hệ tọa độ Đề-các $(x, y)$ sang hệ tọa độ cực $(r, \\theta)$ với công thức đổi biến $x = r\\cos\\theta$, $y = r\\sin\\theta$, phần tử diện tích $dx dy$ được thay thế bằng biểu thức nào sau đây?",
    "options": [
      "A. $r \\, dr d\\theta$",
      "B. $dr d\\theta$",
      "C. $r^2 dr d\\theta$",
      "D. $\\frac{1}{r} dr d\\theta$"
    ],
    "correct_option": "A",
    "explanation": "Trong phép đổi biến số tọa độ cực, định thức Jacobi là $J = \\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r$. Do đó, vi phân diện tích biến đổi thành: $dx dy = |J| dr d\\theta = r dr d\\theta$."
  },
  {
    "id": "Q_MOD_A_177",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền $D$ giới hạn bởi hình tròn $x^2 + y^2 \\leq 16$ bằng cách sử dụng tích phân hai lớp $S = \\iint_D dx dy$.",
    "options": [
      "A. $S = 16\\pi$",
      "B. $S = 8\\pi$",
      "C. $S = 16\\pi^2$",
      "D. $S = \\frac{16\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển sang tọa độ cực với $r \\in [0, 4]$ và $\\theta \\in [0, 2\\pi]$, ta có: $S = \\int_0^{2\\pi} d\\theta \\int_0^{4} r \\, dr = 2\\pi \\left[\\frac{r^2}{2}\\right]_0^{4} = 2\\pi \\frac{16}{2} = 16\\pi$."
  },
  {
    "id": "Q_MOD_A_178",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau bằng cách chuyển sang tọa độ cực: $I = \\iint_D (x^2 + y^2) \\, dx dy$ với miền $D$ là hình tròn đơn vị $x^2 + y^2 \\leq 1$.",
    "options": [
      "A. $I = \\frac{\\pi}{2}$",
      "B. $I = \\pi$",
      "C. $I = 2\\pi$",
      "D. $I = \\frac{\\pi}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $x = r\\cos\\theta$, $y = r\\sin\\theta$, miền tích phân trở thành $r \\in [0, 1]$, $\\theta \\in [0, 2\\pi]$. Khi đó: $I = \\int_0^{2\\pi} d\\theta \\int_0^1 r^2 \\cdot r \\, dr = 2\\pi \\left[\\frac{r^4}{4}\\right]_0^1 = 2\\pi \\frac{1}{4} = \\frac{\\pi}{2}$."
  },
  {
    "id": "Q_MOD_A_179",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Khi chuyển tích phân hai lớp từ hệ tọa độ Đề-các $(x, y)$ sang hệ tọa độ cực $(r, \\theta)$ với công thức đổi biến $x = r\\cos\\theta$, $y = r\\sin\\theta$, phần tử diện tích $dx dy$ được thay thế bằng biểu thức nào sau đây?",
    "options": [
      "A. $r \\, dr d\\theta$",
      "B. $dr d\\theta$",
      "C. $r^2 dr d\\theta$",
      "D. $\\frac{1}{r} dr d\\theta$"
    ],
    "correct_option": "A",
    "explanation": "Trong phép đổi biến số tọa độ cực, định thức Jacobi là $J = \\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r$. Do đó, vi phân diện tích biến đổi thành: $dx dy = |J| dr d\\theta = r dr d\\theta$."
  },
  {
    "id": "Q_MOD_A_180",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền $D$ giới hạn bởi hình tròn $x^2 + y^2 \\leq 16$ bằng cách sử dụng tích phân hai lớp $S = \\iint_D dx dy$.",
    "options": [
      "A. $S = 16\\pi$",
      "B. $S = 8\\pi$",
      "C. $S = 16\\pi^2$",
      "D. $S = \\frac{16\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển sang tọa độ cực với $r \\in [0, 4]$ và $\\theta \\in [0, 2\\pi]$, ta có: $S = \\int_0^{2\\pi} d\\theta \\int_0^{4} r \\, dr = 2\\pi \\left[\\frac{r^2}{2}\\right]_0^{4} = 2\\pi \\frac{16}{2} = 16\\pi$."
  },
  {
    "id": "Q_MOD_A_181",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau bằng cách chuyển sang tọa độ cực: $I = \\iint_D (x^2 + y^2) \\, dx dy$ với miền $D$ là hình tròn đơn vị $x^2 + y^2 \\leq 1$.",
    "options": [
      "A. $I = \\frac{\\pi}{2}$",
      "B. $I = \\pi$",
      "C. $I = 2\\pi$",
      "D. $I = \\frac{\\pi}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $x = r\\cos\\theta$, $y = r\\sin\\theta$, miền tích phân trở thành $r \\in [0, 1]$, $\\theta \\in [0, 2\\pi]$. Khi đó: $I = \\int_0^{2\\pi} d\\theta \\int_0^1 r^2 \\cdot r \\, dr = 2\\pi \\left[\\frac{r^4}{4}\\right]_0^1 = 2\\pi \\frac{1}{4} = \\frac{\\pi}{2}$."
  },
  {
    "id": "Q_MOD_A_182",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Khi chuyển tích phân hai lớp từ hệ tọa độ Đề-các $(x, y)$ sang hệ tọa độ cực $(r, \\theta)$ với công thức đổi biến $x = r\\cos\\theta$, $y = r\\sin\\theta$, phần tử diện tích $dx dy$ được thay thế bằng biểu thức nào sau đây?",
    "options": [
      "A. $r \\, dr d\\theta$",
      "B. $dr d\\theta$",
      "C. $r^2 dr d\\theta$",
      "D. $\\frac{1}{r} dr d\\theta$"
    ],
    "correct_option": "A",
    "explanation": "Trong phép đổi biến số tọa độ cực, định thức Jacobi là $J = \\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r$. Do đó, vi phân diện tích biến đổi thành: $dx dy = |J| dr d\\theta = r dr d\\theta$."
  },
  {
    "id": "Q_MOD_A_183",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền $D$ giới hạn bởi hình tròn $x^2 + y^2 \\leq 16$ bằng cách sử dụng tích phân hai lớp $S = \\iint_D dx dy$.",
    "options": [
      "A. $S = 16\\pi$",
      "B. $S = 8\\pi$",
      "C. $S = 16\\pi^2$",
      "D. $S = \\frac{16\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Chuyển sang tọa độ cực với $r \\in [0, 4]$ và $\\theta \\in [0, 2\\pi]$, ta có: $S = \\int_0^{2\\pi} d\\theta \\int_0^{4} r \\, dr = 2\\pi \\left[\\frac{r^2}{2}\\right]_0^{4} = 2\\pi \\frac{16}{2} = 16\\pi$."
  },
  {
    "id": "Q_MOD_A_184",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính tích phân hai lớp sau bằng cách chuyển sang tọa độ cực: $I = \\iint_D (x^2 + y^2) \\, dx dy$ với miền $D$ là hình tròn đơn vị $x^2 + y^2 \\leq 1$.",
    "options": [
      "A. $I = \\frac{\\pi}{2}$",
      "B. $I = \\pi$",
      "C. $I = 2\\pi$",
      "D. $I = \\frac{\\pi}{4}$"
    ],
    "correct_option": "A",
    "explanation": "Đặt $x = r\\cos\\theta$, $y = r\\sin\\theta$, miền tích phân trở thành $r \\in [0, 1]$, $\\theta \\in [0, 2\\pi]$. Khi đó: $I = \\int_0^{2\\pi} d\\theta \\int_0^1 r^2 \\cdot r \\, dr = 2\\pi \\left[\\frac{r^4}{4}\\right]_0^1 = 2\\pi \\frac{1}{4} = \\frac{\\pi}{2}$."
  },
  {
    "id": "Q_MOD_A_185",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Khi chuyển tích phân hai lớp từ hệ tọa độ Đề-các $(x, y)$ sang hệ tọa độ cực $(r, \\theta)$ với công thức đổi biến $x = r\\cos\\theta$, $y = r\\sin\\theta$, phần tử diện tích $dx dy$ được thay thế bằng biểu thức nào sau đây?",
    "options": [
      "A. $r \\, dr d\\theta$",
      "B. $dr d\\theta$",
      "C. $r^2 dr d\\theta$",
      "D. $\\frac{1}{r} dr d\\theta$"
    ],
    "correct_option": "A",
    "explanation": "Trong phép đổi biến số tọa độ cực, định thức Jacobi là $J = \\det \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix} = r$. Do đó, vi phân diện tích biến đổi thành: $dx dy = |J| dr d\\theta = r dr d\\theta$."
  },
  {
    "id": "Q_MOD_A_186",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính thể tích vật thể tròn xoay thu được khi xoay miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$, và đường thẳng $x = 1$ quanh trục hoành $Ox$.",
    "options": [
      "A. $V = \\frac{\\pi}{5}$",
      "B. $V = \\frac{\\pi}{3}$",
      "C. $V = \\frac{\\pi}{4}$",
      "D. $V = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Thể tích được tính bằng công thức: $V = \\pi \\int_0^1 y^2 \\, dx = \\pi \\int_0^1 (x^2)^2 \\, dx = \\pi \\int_0^1 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}$."
  },
  {
    "id": "Q_MOD_A_187",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = \\sin(x)$, trục hoành $Ox$ trên đoạn từ $x = 0$ đến $x = \\pi$.",
    "options": [
      "A. $S = 2$",
      "B. $S = 1$",
      "C. $S = \\pi$",
      "D. $S = 0$"
    ],
    "correct_option": "A",
    "explanation": "Vì $\\sin(x) \\geq 0$ trên đoạn $[0, \\pi]$, diện tích cần tìm là: $S = \\int_0^{\\pi} \\sin(x) \\, dx = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$."
  },
  {
    "id": "Q_MOD_A_188",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.",
    "options": [
      "A. $S = \\frac{1}{6}$",
      "B. $S = \\frac{1}{3}$",
      "C. $S = \\frac{1}{2}$",
      "D. $S = \\frac{1}{12}$"
    ],
    "correct_option": "A",
    "explanation": "Hoành độ giao điểm: $x^2 = x \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên đoạn $[0, 1]$, ta có $x \\geq x^2$. Diện tích được tính bởi công thức: $S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    "id": "Q_MOD_A_189",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính thể tích vật thể tròn xoay thu được khi xoay miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$, và đường thẳng $x = 1$ quanh trục hoành $Ox$.",
    "options": [
      "A. $V = \\frac{\\pi}{5}$",
      "B. $V = \\frac{\\pi}{3}$",
      "C. $V = \\frac{\\pi}{4}$",
      "D. $V = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Thể tích được tính bằng công thức: $V = \\pi \\int_0^1 y^2 \\, dx = \\pi \\int_0^1 (x^2)^2 \\, dx = \\pi \\int_0^1 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}$."
  },
  {
    "id": "Q_MOD_A_190",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = \\sin(x)$, trục hoành $Ox$ trên đoạn từ $x = 0$ đến $x = \\pi$.",
    "options": [
      "A. $S = 2$",
      "B. $S = 1$",
      "C. $S = \\pi$",
      "D. $S = 0$"
    ],
    "correct_option": "A",
    "explanation": "Vì $\\sin(x) \\geq 0$ trên đoạn $[0, \\pi]$, diện tích cần tìm là: $S = \\int_0^{\\pi} \\sin(x) \\, dx = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$."
  },
  {
    "id": "Q_MOD_A_191",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.",
    "options": [
      "A. $S = \\frac{1}{6}$",
      "B. $S = \\frac{1}{3}$",
      "C. $S = \\frac{1}{2}$",
      "D. $S = \\frac{1}{12}$"
    ],
    "correct_option": "A",
    "explanation": "Hoành độ giao điểm: $x^2 = x \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên đoạn $[0, 1]$, ta có $x \\geq x^2$. Diện tích được tính bởi công thức: $S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    "id": "Q_MOD_A_192",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính thể tích vật thể tròn xoay thu được khi xoay miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$, và đường thẳng $x = 1$ quanh trục hoành $Ox$.",
    "options": [
      "A. $V = \\frac{\\pi}{5}$",
      "B. $V = \\frac{\\pi}{3}$",
      "C. $V = \\frac{\\pi}{4}$",
      "D. $V = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Thể tích được tính bằng công thức: $V = \\pi \\int_0^1 y^2 \\, dx = \\pi \\int_0^1 (x^2)^2 \\, dx = \\pi \\int_0^1 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}$."
  },
  {
    "id": "Q_MOD_A_193",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = \\sin(x)$, trục hoành $Ox$ trên đoạn từ $x = 0$ đến $x = \\pi$.",
    "options": [
      "A. $S = 2$",
      "B. $S = 1$",
      "C. $S = \\pi$",
      "D. $S = 0$"
    ],
    "correct_option": "A",
    "explanation": "Vì $\\sin(x) \\geq 0$ trên đoạn $[0, \\pi]$, diện tích cần tìm là: $S = \\int_0^{\\pi} \\sin(x) \\, dx = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$."
  },
  {
    "id": "Q_MOD_A_194",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.",
    "options": [
      "A. $S = \\frac{1}{6}$",
      "B. $S = \\frac{1}{3}$",
      "C. $S = \\frac{1}{2}$",
      "D. $S = \\frac{1}{12}$"
    ],
    "correct_option": "A",
    "explanation": "Hoành độ giao điểm: $x^2 = x \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên đoạn $[0, 1]$, ta có $x \\geq x^2$. Diện tích được tính bởi công thức: $S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    "id": "Q_MOD_A_195",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính thể tích vật thể tròn xoay thu được khi xoay miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$, và đường thẳng $x = 1$ quanh trục hoành $Ox$.",
    "options": [
      "A. $V = \\frac{\\pi}{5}$",
      "B. $V = \\frac{\\pi}{3}$",
      "C. $V = \\frac{\\pi}{4}$",
      "D. $V = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Thể tích được tính bằng công thức: $V = \\pi \\int_0^1 y^2 \\, dx = \\pi \\int_0^1 (x^2)^2 \\, dx = \\pi \\int_0^1 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}$."
  },
  {
    "id": "Q_MOD_A_196",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = \\sin(x)$, trục hoành $Ox$ trên đoạn từ $x = 0$ đến $x = \\pi$.",
    "options": [
      "A. $S = 2$",
      "B. $S = 1$",
      "C. $S = \\pi$",
      "D. $S = 0$"
    ],
    "correct_option": "A",
    "explanation": "Vì $\\sin(x) \\geq 0$ trên đoạn $[0, \\pi]$, diện tích cần tìm là: $S = \\int_0^{\\pi} \\sin(x) \\, dx = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$."
  },
  {
    "id": "Q_MOD_A_197",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.",
    "options": [
      "A. $S = \\frac{1}{6}$",
      "B. $S = \\frac{1}{3}$",
      "C. $S = \\frac{1}{2}$",
      "D. $S = \\frac{1}{12}$"
    ],
    "correct_option": "A",
    "explanation": "Hoành độ giao điểm: $x^2 = x \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên đoạn $[0, 1]$, ta có $x \\geq x^2$. Diện tích được tính bởi công thức: $S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  },
  {
    "id": "Q_MOD_A_198",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính thể tích vật thể tròn xoay thu được khi xoay miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành $Ox$, và đường thẳng $x = 1$ quanh trục hoành $Ox$.",
    "options": [
      "A. $V = \\frac{\\pi}{5}$",
      "B. $V = \\frac{\\pi}{3}$",
      "C. $V = \\frac{\\pi}{4}$",
      "D. $V = \\frac{\\pi}{2}$"
    ],
    "correct_option": "A",
    "explanation": "Thể tích được tính bằng công thức: $V = \\pi \\int_0^1 y^2 \\, dx = \\pi \\int_0^1 (x^2)^2 \\, dx = \\pi \\int_0^1 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}$."
  },
  {
    "id": "Q_MOD_A_199",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = \\sin(x)$, trục hoành $Ox$ trên đoạn từ $x = 0$ đến $x = \\pi$.",
    "options": [
      "A. $S = 2$",
      "B. $S = 1$",
      "C. $S = \\pi$",
      "D. $S = 0$"
    ],
    "correct_option": "A",
    "explanation": "Vì $\\sin(x) \\geq 0$ trên đoạn $[0, \\pi]$, diện tích cần tìm là: $S = \\int_0^{\\pi} \\sin(x) \\, dx = [-\\cos(x)]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = 1 + 1 = 2$."
  },
  {
    "id": "Q_MOD_A_200",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": [
      "calculus"
    ],
    "content": "Tính diện tích miền phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = x$.",
    "options": [
      "A. $S = \\frac{1}{6}$",
      "B. $S = \\frac{1}{3}$",
      "C. $S = \\frac{1}{2}$",
      "D. $S = \\frac{1}{12}$"
    ],
    "correct_option": "A",
    "explanation": "Hoành độ giao điểm: $x^2 = x \\Leftrightarrow x = 0$ hoặc $x = 1$. Trên đoạn $[0, 1]$, ta có $x \\geq x^2$. Diện tích được tính bởi công thức: $S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
  }
];
