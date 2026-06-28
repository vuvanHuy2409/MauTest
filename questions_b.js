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
    "explanation": "Các giá trị của `i` qua từng vòng lặp là:\n- Ban đầu: `i = 1` (1 < 10: Đúng, chạy lần 1, sau đó `i` nhân 2 thành `2`)\n- Lần 2: `i = 2` (2 < 10: Đúng, chạy lần 2, sau đó `i` thành `4`)\n- Lần 3: `i = 4` (4 < 10: Đúng, chạy lần 3, sau đó `i` thành `8`)\n- Lần 4: `i = 8` (8 < 10: Đúng, chạy lần 4, sau đó `i` thành `16`)\n- Sau đó: `i = 16` (16 < 10: Sai, kết thúc vòng lặp).\nTổng cộng vòng lặp thực hiện 4 lần.",
    "solution": "**Bước 1:** Liệt kê sự thay đổi của biến kiểm tra điều kiện `i` sau mỗi lần lặp.\n**Bước 2:**\n- Vòng 1: i = 1, điều kiện 1 < 10 thỏa mãn.\n- Vòng 2: i = 2, điều kiện 2 < 10 thỏa mãn.\n- Vòng 3: i = 4, điều kiện 4 < 10 thỏa mãn.\n- Vòng 4: i = 8, điều kiện 8 < 10 thỏa mãn.\n- Kết thúc: i = 16, điều kiện 16 < 10 không thỏa mãn, vòng lặp dừng.\n**Bước 3:** Đếm số lần chạy thành công là 4 lần. Chọn B."
  },
  {
    "id": "Q_MOD_B_005",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Câu lệnh nào trong Python dùng để kết thúc vòng lặp ngay lập tức dù cho điều kiện lặp vẫn còn đúng?",
    "options": [
      "A. `continue`",
      "B. `pass`",
      "C. `break`",
      "D. `return`"
    ],
    "correct_option": "C",
    "explanation": "Từ khóa `break` dùng để chấm dứt vòng lặp chứa nó ngay lập tức. Câu lệnh `continue` bỏ qua các câu lệnh còn lại trong thân vòng lặp của lượt hiện tại để chuyển sang lượt lặp tiếp theo.",
    "solution": "**Bước 1:** Định nghĩa chức năng của các lệnh kiểm tra vòng lặp:\n- `break`: Thoát hoàn toàn khỏi vòng lặp.\n- `continue`: Nhảy đến lượt lặp tiếp theo của vòng lặp hiện tại.\n- `pass`: Câu lệnh rỗng không làm gì cả.\n- `return`: Thoát khỏi một hàm (chứ không phải chỉ thoát vòng lặp đơn thuần).\n**Bước 2:** Chọn đáp án C."
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
      "A. Thoát hoàn toàn khỏi vòng lặp và kết thúc chương trình.",
      "B. Bỏ qua phần code còn lại bên trong vòng lặp ở lượt hiện tại và chuyển sang lượt lặp tiếp theo.",
      "C. Tạm dừng thực thi vòng lặp trong một khoảng thời gian.",
      "D. Lặp lại đoạn code hiện tại vô hạn lần."
    ],
    "correct_option": "B",
    "explanation": "Câu lệnh `continue` kết thúc sớm lượt chạy hiện tại của vòng lặp, Python sẽ quay lại đỉnh vòng lặp và bắt đầu lượt lặp kế tiếp.",
    "solution": "**Bước 1:** Nhớ lại cơ chế của `continue`.\n**Bước 2:** Khi gặp `continue`, bộ biên dịch Python lập tức dừng lượt thực thi hiện tại và nhảy về điều kiện lặp để xét lượt tiếp theo.\n**Bước 3:** Chọn phương án B."
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
      "D. Báo lỗi cú pháp vì khối `else` không được đi kèm với `for`."
    ],
    "correct_option": "A",
    "explanation": "Trong Python, vòng lặp `for/while` có thể đi kèm khối `else`. Khối `else` này chỉ được thực thi khi vòng lặp hoàn thành bình thường mà không bị ngắt bởi câu lệnh `break`. Ở đây khi `i == 1`, vòng lặp gặp `break` và thoát ra, do đó khối `else` không được chạy.",
    "solution": "**Bước 1:** Xem xét hoạt động của khối `else` trong vòng lặp:\n- Nếu vòng lặp kết thúc do điều kiện kết thúc của vòng lặp tự nhiên, `else` sẽ chạy.\n- Nếu vòng lặp bị ngắt bởi `break`, `else` bị bỏ qua.\n**Bước 2:** Theo dõi luồng lặp:\n- `i = 0`: không có gì xảy ra.\n- `i = 1`: điều kiện `i == 1` thỏa mãn, vòng lặp bị phá vỡ bởi `break`.\n**Bước 3:** Vì vòng lặp bị ngắt bởi `break`, khối `else` không được chạy. Chương trình kết thúc và không in ra gì. Chọn A."
  },
  {
    "id": "Q_MOD_B_008",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [10, 20, 30, 40, 50]`. Kết quả của phép truy cập phần tử `lst[-2]` là gì?",
    "options": [
      "A. 10",
      "B. 40",
      "C. 20",
      "D. Lỗi IndexError"
    ],
    "correct_option": "B",
    "explanation": "Python hỗ trợ truy cập phần tử bằng chỉ số âm (negative indexing). Chỉ số `-1` tương ứng với phần tử cuối cùng (`50`), `-2` tương ứng với phần tử sát cuối cùng (`40`).",
    "solution": "**Bước 1:** Xác định các chỉ số âm cho các phần tử từ cuối danh sách lên đầu:\n- `50` tương ứng chỉ số -1\n- `40` tương ứng chỉ số -2\n- `30` tương ứng chỉ số -3\n- `20` tương ứng chỉ số -4\n- `10` tương ứng chỉ số -5\n**Bước 2:** Phần tử tại chỉ số `-2` là `40`. Chọn B."
  },
  {
    "id": "Q_MOD_B_009",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Sự khác nhau giữa phương thức `append()` và `extend()` của đối tượng List là gì?",
    "options": [
      "A. `append()` thêm một phần tử vào đầu danh sách, `extend()` thêm vào cuối danh sách.",
      "B. `append()` thêm toàn bộ đối tượng truyền vào như một phần tử duy nhất, trong khi `extend()` giải nén đối tượng lặp (iterable) rồi thêm từng phần tử của nó vào danh sách.",
      "C. `append()` chỉ dùng được cho số nguyên, `extend()` dùng được cho chuỗi.",
      "D. Hai phương thức này hoàn toàn giống nhau."
    ],
    "correct_option": "B",
    "explanation": "Phương thức `append(x)` thêm đối tượng `x` vào cuối danh sách dưới dạng một phần tử đơn lẻ (nếu `x` là danh sách `[4, 5]`, danh sách ban đầu sẽ chứa thêm cả danh sách con `[4, 5]`). Còn `extend(t)` nhận một iterable `t` (như list, tuple) và thêm tất cả các phần tử nhỏ bên trong `t` vào cuối danh sách hiện tại.",
    "solution": "**Bước 1:** So sánh cách hoạt động:\n- `lst = [1, 2]`; `lst.append([3, 4])` -> `[1, 2, [3, 4]]` (Thêm cả list con thành 1 phần tử).\n- `lst = [1, 2]`; `lst.extend([3, 4])` -> `[1, 2, 3, 4]` (Giải phóng và nối các phần tử con).\n**Bước 2:** Do đó đáp án B mô tả chính xác sự khác biệt."
  },
  {
    "id": "Q_MOD_B_010",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [1, 2, 3]`. Sau khi thực hiện câu lệnh `val = lst.pop(0)`, giá trị của `val` và `lst` lần lượt là gì?",
    "options": [
      "A. `val = 1`, `lst = [2, 3]`",
      "B. `val = 3`, `lst = [1, 2]`",
      "C. `val = 1`, `lst = [1, 2, 3]`",
      "D. `val = None`, `lst = [2, 3]`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `pop(index)` loại bỏ phần tử ở vị trí `index` khỏi danh sách, đồng thời trả về giá trị của phần tử vừa bị loại bỏ đó. Ở đây phần tử tại chỉ số 0 là `1`, nó được gán vào `val` và danh sách còn lại `[2, 3]`.",
    "solution": "**Bước 1:** Phương thức `pop(0)` thực hiện xóa phần tử đầu tiên của danh sách.\n**Bước 2:** Phần tử bị xóa là `1`. Giá trị này được trả về và gán cho `val`.\n**Bước 3:** Danh sách `lst` bị biến đổi tại chỗ và trở thành `[2, 3]`. Kết quả: `val = 1`, `lst = [2, 3]` (Đáp án A)."
  },
  {
    "id": "Q_MOD_B_011",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Sự khác biệt giữa phương thức `lst.sort()` và hàm `sorted(lst)` là gì?",
    "options": [
      "A. `lst.sort()` thay đổi thứ tự trực tiếp trên chính danh sách `lst` (in-place) và trả về `None`, còn `sorted(lst)` trả về một danh sách mới đã sắp xếp mà không làm thay đổi danh sách gốc.",
      "B. `lst.sort()` chỉ sắp xếp giảm dần, `sorted(lst)` chỉ sắp xếp tăng dần.",
      "C. `lst.sort()` chỉ dùng được cho chuỗi, `sorted()` dùng cho số nguyên.",
      "D. Không có sự khác biệt, cả hai đều trả về danh sách mới."
    ],
    "correct_option": "A",
    "explanation": "`lst.sort()` thực hiện sắp xếp tại chỗ (in-place optimization), làm thay đổi cấu trúc danh sách ban đầu và trả về giá trị đặc biệt `None`. Trong khi đó, `sorted(lst)` là một hàm độc lập (built-in function), nhận vào một danh sách và sao chép nó ra để sắp xếp, sau đó trả về danh sách mới này và giữ nguyên danh sách gốc.",
    "solution": "**Bước 1:** Phân tích cơ chế bộ nhớ:\n- `lst.sort()` sửa trực tiếp danh sách hiện tại để tiết kiệm bộ nhớ.\n- `sorted(lst)` giữ an toàn cho danh sách gốc bằng cách tạo bản sao mới đã được sắp xếp.\n**Bước 2:** Đáp án A phát biểu chính xác. Chọn A."
  },
  {
    "id": "Q_MOD_B_012",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "tuples"
    ],
    "content": "Tại sao Python lại cung cấp kiểu dữ liệu Tuple khi đã có kiểu dữ liệu List?",
    "options": [
      "A. Tuple có dung lượng lưu trữ không giới hạn.",
      "B. Tuple là cấu trúc dữ liệu không thể thay đổi sau khi tạo (immutable), giúp đảm bảo an toàn dữ liệu và tối ưu hiệu suất bộ nhớ.",
      "C. Tuple cho phép lưu trữ nhiều kiểu dữ liệu hỗn hợp hơn List.",
      "D. Tuple có cú pháp viết dễ hơn List."
    ],
    "correct_option": "B",
    "explanation": "Tính bất biến (immutability) của Tuple giúp bảo vệ dữ liệu khỏi bị vô tình chỉnh sửa trong quá trình truyền tham chiếu qua các hàm. Ngoài ra, nó cho phép Tuple được sử dụng làm khóa (key) trong Dictionary, và giúp Python tối ưu tốc độ truy xuất cũng như giảm bộ nhớ hao phí so với danh sách động (List).",
    "solution": "**Bước 1:** Xác định tính chất cốt lõi của Tuple: Immutability (Không thể thay đổi giá trị của các phần tử sau khi khai báo).\n**Bước 2:** Lợi thế của Tuple:\n- An toàn dữ liệu (hằng số).\n- Hiệu năng bộ nhớ tốt hơn.\n- Có thể băm (hashable) nên dùng làm key của từ điển được.\n**Bước 3:** Đáp án đúng là B."
  },
  {
    "id": "Q_MOD_B_013",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "tuples"
    ],
    "content": "Câu lệnh khai báo nào sau đây sẽ tạo ra một đối tượng kiểu **Tuple** có duy nhất một phần tử?",
    "options": [
      "A. `t = (5)`",
      "B. `t = (5,)`",
      "C. `t = [5]`",
      "D. `t = tuple(5)`"
    ],
    "correct_option": "B",
    "explanation": "Để tạo một Tuple có một phần tử duy nhất, bắt buộc phải có dấu phẩy đi sau phần tử đó (ví dụ `(5,)`). Nếu chỉ viết `(5)`, Python sẽ hiểu dấu ngoặc đơn là dấu ngoặc toán học ưu tiên phép tính và coi đó là số nguyên `5` thông thường.",
    "solution": "**Bước 1:** Phân tích cú pháp từng phương án:\n- `(5)`: Chỉ là số nguyên 5 đặt trong ngoặc đơn toán học, kiểu `int`.\n- `(5,)`: Dấu phẩy báo hiệu cho trình thông dịch đây là một Tuple chứa 1 phần tử.\n- `[5]`: Khai báo List chứa 1 phần tử.\n- `tuple(5)`: Báo lỗi vì số nguyên không phải là đối tượng lặp để đưa vào hàm `tuple()`.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_B_014",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Đối tượng nào sau đây **không thể** được sử dụng làm khóa (key) trong Dictionary của Python?",
    "options": [
      "A. Một chuỗi ký tự (`\"name\"`)",
      "B. Một số nguyên (`42`)",
      "C. Một danh sách (`[1, 2]`)",
      "D. Một tuple (`(1, 2)`)"
    ],
    "correct_option": "C",
    "explanation": "Từ điển (Dictionary) trong Python hoạt động dựa trên bảng băm (hash table). Các khóa bắt buộc phải là đối tượng có thể băm được (hashable), đồng nghĩa chúng phải có tính chất bất biến (immutable). Chuỗi, số, và tuple (nếu bản thân các phần tử của tuple cũng là immutable) đều bất biến nên dùng làm khóa được. Danh sách (`list`) là kiểu dữ liệu có thể thay đổi (mutable), do đó nó không có giá trị băm cố định và không thể dùng làm khóa trong Dictionary (sẽ gây lỗi TypeError: unhashable type).",
    "solution": "**Bước 1:** Nhớ lại tính chất của key trong Dictionary: Phải là kiểu dữ liệu bất biến (immutable) và có thể băm (hashable).\n**Bước 2:** Phân tích các phương án:\n- Chuỗi (`str`): Immutable -> Dùng làm key được.\n- Số nguyên (`int`): Immutable -> Dùng làm key được.\n- Tuple (`tuple`): Immutable -> Dùng làm key được.\n- List (`list`): Mutable -> Không dùng làm key được.\n**Bước 3:** Chọn đáp án C."
  },
  {
    "id": "Q_MOD_B_015",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Cho từ điển `d = {\"a\": 1}`. So sánh hai cách lấy giá trị: `d[\"b\"]` và `d.get(\"b\", 0)`. Kết quả là gì?",
    "options": [
      "A. Cả hai đều trả về `None`.",
      "B. `d[\"b\"]` gây lỗi `KeyError`, còn `d.get(\"b\", 0)` trả về giá trị `0`.",
      "C. `d[\"b\"]` trả về `0`, còn `d.get(\"b\", 0)` gây lỗi `KeyError`.",
      "D. Cả hai đều gây lỗi cú pháp."
    ],
    "correct_option": "B",
    "explanation": "Truy cập trực tiếp bằng ngoặc vuông `d[key]` sẽ sinh ra ngoại lệ `KeyError` nếu khóa không tồn tại trong từ điển. Trong khi đó, phương thức `get(key, default)` được thiết kế an toàn hơn: nếu khóa không có trong từ điển, nó trả về giá trị mặc định được định nghĩa trước (ở đây là `0`) mà không làm chương trình bị lỗi.",
    "solution": "**Bước 1:** Đánh giá `d[\"b\"]`. Từ điển `d` chỉ có khóa `\"a\"`, không có khóa `\"b\"`. Truy cập trực tiếp sinh ra ngoại lệ `KeyError`.\n**Bước 2:** Đánh giá `d.get(\"b\", 0)`. Phương thức `get` tìm kiếm khóa `\"b\"`. Vì không tìm thấy, nó trả về tham số thứ hai là `0`.\n**Bước 3:** Chọn phương án B."
  },
  {
    "id": "Q_MOD_B_016",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Phương thức nào dùng để lấy ra danh sách các cặp khóa-giá trị dưới dạng danh sách các tuple từ một Dictionary?",
    "options": [
      "A. `keys()`",
      "B. `values()`",
      "C. `items()`",
      "D. `pairs()`"
    ],
    "correct_option": "C",
    "explanation": "Phương thức `items()` trả về một đối tượng view chứa các cặp `(key, value)` dưới dạng tuple. Phương thức `keys()` chỉ trả về các khóa, và `values()` chỉ trả về các giá trị.",
    "solution": "**Bước 1:** Điểm qua các phương thức của từ điển:\n- `keys()`: Trả về danh sách khóa.\n- `values()`: Trả về danh sách giá trị.\n- `items()`: Trả về danh sách các cặp khóa-giá trị dưới dạng `(key, value)`.\n**Bước 2:** Chọn C."
  },
  {
    "id": "Q_MOD_B_017",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Giá trị của tập hợp `s` sau khi thực hiện lệnh dưới đây là gì?\n```python\ns = set([1, 2, 2, 3, 3, 3])\nprint(s)\n```",
    "options": [
      "A. `{1, 2, 2, 3, 3, 3}`",
      "B. `[1, 2, 3]`",
      "C. `{1, 2, 3}`",
      "D. `(1, 2, 3)`"
    ],
    "correct_option": "C",
    "explanation": "Tập hợp (Set) trong Python chỉ chứa các phần tử duy nhất (không trùng lặp). Khi chuyển đổi danh sách chứa các số lặp lại sang tập hợp, các phần tử trùng sẽ bị tự động loại bỏ. Dấu ngoặc nhọn `{}` biểu thị một tập hợp.",
    "solution": "**Bước 1:** Tập hợp được xây dựng từ List `[1, 2, 2, 3, 3, 3]`.\n**Bước 2:** Tự động loại bỏ các giá trị trùng lặp, chỉ giữ lại các giá trị độc bản: `1`, `2`, `3`.\n**Bước 3:** Kiểu Set được bao bọc bởi dấu ngoặc nhọn: `{1, 2, 3}`. Chọn C."
  },
  {
    "id": "Q_MOD_B_018",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Cho hai tập hợp `a = {1, 2, 3}` và `b = {3, 4, 5}`. Kết quả của phép giao hai tập hợp `a & b` là gì?",
    "options": [
      "A. `{1, 2, 3, 4, 5}`",
      "B. `{3}`",
      "C. `{1, 2, 4, 5}`",
      "D. `{}`"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `&` đại diện cho phép toán giao (intersection) giữa hai tập hợp, trả về tập hợp chứa các phần tử xuất hiện ở **cả hai** tập hợp. Ở đây chỉ có số `3` xuất hiện đồng thời trong cả `a` và `b`.",
    "solution": "**Bước 1:** Tìm các phần tử chung của hai tập hợp:\n- Tập `a`: 1, 2, 3\n- Tập `b`: 3, 4, 5\n**Bước 2:** Số 3 thuộc cả hai tập hợp.\n**Bước 3:** Phép giao `a & b` trả về tập hợp `{3}`. Chọn B."
  },
  {
    "id": "Q_MOD_B_019",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Cho hai tập hợp `a = {1, 2, 3}` và `b = {3, 4, 5}`. Kết quả của phép toán `a | b` là gì?",
    "options": [
      "A. `{3}`",
      "B. `{1, 2, 3, 4, 5}`",
      "C. `{1, 2, 4, 5}`",
      "D. Lỗi cú pháp"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `|` đại diện cho phép hợp (union) giữa hai tập hợp, trả về tập hợp chứa tất cả các phần tử thuộc ít nhất một trong hai tập hợp đó (không có phần tử trùng lặp).",
    "solution": "**Bước 1:** Liệt kê tất cả phần tử của cả hai tập hợp: 1, 2, 3, 4, 5.\n**Bước 2:** Phép hợp kết hợp tất cả các phần tử và tự động gộp phần tử trùng lặp (số 3).\n**Bước 3:** Kết quả thu được là `{1, 2, 3, 4, 5}`. Chọn đáp án B."
  },
  {
    "id": "Q_MOD_B_020",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Sự khác nhau giữa hai phương thức xóa phần tử `remove()` và `discard()` trong Set là gì?",
    "options": [
      "A. `remove()` xóa phần tử ở cuối, `discard()` xóa phần tử chỉ định.",
      "B. Nếu phần tử cần xóa không tồn tại trong tập hợp, `remove()` sẽ phát sinh lỗi `KeyError`, còn `discard()` sẽ bỏ qua và không báo lỗi.",
      "C. `discard()` trả về phần tử bị xóa, `remove()` không trả về gì.",
      "D. Hai phương thức này hoàn toàn giống nhau."
    ],
    "correct_option": "B",
    "explanation": "Cả hai phương thức đều dùng để xóa một phần tử xác định khỏi tập hợp. Điểm khác biệt duy nhất là tính an toàn: `remove(x)` sẽ sinh lỗi nếu tập hợp không chứa `x`, còn `discard(x)` vẫn chạy bình thường mà không gây lỗi.",
    "solution": "**Bước 1:** Phân tích hành vi khi phần tử cần xóa không có trong Set:\n- `s.remove(x)`: Ném lỗi `KeyError`.\n- `s.discard(x)`: Không làm gì cả, không báo lỗi.\n**Bước 2:** Chọn phương án B."
  },
  {
    "id": "Q_MOD_B_021",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Đoạn code sau đây sẽ hiển thị kết quả gì?\n```python\nd = {\"x\": 1, \"y\": 2}\nprint(\"x\" in d, 1 in d)\n```",
    "options": [
      "A. `True True`",
      "B. `True False`",
      "C. `False True`",
      "D. `False False`"
    ],
    "correct_option": "B",
    "explanation": "Khi sử dụng toán tử `in` trên một Dictionary, Python sẽ mặc định tìm kiếm trên **danh sách các khóa (keys)** của từ điển chứ không tìm kiếm trên danh sách các giá trị (values). Do đó, `\"x\"` là một khóa nên trả về `True`, còn `1` là một giá trị (chứ không phải khóa) nên trả về `False`.",
    "solution": "**Bước 1:** Khảo sát hành vi của toán tử `in` đối với từ điển:\n- `key in dict` kiểm tra xem `key` có tồn tại trong danh sách các khóa của từ điển không.\n**Bước 2:**\n- `\"x\" in d` trả về `True` vì `\"x\"` là khóa.\n- `1 in d` trả về `False` vì `1` là giá trị của khóa `\"x\"` chứ không phải là khóa tự thân.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_B_022",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "copying"
    ],
    "content": "Đoạn code sau đây in ra kết quả gì?\n```python\nimport copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0][0] = 99\nprint(a[0][0])\n```",
    "options": [
      "A. 1",
      "B. 99",
      "C. Lỗi TypeError",
      "D. `[99, 2]`"
    ],
    "correct_option": "B",
    "explanation": "`copy.copy(a)` thực hiện sao chép nông (shallow copy). Nó tạo ra một đối tượng danh sách bên ngoài mới, nhưng nội dung bên trong của nó vẫn chứa các tham chiếu đến các đối tượng danh sách con ban đầu của `a`. Do đó, khi chỉnh sửa danh sách con thông qua `b[0][0] = 99`, danh sách con của `a` cũng bị ảnh hưởng vì cả `a` và `b` cùng chia sẻ chung đối tượng danh sách con đó trong bộ nhớ.",
    "solution": "**Bước 1:** Nhận diện loại sao chép: `copy.copy()` là sao chép nông (shallow copy).\n**Bước 2:** Cấu trúc dữ liệu `a` có tính phân cấp (lồng nhau): danh sách bên trong danh sách.\n- Bản sao nông `b` độc lập với `a` ở cấp độ danh sách ngoài cùng.\n- Nhưng danh sách con bên trong `a[0]` và `b[0]` thực chất là cùng một đối tượng trong bộ nhớ.\n**Bước 3:** Khi thay đổi `b[0][0]`, giá trị tại `a[0][0]` cũng thay đổi thành `99`. Chọn đáp án B."
  },
  {
    "id": "Q_MOD_B_023",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "copying"
    ],
    "content": "Để sao chép một danh sách lồng nhau nhiều cấp sao cho bản sao mới hoàn toàn độc lập, không chia sẻ bất kỳ tham chiếu đối tượng con nào với danh sách gốc, ta nên dùng cách nào?",
    "options": [
      "A. `b = a.copy()`",
      "B. `b = list(a)`",
      "C. `b = copy.deepcopy(a)`",
      "D. `b = a[:]`"
    ],
    "correct_option": "C",
    "explanation": "Để thực hiện sao chép sâu (deep copy), ta phải sử dụng hàm `copy.deepcopy()` từ module thư viện chuẩn `copy`. Nó sẽ đệ quy sao chép tất cả các đối tượng con lồng nhau bên trong, đảm bảo tạo ra một cấu trúc dữ liệu mới hoàn toàn độc lập với đối tượng ban đầu.",
    "solution": "**Bước 1:** Phân tích các cách sao chép danh sách lồng nhau:\n- `a.copy()`, `list(a)`, và `a[:]` đều là sao chép nông (shallow copy), các đối tượng con lồng bên trong vẫn dùng chung địa chỉ bộ nhớ.\n- `copy.deepcopy(a)` tạo các đối tượng con mới đệ quy.\n**Bước 2:** Do đó chọn đáp án C."
  },
  {
    "id": "Q_MOD_B_024",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow",
      "loops"
    ],
    "content": "Vòng lặp sau đây in ra những giá trị nào?\n```python\nfor i in range(1, 4):\n    for j in range(1, 3):\n        if i == j:\n            print(f\"{i},{j}\")\n```",
    "options": [
      "A. `1,1` và `2,2` và `3,3`",
      "B. `1,1` và `2,2`",
      "C. `1,1`",
      "D. Không hiển thị gì"
    ],
    "correct_option": "B",
    "explanation": "Vòng lặp ngoài `i` nhận các giá trị: 1, 2, 3. Vòng lặp trong `j` nhận các giá trị: 1, 2.\n- Khi `i = 1`: `j` có thể là 1 hoặc 2. Điều kiện `i == j` thỏa mãn khi `j = 1` -> in ra `1,1`.\n- Khi `i = 2`: `j` có thể là 1 hoặc 2. Điều kiện `i == j` thỏa mãn khi `j = 2` -> in ra `2,2`.\n- Khi `i = 3`: `j` chỉ có thể là 1 hoặc 2, không thể bằng `i`. Không in gì.\nDo đó kết quả in ra là `1,1` và `2,2`.",
    "solution": "**Bước 1:** Liệt kê các cặp `(i, j)` được sinh ra bởi hai vòng lặp lồng nhau:\n- i = 1: j = 1 (1==1 -> In), j = 2 (1!=2)\n- i = 2: j = 1 (2!=1), j = 2 (2==2 -> In)\n- i = 3: j = 1 (3!=1), j = 2 (3!=2)\n**Bước 2:** Kết quả chỉ bao gồm `1,1` và `2,2`. Chọn đáp án B."
  },
  {
    "id": "Q_MOD_B_025",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "control-flow"
    ],
    "content": "Từ khóa `pass` trong Python được dùng để làm gì?",
    "options": [
      "A. Thoát khỏi vòng lặp giống như `break`.",
      "B. Đóng file đang mở.",
      "C. Làm một câu lệnh giữ chỗ (placeholder) rỗng, không thực hiện hành động nào khi chạy để tránh lỗi cú pháp.",
      "D. Bỏ qua các lỗi logic trong chương trình."
    ],
    "correct_option": "C",
    "explanation": "`pass` là câu lệnh rỗng (null statement) trong Python. Nó được sử dụng khi cú pháp của Python yêu cầu phải có một khối lệnh (ví dụ sau định nghĩa hàm hoặc lớp chưa viết nội dung), nhưng bạn chưa muốn triển khai logic gì ở đó.",
    "solution": "**Bước 1:** Phân tích từ khóa `pass`:\n- Python không cho phép khối thụt đầu dòng rỗng.\n- `pass` đóng vai trò là một câu lệnh hợp lệ nhưng không thực hiện bất cứ hành động nào.\n**Bước 2:** Chọn C."
  },
  {
    "id": "Q_MOD_B_026",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [1, 2, 3, 2, 4, 2]`. Kết quả trả về của hàm `lst.count(2)` là bao nhiêu?",
    "options": [
      "A. 1",
      "B. 3",
      "C. 6",
      "D. Lỗi vì danh sách chứa phần tử trùng nhau"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `count(x)` của List dùng để đếm số lần xuất hiện của phần tử `x` trong danh sách. Ở đây số `2` xuất hiện 3 lần.",
    "solution": "**Bước 1:** Đếm thủ công số lần số `2` xuất hiện trong `[1, 2, 3, 2, 4, 2]`.\n**Bước 2:** Có 3 số `2` xuất hiện.\n**Bước 3:** `lst.count(2)` trả về `3`. Chọn B."
  },
  {
    "id": "Q_MOD_B_027",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Cho danh sách `lst = [10, 20, 30, 20, 40]`. Kết quả trả về của hàm `lst.index(20)` là gì?",
    "options": [
      "A. 1",
      "B. 3",
      "C. `[1, 3]`",
      "D. Lỗi TypeError"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `index(x)` trả về chỉ số (vị trí index) xuất hiện **đầu tiên** của phần tử `x` trong danh sách từ trái qua phải. Số `20` xuất hiện ở chỉ số 1 và 3, chỉ số đầu tiên là 1.",
    "solution": "**Bước 1:** Tìm vị trí của các phần tử có giá trị là `20`:\n- Vị trí index 1 có giá trị 20.\n- Vị trí index 3 có giá trị 20.\n**Bước 2:** Hàm `index()` luôn trả về vị trí đầu tiên tìm thấy.\n**Bước 3:** Kết quả trả về là 1. Chọn A."
  },
  {
    "id": "Q_MOD_B_028",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "lists"
    ],
    "content": "Kết quả của câu lệnh cắt lát danh sách `lst = [0, 1, 2, 3, 4, 5]` với cú pháp `lst[1:5:2]` là gì?",
    "options": [
      "A. `[1, 3]`",
      "B. `[1, 3, 5]`",
      "C. `[1, 2, 3, 4]`",
      "D. `[2, 4]`"
    ],
    "correct_option": "A",
    "explanation": "Cú pháp cắt lát (slicing) `[start:stop:step]` lấy các phần tử từ chỉ số `start` (ở đây là 1) đến trước chỉ số `stop` (ở đây dừng trước 5 tức là tối đa đến chỉ số 4) với bước nhảy `step` là 2. Các chỉ số được chọn là 1 và 3. Giá trị tương ứng là `1` và `3`.",
    "solution": "**Bước 1:** Xác định cận chỉ số: bắt đầu từ index 1, kết thúc trước index 5 (lấy index 1, 2, 3, 4).\n**Bước 2:** Áp dụng bước nhảy 2: từ index 1 nhảy lên index 3, bước tiếp theo lên index 5 (vượt quá giới hạn nên loại).\n**Bước 3:** Phần tử tại index 1 là `1`, phần tử tại index 3 là `3`. Kết quả `[1, 3]`. Chọn A."
  },
  {
    "id": "Q_MOD_B_029",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "sets"
    ],
    "content": "Làm thế nào để thêm một phần tử duy nhất vào một Set đã tồn tại?",
    "options": [
      "A. `s.append(element)`",
      "B. `s.add(element)`",
      "C. `s.insert(element)`",
      "D. `s.push(element)`"
    ],
    "correct_option": "B",
    "explanation": "Set sử dụng phương thức `add()` để thêm một phần tử vào tập hợp. `append()` dùng cho List, `push()` dùng cho cấu trúc Stack tự định nghĩa, và `insert()` dùng cho List khi muốn chèn phần tử tại vị trí index cụ thể.",
    "solution": "**Bước 1:** Điểm qua các phương thức thêm phần tử của tập hợp:\n- Set không có thứ tự chỉ mục nên không thể sử dụng `insert()`.\n- Set không sử dụng các từ khóa `append` hay `push`.\n- Phương thức chuẩn của Set để thêm phần tử là `add()`.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_B_030",
    "module_id": "Module_B",
    "difficulty": "Medium",
    "tags": [
      "data-structures",
      "dictionaries"
    ],
    "content": "Lệnh nào dùng để xóa tất cả các cặp khóa-giá trị khỏi từ điển mà không xóa bỏ bản thân từ điển đó?",
    "options": [
      "A. `del d`",
      "B. `d.clear()`",
      "C. `d.remove_all()`",
      "D. `d = None`"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `clear()` làm rỗng từ điển bằng cách xóa toàn bộ phần tử của từ điển đó tại chỗ. Khác với `del d` (xóa hoàn toàn tham chiếu biến `d` khỏi bộ nhớ), `clear()` giữ lại từ điển rỗng `{}` để tái sử dụng.",
    "solution": "**Bước 1:** Tìm cách dọn sạch từ điển:\n- `del d` sẽ xóa đi biến `d` khiến chương trình báo NameError nếu truy cập lại.\n- `d = None` gán biến `d` sang đối tượng rỗng None chứ không xóa nội dung từ điển cũ.\n- `d.clear()` xóa sạch các khóa bên trong và giữ nguyên kiểu từ điển rỗng.\n**Bước 2:** Chọn B."
  }
];
