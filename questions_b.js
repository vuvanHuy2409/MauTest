const QUESTIONS_B = [
  {
    id: "Q_MOD_B_001", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho đoạn mã sau:\n```python\ndef khu_nhieu(data):\n    result = []\n    for x in data:\n        if x is not None and x >= 0:\n            result.append(x)\n    return result\n```\nNếu đầu vào là `data = [1, -5, None, 10, 0]`, hàm sẽ trả về kết quả nào?",
    options: [
      "A. Kết quả là `[1, 10]`",
      "B. Kết quả là `[1, 10, 0]`",
      "C. Kết quả là `[1, -5, 10, 0]`",
      "D. Gặp lỗi Runtime do `None`"
    ],
    correct_option: "B",
    explanation: "Điều kiện `x is not None and x >= 0` lọc bỏ `None` và số âm ($-5$). Số `0` thỏa mãn $\\geq 0$ nên kết quả giữ lại gồm: `1`, `10`, và `0`."
  },
  {
    id: "Q_MOD_B_002", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi chuẩn bị dữ liệu hình ảnh để huấn luyện mô hình Computer Vision, bước \"Chuẩn hóa\" (Normalization) đưa giá trị các điểm ảnh từ đoạn $[0, 255]$ về đoạn $[0, 1]$ nhằm mục đích gì chính?",
    options: [
      "A. Tiết kiệm dung lượng bộ nhớ lưu trữ và tăng tốc truyền tải dữ liệu ảnh.",
      "B. Giúp thuật toán tối ưu (gradient descent) hội tụ nhanh hơn và ổn định hơn.",
      "C. Chuyển đổi dữ liệu ảnh màu ba kênh sang dạng ảnh xám một kênh duy nhất.",
      "D. Tăng độ phân giải vật lý và số lượng điểm ảnh hiển thị trên màn hình."
    ],
    correct_option: "B",
    explanation: "Đưa dữ liệu về cùng một khoảng thang đo giúp các bước tính toán đạo hàm và cập nhật trọng số trong mạng nơ-ron diễn ra cân bằng, tránh hiện tượng bùng nổ hoặc tiêu biến gradient."
  },
  {
    id: "Q_MOD_B_003", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Khi xây dựng tính năng \"Lịch sử thao tác\" (Undo/Redo) cho công cụ dán nhãn dữ liệu AI, cấu trúc dữ liệu nào phù hợp nhất để lưu trữ các bước theo cơ chế \"Vào sau, Ra trước\" (LIFO)?",
    options: [
      "A. Cấu trúc Hàng đợi (Queue)",
      "B. Cấu trúc Ngăn xếp (Stack)",
      "C. Cấu trúc Mảng động (Array)",
      "D. Cấu trúc Bảng băm (Hash)"
    ],
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
    options: [
      "A. Thay thế các giá trị trống bằng giá trị trung bình (Mean).",
      "B. Thay thế các giá trị trống bằng giá trị trung vị (Median).",
      "C. Xóa bỏ hoàn toàn tất cả các hàng có chứa giá trị trống.",
      "D. Dự đoán giá trị trống bằng một mô hình hồi quy phụ."
    ],
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
    options: [
      "A. Chuyển toàn bộ các ký tự viết hoa thành ký tự viết thường trong chuỗi văn bản.",
      "B. Dò tìm và sửa đổi các lỗi chính tả xuất hiện trong đoạn văn bản gốc ban đầu.",
      "C. Chia văn bản thành các từ hoặc cụm từ có nghĩa thay vì để các ký tự rời rạc.",
      "D. Dịch toàn bộ nội dung của văn bản đầu vào sang một ngôn ngữ đích khác nhau."
    ],
    correct_option: "C",
    explanation: "Tokenization giúp AI hiểu đúng cụm từ có nghĩa thay vì hiểu sai thành các từ đơn lẻ đối với các ngôn ngữ có từ ghép như tiếng Việt."
  },
  {
    id: "Q_MOD_B_008", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\narr = [1, 2, 3, 4, 5]\nnew_arr = [x * 2 for x in arr if x % 2 != 0]\n```\nGiá trị của `new_arr` sau khi thực hiện là gì?",
    options: [
      "A. `[2, 4, 6, 8]`",
      "B. `[4, 8, 12]`",
      "C. `[2, 6, 10]`",
      "D. `[1, 3, 5]`"
    ],
    correct_option: "C",
    explanation: "Điều kiện `if x % 2 != 0` lọc ra các số lẻ `1, 3, 5`. Biểu thức `x * 2` nhân đôi các số này → thu được `[2, 6, 10]`."
  },
  {
    id: "Q_MOD_B_009", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu nào dựa trên nguyên tắc **FIFO (First In, First Out)**, thường được dùng để thiết lập hàng đợi xử lý luồng ảnh từ các camera gửi về máy chủ AI?",
    options: [
      "A. Cấu trúc dữ liệu Ngăn xếp (Stack)",
      "B. Cấu trúc dữ liệu Hàng đợi (Queue)",
      "C. Cấu trúc dữ liệu Cây (Tree)",
      "D. Cấu trúc dữ liệu Đồ thị (Graph)"
    ],
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
    options: [
      "A. Biến được sử dụng trong chương trình chưa được khởi tạo hoặc khai báo.",
      "B. Chỉ số phần tử cần truy cập vượt quá phạm vi lưu trữ của danh sách.",
      "C. Bộ nhớ RAM của hệ thống bị tràn do chương trình chạy quá nhiều luồng.",
      "D. Kiểu dữ liệu của các tham số truyền vào hàm thực thi không phù hợp."
    ],
    correct_option: "B",
    explanation: "Lỗi này xảy ra khi bạn cố gắng truy cập phần tử bằng chỉ số vượt quá độ dài danh sách (ví dụ danh sách có 3 phần tử nhưng gọi index số 5)."
  },
  {
    id: "Q_MOD_B_012", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-augmentation"],
    content: "Trong xử lý dữ liệu ảnh, việc lật ảnh (Flip), xoay ảnh (Rotate), hoặc thay đổi độ sáng ngẫu nhiên của các ảnh có sẵn nhằm tăng số lượng và tính đa dạng được gọi là kỹ thuật gì?",
    options: [
      "A. Data Normalization (Chuẩn hóa dữ liệu)",
      "B. Data Augmentation (Tăng cường dữ liệu)",
      "C. Data Cleaning (Làm sạch dữ liệu mẫu)",
      "D. Feature Selection (Chọn lọc đặc trưng)"
    ],
    correct_option: "B",
    explanation: "Tăng cường dữ liệu (Data Augmentation) tạo ra các mẫu dữ liệu mới nhân tạo từ dữ liệu gốc nhằm làm phong phú tập huấn luyện, giúp mô hình tránh quá khớp."
  },
  {
    id: "Q_MOD_B_013", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho đoạn mã Python:\n```python\ndef check_data(val):\n    try:\n        return 10 / val\n    except ZeroDivisionError:\n        return \"Lỗi chia cho 0\"\n    except TypeError:\n        return \"Lỗi kiểu dữ liệu\"\n```\nNếu gọi `check_data(\"AI\")`, kết quả trả về là gì?",
    options: [
      "A. Trả về chuỗi `\"Lỗi chia cho 0\"`",
      "B. Trả về chuỗi `\"Lỗi kiểu dữ liệu\"`",
      "C. Trả về thông báo lỗi hệ thống",
      "D. Trả về giá trị mặc định `None`"
    ],
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
    options: [
      "A. Dữ liệu dạng số liên tục và có giá trị biến thiên lớn (như giá nhà, nhiệt độ).",
      "B. Dữ liệu dạng phân loại chữ không có thứ tự tự nhiên (như màu sắc, tỉnh thành).",
      "C. Dữ liệu dạng chuỗi thời gian hoặc các cột ngày tháng năm cần sắp xếp tuần tự.",
      "D. Dữ liệu dạng hình ảnh hoặc âm thanh cần xử lý qua các lớp tích chập không gian."
    ],
    correct_option: "B",
    explanation: "Thuật toán AI chỉ hiểu dữ liệu số. **One-Hot Encoding** tách cột phân loại chữ thành các cột nhị phân riêng biệt (`0` hoặc `1`) mà không áp đặt thứ tự lớn nhỏ sai lệch lên dữ liệu."
  },
  {
    id: "Q_MOD_B_016", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Đoạn code Python dưới đây thực hiện thuật toán tìm kiếm nào?\n```python\ndef find_item(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n```",
    options: [
      "A. Tìm kiếm nhị phân (Binary Search)",
      "B. Tìm kiếm tuyến tính (Linear Search)",
      "C. Tìm kiếm theo chiều sâu (DFS)",
      "D. Sắp xếp nổi bọt (Bubble Sort)"
    ],
    correct_option: "B",
    explanation: "Đoạn mã duyệt lần lượt qua từng phần tử từ đầu đến cuối mảng để so sánh với mục tiêu (`target`), đây chính là Tìm kiếm tuyến tính."
  },
  {
    id: "Q_MOD_B_017", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Tại sao khi lưu trữ cơ sở dữ liệu lớn phục vụ hệ thống AI, người ta thường hạn chế dùng file Excel (`.xlsx`) mà ưu tiên dùng file dạng `.csv` hoặc các hệ quản trị CSDL?",
    options: [
      "A. File Excel xử lý dữ liệu nhanh hơn nhưng yêu cầu dung lượng bộ nhớ lớn hơn nhiều so với CSV.",
      "B. File CSV hoặc CSDL lưu văn bản thuần túy tối giản, giúp đọc ghi nhanh và không giới hạn dòng.",
      "C. File Excel không hỗ trợ lưu trữ số thập phân có độ chính xác cao hoặc các ký tự đặc biệt.",
      "D. File Excel dễ bị lỗi bảo mật và nhiễm các mã độc từ hệ thống mạng khi chia sẻ dữ liệu lớn."
    ],
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
    options: [
      "A. `file = open('data.txt', 'r')`",
      "B. `with open('data.txt', 'r') as file:`",
      "C. `read_file('data.txt')`",
      "D. `import data.txt`"
    ],
    correct_option: "B",
    explanation: "Cú pháp `with ... as ...` (Context Manager) đảm bảo tài nguyên hệ thống luôn được đóng lại một cách tự động và an toàn sau khi khối lệnh kết thúc, tránh rò rỉ bộ nhớ."
  },
  {
    id: "Q_MOD_B_020", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Thuật toán Sắp xếp nổi bọt (Bubble Sort) hoạt động bằng cách nào?",
    options: [
      "A. Chia đôi mảng liên tục thành nhiều mảng con nhỏ rồi tiến hành gộp lại theo thứ tự tăng dần.",
      "B. Liên tục so sánh các cặp phần tử liền kề và hoán đổi chúng nếu chúng đứng sai vị trí mong muốn.",
      "C. Lựa chọn một phần tử làm chốt để phân chia mảng thành hai nửa lớn hơn và nhỏ hơn phần tử chốt.",
      "D. Trích xuất ngẫu nhiên các phần tử trong danh sách rồi điền chúng vào các vị trí trống còn lại."
    ],
    correct_option: "B",
    explanation: "Bubble Sort hoạt động bằng cách liên tục đổi chỗ các phần tử kề nhau nếu chúng đứng sai thứ tự, làm cho các phần tử lớn nhất 'nổi' dần về cuối mảng."
  },
  {
    id: "Q_MOD_B_021", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi dữ liệu hình ảnh đầu vào quá lớn, việc giảm kích thước ảnh (ví dụ từ $1920 \\times 1080$ về $224 \\times 224$) trước khi đưa vào mô hình Deep Learning có tác dụng chính là gì?",
    options: [
      "A. Giúp mô hình cải thiện khả năng hiển thị và nhận diện màu sắc của bức ảnh.",
      "B. Giảm số lượng tham số tính toán, tăng tốc độ học và giảm tải bộ nhớ GPU/RAM.",
      "C. Làm tăng độ phân giải vật lý và độ chi tiết của các vật thể nhỏ trong ảnh.",
      "D. Chuyển đổi toàn bộ dữ liệu ảnh màu ba kênh sang dạng ảnh đen trắng một kênh."
    ],
    correct_option: "B",
    explanation: "Resize ảnh về kích thước tiêu chuẩn nhỏ hơn giúp cắt giảm hàng triệu tham số không cần thiết, giúp cân bằng giữa độ chính xác và hiệu năng phần cứng."
  },
  {
    id: "Q_MOD_B_022", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Trong cấu trúc dữ liệu, một **Đồ thị (Graph)** bao gồm những thành phần cốt lõi nào?",
    options: [
      "A. Các nút dữ liệu (Nodes) và các liên kết giữa chúng (Edges).",
      "B. Các dòng dữ liệu biểu diễn thực thể và cột biểu diễn thuộc tính.",
      "C. Các phần tử được xếp chồng lên nhau tuân theo cơ chế LIFO.",
      "D. Các cặp liên kết bao gồm Khóa (Key) và Giá trị (Value) tương ứng."
    ],
    correct_option: "A",
    explanation: "Đồ thị là cấu trúc dữ liệu phi tuyến tính, gồm một tập hợp các đỉnh (Nodes) kết nối với nhau bởi các đường nối gọi là cạnh (Edges)."
  },
  {
    id: "Q_MOD_B_023", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, hàm `lambda` là gì? Đây là cú pháp hay được dùng trong các hàm như `map()`, `filter()`, `sorted()`.",
    options: [
      "A. Một phương thức được xây dựng hoàn chỉnh sử dụng từ khóa khai báo `def`.",
      "B. Một hàm ẩn danh (anonymous function) nhỏ gọn được định nghĩa trên một dòng.",
      "C. Một thư viện chuyên dùng để xử lý các phép toán khoa học và ma trận số học.",
      "D. Một biến phạm vi toàn cục lưu trữ các hằng số cấu hình của toàn chương trình."
    ],
    correct_option: "B",
    explanation: "Hàm `lambda` là hàm ẩn danh một dòng: `lambda args: expression`. Ví dụ: `f = lambda x: x * 2` tương đương với `def f(x): return x * 2`. Thường dùng khi cần hàm ngắn gọn tức thời."
  },
  {
    id: "Q_MOD_B_024", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Sự khác biệt chính giữa **Tuple** và **List** trong Python là gì?",
    options: [
      "A. Tuple chỉ có khả năng lưu trữ số, trong khi List chỉ dùng để lưu trữ các chuỗi ký tự.",
      "B. Tuple là bất biến không thể thay đổi sau khi tạo, trong khi List có thể sửa đổi linh hoạt.",
      "C. Tuple luôn có tốc độ thực thi các thao tác đọc và ghi nhanh hơn List trong mọi trường hợp.",
      "D. List không hỗ trợ truy cập bằng chỉ số, trong khi Tuple cho phép truy cập qua chỉ số index."
    ],
    correct_option: "B",
    explanation: "Tuple là **immutable**: sau khi tạo không thể thêm/xóa/sửa phần tử. List là **mutable**: có thể thay đổi linh hoạt. Tuple thường dùng cho dữ liệu cố định như tọa độ $(x, y)$, giúp tránh thay đổi ngoài ý muốn."
  },
  {
    id: "Q_MOD_B_025", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Kết quả của đoạn mã Python sau là gì?\n```python\nmy_list = [10, 20, 30, 40, 50]\nprint(my_list[1:4])\n```",
    options: [
      "A. `[10, 20, 30]`",
      "B. `[20, 30, 40]`",
      "C. `[20, 30, 40, 50]`",
      "D. `[10, 20, 30, 40]`"
    ],
    correct_option: "B",
    explanation: "Cú pháp slicing `list[start:end]` lấy các phần tử từ vị trí `start` đến `end - 1` (không bao gồm `end`). `my_list[1:4]` lấy các phần tử tại index 1, 2, 3 → `[20, 30, 40]`."
  },
  {
    id: "Q_MOD_B_026", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, hàm `set()` tạo ra cấu trúc dữ liệu gì? Đặc tính quan trọng nhất của nó là gì?",
    options: [
      "A. Tạo một danh sách các phần tử được sắp xếp theo thứ tự nhất định.",
      "B. Tạo một tập hợp các phần tử duy nhất và không chứa giá trị trùng lặp.",
      "C. Tạo một từ điển lưu trữ các cặp khóa và giá trị ở dạng trống ban đầu.",
      "D. Tạo một bộ giá trị cố định không thể sửa đổi sau khi được khởi tạo."
    ],
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
    options: [
      "A. Khi dữ liệu phân loại có thứ tự tự nhiên (ví dụ: Nhỏ < Vừa < Lớn).",
      "B. Khi dữ liệu phân loại không có thứ tự tự nhiên (ví dụ: Đỏ, Xanh, Vàng).",
      "C. Khi số lượng danh mục cần mã hóa lớn và không muốn tăng thêm số cột.",
      "D. Khi cần giảm chiều không gian vector của các đặc trưng đầu vào mô hình."
    ],
    correct_option: "A",
    explanation: "Label Encoding gán số nguyên (0, 1, 2,...) cho các danh mục, ngầm áp đặt thứ tự. Điều này hợp lý với dữ liệu có thứ tự tự nhiên (Nhỏ=0, Vừa=1, Lớn=2). Với dữ liệu không thứ tự, phải dùng One-Hot để tránh sai lệch."
  },
  {
    id: "Q_MOD_B_029", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, **decorator** là gì? Ví dụ cú pháp `@timer` đặt trên một hàm.",
    options: [
      "A. Một kiểu dữ liệu đặc biệt dùng để ghi nhận thời gian thực thi của các khối lệnh.",
      "B. Một hàm bậc cao nhận vào một hàm khác và trả về hàm mới để bổ sung thêm tính năng.",
      "C. Một từ khóa dùng để khai báo nhập các gói thư viện lập trình từ bên ngoài hệ thống.",
      "D. Một phương thức đặc biệt trong lớp dùng để khởi tạo các thuộc tính cho đối tượng."
    ],
    correct_option: "B",
    explanation: "Decorator là một hàm bậc cao cho phép thêm chức năng vào một hàm khác mà không cần sửa đổi code gốc. Ví dụ: `@timer` sẽ đo thời gian chạy của hàm mà không cần thay đổi logic bên trong."
  },
  {
    id: "Q_MOD_B_030", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán **Merge Sort** hoạt động theo phương pháp nào và độ phức tạp thời gian của nó là bao nhiêu?",
    options: [
      "A. Chọn phần tử chốt rồi phân chia mảng, độ phức tạp trung bình là $O(n \\log n)$.",
      "B. Chia đôi mảng đệ quy rồi gộp lại, độ phức tạp luôn luôn là $O(n \\log n)$.",
      "C. So sánh liên tiếp hai phần tử liền kề và đổi chỗ, độ phức tạp là $O(n^2)$.",
      "D. Tìm vị trí thích hợp để chèn từng phần tử vào, độ phức tạp là $O(n^2)$."
    ],
    correct_option: "B",
    explanation: "Merge Sort chia mảng thành $\\log n$ cấp độ, mỗi cấp độ mất $O(n)$ để gộp → tổng $O(n \\log n)$ cho mọi trường hợp (best/average/worst). Đây là thuật toán ổn định (stable sort) và hiệu quả."
  },
  {
    id: "Q_MOD_B_031", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong học máy, **Cross-Validation (k-Fold)** là kỹ thuật đánh giá mô hình như thế nào?",
    options: [
      "A. Chia tập dữ liệu thành hai phần huấn luyện và kiểm tra với tỷ lệ cố định một lần duy nhất.",
      "B. Chia dữ liệu thành $k$ phần, luân phiên dùng một phần để kiểm tra và phần còn lại để huấn luyện.",
      "C. Tiến hành huấn luyện đồng thời $k$ mô hình hoàn toàn khác nhau trên cùng một tập dữ liệu gốc.",
      "D. Sử dụng trực tiếp tập kiểm tra cuối cùng để điều chỉnh các siêu tham số trong quá trình học."
    ],
    correct_option: "B",
    explanation: "k-Fold Cross-Validation đánh giá mô hình chính xác hơn bằng cách dùng toàn bộ dữ liệu cho cả huấn luyện và kiểm tra qua $k$ vòng lặp. Giúp giảm thiểu sai lệch do phân chia ngẫu nhiên và cho ước lượng tổng quát hóa đáng tin cậy hơn."
  },
  {
    id: "Q_MOD_B_032", module_id: "Module_B", difficulty: "Medium",
    tags: ["tokenization"],
    content: "Trong NLP, **BPE (Byte Pair Encoding)** là thuật toán tokenization làm gì?",
    options: [
      "A. Phân tách chuỗi văn bản dựa vào các khoảng trắng để tạo ra danh sách các từ đơn lẻ.",
      "B. Chia nhỏ mỗi từ trong câu thành tập hợp các ký tự độc lập và lưu trữ vào từ điển mẫu.",
      "C. Ghép các cặp ký tự phổ biến để xây dựng từ điển subword, giải quyết được lỗi từ mới (OOV).",
      "D. Mã hóa toàn bộ các ký tự trong văn bản thành chuỗi nhị phân phục vụ tính toán trực tiếp."
    ],
    correct_option: "C",
    explanation: "BPE bắt đầu từ các ký tự riêng lẻ, sau đó lặp đi lặp lại ghép các cặp xuất hiện thường xuyên nhất. Kết quả là từ điển subword xử lý được từ mới (OOV) bằng cách tách thành các subword đã biết. Được dùng trong GPT, BERT."
  },
  {
    id: "Q_MOD_B_033", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Trong NLP, **Data Augmentation** cho văn bản có thể thực hiện bằng các kỹ thuật nào?",
    options: [
      "A. Điều chỉnh định dạng font chữ, tăng kích cỡ hoặc thay đổi màu sắc hiển thị của văn bản.",
      "B. Thay thế từ đồng nghĩa, hoán đổi vị trí các từ trong câu hoặc áp dụng kỹ thuật dịch ngược.",
      "C. Loại bỏ toàn bộ các dấu câu, ký tự đặc biệt hoặc các khoảng trắng thừa trong văn bản gốc.",
      "D. Chuyển đổi định dạng mã hóa ký tự của văn bản từ chuẩn UTF-8 sang chuẩn mã hóa ASCII thô."
    ],
    correct_option: "B",
    explanation: "Các kỹ thuật data augmentation cho text bao gồm: thay thế từ đồng nghĩa, xóa từ ngẫu nhiên, hoán đổi vị trí từ, chèn từ ngẫu nhiên, dịch sang ngôn ngữ khác rồi dịch ngược (back-translation). Giúp tăng đa dạng dữ liệu huấn luyện."
  },
  {
    id: "Q_MOD_B_034", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, `*args` và `**kwargs` trong định nghĩa hàm có ý nghĩa gì?",
    options: [
      "A. Sử dụng `*args` để gán giá trị mặc định cho tham số, và `**kwargs` định nghĩa kiểu dữ liệu trả về.",
      "B. Dùng `*args` gom các đối số vị trí thành tuple, và `**kwargs` gom các đối số từ khóa thành dict.",
      "C. Áp dụng `*args` để nhân ma trận với một số, và `**kwargs` dùng cho các phép tính lũy thừa ma trận.",
      "D. Cả hai cú pháp này đều được thiết kế độc quyền cho các lớp và không thể sử dụng cho hàm thông thường."
    ],
    correct_option: "B",
    explanation: "`*args` bắt tất cả các đối số vị trí thừa vào một tuple. `**kwargs` bắt tất cả các đối số keyword thừa vào một dictionary. Hữu ích khi cần hàm linh hoạt nhận số lượng tham số không cố định."
  },
  {
    id: "Q_MOD_B_035", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong thuật toán tìm kiếm **BFS (Breadth-First Search)** trên đồ thị, cấu trúc dữ liệu nào thường được dùng để quản lý thứ tự duyệt các đỉnh?",
    options: [
      "A. Cấu trúc dữ liệu Ngăn xếp (Stack)",
      "B. Cấu trúc dữ liệu Hàng đợi (Queue)",
      "C. Hàng đợi ưu tiên (Priority Queue)",
      "D. Cây tìm kiếm nhị phân (BST Tree)"
    ],
    correct_option: "B",
    explanation: "BFS duyệt theo chiều rộng: khám phá tất cả các đỉnh ở cùng một cấp độ trước khi xuống cấp tiếp theo. Queue (FIFO) đảm bảo thứ tự duyệt đúng theo chiều rộng. DFS dùng Stack (hoặc đệ quy)."
  },
  {
    id: "Q_MOD_B_036", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "**Cây nhị phân tìm kiếm (Binary Search Tree - BST)** có tính chất gì giúp thao tác tìm kiếm hiệu quả?",
    options: [
      "A. Mọi nút trên cây đều có đúng hai nút con trực tiếp.",
      "B. Nút con trái nhỏ hơn nút cha, nút con phải lớn hơn nút cha.",
      "C. Tổng số lượng nút trên cây phải là một lũy thừa của 2.",
      "D. Tất cả các nút lá đều nằm ở cùng một mức độ sâu như nhau."
    ],
    correct_option: "B",
    explanation: "Trong BST: `left_child.value < parent.value < right_child.value`. Điều này cho phép tìm kiếm theo cơ chế nhị phân: so sánh với nút hiện tại, rẽ trái nếu nhỏ hơn, rẽ phải nếu lớn hơn → $O(\\log n)$ trung bình."
  },
  {
    id: "Q_MOD_B_037", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong xử lý dữ liệu chuỗi thời gian (Time Series) cho AI, bước **Feature Engineering** nào sau đây thường được áp dụng?",
    options: [
      "A. Tiến hành One-Hot Encoding cho từng điểm thời gian cụ thể trong chuỗi.",
      "B. Tính toán các đặc trưng trễ (lag), trung bình trượt và các thông số lịch.",
      "C. Loại bỏ tất cả các bản ghi xuất hiện trước mốc thời gian hiện tại được chọn.",
      "D. Chuyển đổi dữ liệu chuỗi thời gian thành các ảnh bitmap để đưa vào mạng CNN."
    ],
    correct_option: "B",
    explanation: "Với Time Series, các kỹ thuật Feature Engineering phổ biến gồm: Lag Features (giá trị quá khứ), Rolling Statistics (trung bình/độ lệch chuẩn trượt), Calendar Features (ngày tuần, tháng, quý), Trend/Seasonality decomposition. Những đặc trưng này giúp mô hình nắm bắt quy luật thời gian."
  },
  {
    id: "Q_MOD_B_038", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "**Dynamic Programming (Quy hoạch động)** là kỹ thuật tối ưu hóa dựa trên nguyên lý nào?",
    options: [
      "A. Thực hiện tìm kiếm vét cạn tất cả các khả năng xảy ra để chọn phương án tối ưu.",
      "B. Chia nhỏ bài toán gốc thành các bài toán con hoàn toàn độc lập rồi giải riêng rẽ.",
      "C. Lưu trữ kết quả các bài toán con trùng lặp để tránh việc phải tính toán lại nhiều lần.",
      "D. Sử dụng chiến lược tham lam để đưa ra quyết định tốt nhất tại mỗi bước đi cục bộ."
    ],
    correct_option: "C",
    explanation: "Dynamic Programming giải quyết bài toán bằng cách: (1) xác định **Optimal Substructure** – nghiệm tối ưu của bài toán con đóng góp vào nghiệm tổng thể; (2) **Overlapping Subproblems** – các bài toán con lặp lại; (3) Dùng **Memoization/Tabulation** để lưu kết quả tránh tính lại. Ví dụ: Fibonacci, Knapsack, Longest Common Subsequence."
  },
  {
    id: "Q_MOD_B_039", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, **GIL (Global Interpreter Lock)** ảnh hưởng như thế nào đến lập trình đa luồng (multithreading) cho các tác vụ AI nặng tính toán (CPU-bound)?",
    options: [
      "A. GIL hỗ trợ việc phân phối các thread chạy song song đồng thời trên nhiều lõi CPU vật lý.",
      "B. GIL chỉ cho phép một thread thực thi tại một thời điểm, giới hạn hiệu năng của đa luồng.",
      "C. GIL chỉ tác động đến các hoạt động đọc ghi dữ liệu (I/O) và hoàn toàn bỏ qua phần tính toán.",
      "D. GIL là một bộ thư viện tăng tốc đồ họa chuyên biệt được tích hợp sẵn trong các khung học sâu."
    ],
    correct_option: "B",
    explanation: "GIL là cơ chế khóa trong CPython đảm bảo chỉ một thread Python thực thi bytecode tại một thời điểm. Với tác vụ CPU-bound (tính toán nặng), đa luồng không giúp tăng tốc. Giải pháp: dùng `multiprocessing` để tạo nhiều process độc lập, hoặc dùng NumPy/PyTorch (giải phóng GIL khi gọi C extensions)."
  },
  {
    id: "Q_MOD_B_040", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật **Feature Scaling** bằng **StandardScaler** (Z-score Normalization) khác với **MinMaxScaler** như thế nào?",
    options: [
      "A. StandardScaler đưa dữ liệu về $[0,1]$, còn MinMaxScaler chuẩn hóa về phân phối Gauss.",
      "B. StandardScaler biến đổi dữ liệu có mean=0 và std=1, còn MinMaxScaler đưa dữ liệu về $[0,1]$.",
      "C. Cả hai kỹ thuật này đều thực hiện các phép toán tương đương và cho kết quả đầu ra như nhau.",
      "D. MinMaxScaler được thiết kế chỉ để làm việc với các cột chứa dữ liệu phân loại hoặc nhãn chữ."
    ],
    correct_option: "B",
    explanation: "StandardScaler: $x' = \\frac{x - \\mu}{\\sigma}$, kết quả có mean=0, std=1. Phù hợp với các thuật toán giả định phân phối chuẩn (SVM, PCA, Linear Regression). MinMaxScaler: $x' = \\frac{x - x_{min}}{x_{max} - x_{min}}$, đưa về $[0,1]$ nhưng nhạy cảm với outlier."
  },
  {
    id: "Q_MOD_B_041", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong bài toán phát hiện cộng đồng (Community Detection) trên mạng xã hội sử dụng đồ thị, thuật toán nào phổ biến nhất?",
    options: [
      "A. Thuật toán sắp xếp nổi bọt (Bubble Sort).",
      "B. Thuật toán tìm kiếm nhị phân (Binary Search).",
      "C. Thuật toán Louvain dựa trên tối ưu modularity.",
      "D. Thuật toán sắp xếp nhanh (Quick Sort)."
    ],
    correct_option: "C",
    explanation: "Thuật toán Louvain là phương pháp phổ biến nhất cho Community Detection trên đồ thị lớn. Nó tối ưu **modularity** – chỉ số đo lường mức độ tập trung các cạnh trong cộng đồng so với mạng ngẫu nhiên. Thuật toán chạy nhanh và có thể xử lý đồ thị hàng triệu đỉnh."
  },
  {
    id: "Q_MOD_B_042", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "**Inverted Index** (Chỉ mục ngược) là cấu trúc dữ liệu nền tảng của các công cụ tìm kiếm (như Elasticsearch). Nó hoạt động như thế nào?",
    options: [
      "A. Lưu trữ trực tiếp danh sách các văn bản nguồn theo thứ tự thời gian được thêm vào hệ thống.",
      "B. Ánh xạ từ mỗi từ khóa đến danh sách các văn bản có chứa từ khóa đó cùng vị trí của chúng.",
      "C. Thực hiện sắp xếp toàn bộ danh mục tài liệu trong cơ sở dữ liệu theo bảng chữ cái tiếng Anh.",
      "D. Nén nội dung của tất cả các tài liệu thành các chuỗi mã nhị phân để tối ưu bộ nhớ lưu trữ."
    ],
    correct_option: "B",
    explanation: "Inverted Index ánh xạ từ mỗi **từ khóa** → **danh sách (posting list)** các tài liệu chứa từ đó, kèm tần suất và vị trí. Khi tìm kiếm, chỉ cần tra bảng từ khóa và lấy giao của các posting lists → rất nhanh. Nền tảng của TF-IDF, BM25 trong Information Retrieval."
  },
  {
    id: "Q_MOD_B_043", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Kết quả của đoạn mã Python dưới đây là gì?\n```python\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    return x\nprint(outer())\n```",
    options: [
      "A. Trả về giá trị `10`",
      "B. Trả về giá trị `5`",
      "C. Trả về giá trị `15`",
      "D. Trả về lỗi `UnboundLocalError`"
    ],
    correct_option: "C",
    explanation: "Từ khóa `nonlocal x` cho phép hàm `inner` truy cập và **sửa đổi** biến `x` của hàm `outer` (khác với biến local của `inner`). Sau khi gọi `inner()`, `x` thay đổi từ $10$ thành $10 + 5 = 15$."
  },
  {
    id: "Q_MOD_B_044", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi xử lý dữ liệu văn bản, bước **Stemming** và **Lemmatization** đều dùng để làm gì?",
    options: [
      "A. Thực hiện chuyển đổi các từ ngữ từ ngôn ngữ này sang một ngôn ngữ đích khác.",
      "B. Chuẩn hóa các biến thể của từ về dạng gốc nhằm rút gọn quy mô của bộ từ điển.",
      "C. Phát hiện và tiến hành loại bỏ toàn bộ các ký tự số xuất hiện trong văn bản.",
      "D. Chuyển đổi chuỗi văn bản đầu vào thành các vector số có số chiều cố định."
    ],
    correct_option: "B",
    explanation: "Cả Stemming và Lemmatization đều chuẩn hóa từ về dạng gốc để giảm thưa thớt từ điển. **Stemming** cắt hậu tố thô (đơn giản hơn, nhanh hơn). **Lemmatization** dùng phân tích hình thái học để trả về từ cơ sở đúng nghĩa hơn. Ví dụ: 'better' → Stemming: 'better', Lemmatization: 'good'."
  },
  {
    id: "Q_MOD_B_045", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, phương thức `zip()` được dùng để làm gì?",
    options: [
      "A. Thực hiện nén các tệp tin dữ liệu thành định dạng nén `.zip` để giảm dung lượng.",
      "B. Ghép các phần tử của nhiều danh sách thành các tuple tương ứng theo từng vị trí.",
      "C. Sắp xếp toàn bộ các phần tử trong danh sách theo thứ tự bảng chữ cái hoặc chữ số.",
      "D. Đếm tần suất xuất hiện của từng phần tử trong một danh sách và trả về dictionary."
    ],
    correct_option: "B",
    explanation: "`zip([1,2,3], ['a','b','c'])` trả về `[(1,'a'), (2,'b'), (3,'c')]`. Rất hữu ích khi cần duyệt qua nhiều danh sách song song, ví dụ duyệt qua `predictions` và `labels` cùng lúc để tính metrics."
  },
  {
    id: "Q_MOD_B_046", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Hàm `sorted()` trong Python với tham số `key` được dùng như thế nào?",
    options: [
      "A. Xác định chỉ số (index) cụ thể để thực hiện việc sắp xếp các phần tử.",
      "B. Nhận một hàm để tạo ra khóa so sánh cho mỗi phần tử trước khi sắp xếp.",
      "C. Quy định kiểu dữ liệu của các phần tử cần sắp xếp là dạng số hay chữ.",
      "D. Thiết lập chiều sắp xếp là tăng dần hoặc giảm dần cho danh sách đầu vào."
    ],
    correct_option: "B",
    explanation: "Ví dụ: `sorted(['banana', 'apple', 'cherry'], key=len)` sắp xếp theo độ dài chuỗi → `['apple', 'banana', 'cherry']`. `key=lambda x: x[1]` sắp xếp list of tuples theo phần tử thứ 2. Rất linh hoạt cho nhiều tiêu chí sắp xếp."
  },
  {
    id: "Q_MOD_B_047", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, **Generator** (sử dụng từ khóa `yield`) khác với hàm thông thường (dùng `return`) như thế nào về mặt quản lý bộ nhớ?",
    options: [
      "A. Generator tính toán toàn bộ các phần tử kết quả cùng lúc rồi ghi trực tiếp vào bộ nhớ trong.",
      "B. Generator sinh từng phần tử khi có yêu cầu (lazy evaluation) giúp tiết kiệm bộ nhớ tối đa.",
      "C. Generator luôn có tốc độ thực thi chậm hơn so với các hàm thông thường sử dụng `return`.",
      "D. Generator chỉ hỗ trợ tạo ra các chuỗi số nguyên và không làm việc được với dữ liệu dạng chữ."
    ],
    correct_option: "B",
    explanation: "Generator dùng `yield` để trả về từng giá trị một khi được yêu cầu (lazy), trạng thái hàm được giữ nguyên giữa các lần gọi. Với tập dữ liệu 1 triệu ảnh, dùng generator để load từng batch tránh tràn RAM, thay vì load tất cả cùng lúc."
  },
  {
    id: "Q_MOD_B_048", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "**Imbalanced Dataset** (Tập dữ liệu mất cân bằng) trong bài toán phân loại thường gây ra vấn đề gì và cách giải quyết nào sau đây hiệu quả?",
    options: [
      "A. Không làm ảnh hưởng đến độ chính xác và mô hình có thể tự động cân bằng trong quá trình học.",
      "B. Mô hình thiên vị lớp đa số; xử lý bằng cách dùng SMOTE, undersampling hoặc chỉnh class weights.",
      "C. Làm cho mô hình không thể hội tụ và chỉ cần tăng tốc độ học (learning rate) là sẽ khắc phục được.",
      "D. Làm tăng đáng kể thời gian huấn luyện và cần loại bỏ hoàn toàn các lớp thiểu số khỏi tập mẫu."
    ],
    correct_option: "B",
    explanation: "Với tập mất cân bằng, mô hình học được thiên vị về lớp đa số (ví dụ: 99% Bình thường, 1% Gian lận). Giải pháp: **SMOTE** (Synthetic Minority Oversampling Technique) tạo mẫu tổng hợp cho lớp thiểu số; **Undersampling** giảm mẫu lớp đa số; **Class Weights** điều chỉnh để penalize lỗi trên lớp thiểu số nặng hơn."
  },
  {
    id: "Q_MOD_B_049", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong hệ thống AI xử lý dữ liệu lớn (Big Data), **MapReduce** là mô hình lập trình làm gì?",
    options: [
      "A. Chuyển đổi dữ liệu sang dạng ngôn ngữ trung gian rồi tiến hành nén dung lượng lưu trữ lại.",
      "B. Map xử lý song song tạo cặp key-value, còn Reduce gom và tổng hợp các kết quả theo từng khóa.",
      "C. Thực hiện sắp xếp và phân loại dữ liệu đầu vào qua các phân vùng bộ nhớ đệm khác nhau.",
      "D. Tiến hành thu thập dữ liệu thô từ các nguồn rồi thực hiện xóa bỏ các bản ghi trùng lặp."
    ],
    correct_option: "B",
    explanation: "MapReduce (nền tảng của Hadoop) chia dữ liệu lớn thành các chunk nhỏ, **Map** xử lý song song tạo cặp (key, value), **Shuffle/Sort** nhóm các cặp cùng key, **Reduce** tổng hợp theo từng key. Ví dụ: đếm từ trong hàng tỷ document."
  },
  {
    id: "Q_MOD_B_050", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-augmentation"],
    content: "Kỹ thuật **MixUp** trong Data Augmentation cho hình ảnh thực hiện điều gì đặc biệt?",
    options: [
      "A. Nội suy tuyến tính cả ảnh và nhãn giữa hai mẫu: $\\tilde{x} = \\lambda x_i + (1-\\lambda) x_j$.",
      "B. Thực hiện thay đổi ngẫu nhiên hệ màu hoặc điều chỉnh độ tương phản, độ sáng của bức ảnh.",
      "C. Kết hợp ghép hai bức ảnh đầu vào khác nhau lại thành một bức ảnh duy nhất có kích thước gấp đôi.",
      "D. Tiến hành che khuất hoặc xóa bỏ hoàn toàn một vùng hình chữ nhật ngẫu nhiên trên bức ảnh gốc."
    ],
    correct_option: "A",
    explanation: "MixUp tạo mẫu mới bằng cách nội suy tuyến tính **cả ảnh lẫn nhãn**: $\\tilde{x} = \\lambda x_i + (1-\\lambda) x_j$ và $\\tilde{y} = \\lambda y_i + (1-\\lambda) y_j$. Điều này tạo ra mẫu 'mờ' giữa hai lớp, giúp mô hình học ranh giới quyết định mượt mà hơn, giảm overfitting và cải thiện calibration."
  },
  {
    id: "Q_MOD_B_051", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, kết quả thu được sau khi thực thi biểu thức `[x for x in range(10) if x % 3 == 0]` là gì?",
    options: [
      "A. `[0, 3, 6, 9]`",
      "B. `[3, 6, 9, 12]`",
      "C. `[0, 3, 6, 12]`",
      "D. `[3, 6, 9, 15]`"
    ],
    correct_option: "A",
    explanation: "Hàm `range(10)` tạo ra dãy số nguyên từ $0$ đến $9$. Điều kiện `if x % 3 == 0` sẽ lọc các số chia hết cho $3$, gồm: $0, 3, 6, 9$. Do đó kết quả là `[0, 3, 6, 9]`."
  },
  {
    id: "Q_MOD_B_052", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Khi chèn một phần tử mới vào cuối một danh sách liên kết đơn (Singly Linked List) có con trỏ quản lý cả phần tử đầu (head) và cuối (tail), độ phức tạp thời gian là bao nhiêu?",
    options: [
      "A. $O(n)$",
      "B. $O(\\log n)$",
      "C. $O(1)$",
      "D. $O(n^2)$"
    ],
    correct_option: "C",
    explanation: "Vì danh sách liên kết đơn này duy trì một con trỏ quản lý nút cuối (`tail`), ta có thể truy cập trực tiếp nút cuối và thực hiện thêm phần tử mới sau nó trong thời gian hằng số $O(1)$."
  },
  {
    id: "Q_MOD_B_053", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Trong tiền xử lý dữ liệu, phương pháp xử lý ngoại lai (Outliers) bằng cách đưa các giá trị vượt ngoài khoảng giới hạn về đúng giá trị cận dưới hoặc cận trên được gọi là gì?",
    options: [
      "A. Winsorization",
      "B. Standardization",
      "C. Normalization",
      "D. Discretization"
    ],
    correct_option: "A",
    explanation: "Winsorization là phương pháp giảm thiểu ảnh hưởng của các giá trị ngoại lai bằng cách thay thế các giá trị cực trị bằng giá trị phân vị cận trên hoặc cận dưới tương ứng."
  },
  {
    id: "Q_MOD_B_054", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, từ khóa nào được sử dụng để định nghĩa một khối mã sẽ luôn luôn được thực thi trong cấu trúc xử lý ngoại lệ `try-except`, bất kể có xảy ra lỗi hay không?",
    options: [
      "A. `finally`",
      "B. `always`",
      "C. `ensure`",
      "D. `persist`"
    ],
    correct_option: "A",
    explanation: "Khối `finally` trong Python được thiết kế để thực thi các tác vụ giải phóng tài nguyên (như đóng tệp hoặc kết nối) và luôn được chạy bất kể có ngoại lệ xảy ra hay không."
  },
  {
    id: "Q_MOD_B_055", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi tiền xử lý dữ liệu chuỗi văn bản bằng tiếng Anh, kỹ thuật loại bỏ các từ xuất hiện rất phổ biến nhưng mang ít giá trị ngữ nghĩa (như 'the', 'is', 'at') được gọi là gì?",
    options: [
      "A. Loại bỏ stop words",
      "B. Thực hiện stemming",
      "C. Tách từ tokenization",
      "D. Thực hiện lemmatize"
    ],
    correct_option: "A",
    explanation: "Các từ phổ biến và ít mang ý nghĩa phân biệt thông tin như 'the', 'is', 'at' được gọi là stop words (từ dừng). Loại bỏ chúng giúp mô hình tập trung vào các từ khóa chính."
  },
  {
    id: "Q_MOD_B_056", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\n```\nSau khi thực thi đoạn mã trên, giá trị của biến `a` là danh sách nào?",
    options: [
      "A. Trả về `[1, 2, 3]`",
      "B. Trả về `[1, 2, 3, 4]`",
      "C. Trả về `[1, 2, 4]`",
      "D. Trả về `[4, 4, 4]`"
    ],
    correct_option: "B",
    explanation: "Trong Python, phép gán `b = a` không tạo ra một bản sao mới mà chỉ tạo thêm một tham chiếu `b` trỏ tới cùng một đối tượng danh sách trong bộ nhớ với `a`. Do đó, thay đổi qua `b` cũng làm thay đổi `a`."
  },
  {
    id: "Q_MOD_B_057", module_id: "Module_B", difficulty: "Easy",
    tags: ["algorithms"],
    content: "Thuật toán tìm kiếm nhị phân (Binary Search) yêu cầu tập dữ liệu đầu vào phải thỏa mãn điều kiện tiên quyết nào sau đây?",
    options: [
      "A. Dữ liệu phải được sắp xếp tuần tự theo một thứ tự xác định.",
      "B. Dữ liệu phải chứa toàn bộ các số nguyên dương không trùng lặp.",
      "C. Dữ liệu phải được tổ chức dưới dạng cấu trúc cây nhị phân.",
      "D. Dữ liệu phải được phân phối chuẩn với giá trị trung bình bằng 0."
    ],
    correct_option: "A",
    explanation: "Thuật toán tìm kiếm nhị phân hoạt động dựa trên việc chia đôi không gian tìm kiếm, đòi hỏi mảng đầu vào phải được sắp xếp trước để xác định hướng tìm kiếm (trái hoặc phải)."
  },
  {
    id: "Q_MOD_B_058", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Hàm nào dưới đây trong Python được sử dụng để đếm độ dài (số lượng phần tử) của một đối tượng có thể duyệt được như List hoặc String?",
    options: [
      "A. `size()`",
      "B. `count()`",
      "C. `len()`",
      "D. `length()`"
    ],
    correct_option: "C",
    explanation: "Hàm `len()` là hàm xây dựng sẵn (built-in function) trong Python dùng để lấy số lượng phần tử của một container hoặc độ dài của một chuỗi ký tự."
  },
  {
    id: "Q_MOD_B_059", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Khi làm việc với các cột dữ liệu phân loại (Categorical Data), kỹ thuật gán mỗi giá trị phân loại bằng một số nguyên duy nhất tăng dần được gọi là gì?",
    options: [
      "A. One-Hot Encoding",
      "B. Target Encoding",
      "C. Label Encoding",
      "D. Binary Encoding"
    ],
    correct_option: "C",
    explanation: "Label Encoding chuyển đổi mỗi giá trị chữ trong một đặc trưng phân loại thành một số nguyên (ví dụ: 'Hà Nội' -> 0, 'Đà Nẵng' -> 1, 'TP.HCM' -> 2)."
  },
  {
    id: "Q_MOD_B_060", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, phương thức nào của kiểu dữ liệu chuỗi (String) được sử dụng để kiểm tra xem chuỗi đó có chứa toàn bộ là các ký tự số hay không?",
    options: [
      "A. `isalpha()`",
      "B. `isalnum()`",
      "C. `isdigit()`",
      "D. `isspace()`"
    ],
    correct_option: "C",
    explanation: "Phương thức `isdigit()` trả về `True` nếu tất cả các ký tự trong chuỗi đều là ký tự số (0-9) và chuỗi có ít nhất một ký tự, ngược lại trả về `False`."
  },
  {
    id: "Q_MOD_B_061", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu nào lưu trữ các phần tử dưới dạng các cặp khóa - giá trị và không cho phép các khóa bị trùng lặp?",
    options: [
      "A. Danh sách List",
      "B. Tập hợp Set",
      "C. Bộ giá trị Tuple",
      "D. Từ điển Dictionary"
    ],
    correct_option: "D",
    explanation: "Dictionary trong Python lưu trữ các cặp khóa - giá trị (key-value), trong đó mỗi khóa (key) phải là duy nhất và có thể băm được (hashable)."
  },
  {
    id: "Q_MOD_B_062", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Khi muốn ghi thêm dữ liệu vào cuối một tệp tin văn bản đã tồn tại mà không xóa đi nội dung cũ, ta cần mở tệp bằng chế độ (mode) nào trong Python?",
    options: [
      "A. Mode `'w'`",
      "B. Mode `'r'`",
      "C. Mode `'a'`",
      "D. Mode `'x'`"
    ],
    correct_option: "C",
    explanation: "Chế độ `'a'` (append) được dùng để mở tệp cho mục đích ghi thêm vào cuối tệp. Chế độ `'w'` (write) sẽ ghi đè và xóa bỏ toàn bộ nội dung cũ của tệp."
  },
  {
    id: "Q_MOD_B_063", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật điền khuyết dữ liệu bị thiếu bằng cách sử dụng giá trị phổ biến nhất (xuất hiện nhiều nhất) của thuộc tính đó được gọi là gì?",
    options: [
      "A. Điền khuyết bằng giá trị trung bình (Mean)",
      "B. Điền khuyết bằng giá trị trung vị (Median)",
      "C. Điền khuyết bằng giá trị yếu vị (Mode)",
      "D. Điền khuyết bằng giá trị ngẫu nhiên (Random)"
    ],
    correct_option: "C",
    explanation: "Giá trị yếu vị (Mode) đại diện cho giá trị xuất hiện nhiều nhất trong phân phối dữ liệu, thường được dùng để điền khuyết cho dữ liệu phân loại."
  },
  {
    id: "Q_MOD_B_064", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Kết quả của phép so sánh `3 == 3.0` trong Python là gì và tại sao?",
    options: [
      "A. `False` vì chúng khác nhau về kiểu dữ liệu.",
      "B. `True` vì giá trị số học của chúng tương đương.",
      "C. `None` vì không thể so sánh số thực và số nguyên.",
      "D. Lỗi cú pháp do sử dụng sai toán tử so sánh."
    ],
    correct_option: "B",
    explanation: "Trong Python, toán tử `==` so sánh giá trị số học của các đối tượng. Vì $3$ và $3.0$ có cùng giá trị số học nên biểu thức trả về `True`."
  },
  {
    id: "Q_MOD_B_065", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Trong một đồ thị có hướng (Directed Graph), số lượng các cạnh đi ra khỏi một đỉnh $V$ được gọi là gì?",
    options: [
      "A. Bậc ra (Out-degree) của đỉnh $V$.",
      "B. Bậc vào (In-degree) của đỉnh $V$.",
      "C. Chu trình (Cycle) kết nối đỉnh $V$.",
      "D. Đường đi ngắn nhất từ đỉnh $V$."
    ],
    correct_option: "A",
    explanation: "Trong đồ thị có hướng, bậc ra (out-degree) của một đỉnh là số lượng các cạnh có điểm bắt đầu từ đỉnh đó và hướng đi ra ngoài."
  },
  {
    id: "Q_MOD_B_066", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, phương thức nào của kiểu danh sách (List) được sử dụng để loại bỏ và trả về phần tử cuối cùng của danh sách đó?",
    options: [
      "A. `remove()`",
      "B. `pop()`",
      "C. `delete()`",
      "D. `discard()`"
    ],
    correct_option: "B",
    explanation: "Phương thức `pop()` không truyền tham số chỉ số sẽ mặc định loại bỏ phần tử cuối cùng ra khỏi danh sách và trả về chính phần tử đó."
  },
  {
    id: "Q_MOD_B_067", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-preprocessing"],
    content: "Kỹ thuật biến đổi đặc trưng bằng cách chuyển các giá trị số liên tục thành các khoảng hoặc nhóm giá trị phân loại được gọi là gì?",
    options: [
      "A. Kỹ thuật Normalization",
      "B. Kỹ thuật Standardization",
      "C. Kỹ thuật Rời rạc hóa (Binning)",
      "D. Kỹ thuật Mã hóa (Encoding)"
    ],
    correct_option: "C",
    explanation: "Binning (hoặc rời rạc hóa - discretization) chia dữ liệu số liên tục thành các khoảng (bins) để biến chúng thành dữ liệu phân loại (ví dụ: chia cột Tuổi thành các nhóm Trẻ, Trung niên, Già)."
  },
  {
    id: "Q_MOD_B_068", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Toán tử logic nào trong Python trả về `True` chỉ khi tất cả các biểu thức điều kiện thành phần đều có giá trị `True`?",
    options: [
      "A. Toán tử `or`",
      "B. Toán tử `and`",
      "C. Toán tử `not`",
      "D. Toán tử `xor`"
    ],
    correct_option: "B",
    explanation: "Toán tử `and` thực hiện phép toán hội logic, trả về `True` nếu và chỉ nếu tất cả các toán hạng tham gia đều có giá trị logic là `True`."
  },
  {
    id: "Q_MOD_B_069", module_id: "Module_B", difficulty: "Easy",
    tags: ["data-structures"],
    content: "Cấu trúc dữ liệu tuyến tính nào cho phép thực hiện việc thêm và xóa phần tử ở cả hai đầu của cấu trúc đó một cách hiệu quả?",
    options: [
      "A. Cấu trúc dữ liệu Ngăn xếp (Stack)",
      "B. Cấu trúc dữ liệu Hàng đợi (Queue)",
      "C. Hàng đợi hai đầu (Double-ended Queue)",
      "D. Danh sách liên kết đơn (Linked List)"
    ],
    correct_option: "C",
    explanation: "Deque (hàng đợi hai đầu) hỗ trợ thêm và xóa phần tử ở cả đầu trước (front) và đầu sau (back) với độ phức tạp thời gian cực nhanh là $O(1)$."
  },
  {
    id: "Q_MOD_B_070", module_id: "Module_B", difficulty: "Easy",
    tags: ["syntax-python"],
    content: "Trong Python, biểu thức nào sau đây được sử dụng để kiểm tra xem một khóa `k` có tồn tại trong từ điển `d` hay không?",
    options: [
      "A. `k in d`",
      "B. `d.has(k)`",
      "C. `k exists d`",
      "D. `d.contains(k)`"
    ],
    correct_option: "A",
    explanation: "Trong Python, toán tử `in` được dùng để kiểm tra xem một phần tử (hoặc khóa đối với dictionary) có nằm trong một container hay không."
  },
  {
    id: "Q_MOD_B_071", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\nx = [1, 2, 3]\ny = [x, x]\nx[0] = 99\n```\nSau khi thực thi, giá trị của biến `y` là gì?",
    options: [
      "A. `[[1, 2, 3], [1, 2, 3]]`",
      "B. `[[99, 2, 3], [1, 2, 3]]`",
      "C. `[[99, 2, 3], [99, 2, 3]]`",
      "D. `[[99, 99, 99], [99, 99, 99]]`"
    ],
    correct_option: "C",
    explanation: "Danh sách `y` chứa hai tham chiếu đến cùng một đối tượng danh sách `x`. Do đó, khi thay đổi phần tử đầu tiên của `x` thành `99`, cả hai phần tử trong `y` đều phản ánh sự thay đổi này vì chúng cùng trỏ tới `x`."
  },
  {
    id: "Q_MOD_B_072", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Khi đo lường thời gian thực thi của thuật toán sắp xếp nhanh (Quick Sort), trường hợp xấu nhất (Worst-case) xảy ra khi nào và độ phức tạp thời gian lúc đó là bao nhiêu?",
    options: [
      "A. Khi mảng đã được sắp xếp và chọn phần tử chốt cực biên; $O(n^2)$.",
      "B. Khi mảng hoàn toàn ngẫu nhiên và chọn chốt ngẫu nhiên; $O(n^2)$.",
      "C. Khi mảng đã được sắp xếp và chọn phần tử chốt ở giữa; $O(n \\log n)$.",
      "D. Khi mảng hoàn toàn đảo ngược và chọn chốt ngẫu nhiên; $O(n \\log n)$."
    ],
    correct_option: "A",
    explanation: "Trường hợp xấu nhất của Quick Sort xảy ra khi phần tử chốt (pivot) luôn chọn phải phần tử lớn nhất hoặc nhỏ nhất (ví dụ mảng đã sắp xếp và chọn chốt ở biên), khiến việc phân hoạch mất cân bằng hoàn toàn. Lúc này độ phức tạp tăng lên $O(n^2)$."
  },
  {
    id: "Q_MOD_B_073", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong xử lý ngôn ngữ tự nhiên, kỹ thuật nào sau đây chuyển đổi các từ về dạng gốc có trong từ điển bằng cách phân tích ngữ pháp và ngữ cảnh của từ?",
    options: [
      "A. Kỹ thuật tách gốc Stemming",
      "B. Kỹ thuật chuẩn hóa Lemmatization",
      "C. Kỹ thuật gán nhãn từ loại POS Tagging",
      "D. Nhận dạng thực thể tên NER Tagging"
    ],
    correct_option: "B",
    explanation: "Lemmatization sử dụng từ điển và phân tích ngữ pháp để đưa từ về nguyên thể đúng nghĩa (lemma). Trong khi đó, Stemming chỉ cắt bỏ hậu tố một cách cơ học dựa trên luật lệ nên đôi khi tạo ra từ không có nghĩa."
  },
  {
    id: "Q_MOD_B_074", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Cho đoạn mã Python sau:\n```python\nd = {'a': 1, 'b': 2}\nres = d.get('c', 3) + d.setdefault('a', 4)\n```\nSau khi thực thi đoạn mã trên, giá trị của biến `res` là bao nhiêu?",
    options: [
      "A. Giá trị của `res` là 5.",
      "B. Giá trị của `res` là 4.",
      "C. Giá trị của `res` là 7.",
      "D. Giá trị của `res` là 6."
    ],
    correct_option: "B",
    explanation: "`d.get('c', 3)` trả về giá trị mặc định là `3` vì khóa `'c'` không tồn tại. `d.setdefault('a', 4)` kiểm tra khóa `'a'` đã tồn tại trong dict với giá trị `1` nên nó trả về `1` (không thay đổi giá trị của `'a'`). Tổng `res = 3 + 1 = 4`."
  },
  {
    id: "Q_MOD_B_075", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong một cây nhị phân (Binary Tree), nếu thực hiện duyệt cây theo thứ tự giữa (In-order Traversal), thứ tự duyệt các nút là gì?",
    options: [
      "A. Duyệt nút cha, duyệt cây con trái, rồi duyệt cây con phải.",
      "B. Duyệt cây con trái, duyệt nút cha, rồi duyệt cây con phải.",
      "C. Duyệt cây con trái, duyệt cây con phải, rồi duyệt nút cha.",
      "D. Duyệt nút cha, duyệt cây con phải, rồi duyệt cây con trái."
    ],
    correct_option: "B",
    explanation: "Duyệt cây theo thứ tự giữa (In-order) tuân theo thứ tự: Cây con trái (Left) -> Nút cha (Root) -> Cây con phải (Right). Đối với Cây nhị phân tìm kiếm (BST), phép duyệt này sẽ cho ra danh sách các phần tử tăng dần."
  },
  {
    id: "Q_MOD_B_076", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Đoạn mã Python nào sau đây định nghĩa đúng một lớp (Class) kế thừa từ lớp cha `Model` và gọi phương thức khởi tạo của lớp cha?",
    options: [
      "A. `class Sub(Model): def __init__(self): super().__init__()`",
      "B. `class Sub(Model): def __init__(self): Model.__init__()`",
      "C. `class Sub extends Model: def __init__(self): parent()`",
      "D. `class Sub implements Model: def __init__(self): self.init()`"
    ],
    correct_option: "A",
    explanation: "Trong Python, kế thừa được khai báo bằng `class Sub(Parent):`. Để gọi phương thức khởi tạo của lớp cha, ta dùng `super().__init__()`."
  },
  {
    id: "Q_MOD_B_077", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi tập dữ liệu bảng có cột phân loại với số lượng nhãn rất lớn (ví dụ: cột 'Thành phố' có 200 giá trị), sử dụng kỹ thuật nào sau đây giúp tránh hiện tượng bùng nổ số lượng cột đặc trưng?",
    options: [
      "A. Sử dụng trực tiếp kỹ thuật mã hóa One-Hot Encoding.",
      "B. Sử dụng kỹ thuật mã hóa tần suất hoặc mã hóa mục tiêu.",
      "C. Loại bỏ hoàn toàn cột phân loại đó ra khỏi tập dữ liệu.",
      "D. Thực hiện tăng cường dữ liệu để cân bằng số lượng nhãn."
    ],
    correct_option: "B",
    explanation: "Sử dụng One-Hot Encoding cho cột có 200 nhãn sẽ sinh ra thêm 200 cột đặc trưng thưa (sparse features), gây bùng nổ số chiều. Thay vào đó, mã hóa tần suất (Frequency Encoding) hoặc mã hóa mục tiêu (Target Encoding) sẽ giữ nguyên số lượng cột bằng cách thay thế nhãn bằng số lượng xuất hiện hoặc giá trị trung bình của mục tiêu."
  },
  {
    id: "Q_MOD_B_078", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp chèn (Insertion Sort) có độ phức tạp thời gian trong trường hợp tốt nhất (Best-case) và xấu nhất (Worst-case) lần lượt là gì?",
    options: [
      "A. Tốt nhất là $O(n)$, xấu nhất là $O(n^2)$.",
      "B. Tốt nhất là $O(n \\log n)$, xấu nhất là $O(n^2)$.",
      "C. Tốt nhất là $O(n^2)$, xấu nhất là $O(n^2)$.",
      "D. Tốt nhất là $O(1)$, xấu nhất là $O(n \\log n)$."
    ],
    correct_option: "A",
    explanation: "Trường hợp tốt nhất của Insertion Sort xảy ra khi mảng đã được sắp xếp sẵn, thuật toán chỉ cần thực hiện $n-1$ phép so sánh và không cần hoán đổi ($O(n)$). Trường hợp xấu nhất xảy ra khi mảng bị đảo ngược hoàn toàn, yêu cầu số lượng so sánh và dịch chuyển tối đa ($O(n^2)$)."
  },
  {
    id: "Q_MOD_B_079", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, phương thức `is` khác với toán tử `==` như thế nào?",
    options: [
      "A. Toán tử `is` so sánh giá trị số học, còn `==` so sánh kiểu dữ liệu.",
      "B. Toán tử `is` kiểm tra cùng đối tượng trong bộ nhớ, còn `==` so sánh giá trị.",
      "C. Toán tử `is` có tốc độ chạy chậm hơn toán tử `==` trong mọi trường hợp.",
      "D. Cả hai đều thực hiện chức năng giống hệt nhau mà không có sự khác biệt."
    ],
    correct_option: "B",
    explanation: "Toán tử `is` kiểm tra xem hai biến có cùng trỏ tới một địa chỉ bộ nhớ (identity comparison) hay không. Trong khi đó, toán tử `==` so sánh giá trị nội dung (equality comparison) của hai đối tượng đó."
  },
  {
    id: "Q_MOD_B_080", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi huấn luyện một mô hình học máy với thuật toán K-Nearest Neighbors (KNN), tại sao bước chuẩn hóa dữ liệu (Feature Scaling) lại đóng vai trò tối quan trọng?",
    options: [
      "A. Giúp chuyển đổi các dữ liệu phân loại chữ sang dạng số nguyên nhị phân.",
      "B. Tránh việc các thuộc tính có thang đo lớn áp đảo các thuộc tính thang đo nhỏ.",
      "C. Giảm số lượng mẫu dữ liệu huấn luyện để tiết kiệm thời gian tính toán.",
      "D. Làm tăng độ chính xác của nhãn mục tiêu bằng cách loại bỏ các outlier."
    ],
    correct_option: "B",
    explanation: "KNN tính khoảng cách (ví dụ khoảng cách Euclid) giữa các điểm dữ liệu. Nếu một thuộc tính có phạm vi giá trị lớn (như thu nhập: 0 - 100M) và thuộc tính khác có phạm vi nhỏ (như số con: 0 - 5), thuộc tính thu nhập sẽ hoàn toàn áp đảo khoảng cách, khiến mô hình bỏ qua thông tin của thuộc tính nhỏ."
  },
  {
    id: "Q_MOD_B_081", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\nimport re\ntext = \"Học máy 2026, Deep Learning 2027\"\nresult = re.findall(r'\\d+', text)\n```\nSau khi thực thi đoạn mã trên, giá trị của `result` thu được là gì?",
    options: [
      "A. `['2026', '2027']`",
      "B. `['2026', 'Learning']`",
      "C. `['2026', '2026']`",
      "D. `['2026', 'Deep']`"
    ],
    correct_option: "A",
    explanation: "Trong biểu thức chính quy (regular expressions), pattern `\\d+` khớp với một hoặc nhiều chữ số liên tiếp. Hàm `findall` tìm tất cả các chuỗi con khớp với mẫu và trả về danh sách, do đó ta nhận được `['2026', '2027']`."
  },
  {
    id: "Q_MOD_B_082", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Bảng băm (Hash Table) giải quyết xung đột địa chỉ (Collision) bằng phương pháp địa chỉ mở (Open Addressing) như thế nào?",
    options: [
      "A. Tạo một danh sách liên kết tại vị trí xung đột để lưu trữ tất cả các khóa.",
      "B. Tìm kiếm một ô nhớ trống khác trong bảng theo một quy luật xác định để ghi.",
      "C. Tăng gấp đôi kích thước của bảng băm ngay khi phát hiện ra xung đột đầu tiên.",
      "D. Loại bỏ phần tử cũ ra khỏi bảng để nhường vị trí cho phần tử mới được thêm."
    ],
    correct_option: "B",
    explanation: "Trong địa chỉ mở (Open Addressing), khi xảy ra xung đột (hai khóa băm ra cùng một vị trí), thuật toán sẽ tìm kiếm một ô trống khác trong chính bảng băm đó (ví dụ: dò tuyến tính - linear probing, dò bậc hai, hoặc băm đúp) để lưu phần tử mới."
  },
  {
    id: "Q_MOD_B_083", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Trong Python, từ khóa `yield` được sử dụng bên trong một thân hàm có vai trò gì?",
    options: [
      "A. Trả về kết quả tức thì và chấm dứt hoàn toàn sự thực thi của hàm đó.",
      "B. Tạm dừng hàm, trả về một giá trị cho generator và lưu lại trạng thái của hàm.",
      "C. Khai báo một biến toàn cục có phạm vi ảnh hưởng ra ngoài chương trình chính.",
      "D. Bắt đầu một tiến trình con chạy song song để tăng tốc độ tính toán CPU."
    ],
    correct_option: "B",
    explanation: "Từ khóa `yield` biến một hàm thông thường thành một Generator. Khi gọi, nó trả về một giá trị và lưu lại toàn bộ trạng thái cục bộ của hàm để có thể tiếp tục thực thi từ điểm dừng đó ở lần gọi tiếp theo."
  },
  {
    id: "Q_MOD_B_084", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Xét đoạn mã Python thực hiện tìm kiếm nhị phân sau:\n```python\ndef binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n```\nNếu gọi `binary_search([2, 4, 6, 8, 10], 8)`, vòng lặp `while` sẽ chạy bao nhiêu lần?",
    options: [
      "A. Vòng lặp chạy 1 lần.",
      "B. Vòng lặp chạy 2 lần.",
      "C. Vòng lặp chạy 3 lần.",
      "D. Vòng lặp chạy 4 lần."
    ],
    correct_option: "B",
    explanation: "Lần 1: `low = 0, high = 4 -> mid = 2 (giá trị 6)`. Vì $6 < 8$, nên `low = 3`. Lần 2: `low = 3, high = 4 -> mid = 3 (giá trị 8)`. Do $8 == 8$, trả về chỉ số 3. Số lần chạy vòng lặp là 2."
  },
  {
    id: "Q_MOD_B_085", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong phân tích dữ liệu, phương pháp chuẩn hóa dữ liệu Min-Max Scaling (MinMaxScaler) đưa các giá trị đặc trưng về khoảng xác định nào theo mặc định?",
    options: [
      "A. Đưa các giá trị về khoảng $[-1, 1]$.",
      "B. Đưa các giá trị về khoảng $[0, 1]$.",
      "C. Chuyển đổi dữ liệu về phân phối chuẩn.",
      "D. Đưa các giá trị về khoảng $[0, 255]$."
    ],
    correct_option: "B",
    explanation: "Mặc định, MinMaxScaler thực hiện phép biến đổi tuyến tính đưa các giá trị đặc trưng về khoảng $[0, 1]$ bằng công thức: $x' = \\frac{x - x_{min}}{x_{max} - x_{min}}$."
  },
  {
    id: "Q_MOD_B_086", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Khái niệm \"List Comprehension\" trong Python có ưu điểm chính là gì so với việc sử dụng vòng lặp `for` thông thường để tạo danh sách?",
    options: [
      "A. Giúp tăng tính bảo mật của mã nguồn khi chạy trên môi trường máy chủ AI.",
      "B. Viết mã ngắn gọn, dễ đọc hơn và thường cho hiệu năng thực thi nhanh hơn.",
      "C. Cho phép lưu trữ các kiểu dữ liệu không đồng nhất mà danh sách thường không có.",
      "D. Tự động kiểm tra và sửa lỗi logic phát sinh trong quá trình lặp phần tử."
    ],
    correct_option: "B",
    explanation: "List Comprehension giúp tạo danh sách mới một cách ngắn gọn, súc tích trên một dòng. Về mặt hiệu năng, nó thường chạy nhanh hơn vòng lặp `for` thông thường vì các phép lặp được thực thi ở mức ngôn ngữ C tối ưu bên dưới."
  },
  {
    id: "Q_MOD_B_087", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Trong cấu trúc dữ liệu cây nhị phân tìm kiếm (BST), thao tác tìm kiếm phần tử nhỏ nhất được thực hiện như thế nào?",
    options: [
      "A. Duyệt liên tục theo các nút con bên phải cho đến khi không còn nút con phải.",
      "B. Duyệt liên tục theo các nút con bên trái cho đến khi không còn nút con trái.",
      "C. Thực hiện duyệt toàn bộ cây theo chiều rộng và tìm giá trị bé nhất của các lá.",
      "D. So sánh trực tiếp giá trị của hai nút con nằm ngay dưới nút gốc của cây."
    ],
    correct_option: "B",
    explanation: "Do tính chất của BST: mọi nút con bên trái luôn có giá trị nhỏ hơn nút cha. Vì vậy, phần tử nhỏ nhất luôn nằm ở vị trí tận cùng bên trái của cây."
  },
  {
    id: "Q_MOD_B_088", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sau:\n```python\nx = 5\ndef my_func():\n    x = 10\n    return x\nmy_func()\nprint(x)\n```\nKết quả in ra màn hình sau khi thực thi đoạn mã trên là gì?",
    options: [
      "A. Kết quả in ra là 10.",
      "B. Kết quả in ra là 5.",
      "C. Kết quả in ra là 15.",
      "D. Gặp lỗi `NameError`."
    ],
    correct_option: "B",
    explanation: "Biến `x = 10` được định nghĩa bên trong hàm `my_func` là một biến cục bộ (local variable) và không ảnh hưởng đến biến toàn cục `x = 5` ở ngoài hàm. Do đó, lệnh `print(x)` vẫn in ra giá trị toàn cục là `5`."
  },
  {
    id: "Q_MOD_B_089", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp nổi bọt (Bubble Sort) hoạt động với độ phức tạp thời gian trong trường hợp tốt nhất (Best-case) là bao nhiêu nếu được tối ưu hóa bằng cách sử dụng một cờ hiệu kiểm tra hoán đổi?",
    options: [
      "A. $O(n \\log n)$",
      "B. $O(n)$",
      "C. $O(n^2)$",
      "D. $O(1)$"
    ],
    correct_option: "B",
    explanation: "Khi mảng đã được sắp xếp sẵn, nếu sử dụng thêm cờ hiệu để kiểm tra xem có bất kỳ hoán đổi nào xảy ra trong lượt duyệt đầu tiên hay không, thuật toán sẽ dừng ngay sau 1 lần duyệt ($n-1$ so sánh), đạt độ phức tạp $O(n)$."
  },
  {
    id: "Q_MOD_B_090", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong tiền xử lý dữ liệu chuỗi thời gian, việc tính toán giá trị trung bình của một cửa sổ quan sát có kích thước cố định trượt dọc theo chuỗi dữ liệu được gọi là gì?",
    options: [
      "A. Kỹ thuật Exponential Smoothing.",
      "B. Kỹ thuật Rolling Mean trượt.",
      "C. Kỹ thuật Differencing vi phân.",
      "D. Kỹ thuật Seasonal Decomposition."
    ],
    correct_option: "B",
    explanation: "Rolling Mean (Moving Average - trung bình trượt) tính toán giá trị trung bình trong một cửa sổ trượt (window) để làm mượt dữ liệu chuỗi thời gian, giúp loại bỏ nhiễu ngắn hạn và làm rõ xu hướng dài hạn."
  },
  {
    id: "Q_MOD_B_091", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python triển khai một decorator đo thời gian thực thi sau:\n```python\nimport time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} took {time.time() - start:.2f}s\")\n        return result\n    return wrapper\n@timer\ndef compute(n):\n    return sum(i * i for i in range(n))\n```\nKhi chúng ta gọi `compute(1000)`, đối tượng thực tế nào đang được thực thi và giá trị `compute.__name__` là gì?",
    options: [
      "A. Hàm `compute` gốc đang được thực thi; giá trị tên là `\"compute\"`.",
      "B. Hàm `wrapper` đang được thực thi; giá trị tên là `\"wrapper\"`.",
      "C. Hàm `timer` đang được thực thi; giá trị tên là `\"timer\"`.",
      "D. Một đối tượng ẩn danh đang thực thi; tên trả về là `\"anonymous\"`."
    ],
    correct_option: "B",
    explanation: "Khi áp dụng decorator `@timer`, hàm `compute` được thay thế bằng hàm `wrapper` được trả về từ `timer`. Khi gọi `compute(1000)`, thực chất ta đang gọi `wrapper(1000)`. Do đó, `compute.__name__` sẽ là `\"wrapper\"` (trừ khi dùng `functools.wraps` để bảo toàn siêu dữ liệu)."
  },
  {
    id: "Q_MOD_B_092", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Thuật toán sắp xếp nhanh (Quick Sort) sử dụng phân hoạch Lomuto (Lomuto Partitioning Scheme) hoạt động như thế nào?",
    options: [
      "A. Chọn phần tử cuối cùng làm chốt, duyệt từ hai đầu mảng hướng vào nhau.",
      "B. Chọn phần tử cuối làm chốt, duyệt một chiều từ trái sang để phân loại.",
      "C. Chia mảng thành hai nửa bằng nhau, sắp xếp đệ quy rồi tiến hành trộn.",
      "D. Chọn phần tử giữa làm chốt, hoán đổi ngẫu nhiên để tạo sự cân bằng."
    ],
    correct_option: "B",
    explanation: "Phân hoạch Lomuto chọn phần tử cuối cùng làm chốt (pivot). Nó duy trì một chỉ số $i$ để theo dõi ranh giới của các phần tử nhỏ hơn hoặc bằng chốt và một con trỏ $j$ để duyệt mảng từ trái qua phải. Mỗi khi tìm thấy phần tử nhỏ hơn chốt, nó sẽ hoán đổi với phần tử tại vị trí $i+1$."
  },
  {
    id: "Q_MOD_B_093", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong bài toán xử lý văn bản quy mô lớn, thuật toán mã hóa cặp byte (Byte Pair Encoding - BPE) quyết định từ vựng (Vocabulary) mới dựa trên nguyên tắc nào?",
    options: [
      "A. Thực hiện gom cụm từ vựng có cùng gốc dựa trên khoảng cách TF-IDF.",
      "B. Ghép các cặp ký tự có tần suất xuất hiện cao nhất thành token mới.",
      "C. Phân tích ngữ pháp câu để tách ra danh từ, động từ làm từ vựng chính.",
      "D. Mã hóa các từ thành mã nhị phân rồi tiến hành nén theo thuật toán."
    ],
    correct_option: "B",
    explanation: "BPE ban đầu chia tất cả các từ thành các ký tự đơn lẻ. Sau đó, nó đếm tần suất xuất hiện của mọi cặp token liền kề trong tập dữ liệu và lặp đi lặp lại việc kết hợp cặp có tần suất cao nhất thành một token mới cho đến khi đạt kích thước từ vựng mong muốn."
  },
  {
    id: "Q_MOD_B_094", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-structures"],
    content: "Khi triển khai cấu trúc dữ liệu Hàng đợi ưu tiên (Priority Queue) bằng Heap nhị phân cực đại (Max-Heap), thao tác lấy ra phần tử có độ ưu tiên cao nhất và tái cấu trúc Heap có độ phức tạp thời gian là bao nhiêu?",
    options: [
      "A. Thao tác thực hiện trong độ phức tạp thời gian hằng số $O(1)$.",
      "B. Thao tác thực hiện trong độ phức tạp thời gian logarithmic $O(\\log n)$.",
      "C. Thao tác thực hiện trong độ phức tạp thời gian tuyến tính $O(n)$.",
      "D. Thao tác thực hiện trong độ phức tạp thời gian đa thức $O(n^2)$."
    ],
    correct_option: "B",
    explanation: "Phần tử có độ ưu tiên cao nhất nằm ở gốc của Max-Heap, lấy ra mất $O(1)$. Tuy nhiên, sau đó ta phải đưa phần tử cuối cùng lên gốc và thực hiện thao tác vun đống xuống dưới (heapify down) để duy trì tính chất của Heap. Chiều cao của cây nhị phân hoàn chỉnh là $\\log_2 n$, do đó thao tác này mất $O(\\log n)$."
  },
  {
    id: "Q_MOD_B_095", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python sử dụng thư viện `multiprocessing` để tính toán song song sau:\n```python\nimport multiprocessing\ndef worker(x):\n    return x * x\nif __name__ == '__main__':\n    with multiprocessing.Pool(processes=4) as pool:\n        results = pool.map(worker, range(10))\n```\nTại sao trong Python cần phải kiểm tra điều kiện `if __name__ == '__main__':` khi chạy đa tiến trình?",
    options: [
      "A. Ngăn chặn tiến trình con nạp lại mã nguồn chính gây vòng lặp tạo tiến trình vô tận.",
      "B. Cho phép trình thông dịch biên dịch trước các module sang dạng mã bytecode tối ưu.",
      "C. Giải phóng hoàn toàn khóa GIL giúp các tiến trình sử dụng tối đa hiệu năng CPU.",
      "D. Đăng ký tiến trình chính với hệ điều hành để phân bổ và quản lý vùng nhớ chung."
    ],
    correct_option: "A",
    explanation: "Khi sử dụng `multiprocessing`, các tiến trình con được sinh ra (đặc biệt trên Windows/macOS sử dụng phương thức `spawn`) sẽ chạy lại toàn bộ mã của file script để thiết lập môi trường. Nếu không có khối `if __name__ == '__main__':`, các tiến trình con sẽ tiếp tục chạy lệnh tạo `Pool` mới, dẫn đến lỗi tạo tiến trình đệ quy vô hạn."
  },
  {
    id: "Q_MOD_B_096", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Hãy phân biệt sự khác nhau về cơ chế tìm kiếm đường đi ngắn nhất giữa thuật toán Dijkstra và thuật toán Bellman-Ford trên đồ thị trọng số.",
    options: [
      "A. Dijkstra xử lý được đồ thị chứa trọng số âm, trong khi Bellman-Ford chỉ chạy được với trọng số dương.",
      "B. Dijkstra dùng tham lam và không chạy với trọng số âm; Bellman-Ford duyệt mọi cạnh, tìm được chu trình âm.",
      "C. Dijkstra thực hiện duyệt đồ thị theo chiều sâu, còn Bellman-Ford áp dụng cơ chế duyệt theo chiều rộng.",
      "D. Cả hai thuật toán có cùng độ phức tạp và áp dụng các bước nới lỏng khoảng cách tương tự nhau."
    ],
    correct_option: "B",
    explanation: "Dijkstra dùng chiến lược tham lam (greedy) bằng cách luôn chọn đỉnh có khoảng cách ngắn nhất hiện tại để tối ưu, do đó không chạy đúng trên đồ thị có cạnh trọng số âm. Bellman-Ford thực hiện nới lỏng (relaxation) tất cả các cạnh $V-1$ lần, có thể xử lý trọng số âm và giúp phát hiện chu trình âm trên đồ thị."
  },
  {
    id: "Q_MOD_B_097", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Khi tiền xử lý dữ liệu dạng bảng bị mất cân bằng nhãn cực kỳ nghiêm trọng (ví dụ 99.9% là giao dịch bình thường, 0.1% là gian lận), tại sao độ chính xác tổng thể (Accuracy) không còn là độ đo đánh giá mô hình đáng tin cậy?",
    options: [
      "A. Dự đoán mọi mẫu là đa số vẫn đạt 99.9% Accuracy nhưng không tìm được mẫu thiểu số.",
      "B. Các thuật toán tối ưu phân loại sẽ mất khả năng hội tụ khi đạt độ chính xác quá cao.",
      "C. Chỉ số này không phản ánh đúng số lượng đặc trưng đầu vào sau các bước chuẩn hóa.",
      "D. Độ chính xác tổng thể tỷ lệ thuận với số lượng nhiễu trong dữ liệu kiểm thử mẫu."
    ],
    correct_option: "A",
    explanation: "Trong tập dữ liệu mất cân bằng nghiêm trọng, một mô hình phân loại ngây thơ dự đoán mọi giao dịch là bình thường sẽ đạt độ chính xác $99.9\\%$. Tuy nhiên, mô hình này hoàn toàn vô dụng vì không phát hiện được bất kỳ trường hợp gian lận nào (lớp thiểu số). Khi đó ta cần dùng Precision, Recall, F1-score hoặc AUC-ROC."
  },
  {
    id: "Q_MOD_B_098", module_id: "Module_B", difficulty: "Medium",
    tags: ["syntax-python"],
    content: "Xét đoạn mã Python tạo ra một biểu thức máy phát (Generator Expression) sau:\n```python\ngen = (x * x for x in range(3))\nres1 = list(gen)\nres2 = list(gen)\n```\nSau khi đoạn mã trên chạy xong, giá trị của `res1` và `res2` lần lượt là gì?",
    options: [
      "A. Cả `res1` và `res2` đều có giá trị bằng `[0, 1, 4]`.",
      "B. `res1` có giá trị `[0, 1, 4]`, còn `res2` bằng `[]`.",
      "C. `res1` bằng `[]`, còn `res2` có giá trị `[0, 1, 4]`.",
      "D. `res1` có giá trị `[0, 1, 4]`, còn `res2` báo lỗi."
    ],
    correct_option: "B",
    explanation: "Generator trong Python là một iterator chỉ có thể duyệt qua một lần duy nhất. Sau khi chuyển đổi thành danh sách bằng `list(gen)`, generator đã cạn kiệt (exhausted) giá trị. Lần gọi `list(gen)` thứ hai sẽ trả về danh sách rỗng `[]` mà không sinh lại dữ liệu."
  },
  {
    id: "Q_MOD_B_099", module_id: "Module_B", difficulty: "Medium",
    tags: ["algorithms"],
    content: "Trong thuật toán quy hoạch động giải bài toán cái túi dạng số nguyên (0/1 Knapsack Problem) với $n$ đồ vật và trọng lượng tối đa của túi là $W$, bảng quy hoạch động có kích thước như thế nào và độ phức tạp thời gian chạy là bao nhiêu?",
    options: [
      "A. Kích thước bảng là $n \\times W$, độ phức tạp thời gian chạy là $O(n + W)$.",
      "B. Kích thước bảng là $(n+1) \\times (W+1)$, độ phức tạp thời gian chạy là $O(nW)$.",
      "C. Kích thước bảng là $n \\times n$, độ phức tạp thời gian chạy là $O(n^2)$.",
      "D. Kích thước bảng là $W \\times W$, độ phức tạp thời gian chạy là $O(W^2)$."
    ],
    correct_option: "B",
    explanation: "Để giải bài toán 0/1 Knapsack bằng quy hoạch động, ta xây dựng bảng lưu trữ kết quả trung gian có số dòng là $n+1$ (đại diện cho số đồ vật từ 0 đến $n$) và số cột là $W+1$ (đại diện cho các mức tải trọng từ 0 đến $W$). Thuật toán cần hai vòng lặp lồng nhau duyệt qua bảng này, cho độ phức tạp thời gian là $O(nW)$."
  },
  {
    id: "Q_MOD_B_100", module_id: "Module_B", difficulty: "Medium",
    tags: ["data-preprocessing"],
    content: "Trong các mô hình Transformer như BERT hay GPT, kỹ thuật mặt nạ (Masking) được áp dụng trong cơ chế tự chú ý (Self-Attention) của Decoder nhằm mục đích gì?",
    options: [
      "A. Che đi các từ đứng trước để mô hình chỉ tập trung học các từ ở tương lai.",
      "B. Che đi các từ phía sau tránh cho mô hình nhìn thấy trước đáp án khi học.",
      "C. Loại bỏ hoàn toàn các từ dừng trước khi thực hiện tính toán ma trận chính.",
      "D. Giảm thiểu số lượng tham số tính toán của lớp Attention xuống còn một nửa."
    ],
    correct_option: "B",
    explanation: "Decoder của Transformer sinh từ theo cơ chế tự hồi quy (Autoregressive), tức là sinh từ tiếp theo dựa trên các từ đã có. Do đó, trong quá trình huấn luyện, ta phải áp dụng mặt nạ chú ý (Causal Masking) để che đi các vị trí từ tương lai (phía sau), ngăn mô hình rò rỉ thông tin từ đáp án."
  }
];
