const QUESTIONS_B = [
  {
    "id": "Q_MOD_B_001",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "conditionals"
    ],
    "content": "Đoạn code sau đây sẽ in ra màn hình từ nào?\n```python\nx = 15\nif x % 3 == 0 and x % 5 == 0:\n    print(\"FizzBuzz\")\nelif x % 3 == 0:\n    print(\"Fizz\")\nelif x % 5 == 0:\n    print(\"Buzz\")\nelse:\n    print(x)\n```",
    "options": [
      "A. `Fizz`",
      "B. `Buzz`",
      "C. `FizzBuzz`",
      "D. `15`"
    ],
    "correct_option": "C",
    "explanation": "Giá trị `x = 15` chia hết cho cả 3 và 5. Biểu thức điều kiện trong khối `if` đầu tiên: `x % 3 == 0 and x % 5 == 0` trả về `True`, do đó lệnh `print(\"FizzBuzz\")` được thực thi và toàn bộ các nhánh `elif` và `else` phía sau bị bỏ qua.",
    "solution": "**Bước 1:** Đánh giá nhánh đầu tiên: `x % 3 == 0` (15 % 3 == 0) là True và `x % 5 == 0` (15 % 5 == 0) là True.\n**Bước 2:** Phép `and` giữa hai giá trị True cho kết quả True.\n**Bước 3:** Khối code của `if` được chọn, in ra `'FizzBuzz'`. Chọn đáp án C."
  },
  {
    "id": "Q_MOD_B_002",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Giá trị cuối cùng của biến `total` sau khi thực hiện đoạn mã dưới đây là bao nhiêu?\n```python\ntotal = 0\nfor i in range(5):\n    total += i\nprint(total)\n```",
    "options": [
      "A. 15",
      "B. 10",
      "C. 5",
      "D. 0"
    ],
    "correct_option": "B",
    "explanation": "Hàm `range(5)` tạo ra một chuỗi số nguyên bắt đầu từ 0 đến 4 (gồm 0, 1, 2, 3, 4). Vòng lặp cộng dồn các giá trị này vào biến `total`: $0 + 1 + 2 + 3 + 4 = 10$.",
    "solution": "**Bước 1:** Xác định các giá trị của biến lặp `i`: 0, 1, 2, 3, 4.\n**Bước 2:** Thực hiện cộng dồn từng bước vào `total`:\n- Lần 1: total = 0 + 0 = 0\n- Lần 2: total = 0 + 1 = 1\n- Lần 3: total = 1 + 2 = 3\n- Lần 4: total = 3 + 3 = 6\n- Lần 5: total = 6 + 4 = 10\n**Bước 3:** Kết quả cuối cùng là 10. Chọn B."
  },
  {
    "id": "Q_MOD_B_003",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Đoạn code sau đây sẽ tạo ra một danh sách chứa những số nào?\n```python\nnums = list(range(1, 10, 2))\nprint(nums)\n```",
    "options": [
      "A. `[1, 3, 5, 7, 9]`",
      "B. `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`",
      "C. `[1, 3, 5, 7]`",
      "D. `[1, 2, 3, 4, 5, 6, 7, 8, 9]`"
    ],
    "correct_option": "A",
    "explanation": "Cú pháp `range(start, stop, step)` tạo ra dãy số bắt đầu từ `start` (ở đây là 1), tăng thêm lượng bằng `step` (ở đây là 2) ở mỗi bước, và dừng lại trước khi chạm tới hoặc vượt quá `stop` (ở đây là 10). Các giá trị tạo ra là 1, 3, 5, 7, 9. Ép kiểu sang list sẽ cho ra `[1, 3, 5, 7, 9]`.",
    "solution": "**Bước 1:** Phân tích tham số của `range(1, 10, 2)`:\n- `start` = 1 (bao gồm số này)\n- `stop` = 10 (không bao gồm số này)\n- `step` = 2 (khoảng cách giữa các số liên tiếp)\n**Bước 2:** Bắt đầu từ 1, cộng thêm 2: 1, 3, 5, 7, 9. Số tiếp theo là 11 (lớn hơn cận 10 nên dừng lại).\n**Bước 3:** Chuyển sang dạng danh sách thu được `[1, 3, 5, 7, 9]`. Chọn đáp án A."
  },
  {
    "id": "Q_MOD_B_004",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Vòng lặp `while` sau sẽ chạy bao nhiêu lần?\n```python\ni = 1\nwhile i < 10:\n    print(i)\n    i *= 2\n```",
    "options": [
      "A. 10 lần",
      "B. 4 lần",
      "C. 3 lần",
      "D. Vòng lặp vô hạn"
    ],
    "correct_option": "B",
    "explanation": "Các giá trị của `i` qua từng vòng lặp là: `i=1` (đúng), `i=2` (đúng), `i=4` (đúng), `i=8` (đúng), và dừng lại khi `i=16` (16 < 10: Sai). Vòng lặp thực hiện 4 lần.",
    "solution": "**Bước 1:** Theo dõi `i`: 1, 2, 4, 8. Khi `i` nhân 2 thành 16, điều kiện `i < 10` sai.\n**Bước 2:** Số lần thực hiện là 4. Chọn B."
  },
  {
    "id": "Q_MOD_B_005",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow"
    ],
    "content": "Từ khóa nào dùng để thoát khỏi vòng lặp chứa nó ngay lập tức?",
    "options": [
      "A. `continue`",
      "B. `break`",
      "C. `pass`",
      "D. `exit`"
    ],
    "correct_option": "B",
    "explanation": "`break` dùng để kết thúc sớm vòng lặp ngay lập tức.",
    "solution": "**Bước 1:** Phân biệt các lệnh điều khiển lặp. `break` dùng để thoát vòng lặp. Chọn B."
  },
  {
    "id": "Q_MOD_B_006",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Từ khóa `continue` có tác dụng gì trong vòng lặp?",
    "options": [
      "A. Thoát khỏi vòng lặp hoàn toàn.",
      "B. Bỏ qua phần code còn lại trong lượt lặp hiện tại và chuyển ngay sang lượt lặp tiếp theo.",
      "C. Lặp lại khối lệnh hiện tại vô hạn.",
      "D. Không làm gì cả."
    ],
    "correct_option": "B",
    "explanation": "`continue` ngắt lượt lặp hiện tại để chuyển sang lượt lặp tiếp theo.",
    "solution": "**Bước 1:** Hiểu cơ chế của `continue`. Chọn B."
  },
  {
    "id": "Q_MOD_B_007",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Đoạn code sau đây sẽ hiển thị kết quả gì?\n```python\nfor i in range(3):\n    if i == 1:\n        break\nelse:\n    print(\"Done\")\n```",
    "options": [
      "A. Không hiển thị gì.",
      "B. `Done`",
      "C. `Done` hiển thị 3 lần.",
      "D. Lỗi cú pháp."
    ],
    "correct_option": "A",
    "explanation": "Khối `else` của vòng lặp `for` chỉ thực thi khi vòng lặp hoàn thành tự nhiên và không bị ngắt bởi `break`. Ở đây vòng lặp bị ngắt khi `i == 1`, nên `else` không được thực thi.",
    "solution": "**Bước 1:** Vòng lặp gặp `break` khi `i = 1`.\n**Bước 2:** Vì bị break, khối `else` không chạy.\n**Bước 3:** Không có kết quả nào in ra. Chọn A."
  },
  {
    "id": "Q_MOD_B_008",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [10, 20, 30, 40, 50]`. Phần tử `lst[-2]` sẽ có giá trị là bao nhiêu?",
    "options": [
      "A. 10",
      "B. 40",
      "C. 20",
      "D. Lỗi IndexError"
    ],
    "correct_option": "B",
    "explanation": "Chỉ số âm đếm ngược từ cuối danh sách. `-1` là `50`, `-2` là `40`.",
    "solution": "**Bước 1:** Đếm ngược từ cuối danh sách. Chọn B."
  },
  {
    "id": "Q_MOD_B_009",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Sự khác biệt giữa `append()` và `extend()` của đối tượng List là gì?",
    "options": [
      "A. `append()` thêm vào đầu, `extend()` thêm vào cuối.",
      "B. `append()` thêm toàn bộ đối tượng truyền vào dưới dạng một phần tử duy nhất, trong khi `extend()` giải nén đối tượng lặp rồi nối từng phần tử của nó vào danh sách.",
      "C. Không có sự khác biệt.",
      "D. `append()` chỉ dùng cho số, `extend()` chỉ dùng cho chuỗi."
    ],
    "correct_option": "B",
    "explanation": "`append(x)` thêm `x` thành một phần tử duy nhất ở cuối list. `extend(iterable)` duyệt và thêm từng phần tử của `iterable` vào cuối list.",
    "solution": "**Bước 1:** Xem xét tác dụng của `append` và `extend`. Chọn B."
  },
  {
    "id": "Q_MOD_B_010",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [1, 2, 3]`. Lệnh `val = lst.pop(0)` trả về giá trị gì và `lst` còn lại gì?",
    "options": [
      "A. `val = 1`, `lst = [2, 3]`",
      "B. `val = 3`, `lst = [1, 2]`",
      "C. `val = 1`, `lst = [1, 2, 3]`",
      "D. Lỗi IndexError"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `pop(index)` loại bỏ và trả về phần tử tại vị trí `index`. Vị trí 0 là số `1`, list còn lại `[2, 3]`.",
    "solution": "**Bước 1:** `pop(0)` lấy phần tử đầu tiên ra. Chọn A."
  },
  {
    "id": "Q_MOD_B_011",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Sự khác nhau giữa `lst.sort()` và `sorted(lst)` là gì?",
    "options": [
      "A. `lst.sort()` sắp xếp tại chỗ (in-place) và sửa trực tiếp danh sách ban đầu, còn `sorted(lst)` trả về một danh sách mới đã sắp xếp mà không thay đổi danh sách gốc.",
      "B. Không có sự khác nhau.",
      "C. `lst.sort()` trả về danh sách đã sắp xếp, `sorted(lst)` trả về None.",
      "D. `lst.sort()` chỉ dùng cho chuỗi."
    ],
    "correct_option": "A",
    "explanation": "`sort()` là phương thức sửa đổi tại chỗ đối tượng list hiện tại và trả về `None`. `sorted()` là hàm built-in tạo bản sao mới đã sắp xếp.",
    "solution": "**Bước 1:** Phân biệt sửa đổi tại chỗ (in-place) và tạo bản sao. Chọn A."
  },
  {
    "id": "Q_MOD_B_012",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "tuples"
    ],
    "content": "Đặc tính cốt lõi nào của Tuple phân biệt nó với List?",
    "options": [
      "A. Tuple có độ dài linh hoạt hơn.",
      "B. Tuple là cấu trúc dữ liệu không thể thay đổi sau khi tạo (immutable).",
      "C. Tuple chỉ chứa được một kiểu dữ liệu duy nhất.",
      "D. Tuple truy xuất chậm hơn List."
    ],
    "correct_option": "B",
    "explanation": "Tuple là kiểu dữ liệu bất biến (immutable), tức là không thể thêm, sửa, hay xóa phần tử sau khi đã tạo lập.",
    "solution": "**Bước 1:** Tuple là bất biến (immutable). Chọn B."
  },
  {
    "id": "Q_MOD_B_013",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "tuples"
    ],
    "content": "Khai báo nào tạo ra một Tuple có duy nhất một phần tử?",
    "options": [
      "A. `t = (5)`",
      "B. `t = (5,)`",
      "C. `t = [5]`",
      "D. `t = tuple(5)`"
    ],
    "correct_option": "B",
    "explanation": "Phải có dấu phẩy để Python nhận diện đó là Tuple 1 phần tử: `(5,)`.",
    "solution": "**Bước 1:** Dấu phẩy ở cuối là bắt buộc đối với tuple đơn phần tử. Chọn B."
  },
  {
    "id": "Q_MOD_B_014",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Đối tượng nào sau đây **không thể** dùng làm khóa (key) của Dictionary?",
    "options": [
      "A. Chuỗi (`\"id\"`)",
      "B. Số nguyên (`10`)",
      "C. Danh sách (`[1, 2]`)",
      "D. Tuple (`(1, 2)`)"
    ],
    "correct_option": "C",
    "explanation": "Chỉ các đối tượng bất biến (immutable) và có thể băm (hashable) mới được phép làm khóa của từ điển. Danh sách (`list`) là kiểu dữ liệu thay đổi được (mutable) nên không dùng làm khóa được.",
    "solution": "**Bước 1:** Khóa từ điển phải hashable (immutable). List là mutable nên không thể băm. Chọn C."
  },
  {
    "id": "Q_MOD_B_015",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Cho từ điển `d = {\"a\": 1}`. Lệnh `d.get(\"b\", 0)` trả về giá trị nào?",
    "options": [
      "A. Gây lỗi KeyError vì khóa 'b' không tồn tại.",
      "B. Trả về `0`.",
      "C. Trả về `None`.",
      "D. Trả về `1`."
    ],
    "correct_option": "B",
    "explanation": "Hàm `.get(key, default)` tìm khóa `key`. Nếu không tìm thấy, nó sẽ trả về giá trị mặc định được cung cấp (ở đây là `0`) mà không ném lỗi.",
    "solution": "**Bước 1:** `.get()` an toàn không ném lỗi khi thiếu khóa, trả về giá trị mặc định. Chọn B."
  },
  {
    "id": "Q_MOD_B_016",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Để lấy danh sách các cặp khóa-giá trị dưới dạng các tuple từ từ điển, ta dùng phương thức nào?",
    "options": [
      "A. `keys()`",
      "B. `values()`",
      "C. `items()`",
      "D. `lists()`"
    ],
    "correct_option": "C",
    "explanation": "`items()` trả về tập hợp các tuple dạng `(key, value)`.",
    "solution": "**Bước 1:** `items()` dùng để duyệt qua cả key và value của dict. Chọn C."
  },
  {
    "id": "Q_MOD_B_017",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Giá trị của tập hợp `s = set([1, 2, 2, 3, 3])` là gì?",
    "options": [
      "A. `{1, 2, 2, 3, 3}`",
      "B. `[1, 2, 3]`",
      "C. `{1, 2, 3}`",
      "D. `(1, 2, 3)`"
    ],
    "correct_option": "C",
    "explanation": "Tập hợp (`set`) tự động loại bỏ các phần tử trùng lặp, chỉ giữ lại các phần tử duy nhất đặt trong ngoặc nhọn `{}`.",
    "solution": "**Bước 1:** Chuyển đổi sang set loại bỏ phần tử lặp. Chọn C."
  },
  {
    "id": "Q_MOD_B_018",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Toán tử nào biểu diễn phép giao (phần tử chung) giữa hai tập hợp `s1 & s2`?",
    "options": [
      "A. `|`",
      "B. `&`",
      "C. `-`",
      "D. `^`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `&` đại diện cho phép giao (intersection), lấy các phần tử có mặt ở cả hai tập hợp.",
    "solution": "**Bước 1:** Xác định toán tử giao tập hợp là `&`. Chọn B."
  },
  {
    "id": "Q_MOD_B_019",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Toán tử `|` giữa hai tập hợp đại diện cho phép toán nào?",
    "options": [
      "A. Phép giao",
      "B. Phép hợp (Union)",
      "C. Phép hiệu",
      "D. Phép đối xứng"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `|` đại diện cho phép hợp (union), gom tất cả các phần tử của cả hai tập hợp lại làm một.",
    "solution": "**Bước 1:** `|` đại diện cho phép hợp. Chọn B."
  },
  {
    "id": "Q_MOD_B_020",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Sự khác biệt giữa `remove()` và `discard()` trong tập hợp là gì?",
    "options": [
      "A. `remove()` xóa dòng, `discard()` xóa cột.",
      "B. Nếu phần tử không tồn tại, `remove()` ném lỗi `KeyError`, còn `discard()` bỏ qua không báo lỗi.",
      "C. `discard()` trả về phần tử bị xóa, `remove()` không trả về gì.",
      "D. Không có sự khác biệt."
    ],
    "correct_option": "B",
    "explanation": "`remove(x)` sẽ sinh lỗi nếu tập hợp không có `x`, còn `discard(x)` chạy bình thường mà không gây lỗi.",
    "solution": "**Bước 1:** Phân tích tính an toàn của hai hàm xóa phần tử trong Set. Chọn B."
  },
  {
    "id": "Q_MOD_B_021",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Toán tử `in` kiểm tra sự tồn tại trên khóa hay giá trị của từ điển?",
    "options": [
      "A. Chỉ kiểm tra trên danh sách các khóa (keys).",
      "B. Chỉ kiểm tra trên danh sách các giá trị (values).",
      "C. Kiểm tra trên cả khóa và giá trị.",
      "D. Gây lỗi cú pháp."
    ],
    "correct_option": "A",
    "explanation": "`key in dict` mặc định thực hiện tìm kiếm trên danh sách các khóa của từ điển để tối ưu hóa thời gian chạy $O(1)$.",
    "solution": "**Bước 1:** `in` trên từ điển tìm kiếm trên các khóa. Chọn A."
  },
  {
    "id": "Q_MOD_B_022",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "copying"
    ],
    "content": "Đoạn code sau in ra kết quả gì?\n```python\nimport copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0][0] = 99\nprint(a[0][0])\n```",
    "options": [
      "A. 1",
      "B. 99",
      "C. Lỗi TypeError",
      "D. `[99, 2]`"
    ],
    "correct_option": "B",
    "explanation": "`copy.copy(a)` là sao chép nông (shallow copy). Danh sách ngoài được tạo mới độc lập, nhưng các danh sách con bên trong vẫn dùng chung tham chiếu trong bộ nhớ. Do đó sửa `b[0][0]` sẽ ảnh hưởng đến `a[0][0]`.",
    "solution": "**Bước 1:** Phân tích cơ chế sao chép nông trên cấu trúc lồng nhau. Chọn B."
  },
  {
    "id": "Q_MOD_B_023",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "copying"
    ],
    "content": "Hàm nào tạo ra bản sao sâu (deep copy) độc lập hoàn toàn cho cấu trúc dữ liệu phức tạp lồng nhau?",
    "options": [
      "A. `a.copy()`",
      "B. `copy.copy(a)`",
      "C. `copy.deepcopy(a)`",
      "D. `list(a)`"
    ],
    "correct_option": "C",
    "explanation": "`copy.deepcopy(a)` đệ quy tạo bản sao mới cho tất cả các đối tượng lồng nhau, ngắt hoàn toàn liên kết bộ nhớ với đối tượng gốc.",
    "solution": "**Bước 1:** Sử dụng `deepcopy` để sao chép sâu. Chọn C."
  },
  {
    "id": "Q_MOD_B_024",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Vòng lặp sau in ra kết quả gì?\n```python\nfor i in range(1, 4):\n    for j in range(1, 3):\n        if i == j:\n            print(f\"{i},{j}\")\n```",
    "options": [
      "A. `1,1` và `2,2` và `3,3`",
      "B. `1,1` và `2,2`",
      "C. `1,1`",
      "D. Không in gì"
    ],
    "correct_option": "B",
    "explanation": "`i` nhận giá trị 1, 2, 3. `j` nhận giá trị 1, 2. Cặp `i == j` thỏa mãn tại `(1,1)` và `(2,2)`.",
    "solution": "**Bước 1:** Liệt kê các tổ hợp lặp. Chọn B."
  },
  {
    "id": "Q_MOD_B_025",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow"
    ],
    "content": "Từ khóa `pass` dùng để làm gì?",
    "options": [
      "A. Bỏ qua lượt lặp hiện tại giống continue.",
      "B. Làm câu lệnh giữ chỗ rỗng (placeholder) để tránh lỗi cú pháp khi chưa viết nội dung cho khối lệnh.",
      "C. Thoát khỏi chương trình.",
      "D. Kiểm tra điều kiện logic."
    ],
    "correct_option": "B",
    "explanation": "`pass` là câu lệnh rỗng không làm gì, dùng làm vị trí giữ chỗ cho cú pháp hợp lệ.",
    "solution": "**Bước 1:** Xác định `pass` làm placeholder. Chọn B."
  },
  {
    "id": "Q_MOD_B_026",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [1, 2, 3, 2, 4, 2]`. Lệnh `lst.count(2)` trả về kết quả bao nhiêu?",
    "options": [
      "A. 1",
      "B. 3",
      "C. 6",
      "D. Lỗi"
    ],
    "correct_option": "B",
    "explanation": "`count(x)` đếm tần suất xuất hiện của giá trị `x` trong danh sách. Số `2` xuất hiện 3 lần.",
    "solution": "**Bước 1:** Đếm số lần số 2 xuất hiện trong danh sách. Chọn B."
  },
  {
    "id": "Q_MOD_B_027",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [10, 20, 30, 20, 40]`. Lệnh `lst.index(20)` trả về giá trị gì?",
    "options": [
      "A. 1",
      "B. 3",
      "C. `[1, 3]`",
      "D. Lỗi"
    ],
    "correct_option": "A",
    "explanation": "`index(x)` trả về chỉ số của vị trí xuất hiện đầu tiên của `x`. Vị trí đầu tiên của `20` là 1.",
    "solution": "**Bước 1:** Tìm vị trí đầu tiên của phần tử cần tra cứu. Chọn A."
  },
  {
    "id": "Q_MOD_B_028",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Đoạn cắt lát `lst = [0, 1, 2, 3, 4, 5]` với cú pháp `lst[1:5:2]` trả về kết quả gì?",
    "options": [
      "A. `[1, 3]`",
      "B. `[1, 3, 5]`",
      "C. `[1, 2, 3, 4]`",
      "D. `[2, 4]`"
    ],
    "correct_option": "A",
    "explanation": "Lấy từ chỉ số 1 đến chỉ số 4 (dừng trước 5) với bước nhảy 2. Chỉ số được lấy là 1 và 3, tương ứng giá trị `1` và `3`.",
    "solution": "**Bước 1:** Phân tích slice `[start:stop:step]`. Chọn A."
  },
  {
    "id": "Q_MOD_B_029",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Lệnh nào dùng để thêm một phần tử vào Set?",
    "options": [
      "A. `s.append(x)`",
      "B. `s.add(x)`",
      "C. `s.insert(x)`",
      "D. `s.push(x)`"
    ],
    "correct_option": "B",
    "explanation": "Set sử dụng phương thức `add()` để thêm phần tử mới.",
    "solution": "**Bước 1:** Dùng `add()` cho tập hợp. Chọn B."
  },
  {
    "id": "Q_MOD_B_030",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Lệnh nào xóa sạch tất cả các phần tử của từ điển `d` tại chỗ?",
    "options": [
      "A. `del d`",
      "B. `d.clear()`",
      "C. `d.remove_all()`",
      "D. `d = None`"
    ],
    "correct_option": "B",
    "explanation": "`clear()` làm rỗng từ điển tại chỗ và giữ lại đối tượng rỗng `{}`.",
    "solution": "**Bước 1:** Gọi `.clear()` để làm rỗng từ điển. Chọn B."
  },
  {
    "id": "Q_MOD_B_031",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "operators"
    ],
    "content": "Đoạn code sau đây sẽ hiển thị kết quả gì?\n```python\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n```",
    "options": [
      "A. `[1, 2, 3]`",
      "B. `[1, 2, 3, 4]`",
      "C. Lỗi AttributeError",
      "D. `[1, 2, 3, [4]]`"
    ],
    "correct_option": "B",
    "explanation": "Phép gán `b = a` không tạo ra bản sao mới mà chỉ tạo thêm một nhãn tham chiếu trỏ cùng đến một đối tượng danh sách trong bộ nhớ. Chỉnh sửa trên `b` thực chất là chỉnh sửa đối tượng dùng chung, do đó `a` cũng thay đổi.",
    "solution": "**Bước 1:** Phân tích phép gán đối tượng thay đổi được (mutable). Cả hai biến dùng chung địa chỉ RAM. Chọn B."
  },
  {
    "id": "Q_MOD_B_032",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "loops"
    ],
    "content": "Vòng lặp `for` sau chạy bao nhiêu lượt?\n```python\nfor i in range(10, 20, 3):\n    pass\n```",
    "options": [
      "A. 10 lượt",
      "B. 3 lượt",
      "C. 4 lượt",
      "D. 5 lượt"
    ],
    "correct_option": "C",
    "explanation": "Các giá trị biến `i` nhận là: 10, 13, 16, 19. Giá trị tiếp theo là 22 vượt mốc kết thúc 20. Tổng cộng 4 lượt lặp.",
    "solution": "**Bước 1:** Liệt kê các số sinh ra bởi `range(10, 20, 3)`: 10, 13, 16, 19. Số lần lặp là 4. Chọn C."
  },
  {
    "id": "Q_MOD_B_033",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Phương thức nào dùng để lấy ra danh sách tất cả các giá trị (values) trong một Dictionary?",
    "options": [
      "A. `keys()`",
      "B. `values()`",
      "C. `items()`",
      "D. `get_all()`"
    ],
    "correct_option": "B",
    "explanation": "`values()` trả về đối tượng dict_values chứa toàn bộ các giá trị của từ điển.",
    "solution": "**Bước 1:** Gọi `.values()` để trích xuất danh sách các value. Chọn B."
  },
  {
    "id": "Q_MOD_B_034",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Câu lệnh nào dùng để chèn một phần tử vào vị trí index cụ thể trong danh sách?",
    "options": [
      "A. `lst.add(index, element)`",
      "B. `lst.insert(index, element)`",
      "C. `lst.push(index, element)`",
      "D. `lst.append(index, element)`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.insert(index, element)` chèn phần tử `element` tại vị trí chỉ số `index` chỉ định.",
    "solution": "**Bước 1:** Muốn chèn vào chỉ mục cụ thể ta dùng `.insert()`. Chọn B."
  },
  {
    "id": "Q_MOD_B_035",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Kết quả của phép trừ tập hợp `{1, 2, 3} - {3, 4, 5}` là gì?",
    "options": [
      "A. `{1, 2}`",
      "B. `{1, 2, 4, 5}`",
      "C. `{}`",
      "D. `{4, 5}`"
    ],
    "correct_option": "A",
    "explanation": "Phép trừ tập hợp $A - B$ trả về tập hợp chứa các phần tử thuộc $A$ nhưng không thuộc $B$. Các số 1 và 2 chỉ thuộc tập thứ nhất.",
    "solution": "**Bước 1:** Loại bỏ khỏi tập thứ nhất các phần tử có mặt ở tập thứ hai (số 3). Còn lại `{1, 2}`. Chọn A."
  },
  {
    "id": "Q_MOD_B_036",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "loops"
    ],
    "content": "Câu lệnh `pass` trong vòng lặp có tác dụng gì?",
    "options": [
      "A. Dừng vòng lặp.",
      "B. Nhảy sang lượt lặp tiếp theo.",
      "C. Không làm gì cả, chỉ là một câu lệnh trống giữ chỗ cú pháp.",
      "D. Báo lỗi."
    ],
    "correct_option": "C",
    "explanation": "`pass` là câu lệnh rỗng không thực hiện bất kỳ hành động nào.",
    "solution": "**Bước 1:** `pass` đóng vai trò câu lệnh null. Chọn C."
  },
  {
    "id": "Q_MOD_B_037",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Đoạn code sau in ra kết quả gì?\n```python\nlst = [1, 2, 3]\nprint(lst * 2)\n```",
    "options": [
      "A. `[2, 4, 6]`",
      "B. `[1, 2, 3, 1, 2, 3]`",
      "C. Lỗi TypeError",
      "D. `[[1, 2, 3], [1, 2, 3]]`"
    ],
    "correct_option": "B",
    "explanation": "Khi nhân một danh sách với một số nguyên $N$, Python thực hiện phép lặp lại danh sách (list replication). Kết quả là danh sách cũ được nhân bản $N$ lần.",
    "solution": "**Bước 1:** Nhân danh sách với số nguyên tạo ra danh sách mới nhân bản các phần tử. Chọn B."
  },
  {
    "id": "Q_MOD_B_038",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "tuples"
    ],
    "content": "Nếu bạn khai báo một Tuple `t = (1, [2, 3])`, điều nào sau đây là **đúng**?",
    "options": [
      "A. Không thể sửa đổi danh sách con bên trong vì Tuple là bất biến.",
      "B. Có thể thực hiện lệnh `t[1].append(4)` và Tuple sẽ trở thành `(1, [2, 3, 4])`.",
      "C. Gây lỗi TypeError ngay khi khai báo vì Tuple không được chứa List.",
      "D. Mọi phần tử của Tuple đều chuyển thành bất biến."
    ],
    "correct_option": "B",
    "explanation": "Tuple chứa địa chỉ tham chiếu đến danh sách con. Mặc dù bản thân địa chỉ tham chiếu trong Tuple là bất biến (không thể trỏ sang đối tượng khác), nhưng đối tượng danh sách con đó là mutable nên vẫn chỉnh sửa nội dung bên trong được.",
    "solution": "**Bước 1:** Phân tích tính bất biến của Tuple đối với tham chiếu lồng nhau. Đối tượng List con thay đổi được bình thường. Chọn B."
  },
  {
    "id": "Q_MOD_B_039",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Cách xóa một cặp khóa-giá trị ra khỏi từ điển `d` theo khóa `'key'` là gì?",
    "options": [
      "A. `d.delete('key')`",
      "B. `del d['key']`",
      "C. `d.remove('key')`",
      "D. `d.discard('key')`"
    ],
    "correct_option": "B",
    "explanation": "Sử dụng từ khóa `del` đi kèm câu lệnh định vị khóa `del d[key]` để loại bỏ cặp phần tử khỏi từ điển.",
    "solution": "**Bước 1:** Lệnh xóa khóa từ điển chuẩn là `del d[key]`. Chọn B."
  },
  {
    "id": "Q_MOD_B_040",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "strings"
    ],
    "content": "Kết quả của phép so sánh chuỗi `\"apple\" < \"banana\"` là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. Gây lỗi TypeError",
      "D. Phụ thuộc vào độ dài chuỗi"
    ],
    "correct_option": "A",
    "explanation": "Python so sánh các chuỗi dựa trên thứ tự bảng chữ cái (lexicographical order) sử dụng mã Unicode của ký tự. Vì chữ 'a' đứng trước chữ 'b' nên mã Unicode của 'a' nhỏ hơn 'b', kết quả so sánh là `True`.",
    "solution": "**Bước 1:** So sánh thứ tự bảng chữ cái. 'apple' xuất hiện trước 'banana' nên nhỏ hơn. Chọn A."
  },
  {
    "id": "Q_MOD_B_041",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Để kiểm tra xem tập hợp `a` có phải là tập con (subset) của tập hợp `b` hay không, ta sử dụng phương thức nào?",
    "options": [
      "A. `a.is_subset(b)`",
      "B. `a.issubset(b)`",
      "C. `a.contains(b)`",
      "D. `a.subset(b)`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `a.issubset(b)` trả về `True` nếu tất cả phần tử của `a` đều nằm trong `b`.",
    "solution": "**Bước 1:** Sử dụng phương thức `issubset` viết liền để kiểm tra tập con. Chọn B."
  },
  {
    "id": "Q_MOD_B_042",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "operators"
    ],
    "content": "Giá trị của biểu thức logic `True or False and False` là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. `None`",
      "D. Lỗi"
    ],
    "correct_option": "A",
    "explanation": "Độ ưu tiên toán tử logic: `and` có độ ưu tiên cao hơn `or`. Biểu thức được tính toán thành: `True or (False and False)` $\\rightarrow$ `True or False` $\\rightarrow$ `True`.",
    "solution": "**Bước 1:** Thực hiện phép `and` trước: `False and False` = `False`.\n**Bước 2:** Thực hiện phép `or` sau: `True or False` = `True`. Chọn A."
  },
  {
    "id": "Q_MOD_B_043",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Để làm rỗng một List `lst` tại chỗ mà không làm thay đổi ID bộ nhớ của nó, ta dùng lệnh nào?",
    "options": [
      "A. `lst = []`",
      "B. `lst.clear()`",
      "C. `del lst`",
      "D. `lst = None`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.clear()` xóa sạch các phần tử của list tại chỗ, giữ nguyên ID tham chiếu. Lệnh `lst = []` tạo ra một danh sách mới hoàn toàn và gán lại cho nhãn biến.",
    "solution": "**Bước 1:** Muốn xóa sạch phần tử tại chỗ dùng `.clear()`. Chọn B."
  },
  {
    "id": "Q_MOD_B_044",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "loops"
    ],
    "content": "Vòng lặp `while` sau chạy bao nhiêu lượt?\n```python\nx = 5\nwhile x > 0:\n    x -= 2\n```",
    "options": [
      "A. 2 lượt",
      "B. 3 lượt",
      "C. 4 lượt",
      "D. Chạy vô hạn"
    ],
    "correct_option": "B",
    "explanation": "- Ban đầu: `x = 5` (5 > 0: Đúng, chạy lượt 1, `x` giảm còn 3)\n- Lượt 2: `x = 3` (3 > 0: Đúng, chạy lượt 2, `x` giảm còn 1)\n- Lượt 3: `x = 1` (1 > 0: Đúng, chạy lượt 3, `x` giảm còn -1)\n- Lượt 4: `x = -1` (-1 > 0: Sai, thoát vòng lặp). Tổng cộng 3 lượt.",
    "solution": "**Bước 1:** Mô phỏng biến đổi `x`: 5 $\\rightarrow$ 3 $\\rightarrow$ 1 $\\rightarrow$ -1. Vòng lặp chạy 3 lần. Chọn B."
  },
  {
    "id": "Q_MOD_B_045",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Để ghép nội dung từ điển `d2` vào từ điển `d1` tại chỗ, ta dùng phương thức nào?",
    "options": [
      "A. `d1.update(d2)`",
      "B. `d1.add(d2)`",
      "C. `d1.merge(d2)`",
      "D. `d1.extend(d2)`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.update(other_dict)` cập nhật các khóa và giá trị từ từ điển khác vào từ điển hiện tại.",
    "solution": "**Bước 1:** Từ điển sử dụng hàm `update()` để gộp phần tử. Chọn A."
  },
  {
    "id": "Q_MOD_B_046",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Lệnh nào dùng để đảo ngược thứ tự các phần tử của danh sách `lst` tại chỗ (in-place)?",
    "options": [
      "A. `lst.reverse()`",
      "B. `lst.invert()`",
      "C. `reversed(lst)`",
      "D. `lst[::-1]`"
    ],
    "correct_option": "A",
    "explanation": "`lst.reverse()` sửa đổi thứ tự danh sách tại chỗ và trả về `None`. `lst[::-1]` tạo ra một danh sách bản sao mới đảo ngược.",
    "solution": "**Bước 1:** Đảo ngược tại chỗ dùng phương thức `.reverse()`. Chọn A."
  },
  {
    "id": "Q_MOD_B_047",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "strings"
    ],
    "content": "Kết quả của phép so sánh `\"10\" > \"2\"` trong Python là gì?",
    "options": [
      "A. `True`",
      "B. `False`",
      "C. Lỗi TypeError",
      "D. So sánh độ dài"
    ],
    "correct_option": "B",
    "explanation": "So sánh chuỗi ký tự theo Unicode từ trái qua phải. Ký tự thứ nhất `'1'` của chuỗi `\"10\"` có mã Unicode nhỏ hơn ký tự `'2'` của chuỗi `\"2\"`, do đó biểu thức trả về `False`.",
    "solution": "**Bước 1:** So sánh ký tự đầu tiên: '1' < '2' nên chuỗi \"10\" nhỏ hơn \"2\". Chọn B."
  },
  {
    "id": "Q_MOD_B_048",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "operators"
    ],
    "content": "Toán tử logic nào trả về kết quả nghịch đảo của toán hạng đứng sau nó?",
    "options": [
      "A. `and`",
      "B. `or`",
      "C. `not`",
      "D. `xor`"
    ],
    "correct_option": "C",
    "explanation": "Toán tử `not` thực hiện phép phủ định logic, chuyển đổi `True` thành `False` và ngược lại.",
    "solution": "**Bước 1:** Toán tử phủ định trong Python là `not`. Chọn C."
  },
  {
    "id": "Q_MOD_B_049",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Phép toán `a ^ b` giữa hai tập hợp đại diện cho phép toán nào?",
    "options": [
      "A. Phép giao tập hợp",
      "B. Phép hợp tập hợp",
      "C. Phép hiệu đối xứng (Symmetric Difference), lấy các phần tử thuộc a hoặc b nhưng không thuộc phần chung của cả hai.",
      "D. Phép hiệu đơn thuần"
    ],
    "correct_option": "C",
    "explanation": "Toán tử `^` đại diện cho symmetric difference, trả về tập chứa các phần tử chỉ xuất hiện ở một trong hai tập hợp.",
    "solution": "**Bước 1:** `^` đại diện cho hiệu đối xứng. Chọn C."
  },
  {
    "id": "Q_MOD_B_050",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "syntax",
      "strings"
    ],
    "content": "Kết quả của biểu thức slice chuỗi `\"DataFrame\"[:4]` là gì?",
    "options": [
      "A. `Data`",
      "B. `Frame`",
      "C. `ataF`",
      "D. `DataF`"
    ],
    "correct_option": "A",
    "explanation": "Slice `[:4]` tương đương `[0:4]`, trích xuất các ký tự từ chỉ số 0 đến chỉ số 3 (bỏ qua chỉ số 4), tương ứng chuỗi `\"Data\"`.",
    "solution": "**Bước 1:** Lấy 4 ký tự đầu tiên của chuỗi. Chọn A."
  }
];
