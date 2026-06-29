const QUESTIONS_D = [
  {
    "id": "Q_MOD_D_001",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "aggregation"],
    "content": "Cho DataFrame `df` chứa thông tin bán hàng:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Item': ['A', 'B', 'A', 'B'],\n    'Quantity': [10, 20, 15, 5]\n})\nresult = df.groupby('Item').sum()\nprint(result.loc['A', 'Quantity'])\n```\nGiá trị in ra màn hình là bao nhiêu?",
    "options": [
      "A. 10",
      "B. 15",
      "C. 25",
      "D. 20"
    ],
    "correct_option": "C",
    "explanation": "Phương thức `groupby('Item').sum()` sẽ nhóm các dòng có cùng giá trị trong cột 'Item' và tính tổng cột 'Quantity' tương ứng. Đối với 'A', tổng là 10 + 15 = 25.",
    "solution": "**Bước 1:** Nhóm DataFrame theo cột 'Item'.\n**Bước 2:** Tính tổng cột 'Quantity' cho từng nhóm. Nhóm 'A' gồm [10, 15] nên tổng là 25.\n**Bước 3:** Truy cập kết quả của nhóm 'A' bằng `result.loc['A', 'Quantity']`. Chọn C."
  },
  {
    "id": "Q_MOD_D_002",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "count"],
    "content": "Hàm nào dưới đây được sử dụng để đếm số lượng dòng trong mỗi nhóm sau khi thực hiện `groupby()`, bao gồm cả các giá trị khuyết (NaN)?",
    "options": [
      "A. count()",
      "B. size()",
      "C. value_counts()",
      "D. len()"
    ],
    "correct_option": "B",
    "explanation": "Trong Pandas, `.size()` trả về tổng số phần tử (bao gồm cả NaN) trong mỗi nhóm, trong khi `.count()` chỉ đếm các giá trị không khuyết (non-null).",
    "solution": "**Bước 1:** Phân biệt `count()` và `size()` trong groupby.\n**Bước 2:** `size()` đếm tất cả các dòng của nhóm kể cả chứa giá trị khuyết.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_003",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "concat", "axis"],
    "content": "Khi sử dụng hàm `pd.concat([df1, df2])` mà không truyền tham số `axis`, mặc định Pandas sẽ thực hiện phép nối theo chiều nào?",
    "options": [
      "A. Nối theo cột (ngang), tương đương axis=1",
      "B. Nối theo dòng (dọc), tương đương axis=0",
      "C. Nối chéo cơ sở dữ liệu",
      "D. Gây ra lỗi cú pháp"
    ],
    "correct_option": "B",
    "explanation": "Mặc định, tham số `axis` của `pd.concat()` có giá trị là 0, nghĩa là xếp chồng các DataFrame lên nhau theo hàng dọc.",
    "solution": "**Bước 1:** Xem định nghĩa mặc định của `pd.concat`.\n**Bước 2:** Mặc định `axis=0` (nối dọc/dòng).\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_004",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "join-types"],
    "content": "Trong hàm `pd.merge(df1, df2, how='...')`, tham số `how` nhận giá trị nào để thực hiện phép liên kết tương đương với RIGHT OUTER JOIN trong SQL?",
    "options": [
      "A. 'outer'",
      "B. 'right'",
      "C. 'left'",
      "D. 'inner'"
    ],
    "correct_option": "B",
    "explanation": "Giá trị `how='right'` trong `pd.merge()` tương đương với phép kết phải (RIGHT OUTER JOIN), giữ lại tất cả các hàng từ DataFrame bên phải.",
    "solution": "**Bước 1:** Xác định phép toán kết nối tương ứng SQL.\n**Bước 2:** Phép kết phải trong Pandas sử dụng `how='right'`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_005",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "on"],
    "content": "Cho DataFrame `df1` có cột `'key'` và `df2` cũng có cột `'key'`. Lệnh ghép nối nào sau đây là chính xác để ghép hai bảng dựa trên cột `'key'`?",
    "options": [
      "A. pd.merge(df1, df2, on='key')",
      "B. df1.merge(df2, key='key')",
      "C. pd.join(df1, df2, on='key')",
      "D. pd.concat([df1, df2], on='key')"
    ],
    "correct_option": "A",
    "explanation": "Để ghép nối hai DataFrame theo một cột chung bằng `pd.merge`, ta dùng tham số `on` để chỉ định tên cột khóa.",
    "solution": "**Bước 1:** `pd.merge` sử dụng tham số `on` để kết hợp các cột chung.\n**Bước 2:** Cú pháp chuẩn: `pd.merge(df1, df2, on='key')`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_006",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "mean"],
    "content": "Cho DataFrame `df` như sau:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Group': ['X', 'X', 'Y', 'Y'],\n    'Val': [10, 30, 20, 40]\n})\n```\nKết quả của `df.groupby('Group')['Val'].mean()['X']` là bao nhiêu?",
    "options": [
      "A. 10.0",
      "B. 20.0",
      "C. 30.0",
      "D. 40.0"
    ],
    "correct_option": "B",
    "explanation": "Nhóm 'X' gồm hai giá trị là 10 và 30. Giá trị trung bình của nhóm 'X' sẽ là $(10 + 30) / 2 = 20.0$.",
    "solution": "**Bước 1:** Lọc các hàng thuộc nhóm 'X' trong cột 'Group' -> [10, 30].\n**Bước 2:** Tính trung bình cộng của nhóm 'X': $(10 + 30) / 2 = 20.0$.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_007",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "concat", "ignore_index"],
    "content": "Để đặt lại (reset) chỉ mục hàng từ 0 đến N-1 sau khi thực hiện `pd.concat()`, ta truyền tham số nào?",
    "options": [
      "A. reset_index=True",
      "B. ignore_index=True",
      "C. drop_index=True",
      "D. verify_integrity=False"
    ],
    "correct_option": "B",
    "explanation": "Tham số `ignore_index=True` trong `pd.concat()` giúp loại bỏ các chỉ mục gốc của các DataFrame con và tạo ra một RangeIndex mới bắt đầu từ 0.",
    "solution": "**Bước 1:** Phân tích tham số của `pd.concat`.\n**Bước 2:** `ignore_index=True` dùng để bỏ qua index cũ và đánh số lại index từ 0.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_008",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "suffixes"],
    "content": "Khi ghép nối hai DataFrame bằng `pd.merge()` mà cả hai đều có cột trùng tên không nằm trong khóa ghép (`on`), mặc định Pandas sẽ thêm hậu tố gì vào tên các cột đó?",
    "options": [
      "A. `_left` và `_right`",
      "B. `_x` và `_y`",
      "C. `_1` và `_2`",
      "D. `_df1` và `_df2`"
    ],
    "correct_option": "B",
    "explanation": "Mặc định, Pandas sử dụng tham số `suffixes=('_x', '_y')` để phân biệt các cột trùng tên không tham gia vào khóa ghép nối của bảng trái và phải.",
    "solution": "**Bước 1:** Nhớ lại hành vi mặc định của `pd.merge`.\n**Bước 2:** Hậu tố được thêm vào cột trùng tên là `_x` cho bảng bên trái và `_y` cho bảng bên phải.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_009",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "join"],
    "content": "Phương thức `.join()` của DataFrame trong Pandas mặc định ghép nối các DataFrame dựa trên cái gì?",
    "options": [
      "A. Cột trùng tên đầu tiên",
      "B. Chỉ mục (Index) của các DataFrame",
      "C. Toàn bộ các cột trùng tên",
      "D. Khóa ngoại tự động nhận diện"
    ],
    "correct_option": "B",
    "explanation": "Khác với `pd.merge()`, phương thức `df1.join(df2)` mặc định thực hiện ghép nối dựa trên chỉ mục (Index) của các dòng.",
    "solution": "**Bước 1:** Tìm hiểu hành vi mặc định của phương thức `.join()`.\n**Bước 2:** `.join()` được thiết kế tối ưu cho việc ghép nối qua Index.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_010",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "as_index"],
    "content": "Khi thực hiện `df.groupby('Col', as_index=False).mean()`, cột `'Col'` sẽ nằm ở đâu trong DataFrame kết quả?",
    "options": [
      "A. Nằm ở cột chỉ mục (Index)",
      "B. Nằm ở một cột dữ liệu thông thường",
      "C. Bị loại bỏ hoàn toàn khỏi kết quả",
      "D. Nằm ở cả Index lẫn cột thông thường"
    ],
    "correct_option": "B",
    "explanation": "Khi thiết lập `as_index=False`, cột dùng để gom nhóm sẽ không bị biến thành chỉ mục (index) của DataFrame kết quả mà được giữ lại như một cột dữ liệu bình thường.",
    "solution": "**Bước 1:** Tham số `as_index` kiểm soát cột gom nhóm có làm index hay không.\n**Bước 2:** `as_index=False` chỉ định giữ cột gom nhóm ở dạng cột dữ liệu chuẩn.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_011",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "first"],
    "content": "Phương thức gom tụ nào dưới đây trả về giá trị đầu tiên xuất hiện trong mỗi nhóm sau khi gọi `groupby()`?",
    "options": [
      "A. head(1)",
      "B. first()",
      "C. initial()",
      "D. top()"
    ],
    "correct_option": "B",
    "explanation": "Phương thức `.first()` trong groupby của Pandas trả về giá trị không khuyết đầu tiên tìm thấy ở mỗi nhóm.",
    "solution": "**Bước 1:** Phương thức gom tụ lấy giá trị đầu tiên là `first()`.\n**Bước 2:** Chọn B."
  },
  {
    "id": "Q_MOD_D_012",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "validate"],
    "content": "Để kiểm tra xem phép ghép nối có tuân thủ quan hệ 1-1 hay không (ném lỗi nếu một khóa xuất hiện nhiều lần), ta dùng tham số nào trong `pd.merge()`?",
    "options": [
      "A. check_relation='one_to_one'",
      "B. validate='one_to_one' (hoặc '1:1')",
      "C. restrict='1:1'",
      "D. integrity='1-1'"
    ],
    "correct_option": "B",
    "explanation": "Tham số `validate` trong `pd.merge()` chấp nhận các giá trị: `'one_to_one'` (hoặc `'1:1'`), `'one_to_many'`, `'many_to_one'` để kiểm tra tính toàn vẹn của dữ liệu ghép.",
    "solution": "**Bước 1:** Tìm thuộc tính kiểm tra mối quan hệ khóa khi merge.\n**Bước 2:** Sử dụng tham số `validate='one_to_one'`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_013",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "groups"],
    "content": "Thuộc tính nào của đối tượng GroupBy trong Pandas trả về một dictionary chứa các khóa nhóm ánh xạ tới danh sách vị trí index tương ứng của chúng?",
    "options": [
      "A. groups",
      "B. indices",
      "C. group_keys",
      "D. dictionary"
    ],
    "correct_option": "A",
    "explanation": "Thuộc tính `.groups` trả về một dict ánh xạ: `{tên_nhóm: [danh_sách_chỉ_mục_thuộc_nhóm]}`.",
    "solution": "**Bước 1:** Đối tượng groupby có thuộc tính `.groups`.\n**Bước 2:** Thuộc tính này chứa từ điển các nhóm và chỉ mục tương ứng. Chọn A."
  },
  {
    "id": "Q_MOD_D_014",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "indicator"],
    "content": "Khi gọi `pd.merge(df1, df2, on='ID', indicator=True)`, cột mới nào sẽ xuất hiện ở DataFrame kết quả để chỉ ra nguồn gốc dòng dữ liệu?",
    "options": [
      "A. `_origin`",
      "B. `_merge`",
      "C. `source`",
      "D. `merge_status`"
    ],
    "correct_option": "B",
    "explanation": "Tham số `indicator=True` tạo ra cột đặc biệt tên là `_merge` chứa các giá trị phân loại: `'both'`, `'left_only'`, `'right_only'` xác định dòng đó đến từ đâu.",
    "solution": "**Bước 1:** `indicator=True` tạo cột chỉ báo nguồn gốc dữ liệu.\n**Bước 2:** Tên mặc định của cột này là `_merge`.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_015",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "ngroups"],
    "content": "Thuộc tính nào của đối tượng GroupBy cho biết số lượng nhóm duy nhất được tạo ra?",
    "options": [
      "A. ngroups",
      "B. num_groups",
      "C. len()",
      "D. size"
    ],
    "correct_option": "A",
    "explanation": "Thuộc tính `.ngroups` lưu trữ số lượng nhóm duy nhất được tạo ra từ khóa gom nhóm.",
    "solution": "**Bước 1:** Đọc tài liệu thuộc tính đếm số lượng nhóm.\n**Bước 2:** Thuộc tính đó là `ngroups`. Chọn A."
  },
  {
    "id": "Q_MOD_D_016",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "concat", "keys"],
    "content": "Khi thực hiện `pd.concat([df1, df2], keys=['Bảng1', 'Bảng2'])`, chỉ mục của DataFrame kết quả sẽ có dạng gì?",
    "options": [
      "A. Chỉ mục phân cấp (MultiIndex)",
      "B. RangeIndex từ 0 đến N-1",
      "C. StringIndex chứa dấu gạch dưới",
      "D. Không đổi so với chỉ mục ban đầu"
    ],
    "correct_option": "A",
    "explanation": "Tham số `keys` tạo ra một MultiIndex (chỉ mục đa cấp), trong đó cấp ngoài cùng là nhãn từ danh sách `keys` và cấp trong là chỉ mục ban đầu của mỗi DataFrame.",
    "solution": "**Bước 1:** Tham số `keys` bổ sung một chiều chỉ mục phân cấp bên ngoài.\n**Bước 2:** Tạo ra MultiIndex. Chọn A."
  },
  {
    "id": "Q_MOD_D_017",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "cross"],
    "content": "Để thực hiện tích Descartes (Cartesian product) giữa hai DataFrame (ghép mọi dòng của df1 với mọi dòng của df2), ta gán giá trị nào cho tham số `how` trong `pd.merge()`?",
    "options": [
      "A. 'cross'",
      "B. 'outer'",
      "C. 'cartesian'",
      "D. 'all'"
    ],
    "correct_option": "A",
    "explanation": "Từ phiên bản Pandas 1.2.0, `how='cross'` được hỗ trợ để trực tiếp tạo tích Descartes giữa hai bảng mà không cần tạo khóa giả.",
    "solution": "**Bước 1:** Xác định phép ghép nối Descartes.\n**Bước 2:** Sử dụng giá trị `how='cross'`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_018",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "agg"],
    "content": "Để tính đồng thời cả giá trị lớn nhất (max) và giá trị nhỏ nhất (min) của cột `'Sales'` sau khi groupby, ta truyền tham số nào vào phương thức `.agg()`?",
    "options": [
      "A. `df.groupby('G')['Sales'].agg(['min', 'max'])`",
      "B. `df.groupby('G')['Sales'].agg('min', 'max')`",
      "C. `df.groupby('G')['Sales'].agg({'min', 'max'})`",
      "D. `df.groupby('G')['Sales'].agg(min, max)`"
    ],
    "correct_option": "A",
    "explanation": "Ta có thể truyền một danh sách các chuỗi tên hàm chuẩn như `['min', 'max']` vào `.agg()` để tính toán nhiều chỉ số tổng hợp cùng lúc.",
    "solution": "**Bước 1:** Để áp dụng nhiều hàm tính toán, dùng danh sách hàm dạng list.\n**Bước 2:** Lệnh đúng là `.agg(['min', 'max'])`. Chọn A."
  },
  {
    "id": "Q_MOD_D_019",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "merge", "left_index"],
    "content": "Nếu muốn ghép nối `df1` dựa trên chỉ mục (Index) của nó với `df2` dựa trên cột `'ID'`, ta cấu hình tham số nào trong `pd.merge()`?",
    "options": [
      "A. left_index=True, right_on='ID'",
      "B. left_on=True, right_on='ID'",
      "C. index_on='ID'",
      "D. left_index='ID'"
    ],
    "correct_option": "A",
    "explanation": "Trong `pd.merge()`, `left_index=True` chỉ định dùng index của bảng trái làm khóa, và `right_on='ID'` chỉ định dùng cột `'ID'` của bảng phải làm khóa.",
    "solution": "**Bước 1:** Thiết lập khóa bên trái là index -> `left_index=True`.\n**Bước 2:** Thiết lập khóa bên phải là cột 'ID' -> `right_on='ID'`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_020",
    "module_id": "Module_D",
    "difficulty": "Easy",
    "tags": ["pandas", "groupby", "get_group"],
    "content": "Phương thức nào dùng để trích xuất một DataFrame con chứa toàn bộ dữ liệu của một nhóm cụ thể từ đối tượng GroupBy?",
    "options": [
      "A. get_group('tên_nhóm')",
      "B. fetch_group('tên_nhóm')",
      "C. group['tên_nhóm']",
      "D. filter('tên_nhóm')"
    ],
    "correct_option": "A",
    "explanation": "Để lấy ra dữ liệu chi tiết của một nhóm nào đó sau khi groupby, ta gọi phương thức `.get_group('tên_nhóm')`.",
    "solution": "**Bước 1:** Xác định phương thức trích xuất nhóm cụ thể.\n**Bước 2:** Gọi hàm `.get_group()` truyền tên nhóm cần lấy.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_021",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "agg-dict"],
    "content": "Cho DataFrame `df`:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': ['G1', 'G1', 'G2', 'G2'],\n    'B': [1, 2, 3, 4],\n    'C': [10, 20, 30, 40]\n})\nresult = df.groupby('A').agg({'B': 'sum', 'C': 'mean'})\n```\nGiá trị tại dòng `'G1'` cột `'C'` của DataFrame `result` là bao nhiêu?",
    "options": [
      "A. 15.0",
      "B. 3.0",
      "C. 30.0",
      "D. 2.0"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.agg()` nhận vào dictionary chỉ định: cột 'B' tính tổng (sum), cột 'C' tính trung bình (mean). Với nhóm 'G1', cột 'C' có các giá trị [10, 20], trung bình cộng là $(10 + 20)/2 = 15.0$.",
    "solution": "**Bước 1:** Nhóm theo 'A'. Nhóm 'G1' có các giá trị cột 'C' là 10 và 20.\n**Bước 2:** Áp dụng hàm 'mean' cho cột 'C' đối với nhóm 'G1': $(10 + 20) / 2 = 15.0$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_022",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "how-outer"],
    "content": "Cho `df1` có 3 dòng với chỉ mục `['a', 'b', 'c']` và `df2` có 3 dòng với chỉ mục `['b', 'c', 'd']`. Nếu thực hiện phép merge bên dưới, số lượng dòng của DataFrame kết quả là bao nhiêu?\n```python\nimport pandas as pd\ndf1 = pd.DataFrame({'val1': [1, 2, 3]}, index=['a', 'b', 'c'])\ndf2 = pd.DataFrame({'val2': [4, 5, 6]}, index=['b', 'c', 'd'])\nresult = pd.merge(df1, df2, left_index=True, right_index=True, how='outer')\n```",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 6"
    ],
    "correct_option": "C",
    "explanation": "Phép merge với `how='outer'` (FULL OUTER JOIN) giữ lại tất cả các khóa chỉ mục xuất hiện ở ít nhất một trong hai DataFrame. Tập hợp các khóa duy nhất là `{'a', 'b', 'c', 'd'}` (tổng cộng 4 dòng).",
    "solution": "**Bước 1:** Liệt kê các index của df1: ['a', 'b', 'c'].\n**Bước 2:** Liệt kê các index của df2: ['b', 'c', 'd'].\n**Bước 3:** Kết hợp outer join lấy hợp của hai tập hợp index -> ['a', 'b', 'c', 'd'] (4 phần tử). Chọn C."
  },
  {
    "id": "Q_MOD_D_023",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "filter"],
    "content": "Phương thức nào cho phép ta lọc bỏ các nhóm không thỏa mãn một điều kiện nhất định (ví dụ: tổng giá trị cột của nhóm lớn hơn 100)?\n```python\n# Loại bỏ các nhóm có tổng số lượng bán nhỏ hơn hoặc bằng 100\ndf.groupby('Product').____(lambda x: x['Qty'].sum() > 100)\n```\nĐiền tên phương thức thích hợp vào chỗ trống.",
    "options": [
      "A. filter",
      "B. select",
      "C. transform",
      "D. apply"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.filter()` nhận vào một hàm trả về giá trị Boolean. Hàm này được áp dụng cho từng DataFrame con của mỗi nhóm; nếu trả về True, nhóm đó được giữ lại trong DataFrame kết quả.",
    "solution": "**Bước 1:** Phân tích nhu cầu lọc dữ liệu dựa trên thuộc tính tổng quát của nhóm.\n**Bước 2:** Dùng phương thức `.filter(func)` của đối tượng GroupBy.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_024",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "concat", "verify_integrity"],
    "content": "Nếu muốn `pd.concat()` ném ra lỗi `ValueError` nếu DataFrame kết quả có chứa chỉ mục (index) trùng lặp, ta thiết lập tham số nào?",
    "options": [
      "A. verify_integrity=True",
      "B. check_duplicates=True",
      "C. unique_index=True",
      "D. ignore_index=False"
    ],
    "correct_option": "A",
    "explanation": "Tham số `verify_integrity=True` trong `pd.concat()` yêu cầu Pandas kiểm tra xem chỉ mục mới tạo ra có bị trùng lặp nhãn hay không. Nếu có, nó sẽ báo lỗi ngay lập tức.",
    "solution": "**Bước 1:** Tìm tham số kiểm thử trùng lặp chỉ mục trong `pd.concat`.\n**Bước 2:** Gán `verify_integrity=True`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_025",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "transform"],
    "content": "Sự khác biệt chính giữa `.transform()` và `.apply()` sau khi thực hiện `groupby()` là gì?",
    "options": [
      "A. `.transform()` luôn trả về kết quả có cùng kích thước (số dòng) với DataFrame gốc.",
      "B. `.apply()` chạy nhanh hơn `.transform()` gấp nhiều lần.",
      "C. `.transform()` chỉ hoạt động trên các cột kiểu số.",
      "D. `.apply()` tự động loại bỏ các giá trị NaN."
    ],
    "correct_option": "A",
    "explanation": "Hàm `.transform()` áp dụng phép biến đổi trên từng cột của nhóm và luôn trả về một đối tượng có cùng kích thước (số hàng) với DataFrame ban đầu, rất hữu ích khi chuẩn hóa dữ liệu hoặc điền khuyết theo nhóm.",
    "solution": "**Bước 1:** Xem đặc tính của `.transform()`.\n**Bước 2:** `.transform()` giữ nguyên cấu trúc index và số lượng dòng của bảng gốc.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_026",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "indicator-values"],
    "content": "Cho DataFrame `df1` có khóa `'key': ['A', 'B']` và `df2` có khóa `'key': ['B', 'C']`. Khi thực hiện phép merge:\n```python\nresult = pd.merge(df1, df2, on='key', how='outer', indicator=True)\n```\nGiá trị của cột `_merge` tại dòng ứng với khóa `'C'` sẽ là gì?",
    "options": [
      "A. 'right_only'",
      "B. 'left_only'",
      "C. 'both'",
      "D. NaN"
    ],
    "correct_option": "A",
    "explanation": "Khóa 'C' chỉ xuất hiện ở DataFrame thứ hai (`df2`), nằm bên phải phép ghép nối. Do đó cột `_merge` chỉ định nguồn gốc của dòng này là `'right_only'`.",
    "solution": "**Bước 1:** Khóa 'C' thuộc df2 (bảng bên phải) nhưng không có trong df1 (bảng bên trái).\n**Bước 2:** Với outer join, hàng 'C' được giữ lại.\n**Bước 3:** Cột `_merge` chỉ định nguồn là `'right_only'`. Chọn A."
  },
  {
    "id": "Q_MOD_D_027",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "multiindex"],
    "content": "Cho DataFrame `df` chứa cột `'City'`, `'Store'` và `'Revenue'`. Sau khi thực hiện lệnh:\n```python\nresult = df.groupby(['City', 'Store'])['Revenue'].sum()\n```\nLàm thế nào để chuyển đổi Series kết quả từ chỉ mục đa cấp (MultiIndex) về DataFrame thông thường có các cột phẳng `['City', 'Store', 'Revenue']`?",
    "options": [
      "A. result.reset_index()",
      "B. result.unstack()",
      "C. result.flatten()",
      "D. pd.DataFrame(result)"
    ],
    "correct_option": "A",
    "explanation": "Gọi phương thức `.reset_index()` trên Series MultiIndex sẽ biến đổi các cấp chỉ mục dòng thành các cột dữ liệu thông thường và trả về một DataFrame phẳng.",
    "solution": "**Bước 1:** Xác định nhu cầu làm phẳng MultiIndex.\n**Bước 2:** Dùng phương thức `.reset_index()` chuyển chỉ mục thành cột.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_028",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "suffixes-error"],
    "content": "Điều gì xảy ra nếu bạn cố gắng thực hiện `pd.merge()` trên hai DataFrame có các cột trùng tên không tham gia vào khóa ghép nối, nhưng bạn lại truyền đối số `suffixes=(None, None)`?",
    "options": [
      "A. Ném ra lỗi ValueError vì tên cột kết quả không được phép trùng lặp.",
      "B. Phép merge thành công và giữ nguyên tên cột trùng lặp ở DataFrame kết quả.",
      "C. Tự động chuyển hậu tố về mặc định `_x` và `_y`.",
      "D. Pandas tự động xóa một trong hai cột bị trùng tên."
    ],
    "correct_option": "A",
    "explanation": "Pandas không cho phép các cột trùng tên tồn tại trong DataFrame kết quả sau phép merge nếu không gán hậu tố khác nhau. Việc truyền `suffixes=(None, None)` hoặc các giá trị không hợp lệ sẽ ném ra lỗi `ValueError`.",
    "solution": "**Bước 1:** Xem tác dụng của `suffixes`.\n**Bước 2:** Đặt `None` cho cả hai hậu tố dẫn đến xung đột tên cột kết quả.\n**Bước 3:** Pandas báo lỗi `ValueError`. Chọn A."
  },
  {
    "id": "Q_MOD_D_029",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "agg-custom"],
    "content": "Cách nào sau đây định nghĩa đúng hàm tùy biến để tính khoảng biến thiên (Range = Max - Min) của mỗi nhóm cho cột `'Price'`?",
    "options": [
      "A. `df.groupby('G')['Price'].agg(lambda x: x.max() - x.min())`",
      "B. `df.groupby('G')['Price'].agg(max - min)`",
      "C. `df.groupby('G')['Price'].agg('max' - 'min')`",
      "D. `df.groupby('G')['Price'].range()`"
    ],
    "correct_option": "A",
    "explanation": "Ta có thể truyền một hàm lambda tự định nghĩa nhận vào một Series đại diện cho dữ liệu của nhóm và trả về giá trị đơn lẻ: `lambda x: x.max() - x.min()`.",
    "solution": "**Bước 1:** Xác định công thức tính Range = Max - Min.\n**Bước 2:** Sử dụng hàm lambda tùy biến trong phương thức `.agg()`. Chọn A."
  },
  {
    "id": "Q_MOD_D_030",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "unstack"],
    "content": "Cho đoạn mã dưới đây:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': ['X', 'X', 'Y', 'Y'],\n    'B': ['M1', 'M2', 'M1', 'M2'],\n    'C': [1, 2, 3, 4]\n})\nresult = df.groupby(['A', 'B'])['C'].sum().unstack('B')\n```\nKích thước (shape) của DataFrame `result` là bao nhiêu?",
    "options": [
      "A. (2, 2)",
      "B. (4, 1)",
      "C. (1, 4)",
      "D. (4, 2)"
    ],
    "correct_option": "A",
    "explanation": "Phép `groupby(['A', 'B']).sum()` tạo ra một Series có chỉ mục dòng gồm 2 cấp: A (X, Y) và B (M1, M2). Gọi `.unstack('B')` sẽ xoay cấp chỉ mục 'B' lên thành các cột. Kết quả thu được là DataFrame có dòng là `['X', 'Y']` và cột là `['M1', 'M2']`, kích thước (2, 2).",
    "solution": "**Bước 1:** Tính kết quả groupby: X-M1: 1, X-M2: 2, Y-M1: 3, Y-M2: 4.\n**Bước 2:** `unstack('B')` đẩy 'B' lên cột. Các cột là M1, M2. Các dòng là X, Y.\n**Bước 3:** Có 2 hàng và 2 cột -> shape là (2, 2). Chọn A."
  },
  {
    "id": "Q_MOD_D_031",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "join-index"],
    "content": "Để ghép nối hai DataFrame dựa trên chỉ mục dòng (Index) của cả hai bảng, cú pháp `pd.merge` nào sau đây là đúng?",
    "options": [
      "A. pd.merge(df1, df2, left_index=True, right_index=True)",
      "B. pd.merge(df1, df2, on='index')",
      "C. pd.merge(df1, df2, left_on=df1.index, right_on=df2.index)",
      "D. pd.merge(df1, df2, use_index=True)"
    ],
    "correct_option": "A",
    "explanation": "Cấu hình `left_index=True` và `right_index=True` chỉ định phép merge so khớp các dòng dựa vào giá trị chỉ mục của hai DataFrame.",
    "solution": "**Bước 1:** Xác định tham số chỉ định index là khóa ghép nối.\n**Bước 2:** Sử dụng kết hợp `left_index=True` và `right_index=True`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_032",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "agg-list-output"],
    "content": "Khi gọi `df.groupby('A')['B'].agg(['sum', 'mean'])`, cấu trúc cột của DataFrame nhận được sẽ là gì?",
    "options": [
      "A. Cột đa cấp (MultiIndex columns)",
      "B. Các cột phẳng gồm 'sum' và 'mean'",
      "C. Chỉ có một cột duy nhất chứa list kết quả",
      "D. Cột phẳng có tên 'B_sum' và 'B_mean'"
    ],
    "correct_option": "B",
    "explanation": "Do ta chỉ thực hiện gom tụ trên một cột đơn lẻ là `'B'`, DataFrame kết quả sẽ trả về các cột phẳng có tên là tên các hàm: `'sum'` và `'mean'`. Nếu gom tụ trên nhiều cột (ví dụ: `df.groupby('A')[['B', 'C']].agg(['sum', 'mean'])`), cột kết quả mới có cấu trúc đa cấp MultiIndex.",
    "solution": "**Bước 1:** Nhận biết đối tượng gọi `.agg()` là Series `df['B']`.\n**Bước 2:** Kết quả trả về DataFrame có cột chính là tên các hàm tính toán: sum và mean.\n**Bước 3:** Chọn B."
  },
  {
    "id": "Q_MOD_D_033",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "dropna"],
    "content": "Mặc định, khi thực hiện `groupby('Col')`, các dòng có giá trị khuyết (`NaN`) tại cột `'Col'` sẽ đi đâu?",
    "options": [
      "A. Bị bỏ qua và không thuộc bất kỳ nhóm nào trong kết quả.",
      "B. Được gom chung thành một nhóm riêng với khóa là `NaN`.",
      "C. Gây ra lỗi ValueError.",
      "D. Tự động điền giá trị 0 trước khi gom nhóm."
    ],
    "correct_option": "A",
    "explanation": "Theo hành vi mặc định của Pandas, các giá trị `NaN` trong cột khóa gom nhóm sẽ bị loại bỏ hoàn toàn. Từ Pandas phiên bản 1.1.0, bạn có thể thiết lập `dropna=False` để gom các giá trị `NaN` thành một nhóm riêng.",
    "solution": "**Bước 1:** Nhớ lại hành vi mặc định xử lý NaN của groupby.\n**Bước 2:** Mặc định NaN bị loại trừ khỏi kết quả kết nhóm.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_034",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "suffixes-custom"],
    "content": "Cho `df1` và `df2` đều có cột `'Value'`. Khi thực hiện phép ghép nối:\n```python\nresult = pd.merge(df1, df2, on='ID', suffixes=('_left', '_right'))\n```\nTên cột dữ liệu tương ứng của `df2` trong DataFrame `result` sẽ là gì?",
    "options": [
      "A. `Value_right`",
      "B. `Value_left`",
      "C. `Value_y`",
      "D. `Value2`"
    ],
    "correct_option": "A",
    "explanation": "Tham số `suffixes` cho phép tùy chỉnh hậu tố đi kèm cột trùng tên. Bảng bên phải (`df2`) sẽ nhận hậu tố thứ hai là `_right`, do đó cột sẽ đổi tên thành `Value_right`.",
    "solution": "**Bước 1:** Xem cấu hình của `suffixes` là `('_left', '_right')`.\n**Bước 2:** Bảng bên phải nhận hậu tố thứ hai tương ứng là `_right`.\n**Bước 3:** Cột 'Value' của df2 trở thành 'Value_right'. Chọn A."
  },
  {
    "id": "Q_MOD_D_035",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "transform-mean"],
    "content": "Cho DataFrame `df`:\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'A': ['X', 'X', 'Y'],\n    'B': [10, 20, 30]\n})\ndf['B_mean'] = df.groupby('A')['B'].transform('mean')\n```\nGiá trị của `df['B_mean'].tolist()` là bao nhiêu?",
    "options": [
      "A. `[15.0, 15.0, 30.0]`",
      "B. `[15.0, 30.0]`",
      "C. `[15.0, 15.0, 15.0]`",
      "D. `[10.0, 20.0, 30.0]`"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.transform('mean')` tính giá trị trung bình cho mỗi nhóm và trả về một Series có độ dài bằng số dòng của df ban đầu, khớp theo nhãn nhóm tương ứng. Trung bình nhóm 'X' là 15.0, nhóm 'Y' là 30.0. Kết quả là `[15.0, 15.0, 30.0]`.",
    "solution": "**Bước 1:** Nhóm 'X' gồm [10, 20] -> trung bình là 15.0.\n**Bước 2:** Nhóm 'Y' gồm [30] -> trung bình là 30.0.\n**Bước 3:** Sử dụng `.transform()` phát tán kết quả về độ dài gốc -> dòng 0 và 1 (nhóm X) nhận 15.0, dòng 2 (nhóm Y) nhận 30.0. Chọn A."
  },
  {
    "id": "Q_MOD_D_036",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "agg-rename"],
    "content": "Để đổi tên cột trực tiếp trong lúc gọi `.agg()`, cú pháp nào sau đây được hỗ trợ trong các phiên bản Pandas mới (Named Aggregation)?",
    "options": [
      "A. `df.groupby('A').agg(total_qty=('Qty', 'sum'))`",
      "B. `df.groupby('A').agg(total_qty=sum('Qty'))`",
      "C. `df.groupby('A').agg({'Qty': ('sum', 'total_qty')})`",
      "D. `df.groupby('A').agg('Qty', sum).rename('total_qty')`"
    ],
    "correct_option": "A",
    "explanation": "Pandas hỗ trợ Named Aggregation bằng cú pháp: `tên_cột_mới=(tên_cột_gốc, hàm_tổng_hợp)`. Giúp cấu trúc cột đầu ra phẳng và rõ nghĩa.",
    "solution": "**Bước 1:** Xác định cú pháp Named Aggregation.\n**Bước 2:** Định dạng chuẩn: `new_col=(old_col, agg_func)`. Chọn A."
  },
  {
    "id": "Q_MOD_D_037",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "concat", "inner"],
    "content": "Cho DataFrame `df1` có các cột `['A', 'B']` và `df2` có các cột `['B', 'C']`. Khi thực hiện lệnh:\n```python\nresult = pd.concat([df1, df2], join='inner')\n```\nDataFrame kết quả `result` sẽ chứa những cột nào?",
    "options": [
      "A. `['B']`",
      "B. `['A', 'B', 'C']`",
      "C. `['A', 'C']`",
      "D. Không có cột nào"
    ],
    "correct_option": "A",
    "explanation": "Tham số `join='inner'` trong `pd.concat()` chỉ giữ lại các cột xuất hiện ở tất cả các DataFrame được nối. Ở đây chỉ có cột `'B'` là chung giữa hai DataFrame.",
    "solution": "**Bước 1:** Xác định cột giao nhau giữa hai bảng: ['A', 'B'] giao với ['B', 'C'] là ['B'].\n**Bước 2:** Với `join='inner'`, chỉ lấy cột giao.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_038",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "cross-size"],
    "content": "Nếu `df1` có kích thước (50, 5) và `df2` có kích thước (10, 3). Khi thực hiện phép ghép nối tích Descartes `how='cross'`, kích thước dòng của DataFrame kết quả là bao nhiêu?",
    "options": [
      "A. 500",
      "B. 60",
      "C. 50",
      "D. 150"
    ],
    "correct_option": "A",
    "explanation": "Tích Descartes ghép từng dòng của bảng thứ nhất với từng dòng của bảng thứ hai. Số dòng kết quả sẽ là $50 \times 10 = 500$.",
    "solution": "**Bước 1:** Công thức tính số dòng tích Descartes: dòng_df1 * dòng_df2.\n**Bước 2:** Tính: $50 \times 10 = 500$.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_039",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "groupby", "observed"],
    "content": "Khi thực hiện groupby trên một cột kiểu phân loại (categorical) có các nhóm không xuất hiện trong dữ liệu thực tế (empty groups), ta gán giá trị nào cho tham số `observed` để chỉ tính toán trên các nhóm thực sự xuất hiện?",
    "options": [
      "A. observed=True",
      "B. observed=False",
      "C. drop_empty=True",
      "D. show_all=False"
    ],
    "correct_option": "A",
    "explanation": "Khi `observed=True`, đối tượng GroupBy sẽ chỉ hiển thị và tính toán các nhóm thực tế quan sát được trong cột dữ liệu phân loại thay vì in ra mọi nhóm khả dĩ trong định nghĩa category.",
    "solution": "**Bước 1:** Xem xét cách hoạt động của biến phân loại trong groupby.\n**Bước 2:** Thiết lập `observed=True` giúp thu hẹp phạm vi tính toán vào dữ liệu quan sát được thực tế. Chọn A."
  },
  {
    "id": "Q_MOD_D_040",
    "module_id": "Module_D",
    "difficulty": "Medium",
    "tags": ["pandas", "merge", "indicator-both"],
    "content": "Lệnh nào sau đây chỉ giữ lại các dòng tồn tại đồng thời ở cả hai DataFrame `df1` và `df2` dựa vào khóa khớp, và loại bỏ các dòng chỉ xuất hiện ở một bên?",
    "options": [
      "A. pd.merge(df1, df2, how='inner')",
      "B. pd.merge(df1, df2, how='outer')",
      "C. pd.concat([df1, df2], join='outer')",
      "D. df1.join(df2, how='left')"
    ],
    "correct_option": "A",
    "explanation": "Tham số `how='inner'` thực hiện phép kết trong (INNER JOIN), chỉ giữ lại các hàng có khóa khớp ở cả hai bảng dữ liệu.",
    "solution": "**Bước 1:** Xác định phép ghép nối giao nhau.\n**Bước 2:** Dùng `how='inner'` trong `pd.merge()`. Chọn A."
  },
  {
    "id": "Q_MOD_D_041",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "apply-complex"],
    "content": "Cho DataFrame `df` chứa cột `'Group'` và `'Value'`. Đoạn code nào dưới đây giúp tính trọng số chuẩn hóa của từng giá trị trong nhóm: giá trị của dòng chia cho tổng giá trị của nhóm tương ứng, mà vẫn giữ nguyên cấu trúc dòng gốc?",
    "options": [
      "A. `df['Value'] / df.groupby('Group')['Value'].transform('sum')`",
      "B. `df.groupby('Group')['Value'].apply(lambda x: x / x.sum())` (không reset_index)",
      "C. Cả A và B đều đúng và cho ra kết quả tương đương về mặt giá trị.",
      "D. Không có phương án nào đúng."
    ],
    "correct_option": "C",
    "explanation": "Cả hai cách đều hợp lệ. Cách A sử dụng `.transform('sum')` để phát tán tổng nhóm về cùng kích thước dòng ban đầu để thực hiện phép chia Vector. Cách B sử dụng `.apply()` trả về Series có nhãn tương ứng chỉ mục gốc, Pandas tự động căn chỉnh (align) chỉ mục để thực hiện phép chia.",
    "solution": "**Bước 1:** Xem cách A: `transform('sum')` tạo vector tổng nhóm có độ dài bằng DataFrame gốc, phép chia là vector/vector.\n**Bước 2:** Xem cách B: `apply` trả về Series có chỉ mục tương tự index gốc của các dòng trong nhóm.\n**Bước 3:** Cả hai cách đều cho ra cùng kết quả chuẩn hóa dòng theo nhóm. Chọn C."
  },
  {
    "id": "Q_MOD_D_042",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "merge", "ordered"],
    "content": "Khi thực hiện phân tích chuỗi thời gian, ta có hai bảng dữ liệu giao dịch tài chính không khớp hoàn toàn về mốc thời gian giây/mili-giây. Hàm nào trong Pandas giúp ghép nối các dòng có thời gian gần nhất (nhưng không nhất thiết phải bằng nhau)?",
    "options": [
      "A. pd.merge_asof()",
      "B. pd.merge_ordered()",
      "C. pd.merge_nearest()",
      "D. df.join_closest()"
    ],
    "correct_option": "A",
    "explanation": "Hàm `pd.merge_asof()` thực hiện phép ghép nối so khớp có điều kiện trên các mảng khóa đã sắp xếp (thường là thời gian), tìm kiếm giá trị gần nhất phía trước hoặc phía sau thỏa mãn ngưỡng thời gian tối đa.",
    "solution": "**Bước 1:** Tìm hàm ghép nối dựa trên thời điểm gần kề.\n**Bước 2:** Hàm đó là `pd.merge_asof()`. Bảng dữ liệu phải được sắp xếp theo khóa trước khi sử dụng.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_043",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "multilevel-indices"],
    "content": "Cho DataFrame `df` có MultiIndex ở chỉ mục hàng: cấp 0 là `'Year'`, cấp 1 là `'Month'`. Bạn muốn tính giá trị trung bình của cột `'Sales'` cho từng năm. Lệnh nào dưới đây thực hiện chính xác yêu cầu này?",
    "options": [
      "A. `df.groupby(level='Year')['Sales'].mean()`",
      "B. `df.groupby(level=0)['Sales'].mean()`",
      "C. Cả A và B đều đúng.",
      "D. `df.groupby('Year')['Sales'].mean()` (sẽ ném lỗi nếu 'Year' không phải là cột)"
    ],
    "correct_option": "C",
    "explanation": "Khi gom nhóm trên MultiIndex, ta có thể chỉ định cấp độ gom nhóm bằng tham số `level` qua tên nhãn (`level='Year'`) hoặc qua chỉ số vị trí của cấp (`level=0`). Cú pháp D cũng hoạt động trong các bản mới nếu nhãn MultiIndex trùng tên cột, nhưng cách chỉ định `level` tường minh vẫn là chuẩn nhất.",
    "solution": "**Bước 1:** Xác định cách gom nhóm theo chỉ mục phân cấp.\n**Bước 2:** Có thể dùng `level` bằng tên hoặc chỉ số vị trí.\n**Bước 3:** Cả A và B đều đúng. Chọn C."
  },
  {
    "id": "Q_MOD_D_044",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "merge", "many-to-many"],
    "content": "Cho `df1` có 3 hàng với giá trị khóa `'K'`: `[1, 1, 2]` và `df2` có 3 hàng với giá trị khóa `'K'`: `[1, 2, 2]`. Khi ghép nối `pd.merge(df1, df2, on='K', how='inner')`, số hàng của DataFrame kết quả là bao nhiêu?",
    "options": [
      "A. 6",
      "B. 4",
      "C. 3",
      "D. 8"
    ],
    "correct_option": "B",
    "explanation": "Đây là mối quan hệ many-to-many (nhiều-nhiều) trên khóa 'K':\n- Với khóa K=1: df1 có 2 hàng, df2 có 1 hàng -> Kết quả tạo ra $2 \\times 1 = 2$ hàng.\n- Với khóa K=2: df1 có 1 hàng, df2 có 2 hàng -> Kết quả tạo ra $1 \\times 2 = 2$ hàng.\nTổng số dòng là 2 + 2 = 4 hàng.",
    "solution": "**Bước 1:** Tổ hợp K=1: $2 \\times 1 = 2$ hàng.\n**Bước 2:** Tổ hợp K=2: $1 \times 2 = 2$ hàng.\n**Bước 3:** Tổng cộng: 2 + 2 = 4 hàng. Chọn B."
  },
  {
    "id": "Q_MOD_D_045",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "custom-agg-dataframe"],
    "content": "Bạn muốn áp dụng một hàm tùy biến trong `.agg()` để biến đổi dữ liệu của nhóm, nhưng hàm này cần truy cập dữ liệu của nhiều cột đồng thời trong nhóm chứ không chỉ một cột riêng lẻ. Bạn nên cấu hình groupby như thế nào?",
    "options": [
      "A. Thực hiện `df.groupby('Group').apply(hàm_tùy_biến)` thay vì dùng `.agg()`.",
      "B. Sử dụng `df.groupby('Group').agg(hàm_tùy_biến)` và truyền `axis=1`.",
      "C. Cú pháp `.agg()` không bao giờ hỗ trợ tính toán liên cột trong nhóm.",
      "D. Sử dụng `df.groupby('Group').transform(hàm_tùy_biến)`."
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.agg()` được thiết kế để áp dụng hàm trên từng cột độc lập trong nhóm. Nếu hàm tùy biến yêu cầu so sánh hoặc tính toán giữa nhiều cột của nhóm (ví dụ: lấy cột X nhân cột Y rồi tính tổng), ta phải sử dụng `.apply()`. Hàm truyền vào `.apply()` sẽ nhận đối số là một DataFrame con đại diện cho toàn bộ nhóm.",
    "solution": "**Bước 1:** Nhận biết sự giới hạn của `.agg()` (hoạt động đơn cột).\n**Bước 2:** Để thực hiện tính toán liên cột trong nhóm, ta phải dùng `.apply()` vì hàm nhận toàn bộ DataFrame của nhóm làm đầu vào.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_046",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "filter-memory"],
    "content": "Khi sử dụng `.filter()` trên đối tượng GroupBy có kích thước cực kỳ lớn và nhiều nhóm nhỏ, điều gì có thể xảy ra và giải pháp thay thế tối ưu nhất là gì?",
    "options": [
      "A. `.filter()` có thể chạy rất chậm và tốn bộ nhớ. Giải pháp thay thế là tính giá trị đại diện của nhóm bằng `.transform()`, sau đó dùng Boolean Indexing trên DataFrame gốc.",
      "B. `.filter()` tự động ném ra lỗi tràn bộ nhớ. Giải pháp duy nhất là chia nhỏ DataFrame theo cách thủ công.",
      "C. `.filter()` chạy nhanh hơn nhưng làm mất kiểu dữ liệu gốc. Giải pháp là ép kiểu thủ công sau khi lọc.",
      "D. Không có vấn đề hiệu năng nào xảy ra vì `.filter()` được tối ưu hóa bằng C-engine."
    ],
    "correct_option": "A",
    "explanation": "Hàm `.filter(lambda x: ...)` phải tạo ra các bản sao DataFrame cho từng nhóm nhỏ để đánh giá điều kiện, gây suy giảm hiệu năng nghiêm trọng trên dữ liệu lớn. Thay vào đó, dùng `.transform()` để tạo một mảng boolean có cùng kích thước với df gốc, rồi lọc bằng Boolean Indexing sẽ nhanh hơn rất nhiều.",
    "solution": "**Bước 1:** Phân tích vấn đề hiệu năng của `.filter()` trên hàng triệu nhóm.\n**Bước 2:** Giải pháp tối ưu: thay thế bằng `.transform()` để tạo mặt nạ Boolean, sau đó lọc thông thường.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_047",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "merge", "ordered-fill"],
    "content": "Hàm `pd.merge_ordered()` có tính năng đặc biệt nào so với `pd.merge()` thông thường khi ghép nối các chuỗi thời gian có tần suất lệch nhau?",
    "options": [
      "A. Hỗ trợ nội suy điền khuyết giá trị bằng cách truyền tham số `fill_method='ffill'`.",
      "B. Tự động chuyển đổi toàn bộ múi giờ về giờ UTC.",
      "C. Chỉ ghép nối nếu thời gian của hai bảng trùng khớp chính xác 100%.",
      "D. Tự động gom tụ dữ liệu theo tần suất ngày."
    ],
    "correct_option": "A",
    "explanation": "`pd.merge_ordered()` hoạt động như phép merge thông thường nhưng được thiết kế cho dữ liệu có thứ tự (như chuỗi thời gian). Nó hỗ trợ tham số `fill_method='ffill'` giúp tự động điền các giá trị trống bằng giá trị xuất hiện gần nhất trước đó (forward fill) trong lúc ghép nối.",
    "solution": "**Bước 1:** Xem đặc trưng của `pd.merge_ordered`.\n**Bước 2:** Điểm mạnh lớn nhất là hỗ trợ điền khuyết hướng tiến (`ffill`) thông qua tham số `fill_method`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_048",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "mutate-index-error"],
    "content": "Điều gì xảy ra khi bạn gọi hàm biến đổi làm thay đổi chỉ mục (Index) của DataFrame con bên trong hàm `.apply()` của groupby?",
    "options": [
      "A. Pandas cố gắng căn chỉnh lại chỉ mục; nếu không thể, nó sẽ ném lỗi ValueError hoặc tạo ra MultiIndex phức tạp chứa các khóa trùng lặp.",
      "B. Chỉ mục mới bị loại bỏ và khôi phục chỉ mục ban đầu một cách tự động.",
      "C. Phép apply luôn thành công và bỏ qua sự thay đổi chỉ mục.",
      "D. DataFrame kết quả sẽ bị xóa sạch dữ liệu."
    ],
    "correct_option": "A",
    "explanation": "Khi hàm truyền vào `.apply()` làm thay đổi cấu trúc chỉ mục hoặc số lượng dòng không đồng đều giữa các nhóm, Pandas sẽ cố gắng kết hợp các chỉ mục kết quả lại. Điều này thường dẫn đến chỉ mục phân cấp phức tạp hoặc ném ra lỗi `ValueError` nếu cấu trúc đầu ra quá xung đột.",
    "solution": "**Bước 1:** Phân tích hành vi khi chỉnh sửa index bên trong hàm apply.\n**Bước 2:** Pandas cố gắng gộp index và dễ sinh lỗi hoặc MultiIndex kỳ lạ.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_049",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "groupby", "grouper"],
    "content": "Để thực hiện gom nhóm dữ liệu theo cả cột phân loại `'Category'` và đồng thời theo chuỗi thời gian của cột `'Date'` với tần suất 2 tuần một lần, ta sử dụng cú pháp nào?",
    "options": [
      "A. `df.groupby(['Category', pd.Grouper(key='Date', freq='2W')])`",
      "B. `df.groupby(['Category', df['Date'].resample('2W')])`",
      "C. `df.groupby('Category').resample('2W', on='Date')` (chỉ hoạt động trên Series đơn)",
      "D. `df.groupby(['Category', 'Date']).freq('2W')`"
    ],
    "correct_option": "A",
    "explanation": "Đối tượng `pd.Grouper` cho phép cấu hình các điều kiện gom nhóm phức tạp như chuỗi thời gian (`key`, `freq`) trực tiếp bên trong danh sách khóa của hàm `groupby()`.",
    "solution": "**Bước 1:** Cần kết hợp gom nhóm theo cột thường và tần suất thời gian.\n**Bước 2:** Sử dụng `pd.Grouper(key='Date', freq='2W')` kết hợp với cột 'Category' trong `groupby`.\n**Bước 3:** Chọn A."
  },
  {
    "id": "Q_MOD_D_050",
    "module_id": "Module_D",
    "difficulty": "Hard",
    "tags": ["pandas", "merge", "join-duplicate-columns"],
    "content": "Cho DataFrame `df1` và `df2` đều có cột `'A'` và `'B'`. Khi gọi `df1.join(df2, lsuffix='_l', rsuffix='_r')`, DataFrame kết quả sẽ có các cột nào nếu không chỉ định khóa ghép?",
    "options": [
      "A. `['A_l', 'B_l', 'A_r', 'B_r']`",
      "B. `['A', 'B']`",
      "C. `['A_l', 'B', 'A_r']`",
      "D. Ném ra lỗi ValueError vì thiếu khóa ghép nối"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `.join()` mặc định ghép theo chỉ mục. Vì cả hai bảng đều có các cột trùng tên là `'A'` và `'B'`, ta bắt buộc phải cung cấp hậu tố `lsuffix` và `rsuffix`. Kết quả ghép nối sẽ chứa đầy đủ 4 cột đã được thêm hậu tố tương ứng.",
    "solution": "**Bước 1:** Nhớ lại hành vi `.join()` ghép theo index.\n**Bước 2:** Các cột trùng tên 'A' và 'B' được phân tách nhờ hậu tố lsuffix và rsuffix.\n**Bước 3:** Tạo ra 4 cột: A_l, B_l, A_r, B_r. Chọn A."
  }
];
