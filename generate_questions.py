# -*- coding: utf-8 -*-
import json
import os

questions = []

# ==============================================================================
# EASY QUESTIONS (001 - 020)
# ==============================================================================

questions.append({
    "id": "Q_MOD_E_001",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["io", "csv"],
    "content": "Khi đọc một file CSV bằng `pandas.read_csv()`, tham số nào giúp tự động chuyển đổi các cột được chỉ định sang kiểu dữ liệu datetime?\n\n```python\nimport pandas as pd\n# Cần đọc file CSV và tự động chuyển cột 'transaction_date' thành kiểu datetime64\ndf = pd.read_csv('data.csv', ____=['transaction_date'])\n```\nChọn tham số thích hợp điền vào chỗ trống `____` để thực hiện yêu cầu trên.",
    "options": [
        "A. parse_dates",
        "B. datetime_cols",
        "C. convert_dates",
        "D. infer_datetime_format"
    ],
    "correct_option": "A",
    "explanation": "Tham số `parse_dates` nhận vào một danh sách các tên cột hoặc chỉ số cột để Pandas tự động chuyển đổi chúng thành kiểu `datetime64[ns]` khi đọc file.",
    "solution": "Bước 1: Sử dụng tham số `parse_dates` trong `pd.read_csv()`.\nBước 2: Truyền danh sách cột chứa thời gian: `parse_dates=['transaction_date']`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_002",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["datetime", "conversion"],
    "content": "Để chuyển đổi một cột chứa chuỗi ngày tháng ở định dạng ngày-tháng-năm (ví dụ: '31/12/2026') thành kiểu `datetime64[ns]` trong Pandas, ta sử dụng hàm nào?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'date_str': ['31/12/2026', '01/01/2027']})\n# Cần chuyển đổi cột 'date_str' sang kiểu datetime\ndf['date'] = pd.to_datetime(df['date_str'], ____)\n```\nTham số nào thích hợp nhất điền vào chỗ trống `____` để Pandas nhận diện chính xác ngày và tháng?",
    "options": [
        "A. format='%d/%m/%Y'",
        "B. date_format='%Y/%m/%d'",
        "C. format='%m/%d/%Y'",
        "D. parse_format=True"
    ],
    "correct_option": "A",
    "explanation": "Hàm `pd.to_datetime()` là hàm tiêu chuẩn để chuyển chuỗi thành datetime, và tham số `format` giúp xác định rõ cách định dạng ngày tháng đầu vào để tránh nhận diện sai ngày/tháng.",
    "solution": "Bước 1: Sử dụng `pd.to_datetime()` trên Series `df['date_str']`.\nBước 2: Cung cấp tham số `format='%d/%m/%Y'` để khớp định dạng ngày/tháng/năm.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_003",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "shift"],
    "content": "Cho một Series `s` chứa dữ liệu chuỗi thời gian. Kết quả của `result` sau khi thực thi đoạn code dưới đây là gì?\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30], index=['A', 'B', 'C'])\nresult = s.shift(1)\n```",
    "options": [
        "A. A: NaN, B: 10.0, C: 20.0",
        "B. A: 10.0, B: 20.0, C: NaN",
        "C. A: 20.0, B: 30.0, C: NaN",
        "D. A: NaN, B: NaN, C: 10.0"
    ],
    "correct_option": "A",
    "explanation": "`shift(periods=1)` dịch chuyển các giá trị dữ liệu dọc theo trục index xuống phía dưới. Do giá trị đầu tiên không có dữ liệu để dịch từ trước đó sang, nó sẽ được điền bằng `NaN`.",
    "solution": "Bước 1: Áp dụng `shift(1)` dịch chuyển 10 xuống B, 20 xuống C.\nBước 2: Phần tử đầu tiên (A) nhận giá trị `NaN`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_004",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "diff"],
    "content": "Hàm `diff()` của Series trong Pandas thực hiện chức năng gì?\n\n```python\nimport pandas as pd\ns = pd.Series([10, 15, 30])\nresult = s.diff()\n```\nKết quả của Series `result` sau khi chạy đoạn code trên là gì?",
    "options": [
        "A. 0: NaN, 1: 5.0, 2: 15.0",
        "B. 0: 10.0, 1: 5.0, 2: 15.0",
        "C. 0: NaN, 1: 1.5, 2: 2.0",
        "D. 0: 5.0, 1: 15.0, 2: NaN"
    ],
    "correct_option": "A",
    "explanation": "Hàm `diff()` tính hiệu số giữa phần tử hiện tại và phần tử trước đó ở vị trí cách nó một khoảng `periods` (mặc định là 1). Công thức là: `y[t] = x[t] - x[t-1]`. Dòng đầu tiên không có phần tử trước nên kết quả là `NaN`.",
    "solution": "Bước 1: Tính hiệu số: dòng 0 -> `NaN`.\nBước 2: Dòng 1 -> 15 - 10 = 5.0. Dòng 2 -> 30 - 15 = 15.0.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_005",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "pct_change"],
    "content": "Để tính tỷ lệ phần trăm thay đổi giữa các hàng liên tiếp trong chuỗi thời gian, ta dùng hàm nào? Hãy tính giá trị tại vị trí index thứ 2 (dòng thứ 3) của Series `result` sau:\n\n```python\nimport pandas as pd\ns = pd.Series([100, 110, 121])\nresult = s.pct_change()\n```",
    "options": [
        "A. 0.10 (tức là 10%)",
        "B. 0.21 (tức là 21%)",
        "C. 11.0 (tức là hiệu số 121 - 110)",
        "D. 0.09 (tức là 9%)"
    ],
    "correct_option": "A",
    "explanation": "Hàm `pct_change()` tính tỷ lệ phần trăm thay đổi của phần tử hiện tại so với phần tử trước đó: `(x[t] - x[t-1]) / x[t-1]`. Tại vị trí thứ 2: `(121 - 110) / 110 = 11 / 110 = 0.10`.",
    "solution": "Bước 1: Gọi hàm `pct_change()` để tính tỷ lệ.\nBước 2: Tính cho dòng thứ 3: `(121 - 110) / 110 = 0.1`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_006",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "resample"],
    "content": "Cho một DataFrame `df` có chỉ mục là `DatetimeIndex` ở tần suất hàng ngày. Lệnh nào sau đây giúp tính trung bình cộng của dữ liệu theo từng tháng?\n\n```python\nimport pandas as pd\ndates = pd.date_range('2026-01-01', periods=31, freq='D')\ndf = pd.DataFrame({'value': range(31)}, index=dates)\n# Cần tính trung bình cộng theo tháng\nmonthly_df = df.____('M').mean()\n```\nChọn tên hàm thích hợp điền vào chỗ trống `____`.",
    "options": [
        "A. resample",
        "B. groupby",
        "C. rolling",
        "D. asfreq"
    ],
    "correct_option": "A",
    "explanation": "`resample('M')` gom nhóm dữ liệu theo tần suất tháng (`M` là Month End), sau đó gọi hàm gom tụ `.mean()` để tính giá trị trung bình cho từng tháng.",
    "solution": "Bước 1: Xác định kiểu thao tác thay đổi tần suất thời gian (resampling).\nBước 2: Sử dụng hàm `resample` truyền vào chuỗi tần suất 'M'.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_007",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["optimization", "memory"],
    "content": "Để tiết kiệm bộ nhớ cho một cột kiểu chuỗi (object) có số lượng giá trị duy nhất (cardinality) rất ít so với số hàng, ta nên chuyển cột đó sang kiểu dữ liệu nào?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'City': ['Hanoi', 'HCMC', 'Hanoi', 'HCMC'] * 250000})\n# Chuyển đổi cột City để giảm thiểu RAM tối đa\ndf['City'] = df['City'].astype(____)\n```\nChọn kiểu dữ liệu thích hợp điền vào chỗ trống `____`.",
    "options": [
        "A. 'category'",
        "B. 'string'",
        "C. 'object'",
        "D. 'str'"
    ],
    "correct_option": "A",
    "explanation": "Kiểu dữ liệu `category` lưu trữ dữ liệu dưới dạng mã nguyên (integer codes) tham chiếu đến mảng các giá trị duy nhất (categories), giúp giảm đáng kể lượng bộ nhớ sử dụng và tăng tốc độ xử lý.",
    "solution": "Bước 1: Nhận diện cột có số giá trị duy nhất nhỏ (Hanoi, HCMC) lặp lại nhiều lần.\nBước 2: Ép kiểu cột sang `'category'` bằng phương thức `.astype()`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_008",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["preprocessing", "get_dummies"],
    "content": "Hàm nào trong Pandas giúp chuyển đổi các biến phân loại (categorical variables) thành các cột chỉ báo nhị phân (one-hot encoding)?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Gender': ['Male', 'Female', 'Female']})\ndummies = pd.get_dummies(df['Gender'])\n```\nCột nào dưới đây sẽ xuất hiện trong DataFrame `dummies`?",
    "options": [
        "A. Cả cột 'Female' và 'Male'",
        "B. Chỉ có cột 'Gender' chứa giá trị số 0 và 1",
        "C. Cột 'Gender_Male' và cột 'Gender_Female'",
        "D. Một cột duy nhất mang tên 'Gender_dummies'"
    ],
    "correct_option": "A",
    "explanation": "Khi truyền trực tiếp một Series (như `df['Gender']`) vào `pd.get_dummies()`, Pandas sẽ tạo ra các cột mới có tên chính là các nhãn giá trị duy nhất của Series đó (ở đây là 'Female' và 'Male').",
    "solution": "Bước 1: Gọi `pd.get_dummies()` truyền vào Series `df['Gender']`.\nBước 2: Cột kết quả là tập hợp các nhãn duy nhất: 'Female' và 'Male'.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_009",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["reshaping", "explode"],
    "content": "Cho DataFrame `df` có một cột chứa các danh sách (list). Hàm nào giúp biến đổi mỗi phần tử trong danh sách đó thành một hàng riêng biệt?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'ID': [1, 2], 'Tags': [['pandas', 'python'], ['data']]})\nresult = df.explode('Tags')\n```\nSố lượng dòng (hàng) của DataFrame `result` sau khi gọi lệnh `explode` là bao nhiêu?",
    "options": [
        "A. 3",
        "B. 2",
        "C. 4",
        "D. 1"
    ],
    "correct_option": "A",
    "explanation": "Hàm `explode()` giải nén các phần tử dạng danh sách thành các dòng riêng biệt, giữ nguyên giá trị index và nhân bản các cột khác tương ứng. Ở đây, hàng 1 có 2 phần tử, hàng 2 có 1 phần tử -> tổng số hàng là 2 + 1 = 3.",
    "solution": "Bước 1: Giải nén cột 'Tags'. Hàng ID=1 tách thành 2 hàng với tag 'pandas' và 'python'.\nBước 2: Hàng ID=2 giữ nguyên 1 hàng với tag 'data'. Tổng số hàng là 3.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_010",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["io", "csv"],
    "content": "Khi đọc một file CSV bằng `pd.read_csv()`, ta có thể khai báo tham số nào để chỉ định các chuỗi ký tự đặc biệt (ví dụ: 'N/A', '?') sẽ được nhận diện là giá trị khuyết (`NaN`)?\n\n```python\nimport pandas as pd\n# Cần đọc file CSV chứa các giá trị 'N/A' hoặc '?' và coi chúng như NaN\ndf = pd.read_csv('data.csv', ____=['N/A', '?'])\n```\nChọn tham số thích hợp điền vào chỗ trống `____`.",
    "options": [
        "A. na_values",
        "B. null_values",
        "C. missing_values",
        "D. na_filter"
    ],
    "correct_option": "A",
    "explanation": "Tham số `na_values` cho phép truyền vào một danh sách các chuỗi hoặc dictionary ánh xạ cột đến danh sách chuỗi cần chuyển đổi thành giá trị khuyết `NaN` khi phân tích dữ liệu CSV.",
    "solution": "Bước 1: Sử dụng tham số `na_values` trong `pd.read_csv()`.\nBước 2: Gán danh sách ký tự cần thay thế thành NaN.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_011",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["io", "chunksize"],
    "content": "Khi gọi hàm `pd.read_csv('huge_data.csv', chunksize=10000)`, đối tượng trả về thuộc kiểu gì?\n\n```python\nimport pandas as pd\nreader = pd.read_csv('huge_data.csv', chunksize=5000)\n```\nKhi gọi lệnh trên, biến `reader` có kiểu dữ liệu gì trong Pandas?",
    "options": [
        "A. pandas.io.parsers.readers.TextFileReader (hoặc đối tượng lặp tương tự)",
        "B. pandas.DataFrame chứa 5000 dòng đầu tiên",
        "C. list các DataFrame",
        "D. generator sinh ra các dòng dạng tuple"
    ],
    "correct_option": "A",
    "explanation": "Khi truyền tham số `chunksize`, Pandas không tải toàn bộ file vào bộ nhớ mà trả về một đối tượng `TextFileReader` hỗ trợ duyệt (`iterable`) qua các phần của file dưới dạng DataFrame.",
    "solution": "Bước 1: Xác định kiểu trả về khi dùng `chunksize`.\nBước 2: Đối tượng trả về là `TextFileReader` cho phép lặp.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_012",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["io", "parquet"],
    "content": "So với định dạng CSV, ưu điểm vượt trội nào sau đây là của định dạng file Parquet khi lưu trữ dữ liệu lớn trong Pandas?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': range(1000000)})\n# Ghi ra file nén cột hiệu năng cao\ndf.to_parquet('data.parquet')\n```\nĐịnh dạng file `.parquet` được đọc và ghi trong Pandas dựa trên thư viện cơ sở dữ liệu dạng cột nào của hệ sinh thái Apache?",
    "options": [
        "A. Apache Arrow",
        "B. Apache Spark",
        "C. Apache Hadoop",
        "D. Apache Cassandra"
    ],
    "correct_option": "A",
    "explanation": "Định dạng Parquet là định dạng cột hiệu năng cao sử dụng Apache Arrow (PyArrow) làm công cụ xử lý cơ bản để đọc/ghi cực nhanh và bảo toàn toàn bộ kiểu dữ liệu.",
    "solution": "Bước 1: Tìm hiểu thư viện mặc định hỗ trợ parquet trong pandas (pyarrow).\nBước 2: PyArrow triển khai các chuẩn của Apache Arrow.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_013",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["datetime", "accessor"],
    "content": "Để lấy ra giá trị \"ngày trong tuần\" (từ 0 đến 6 đại diện cho Thứ hai đến Chủ nhật) từ một cột Series kiểu datetime, ta dùng cú pháp nào?\n\n```python\nimport pandas as pd\ns = pd.Series(pd.to_datetime(['2026-06-28'])) # Ngày 28/06/2026 là Chủ nhật\nweekday_code = s.dt.dayofweek[0]\n```\nGiá trị của biến `weekday_code` là bao nhiêu?",
    "options": [
        "A. 6",
        "B. 7",
        "C. 0",
        "D. 5"
    ],
    "correct_option": "A",
    "explanation": "Accessor `.dt` cung cấp thuộc tính `.dt.dayofweek` (hoặc `.dt.weekday`) trả về số nguyên từ 0 (Thứ hai) đến 6 (Chủ nhật). Ngày 28/06/2026 là Chủ nhật nên kết quả là 6.",
    "solution": "Bước 1: Sử dụng accessor `.dt` để lấy thuộc tính thời gian.\nBước 2: Thuộc tính `dayofweek` trả về 6 đối với Chủ nhật.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_014",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["multiindex", "creation"],
    "content": "Phương thức nào sau đây dùng để tạo chỉ mục đa cấp (MultiIndex) từ danh sách các mảng song song chứa các giá trị của từng cấp chỉ mục?\n\n```python\nimport pandas as pd\narrays = [['North', 'North', 'South', 'South'], [2025, 2026, 2025, 2026]]\nindex = pd.MultiIndex.____(arrays, names=['Region', 'Year'])\n```\nChọn tên phương thức thích hợp điền vào chỗ trống `____`.",
    "options": [
        "A. from_arrays",
        "B. from_tuples",
        "C. from_product",
        "D. from_frame"
    ],
    "correct_option": "A",
    "explanation": "`pd.MultiIndex.from_arrays()` nhận vào một danh sách các mảng song song đại diện cho các giá trị ở từng cấp chỉ mục để dựng nên MultiIndex.",
    "solution": "Bước 1: Xem xét cấu trúc dữ liệu đầu vào là danh sách mảng phẳng.\nBước 2: Sử dụng phương thức `from_arrays` để chuyển đổi.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_015",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "rolling"],
    "content": "Cho Series `s` chứa chuỗi số liệu. Kết quả dòng đầu tiên chứa giá trị không khuyết của lệnh `s.rolling(window=3).mean()` sẽ ở vị trí chỉ số thứ mấy (nếu index bắt đầu từ 0)?\n\n```python\nimport pandas as pd\ns = pd.Series([1, 2, 3, 4, 5])\nresult = s.rolling(window=3).mean()\n```\nCó bao nhiêu giá trị trong Series `result` là `NaN`?",
    "options": [
        "A. 2",
        "B. 3",
        "C. 1",
        "D. 0"
    ],
    "correct_option": "A",
    "explanation": "Với `window=3`, Pandas yêu cầu tối thiểu 3 phần tử hợp lệ trong cửa sổ cuộn (mặc định `min_periods=window`). Do đó, hai dòng đầu tiên (index 0 và 1) không có đủ dữ liệu lịch sử và nhận giá trị `NaN`.",
    "solution": "Bước 1: Tính toán cửa sổ cuộn kích thước 3.\nBước 2: Phần tử 0 và 1 có ít hơn 3 giá trị đầu vào -> NaN. Phần tử 2 (dòng thứ 3) là phần tử hợp lệ đầu tiên. Tổng số NaN là 2.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_016",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["optimization", "memory"],
    "content": "Phương thức nào giúp hiển thị dung lượng bộ nhớ RAM thực tế đã tiêu thụ của từng cột trong DataFrame bao gồm cả dữ liệu chuỗi ký tự?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'A': ['hello', 'world'] * 10000})\nusage = df.memory_usage(____=True)\n```\nĐiền tên tham số thích hợp vào chỗ trống `____`.",
    "options": [
        "A. deep",
        "B. real",
        "C. exact",
        "D. full"
    ],
    "correct_option": "A",
    "explanation": "Mặc định `memory_usage()` chỉ tính bộ nhớ của con trỏ tham chiếu. Khi thiết lập `deep=True`, Pandas sẽ truy vấn bộ nhớ thực sự của các chuỗi ký tự chứa trong RAM, cho ra kết quả đo lường chính xác.",
    "solution": "Bước 1: Gọi hàm `df.memory_usage()`.\nBước 2: Cung cấp đối số `deep=True` để tính sâu bộ nhớ của các kiểu dữ liệu đối tượng.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_017",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["io", "json"],
    "content": "Khi đọc một file JSON có định dạng mỗi dòng là một đối tượng JSON riêng biệt (JSON Lines), ta cần cấu hình tham số nào trong `pd.read_json()`?\n\n```python\nimport pandas as pd\n# Đọc file chứa các dòng JSON độc lập: {\"id\": 1}\\n{\"id\": 2}\ndf = pd.read_json('data.jsonl', ____=True)\n```\nĐiền tham số thích hợp vào chỗ trống `____`.",
    "options": [
        "A. lines",
        "B. orient",
        "C. chunks",
        "D. multi_line"
    ],
    "correct_option": "A",
    "explanation": "Tham số `lines=True` báo cho trình phân tích JSON của Pandas biết dữ liệu được tổ chức dưới dạng mỗi dòng là một bản ghi JSON độc lập (định dạng JSON Lines).",
    "solution": "Bước 1: Đọc tài liệu hàm `pd.read_json()`.\nBước 2: Tìm tham số kích hoạt đọc file JSON Lines -> `lines`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_018",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "asfreq"],
    "content": "Để gán tần suất thời gian cố định cho một DataFrame có DatetimeIndex mà không thực hiện gom tụ dữ liệu, ta dùng hàm nào?\n\n```python\nimport pandas as pd\nidx = pd.to_datetime(['2026-01-01', '2026-01-03'])\ndf = pd.DataFrame({'val': [10, 30]}, index=idx)\n# Chuyển đổi sang tần suất hàng ngày, tự động điền NaN cho ngày bị thiếu\ndf_daily = df.____('D')\n```\nChọn phương thức thích hợp điền vào `____`.",
    "options": [
        "A. asfreq",
        "B. resample",
        "C. reindex",
        "D. shift"
    ],
    "correct_option": "A",
    "explanation": "`asfreq()` dùng để đưa DataFrame về một tần suất nhất định. Nó chèn thêm các hàng bị thiếu thời gian và gán giá trị mặc định là `NaN`, khác với `resample()` yêu cầu hàm tổng hợp.",
    "solution": "Bước 1: Nhận thấy yêu cầu gán tần suất trực tiếp không qua hàm tổng hợp.\nBước 2: Sử dụng `asfreq('D')` trên DataFrame.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_019",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "date_range"],
    "content": "Để tạo một chuỗi ngày cách nhau 2 ngày một lần bằng hàm `pd.date_range()`, ta sử dụng tham số nào dưới đây?\n\n```python\nimport pandas as pd\ndates = pd.date_range(start='2026-01-01', end='2026-01-10', ____='2D')\n```\nĐiền tham số thích hợp vào chỗ trống `____`.",
    "options": [
        "A. freq",
        "B. period",
        "C. step",
        "D. interval"
    ],
    "correct_option": "A",
    "explanation": "Tham số `freq` trong `pd.date_range` nhận vào các chuỗi quy định tần suất thời gian, ví dụ '2D' đại diện cho chu kỳ cách nhau 2 ngày.",
    "solution": "Bước 1: Gọi hàm `pd.date_range()`.\nBước 2: Xác định tần suất nhảy bước qua tham số `freq`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_020",
    "module_id": "Module_E",
    "difficulty": "Easy",
    "tags": ["time-series", "timezone"],
    "content": "Để gán múi giờ UTC cho một DatetimeIndex chưa có thông tin múi giờ (naive datetime), ta dùng phương thức nào?\n\n```python\nimport pandas as pd\nidx = pd.date_range('2026-06-28', periods=3)\n# Định nghĩa múi giờ UTC cho index chưa có múi giờ\nidx_utc = idx.____('UTC')\n```\nĐiền tên phương thức thích hợp vào chỗ trống `____`.",
    "options": [
        "A. tz_localize",
        "B. tz_convert",
        "C. set_timezone",
        "D. localize_tz"
    ],
    "correct_option": "A",
    "explanation": "Phương thức `tz_localize()` gán thông tin múi giờ đầu tiên cho một index thô (naive). Còn `tz_convert()` dùng khi index đã có múi giờ và ta muốn đổi sang múi giờ khác.",
    "solution": "Bước 1: Sử dụng `tz_localize` để gán múi giờ cho chỉ mục chưa có múi giờ.\nBước 2: Truyền chuỗi tên múi giờ 'UTC'.\nBước 3: Chọn đáp án A."
})


