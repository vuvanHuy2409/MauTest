const QUESTIONS_C = [
  {
    "id": "Q_MOD_C_001",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "mutable-arguments"
    ],
    "content": "Đoạn code sau đây sẽ in ra kết quả gì khi chạy?\n```python\ndef append_to(num, target=[]):\n    target.append(num)\n    return target\n\nprint(append_to(1))\nprint(append_to(2))\n```",
    "options": [
      "A. `[1]` và `[2]`",
      "B. `[1]` và `[1, 2]`",
      "C. `[1]` và `[]`",
      "D. Lỗi"
    ],
    "correct_option": "B",
    "explanation": "Tham số mặc định kiểu thay đổi được (mutable) như `[]` chỉ được khởi tạo một lần khi biên dịch hàm. Các lượt gọi tiếp theo không truyền đối số sẽ dùng chung danh sách này.",
    "solution": "**Bước 1:** Phân tích tính lưu giữ của tham số mặc định dạng danh sách. Chọn B."
  },
  {
    "id": "Q_MOD_C_002",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "arguments"
    ],
    "content": "Tham số `*args` trong định nghĩa hàm có kiểu dữ liệu là gì bên trong hàm?",
    "options": [
      "A. `list`",
      "B. `dict`",
      "C. `tuple`",
      "D. `set`"
    ],
    "correct_option": "C",
    "explanation": "`*args` thu gom các đối số vị trí không đặt tên truyền dư thừa vào hàm thành một `tuple`.",
    "solution": "**Bước 1:** `*args` đóng gói thành tuple. Chọn C."
  },
  {
    "id": "Q_MOD_C_003",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "arguments"
    ],
    "content": "Tham số `**kwargs` trong định nghĩa hàm có kiểu dữ liệu là gì bên trong hàm?",
    "options": [
      "A. `list`",
      "B. `dict`",
      "C. `tuple`",
      "D. `set`"
    ],
    "correct_option": "B",
    "explanation": "`**kwargs` đóng gói các đối số truyền dạng keyword `key=value` thành một `dict`.",
    "solution": "**Bước 1:** `**kwargs` đóng gói thành từ điển. Chọn B."
  },
  {
    "id": "Q_MOD_C_004",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Đoạn code sau đây in ra kết quả gì?\n```python\nx = 10\ndef change():\n    x = 20\nchange()\nprint(x)\n```",
    "options": [
      "A. 20",
      "B. 10",
      "C. Lỗi NameError",
      "D. `None`"
    ],
    "correct_option": "B",
    "explanation": "`x = 20` trong hàm tạo ra biến cục bộ mới, không ảnh hưởng đến biến toàn cục `x = 10`.",
    "solution": "**Bước 1:** Xác định biến cục bộ che biến toàn cục trong hàm. Chọn B."
  },
  {
    "id": "Q_MOD_C_005",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Để ghi đè giá trị biến toàn cục bên trong hàm, ta cần khai báo từ khóa nào trước tên biến?",
    "options": [
      "A. `global`",
      "B. `nonlocal`",
      "C. `public`",
      "D. `outer`"
    ],
    "correct_option": "A",
    "explanation": "Khai báo `global x` bên trong hàm chỉ định Python thao tác trên biến toàn cục ngoài hàm thay vì tạo mới biến cục bộ.",
    "solution": "**Bước 1:** Khai báo global biến số. Chọn A."
  },
  {
    "id": "Q_MOD_C_006",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Từ khóa `nonlocal` dùng khi nào?",
    "options": [
      "A. Khi muốn truy cập biến toàn cục.",
      "B. Khi muốn sửa đổi một biến nằm ở phạm vi của hàm bao quanh bên ngoài (enclosing scope) trong cấu trúc hàm lồng nhau.",
      "C. Khi muốn tạo biến tĩnh.",
      "D. Không tồn tại từ khóa này."
    ],
    "correct_option": "B",
    "explanation": "`nonlocal` liên kết biến trong hàm con với biến của hàm cha bao bọc nó.",
    "solution": "**Bước 1:** Dùng nonlocal trong closure hoặc hàm lồng hàm để sửa biến hàm cha. Chọn B."
  },
  {
    "id": "Q_MOD_C_007",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "modules"
    ],
    "content": "Khi chạy một file Python trực tiếp từ terminal, biến `__name__` mang giá trị là gì?",
    "options": [
      "A. Tên file Python đó.",
      "B. `\"__main__\"`",
      "C. `\"root\"`",
      "D. `None`"
    ],
    "correct_option": "B",
    "explanation": "Khi thực thi trực tiếp, Python thiết lập giá trị biến đặc biệt `__name__` thành `\"__main__\"`.",
    "solution": "**Bước 1:** Giá trị mặc định khi chạy file trực tiếp là `__main__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_008",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Phương thức khởi dựng `__init__` trong lớp Python đóng vai trò gì?",
    "options": [
      "A. Hủy thực thể đối tượng.",
      "B. Khởi tạo đối tượng (Constructor) dùng để thiết lập giá trị ban đầu cho các thuộc tính khi đối tượng mới được tạo.",
      "C. In thông tin đối tượng.",
      "D. Kế thừa lớp cha."
    ],
    "correct_option": "B",
    "explanation": "`__init__` hoạt động như một constructor để thiết lập trạng thái ban đầu của đối tượng.",
    "solution": "**Bước 1:** Phương thức `__init__` là constructor khởi tạo thực thể. Chọn B."
  },
  {
    "id": "Q_MOD_C_009",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Tham số `self` trong phương thức của Class trỏ tới đối tượng nào?",
    "options": [
      "A. Trỏ tới chính Class đó.",
      "B. Trỏ tới thực thể cụ thể (Instance) đang gọi phương thức.",
      "C. Trỏ tới lớp cha.",
      "D. Là từ khóa hệ thống bắt buộc."
    ],
    "correct_option": "B",
    "explanation": "`self` đại diện cho chính đối tượng cụ thể đang thực hiện phương thức đó.",
    "solution": "**Bước 1:** `self` là tham chiếu trỏ đến đối tượng hiện hành. Chọn B."
  },
  {
    "id": "Q_MOD_C_010",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Đoạn code sau in ra kết quả gì?\n```python\nclass Dog:\n    species = \"Canine\"\n    def __init__(self, name):\n        self.name = name\nd1 = Dog(\"Buddy\")\nd2 = Dog(\"Lucy\")\nprint(d1.species, d2.name)\n```",
    "options": [
      "A. `Canine Buddy`",
      "B. `Canine Lucy`",
      "C. `Canine Canine`",
      "D. Lỗi"
    ],
    "correct_option": "B",
    "explanation": "`species` là thuộc tính lớp dùng chung, `name` là thuộc tính đối tượng riêng biệt. `d2.name` là `'Lucy'`.",
    "solution": "**Bước 1:** Phân tích thuộc tính lớp vs thuộc tính thực thể. Chọn B."
  },
  {
    "id": "Q_MOD_C_011",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Đoạn code sau in ra gì?\n```python\nclass Test:\n    count = 0\nt1 = Test()\nt2 = Test()\nTest.count = 5\nprint(t1.count, t2.count)\n```",
    "options": [
      "A. `0 0`",
      "B. `5 5`",
      "C. `5 0`",
      "D. Lỗi"
    ],
    "correct_option": "B",
    "explanation": "Sửa thuộc tính lớp thông qua `Test.count = 5` cập nhật giá trị chung cho toàn bộ các thực thể chưa ghi đè nó.",
    "solution": "**Bước 1:** Chỉnh sửa thuộc tính lớp tác động đến mọi đối tượng chưa tự định nghĩa thuộc tính thực thể đó. Chọn B."
  },
  {
    "id": "Q_MOD_C_012",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Cú pháp khai báo lớp `Dog` kế thừa từ lớp `Animal` là gì?",
    "options": [
      "A. `class Dog inherit Animal:`",
      "B. `class Dog(Animal):`",
      "C. `class Dog extends Animal:`",
      "D. `class Dog implements Animal:`"
    ],
    "correct_option": "B",
    "explanation": "Python sử dụng ngoặc đơn sau tên lớp con để khai báo kế thừa: `class Dog(Animal):`.",
    "solution": "**Bước 1:** Đặt lớp cha trong ngoặc đơn để kế thừa. Chọn B."
  },
  {
    "id": "Q_MOD_C_013",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Từ khóa nào giúp gọi constructor của lớp cha từ lớp con?",
    "options": [
      "A. `super().__init__()`",
      "B. `parent().__init__()`",
      "C. `base().__init__()`",
      "D. `self.parent.__init__()`"
    ],
    "correct_option": "A",
    "explanation": "`super()` trả về proxy ủy quyền gọi các phương thức của lớp cha, điển hình là `super().__init__()`.",
    "solution": "**Bước 1:** Dùng `super()` để gọi phương thức cha. Chọn A."
  },
  {
    "id": "Q_MOD_C_014",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "encapsulation"
    ],
    "content": "Biến bắt đầu bằng một dấu gạch dưới (ví dụ `_status`) có ý nghĩa gì trong Class Python?",
    "options": [
      "A. Biến private tuyệt đối bị khóa bởi trình thông dịch.",
      "B. Quy ước ngầm báo hiệu đây là thuộc tính nội bộ (protected), khuyên các lập trình viên không nên gọi trực tiếp từ ngoài lớp.",
      "C. Biến tĩnh của lớp.",
      "D. Hằng số."
    ],
    "correct_option": "B",
    "explanation": "Một dấu gạch dưới chỉ là quy ước cộng đồng để đánh dấu thuộc tính nội bộ, không có sự ngăn chặn vật lý từ hệ thống.",
    "solution": "**Bước 1:** Nhận biết một dấu gạch dưới là quy ước protected. Chọn B."
  },
  {
    "id": "Q_MOD_C_015",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "encapsulation"
    ],
    "content": "Điều gì xảy ra khi đặt tên biến bắt đầu bằng hai dấu gạch dưới (ví dụ `__value`) trong Class?",
    "options": [
      "A. Gây lỗi cú pháp.",
      "B. Trình thông dịch thực hiện cơ chế đổi tên thuộc tính (name mangling) thành `_ClassName__value` để hạn chế truy cập trực tiếp từ ngoài.",
      "C. Biến tự động bị xóa sau khi tạo.",
      "D. Biến đó chuyển thành kiểu hằng số."
    ],
    "correct_option": "B",
    "explanation": "Hai dấu gạch dưới kích hoạt name mangling, tự động biên dịch đổi tên thuộc tính thành `_ClassName__value` để tránh trùng lặp hoặc truy xuất trực tiếp vô ý.",
    "solution": "**Bước 1:** Hai dấu gạch dưới gây ra cơ chế name mangling để che giấu thuộc tính. Chọn B."
  },
  {
    "id": "Q_MOD_C_016",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "methods"
    ],
    "content": "Sự khác biệt giữa `@classmethod` và `@staticmethod` là gì?",
    "options": [
      "A. `@classmethod` nhận tham số lớp `cls` ở tham số đầu tiên, còn `@staticmethod` không nhận tham số mặc định nào của lớp hay đối tượng.",
      "B. `@classmethod` chỉ dùng cho số, `@staticmethod` dùng cho chữ.",
      "C. `@classmethod` không thể gọi từ Class.",
      "D. Cả hai hoàn toàn như nhau."
    ],
    "correct_option": "A",
    "explanation": "`@classmethod` liên kết với lớp và nhận `cls` để thao tác trạng thái lớp. `@staticmethod` là hàm độc lập logic đặt trong lớp, không nhận `self` hay `cls`.",
    "solution": "**Bước 1:** Phân biệt phương thức lớp (nhận `cls`) và phương thức tĩnh (không nhận tham số tự động). Chọn A."
  },
  {
    "id": "Q_MOD_C_017",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Ghi đè dunder method nào để định nghĩa chuỗi đại diện dễ đọc khi hiển thị đối tượng bằng lệnh `print(obj)`?",
    "options": [
      "A. `__repr__`",
      "B. `__str__`",
      "C. `__to_str__`",
      "D. `__string__`"
    ],
    "correct_option": "B",
    "explanation": "`__str__` được thiết kế để trả về chuỗi mô tả thân thiện cho người dùng cuối khi in hoặc ép kiểu `str(obj)`.",
    "solution": "**Bước 1:** Ép kiểu chuỗi hoặc in đối tượng gọi phương thức ma thuật `__str__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_018",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Dunder method nào tương ứng với việc nạp chồng toán tử so sánh bằng `==` giữa hai đối tượng?",
    "options": [
      "A. `__cmp__`",
      "B. `__eq__`",
      "C. `__compare__`",
      "D. `__equal__`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `==` gọi dunder method `__eq__(self, other)` (viết tắt của equal).",
    "solution": "**Bước 1:** Phép so sánh bằng gọi hàm `__eq__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_019",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Để đối tượng lớp có thể trả về độ dài khi dùng hàm `len(obj)`, ta cần ghi đè phương thức nào?",
    "options": [
      "A. `__size__`",
      "B. `__length__`",
      "C. `__len__`",
      "D. `__count__`"
    ],
    "correct_option": "C",
    "explanation": "Hàm `len(obj)` sẽ kích hoạt cuộc gọi dunder method `__len__(self)`.",
    "solution": "**Bước 1:** `len()` gọi phương thức ma thuật `__len__`. Chọn C."
  },
  {
    "id": "Q_MOD_C_020",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Toán tử cộng `+` giữa hai thực thể lớp gọi phương thức ma thuật nào?",
    "options": [
      "A. `__plus__`",
      "B. `__add__`",
      "C. `__sum__`",
      "D. `__concat__`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `+` kích hoạt phương thức `__add__(self, other)`.",
    "solution": "**Bước 1:** Nạp chồng toán tử cộng dùng dunder `__add__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_021",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Đa kế thừa trong Python giải quyết thứ tự tìm kiếm thuộc tính và phương thức qua cơ chế nào?",
    "options": [
      "A. FIFO",
      "B. LIFO",
      "C. MRO (Method Resolution Order)",
      "D. Duyệt ngẫu nhiên"
    ],
    "correct_option": "C",
    "explanation": "Method Resolution Order (MRO) sử dụng thuật toán C3 Linearization để tạo chuỗi tìm kiếm phương thức trên sơ đồ đa kế thừa.",
    "solution": "**Bước 1:** Trật tự phân giải phương thức kế thừa là MRO. Chọn C."
  },
  {
    "id": "Q_MOD_C_022",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "methods"
    ],
    "content": "Decorator nào giúp biến một phương thức Class thành thuộc tính chỉ đọc (truy cập không cần dấu ngoặc đơn)?",
    "options": [
      "A. `@classmethod`",
      "B. `@property`",
      "C. `@attribute`",
      "D. `@read_only`"
    ],
    "correct_option": "B",
    "explanation": "Decorator `@property` cho phép truy xuất phương thức dưới dạng thuộc tính (getter).",
    "solution": "**Bước 1:** Sử dụng `@property` để định nghĩa thuộc tính ảo từ hàm. Chọn B."
  },
  {
    "id": "Q_MOD_C_023",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Hàm built-in nào kiểm tra xem đối tượng có phải là thực thể của lớp chỉ định hoặc lớp con của nó không?",
    "options": [
      "A. `isinstance()`",
      "B. `issubclass()`",
      "C. `typeof()`",
      "D. `checkattr()`"
    ],
    "correct_option": "A",
    "explanation": "`isinstance(obj, Class)` dùng để kiểm tra kiểu đối tượng đối với lớp chỉ định.",
    "solution": "**Bước 1:** `isinstance` kiểm tra thực thể đối tượng. Chọn A."
  },
  {
    "id": "Q_MOD_C_024",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Hàm `issubclass(Child, Parent)` trả về giá trị gì nếu `Child` kế thừa từ `Parent`?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. `None`",
      "D. Lỗi"
    ],
    "correct_option": "A",
    "explanation": "`issubclass` kiểm tra quan hệ kế thừa giữa hai lớp, trả về `True` nếu lớp thứ nhất là con của lớp thứ hai.",
    "solution": "**Bước 1:** Kiểm tra quan hệ lớp con: trả về True. Chọn A."
  },
  {
    "id": "Q_MOD_C_025",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions"
    ],
    "content": "Hàm trong Python có thể gán cho biến, truyền làm tham số hoặc trả về từ hàm khác vì nó là gì?",
    "options": [
      "A. Biến toàn cục.",
      "B. Đối tượng hạng nhất (First-class citizen).",
      "C. Hàm bất đồng bộ.",
      "D. Thực thể tĩnh."
    ],
    "correct_option": "B",
    "explanation": "Khái niệm First-class citizen/object nghĩa là hàm được đối xử giống như mọi đối tượng dữ liệu thông thường khác.",
    "solution": "**Bước 1:** Hàm là First-class citizen trong Python. Chọn B."
  },
  {
    "id": "Q_MOD_C_026",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "namespaces"
    ],
    "content": "Quy tắc LEGB định nghĩa thứ tự tra cứu không gian tên biến trong Python là viết tắt của các từ nào?",
    "options": [
      "A. Loop, Exception, Generator, Boolean",
      "B. Local, Enclosing, Global, Built-in",
      "C. List, Element, Group, Byte",
      "D. Level, Environment, Garbage, Block"
    ],
    "correct_option": "B",
    "explanation": "Thứ tự tìm kiếm biến: Cục bộ (Local) -> Hàm chứa ngoài (Enclosing) -> Toàn cục (Global) -> Hệ thống dựng sẵn (Built-in).",
    "solution": "**Bước 1:** Quy tắc LEGB mô tả phạm vi tìm kiếm định danh. Chọn B."
  },
  {
    "id": "Q_MOD_C_027",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Để kiểm tra xem một thuộc tính có tồn tại trong đối tượng hay không mà không gây lỗi, ta sử dụng hàm nào?",
    "options": [
      "A. `hasattr()`",
      "B. `getattr()`",
      "C. `setattr()`",
      "D. `checkattr()`"
    ],
    "correct_option": "A",
    "explanation": "`hasattr(obj, name)` nhận tên thuộc tính dưới dạng chuỗi và trả về giá trị logic True/False mô tả sự tồn tại.",
    "solution": "**Bước 1:** Dùng `hasattr` để kiểm tra thuộc tính đối tượng an toàn. Chọn A."
  },
  {
    "id": "Q_MOD_C_028",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Dunder method `__repr__` được thiết kế nhằm mục đích chính nào?",
    "options": [
      "A. Trả về chuỗi ký tự hiển thị dễ đọc cho người dùng cuối.",
      "B. Trả về chuỗi mô tả kỹ thuật chi tiết của đối tượng (dạng không mập mờ) dùng cho ghi log và debug của lập trình viên.",
      "C. Tự động đóng file.",
      "D. Giải phóng bộ nhớ."
    ],
    "correct_option": "B",
    "explanation": "`__repr__` (representation) trả về chuỗi mô tả chi tiết, tốt nhất là dưới dạng chuỗi mã nguồn có thể tái tạo lại đối tượng.",
    "solution": "**Bước 1:** Phân biệt `__str__` (người dùng) và `__repr__` (lập trình viên/debug). Chọn B."
  },
  {
    "id": "Q_MOD_C_029",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Đoạn code sau sử dụng closure. Kết quả in ra là gì?\n```python\ndef maker(n):\n    return lambda x: x * n\ndoubler = maker(2)\nprint(doubler(5))\n```",
    "options": [
      "A. 10",
      "B. 25",
      "C. 5",
      "D. Lỗi"
    ],
    "correct_option": "A",
    "explanation": "`maker(2)` trả về hàm lambda có ghi nhớ biến ngoại vi `n = 2`. Gọi `doubler(5)` chạy phép tính `5 * 2 = 10`.",
    "solution": "**Bước 1:** Phép gọi hàm closure giữ trạng thái biến số. Chọn A."
  },
  {
    "id": "Q_MOD_C_030",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "methods"
    ],
    "content": "Lệnh nào lấy ra giá trị thuộc tính động từ đối tượng dựa trên chuỗi tên thuộc tính truyền vào?",
    "options": [
      "A. `hasattr()`",
      "B. `getattr()`",
      "C. `setattr()`",
      "D. `get_value()`"
    ],
    "correct_option": "B",
    "explanation": "`getattr(obj, 'attribute_name')` cho phép truy xuất giá trị thuộc tính bằng chuỗi tên thuộc tính linh hoạt.",
    "solution": "**Bước 1:** Dùng `getattr` để lấy thuộc tính động của đối tượng. Chọn B."
  },
  {
    "id": "Q_MOD_C_031",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức ma thuật nào dùng để giải phóng hoặc dọn dẹp tài nguyên (Destructor) khi một đối tượng bị hủy khỏi bộ nhớ?",
    "options": [
      "A. `__init__`",
      "B. `__del__`",
      "C. `__destruct__`",
      "D. `__close__`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `__del__(self)` là destructor trong Python, được gọi khi số lượng tham chiếu đến đối tượng bằng 0 và bộ dọn rác chuẩn bị xóa nó.",
    "solution": "**Bước 1:** Phương thức hủy thực thể đối tượng là `__del__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_032",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "lambda"
    ],
    "content": "Đoạn code sau sử dụng lambda để sắp xếp danh sách các tuple theo phần tử thứ hai. Kết quả in ra là gì?\n```python\nlst = [(1, 9), (2, 3), (3, 6)]\nlst.sort(key=lambda x: x[1])\nprint(lst)\n```",
    "options": [
      "A. `[(1, 9), (2, 3), (3, 6)]`",
      "B. `[(2, 3), (3, 6), (1, 9)]`",
      "C. `[(3, 6), (2, 3), (1, 9)]`",
      "D. Lỗi TypeError"
    ],
    "correct_option": "B",
    "explanation": "Hàm lambda `lambda x: x[1]` chỉ thị sắp xếp dựa trên phần tử chỉ số 1 của tuple (các giá trị 9, 3, 6). Sắp xếp tăng dần sẽ là 3, 6, 9 tương ứng danh sách các tuple `[(2, 3), (3, 6), (1, 9)]`.",
    "solution": "**Bước 1:** Trích xuất khóa sắp xếp qua phần tử thứ hai của mỗi tuple: 9, 3, 6.\n**Bước 2:** Sắp xếp tăng dần: 3 < 6 < 9.\n**Bước 3:** Thứ tự tuple tương ứng là (2,3), (3,6), (1,9). Chọn B."
  },
  {
    "id": "Q_MOD_C_033",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "comprehensions"
    ],
    "content": "Giá trị của biểu thức list comprehension `[x**2 for x in range(4)]` là gì?",
    "options": [
      "A. `[1, 4, 9, 16]`",
      "B. `[0, 1, 4, 9]`",
      "C. `[0, 1, 2, 3]`",
      "D. `[0, 2, 4, 6]`"
    ],
    "correct_option": "B",
    "explanation": "`range(4)` sinh các số: 0, 1, 2, 3. Bình phương tương ứng: $0^2=0$, $1^2=1$, $2^2=4$, $3^2=9$. Kết quả `[0, 1, 4, 9]`.",
    "solution": "**Bước 1:** Tính bình phương từng số từ 0 đến 3. Chọn B."
  },
  {
    "id": "Q_MOD_C_034",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "properties"
    ],
    "content": "Khi sử dụng `@property` cho phương thức `name(self)`, ta định nghĩa phương thức thiết lập giá trị (setter) tương ứng bằng decorator nào?",
    "options": [
      "A. `@name.setter`",
      "B. `@property.setter`",
      "C. `@setter.name`",
      "D. `@set_name`"
    ],
    "correct_option": "A",
    "explanation": "Khi có thuộc tính `@property` tên là `name`, ta định nghĩa setter bằng cú pháp `@name.setter` phía trước phương thức cùng tên.",
    "solution": "**Bước 1:** Setter tương ứng của property `x` có dạng `@x.setter`. Chọn A."
  },
  {
    "id": "Q_MOD_C_035",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Để nạp chồng toán tử nhân `*` giữa hai đối tượng, ta cần ghi đè phương thức ma thuật nào?",
    "options": [
      "A. `__mul__`",
      "B. `__prod__`",
      "C. `__multiply__`",
      "D. `__times__`"
    ],
    "correct_option": "A",
    "explanation": "Toán tử `*` kích hoạt lời gọi phương thức `__mul__(self, other)`.",
    "solution": "**Bước 1:** Hàm ma thuật tương ứng với toán tử `*` là `__mul__`. Chọn A."
  },
  {
    "id": "Q_MOD_C_036",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "generators"
    ],
    "content": "Đoạn code sau in ra kết quả gì?\n```python\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g), next(g))\n```",
    "options": [
      "A. `1 1`",
      "B. `1 2`",
      "C. `2 2`",
      "D. Lỗi StopIteration"
    ],
    "correct_option": "B",
    "explanation": "Lần đầu gọi `next(g)` chạy đến `yield 1` và trả về 1. Lần gọi thứ hai chạy tiếp đến `yield 2` và trả về 2.",
    "solution": "**Bước 1:** Theo dõi tiến trình của generator. Chọn B."
  },
  {
    "id": "Q_MOD_C_037",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức đặc biệt `__new__` trong Class Python khác biệt gì với `__init__`?",
    "options": [
      "A. Không có sự khác biệt.",
      "B. `__new__` thực tế là phương thức tạo thực thể đối tượng mới (allocator) và trả về đối tượng đó; còn `__init__` chỉ chịu trách nhiệm khởi tạo thuộc tính cho thực thể đã có.",
      "C. `__new__` chạy sau `__init__`.",
      "D. `__new__` là hàm viết bằng C++."
    ],
    "correct_option": "B",
    "explanation": "`__new__` là phương thức tĩnh thực sự chịu trách nhiệm cấp phát bộ nhớ và tạo thực thể lớp, sau đó `__init__` được gọi để khởi tạo trạng thái.",
    "solution": "**Bước 1:** `__new__` là phương thức khởi tạo thực thể thực sự (được gọi trước `__init__`). Chọn B."
  },
  {
    "id": "Q_MOD_C_038",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Phương thức nào dùng để lấy danh sách tất cả các thuộc tính và phương thức hợp lệ của một đối tượng?",
    "options": [
      "A. `dir(object)`",
      "B. `help(object)`",
      "C. `vars(object)`",
      "D. `dict(object)`"
    ],
    "correct_option": "A",
    "explanation": "Hàm built-in `dir(object)` trả về danh sách các chuỗi đại diện cho toàn bộ các thuộc tính và phương thức được định nghĩa trên đối tượng đó.",
    "solution": "**Bước 1:** Tra cứu thuộc tính động qua hàm `dir()`. Chọn A."
  },
  {
    "id": "Q_MOD_C_039",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "decorators"
    ],
    "content": "Mã nguồn decorator sau in ra kết quả gì?\n```python\ndef dec(f):\n    return lambda: f() + 1\n@dec\ndef val():\n    return 5\nprint(val())\n```",
    "options": [
      "A. 5",
      "B. 6",
      "C. Lỗi TypeError",
      "D. `None`"
    ],
    "correct_option": "B",
    "explanation": "Decorator bọc hàm `val` bằng lambda thực hiện `val() + 1` tương đương `5 + 1 = 6`.",
    "solution": "**Bước 1:** Phân tích decorator lồng hàm: Kết quả trả về cộng thêm 1. Chọn B."
  },
  {
    "id": "Q_MOD_C_040",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "lambda"
    ],
    "content": "Hàm ẩn danh lambda trong Python có giới hạn cú pháp quan trọng nào?",
    "options": [
      "A. Chỉ được phép chứa duy nhất một biểu thức kết quả (expression) và tự động trả về giá trị đó, không chứa khối lệnh đa dòng hoặc từ khóa return.",
      "B. Chỉ được phép nhận tối đa 1 đối số truyền vào.",
      "C. Không thể gọi được từ bên ngoài module.",
      "D. Bắt buộc phải đặt tên khi khai báo."
    ],
    "correct_option": "A",
    "explanation": "Lambda được thiết kế cho các hàm ngắn gọn trên 1 dòng nên chỉ chấp nhận duy nhất một biểu thức tính toán đơn giản.",
    "solution": "**Bước 1:** Nhớ lại ràng buộc cú pháp của biểu thức lambda. Chọn A."
  },
  {
    "id": "Q_MOD_C_041",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức ma thuật nào được gọi khi ta cố gắng truy cập một thuộc tính không tồn tại trong đối tượng?",
    "options": [
      "A. `__getattribute__`",
      "B. `__getattr__`",
      "C. `__missing__`",
      "D. `__error__`"
    ],
    "correct_option": "B",
    "explanation": "Khác với `__getattribute__` (luôn gọi cho mọi thuộc tính), `__getattr__` chỉ được kích hoạt làm giải pháp dự phòng cuối cùng khi thuộc tính yêu cầu không được tìm thấy trong bảng thuộc tính thông thường.",
    "solution": "**Bước 1:** Thuộc tính thiếu kích hoạt dunder `__getattr__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_042",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "closures"
    ],
    "content": "Yếu tố nào sau đây là bắt buộc để tạo ra một Closure (bao đóng) trong Python?",
    "options": [
      "A. Phải có hàm lồng nhau, hàm con phải tham chiếu đến biến của hàm cha, và hàm cha phải trả về hàm con đó.",
      "B. Phải sử dụng từ khóa `global`.",
      "C. Phải kết nối trực tiếp với cơ sở dữ liệu.",
      "D. Hàm con bắt buộc phải viết bằng cú pháp lambda."
    ],
    "correct_option": "A",
    "explanation": "Closure yêu cầu lưu trữ ngữ cảnh biến của hàm ngoài (enclosing scope) gắn với hàm con được trả về.",
    "solution": "**Bước 1:** Đối chiếu điều kiện tạo Closure. Chọn A."
  },
  {
    "id": "Q_MOD_C_043",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Để lấy ra từ điển chứa tất cả các thuộc tính của thực thể đối tượng dưới dạng các cặp `tên_thuộc_tính: giá_trị`, ta truy cập thuộc tính ma thuật nào?",
    "options": [
      "A. `__dict__`",
      "B. `__slots__`",
      "C. `__vars__`",
      "D. `__methods__`"
    ],
    "correct_option": "A",
    "explanation": "Thuộc tính `__dict__` lưu trữ không gian tên thuộc tính của đối tượng dưới dạng từ điển thông thường.",
    "solution": "**Bước 1:** Không gian tên thuộc tính lưu trong `__dict__`. Chọn A."
  },
  {
    "id": "Q_MOD_C_044",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "slots"
    ],
    "content": "Thuộc tính đặc biệt `__slots__` dùng trong khai báo Class nhằm mục đích gì?",
    "options": [
      "A. Để mã hóa bảo mật lớp học.",
      "B. Khai báo danh sách cố định các thuộc tính thực thể được phép tạo, giúp tối ưu hóa bộ nhớ và tăng tốc độ truy xuất bằng cách ngăn chặn việc tự động tạo từ điển `__dict__` cho mỗi đối tượng.",
      "C. Định nghĩa danh sách các lớp con.",
      "D. Đóng gói các hàm thành luồng xử lý song song."
    ],
    "correct_option": "B",
    "explanation": "`__slots__` tối ưu bộ nhớ cho Class khi cần khởi tạo hàng triệu đối tượng nhỏ, ngăn chặn việc tạo động thuộc tính ngoài danh sách khai báo sẵn.",
    "solution": "**Bước 1:** `__slots__` ngăn chặn tạo `__dict__` để tối ưu RAM. Chọn B."
  },
  {
    "id": "Q_MOD_C_045",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "advanced",
      "comprehensions"
    ],
    "content": "Biểu thức set comprehension `{x for x in [1, 2, 2, 3]}` trả về kết quả gì?",
    "options": [
      "A. `{1, 2, 2, 3}`",
      "B. `{1, 2, 3}`",
      "C. `[1, 2, 3]`",
      "D. `(1, 2, 3)`"
    ],
    "correct_option": "B",
    "explanation": "Set comprehension trả về kiểu tập hợp (Set) được bao bọc trong ngoặc nhọn và tự loại bỏ các giá trị trùng lặp.",
    "solution": "**Bước 1:** Set comprehension tạo Set duy nhất. Chọn B."
  },
  {
    "id": "Q_MOD_C_046",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Khi sử dụng hàm ép kiểu số nguyên `int(obj)` cho đối tượng tự định nghĩa, phương thức dunder nào được kích hoạt?",
    "options": [
      "A. `__int__`",
      "B. `__to_int__`",
      "C. `__integer__`",
      "D. `__index__`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `int()` gọi dunder method `__int__(self)` định nghĩa trong lớp.",
    "solution": "**Bước 1:** Ép kiểu int gọi `__int__`. Chọn A."
  },
  {
    "id": "Q_MOD_C_047",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Để cho phép đối tượng thực thể có thể được gọi như một hàm thông qua dấu ngoặc đơn (ví dụ `obj()`), lớp của đối tượng bắt buộc phải định nghĩa phương thức nào?",
    "options": [
      "A. `__call__`",
      "B. `__run__`",
      "C. `__execute__`",
      "D. `__invoke__`"
    ],
    "correct_option": "A",
    "explanation": "Định nghĩa `__call__(self, *args, **kwargs)` cho phép gọi thực thể của lớp giống như một hàm thông thường (callable object).",
    "solution": "**Bước 1:** Biến đối tượng thành callable bằng `__call__`. Chọn A."
  },
  {
    "id": "Q_MOD_C_048",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Hàm `super()` trong trường hợp đa kế thừa phức tạp sẽ duyệt lớp theo thứ tự nào?",
    "options": [
      "A. Luôn duyệt lớp cha đầu tiên khai báo bên trái trước.",
      "B. Theo trật tự tuyến tính được tính toán bởi thuật toán MRO.",
      "C. Theo thứ tự bảng chữ cái tên lớp.",
      "D. Duyệt ngẫu nhiên."
    ],
    "correct_option": "B",
    "explanation": "`super()` tìm kiếm phương thức dựa trên danh sách MRO đã được tính toán sẵn cho Class tại thời điểm định nghĩa.",
    "solution": "**Bước 1:** MRO quyết định chuỗi tìm kiếm của `super()`. Chọn B."
  },
  {
    "id": "Q_MOD_C_049",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức dunder `__contains__` được sử dụng để định nghĩa hành vi cho toán tử nào?",
    "options": [
      "A. `==`",
      "B. `in`",
      "C. `is`",
      "D. `[]`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử thành viên `x in obj` kích hoạt cuộc gọi phương thức `obj.__contains__(x)`.",
    "solution": "**Bước 1:** Toán tử `in` gọi hàm `__contains__`. Chọn B."
  },
  {
    "id": "Q_MOD_C_050",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Hàm `vars(object)` trả về thông tin gì tương đương?",
    "options": [
      "A. `object.__dict__`",
      "B. `object.__methods__`",
      "C. `object.__class__`",
      "D. `dir(object)`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `vars(obj)` trả về thuộc tính `__dict__` của đối tượng đó.",
    "solution": "**Bước 1:** `vars()` trả về dictionary thuộc tính `__dict__`. Chọn A."
  }
];
