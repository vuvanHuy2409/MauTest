const QUESTIONS_E = [
  {
    "id": "Q_MOD_E_001",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "comprehensions"
    ],
    "content": "Giá trị của danh sách `evens` tạo bởi câu lệnh list comprehension sau là gì?\n```python\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)\n```",
    "options": [
      "A. `[0, 2, 4, 6, 8, 10]`",
      "B. `[2, 4, 6, 8]`",
      "C. `[0, 2, 4, 6, 8]`",
      "D. `[1, 3, 5, 7, 9]`"
    ],
    "correct_option": "C",
    "explanation": "Vòng lặp chạy từ 0 đến 9 (do `range(10)`). Biểu thức kiểm tra `if x % 2 == 0` giữ lại các số chẵn bao gồm cả số 0. Do đó danh sách kết quả chứa các số chẵn trong khoảng này là `0, 2, 4, 6, 8`.",
    "solution": "**Bước 1:** Viết lại list comprehension dưới dạng vòng lặp thông thường:\n```python\nevens = []\nfor x in range(10):\n    if x % 2 == 0:\n        evens.append(x)\n```\n**Bước 2:** Duyệt các giá trị `x` của `range(10)` từ 0 đến 9:\n- Số chẵn thỏa mãn: 0, 2, 4, 6, 8.\n**Bước 3:** Kết quả là `[0, 2, 4, 6, 8]`. Chọn đáp án C."
  },
  {
    "id": "Q_MOD_E_002",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "comprehensions"
    ],
    "content": "Từ điển `squared_dict` được tạo ra dưới dạng dict comprehension sau sẽ có giá trị là gì?\n```python\nsquared_dict = {x: x**2 for x in [1, 2, 3]}\nprint(squared_dict)\n```",
    "options": [
      "A. `[(1, 1), (2, 4), (3, 9)]`",
      "B. `{\"1\": 1, \"2\": 4, \"3\": 9}`",
      "C. `{1: 1, 2: 4, 3: 9}`",
      "D. `{1, 4, 9}`"
    ],
    "correct_option": "C",
    "explanation": "Dict comprehension có cú pháp `{key_expr: value_expr for item in iterable}`. Ở đây ta duyệt qua danh sách `[1, 2, 3]` gán khóa là `x` và giá trị tương ứng là bình phương của nó `x**2`. Khóa nhận kiểu nguyên nên kết quả là `{1: 1, 2: 4, 3: 9}`.",
    "solution": "**Bước 1:** Phân tích cú pháp dict comprehension.\n**Bước 2:** Các cặp khóa:giá trị được sinh ra là:\n- x = 1: khóa là 1, giá trị là 1**2 = 1\n- x = 2: khóa là 2, giá trị là 2**2 = 4\n- x = 3: khóa là 3, giá trị là 3**2 = 9\n**Bước 3:** Kiểu Dictionary bao bọc bởi `{}`. Kết quả: `{1: 1, 2: 4, 3: 9}` (Đáp án C)."
  },
  {
    "id": "Q_MOD_E_003",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "generators"
    ],
    "content": "Sự khác biệt về mặt sử dụng bộ nhớ (memory consumption) giữa một list comprehension `[x for x in range(1000000)]` và một generator expression `(x for x in range(1000000))` là gì?",
    "options": [
      "A. Cả hai chiếm dụng bộ nhớ tương tự nhau.",
      "B. List comprehension tạo và lưu trữ toàn bộ 1 triệu phần tử vào RAM ngay lập tức, trong khi Generator expression chỉ tạo ra một đối tượng generator chiếm bộ nhớ cực kỳ nhỏ và chỉ sinh phần tử tiếp theo khi được yêu cầu (lazy evaluation).",
      "C. Generator expression chiếm nhiều bộ nhớ hơn vì nó chứa cơ chế bảo mật.",
      "D. List comprehension tiết kiệm bộ nhớ hơn vì được tối ưu hóa bằng C."
    ],
    "correct_option": "B",
    "explanation": "List comprehension sử dụng ngoặc vuông `[]` sẽ tính toán toàn bộ danh sách phần tử và nạp chúng vào bộ nhớ RAM ngay lập tức. Generator expression sử dụng ngoặc đơn `()` thực hiện cơ chế 'Lazy Evaluation' (đánh giá trì hoãn), chỉ sinh phần tử khi gọi hàm `next()` hoặc duyệt vòng lặp, giúp tiết kiệm bộ nhớ tối đa đối với các tập dữ liệu khổng lồ.",
    "solution": "**Bước 1:** So sánh kiểu dữ liệu trả về của `[]` vs `()`:\n- `[x for ...]` trả về List thực sự chứa 1 triệu phần tử vật lý.\n- `(x for ...)` trả về đối tượng Generator (trình sinh).\n**Bước 2:** Trình sinh (generator) không tính toán trước phần tử, mà chỉ lưu trữ trạng thái lặp hiện tại, do đó tiêu tốn bộ nhớ cố định và rất nhỏ ($O(1)$). Chọn B."
  },
  {
    "id": "Q_MOD_E_004",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "generators"
    ],
    "content": "Từ khóa nào được sử dụng bên trong một hàm để biến hàm thông thường đó thành một Generator function (hàm trình sinh)?",
    "options": [
      "A. `return`",
      "B. `yield`",
      "C. `generate`",
      "D. `next`"
    ],
    "correct_option": "B",
    "explanation": "Từ khóa `yield` được sử dụng thay thế cho `return` trong hàm để biến nó thành Generator function. Khi gặp `yield`, hàm tạm thời đình chỉ hoạt động, trả về giá trị cho bên ngoài, và ghi nhớ trạng thái nội bộ để có thể tiếp tục thực thi tiếp tục từ dòng đó trong lượt gọi sau.",
    "solution": "**Bước 1:** Nhận biết cấu trúc của trình sinh trong Python.\n**Bước 2:** Lệnh `yield` giúp hàm duy trì trạng thái cục bộ và sinh giá trị tuần tự.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_E_005",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "iterators"
    ],
    "content": "Khi một đối tượng iterator đã duyệt qua hết tất cả các phần tử và ta tiếp tục gọi hàm `next(iterator)`, Python sẽ phát sinh ra ngoại lệ nào để thông báo việc dừng lặp?",
    "options": [
      "A. `IndexError`",
      "B. `StopIteration`",
      "C. `EOFError`",
      "D. `IteratorError`"
    ],
    "correct_option": "B",
    "explanation": "Theo giao thức lặp (Iterator Protocol) của Python, khi không còn phần tử nào kế tiếp, phương thức `__next__()` phải ném ra ngoại lệ `StopIteration`. Vòng lặp `for` bản chất hoạt động bằng cách gọi `next()` liên tục và âm thầm bắt ngoại lệ `StopIteration` để thoát vòng lặp an toàn.",
    "solution": "**Bước 1:** Tìm hiểu giao thức lặp (Iterator Protocol).\n**Bước 2:** Khi iterator cạn kiệt phần tử, lời gọi `next()` tiếp theo kích hoạt ném lỗi `StopIteration`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_E_006",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "iterators"
    ],
    "content": "Để biến một Class tự định nghĩa thành một Iterable (đối tượng lặp được) có thể sử dụng trong vòng lặp `for`, lớp đó bắt buộc phải định nghĩa phương thức ma thuật nào?",
    "options": [
      "A. `__next__` và trả về đối tượng iterator.",
      "B. `__iter__` và trả về một đối tượng có định nghĩa phương thức `__next__`.",
      "C. `__len__`",
      "D. `__getitem__`"
    ],
    "correct_option": "B",
    "explanation": "Một đối tượng là Iterable nếu nó triển khai phương thức `__iter__` trả về một đối tượng Iterator. Đối tượng Iterator đó bắt buộc phải có phương thức `__next__` trả về các phần tử tiếp theo hoặc ném ra lỗi `StopIteration`.",
    "solution": "**Bước 1:** Phân biệt Iterable và Iterator:\n- Iterable triển khai `__iter__`.\n- Iterator triển khai `__next__` và `__iter__` (thường tự trả về chính nó).\n**Bước 2:** Do đó để Class lặp được bằng vòng lặp `for`, ta cần định nghĩa `__iter__` trả về một Iterator. Chọn B."
  },
  {
    "id": "Q_MOD_E_007",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "lambdas"
    ],
    "content": "Hàm lambda nào sau đây nhận hai tham số đầu vào và trả về tổng của chúng?",
    "options": [
      "A. `lambda x, y -> x + y`",
      "B. `def lambda(x, y): return x + y`",
      "C. `lambda x, y: x + y`",
      "D. `lambda (x, y): x + y`"
    ],
    "correct_option": "C",
    "explanation": "Cú pháp của hàm ẩn danh (lambda function) trong Python là: `lambda arguments: expression`. Biểu thức tính toán nằm sau dấu hai chấm và giá trị tính toán tự động được trả về mà không cần dùng từ khóa `return`.",
    "solution": "**Bước 1:** Phân tích cú pháp của biểu thức lambda:\n- Không sử dụng ký hiệu mũi tên `->`.\n- Không sử dụng từ khóa `def` hay `return`.\n- Các tham số phân tách bởi dấu phẩy, theo sau là dấu hai chấm `:` rồi đến biểu thức kết quả.\n**Bước 2:** Cú pháp chuẩn là `lambda x, y: x + y`. Chọn C."
  },
  {
    "id": "Q_MOD_E_008",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "functional-programming"
    ],
    "content": "Đoạn code sau đây sử dụng `map()` kết hợp lambda. Kết quả in ra là gì?\n```python\nnums = [1, 2, 3]\nres = list(map(lambda x: x * 2, nums))\nprint(res)\n```",
    "options": [
      "A. `[1, 2, 3, 1, 2, 3]`",
      "B. `[2, 4, 6]`",
      "C. `[1, 4, 9]`",
      "D. `<map object at ...>`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `map(function, iterable)` áp dụng hàm truyền vào (ở đây là nhân đôi giá trị) lên từng phần tử của iterable. Các phần tử `1, 2, 3` nhân 2 thành `2, 4, 6`, sau đó ép kiểu thành danh sách thu được `[2, 4, 6]`.",
    "solution": "**Bước 1:** Hàm map duyệt qua từng phần tử của `nums`:\n- 1 đi qua lambda -> 1 * 2 = 2\n- 2 đi qua lambda -> 2 * 2 = 4\n- 3 đi qua lambda -> 3 * 2 = 6\n**Bước 2:** Ép kiểu đối tượng map trả về sang danh sách: `[2, 4, 6]`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_E_009",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "functional-programming"
    ],
    "content": "Đoạn code sau đây sử dụng `filter()`. Kết quả in ra là gì?\n```python\nnums = [1, 2, 3, 4]\nres = list(filter(lambda x: x % 2 != 0, nums))\nprint(res)\n```",
    "options": [
      "A. `[2, 4]`",
      "B. `[1, 3]`",
      "C. `[1, 2, 3, 4]`",
      "D. `[1]`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `filter(function, iterable)` giữ lại các phần tử trong iterable mà hàm kiểm tra (predicate) trả về giá trị logic là `True`. Ở đây điều kiện `x % 2 != 0` lọc ra các số lẻ (1 và 3).",
    "solution": "**Bước 1:** Lambda trả về True cho số lẻ.\n**Bước 2:** Duyệt danh sách `[1, 2, 3, 4]`, các số thỏa mãn điều kiện lẻ là 1 và 3.\n**Bước 3:** Danh sách kết quả là `[1, 3]`. Chọn B."
  },
  {
    "id": "Q_MOD_E_010",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "functional-programming"
    ],
    "content": "Hàm `reduce()` được dùng để tích lũy các phần tử của một danh sách thành một giá trị đơn lẻ. Hàm này phải được import từ module nào trong Python 3?",
    "options": [
      "A. `itertools`",
      "B. `functools`",
      "C. `math`",
      "D. Không cần import vì là hàm built-in"
    ],
    "correct_option": "B",
    "explanation": "Trong Python 2, `reduce()` là hàm tích hợp sẵn. Nhưng từ Python 3, nó đã được chuyển vào module thư viện chuẩn `functools` nhằm khuyến khích lập trình viên sử dụng vòng lặp tường minh hoặc hàm `sum()` thay thế cho các trường hợp đơn giản.",
    "solution": "**Bước 1:** Xác định vị trí của hàm `reduce()` trong Python 3.\n**Bước 2:** Lệnh import chuẩn là: `from functools import reduce`.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_E_011",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "decorators"
    ],
    "content": "Về mặt bản chất kỹ thuật, một Decorator trong Python là gì?",
    "options": [
      "A. Một lớp kế thừa đặc biệt dùng để vẽ giao diện đồ họa.",
      "B. Một hàm nhận vào một hàm khác làm đối số, thực hiện bổ sung một số logic trước/sau khi chạy hàm đó, rồi trả về một hàm mới đã được nâng cấp mà không sửa đổi trực tiếp code của hàm gốc.",
      "C. Một đoạn mã nguồn viết bằng ngôn ngữ máy C để tăng tốc chương trình.",
      "D. Một phương thức hệ thống chuyên dùng để đổi tên file."
    ],
    "correct_option": "B",
    "explanation": "Decorator là một mẫu thiết kế (design pattern) cho phép mở rộng hành vi của một đối tượng hàm một cách linh hoạt. Nó bọc hàm đích bên trong một hàm bao bọc (wrapper function) để can thiệp vào đầu vào hoặc đầu ra của hàm đích.",
    "solution": "**Bước 1:** Tìm hiểu khái niệm Decorator.\n**Bước 2:** Bản chất cú pháp `@my_decorator` đứng trước định nghĩa hàm `my_func` tương đương với phép gán `my_func = my_decorator(my_func)`.\n**Bước 3:** Do đó Decorator thực chất là hàm nhận hàm và trả về hàm mới nâng cấp. Chọn B."
  },
  {
    "id": "Q_MOD_E_012",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "decorators"
    ],
    "content": "Khi viết một Decorator, decorator `@functools.wraps(func)` đứng trước định nghĩa của hàm wrapper bên trong nhằm mục đích gì?",
    "options": [
      "A. Giúp hàm chạy nhanh hơn gấp đôi.",
      "B. Đảm bảo an toàn luồng (thread-safety).",
      "C. Giữ nguyên (bảo toàn) các thông tin siêu dữ liệu (metadata) của hàm gốc như tên hàm (`__name__`) và tài liệu hướng dẫn (`__doc__`) thay vì bị ghi đè bởi thông tin của hàm wrapper.",
      "D. Chuyển đổi mã nguồn hàm sang mã nhị phân."
    ],
    "correct_option": "C",
    "explanation": "Khi bọc hàm gốc `func` trong hàm `wrapper`, siêu dữ liệu của hàm gốc sẽ bị biến mất và thay thế bằng thông tin của hàm `wrapper`. Sử dụng `@functools.wraps(func)` giúp sao chép ngược lại các thuộc tính siêu dữ liệu gốc này sang hàm wrapper, giúp các công cụ kiểm tra tự động hoạt động chính xác.",
    "solution": "**Bước 1:** Phân tích vấn đề rò rỉ metadata khi tạo decorator.\n- Không có `@wraps`: `my_func.__name__` trở thành `'wrapper'`.\n- Có `@wraps`: `my_func.__name__` giữ nguyên là `'my_func'`.\n**Bước 2:** Chọn C."
  },
  {
    "id": "Q_MOD_E_013",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "decorators"
    ],
    "content": "Khi áp dụng đồng thời nhiều Decorator lên một hàm duy nhất như dưới đây, thứ tự thực thi của chúng sẽ là gì?\n```python\n@dec1\n@dec2\ndef func():\n    pass\n```",
    "options": [
      "A. Chạy đồng thời song song.",
      "B. `dec1` bọc `dec2`, nghĩa là `dec1` thực thi trước ngoài cùng, sau đó đến `dec2`.",
      "C. `dec2` bọc `dec1`, nghĩa là `dec2` thực thi trước ngoài cùng.",
      "D. Thứ tự chạy là ngẫu nhiên."
    ],
    "options_desc": "",
    "correct_option": "B",
    "explanation": "Chaining decorators hoạt động từ dưới lên trên. Phép bọc tương đương với câu lệnh: `func = dec1(dec2(func))`. Do đó, `dec2` sẽ bọc hàm `func` trước, tạo ra một hàm trung gian, sau đó `dec1` tiếp tục bọc hàm trung gian đó ở bên ngoài cùng.",
    "solution": "**Bước 1:** Viết lại cú pháp xếp chồng decorator dưới dạng lồng hàm: `dec1(dec2(func))`.\n**Bước 2:** `dec1` ở ngoài cùng, nên wrapper của `dec1` sẽ được gọi đầu tiên khi thực thi hàm. Nó bọc bên ngoài logic của `dec2`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_E_014",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "context-managers"
    ],
    "content": "Để tạo ra một Context Manager tự định nghĩa dưới dạng một lớp, lớp đó bắt buộc phải định nghĩa hai phương thức ma thuật nào?",
    "options": [
      "A. `__init__` và `__del__`",
      "B. `__enter__` và `__exit__`",
      "C. `__open__` and `__close__`",
      "D. `__start__` and `__stop__`"
    ],
    "correct_option": "B",
    "explanation": "Cú pháp `with` của Context Manager yêu cầu đối tượng trả về phải định nghĩa phương thức `__enter__()` (chạy khi bắt đầu khối `with`) và `__exit__()` (chạy khi kết thúc khối `with` hoặc khi gặp ngoại lệ để đóng/dọn dẹp tài nguyên).",
    "solution": "**Bước 1:** Khảo sát cơ chế hoạt động của khối lệnh `with`.\n**Bước 2:** Nó đòi hỏi đối tượng tuân thủ Context Manager Protocol.\n**Bước 3:** Giao thức này định nghĩa hai phương thức bắt buộc là `__enter__` và `__exit__`. Chọn B."
  },
  {
    "id": "Q_MOD_E_015",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "context-managers"
    ],
    "content": "Trong phương thức `__exit__(self, exc_type, exc_val, exc_tb)` của Context Manager, nếu phương thức này trả về giá trị logic `True` khi có ngoại lệ xảy ra, điều gì sẽ xảy ra?",
    "options": [
      "A. Python tiếp tục ném ngoại lệ đó ra ngoài và làm dừng chương trình.",
      "B. Ngoại lệ đó sẽ bị 'nuốt' (suppress) hoàn toàn, Python coi như lỗi đã được xử lý xong và tiếp tục chạy các dòng code bên ngoài khối `with` bình thường.",
      "C. Python tự động ném ra lỗi khác thay thế.",
      "D. Trình biên dịch sẽ báo lỗi cú pháp."
    ],
    "correct_option": "B",
    "explanation": "Nếu `__exit__` trả về `True`, Python sẽ coi lỗi xảy ra bên trong khối `with` đã được xử lý nội bộ và ngăn chặn không cho lỗi đó tiếp tục lan truyền (raise) ra bên ngoài. Nếu trả về `False` (hoặc `None`), lỗi sẽ được ném lên cấp cao hơn như bình thường.",
    "solution": "**Bước 1:** Phân tích cơ chế xử lý lỗi của `__exit__`:\n- Tham số nhận vào gồm kiểu lỗi (`exc_type`), giá trị lỗi (`exc_val`), và vết ngăn xếp (`exc_tb`).\n- Trả về `True`: Dập tắt lỗi (Suppress exception).\n- Trả về `False` hoặc không trả về: Cho lỗi tiếp tục lan truyền ra ngoài.\n**Bước 2:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_E_016",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "arguments",
      "unpacking"
    ],
    "content": "Đoạn code sau đây thực hiện unpack đối số. Kết quả in ra là gì?\n```python\ndef show(a, b, c):\n    print(a, b, c)\n\nlst = [10, 20]\nshow(*lst, 30)\n```",
    "options": [
      "A. `10 20 30`",
      "B. `[10, 20] 30 None`",
      "C. Lỗi TypeError vì thiếu tham số",
      "D. Lỗi SyntaxError"
    ],
    "correct_option": "A",
    "explanation": "Ký hiệu `*lst` thực hiện giải gói danh sách (list unpacking), biến các phần tử của danh sách thành các đối số vị trí riêng biệt tương ứng cho các tham số `a` và `b`. Số `30` tiếp theo được gán cho tham số `c`. Kết quả in ra là `10 20 30`.",
    "solution": "**Bước 1:** Phân tích lời gọi hàm `show(*lst, 30)`:\n- `*lst` giải nén danh sách `[10, 20]` thành hai đối số riêng rẽ `10` và `20`.\n- Lời gọi tương đương với `show(10, 20, 30)`.\n**Bước 2:** Các tham số nhận giá trị: `a=10`, `b=20`, `c=30`.\n**Bước 3:** In ra `10 20 30`. Chọn A."
  },
  {
    "id": "Q_MOD_E_017",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "regular-expressions"
    ],
    "content": "Trong module `re`, sự khác biệt chính giữa `re.match()` và `re.search()` là gì?",
    "options": [
      "A. `re.match()` tìm kiếm tất cả các kết quả phù hợp, còn `re.search()` chỉ tìm kết quả đầu tiên.",
      "B. `re.match()` chỉ kiểm tra xem chuỗi mẫu có khớp ngay từ **ký tự đầu tiên** của chuỗi đích hay không, trong khi `re.search()` quét toàn bộ chuỗi đích để tìm kiếm sự trùng khớp ở bất kỳ vị trí nào.",
      "C. `re.search()` chỉ dùng được cho chuỗi ngắn.",
      "D. Hai hàm hoàn toàn giống nhau."
    ],
    "correct_option": "B",
    "explanation": "`re.match()` neo mẫu tìm kiếm tại điểm bắt đầu của chuỗi (tương tự ký tự `^` trong regex). Nếu ký tự đầu tiên không khớp, nó trả về `None` ngay lập tức. Còn `re.search()` duyệt từ đầu đến cuối chuỗi để tìm kiếm vị trí khớp đầu tiên phù hợp.",
    "solution": "**Bước 1:** So sánh cơ chế quét mẫu của re:\n- `re.match(pattern, string)`: Kiểm tra từ chỉ số 0.\n- `re.search(pattern, string)`: Quét mọi vị trí trong chuỗi.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_E_018",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "regular-expressions"
    ],
    "content": "Hàm nào trong module `re` dùng để tìm kiếm tất cả các chuỗi con khớp với biểu thức chính quy và trả về dưới dạng một danh sách các chuỗi?",
    "options": [
      "A. `re.find()`",
      "B. `re.search_all()`",
      "C. `re.findall()`",
      "D. `re.match_all()`"
    ],
    "correct_option": "C",
    "explanation": "Hàm `re.findall(pattern, string)` trả về tất cả các trường hợp trùng khớp không trùng lặp của mẫu regex trong chuỗi dưới dạng một danh sách các chuỗi ký tự.",
    "solution": "**Bước 1:** Cần tìm toàn bộ các vị trí trùng khớp trong văn bản.\n**Bước 2:** Hàm tương ứng trong thư viện `re` là `findall()`.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_E_019",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "concurrency",
      "gil"
    ],
    "content": "Global Interpreter Lock (GIL) trong trình thông dịch CPython chuẩn là gì?",
    "options": [
      "A. Cơ chế bảo mật khóa mã nguồn chống sao chép.",
      "B. Một chốt loại trừ tương hỗ (mutex) ngăn cản nhiều luồng (thread) cùng thực thi mã nguồn Python đồng thời trong một CPU, nghĩa là tại một thời điểm chỉ có duy nhất một thread được thực thi mã bytecode của Python.",
      "C. Khóa thư mục không cho phép cài đặt thêm package.",
      "D. Cơ chế khóa file khi ghi dữ liệu."
    ],
    "correct_option": "B",
    "explanation": "GIL được thiết kế để đơn giản hóa việc quản lý bộ nhớ (reference counting) của CPython, đảm bảo an toàn dữ liệu nội bộ (thread-safe). Tuy nhiên, nó khiến cho việc sử dụng multi-threading trong Python không thể khai thác tối đa sức mạnh của CPU nhiều nhân đối với các tác vụ tính toán nặng (CPU-bound tasks).",
    "solution": "**Bước 1:** Phân tích định nghĩa của GIL.\n**Bước 2:** GIL (Global Interpreter Lock) là khóa dùng chung trong CPython để bảo vệ các tài nguyên quản lý bộ nhớ, đảm bảo chỉ có 1 thread thực thi mã Python tại một thời điểm.\n**Bước 3:** Do đó chọn đáp án B."
  },
  {
    "id": "Q_MOD_E_020",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "concurrency"
    ],
    "content": "Đối với các tác vụ tiêu tốn nhiều năng lực tính toán của bộ vi xử lý (CPU-bound tasks, ví dụ xử lý ảnh, tính ma trận lớn), mô hình song song nào trong Python giúp vượt qua rào cản của GIL để tận dụng nhiều nhân CPU hiệu quả nhất?",
    "options": [
      "A. Multi-threading (module `threading`)",
      "B. Asynchronous Programming (module `asyncio`)",
      "C. Multi-processing (module `multiprocessing`)",
      "D. Vòng lặp `while True` lồng nhau"
    ],
    "correct_option": "C",
    "explanation": "Do cơ chế GIL giới hạn multi-threading, để thực thi song song thực sự trên CPU nhiều nhân, ta phải sử dụng module `multiprocessing`. Module này tạo ra các tiến trình (process) độc lập chạy trên các không gian bộ nhớ và trình thông dịch Python riêng biệt, hoàn toàn vượt qua giới hạn của khóa GIL.",
    "solution": "**Bước 1:** Phân tích nhu cầu tối ưu hóa CPU-bound:\n- Multi-threading bị khóa bởi GIL, thích hợp cho I/O bound (đọc ghi file, gọi API mạng).\n- Asyncio chạy đơn luồng sử dụng cơ chế event loop, thích hợp cho I/O bound.\n- Multi-processing tạo tiến trình riêng, mỗi tiến trình có GIL riêng và chạy trên nhân CPU riêng, tối ưu tuyệt đối cho CPU-bound.\n**Bước 2:** Chọn C."
  },
  {
    "id": "Q_MOD_E_021",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "built-in-functions"
    ],
    "content": "Đoạn code sau đây sử dụng hàm `zip()`. Kết quả in ra là gì?\n```python\nnames = [\"A\", \"B\"]\nscores = [85, 90, 95]\nprint(list(zip(names, scores)))\n```",
    "options": [
      "A. `[(\"A\", 85), (\"B\", 90), (None, 95)]`",
      "B. `[(\"A\", 85), (\"B\", 90)]`",
      "C. `{\"A\": 85, \"B\": 90, \"C\": 95}`",
      "D. Lỗi ValueError vì độ dài hai danh sách không khớp"
    ],
    "correct_option": "B",
    "explanation": "Hàm `zip(*iterables)` ghép các phần tử từ nhiều danh sách có vị trí tương ứng lại thành các tuple. Quá trình ghép sẽ dừng lại ngay khi danh sách **ngắn nhất** bị duyệt hết phần tử. Ở đây `names` chỉ có 2 phần tử nên kết quả chỉ có 2 tuple, phần tử `95` của `scores` bị bỏ qua.",
    "solution": "**Bước 1:** Hàm `zip` kết hợp song song các iterable.\n**Bước 2:** Độ dài danh sách ngắn nhất quyết định điểm dừng lặp:\n- Phần tử 1: `'A'` ghép với `85` -> `('A', 85)`\n- Phần tử 2: `'B'` ghép với `90` -> `('B', 90)`\n- Do `names` hết phần tử, quá trình dừng lặp.\n**Bước 3:** Chuyển đổi sang list thu được `[(\"A\", 85), (\"B\", 90)]`. Chọn B."
  },
  {
    "id": "Q_MOD_E_022",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "built-in-functions"
    ],
    "content": "Hàm `enumerate()` trong Python dùng để làm gì?",
    "options": [
      "A. Tính tổng tất cả các phần tử số trong danh sách.",
      "B. Duyệt qua một đối tượng lặp và trả về đồng thời cặp giá trị gồm: chỉ số index (bắt đầu từ 0) và giá trị của phần tử ở vị trí đó trong mỗi lượt lặp.",
      "C. Chuyển đổi đối tượng sang kiểu từ điển.",
      "D. Đếm tổng số phần tử của danh sách giống `len()`."
    ],
    "correct_option": "B",
    "explanation": "`enumerate(iterable, start=0)` bọc đối tượng lặp để mỗi lượt duyệt sinh ra một tuple chứa chỉ số thứ tự tăng dần và giá trị phần tử tương ứng, rất tiện lợi khi cần biết vị trí của phần tử trong vòng lặp.",
    "solution": "**Bước 1:** Định nghĩa chức năng của `enumerate()`.\n**Bước 2:** Cú pháp thường thấy: `for index, value in enumerate(lst):`.\n**Bước 3:** Hàm trả về đối tượng sinh cặp chỉ số và giá trị. Chọn B."
  },
  {
    "id": "Q_MOD_E_023",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "built-in-functions"
    ],
    "content": "So sánh hành vi của hai hàm `any()` và `all()` đối với danh sách chứa các giá trị logic?",
    "options": [
      "A. `any()` trả về `True` nếu có **ít nhất một** phần tử trong danh sách là `True` (truthy), còn `all()` chỉ trả về `True` khi **tất cả** phần tử đều là `True`.",
      "B. `any()` dùng cho danh sách số thực, `all()` dùng cho số nguyên.",
      "C. `any()` kiểm tra kiểu dữ liệu chuỗi, `all()` kiểm tra kiểu dữ liệu list.",
      "D. Hai hàm trả về kết quả nghịch đảo hoàn toàn của nhau."
    ],
    "correct_option": "A",
    "explanation": "Hàm `any()` hoạt động tương tự như phép OR liên kết toàn bộ phần tử, chỉ cần một phần tử mang chân trị `True` thì trả về `True`. Hàm `all()` tương ứng phép AND, đòi hỏi tất cả phần tử phải mang chân trị `True` thì mới trả về `True`.",
    "solution": "**Bước 1:** Phân tích cơ chế logic:\n- `any([True, False, False])` -> `True` (vì có ít nhất 1 True).\n- `all([True, False, False])` -> `False` (vì chứa False).\n**Bước 2:** Chọn phương án A."
  },
  {
    "id": "Q_MOD_E_024",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "functions",
      "closures"
    ],
    "content": "Khái niệm Closure (bao đóng) trong Python ám chỉ điều gì?",
    "options": [
      "A. Việc đóng tệp tin an toàn sau khi ghi.",
      "B. Một hàm con được định nghĩa bên trong một hàm cha, có khả năng ghi nhớ và truy cập vào các biến thuộc phạm vi của hàm cha (enclosing scope) ngay cả khi hàm cha đã kết thúc thực thi và thoát khỏi ngăn xếp cuộc gọi.",
      "C. Việc mã hóa mã nguồn thành tệp tin thực thi .exe.",
      "D. Cách viết code ngắn gọn trên một dòng."
    ],
    "correct_option": "B",
    "explanation": "Closure xuất hiện khi ta định nghĩa một hàm lồng nhau, và hàm con này tham chiếu đến biến của hàm cha. Khi hàm cha trả về chính hàm con này, đối tượng hàm con sẽ đóng gói kèm theo môi trường chứa các biến tự do (free variables) mà nó tham chiếu, cho phép sử dụng chúng về sau.",
    "solution": "**Bước 1:** Phân tích định nghĩa của Closure:\n- Yêu cầu 1: Có hàm lồng nhau (hàm con nằm trong hàm cha).\n- Yêu cầu 2: Hàm con tham chiếu đến biến cục bộ của hàm cha.\n- Yêu cầu 3: Hàm cha trả về hàm con.\n**Bước 2:** Hàm con lưu giữ trạng thái các biến của hàm cha kể cả khi hàm cha đã hoàn thành chạy. Chọn B."
  },
  {
    "id": "Q_MOD_E_025",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "memory-management"
    ],
    "content": "Phương thức quản lý bộ nhớ chính được Python sử dụng để tự động dọn dẹp và thu hồi bộ nhớ của các đối tượng không còn sử dụng là gì?",
    "options": [
      "A. Giải phóng thủ công bằng lệnh free() giống như trong C.",
      "B. Đếm tham chiếu (Reference Counting) kết hợp với bộ dọn rác (Garbage Collector) để giải quyết các vòng lặp tham chiếu chéo (reference cycles).",
      "C. Tự động giải phóng định kỳ sau mỗi 5 phút.",
      "D. Ghi đè RAM trực tiếp."
    ],
    "correct_option": "B",
    "explanation": "Cơ chế mặc định của CPython là đếm tham chiếu (Reference Counting): mỗi đối tượng có một bộ đếm số lượng biến/đối tượng trỏ tới nó, nếu bộ đếm về 0, đối tượng bị hủy ngay. Để giải quyết vấn đề hai đối tượng trỏ chéo vòng tròn tới nhau làm đếm tham chiếu không bao giờ về 0, Python trang bị thêm bộ dọn rác (Garbage Collector) chạy ngầm.",
    "solution": "**Bước 1:** Tìm hiểu cơ chế dọn rác của Python.\n**Bước 2:** Hệ thống kết hợp việc đếm tham chiếu (nhanh, tức thời) và thuật toán phát hiện chu trình rác (Garbage Collector) để dọn dẹp tham chiếu vòng. Điều này hoàn toàn tự động.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_E_026",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "built-in-functions"
    ],
    "content": "Đoạn code sau đây sử dụng `any()`. Kết quả in ra là gì?\n```python\nprint(any([]), all([]))\n```",
    "options": [
      "A. `False False`",
      "B. `False True`",
      "C. `True False`",
      "D. `True True`"
    ],
    "correct_option": "B",
    "explanation": "Theo đặc tả kỹ thuật của Python:\n- `any([])` trên một danh sách rỗng trả về `False` vì không tìm thấy bất kỳ phần tử truthy nào.\n- `all([])` trên danh sách rỗng trả về `True` (vacuous truth) vì không tồn tại bất kỳ phần tử falsy nào vi phạm điều kiện đúng của tất cả. Do đó in ra `False True`.",
    "solution": "**Bước 1:** Xét hành vi của hàm trên iterable rỗng:\n- `any([])`: trả về `False`.\n- `all([])`: trả về `True` (chân lý rỗng - vacuous truth).\n**Bước 2:** In ra `False True`. Chọn B."
  },
  {
    "id": "Q_MOD_E_027",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "comprehensions"
    ],
    "content": "Đoạn code sau sử dụng nested list comprehension. Danh sách `matrix` kết quả là gì?\n```python\nmatrix = [[x for x in range(2)] for y in range(2)]\nprint(matrix)\n```",
    "options": [
      "A. `[[0, 1], [0, 1]]`",
      "B. `[[0, 0], [1, 1]]`",
      "C. `[[0, 1, 2], [0, 1, 2]]`",
      "D. `[0, 1, 0, 1]`"
    ],
    "correct_option": "A",
    "explanation": "Vòng lặp ngoài `for y in range(2)` chạy 2 lần (y=0, y=1), tạo ra 2 phần tử danh sách cha. Với mỗi lượt chạy, list comprehension con `[x for x in range(2)]` sinh ra một danh sách `[0, 1]`. Do đó kết quả lồng nhau là `[[0, 1], [0, 1]]`.",
    "solution": "**Bước 1:** Phân tích list comprehension trong:\n`[x for x in range(2)]` tạo ra List `[0, 1]`.\n**Bước 2:** Phân tích list comprehension ngoài:\nNó chạy vòng lặp lặp lại 2 lần (range(2)), mỗi lần thêm kết quả của list comprehension trong vào.\n**Bước 3:** Kết quả cuối cùng là `[[0, 1], [0, 1]]`. Chọn A."
  },
  {
    "id": "Q_MOD_E_028",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "functions",
      "closures"
    ],
    "content": "Đoạn code sau đây sử dụng closure. Kết quả in ra là gì?\n```python\ndef maker(n):\n    return lambda x: x * n\n\ndoubler = maker(2)\nprint(doubler(5))\n```",
    "options": [
      "A. 10",
      "B. 25",
      "C. 5",
      "D. Lỗi TypeError"
    ],
    "correct_option": "A",
    "explanation": "Hàm `maker(2)` trả về một hàm lambda ẩn danh `lambda x: x * 2` (biến `n` mang giá trị 2 được đóng gói lưu trữ bên trong bao đóng). Biến `doubler` nhận hàm này, khi thực thi `doubler(5)`, kết quả tính toán là `5 * 2 = 10`.",
    "solution": "**Bước 1:** Hàm `maker` sinh ra hàm lambda lưu giữ giá trị của `n`.\n**Bước 2:** `doubler = maker(2)` tạo ra hàm đóng gói `n = 2`.\n**Bước 3:** Thực hiện `doubler(5)` tương ứng phép nhân `5 * 2 = 10`. Chọn A."
  },
  {
    "id": "Q_MOD_E_029",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "regular-expressions"
    ],
    "content": "Phương thức nào trong module `re` dùng để thay thế tất cả các chuỗi con khớp với mẫu Regex bằng một chuỗi thay thế chỉ định?",
    "options": [
      "A. `re.replace()`",
      "B. `re.sub()`",
      "C. `re.swap()`",
      "D. `re.change()`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `re.sub(pattern, repl, string)` (sub viết tắt của **sub**stitute) tìm kiếm các chuỗi con khớp với regex `pattern` và thay thế chúng bằng chuỗi `repl`.",
    "solution": "**Bước 1:** Tìm hàm thay thế chuỗi bằng regex trong Python.\n**Bước 2:** Hàm đó là `re.sub()`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_E_030",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": [
      "iterators"
    ],
    "content": "Đoạn code sau đây thực hiện duyệt một generator. Kết quả in ra là gì?\n```python\ngen = (x for x in [1, 2])\nprint(next(gen))\nprint(next(gen))\nprint(next(gen, \"Done\"))\n```",
    "options": [
      "A. `1`, `2`, ném lỗi `StopIteration`",
      "B. `1`, `2`, `Done`",
      "C. `1`, `2`, `None`",
      "D. `1`, `2`, `2`"
    ],
    "correct_option": "B",
    "explanation": "Hàm `next(iterator, default)` lấy phần tử tiếp theo của iterator. Lượt 1 lấy `1`, lượt 2 lấy `2`. Tại lượt gọi thứ 3, iterator đã cạn kiệt phần tử. Thay vì ném lỗi `StopIteration`, do ta có truyền tham số thứ hai là `\"Done\"` làm giá trị mặc định, hàm trả về chuỗi `\"Done\"` an toàn.",
    "solution": "**Bước 1:** Theo dõi lượt gọi `next()` trên generator `gen`:\n- `next(gen)` lần 1: trả về phần tử đầu tiên là `1`.\n- `next(gen)` lần 2: trả về phần tử tiếp theo là `2`.\n- `next(gen, \"Done\")` lần 3: generator đã hết sạch phần tử.\n**Bước 2:** Vì có tham số mặc định `'Done'`, hàm trả về `'Done'` thay vì ném lỗi.\n**Bước 3:** Chọn B."
  }
];