# ==============================================================================
# MEDIUM QUESTIONS (021 - 040)
# ==============================================================================

questions.append({
    "id": "Q_MOD_E_021",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "groupby"],
    "content": "Cho DataFrame `df` chứa cột dữ liệu `'Sales'` và cột thời gian `'Order_Date'` kiểu datetime (không làm index). Nhận xét nào sau đây là đúng về kết quả của hai cách viết dưới đây?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Order_Date': pd.to_datetime(['2026-01-01', '2026-01-02', '2026-01-08']),\n    'Sales': [100, 200, 300]\n})\n# Cách 1: dùng pd.Grouper trong groupby\nres1 = df.groupby(pd.Grouper(key='Order_Date', freq='W'))['Sales'].sum()\n# Cách 2: dùng resample trực tiếp với cột không là index\nres2 = df.resample('W', on='Order_Date')['Sales'].sum()\n```",
    "options": [
        "A. Cả hai cách đều hợp lệ và trả về cùng một kết quả.",
        "B. Cách 1 chạy lỗi vì Order_Date không phải là index.",
        "C. Cách 2 chạy lỗi vì chỉ có index mới resample được.",
        "D. Cả hai cách đều bị lỗi cú pháp."
    ],
    "correct_option": "C", # Wait, is this C? Let's check!
    # Wait, res2 = df.resample('W', on='Order_Date')['Sales'].sum() -> does df.resample support 'on='?
    # Yes, pandas DataFrame.resample supports the 'on' parameter for a datetime-like column!
    # Wait! Let's check: Yes, 'on' is a parameter in DataFrame.resample().
    # So both ways are valid and return the same result!
    # Let's change the correct_option to "A" since both A and B are valid, wait, let's verify.
    # Ah, let's write correct_option as A.
    "correct_option": "A",
    "explanation": "Pandas hỗ trợ cả hai phương pháp gom nhóm thời gian trên một cột không làm index. Sử dụng `pd.Grouper(key='Order_Date', freq='W')` truyền vào `groupby` và sử dụng tham số `on='Order_Date'` trong `resample` đều hợp lệ và cho ra kết quả giống nhau.",
    "solution": "Bước 1: Xác định rằng `resample` có tham số `on` để chỉ định cột thời gian.\nBước 2: Xác định `pd.Grouper` có tham số `key` để chỉ định cột thời gian khi groupby.\nBước 3: Cả hai cách đều cho kết quả đúng. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_022",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["optimization", "memory"],
    "content": "Để tối ưu dung lượng bộ nhớ của các cột kiểu số về mức tối thiểu dựa trên phạm vi giá trị thực tế của chúng, ta điền giá trị nào vào chỗ trống `____`?\n\n```python\nimport pandas as pd\ns = pd.Series([1, 100, 30000], dtype='int64')\ns_optimized = pd.to_numeric(s, downcast='____')\n```",
    "options": [
        "A. 'integer'",
        "B. 'signed'",
        "C. 'int16'",
        "D. 'smallint'"
    ],
    "correct_option": "A",
    "explanation": "Hàm `pd.to_numeric()` với tham số `downcast='integer'` sẽ chuyển đổi kiểu số nguyên sang kích thước nhỏ nhất có thể lưu trữ được tất cả giá trị trong mảng (như int8, int16, int32). Ở đây, giá trị lớn nhất là 30000 nên nó sẽ downcast về `int16`.",
    "solution": "Bước 1: Sử dụng `pd.to_numeric()`.\nBước 2: Sử dụng `downcast='integer'` để tối ưu tự động dựa trên phạm vi.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_023",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["multiindex", "indexing"],
    "content": "Cho DataFrame `df` có chỉ mục MultiIndex gồm 2 cấp là `['City', 'Year']`. Điền biểu thức thích hợp vào chỗ trống `____` để lọc ra tất cả các hàng thuộc năm `2026` của mọi thành phố.\n\n```python\nimport pandas as pd\nidx = pd.MultiIndex.from_product([['Hanoi', 'Saigon'], [2025, 2026]], names=['City', 'Year'])\ndf = pd.DataFrame({'Sales': [100, 150, 200, 250]}, index=idx)\n# Cần lấy doanh số của năm 2026 ở tất cả các thành phố\nresult = df.loc[____, :]\n```",
    "options": [
        "A. (slice(None), 2026)",
        "B. ('Hanoi', 2026)",
        "C. (:, 2026)",
        "D. (2026, slice(None))"
    ],
    "correct_option": "A",
    "explanation": "Trong phương thức `.loc`, khi lọc chỉ mục MultiIndex dạng tuple, để chọn mọi giá trị của một cấp, ta phải sử dụng đối tượng `slice(None)` (tương đương với `:` trong slicing thông thường).",
    "solution": "Bước 1: Cấp 1 ('City') cần lấy tất cả -> dùng `slice(None)`.\nBước 2: Cấp 2 ('Year') lấy 2026 -> ghi `2026`. Kết hợp lại thành tuple `(slice(None), 2026)`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_024",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "rolling"],
    "content": "Giá trị tại dòng thứ 3 (chỉ mục `2026-01-03 12:00`) của DataFrame kết quả `r` là bao nhiêu?\n\n```python\nimport pandas as pd\ndates = pd.to_datetime(['2026-01-01 10:00', '2026-01-01 11:00', '2026-01-03 12:00'])\ndf = pd.DataFrame({'value': [1, 2, 3]}, index=dates)\n# Cửa sổ cuộn dựa trên khoảng thời gian 2 ngày thực tế\nr = df.rolling(window='2D').sum()\n```",
    "options": [
        "A. 3.0",
        "B. 6.0",
        "C. 5.0",
        "D. NaN"
    ],
    "correct_option": "A",
    "explanation": "Với cửa sổ `window='2D'`, tại dòng `2026-01-03 12:00`, khoảng thời gian được bao phủ là `[2026-01-01 12:00, 2026-01-03 12:00]`. Hai dòng đầu tiên ở ngày 01/01 lúc 10:00 và 11:00 nằm ngoài khoảng này. Do đó chỉ có duy nhất giá trị 3 được tính, kết quả bằng 3.0.",
    "solution": "Bước 1: Tính toán khoảng thời gian cửa sổ cho dòng cuối: từ 12:00 ngày 01/01 đến 12:00 ngày 03/01.\nBước 2: Lọc các dòng nằm trong khoảng trên -> chỉ có dòng cuối (giá trị 3).\nBước 3: Cộng tổng các dòng hợp lệ thu được 3.0. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_025",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "shift"],
    "content": "Chỉ số (index) của Series kết quả `result` sau khi chạy đoạn mã dưới đây là gì?\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20], index=pd.to_datetime(['2026-01-01', '2026-01-02']))\nresult = s.shift(periods=1, freq='D')\n```",
    "options": [
        "A. DatetimeIndex(['2026-01-02', '2026-01-03'], dtype='datetime64[ns]', freq='D')",
        "B. DatetimeIndex(['2026-01-01', '2026-01-02'], dtype='datetime64[ns]', freq='D')",
        "C. DatetimeIndex(['2026-01-02', '2026-01-02'], dtype='datetime64[ns]')",
        "D. Bị lỗi vì shift không cho phép truyền freq khi index đã có định dạng sẵn."
    ],
    "correct_option": "A",
    "explanation": "Khi truyền đối số `freq` vào `shift()`, thay vì dịch chuyển giá trị dữ liệu và sinh ra `NaN`, Pandas sẽ giữ nguyên dữ liệu và dịch chuyển toàn bộ chỉ mục thời gian (index) đi một lượng bằng `periods * freq` (ở đây là +1 ngày).",
    "solution": "Bước 1: Dịch chuyển index thêm 1 ngày: '2026-01-01' -> '2026-01-02', '2026-01-02' -> '2026-01-03'.\nBước 2: Giữ nguyên các giá trị dữ liệu là 10 và 20.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_026",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["io", "excel"],
    "content": "Khi sử dụng hàm `pd.read_excel()`, điền giá trị thích hợp nào vào chỗ trống `____` để đối tượng kết quả `excel_data` là một từ điển chứa tất cả các trang tính của file Excel?\n\n```python\nimport pandas as pd\n# Đọc file Excel có nhiều trang tính\nexcel_data = pd.read_excel('sales_report.xlsx', sheet_name=____)\n```",
    "options": [
        "A. None",
        "B. '*'",
        "C. []",
        "D. True"
    ],
    "correct_option": "A",
    "explanation": "Tham số `sheet_name=None` chỉ định cho Pandas đọc tất cả các trang tính có trong file Excel và trả về một dictionary dạng `{sheet_name: dataframe}`.",
    "solution": "Bước 1: Thiết lập tham số `sheet_name` bằng `None`.\nBước 2: Đối tượng trả về sẽ là dictionary gồm toàn bộ các sheet.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_027",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["reshaping", "unstack"],
    "content": "Đoạn code dưới đây thực hiện chuyển đổi DataFrame sang dạng nào?\n\n```python\nimport pandas as pd\nindex = pd.MultiIndex.from_tuples([('A', 1), ('B', 2)])\ndf = pd.DataFrame({'value': [10, 20]}, index=index)\nresult = df.unstack()\n```",
    "options": [
        "A. Một DataFrame có chỉ mục dòng là ['A', 'B'] và các cột tương ứng là [1, 2] (chứa giá trị khuyết ở các ô chéo).",
        "B. Một DataFrame có chỉ mục dòng là [1, 2] và các cột tương ứng là ['A', 'B'].",
        "C. Một Series có chỉ mục dòng phẳng dạng ('A', 1).",
        "D. Báo lỗi vì MultiIndex này không đầy đủ các cặp tổ hợp."
    ],
    "correct_option": "A",
    "explanation": "Mặc định `unstack()` xoay cấp trong cùng (cấp 1 - các số 1, 2) lên cột. Vì dòng chỉ có các cặp ('A', 1) và ('B', 2), khi đưa 1 và 2 lên cột, dòng 'A' sẽ bị thiếu giá trị tại cột 2, dòng 'B' bị thiếu tại cột 1 và được điền `NaN`.",
    "solution": "Bước 1: Gọi `unstack()` để xoay cấp trong cùng của index dòng lên index cột.\nBước 2: Xác định các cột mới là 1 và 2; index dòng mới là 'A' và 'B'.\nBước 3: Nhận thấy ô ('A', 2) và ('B', 1) không có dữ liệu ban đầu nên chứa NaN. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_028",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["reshaping", "explode"],
    "content": "Kết quả thực thi đoạn code dưới đây trên phiên bản Pandas 1.5+ sẽ như thế nào?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'ID': [1, 2],\n    'A': [[10, 20], [30]],\n    'B': [[100, 200], [300, 400]]\n})\ntry:\n    result = df.explode(['A', 'B'])\nexcept Exception as e:\n    result = str(type(e))\n```",
    "options": [
        "A. Gây ra lỗi ValueError vì độ dài các list ở hàng ID = 2 khác nhau (cột A có 1 phần tử, cột B có 2 phần tử).",
        "B. Hoạt động thành công và tự động điền NaN cho vị trí thiếu trong danh sách của cột A.",
        "C. Hoạt động thành công và tạo ra 3 dòng kết quả.",
        "D. Hoạt động thành công và tạo ra 4 dòng kết quả."
    ],
    "correct_option": "A",
    "explanation": "Khi gọi `explode()` đồng thời cho nhiều cột trong Pandas, yêu cầu bắt buộc là các danh sách ở từng dòng của những cột đó phải có cùng độ dài. Tại ID = 2, cột A có list độ dài 1 (`[30]`) còn cột B có list độ dài 2 (`[300, 400]`), dẫn đến lỗi `ValueError`.",
    "solution": "Bước 1: Kiểm tra độ dài các phần tử list ở dòng thứ 2.\nBước 2: Đối chiếu quy tắc explode nhiều cột cùng lúc (độ dài list phải bằng nhau).\nBước 3: Xác định lỗi xảy ra là `ValueError`. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_029",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "missing-data"],
    "content": "Giá trị tại ngày `2026-01-10` trong DataFrame `df_interpolated` sau khi thực thi đoạn mã dưới đây là bao nhiêu?\n\n```python\nimport pandas as pd\nimport numpy as np\nidx = pd.to_datetime(['2026-01-01', '2026-01-02', '2026-01-10'])\ndf = pd.DataFrame({'value': [1.0, 2.0, np.nan]}, index=idx)\ndf_interpolated = df.interpolate(method='time')\n```",
    "options": [
        "A. Vẫn là NaN vì đây là giá trị ở cuối chuỗi thời gian, không thể nội suy (extrapolate) mặc định.",
        "B. 10.0 (tính tiến theo tỷ lệ khoảng cách ngày).",
        "C. 3.0 (trung bình cộng đơn giản).",
        "D. 2.0 (sao chép giá trị gần nhất phía trước)."
    ],
    "correct_option": "A",
    "explanation": "Hàm `.interpolate()` thực hiện nội suy (điền khuyết ở giữa các giá trị hợp lệ). Vì điểm `2026-01-10` nằm ở cuối chuỗi và không có điểm hợp lệ nào phía sau nó, Pandas không thể nội suy và sẽ giữ nguyên giá trị `NaN` (trừ khi thiết lập tham số ngoại suy).",
    "solution": "Bước 1: Xác định vị trí của giá trị thiếu (nằm ở biên cuối).\nBước 2: Nhận biết cơ chế nội suy mặc định không thực hiện ngoại suy (extrapolation).\nBước 3: Giá trị vẫn là `NaN`. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_030",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "resample"],
    "content": "Mốc thời gian đầu tiên trong chỉ số (index) của kết quả `res` sau khi chạy đoạn mã dưới đây là mốc nào?\n\n```python\nimport pandas as pd\ndates = pd.date_range('2026-01-01 00:00:00', periods=6, freq='30min')\ndf = pd.DataFrame({'val': range(6)}, index=dates)\n# Resample thành chu kỳ 2 giờ, dịch chuyển biên bắt đầu đi 15 phút\nres = df.resample('2h', offset='15min').sum()\n```",
    "options": [
        "A. 2025-12-31 22:15:00",
        "B. 2026-01-01 00:15:00",
        "C. 2026-01-01 00:00:00",
        "D. 2026-01-01 02:15:00"
    ],
    "correct_option": "A",
    "explanation": "Khi resample 2 giờ với `offset='15min'`, các khoảng chia (bins) sẽ dịch chuyển sang ví dụ: `[00:15, 02:15)`. Phần tử đầu tiên của chuỗi gốc ở mốc `00:00` sẽ rơi vào khoảng thời gian liền trước đó, tức là `[22:15, 00:15)` thuộc ngày hôm trước. Do đó nhãn đầu tiên xuất hiện là `2025-12-31 22:15:00`.",
    "solution": "Bước 1: Tính các mốc biên phân đoạn dịch chuyển bởi offset 15 phút.\nBước 2: Xác định xem giá trị ở `00:00` rơi vào phân đoạn nào -> phân đoạn `22:15` ngày 31/12 đến `00:15` ngày 01/01.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_031",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["optimization", "memory"],
    "content": "Dung lượng bộ nhớ đo được thực tế (qua deep memory usage) của Series nào dưới đây sẽ lớn hơn?\n\n```python\nimport pandas as pd\ns = pd.Series([f\"val_{i}\" for i in range(100000)])\n# So sánh dung lượng bộ nhớ giữa Series string gốc và Series category\nsize_orig = s.memory_usage(deep=True)\nsize_cat = s.astype('category').memory_usage(deep=True)\n```",
    "options": [
        "A. size_cat lớn hơn size_orig",
        "B. size_orig lớn hơn size_cat",
        "C. Hai Series có kích thước bộ nhớ bằng nhau",
        "D. Không thể so sánh được vì kiểu category không hỗ trợ thuộc tính memory_usage"
    ],
    "correct_option": "A",
    "explanation": "Kiểu `category` tối ưu bộ nhớ bằng cách tạo ra một bảng từ điển lưu các giá trị duy nhất và một mảng số nguyên lưu mã khóa. Nếu số lượng giá trị duy nhất là 100% (tất cả các dòng đều khác nhau), chi phí lưu bảng từ điển cộng thêm mảng mã số nguyên sẽ làm dung lượng vượt trội so với lưu trữ chuỗi thô.",
    "solution": "Bước 1: Xác định số lượng giá trị duy nhất trong Series `s` (100,000 giá trị duy nhất trên 100,000 hàng - cardinality cực đại).\nBước 2: Đánh giá chi phí lưu trữ của kiểu dữ liệu category khi cardinality đạt 100%.\nBước 3: Rút ra kết luận kiểu category tốn RAM hơn và chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_032",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["io", "csv"],
    "content": "Tham số nào trong `pd.read_csv()` được điền vào chỗ trống `____` để áp dụng một hàm chuyển đổi tùy biến dữ liệu của cột ngay trong quá trình đọc file?\n\n```python\nimport pandas as pd\n# Cần chuyển đổi cột 'Price' dạng chuỗi như '$100.5' sang float ngay khi đọc file\ndf = pd.read_csv('data.csv', ____={'Price': lambda x: float(x.replace('$', ''))})\n```",
    "options": [
        "A. converters",
        "B. dtype",
        "C. transform",
        "D. parse_dates"
    ],
    "correct_option": "A",
    "explanation": "Tham số `converters` nhận vào một dictionary ánh xạ tên cột đến các hàm biến đổi dữ liệu, giúp chuyển đổi và làm sạch dữ liệu của từng dòng trực tiếp khi đọc file CSV.",
    "solution": "Bước 1: Xem xét yêu cầu áp dụng một hàm xử lý chuỗi tùy biến khi parse dữ liệu.\nBước 2: Sử dụng tham số `converters` nhận dictionary của các hàm lambda.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_033",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "calendar"],
    "content": "Biết ngày `2026-06-26` là Thứ Sáu, ngày lễ `'MyHoliday'` rơi vào Chủ Nhật `2026-06-28`. Các ngày trong chuỗi kết quả `s` được sinh ra dưới đây gồm những ngày nào?\n\n```python\nimport pandas as pd\nfrom pandas.tseries.holiday import AbstractHolidayCalendar, Holiday\nclass CustomCalendar(AbstractHolidayCalendar):\n    rules = [\n        Holiday('MyHoliday', month=6, day=28)\n    ]\ncustom_bd = pd.offsets.CustomBusinessDay(calendar=CustomCalendar())\ns = pd.date_range('2026-06-26', periods=3, freq=custom_bd)\n```",
    "options": [
        "A. Thứ Sáu 2026-06-26, Thứ Hai 2026-06-29, Thứ Ba 2026-06-30.",
        "B. Thứ Sáu 2026-06-26, Thứ Bảy 2026-06-27, Thứ Hai 2026-06-29.",
        "C. Thứ Sáu 2026-06-26, Chủ Nhật 2026-06-28, Thứ Hai 2026-06-29.",
        "D. Thứ Sáu 2026-06-26, Thứ Hai 2026-06-29, Thứ Tư 2026-07-01."
    ],
    "correct_option": "A",
    "explanation": "`CustomBusinessDay` mặc định bỏ qua các ngày cuối tuần (Thứ Bảy, Chủ Nhật). Vì ngày lễ rơi vào Chủ Nhật (đã là ngày cuối tuần nghỉ học/làm việc), lịch làm việc thực tế không bị ảnh hưởng thêm. Do đó chuỗi 3 ngày làm việc liên tiếp bắt đầu từ Thứ Sáu (26/06) là Thứ Sáu (26/06), Thứ Hai (29/06) và Thứ Ba (30/06).",
    "solution": "Bước 1: Tính toán các ngày tiếp theo bắt đầu từ ngày 26 (Thứ sáu).\nBước 2: Ngày 27 (Thứ bảy), 28 (Chủ nhật) là cuối tuần nên mặc định bị loại khỏi ngày làm việc.\nBước 3: Hai ngày làm việc kế tiếp là ngày 29 (Thứ hai) và ngày 30 (Thứ ba). Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_034",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "rolling"],
    "content": "Các phần tử tại index 0 và index 4 của Series kết quả `result` dưới đây lần lượt là gì?\n\n```python\nimport pandas as pd\ns = pd.Series([10, 20, 30, 40, 50])\nresult = s.rolling(window=3, center=True).mean()\n```",
    "options": [
        "A. NaN và NaN",
        "B. 20.0 and 40.0",
        "C. NaN and 40.0",
        "D. 20.0 and NaN"
    ],
    "correct_option": "A",
    "explanation": "Khi `center=True`, cửa sổ cuộn 3 phần tử tại vị trí `i` cần lấy dữ liệu của `i-1`, `i`, `i+1`. Tại index 0 (thiếu `i-1`) và index 4 (thiếu `i+1`), cửa sổ không đủ 3 phần tử hợp lệ nên kết quả trả về `NaN`.",
    "solution": "Bước 1: Cửa sổ cuộn đối xứng `center=True` có kích thước 3 cần 1 phần tử đứng trước và 1 phần tử đứng sau.\nBước 2: Ở hai đầu Series (index 0 và 4) sẽ không có phần tử biên tương ứng để tính toán.\nBước 3: Kết quả tại hai vị trí này là `NaN`. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_035",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["multiindex", "indexing"],
    "content": "Hình dáng chỉ mục (index) của DataFrame kết quả `result` dưới đây là gì?\n\n```python\nimport pandas as pd\nidx = pd.MultiIndex.from_tuples([\n    ('North', 2025), ('North', 2026), ('South', 2026)\n], names=['Region', 'Year'])\ndf = pd.DataFrame({'Revenue': [100, 200, 300]}, index=idx)\nresult = df.xs(2026, level='Year')\n```",
    "options": [
        "A. DataFrame có index phẳng là ['North', 'South'] (cấp 'Year' đã bị lược bỏ).",
        "B. DataFrame có index MultiIndex giống hệt df nhưng chỉ giữ các hàng chứa năm 2026.",
        "C. DataFrame có index là [2026, 2026].",
        "D. Một Series có index là ['North', 'South']."
    ],
    "correct_option": "A",
    "explanation": "Hàm `.xs()` trích xuất thiết diện. Mặc định đối số `drop_level` bằng `True`, nghĩa là cấp chỉ mục dùng để lọc ('Year') sẽ bị xóa bỏ khỏi kết quả, chỉ còn lại cấp chỉ mục dòng còn lại là 'Region' với các giá trị 'North', 'South'.",
    "solution": "Bước 1: Gọi hàm `xs()` lọc theo giá trị 2026 ở cấp 'Year'.\nBước 2: Cấp 'Year' bị loại bỏ khỏi index kết quả do `drop_level=True` mặc định.\nBước 3: Index còn lại là 'Region' chứa 'North' và 'South'. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_036",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["preprocessing", "get_dummies"],
    "content": "Các cột của DataFrame kết quả `dummies` sau khi thực thi đoạn mã dưới đây là gì?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Color': ['Red', 'Green', 'Blue']})\n# Sinh biến giả nhưng lược bỏ biến đầu tiên theo thứ tự chữ cái để tránh đa cộng tuyến\ndummies = pd.get_dummies(df, columns=['Color'], drop_first=True)\n```",
    "options": [
        "A. ['Color_Green', 'Color_Red']",
        "B. ['Color_Blue', 'Color_Green']",
        "C. ['Color_Blue', 'Color_Red']",
        "D. ['Color_Blue', 'Color_Green', 'Color_Red']"
    ],
    "correct_option": "A",
    "explanation": "Các giá trị cột 'Color' gồm 'Blue', 'Green', 'Red'. Theo thứ tự chữ cái (alphabetical order), 'Blue' đứng đầu tiên. Khi đặt `drop_first=True`, cột biến giả tương ứng với giá trị đầu tiên ('Color_Blue') bị loại bỏ, chỉ giữ lại 'Color_Green' và 'Color_Red'.",
    "solution": "Bước 1: Liệt kê các giá trị phân loại theo bảng chữ cái: 'Blue', 'Green', 'Red'.\nBước 2: Loại bỏ giá trị đầu tiên ('Blue') do thiết lập `drop_first=True`.\nBước 3: Các cột còn lại là 'Color_Green' và 'Color_Red'. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_037",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["io", "excel"],
    "content": "Sau khi chạy đoạn mã dưới đây, file `output.xlsx` sẽ có những đặc điểm cấu trúc nào?\n\n```python\nimport pandas as pd\ndf1 = pd.DataFrame({'A': [1]})\ndf2 = pd.DataFrame({'B': [2]})\nwith pd.ExcelWriter('output.xlsx') as writer:\n    df1.to_excel(writer, sheet_name='Data1')\n    df2.to_excel(writer, sheet_name='Data2')\n```",
    "options": [
        "A. File chứa đúng 2 trang tính tên là 'Data1' và 'Data2', lưu trữ tương ứng dữ liệu của df1 và df2.",
        "B. File chỉ chứa trang tính 'Data2' vì df2 đã ghi đè lên df1.",
        "C. File bị lỗi vì không thể ghi nhiều DataFrame vào cùng một writer.",
        "D. File chứa 1 trang tính duy nhất chứa cả hai DataFrame ghép lại theo hàng."
    ],
    "correct_option": "A",
    "explanation": "Khi sử dụng context manager `pd.ExcelWriter`, đối tượng writer giữ kết nối mở đến file Excel. Các lệnh gọi `.to_excel()` chỉ định các `sheet_name` khác nhau sẽ ghi tuần tự vào các sheet tương ứng mà không ghi đè mất dữ liệu của nhau.",
    "solution": "Bước 1: Sử dụng `pd.ExcelWriter()` làm cầu nối ghi file.\nBước 2: Gọi `.to_excel()` trên từng DataFrame truyền cùng một đối tượng writer.\nBước 3: Kết quả thu được file Excel có 2 sheet riêng biệt. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_038",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "period"],
    "content": "Nhận định nào sau đây đúng về các phép toán cộng thời gian trong đoạn code dưới đây?\n\n```python\nimport pandas as pd\np1 = pd.Period('2026-06', freq='M')\nt1 = pd.Timestamp('2026-06-15')\n```",
    "options": [
        "A. p1 + 1 đại diện cho cả tháng 7 năm 2026; t1 + 1 đại diện cho thời điểm ngày 16 tháng 6 năm 2026.",
        "B. Cả p1 + 1 và t1 + 1 đều bị lỗi vì không thể cộng trực tiếp số nguyên vào đối tượng thời gian.",
        "C. p1 + 1 cộng thêm 1 ngày, còn t1 + 1 cộng thêm 1 giây.",
        "D. p1 + 1 đại diện cho năm 2027, còn t1 + 1 đại diện cho tháng 7 năm 2026."
    ],
    "correct_option": "A",
    "explanation": "Đối với `Period`, phép cộng số nguyên `N` dịch chuyển mốc thời gian đi `N` chu kỳ tần suất (từ tháng 6 sang tháng 7). Đối với `Timestamp`, phép cộng số nguyên được diễn dịch là cộng thêm `N` ngày theo mặc định của Pandas.",
    "solution": "Bước 1: Phân tích phép cộng trên `Period('2026-06', freq='M')` -> cộng 1 tháng -> '2026-07'.\nBước 2: Phân tích phép cộng trên `Timestamp('2026-06-15')` -> cộng 1 ngày -> '2026-06-16'.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_039",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["time-series", "resample"],
    "content": "Các mốc thời gian (index) và giá trị của chuỗi kết quả `res` sau khi chạy đoạn mã dưới đây là gì?\n\n```python\nimport pandas as pd\ndates = pd.to_datetime(['10:00:00', '10:02:30', '10:05:00'])\ns = pd.Series([1, 2, 3], index=dates)\nres = s.resample('5min', closed='right', label='right').sum()\n```",
    "options": [
        "A. index: 10:00:00 (giá trị 1) và 10:05:00 (giá trị 5).",
        "B. index: 10:05:00 (giá trị 3) và 10:10:00 (giá trị 3).",
        "C. index: 10:00:00 (giá trị 3) và 10:05:00 (giá trị 3).",
        "D. index: 09:55:00 (giá trị 1) và 10:00:00 (giá trị 2) và 10:05:00 (giá trị 3)."
    ],
    "correct_option": "A",
    "explanation": "Khi `closed='right'`, khoảng phân đoạn 5 phút sẽ đóng ở bên phải, tức là dạng `(9:55, 10:00]` chứa điểm '10:00:00' (nhãn kết quả lấy theo biên phải `label='right'` là '10:00:00' có giá trị 1). Khoảng tiếp theo là `(10:00, 10:05]` chứa hai điểm '10:02:30' và '10:05:00' (nhãn '10:05:00' có giá trị tổng 2 + 3 = 5).",
    "solution": "Bước 1: Chia khoảng thời gian: khoảng 1 gồm (09:55, 10:00] chứa giá trị 1.\nBước 2: Khoảng 2 gồm (10:00, 10:05] chứa giá trị 2 và 3 -> tổng 5.\nBước 3: Nhãn lấy theo biên phải (10:00:00 và 10:05:00). Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_040",
    "module_id": "Module_E",
    "difficulty": "Medium",
    "tags": ["io", "parquet"],
    "content": "Khi chạy đoạn code dưới đây, cấu trúc lưu trữ nào sẽ được tạo ra trên đĩa cứng?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({'Region': ['North', 'South'] * 100, 'Sales': range(200)})\n# Ghi dữ liệu ra thư mục con chia theo Region\ndf.to_parquet('data_dir', partition_cols=['Region'])\n```",
    "options": [
        "A. Một thư mục tên là 'data_dir' chứa hai thư mục con là 'Region=North' và 'Region=South', bên trong chứa các file parquet nhỏ.",
        "B. Một file parquet tên là 'data_dir' có metadata chứa khóa Region.",
        "C. Hai file parquet riêng biệt là 'data_dir_North.parquet' và 'data_dir_South.parquet'.",
        "D. Một file nén zip chứa các file CSV của từng vùng."
    ],
    "correct_option": "A",
    "explanation": "Cơ chế phân vùng cột (`partition_cols`) của Parquet chia dữ liệu thành các thư mục con vật lý trên đĩa cứng có tên tương ứng với giá trị phân vùng. Điều này giúp tối ưu hóa truy vấn chỉ đọc trên các vùng chỉ định (partition pruning).",
    "solution": "Bước 1: Xác định chức năng của `partition_cols`.\nBước 2: Nó tạo cấu trúc thư mục lồng nhau dạng cây phân cấp dựa trên giá trị cột.\nBước 3: Chọn đáp án A."
})


