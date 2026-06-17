const QUESTIONS_B = [
  {
    id: "Q_MOD_B_001", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, lệnh nào dùng để hiển thị dữ liệu ra màn hình?",
    options: ["A. Hàm print()", "B. Hàm input()", "C. Hàm write()", "D. Hàm close()"],
    correct_option: "A",
    explanation: "Hàm print() dùng để hiển thị dữ liệu."
  },
  {
    id: "Q_MOD_B_002", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi chuẩn bị dữ liệu hình ảnh cho AI, việc chuyển ảnh về kích thước nhỏ hơn nhằm mục đích gì?",
    options: ["A. Giúp máy tính tính toán nhanh hơn.", "B. Giúp máy tính hiển thị đẹp mắt hơn.", "C. Giúp máy tính bảo mật dữ liệu hơn.", "D. Giúp máy tính lưu trữ hình ảnh lâu."],
    correct_option: "A",
    explanation: "Giảm kích thước ảnh giúp giảm lượng tính toán, từ đó giúp mô hình chạy nhanh hơn và tiết kiệm bộ nhớ."
  },
  {
    id: "Q_MOD_B_003", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu Ngăn xếp (Stack) hoạt động theo nguyên tắc nào sau đây?",
    options: ["A. Vào sau, ra trước (LIFO)", "B. Vào trước, ra trước (FIFO)", "C. Không theo quy tắc nào cả", "D. Vào sau, ra sau cùng nhau"],
    correct_option: "A",
    explanation: "Ngăn xếp hoạt động theo cơ chế LIFO (Last In First Out), phần tử nào được thêm vào sau cùng sẽ được lấy ra đầu tiên."
  },
  {
    id: "Q_MOD_B_004", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, phép toán `10 % 3` cho kết quả bằng bao nhiêu?",
    options: ["A. Kết quả 1", "B. Kết quả 2", "C. Kết quả 3", "D. Kết quả 0"],
    correct_option: "A",
    explanation: "10 chia 3 dư 1."
  },
  {
    id: "Q_MOD_B_005", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi tập dữ liệu bị thiếu một số ô trống, cách đơn giản nhất để xử lý mà không làm mất cột là gì?",
    options: ["A. Điền giá trị trung bình vào.", "B. Xóa bỏ hoàn toàn cả bảng đó.", "C. Nhân đôi giá trị các ô khác.", "D. Đổi tên của các cột dữ liệu."],
    correct_option: "A",
    explanation: "Điền giá trị trung bình (mean) hoặc trung vị (median) vào ô trống là một cách đơn giản để xử lý dữ liệu thiếu mà không phải xóa bỏ dữ liệu."
  },
  {
    id: "Q_MOD_B_006", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Để tìm kiếm một từ trong cuốn từ điển đã được sắp xếp theo bảng chữ cái, phương pháp nào nhanh nhất?",
    options: ["A. Tìm kiếm nhị phân (Binary Search).", "B. Tìm kiếm tuyến tính từ trang đầu.", "C. Tìm kiếm ngẫu nhiên các trang bất kỳ.", "D. Tìm kiếm từ trang cuối cùng trở lại."],
    correct_option: "A",
    explanation: "Từ điển đã được sắp xếp nên áp dụng tìm kiếm nhị phân (tra giữa rồi thu hẹp phạm vi) là nhanh nhất."
  },
  {
    id: "Q_MOD_B_007", module_id: "Module_B", difficulty: "Medium",
    tags: ["tokenization"],
    content: "Trong xử lý văn bản, bước \"Tokenization\" (Tách từ) dùng để làm gì?",
    options: ["A. Chia văn bản thành các từ nhỏ hơn.", "B. Dịch văn bản sang một ngôn ngữ khác.", "C. Sửa lại tất cả các lỗi chính tả có.", "D. Thay đổi màu sắc của chữ trong câu."],
    correct_option: "A",
    explanation: "Tokenization là quá trình chia nhỏ một đoạn văn bản thành các đơn vị nhỏ hơn (gọi là token), ví dụ tách câu thành các từ."
  },
  {
    id: "Q_MOD_B_008", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, đoạn mã `x = [1, 2, 3]` tạo ra một đối tượng thuộc kiểu dữ liệu nào?",
    options: ["A. Kiểu danh sách (List)", "B. Kiểu từ điển (Dict)", "C. Kiểu chuỗi (String)", "D. Kiểu số thực (Float)"],
    correct_option: "A",
    explanation: "Cú pháp dấu ngoặc vuông [] được dùng để khởi tạo kiểu dữ liệu danh sách (List) trong Python."
  },
  {
    id: "Q_MOD_B_009", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu Hàng đợi (Queue) hoạt động theo nguyên tắc nào sau đây?",
    options: ["A. Vào trước, Ra trước (FIFO)", "B. Vào sau, Ra trước (LIFO)", "C. Không theo quy tắc nào cả", "D. Vào sau, Ra sau cùng nhau"],
    correct_option: "A",
    explanation: "Hàng đợi hoạt động theo cơ chế FIFO (First In First Out), phần tử nào được thêm vào trước sẽ được lấy ra trước."
  },
  {
    id: "Q_MOD_B_010", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, hàm nào sau đây được dùng để loại bỏ khoảng trắng thừa ở hai đầu của chuỗi?",
    options: ["A. Hàm strip()", "B. Hàm lower()", "C. Hàm upper()", "D. Hàm split()"],
    correct_option: "A",
    explanation: "Hàm strip() trong Python được dùng để xóa các khoảng trắng ở đầu và cuối của một chuỗi ký tự."
  },
  {
    id: "Q_MOD_B_011", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Khi lập trình Python, lỗi \"IndexError: list index out of range\" thường xảy ra khi nào?",
    options: ["A. Chỉ số nằm ngoài danh sách.", "B. Kiểu dữ liệu bị khai báo sai.", "C. Tên biến viết không đúng luật.", "D. Hàm chạy bị thiếu tham số vào."],
    correct_option: "A",
    explanation: "Lỗi IndexError xảy ra khi bạn cố gắng truy cập một phần tử trong danh sách bằng chỉ số (index) không tồn tại."
  },
  {
    id: "Q_MOD_B_012", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Kỹ thuật lật ảnh, xoay ảnh ngẫu nhiên để tăng số lượng dữ liệu ảnh huấn luyện được gọi là gì?",
    options: ["A. Tăng cường dữ liệu (Augmentation)", "B. Chuẩn hóa dữ liệu (Normalization)", "C. Làm sạch dữ liệu (Data Cleaning)", "D. Trích xuất dữ liệu (Data Mining)"],
    correct_option: "A",
    explanation: "Tăng cường dữ liệu (Data Augmentation) là tập hợp các kỹ thuật biến đổi dữ liệu có sẵn để tạo ra dữ liệu mới phong phú hơn."
  },
  {
    id: "Q_MOD_B_013", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, khối lệnh `try-except` được sử dụng nhằm mục đích chính là gì?",
    options: ["A. Xử lý khi chương trình bị lỗi.", "B. Lặp đi lặp lại một khối lệnh.", "C. Định nghĩa một hàm tính toán.", "D. Nhập dữ liệu mới từ bàn phím."],
    correct_option: "A",
    explanation: "Cú pháp try-except được dùng để bắt và xử lý các ngoại lệ (lỗi) xảy ra trong quá trình chạy chương trình, giúp chương trình không bị dừng đột ngột."
  },
  {
    id: "Q_MOD_B_014", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong Python, cấu trúc dữ liệu nào lưu trữ các phần tử dưới dạng các cặp khóa - giá trị?",
    options: ["A. Từ điển (Dictionary)", "B. Danh sách (Python List)", "C. Tập hợp (Python Set)", "D. Bộ giá trị (Py Tuple)"],
    correct_option: "A",
    explanation: "Dictionary trong Python lưu trữ dữ liệu dưới dạng key-value (khóa - giá trị), giúp tra cứu nhanh chóng theo khóa."
  },
  {
    id: "Q_MOD_B_015", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Phương pháp \"One-Hot Encoding\" thường dùng để mã hóa loại dữ liệu nào sau đây?",
    options: ["A. Dữ liệu chữ phân loại.", "B. Dữ liệu số nguyên lớn.", "C. Dữ liệu âm thanh lớn.", "D. Dữ liệu hình ảnh màu."],
    correct_option: "A",
    explanation: "One-Hot Encoding chuyển đổi dữ liệu dạng chữ phân loại (như màu đỏ, xanh, vàng) thành các số nhị phân 0 và 1 để máy tính hiểu được."
  },
  {
    id: "Q_MOD_B_016", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán duyệt lần lượt từng phần tử từ đầu đến cuối danh sách được gọi là gì?",
    options: ["A. Thuật toán tìm tuyến tính.", "B. Thuật toán tìm nhị phân.", "C. Thuật toán sắp xếp nổi bọt.", "D. Thuật toán sắp xếp chèn lọc."],
    correct_option: "A",
    explanation: "Tìm kiếm tuyến tính là phương pháp tìm kiếm bằng cách so sánh lần lượt từ phần tử đầu tiên đến phần tử cuối cùng của danh sách."
  },
  {
    id: "Q_MOD_B_017", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Định dạng file nào sau đây lưu trữ dữ liệu dưới dạng văn bản thô, ngăn cách bởi dấu phẩy?",
    options: ["A. Dữ liệu bảng phân tách bằng dấu phẩy.", "B. Dữ liệu mã nguồn viết bằng ngôn ngữ C.", "C. Dữ liệu ảnh màu có độ phân giải cao.", "D. Dữ liệu âm thanh đã nén dung lượng."],
    correct_option: "A",
    explanation: "CSV viết tắt của Comma-Separated Values, là định dạng tệp văn bản thô dùng để lưu trữ dữ liệu bảng với các giá trị được phân tách bằng dấu phẩy."
  },
  {
    id: "Q_MOD_B_018", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, phép toán `2 ** 3` cho kết quả bằng bao nhiêu?",
    options: ["A. Kết quả 8", "B. Kết quả 6", "C. Kết quả 5", "D. Kết quả 9"],
    correct_option: "A",
    explanation: "`2 ** 3` là 2 mũ 3 = 8."
  },
  {
    id: "Q_MOD_B_019", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cú pháp nào giúp mở file trong Python mà tự động đóng file sau khi dùng xong?",
    options: ["A. Sử dụng câu lệnh with open()", "B. Sử dụng câu lệnh file open()", "C. Sử dụng câu lệnh just open()", "D. Sử dụng câu lệnh free open()"],
    correct_option: "A",
    explanation: "Cú pháp 'with open(...) as file:' giúp tự động đóng tệp khi khối lệnh bên trong kết thúc, ngăn ngừa rò rỉ tài nguyên."
  },
  {
    id: "Q_MOD_B_020", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp nổi bọt (Bubble Sort) hoạt động dựa trên cơ chế nào?",
    options: ["A. Đổi chỗ phần tử cạnh nhau.", "B. Chia mảng làm nhiều phần.", "C. Lấy ngẫu nhiên phần tử.", "D. Chọn phần tử chốt chia."],
    correct_option: "A",
    explanation: "Sắp xếp nổi bọt hoạt động bằng cách liên tục so sánh và đổi chỗ hai phần tử kề nhau nếu chúng sai thứ tự, đưa phần tử lớn nhất nổi dần về cuối."
  },
  {
    id: "Q_MOD_B_021", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Việc thu nhỏ kích thước hình ảnh đầu vào trước khi đưa vào mô hình AI có tác dụng gì?",
    options: ["A. Giảm thời gian máy tính xử lý.", "B. Tăng độ sắc nét của hình ảnh.", "C. Giữ nguyên chi tiết ảnh nhỏ.", "D. Chuyển ảnh màu thành ảnh xám."],
    correct_option: "A",
    explanation: "Thu nhỏ kích thước ảnh làm giảm số lượng điểm ảnh, giúp mô hình AI tính toán nhanh hơn và ít tốn tài nguyên phần cứng hơn."
  },
  {
    id: "Q_MOD_B_022", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong cấu trúc dữ liệu đồ thị, các thành phần chính bao gồm những gì?",
    options: ["A. Các đỉnh và các cạnh.", "B. Các dòng và các cột.", "C. Các khóa và các giá.", "D. Các hàm và các lớp."],
    correct_option: "A",
    explanation: "Một đồ thị (Graph) gồm một tập hợp các đỉnh (Vertices/Nodes) kết nối với nhau bởi các cạnh (Edges)."
  },
  {
    id: "Q_MOD_B_023", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, từ khóa `lambda` được dùng để tạo ra loại hàm nào?",
    options: ["A. Tạo một hàm ẩn danh viết ngắn.", "B. Khai báo một biến số thực mới.", "C. Tạo ra một vòng lặp vô hạn mới.", "D. Import thư viện từ bên ngoài vào."],
    correct_option: "A",
    explanation: "Từ khóa lambda dùng để định nghĩa các hàm ẩn danh (anonymous function) ngắn gọn trên một dòng lệnh đơn giản."
  },
  {
    id: "Q_MOD_B_024", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Sự khác biệt chính giữa Tuple và List trong Python là gì?",
    options: ["A. Tuple không thay đổi được còn List thì có.", "B. Tuple lưu số còn List chỉ lưu được chữ.", "C. Tuple chạy chậm hơn List trong mọi trường hợp.", "D. Tuple không dùng chỉ số để truy cập phần tử."],
    correct_option: "A",
    explanation: "Tuple là kiểu dữ liệu bất biến (immutable), tức là không thể sửa đổi sau khi tạo, còn List thì có thể sửa đổi bình thường (mutable)."
  },
  {
    id: "Q_MOD_B_025", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho danh sách `x = [5, 6, 7]`. Phần tử `x[1]` bằng bao nhiêu?",
    options: ["A. Kết quả là 6", "B. Kết quả là 5", "C. Kết quả là 7", "D. Kết quả là 0"],
    correct_option: "A",
    explanation: "Trong Python, chỉ số phần tử của danh sách bắt đầu từ 0. Do đó ds[1] trả về phần tử thứ hai là 6."
  },
  {
    id: "Q_MOD_B_026", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Đặc điểm quan trọng nhất của Tập hợp (Set) trong Python là gì?",
    options: ["A. Không chứa các phần tử trùng lặp.", "B. Luôn tự động sắp xếp các phần tử.", "C. Chỉ cho phép lưu kiểu số nguyên.", "D. Không thể duyệt qua bằng vòng lặp."],
    correct_option: "A",
    explanation: "Tập hợp (Set) chỉ chứa các phần tử duy nhất."
  },
  {
    id: "Q_MOD_B_027", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Để chạy thuật toán tìm kiếm nhị phân, dữ liệu cần có điều kiện gì?",
    options: ["A. Dữ liệu phải được sắp xếp trước.", "B. Dữ liệu phải toàn là số nguyên.", "C. Dữ liệu phải được lưu trong Set.", "D. Dữ liệu phải là các chữ cái in."],
    correct_option: "A",
    explanation: "Tìm kiếm nhị phân yêu cầu danh sách đã được sắp xếp."
  },
  {
    id: "Q_MOD_B_028", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật 'Label Encoding' dùng để làm gì?",
    options: ["A. Chuyển chữ phân loại thành số.", "B. Xóa bỏ các giá trị bị thiếu.", "C. Tăng kích thước ảnh lên nhiều.", "D. Chia đều tập dữ liệu làm hai."],
    correct_option: "A",
    explanation: "Chuyển các nhãn chữ thành số nguyên (0, 1, 2...)."
  },
  {
    id: "Q_MOD_B_029", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, từ khóa nào dùng để trả về giá trị từ một hàm?",
    options: ["A. Từ khóa return", "B. Từ khóa output", "C. Từ khóa result", "D. Từ khóa export"],
    correct_option: "A",
    explanation: "Dùng từ khóa return để trả về giá trị từ hàm."
  },
  {
    id: "Q_MOD_B_030", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp trộn (Merge Sort) dựa trên nguyên lý nào?",
    options: ["A. Chia để trị và trộn lại.", "B. Đổi chỗ hai số cạnh nhau.", "C. Chọn số nhỏ nhất đưa lên.", "D. Chọn ngẫu nhiên để sắp."],
    correct_option: "A",
    explanation: "Merge sort chia nhỏ danh sách rồi trộn lại theo thứ tự."
  },
  {
    id: "Q_MOD_B_031", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Tại sao cần chia tập dữ liệu thành tập huấn luyện và kiểm tra?",
    options: ["A. Để đánh giá độ chính xác mô hình.", "B. Để tăng tốc độ mạng internet nhà.", "C. Để bảo mật thông tin người dùng.", "D. Để giảm dung lượng lưu trữ tệp."],
    correct_option: "A",
    explanation: "Chia tập dữ liệu để đánh giá khả năng tổng quát hóa."
  },
  {
    id: "Q_MOD_B_032", module_id: "Module_B", difficulty: "Medium",
    tags: ["tokenization"],
    content: "Trong xử lý ngôn ngữ, tách câu thành các từ độc lập gọi là gì?",
    options: ["A. Tách từ (Tokenization)", "B. Chuẩn hóa (Normalization)", "C. Làm sạch (Data Cleaning)", "D. Tăng cường (Augmentation)"],
    correct_option: "A",
    explanation: "Tách câu thành các từ gọi là Tokenization."
  },
  {
    id: "Q_MOD_B_033", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Dịch văn bản sang tiếng Anh rồi dịch lại tiếng Việt để làm gì?",
    options: ["A. Để tạo thêm dữ liệu văn bản.", "B. Để sửa lỗi chính tả văn bản.", "C. Để dịch nghĩa của các từ cổ.", "D. Để nén dung lượng của tệp."],
    correct_option: "A",
    explanation: "Kỹ thuật này dùng để tăng cường dữ liệu văn bản."
  },
  {
    id: "Q_MOD_B_034", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, làm thế nào để truyền giá trị vào một hàm?",
    options: ["A. Truyền qua các tham số của hàm.", "B. Định nghĩa các biến toàn cục.", "C. Sử dụng câu lệnh in ra màn hình.", "D. Viết chú thích ở bên trong hàm."],
    correct_option: "A",
    explanation: "Dữ liệu được truyền qua đối số/tham số."
  },
  {
    id: "Q_MOD_B_035", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán duyệt đồ thị theo chiều rộng (BFS) dùng cấu trúc nào?",
    options: ["A. Hàng đợi (Queue)", "B. Ngăn xếp (Stack)", "C. Từ điển (Dict)", "D. Tập hợp (Set)"],
    correct_option: "A",
    explanation: "BFS sử dụng hàng đợi (Queue) để duyệt."
  },
  {
    id: "Q_MOD_B_036", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Nút nằm ở vị trí cao nhất của một cây nhị phân gọi là gì?",
    options: ["A. Nút gốc (Root)", "B. Nút lá (Leaf)", "C. Nút con trái", "D. Nút con phải"],
    correct_option: "A",
    explanation: "Nút cao nhất gọi là nút gốc (root)."
  },
  {
    id: "Q_MOD_B_037", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Dữ liệu dạng chuỗi thời gian (như nhiệt độ hằng ngày) là gì?",
    options: ["A. Dữ liệu ghi theo mốc thời gian.", "B. Dữ liệu ảnh chụp từ máy ảnh.", "C. Dữ liệu âm thanh của bài hát.", "D. Dữ liệu các bài báo tiếng Anh."],
    correct_option: "A",
    explanation: "Dữ liệu chuỗi thời gian được sắp xếp theo thời gian."
  },
  {
    id: "Q_MOD_B_038", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Kỹ thuật lưu kết quả tính toán trước đó để tránh tính lại gọi là gì?",
    options: ["A. Quy hoạch động", "B. Tìm tuyến tính", "C. Sắp xếp nổi bọt", "D. Thiết kế đệ quy"],
    correct_option: "A",
    explanation: "Quy hoạch động lưu kết quả bài toán con để tránh tính lại."
  },
  {
    id: "Q_MOD_B_039", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Chương trình Python được chạy bằng cách nào?",
    options: ["A. Trình thông dịch chạy dòng mã.", "B. Trình biên dịch mã ra file exe.", "C. Chạy trực tiếp trên trình duyệt.", "D. Không cần chạy mà tự hiểu lấy."],
    correct_option: "A",
    explanation: "Python sử dụng trình thông dịch (interpreter) để chạy."
  },
  {
    id: "Q_MOD_B_040", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Chuẩn hóa MinMaxScaler đưa dữ liệu về khoảng nào mặc định?",
    options: ["A. Khoảng từ 0 đến 1.", "B. Khoảng từ -1 đến 1.", "C. Khoảng từ 0 đến 10.", "D. Khoảng từ 0 đến 255."],
    correct_option: "A",
    explanation: "MinMaxScaler đưa dữ liệu về khoảng [0, 1]."
  },
  {
    id: "Q_MOD_B_041", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong mạng xã hội, một nhóm bạn có nhiều liên kết với nhau gọi là gì?",
    options: ["A. Cộng đồng (Community)", "B. Đỉnh đơn độc (Node)", "C. Cạnh nối (Edge link)", "D. Cây nhị phân (Tree)"],
    correct_option: "A",
    explanation: "Các nhóm liên kết chặt chẽ gọi là cộng đồng."
  },
  {
    id: "Q_MOD_B_042", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Để tìm kiếm thông tin nhanh trên trang web, ta nên làm gì?",
    options: ["A. Tạo chỉ mục (Index) dữ liệu.", "B. Xóa hết toàn bộ bài viết đi.", "C. Đổi tên toàn bộ các bài viết.", "D. Dịch văn bản sang tiếng Anh."],
    correct_option: "A",
    explanation: "Tạo chỉ mục giúp tăng tốc độ tìm kiếm."
  },
  {
    id: "Q_MOD_B_043", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Biến định nghĩa bên trong một hàm gọi là loại biến gì?",
    options: ["A. Biến cục bộ (Local type)", "B. Biến toàn cục (Global)", "C. Biến của lớp (Class type)", "D. Biến hằng số (Const var)"],
    correct_option: "A",
    explanation: "Biến trong hàm là biến cục bộ, chỉ dùng trong hàm."
  },
  {
    id: "Q_MOD_B_044", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Việc đưa các biến thể của từ về dạng từ gốc gọi là gì?",
    options: ["A. Chuẩn hóa từ gốc (Stemming)", "B. Quá trình tách từ (Tokenize)", "C. Loại bỏ các từ dừng (Stops)", "D. Tăng cường dữ liệu (Augment)"],
    correct_option: "A",
    explanation: "Đưa từ về gốc gọi là Stemming/Lemmatization."
  },
  {
    id: "Q_MOD_B_045", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Hàm `zip()` trong Python dùng để làm gì?",
    options: ["A. Ghép các phần tử danh sách lại.", "B. Nén một tệp tin thành file zip.", "C. Đếm số lượng phần tử của list.", "D. Sắp xếp danh sách theo thứ tự."],
    correct_option: "A",
    explanation: "`zip()` ghép các phần tử ở vị trí tương ứng thành các tuple."
  },
  {
    id: "Q_MOD_B_046", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Khi sắp xếp danh sách, tham số `key` trong hàm sorted() dùng để làm gì?",
    options: ["A. Xác định tiêu chí so sánh số.", "B. Xác định mật khẩu mở tệp tin.", "C. Xác định kiểu của các chữ cái.", "D. Xác định chiều tăng hay giảm."],
    correct_option: "A",
    explanation: "Tham số `key` quy định tiêu chí sắp xếp."
  },
  {
    id: "Q_MOD_B_047", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Ưu điểm chính của Generator (dùng yield) trong Python là gì?",
    options: ["A. Tiết kiệm bộ nhớ khi chạy.", "B. Tăng tính bảo mật cho code.", "C. Không bao giờ xảy ra lỗi.", "D. Dễ viết hơn hàm bình thường."],
    correct_option: "A",
    explanation: "Generator sinh phần tử theo yêu cầu, tiết kiệm bộ nhớ."
  },
  {
    id: "Q_MOD_B_048", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Tập dữ liệu bị mất cân bằng nhãn (imbalanced) nghĩa là gì?",
    options: ["A. Một lớp có số lượng rất ít.", "B. Tất cả các lớp có số bằng nhau.", "C. Dữ liệu toàn là số âm lớn.", "D. Dữ liệu bị thiếu nhiều cột."],
    correct_option: "A",
    explanation: "Mất cân bằng là số lượng mẫu giữa các lớp chênh lệch lớn."
  },
  {
    id: "Q_MOD_B_049", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Mô hình MapReduce được thiết kế chính nhằm mục đích gì?",
    options: ["A. Xử lý song song dữ liệu lớn.", "B. Chụp ảnh màn hình máy tính.", "C. Nén tệp tin ảnh chất lượng.", "D. Dịch thuật tự động văn bản."],
    correct_option: "A",
    explanation: "MapReduce giúp xử lý phân tán song song dữ liệu lớn."
  },
  {
    id: "Q_MOD_B_050", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Trong tăng cường dữ liệu ảnh, kỹ thuật trộn hai ảnh gọi là gì?",
    options: ["A. Kỹ thuật MixUp ảnh.", "B. Kỹ thuật Resize ảnh.", "C. Kỹ thuật Crop ảnh.", "D. Kỹ thuật Flip ảnh."],
    correct_option: "A",
    explanation: "MixUp trộn hai ảnh và nhãn của chúng với nhau."
  },
  {
    id: "Q_MOD_B_051", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Đoạn mã `[x for x in range(3)]` tạo ra danh sách nào?",
    options: ["A. Danh sách [0, 1, 2]", "B. Danh sách [1, 2, 3]", "C. Danh sách [0, 1, 3]", "D. Báo lỗi cú pháp chạy"],
    correct_option: "A",
    explanation: "range(3) tạo các số từ 0 đến 2."
  },
  {
    id: "Q_MOD_B_052", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Phần tử đầu tiên của Danh sách liên kết gọi là gì?",
    options: ["A. Phần tử đầu (Head)", "B. Phần tử cuối (Tail)", "C. Phần tử giữa (Middle)", "D. Phần tử rỗng (Null)"],
    correct_option: "A",
    explanation: "Phần tử đầu tiên của danh sách liên kết gọi là Head."
  },
  {
    id: "Q_MOD_B_053", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Những giá trị quá lớn hoặc quá nhỏ bất thường gọi là gì?",
    options: ["A. Các điểm dị biệt (Outliers)", "B. Các điểm trung bình (Means)", "C. Các giá trị thiếu (Missing)", "D. Các điểm trung vị (Medians)"],
    correct_option: "A",
    explanation: "Các giá trị bất thường được gọi là outliers."
  },
  {
    id: "Q_MOD_B_054", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong try-except, khối lệnh `finally` chạy khi nào?",
    options: ["A. Luôn luôn chạy khi kết thúc.", "B. Chỉ chạy khi chương trình lỗi.", "C. Chỉ chạy khi không có lỗi gì.", "D. Không bao giờ được chạy cả."],
    correct_option: "A",
    explanation: "Khối finally luôn chạy dù có lỗi hay không."
  },
  {
    id: "Q_MOD_B_055", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Các từ phổ biến ít nghĩa (như 'the', 'is') gọi là gì?",
    options: ["A. Các từ dừng (Stop words)", "B. Các từ khóa (Key words)", "C. Các từ đồng nghĩa (Syns)", "D. Các từ viết tắt (Shorts)"],
    correct_option: "A",
    explanation: "Các từ ít nghĩa ngữ pháp này là stop words."
  },
  {
    id: "Q_MOD_B_056", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho `a = [1, 2]`, sau đó chạy `b = a`. Nếu sửa `b[0] = 9` thì `a[0]` là mấy?",
    options: ["A. Số là 9", "B. Số là 1", "C. Số là 2", "D. Số là 0"],
    correct_option: "A",
    explanation: "a và b cùng trỏ tới một danh sách."
  },
  {
    id: "Q_MOD_B_057", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Để dùng tìm kiếm nhị phân, danh sách cần được làm gì?",
    options: ["A. Cần phải được sắp xếp.", "B. Cần phải xóa hết số lẻ.", "C. Cần phải được đảo ngược.", "D. Cần phải chuyển sang set."],
    correct_option: "A",
    explanation: "Dữ liệu phải được sắp xếp để chạy tìm kiếm nhị phân."
  },
  {
    id: "Q_MOD_B_058", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, hàm nào dùng để đếm số ký tự của một chuỗi?",
    options: ["A. Hàm len()", "B. Hàm count()", "C. Hàm size()", "D. Hàm type()"],
    correct_option: "A",
    explanation: "Hàm len() dùng để đếm số ký tự của chuỗi."
  },
  {
    id: "Q_MOD_B_059", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Mã hóa nhãn 'Đỏ', 'Xanh' thành '0', '1' gọi là gì?",
    options: ["A. Mã hóa nhãn (Label Encode)", "B. Chuẩn hóa (Standardization)", "C. Tăng cường (Augmentation)", "D. Rời rạc hóa (Discretize)"],
    correct_option: "A",
    explanation: "Đây là kỹ thuật Label Encoding."
  },
  {
    id: "Q_MOD_B_060", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Hàm nào dùng để kiểm tra một chuỗi có chứa toàn số?",
    options: ["A. Hàm isdigit()", "B. Hàm isalpha()", "C. Hàm islower()", "D. Hàm isspace()"],
    correct_option: "A",
    explanation: "Hàm isdigit() trả về True nếu chuỗi toàn số."
  },
  {
    id: "Q_MOD_B_061", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong từ điển (Dictionary), các khóa (keys) có đặc điểm gì?",
    options: ["A. Không được trùng lặp nhau.", "B. Phải toàn là kiểu số thực.", "C. Tự động tăng lên khi thêm.", "D. Không thể truy cập trực tiếp."],
    correct_option: "A",
    explanation: "Mỗi khóa trong Dictionary phải là duy nhất."
  },
  {
    id: "Q_MOD_B_062", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Muốn ghi thêm dữ liệu vào cuối file có sẵn, ta dùng mode nào?",
    options: ["A. Chế độ 'a'", "B. Chế độ 'w'", "C. Chế độ 'r'", "D. Chế độ 'x'"],
    correct_option: "A",
    explanation: "Mode 'a' (append) dùng để ghi thêm vào cuối file."
  },
  {
    id: "Q_MOD_B_063", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Điền giá trị trống bằng giá trị xuất hiện nhiều nhất gọi là gì?",
    options: ["A. Điền yếu vị (Mode)", "B. Điền trung bình (Mean)", "C. Điền trung vị (Median)", "D. Điền số không ngẫu nhiên"],
    correct_option: "A",
    explanation: "Yếu vị (Mode) là giá trị xuất hiện nhiều nhất."
  },
  {
    id: "Q_MOD_B_064", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, kết quả so sánh `3 == 3.0` là gì?",
    options: ["A. Kết quả là True", "B. Kết quả là False", "C. Kết quả là None", "D. Kết quả báo lỗi"],
    correct_option: "A",
    explanation: "Giá trị số học của 3 and 3.0 bằng nhau nên là True."
  },
  {
    id: "Q_MOD_B_065", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Số lượng cạnh đi ra từ một đỉnh đồ thị có hướng gọi là gì?",
    options: ["A. Bậc ra (Out-degree)", "B. Bậc vào (In-degree)", "C. Cạnh nối (Edge link)", "D. Đường đi ngắn nhất"],
    correct_option: "A",
    explanation: "Số cạnh đi ra gọi là bậc ra (out-degree)."
  },
  {
    id: "Q_MOD_B_066", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Hàm nào dùng để xóa và trả về phần tử cuối cùng của list?",
    options: ["A. Phương thức pop()", "B. Phương thức remove()", "C. Phương thức clear()", "D. Phương thức delete()"],
    correct_option: "A",
    explanation: "Hàm pop() không tham số xóa và trả về phần tử cuối."
  },
  {
    id: "Q_MOD_B_067", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Chia cột 'Tuổi' thành các nhóm 'Trẻ', 'Già' gọi là gì?",
    options: ["A. Rời rạc hóa (Binning)", "B. Chuẩn hóa (Normalization)", "C. Mã hóa (Label Encoding)", "D. Tăng cường (Augmentation)"],
    correct_option: "A",
    explanation: "Binning chia dữ liệu số liên tục thành các nhóm."
  },
  {
    id: "Q_MOD_B_068", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Toán tử logic nào trả về True khi mọi điều kiện đều True?",
    options: ["A. Toán tử and", "B. Toán tử or", "C. Toán tử not", "D. Toán tử xor"],
    correct_option: "A",
    explanation: "Phép and chỉ True khi tất cả các điều kiện đều True."
  },
  {
    id: "Q_MOD_B_069", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Cấu trúc cho phép thêm/xóa ở cả hai đầu rất nhanh gọi là gì?",
    options: ["A. Hàng đợi hai đầu (Deque)", "B. Ngăn xếp đơn giản (Stack)", "C. Danh sách liên kết đơn (List)", "D. Mảng một chiều tĩnh (Array)"],
    correct_option: "A",
    explanation: "Deque (Double-ended queue) cho phép thêm xóa ở cả hai đầu."
  },
  {
    id: "Q_MOD_B_070", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Để kiểm tra khóa 'k' có nằm trong dict 'd' không, ta viết thế nào?",
    options: ["A. Biểu thức 'k in d'", "B. Biểu thức 'd.has(k)'", "C. Biểu thức 'k exists'", "D. Biểu thức 'd.contains'"],
    correct_option: "A",
    explanation: "Toán tử in dùng để kiểm tra sự tồn tại của khóa."
  },
  {
    id: "Q_MOD_B_071", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Nếu hai biến trỏ cùng một danh sách, sửa biến này thì biến kia thế nào?",
    options: ["A. Biến kia cũng thay đổi.", "B. Biến kia không thay đổi.", "C. Cả hai biến tự biến mất.", "D. Chương trình báo lỗi ngay."],
    correct_option: "A",
    explanation: "Vì hai biến cùng trỏ vào một vùng nhớ danh sách."
  },
  {
    id: "Q_MOD_B_072", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong thuật toán sắp xếp nhanh (Quick Sort), phần tử mốc gọi là gì?",
    options: ["A. Phần tử chốt (Pivot)", "B. Phần tử đầu (Header)", "C. Phần tử cuối (Footer)", "D. Phần tử rỗng (Nuller)"],
    correct_option: "A",
    explanation: "Phần tử mốc dùng để phân chia mảng gọi là Pivot."
  },
  {
    id: "Q_MOD_B_073", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Đưa từ về dạng gốc chính xác dựa vào ngữ nghĩa từ điển gọi là gì?",
    options: ["A. Lemmatization", "B. Tokenization", "C. Stopword list", "D. Postagging id"],
    correct_option: "A",
    explanation: "Lemmatization đưa từ về nguyên thể đúng nghĩa từ điển."
  },
  {
    id: "Q_MOD_B_074", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, hàm `d.get(khóa, mặc_định)` dùng để làm gì?",
    options: ["A. Lấy giá trị khóa an toàn.", "B. Thêm một khóa mới vào.", "C. Xóa đi một khóa có sẵn.", "D. Sắp xếp các khóa tăng."],
    correct_option: "A",
    explanation: "Hàm get() lấy giá trị của khóa, trả về mặc định nếu không có."
  },
  {
    id: "Q_MOD_B_075", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Duyệt cây nhị phân tìm kiếm theo thứ tự In-order sẽ thu được gì?",
    options: ["A. Dãy số tăng dần.", "B. Dãy số giảm dần.", "C. Dãy số ngẫu nhiên.", "D. Báo lỗi cú pháp."],
    correct_option: "A",
    explanation: "Duyệt In-order (Trái - Gốc - Phải) của BST cho dãy tăng dần."
  },
  {
    id: "Q_MOD_B_076", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Để kế thừa từ lớp cha `Model` trong Python, ta viết thế nào?",
    options: ["A. class Sub(Model):", "B. class Sub[Model]:", "C. class Sub<Model>:", "D. class Sub: Model:"],
    correct_option: "A",
    explanation: "Cú pháp kế thừa trong Python sử dụng dấu ngoặc đơn."
  },
  {
    id: "Q_MOD_B_077", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Nếu cột phân loại có quá nhiều giá trị, ta nên làm gì?",
    options: ["A. Gom nhóm hoặc mã hóa.", "B. Xóa hết toàn bộ cột đi.", "C. Giữ nguyên không xử lý.", "D. Nhân đôi dòng dữ liệu."],
    correct_option: "A",
    explanation: "Gom nhóm hoặc dùng mã hóa tần suất giúp giảm số chiều."
  },
  {
    id: "Q_MOD_B_078", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp chèn (Insertion Sort) chèn phần tử vào đâu?",
    options: ["A. Chèn vào vị trí thích hợp.", "B. Chèn vào cuối danh sách.", "C. Chèn vào đầu danh sách.", "D. Chèn vào vị trí ngẫu nhiên."],
    correct_option: "A",
    explanation: "Insertion sort chèn phần tử vào đúng vị trí đã sắp xếp trước đó."
  },
  {
    id: "Q_MOD_B_079", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, toán tử `is` dùng để kiểm tra điều gì?",
    options: ["A. Có cùng địa chỉ ô nhớ hay không.", "B. Có cùng giá trị nội dung hay không.", "C. Có cùng kiểu dữ liệu hay là không.", "D. Có cùng tên biến số trong bộ nhớ."],
    correct_option: "A",
    explanation: "`is` so sánh ID ô nhớ, `==` so sánh giá trị nội dung."
  },
  {
    id: "Q_MOD_B_080", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Thuật toán K-Nearest Neighbors (KNN) phân loại dựa trên cái gì?",
    options: ["A. Khoảng cách giữa các điểm.", "B. Đạo hàm của hàm mất mát.", "C. Phép nhân các ma trận lớn.", "D. Quy luật của cây quyết định."],
    correct_option: "A",
    explanation: "KNN phân loại dựa trên khoảng cách tới các láng giềng gần nhất."
  },
  {
    id: "Q_MOD_B_081", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong ký tự chính quy (Regex), ký hiệu `\\d` dùng để khớp với gì?",
    options: ["A. Khớp một chữ số từ 0 đến 9.", "B. Khớp một chữ cái viết thường.", "C. Khớp một khoảng trắng bất kỳ.", "D. Khớp một ký tự đặc biệt nào."],
    correct_option: "A",
    explanation: "`\\d` đại diện cho một chữ số từ 0 đến 9."
  },
  {
    id: "Q_MOD_B_082", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Hiện tượng hai khóa băm ra cùng một địa chỉ trong bảng băm gọi là gì?",
    options: ["A. Sự xung đột (Collision)", "B. Sự phân hoạch (Partition)", "C. Sự giải phóng (Release)", "D. Sự chuẩn hóa (Normalize)"],
    correct_option: "A",
    explanation: "Hai khóa có cùng chỉ số băm gọi là xung đột (collision)."
  },
  {
    id: "Q_MOD_B_083", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Từ khóa `yield` trong hàm Python dùng để tạo ra đối tượng nào?",
    options: ["A. Generator (Trình tạo)", "B. List (Danh sách số)", "C. Dict (Từ điển khóa)", "D. Class (Lớp đối tượng)"],
    correct_option: "A",
    explanation: "Hàm chứa `yield` là một generator."
  },
  {
    id: "Q_MOD_B_084", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Với mảng đã xếp `[2, 4, 6, 8, 10]`, tìm `6` bằng nhị phân mất mấy lần so sánh?",
    options: ["A. So sánh đúng 1 lần.", "B. So sánh đúng 2 lần.", "C. So sánh đúng 3 lần.", "D. So sánh đúng 4 lần."],
    correct_option: "A",
    explanation: "Phần tử ở giữa mảng là 6, so sánh lần đầu khớp luôn."
  },
  {
    id: "Q_MOD_B_085", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "MinMaxScaler chuyển các giá trị về khoảng nào?",
    options: ["A. Khoảng từ 0 đến 1.", "B. Khoảng từ 0 đến 100.", "C. Khoảng từ -1 đến 1.", "D. Khoảng từ 0 đến 255."],
    correct_option: "A",
    explanation: "MinMaxScaler đưa dữ liệu về khoảng [0, 1]."
  },
  {
    id: "Q_MOD_B_086", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Ưu điểm của List Comprehension so với vòng lặp `for` thường là gì?",
    options: ["A. Viết code ngắn gọn hơn.", "B. Bảo mật chương trình hơn.", "C. Định nghĩa hàm nhanh hơn.", "D. Xóa dữ liệu tự động hơn."],
    correct_option: "A",
    explanation: "List Comprehension giúp viết code ngắn gọn trên một dòng."
  },
  {
    id: "Q_MOD_B_087", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Phần tử nhỏ nhất của cây nhị phân tìm kiếm nằm ở đâu?",
    options: ["A. Nằm ở tận cùng bên trái.", "B. Nằm ở tận cùng bên phải.", "C. Nằm ngay tại nút gốc cây.", "D. Nằm ở vị trí ngẫu nhiên."],
    correct_option: "A",
    explanation: "Theo tính chất BST, phần tử nhỏ nhất nằm ở tận cùng bên trái."
  },
  {
    id: "Q_MOD_B_088", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Để sửa đổi một biến toàn cục bên trong hàm, ta dùng từ khóa nào?",
    options: ["A. Từ khóa global", "B. Từ khóa nonlocal", "C. Từ khóa public", "D. Từ khóa static"],
    correct_option: "A",
    explanation: "Dùng từ khóa `global` để báo sửa đổi biến toàn cục."
  },
  {
    id: "Q_MOD_B_089", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Đoạn mã Bubble Sort đã tối ưu chạy trên mảng đã sắp xếp mất bao lâu?",
    options: ["A. Có độ phức tạp là O(n)", "B. Có độ phức tạp là O(n2)", "C. Có độ phức tạp là O(log)", "D. Có độ phức tạp là O(1)"],
    correct_option: "A",
    explanation: "Nếu mảng đã xếp sẵn, Bubble Sort tối ưu chạy mất O(n)."
  },
  {
    id: "Q_MOD_B_090", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật tính trung bình của một khung dữ liệu trượt gọi là gì?",
    options: ["A. Trung bình trượt (Rolling)", "B. Phép toán vi phân thời gian", "C. Chuẩn hóa thang đo dữ liệu", "D. Tách chuỗi thời gian ra"],
    correct_option: "A",
    explanation: "Tính trung bình trong cửa sổ trượt gọi là Rolling Mean."
  },
  {
    id: "Q_MOD_B_091", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Decorator trong Python dùng để làm gì?",
    options: ["A. Thêm tính năng cho hàm.", "B. Xóa đi một hàm cũ có.", "C. Định nghĩa một biến mới.", "D. In dữ liệu ra màn hình."],
    correct_option: "A",
    explanation: "Decorator giúp bổ sung tính năng cho một hàm mà không đổi code gốc."
  },
  {
    id: "Q_MOD_B_092", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong Quick Sort, bước chia mảng thành hai phần gọi là gì?",
    options: ["A. Bước phân hoạch (Partition)", "B. Bước trộn mảng (Merge array)", "C. Bước sắp xếp chèn (Insert)", "D. Bước hoán đổi ngẫu nhiên"],
    correct_option: "A",
    explanation: "Bước phân chia mảng theo phần tử chốt gọi là phân hoạch."
  },
  {
    id: "Q_MOD_B_093", module_id: "Module_B", difficulty: "Medium",
    tags: ["tokenization"],
    content: "Thuật toán tokenization BPE ghép các ký tự dựa vào cái gì?",
    options: ["A. Tần suất xuất hiện cặp.", "B. Độ dài của các từ ghép.", "C. Ý nghĩa ngữ pháp của từ.", "D. Thứ tự trong bảng chữ."],
    correct_option: "A",
    explanation: "BPE ghép các cặp ký tự xuất hiện nhiều nhất thành token mới."
  },
  {
    id: "Q_MOD_B_094", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong Max-Heap, phần tử nằm ở gốc (root) có đặc điểm gì?",
    options: ["A. Là phần tử có giá trị lớn nhất.", "B. Là phần tử có giá trị nhỏ nhất.", "C. Là phần tử có giá trị bằng không.", "D. Là phần tử có giá trị ngẫu nhiên."],
    correct_option: "A",
    explanation: "Max-Heap duy trì phần tử lớn nhất tại gốc."
  },
  {
    id: "Q_MOD_B_095", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cú pháp `if __name__ == '__main__':` dùng để làm gì?",
    options: ["A. Chỉ chạy code khi chạy file này.", "B. Khai báo một lớp đối tượng mới.", "C. Bắt lỗi khi chương trình bị hỏng.", "D. Tự động đóng tệp tin sau khi mở."],
    correct_option: "A",
    explanation: "Giúp đoạn mã chỉ chạy khi file được thực thi trực tiếp."
  },
  {
    id: "Q_MOD_B_096", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán Dijkstra dùng để tìm cái gì trên đồ thị?",
    options: ["A. Đường đi ngắn nhất.", "B. Số lượng đỉnh đồ thị.", "C. Các đỉnh bị cô lập có.", "D. Chu trình âm đồ thị."],
    correct_option: "A",
    explanation: "Dijkstra tìm đường đi ngắn nhất từ một đỉnh nguồn."
  },
  {
    id: "Q_MOD_B_097", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Đoạn mã tính độ chính xác Accuracy đo lường điều gì của mô hình?",
    options: ["A. Tỷ lệ dự đoán đúng của mô hình.", "B. Thời gian mô hình chạy huấn luyện.", "C. Bộ nhớ mô hình chiếm dụng của máy.", "D. Số lượng tham số của mạng nơ-ron."],
    correct_option: "A",
    explanation: "Accuracy bằng số mẫu dự đoán đúng chia cho tổng số mẫu."
  },
  {
    id: "Q_MOD_B_098", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, hàm nào dùng để lấy phần tử tiếp theo của iterator?",
    options: ["A. Sử dụng hàm next()", "B. Sử dụng hàm get()", "C. Sử dụng hàm pop()", "D. Sử dụng hàm index()"],
    correct_option: "A",
    explanation: "Hàm next() dùng để lấy giá trị tiếp theo từ iterator."
  },
  {
    id: "Q_MOD_B_099", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Bài toán cái túi (Knapsack Problem) nhằm mục đích gì?",
    options: ["A. Chọn đồ vật để đạt giá trị lớn nhất.", "B. Sắp xếp đồ vật theo thứ tự cân nặng.", "C. Xóa bớt các đồ vật bị hỏng trong kho.", "D. Đổi tên của các đồ vật có trong túi."],
    correct_option: "A",
    explanation: "Knapsack tìm cách chọn đồ vật sao cho giá trị lớn nhất mà không quá tải trọng."
  },
  {
    id: "Q_MOD_B_100", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong Transformer, kỹ thuật Masking dùng để che cái gì?",
    options: ["A. Che đi các từ ở tương lai khi học.", "B. Che đi các từ bị viết sai chính tả.", "C. Che đi các từ dừng xuất hiện nhiều.", "D. Che đi các từ khóa quan trọng nhất."],
    correct_option: "A",
    explanation: "Masking ngăn mô hình nhìn thấy trước các từ tương lai khi huấn luyện."
  }
];
