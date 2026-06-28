const QUESTIONS_D = [
  {
    "id": "Q_MOD_D_001",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Đoạn code sau đây sẽ in ra màn hình thông điệp nào?\n```python\ntry:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Can't divide by zero\")\nexcept Exception:\n    print(\"Something went wrong\")\n```",
    "options": [
      "A. `Can't divide by zero`",
      "B. `Something went wrong`",
      "C. Chương trình dừng đột ngột và ném lỗi ra terminal.",
      "D. Cả hai thông điệp đều được in ra."
    ],
    "correct_option": "A",
    "explanation": "Phép toán `10 / 0` sinh ra ngoại lệ `ZeroDivisionError`. Khối `except` được duyệt tuần tự từ trên xuống dưới. Khối `except ZeroDivisionError` khớp đầu tiên nên được chạy, in ra `\"Can't divide by zero\"`. Khối `except Exception` bao quát phía sau sẽ bị bỏ qua.",
    "solution": "**Bước 1:** Phép tính `10 / 0` ném ra ngoại lệ cụ thể `ZeroDivisionError`.\n**Bước 2:** Các nhánh `except` được kiểm tra từ trên xuống:\n- Nhánh 1: `except ZeroDivisionError` khớp trực tiếp -> thực thi và kết thúc luồng bắt lỗi.\n- Nhánh 2: `except Exception` bị bỏ qua.\n**Bước 3:** In ra `'Can't divide by zero'`. Chọn A."
  },
  {
    "id": "Q_MOD_D_002",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Trong cấu trúc xử lý ngoại lệ `try/except/else/finally`, khối lệnh `finally` có đặc điểm gì?",
    "options": [
      "A. Chỉ thực thi khi có lỗi xảy ra.",
      "B. Chỉ thực thi khi không có lỗi nào xảy ra.",
      "C. Luôn luôn được thực thi bất luận lỗi có xảy ra hay không.",
      "D. Dùng để định nghĩa lỗi tự chế."
    ],
    "correct_option": "C",
    "explanation": "Khối `finally` đảm bảo luôn luôn được chạy trước khi thoát khỏi cấu trúc `try-except`, dù khối `try` chạy thành công, ném lỗi bị bắt, hay thậm chí ném lỗi không bắt được hoặc gặp lệnh `return`. Nó thường dùng để dọn dẹp tài nguyên (đóng file, ngắt kết nối mạng).",
    "solution": "**Bước 1:** Hiểu vai trò của khối `finally` trong mô hình quản lý ngoại lệ.\n**Bước 2:** `finally` được thiết kế để chứa mã dọn dẹp tài nguyên, nên bắt buộc phải chạy trong mọi tình huống.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_D_003",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Trong cấu trúc xử lý ngoại lệ, khối `else` được thực thi khi nào?",
    "options": [
      "A. Khi khối `try` gặp lỗi và khối `except` đã xử lý xong.",
      "B. Khi khối `try` chạy hoàn toàn trơn tru và không phát sinh bất kỳ ngoại lệ nào.",
      "C. Khi khối `finally` bị lỗi.",
      "D. Luôn luôn thực thi giống như `finally`."
    ],
    "correct_option": "B",
    "explanation": "Khối `else` sau khối `except` chỉ được chạy nếu khối lệnh trong `try` thực thi thành công từ đầu đến cuối mà không gặp bất kỳ lỗi nào.",
    "solution": "**Bước 1:** Xét ý nghĩa của nhánh `else` trong khối kiểm soát lỗi:\n- `try`: Chứa code có nguy cơ lỗi.\n- `except`: Chạy khi có lỗi.\n- `else`: Chạy khi KHÔNG có lỗi.\n- `finally`: Luôn chạy.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_D_004",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Đoạn code sau đây in ra kết quả gì?\n```python\ntry:\n    lst = [1, 2]\n    print(lst[5])\nexcept IndexError as e:\n    print(\"Out of bounds\")\n```",
    "options": [
      "A. `IndexError`",
      "B. `Out of bounds`",
      "C. `None`",
      "D. Chương trình dừng hoạt động vì lỗi không được bắt"
    ],
    "correct_option": "B",
    "explanation": "Danh sách `lst` có độ dài 2 (chỉ số 0 và 1). Truy cập `lst[5]` vượt quá phạm vi index cho phép nên Python ném ra lỗi `IndexError`. Ngoại lệ này được chụp lại bởi khối `except IndexError`, thực thi lệnh print in ra `Out of bounds`.",
    "solution": "**Bước 1:** Danh sách `[1, 2]` chỉ có index hợp lệ là 0 và 1.\n**Bước 2:** `lst[5]` cố gắng lấy phần tử ở chỉ số 5 -> Ném lỗi `IndexError`.\n**Bước 3:** Khối `except IndexError` phát hiện lỗi này và chạy lệnh in ra `'Out of bounds'`. Chọn B."
  },
  {
    "id": "Q_MOD_D_005",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Từ khóa nào được sử dụng để kích hoạt/ném ra một ngoại lệ một cách chủ động trong Python?",
    "options": [
      "A. `throw`",
      "B. `raise`",
      "C. `trigger`",
      "D. `error`"
    ],
    "correct_option": "B",
    "explanation": "Python sử dụng từ khóa `raise` để ném ra một ngoại lệ một cách tường minh (ví dụ `raise ValueError(\"Invalid value\")`). Từ khóa `throw` được dùng ở các ngôn ngữ khác như JS/C#.",
    "solution": "**Bước 1:** Tìm lệnh phát sinh ngoại lệ chủ động trong Python.\n**Bước 2:** Lệnh đó là `raise <ExceptionObject>`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_006",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Để tạo ra một lớp ngoại lệ tùy chỉnh (custom exception) trong Python, lớp đó bắt buộc phải kế thừa trực tiếp hoặc gián tiếp từ lớp nào?",
    "options": [
      "A. Lớp `Exception`",
      "B. Lớp `CustomError`",
      "C. Lớp `TypeError`",
      "D. Lớp `BaseObject`"
    ],
    "correct_option": "A",
    "explanation": "Tất cả các ngoại lệ trong Python phải kế thừa từ lớp cơ sở `BaseException`. Tuy nhiên, các lập trình viên được khuyến cáo kế thừa từ lớp `Exception` đối với mọi lỗi tự định nghĩa (user-defined exceptions) để tránh bắt nhầm các tín hiệu dừng hệ thống (như SystemExit).",
    "solution": "**Bước 1:** Ngoại lệ tùy chỉnh cần tuân theo cây kế thừa ngoại lệ của Python.\n**Bước 2:** Lớp cơ sở tiêu chuẩn cho mọi ngoại lệ thông thường là lớp `Exception`.\n**Bước 3:** Ví dụ khai báo: `class MyError(Exception): pass`. Chọn A."
  },
  {
    "id": "Q_MOD_D_007",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Khi mở một tệp tin bằng hàm `open('data.txt', 'w')`, chế độ `'w'` (write) sẽ có hành vi như thế nào?",
    "options": [
      "A. Chỉ cho phép đọc file.",
      "B. Ghi tiếp nội dung mới vào cuối file nếu file đã tồn tại.",
      "C. Tạo file mới nếu chưa có, hoặc xóa sạch nội dung cũ của file đã có trước khi ghi dữ liệu mới.",
      "D. Chỉ ghi dữ liệu nhị phân."
    ],
    "correct_option": "C",
    "explanation": "Chế độ `'w'` (write mode) sẽ mở file để ghi dữ liệu. Nếu file chưa tồn tại, nó sẽ tự động tạo file mới. Nếu file đã tồn tại, nó sẽ cắt cụt nội dung file (truncate - làm trống file hoàn toàn) rồi ghi mới từ đầu.",
    "solution": "**Bước 1:** Tìm hiểu các chế độ mở file:\n- `'r'`: Đọc.\n- `'w'`: Ghi mới (Ghi đè, làm sạch file cũ).\n- `'a'`: Ghi tiếp vào cuối (Append).\n**Bước 2:** Chế độ `'w'` làm trống file cũ và ghi từ đầu. Chọn C."
  },
  {
    "id": "Q_MOD_D_008",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Chế độ (mode) nào được dùng để mở file để ghi thêm dữ liệu vào cuối tệp tin đã tồn tại mà không xóa nội dung cũ?",
    "options": [
      "A. `'w'`",
      "B. `'r+'`",
      "C. `'a'`",
      "D. `'append'`"
    ],
    "correct_option": "C",
    "explanation": "Chế độ `'a'` (append) mở file để ghi tiếp nối dữ liệu vào cuối file mà không ảnh hưởng tới nội dung đã có từ trước.",
    "solution": "**Bước 1:** Cần ghi nối tiếp dữ liệu vào cuối file.\n**Bước 2:** Chế độ viết tắt của append là `'a'`.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_D_009",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Tại sao việc sử dụng khối lệnh `with open('file.txt', 'r') as f:` lại được khuyến nghị hơn việc mở và đóng file thủ công?",
    "options": [
      "A. Nó giúp file ghi dữ liệu nhanh hơn.",
      "B. Nó tự động đóng tệp tin sau khi thoát ra khỏi khối lệnh (context manager) ngay cả khi có ngoại lệ xảy ra bên trong khối lệnh đó.",
      "C. Nó tự động sửa lỗi chính tả trong file.",
      "D. Nó mã hóa file bảo mật hơn."
    ],
    "correct_option": "B",
    "explanation": "Cú pháp `with` hoạt động như một Context Manager. Khi khối lệnh kết thúc, nó sẽ tự động kích hoạt phương thức dọn dẹp để đóng file giải phóng tài nguyên hệ thống, bảo vệ dữ liệu tránh bị hỏng nếu chương trình đột ngột gặp lỗi nửa chừng.",
    "solution": "**Bước 1:** Phân tích lợi ích của Context Manager với file.\n**Bước 2:** Tránh tình trạng quên gọi `f.close()`, rò rỉ bộ nhớ hoặc khóa file.\n**Bước 3:** Khối `with` tự động hóa việc đóng file an toàn kể cả khi có lỗi xảy ra. Chọn B."
  },
  {
    "id": "Q_MOD_D_010",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Ngoại lệ nào xuất hiện khi bạn cố gắng mở một tệp tin không tồn tại ở chế độ đọc `'r'`?",
    "options": [
      "A. `IOError`",
      "B. `FileNotFoundError`",
      "C. `EOFError`",
      "D. `ValueError`"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, việc cố mở đọc một file không tồn tại sẽ ném ra lỗi cụ thể là `FileNotFoundError` (một lớp con của `OSError`).",
    "solution": "**Bước 1:** Xét lỗi khi file không tồn tại.\n**Bước 2:** Trình thông dịch ném ra `FileNotFoundError`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_011",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "math"
    ],
    "content": "Để làm tròn lên số thực thành số nguyên gần nhất lớn hơn hoặc bằng nó (ví dụ $3.1 \\rightarrow 4$), ta sử dụng hàm nào trong module `math`?",
    "options": [
      "A. `math.floor()`",
      "B. `math.ceil()`",
      "C. `math.round()`",
      "D. `math.trunc()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `math.ceil()` (ceil viết tắt của ceiling - trần nhà) làm tròn số thực lên số nguyên nhỏ nhất lớn hơn hoặc bằng nó. Hàm `math.floor()` (sàn nhà) làm tròn xuống.",
    "solution": "**Bước 1:** Tìm hàm làm tròn lên trong thư viện `math`.\n- `ceil(3.1)` = 4\n- `floor(3.1)` = 3\n**Bước 2:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_D_012",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "datetime"
    ],
    "content": "Khi thực hiện phép trừ giữa hai đối tượng `datetime.date`, kết quả trả về thuộc lớp dữ liệu nào?",
    "options": [
      "A. `int` (số ngày)",
      "B. `datetime.date`",
      "C. `datetime.timedelta`",
      "D. `float`"
    ],
    "correct_option": "C",
    "explanation": "Phép trừ hai mốc thời gian trả về một đối tượng biểu diễn khoảng thời gian chênh lệch, thuộc lớp `datetime.timedelta`.",
    "solution": "**Bước 1:** Phân tích phép toán thời gian: `date1 - date2`.\n**Bước 2:** Kết quả không phải là một ngày cụ thể mà là khoảng thời gian (duration).\n**Bước 3:** Kiểu dữ liệu tương ứng trong Python là `timedelta`. Chọn C."
  },
  {
    "id": "Q_MOD_D_013",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "os"
    ],
    "content": "Hàm nào trong module `os` dùng để lấy đường dẫn thư mục làm việc hiện tại (Current Working Directory)?",
    "options": [
      "A. `os.path.abspath()`",
      "B. `os.getcwd()`",
      "C. `os.getdir()`",
      "D. `os.listdir()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `os.getcwd()` (viết tắt của **g**et **c**urrent **w**orking **d**irectory) trả về đường dẫn tuyệt đối của thư mục làm việc hiện thời của chương trình.",
    "solution": "**Bước 1:** Xác định nhu cầu: Lấy thư mục làm việc hiện tại.\n**Bước 2:** Hàm os tương ứng là `getcwd()`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_014",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "os"
    ],
    "content": "Để kiểm tra xem một đường dẫn thư mục hoặc file cụ thể có tồn tại trên hệ thống hay không, ta dùng hàm nào?",
    "options": [
      "A. `os.exists()`",
      "B. `os.path.exists()`",
      "C. `os.path.isfile()`",
      "D. `os.dir.exists()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `os.path.exists(path)` nhận vào một đường dẫn và trả về `True` nếu đường dẫn đó tồn tại (bất kể là file hay folder) và `False` nếu ngược lại.",
    "solution": "**Bước 1:** Khảo sát các hàm kiểm tra sự tồn tại của file/thư mục.\n**Bước 2:** Hàm trong module `os.path` là `exists()`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_015",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "json"
    ],
    "content": "Sự khác biệt giữa hai hàm `json.dumps()` và `json.dump()` trong module `json` là gì?",
    "options": [
      "A. `json.dumps()` chuyển đổi một đối tượng Python thành chuỗi JSON (String), còn `json.dump()` ghi trực tiếp dữ liệu JSON đó vào một file stream.",
      "B. `json.dumps()` dùng cho định dạng số, `json.dump()` dùng cho chữ.",
      "C. `json.dumps()` đọc file JSON, `json.dump()` tạo file JSON.",
      "D. Hai hàm hoàn toàn giống nhau."
    ],
    "correct_option": "A",
    "explanation": "Ký tự `s` trong tên hàm `dumps` viết tắt của **s**tring. `json.dumps()` trả về chuỗi JSON để truyền nhận mạng hoặc xử lý chuỗi. Còn `json.dump()` nhận thêm tham số file stream để ghi trực tiếp xuống ổ đĩa.",
    "solution": "**Bước 1:** So sánh chữ cái cuối của hàm:\n- `dumps`: Dump to String (Trả về String JSON).\n- `dump`: Dump to File (Ghi vào tệp tin).\n**Bước 2:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_D_016",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "json"
    ],
    "content": "Để phân tích cú pháp (parse) một chuỗi định dạng JSON thành một Dictionary trong Python, ta dùng hàm nào?",
    "options": [
      "A. `json.loads()`",
      "B. `json.load()`",
      "C. `json.parse()`",
      "D. `json.to_dict()`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `json.loads()` (load **s**tring) nhận tham số đầu vào là một chuỗi định dạng JSON và chuyển đổi nó thành cấu trúc dữ liệu tương ứng của Python (thường là dict hoặc list). Hàm `json.load()` không có chữ `s` ở cuối dùng để đọc từ một file stream.",
    "solution": "**Bước 1:** Cần chuyển đổi chuỗi JSON (String) sang Dict.\n**Bước 2:** Hàm tương ứng là `json.loads()`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_017",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "random"
    ],
    "content": "Hàm nào trong module `random` dùng để chọn ngẫu nhiên một phần tử từ một danh sách cho trước?",
    "options": [
      "A. `random.randint()`",
      "B. `random.choice()`",
      "C. `random.sample()`",
      "D. `random.random()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `random.choice(sequence)` nhận vào một chuỗi hoặc danh sách và trả về ngẫu nhiên một phần tử duy nhất từ tập dữ liệu đó.",
    "solution": "**Bước 1:** Xem xét chức năng các hàm random:\n- `randint(a, b)`: Sinh số nguyên ngẫu nhiên từ a đến b.\n- `choice(seq)`: Chọn một phần tử ngẫu nhiên từ dãy `seq`.\n- `sample(seq, k)`: Lấy mẫu ngẫu nhiên `k` phần tử không trùng lặp.\n- `random()`: Sinh số thực từ 0.0 đến 1.0.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_D_018",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "random"
    ],
    "content": "Đoạn code sau đây in ra kết quả gì?\n```python\nimport random\nprint(random.randint(1, 3))\n```",
    "options": [
      "A. Một số thực ngẫu nhiên lớn hơn 1 và nhỏ hơn 3.",
      "B. Một số nguyên ngẫu nhiên nhận giá trị là 1, 2 hoặc 3.",
      "C. Một số nguyên ngẫu nhiên nhận giá trị là 1 hoặc 2 (không bao gồm 3).",
      "D. Luôn in ra số 2."
    ],
    "correct_option": "B",
    "explanation": "Khác với hàm cắt slice hay hàm `range(a, b)`, hàm `random.randint(a, b)` trong Python **bao gồm cả hai điểm cận** `a` và `b`. Do đó `random.randint(1, 3)` có thể trả về 1, 2 hoặc 3.",
    "solution": "**Bước 1:** Nhớ lại đặc điểm của `random.randint(a, b)`:\n- Nó sinh ra số nguyên ngẫu nhiên.\n- Nó bao gồm cả hai điểm mốc `a` và `b` (tức là $a \\le x \\le b$).\n**Bước 2:** Với tham số `(1, 3)`, kết quả có thể là 1, 2 hoặc 3. Chọn B."
  },
  {
    "id": "Q_MOD_D_019",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "random"
    ],
    "content": "Để tráo đổi/xáo trộn thứ tự các phần tử của một danh sách trực tiếp (in-place modification), ta dùng hàm nào?",
    "options": [
      "A. `random.shuffle()`",
      "B. `random.mix()`",
      "C. `random.reorder()`",
      "D. `random.choice()`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `random.shuffle(lst)` xáo trộn ngẫu nhiên thứ tự các phần tử của List truyền vào tại chỗ (in-place) và trả về `None`.",
    "solution": "**Bước 1:** Tìm cách xáo trộn danh sách.\n**Bước 2:** Hàm trong module `random` thực hiện việc này tại chỗ là `shuffle()`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_020",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "sys"
    ],
    "content": "Danh sách các tham số dòng lệnh truyền vào script Python khi thực thi được lưu trữ trong biến nào của module `sys`?",
    "options": [
      "A. `sys.args`",
      "B. `sys.argv`",
      "C. `sys.parameters`",
      "D. `sys.inputs`"
    ],
    "correct_option": "B",
    "explanation": "`sys.argv` (argv viết tắt của **arg**ument **v**ector) là danh sách chứa các tham số dòng lệnh. Phần tử đầu tiên `sys.argv[0]` luôn luôn là tên của script Python đang chạy.",
    "solution": "**Bước 1:** Tìm biến chứa tham số dòng lệnh.\n**Bước 2:** Thư viện `sys` lưu các tham số này trong list `sys.argv`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_021",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Đoạn code sau đây sẽ gây ra ngoại lệ (exception) nào?\n```python\nx = int(\"abc\")\n```",
    "options": [
      "A. `TypeError`",
      "B. `ValueError`",
      "C. `NameError`",
      "D. `AttributeError`"
    ],
    "correct_option": "B",
    "explanation": "`ValueError` xảy ra khi một hàm nhận được đối số có kiểu dữ liệu phù hợp (ở đây là chuỗi `str`) nhưng mang giá trị không hợp lệ đối với phép toán (chuỗi `\"abc\"` không thể đại diện cho số nguyên nào để chuyển sang `int`). Lỗi `TypeError` chỉ xảy ra khi truyền sai kiểu dữ liệu hoàn toàn (ví dụ truyền list vào `int()`).",
    "solution": "**Bước 1:** Phân tích phép toán: cố gắng chuyển đổi chuỗi `'abc'` thành số nguyên.\n**Bước 2:** Chuỗi `'abc'` không chứa ký tự số.\n**Bước 3:** Trình thông dịch ném ra lỗi giá trị: `ValueError`. Chọn B."
  },
  {
    "id": "Q_MOD_D_022",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Ngoại lệ nào sẽ xảy ra khi bạn cố tình thực hiện phép cộng giữa một số nguyên và một chuỗi ký tự (ví dụ `10 + \"20\"`)?",
    "options": [
      "A. `ValueError`",
      "B. `TypeError`",
      "C. `ArithmeticError`",
      "D. Python sẽ tự động ép chuỗi thành số và không báo lỗi."
    ],
    "correct_option": "B",
    "explanation": "Python không tự động ép kiểu ép buộc (implicit type coercion) cho các phép toán không tương thích. Phép toán cộng đòi hỏi hai toán hạng cùng kiểu số hoặc cùng kiểu chuỗi. Việc cộng trực tiếp `int` và `str` gây lỗi kiểu dữ liệu `TypeError`.",
    "solution": "**Bước 1:** Phép cộng `10 + \"20\"` có một số hạng kiểu `int` và một số hạng kiểu `str`.\n**Bước 2:** Python định kiểu mạnh (strongly typed), không tự động chuyển đổi.\n**Bước 3:** Lỗi phát sinh là lỗi kiểu dữ liệu `TypeError`. Chọn B."
  },
  {
    "id": "Q_MOD_D_023",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Lỗi nào xảy ra khi chương trình cố gắng truy cập một khóa (key) không tồn tại trong Dictionary?",
    "options": [
      "A. `IndexError`",
      "B. `KeyError`",
      "C. `LookupError`",
      "D. `ValueError`"
    ],
    "correct_option": "B",
    "explanation": "Khi truy cập trực tiếp bằng `dict[key]` mà khóa không có trong từ điển, Python phát sinh lỗi `KeyError`.",
    "solution": "**Bước 1:** Xác định lỗi truy cập khóa từ điển.\n**Bước 2:** Lỗi phát sinh là `KeyError`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_024",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Đoạn code sau đây sẽ gây ra lỗi gì?\n```python\nprint(undefined_variable)\n```",
    "options": [
      "A. `TypeError`",
      "B. `NameError`",
      "C. `ValueError`",
      "D. `SyntaxError`"
    ],
    "correct_option": "B",
    "explanation": "`NameError` xảy ra khi chương trình cố sử dụng một biến hoặc tên định danh chưa từng được định nghĩa hoặc khai báo trong phạm vi hiện tại.",
    "solution": "**Bước 1:** Biến `undefined_variable` chưa từng được gán giá trị.\n**Bước 2:** Trình biên dịch không tìm thấy định danh này trong bảng ký hiệu cục bộ hay toàn cục.\n**Bước 3:** Kết quả ném ra lỗi tên gọi: `NameError`. Chọn B."
  },
  {
    "id": "Q_MOD_D_025",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Hành vi của phương thức `readlines()` của đối tượng file là gì?",
    "options": [
      "A. Đọc toàn bộ file và trả về một chuỗi ký tự duy nhất chứa tất cả nội dung.",
      "B. Đọc toàn bộ file và trả về một danh sách (list) các chuỗi, trong đó mỗi chuỗi là một dòng của file.",
      "C. Chỉ đọc dòng đầu tiên của file.",
      "D. Trả về số lượng dòng có trong file."
    ],
    "correct_option": "B",
    "explanation": "Phương thức `readlines()` đọc tất cả các dòng từ file và lưu giữ chúng thành các chuỗi con trong một danh sách, bao gồm cả ký tự xuống dòng `\\n` ở cuối mỗi dòng.",
    "solution": "**Bước 1:** So sánh các hàm đọc file:\n- `read()`: Trả về một chuỗi lớn chứa toàn bộ nội dung.\n- `readline()`: Đọc duy nhất dòng tiếp theo và trả về dạng chuỗi.\n- `readlines()`: Đọc toàn bộ và trả về một List các dòng.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_D_026",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "sys"
    ],
    "content": "Để chấm dứt/thoát khỏi chương trình Python ngay lập tức tại một vị trí bất kỳ, ta sử dụng hàm nào?",
    "options": [
      "A. `sys.exit()`",
      "B. `sys.terminate()`",
      "C. `os.close()`",
      "D. `exit`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `sys.exit()` ném ra ngoại lệ `SystemExit`, khiến trình thông dịch dừng thực thi chương trình Python. (Hàm `exit()` có sẵn trong terminal tương tác nhưng không được khuyên dùng trong script thực tế vì phụ thuộc vào module site).",
    "solution": "**Bước 1:** Tìm cách thoát chương trình tiêu chuẩn.\n**Bước 2:** Hàm trong module `sys` được thiết kế chuyên biệt là `exit()`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_027",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "sys"
    ],
    "content": "Biến `sys.path` trong Python chứa thông tin gì?",
    "options": [
      "A. Danh sách các đường dẫn mà Python sẽ tìm kiếm khi thực hiện lệnh `import` module.",
      "B. Đường dẫn đến thư mục cài đặt Python.",
      "C. Đường dẫn của file script đang thực thi.",
      "D. Cấu hình hệ thống phần cứng."
    ],
    "correct_option": "A",
    "explanation": "`sys.path` là một danh sách chứa các chuỗi đại diện cho các đường dẫn thư mục. Khi gặp lệnh `import`, Python sẽ tìm kiếm file module tương ứng lần lượt trong các thư mục nằm trong danh sách này.",
    "solution": "**Bước 1:** Khảo sát biến môi trường đường dẫn module.\n**Bước 2:** `sys.path` lưu trữ các đường dẫn thư mục tìm kiếm module.\n**Bước 3:** Bạn có thể chỉnh sửa danh sách này bằng `sys.path.append()` để import module từ thư mục tự định nghĩa. Chọn A."
  },
  {
    "id": "Q_MOD_D_028",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "standard-library",
      "math"
    ],
    "content": "Hàm nào trong thư viện `math` được dùng để tính giai thừa của một số nguyên $N$ (ví dụ $N!$)?",
    "options": [
      "A. `math.fact()`",
      "B. `math.factorial()`",
      "C. `math.giai_thua()`",
      "D. `math.power()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `math.factorial(n)` trả về giai thừa của số nguyên `n`. Nó ném ra lỗi `ValueError` nếu truyền số thực hoặc số âm.",
    "solution": "**Bước 1:** Tìm hàm tính giai thừa trong thư viện `math`.\n**Bước 2:** Tên đầy đủ của hàm là `factorial(n)`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_029",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "exceptions"
    ],
    "content": "Tại sao việc bắt lỗi theo kiểu chung chung như `except BaseException:` hoặc `except:` lại được coi là phản quy chuẩn (bad practice)?",
    "options": [
      "A. Vì nó làm chương trình chạy chậm đi rất nhiều.",
      "B. Vì nó bắt tất cả các loại ngoại lệ kể cả lỗi cú pháp và các tín hiệu thoát hệ thống (như nhấn Ctrl+C để ngắt chương trình), khiến lập trình viên khó gỡ lỗi và che giấu các vấn đề tiềm ẩn.",
      "C. Vì nó sẽ tự động xóa các biến trong bộ nhớ.",
      "D. Vì Python 3 đã cấm hoàn toàn cú pháp này."
    ],
    "correct_option": "B",
    "explanation": "Bắt lỗi quá chung chung sẽ vô tình chụp luôn cả các lỗi lập trình (như gõ sai tên biến `NameError`) hoặc các tín hiệu ngắt từ người dùng (`KeyboardInterrupt`), làm mất khả năng can thiệp tắt ứng dụng và khiến việc định vị lỗi thực tế trở nên khó khăn.",
    "solution": "**Bước 1:** Phân tích ảnh hưởng của việc dùng khối `except` trống.\n**Bước 2:** Bắt toàn bộ lỗi che giấu nguyên nhân thực sự gây crash ứng dụng và ngăn cản tắt chương trình bình thường.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_030",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": [
      "files"
    ],
    "content": "Phương thức nào dùng để ghi một danh sách các chuỗi ký tự xuống file mà không tự động thêm ký tự xuống dòng ở cuối mỗi phần tử?",
    "options": [
      "A. `f.write()`",
      "B. `f.write_lines()`",
      "C. `f.writelines()`",
      "D. `f.print()`"
    ],
    "correct_option": "C",
    "explanation": "Phương thức `writelines(iterable)` nhận vào một danh sách các chuỗi và ghi chúng xuống file liên tục. Nó không tự động bổ sung thêm bất cứ ký tự xuống dòng `\\n` nào giữa các chuỗi con.",
    "solution": "**Bước 1:** Xem xét cách ghi danh sách chuỗi xuống file.\n**Bước 2:** Phương thức tương ứng của file stream là `writelines()`.\n**Bước 3:** Chọn C."
  }
];
