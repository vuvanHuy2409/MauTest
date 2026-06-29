const QUESTIONS_C = [
  {
    "id": "Q_MOD_C_001",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "boolean-indexing"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['An', 'Bình', 'Chi', 'Dương'],\n    'Age': [23, 34, 18, 29]\n})\nresult = df[df['Age'] >= 25]\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['Bình', 'Dương']",
      "B. ['An', 'Bình', 'Dương']",
      "C. ['Bình']",
      "D. ['An', 'Chi']"
    ],
    "correct_option": "A",
    "explanation": "Biểu thức điều kiện `df['Age'] >= 25` trả về một Boolean Series: `[False, True, False, True]`. Khi lọc DataFrame bằng Series này, chỉ các hàng có giá trị True được giữ lại (Bình và Dương). Cột 'Name' tương ứng là ['Bình', 'Dương'].",
    "solution": "**Bước 1:** Đánh giá biểu thức `df['Age'] >= 25` trên từng phần tử:\n- An (23): False\n- Bình (34): True\n- Chi (18): False\n- Dương (29): True\n**Bước 2:** Lọc các dòng thỏa mãn điều kiện True, ta được các dòng của Bình và Dương.\n**Bước 3:** Lấy danh sách tên tương ứng là `['Bình', 'Dương']`. Chọn A."
  },
  {
    "id": "Q_MOD_C_002",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "boolean-indexing", "logical-and"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Product': ['A', 'B', 'C', 'D'],\n    'Price': [100, 150, 200, 250],\n    'Stock': [5, 12, 8, 3]\n})\nresult = df[(df['Price'] > 120) & (df['Stock'] > 5)]\nprint(result['Product'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['B', 'C', 'D']",
      "B. ['B', 'C']",
      "C. ['B']",
      "D. ['C']"
    ],
    "correct_option": "B",
    "explanation": "Toán tử `&` đại diện cho phép toán logic AND giữa hai Series Boolean. Dòng thỏa mãn phải đồng thời có Price > 120 và Stock > 5. Chỉ có dòng B (150 > 120 và 12 > 5) và dòng C (200 > 120 và 8 > 5) thỏa mãn cả hai điều kiện.",
    "solution": "**Bước 1:** Tính điều kiện 1 `df['Price'] > 120`: [False, True, True, True].\n**Bước 2:** Tính điều kiện 2 `df['Stock'] > 5`: [False, True, True, False].\n**Bước 3:** Thực hiện phép toán `&` (AND) giữa hai Series: [False, True, True, False].\n**Bước 4:** Lọc DataFrame và trích xuất cột 'Product': ['B', 'C']. Chọn B."
  },
  {
    "id": "Q_MOD_C_003",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "boolean-indexing", "logical-or"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'City': ['Hanoi', 'Saigon', 'Danang', 'Hue'],\n    'Temp': [32, 36, 28, 35],\n    'Rain': [True, False, True, False]\n})\nresult = df[(df['Temp'] > 35) | (df['Rain'] == True)]\nprint(result['City'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['Hanoi', 'Saigon', 'Danang']",
      "B. ['Saigon', 'Danang']",
      "C. ['Hanoi', 'Danang']",
      "D. ['Hanoi', 'Saigon', 'Danang', 'Hue']"
    ],
    "correct_option": "A",
    "explanation": "Toán tử `|` biểu thị phép toán OR. Hàng được chọn nếu nhiệt độ lớn hơn 35 hoặc trời mưa (Rain == True).\n- Hanoi: Temp 32 (False) hoặc Rain True (True) -> Chọn\n- Saigon: Temp 36 (True) hoặc Rain False (False) -> Chọn\n- Danang: Temp 28 (False) hoặc Rain True (True) -> Chọn\n- Hue: Temp 35 (False) hoặc Rain False (False) -> Loại",
    "solution": "**Bước 1:** Xác định điều kiện `Temp > 35`: [False, True, False, False].\n**Bước 2:** Xác định điều kiện `Rain == True`: [True, False, True, False].\n**Bước 3:** Kết hợp bằng toán tử `|`: [True, True, True, False].\n**Bước 4:** Lọc DataFrame, thu được 'Hanoi', 'Saigon', 'Danang'. Chọn A."
  },
  {
    "id": "Q_MOD_C_004",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "boolean-indexing", "logical-not"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['Minh', 'Hoa', 'Tâm', 'Nam'],\n    'Active': [True, False, True, True]\n})\nresult = df[~df['Active']]\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['Minh', 'Tâm', 'Nam']",
      "B. ['Hoa']",
      "C. []",
      "D. ['Minh', 'Hoa', 'Tâm', 'Nam']"
    ],
    "correct_option": "B",
    "explanation": "Toán tử dấu ngã `~` đảo ngược các giá trị Boolean. Cột 'Active' có giá trị `[True, False, True, True]`, sau khi phủ định bằng `~` sẽ thành `[False, True, False, False]`. Chỉ dòng ứng với 'Hoa' được giữ lại.",
    "solution": "**Bước 1:** Lấy cột 'Active': [True, False, True, True].\n**Bước 2:** Áp dụng phủ định `~` trên Series này: [False, True, False, False].\n**Bước 3:** Lọc DataFrame với Series phủ định, thu được dòng 'Hoa'. Chọn B."
  },
  {
    "id": "Q_MOD_C_005",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "isin"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Item': ['Apple', 'Banana', 'Orange', 'Mango'],\n    'Category': ['Fruit', 'Fruit', 'Citrus', 'Fruit']\n})\nallowed = ['Orange', 'Mango']\nresult = df[df['Item'].isin(allowed)]\nprint(result['Category'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['Fruit', 'Citrus']",
      "B. ['Citrus', 'Fruit']",
      "C. ['Fruit', 'Fruit']",
      "D. ['Citrus']"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `isin(allowed)` kiểm tra từng giá trị trong cột 'Item' xem có thuộc danh sách `allowed` hay không. Kết quả True cho 'Orange' (Citrus) và 'Mango' (Fruit).",
    "solution": "**Bước 1:** Kiểm tra từng phần tử cột 'Item' đối chiếu với `allowed`:\n- 'Apple': False, 'Banana': False, 'Orange': True, 'Mango': True.\n**Bước 2:** Giữ lại các hàng True (chỉ mục 2 và 3).\n**Bước 3:** Lấy danh sách cột 'Category' tương ứng: ['Citrus', 'Fruit']. Chọn B."
  },
  {
    "id": "Q_MOD_C_006",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "between"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['A', 'B', 'C', 'D'],\n    'Score': [8.5, 9.2, 7.8, 8.0]\n})\nresult = df[df['Score'].between(8.0, 9.0)]\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['A', 'C', 'D']",
      "B. ['A', 'D']",
      "C. ['A', 'B', 'D']",
      "D. ['B']"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.between(left, right)` trả về True cho các phần tử nằm trong đoạn [left, right] (mặc định bao gồm cả hai đầu mút). 8.5 và 8.0 nằm trong khoảng [8.0, 9.0], còn 9.2 và 7.8 thì không.",
    "solution": "**Bước 1:** Kiểm tra điều kiện `between(8.0, 9.0)`:\n- 8.5 (True), 9.2 (False), 7.8 (False), 8.0 (True).\n**Bước 2:** Lọc các dòng True, ta được 'A' và 'D'. Chọn B."
  },
  {
    "id": "Q_MOD_C_007",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "query"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Age': [20, 25, 30, 35],\n    'Salary': [500, 800, 1200, 1500]\n})\nresult = df.query('Age > 25 and Salary < 1500')\nprint(result['Age'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [30]",
      "B. [30, 35]",
      "C. [25, 30]",
      "D. []"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.query()` nhận vào chuỗi truy vấn. Điều kiện `Age > 25` lọc ra dòng 30 và 35. Kết hợp thêm `Salary < 1500` loại bỏ dòng 35 (có Salary bằng 1500). Do đó chỉ còn dòng có Age=30 thỏa mãn.",
    "solution": "**Bước 1:** Đánh giá biểu thức `Age > 25 and Salary < 1500` cho từng dòng:\n- Dòng 0: 20 > 25 (False)\n- Dòng 1: 25 > 25 (False)\n- Dòng 2: 30 > 25 (True) và 1200 < 1500 (True) -> Thỏa mãn.\n- Dòng 3: 35 > 25 (True) và 1500 < 1500 (False) -> Loại.\n**Bước 2:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_C_008",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["sort", "sort-values"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['X', 'Y', 'Z'],\n    'Val': [10, 5, 20]\n})\nresult = df.sort_values(by='Val')\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['X', 'Y', 'Z']",
      "B. ['Z', 'X', 'Y']",
      "C. ['Y', 'X', 'Z']",
      "D. ['Y', 'Z', 'X']"
    ],
    "correct_option": "C",
    "explanation": "Mặc định `sort_values` sắp xếp tăng dần. Giá trị trong cột 'Val' xếp tăng dần: 5 -> 10 -> 20. Trình tự các hàng tương ứng là Y -> X -> Z.",
    "solution": "**Bước 1:** Xác định cột dùng để sắp xếp: Val.\n**Bước 2:** Sắp xếp tăng dần: 5 (chỉ mục 1, tên Y), 10 (chỉ mục 0, tên X), 20 (chỉ mục 2, tên Z).\n**Bước 3:** Lấy danh sách tên theo trật tự mới: ['Y', 'X', 'Z']. Chọn C."
  },
  {
    "id": "Q_MOD_C_009",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["sort", "sort-values"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Group': ['A', 'A', 'B', 'B'],\n    'Score': [90, 80, 85, 95]\n})\nresult = df.sort_values(by=['Group', 'Score'], ascending=[True, False])\nprint(result['Score'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [90, 80, 95, 85]",
      "B. [80, 90, 85, 95]",
      "C. [90, 80, 85, 95]",
      "D. [95, 90, 85, 80]"
    ],
    "correct_option": "A",
    "explanation": "Sắp xếp theo cột 'Group' tăng dần trước: nhóm 'A' rồi đến nhóm 'B'. Trong nhóm 'A', 'Score' sắp xếp giảm dần (90 trước 80). Trong nhóm 'B', 'Score' cũng giảm dần (95 trước 85). Kết quả 'Score' là `[90, 80, 95, 85]`.",
    "solution": "**Bước 1:** Nhóm 'Group' được xếp tăng dần: 'A' rồi đến 'B'.\n**Bước 2:** Sắp xếp 'Score' giảm dần trong nhóm 'A': [90, 80].\n**Bước 3:** Sắp xếp 'Score' giảm dần trong nhóm 'B': [95, 85].\n**Bước 4:** Kết hợp lại: [90, 80, 95, 85]. Chọn A."
  },
  {
    "id": "Q_MOD_C_010",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["sort", "sort-index"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [10, 20, 30]\n}, index=[2, 0, 1])\nresult = df.sort_index()\nprint(result['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [10, 20, 30]",
      "B. [20, 30, 10]",
      "C. [30, 20, 10]",
      "D. [10, 30, 20]"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.sort_index()` sắp xếp DataFrame dựa trên nhãn chỉ mục (index). Chỉ mục được sắp xếp tăng dần từ 0, 1, 2. Giá trị cột 'Val' tương ứng lần lượt là 20, 30, 10.",
    "solution": "**Bước 1:** Nhìn vào index: 2, 0, 1.\n**Bước 2:** Sắp xếp index tăng dần: 0 (giá trị 20), 1 (giá trị 30), 2 (giá trị 10).\n**Bước 3:** Trích xuất kết quả cột 'Val': [20, 30, 10]. Chọn B."
  },
  {
    "id": "Q_MOD_C_011",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["transform", "map"],
    "content": "Cho Series `s` và từ điển `mapping` như sau:\n```python\nimport pandas as pd\ns = pd.Series(['cat', 'dog', 'cow'])\nmapping = {'cat': 'kitten', 'dog': 'puppy'}\nresult = s.map(mapping)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì? (Lưu ý: `nan` là NaN của pandas/numpy)",
    "options": [
      "A. ['kitten', 'puppy', 'cow']",
      "B. ['kitten', 'puppy', None]",
      "C. ['kitten', 'puppy', nan]",
      "D. Lỗi `KeyError` do thiếu khóa 'cow'"
    ],
    "correct_option": "C",
    "explanation": "Khi ánh xạ Series bằng `.map(dict)`, các giá trị không tồn tại trong từ điển sẽ được chuyển đổi thành `NaN` (float), thay vì giữ nguyên giá trị ban đầu hay ném ra lỗi.",
    "solution": "**Bước 1:** Ánh xạ 'cat' -> 'kitten'.\n**Bước 2:** Ánh xạ 'dog' -> 'puppy'.\n**Bước 3:** 'cow' không có trong từ điển -> gán thành `nan`.\n**Bước 4:** Kết quả là ['kitten', 'puppy', nan]. Chọn C."
  },
  {
    "id": "Q_MOD_C_012",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["transform", "apply"],
    "content": "Cho Series `s` như sau:\n```python\nimport pandas as pd\ns = pd.Series([1, 2, 3])\nresult = s.apply(lambda x: x ** 2)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1, 4, 9]",
      "B. [1, 2, 3]",
      "C. [2, 4, 6]",
      "D. [1, 8, 27]"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.apply()` trên Series áp dụng hàm lambda bình phương giá trị của từng phần tử. Kết quả: 1^2=1, 2^2=4, 3^2=9.",
    "solution": "**Bước 1:** Áp dụng bình phương cho từng phần tử: 1**2, 2**2, 3**2.\n**Bước 2:** Kết quả thu được: [1, 4, 9]. Chọn A."
  },
  {
    "id": "Q_MOD_C_013",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["column-modification", "add-column"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [10, 20],\n    'B': [5, 8]\n})\ndf['C'] = df['A'] - df['B']\nprint(df['C'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [5, 12]",
      "B. [10, 20]",
      "C. [5, 8]",
      "D. [15, 28]"
    ],
    "correct_option": "A",
    "explanation": "Phép toán `df['A'] - df['B']` thực hiện trừ theo từng phần tử giữa cột 'A' và cột 'B'. Các phần tử kết quả lần lượt là: 10-5 = 5 và 20-8 = 12. Gán trực tiếp thêm cột 'C' mới.",
    "solution": "**Bước 1:** Thực hiện phép trừ: 10-5=5 và 20-8=12.\n**Bước 2:** Lưu kết quả vào cột 'C'.\n**Bước 3:** Lấy danh sách cột 'C': [5, 12]. Chọn A."
  },
  {
    "id": "Q_MOD_C_014",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["column-modification", "modify-column"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [1, 2, 3]\n})\ndf['Val'] = df['Val'] * 10\nprint(df['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1, 2, 3]",
      "B. [10, 20, 30]",
      "C. [11, 12, 13]",
      "D. Lỗi cú pháp"
    ],
    "correct_option": "B",
    "explanation": "Gán lại giá trị cho một cột đã tồn tại trong DataFrame (`df['Val'] = ...`) sẽ thay thế toàn bộ giá trị cột đó bằng kết quả của biểu thức bên phải.",
    "solution": "**Bước 1:** Nhân từng phần tử cột 'Val' với 10: 1*10 = 10, 2*10 = 20, 3*10 = 30.\n**Bước 2:** Lưu đè lại vào cột 'Val'. Kết quả: [10, 20, 30]. Chọn B."
  },
  {
    "id": "Q_MOD_C_015",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "nlargest"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['A', 'B', 'C', 'D'],\n    'Points': [15, 45, 30, 25]\n})\nresult = df.nlargest(2, 'Points')\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['B', 'C']",
      "B. ['A', 'B']",
      "C. ['B', 'D']",
      "D. ['C', 'D']"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.nlargest(n, columns)` lấy ra `n` dòng có giá trị lớn nhất trong cột chỉ định, sắp xếp giảm dần. 2 giá trị lớn nhất cột Points là 45 (B) và 30 (C).",
    "solution": "**Bước 1:** Sắp xếp cột Points giảm dần: 45 (B), 30 (C), 25 (D), 15 (A).\n**Bước 2:** Lấy 2 dòng lớn nhất đầu tiên: B và C. Chọn A."
  },
  {
    "id": "Q_MOD_C_016",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["filter", "nsmallest"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['A', 'B', 'C', 'D'],\n    'Points': [15, 45, 30, 25]\n})\nresult = df.nsmallest(2, 'Points')\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['A', 'D']",
      "B. ['A', 'B']",
      "C. ['C', 'D']",
      "D. ['A', 'C']"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.nsmallest(n, columns)` lấy ra `n` dòng có giá trị nhỏ nhất trong cột chỉ định, xếp tăng dần. 2 giá trị nhỏ nhất của Points là 15 (A) và 25 (D).",
    "solution": "**Bước 1:** Sắp xếp cột Points tăng dần: 15 (A), 25 (D), 30 (C), 45 (B).\n**Bước 2:** Lấy 2 dòng nhỏ nhất đầu tiên: A và D. Chọn A."
  },
  {
    "id": "Q_MOD_C_017",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["transform", "clip"],
    "content": "Cho Series `s` như sau:\n```python\nimport pandas as pd\ns = pd.Series([5, 12, 1, 8])\nresult = s.clip(lower=3, upper=10)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [5, 10, 3, 8]",
      "B. [3, 10, 3, 10]",
      "C. [5, 12, 1, 8]",
      "D. [3, 12, 1, 10]"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.clip(lower, upper)` giới hạn các giá trị của Series trong khoảng [lower, upper]. Giá trị bé hơn 3 thành 3 (1 -> 3), lớn hơn 10 thành 10 (12 -> 10), còn lại giữ nguyên.",
    "solution": "**Bước 1:** Kiểm tra từng phần tử:\n- 5 nằm trong khoảng [3, 10] -> 5\n- 12 > 10 -> clip thành 10\n- 1 < 3 -> clip thành 3\n- 8 nằm trong khoảng [3, 10] -> 8\n**Bước 2:** Thu được kết quả [5, 10, 3, 8]. Chọn A."
  },
  {
    "id": "Q_MOD_C_018",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["transform", "assign"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2]})\ndf2 = df.assign(B=df['A'] * 10)\nprint('B' in df.columns, 'B' in df2.columns)\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. False True",
      "B. True True",
      "C. True False",
      "D. False False"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.assign()` không thay đổi DataFrame gốc mà trả về một DataFrame mới được bổ sung các cột mới. Do đó cột 'B' không có trong `df` nhưng có trong `df2`.",
    "solution": "**Bước 1:** `df.assign(...)` trả về bản sao chứa cột 'B'.\n**Bước 2:** DataFrame gốc `df` giữ nguyên chỉ có cột 'A'.\n**Bước 3:** `'B' in df.columns` là False; `'B' in df2.columns` là True. Chọn A."
  },
  {
    "id": "Q_MOD_C_019",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["transform", "rank"],
    "content": "Cho Series `s` như sau:\n```python\nimport pandas as pd\ns = pd.Series([10, 30, 20])\nresult = s.rank()\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1.0, 3.0, 2.0]",
      "B. [0.0, 2.0, 1.0]",
      "C. [1.0, 2.0, 3.0]",
      "D. [3.0, 1.0, 2.0]"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.rank()` xếp hạng các phần tử trong Series (mặc định tăng dần, bắt đầu từ 1.0). 10 nhỏ nhất xếp hạng 1.0, 20 xếp hạng 2.0, 30 xếp hạng 3.0. Thứ hạng tương ứng với thứ tự ban đầu là [1.0, 3.0, 2.0].",
    "solution": "**Bước 1:** Sắp xếp Series: 10, 20, 30 tương ứng hạng 1.0, 2.0, 3.0.\n**Bước 2:** Trả về Series xếp hạng theo index gốc: 10 (hạng 1.0), 30 (hạng 3.0), 20 (hạng 2.0).\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_C_020",
    "module_id": "Module_C",
    "difficulty": "Easy",
    "tags": ["sort", "sort-values"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['A', 'B', 'C'],\n    'Score': [7, 9, 8]\n})\nresult = df.sort_values(by='Score', ascending=False)\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['B', 'C', 'A']",
      "B. ['A', 'C', 'B']",
      "C. ['B', 'A', 'C']",
      "D. ['C', 'B', 'A']"
    ],
    "correct_option": "A",
    "explanation": "Tham số `ascending=False` trong `sort_values` sắp xếp các hàng theo cột Score giảm dần. Score giảm dần: 9 (B) -> 8 (C) -> 7 (A).",
    "solution": "**Bước 1:** Sắp xếp Score giảm dần: 9, 8, 7.\n**Bước 2:** Ánh xạ sang cột Name: 'B', 'C', 'A'. Chọn A."
  },
  {
    "id": "Q_MOD_C_021",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "boolean-indexing", "missing-values"],
    "content": "Cho DataFrame `df` chứa giá trị thiếu như sau:\n```python\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({\n    'Val': [10, np.nan, 20, np.nan]\n})\nresult = df[df['Val'] > 15]\nprint(result.index.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [2]",
      "B. [1, 2, 3]",
      "C. [2, 3]",
      "D. Lỗi `ValueError` do so sánh với NaN"
    ],
    "correct_option": "A",
    "explanation": "Khi thực hiện so sánh số học (như `df['Val'] > 15`), mọi phép so sánh với `NaN` đều trả về `False`. Do đó, dòng có `np.nan` không thỏa mãn điều kiện và bị loại bỏ. Chỉ dòng có giá trị 20 (chỉ mục 2) thỏa mãn điều kiện.",
    "solution": "**Bước 1:** So sánh từng phần tử với 15:\n- 10 > 15 -> False\n- np.nan > 15 -> False\n- 20 > 15 -> True\n- np.nan > 15 -> False\n**Bước 2:** Lọc DataFrame theo Boolean Series: [False, False, True, False]. Chỉ còn chỉ mục 2. Chọn A."
  },
  {
    "id": "Q_MOD_C_022",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "query", "variables"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Age': [22, 28, 35, 40]\n})\nmin_age = 30\nresult = df.query('Age >= @min_age')\nprint(result['Age'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [35, 40]",
      "B. [22, 28]",
      "C. Lỗi thực thi do query không truy cập được biến ngoài",
      "D. [22, 28, 35, 40]"
    ],
    "correct_option": "A",
    "explanation": "Ký tự `@` đứng trước một tên biến trong chuỗi biểu thức của `.query()` cho phép pandas tham chiếu tới biến cục bộ hoặc biến toàn cục ở môi trường ngoài DataFrame. Biểu thức tương đương với `Age >= 30`.",
    "solution": "**Bước 1:** Nhận diện ký hiệu `@min_age` tương ứng với giá trị 30.\n**Bước 2:** Lọc các phần tử của cột Age lớn hơn hoặc bằng 30.\n**Bước 3:** Kết quả là [35, 40]. Chọn A."
  },
  {
    "id": "Q_MOD_C_023",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "query", "columns-with-spaces"],
    "content": "Cho DataFrame `df` có tên cột chứa khoảng trắng như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'User Name': ['Alice', 'Bob', 'Charlie'],\n    'Score': [85, 90, 95]\n})\nresult = df.query(\"`User Name` == 'Bob'\")\nprint(result['Score'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [90]",
      "B. Lỗi cú pháp vì tên cột chứa dấu cách",
      "C. [85, 90]",
      "D. []"
    ],
    "correct_option": "A",
    "explanation": "Khi sử dụng phương thức `.query()`, nếu tên cột chứa các ký tự đặc biệt hoặc khoảng trắng, bạn phải bao bọc tên cột đó bằng ký tự backtick (`` ` ``) để trình phân tích của pandas nhận diện đúng.",
    "solution": "**Bước 1:** Bọc tên cột `User Name` trong dấu huyền/backtick: `` `User Name` ``.\n**Bước 2:** Thực hiện phép so sánh `== 'Bob'` trên cột này, tìm được dòng chỉ mục 1.\n**Bước 3:** Trích xuất Score tại dòng này là 90. Chọn A."
  },
  {
    "id": "Q_MOD_C_024",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "isin", "dataframe-filtering"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2, 3, 4],\n    'B': ['x', 'y', 'z', 'w']\n})\nfilter_dict = {'A': [1, 3], 'B': ['x', 'y']}\nresult = df[df.isin(filter_dict).all(axis=1)]\nprint(result['A'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1]",
      "B. [1, 3]",
      "C. [1, 2, 3]",
      "D. Lỗi `ValueError` do truyền dictionary vào isin của DataFrame"
    ],
    "correct_option": "A",
    "explanation": "Khi gọi `df.isin(dict)`, pandas kiểm tra sự tồn tại ở từng cột tương ứng. Kết quả trả về DataFrame gồm các giá trị Boolean. Gọi tiếp `.all(axis=1)` để chọn ra dòng có tất cả các cột đều là True.\n- Dòng 0: A=1 (True), B='x' (True) -> all là True.\n- Dòng 1: A=2 (False), B='y' (True) -> all là False.\n- Dòng 2: A=3 (True), B='z' (False) -> all là False.\n- Dòng 3: A=4 (False), B='w' (False) -> all là False.\nChỉ dòng 0 thỏa mãn.",
    "solution": "**Bước 1:** Thực hiện `df.isin(filter_dict)`:\n- Ô (0, 'A') = True, Ô (0, 'B') = True.\n- Ô (1, 'A') = False, Ô (1, 'B') = True.\n- Ô (2, 'A') = True, Ô (2, 'B') = False.\n- Ô (3, 'A') = False, Ô (3, 'B') = False.\n**Bước 2:** Áp dụng `.all(axis=1)`: dòng 0 thu được True, các dòng khác False.\n**Bước 3:** Lọc DataFrame, cột 'A' còn lại [1]. Chọn A."
  },
  {
    "id": "Q_MOD_C_025",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "between", "inclusive"],
    "content": "Cho Series `s` như sau:\n```python\nimport pandas as pd\ns = pd.Series([1, 2, 3, 4, 5])\nresult = s[s.between(2, 4, inclusive='neither')]\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [3]",
      "B. [2, 3, 4]",
      "C. [2, 4]",
      "D. [1, 5]"
    ],
    "correct_option": "A",
    "explanation": "Tham số `inclusive='neither'` trong phương thức `.between()` sẽ loại trừ hai giá trị biên (ở đây là 2 và 4), tương đương điều kiện lọc `2 < x < 4`. Chỉ có số 3 thỏa mãn.",
    "solution": "**Bước 1:** Xét khoảng loại trừ biên: 2 < x < 4.\n**Bước 2:** Các phần tử thỏa mãn: chỉ có 3.\n**Bước 3:** Kết quả lọc trả về Series chứa [3]. Chọn A."
  },
  {
    "id": "Q_MOD_C_026",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["sort", "sort-values", "key"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Str': ['apple', 'Banana', 'cherry']\n})\nresult = df.sort_values(by='Str', key=lambda col: col.str.lower())\nprint(result['Str'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['apple', 'Banana', 'cherry']",
      "B. ['Banana', 'apple', 'cherry']",
      "C. ['cherry', 'Banana', 'apple']",
      "D. Lỗi vì tham số `key` không khả dụng trong `sort_values`"
    ],
    "correct_option": "A",
    "explanation": "Tham số `key` áp dụng một hàm lên cột trước khi so sánh sắp xếp. Khi chuyển tất cả về chữ thường bằng `.str.lower()`, thứ tự so sánh là 'apple' < 'banana' < 'cherry'. Do đó trật tự dòng ban đầu được giữ nguyên. Nếu không có `key`, chữ in hoa xếp trước nên kết quả sẽ là ['Banana', 'apple', 'cherry'].",
    "solution": "**Bước 1:** Chuyển cột 'Str' thành chữ thường: 'apple', 'banana', 'cherry'.\n**Bước 2:** Sắp xếp danh sách đã chuyển đổi này: 'apple' -> 'banana' -> 'cherry'.\n**Bước 3:** Áp dụng trật tự này lên DataFrame gốc: 'apple' (index 0), 'Banana' (index 1), 'cherry' (index 2). Chọn A."
  },
  {
    "id": "Q_MOD_C_027",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["sort", "sort-values", "na-position"],
    "content": "Cho Series `s` chứa giá trị thiếu như sau:\n```python\nimport pandas as pd\nimport numpy as np\ns = pd.Series([10, np.nan, 5, 20])\nresult = s.sort_values(ascending=True, na_position='first')\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [nan, 5.0, 10.0, 20.0]",
      "B. [5.0, 10.0, 20.0, nan]",
      "C. [nan, 20.0, 10.0, 5.0]",
      "D. Lỗi vì `na_position` không nhận giá trị `'first'`"
    ],
    "correct_option": "A",
    "explanation": "Mặc định, các giá trị NaN được xếp cuối cùng khi sắp xếp (`na_position='last'`). Khi đặt `na_position='first'`, NaN sẽ được đưa lên đầu danh sách kết quả bất kể sắp xếp tăng hay giảm dần.",
    "solution": "**Bước 1:** Nhận diện tham số `na_position='first'`: xếp NaN lên đầu.\n**Bước 2:** Sắp xếp phần còn lại [10, 5, 20] tăng dần -> [5, 10, 20].\n**Bước 3:** Ghép NaN vào đầu -> [nan, 5.0, 10.0, 20.0]. Chọn A."
  },
  {
    "id": "Q_MOD_C_028",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["sort", "sort-index", "multi-index"],
    "content": "Cho DataFrame `df` có MultiIndex như sau:\n```python\nimport pandas as pd\narrays = [\n    ['B', 'B', 'A', 'A'],\n    [2, 1, 2, 1]\n]\nindex = pd.MultiIndex.from_arrays(arrays, names=['L1', 'L2'])\ndf = pd.DataFrame({'Val': [10, 20, 30, 40]}, index=index)\nresult = df.sort_index(level=['L1', 'L2'], ascending=[True, False])\nprint(result['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [30, 40, 10, 20]",
      "B. [40, 30, 20, 10]",
      "C. [30, 40, 20, 10]",
      "D. [40, 30, 10, 20]"
    ],
    "correct_option": "A",
    "explanation": "Khi sắp xếp MultiIndex, level L1 tăng dần sẽ xếp 'A' trước 'B'. Với L1 = 'A', level L2 giảm dần (ascending=False) xếp 2 trước 1, tương ứng index ('A', 2) -> ('A', 1). Với L1 = 'B', level L2 giảm dần xếp 2 trước 1, tương ứng index ('B', 2) -> ('B', 1). Giá trị Val tương ứng là [30, 40, 10, 20].",
    "solution": "**Bước 1:** Phân tích thứ tự sắp xếp index mong muốn:\n- L1: A trước, B sau.\n- Nhóm A: L2 giảm dần (2 -> 1). Cặp tương ứng: ('A', 2) và ('A', 1).\n- Nhóm B: L2 giảm dần (2 -> 1). Cặp tương ứng: ('B', 2) và ('B', 1).\n**Bước 2:** Tra cứu giá trị Val tương ứng:\n- ('A', 2) -> 30\n- ('A', 1) -> 40\n- ('B', 2) -> 10\n- ('B', 1) -> 20\n**Bước 3:** Ghép lại thành danh sách: [30, 40, 10, 20]. Chọn A."
  },
  {
    "id": "Q_MOD_C_029",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "apply", "axis"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2, 3],\n    'B': [4, 5, 6]\n})\nresult = df.apply(lambda row: row['A'] + row['B'], axis=1)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [5, 7, 9]",
      "B. [6, 15]",
      "C. [5, 5, 5]",
      "D. Lỗi vì lambda không thể cộng trực tiếp các cột"
    ],
    "correct_option": "A",
    "explanation": "Khi sử dụng `.apply(..., axis=1)`, hàm lambda sẽ được thực thi trên từng dòng của DataFrame (được truyền vào dưới dạng một Series). Biểu thức `row['A'] + row['B']` tính tổng hai cột của từng hàng, trả về Series: [1+4, 2+5, 3+6].",
    "solution": "**Bước 1:** Xác định `axis=1` nghĩa là duyệt qua từng hàng.\n**Bước 2:** Tính toán tổng `A + B` cho từng hàng:\n- Hàng 0: 1 + 4 = 5.\n- Hàng 1: 2 + 5 = 7.\n- Hàng 2: 3 + 6 = 9.\n**Bước 3:** Tạo Series kết quả: [5, 7, 9]. Chọn A."
  },
  {
    "id": "Q_MOD_C_030",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "map", "deprecated"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2],\n    'B': [3, 4]\n})\n# Trong Pandas >= 2.1.0, phương thức map được dùng thay thế applymap\nresult = df.map(lambda x: x * 10)\nprint(result.loc[0, 'A'])\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. 10",
      "B. 1",
      "C. Lỗi vì map chỉ dùng được cho Series",
      "D. [10, 20]"
    ],
    "correct_option": "A",
    "explanation": "Từ phiên bản Pandas 2.1.0, `.applymap()` được đổi tên thành `.map()` trên DataFrame để thực hiện các phép biến đổi element-wise (từng phần tử) trên toàn bộ DataFrame. Giá trị tại dòng 0 cột 'A' là 1, nhân 10 sẽ ra 10.",
    "solution": "**Bước 1:** Phương thức `df.map` nhân mỗi phần tử của DataFrame với 10.\n**Bước 2:** Giá trị tại `df.loc[0, 'A']` ban đầu là 1, sau khi biến đổi thành 1 * 10 = 10. Chọn A."
  },
  {
    "id": "Q_MOD_C_031",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "assign", "lambda-chaining"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2, 3]\n})\nresult = df.assign(\n    B = lambda x: x['A'] * 2,\n    C = lambda x: x['B'] + 10\n)\nprint(result['C'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [12, 14, 16]",
      "B. Lỗi KeyError vì cột 'B' chưa có sẵn tại thời điểm định nghĩa biểu thức cho 'C'",
      "C. [11, 12, 13]",
      "D. [10, 20, 30]"
    ],
    "correct_option": "A",
    "explanation": "Trong `.assign()`, các đối số được đánh giá tuần tự từ trái sang phải. Đối số `x` truyền vào hàm lambda đại diện cho DataFrame tạm thời tại bước đánh giá đó. Vì vậy cột 'B' được tạo ra trước, sau đó biểu thức tính cột 'C' có thể tham chiếu trực tiếp đến cột 'B' vừa tạo.",
    "solution": "**Bước 1:** Tạo cột B: B = A * 2 -> B = [2, 4, 6].\n**Bước 2:** Tạo cột C: C = B + 10 -> C = [12, 14, 16].\n**Bước 3:** Lấy cột 'C' kết quả: [12, 14, 16]. Chọn A."
  },
  {
    "id": "Q_MOD_C_032",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "rank", "method"],
    "content": "Cho Series `s` chứa các phần tử trùng nhau như sau:\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 20, 30])\nresult = s.rank(method='min')\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1.0, 2.0, 2.0, 4.0]",
      "B. [1.0, 2.5, 2.5, 4.0]",
      "C. [1.0, 2.0, 3.0, 4.0]",
      "D. [1.0, 3.0, 3.0, 4.0]"
    ],
    "correct_option": "A",
    "explanation": "Khi sử dụng `method='min'`, các giá trị trùng nhau sẽ cùng nhận thứ hạng nhỏ nhất trong nhóm trùng đó. Hai số 20 nằm ở vị trí thứ 2 và thứ 3, giá trị nhỏ nhất của vị trí là 2. Phần tử 30 đứng tiếp theo nhận thứ hạng 4.0.",
    "solution": "**Bước 1:** Xác định vị trí tự nhiên (1-based) sau khi xếp hạng tăng dần: 10 (vị trí 1), 20 (vị trí 2), 20 (vị trí 3), 30 (vị trí 4).\n**Bước 2:** Với `method='min'`, hai giá trị trùng 20 cùng lấy thứ hạng tối thiểu là min(2, 3) = 2.0.\n**Bước 3:** Giá trị 30 lấy hạng 4.0.\n**Bước 4:** Kết quả: [1.0, 2.0, 2.0, 4.0]. Chọn A."
  },
  {
    "id": "Q_MOD_C_033",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "clip", "dynamic-bounds"],
    "content": "Cho Series `s` và Series giới hạn dưới `lower_bounds` như sau:\n```python\nimport pandas as pd\ns = pd.Series([5, 10, 15, 20])\nlower_bounds = pd.Series([6, 6, 12, 22])\nresult = s.clip(lower=lower_bounds, axis=0)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [6, 10, 15, 22]",
      "B. [5, 10, 15, 20]",
      "C. [6, 6, 12, 22]",
      "D. Lỗi vì tham số lower của clip bắt buộc phải là một giá trị số đơn lẻ"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.clip()` cho phép truyền tham số `lower` và `upper` là các cấu trúc dạng danh sách (list, Series) để áp dụng ranh giới động theo từng phần tử. Phép so sánh sẽ lấy giá trị lớn hơn giữa `s` và `lower_bounds` ở từng index tương ứng.",
    "solution": "**Bước 1:** So sánh từng dòng: max(s[i], lower_bounds[i]).\n- i=0: max(5, 6) = 6\n- i=1: max(10, 6) = 10\n- i=2: max(15, 12) = 15\n- i=3: max(20, 22) = 22\n**Bước 2:** Kết quả: [6, 10, 15, 22]. Chọn A."
  },
  {
    "id": "Q_MOD_C_034",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "nlargest", "keep"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [10, 30, 30, 20]\n}, index=['a', 'b', 'c', 'd'])\nresult = df.nlargest(2, 'Val', keep='last')\nprint(result.index.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['c', 'b']",
      "B. ['b', 'c']",
      "C. ['b', 'd']",
      "D. Lỗi vì tham số `keep` của `nlargest` không nhận giá trị `'last'`"
    ],
    "correct_option": "A",
    "explanation": "Tham số `keep='last'` chỉ ra rằng trong trường hợp trùng lặp giá trị lớn nhất, phần tử xuất hiện sau trong dữ liệu gốc sẽ được ưu tiên giữ lại. Hai hàng có giá trị lớn nhất là 30 (b và c). Với `keep='last'`, hàng 'c' xuất hiện sau sẽ được xếp trước hàng 'b'.",
    "solution": "**Bước 1:** Xác định 2 phần tử lớn nhất: 30 ('b'), 30 ('c').\n**Bước 2:** Với `keep='last'`, ưu tiên hàng xuất hiện cuối cùng trong cặp trùng: 'c' xếp trước, rồi đến 'b'.\n**Bước 3:** Danh sách index thu được là ['c', 'b']. Chọn A."
  },
  {
    "id": "Q_MOD_C_035",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["column-modification", "setting-with-copy"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Val': [1, 2, 3]})\nsub_df = df[df['Val'] > 1]\nsub_df.loc[:, 'Val'] = 100\nprint(df['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1, 2, 3] (Kèm cảnh báo SettingWithCopyWarning)",
      "B. [1, 100, 100]",
      "C. Lỗi thực thi AttributeError",
      "D. [1, 2, 3] (Không có cảnh báo nào xuất hiện)"
    ],
    "correct_option": "A",
    "explanation": "Biểu thức `sub_df = df[df['Val'] > 1]` tạo ra một DataFrame con (thường là một bản sao). Việc gán giá trị trực tiếp lên `sub_df` bằng `.loc` kích hoạt cảnh báo `SettingWithCopyWarning` và không làm thay đổi giá trị của DataFrame gốc `df`.",
    "solution": "**Bước 1:** `df[df['Val'] > 1]` trả về một DataFrame mới độc lập. Gán nó cho `sub_df`.\n**Bước 2:** Thao tác trên `sub_df` không ảnh hưởng tới `df`.\n**Bước 3:** Cột 'Val' trong `df` giữ nguyên giá trị là [1, 2, 3], và cảnh báo SettingWithCopyWarning được ném ra. Chọn A."
  },
  {
    "id": "Q_MOD_C_036",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "isin", "logical-not"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Name': ['An', 'Bình', 'Chi', 'Dương']\n})\nexclude = ['An', 'Chi']\nresult = df[~df['Name'].isin(exclude)]\nprint(result['Name'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['Bình', 'Dương']",
      "B. ['An', 'Chi']",
      "C. []",
      "D. Lỗi cú pháp do đặt dấu ngã trước Series"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `df['Name'].isin(exclude)` trả về True cho 'An' và 'Chi'. Toán tử phủ định `~` đảo ngược giá trị Boolean thành True cho 'Bình' và 'Dương', lọc ra các phần tử không nằm trong danh sách loại trừ.",
    "solution": "**Bước 1:** `df['Name'].isin(exclude)` -> [True, False, True, False].\n**Bước 2:** Đảo ngược bằng `~` -> [False, True, False, True].\n**Bước 3:** Lọc DataFrame giữ lại các dòng ứng với True: 'Bình' và 'Dương'. Chọn A."
  },
  {
    "id": "Q_MOD_C_037",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["filter", "astype"],
    "content": "Cho Series `s` dạng chuỗi như sau:\n```python\nimport pandas as pd\ns = pd.Series(['1', '2', '3'])\nresult = s.astype(int)[s.astype(int) > 1]\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [2, 3]",
      "B. ['2', '3']",
      "C. Lỗi vì s chứa kiểu chuỗi không so sánh được với số nguyên",
      "D. [1, 2, 3]"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.astype(int)` ép kiểu dữ liệu của Series từ chuỗi sang số nguyên. Sau đó, phép so sánh số học `> 1` được thực hiện thành công và trả về Series kiểu số nguyên chứa [2, 3].",
    "solution": "**Bước 1:** Ép kiểu Series `s` sang kiểu int: [1, 2, 3].\n**Bước 2:** Lọc các phần tử lớn hơn 1: số 2 và 3.\n**Bước 3:** Kết quả dạng list là [2, 3]. Chọn A."
  },
  {
    "id": "Q_MOD_C_038",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "map", "callable"],
    "content": "Cho Series `s` như sau:\n```python\nimport pandas as pd\ns = pd.Series([1, 2, 3])\ndef process(x):\n    return x * 2 if x % 2 != 0 else x\n\nresult = s.map(process)\nprint(result.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [2, 2, 6]",
      "B. [2, 4, 6]",
      "C. [1, 4, 3]",
      "D. Lỗi vì map chỉ nhận dictionary chứ không nhận hàm callable"
    ],
    "correct_option": "A",
    "explanation": "Series `.map()` chấp nhận một hàm callable làm tham số đầu vào tương tự như `.apply()`. Hàm `process(x)` kiểm tra: nếu `x` là số lẻ thì nhân 2, nếu chẵn thì giữ nguyên. Các giá trị chuyển đổi: 1 -> 2, 2 -> 2, 3 -> 6.",
    "solution": "**Bước 1:** Áp dụng hàm `process` lên từng phần tử:\n- 1 (lẻ) -> 1 * 2 = 2.\n- 2 (chẵn) -> 2.\n- 3 (lẻ) -> 3 * 2 = 6.\n**Bước 2:** Kết quả Series: [2, 2, 6]. Chọn A."
  },
  {
    "id": "Q_MOD_C_039",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["transform", "apply", "axis"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [10, 20]\n})\ndef expand(row):\n    return pd.Series([row['Val'], row['Val'] * 2], index=['orig', 'double'])\n\nresult = df.apply(expand, axis=1)\nprint(result.columns.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['orig', 'double']",
      "B. ['Val']",
      "C. ['Val', 'orig', 'double']",
      "D. Lỗi vì apply không cho phép trả về đối tượng Series"
    ],
    "correct_option": "A",
    "explanation": "Khi hàm được áp dụng theo hàng (`axis=1`) trả về một Series, pandas tự động ghép các Series này thành một DataFrame mới. Chỉ mục (index) của Series trả về sẽ trở thành tên các cột của DataFrame mới.",
    "solution": "**Bước 1:** Mỗi hàng gọi hàm `expand(row)`, trả về Series với index `['orig', 'double']`.\n**Bước 2:** Pandas ghép các Series theo hàng, tạo DataFrame mới có tên cột là index của Series này.\n**Bước 3:** Lấy danh sách cột của DataFrame mới: ['orig', 'double']. Chọn A."
  },
  {
    "id": "Q_MOD_C_040",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": ["sort", "sort-values", "inplace"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [3, 1, 2]\n}, index=['a', 'b', 'c'])\ndf.sort_values(by='Val', inplace=True)\nprint(df.index.tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. ['b', 'c', 'a']",
      "B. ['a', 'b', 'c']",
      "C. ['b', 'a', 'c']",
      "D. Lỗi vì inplace=True trả về None nên không có thuộc tính index"
    ],
    "correct_option": "A",
    "explanation": "Đặt `inplace=True` sẽ sắp xếp trực tiếp trên DataFrame hiện tại. Khi sắp xếp cột 'Val' tăng dần: 1 (index 'b') -> 2 (index 'c') -> 3 (index 'a'). Chỉ mục di chuyển tương ứng theo các hàng dữ liệu.",
    "solution": "**Bước 1:** Giá trị Val tăng dần: 1, 2, 3.\n**Bước 2:** Các index tương ứng di chuyển theo: 'b', 'c', 'a'.\n**Bước 3:** `inplace=True` sửa đổi trực tiếp `df`, do đó `df.index.tolist()` trả về ['b', 'c', 'a']. Chọn A."
  },
  {
    "id": "Q_MOD_C_041",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["filter", "boolean-indexing", "index-alignment"],
    "content": "Cho DataFrame `df` và Series Boolean `mask` có nhãn chỉ mục đảo ngược như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [10, 20, 30]\n}, index=[0, 1, 2])\n\nmask = pd.Series([True, False, True], index=[2, 1, 0])\nresult = df[mask]\nprint(result['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [10, 30]",
      "B. [30, 10]",
      "C. [10, 20, 30]",
      "D. Lỗi IndexingError do chỉ mục của mask lệch thứ tự so với DataFrame"
    ],
    "correct_option": "A",
    "explanation": "Khi lọc DataFrame bằng Series Boolean, pandas sẽ căn chỉnh chỉ mục (index alignment) của Series đó khớp với chỉ mục của DataFrame trước khi áp dụng. \n- Dòng chỉ mục 0 của `df` khớp với `mask[0]` là True -> Giữ.\n- Dòng chỉ mục 1 của `df` khớp với `mask[1]` là False -> Loại.\n- Dòng chỉ mục 2 của `df` khớp với `mask[2]` là True -> Giữ.\nThứ tự các dòng trong kết quả giữ nguyên theo DataFrame gốc: dòng 0 rồi dòng 2.",
    "solution": "**Bước 1:** Đồng bộ index giữa DataFrame và mask:\n- df[idx=0] tương ứng mask[idx=0] (giá trị True).\n- df[idx=1] tương ứng mask[idx=1] (giá trị False).\n- df[idx=2] tương ứng mask[idx=2] (giá trị True).\n**Bước 2:** Lọc dữ liệu theo trật tự dòng ban đầu của DataFrame: dòng 0 (10) và dòng 2 (30).\n**Bước 3:** Kết quả là [10, 30]. Chọn A."
  },
  {
    "id": "Q_MOD_C_042",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["filter", "query", "special-columns"],
    "content": "Cho DataFrame `df` có tên cột chứa dấu chấm như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A.1': [10, 20, 30],\n    'B.2': [15, 15, 35]\n})\nresult = df.query(\"`A.1` > `B.2`\")\nprint(result['A.1'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [20]",
      "B. Lỗi cú pháp vì dấu chấm được hiểu là truy cập thuộc tính trong biểu thức query",
      "C. [20, 30]",
      "D. []"
    ],
    "correct_option": "A",
    "explanation": "Dấu chấm `.` trong `.query()` là toán tử đặc biệt (truy cập thuộc tính). Để viết câu lệnh lọc so sánh giữa hai cột chứa dấu chấm, bắt buộc phải đặt tên cột bên trong cặp dấu backtick (`` ` ``) để pandas diễn giải đúng.",
    "solution": "**Bước 1:** Dùng dấu backtick bọc tên cột: `` `A.1` `` và `` `B.2` ``.\n**Bước 2:** So sánh từng hàng:\n- 10 > 15 -> False\n- 20 > 15 -> True\n- 30 > 35 -> False\n**Bước 3:** Giá trị cột 'A.1' thỏa mãn là 20. Chọn A."
  },
  {
    "id": "Q_MOD_C_043",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["filter", "query", "performance", "numexpr"],
    "content": "Giả sử `df` là một DataFrame lớn (hàng triệu dòng). Phương án nào sau đây thực hiện lọc dữ liệu tối ưu nhất về mặt bộ nhớ và tốc độ khi đã cài đặt thư viện `numexpr`?\n```python\n# Giả sử cần lọc: cột A > 5 và cột B < 10\n```",
    "options": [
      "A. df.query('A > 5 and B < 10')",
      "B. df[(df['A'] > 5) & (df['B'] < 10)]",
      "C. df.loc[(df['A'] > 5) & (df['B'] < 10)]",
      "D. df.apply(lambda r: r['A'] > 5 and r['B'] < 10, axis=1)"
    ],
    "correct_option": "A",
    "explanation": "Với dữ liệu lớn, các toán tử Boolean thông thường (`&`, `|`) phải tạo ra các mảng Boolean trung gian chiếm dụng bộ nhớ RAM và làm giảm tốc độ tính toán. Phương thức `.query()` sử dụng thư viện `numexpr` để tối ưu hóa biểu thức chuỗi, tính toán song song đa luồng và tránh tạo ra các mảng trung gian, mang lại hiệu năng cao nhất.",
    "solution": "**Bước 1:** Nhận biết điểm yếu của Boolean Indexing thông thường: tạo các Series Boolean trung gian có kích thước bằng DataFrame ban đầu.\n**Bước 2:** Phương thức `.query()` biên dịch biểu thức chuỗi bằng `numexpr` để thực hiện tính toán hiệu năng cao trực tiếp trên C.\n**Bước 3:** `.apply` thực thi vòng lặp Python cực kỳ chậm.\n**Bước 4:** Lựa chọn tối ưu nhất là A."
  },
  {
    "id": "Q_MOD_C_044",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["sort", "sort-index", "multi-index"],
    "content": "Cho DataFrame `df` có MultiIndex như sau:\n```python\nimport pandas as pd\nindex = pd.MultiIndex.from_tuples([\n    ('A', 1), ('B', 2), ('A', 2), ('B', 1)\n], names=['class', 'id'])\ndf = pd.DataFrame({'Val': [10, 20, 30, 40]}, index=index)\n\n# Sắp xếp index theo level 'class' tăng dần, giữ nguyên thứ tự ban đầu của level 'id'\nresult = df.sort_index(level='class', sort_remaining=False)\nprint(result['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [10, 30, 20, 40]",
      "B. [10, 30, 40, 20]",
      "C. [10, 20, 30, 40]",
      "D. Lỗi vì sort_remaining không phải là tham số hợp lệ của sort_index"
    ],
    "correct_option": "A",
    "explanation": "Khi gọi `sort_index()`, mặc định `sort_remaining=True` sẽ tự động sắp xếp các level chỉ mục còn lại sau khi đã sắp xếp level được chỉ định. Đặt `sort_remaining=False` sẽ yêu cầu pandas giữ nguyên trật tự xuất hiện ban đầu của level 'id' trong mỗi nhóm 'class'. \n- Nhóm 'A': có các id xuất hiện ban đầu là 1 (Val=10), rồi đến 2 (Val=30) -> [10, 30].\n- Nhóm 'B': có các id xuất hiện ban đầu là 2 (Val=20), rồi đến 1 (Val=40) -> [20, 40].",
    "solution": "**Bước 1:** Xác định mục tiêu: sắp xếp theo 'class' (nhóm 'A' đứng trước nhóm 'B').\n**Bước 2:** Với `sort_remaining=False`, thứ tự các hàng trong cùng một nhóm 'class' không bị thay đổi theo level 'id':\n- Nhóm 'A': dòng ('A', 1) xuất hiện trước ('A', 2) trong DataFrame gốc -> [10, 30].\n- Nhóm 'B': dòng ('B', 2) xuất hiện trước ('B', 1) trong DataFrame gốc -> [20, 40].\n**Bước 3:** Ghép hai nhóm thu được [10, 30, 20, 40]. Chọn A."
  },
  {
    "id": "Q_MOD_C_045",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["transform", "apply", "result-type"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2],\n    'B': [3, 4]\n})\ndef process(row):\n    return [row['A'] + 10, row['B'] + 20]\n\nresult = df.apply(process, axis=1, result_type='expand')\nprint(result.shape)\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. (2, 2)",
      "B. (2,)",
      "C. (2, 1)",
      "D. Lỗi vì hàm không trả về Series"
    ],
    "correct_option": "A",
    "explanation": "Khi hàm trả về một danh sách (list/tuple) và ta thiết lập tham số `result_type='expand'` trong `.apply()`, pandas sẽ tự động tách các phần tử của danh sách đó thành các cột của một DataFrame mới. Ở đây, mỗi dòng trả về một danh sách 2 phần tử, tạo nên một DataFrame mới kích thước 2 hàng, 2 cột.",
    "solution": "**Bước 1:** Hàm `process` trả về một list chứa 2 giá trị.\n**Bước 2:** `result_type='expand'` yêu cầu pandas phân tách danh sách này thành các cột riêng biệt thay vì giữ nguyên dạng danh sách.\n**Bước 3:** DataFrame kết quả có 2 hàng và 2 cột. `shape` trả về là (2, 2). Chọn A."
  },
  {
    "id": "Q_MOD_C_046",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["transform", "groupby", "rank"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Group': ['A', 'A', 'B', 'B', 'B'],\n    'Score': [10, 20, 20, 10, 30]\n})\ndf['Rank'] = df.groupby('Group')['Score'].rank(method='first')\nprint(df['Rank'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [1.0, 2.0, 2.0, 1.0, 3.0]",
      "B. [1.0, 2.0, 1.0, 2.0, 3.0]",
      "C. [1.0, 2.0, 1.5, 1.5, 3.0]",
      "D. [2.0, 1.0, 2.0, 1.0, 3.0]"
    ],
    "correct_option": "A",
    "explanation": "Khi sử dụng `.groupby().rank(method='first')`, thứ hạng được tính độc lập trong từng nhóm dựa trên giá trị cột Score tăng dần. Trong trường hợp trùng giá trị, phần tử xuất hiện trước sẽ nhận hạng nhỏ hơn.\n- Nhóm A: Score = [10, 20] -> Hạng: [1.0, 2.0].\n- Nhóm B: Score = [20, 10, 30]. Sắp xếp tăng dần: 10 (hạng 1.0), 20 (hạng 2.0), 30 (hạng 3.0). Trình tự hạng theo hàng gốc là [2.0, 1.0, 3.0].\nGhép lại theo thứ tự index gốc: [1.0, 2.0, 2.0, 1.0, 3.0].",
    "solution": "**Bước 1:** Phân nhóm theo Group:\n- Nhóm A (chỉ mục 0, 1): Score = [10, 20]. Không có trùng, rank = [1.0, 2.0].\n- Nhóm B (chỉ mục 2, 3, 4): Score = [20, 10, 30]. Sắp xếp: 10 (chỉ mục 3) hạng 1.0, 20 (chỉ mục 2) hạng 2.0, 30 (chỉ mục 4) hạng 3.0. Trình tự hạng: [2.0, 1.0, 3.0].\n**Bước 2:** Kết hợp lại theo index ban đầu của DataFrame: [1.0, 2.0, 2.0, 1.0, 3.0]. Chọn A."
  },
  {
    "id": "Q_MOD_C_047",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["transform", "method-chaining", "assign"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': [1, 2, 3, 4]\n})\nresult = (df\n    .assign(B = lambda df_: df_['A'] * 3)\n    .query(\"B > 5\")\n    .assign(C = lambda df_: df_['B'] + df_['A'])\n)\nprint(result['C'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [8, 12, 16]",
      "B. [4, 8, 12, 16]",
      "C. Lỗi vì lambda trong bước tính C tham chiếu tới DataFrame gốc df không chứa cột B",
      "D. [6, 9, 12]"
    ],
    "correct_option": "A",
    "explanation": "Trong chuỗi phương thức, tham số `df_` của hàm lambda đại diện cho trạng thái của DataFrame tại bước trung gian hiện tại. \n- `assign(B=...)` tạo cột B = [3, 6, 9, 12].\n- `query('B > 5')` lọc bỏ dòng đầu tiên (B=3). Còn lại 3 dòng với A = [2, 3, 4] và B = [6, 9, 12].\n- `assign(C=...)` tính C = B + A -> [6+2, 9+3, 12+4] = [8, 12, 16].",
    "solution": "**Bước 1:** Tính cột B: [3, 6, 9, 12].\n**Bước 2:** Lọc các dòng B > 5: giữ lại các dòng chỉ mục 1 (A=2, B=6), 2 (A=3, B=9), 3 (A=4, B=12).\n**Bước 3:** Tính cột C = B + A: [6+2, 9+3, 12+4] = [8, 12, 16]. Chọn A."
  },
  {
    "id": "Q_MOD_C_048",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["transform", "apply", "performance", "vectorization"],
    "content": "Giả sử có hàm tính toán đơn giản:\n```python\ndef my_func(x):\n    return x * 2 + 1\n```\nKhi áp dụng cho cột 'A' của DataFrame `df` có kích thước lớn, phương án nào cho tốc độ thực thi nhanh nhất?",
    "options": [
      "A. df['A'] * 2 + 1",
      "B. df['A'].apply(my_func)",
      "C. df['A'].apply(my_func, engine='numba')",
      "D. [my_func(val) for val in df['A']]"
    ],
    "correct_option": "A",
    "explanation": "Các phép toán Vectorized gốc (`df['A'] * 2 + 1`) được thực hiện bằng mã C đã được tối ưu hóa sâu trong numpy/pandas. Chúng không tốn chi phí overhead để gọi hàm Python hoặc biên dịch JIT của Numba cho các thao tác đơn giản. Do đó, vector hóa gốc luôn có hiệu năng vượt trội nhất.",
    "solution": "**Bước 1:** Đánh giá tính chất phép toán: phép toán đơn giản. Phép toán vectorized trực tiếp của Pandas/NumPy chạy hoàn toàn dưới tầng C.\n**Bước 2:** `.apply()` gọi hàm Python trên từng dòng nên rất chậm.\n**Bước 3:** Numba engine chỉ tối ưu cho các hàm tính toán logic phức tạp mà NumPy không hỗ trợ trực tiếp.\n**Bước 4:** Chọn phương án A."
  },
  {
    "id": "Q_MOD_C_049",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["filter", "cummax", "boolean-indexing"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Val': [10, 5, 20, 15, 30]\n})\nmask = df['Val'] >= df['Val'].cummax()\nresult = df[mask]\nprint(result['Val'].tolist())\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. [10, 20, 30]",
      "B. [10, 5, 20, 15, 30]",
      "C. [20, 30]",
      "D. [10, 20]"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.cummax()` tính giá trị lớn nhất tích lũy từ đầu đến vị trí hiện tại. Dòng được chọn nếu giá trị hiện tại lớn hơn hoặc bằng giá trị lớn nhất tích lũy trước đó.\n- Dòng 0: 10 >= 10 -> True.\n- Dòng 1: 5 >= 10 -> False.\n- Dòng 2: 20 >= 20 -> True.\n- Dòng 3: 15 >= 20 -> False.\n- Dòng 4: 30 >= 30 -> True.\nKết quả là [10, 20, 30].",
    "solution": "**Bước 1:** Tính `df['Val'].cummax()`: [10, 10, 20, 20, 30].\n**Bước 2:** So sánh `df['Val'] >= cummax`: [True, False, True, False, True].\n**Bước 3:** Lọc DataFrame theo mask, thu được các giá trị tương ứng: [10, 20, 30]. Chọn A."
  },
  {
    "id": "Q_MOD_C_050",
    "module_id": "Module_C",
    "difficulty": "Hard",
    "tags": ["transform", "copy-on-write", "views-vs-copies"],
    "content": "Giả sử chạy trên Pandas 2.0+ với chế độ Copy-on-Write (CoW) được kích hoạt:\n```python\nimport pandas as pd\npd.options.mode.copy_on_write = True\n\ndf = pd.DataFrame({'A': [1, 2, 3]})\ndf2 = df['A']\ndf2.iloc[0] = 100\n\nprint(df.loc[0, 'A'])\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. 1",
      "B. 100",
      "C. Lỗi SettingWithCopyError do cấm thay đổi trực tiếp",
      "D. NaN"
    ],
    "correct_option": "A",
    "explanation": "Khi chế độ Copy-on-Write (CoW) được kích hoạt, bất kỳ thay đổi nào thực hiện trên một DataFrame/Series được trích xuất (ở đây là `df2`) sẽ kích hoạt một bản sao ngầm độc lập trước khi thay đổi được ghi vào bộ nhớ. Do đó, DataFrame gốc `df` hoàn toàn không bị ảnh hưởng và giữ nguyên giá trị ban đầu là 1.",
    "solution": "**Bước 1:** `df2 = df['A']` trỏ đến cột 'A' dưới dạng một view.\n**Bước 2:** Khi thực hiện `df2.iloc[0] = 100` với CoW = True, Pandas sẽ sao chép mảng dữ liệu của `df2` sang một vùng nhớ mới trước khi gán giá trị 100.\n**Bước 3:** DataFrame gốc `df` không thay đổi, giá trị tại `df.loc[0, 'A']` vẫn là 1. Chọn A."
  }
];