# ==============================================================================
# HARD QUESTIONS (041 - 050)
# ==============================================================================

questions.append({
    "id": "Q_MOD_E_041",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["time-series", "optimization"],
    "content": "Tại sao việc cấu hình `engine='numba'` và `raw=True` trong đoạn code dưới đây lại giúp tăng tốc độ tính toán chỉ báo kỹ thuật của cửa sổ cuộn lên gấp nhiều lần?\n\n```python\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'value': np.random.randn(1000000)})\n# Cần tính trung bình có trọng số động cực nhanh\ndef weighted_mean(x):\n    weights = np.arange(len(x))\n    return np.dot(x, weights) / weights.sum()\n\nresult = df['value'].rolling(100).apply(weighted_mean, engine='numba', raw=True)\n```",
    "options": [
        "A. Numba biên dịch hàm JIT thành mã máy tối ưu hóa, và raw=True truyền mảng Numpy trực tiếp thay vì bọc ngoài bằng Series giúp bỏ qua chi phí tạo đối tượng của Python.",
        "B. Numba tự động chuyển việc tính toán từ CPU lên nhân đồ họa GPU.",
        "C. Tham số raw=True tự động bỏ qua các giá trị khuyết mà không cần kiểm tra điều kiện.",
        "D. Numba tối giản công thức toán học phức tạp thành phép toán cộng đơn giản để xử lý nhanh hơn."
    ],
    "correct_option": "A",
    "explanation": "JIT (Just-In-Time) của Numba biên dịch mã Python thô thành mã máy. Khi thiết lập `raw=True`, Pandas sẽ truyền trực tiếp các mảng NumPy 1D thô vào hàm tính toán thay vì khởi tạo một đối tượng Pandas Series cho mỗi cửa sổ trượt (ở đây có tới gần 1 triệu cửa sổ), giúp giảm thiểu tối đa chi phí overhead của Python.",
    "solution": "Bước 1: Phân tích cơ chế hoạt động của JIT trong Numba.\nBước 2: Nhận biết tác dụng của `raw=True` là loại bỏ overhead sinh đối tượng Series trong vòng lặp cuộn.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_042",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["io", "chunksize"],
    "content": "Cho một file CSV dung lượng 50GB vượt quá dung lượng RAM của máy chủ (16GB). Phương pháp xử lý dưới đây có ưu điểm gì về mặt quản lý bộ nhớ và tính chính xác?\n\n```python\nimport pandas as pd\n# Cần tính tổng Revenue theo từng Category từ file CSV 50GB\nchunks = pd.read_csv('data.csv', chunksize=100000)\ntotal_revenue = pd.Series(dtype='float64')\n\nfor chunk in chunks:\n    chunk_sum = chunk.groupby('Category')['Revenue'].sum()\n    total_revenue = total_revenue.add(chunk_sum, fill_value=0)\n```",
    "options": [
        "A. Giữ cho dung lượng RAM tiêu thụ luôn ổn định ở mức cực thấp (chỉ tải 100,000 dòng tại mỗi thời điểm) và trả về kết quả chính xác tương đương đọc toàn bộ file.",
        "B. Chạy nhanh hơn đọc toàn bộ file trực tiếp vì Pandas có cơ chế tự động xử lý đa luồng song song khi lặp qua chunk.",
        "C. Không chính xác hoàn toàn vì các nhóm Category giữa các chunk khác nhau sẽ ghi đè đè lên nhau.",
        "D. Tiết kiệm không gian đĩa cứng vì các phần dữ liệu đã được xử lý sẽ tự động bị xóa khỏi file gốc."
    ],
    "correct_option": "A",
    "explanation": "Bằng cách sử dụng `chunksize`, Pandas chỉ tải một lượng dòng nhỏ cố định vào RAM ở mỗi thời điểm, giúp RAM không bị tràn. Phương thức `add(..., fill_value=0)` thực hiện cộng dồn chuẩn xác các khóa trùng nhau giữa các chunk, đảm bảo kết quả cuối cùng hoàn toàn chính xác.",
    "solution": "Bước 1: Phân tích lượng RAM khi tải từng khối dữ liệu 100k dòng (chỉ vài chục MB).\nBước 2: Đánh giá cơ chế cộng dồn sử dụng `.add(..., fill_value=0)` giúp hợp nhất các Category xuất hiện ở các chunk khác nhau.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_043",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["multiindex", "indexing"],
    "content": "Kết quả của biến `result` sau khi chạy đoạn mã dưới đây là đối tượng thuộc kiểu dữ liệu gì và chứa các giá trị nào?\n\n```python\nimport pandas as pd\n# Tạo DataFrame MultiIndex cho cả index và columns\nidx = pd.MultiIndex.from_product([['North', 'South'], ['2026-06-28']], names=['Region', 'Date'])\ncols = pd.MultiIndex.from_product([['A', 'B'], ['Revenue', 'Profit']], names=['Product', 'Metric'])\ndf = pd.DataFrame([[100, 20, 200, 40], [300, 60, 400, 80]], index=idx, columns=cols)\n# Chọn Revenue của tất cả sản phẩm cho vùng North ngày 2026-06-28\nidx_slice = pd.IndexSlice\nresult = df.loc[('North', '2026-06-28'), idx_slice[:, 'Revenue']]\n```",
    "options": [
        "A. Một Series có index là ['A', 'B'] chứa các giá trị [100, 200].",
        "B. Một DataFrame có kích thước 1x2 chứa các giá trị [[100, 200]] với MultiIndex cột.",
        "C. Một Series chứa các giá trị [100, 20, 200, 40].",
        "D. Một giá trị số đơn lẻ (scalar) là 100."
    ],
    "correct_option": "A",
    "explanation": "Khi chọn một dòng duy nhất từ DataFrame thông qua `.loc`, kết quả trả về là một Series. Chỉ mục cột ban đầu là MultiIndex gồm hai cấp `['Product', 'Metric']`. Vì cấp `Metric` đã bị cố định là 'Revenue' (giá trị đơn lẻ), Pandas sẽ lược bỏ cấp này và chỉ giữ lại cấp `Product` làm chỉ mục cho Series kết quả.",
    "solution": "Bước 1: Xác định dòng được chọn là duy nhất: ('North', '2026-06-28'). Lọc dòng này trả về Series.\nBước 2: Xác định các cột được chọn: ('A', 'Revenue') và ('B', 'Revenue').\nBước 3: Lược bỏ cấp cột cố định ('Revenue'), giữ lại cấp 'Product' (['A', 'B']) làm index cho Series có các giá trị tương ứng [100, 200]. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_044",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["time-series", "alignment"],
    "content": "Các giá trị Bid được ghép tương ứng vào DataFrame `result` cho ba dòng giao dịch lần lượt là bao nhiêu?\n\n```python\nimport pandas as pd\ntrades = pd.DataFrame({\n    'Timestamp': pd.to_datetime(['10:00:00.100', '10:00:01.500', '10:00:03.200']),\n    'Symbol': ['AAPL', 'AAPL', 'AAPL'],\n    'Volume': [100, 200, 150]\n})\nquotes = pd.DataFrame({\n    'Timestamp': pd.to_datetime(['10:00:00.000', '10:00:01.000', '10:00:02.000', '10:00:03.000']),\n    'Symbol': ['AAPL', 'AAPL', 'AAPL', 'AAPL'],\n    'Bid': [150.0, 150.1, 150.2, 150.3]\n})\n# Cần lấy giá Bid mới nhất tại hoặc ngay trước mỗi giao dịch cho từng Symbol tương ứng\nresult = pd.merge_asof(trades, quotes, on='Timestamp', by='Symbol', direction='backward')\n```",
    "options": [
        "A. [150.0, 150.1, 150.3]",
        "B. [150.0, 150.2, 150.3]",
        "C. [150.1, 150.2, 150.3]",
        "D. [150.0, 150.1, 150.2]"
    ],
    "correct_option": "A",
    "explanation": "`pd.merge_asof()` tìm kiếm khóa gần nhất theo chiều thời gian với điều kiện khóa bên phải nhỏ hơn hoặc bằng khóa bên trái (`direction='backward'`). Dòng 1: `10:00:00.100` khớp với `10:00:00.000` (Bid 150.0). Dòng 2: `10:00:01.500` khớp với `10:00:01.000` (Bid 150.1). Dòng 3: `10:00:03.200` khớp với `10:00:03.000` (Bid 150.3).",
    "solution": "Bước 1: Với giao dịch thứ nhất lúc 00.100s, báo giá gần nhất trước đó là lúc 00.000s (Bid = 150.0).\nBước 2: Với giao dịch thứ hai lúc 01.500s, báo giá gần nhất trước đó là lúc 01.000s (Bid = 150.1).\nBước 3: Với giao dịch thứ ba lúc 03.200s, báo giá gần nhất trước đó là lúc 03.000s (Bid = 150.3). Kết quả là [150.0, 150.1, 150.3]. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_045",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["time-series", "resample"],
    "content": "Kết quả thu được tại ngày `2026-06-29` trong Series `res` là bao nhiêu?\n\n```python\nimport pandas as pd\nimport numpy as np\ndates = pd.to_datetime([\n    '2026-06-28 00:00', '2026-06-28 12:00', \n    '2026-06-29 00:00', '2026-06-29 12:00', \n    '2026-06-30 00:00'\n])\ndf = pd.DataFrame({'val': [1.0, 2.0, np.nan, np.nan, 5.0]}, index=dates)\n\ndef custom_agg(x):\n    if x.isna().all():\n        return -1.0\n    return x.dropna().iloc[0]\n\nres = df.resample('D').apply(custom_agg)\n```",
    "options": [
        "A. -1.0",
        "B. NaN",
        "C. 2.0",
        "D. 5.0"
    ],
    "correct_option": "A",
    "explanation": "Khi resample theo ngày ('D'), ngày `2026-06-29` chứa hai điểm dữ liệu là `2026-06-29 00:00` và `2026-06-29 12:00`. Cả hai điểm này đều có giá trị `NaN`. Hàm `custom_agg` kiểm tra thấy toàn bộ giá trị trong nhóm đều là NaN (`x.isna().all()`) nên trả về `-1.0`.",
    "solution": "Bước 1: Phân nhóm theo ngày: ngày 29/06 có hai bản ghi đều có giá trị NaN.\nBước 2: Hàm `custom_agg` nhận mảng `[NaN, NaN]` -> thỏa mãn điều kiện `isna().all()` -> trả về `-1.0`.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_046",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["io", "parquet"],
    "content": "Cơ chế \"Predicate Pushdown\" hoạt động như thế nào khi đọc file Parquet lớn bằng PyArrow engine trong Pandas để tối ưu hóa tài nguyên hệ thống?\n\n```python\nimport pandas as pd\n# Đọc file Parquet 10GB sử dụng PyArrow engine và chỉ đọc các dòng của năm 2026\ndf = pd.read_parquet(\n    'huge_data.parquet',\n    engine='pyarrow',\n    filters=[('Year', '==', 2026)]\n)\n```",
    "options": [
        "A. PyArrow đọc siêu dữ liệu (metadata) của file Parquet để xác định và chỉ tải các nhóm dòng (row groups) chứa giá trị Year = 2026 vào RAM, bỏ qua phần còn lại trên đĩa cứng.",
        "B. PyArrow tải toàn bộ dữ liệu vào bộ nhớ ảo (swap space) trước rồi áp dụng bộ lọc đa luồng.",
        "C. Hệ thống nén các cột không phải lọc thành các mảng byte để giảm băng thông I/O.",
        "D. PyArrow chuyển đổi file Parquet thành file CSV tạm thời rồi thực hiện lọc dòng tuần tự."
    ],
    "correct_option": "A",
    "explanation": "Định dạng file Parquet lưu trữ siêu dữ liệu chứa thống kê giá trị tối thiểu/tối đa (min/max stats) cho từng nhóm dòng (row group). PyArrow sử dụng thông tin này để lọc và chỉ nạp các khối dòng thỏa mãn điều kiện từ đĩa vào RAM, giảm thiểu tối đa tài nguyên I/O và RAM tiêu thụ.",
    "solution": "Bước 1: Phân tích cơ cấu lưu trữ metadata của Parquet.\nBước 2: Xác định vai trò của tham số `filters` giúp PyArrow bỏ qua các row groups không khớp điều kiện ngay trên đĩa.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_047",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["optimization", "memory"],
    "content": "Điều gì sẽ xảy ra khi thực hiện phép ghép nối `pd.merge()` trên hai DataFrame có kiểu dữ liệu phân loại (categorical) nhưng khác biệt về danh mục (categories)?\n\n```python\nimport pandas as pd\ndtype_cat = pd.CategoricalDtype(categories=['High', 'Medium', 'Low'], ordered=True)\ndf1 = pd.DataFrame({'ID': [1, 2], 'Priority': pd.Categorical(['High', 'Low'], dtype=dtype_cat)})\ndf2 = pd.DataFrame({'ID': [1, 2], 'Priority': pd.Categorical(['Low', 'High'], categories=['Low', 'High'], ordered=True)})\n# Tiến hành ghép nối dựa trên cột Priority\ntry:\n    merged = pd.merge(df1, df2, on='Priority')\nexcept Exception as e:\n    merged = str(type(e))\n```",
    "options": [
        "A. Gây ra lỗi ValueError vì hai cột phân loại có kiểu dữ liệu (CategoricalDtype) không tương thích do khác biệt danh mục (categories).",
        "B. Ghép nối thành công bình thường và tự động đồng bộ sang danh mục của df1.",
        "C. Tự động chuyển đổi cả hai cột về kiểu 'object' và ghép nối thành công nhưng làm tăng bộ nhớ sử dụng.",
        "D. Ghép nối thành công và giữ nguyên kiểu category ban đầu của từng bên trong bảng kết quả."
    ],
    "correct_option": "A",
    "explanation": "Trong Pandas, khi thực hiện các phép toán quan hệ (như merge hay join) trên các cột kiểu `category` có thuộc tính `ordered=True` hoặc có các danh mục (categories) không đồng nhất, Pandas sẽ ném ra lỗi `ValueError` để ngăn chặn việc so sánh không hợp lệ giữa các thang đo khác nhau.",
    "solution": "Bước 1: So sánh kiểu của df1['Priority'] (categories: ['High', 'Medium', 'Low']) và df2['Priority'] (categories: ['Low', 'High']).\nBước 2: Do hai cột có danh mục khác biệt và có thuộc tính xếp thứ tự, việc so sánh trực tiếp không khả thi.\nBước 3: Xác định lỗi phát sinh là `ValueError`. Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_048",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["time-series", "rolling"],
    "content": "Các giá trị tại ngày `2026-06-02` và `2026-06-05` của Series kết quả `result` sau khi chạy đoạn mã dưới đây lần lượt là bao nhiêu?\n\n```python\nimport pandas as pd\nidx = pd.to_datetime(['2026-06-01', '2026-06-02', '2026-06-05', '2026-06-06'])\ns = pd.Series([10, 20, 30, 40], index=idx)\nresult = s.rolling(window='3D', min_periods=2).mean()\n```",
    "options": [
        "A. 15.0 và NaN",
        "B. 15.0 và 30.0",
        "C. NaN và 30.0",
        "D. 15.0 và 25.0"
    ],
    "correct_option": "A",
    "explanation": "Với `window='3D'`, tại ngày `2026-06-02`, cửa sổ bao gồm `['2026-05-31', '2026-06-02']` chứa hai điểm dữ liệu: 01/06 (giá trị 10) và 02/06 (giá trị 20) -> thỏa mãn `min_periods=2`, trung bình là 15.0. Tại ngày `2026-06-05`, cửa sổ bao gồm `['2026-06-03', '2026-06-05']` chỉ chứa duy nhất một điểm dữ liệu là 05/06 (giá trị 30) -> không đạt tối thiểu 2 điểm dữ liệu, kết quả trả về `NaN`.",
    "solution": "Bước 1: Tính toán cửa sổ cho ngày 02/06: chứa ngày 01 và ngày 02 (2 phần tử) -> Mean = (10+20)/2 = 15.0.\nBước 2: Tính toán cửa sổ cho ngày 05/06: chỉ chứa duy nhất ngày 05 (1 phần tử) -> Ít hơn min_periods=2 -> NaN.\nBước 3: Chọn đáp án A."
})

