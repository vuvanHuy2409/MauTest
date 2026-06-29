const QUESTIONS_A = [
  {
    "id": "Q_MOD_A_001",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "creation"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30, 40])\nprint(s.index)\n```\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "A. RangeIndex(start=0, stop=4, step=1)",
      "B. Index([1, 2, 3, 4], dtype='int64')",
      "C. Int64Index([0, 1, 2, 3])",
      "D. RangeIndex(start=1, stop=5, step=1)"
    ],
    "correct_option": "A",
    "explanation": "Khi khởi tạo một Pandas Series từ một list mà không chỉ định rõ đối số `index`, Pandas sẽ tự động tạo một chỉ mục mặc định là một dãy số nguyên tăng dần từ 0 đến n-1 (trong đó n là độ dài của list), được biểu diễn bằng đối tượng `RangeIndex(start=0, stop=4, step=1)`.",
    "solution": "**Bước 1:** Khởi tạo Series `s` với danh sách có 4 phần tử.\n**Bước 2:** Chỉ mục mặc định của Series sẽ bắt đầu từ 0 đến 3 với bước nhảy 1.\n**Bước 3:** Thuộc tính `s.index` trả về `RangeIndex(start=0, stop=4, step=1)`. Chọn A."
  },
  {
    "id": "Q_MOD_A_002",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "creation", "index"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ns = pd.Series([1, 2, 3], index=['a', 'b', 'c'])\nprint(s['b'])\n```\nGiá trị in ra màn hình là bao nhiêu?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. b"
    ],
    "correct_option": "B",
    "explanation": "Khi ta truyền đối số `index=['a', 'b', 'c']`, Series `s` sẽ ánh xạ các chỉ mục dạng chuỗi tương ứng với các giá trị đầu vào. Cụ thể: 'a' -> 1, 'b' -> 2, 'c' -> 3. Do đó, truy xuất `s['b']` sẽ trả về giá trị 2.",
    "solution": "**Bước 1:** Đối chiếu nhãn 'b' trong danh sách index.\n**Bước 2:** Tìm phần tử tương ứng với vị trí index 'b' là giá trị thứ hai trong list truyền vào, tức là 2.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_003",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "creation"],
    "content": "Cho đoạn mã khởi tạo DataFrame như sau:\n```python\nimport pandas as pd\ndata = {'A': [1, 2], 'B': [3, 4]}\ndf = pd.DataFrame(data)\nprint(df.columns.tolist())\n```\nKết quả in ra danh sách tên cột là gì?",
    "options": [
      "A. [1, 2, 3, 4]",
      "B. ['A', 'B']",
      "C. [0, 1]",
      "D. ['A', 'B', 'C']"
    ],
    "correct_option": "B",
    "explanation": "Khi khởi tạo DataFrame từ một dictionary, các 'key' của dictionary sẽ tự động được sử dụng làm tên các cột (columns) của DataFrame. Các 'value' tương ứng (phải là cấu trúc dạng list hoặc mảng) sẽ là dữ liệu của từng cột. Do đó các cột ở đây sẽ là 'A' và 'B'.",
    "solution": "**Bước 1:** Dictionary có hai key là 'A' và 'B'.\n**Bước 2:** DataFrame được tạo ra có hai cột tương ứng.\n**Bước 3:** Thuộc tính `df.columns` chứa chỉ mục tên cột, và `.tolist()` chuyển đổi chỉ mục này thành list `['A', 'B']`. Chọn B."
  },
  {
    "id": "Q_MOD_A_004",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "properties", "shape"],
    "content": "Cho DataFrame `df` được khởi tạo như sau:\n```python\nimport pandas as pd\ndata = {\n    'Name': ['An', 'Bình', 'Chi'],\n    'Age': [20, 21, 19]\n}\ndf = pd.DataFrame(data)\nprint(df.shape)\n```\nKết quả in ra màn hình là gì?",
    "options": [
      "A. (3, 2)",
      "B. (2, 3)",
      "C. 6",
      "D. [3, 2]"
    ],
    "correct_option": "A",
    "explanation": "Thuộc tính `shape` của DataFrame trả về một tuple chứa số dòng và số cột dưới dạng `(số_dòng, số_cột)`. Ở đây DataFrame có 3 dòng (An, Bình, Chi) và 2 cột (Name, Age), nên `shape` sẽ là `(3, 2)`.",
    "solution": "**Bước 1:** Đếm số lượng hàng trong DataFrame, ta có 3 hàng.\n**Bước 2:** Đếm số lượng cột, ta có 2 cột.\n**Bước 3:** Thuộc tính `df.shape` trả về tuple `(3, 2)`. Chọn A."
  },
  {
    "id": "Q_MOD_A_005",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "properties", "columns"],
    "content": "Lệnh nào sau đây dùng để đổi tên toàn bộ các cột của DataFrame `df` có 2 cột thành `['Col1', 'Col2']` một cách trực tiếp?",
    "options": [
      "A. df.columns = ['Col1', 'Col2']",
      "B. df.rename_columns(['Col1', 'Col2'])",
      "C. df.set_columns(['Col1', 'Col2'])",
      "D. df.columns[0] = 'Col1'; df.columns[1] = 'Col2'"
    ],
    "correct_option": "A",
    "explanation": "Ta có thể thay đổi thuộc tính `df.columns` bằng cách gán cho nó một bộ sưu tập nhãn mới có cùng độ dài với số lượng cột. Cách gán trực tiếp `df.columns = [...]` là hợp lệ. Ngược lại, việc gán trực tiếp cho từng phần tử của `df.columns` (như đáp án D) là không được phép vì chỉ mục trong Pandas là cấu trúc bất biến (immutable).",
    "solution": "**Bước 1:** Muốn thay đổi nhãn của cột, ta có thể ghi đè trực tiếp thuộc tính `df.columns`.\n**Bước 2:** Gán `df.columns = ['Col1', 'Col2']`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_A_006",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "properties", "dtypes"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'x': [1, 2, 3],\n    'y': [1.0, 2.5, 3.1],\n    'z': ['a', 'b', 'c']\n})\nprint(df.dtypes['z'])\n```\nKết quả in ra là gì?",
    "options": [
      "A. int64",
      "B. float64",
      "C. object",
      "D. string"
    ],
    "correct_option": "C",
    "explanation": "Mặc định, các cột chứa dữ liệu dạng chuỗi ký tự (hoặc kiểu dữ liệu hỗn hợp) khi khởi tạo trong Pandas phiên bản tiêu chuẩn sẽ có kiểu dữ liệu là `object`. Do đó, kiểu dữ liệu của cột `'z'` là `object`.",
    "solution": "**Bước 1:** Cột `'z'` chứa các phần tử chuỗi `['a', 'b', 'c']`.\n**Bước 2:** Trong Pandas, kiểu dữ liệu mặc định cho chuỗi là `object`.\n**Bước 3:** Truy cập `df.dtypes['z']` trả về loại kiểu dữ liệu tương ứng. Chọn C."
  },
  {
    "id": "Q_MOD_A_007",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "inspection", "head"],
    "content": "Mặc định, nếu không truyền tham số nào vào phương thức `head()`, ví dụ `df.head()`, Pandas sẽ hiển thị bao nhiêu dòng đầu tiên của DataFrame?",
    "options": [
      "A. 10 dòng",
      "B. 5 dòng",
      "C. 1 dòng",
      "D. Tất cả các dòng"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `df.head(n)` dùng để xem `n` dòng đầu tiên của DataFrame. Nếu không truyền giá trị cho `n`, tham số mặc định là `5`.",
    "solution": "**Bước 1:** Nhớ lại định nghĩa của hàm `head()`. Theo đặc tả của Pandas, mặc định `n=5`.\n**Bước 2:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_008",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "inspection", "tail"],
    "content": "Cho DataFrame `df` có 10 dòng dữ liệu. Lệnh `df.tail(3)` sẽ trả về các dòng có chỉ mục mặc định (0-based index) nào?",
    "options": [
      "A. Dòng 0, 1, 2",
      "B. Dòng 7, 8, 9",
      "C. Dòng 8, 9, 10",
      "D. Dòng 1, 2, 3"
    ],
    "correct_option": "B",
    "explanation": "Hàm `df.tail(n)` trả về `n` dòng cuối cùng của DataFrame. Với DataFrame có 10 dòng (chỉ mục từ 0 đến 9), 3 dòng cuối cùng sẽ có chỉ mục tương ứng là 7, 8 và 9.",
    "solution": "**Bước 1:** Xác định số dòng là 10 (chỉ mục 0 đến 9).\n**Bước 2:** Lấy 3 dòng cuối cùng từ dưới lên: chỉ mục 9, chỉ mục 8, chỉ mục 7.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_009",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "properties", "ndim"],
    "content": "Cho một Pandas Series `s` và một Pandas DataFrame `df`. Thuộc tính `s.ndim` và `df.ndim` lần lượt trả về giá trị là bao nhiêu?",
    "options": [
      "A. 1 và 2",
      "B. 2 và 1",
      "C. 1 và 1",
      "D. 2 và 2"
    ],
    "correct_option": "A",
    "explanation": "`ndim` đại diện cho số chiều (number of dimensions) của đối tượng dữ liệu. Pandas Series là cấu trúc dữ liệu 1 chiều nên `s.ndim` luôn bằng 1. Pandas DataFrame là cấu trúc dữ liệu 2 chiều (bảng) nên `df.ndim` luôn bằng 2.",
    "solution": "**Bước 1:** Xác định số chiều của Series: Series chỉ có 1 trục (axis 0), do đó `ndim = 1`.\n**Bước 2:** Xác định số chiều của DataFrame: DataFrame có 2 trục (dòng và cột), do đó `ndim = 2`.\n**Bước 3:** Chọn đáp án A."
  },
  {
    "id": "Q_MOD_A_010",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "inspection", "unique"],
    "content": "Cho một Series `s = pd.Series([1, 2, 2, 3, 3, 3])`. Đoạn mã `s.unique()` trả về kiểu dữ liệu gì?",
    "options": [
      "A. Một danh sách (list) Python",
      "B. Một đối tượng Series mới",
      "C. Một mảng NumPy (ndarray)",
      "D. Một tập hợp (set) Python"
    ],
    "correct_option": "C",
    "explanation": "Phương thức `Series.unique()` trả về các giá trị duy nhất trong Series dưới dạng một mảng NumPy (`numpy.ndarray`) theo thứ tự xuất hiện đầu tiên của chúng.",
    "solution": "**Bước 1:** Gọi hàm `unique()` trên đối tượng Pandas Series.\n**Bước 2:** Xác định kiểu dữ liệu trả về của hàm này, đó là một mảng `numpy.ndarray`.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_A_011",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "dataframe", "indexing", "selection"],
    "content": "Giả sử DataFrame `df` có một cột tên là `'Class Name'`. Cách nào sau đây là cách duy nhất hợp lệ để chọn cột này?",
    "options": [
      "A. df.Class Name",
      "B. df['Class Name']",
      "C. df.loc('Class Name')",
      "D. df.iloc['Class Name']"
    ],
    "correct_option": "B",
    "explanation": "Vì tên cột có chứa khoảng trắng (`'Class Name'`), ta không thể dùng cú pháp dot notation (`df.Class Name`) vì vi phạm cú pháp định danh của Python. Ta bắt buộc phải dùng cú pháp ngoặc vuông với chuỗi tên cột: `df['Class Name']`. `df.loc` là thuộc tính dùng để lập chỉ mục và cần ngoặc vuông chứ không dùng ngoặc tròn để gọi trực tiếp nhãn cột mà không chỉ định dòng.",
    "solution": "**Bước 1:** Nhận diện tên cột có khoảng trắng.\n**Bước 2:** Loại trừ cú pháp dot notation và cú pháp dùng ngoặc tròn sai cách.\n**Bước 3:** Cú pháp chuẩn là `df['Class Name']`. Chọn B."
  },
  {
    "id": "Q_MOD_A_012",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "indexing", "iloc"],
    "content": "Lệnh nào sau đây trả về dòng đầu tiên của DataFrame `df` dưới dạng một Series?",
    "options": [
      "A. df.iloc[0]",
      "B. df.iloc[1]",
      "C. df.loc[0]",
      "D. df.iloc[:, 0]"
    ],
    "correct_option": "A",
    "explanation": "`iloc` thực hiện truy xuất theo chỉ số nguyên (integer-based position), bắt đầu từ 0. Dòng đầu tiên tương ứng với chỉ số vị trí là 0, do đó `df.iloc[0]` sẽ lấy ra dòng đầu tiên dưới dạng Series. `df.loc[0]` chỉ đúng nếu nhãn của hàng đó tình cờ là số nguyên `0`, còn `df.iloc[:, 0]` trả về cột đầu tiên.",
    "solution": "**Bước 1:** Chọn hàng theo vị trí nguyên bắt đầu từ 0.\n**Bước 2:** Sử dụng cú pháp `df.iloc[hàng_chỉ_số]`.\n**Bước 3:** Hàng đầu tiên là chỉ số 0. Chọn A."
  },
  {
    "id": "Q_MOD_A_013",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "indexing", "loc"],
    "content": "Cho DataFrame `df` có chỉ mục (index) dạng chuỗi ký tự. Để lấy dòng có nhãn chỉ mục là `'r5'`, ta dùng lệnh nào?",
    "options": [
      "A. df.iloc['r5']",
      "B. df.loc['r5']",
      "C. df['r5']",
      "D. df.get_row('r5')"
    ],
    "correct_option": "B",
    "explanation": "`loc` là phương thức lập chỉ mục dựa trên nhãn (label-based). Vì `'r5'` là nhãn của chỉ mục, ta phải dùng `df.loc['r5']` để lấy dòng tương ứng. `df.iloc` chỉ chấp nhận số nguyên, còn `df['r5']` sẽ tìm kiếm cột có tên `'r5'` chứ không phải dòng.",
    "solution": "**Bước 1:** Nhận diện truy xuất theo nhãn chỉ mục (label-based index).\n**Bước 2:** Dùng phương thức `.loc` với nhãn là `'r5'`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_014",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "creation"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ns = pd.Series(5, index=['a', 'b', 'c'])\nprint(s.tolist())\n```\nKết quả hiển thị là gì?",
    "options": [
      "A. [5]",
      "B. [5, 5, 5]",
      "C. [5, None, None]",
      "D. Báo lỗi ValueError vì thiếu dữ liệu đầu vào dạng danh sách."
    ],
    "correct_option": "B",
    "explanation": "Khi khởi tạo một Series từ một giá trị đơn lẻ (scalar value) và chỉ định một danh sách `index`, Pandas sẽ tự động lặp lại (broadcast) giá trị vô hướng đó cho mọi phần tử trong chỉ mục. Kết quả là Series có 3 phần tử đều mang giá trị là 5.",
    "solution": "**Bước 1:** Xác định giá trị đầu vào là scalar (5) và chỉ mục có 3 phần tử ('a', 'b', 'c').\n**Bước 2:** Series sẽ nhân bản giá trị 5 cho cả 3 nhãn này.\n**Bước 3:** `s.tolist()` chuyển đổi Series thành list `[5, 5, 5]`. Chọn B."
  },
  {
    "id": "Q_MOD_A_015",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "properties", "size"],
    "content": "Cho DataFrame `df` có kích thước 4 hàng và 3 cột. Giá trị của thuộc tính `df.size` là bao nhiêu?",
    "options": [
      "A. 4",
      "B. 3",
      "C. 12",
      "D. (4, 3)"
    ],
    "correct_option": "C",
    "explanation": "Thuộc tính `size` của một DataFrame hoặc Series trả về tổng số phần tử (tổng số ô dữ liệu). Nó được tính bằng tích của số dòng và số cột (hàng x cột). Ở đây 4 x 3 = 12.",
    "solution": "**Bước 1:** Lấy số lượng hàng là 4 và số cột là 3.\n**Bước 2:** Tính tích: 4 x 3 = 12.\n**Bước 3:** Giá trị `df.size` bằng 12. Chọn C."
  },
  {
    "id": "Q_MOD_A_016",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "tolist"],
    "content": "Để chuyển đổi một Pandas Series `s` thành một danh sách (list) chuẩn trong Python, ta dùng phương thức nào?",
    "options": [
      "A. s.tolist()",
      "B. s.to_list()",
      "C. Cả A và B đều đúng",
      "D. list(s.values) nhưng không có phương thức trực tiếp nào trong Series."
    ],
    "correct_option": "C",
    "explanation": "Trong Pandas Series, cả hai phương thức `tolist()` và `to_list()` đều khả dụng và thực hiện cùng một chức năng là chuyển đổi cấu trúc Series thành một danh sách Python thông thường.",
    "solution": "**Bước 1:** Pandas hỗ trợ cả hai tên hàm chuyển danh sách như là các bí danh tương đương.\n**Bước 2:** Cả `s.tolist()` và `s.to_list()` đều hoạt động chính xác.\n**Bước 3:** Chọn đáp án C."
  },
  {
    "id": "Q_MOD_A_017",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "inspection", "nunique"],
    "content": "Cho Series `s = pd.Series([1, 2, 2, None, 3])`. Mặc định, kết quả của `s.nunique()` là bao nhiêu?",
    "options": [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 2"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `nunique()` đếm số lượng giá trị duy nhất trong Series. Theo mặc định, tham số `dropna` được đặt là `True`, có nghĩa là giá trị khuyết thiếu (`None` hay `NaN`) sẽ bị bỏ qua khi đếm. Vì vậy, các giá trị duy nhất thực tế được đếm là 1, 2, 3 (tổng cộng có 3 giá trị).",
    "solution": "**Bước 1:** Danh sách các giá trị duy nhất không tính None là: {1, 2, 3}.\n**Bước 2:** Số lượng phần tử trong tập hợp này là 3.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_A_018",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "series", "inspection", "value_counts"],
    "content": "Phương thức `value_counts()` của Pandas Series trả về kết quả được sắp xếp theo thứ tự nào theo mặc định?",
    "options": [
      "A. Tăng dần theo giá trị chỉ mục (index)",
      "B. Giảm dần theo tần suất xuất hiện (tần suất lớn nhất lên đầu)",
      "C. Tăng dần theo tần suất xuất hiện",
      "D. Giữ nguyên theo thứ tự xuất hiện ban đầu của dữ liệu"
    ],
    "correct_option": "B",
    "explanation": "Mặc định, `value_counts()` trả về một Series với chỉ mục là các giá trị duy nhất và giá trị của Series là số lần xuất hiện của chúng, được sắp xếp giảm dần theo tần suất xuất hiện (phần tử xuất hiện nhiều nhất ở vị trí đầu tiên, tức `ascending=False` ngầm định).",
    "solution": "**Bước 1:** Nhớ lại hành vi mặc định của `value_counts()` là đưa các nhóm có số lượng đếm nhiều nhất lên trên cùng.\n**Bước 2:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_019",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "properties", "index"],
    "content": "Lệnh nào sau đây dùng để thiết lập trực tiếp nhãn chỉ mục mới cho DataFrame `df` (có 3 dòng) thành `['Row1', 'Row2', 'Row3']`?",
    "options": [
      "A. df.index = ['Row1', 'Row2', 'Row3']",
      "B. df.set_index(['Row1', 'Row2', 'Row3'])",
      "C. df.reindex(['Row1', 'Row2', 'Row3'])",
      "D. df.index.set_values(['Row1', 'Row2', 'Row3'])"
    ],
    "correct_option": "A",
    "explanation": "Gán trực tiếp một danh sách các nhãn mới cho thuộc tính `df.index` là cách nhanh nhất và hợp lệ để đổi tên chỉ mục của DataFrame. Hàm `set_index` yêu cầu một cột hiện có trong DataFrame, còn `reindex` dùng để thay đổi thứ tự hoặc ánh xạ lại chỉ mục cũ chứ không phải đổi tên trực tiếp mà không đổi cấu trúc dữ liệu.",
    "solution": "**Bước 1:** Ta có thể thay đổi trực tiếp nhãn của hàng thông qua thuộc tính `df.index`.\n**Bước 2:** Câu lệnh gán trực tiếp: `df.index = ['Row1', 'Row2', 'Row3']`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_A_020",
    "module_id": "Module_A",
    "difficulty": "Easy",
    "tags": ["pandas", "properties", "values"],
    "content": "Cho DataFrame `df`. Thuộc tính `df.values` trả về kiểu dữ liệu nào?",
    "options": [
      "A. Một Pandas Series chứa tất cả các hàng",
      "B. Một mảng NumPy đại diện cho các giá trị trong DataFrame",
      "C. Một danh sách lồng nhau (nested list)",
      "D. Một chuỗi định dạng JSON"
    ],
    "correct_option": "B",
    "explanation": "Thuộc tính `.values` trả về biểu diễn dữ liệu của DataFrame dưới dạng một mảng NumPy (`numpy.ndarray`) 2 chiều. Lưu ý: Trong các phiên bản Pandas mới, khuyến khích sử dụng `.to_numpy()` thay cho `.values`.",
    "solution": "**Bước 1:** Thuộc tính `df.values` trích xuất phần dữ liệu lõi của DataFrame.\n**Bước 2:** Dữ liệu này được biểu diễn bằng mảng NumPy.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_021",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "series", "creation", "index"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndata = {'a': 1, 'b': 2, 'c': 3}\ns = pd.Series(data, index=['b', 'c', 'd'])\nprint(s['d'])\n```\nKết quả in ra là gì?",
    "options": [
      "A. NaN",
      "B. Báo lỗi KeyError vì 'd' không có trong data",
      "C. 3",
      "D. None"
    ],
    "correct_option": "A",
    "explanation": "Khi khởi tạo một Series từ một dictionary và truyền thêm danh sách `index`, Pandas sẽ trích xuất các giá trị từ dictionary theo các nhãn có trong danh sách chỉ mục mới. Nếu một nhãn trong chỉ mục mới không tồn tại làm key trong dictionary (như `'d'`), Pandas sẽ gán cho nó giá trị khuyết thiếu là `NaN` (Not a Number) kiểu float chứ không báo lỗi.",
    "solution": "**Bước 1:** Khớp nhãn chỉ mục `['b', 'c', 'd']` với key của dictionary `{'a': 1, 'b': 2, 'c': 3}`.\n**Bước 2:** 'b' -> 2, 'c' -> 3, 'd' -> không tìm thấy nên gán `NaN`.\n**Bước 3:** Truy xuất `s['d']` trả về `NaN`. Chọn A."
  },
  {
    "id": "Q_MOD_A_022",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "loc", "iloc"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30], index=[2, 1, 0])\nprint(s.loc[1] + s.iloc[1])\n```\nKết quả in ra màn hình là bao nhiêu?",
    "options": [
      "A. 30",
      "B. 40",
      "C. 50",
      "D. Báo lỗi KeyError"
    ],
    "correct_option": "B",
    "explanation": "`s.loc[1]` tìm kiếm phần tử có nhãn (label) là 1 trong index. Trong Series trên, phần tử có nhãn 1 tương ứng với giá trị 20. Trong khi đó, `s.iloc[1]` tìm phần tử ở vị trí thứ 1 (0-based position, tức là vị trí thứ hai trong mảng). Vị trí thứ hai cũng tương ứng với giá trị 20. Do đó, 20 + 20 = 40.",
    "solution": "**Bước 1:** Xác định `s.loc[1]`. Nhãn index bằng 1 nằm ở hàng thứ 2, có giá trị là 20.\n**Bước 2:** Xác định `s.iloc[1]`. Vị trí index nguyên bằng 1 là hàng thứ 2, có giá trị là 20.\n**Bước 3:** Tính tổng: 20 + 20 = 40. Chọn B."
  },
  {
    "id": "Q_MOD_A_023",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "loc", "slicing"],
    "content": "Cho DataFrame `df` sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'val': [1, 2, 3, 4]}, index=['a', 'b', 'c', 'd'])\nresult = df.loc['b':'c']\nprint(len(result))\n```\nKết quả in ra là bao nhiêu?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. Báo lỗi vì không dùng được slicing với nhãn chuỗi"
    ],
    "correct_option": "B",
    "explanation": "Slicing bằng `loc` (lập chỉ mục theo nhãn) đặc biệt ở chỗ nó bao gồm cả phần tử cuối (inclusive). Lệnh `df.loc['b':'c']` sẽ lấy ra các dòng từ nhãn `'b'` đến nhãn `'c'` (gồm cả `'b'` và `'c'`), tổng cộng là 2 dòng.",
    "solution": "**Bước 1:** Nhận diện slicing với nhãn chữ cái sử dụng `.loc`.\n**Bước 2:** Xác định phạm vi là từ nhãn `'b'` đến nhãn `'c'` (lấy cả nhãn `'c'`).\n**Bước 3:** Số lượng phần tử trả về là 2. Chọn B."
  },
  {
    "id": "Q_MOD_A_024",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "iloc", "slicing"],
    "content": "Cho DataFrame `df` sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'val': [1, 2, 3, 4]}, index=['a', 'b', 'c', 'd'])\nresult = df.iloc[1:3]\nprint(result['val'].tolist())\n```\nKết quả hiển thị của đoạn mã là gì?",
    "options": [
      "A. [2, 3]",
      "B. [2, 3, 4]",
      "C. [1, 2]",
      "D. [1, 2, 3]"
    ],
    "correct_option": "A",
    "explanation": "Slicing bằng `iloc` (lập chỉ mục theo vị trí nguyên) tuân thủ quy tắc slicing chuẩn của Python: không bao gồm phần tử cuối (exclusive). Lệnh `df.iloc[1:3]` sẽ lấy các dòng ở vị trí chỉ số 1 và 2 (bỏ qua chỉ số 3). Hàng 1 có giá trị 2, hàng 2 có giá trị 3, do đó kết quả thu được là `[2, 3]`.",
    "solution": "**Bước 1:** Xác định phạm vi vị trí của `iloc[1:3]`: lấy vị trí 1 và vị trí 2.\n**Bước 2:** Giá trị tương ứng tại các vị trí này lần lượt là 2 (dòng 'b') và 3 (dòng 'c').\n**Bước 3:** Danh sách giá trị cột `'val'` là `[2, 3]`. Chọn A."
  },
  {
    "id": "Q_MOD_A_025",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "boolean-selection"],
    "content": "Cho DataFrame `df` sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Age': [15, 25, 30, 18]})\nfiltered_df = df[df['Age'] > 18]\nprint(filtered_df.index.tolist())\n```\nĐoạn mã trên in ra danh sách chỉ mục nào?",
    "options": [
      "A. [1, 2]",
      "B. [25, 30]",
      "C. [1, 2, 3]",
      "D. [0, 1, 2]"
    ],
    "correct_option": "A",
    "explanation": "Biểu thức `df['Age'] > 18` trả về một Boolean Series: `[False, True, True, False]`. Khi dùng Series này làm bộ lọc `df[...]`, Pandas giữ lại các dòng tương ứng với giá trị `True`, tức là dòng tại chỉ mục 1 (giá trị 25) và dòng tại chỉ mục 2 (giá trị 30). Chỉ mục tương ứng thu được là `[1, 2]`.",
    "solution": "**Bước 1:** Lọc điều kiện `'Age' > 18` cho ra các dòng có giá trị 25 và 30.\n**Bước 2:** Tìm index của các dòng này trong DataFrame ban đầu, đó là 1 và 2.\n**Bước 3:** Chuyển chỉ mục thành list ta được `[1, 2]`. Chọn A."
  },
  {
    "id": "Q_MOD_A_026",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "inspection", "describe"],
    "content": "Cho Series `s = pd.Series(['A', 'A', 'B', 'C', 'A', 'B'])`. Khi gọi `s.describe()`, nhãn chỉ mục nào dưới đây KHÔNG xuất hiện trong Series kết quả?",
    "options": [
      "A. mean",
      "B. unique",
      "C. top",
      "D. freq"
    ],
    "correct_option": "A",
    "explanation": "Khi áp dụng `describe()` trên một Series chứa dữ liệu dạng không phải số (non-numerical/categorical), Pandas sẽ trả về các thống kê đặc thù như: `count` (số lượng), `unique` (số phần tử duy nhất), `top` (phần tử xuất hiện nhiều nhất) và `freq` (tần suất của phần tử xuất hiện nhiều nhất). Thống kê toán học như `mean` (trung bình) sẽ không xuất hiện.",
    "solution": "**Bước 1:** Xác định kiểu dữ liệu của Series `s` là kiểu chuỗi (`object`).\n**Bước 2:** Nhớ lại các thông số thống kê của `describe()` cho kiểu chuỗi: count, unique, top, freq.\n**Bước 3:** Giá trị trung bình `mean` chỉ có trên kiểu số. Chọn A."
  },
  {
    "id": "Q_MOD_A_027",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "inspection", "info"],
    "content": "Khi gọi phương thức `df.info()` trên một DataFrame, dòng thông tin nào sau đây KHÔNG được hiển thị trực tiếp trong output?",
    "options": [
      "A. Tổng số hàng và khoảng giá trị của chỉ mục (Index range)",
      "B. Kiểu dữ liệu (dtypes) của từng cột",
      "C. Giá trị trung vị (Median/50%) của các cột số",
      "D. Dung lượng bộ nhớ RAM ước tính đã sử dụng (memory usage)"
    ],
    "correct_option": "C",
    "explanation": "Hàm `df.info()` cung cấp thông tin kỹ thuật về cấu trúc của DataFrame (số hàng, số cột, kiểu dữ liệu, số giá trị phi khuyết, bộ nhớ). Còn các chỉ số thống kê như phân vị, trung vị (50%), trung bình là đầu ra của hàm `df.describe()` chứ không phải `df.info()`.",
    "solution": "**Bước 1:** Phân biệt vai trò của `info()` và `describe()`.\n**Bước 2:** `info()` thiên về thông tin cấu trúc kỹ thuật hệ thống, còn `describe()` thiên về thống kê mô tả.\n**Bước 3:** Chọn C."
  },
  {
    "id": "Q_MOD_A_028",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "inspection", "value_counts"],
    "content": "Cho Series `s = pd.Series(['Yes', 'No', 'Yes', 'Yes'])`. Kết quả của lệnh `s.value_counts(normalize=True)['Yes']` là bao nhiêu?",
    "options": [
      "A. 3",
      "B. 0.75",
      "C. 75",
      "D. 0.25"
    ],
    "correct_option": "B",
    "explanation": "Khi truyền đối số `normalize=True` vào phương thức `value_counts()`, thay vì đếm số lần xuất hiện tuyệt đối, Pandas sẽ trả về tần suất tương đối (tỷ lệ phần trăm dạng thập phân). Giá trị `'Yes'` xuất hiện 3 lần trên tổng số 4 phần tử, nên tỷ lệ là 3/4 = 0.75.",
    "solution": "**Bước 1:** Đếm tổng số lượng phần tử là 4. Số lượng phần tử 'Yes' là 3.\n**Bước 2:** Tính tỷ lệ tương đối của 'Yes' bằng 3 / 4 = 0.75.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_029",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "dataframe", "creation"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndata = [{'x': 1, 'y': 2}, {'x': 3, 'z': 4}]\ndf = pd.DataFrame(data)\nprint(df.isna().sum()['y'])\n```\nGiá trị in ra màn hình là bao nhiêu?",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. Báo lỗi vì các dictionary không có các key giống nhau hoàn toàn"
    ],
    "correct_option": "B",
    "explanation": "Khi khởi tạo DataFrame từ một list các dictionary có các key không khớp hoàn toàn, Pandas sẽ lấy hợp của tất cả các key làm tên cột (`'x'`, `'y'`, `'z'`). Các ô thiếu dữ liệu (ví dụ dictionary thứ hai không chứa key `'y'`) sẽ tự động được điền giá trị khuyết thiếu (`NaN`). Do đó, cột `'y'` có một giá trị khuyết thiếu ở hàng thứ hai, dẫn đến `df.isna().sum()['y']` bằng 1.",
    "solution": "**Bước 1:** Xác định cấu trúc DataFrame: Hàng 0 có x=1, y=2, z=NaN. Hàng 1 có x=3, y=NaN, z=4.\n**Bước 2:** Cột `'y'` có đúng 1 giá trị khuyết thiếu (NaN).\n**Bước 3:** Hàm `.isna().sum()` đếm số NaN trong cột `'y'`, cho kết quả là 1. Chọn B."
  },
  {
    "id": "Q_MOD_A_030",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "loc"],
    "content": "Cho DataFrame `df` có cột `'Age'` và `'Name'`. Câu lệnh nào sau đây là chuẩn xác nhất để lấy ra giá trị cột `'Name'` của những hàng có `'Age'` lớn hơn 30 mà không gây lỗi hoặc cảnh báo của Pandas?",
    "options": [
      "A. df[df['Age'] > 30]['Name']",
      "B. df.loc[df['Age'] > 30, 'Name']",
      "C. df.iloc[df['Age'] > 30, 'Name']",
      "D. df.loc['Name', df['Age'] > 30]"
    ],
    "correct_option": "B",
    "explanation": "Sử dụng `df.loc[điều_kiện_dòng, tên_cột]` là cách thức chuẩn mực và tối ưu nhất được Pandas khuyến nghị. Cách làm này vừa nhanh chóng vừa tránh được cảnh báo `SettingWithCopyWarning` khi thực hiện gán giá trị sau đó (so với kiểu chaining index ở đáp án A). `iloc` không thể nhận nhãn cột `'Name'` trực tiếp hay nhận Boolean Series trực tiếp từ cột.",
    "solution": "**Bước 1:** Tìm phương thức lập chỉ mục theo nhãn hỗ trợ cả điều kiện dòng và tên cột.\n**Bước 2:** Cú pháp chuẩn của `.loc` là `loc[row_indexer, column_indexer]`.\n**Bước 3:** Truyền `df['Age'] > 30` vào vị trí dòng và `'Name'` vào vị trí cột. Chọn B."
  },
  {
    "id": "Q_MOD_A_031",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "modification"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [10, 20, 30]}, index=['x', 'y', 'z'])\ndf.loc['y', 'A'] = 99\nprint(df.iloc[1, 0])\n```\nKết quả hiển thị trên màn hình là bao nhiêu?",
    "options": [
      "A. 20",
      "B. 99",
      "C. 10",
      "D. 30"
    ],
    "correct_option": "B",
    "explanation": "Câu lệnh `df.loc['y', 'A'] = 99` tìm phần tử tại dòng có nhãn `'y'` và cột `'A'` (ở đây ban đầu là 20) và gán đè giá trị bằng 99. Sau đó, `df.iloc[1, 0]` truy xuất phần tử ở dòng thứ 2 (chỉ số vị trí 1) và cột thứ 1 (chỉ số vị trí 0), chính là ô dữ liệu vừa được sửa đổi. Kết quả in ra là 99.",
    "solution": "**Bước 1:** Xác định ô được gán mới bằng `df.loc['y', 'A']`. Nó nằm ở dòng 2 cột 1.\n**Bước 2:** Giá trị của ô đó chuyển từ 20 thành 99.\n**Bước 3:** `df.iloc[1, 0]` trỏ đúng vào ô dòng index 1, cột index 0. Giá trị lấy ra là 99. Chọn B."
  },
  {
    "id": "Q_MOD_A_032",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "properties", "size", "shape"],
    "content": "Cho DataFrame `df` có 5 hàng và 4 cột, trong đó có chứa 3 giá trị khuyết thiếu (`NaN`). Giá trị của thuộc tính `df.size` và `df.shape` lần lượt là:",
    "options": [
      "A. 17 và (5, 4)",
      "B. 20 và (5, 4)",
      "C. 20 và (5, 4, 3)",
      "D. 17 và (5, 4, 3)"
    ],
    "correct_option": "B",
    "explanation": "Thuộc tính `shape` và `size` của DataFrame được tính toán dựa trên cấu trúc hình học của bảng chứ không phụ thuộc vào việc ô dữ liệu đó có chứa giá trị thực hay giá trị khuyết thiếu (`NaN`). Vì vậy, `shape` vẫn là `(5, 4)` và `size` bằng 5 x 4 = 20.",
    "solution": "**Bước 1:** Đếm số lượng dòng (5) và cột (4).\n**Bước 2:** Tính kích thước tổng thể: 5 x 4 = 20.\n**Bước 3:** Giá trị NaN không ảnh hưởng tới kích thước hình học của mảng. Chọn B."
  },
  {
    "id": "Q_MOD_A_033",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "series", "inspection", "unique"],
    "content": "Cho Series `s = pd.Series([1, 1, None, None, 2])`. Khi gọi `s.unique()` và `s.nunique()`, ta nhận được kết quả lần lượt biểu diễn số lượng phần tử duy nhất như thế nào?",
    "options": [
      "A. s.unique() chứa [1.0, nan] (chiều dài 2) và s.nunique() trả về 2",
      "B. s.unique() chứa [1.0, nan, 2.0] (chiều dài 3) và s.nunique() trả về 2",
      "C. s.unique() chứa [1.0, nan, 2.0] (chiều dài 3) và s.nunique() trả về 3",
      "D. s.unique() chứa [1.0, 2.0] (chiều dài 2) và s.nunique() trả về 2"
    ],
    "correct_option": "B",
    "explanation": "Hàm `.unique()` luôn giữ lại giá trị khuyết thiếu `NaN` (chỉ gom các `NaN` trùng lặp thành một `nan` duy nhất), vì vậy mảng kết quả là `[1.0, nan, 2.0]`. Trái lại, `.nunique()` theo mặc định bỏ qua hoàn toàn `NaN` (`dropna=True`), do đó nó chỉ đếm 1 và 2, trả về kết quả là 2.",
    "solution": "**Bước 1:** Phân tích kết quả của `unique()`: lấy các phần tử độc nhất gồm cả `NaN`. Trả về `[1.0, nan, 2.0]`.\n**Bước 2:** Phân tích `nunique()`: mặc định bỏ qua NaN nên chỉ đếm 1 và 2, kết quả là 2.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_034",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "set_index"],
    "content": "Cho DataFrame `df` có cột `'ID'` với các giá trị duy nhất. Khi chạy câu lệnh `df2 = df.set_index('ID')`, điều gì xảy ra với cột `'ID'` ban đầu?",
    "options": [
      "A. Cột 'ID' vẫn giữ nguyên vị trí trong DataFrame mới df2.",
      "B. Cột 'ID' bị chuyển thành chỉ mục (index) của df2 và không còn nằm trong các cột dữ liệu thông thường nữa.",
      "C. Lệnh báo lỗi nếu cột 'ID' không phải kiểu số nguyên.",
      "D. Cột 'ID' bị xóa hoàn toàn và không xuất hiện dưới dạng cột lẫn index."
    ],
    "correct_option": "B",
    "explanation": "Theo hành vi mặc định của phương thức `.set_index()`, tham số `drop` có giá trị mặc định là `True`. Điều này khiến cột được chọn làm chỉ mục mới sẽ bị loại khỏi danh sách các cột thông thường của DataFrame kết quả.",
    "solution": "**Bước 1:** Xem xét hàm `.set_index('ID')`.\n**Bước 2:** Nhớ lại tham số `drop=True` mặc định.\n**Bước 3:** Cột `'ID'` được đưa ra làm nhãn hàng và không còn là cột dữ liệu. Chọn B."
  },
  {
    "id": "Q_MOD_A_035",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "dataframe", "creation", "numpy"],
    "content": "Cho đoạn mã khởi tạo sau:\n```python\nimport numpy as np\nimport pandas as pd\narr = np.array([[1, 2], [3, 4]])\ndf = pd.DataFrame(arr, columns=['A', 'B'], index=['X', 'Y'])\nprint(df.loc['Y', 'A'])\n```\nKết quả hiển thị trên màn hình là bao nhiêu?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "correct_option": "C",
    "explanation": "DataFrame được khởi tạo từ mảng NumPy 2D. Dòng đầu tiên `[1, 2]` ứng với index `'X'`, dòng thứ hai `[3, 4]` ứng với index `'Y'`. Cột đầu tiên ứng với cột `'A'`, cột thứ hai ứng với cột `'B'`. Đoạn mã truy cập `df.loc['Y', 'A']` (dòng `'Y'`, cột `'A'`), kết quả là 3.",
    "solution": "**Bước 1:** Xác định cấu trúc DataFrame: dòng 'X' = [1, 2], dòng 'Y' = [3, 4].\n**Bước 2:** Ánh xạ cột: cột 'A' chứa [1, 3], cột 'B' chứa [2, 4].\n**Bước 3:** Giá trị giao điểm dòng 'Y' và cột 'A' là 3. Chọn C."
  },
  {
    "id": "Q_MOD_A_036",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "series", "slicing"],
    "content": "Cho Series `s = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])`. So sánh kết quả slicing của hai biểu thức `s['a':'c']` và `s[0:2]`:",
    "options": [
      "A. Cả hai đều trả về 3 phần tử.",
      "B. Cả hai đều trả về 2 phần tử.",
      "C. s['a':'c'] trả về 3 phần tử ('a', 'b', 'c'), còn s[0:2] trả về 2 phần tử ('a', 'b').",
      "D. Báo lỗi vì không thể trộn lẫn cách slicing nhãn và slicing vị trí trên cùng một Series."
    ],
    "correct_option": "C",
    "explanation": "Khi dùng nhãn để thực hiện lát cắt (`s['a':'c']`), Pandas sẽ lấy cả biên cuối (inclusive), trả về các phần tử `'a', 'b', 'c'` (độ dài 3). Khi dùng chỉ số vị trí nguyên (`s[0:2]`), Pandas tuân theo quy chuẩn Python loại trừ biên cuối (exclusive), trả về các phần tử ở vị trí 0 và 1, tương ứng với nhãn `'a', 'b'` (độ dài 2).",
    "solution": "**Bước 1:** Nhận diện hai kiểu slicing: nhãn chuỗi và vị trí nguyên.\n**Bước 2:** `s['a':'c']` lấy nhãn 'a', 'b', 'c' (3 phần tử).\n**Bước 3:** `s[0:2]` lấy vị trí 0, 1 (2 phần tử). Chọn C."
  },
  {
    "id": "Q_MOD_A_037",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "dataframe", "selection", "dtypes"],
    "content": "Để trích xuất một DataFrame con chỉ chứa các cột có kiểu dữ liệu là số từ DataFrame `df`, ta sử dụng câu lệnh nào?",
    "options": [
      "A. df.select_dtypes(include='number')",
      "B. df.filter(dtypes=['int64', 'float64'])",
      "C. df.get_numerical_columns()",
      "D. df.loc[:, df.dtypes == 'number']"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `df.select_dtypes(include=...)` hoặc `exclude=...` được thiết kế riêng để chọn lọc các cột dựa trên kiểu dữ liệu của chúng. Giá trị `'number'` là một từ khóa đặc biệt đại diện cho tất cả các kiểu dữ liệu số (cả số nguyên và số thực).",
    "solution": "**Bước 1:** Muốn lọc cột theo kiểu dữ liệu, phương thức tích hợp sẵn trong Pandas là `select_dtypes()`.\n**Bước 2:** Sử dụng tham số `include='number'` để gom các cột kiểu số.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_A_038",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "loc"],
    "content": "Trong các phiên bản Pandas hiện đại (từ 1.0.0 trở đi), lệnh `df.loc[['A', 'B', 'C']]` sẽ ứng xử thế nào nếu nhãn `'C'` KHÔNG tồn tại trong chỉ mục hàng của `df`?",
    "options": [
      "A. Trả về DataFrame chứa các dòng 'A', 'B' và một dòng 'C' chứa toàn giá trị NaN.",
      "B. Báo lỗi KeyError.",
      "C. Trả về DataFrame chỉ chứa hai dòng 'A' và 'B', tự động bỏ qua 'C'.",
      "D. Trả về DataFrame rỗng."
    ],
    "correct_option": "B",
    "explanation": "Kể từ Pandas phiên bản 1.0.0, việc truyền một danh sách các nhãn chỉ mục vào `.loc` mà chứa nhãn không tồn tại trong DataFrame sẽ trực tiếp sinh ra lỗi `KeyError` nhằm đảm bảo tính nhất quán và an toàn dữ liệu.",
    "solution": "**Bước 1:** Nhớ lại cập nhật của Pandas từ phiên bản 1.0 trở đi.\n**Bước 2:** Truy cập nhãn không tồn tại qua `.loc` với mảng nhãn sẽ gây ra lỗi `KeyError`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_039",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "indexing", "loc"],
    "content": "Giả sử DataFrame `df` có chỉ mục hàng bị trùng lặp: hai hàng cùng có nhãn chỉ mục là `'A'`. Khi gọi `df.loc['A']`, kết quả trả về là gì?",
    "options": [
      "A. Chỉ hàng đầu tiên có nhãn 'A' (dưới dạng một Series).",
      "B. Một DataFrame chứa cả hai hàng có nhãn 'A'.",
      "C. Báo lỗi ValueError vì chỉ mục bị trùng lặp.",
      "D. Chỉ hàng cuối cùng có nhãn 'A'."
    ],
    "correct_option": "B",
    "explanation": "Nếu chỉ mục (index) chứa các nhãn bị trùng lặp, việc truy xuất nhãn trùng lặp đó bằng `.loc` sẽ trả về một DataFrame chứa tất cả các hàng tương ứng với nhãn đó. (Nếu nhãn là duy nhất, nó sẽ trả về một Series đại diện cho dòng đó).",
    "solution": "**Bước 1:** Phân tích hành vi của `.loc` khi gặp chỉ mục trùng lặp.\n**Bước 2:** Vì có nhiều hàng trùng nhãn, Pandas sẽ trả về toàn bộ các hàng đó dưới dạng DataFrame.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_040",
    "module_id": "Module_A",
    "difficulty": "Medium",
    "tags": ["pandas", "inspection", "describe"],
    "content": "Cho Series `s = pd.Series([10, 20, None, 30])`. Khi gọi `s.describe()`, thông số thống kê `count` (số lượng phần tử) trả về giá trị là bao nhiêu?",
    "options": [
      "A. 4",
      "B. 3",
      "C. 3.0",
      "D. 4.0"
    ],
    "correct_option": "C",
    "explanation": "Các hàm thống kê mô tả của Pandas, bao gồm cả `describe()`, theo mặc định sẽ bỏ qua các giá trị khuyết thiếu (`NaN`/`None`). Vì vậy, `count` chỉ đếm các giá trị hợp lệ là 10, 20, 30. Kết quả thống kê `count` của `describe()` trả về kiểu số thực float, tức là `3.0`.",
    "solution": "**Bước 1:** Đếm số giá trị phi khuyết thiếu trong Series `s`: 10, 20, 30. Số lượng là 3.\n**Bước 2:** Trong bảng kết quả của `.describe()`, cột/dòng `count` được lưu dưới dạng số thực.\n**Bước 3:** Kết quả là 3.0. Chọn C."
  },
  {
    "id": "Q_MOD_A_041",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "multiindex", "loc"],
    "content": "Cho DataFrame `df` có chỉ mục đa cấp (MultiIndex) gồm hai cấp: cấp 1 (nhóm `'Group'`: `'A'` hoặc `'B'`) và cấp 2 (năm `'Year'`: 2020 hoặc 2021). Để lấy dữ liệu của tất cả các nhóm tại năm 2021, câu lệnh nào sau đây là chính xác?",
    "options": [
      "A. df.loc[:, 2021]",
      "B. df.loc[(slice(None), 2021), :]",
      "C. df.loc[2021]",
      "D. df.loc[df.index.get_level_values('Year') == 2021]"
    ],
    "correct_option": "B",
    "explanation": "Để thực hiện lập chỉ mục trên MultiIndex với `.loc`, ta sử dụng một tuple đại diện cho các cấp chỉ mục dòng. Vì muốn lấy tất cả các giá trị của cấp thứ nhất (Group), ta dùng `slice(None)`. Cấp thứ hai chỉ định cụ thể `2021`. Vậy biểu thức dòng là `(slice(None), 2021)`. Đối số cột là `:` để lấy tất cả các cột. Do đó, `df.loc[(slice(None), 2021), :]` là cú pháp chuẩn mực và tối ưu.",
    "solution": "**Bước 1:** Xác định cấu trúc dòng cần truy xuất: tất cả nhóm ở cấp 1, năm 2021 ở cấp 2.\n**Bước 2:** Biểu diễn bằng tuple chỉ mục hàng: `(slice(None), 2021)`.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_042",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "multiindex", "iloc"],
    "content": "Cho DataFrame `df` có MultiIndex gồm hai cấp: cấp 1 (nhóm 'Group') và cấp 2 (năm 'Year'). Nhận định nào sau đây về phương thức `iloc` đối với DataFrame này là đúng?",
    "options": [
      "A. iloc không thể sử dụng trên MultiIndex DataFrame và sẽ báo lỗi TypeError.",
      "B. iloc vẫn hoạt động bình thường dựa trên vị trí số nguyên thuần túy (từ 0 đến n-1) của các dòng, bỏ qua hoàn toàn cấu trúc phân cấp MultiIndex.",
      "C. Cú pháp df.iloc[('A', 2021)] là hợp lệ để truy xuất hàng.",
      "D. iloc yêu cầu chỉ mục phải được sắp xếp trước thì mới có thể sử dụng."
    ],
    "correct_option": "B",
    "explanation": "Phương thức `iloc` lập chỉ mục dựa trên vị trí nguyên (position-based). Cấu trúc của chỉ mục (dù là chỉ mục đơn hay MultiIndex) không ảnh hưởng đến cách thức định vị dòng của `iloc`. Lệnh `df.iloc[i]` luôn trả về hàng thứ `i` (0-based) trong DataFrame, không quan tâm nhãn hàng có bao nhiêu cấp.",
    "solution": "**Bước 1:** Nhớ lại bản chất của `.iloc`: luôn lập chỉ mục theo vị trí nguyên vật lý của dòng.\n**Bước 2:** Phân cấp MultiIndex chỉ là nhãn đại diện cho các dòng đó, không làm thay đổi thứ tự hàng vật lý của DataFrame.\n**Bước 3:** Kết luận `iloc` hoạt động thuần túy dựa trên vị trí nguyên. Chọn B."
  },
  {
    "id": "Q_MOD_A_043",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "slicing", "sorting"],
    "content": "Cho DataFrame `df` với chỉ mục không được sắp xếp theo thứ tự bảng chữ cái:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'val': [10, 20, 30, 40]}, index=['c', 'a', 'd', 'b'])\n```\nKhi thực hiện lệnh `df.loc['c':'d']`, điều gì xảy ra trong Pandas?",
    "options": [
      "A. Báo lỗi UnsortedIndexError hoặc KeyError vì chỉ mục chưa được sắp xếp.",
      "B. Trả về các dòng từ 'c' đến 'd' theo thứ tự xuất hiện vật lý trong DataFrame (tức là hàng 'c', 'a', 'd').",
      "C. Tự động sắp xếp DataFrame theo index rồi trả về lát cắt tương ứng.",
      "D. Chỉ trả về hai hàng 'c' và 'd', bỏ qua hàng 'a'."
    ],
    "correct_option": "B",
    "explanation": "Trong Pandas, nếu chỉ mục không được sắp xếp, slicing bằng `.loc` vẫn hoạt động bình thường và nó sẽ trích xuất tất cả các phần tử nằm giữa nhãn bắt đầu và nhãn kết thúc theo thứ tự xuất hiện vật lý của chúng trong DataFrame. Vì thế, kết quả thu được sẽ là các hàng `'c'`, `'a'`, `'d'` (độ dài 3).",
    "solution": "**Bước 1:** Xác định vị trí vật lý của nhãn `'c'` (vị trí 0) và nhãn `'d'` (vị trí 2).\n**Bước 2:** Lát cắt lấy tất cả các dòng nằm giữa hai vị trí này, bao gồm cả hai biên.\n**Bước 3:** Các dòng nhận được là `'c'`, `'a'`, và `'d'`. Chọn B."
  },
  {
    "id": "Q_MOD_A_044",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "boolean-selection"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Val': [10, 20, 30, 40]})\ntry:\n    res = df[df['Val'] > 15 & df['Val'] < 35]\nexcept Exception as e:\n    res = type(e).__name__\nprint(res)\n```\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "A. Một DataFrame chứa các dòng có giá trị 20 và 30",
      "B. ValueError",
      "C. TypeError",
      "D. KeyError"
    ],
    "correct_option": "B",
    "explanation": "Trong Python, toán tử bitwise `&` có độ ưu tiên cao hơn các toán tử so sánh như `>` hay `<`. Do đó, biểu thức `df['Val'] > 15 & df['Val'] < 35` bị phân tích thành `df['Val'] > (15 & df['Val']) < 35`. Biểu thức này chứa phép so sánh chuỗi (chained comparison) giữa một Series và các giá trị khác. Khi so sánh Series bằng toán tử logic ngầm định, Pandas sẽ ném ra lỗi `ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().` do không xác định được giá trị chân trị rõ ràng.",
    "solution": "**Bước 1:** Phân tích độ ưu tiên toán tử: `&` chạy trước `>` và `<`.\n**Bước 2:** Biểu thức tương đương với: `(df['Val'] > (15 & df['Val'])) & ((15 & df['Val']) < 35)` dưới dạng chained comparison, dẫn tới so sánh logic mập mờ.\n**Bước 3:** Kết quả trả về ngoại lệ `ValueError`. Chọn B."
  },
  {
    "id": "Q_MOD_A_045",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "copy-view"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3]})\n# Lệnh 1:\ndf_subset = df[df['A'] > 1]\ndf_subset['A'] = 100\n# Lệnh 2:\ndf.loc[df['A'] > 1, 'A'] = 100\n```\nPhát biểu nào sau đây giải thích đúng nhất về hành vi và sự khác biệt giữa Lệnh 1 và Lệnh 2?",
    "options": [
      "A. Lệnh 1 sửa đổi trực tiếp dữ liệu trên df gốc mà không đưa ra cảnh báo nào, Lệnh 2 báo lỗi.",
      "B. Lệnh 1 có khả năng gây ra cảnh báo SettingWithCopyWarning và có thể không thay đổi df gốc. Lệnh 2 sửa đổi trực tiếp df gốc một cách an toàn và chuẩn xác.",
      "C. Cả hai lệnh đều không làm thay đổi df gốc mà chỉ tạo bản sao.",
      "D. Lệnh 1 ném ra ngoại lệ ReadOnlyError."
    ],
    "correct_option": "B",
    "explanation": "Lệnh 1 sử dụng lập chỉ mục liên tiếp (chained indexing): `df[df['A'] > 1]` tạo ra một DataFrame con (có thể là một bản sao hoặc view), sau đó gán `['A'] = 100`. Pandas không đảm bảo phép gán này tác động ngược lại DataFrame gốc `df`, và ném ra cảnh báo `SettingWithCopyWarning`. Lệnh 2 sử dụng `.loc` để truy cập và sửa đổi trực tiếp trên vùng nhớ của `df` gốc chỉ trong một thao tác duy nhất, đảm bảo tính nhất quán và không sinh cảnh báo.",
    "solution": "**Bước 1:** Phân tích Lệnh 1: `df[df['A'] > 1]` là thao tác chọn hàng, trả về một đối tượng trung gian. Việc gán giá trị tiếp theo tạo ra chained indexing không an toàn.\n**Bước 2:** Phân tích Lệnh 2: `.loc` xử lý cả lọc hàng và chọn cột đồng thời trong một bước, ghi đè trực tiếp lên DataFrame gốc.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_A_046",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "loc", "lambda"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': [10, 20, 30, 40]})\nres = df.loc[lambda x: x['A'] > 20]\nprint(res.index.tolist())\n```\nĐoạn mã trên hoạt động như thế nào?",
    "options": [
      "A. Báo lỗi TypeError vì .loc không hỗ trợ nhận đầu vào là hàm lambda.",
      "B. Hoạt động bình thường, trả về các hàng mà giá trị cột 'A' lớn hơn 20 (chỉ mục [2, 3]).",
      "C. Hoạt động bình thường nhưng trả về một danh sách các giá trị Boolean thay vì DataFrame.",
      "D. Trả về toàn bộ DataFrame df vì lambda luôn trả về True trong ngữ cảnh này."
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.loc` và `.iloc` của Pandas có khả năng nhận một hàm callable (như lambda). Hàm này sẽ nhận đầu vào chính là DataFrame đang được truy xuất (`df`) và trả về cấu trúc chỉ mục hợp lệ (ở đây là một Boolean Series). Điều này rất hữu ích khi thực hiện lập chỉ mục ngay sau các chuỗi phương thức (method chaining) khi DataFrame trung gian chưa được gán cho một biến cụ thể.",
    "solution": "**Bước 1:** Nhớ lại tính năng của `.loc` hỗ trợ tham số đầu vào là callable.\n**Bước 2:** Hàm `lambda x: x['A'] > 20` nhận `df` làm `x`, trả về Series Boolean `[False, False, True, True]`.\n**Bước 3:** Kết quả lọc ra các dòng có index `[2, 3]`. Chọn B."
  },
  {
    "id": "Q_MOD_A_047",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "dataframe", "creation", "dtypes"],
    "content": "Cho đoạn mã sau:\n```python\nimport pandas as pd\ndata = {'col1': [1, 2], 'col2': [3.5, 4.5]}\ndf = pd.DataFrame(data, dtype='float32')\nprint(df.dtypes['col1'])\n```\nKiểu dữ liệu của 'col1' trong `df` là gì?",
    "options": [
      "A. int64",
      "B. float64",
      "C. float32",
      "D. Báo lỗi TypeError vì 'col1' chứa các số nguyên không thể chuyển sang float32 tự động."
    ],
    "correct_option": "C",
    "explanation": "Khi khởi tạo DataFrame, nếu ta chỉ định cụ thể đối số `dtype` (ví dụ `dtype='float32'`), Pandas sẽ ép tất cả các cột dữ liệu tương thích sang kiểu dữ liệu đã chỉ định nếu có thể. Ở đây, các số nguyên trong `'col1'` được ép kiểu thành `float32` một cách hợp lệ.",
    "solution": "**Bước 1:** Tham số `dtype='float32'` được áp dụng cho toàn bộ DataFrame trong quá trình khởi tạo.\n**Bước 2:** Cột `'col1'` ban đầu chứa số nguyên `[1, 2]` sẽ được ép sang `float32`.\n**Bước 3:** `df.dtypes['col1']` trả về `float32`. Chọn C."
  },
  {
    "id": "Q_MOD_A_048",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "reindex"],
    "content": "Cho Series `s` sau:\n```python\nimport pandas as pd\ns = pd.Series([10, 30], index=[0, 2])\ns_new = s.reindex([0, 1, 2], method='ffill')\nprint(s_new[1])\n```\nKết quả in ra màn hình là bao nhiêu?",
    "options": [
      "A. NaN",
      "B. 10",
      "C. 20",
      "D. 30"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `reindex()` đồng bộ hóa dữ liệu của Series theo một chỉ mục mới. Với tham số `method='ffill'` (forward fill), các nhãn chỉ mục mới không tồn tại trong Series gốc (ở đây là chỉ mục `1`) sẽ được điền giá trị bằng cách lấy giá trị của phần tử có chỉ mục hợp lệ đứng trước nó gần nhất (ở đây là chỉ mục `0` có giá trị `10`). Vì vậy, `s_new[1]` nhận giá trị `10`.",
    "solution": "**Bước 1:** Chỉ mục ban đầu là `[0, 2]`. Chỉ mục mới là `[0, 1, 2]`.\n**Bước 2:** Vị trí chỉ mục `1` bị khuyết dữ liệu. Nhờ `method='ffill'`, giá trị từ chỉ mục `0` (là 10) được điền tiến lên phía trước cho chỉ mục `1`.\n**Bước 3:** Giá trị tại chỉ mục 1 bằng 10. Chọn B."
  },
  {
    "id": "Q_MOD_A_049",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "indexing", "performance"],
    "content": "Để truy xuất hoặc sửa đổi giá trị của một ô đơn lẻ (scalar value) trong DataFrame lớn với tốc độ tối ưu nhất về mặt hiệu năng, Pandas cung cấp cặp thuộc tính chuyên dụng nào?",
    "options": [
      "A. .loc và .iloc",
      "B. .at và .iat",
      "C. .get_value và .set_value",
      "D. .fast_loc và .fast_iloc"
    ],
    "correct_option": "B",
    "explanation": "Cặp thuộc tính `.at` (dựa trên nhãn) và `.iat` (dựa trên vị trí nguyên) được thiết kế tối ưu riêng cho việc truy xuất hoặc cập nhật giá trị của một ô đơn lẻ duy nhất (scalar lookup). Vì chúng bỏ qua các bước kiểm tra phức tạp dành cho việc lấy chuỗi/mảng dữ liệu của `.loc` và `.iloc`, tốc độ thực thi của `.at` và `.iat` nhanh hơn đáng kể.",
    "solution": "**Bước 1:** Phân biệt phạm vi hoạt động: `.loc`/`.iloc` dùng cho cả truy xuất mảng và lát cắt, còn `.at`/`.iat` chỉ dùng cho ô đơn lẻ.\n**Bước 2:** Nhờ thu hẹp phạm vi, `.at`/`.iat` tối ưu hóa tối đa hiệu năng tìm kiếm ô đơn.\n**Bước 3:** Chọn đáp án B."
  },
  {
    "id": "Q_MOD_A_050",
    "module_id": "Module_A",
    "difficulty": "Hard",
    "tags": ["pandas", "series", "value_counts"],
    "content": "Cho Series `s = pd.Series([5, 15, 25, 35])`. Khi chạy lệnh `s.value_counts(bins=2)`, Pandas sẽ nhóm dữ liệu thành 2 khoảng liên tục có độ dài bằng nhau. Nhận định nào sau đây là đúng về kết quả?",
    "options": [
      "A. Các khoảng nhóm sẽ là (4.97, 20.0] và (20.0, 35.0], mỗi khoảng chứa 2 phần tử.",
      "B. Các khoảng nhóm sẽ là [5, 20] và [21, 35], mỗi khoảng chứa 2 phần tử.",
      "C. Báo lỗi TypeError vì value_counts chỉ dùng cho dữ liệu phân loại, không chia khoảng được cho dữ liệu số.",
      "D. Trả về một Series có 4 nhóm tương ứng với 4 giá trị."
    ],
    "correct_option": "A",
    "explanation": "Khi truyền tham số `bins=k` vào `value_counts()` trên dữ liệu số, Pandas sử dụng thuật toán chia đều khoảng giá trị. Khoảng giá trị từ cực tiểu đến cực đại ([5, 35]) sẽ được chia làm 2 khoảng bằng nhau. Để bao quát được giá trị nhỏ nhất (5), Pandas mở rộng biên trái một chút, tạo ra khoảng đầu tiên là `(4.97, 20.0]` chứa 5 và 15, và khoảng thứ hai là `(20.0, 35.0]` chứa 25 và 35. Mỗi khoảng chứa đúng 2 phần tử.",
    "solution": "**Bước 1:** Xác định giá trị nhỏ nhất là 5, lớn nhất là 35. Khoảng giá trị là 30.\n**Bước 2:** Chia đôi khoảng: mỗi khoảng rộng 15 đơn vị.\n**Bước 3:** Tạo khoảng bao gồm giá trị biên dưới: khoảng 1 là `(4.97, 20.0]`, khoảng 2 là `(20.0, 35.0]`. Chọn A."
  }
];
