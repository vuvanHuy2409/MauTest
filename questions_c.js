const QUESTIONS_C = [
  {
    "id": "Q_MOD_C_001",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Trí tuệ nhân tạo (AI) là gì?",
    "options": [
      "A. Hệ thống máy tính mô phỏng lại các hoạt động trí tuệ của con người.",
      "B. Phần mềm chuyên dùng để soạn thảo văn bản và bảng tính văn phòng.",
      "C. Thiết bị phần cứng dùng để kết nối mạng internet giữa các quốc gia.",
      "D. Trò chơi điện tử được phát triển cho các dòng máy cầm tay thế hệ mới."
    ],
    "correct_option": "A",
    "explanation": "Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính nhằm tạo ra những hệ thống máy tính có khả năng mô phỏng hoặc thực hiện các hoạt động trí tuệ giống như con người."
  },
  {
    "id": "Q_MOD_C_002",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Học máy (Machine Learning) là gì?",
    "options": [
      "A. Phương pháp lập trình thủ công từng dòng lệnh chi tiết cho máy tính.",
      "B. Công nghệ giúp máy tính tự học hỏi từ dữ liệu mà không cần lập trình sẵn.",
      "C. Việc sửa chữa các linh kiện phần cứng bị hỏng của máy tính cá nhân.",
      "D. Hệ thống truyền tải điện năng tốc độ cao cho các trung tâm dữ liệu."
    ],
    "correct_option": "B",
    "explanation": "Học máy là một nhánh của AI, tập trung vào việc phát triển các thuật toán giúp máy tính tự động tìm ra các quy luật từ dữ liệu để đưa ra dự đoán hoặc quyết định."
  },
  {
    "id": "Q_MOD_C_003",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "training-data"
    ],
    "content": "Dữ liệu huấn luyện (Training Data) dùng để làm gì trong học máy?",
    "options": [
      "A. Dùng để cài đặt hệ điều hành và các ứng dụng cơ bản cho máy tính.",
      "B. Dùng làm nguyên liệu học tập để mô hình tìm kiếm các quy luật đặc trưng.",
      "C. Dùng làm công cụ để kết nối các thiết bị ngoại vi với thùng máy chủ.",
      "D. Dùng để đăng tải lên mạng xã hội nhằm thu hút lượt tương tác của khách."
    ],
    "correct_option": "B",
    "explanation": "Dữ liệu huấn luyện là tập dữ liệu ban đầu được dùng để cung cấp cho mô hình học máy học hỏi, từ đó mô hình có thể phát hiện và hiểu các quy luật trong dữ liệu."
  },
  {
    "id": "Q_MOD_C_004",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "chatbot"
    ],
    "content": "Chatbot là gì?",
    "options": [
      "A. Phần mềm tự động trò chuyện và phản hồi các câu hỏi của người dùng.",
      "B. Thiết bị định vị vị trí của người dùng thông qua sóng vệ tinh GPS.",
      "C. Ứng dụng dọn dẹp các tệp tin rác để tăng tốc độ xử lý cho máy tính.",
      "D. Trình duyệt web cho phép người dùng truy cập các trang mạng xã hội."
    ],
    "correct_option": "A",
    "explanation": "Chatbot là một ứng dụng phần mềm được thiết kế để tự động giao tiếp, trò chuyện và trả lời các câu hỏi của người dùng bằng ngôn ngữ tự nhiên."
  },
  {
    "id": "Q_MOD_C_005",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "supervised-learning"
    ],
    "content": "Đặc điểm chính của Học có giám sát (Supervised Learning) là gì?",
    "options": [
      "A. Máy tính tự học từ dữ liệu chưa được gán bất kỳ nhãn thông tin nào.",
      "B. Máy tính học từ dữ liệu đã được gán nhãn kết quả từ trước một cách cụ thể.",
      "C. Máy tính tự động tìm các nhóm dữ liệu tương đồng mà không cần hướng dẫn.",
      "D. Máy tính chỉ thực hiện các phép tính số học cơ bản như cộng trừ nhân chia."
    ],
    "correct_option": "B",
    "explanation": "Học có giám sát là phương pháp học máy trong đó mô hình học từ dữ liệu đã được gán nhãn trước (đầu vào đi kèm đầu ra mong muốn) để dự đoán cho dữ liệu mới."
  },
  {
    "id": "Q_MOD_C_006",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "unsupervised-learning"
    ],
    "content": "Đặc điểm chính của Học không giám sát (Unsupervised Learning) là gì?",
    "options": [
      "A. Máy tính học từ dữ liệu chưa được gán nhãn kết quả trước đó để phân nhóm.",
      "B. Máy tính học từ dữ liệu đã được ghi chú chi tiết kết quả đúng hay sai.",
      "C. Máy tính cần có con người trực tiếp hướng dẫn và sửa lỗi từng bước một.",
      "D. Máy tính chỉ có khả năng lưu trữ dữ liệu chứ không thể xử lý thông tin."
    ],
    "correct_option": "A",
    "explanation": "Học không giám sát là phương pháp học máy sử dụng dữ liệu chưa được gán nhãn trước, mô hình sẽ tự động tìm kiếm cấu trúc hoặc mối liên hệ ẩn trong dữ liệu (ví dụ như gom cụm)."
  },
  {
    "id": "Q_MOD_C_007",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "search-engine"
    ],
    "content": "Nhiệm vụ chính của một công cụ tìm kiếm (Search Engine) như Google là gì?",
    "options": [
      "A. Tự động soạn thảo các email quảng cáo và gửi tới hòm thư của khách.",
      "B. Tìm kiếm và hiển thị các trang web liên quan nhất đến từ khóa truy vấn.",
      "C. Bảo vệ máy tính của người dùng khỏi các phần mềm độc hại từ internet.",
      "D. Thiết kế giao diện đồ họa đẹp mắt cho các trang mạng xã hội lớn nhất."
    ],
    "correct_option": "B",
    "explanation": "Công cụ tìm kiếm có nhiệm vụ chính là thu thập dữ liệu web, sắp xếp và cung cấp các kết quả tìm kiếm phù hợp nhất với từ khóa mà người dùng nhập vào."
  },
  {
    "id": "Q_MOD_C_008",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "image-recognition"
    ],
    "content": "Công nghệ nhận diện hình ảnh (Image Recognition) thường được ứng dụng để làm gì?",
    "options": [
      "A. Nghe và chuyển giọng nói của người dùng thành định dạng văn bản chữ viết.",
      "B. Nhận diện các vật thể, khuôn mặt hoặc chữ viết xuất hiện trong bức ảnh.",
      "C. Dịch các đoạn văn bản từ ngôn ngữ này sang ngôn ngữ khác một cách tự động.",
      "D. Tạo ra các giai điệu nhạc không lời dựa trên sở thích cá nhân của người dùng."
    ],
    "correct_option": "B",
    "explanation": "Nhận diện hình ảnh là khả năng của AI trong việc nhận biết và phân loại các vật thể, con người, chữ viết hoặc hành động xuất hiện trong hình ảnh hoặc video."
  },
  {
    "id": "Q_MOD_C_009",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "llm"
    ],
    "content": "ChatGPT thuộc loại công nghệ AI nào sau đây?",
    "options": [
      "A. Mô hình ngôn ngữ lớn chuyên về tạo sinh văn bản.",
      "B. Phần mềm chỉnh sửa hình ảnh chuyên nghiệp trên máy tính.",
      "C. Công cụ quét và diệt virus tự động cho các máy chủ lớn.",
      "D. Hệ điều hành dành riêng cho các thiết bị di động thông minh."
    ],
    "correct_option": "A",
    "explanation": "ChatGPT là một ứng dụng dựa trên mô hình ngôn ngữ lớn (LLM), có khả năng hiểu và tạo ra văn bản giống như con người thông qua các câu hỏi/yêu cầu."
  },
  {
    "id": "Q_MOD_C_010",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Hệ thống gợi ý (Recommender System) của YouTube hoạt động như thế nào?",
    "options": [
      "A. Đề xuất video dựa trên sở thích và lịch sử xem của từng người dùng.",
      "B. Tự động xóa các video có thời lượng quá ngắn hoặc chất lượng hình ảnh kém.",
      "C. Bắt buộc người dùng phải xem tất cả các video mới nhất từ các kênh đăng ký.",
      "D. Hiển thị ngẫu nhiên các video quảng cáo mà không cần quan tâm đến chủ đề."
    ],
    "correct_option": "A",
    "explanation": "Hệ thống gợi ý của YouTube phân tích lịch sử xem, lượt tương tác và sở thích của người dùng để đề xuất những video phù hợp nhất nhằm giữ chân họ trên nền tảng."
  },
  {
    "id": "Q_MOD_C_011",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "chatbot"
    ],
    "content": "Lợi ích chính của việc tự động hóa chăm sóc khách hàng bằng Chatbot AI là gì?",
    "options": [
      "A. Tiết kiệm chi phí vận hành và hỗ trợ khách hàng liên tục 24/7.",
      "B. Bắt buộc mọi khách hàng phải mua nhiều sản phẩm đắt tiền hơn.",
      "C. Loại bỏ hoàn toàn sự can thiệp của con người trong doanh nghiệp.",
      "D. Tăng thời gian chờ đợi phản hồi của khách hàng lên nhiều lần."
    ],
    "correct_option": "A",
    "explanation": "Sử dụng Chatbot AI giúp doanh nghiệp phản hồi khách hàng ngay lập tức và liên tục 24/7 mà không phụ thuộc vào giờ làm việc của con người, giúp tiết kiệm chi phí vận hành."
  },
  {
    "id": "Q_MOD_C_012",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Trong học máy, 'Nhãn' (Label) của dữ liệu được hiểu là gì?",
    "options": [
      "A. Tên của tệp tin dữ liệu được lưu trữ trên ổ đĩa máy tính.",
      "B. Kết quả chính xác cần dự đoán gắn liền với mỗi mẫu dữ liệu.",
      "C. Địa chỉ email của người thu thập và xử lý tập dữ liệu đó.",
      "D. Biểu tượng đồ họa hiển thị trên màn hình của ứng dụng di động."
    ],
    "correct_option": "B",
    "explanation": "Trong học máy, nhãn (Label) là kết quả chính xác hoặc câu trả lời đi kèm với dữ liệu đầu vào (Ví dụ: ảnh chụp có nhãn là 'Mèo', hoặc email có nhãn là 'Thư rác')."
  },
  {
    "id": "Q_MOD_C_013",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Ứng dụng nào sau đây sử dụng công nghệ Nhận diện giọng nói (Speech-to-Text)?",
    "options": [
      "A. Phần mềm dịch tự động một văn bản từ tiếng Anh sang tiếng Việt.",
      "B. Trợ lý ảo chuyển lời nói của bạn thành tin nhắn văn bản để gửi.",
      "C. Bộ lọc thư rác tự động chuyển các email quảng cáo vào thùng rác.",
      "D. Ứng dụng chỉnh sửa ảnh giúp làm mịn da và làm sáng khuôn mặt."
    ],
    "correct_option": "B",
    "explanation": "Công nghệ Nhận diện giọng nói (Speech-to-Text) có vai trò lắng nghe và chuyển đổi âm thanh giọng nói của con người thành định dạng văn bản chữ viết trên thiết bị."
  },
  {
    "id": "Q_MOD_C_014",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "'Dữ liệu kiểm thử' (Test Data) trong học máy dùng để làm gì?",
    "options": [
      "A. Dùng để cài đặt các bản cập nhật bảo mật mới nhất cho máy tính.",
      "B. Dùng để đánh giá độ chính xác của mô hình sau khi đã huấn luyện.",
      "C. Dùng để lưu trữ thông tin cá nhân và tài khoản của lập trình viên.",
      "D. Dùng để thay thế hoàn toàn cho dữ liệu huấn luyện khi bắt đầu học."
    ],
    "correct_option": "B",
    "explanation": "Dữ liệu kiểm thử (Test Data) là tập dữ liệu độc lập không dùng trong quá trình huấn luyện, được dùng để kiểm tra và đánh giá khả năng dự đoán thực tế của mô hình."
  },
  {
    "id": "Q_MOD_C_015",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Trải nghiệm người dùng (UX) của ứng dụng AI sẽ bị ảnh hưởng thế nào nếu mô hình phản hồi quá chậm (độ trễ cao)?",
    "options": [
      "A. Người dùng sẽ cảm thấy thích thú vì nghĩ máy tính đang làm việc kỹ.",
      "B. Người dùng dễ cảm thấy khó chịu, mất kiên nhẫn và rời bỏ ứng dụng.",
      "C. Giao diện của ứng dụng sẽ tự động chuyển sang màu sắc đẹp mắt hơn.",
      "D. Thiết bị của người dùng sẽ tự động tiết kiệm được nhiều pin hơn hẳn."
    ],
    "correct_option": "B",
    "explanation": "Độ trễ cao (Latency) làm gián đoạn trải nghiệm sử dụng, khiến người dùng cảm thấy ứng dụng hoạt động không hiệu quả hoặc bị lỗi, dẫn đến việc họ rời bỏ ứng dụng."
  },
  {
    "id": "Q_MOD_C_016",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "generative-ai"
    ],
    "content": "Công nghệ AI tạo ảnh từ văn bản (như Midjourney hoặc DALL-E) hoạt động thế nào?",
    "options": [
      "A. Tìm kiếm các bức ảnh có sẵn trên Google rồi tải về máy cho người dùng.",
      "B. Vẽ ra một bức ảnh hoàn toàn mới dựa trên mô tả văn bản của người dùng.",
      "C. Chụp ảnh màn hình máy tính của người dùng tại thời điểm nhập yêu cầu.",
      "D. Quét các tệp tin hình ảnh có sẵn trong thư mục cá nhân của người dùng."
    ],
    "correct_option": "B",
    "explanation": "AI tạo hình ảnh từ văn bản sử dụng mô hình tạo sinh để phân tích từ ngữ mô tả và tự động vẽ ra một bức ảnh hoàn toàn mới chưa từng tồn tại trước đó."
  },
  {
    "id": "Q_MOD_C_017",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Nhận diện khuôn mặt trên điện thoại thông minh là ứng dụng của lĩnh vực nào?",
    "options": [
      "A. Nhận diện giọng nói (Speech-to-Text).",
      "B. Thị giác máy tính (Computer Vision).",
      "C. Phân tích dữ liệu tài chính số.",
      "D. Xử lý âm thanh (Audio Processing)."
    ],
    "correct_option": "B",
    "explanation": "Nhận diện khuôn mặt yêu cầu máy tính phân tích các đặc điểm trên hình ảnh khuôn mặt thu được từ camera, đây là bài toán thuộc lĩnh vực Thị giác máy tính."
  },
  {
    "id": "Q_MOD_C_018",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Việc hiển thị lý do gợi ý sản phẩm (ví dụ: 'Vì bạn đã mua cuốn sách A') giúp ích gì cho UX?",
    "options": [
      "A. Giúp tăng dung lượng lưu trữ của máy chủ chạy ứng dụng mua sắm trực tuyến.",
      "B. Giúp xây dựng niềm tin và sự hài lòng của người dùng đối với hệ thống gợi ý.",
      "C. Giúp điện thoại của người dùng kết nối internet nhanh hơn và ổn định hơn.",
      "D. Giúp xóa bỏ hoàn toàn tất cả các lỗi lập trình có thể xảy ra trong phần mềm."
    ],
    "correct_option": "B",
    "explanation": "Tính minh bạch trong gợi ý (AI Explainability) giúp người dùng hiểu tại sao họ nhận được đề xuất đó, từ đó làm tăng niềm tin và sự hài lòng đối với trải nghiệm sản phẩm."
  },
  {
    "id": "Q_MOD_C_019",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Nhận diện thực thể tên (Named Entity Recognition - NER) là tác vụ dùng để làm gì trong NLP?",
    "options": [
      "A. Xác định vị trí của các khuôn mặt xuất hiện trong một bức ảnh chân dung.",
      "B. Tìm kiếm các từ chỉ tên người, địa danh, ngày tháng trong đoạn văn bản.",
      "C. Dịch tự động một bài hát từ tiếng Việt sang tiếng Hàn hoặc tiếng Nhật.",
      "D. Tự động điều chỉnh âm lượng của loa máy tính khi có tiếng ồn xung quanh."
    ],
    "correct_option": "B",
    "explanation": "NER (Named Entity Recognition) là một tác vụ trong NLP nhằm tự động nhận diện và phân loại các thông tin quan trọng như tên người, tên tổ chức, địa điểm, mốc thời gian trong văn bản."
  },
  {
    "id": "Q_MOD_C_020",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Trong AI, khái niệm 'Độ trễ' (Latency) đề cập đến điều gì?",
    "options": [
      "A. Tổng số lượng từ mà mô hình AI tạo sinh có thể tạo ra trong một giây.",
      "B. Khoảng thời gian từ lúc người dùng gửi yêu cầu đến lúc AI trả lời xong.",
      "C. Dung lượng bộ nhớ RAM mà hệ thống máy tính cần để lưu trữ mô hình AI.",
      "D. Số lượng lập trình viên tham gia xây dựng và bảo trì hệ thống học máy."
    ],
    "correct_option": "B",
    "explanation": "Độ trễ (Latency) là thời gian phản hồi của hệ thống, được tính từ lúc người dùng bắt đầu gửi câu hỏi hoặc lệnh cho AI đến khi nhận được phản hồi đầu ra."
  },
  {
    "id": "Q_MOD_C_021",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "chatbot"
    ],
    "content": "Trợ lý ảo như Siri hay Google Assistant nhận đầu vào trực tiếp từ kênh nào?",
    "options": [
      "A. Các cử chỉ tay của người dùng trước camera của thiết bị.",
      "B. Giọng nói trực tiếp của người dùng thông qua microphone.",
      "C. Các tập tin văn bản định dạng PDF được tải lên từ thẻ nhớ.",
      "D. Các nhấp chuột của người dùng trên màn hình cảm ứng di động."
    ],
    "correct_option": "B",
    "explanation": "Trợ lý ảo bằng giọng nói sử dụng microphone tích hợp để thu âm trực tiếp tiếng nói của người dùng làm đầu vào để xử lý."
  },
  {
    "id": "Q_MOD_C_022",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Để thu thập phản hồi của người dùng về chất lượng câu trả lời của AI, cách làm nào sau đây là đơn giản và hiệu quả nhất cho giao diện?",
    "options": [
      "A. Yêu cầu người dùng viết một bài đánh giá dài tối thiểu hai trăm từ.",
      "B. Hiển thị hai nút biểu tượng ngón tay Like và Dislike dưới mỗi câu trả lời.",
      "C. Gọi điện thoại trực tiếp cho từng người dùng sau mỗi lần họ sử dụng AI.",
      "D. Khóa tài khoản của người dùng nếu họ không chịu thực hiện làm khảo sát."
    ],
    "correct_option": "B",
    "explanation": "Nút Like/Dislike là cơ chế thu thập phản hồi tường minh (Explicit Feedback) nhanh chóng, dễ dùng và ít gây phiền toái nhất cho trải nghiệm người dùng."
  },
  {
    "id": "Q_MOD_C_023",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Đâu là một ví dụ về ứng dụng AI trong việc phát hiện thư rác (Spam)?",
    "options": [
      "A. Tự động xóa các tập tin hình ảnh có dung lượng quá lớn trên điện thoại.",
      "B. Phân loại email nhận được thành hai nhóm: email thường và email rác.",
      "C. Gửi email chúc mừng sinh nhật tự động tới tất cả bạn bè trong danh bạ.",
      "D. Thay đổi hình nền của ứng dụng hòm thư theo thời gian thực trong ngày."
    ],
    "correct_option": "B",
    "explanation": "Bộ lọc thư rác phân tích nội dung, người gửi và tiêu đề email để phân loại tự động email đó vào thư mục rác hoặc thư mục chính."
  },
  {
    "id": "Q_MOD_C_024",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "unsupervised-learning"
    ],
    "content": "Kỹ thuật phân nhóm khách hàng dựa trên thói quen mua sắm mà không có nhãn trước thuộc bài toán nào?",
    "options": [
      "A. Học có giám sát (Supervised Learning).",
      "B. Học không giám sát (Unsupervised Learning).",
      "C. Nhận diện giọng nói (Speech-to-Text).",
      "D. Tổng hợp giọng nói (Text-to-Speech)."
    ],
    "correct_option": "B",
    "explanation": "Phân nhóm (Clustering) dữ liệu khách hàng chưa được gắn nhãn từ trước để tìm ra các nhóm có thói quen tương tự là bài toán kinh điển của Học không giám sát."
  },
  {
    "id": "Q_MOD_C_025",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "overfitting"
    ],
    "content": "Trong học máy, hiện tượng 'Học vẹt' (Overfitting) xảy ra khi nào?",
    "options": [
      "A. Mô hình hoạt động tốt trên dữ liệu huấn luyện nhưng rất kém trên dữ liệu mới.",
      "B. Mô hình không thể học được bất kỳ quy luật nào từ tập dữ liệu huấn luyện ban đầu.",
      "C. Mô hình tự động xóa toàn bộ dữ liệu huấn luyện sau khi kết thúc quá trình học.",
      "D. Mô hình hoạt động cực kỳ nhanh và chính xác trên mọi tập dữ liệu thực tế mới."
    ],
    "correct_option": "A",
    "explanation": "Overfitting (Quá khớp/Học vẹt) xảy ra khi mô hình học quá chi tiết cả nhiễu trong tập huấn luyện, khiến nó đạt điểm cao trên tập huấn luyện nhưng dự đoán kém trên dữ liệu mới."
  },
  {
    "id": "Q_MOD_C_026",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Đâu là một định nghĩa đơn giản về 'Trí tuệ nhân tạo hẹp' (Narrow AI)?",
    "options": [
      "A. AI có khả năng tự nhận thức và có cảm xúc giống như một con người thực sự.",
      "B. AI được thiết kế và huấn luyện để chỉ thực hiện một nhiệm vụ cụ thể duy nhất.",
      "C. AI có thể làm được tất cả mọi công việc tốt hơn bất kỳ con người nào trên thế giới.",
      "D. AI tự động học cách lập trình ra các phần mềm máy tính khác mà không cần người."
    ],
    "correct_option": "B",
    "explanation": "Trí tuệ nhân tạo hẹp (Narrow AI hay Weak AI) là các hệ thống AI được thiết kế và tối ưu để giải quyết một nhiệm vụ duy nhất (Ví dụ: nhận diện khuôn mặt, chơi cờ, dịch thuật)."
  },
  {
    "id": "Q_MOD_C_027",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Lĩnh vực 'Xử lý ngôn ngữ tự nhiên' (NLP) tập trung vào việc giúp máy tính làm gì?",
    "options": [
      "A. Nhận biết các chuyển động vật lý của con người trước camera của thiết bị.",
      "B. Hiểu, phân tích và tạo ra ngôn ngữ của con người dưới dạng chữ hoặc tiếng.",
      "C. Đo lường nhiệt độ và độ ẩm của môi trường xung quanh các máy chủ lớn.",
      "D. Tự động điều khiển các robot di chuyển tránh các chướng ngại vật trên đường."
    ],
    "correct_option": "B",
    "explanation": "Xử lý ngôn ngữ tự nhiên (NLP) là lĩnh vực giao thoa giữa khoa học máy tính và ngôn ngữ học, tập trung vào việc giúp máy tính hiểu và tương tác bằng ngôn ngữ của con người."
  },
  {
    "id": "Q_MOD_C_028",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Tại sao 'Định kiến dữ liệu' (Data Bias) lại là một vấn đề nghiêm trọng trong AI?",
    "options": [
      "A. Làm cho mô hình AI chạy chậm hơn và tiêu tốn nhiều tài nguyên máy chủ hơn.",
      "B. Làm cho mô hình AI đưa ra quyết định thiên vị, không công bằng với một nhóm người.",
      "C. Làm tăng chi phí lưu trữ dữ liệu của doanh nghiệp lên gấp nhiều lần so với cũ.",
      "D. Làm cho mã nguồn của chương trình máy tính bị lỗi và không thể biên dịch được."
    ],
    "correct_option": "B",
    "explanation": "Nếu dữ liệu dùng để huấn luyện chứa định kiến xã hội hoặc bị mất cân bằng, mô hình AI sẽ học theo định kiến đó và đưa ra những quyết định phân biệt đối xử bất công."
  },
  {
    "id": "Q_MOD_C_029",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Trong một hệ thống gợi ý phim (như Netflix), hành vi nào của người dùng được coi là 'Phản hồi ngầm định' (Implicit Feedback)?",
    "options": [
      "A. Người dùng nhấn nút đánh giá năm sao cho bộ phim sau khi xem xong hoàn toàn.",
      "B. Người dùng tiếp tục xem tập tiếp theo của bộ phim hoặc xem hết toàn bộ phim.",
      "C. Người dùng viết một bài nhận xét chi tiết về nội dung phim trên diễn đàn lớn.",
      "D. Người dùng gửi email phản hồi trực tiếp cho bộ phận hỗ trợ khách hàng của ứng dụng."
    ],
    "correct_option": "B",
    "explanation": "Phản hồi ngầm định (Implicit Feedback) là việc hệ thống tự theo dõi hành vi tự nhiên của người dùng (như thời gian xem, nhấp chuột) để đoán sở thích của họ mà không yêu cầu họ chấm điểm chủ động."
  },
  {
    "id": "Q_MOD_C_030",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Việc 'Tóm tắt văn bản' (Text Summarization) bằng AI giúp ích gì cho người dùng?",
    "options": [
      "A. Chuyển đổi toàn bộ văn bản từ định dạng PDF sang định dạng hình ảnh PNG.",
      "B. Rút ngắn một bài viết dài thành các ý chính giúp người đọc nắm thông tin nhanh.",
      "C. Tự động kiểm tra và sửa toàn bộ lỗi chính tả có trong bài viết ban đầu.",
      "D. Đọc to bài viết lên bằng giọng nói nhân tạo của robot để người dùng nghe."
    ],
    "correct_option": "B",
    "explanation": "Tóm tắt văn bản bằng AI giúp trích xuất các thông tin cốt lõi, ngắn gọn từ một văn bản dài, giúp tiết kiệm thời gian đọc và nắm bắt nội dung nhanh chóng."
  },
  {
    "id": "Q_MOD_C_031",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một mô hình dự đoán thời tiết cho kết quả đúng 8 ngày trong tổng số 10 ngày kiểm thử. Độ chính xác (Accuracy) của mô hình này là bao nhiêu phần trăm?",
    "options": [
      "A. Sáu mươi phần trăm.",
      "B. Tám mươi phần trăm.",
      "C. Bốn mươi phần trăm.",
      "D. Năm mươi phần trăm."
    ],
    "correct_option": "B",
    "explanation": "Độ chính xác (Accuracy) được tính bằng tỷ lệ số dự đoán đúng trên tổng số trường hợp thử nghiệm: 8 / 10 = 0.8 (tương đương 80%)."
  },
  {
    "id": "Q_MOD_C_032",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Khái niệm 'Học sâu' (Deep Learning) là gì?",
    "options": [
      "A. Phương pháp học tập của học sinh bằng cách đọc sách giáo khoa liên tục nhiều giờ.",
      "B. Một nhánh của học máy sử dụng các mạng nơ-ron nhân tạo có nhiều lớp ẩn để học.",
      "C. Việc lập trình các câu lệnh điều khiển hệ thống lưu trữ dữ liệu của máy tính.",
      "D. Thuật toán tìm kiếm các đường đi ngắn nhất trên bản đồ số của thiết bị di động."
    ],
    "correct_option": "B",
    "explanation": "Học sâu (Deep Learning) là một tập hợp con của học máy sử dụng các mạng nơ-ron nhiều lớp (mạng nơ-ron sâu) để tự động trích xuất đặc trưng và học từ dữ liệu phức tạp."
  },
  {
    "id": "Q_MOD_C_033",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Tại sao việc thu thập dữ liệu đa dạng và đại diện cho nhiều đối tượng lại quan trọng khi huấn luyện AI?",
    "options": [
      "A. Để mô hình AI hoạt động công bằng và chính xác với nhiều nhóm người dùng khác nhau.",
      "B. Để giảm dung lượng lưu trữ của tập dữ liệu huấn luyện xuống mức thấp nhất có thể.",
      "C. Để giúp cho lập trình viên không cần viết mã nguồn khi phát triển phần mềm ứng dụng.",
      "D. Để đảm bảo máy tính luôn hoạt động mát mẻ và không bị quá nhiệt khi chạy chương trình."
    ],
    "correct_option": "A",
    "explanation": "Dữ liệu huấn luyện đa dạng giúp mô hình AI học được đầy đủ đặc điểm của các nhóm đối tượng khác nhau, tránh hiện tượng hoạt động kém chính xác hoặc thiên vị trên một nhóm cụ thể."
  },
  {
    "id": "Q_MOD_C_034",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Ứng dụng lọc thư rác (Spam Filter) nhận diện nhầm một email công việc quan trọng là 'Thư rác' và đưa vào thùng rác. Đây là ví dụ của lỗi gì?",
    "options": [
      "A. True Positive (Dương tính thật).",
      "B. False Positive (Dương tính giả).",
      "C. True Negative (Âm tính thật).",
      "D. False Negative (Âm tính giả)."
    ],
    "correct_option": "B",
    "explanation": "Lỗi False Positive (Dương tính giả) xảy ra khi hệ thống nhận diện nhầm một đối tượng bình thường (âm tính thực tế) thành đối tượng vi phạm hoặc cần phát hiện (dương tính dự đoán)."
  },
  {
    "id": "Q_MOD_C_035",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Ứng dụng lọc thư rác bỏ sót một email quảng cáo độc hại và để nó hiển thị ở hòm thư chính. Đây là ví dụ của lỗi gì?",
    "options": [
      "A. True Positive (Dương tính thật).",
      "B. False Positive (Dương tính giả).",
      "C. True Negative (Âm tính thật).",
      "D. False Negative (Âm tính giả)."
    ],
    "correct_option": "D",
    "explanation": "Lỗi False Negative (Âm tính giả/Bỏ sót) xảy ra khi hệ thống không phát hiện được một đối tượng thực tế thuộc nhóm cần tìm (dương tính thực tế) và phân loại nó là bình thường (âm tính dự đoán)."
  },
  {
    "id": "Q_MOD_C_036",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Mục đích của việc sử dụng các gợi ý câu hỏi mẫu (Quick Prompts) trong giao diện Chatbot AI là gì?",
    "options": [
      "A. Ép buộc người dùng chỉ được phép hỏi những câu hỏi có sẵn đó.",
      "B. Giúp người dùng dễ dàng bắt đầu cuộc hội thoại mà không cần tự nghĩ câu hỏi.",
      "C. Giảm lượng băng thông mạng của người dùng khi truy cập vào ứng dụng chat.",
      "D. Tăng số lượng quảng cáo hiển thị trên màn hình giao diện của phần mềm chat."
    ],
    "correct_option": "B",
    "explanation": "Các câu gợi ý nhanh giúp giảm công sức suy nghĩ câu hỏi ban đầu của người dùng, định hướng cho họ biết chatbot này có thể trả lời các chủ đề gì."
  },
  {
    "id": "Q_MOD_C_037",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Mạng nơ-ron nhân tạo (Artificial Neural Network) được lấy cảm hứng từ cấu trúc nào?",
    "options": [
      "A. Cấu trúc mạng lưới đường giao thông tại các đô thị lớn trên thế giới.",
      "B. Hệ thống thần kinh và các tế bào não bộ sinh học của con người.",
      "C. Các liên kết hóa học giữa các nguyên tử trong một phân tử chất lỏng.",
      "D. Cách tổ chức thư mục và tập tin trong hệ điều hành của máy tính cá nhân."
    ],
    "correct_option": "B",
    "explanation": "Mạng nơ-ron nhân tạo được mô phỏng dựa trên cách thức hoạt động và liên kết của các tế bào thần kinh (neuron) sinh học trong não bộ con người."
  },
  {
    "id": "Q_MOD_C_038",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "generative-ai"
    ],
    "content": "Thuật ngữ 'Generative AI' (AI tạo sinh) dùng để chỉ những hệ thống AI có khả năng gì?",
    "options": [
      "A. Tự động sao lưu dữ liệu của máy tính lên các dịch vụ đám mây an toàn.",
      "B. Tạo ra nội dung mới như văn bản, hình ảnh, âm thanh từ yêu cầu của người dùng.",
      "C. Quét và tối ưu hóa hệ thống phần cứng để tăng tốc độ xử lý của máy tính.",
      "D. Kết nối các thiết bị thông minh trong nhà thành một hệ thống điều khiển chung."
    ],
    "correct_option": "B",
    "explanation": "AI tạo sinh (Generative AI) là loại công nghệ AI có khả năng tự động tạo ra nội dung hoàn toàn mới (như đoạn văn, bức tranh, bài nhạc) dựa trên dữ liệu đã được học."
  },
  {
    "id": "Q_MOD_C_039",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Trong các hệ thống gợi ý sản phẩm, thuật ngữ 'Cold Start' (Khởi đầu lạnh) nói về khó khăn nào?",
    "options": [
      "A. Hệ thống máy chủ bị tắt đột ngột do nhiệt độ phòng máy xuống quá thấp trong mùa đông.",
      "B. Khó khăn khi gợi ý sản phẩm cho người dùng mới vì chưa có dữ liệu lịch sử của họ.",
      "C. Việc ứng dụng chạy quá chậm trong những giây đầu tiên khi người dùng mở điện thoại.",
      "D. Sự cố mất kết nối mạng internet giữa ứng dụng của người dùng và hệ thống cơ sở dữ liệu."
    ],
    "correct_option": "B",
    "explanation": "Hiện tượng 'Khởi đầu lạnh' (Cold Start) là thử thách phổ biến của hệ thống gợi ý khi gặp người dùng mới hoặc sản phẩm mới vì thiếu dữ liệu lịch sử tương tác để đưa ra đề xuất chính xác."
  },
  {
    "id": "Q_MOD_C_040",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Khi bạn nói chuyện với trợ lý ảo bằng tiếng Việt và nó trả lời bạn bằng tiếng Việt nói, hệ thống đã thực hiện quy trình xử lý chính nào?",
    "options": [
      "A. Nhận diện giọng nói, xử lý ngôn ngữ tự nhiên và tổng hợp giọng nói.",
      "B. Chỉ cần sử dụng camera để quét các cử chỉ khuôn mặt của người nói.",
      "C. Chụp ảnh màn hình điện thoại và phân tích các ký tự hiển thị trên đó.",
      "D. Tự động kết nối với tổng đài viên là con người để họ trả lời thay máy."
    ],
    "correct_option": "A",
    "explanation": "Quy trình này gồm 3 bước: chuyển âm thanh giọng nói thành chữ (Speech-to-Text), xử lý hiểu và sinh câu trả lời bằng chữ (NLP), và phát câu trả lời thành âm thanh (Text-to-Speech)."
  },
  {
    "id": "Q_MOD_C_041",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "'Dữ liệu bị gán nhãn sai' trong tập dữ liệu huấn luyện sẽ gây ra hậu quả gì cho mô hình AI?",
    "options": [
      "A. Mô hình sẽ chạy nhanh hơn nhưng tốn nhiều dung lượng bộ nhớ hơn.",
      "B. Mô hình sẽ học sai quy luật và đưa ra các dự đoán thiếu chính xác.",
      "C. Mô hình sẽ tự động sửa lại toàn bộ nhãn bị sai thành nhãn đúng.",
      "D. Mô hình không thể khởi động được trên bất kỳ hệ thống máy tính nào."
    ],
    "correct_option": "B",
    "explanation": "Nếu dữ liệu đầu vào chứa nhiều nhãn sai lệch (nhiễu), mô hình AI sẽ học theo những thông tin sai lệch đó, dẫn đến việc đưa ra các dự đoán sai lầm trên thực tế."
  },
  {
    "id": "Q_MOD_C_042",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Khi người dùng nhấn nút 'Không quan tâm' vào một gợi ý video, hệ thống AI nên làm gì tiếp theo?",
    "options": [
      "A. Tiếp tục hiển thị video đó nhiều lần hơn để thuyết phục người dùng xem thử.",
      "B. Giảm tần suất xuất hiện của các video có chủ đề tương tự đối với người dùng này.",
      "C. Tự động khóa tài khoản của người dùng vì họ đã từ chối gợi ý của hệ thống.",
      "D. Xóa bỏ hoàn toàn toàn bộ lịch sử xem video trước đây của người dùng này khỏi máy."
    ],
    "correct_option": "B",
    "explanation": "Hành động 'Không quan tâm' là phản hồi tường minh của người dùng thể hiện sự từ chối. Hệ thống AI cần cập nhật sở thích này để lọc bỏ các nội dung tương tự, cải thiện UX."
  },
  {
    "id": "Q_MOD_C_043",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Đâu là định nghĩa đơn giản về 'Thị giác máy tính' (Computer Vision)?",
    "options": [
      "A. Khả năng máy tính có thể nghe và phân biệt được các loại âm thanh trong phòng.",
      "B. Khả năng máy tính có thể nhìn, hiểu và phân tích thông tin từ hình ảnh hoặc video.",
      "C. Phần mềm giúp bảo vệ mắt của lập trình viên khi làm việc lâu trước màn hình.",
      "D. Thiết bị kính thông minh giúp tăng độ sáng cho màn hình máy tính cá nhân."
    ],
    "correct_option": "B",
    "explanation": "Thị giác máy tính (Computer Vision) là lĩnh vực AI giúp máy tính có năng lực xử lý, phân tích và trích xuất thông tin hữu ích từ các hình ảnh hoặc các video kỹ thuật số."
  },
  {
    "id": "Q_MOD_C_044",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Trong NLP, tác vụ phân tích cảm xúc (Sentiment Analysis) giúp doanh nghiệp biết được điều gì từ phản hồi của khách hàng?",
    "options": [
      "A. Số lượng ký tự trung bình mà khách hàng nhập vào khi viết đánh giá.",
      "B. Ý kiến của khách hàng là tích cực, tiêu cực hay trung tính đối với sản phẩm.",
      "C. Địa chỉ ip và vị trí địa lý của khách hàng khi thực hiện viết nhận xét.",
      "D. Tốc độ gõ bàn phím của khách hàng khi họ để lại phản hồi trên website."
    ],
    "correct_option": "B",
    "explanation": "Phân tích cảm xúc giúp phân loại thái độ, cảm xúc của khách hàng qua văn bản phản hồi là khen (tích cực), chê (tiêu cực) hay bình thường (trung tính)."
  },
  {
    "id": "Q_MOD_C_045",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Tại sao việc bảo mật dữ liệu cá nhân của người dùng là bắt buộc khi phát triển các sản phẩm AI?",
    "options": [
      "A. Để hạn chế số lượng người dùng truy cập vào ứng dụng nhằm tránh quá tải hệ thống.",
      "B. Để tuân thủ pháp luật, bảo vệ quyền riêng tư và xây dựng lòng tin với khách hàng.",
      "C. Để giúp cho thuật toán học máy chạy nhanh hơn và chính xác hơn gấp nhiều lần.",
      "D. Để lập trình viên có thể bán thông tin cá nhân đó cho các bên thứ ba kiếm lời."
    ],
    "correct_option": "B",
    "explanation": "Bảo vệ dữ liệu cá nhân là yêu cầu bắt buộc về mặt đạo đức và pháp lý (như luật bảo vệ dữ liệu), đồng thời tạo dựng lòng tin của khách hàng khi sử dụng sản phẩm AI."
  },
  {
    "id": "Q_MOD_C_046",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "unsupervised-learning"
    ],
    "content": "Thuật toán K-Means trong học không giám sát thường được dùng để làm gì?",
    "options": [
      "A. Dự đoán chính xác giá nhà đất trong tương lai dựa trên dữ liệu lịch sử cũ.",
      "B. Phân nhóm các điểm dữ liệu tương đồng vào chung các cụm mà không cần nhãn.",
      "C. Dịch tự động các câu văn bản tiếng Anh sang tiếng Pháp hoặc tiếng Việt.",
      "D. Nhận diện biển số xe máy từ hình ảnh camera giao thông chụp được ngoài đường."
    ],
    "correct_option": "B",
    "explanation": "K-Means là thuật toán gom cụm (Clustering) phổ biến trong học không giám sát, hoạt động bằng cách nhóm các mẫu dữ liệu có đặc điểm giống nhau vào chung một cụm."
  },
  {
    "id": "Q_MOD_C_047",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Trong các loại trí tuệ nhân tạo, 'Trí tuệ nhân tạo tổng hợp' (Artificial General Intelligence - AGI) được định nghĩa là gì?",
    "options": [
      "A. Hệ thống AI chỉ có thể chơi cờ vua và không làm được việc gì khác ngoài cờ vua.",
      "B. Hệ thống AI có khả năng hiểu, học và thực hiện bất kỳ nhiệm vụ trí tuệ nào như con người.",
      "C. Phần mềm diệt virus tự động quét toàn bộ hệ thống máy tính khi có kết nối mạng.",
      "D. Công cụ tìm kiếm từ khóa trên mạng internet phổ biến nhất hiện nay trên thế giới."
    ],
    "correct_option": "B",
    "explanation": "Trí tuệ nhân tạo tổng hợp (AGI) là cấp độ AI thông minh vượt qua AI hẹp, có khả năng tư duy, tự học hỏi và giải quyết đa dạng mọi công việc trí óc tương tự một con người."
  },
  {
    "id": "Q_MOD_C_048",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Tại sao một ứng dụng AI cần thiết kế tính năng khiếu nại (ví dụ: nút 'Báo cáo lỗi') cho người dùng?",
    "options": [
      "A. Để người dùng tự sửa đổi mã nguồn của thuật toán học máy theo ý muốn của họ.",
      "B. Để thu thập phản hồi, sửa lỗi hệ thống và cải thiện chất lượng dịch vụ của AI.",
      "C. Để tăng số lượng quảng cáo hiển thị trên màn hình thiết bị của người sử dụng.",
      "D. Để hệ thống tự động trừ tiền trong tài khoản của người dùng khi họ báo lỗi."
    ],
    "correct_option": "B",
    "explanation": "Vì mô hình AI không phải lúc nào cũng dự đoán đúng 100%, thiết kế cơ chế báo lỗi giúp doanh nghiệp thu thập dữ liệu về các sai sót của AI để cải tiến mô hình."
  },
  {
    "id": "Q_MOD_C_049",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Mô hình AI nhận diện khuôn mặt điểm danh nhân viên hoạt động kém vào mùa đông vì mọi người đeo khẩu trang kín. Hướng khắc phục tốt nhất về mặt sản phẩm là gì?",
    "options": [
      "A. Yêu cầu toàn bộ nhân viên phải cởi bỏ khẩu trang trước khi bước vào văn phòng.",
      "B. Thu thập thêm hình ảnh nhân viên đeo khẩu trang để huấn luyện lại mô hình AI.",
      "C. Thay thế hệ thống nhận diện khuôn mặt bằng hệ thống quét vân tay truyền thống.",
      "D. Tắt hoàn toàn tính năng bảo mật bằng khuôn mặt và mở cửa tự do cho mọi người."
    ],
    "correct_option": "B",
    "explanation": "Thay vì bắt người dùng thay đổi thói quen thiết yếu, việc thu thập dữ liệu huấn luyện sát với thực tế cuộc sống giúp mô hình nhận diện tốt hơn ngay cả khi khuôn mặt bị che một phần."
  },
  {
    "id": "Q_MOD_C_050",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Công nghệ dịch máy (Machine Translation) như Google Dịch hoạt động dựa trên lĩnh vực nào của AI?",
    "options": [
      "A. Thị giác máy tính (Computer Vision).",
      "B. Xử lý ngôn ngữ tự nhiên (NLP).",
      "C. Hệ thống định vị toàn cầu (GPS).",
      "D. Khai phá dữ liệu âm thanh số."
    ],
    "correct_option": "B",
    "explanation": "Dịch thuật văn bản liên quan đến việc hiểu ngữ nghĩa và ngữ pháp của các ngôn ngữ khác nhau, thuộc lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP)."
  },
  {
    "id": "Q_MOD_C_051",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Trong học máy, mô hình hồi quy tuyến tính (Linear Regression) thường dùng để dự đoán loại giá trị nào?",
    "options": [
      "A. Một nhãn phân loại dạng đúng hoặc sai (như email rác hay không rác).",
      "B. Một giá trị số liên tục (như dự đoán nhiệt độ hoặc giá cả sản phẩm).",
      "C. Một danh sách các hình ảnh có chứa khuôn mặt của người nổi tiếng trên mạng.",
      "D. Một đoạn hội thoại tự động giữa robot chăm sóc khách hàng và người dùng."
    ],
    "correct_option": "B",
    "explanation": "Hồi quy (Regression) là bài toán dự đoán một giá trị số thực liên tục (ví dụ: dự đoán chiều cao, giá nhà, nhiệt độ ngày mai) dựa trên các thuộc tính đầu vào."
  },
  {
    "id": "Q_MOD_C_052",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Sự khác biệt chính giữa Trí tuệ nhân tạo (AI) và lập trình truyền thống là gì?",
    "options": [
      "A. Lập trình truyền thống yêu cầu viết sẵn các luật cụ thể, còn AI tự học từ dữ liệu.",
      "B. AI chỉ hoạt động trên điện thoại di động, lập trình truyền thống chỉ chạy trên máy tính.",
      "C. Lập trình truyền thống chạy nhanh hơn AI gấp hàng ngàn lần trên tất cả thiết bị.",
      "D. AI không cần sử dụng đến dòng điện hoặc pin để hoạt động như lập trình truyền thống."
    ],
    "correct_option": "A",
    "explanation": "Lập trình truyền thống dựa vào con người viết rõ các quy tắc logic bằng code. AI dựa vào thuật toán tự học hỏi và tìm ra quy luật từ dữ liệu được cung cấp."
  },
  {
    "id": "Q_MOD_C_053",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Để đánh giá mức độ hài lòng của người dùng với câu trả lời của trợ lý ảo, chỉ số nào sau đây được sử dụng phổ biến?",
    "options": [
      "A. Tổng số lượng linh kiện điện tử cấu thành nên bộ vi xử lý của điện thoại.",
      "B. Chỉ số hài lòng của khách hàng (CSAT) thông qua các câu hỏi khảo sát nhanh.",
      "C. Dung lượng bộ nhớ của tệp tin lưu trữ lịch sử cài đặt ứng dụng trên máy.",
      "D. Tốc độ quạt tản nhiệt của máy chủ tại trung tâm dữ liệu khi chạy thuật toán."
    ],
    "correct_option": "B",
    "explanation": "Chỉ số CSAT (Customer Satisfaction Score) đo lường trực tiếp độ hài lòng của khách hàng bằng cách hỏi họ tự đánh giá thang điểm sau khi sử dụng dịch vụ."
  },
  {
    "id": "Q_MOD_C_054",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "search-engine"
    ],
    "content": "Khi bạn gõ từ khóa tìm kiếm trên Google và thấy danh sách kết quả, công nghệ nào đã được sử dụng?",
    "options": [
      "A. Công nghệ nhận diện giọng nói tự động.",
      "B. Hệ thống tìm kiếm và xếp hạng thông tin.",
      "C. Mô hình tự động tạo hình ảnh từ văn bản.",
      "D. Hệ thống tự động lái xe ô tô thông minh."
    ],
    "correct_option": "B",
    "explanation": "Google Search sử dụng công cụ tìm kiếm để quét các cơ sở dữ liệu khổng lồ của web, kết hợp thuật toán xếp hạng để đưa ra các kết quả phù hợp nhất với từ khóa."
  },
  {
    "id": "Q_MOD_C_055",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Đâu là một ví dụ về ứng dụng AI trong cuộc sống hàng ngày?",
    "options": [
      "A. Chiếc nồi cơm điện tự động ngắt điện khi nước trong nồi sôi và cạn hết.",
      "B. Ứng dụng bản đồ số tự động gợi ý lộ trình di chuyển tối ưu tránh tắc đường.",
      "C. Chiếc quạt điện thông thường quay đều khi người dùng nhấn vào nút công tắc.",
      "D. Cuốn sổ tay ghi chép lịch công tác hàng tuần của nhân viên văn phòng bằng bút."
    ],
    "correct_option": "B",
    "explanation": "Ứng dụng bản đồ (như Google Maps) sử dụng AI phân tích dữ liệu giao thông thời gian thực để gợi ý lộ trình đi lại nhanh và tránh các đoạn đường kẹt xe."
  },
  {
    "id": "Q_MOD_C_056",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Tại sao các ứng dụng AI thường hiển thị dòng chữ cảnh báo 'AI có thể đưa ra câu trả lời chưa chính xác'?",
    "options": [
      "A. Để tránh các rủi ro pháp lý và nhắc nhở người dùng tự kiểm chứng thông tin quan trọng.",
      "B. Để thuyết phục người dùng nâng cấp lên phiên bản trả phí đắt tiền hơn của phần mềm.",
      "C. Để chứng tỏ rằng hệ thống AI này không được xây dựng bởi các kỹ sư công nghệ chuyên nghiệp.",
      "D. Để giải thích lý do tại sao ứng dụng của họ thường xuyên bị mất kết nối mạng internet."
    ],
    "correct_option": "A",
    "explanation": "Mô hình AI (đặc biệt là LLM) có thể bị hiện tượng ảo tưởng (Hallucination) - sinh ra các thông tin sai lệch. Cảnh báo này giúp người dùng cẩn trọng và giảm thiểu rủi ro pháp lý."
  },
  {
    "id": "Q_MOD_C_057",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Nhận diện ký tự quang học (OCR) là công nghệ dùng để làm gì?",
    "options": [
      "A. Chuyển đổi chữ viết trong hình ảnh hoặc tài liệu quét thành văn bản số có thể chỉnh sửa.",
      "B. Nghe các bản nhạc và tự động ghi lại lời bài hát dưới dạng các nốt nhạc trên giấy.",
      "C. Vẽ ra các bức tranh nghệ thuật dựa trên sở thích và yêu cầu của người sử dụng ứng dụng.",
      "D. Phát hiện các lỗi phần cứng trong bảng mạch điện tử của máy tính cá nhân bằng tia hồng ngoại."
    ],
    "correct_option": "A",
    "explanation": "OCR (Optical Character Recognition) là công nghệ nhận dạng hình ảnh chữ viết (viết tay hoặc in) trên giấy tờ, ảnh chụp rồi số hóa chúng thành văn bản text."
  },
  {
    "id": "Q_MOD_C_058",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "llm"
    ],
    "content": "Thuật ngữ 'Prompt' trong sử dụng ChatGPT được hiểu là gì?",
    "options": [
      "A. Câu lệnh hoặc câu hỏi yêu cầu mà người dùng nhập vào để AI trả lời.",
      "B. Mật khẩu dùng để đăng nhập vào tài khoản cá nhân trên trang web của AI.",
      "C. Tốc độ kết nối mạng internet giữa máy tính của người dùng và máy chủ AI.",
      "D. Tên của công ty phát triển ra các mô hình ngôn ngữ lớn hiện đại nhất."
    ],
    "correct_option": "A",
    "explanation": "Prompt (Câu lệnh/Từ gợi ý) là phần văn bản đầu vào do người dùng nhập để hướng dẫn, yêu cầu mô hình AI sinh ra câu trả lời mong muốn."
  },
  {
    "id": "Q_MOD_C_059",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "unsupervised-learning"
    ],
    "content": "Trong học máy, việc gom cụm các bài viết cùng chủ đề thời sự mà không có nhãn trước là bài toán thuộc loại nào?",
    "options": [
      "A. Học có giám sát (Supervised Learning).",
      "B. Học không giám sát (Unsupervised Learning).",
      "C. Nhận diện giọng nói tiếng Việt tự động.",
      "D. Tự động chuyển văn bản thành giọng nói."
    ],
    "correct_option": "B",
    "explanation": "Gom cụm các văn bản có nội dung tương đồng khi không có nhãn chỉ đường trước là một bài toán của Học không giám sát."
  },
  {
    "id": "Q_MOD_C_060",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "llm"
    ],
    "content": "Khi sử dụng ChatGPT, nếu bạn yêu cầu nó 'Hãy đóng vai một giáo viên tiếng Anh', bạn đang áp dụng kỹ thuật gì?",
    "options": [
      "A. Cập nhật mã nguồn và cài đặt lại toàn bộ hệ thống của ChatGPT.",
      "B. Sử dụng Prompt đóng vai (Role-playing Prompt) để định hình cách trả lời.",
      "C. Lập trình lại các tham số học máy bên trong mạng nơ-ron của mô hình.",
      "D. Xóa bỏ lịch sử trò chuyện cũ để tăng tốc độ phản hồi của hệ thống chat."
    ],
    "correct_option": "B",
    "explanation": "Prompt đóng vai giúp định hình phong cách, giọng điệu và giới hạn phạm vi kiến thức câu trả lời của mô hình ngôn ngữ lớn phù hợp với ngữ cảnh mong muốn."
  },
  {
    "id": "Q_MOD_C_061",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Ứng dụng lọc thư rác phân loại đúng một email rác là 'Thư rác'. Đây là trường hợp nào?",
    "options": [
      "A. True Positive (Dương tính thật).",
      "B. False Positive (Dương tính giả).",
      "C. True Negative (Âm tính thật).",
      "D. False Negative (Âm tính giả)."
    ],
    "correct_option": "A",
    "explanation": "True Positive (Dương tính thật) là trường hợp mô hình dự báo chính xác một mẫu thực sự thuộc nhóm cần tìm kiếm/phát hiện (ở đây là thư rác)."
  },
  {
    "id": "Q_MOD_C_062",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Ứng dụng lọc thư rác phân loại đúng một email công việc bình thường là 'Không phải thư rác'. Đây là trường hợp nào?",
    "options": [
      "A. True Positive (Dương tính thật).",
      "B. False Positive (Dương tính giả).",
      "C. True Negative (Âm tính thật).",
      "D. False Negative (Âm tính giả)."
    ],
    "correct_option": "C",
    "explanation": "True Negative (Âm tính thật) là trường hợp mô hình dự báo chính xác một mẫu bình thường (không phải đối tượng cần lọc) là bình thường."
  },
  {
    "id": "Q_MOD_C_063",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Một cửa hàng muốn dùng AI để dự đoán số lượng khách hàng đến cửa hàng vào ngày mai dựa trên lịch sử 3 năm qua. Đây thuộc loại bài toán nào?",
    "options": [
      "A. Phân loại nhãn (Classification).",
      "B. Hồi quy dự báo (Regression).",
      "C. Gom cụm dữ liệu (Clustering).",
      "D. Nhận diện hình ảnh (Computer Vision)."
    ],
    "correct_option": "B",
    "explanation": "Số lượng khách hàng là một giá trị số liên tục, do đó bài toán dự đoán giá trị số này dựa trên lịch sử thời gian thuộc nhóm bài toán Hồi quy (Regression)."
  },
  {
    "id": "Q_MOD_C_064",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Nhận diện biển số xe từ camera giao thông để phạt nguội xe vượt đèn đỏ thuộc lĩnh vực nào của AI?",
    "options": [
      "A. Xử lý ngôn ngữ tự nhiên (NLP).",
      "B. Thị giác máy tính (Computer Vision).",
      "C. Công nghệ định vị toàn cầu (GPS).",
      "D. Tổng hợp giọng nói nhân tạo (TTS)."
    ],
    "correct_option": "B",
    "explanation": "Việc phân tích dữ liệu hình ảnh/video từ camera để nhận diện và đọc biển số xe thuộc phạm vi ứng dụng của lĩnh vực Thị giác máy tính (Computer Vision)."
  },
  {
    "id": "Q_MOD_C_065",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Tại sao chúng ta cần làm sạch dữ liệu (loại bỏ dữ liệu trùng lặp, dữ liệu lỗi) trước khi huấn luyện mô hình AI?",
    "options": [
      "A. Để tăng kích thước của tập dữ liệu huấn luyện lên mức lớn nhất có thể.",
      "B. Để đảm bảo mô hình AI học được các quy luật đúng đắn từ dữ liệu sạch.",
      "C. Để giúp cho máy tính tiết kiệm điện năng tiêu thụ khi cắm sạc sử dụng.",
      "D. Để tránh việc người dùng trái phép truy cập vào hệ thống mã nguồn của AI."
    ],
    "correct_option": "B",
    "explanation": "Làm sạch dữ liệu giúp loại bỏ thông tin sai lệch, trùng lặp hoặc nhiễu, từ đó giúp mô hình AI tìm ra các quy luật chính xác và có hiệu năng dự đoán tốt hơn."
  },
  {
    "id": "Q_MOD_C_066",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Một hệ thống gợi ý sản phẩm tốt cần giải quyết vấn đề gì để tránh gây nhàm chán cho khách hàng?",
    "options": [
      "A. Liên tục gợi ý đi gợi ý lại một món duy nhất mà khách hàng từng thích.",
      "B. Cân bằng giữa việc gợi ý sản phẩm quen thuộc và đề xuất thêm sản phẩm mới lạ.",
      "C. Tắt hoàn toàn hệ thống gợi ý tự động và chuyển sang hiển thị ngẫu nhiên.",
      "D. Yêu cầu khách hàng tự nhập tay danh sách các sản phẩm họ muốn xem mỗi ngày."
    ],
    "correct_option": "B",
    "explanation": "Hệ thống gợi ý tốt cần dung hòa giữa việc đề xuất những thứ khách hàng đã thích (Khai thác) và đưa thêm các sản phẩm mới có liên quan (Khám phá) để tăng sự đa dạng."
  },
  {
    "id": "Q_MOD_C_067",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Thuật ngữ 'Computer Vision' trong tiếng Anh có nghĩa là gì trong tiếng Việt?",
    "options": [
      "A. Xử lý ngôn ngữ tự nhiên.",
      "B. Thị giác máy tính.",
      "C. Nhận dạng giọng nói.",
      "D. Phân tích dữ liệu số."
    ],
    "correct_option": "B",
    "explanation": "Computer Vision dịch sang tiếng Việt có nghĩa là Thị giác máy tính, lĩnh vực nghiên cứu cách thu thập và phân tích thông tin hình ảnh của máy tính."
  },
  {
    "id": "Q_MOD_C_068",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Khi sử dụng Google Dịch, việc bạn nhập văn bản tiếng Việt và hệ thống trả về văn bản tiếng Anh là ứng dụng của:",
    "options": [
      "A. Xử lý ngôn ngữ tự nhiên (NLP).",
      "B. Nhận diện khuôn mặt tự động.",
      "C. Hệ thống tự động lái xe ô tô.",
      "D. Công nghệ quét mã vạch sản phẩm."
    ],
    "correct_option": "A",
    "explanation": "Dịch thuật văn bản chữ viết là tác vụ cốt lõi của lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP) nhằm chuyển đổi ngữ nghĩa giữa các ngôn ngữ con người."
  },
  {
    "id": "Q_MOD_C_069",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Khái niệm 'Huấn luyện mô hình' (Model Training) trong học máy nghĩa là gì?",
    "options": [
      "A. Quá trình cài đặt ứng dụng AI lên điện thoại của người sử dụng.",
      "B. Quá trình cho mô hình học từ dữ liệu để tự điều chỉnh các tham số.",
      "C. Quá trình nhân viên nhập thủ công các câu trả lời vào phần mềm.",
      "D. Quá trình kiểm tra lỗi phần cứng của máy tính trước khi bật máy."
    ],
    "correct_option": "B",
    "explanation": "Huấn luyện mô hình (Training) là quá trình nạp dữ liệu cho mô hình học máy chạy thuật toán để tự tối ưu các trọng số/tham số phù hợp với quy luật của dữ liệu."
  },
  {
    "id": "Q_MOD_C_070",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Để đo lường tỷ lệ người dùng nhấp vào một liên kết video được gợi ý trên YouTube, chỉ số nào được sử dụng?",
    "options": [
      "A. Tỷ lệ nhấp chuột (Click-Through Rate - CTR).",
      "B. Tổng số lượng video có trên hệ thống YouTube.",
      "C. Dung lượng bộ nhớ của tệp tin video được tải lên.",
      "D. Thời lượng trung bình của một video trên YouTube."
    ],
    "correct_option": "A",
    "explanation": "CTR (Click-Through Rate - Tỷ lệ nhấp chuột) là tỷ lệ số lần người dùng nhấn vào một đường link trên tổng số lần đường link đó hiển thị trước mắt họ."
  },
  {
    "id": "Q_MOD_C_071",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Nếu dữ liệu huấn luyện của mô hình AI nhận diện khuôn mặt chỉ chứa ảnh của nam giới, mô hình sẽ gặp lỗi gì khi sử dụng thực tế?",
    "options": [
      "A. Mô hình sẽ chạy chậm hơn đáng kể khi quét khuôn mặt của nam giới.",
      "B. Mô hình sẽ nhận diện kém chính xác hơn đối với khuôn mặt của nữ giới.",
      "C. Mô hình sẽ tự động từ chối hoạt động vào những ngày thời tiết lạnh giá.",
      "D. Mô hình sẽ tự động xóa toàn bộ dữ liệu hình ảnh có trong máy tính của bạn."
    ],
    "correct_option": "B",
    "explanation": "Mất cân bằng dữ liệu nghiêm trọng khiến mô hình chỉ học tốt các đặc điểm của nhóm đa số (nam giới) và hoạt động kém hiệu quả trên nhóm thiểu số bị bỏ quên (nữ giới)."
  },
  {
    "id": "Q_MOD_C_072",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Trong học máy, thuật ngữ 'Feature' (Đặc trưng) được hiểu là gì?",
    "options": [
      "A. Tên của lập trình viên tham gia xây dựng thuật toán học máy.",
      "B. Thuộc tính hoặc thông tin đầu vào dùng để mô tả một mẫu dữ liệu.",
      "C. Bản cập nhật phần mềm mới nhất của hệ điều hành trên máy tính.",
      "D. Mật khẩu bảo mật dùng để truy cập vào hệ thống máy chủ dữ liệu."
    ],
    "correct_option": "B",
    "explanation": "Đặc trưng (Feature) là các thông tin đầu vào được đo lường hoặc trích xuất để mô tả đối tượng (ví dụ: chiều rộng cánh hoa, diện tích căn nhà, thời gian đăng bài)."
  },
  {
    "id": "Q_MOD_C_073",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Đâu là một ví dụ về ứng dụng AI trong chăm sóc sức khỏe?",
    "options": [
      "A. Phần mềm quản lý lịch trực của các bác sĩ trong bệnh viện hàng tuần.",
      "B. AI phân tích hình ảnh X-quang để hỗ trợ bác sĩ phát hiện khối u phổi.",
      "C. Thiết bị đo nhiệt độ cơ thể bằng cách đặt trực tiếp dưới nách người.",
      "D. Sổ tay ghi chép đơn thuốc của bệnh nhân do bác sĩ viết bằng tay."
    ],
    "correct_option": "B",
    "explanation": "Phân tích ảnh X-quang, MRI bằng mô hình thị giác máy tính là ứng dụng tiêu biểu của AI giúp các bác sĩ chẩn đoán bệnh nhanh chóng và chính xác hơn."
  },
  {
    "id": "Q_MOD_C_074",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "computer-vision"
    ],
    "content": "Một ứng dụng AI phát hiện lỗi sản phẩm trên băng chuyền nhà máy được gọi là ứng dụng của lĩnh vực nào?",
    "options": [
      "A. Xử lý ngôn ngữ tự nhiên (NLP).",
      "B. Thị giác máy tính (Computer Vision).",
      "C. Phân tích dữ liệu tài chính số.",
      "D. Hệ thống định vị toàn cầu (GPS)."
    ],
    "correct_option": "B",
    "explanation": "Ứng dụng này cần phân tích hình ảnh sản phẩm từ camera trên băng chuyền để tìm vết nứt, lỗi màu sắc, thuộc lĩnh vực Thị giác máy tính."
  },
  {
    "id": "Q_MOD_C_075",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Khái niệm 'Học tăng cường' (Reinforcement Learning) là phương pháp học máy dựa trên cơ chế nào?",
    "options": [
      "A. Học bằng cách ghi nhớ toàn bộ các quy tắc logic do con người thiết lập sẵn.",
      "B. Học thông qua thử và sai để tối đa hóa phần thưởng nhận được từ môi trường.",
      "C. Học bằng cách phân nhóm các điểm dữ liệu tương đồng mà không cần nhãn trước.",
      "D. Học bằng cách sao chép mã nguồn của các mô hình AI khác có sẵn trên mạng."
    ],
    "correct_option": "B",
    "explanation": "Học tăng cường là việc huấn luyện mô hình (agent) tự động tương tác với môi trường, thực hiện các hành động thử và sai để nhận điểm thưởng/phạt và rút ra chiến lược tối ưu."
  },
  {
    "id": "Q_MOD_C_076",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "overfitting"
    ],
    "content": "Trong học máy, thuật ngữ 'Overfitting' trong tiếng Việt thường được gọi là gì?",
    "options": [
      "A. Chưa khớp (Thiếu khớp).",
      "B. Quá khớp (Học vẹt).",
      "C. Tối ưu hóa (Khớp chuẩn).",
      "D. Tiêu biến đạo hàm (Mất khớp)."
    ],
    "correct_option": "B",
    "explanation": "Overfitting được dịch phổ biến là 'Quá khớp' (hay mô tả nôm na là 'Học vẹt'), mô tả tình trạng mô hình quá bám sát dữ liệu cũ mà mất khả năng dự đoán dữ liệu mới."
  },
  {
    "id": "Q_MOD_C_077",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "llm"
    ],
    "content": "Khi xây dựng chatbot tư vấn tuyển sinh cho trường học, kỹ thuật RAG giúp hạn chế lỗi gì của LLM?",
    "options": [
      "A. Giúp hạn chế lỗi dịch thuật sai ngữ pháp tiếng Việt thông dụng.",
      "B. Giúp hạn chế hiện tượng chatbot bịa đặt thông tin không có thật.",
      "C. Giúp tăng tốc độ kết nối internet của thiết bị di động người dùng.",
      "D. Giúp giảm chi phí mua sắm các thiết bị phần cứng máy chủ đắt tiền."
    ],
    "correct_option": "B",
    "explanation": "RAG (Retrieval-Augmented Generation) tìm kiếm tài liệu chính xác từ cơ sở dữ liệu của trường rồi gửi kèm vào prompt làm ngữ cảnh, giúp ngăn chatbot bịa đặt thông tin lung tung."
  },
  {
    "id": "Q_MOD_C_078",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "nlp"
    ],
    "content": "Đâu là một ứng dụng của công nghệ Tổng hợp giọng nói (Text-to-Speech)?",
    "options": [
      "A. Chuyển đổi một đoạn ghi âm giọng nói thành văn bản chữ viết trên màn hình.",
      "B. Chuyển đổi một đoạn văn bản chữ viết thành giọng nói phát ra qua loa máy.",
      "C. Dịch tự động một văn bản từ tiếng Việt sang tiếng Hàn một cách chính xác.",
      "D. Nhận diện khuôn mặt của chủ nhân để tự động mở khóa màn hình điện thoại."
    ],
    "correct_option": "B",
    "explanation": "Tổng hợp giọng nói (Text-to-Speech - TTS) là công nghệ tự động chuyển đổi các ký tự văn bản chữ viết thành âm thanh giọng đọc nhân tạo của máy tính."
  },
  {
    "id": "Q_MOD_C_079",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Khi thiết kế giao diện hiển thị câu trả lời của ChatGPT, kiểu chữ chạy ra từng từ (streaming) mang lại lợi ích gì cho UX?",
    "options": [
      "A. Giúp tiết kiệm dung lượng pin cho thiết bị di động của người dùng tốt hơn.",
      "B. Giúp người dùng có cảm giác AI phản hồi nhanh hơn bằng cách đọc ngay từ đầu.",
      "C. Giúp loại bỏ hoàn toàn các lỗi chính tả có trong câu trả lời của mô hình AI.",
      "D. Giúp tăng độ dài của câu trả lời từ mô hình AI lên gấp hai đến ba lần cũ."
    ],
    "correct_option": "B",
    "explanation": "Thay vì bắt người dùng đợi vài chục giây để hiển thị cả đoạn văn dài, hiển thị streaming chữ giúp giảm bớt sự khó chịu do phải chờ đợi của người dùng."
  },
  {
    "id": "Q_MOD_C_080",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Tại sao các ứng dụng AI gợi ý sản phẩm cần thu thập phản hồi của người dùng?",
    "options": [
      "A. Để bán thông tin cá nhân của người dùng cho các công ty quảng cáo khác kiếm lời.",
      "B. Để liên tục cải thiện độ chính xác và chất lượng của các gợi ý trong tương lai.",
      "C. Để buộc người dùng phải trả thêm phí dịch vụ hàng tháng khi sử dụng ứng dụng.",
      "D. Để hệ thống tự động xóa bớt các dữ liệu cũ giúp tiết kiệm không gian lưu trữ."
    ],
    "correct_option": "B",
    "explanation": "Phản hồi của người dùng (thích, không thích, bỏ qua, mua hàng) là nguồn dữ liệu quý giá giúp thuật toán học máy cập nhật sở thích để đưa ra đề xuất tốt hơn lần sau."
  },
  {
    "id": "Q_MOD_C_081",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Đâu là một ví dụ về ứng dụng AI trong lĩnh vực tài chính?",
    "options": [
      "A. Máy rút tiền tự động ATM giúp khách hàng thực hiện rút tiền mặt nhanh chóng.",
      "B. AI phân tích lịch sử giao dịch để tự động phát hiện các thẻ bị nghi ngờ gian lận.",
      "C. Sổ tay ghi chép các khoản thu chi hàng ngày của hộ gia đình bằng bút mực.",
      "D. Phần mềm máy tính bỏ túi giúp học sinh thực hiện các phép toán cơ bản nhanh."
    ],
    "correct_option": "B",
    "explanation": "AI có khả năng phân tích hàng triệu giao dịch tài chính thời gian thực để tìm ra các mẫu hành vi bất thường, phát hiện và cảnh báo sớm các giao dịch lừa đảo."
  },
  {
    "id": "Q_MOD_C_082",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "supervised-learning"
    ],
    "content": "Thuật ngữ 'Supervised Learning' trong tiếng Anh có nghĩa là gì trong tiếng Việt?",
    "options": [
      "A. Học máy không giám sát.",
      "B. Học máy có giám sát.",
      "C. Học máy tăng cường.",
      "D. Học máy bán giám sát."
    ],
    "correct_option": "B",
    "explanation": "Supervised Learning dịch sang tiếng Việt nghĩa là Học có giám sát (phương pháp học máy dựa trên dữ liệu đầu vào đã có sẵn nhãn kết quả đúng)."
  },
  {
    "id": "Q_MOD_C_083",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "unsupervised-learning"
    ],
    "content": "Trong học máy, thuật ngữ 'Unsupervised Learning' trong tiếng Anh có nghĩa là gì trong tiếng Việt?",
    "options": [
      "A. Học máy không giám sát.",
      "B. Học máy có giám sát.",
      "C. Học máy tăng cường.",
      "D. Học máy bán giám sát."
    ],
    "correct_option": "A",
    "explanation": "Unsupervised Learning dịch sang tiếng Việt nghĩa là Học không giám sát (phương pháp học máy làm việc với tập dữ liệu thô chưa được gán nhãn kết quả trước)."
  },
  {
    "id": "Q_MOD_C_084",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "metrics"
    ],
    "content": "Một mô hình phân loại ảnh chó và mèo dự đoán đúng 95 ảnh trong tổng số 100 ảnh kiểm thử. Độ chính xác của mô hình này là bao nhiêu phần trăm?",
    "options": [
      "A. Tám mươi lăm phần trăm.",
      "B. Chín mươi lăm phần trăm.",
      "C. Bảy mươi lăm phần trăm.",
      "D. Sáu mươi lăm phần trăm."
    ],
    "correct_option": "B",
    "explanation": "Độ chính xác (Accuracy) được tính bằng số kết quả dự đoán đúng chia cho tổng số kết quả kiểm tra: 95 / 100 = 0.95 (tức 95%)."
  },
  {
    "id": "Q_MOD_C_085",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Khi xây dựng một sản phẩm AI, bước đầu tiên và quan trọng nhất cần thực hiện là gì?",
    "options": [
      "A. Lập tức thuê các máy chủ đắt tiền nhất để chạy thử nghiệm thuật toán học máy.",
      "B. Xác định rõ vấn đề cần giải quyết và thu thập dữ liệu chất lượng liên quan.",
      "C. Viết các điều khoản sử dụng dài hàng ngàn trang để bắt người dùng cam kết.",
      "D. Quảng cáo sản phẩm trên các phương tiện truyền thông để tìm kiếm khách hàng."
    ],
    "correct_option": "B",
    "explanation": "Dữ liệu là cốt lõi của AI. Xác định đúng bài toán của người dùng và thu thập dữ liệu sạch, đúng chủ đề là điều kiện tiên quyết quyết định sự thành bại của sản phẩm."
  },
  {
    "id": "Q_MOD_C_086",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Trong thiết kế UX cho sản phẩm AI, khái niệm 'AI Explainability' nghĩa là gì?",
    "options": [
      "A. Khả năng giải thích lý do và cơ sở đằng sau các quyết định hoặc dự đoán của AI.",
      "B. Khả năng viết mã nguồn của lập trình viên một cách nhanh chóng và không có lỗi.",
      "C. Khả năng dịch tự động giao diện ứng dụng sang nhiều ngôn ngữ khác nhau trên đời.",
      "D. Khả năng tự động nâng cấp cấu hình phần cứng của thiết bị di động khi cần chạy."
    ],
    "correct_option": "A",
    "explanation": "AI Explainability (Trí tuệ nhân tạo giải thích được) là việc làm cho các dự đoán phức tạp của mô hình AI trở nên rõ ràng và dễ hiểu đối với con người sử dụng."
  },
  {
    "id": "Q_MOD_C_087",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Đâu là một ví dụ về định kiến dữ liệu (Bias) trong một hệ thống AI tuyển dụng?",
    "options": [
      "A. Hệ thống tự động sắp xếp hồ sơ ứng viên theo thời gian nộp từ mới đến cũ.",
      "B. Hệ thống tự động đánh giá thấp hồ sơ ứng viên nữ vì chỉ học từ dữ liệu nam giới.",
      "C. Hệ thống gửi email thông báo kết quả phỏng vấn tự động đến cho tất cả ứng viên.",
      "D. Hệ thống cho phép ứng viên cập nhật thông tin cá nhân trực tuyến trên trang web."
    ],
    "correct_option": "B",
    "explanation": "Khi tập dữ liệu chỉ chứa hồ sơ nam giới, AI sẽ học sai rằng nam giới phù hợp hơn nữ giới, gây ra sự phân biệt đối xử và đánh giá thấp bất công đối với ứng viên nữ."
  },
  {
    "id": "Q_MOD_C_088",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Trong học máy, dữ liệu bị thiếu (Missing Data) nên được xử lý thế nào trước khi huấn luyện?",
    "options": [
      "A. Giữ nguyên toàn bộ các giá trị thiếu đó mà không cần thực hiện bất kỳ xử lý nào.",
      "B. Loại bỏ hoặc điền các giá trị thay thế hợp lý (như giá trị trung bình) vào chỗ trống.",
      "C. Tự động tắt máy tính và ngừng toàn bộ quá trình phát triển mô hình AI lập tức.",
      "D. Nhân bản các dòng dữ liệu bị thiếu đó lên gấp nhiều lần để lấp đầy tập dữ liệu."
    ],
    "correct_option": "B",
    "explanation": "Dữ liệu bị khuyết thiếu gây lỗi cho nhiều thuật toán. Do đó, cần loại bỏ các dòng lỗi quá nhiều hoặc điền giá trị đại diện (như trung bình cộng) trước khi học."
  },
  {
    "id": "Q_MOD_C_089",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Khi phát triển ứng dụng AI tự động lái xe, yếu tố nào cần được ưu tiên hàng đầu?",
    "options": [
      "A. Thiết kế giao diện nghe nhạc thật đẹp mắt và nhiều tính năng giải trí trên xe.",
      "B. Sự an toàn tuyệt đối của hành khách trên xe và những người tham gia giao thông.",
      "C. Tốc độ di chuyển của xe phải luôn đạt mức tối đa trong mọi điều kiện đường xá.",
      "D. Màu sắc sơn bên ngoài của chiếc xe phải thật nổi bật để thu hút người đi đường."
    ],
    "correct_option": "B",
    "explanation": "Ứng dụng AI liên quan trực tiếp đến tính mạng con người như xe tự lái đòi hỏi mức độ an toàn và độ chính xác cực kỳ cao là ưu tiên số một."
  },
  {
    "id": "Q_MOD_C_090",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Một công cụ tìm kiếm trả về các kết quả không liên quan đến từ khóa mà người dùng nhập. Vấn đề này thuộc về chỉ số nào của sản phẩm?",
    "options": [
      "A. Độ trễ của hệ thống quá cao khi xử lý thông tin.",
      "B. Chất lượng và độ chính xác của kết quả tìm kiếm kém.",
      "C. Giao diện thiết kế của công cụ tìm kiếm chưa đẹp mắt.",
      "D. Dung lượng lưu trữ của máy chủ tìm kiếm bị quá tải."
    ],
    "correct_option": "B",
    "explanation": "Trả về thông tin không đúng nhu cầu tìm kiếm của người dùng trực tiếp phản ánh độ chính xác và chất lượng thuật toán tìm kiếm của sản phẩm đang bị kém."
  },
  {
    "id": "Q_MOD_C_091",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Thiết bị thông minh tự động điều chỉnh nhiệt độ điều hòa dựa trên số lượng người trong phòng là ứng dụng của:",
    "options": [
      "A. Trí tuệ nhân tạo (AI).",
      "B. Lập trình web cơ bản.",
      "C. Công cụ tìm kiếm từ khóa.",
      "D. Mạng xã hội trực tuyến."
    ],
    "correct_option": "A",
    "explanation": "Việc phân tích dữ liệu cảm biến và tự động đưa ra quyết định thay đổi nhiệt độ phòng một cách thông minh là ứng dụng thực tế của Trí tuệ nhân tạo (AI)."
  },
  {
    "id": "Q_MOD_C_092",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "overfitting"
    ],
    "content": "Trong học máy, thuật ngữ 'Underfitting' (Chưa khớp) xảy ra khi nào?",
    "options": [
      "A. Mô hình học quá kỹ các chi tiết nhiễu của dữ liệu huấn luyện ban đầu.",
      "B. Mô hình quá đơn giản nên không thể học được các quy luật của dữ liệu.",
      "C. Mô hình tự động nhân đôi kích thước của tập dữ liệu huấn luyện hiện tại.",
      "D. Mô hình chạy cực kỳ nhanh và chính xác trên mọi tập dữ liệu thực tế mới."
    ],
    "correct_option": "B",
    "explanation": "Underfitting (Chưa khớp) xảy ra khi mô hình quá đơn giản hoặc chưa được huấn luyện đủ, dẫn đến không thể nắm bắt được quy luật chung của cả tập dữ liệu huấn luyện."
  },
  {
    "id": "Q_MOD_C_093",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Tại sao việc đánh giá mô hình AI trên dữ liệu thực tế (Test set) lại cần thiết?",
    "options": [
      "A. Để giúp cho lập trình viên có thêm thời gian nghỉ ngơi trước khi ra mắt sản phẩm.",
      "B. Để đảm bảo mô hình AI hoạt động tốt và chính xác khi áp dụng vào thực tế cuộc sống.",
      "C. Để tăng dung lượng bộ nhớ của thiết bị di động cài đặt ứng dụng AI đó sau này.",
      "D. Để xóa bỏ hoàn toàn tất cả các mã nguồn cũ đã được viết trước đó của phần mềm."
    ],
    "correct_option": "B",
    "explanation": "Đánh giá trên tập kiểm thử (Test set) độc lập giúp chúng ta đo lường khách quan năng lực dự đoán thực tế của AI trên các dữ liệu mới mà nó chưa từng được học."
  },
  {
    "id": "Q_MOD_C_094",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ethics"
    ],
    "content": "Một hệ thống chatbot AI trả lời khách hàng bằng những thông tin thô lỗ. Điều này vi phạm nguyên tắc nào trong phát triển AI?",
    "options": [
      "A. Nguyên tắc tối ưu hóa tốc độ xử lý dữ liệu của hệ thống máy chủ.",
      "B. Nguyên tắc đạo đức và an toàn thông tin đối với người sử dụng sản phẩm.",
      "C. Nguyên tắc tiết kiệm chi phí vận hành cho các doanh nghiệp vừa và nhỏ.",
      "D. Nguyên tắc sử dụng các thuật toán học máy phức tạp nhất có thể trên đời."
    ],
    "correct_option": "B",
    "explanation": "Hệ thống AI cần tuân thủ các chuẩn mực đạo đức xã hội, ngôn từ lịch sự, tôn trọng người dùng và không cung cấp các nội dung gây hại, thô lỗ hoặc xúc phạm."
  },
  {
    "id": "Q_MOD_C_095",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Khi người dùng đánh giá 5 sao cho câu trả lời của Chatbot AI, hành động này được gọi là:",
    "options": [
      "A. Phản hồi ngầm định (Implicit Feedback).",
      "B. Phản hồi tường minh (Explicit Feedback).",
      "C. Cập nhật phần mềm hệ thống tự động.",
      "D. Tải lên dữ liệu huấn luyện thô mới."
    ],
    "correct_option": "B",
    "explanation": "Phản hồi tường minh (Explicit Feedback) là phản hồi mà người dùng chủ động cung cấp để đánh giá trực tiếp chất lượng hệ thống (như chấm sao, viết đánh giá)."
  },
  {
    "id": "Q_MOD_C_096",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Khi bạn thấy các gợi ý quảng cáo giày thể thao xuất hiện sau khi bạn tìm kiếm từ khóa 'giày chạy bộ', công nghệ nào đã hoạt động?",
    "options": [
      "A. Hệ thống gợi ý quảng cáo dựa trên hành vi người dùng.",
      "B. Phần mềm quét virus tự động trên thiết bị máy tính của bạn.",
      "C. Công cụ nhận diện khuôn mặt tự động qua camera trước điện thoại.",
      "D. Hệ thống tự động dịch thuật văn bản thời gian thực của trình duyệt."
    ],
    "correct_option": "A",
    "explanation": "Hệ thống quảng cáo phân tích hành vi tìm kiếm (nhập từ khóa giày chạy bộ) để tự động đề xuất quảng cáo các sản phẩm liên quan mật thiết (giày thể thao) nhằm tăng tỷ lệ mua."
  },
  {
    "id": "Q_MOD_C_097",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "machine-learning"
    ],
    "content": "Khái niệm 'Dataset' trong học máy có nghĩa là gì trong tiếng Việt?",
    "options": [
      "A. Tập dữ liệu.",
      "B. Thuật toán học.",
      "C. Máy chủ ảo.",
      "D. Ngôn ngữ lập trình."
    ],
    "correct_option": "A",
    "explanation": "Dataset được dịch sang tiếng Việt là tập dữ liệu - tập hợp các mẫu thông tin được thu thập dùng để huấn luyện hoặc kiểm tra mô hình học máy."
  },
  {
    "id": "Q_MOD_C_098",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "ai-basic"
    ],
    "content": "Đâu là một ví dụ về ứng dụng AI trong ngành bán lẻ?",
    "options": [
      "A. Việc nhân viên siêu thị thực hiện kiểm kho thủ công bằng cách đếm từng sản phẩm.",
      "B. AI dự báo nhu cầu mua sắm các mặt hàng để siêu thị có kế hoạch nhập hàng hợp lý.",
      "C. Việc in hóa đơn thanh toán cho khách hàng bằng máy in hóa đơn nhiệt tại quầy.",
      "D. Sổ tay ghi chép danh sách các khách hàng thân thiết của siêu thị bằng bút bi."
    ],
    "correct_option": "B",
    "explanation": "AI phân tích dữ liệu mua sắm lịch sử để dự đoán xu hướng nhu cầu hàng hóa của người tiêu dùng, giúp siêu thị lên kế hoạch tồn kho hiệu quả, tránh thừa hoặc thiếu hàng."
  },
  {
    "id": "Q_MOD_C_099",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "llm"
    ],
    "content": "Khi sử dụng API của mô hình ngôn ngữ lớn, chi phí sử dụng thường phụ thuộc trực tiếp vào yếu tố nào?",
    "options": [
      "A. Số lượng nút bấm hiển thị trên giao diện của ứng dụng di động của người dùng.",
      "B. Số lượng token (từ hoặc cụm từ) được gửi đi và nhận về từ hệ thống máy chủ API.",
      "C. Số lần người dùng thực hiện khởi động lại thiết bị di động thông minh của họ.",
      "D. Khoảng cách địa lý từ nhà của người dùng đến trung tâm dữ liệu gần nhất của AI."
    ],
    "correct_option": "B",
    "explanation": "Nhà cung cấp dịch vụ LLM API (như OpenAI, Anthropic) tính phí dựa trên số lượng token ở cả phần yêu cầu (Prompt) gửi đi và câu trả lời sinh ra (Completion) nhận về."
  },
  {
    "id": "Q_MOD_C_100",
    "module_id": "Module_C",
    "difficulty": "Medium",
    "tags": [
      "product-ux"
    ],
    "content": "Mục tiêu cuối cùng của việc đơn giản hóa các sản phẩm AI cho người dùng phổ thông là gì?",
    "options": [
      "A. Bắt buộc người dùng phải học lập trình máy tính trước khi sử dụng các dịch vụ AI.",
      "B. Giúp bất kỳ ai cũng có thể dễ dàng sử dụng và hưởng lợi từ các công nghệ AI.",
      "C. Tăng độ phức tạp của các hướng dẫn sử dụng phần mềm để thách thức người dùng.",
      "D. Hạn chế tối đa số lượng người dùng có thể tiếp cận được với các ứng dụng AI mới."
    ],
    "correct_option": "B",
    "explanation": "Đơn giản hóa trải nghiệm (UX) và hạ thấp rào cản kỹ thuật giúp các sản phẩm công nghệ AI tiếp cận được đại đa số mọi người dùng, giúp họ ứng dụng hiệu quả vào cuộc sống."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_C;
}
