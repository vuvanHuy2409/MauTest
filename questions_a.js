const QUESTIONS_A = [
  {
    "id": "Q_MOD_A_001",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "syntax",
      "dynamic-typing"
    ],
    "content": "Trong Python, điều gì xảy ra khi bạn gán một giá trị thuộc kiểu dữ liệu khác cho một biến đã tồn tại?\nVí dụ:\n```python\nx = 10\nx = 'hello'\n```",
    "options": [
      "A. Python sẽ báo lỗi TypeError vì biến đã được định nghĩa là số nguyên.",
      "B. Giá trị của x sẽ được thay đổi thành 'hello' và kiểu dữ liệu của nó tự động chuyển sang kiểu chuỗi (str).",
      "C. Giá trị của x vẫn giữ nguyên là 10, câu lệnh gán thứ hai bị bỏ qua.",
      "D. Python yêu cầu phải ép kiểu tường minh như x = str('hello') thì mới gán được."
    ],
    "correct_option": "B",
    "explanation": "Python là ngôn ngữ có kiểu dữ liệu động (dynamically typed). Kiểu dữ liệu của biến được quyết định tại thời điểm thực thi dựa trên giá trị mà nó lưu giữ. Bạn có thể gán giá trị thuộc bất kỳ kiểu dữ liệu nào cho một biến bất kỳ lúc nào.",
    "solution": "**Bước 1:** Nhận biết tính chất định kiểu của Python (Dynamic Typing vs Static Typing).\n**Bước 2:** Phân tích mã nguồn ví dụ: `x` ban đầu giữ giá trị số nguyên (`10`), sau đó được gán lại thành chuỗi (`'hello'`).\n**Bước 3:** Trong Python, phép gán này hoàn toàn hợp lệ và kiểu dữ liệu của biến sẽ thay đổi theo giá trị mới gán. Do đó đáp án đúng là B."
  },
  {
    "id": "Q_MOD_A_002",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "syntax",
      "variable-names"
    ],
    "content": "Tên biến nào sau đây là **hợp lệ** trong Python?",
    "options": [
      "A. `2nd_value`",
      "B. `class`",
      "C. `user-name`",
      "D. `_total_score`"
    ],
    "correct_option": "D",
    "explanation": "Quy tắc đặt tên biến trong Python: chỉ chứa chữ cái, chữ số và dấu gạch dưới `_`, bắt đầu bằng chữ cái hoặc dấu gạch dưới, không được bắt đầu bằng chữ số, không chứa các ký tự đặc biệt như `-` và không trùng với các từ khóa (keywords) như `class`.",
    "solution": "**Bước 1:** Kiểm tra từng phương án đối chiếu với quy tắc đặt tên biến:\n- `2nd_value`: Sai vì bắt đầu bằng chữ số.\n- `class`: Sai vì trùng với từ khóa dùng để khai báo lớp.\n- `user-name`: Sai vì chứa ký tự `-` (phép trừ).\n- `_total_score`: Đúng quy tắc (bắt đầu bằng dấu gạch dưới và chỉ chứa ký tự hợp lệ).\n**Bước 2:** Kết luận chọn đáp án D."
  },
  {
    "id": "Q_MOD_A_003",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "data-types"
    ],
    "content": "Kết quả của hai hàm `type(3.0)` và `type(3)` lần lượt là gì?",
    "options": [
      "A. `<class 'float'>` và `<class 'int'>`",
      "B. `<class 'int'>` và `<class 'float'>`",
      "C. `<class 'float'>` và `<class 'float'>`",
      "D. `<class 'number'>` và `<class 'number'>`"
    ],
    "correct_option": "A",
    "explanation": "Số có phần thập phân như `3.0` thuộc kiểu `float`, còn số nguyên như `3` thuộc kiểu `int` trong Python.",
    "solution": "**Bước 1:** Xác định kiểu dữ liệu của hằng số:\n- `3.0` chứa dấu chấm thập phân nên là kiểu số thực (`float`).\n- `3` là số nguyên nên là kiểu số nguyên (`int`).\n**Bước 2:** Hàm `type()` trả về đối tượng biểu diễn lớp của kiểu dữ liệu.\n**Bước 3:** Kết quả tương ứng là `<class 'float'>` và `<class 'int'>` (Đáp án A)."
  },
  {
    "id": "Q_MOD_A_004",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings"
    ],
    "content": "Kết quả trả về của hàm `len(\"Hello\")` là bao nhiêu?",
    "options": [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. Lỗi vì chuỗi không có độ dài định sẵn"
    ],
    "correct_option": "B",
    "explanation": "Hàm `len()` dùng để trả về số lượng ký tự trong một chuỗi. Chuỗi `\"Hello\"` gồm các ký tự 'H', 'e', 'l', 'l', 'o' nên độ dài là 5.",
    "solution": "**Bước 1:** Đếm số ký tự trong chuỗi `\"Hello\"` bao gồm chữ viết hoa và viết thường.\n**Bước 2:** Chuỗi này có 5 ký tự.\n**Bước 3:** Hàm `len()` sẽ trả về `5` (Đáp án B)."
  },
  {
    "id": "Q_MOD_A_005",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "slicing"
    ],
    "content": "Giá trị của biểu thức slice chuỗi `\"Python\"[1:4]` là gì?",
    "options": [
      "A. `Pyt`",
      "B. `yth`",
      "C. `ytho`",
      "D. `tho`"
    ],
    "correct_option": "B",
    "explanation": "Cú pháp slice `string[start:stop]` lấy các ký tự từ chỉ số `start` đến `stop - 1`. Ở đây, `\"Python\"` có chỉ số bắt đầu từ 0 (`P` ở chỉ số 0, `y` ở 1, `t` ở 2, `h` ở 3, `o` ở 4, `n` ở 5). Do đó slice `[1:4]` lấy ký tự tại các chỉ số 1, 2, 3 tương ứng với `yth`.",
    "solution": "**Bước 1:** Liệt kê các chỉ số ký tự của `\"Python\"`:\n- 0: P, 1: y, 2: t, 3: h, 4: o, 5: n\n**Bước 2:** Slice `[1:4]` chỉ lấy từ chỉ số 1 đến chỉ số 3 (bỏ qua chỉ số 4).\n**Bước 3:** Ký tự tại các chỉ số 1, 2, 3 lần lượt là 'y', 't', 'h', tạo thành chuỗi `'yth'` (Đáp án B)."
  },
  {
    "id": "Q_MOD_A_006",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "slicing"
    ],
    "content": "Đoạn code sau đây sẽ hiển thị kết quả gì?\n```python\ntext = \"Python\"\nprint(text[::-1])\n```",
    "options": [
      "A. `Python`",
      "B. `P`",
      "C. `nohtyP`",
      "D. `n`"
    ],
    "correct_option": "C",
    "explanation": "Slice chuỗi có cú pháp `[start:stop:step]`. Khi `step` âm (ở đây là `-1`), Python sẽ duyệt chuỗi theo chiều ngược lại. Do đó `[::-1]` đảo ngược hoàn toàn chuỗi đã cho.",
    "solution": "**Bước 1:** Phân tích slice `[::-1]`:\n- `start` và `stop` được bỏ qua nghĩa là lấy toàn bộ chuỗi.\n- `step = -1` nghĩa là duyệt ngược từ cuối về đầu.\n**Bước 2:** Chuỗi `\"Python\"` khi đảo ngược sẽ thành `\"nohtyP\"`.\n**Bước 3:** Chọn đáp án C."
  },
  {
    "id": "Q_MOD_A_007",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "methods"
    ],
    "content": "Phương thức nào sau đây được dùng để chuyển đổi toàn bộ chuỗi sang chữ hoa?",
    "options": [
      "A. `upper()`",
      "B. `uppercase()`",
      "C. `to_upper()`",
      "D. `capitalize()`"
    ],
    "correct_option": "A",
    "explanation": "Trong Python, chuỗi có phương thức `upper()` dùng để trả về một chuỗi mới mà tất cả các ký tự thường được chuyển đổi thành chữ hoa. Phương thức `capitalize()` chỉ viết hoa chữ cái đầu tiên.",
    "solution": "**Bước 1:** Điểm qua các phương thức của chuỗi trong Python:\n- `upper()`: Chuyển toàn bộ chuỗi sang chữ in hoa.\n- `capitalize()`: Chỉ chuyển ký tự đầu tiên sang in hoa và các ký tự còn lại viết thường.\n- `uppercase` và `to_upper`: Không tồn tại dưới dạng phương thức chuỗi mặc định của Python.\n**Bước 2:** Chọn phương án A."
  },
  {
    "id": "Q_MOD_A_008",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "methods"
    ],
    "content": "Phương thức nào dùng để loại bỏ tất cả các khoảng trắng ở đầu và cuối chuỗi trong Python?",
    "options": [
      "A. `trim()`",
      "B. `strip()`",
      "C. `clean()`",
      "D. `replace(\" \", \"\")`"
    ],
    "correct_option": "B",
    "explanation": "Python sử dụng phương thức `strip()` để loại bỏ các khoảng trắng dư thừa ở cả đầu và cuối chuỗi. Hàm `trim()` được sử dụng trong các ngôn ngữ khác như JS/Java nhưng không có trong Python.",
    "solution": "**Bước 1:** Phân tích hành vi của các hàm:\n- `strip()`: Loại bỏ khoảng trắng ở đầu và cuối chuỗi.\n- `trim()`: Không có sẵn cho kiểu dữ liệu `str` trong Python.\n- `replace(\" \", \"\")`: Loại bỏ tất cả khoảng trắng trong chuỗi chứ không chỉ ở đầu và cuối.\n**Bước 2:** Đáp án đúng là B."
  },
  {
    "id": "Q_MOD_A_009",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "formatting"
    ],
    "content": "Đoạn code sau sử dụng định dạng chuỗi f-string. Kết quả in ra là gì?\n```python\nval = 42\nprint(f\"Value is {val + 1}\")\n```",
    "options": [
      "A. `Value is val + 1`",
      "B. `Value is 42`",
      "C. `Value is 43`",
      "D. Lỗi cú pháp SyntaxError"
    ],
    "correct_option": "C",
    "explanation": "Định dạng f-string cho phép nhúng các biểu thức Python trực tiếp bên trong dấu ngoặc nhọn `{}`. Biểu thức `{val + 1}` sẽ được tính toán trực tiếp: `42 + 1 = 43` và chèn vào chuỗi.",
    "solution": "**Bước 1:** Nhận diện định dạng f-string (bắt đầu bằng ký tự `f` trước dấu nháy).\n**Bước 2:** Đánh giá biểu thức trong dấu ngoặc nhọn `{val + 1}`. Khi `val = 42`, biểu thức có giá trị là `43`.\n**Bước 3:** Chuỗi kết quả là `\"Value is 43\"`. Chọn đáp án C."
  },
  {
    "id": "Q_MOD_A_010",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "division"
    ],
    "content": "Kết quả của hai phép toán `7 / 2` và `7 // 2` trong Python 3 lần lượt là gì?",
    "options": [
      "A. `3.5` và `3`",
      "B. `3` và `3.5`",
      "C. `3.5` và `3.5`",
      "D. `3` và `3`"
    ],
    "correct_option": "A",
    "explanation": "Trong Python 3, toán tử `/` thực hiện phép chia thực (luôn trả về một số kiểu thực `float`), còn toán tử `//` thực hiện phép chia lấy phần nguyên (floor division, trả về phần nguyên của phép chia dạng số nguyên).",
    "solution": "**Bước 1:** Tính `7 / 2`. Kết quả là `3.5` (kiểu float).\n**Bước 2:** Tính `7 // 2` (chia lấy phần nguyên). 7 chia 2 được 3 dư 1, phần nguyên là `3`.\n**Bước 3:** Đáp án đúng là A."
  },
  {
    "id": "Q_MOD_A_011",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators"
    ],
    "content": "Phép toán `7 % 3` trong Python cho ra kết quả bằng bao nhiêu?",
    "options": [
      "A. 2.33",
      "B. 2",
      "C. 1",
      "D. 0"
    ],
    "correct_option": "C",
    "explanation": "Toán tử `%` dùng để chia lấy phần dư. `7` chia `3` được `2` và dư `1`.",
    "solution": "**Bước 1:** Phép chia dư: Tìm số dư của phép chia 7 cho 3.\n**Bước 2:** $7 = 3 \\times 2 + 1$. Số dư là 1.\n**Bước 3:** Chọn đáp án C."
  },
  {
    "id": "Q_MOD_A_012",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators"
    ],
    "content": "Toán tử nào trong Python biểu diễn phép toán lũy thừa (ví dụ $2^3$)?",
    "options": [
      "A. `^`",
      "B. `**`",
      "C. `pow`",
      "D. `*`"
    ],
    "correct_option": "B",
    "explanation": "Python sử dụng ký hiệu `**` cho toán tử lũy thừa. Ví dụ `2 ** 3` trả về 8. Ký hiệu `^` thực chất là toán tử XOR thao tác bit chứ không phải lũy thừa.",
    "solution": "**Bước 1:** Phân tích chức năng các toán tử:\n- `^`: Toán tử XOR bit.\n- `**`: Toán tử lũy thừa.\n- `pow`: Là tên hàm tích hợp sẵn (`pow(2, 3)`), không phải toán tử.\n- `*`: Phép nhân.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_A_013",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "precedence"
    ],
    "content": "Giá trị của biểu thức `2 + 3 * 4` trong Python là bao nhiêu?",
    "options": [
      "A. 20",
      "B. 14",
      "C. 24",
      "D. 9"
    ],
    "correct_option": "B",
    "explanation": "Quy tắc độ ưu tiên toán tử trong Python tuân theo toán học cơ bản: nhân chia trước, cộng trừ sau. Do đó phép tính `3 * 4 = 12` được thực hiện trước, sau đó cộng thêm `2` thành `14`.",
    "solution": "**Bước 1:** Áp dụng quy tắc ưu tiên toán tử. Phép nhân `*` có độ ưu tiên cao hơn phép cộng `+`.\n**Bước 2:** Thực hiện phép nhân trước: `3 * 4 = 12`.\n**Bước 3:** Thực hiện phép cộng sau: `2 + 12 = 14`. Chọn B."
  },
  {
    "id": "Q_MOD_A_014",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "identity"
    ],
    "content": "Đoạn code sau đây sẽ hiển thị kết quả gì?\n```python\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n```",
    "options": [
      "A. `True True`",
      "B. `True False`",
      "C. `False True`",
      "D. `False False`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `==` dùng để so sánh giá trị (value equality), do `a` và `b` đều chứa các phần tử giống nhau nên `a == b` là `True`. Toán tử `is` dùng để so sánh danh tính (identity), kiểm tra xem hai biến có cùng tham chiếu đến một đối tượng duy nhất trong bộ nhớ hay không. Do `a` và `b` là hai đối tượng danh sách (list) độc lập được tạo ra riêng biệt, chúng nằm ở hai địa chỉ bộ nhớ khác nhau, vì vậy `a is b` là `False`.",
    "solution": "**Bước 1:** Phân tích toán tử `==` vs `is`:\n- `==` so sánh nội dung bên trong đối tượng. Vì cả hai danh sách đều là `[1, 2]`, kết quả là `True`.\n- `is` so sánh địa chỉ bộ nhớ (ID của đối tượng). Vì `a` và `b` được định nghĩa độc lập làm hai danh sách mới, chúng có địa chỉ bộ nhớ khác nhau, kết quả là `False`.\n**Bước 2:** Do đó in ra `True False`. Chọn B."
  },
  {
    "id": "Q_MOD_A_015",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "data-types",
      "booleans"
    ],
    "content": "Giá trị chân trị (truthiness) của biểu thức `bool([])` là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. `None`",
      "D. Lỗi TypeError"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, các đối tượng rỗng (như danh sách rỗng `[]`, chuỗi rỗng `\"\"`, tập hợp rỗng `set()`, từ điển rỗng `{}`, số 0 hoặc đối tượng `None`) đều được coi là có giá trị logic (truthiness) tương đương với `False`. Tất cả các đối tượng khác mặc định là `True`.",
    "solution": "**Bước 1:** Nhớ lại quy tắc chuyển đổi kiểu boolean trong Python.\n**Bước 2:** Một danh sách không có phần tử (danh sách rỗng `[]`) luôn có chân trị là `False`.\n**Bước 3:** Do đó `bool([])` trả về `False` (Đáp án B)."
  },
  {
    "id": "Q_MOD_A_016",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "logical"
    ],
    "content": "Kết quả của biểu thức `0 and 5` là bao nhiêu?",
    "options": [
      "A. `0`",
      "B. `5`",
      "C. `True`",
      "D. `False`"
    ],
    "correct_option": "A",
    "explanation": "Trong Python, toán tử logical `and` trả về toán hạng đầu tiên có chân trị False (falsy) hoặc toán hạng cuối cùng nếu tất cả đều True (truthy). Do `0` là falsy, Python lập tức áp dụng cơ chế đánh giá ngắn mạch (short-circuit evaluation) và trả về `0` mà không cần xét tiếp số `5`.",
    "solution": "**Bước 1:** Phân tích toán tử `and`:\n- Nó kiểm tra tính đúng đắn từ trái qua phải.\n- Nếu gặp một phần tử có chân trị là `False` (như `0`), nó lập tức trả về giá trị của phần tử đó.\n**Bước 2:** Vì `0` là False, kết quả trả về là `0`.\n**Bước 3:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_A_017",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "logical"
    ],
    "content": "Kết quả của biểu thức `3 or 5` trong Python là bao nhiêu?",
    "options": [
      "A. `3`",
      "B. `5`",
      "C. `True`",
      "D. `False`"
    ],
    "correct_option": "A",
    "explanation": "Toán tử logic `or` hoạt động theo nguyên tắc ngắn mạch: nó trả về toán hạng đầu tiên có chân trị True (truthy). Số `3` là một số khác 0 nên nó là truthy, do đó biểu thức trả về `3` ngay lập tức mà không cần kiểm tra số `5`.",
    "solution": "**Bước 1:** Phân tích toán tử `or`:\n- Trả về giá trị đầu tiên là `True` (truthy).\n**Bước 2:** Số `3` là truthy vì khác 0.\n**Bước 3:** Do đó, biểu thức dừng lại và trả về `3`. Chọn đáp án A."
  },
  {
    "id": "Q_MOD_A_018",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings"
    ],
    "content": "Kết quả in ra của câu lệnh sau là gì?\n```python\nprint(\"Python\" + \"3\")\n```",
    "options": [
      "A. `Python 3`",
      "B. `Python3`",
      "C. Lỗi TypeError vì không thể cộng chuỗi với số",
      "D. `Python`"
    ],
    "correct_option": "B",
    "explanation": "Phép toán `+` giữa hai chuỗi ký tự (ở đây cả hai đối tượng đều đặt trong dấu nháy `\"Python\"` và `\"3\"` nên đều là chuỗi) thực hiện ghép chuỗi (concatenation). Kết quả ghép trực tiếp sẽ không có khoảng trắng tự động, tạo thành `\"Python3\"`.",
    "solution": "**Bước 1:** Xác định kiểu dữ liệu của cả hai toán hạng:\n- `\"Python\"` là chuỗi (`str`).\n- `\"3\"` cũng là chuỗi (`str`).\n**Bước 2:** Toán tử `+` thực hiện nối chuỗi liền mạch từ trái qua phải.\n**Bước 3:** Kết quả là `\"Python3\"` (Đáp án B)."
  },
  {
    "id": "Q_MOD_A_019",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "data-types",
      "conversion"
    ],
    "content": "Biểu thức `int(3.9)` sẽ trả về giá trị số nguyên nào?",
    "options": [
      "A. 4",
      "B. 3",
      "C. 3.0",
      "D. Báo lỗi ValueError"
    ],
    "correct_option": "B",
    "explanation": "Hàm `int()` khi ép kiểu từ một số thực `float` sang số nguyên `int` sẽ thực hiện cắt bỏ phần thập phân (truncate) chứ không làm tròn số. Do đó, `3.9` chuyển thành `3`.",
    "solution": "**Bước 1:** Hàm `int(x)` lấy phần nguyên của số thực `x`.\n**Bước 2:** Nó không thực hiện quy tắc làm tròn (làm tròn lên hay xuống), mà chỉ đơn giản là loại bỏ hoàn toàn phần sau dấu chấm thập phân.\n**Bước 3:** Phần nguyên của `3.9` là `3`. Chọn B."
  },
  {
    "id": "Q_MOD_A_020",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "data-types",
      "conversion"
    ],
    "content": "Đoạn code sau đây trả về kết quả gì?\n```python\nprint(float(\"3.14\"))\n```",
    "options": [
      "A. 3",
      "B. `\"3.14\"`",
      "C. 3.14",
      "D. Lỗi TypeError"
    ],
    "correct_option": "C",
    "explanation": "Hàm `float()` chuyển đổi một chuỗi ký tự chứa định dạng số thực hợp lệ thành một số thực thực sự.",
    "solution": "**Bước 1:** Hàm `float()` nhận một chuỗi và chuyển đổi nó thành một số thực.\n**Bước 2:** Chuỗi `\"3.14\"` là biểu diễn hợp lệ của số thực.\n**Bước 3:** Kết quả trả về là số thực `3.14`. Chọn C."
  },
  {
    "id": "Q_MOD_A_021",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "methods"
    ],
    "content": "Kết quả của biểu thức `\"a,b,c\".split(\",\")` là gì?",
    "options": [
      "A. `(\"a\", \"b\", \"c\")`",
      "B. `[\"a\", \"b\", \"c\"]`",
      "C. `\"abc\"`",
      "D. `{\"a\", \"b\", \"c\"}`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `split(separator)` của chuỗi dùng để tách chuỗi thành các chuỗi con dựa trên ký tự ngăn cách truyền vào. Kết quả trả về luôn là một **danh sách (list)** chứa các chuỗi con đó.",
    "solution": "**Bước 1:** Hàm `split()` tách một chuỗi dựa trên ký tự phân tách.\n**Bước 2:** Với dấu phân tách là `\",\"`, chuỗi `\"a,b,c\"` được chia thành ba chuỗi con: `\"a\"`, `\"b\"` và `\"c\"`.\n**Bước 3:** Kiểu trả về của `split` luôn là một List. Do đó, kết quả là `[\"a\", \"b\", \"c\"]` (Đáp án B)."
  },
  {
    "id": "Q_MOD_A_022",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "methods"
    ],
    "content": "Kết quả của biểu thức `\"-\".join([\"a\", \"b\", \"c\"])` là gì?",
    "options": [
      "A. `\"a-b-c\"`",
      "B. `[\"a-b-c\"]`",
      "C. `\"a\", \"-b-\", \"c\"`",
      "D. Lỗi TypeError"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `join(iterable)` của chuỗi dùng để nối danh sách các chuỗi ký tự lại với nhau, sử dụng chuỗi hiện tại (ở đây là `\"-\"`) làm ký tự liên kết giữa các phần tử. Kết quả trả về là một chuỗi ghép duy nhất.",
    "solution": "**Bước 1:** Phương thức `join` được gọi trên chuỗi phân tách `\"-\"`.\n**Bước 2:** Danh sách các phần tử cần nối là `[\"a\", \"b\", \"c\"]`.\n**Bước 3:** Ghép chúng lại với nhau xen kẽ bởi `\"-\"` ta được chuỗi `\"a-b-c\"`. Chọn A."
  },
  {
    "id": "Q_MOD_A_023",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "syntax",
      "input"
    ],
    "content": "Trong Python, hàm `input()` luôn trả về giá trị thuộc kiểu dữ liệu nào sau đây?",
    "options": [
      "A. `int`",
      "B. `str`",
      "C. `float`",
      "D. Tùy thuộc vào nội dung người dùng nhập vào"
    ],
    "correct_option": "B",
    "explanation": "Hàm `input()` thu thập dữ liệu nhập vào từ bàn phím dưới dạng một chuỗi ký tự (`str`). Ngay cả khi người dùng nhập vào một số như `123`, kiểu trả về vẫn là chuỗi `\"123\"`. Ta phải ép kiểu tường minh nếu muốn sử dụng làm số nguyên hoặc số thực.",
    "solution": "**Bước 1:** Nhớ lại đặc điểm của hàm nhập dữ liệu `input()` trong Python.\n**Bước 2:** Hàm này luôn đọc dữ liệu từ dòng đầu vào chuẩn dưới dạng chuỗi thô.\n**Bước 3:** Kết luận kiểu trả về luôn là `str` (Chuỗi). Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_024",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "syntax"
    ],
    "content": "Giá trị của hai biến `x` và `y` sau khi thực hiện câu lệnh gán sau là gì?\n```python\nx, y = 1, 2\n```",
    "options": [
      "A. `x = 1`, `y = 2`",
      "B. `x = 2`, `y = 1`",
      "C. Cả x và y đều bằng 1",
      "D. Lỗi SyntaxError vì không thể gán nhiều biến cùng lúc"
    ],
    "correct_option": "A",
    "explanation": "Python hỗ trợ gán nhiều giá trị cùng lúc (multiple assignment / tuple unpacking). Các giá trị ở vế phải được gán tương ứng cho các biến ở vế trái theo thứ tự xuất hiện.",
    "solution": "**Bước 1:** Phân tích cú pháp gán đồng thời: `x, y = 1, 2`.\n**Bước 2:** Phần tử thứ nhất ở vế phải (`1`) đi vào biến thứ nhất ở vế trái (`x`). Phần tử thứ hai (`2`) đi vào biến thứ hai (`y`).\n**Bước 3:** Kết quả: `x = 1`, `y = 2`. Chọn A."
  },
  {
    "id": "Q_MOD_A_025",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "operators",
      "booleans"
    ],
    "content": "Giá trị của biểu thức logic `not (True and False)` là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. `None`",
      "D. Lỗi cú pháp"
    ],
    "correct_option": "A",
    "explanation": "Biểu thức bên trong ngoặc là `True and False`, có kết quả là `False`. Phép toán `not` phủ định lại giá trị này, chuyển đổi `False` thành `True`.",
    "solution": "**Bước 1:** Đánh giá biểu thức trong ngoặc trước: `True and False` = `False`.\n**Bước 2:** Áp dụng phép toán `not` cho kết quả đó: `not False` = `True`.\n**Bước 3:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_A_026",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings"
    ],
    "content": "Kết quả in ra của câu lệnh sau là gì?\n```python\nprint(\"A\" * 3)\n```",
    "options": [
      "A. `A3`",
      "B. `AAA`",
      "C. Lỗi TypeError vì không thể nhân chuỗi với số nguyên",
      "D. `A A A`"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, toán tử `*` giữa một chuỗi ký tự và một số nguyên $N$ biểu diễn phép sao chép/nhân chuỗi (string replication). Kết quả thu được là chuỗi gốc được lặp lại liên tiếp $N$ lần.",
    "solution": "**Bước 1:** Xác định toán hạng: Chuỗi `\"A\"` và số nguyên `3`.\n**Bước 2:** Toán tử `*` nhân chuỗi sẽ lặp lại ký tự `'A'` ba lần không có khoảng trắng.\n**Bước 3:** Kết quả thu được là `'AAA'`. Chọn B."
  },
  {
    "id": "Q_MOD_A_027",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "data-types",
      "floats"
    ],
    "content": "Giá trị logic của biểu thức so sánh sau là gì?\n```python\nprint(0.1 + 0.2 == 0.3)\n```",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. Lỗi TypeError",
      "D. Lỗi làm tròn ở thời điểm dịch (Compile-time error)"
    ],
    "correct_option": "B",
    "explanation": "Do cách biểu diễn số thực dấu phẩy động trong máy tính sử dụng hệ nhị phân (IEEE 754), các số thực như `0.1` và `0.2` không thể được biểu diễn chính xác tuyệt đối. Phép cộng `0.1 + 0.2` thực tế cho ra kết quả khoảng `0.30000000000000004`, làm cho biểu thức so sánh với `0.3` trở thành `False`.",
    "solution": "**Bước 1:** Tìm hiểu cách máy tính lưu trữ số thực: Sử dụng hệ nhị phân dẫn đến việc làm tròn các phân số không tuần hoàn ở hệ nhị phân.\n**Bước 2:** `0.1 + 0.2` cho ra kết quả xấp xỉ `0.30000000000000004`.\n**Bước 3:** So sánh `0.30000000000000004 == 0.3` trả về `False`. Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_028",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "operators"
    ],
    "content": "Toán tử nào được dùng để kiểm tra xem một chuỗi con có nằm trong một chuỗi khác hay không?",
    "options": [
      "A. `has`",
      "B. `in`",
      "C. `contains`",
      "D. `find`"
    ],
    "correct_option": "B",
    "explanation": "Python sử dụng toán tử thành viên `in` để kiểm tra sự tồn tại của một phần tử trong tập hợp, hoặc một chuỗi con nằm trong chuỗi mẹ. Ví dụ: `\"py\" in \"python\"` trả về `True`.",
    "solution": "**Bước 1:** Xét cách kiểm tra thành viên của chuỗi:\n- `in` là toán tử dựng sẵn trả về Boolean.\n- `find()` là phương thức chuỗi trả về chỉ số bắt đầu chứ không phải toán tử logic.\n- `contains` và `has` không phải toán tử trong Python.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_A_029",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "syntax"
    ],
    "content": "Cách nhanh nhất để hoán đổi giá trị của hai biến `a` và `b` trong Python mà không cần dùng biến trung gian là gì?",
    "options": [
      "A. `a, b = b, a`",
      "B. `a = b; b = a`",
      "C. `swap(a, b)`",
      "D. `a = a + b; b = a - b; a = a - b`"
    ],
    "correct_option": "A",
    "explanation": "Cú pháp `a, b = b, a` là cách ngắn gọn và an toàn nhất để tráo đổi giá trị hai biến trong Python nhờ cơ chế đóng gói (tuple packing) ở vế phải và giải gói (tuple unpacking) ở vế trái.",
    "solution": "**Bước 1:** Phân tích các phương án:\n- `a, b = b, a` hoạt động đồng thời, giá trị cũ của `b` gán vào `a` và giá trị cũ của `a` gán vào `b`.\n- `a = b; b = a` sẽ làm mất giá trị gốc của `a` khi gán `a = b`, cuối cùng cả hai biến có giá trị của `b` ban đầu.\n- `swap(a, b)` không phải là hàm dựng sẵn trong Python.\n**Bước 2:** Chọn A."
  },
  {
    "id": "Q_MOD_A_030",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": [
      "strings",
      "raw-string"
    ],
    "content": "Khi khai báo một raw string bằng cách thêm ký tự `r` ở đầu chuỗi (ví dụ `r\"C:\\new_folder\"`), tác dụng của nó là gì?",
    "options": [
      "A. Chuỗi tự động viết hoa toàn bộ.",
      "B. Các ký tự thoát như `\\n` hoặc `\\t` sẽ được giữ nguyên dạng văn bản thô, không được thông dịch.",
      "C. Chuỗi sẽ tự động được đảo ngược.",
      "D. Chuỗi chỉ cho phép lưu trữ dữ liệu dạng nhị phân."
    ],
    "correct_option": "B",
    "explanation": "Raw string (chuỗi thô) trong Python vô hiệu hóa tính năng biên dịch các ký tự điều khiển (escape characters) bắt đầu bằng dấu gạch chéo ngược `\\`. Ví dụ: `\\n` sẽ là hai ký tự riêng biệt `\\` và `n` chứ không phải ký tự xuống dòng.",
    "solution": "**Bước 1:** Hiểu cơ chế hoạt động của ký tự `r` (raw string).\n**Bước 2:** Khi có ký tự `r` đứng trước chuỗi, Python sẽ bỏ qua việc phân tích ký tự thoát.\n**Bước 3:** Nhờ đó các ký tự như `\\n` hoặc `\\t` được giữ nguyên làm chuỗi văn bản thô. Chọn B."
  }
];
