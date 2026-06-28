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
      "D. Báo lỗi Runtime error"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, các tham số mặc định (default arguments) chỉ được khởi tạo **một lần duy nhất** khi định nghĩa hàm được biên dịch (chứ không phải khởi tạo lại mỗi khi hàm được gọi). Nếu tham số mặc định là một đối tượng có thể thay đổi (mutable) như danh sách rỗng `[]`, mọi lượt gọi hàm không truyền đối số sẽ sử dụng chung đối tượng danh sách này. Lần gọi thứ nhất thêm 1 vào danh sách -> in ra `[1]`. Lần gọi thứ hai thêm 2 vào chính danh sách đó -> in ra `[1, 2]`.",
    "solution": "**Bước 1:** Nhận diện hành vi của tham số mặc định có kiểu dữ liệu thay đổi được (mutable default arguments).\n**Bước 2:** `target=[]` được tạo ra một lần duy nhất lúc khai báo hàm và lưu trữ chung trong thuộc tính `__defaults__` của hàm.\n**Bước 3:** Lần gọi 1: `append_to(1)` sửa đổi danh sách mặc định thành `[1]`. Lần gọi 2: `append_to(2)` sửa đổi danh sách mặc định thành `[1, 2]`. Chọn B."
  },
  {
    "id": "Q_MOD_C_002",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "arguments"
    ],
    "content": "Kiểu dữ liệu của biến `args` bên trong hàm nhận đối số biến đổi vị trí (ví dụ `def func(*args):`) là gì?",
    "options": [
      "A. `list`",
      "B. `dict`",
      "C. `tuple`",
      "D. `set`"
    ],
    "correct_option": "C",
    "explanation": "Cú pháp `*args` dùng để gom tất cả các tham số vị trí dư thừa truyền vào hàm thành một đối tượng bất biến dạng **Tuple**.",
    "solution": "**Bước 1:** Khi sử dụng ký tự `*` trước tên biến trong định nghĩa tham số hàm, Python thực hiện đóng gói tham số (argument packing).\n**Bước 2:** Tất cả đối số vị trí không định danh sẽ được thu gom vào một `tuple`.\n**Bước 3:** Chọn đáp án C."
  },
  {
    "id": "Q_MOD_C_003",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "arguments"
    ],
    "content": "Kiểu dữ liệu của biến `kwargs` bên trong định nghĩa hàm `def func(**kwargs):` là gì?",
    "options": [
      "A. `list`",
      "B. `dict`",
      "C. `tuple`",
      "D. `set`"
    ],
    "correct_option": "B",
    "explanation": "Cú pháp `**kwargs` dùng để thu gom tất cả các tham số truyền dưới dạng từ khóa (keyword arguments) thành một đối tượng **Dictionary**.",
    "solution": "**Bước 1:** Ký hiệu hai dấu sao `**` trước tên biến khai báo tham số hàm chỉ thị việc thu thập các đối số dạng `key=value`.\n**Bước 2:** Trình thông dịch Python tự động đóng gói các cặp khóa-giá trị này vào một từ điển (`dict`).\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_C_004",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Đoạn code sau đây sẽ in ra màn hình kết quả là gì?\n```python\nx = 10\ndef change():\n    x = 20\nchange()\nprint(x)\n```",
    "options": [
      "A. 20",
      "B. 10",
      "C. Lỗi NameError",
      "D. `None`"
    ],
    "correct_option": "B",
    "explanation": "Biến `x = 10` nằm ở phạm vi toàn cục (global scope). Bên trong hàm `change()`, câu lệnh `x = 20` tạo ra một biến **cục bộ** mới trùng tên `x` (local scope) chứ không làm thay đổi giá trị của biến toàn cục `x`. Sau khi hàm thực thi xong, biến cục bộ bị giải phóng, và `print(x)` toàn cục vẫn in ra `10`.",
    "solution": "**Bước 1:** Khảo sát phạm vi biến (Variable Scope) theo quy tắc LEGB.\n- `x = 10` ở cấp ngoài cùng (Global).\n- `x = 20` bên trong hàm tạo ra biến cục bộ mới (Local).\n**Bước 2:** Hàm `change()` được gọi nhưng không tác động đến biến toàn cục.\n**Bước 3:** Câu lệnh `print(x)` bên ngoài hàm tham chiếu đến biến toàn cục, giá trị in ra là `10`. Chọn B."
  },
  {
    "id": "Q_MOD_C_005",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Để thay đổi giá trị của một biến toàn cục (global variable) bên trong một hàm, bạn phải làm gì?",
    "options": [
      "A. Sử dụng từ khóa `global` đi kèm tên biến bên trong hàm.",
      "B. Truyền biến đó làm đối số đầu vào cho hàm.",
      "C. Đặt tên hàm trùng tên với biến.",
      "D. Python tự động cho phép thay đổi trực tiếp mà không cần làm gì."
    ],
    "correct_option": "A",
    "explanation": "Để thông báo cho hàm biết rằng một biến cụ thể tham chiếu đến biến nằm ngoài phạm vi toàn cục (chứ không phải tạo biến cục bộ mới), ta dùng khai báo `global <tên_biến>` trước khi gán lại giá trị cho nó.",
    "solution": "**Bước 1:** Mặc định, nếu bạn gán giá trị cho một biến trong hàm, Python coi đó là biến cục bộ.\n**Bước 2:** Để ghi đè giá trị của biến toàn cục, ta phải khai báo từ khóa `global` để báo hiệu cho Python.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_C_006",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "scope"
    ],
    "content": "Từ khóa `nonlocal` trong Python được dùng khi nào?",
    "options": [
      "A. Khi muốn truy cập biến toàn cục ở ngoài cùng.",
      "B. Khi muốn sửa đổi một biến nằm ở phạm vi của hàm bao quanh bên ngoài (enclosing scope) trong cấu trúc hàm lồng nhau.",
      "C. Khi muốn biến đó có thể được import bởi module khác.",
      "D. Khi muốn định nghĩa biến nằm trong file cấu hình."
    ],
    "correct_option": "B",
    "explanation": "Từ khóa `nonlocal` được sử dụng trong các hàm lồng nhau (nested functions) để khai báo rằng biến này thuộc về hàm bao bên ngoài gần nhất (enclosing scope), chứ không phải biến cục bộ của hàm hiện tại hay biến toàn cục.",
    "solution": "**Bước 1:** Phân tích phạm vi biến bao bọc (Enclosing Scope):\n- Xảy ra khi có hàm lồng hàm.\n- Để hàm con bên trong thay đổi giá trị biến của hàm cha bên ngoài, ta dùng `nonlocal`.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_C_007",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "modules"
    ],
    "content": "Khi một module Python chạy trực tiếp dưới dạng một script độc lập (chạy từ terminal), biến đặc biệt `__name__` sẽ có giá trị là gì?",
    "options": [
      "A. Tên file của module đó (ví dụ `\"my_module\"`).",
      "B. `\"__main__\"`",
      "C. `\"root\"`",
      "D. `None`"
    ],
    "correct_option": "B",
    "explanation": "Khi file Python được thực thi trực tiếp, Python gán chuỗi `\"__main__\"` cho biến hệ thống `__name__`. Nếu file được import dưới dạng thư viện từ một file khác, `__name__` sẽ mang giá trị là tên của module (tên file bỏ đuôi .py). Điều này thường dùng để tạo điều kiện kiểm tra chạy thử: `if __name__ == '__main__':`.",
    "solution": "**Bước 1:** Tìm hiểu biến đặc biệt `__name__` trong Python.\n**Bước 2:** Khi chạy file trực tiếp, hệ thống gán nhãn `__main__` cho module chạy chính.\n**Bước 3:** Do đó giá trị là `\"__main__\"` (Đáp án B)."
  },
  {
    "id": "Q_MOD_C_008",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Trong Lập trình hướng đối tượng (OOP) của Python, phương thức đặc biệt `__init__` đóng vai trò gì?",
    "options": [
      "A. Giải phóng bộ nhớ của đối tượng khi nó bị hủy.",
      "B. Khởi tạo đối tượng (Constructor) dùng để gán giá trị ban đầu cho các thuộc tính khi đối tượng mới được tạo ra.",
      "C. Chuyển đổi đối tượng thành dạng chuỗi ký tự.",
      "D. Kích hoạt lớp để kế thừa từ lớp khác."
    ],
    "correct_option": "B",
    "explanation": "Phương thức `__init__` được gọi tự động ngay sau khi một đối tượng mới được khởi tạo từ lớp. Nó hoạt động như một hàm tạo (Constructor) dùng để thiết lập các giá trị ban đầu cho các thuộc tính đối tượng.",
    "solution": "**Bước 1:** Nhận biết các phương thức ma thuật (dunder methods) trong OOP Python.\n**Bước 2:** `__init__` là phương thức khởi dựng lớp đối tượng, nhận tham số truyền vào khi gọi `ClassName()` và gán giá trị thuộc tính qua `self`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_C_009",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Tham số `self` xuất hiện ở tham số đầu tiên của các phương thức trong một lớp có ý nghĩa gì?",
    "options": [
      "A. Trỏ tới chính lớp (Class) chứa phương thức đó.",
      "B. Trỏ tới chính thực thể/đối tượng (Instance) cụ thể đang gọi phương thức.",
      "C. Là một từ khóa bắt buộc của hệ thống Python, không thể thay đổi tên.",
      "D. Dùng để gọi các hàm bên ngoài lớp."
    ],
    "correct_option": "B",
    "explanation": "`self` đại diện cho đối tượng cụ thể (instance) đang gọi phương thức đó, cho phép phương thức truy cập và sửa đổi các thuộc tính và phương thức khác của chính đối tượng đó. (Lưu ý: Tên gọi `self` là quy ước cộng đồng, bạn có thể đổi tên khác nhưng bắt buộc phải là tham số đầu tiên của phương thức thực thể).",
    "solution": "**Bước 1:** Khi một đối tượng gọi phương thức `obj.method()`, Python tự động dịch thành `Class.method(obj)`.\n**Bước 2:** Tham số đầu tiên chính là đối tượng đang gọi phương thức đó, được đại diện bởi `self`.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_C_010",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Đoạn code sau đây định nghĩa thuộc tính lớp (class attribute) và thuộc tính đối tượng (instance attribute). Kết quả in ra là gì?\n```python\nclass Dog:\n    species = \"Canine\"  # Class attribute\n\n    def __init__(self, name):\n        self.name = name  # Instance attribute\n\nd1 = Dog(\"Buddy\")\nd2 = Dog(\"Lucy\")\nprint(d1.species, d2.name)\n```",
    "options": [
      "A. `Canine Buddy`",
      "B. `Canine Lucy`",
      "C. `Canine Canine`",
      "D. Báo lỗi vì species không thuộc Buddy"
    ],
    "correct_option": "B",
    "explanation": "Thuộc tính lớp `species` được chia sẻ chung bởi tất cả thực thể của lớp `Dog`. Do đó, cả `d1.species` và `d2.species` đều trả về `\"Canine\"`. Thuộc tính thực thể `name` là riêng biệt của từng thực thể, `d2.name` là `\"Lucy\"`.",
    "solution": "**Bước 1:** Phân tích sự khác biệt giữa Class Attribute và Instance Attribute:\n- `species` được khai báo trong thân Class nhưng ngoài các phương thức -> chia sẻ chung giữa các đối tượng.\n- `self.name` được khai báo trong `__init__` gắn với `self` -> thuộc tính riêng biệt của từng thực thể.\n**Bước 2:** `d1.species` là `'Canine'`, `d2.name` là `'Lucy'`.\n**Bước 3:** Kết quả in ra là `'Canine Lucy'`. Chọn B."
  },
  {
    "id": "Q_MOD_C_011",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Đoạn code sau đây thực hiện sửa đổi một thuộc tính lớp (class attribute). Kết quả in ra là gì?\n```python\nclass Test:\n    count = 0\n\nt1 = Test()\nt2 = Test()\nTest.count = 5\nprint(t1.count, t2.count)\n```",
    "options": [
      "A. `0 0`",
      "B. `5 5`",
      "C. `5 0`",
      "D. Báo lỗi"
    ],
    "correct_option": "B",
    "explanation": "Khi thay đổi thuộc tính lớp trực tiếp thông qua tên lớp (`Test.count = 5`), sự thay đổi này áp dụng lên thuộc tính chung và tất cả các thực thể chưa ghi đè thuộc tính này đều sẽ phản ánh giá trị mới. Do đó `t1.count` và `t2.count` đều có giá trị `5`.",
    "solution": "**Bước 1:** Thuộc tính lớp `count` ban đầu có giá trị bằng `0`.\n**Bước 2:** `Test.count = 5` thay đổi giá trị thuộc tính lớp dùng chung này trên vùng nhớ lớp.\n**Bước 3:** Cả `t1` và `t2` không tự tạo thuộc tính thực thể `count` của riêng chúng, nên chúng tiếp tục tham chiếu đến thuộc tính chung của lớp Test. In ra `5 5`. Chọn B."
  },
  {
    "id": "Q_MOD_C_012",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Cú pháp nào sau đây thể hiện lớp `Dog` kế thừa từ lớp `Animal` trong Python?",
    "options": [
      "A. `class Dog inherit Animal:`",
      "B. `class Dog(Animal):`",
      "C. `class Dog extends Animal:`",
      "D. `class Dog implements Animal:`"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, tính kế thừa được biểu diễn đơn giản bằng cách đặt tên lớp cha bên trong dấu ngoặc đơn `()` ngay sau tên lớp con khi khai báo.",
    "solution": "**Bước 1:** Kiểm tra cú pháp kế thừa trong Python.\n**Bước 2:** Không sử dụng các từ khóa `extends`, `implements`, hay `inherit` giống các ngôn ngữ khác.\n**Bước 3:** Cú pháp chuẩn là `class Dog(Animal):`. Chọn B."
  },
  {
    "id": "Q_MOD_C_013",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Để gọi phương thức khởi tạo của lớp cha từ bên trong phương thức khởi tạo của lớp con, ta sử dụng hàm nào sau đây?",
    "options": [
      "A. `super().__init__()`",
      "B. `parent().__init__()`",
      "C. `base().__init__()`",
      "D. `self.parent.__init__()`"
    ],
    "correct_option": "A",
    "explanation": "Hàm built-in `super()` trả về một đối tượng proxy cho phép gọi các phương thức của lớp cha, phổ biến nhất là `super().__init__()` để chạy constructor của lớp cha từ lớp con.",
    "solution": "**Bước 1:** Xác định từ khóa để gọi phương thức lớp cha.\n**Bước 2:** Python sử dụng hàm `super()` để ủy quyền cho lớp cha.\n**Bước 3:** Constructor lớp cha được gọi qua `super().__init__()`. Chọn A."
  },
  {
    "id": "Q_MOD_C_014",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "encapsulation"
    ],
    "content": "Quy ước đặt tên biến bắt đầu bằng một dấu gạch dưới (ví dụ `_status`) trong một lớp Python có ý nghĩa gì?",
    "options": [
      "A. Biến đó là biến cục bộ chỉ dùng trong constructor.",
      "B. Biến đó được coi là thuộc tính được bảo vệ (protected), chỉ báo hiệu cho các lập trình viên khác biết đây là thuộc tính nội bộ và không nên truy cập trực tiếp từ bên ngoài lớp.",
      "C. Trình thông dịch Python sẽ khóa hoàn toàn không cho phép truy cập biến này từ bên ngoài.",
      "D. Biến đó bắt buộc phải có kiểu dữ liệu là số nguyên."
    ],
    "correct_option": "B",
    "explanation": "Python không có cơ chế khóa truy cập cứng (như từ khóa private/protected của C++ hay Java). Việc sử dụng một dấu gạch dưới chỉ mang tính chất quy ước (convention) báo hiệu đây là thuộc tính protected, các đoạn code bên ngoài nên tôn trọng và tránh thay đổi nó trực tiếp.",
    "solution": "**Bước 1:** Nhớ lại tính chất đóng gói của Python.\n**Bước 2:** Một dấu gạch dưới `_` chỉ là quy ước gợi ý bảo vệ (protected), hệ thống không ngăn cấm truy cập vật lý.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_C_015",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "encapsulation"
    ],
    "content": "Khi bạn đặt tên cho một thuộc tính lớp bắt đầu bằng **hai** dấu gạch dưới và không kết thúc bằng gạch dưới (ví dụ `__value`), điều gì xảy ra?",
    "options": [
      "A. Python báo lỗi cú pháp (SyntaxError).",
      "B. Trình thông dịch Python sẽ thực hiện cơ chế đổi tên thuộc tính (name mangling) thành `_ClassName__value` để tránh xung đột tên và ngăn cản việc truy cập trực tiếp bằng tên gốc từ bên ngoài.",
      "C. Thuộc tính tự động chuyển sang kiểu dữ liệu hằng số.",
      "D. Thuộc tính đó sẽ bị xóa sau khi constructor kết thúc."
    ],
    "correct_option": "B",
    "explanation": "Hai dấu gạch dưới kích hoạt tính năng đổi tên (name mangling). Python âm thầm đổi tên biến `__value` của lớp `MyClass` thành `_MyClass__value`. Nhờ vậy, nếu cố gắng gọi `obj.__value` từ bên ngoài, chương trình sẽ báo lỗi `AttributeError` vì thuộc tính mang tên đó không còn tồn tại.",
    "solution": "**Bước 1:** Hai dấu gạch dưới ở đầu (`__attr`) kích hoạt tính năng name mangling.\n**Bước 2:** Tên biến được biên dịch nội bộ thành `_ClassName__attr`.\n**Bước 3:** Việc này giúp bảo vệ biến chống ghi đè vô ý ở các lớp con. Chọn B."
  },
  {
    "id": "Q_MOD_C_016",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "methods"
    ],
    "content": "Sự khác biệt chính giữa `@classmethod` và `@staticmethod` trong một lớp Python là gì?",
    "options": [
      "A. `@classmethod` nhận tham số đầu tiên trỏ đến lớp (`cls`), trong khi `@staticmethod` không nhận bất kỳ tham số mặc định nào của lớp hay đối tượng.",
      "B. `@classmethod` chỉ dùng cho các phương thức toán học, `@staticmethod` dùng cho hiển thị dữ liệu.",
      "C. `@classmethod` có thể gọi từ bên ngoài lớp, `@staticmethod` thì không.",
      "D. Không có sự khác biệt, hai decorator này hoàn toàn như nhau."
    ],
    "correct_option": "A",
    "explanation": "Phương thức lớp `@classmethod` liên kết với lớp và nhận tham số đầu tiên đại diện cho chính lớp đó (thường đặt tên là `cls`). Phương thức tĩnh `@staticmethod` hoạt động giống một hàm thông thường nhưng được đặt trong không gian tên lớp vì lý do logic, nó không nhận `self` hay `cls`.",
    "solution": "**Bước 1:** Phân tích định nghĩa phương thức lớp và phương thức tĩnh:\n- Class method: nhận `cls` làm tham số đầu tiên, có quyền sửa đổi Class State.\n- Static method: không nhận tham số đặc biệt nào cả, độc lập với Class/Instance State.\n**Bước 2:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_C_017",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức ma thuật (dunder method) nào dùng để quy định giá trị trả về khi ta gọi hàm ép kiểu chuỗi `str(obj)` hoặc hàm hiển thị `print(obj)` đối với một đối tượng tự định nghĩa?",
    "options": [
      "A. `__repr__`",
      "B. `__str__`",
      "C. `__to_str__`",
      "D. `__string__`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `__str__` được thiết kế để trả về chuỗi ký tự thân thiện, dễ đọc cho người dùng cuối (informal/readable string representation), và nó được ưu tiên gọi bởi `str()` và `print()`.",
    "solution": "**Bước 1:** Ép kiểu sang chuỗi `str()` gọi dunder method nào?\n**Bước 2:** Python định nghĩa phương thức `__str__(self)` cho mục đích hiển thị trực quan thông tin đối tượng.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_C_018",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Quy ước viết tắt 'dunder' dùng để chỉ loại phương thức nào trong Python?",
    "options": [
      "A. Phương thức chạy bất đồng bộ.",
      "B. Phương thức được định nghĩa bằng C++ trong nhân Python.",
      "C. Phương thức đặc biệt bắt đầu và kết thúc bằng hai dấu gạch dưới (Double Underline).",
      "D. Các phương thức bị lỗi thời cần thay thế."
    ],
    "correct_option": "C",
    "explanation": "'dunder' là từ ghép viết tắt của **D**ouble **Under**score (hai dấu gạch dưới), ám chỉ các phương thức đặc biệt trong Python như `__init__`, `__str__`, `__len__`, v.v.",
    "solution": "**Bước 1:** Phân tích thuật ngữ 'dunder'.\n**Bước 2:** D = Double, Under = Underline / Underscore.\n**Bước 3:** Trỏ trực tiếp đến các hàm bắt đầu và kết thúc bằng `__`. Chọn C."
  },
  {
    "id": "Q_MOD_C_019",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Khi bạn thực hiện phép so sánh `obj1 == obj2`, Python sẽ âm thầm gọi phương thức ma thuật nào được định nghĩa trong lớp của đối tượng?",
    "options": [
      "A. `__cmp__`",
      "B. `__eq__`",
      "C. `__compare__`",
      "D. `__equal__`"
    ],
    "correct_option": "B",
    "explanation": "Phép so sánh bằng `==` tương ứng với dunder method `__eq__` (viết tắt của **eq**ual). Lớp của đối tượng có thể ghi đè phương thức này để tự định nghĩa cơ chế so sánh bằng nhau của các thuộc tính.",
    "solution": "**Bước 1:** So sánh bằng `==` trong Python thực chất là một lời gọi phương thức ma thuật.\n**Bước 2:** Phương thức tương ứng là `__eq__(self, other)`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_C_020",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Nếu bạn muốn đối tượng tự định nghĩa của mình có thể phản hồi lại khi gọi hàm kiểm tra độ dài `len(obj)`, lớp của bạn bắt buộc phải ghi đè phương thức nào?",
    "options": [
      "A. `__size__`",
      "B. `__length__`",
      "C. `__len__`",
      "D. `__count__`"
    ],
    "correct_option": "C",
    "explanation": "Hàm built-in `len(obj)` sẽ kích hoạt lời gọi phương thức `obj.__len__()`. Phương thức này bắt buộc phải trả về một số nguyên không âm.",
    "solution": "**Bước 1:** Hàm `len()` gọi phương thức dunder nào?\n**Bước 2:** Phương thức ma thuật tương ứng là `__len__(self)`.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_C_021",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Toán tử cộng `+` giữa hai đối tượng tự định nghĩa (ví dụ `obj1 + obj2`) được định nghĩa logic bằng phương thức ma thuật nào?",
    "options": [
      "A. `__plus__`",
      "B. `__add__`",
      "C. `__sum__`",
      "D. `__concat__`"
    ],
    "correct_option": "B",
    "explanation": "Để thực hiện nạp chồng toán tử cộng `+`, lớp của đối tượng phải triển khai phương thức `__add__(self, other)`. Khi thực thi `a + b`, Python sẽ gọi `a.__add__(b)`.",
    "solution": "**Bước 1:** Xác định dunder method ứng với toán tử `+`.\n**Bước 2:** Tên phương thức là `__add__(self, other)`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_C_022",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Trong đa kế thừa của Python, cơ chế nào quy định thứ tự tìm kiếm các phương thức khi các lớp cha trùng tên phương thức?",
    "options": [
      "A. FIFO (First In First Out)",
      "B. LIFO (Last In First Out)",
      "C. MRO (Method Resolution Order)",
      "D. Tìm kiếm ngẫu nhiên"
    ],
    "correct_option": "C",
    "explanation": "MRO (Method Resolution Order) là thứ tự giải quyết phương thức trong Python, sử dụng thuật toán C3 Linearization để xây dựng chuỗi ưu tiên tìm kiếm phương thức trên sơ đồ kế thừa dạng đồ thị.",
    "solution": "**Bước 1:** Tìm thuật ngữ dùng để chỉ thứ tự tìm kiếm phương thức kế thừa.\n**Bước 2:** Thuật ngữ đó là Method Resolution Order (MRO).\n**Bước 3:** Bạn có thể xem chuỗi này qua thuộc tính `Class.__mro__`. Chọn C."
  },
  {
    "id": "Q_MOD_C_023",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "methods"
    ],
    "content": "Phương thức nào dùng để tạo ra một thuộc tính chỉ đọc (read-only attribute) bằng cách biến một phương thức lớp thành một thuộc tính có thể truy cập không cần dấu ngoặc đơn `()`?",
    "options": [
      "A. `@classmethod`",
      "B. `@property`",
      "C. `@read_only`",
      "D. `@attribute`"
    ],
    "correct_option": "B",
    "explanation": "Decorator `@property` dùng để định nghĩa một getter method, biến phương thức đó thành một thuộc tính ảo giúp truy xuất giá trị bằng cú pháp `obj.name` thay vì `obj.name()`.",
    "solution": "**Bước 1:** Phân tích tính năng định nghĩa thuộc tính từ phương thức.\n**Bước 2:** Trình decorator `@property` cho phép biến phương thức thành thuộc tính chỉ đọc.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_C_024",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Hàm built-in nào dùng để kiểm tra xem một đối tượng có phải là một thực thể được tạo ra từ một lớp cụ thể nào đó hay không?",
    "options": [
      "A. `isinstance()`",
      "B. `issubclass()`",
      "C. `typeof()`",
      "D. `check_class()`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `isinstance(object, classinfo)` trả về `True` nếu đối tượng `object` là thực thể của lớp hoặc lớp con của lớp chỉ định trong `classinfo`.",
    "solution": "**Bước 1:** Tìm hàm kiểm tra thực thể lớp.\n- `isinstance(obj, Class)`: Kiểm tra đối tượng `obj` có thuộc lớp `Class` không.\n- `issubclass(Sub, Parent)`: Kiểm tra quan hệ kế thừa giữa hai lớp.\n**Bước 2:** Chọn A."
  },
  {
    "id": "Q_MOD_C_025",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "inheritance"
    ],
    "content": "Cho lớp `Parent` và lớp `Child(Parent)`. Hàm `issubclass(Child, Parent)` sẽ trả về giá trị là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. `None`",
      "D. Ném lỗi TypeError"
    ],
    "correct_option": "A",
    "explanation": "Hàm `issubclass(class1, class2)` kiểm tra xem lớp `class1` có phải là lớp con (kế thừa trực tiếp hoặc gián tiếp) của lớp `class2` hay không. Do `Child` kế thừa từ `Parent`, kết quả trả về là `True`.",
    "solution": "**Bước 1:** Nhận biết hàm `issubclass()` dùng để kiểm tra quan hệ kế thừa giữa các lớp lớp học.\n**Bước 2:** `Child` được khai báo kế thừa từ `Parent`.\n**Bước 3:** Kết quả trả về chắc chắn là `True`. Chọn A."
  },
  {
    "id": "Q_MOD_C_026",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions"
    ],
    "content": "Đoạn code sau đây thực hiện gán hàm cho biến. Kết quả in ra là gì?\n```python\ndef greet(name):\n    return f\"Hello {name}\"\n\nsay_hi = greet\nprint(say_hi(\"Alice\"))\n```",
    "options": [
      "A. Báo lỗi vì greet là một hàm, không thể gán trực tiếp cho biến say_hi.",
      "B. `Hello Alice`",
      "C. `<function greet at ...>`",
      "D. `greet Alice`"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, hàm được coi là đối tượng hạng nhất (first-class citizens). Bạn có thể gán hàm cho một biến, truyền hàm làm tham số hoặc trả về một hàm từ hàm khác. Biến `say_hi` trỏ đến cùng khối code của hàm `greet` và có thể được gọi thông qua dấu ngoặc đơn.",
    "solution": "**Bước 1:** Tìm hiểu tính chất 'First-class function' của Python.\n**Bước 2:** Gán tên hàm `say_hi = greet` chuyển tham chiếu hàm sang `say_hi`.\n**Bước 3:** Lời gọi `say_hi(\"Alice\")` chạy hàm gốc và trả về `'Hello Alice'`. Chọn B."
  },
  {
    "id": "Q_MOD_C_027",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "recursion"
    ],
    "content": "Hàm đệ quy tính giai thừa sau đây bị thiếu điều kiện dừng. Điều gì xảy ra khi gọi `factorial(5)`?\n```python\ndef factorial(n):\n    return n * factorial(n - 1)\n```",
    "options": [
      "A. Chương trình chạy bình thường và trả về 120.",
      "B. Chương trình chạy mãi mãi cho đến khi hết dung lượng đĩa cứng.",
      "C. Phát sinh lỗi `RecursionError: maximum recursion depth exceeded`.",
      "D. Trả về `None`."
    ],
    "correct_option": "C",
    "explanation": "Đệ quy không có điều kiện dừng sẽ tạo ra các lời gọi hàm lồng nhau vô tận. Để ngăn chặn tràn ngăn xếp bộ nhớ (stack overflow), Python quy định một giới hạn đệ quy tối đa (mặc định khoảng 1000 lần). Khi vượt quá giới hạn này, Python ném ra lỗi `RecursionError`.",
    "solution": "**Bước 1:** Đệ quy cần hai yếu tố cốt lõi: Công thức đệ quy và Điều kiện dừng.\n**Bước 2:** Hàm này thiếu điều kiện dừng (như `if n == 1: return 1`). Lời gọi hàm sẽ tiến về số âm vô hạn.\n**Bước 3:** Trình thông dịch ném ra lỗi `RecursionError` để bảo vệ bộ nhớ ngăn xếp. Chọn C."
  },
  {
    "id": "Q_MOD_C_028",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop",
      "dunder"
    ],
    "content": "Phương thức dunder `__repr__` được thiết kế nhằm mục đích chính nào sau đây?",
    "options": [
      "A. Chuyển đổi đối tượng thành dạng đồ họa UI.",
      "B. Trả về một chuỗi biểu diễn rõ ràng, chi tiết, không mập mờ của đối tượng (thường có dạng giống như câu lệnh khởi tạo đối tượng) phục vụ việc debug và ghi log cho lập trình viên.",
      "C. Đóng file và kết nối mạng tự động.",
      "D. Mã hóa bảo mật đối tượng."
    ],
    "correct_option": "B",
    "explanation": "`__repr__` (viết tắt của **repr**esentation) trả về chuỗi mô tả kỹ thuật giúp lập trình viên hiểu rõ cấu trúc đối tượng khi lập trình hoặc gỡ lỗi, lý tưởng nhất là `eval(repr(obj)) == obj`.",
    "solution": "**Bước 1:** So sánh `__str__` vs `__repr__`:\n- `__str__`: Thân thiện với người dùng (Readable).\n- `__repr__`: Rõ ràng về mặt kỹ thuật cho dev (Unambiguous / Debugging).\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_C_029",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "functions",
      "namespaces"
    ],
    "content": "Quy tắc LEGB viết tắt của các từ nào để chỉ thứ tự tìm kiếm biến của Python?",
    "options": [
      "A. List, Element, Group, Byte",
      "B. Local, Enclosing, Global, Built-in",
      "C. Loop, Exception, Generator, Boolean",
      "D. Level, Environment, Garbage, Block"
    ],
    "correct_option": "B",
    "explanation": "Quy tắc LEGB chỉ thứ tự tìm kiếm định danh (biến): Cục bộ (Local) -> Hàm bao ngoài (Enclosing) -> Toàn cục (Global) -> Hệ thống dựng sẵn (Built-in).",
    "solution": "**Bước 1:** Tìm hiểu cách giải quyết định danh (Name Resolution) trong Python.\n**Bước 2:** Thứ tự tìm kiếm từ hẹp đến rộng: Local -> Enclosing -> Global -> Built-in.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_C_030",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "oop"
    ],
    "content": "Để kiểm tra xem một thuộc tính có tồn tại trong đối tượng hay không mà không gây lỗi, ta sử dụng hàm nào?",
    "options": [
      "A. `hasattr(object, name)`",
      "B. `getattr(object, name)`",
      "C. `setattr(object, name, value)`",
      "D. `checkattr(object, name)`"
    ],
    "correct_option": "A",
    "explanation": "Hàm `hasattr(object, name)` nhận vào đối tượng và tên thuộc tính (dưới dạng chuỗi), trả về `True` nếu thuộc tính tồn tại và `False` nếu ngược lại.",
    "solution": "**Bước 1:** Phân tích các hàm thao tác thuộc tính động (reflection):\n- `hasattr()`: Kiểm tra sự tồn tại (Trả về Boolean).\n- `getattr()`: Lấy giá trị thuộc tính.\n- `setattr()`: Thiết lập thuộc tính.\n**Bước 2:** Để kiểm tra an toàn, ta dùng `hasattr()`. Chọn A."
  }
];