questions.append({
    "id": "Q_MOD_E_049",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["reshaping", "pivot"],
    "content": "Bạn muốn xoay cột `'Variable'` thành các cột riêng biệt, giữ `'Store'` và `'Date'` làm index. Phương án nào dưới đây thực hiện yêu cầu trên và cho ra cùng một cấu trúc DataFrame kết quả?\n\n```python\nimport pandas as pd\ndf = pd.DataFrame({\n    'Store': ['S1', 'S1'],\n    'Date': ['2026-06-28', '2026-06-28'],\n    'Variable': ['Revenue', 'Profit'],\n    'Value': [1000, 200]\n})\n```",
    "options": [
        "A. df.pivot(index=['Store', 'Date'], columns='Variable', values='Value')",
        "B. df.set_index(['Store', 'Date', 'Variable'])['Value'].unstack('Variable')",
        "C. df.pivot_table(index=['Store', 'Date'], columns='Variable', values='Value', aggfunc='first')",
        "D. Cả A, B và C đều đúng và cho ra kết quả giống nhau."
    ],
    "correct_option": "D",
    "explanation": "Cả ba phương pháp đều là cách chuyển dữ liệu từ dạng dọc sang ngang (pivoting). Hàm `pivot` trong các phiên bản mới của Pandas hỗ trợ danh sách cột cho chỉ mục index dòng. Cách sử dụng `set_index` kết hợp `unstack` là cách làm kinh điển và cực kỳ tường minh. Hàm `pivot_table` với `aggfunc='first'` hoạt động tương tự vì mỗi nhóm chỉ có một phần tử.",
    "solution": "Bước 1: Kiểm tra cú pháp của cách A (`df.pivot`) -> hợp lệ.\nBước 2: Kiểm tra cú pháp của cách B (`set_index` và `unstack`) -> hợp lệ.\nBước 3: Kiểm tra cách C (`pivot_table` với hàm gom tụ first) -> hợp lệ. Chọn đáp án D."
})

