const QUESTIONS_B = [
  {
    id: "Q_MOD_B_001", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho đoạn mã sau:\n```python\ndef khu_nhieu(data):\n    result = []\n    for x in data:\n        if x is not None and x >= 0:\n            result.append(x)\n    return result\n```\nNếu đầu vào là `data = [1, -5, None, 10, 0]`, hàm sẽ trả về kết quả nào?",
    options: ["A. `[1, 10]`", "B. `[1, 10, 0]`", "C. `[1, -5, 10, 0]`", "D. Lỗi Runtime do có giá trị `None`"],
    correct_option: "B",
    explanation: "Điều kiện `x is not None and x >= 0` lọc bỏ `None` và số âm ($-5$). Số `0` thỏa mãn $\\geq 0$ nên kết quả giữ lại gồm: `1`, `10`, và `0`."
  },
  {
    id: "Q_MOD_B_002", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi chuẩn bị dữ liệu hình ảnh để huấn luyện mô hình Computer Vision, bước \"Chuẩn hóa\" (Normalization) đưa giá trị các điểm ảnh từ đoạn $[0, 255]$ về đoạn $[0, 1]$ nhằm mục đích gì chính?",
    options: ["A. Giảm kích thước tệp hình ảnh để tiết kiệm bộ nhớ.", "B. Giúp thuật toán tối ưu (gradient descent) hội tụ nhanh hơn và ổn định hơn.", "C. Biến đổi ảnh màu thành ảnh xám.", "D. Tăng độ phân giải của hình ảnh."],
    correct_option: "B",
    explanation: "Đưa dữ liệu về cùng một khoảng thang đo giúp các bước tính toán đạo hàm và cập nhật trọng số trong mạng nơ-ron diễn ra cân bằng, tránh hiện tượng bùng nổ hoặc tiêu biến gradient."
  },
  {
    id: "Q_MOD_B_003", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Khi xây dựng tính năng \"Lịch sử thao tác\" (Undo/Redo) cho công cụ dán nhãn dữ liệu AI, cấu trúc dữ liệu nào phù hợp nhất để lưu trữ các bước theo cơ chế \"Vào sau, Ra trước\" (LIFO)?",
    options: ["A. Hàng đợi (Queue)", "B. Ngăn xếp (Stack)", "C. Mảng một chiều (Array)", "D. Bảng băm (Hash Table)"],
    correct_option: "B",
    explanation: "Thao tác Undo đòi hỏi phải lấy ra hành động gần đây nhất vừa được thêm vào, tuân theo đúng nguyên lý LIFO (Last In, First Out) của Ngăn xếp (Stack)."
  },
  {
    id: "Q_MOD_B_004", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Xét đoạn Python sau:\n```python\nlabels = ['cat', 'dog', 'cat', 'cat', 'dog', 'bird']\ncount_dict = {}\nfor label in labels:\n    count_dict[label] = count_dict.get(label, 0) + 1\n```\nSau khi chạy, giá trị của `count_dict['cat']` là bao nhiêu?",
    options: ["A. 1", "B. 2", "C. 3", "D. 5"],
    correct_option: "C",
    explanation: "Vòng lặp duyệt qua danh sách, mỗi lần gặp 'cat' tăng giá trị đếm lên 1. Từ 'cat' xuất hiện 3 lần trong danh sách `labels`."
  },
  {
    id: "Q_MOD_B_005", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Bạn phát hiện tập dữ liệu bảng có một cột \"Tuổi\" nhưng có một số hàng bị trống (giá trị `NaN`). Phương pháp nào sau đây **không** nên dùng nếu muốn giữ lại tối đa số lượng hàng dữ liệu?",
    options: ["A. Thay thế các giá trị trống bằng giá trị trung bình (Mean).", "B. Thay thế các giá trị trống bằng giá trị trung vị (Median).", "C. Xóa bỏ hoàn toàn tất cả các hàng có chứa giá trị trống.", "D. Dự đoán giá trị trống bằng một mô hình hồi quy phụ."],
    correct_option: "C",
    explanation: "Việc xóa bỏ hàng (Drop rows) sẽ làm mất đi dữ liệu của các cột khác trong hàng đó, không thỏa mãn tiêu chí 'giữ lại tối đa số lượng hàng'."
  },
  {
    id: "Q_MOD_B_006", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Hãy quan sát hàm đệ quy Python:\n```python\ndef tinh_toan(n):\n    if n <= 1:\n        return 1\n    return n * tinh_toan(n - 1)\n```\nNếu ta gọi `tinh_toan(4)`, kết quả trả về sẽ là bao nhiêu?",
    options: ["A. $4$", "B. $10$", "C. $24$", "D. $120$"],
    correct_option: "C",
    explanation: "Đây là hàm tính Giai thừa ($n!$) bằng đệ quy. `tinh_toan(4)` = $4 \\times 3 \\times 2 \\times 1 = 24$."
  },
  {
    id: "Q_MOD_B_007", module_id: "Module_B", difficulty: "Easy",
    tags: ["tokenization"],
    content: "Trong quá trình xử lý dữ liệu dạng văn bản (NLP) tiếng Việt trước khi đưa vào mô hình AI, bước \"Tokenization\" (Tách từ) đóng vai trò gì?",
    options: ["A. Chuyển đổi toàn bộ văn bản từ chữ hoa thành chữ thường.", "B. Sửa các lỗi chính tả có trong đoạn văn bản gốc.", "C. Cắt đoạn văn bản thành các đơn vị từ hoặc cụm từ có nghĩa thay vì để rời rạc từng chữ cái.", "D. Dịch đoạn văn bản đó sang tiếng Anh."],
    correct_option: "C",
    explanation: "Tokenization giúp AI hiểu đúng cụm từ có nghĩa thay vì hiểu sai thành các từ đơn lẻ đối với các ngôn ngữ có từ ghép như tiếng Việt."
  },
  {
    id: "Q_MOD_B_008", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\narr = [1, 2, 3, 4, 5]\nnew_arr = [x * 2 for x in arr if x % 2 != 0]\n```\nGiá trị của `new_arr` sau khi thực hiện là gì?",
    options: ["A. `[2, 4, 6, 8, 10]`", "B. `[4, 8]`", "C. `[2, 6, 10]`", "D. `[1, 3, 5]`"],
    correct_option: "C",
    explanation: "Điều kiện `if x % 2 != 0` lọc ra các số lẻ `1, 3, 5`. Biểu thức `x * 2` nhân đôi các số này → thu được `[2, 6, 10]`."
  },
  {
    id: "Q_MOD_B_009", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu nào dựa trên nguyên tắc **FIFO (First In, First Out)**, thường được dùng để thiết lập hàng đợi xử lý luồng ảnh từ các camera gửi về máy chủ AI?",
    options: ["A. Stack (Ngăn xếp)", "B. Queue (Hàng đợi)", "C. Tree (Cây)", "D. Graph (Đồ thị)"],
    correct_option: "B",
    explanation: "Hàng đợi (Queue) hoạt động theo nguyên tắc FIFO (Vào trước, Ra trước). Ảnh nào do camera gửi đến trước sẽ được xếp hàng xử lý trước."
  },
  {
    id: "Q_MOD_B_010", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Hàm nào trong Python được dùng để chuyển đổi chuỗi `\"  AI và Đời Sống  \"` thành `\"AI và Đời Sống\"` (loại bỏ khoảng trắng thừa ở hai đầu)?",
    options: ["A. `split()`", "B. `replace()`", "C. `strip()`", "D. `lower()`"],
    correct_option: "C",
    explanation: "Trong Python, hàm `strip()` được thiết kế để loại bỏ toàn bộ các ký tự khoảng trắng thừa ở hai đầu của một chuỗi văn bản."
  },
  {
    id: "Q_MOD_B_011", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Khi viết mã nguồn huấn luyện mô hình, nếu bạn gặp lỗi **\"IndexError: list index out of range\"**, điều này có nghĩa là gì?",
    options: ["A. Biến của bạn chưa được định nghĩa.", "B. Bạn đang cố truy cập vào một phần tử tại vị trí chỉ số không tồn tại trong danh sách.", "C. Máy tính bị tràn bộ nhớ RAM.", "D. Kiểu dữ liệu truyền vào hàm bị sai."],
    correct_option: "B",
    explanation: "Lỗi này xảy ra khi bạn cố gắng truy cập phần tử bằng chỉ số vượt quá độ dài danh sách (ví dụ danh sách có 3 phần tử nhưng gọi index số 5)."
  },
  {
    id: "Q_MOD_B_012", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-augmentation"],
    content: "Trong xử lý dữ liệu ảnh, việc lật ảnh (Flip), xoay ảnh (Rotate), hoặc thay đổi độ sáng ngẫu nhiên của các ảnh có sẵn nhằm tăng số lượng và tính đa dạng được gọi là kỹ thuật gì?",
    options: ["A. Data Normalization (Chuẩn hóa dữ liệu)", "B. Data Augmentation (Tăng cường dữ liệu)", "C. Data Cleaning (Làm sạch dữ liệu)", "D. Feature Selection (Chọn lọc đặc trưng)"],
    correct_option: "B",
    explanation: "Tăng cường dữ liệu (Data Augmentation) tạo ra các mẫu dữ liệu mới nhân tạo từ dữ liệu gốc nhằm làm phong phú tập huấn luyện, giúp mô hình tránh quá khớp."
  },
  {
    id: "Q_MOD_B_013", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho đoạn mã Python:\n```python\ndef check_data(val):\n    try:\n        return 10 / val\n    except ZeroDivisionError:\n        return \"Lỗi chia cho 0\"\n    except TypeError:\n        return \"Lỗi kiểu dữ liệu\"\n```\nNếu gọi `check_data(\"AI\")`, kết quả trả về là gì?",
    options: ["A. `Lỗi chia cho 0`", "B. `Lỗi kiểu dữ liệu`", "C. Chương trình bị crash", "D. `None`"],
    correct_option: "B",
    explanation: "Phép toán `10 / \"AI\"` thực hiện phép chia giữa một số và một chuỗi chữ, gây ra lỗi `TypeError`, bị khối `except TypeError` bắt lại."
  },
  {
    id: "Q_MOD_B_014", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Bạn muốn lưu trữ thông tin cấu hình của một mô hình AI bao gồm các cặp `Tên tham số` và `Giá trị`. Cấu trúc dữ liệu nào trong Python hỗ trợ truy xuất nhanh nhất theo cơ chế khóa-giá trị (key-value)?",
    options: ["A. List", "B. Tuple", "C. Dictionary", "D. Set"],
    correct_option: "C",
    explanation: "Dictionary trong Python lưu trữ dữ liệu dưới dạng `{key: value}` dựa trên cơ chế bảng băm (Hash table), giúp việc tìm kiếm theo khóa đạt tốc độ tối ưu $O(1)$."
  },
  {
    id: "Q_MOD_B_015", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi làm việc với dữ liệu dạng bảng, khái niệm **\"One-Hot Encoding\"** thường được dùng để xử lý loại dữ liệu nào?",
    options: ["A. Dữ liệu số liên tục.", "B. Dữ liệu dạng phân loại chữ/nhãn (Categorical) không có thứ tự (ví dụ: Đỏ, Xanh, Vàng).", "C. Dữ liệu dạng ngày tháng năm.", "D. Dữ liệu dạng ảnh độ phân giải cao."],
    correct_option: "B",
    explanation: "Thuật toán AI chỉ hiểu dữ liệu số. **One-Hot Encoding** tách cột phân loại chữ thành các cột nhị phân riêng biệt (`0` hoặc `1`) mà không áp đặt thứ tự lớn nhỏ sai lệch lên dữ liệu."
  },
  {
    id: "Q_MOD_B_016", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Đoạn code Python dưới đây thực hiện thuật toán tìm kiếm nào?\n```python\ndef find_item(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n```",
    options: ["A. Tìm kiếm nhị phân (Binary Search)", "B. Tìm kiếm tuyến tính (Linear Search)", "C. Tìm kiếm theo chiều sâu (DFS)", "D. Sắp xếp nổi bọt (Bubble Sort)"],
    correct_option: "B",
    explanation: "Đoạn mã duyệt lần lượt qua từng phần tử từ đầu đến cuối mảng để so sánh với mục tiêu (`target`), đây chính là Tìm kiếm tuyến tính."
  },
  {
    id: "Q_MOD_B_017", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Tại sao khi lưu trữ cơ sở dữ liệu lớn phục vụ hệ thống AI, người ta thường hạn chế dùng file Excel (`.xlsx`) mà ưu tiên dùng file dạng `.csv` hoặc các hệ quản trị CSDL?",
    options: ["A. File Excel chạy nhanh hơn nhưng tốn dung lượng hơn.", "B. File CSV hoặc CSDL lưu trữ văn bản thuần túy/cấu trúc tối giản, giúp việc đọc/ghi nhanh hơn và không bị giới hạn số dòng lớn như Excel.", "C. Excel không thể lưu trữ được số thập phân.", "D. File Excel dễ bị nhiễm virus AI hơn."],
    correct_option: "B",
    explanation: "Định dạng CSV hoặc hệ CSDL lưu dữ liệu tối giản dạng thô, giúp hệ thống đọc ghi dữ liệu lớn nhanh hơn và phá bỏ giới hạn tối đa khoảng 1 triệu dòng của Excel."
  },
  {
    id: "Q_MOD_B_018", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, kết quả của phép toán `11 // 3` và `11 % 3` lần lượt là gì?",
    options: ["A. `3` và `2`", "B. `3.66` và `2`", "C. `3` và `1`", "D. `2` và `3`"],
    correct_option: "A",
    explanation: "Toán tử `//` là phép chia lấy phần nguyên ($11 \\div 3 = 3$ dư $2$). Toán tử `%` là phép chia lấy phần dư ($11 \\% 3 = 2$)."
  },
  {
    id: "Q_MOD_B_019", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Đoạn mã Python nào sau đây dùng để mở và đọc nội dung một file văn bản mang tên `data.txt` một cách an toàn nhất (tự động đóng file sau khi dùng xong)?",
    options: ["A. `file = open('data.txt', 'r')`", "B. `with open('data.txt', 'r') as file:`", "C. `read_file('data.txt')`", "D. `import data.txt`"],
    correct_option: "B",
    explanation: "Cú pháp `with ... as ...` (Context Manager) đảm bảo tài nguyên hệ thống luôn được đóng lại một cách tự động và an toàn sau khi khối lệnh kết thúc, tránh rò rỉ bộ nhớ."
  },
  {
    id: "Q_MOD_B_020", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Thuật toán Sắp xếp nổi bọt (Bubble Sort) hoạt động bằng cách nào?",
    options: ["A. Chia đôi mảng liên tục rồi gộp lại theo thứ tự.", "B. Duyệt qua mảng nhiều lần, so sánh các cặp phần tử kề nhau và hoán đổi chúng nếu sai thứ tự cho đến khi mảng được sắp xếp.", "C. Chọn phần tử ngẫu nhiên làm chốt (Pivot) rồi phân loại mảng.", "D. Lấy ngẫu nhiên các phần tử và xếp vào vị trí trống."],
    correct_option: "B",
    explanation: "Bubble Sort hoạt động bằng cách liên tục đổi chỗ các phần tử kề nhau nếu chúng đứng sai thứ tự, làm cho các phần tử lớn nhất 'nổi' dần về cuối mảng."
  },
  {
    id: "Q_MOD_B_021", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi dữ liệu hình ảnh đầu vào quá lớn, việc giảm kích thước ảnh (ví dụ từ $1920 \\times 1080$ về $224 \\times 224$) trước khi đưa vào mô hình Deep Learning có tác dụng chính là gì?",
    options: ["A. Giúp mô hình nhận diện màu sắc đẹp hơn.", "B. Giảm số lượng tham số tính toán, tăng tốc độ huấn luyện và giảm tải bộ nhớ GPU/RAM.", "C. Làm tăng độ chi tiết của các vật thể nhỏ trong ảnh.", "D. Chuyển ảnh màu thành ảnh đen trắng."],
    correct_option: "B",
    explanation: "Resize ảnh về kích thước tiêu chuẩn nhỏ hơn giúp cắt giảm hàng triệu tham số không cần thiết, giúp cân bằng giữa độ chính xác và hiệu năng phần cứng."
  },
  {
    id: "Q_MOD_B_022", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Trong cấu trúc dữ liệu, một **Đồ thị (Graph)** bao gồm những thành phần cốt lõi nào?",
    options: ["A. Các nút (Nodes/Vertices) và các cạnh kết nối (Edges).", "B. Các dòng và các cột.", "C. Các phần tử xếp chồng lên nhau tuân theo cơ chế LIFO.", "D. Các cặp Khóa (Key) và Giá trị (Value)."],
    correct_option: "A",
    explanation: "Đồ thị là cấu trúc dữ liệu phi tuyến tính, gồm một tập hợp các đỉnh (Nodes) kết nối với nhau bởi các đường nối gọi là cạnh (Edges)."
  },
  {
    id: "Q_MOD_B_023", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, hàm `lambda` là gì? Đây là cú pháp hay được dùng trong các hàm như `map()`, `filter()`, `sorted()`.",
    options: ["A. Một hàm được định nghĩa đầy đủ với từ khóa `def`.", "B. Một hàm ẩn danh (anonymous function) nhỏ gọn được định nghĩa trên một dòng.", "C. Một thư viện toán học trong Python.", "D. Một biến toàn cục (global variable)."],
    correct_option: "B",
    explanation: "Hàm `lambda` là hàm ẩn danh một dòng: `lambda args: expression`. Ví dụ: `f = lambda x: x * 2` tương đương với `def f(x): return x * 2`. Thường dùng khi cần hàm ngắn gọn tức thời."
  },
  {
    id: "Q_MOD_B_024", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Sự khác biệt chính giữa **Tuple** và **List** trong Python là gì?",
    options: ["A. Tuple lưu trữ số, còn List lưu trữ chuỗi.", "B. Tuple là bất biến (immutable – không thể thay đổi sau khi tạo), còn List có thể thay đổi (mutable).", "C. Tuple nhanh hơn List trong mọi trường hợp.", "D. List không hỗ trợ chỉ số (index), còn Tuple thì có."],
    correct_option: "B",
    explanation: "Tuple là **immutable**: sau khi tạo không thể thêm/xóa/sửa phần tử. List là **mutable**: có thể thay đổi linh hoạt. Tuple thường dùng cho dữ liệu cố định như tọa độ $(x, y)$, giúp tránh thay đổi ngoài ý muốn."
  },
  {
    id: "Q_MOD_B_025", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Kết quả của đoạn mã Python sau là gì?\n```python\nmy_list = [10, 20, 30, 40, 50]\nprint(my_list[1:4])\n```",
    options: ["A. `[10, 20, 30]`", "B. `[20, 30, 40]`", "C. `[20, 30, 40, 50]`", "D. `[10, 20, 30, 40]`"],
    correct_option: "B",
    explanation: "Cú pháp slicing `list[start:end]` lấy các phần tử từ vị trí `start` đến `end - 1` (không bao gồm `end`). `my_list[1:4]` lấy các phần tử tại index 1, 2, 3 → `[20, 30, 40]`."
  },
  {
    id: "Q_MOD_B_026", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, hàm `set()` tạo ra cấu trúc dữ liệu gì? Đặc tính quan trọng nhất của nó là gì?",
    options: ["A. Tạo ra một danh sách có thứ tự.", "B. Tạo ra một tập hợp các phần tử **duy nhất** (không có phần tử trùng lặp).", "C. Tạo ra một Dictionary rỗng.", "D. Tạo ra một Tuple bất biến."],
    correct_option: "B",
    explanation: "Set trong Python là tập hợp các phần tử **không trùng lặp** và **không có thứ tự**. Nó rất hữu ích để loại bỏ các phần tử trùng lặp trong danh sách: `list(set(my_list))`."
  },
  {
    id: "Q_MOD_B_027", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Độ phức tạp thời gian (Time Complexity) trung bình của thuật toán **Binary Search (Tìm kiếm nhị phân)** trên một mảng đã sắp xếp có $n$ phần tử là gì?",
    options: ["A. $O(n)$", "B. $O(n^2)$", "C. $O(\\log n)$", "D. $O(1)$"],
    correct_option: "C",
    explanation: "Binary Search mỗi bước chia đôi không gian tìm kiếm → số bước tối đa là $\\log_2 n$. Vì vậy, độ phức tạp là $O(\\log n)$, hiệu quả hơn nhiều so với Linear Search $O(n)$ với mảng lớn."
  },
  {
    id: "Q_MOD_B_028", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong xử lý dữ liệu tabular, **Label Encoding** và **One-Hot Encoding** đều dùng để mã hóa dữ liệu phân loại. Khi nào nên ưu tiên dùng **Label Encoding**?",
    options: ["A. Khi dữ liệu phân loại có thứ tự tự nhiên (Ordinal), ví dụ: Nhỏ < Vừa < Lớn.", "B. Khi dữ liệu phân loại không có thứ tự (Nominal), ví dụ: Đỏ, Xanh, Vàng.", "C. Khi số lượng danh mục rất lớn (>100 loại).", "D. Khi cần giảm chiều dữ liệu."],
    correct_option: "A",
    explanation: "Label Encoding gán số nguyên (0, 1, 2,...) cho các danh mục, ngầm áp đặt thứ tự. Điều này hợp lý với dữ liệu có thứ tự tự nhiên (Nhỏ=0, Vừa=1, Lớn=2). Với dữ liệu không thứ tự, phải dùng One-Hot để tránh sai lệch."
  },
  {
    id: "Q_MOD_B_029", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, **decorator** là gì? Ví dụ cú pháp `@timer` đặt trên một hàm.",
    options: ["A. Một kiểu biến đặc biệt dùng để lưu thời gian.", "B. Một hàm bậc cao (higher-order function) nhận một hàm khác làm đầu vào và trả về một hàm mới đã được 'bọc thêm' chức năng.", "C. Một từ khóa import thư viện.", "D. Một phương thức của class để khởi tạo đối tượng."],
    correct_option: "B",
    explanation: "Decorator là một hàm bậc cao cho phép thêm chức năng vào một hàm khác mà không cần sửa đổi code gốc. Ví dụ: `@timer` sẽ đo thời gian chạy của hàm mà không cần thay đổi logic bên trong."
  },
  {
    id: "Q_MOD_B_030", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán **Merge Sort** hoạt động theo phương pháp nào và độ phức tạp thời gian của nó là bao nhiêu?",
    options: ["A. Chọn phần tử pivot và phân mảng, $O(n \\log n)$ trung bình.", "B. Chia đôi mảng đệ quy rồi gộp lại theo thứ tự, $O(n \\log n)$ trong mọi trường hợp.", "C. So sánh các phần tử kề nhau và hoán đổi, $O(n^2)$.", "D. Chèn từng phần tử vào đúng vị trí, $O(n^2)$."],
    correct_option: "B",
    explanation: "Merge Sort chia mảng thành $\\log n$ cấp độ, mỗi cấp độ mất $O(n)$ để gộp → tổng $O(n \\log n)$ cho mọi trường hợp (best/average/worst). Đây là thuật toán ổn định (stable sort) và hiệu quả."
  },
  {
    id: "Q_MOD_B_031", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong học máy, **Cross-Validation (k-Fold)** là kỹ thuật đánh giá mô hình như thế nào?",
    options: ["A. Chia dữ liệu thành train (80%) và test (20%) một lần duy nhất.", "B. Chia dữ liệu thành $k$ phần bằng nhau, lần lượt dùng từng phần làm tập kiểm tra và phần còn lại làm tập huấn luyện, lấy trung bình kết quả.", "C. Huấn luyện $k$ mô hình khác nhau trên toàn bộ dữ liệu.", "D. Dùng tập kiểm tra (test set) để tinh chỉnh siêu tham số."],
    correct_option: "B",
    explanation: "k-Fold Cross-Validation đánh giá mô hình chính xác hơn bằng cách dùng toàn bộ dữ liệu cho cả huấn luyện và kiểm tra qua $k$ vòng lặp. Giúp giảm thiểu sai lệch do phân chia ngẫu nhiên và cho ước lượng tổng quát hóa đáng tin cậy hơn."
  },
  {
    id: "Q_MOD_B_032", module_id: "Module_B", difficulty: "Medium",
    tags: ["tokenization"],
    content: "Trong NLP, **BPE (Byte Pair Encoding)** là thuật toán tokenization làm gì?",
    options: ["A. Tách văn bản theo khoảng trắng để tạo từng từ riêng biệt.", "B. Chia mỗi từ thành từng ký tự đơn lẻ.", "C. Học cách kết hợp các cặp ký tự/subword phổ biến nhất để tạo từ điển subword linh hoạt, xử lý được cả từ chưa thấy (OOV).", "D. Chuyển toàn bộ văn bản thành mã nhị phân."],
    correct_option: "C",
    explanation: "BPE bắt đầu từ các ký tự riêng lẻ, sau đó lặp đi lặp lại ghép các cặp xuất hiện thường xuyên nhất. Kết quả là từ điển subword xử lý được từ mới (OOV) bằng cách tách thành các subword đã biết. Được dùng trong GPT, BERT."
  },
  {
    id: "Q_MOD_B_033", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Trong NLP, **Data Augmentation** cho văn bản có thể thực hiện bằng các kỹ thuật nào?",
    options: ["A. Chỉ thay đổi cỡ chữ và màu sắc của văn bản.", "B. Thay thế từ đồng nghĩa (Synonym Replacement), hoán đổi vị trí từ (Random Swap), dịch ngược (Back-translation).", "C. Xóa bỏ tất cả dấu câu trong văn bản.", "D. Chuyển đổi mã hóa ký tự (UTF-8 sang ASCII)."],
    correct_option: "B",
    explanation: "Các kỹ thuật data augmentation cho text bao gồm: thay thế từ đồng nghĩa, xóa từ ngẫu nhiên, hoán đổi vị trí từ, chèn từ ngẫu nhiên, dịch sang ngôn ngữ khác rồi dịch ngược (back-translation). Giúp tăng đa dạng dữ liệu huấn luyện."
  },
  {
    id: "Q_MOD_B_034", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, `*args` và `**kwargs` trong định nghĩa hàm có ý nghĩa gì?",
    options: ["A. `*args` là giá trị mặc định, `**kwargs` là kiểu trả về.", "B. `*args` nhận số lượng đối số vị trí (positional) tùy ý thành tuple, `**kwargs` nhận số lượng đối số từ khóa (keyword) tùy ý thành dictionary.", "C. `*args` nhân mảng với số, `**kwargs` lũy thừa.", "D. Cả hai đều chỉ dùng cho class, không dùng cho function."],
    correct_option: "B",
    explanation: "`*args` bắt tất cả các đối số vị trí thừa vào một tuple. `**kwargs` bắt tất cả các đối số keyword thừa vào một dictionary. Hữu ích khi cần hàm linh hoạt nhận số lượng tham số không cố định."
  },
  {
    id: "Q_MOD_B_035", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong thuật toán tìm kiếm **BFS (Breadth-First Search)** trên đồ thị, cấu trúc dữ liệu nào thường được dùng để quản lý thứ tự duyệt các đỉnh?",
    options: ["A. Stack (Ngăn xếp)", "B. Queue (Hàng đợi)", "C. Priority Queue (Hàng đợi ưu tiên)", "D. Binary Search Tree"],
    correct_option: "B",
    explanation: "BFS duyệt theo chiều rộng: khám phá tất cả các đỉnh ở cùng một cấp độ trước khi xuống cấp tiếp theo. Queue (FIFO) đảm bảo thứ tự duyệt đúng theo chiều rộng. DFS dùng Stack (hoặc đệ quy)."
  },
  {
    id: "Q_MOD_B_036", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "**Cây nhị phân tìm kiếm (Binary Search Tree - BST)** có tính chất gì giúp thao tác tìm kiếm hiệu quả?",
    options: ["A. Mỗi nút có đúng 2 con.", "B. Giá trị tất cả nút bên trái nhỏ hơn nút cha, tất cả nút bên phải lớn hơn nút cha.", "C. Cây phải có số nút là lũy thừa của 2.", "D. Tất cả các lá cùng chiều sâu (depth)."],
    correct_option: "B",
    explanation: "Trong BST: `left_child.value < parent.value < right_child.value`. Điều này cho phép tìm kiếm theo cơ chế nhị phân: so sánh với nút hiện tại, rẽ trái nếu nhỏ hơn, rẽ phải nếu lớn hơn → $O(\\log n)$ trung bình."
  },
  {
    id: "Q_MOD_B_037", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong xử lý dữ liệu chuỗi thời gian (Time Series) cho AI, bước **Feature Engineering** nào sau đây thường được áp dụng?",
    options: ["A. One-Hot Encoding tất cả các điểm thời gian.", "B. Trích xuất các đặc trưng như lag features, rolling mean, rolling std, ngày trong tuần, tháng trong năm.", "C. Xóa tất cả các điểm dữ liệu trước khi timestamp hiện tại.", "D. Chuyển đổi sang ảnh bitmap để dùng CNN."],
    correct_option: "B",
    explanation: "Với Time Series, các kỹ thuật Feature Engineering phổ biến gồm: Lag Features (giá trị quá khứ), Rolling Statistics (trung bình/độ lệch chuẩn trượt), Calendar Features (ngày tuần, tháng, quý), Trend/Seasonality decomposition. Những đặc trưng này giúp mô hình nắm bắt quy luật thời gian."
  },
  {
    id: "Q_MOD_B_038", module_id: "Module_B", difficulty: "Hard",
    tags: ["algorithms"],
    content: "**Dynamic Programming (Quy hoạch động)** là kỹ thuật tối ưu hóa dựa trên nguyên lý nào?",
    options: ["A. Thử tất cả các trường hợp có thể và chọn kết quả tốt nhất.", "B. Chia bài toán thành các bài toán con độc lập và giải riêng từng cái.", "C. Lưu trữ kết quả của các bài toán con đã giải để tránh tính toán lại (memoization), khai thác **Optimal Substructure** và **Overlapping Subproblems**.", "D. Áp dụng thuật toán tham lam chọn tùy chọn tốt nhất ở mỗi bước."],
    correct_option: "C",
    explanation: "Dynamic Programming giải quyết bài toán bằng cách: (1) xác định **Optimal Substructure** – nghiệm tối ưu của bài toán con đóng góp vào nghiệm tổng thể; (2) **Overlapping Subproblems** – các bài toán con lặp lại; (3) Dùng **Memoization/Tabulation** để lưu kết quả tránh tính lại. Ví dụ: Fibonacci, Knapsack, Longest Common Subsequence."
  },
  {
    id: "Q_MOD_B_039", module_id: "Module_B", difficulty: "Hard",
    tags: ["syntax-python"],
    content: "Trong Python, **GIL (Global Interpreter Lock)** ảnh hưởng như thế nào đến lập trình đa luồng (multithreading) cho các tác vụ AI nặng tính toán (CPU-bound)?",
    options: ["A. GIL giúp chương trình đa luồng chạy nhanh gấp đôi với 2 CPU.", "B. GIL cho phép chỉ một thread Python chạy bytecode tại một thời điểm, làm cho đa luồng không cải thiện hiệu năng cho tác vụ CPU-bound. Nên dùng multiprocessing thay thế.", "C. GIL chỉ ảnh hưởng đến I/O, không ảnh hưởng đến tính toán.", "D. GIL là một thư viện GPU dành cho deep learning."],
    correct_option: "B",
    explanation: "GIL là cơ chế khóa trong CPython đảm bảo chỉ một thread Python thực thi bytecode tại một thời điểm. Với tác vụ CPU-bound (tính toán nặng), đa luồng không giúp tăng tốc. Giải pháp: dùng `multiprocessing` để tạo nhiều process độc lập, hoặc dùng NumPy/PyTorch (giải phóng GIL khi gọi C extensions)."
  },
  {
    id: "Q_MOD_B_040", module_id: "Module_B", difficulty: "Hard",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật **Feature Scaling** bằng **StandardScaler** (Z-score Normalization) khác với **MinMaxScaler** như thế nào?",
    options: ["A. StandardScaler đưa dữ liệu về $[0,1]$, MinMaxScaler đưa về phân phối chuẩn.", "B. StandardScaler chuyển dữ liệu thành phân phối có mean=0, std=1 (dùng với phân phối chuẩn). MinMaxScaler đưa dữ liệu về $[0,1]$ (bị ảnh hưởng bởi outlier).", "C. Cả hai đều cho kết quả giống hệt nhau.", "D. MinMaxScaler chỉ hoạt động với dữ liệu phân loại."],
    correct_option: "B",
    explanation: "StandardScaler: $x' = \\frac{x - \\mu}{\\sigma}$, kết quả có mean=0, std=1. Phù hợp với các thuật toán giả định phân phối chuẩn (SVM, PCA, Linear Regression). MinMaxScaler: $x' = \\frac{x - x_{min}}{x_{max} - x_{min}}$, đưa về $[0,1]$ nhưng nhạy cảm với outlier."
  },
  {
    id: "Q_MOD_B_041", module_id: "Module_B", difficulty: "Hard",
    tags: ["algorithms"],
    content: "Trong bài toán phát hiện cộng đồng (Community Detection) trên mạng xã hội sử dụng đồ thị, thuật toán nào phổ biến nhất?",
    options: ["A. Bubble Sort", "B. Binary Search", "C. Louvain Algorithm (dựa trên modularity optimization)", "D. Quick Sort"],
    correct_option: "C",
    explanation: "Thuật toán Louvain là phương pháp phổ biến nhất cho Community Detection trên đồ thị lớn. Nó tối ưu **modularity** – chỉ số đo lường mức độ tập trung các cạnh trong cộng đồng so với mạng ngẫu nhiên. Thuật toán chạy nhanh và có thể xử lý đồ thị hàng triệu đỉnh."
  },
  {
    id: "Q_MOD_B_042", module_id: "Module_B", difficulty: "Hard",
    tags: ["data-structures"],
    content: "**Inverted Index** (Chỉ mục ngược) là cấu trúc dữ liệu nền tảng của các công cụ tìm kiếm (như Elasticsearch). Nó hoạt động như thế nào?",
    options: ["A. Lưu danh sách tài liệu theo thứ tự thêm vào.", "B. Với mỗi từ khóa, lưu danh sách tất cả các tài liệu có chứa từ khóa đó, kèm vị trí xuất hiện.", "C. Sắp xếp các tài liệu theo thứ tự bảng chữ cái.", "D. Nén toàn bộ nội dung tài liệu thành mã nhị phân."],
    correct_option: "B",
    explanation: "Inverted Index ánh xạ từ mỗi **từ khóa** → **danh sách (posting list)** các tài liệu chứa từ đó, kèm tần suất và vị trí. Khi tìm kiếm, chỉ cần tra bảng từ khóa và lấy giao của các posting lists → rất nhanh. Nền tảng của TF-IDF, BM25 trong Information Retrieval."
  },
  {
    id: "Q_MOD_B_043", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Kết quả của đoạn mã Python dưới đây là gì?\n```python\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())\n```",
    options: ["A. `10`", "B. `5`", "C. `15`", "D. Lỗi `UnboundLocalError`"],
    correct_option: "C",
    explanation: "Từ khóa `nonlocal x` cho phép hàm `inner` truy cập và **sửa đổi** biến `x` của hàm `outer` (khác với biến local của `inner`). Sau khi gọi `inner()`, `x` thay đổi từ $10$ thành $10 + 5 = 15$."
  },
  {
    id: "Q_MOD_B_044", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi xử lý dữ liệu văn bản, bước **Stemming** và **Lemmatization** đều dùng để làm gì?",
    options: ["A. Chuyển đổi văn bản sang ngôn ngữ khác.", "B. Đưa các biến thể của một từ về dạng gốc để giảm kích thước từ điển (ví dụ: 'running', 'runs', 'ran' → 'run').", "C. Loại bỏ tất cả các ký tự số trong văn bản.", "D. Mã hóa văn bản thành vector số."],
    correct_option: "B",
    explanation: "Cả Stemming và Lemmatization đều chuẩn hóa từ về dạng gốc để giảm thưa thớt từ điển. **Stemming** cắt hậu tố thô (đơn giản hơn, nhanh hơn). **Lemmatization** dùng phân tích hình thái học để trả về từ cơ sở đúng nghĩa hơn. Ví dụ: 'better' → Stemming: 'better', Lemmatization: 'good'."
  },
  {
    id: "Q_MOD_B_045", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, phương thức `zip()` được dùng để làm gì?",
    options: ["A. Nén file thành định dạng `.zip`.", "B. Kết hợp nhiều iterable lại thành từng cặp tuple tương ứng theo vị trí.", "C. Sắp xếp danh sách theo thứ tự từ điển.", "D. Đếm tần suất xuất hiện của các phần tử."],
    correct_option: "B",
    explanation: "`zip([1,2,3], ['a','b','c'])` trả về `[(1,'a'), (2,'b'), (3,'c')]`. Rất hữu ích khi cần duyệt qua nhiều danh sách song song, ví dụ duyệt qua `predictions` và `labels` cùng lúc để tính metrics."
  },
  {
    id: "Q_MOD_B_046", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Hàm `sorted()` trong Python với tham số `key` được dùng như thế nào?",
    options: ["A. `key` chỉ định chỉ số (index) cần sắp xếp.", "B. `key` nhận một hàm để trích xuất giá trị so sánh từ mỗi phần tử trước khi sắp xếp.", "C. `key` chỉ định kiểu dữ liệu sắp xếp (số hoặc chữ).", "D. `key` xác định thứ tự (tăng dần/giảm dần)."],
    correct_option: "B",
    explanation: "Ví dụ: `sorted(['banana', 'apple', 'cherry'], key=len)` sắp xếp theo độ dài chuỗi → `['apple', 'banana', 'cherry']`. `key=lambda x: x[1]` sắp xếp list of tuples theo phần tử thứ 2. Rất linh hoạt cho nhiều tiêu chí sắp xếp."
  },
  {
    id: "Q_MOD_B_047", module_id: "Module_B", difficulty: "Hard",
    tags: ["syntax-python"],
    content: "Trong Python, **Generator** (sử dụng từ khóa `yield`) khác với hàm thông thường (dùng `return`) như thế nào về mặt quản lý bộ nhớ?",
    options: ["A. Generator tạo tất cả kết quả cùng một lúc và lưu vào bộ nhớ.", "B. Generator tạo ra từng giá trị **theo yêu cầu** (lazy evaluation), không lưu toàn bộ kết quả vào bộ nhớ, rất hiệu quả với dữ liệu lớn.", "C. Generator chậm hơn hàm thông thường trong mọi trường hợp.", "D. Generator chỉ hoạt động với kiểu dữ liệu số."],
    correct_option: "B",
    explanation: "Generator dùng `yield` để trả về từng giá trị một khi được yêu cầu (lazy), trạng thái hàm được giữ nguyên giữa các lần gọi. Với tập dữ liệu 1 triệu ảnh, dùng generator để load từng batch tránh tràn RAM, thay vì load tất cả cùng lúc."
  },
  {
    id: "Q_MOD_B_048", module_id: "Module_B", difficulty: "Hard",
    tags: ["data-preprocessing"],
    content: "**Imbalanced Dataset** (Tập dữ liệu mất cân bằng) trong bài toán phân loại thường gây ra vấn đề gì và cách giải quyết nào sau đây hiệu quả?",
    options: ["A. Không gây vấn đề gì, mô hình tự điều chỉnh.", "B. Mô hình có xu hướng thiên về lớp chiếm đa số. Các giải pháp: SMOTE (sinh mẫu tổng hợp cho lớp thiểu số), undersampling lớp đa số, hoặc điều chỉnh class weights.", "C. Chỉ cần tăng learning rate để khắc phục.", "D. Xóa bỏ toàn bộ lớp thiểu số."],
    correct_option: "B",
    explanation: "Với tập mất cân bằng, mô hình học được thiên vị về lớp đa số (ví dụ: 99% Bình thường, 1% Gian lận). Giải pháp: **SMOTE** (Synthetic Minority Oversampling Technique) tạo mẫu tổng hợp cho lớp thiểu số; **Undersampling** giảm mẫu lớp đa số; **Class Weights** điều chỉnh để penalize lỗi trên lớp thiểu số nặng hơn."
  },
  {
    id: "Q_MOD_B_049", module_id: "Module_B", difficulty: "Hard",
    tags: ["algorithms"],
    content: "Trong hệ thống AI xử lý dữ liệu lớn (Big Data), **MapReduce** là mô hình lập trình làm gì?",
    options: ["A. Map dữ liệu sang một ngôn ngữ khác, Reduce nén dữ liệu.", "B. **Map**: xử lý song song từng phần dữ liệu trên nhiều node và tạo ra cặp key-value. **Reduce**: tổng hợp/gộp các kết quả cùng key từ nhiều node lại thành kết quả cuối.", "C. Map và Reduce đều là các bước sắp xếp dữ liệu.", "D. Map là thu thập dữ liệu, Reduce là xóa dữ liệu trùng."],
    correct_option: "B",
    explanation: "MapReduce (nền tảng của Hadoop) chia dữ liệu lớn thành các chunk nhỏ, **Map** xử lý song song tạo cặp (key, value), **Shuffle/Sort** nhóm các cặp cùng key, **Reduce** tổng hợp theo từng key. Ví dụ: đếm từ trong hàng tỷ document."
  },
  {
    id: "Q_MOD_B_050", module_id: "Module_B", difficulty: "Hard",
    tags: ["data-augmentation"],
    content: "Kỹ thuật **MixUp** trong Data Augmentation cho hình ảnh thực hiện điều gì đặc biệt?",
    options: ["A. Trộn lẫn hai ảnh bằng cách nội suy tuyến tính cả ảnh lẫn nhãn: $\\tilde{x} = \\lambda x_i + (1-\\lambda) x_j$, tạo ra mẫu huấn luyện mới không rõ ràng nhưng giúp mô hình học mượt mà hơn.", "B. Chỉ thay đổi màu sắc ngẫu nhiên của ảnh.", "C. Ghép hai ảnh lại thành một ảnh lớn hơn.", "D. Xóa một phần ngẫu nhiên của ảnh (Random Erasing)."],
    correct_option: "A",
    explanation: "MixUp tạo mẫu mới bằng cách nội suy tuyến tính **cả ảnh lẫn nhãn**: $\\tilde{x} = \\lambda x_i + (1-\\lambda) x_j$ và $\\tilde{y} = \\lambda y_i + (1-\\lambda) y_j$. Điều này tạo ra mẫu 'mờ' giữa hai lớp, giúp mô hình học ranh giới quyết định mượt mà hơn, giảm overfitting và cải thiện calibration."
  }
];