questions.append({
    "id": "Q_MOD_E_050",
    "module_id": "Module_E",
    "difficulty": "Hard",
    "tags": ["time-series", "timezone"],
    "content": "Các tham số `nonexistent='shift_forward'` và `ambiguous='NaT'` hoạt động như thế nào khi gán múi giờ để đảm bảo code chạy không bị ném lỗi DST?\n\n```python\nimport pandas as pd\n# Giờ ở châu Âu lặp lại lúc DST kết thúc (ambiguous) và mất đi lúc DST bắt đầu (non-existent)\nidx = pd.to_datetime(['2026-03-29 02:30:00', '2026-10-25 01:30:00'])\n# Cần gán múi giờ Europe/London và xử lý các điểm lỗi DST\nidx_localized = idx.tz_localize('Europe/London', nonexistent='shift_forward', ambiguous='NaT')\n```",
    "options": [
        "A. nonexistent='shift_forward' dịch chuyển thời điểm không tồn tại tiến lên để khớp giờ hợp lệ tiếp theo; ambiguous='NaT' điền giá trị khuyết cho giờ lặp lại không xác định được.",
        "B. nonexistent tự động chuyển đổi sang UTC; ambiguous bỏ qua lỗi và ném ra cảnh báo.",
        "C. Cả hai tham số đều thay thế các điểm thời gian lỗi bằng ngày đầu tiên của năm.",
        "D. nonexistent='shift_forward' đẩy mốc thời gian sang ngày tiếp theo; ambiguous='NaT' xóa bỏ dòng dữ liệu đó khỏi DataFrame."
    ],
    "correct_option": "A",
    "explanation": "Khi nội địa hóa múi giờ có DST, tại thời điểm chuyển giao: (1) Giờ không tồn tại (nonexistent) ví dụ lúc nhảy tiến 1 giờ sẽ được dịch chuyển tiến (`shift_forward`) để tránh lỗi. (2) Giờ bị lặp lại (ambiguous) ví dụ lúc lùi 1 giờ sẽ được gán giá trị thời gian khuyết (`NaT`) để tránh sự không rõ ràng.",
    "solution": "Bước 1: Phân tích ý nghĩa của tham số `nonexistent='shift_forward'` -> dịch chuyển mốc giờ nhảy cóc tiến lên phía trước.\nBước 2: Phân tích ý nghĩa của `ambiguous='NaT'` -> gán NaT cho mốc giờ bị lặp lại không phân biệt được.\nBước 3: Chọn đáp án A."
})

# ==============================================================================
# WRITE TO JS FILE
# ==============================================================================

output_path = "/Users/mac/Desktop/cauHoi/questions_e.js"

# Write as js array
js_content = "const QUESTIONS_E = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {len(questions)} questions and saved to {output_path}")
