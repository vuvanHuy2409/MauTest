const QUESTIONS_C = [
  {
    id: "Q_MOD_C_001", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Hệ thống tự động nhận diện và trích xuất thông tin biển số xe từ camera giao thông thuộc lĩnh vực nào sau đây của Trí tuệ nhân tạo?",
    options: [
      "A. Xử lý ngôn ngữ tự nhiên (NLP)",
      "B. Thị giác máy tính (Computer Vision)",
      "C. Hệ thống gợi ý (Recommender Systems)",
      "D. Khai phá dữ liệu âm thanh (Audio Mining)"
    ],
    correct_option: "B",
    explanation: "Nhận diện biển số xe liên quan trực tiếp đến việc xử lý, phân tích và hiểu thông tin từ hình ảnh/video đầu vào, đây là bài toán kinh điển của Thị giác máy tính (Computer Vision)."
  },
  {
    id: "Q_MOD_C_002", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Một ứng dụng AI gợi ý món ăn cho người dùng dựa trên sở thích lịch sử. Sau khi triển khai, người dùng phàn nàn rằng ứng dụng \"liên tục gợi ý đi gợi ý lại đúng 1 món duy nhất mà họ từng khen ngon, gây nhàm chán\". Với tư cách là kỹ sư sản phẩm AI, bạn sẽ đề xuất cải tiến thuật toán theo hướng nào?",
    options: [
      "A. Tắt hệ thống gợi ý và chuyển sang hiển thị ngẫu nhiên hoàn toàn.",
      "B. Tăng trọng số của các món ăn cũ để đảm bảo độ chính xác tối đa.",
      "C. Thêm cơ chế \"Khám phá\" (Exploration) bằng cách lồng ghép các món ăn mới có thuộc tính tương tự hoặc món thịnh hành để tăng tính đa dạng.",
      "D. Yêu cầu người dùng tự nhập tay món ăn họ muốn ăn mỗi ngày."
    ],
    correct_option: "C",
    explanation: "Một hệ thống gợi ý tốt cần cân bằng giữa \"Khai thác\" (Exploitation - những gì người dùng đã thích) và \"Khám phá\" (Exploration - đề xuất cái mới tương tự) để tránh hiện tượng \"bẫy lọc\" gây nhàm chán."
  },
  {
    id: "Q_MOD_C_003", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Mô hình ngôn ngữ lớn (LLM) như GPT-4 hay các hệ thống chatbot thông minh hoạt động dựa trên việc dự đoán từ tiếp theo trong câu thuộc nhóm học máy nào?",
    options: [
      "A. Học có giám sát (Supervised Learning) hoặc Học tự giám sát (Self-Supervised Learning)",
      "B. Học không giám sát thuần túy (Unsupervised Learning)",
      "C. Học tăng cường không cần dữ liệu (Reinforcement Learning)",
      "D. Thuật toán tìm kiếm theo chiều sâu (DFS)"
    ],
    correct_option: "A",
    explanation: "Việc dự đoán từ tiếp theo dựa trên các từ đã xuất hiện phía trước sử dụng chính các văn bản có sẵn làm \"nhãn\" tự nhiên để học, đây là bản chất của Học tự giám sát (Self-Supervised)."
  },
  {
    id: "Q_MOD_C_004", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Trường đại học muốn tích hợp một AI kiểm duyệt bài viết tự động trên mạng xã hội nội bộ của sinh viên nhằm loại bỏ các nội dung toxic, thô tục hoặc spam. Tuy nhiên, hệ thống ban đầu hoạt động quá nhạy cảm, liên tục khóa nhầm các bài viết thảo luận học thuật bình thường chỉ vì có chứa một vài từ ngữ mang tính tranh luận gay gắt. Là người phát triển sản phẩm, bạn nên làm gì?",
    options: [
      "A. Tắt bỏ hoàn toàn AI và quay lại duyệt bài bằng tay 100%.",
      "B. Điều chỉnh ngưỡng tin cậy (Confidence Threshold) của AI cao lên, chỉ khóa bài khi độ chắc chắn vi phạm đạt mức rất cao (ví dụ $>95\\%$), đồng thời bổ sung nút \"Khiếu nại\" cho sinh viên.",
      "C. Đổi nhãn tất cả các từ mang tính tranh luận thành từ cấm để AI khóa triệt để hơn.",
      "D. Khóa luôn tài khoản của những sinh viên phàn nàn để hệ thống ổn định."
    ],
    correct_option: "B",
    explanation: "Nâng ngưỡng tin cậy (Confidence Threshold) giúp giảm tỷ lệ phạt nhầm (False Positive), và quy trình vận hành sản phẩm luôn cần một bước dự phòng (nút khiếu nại) để con người can thiệp khi AI sai sót."
  },
  {
    id: "Q_MOD_C_005", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Một công ty phát triển hệ thống AI để tự động phát hiện hành vi \"vượt đèn đỏ\" từ camera giao thông. Hệ thống hoạt động bằng cách kiểm tra xem xe có cắt qua vạch dừng khi đèn đang đỏ hay không. Bài toán này sử dụng luồng xử lý chính nào dưới đây?",
    options: [
      "A. Nhận diện giọng nói để nghe tiếng còi xe.",
      "B. Kết hợp giữa Phát hiện vật thể (YOLO để tìm xe, vạch, đèn) và Theo dõi chuyển động (Tracking vệt di chuyển của xe).",
      "C. Mô hình ngôn ngữ lớn (LLM) để đọc biển số xe.",
      "D. Thuật toán gom cụm không giám sát (Clustering) để đếm số lượng xe."
    ],
    correct_option: "B",
    explanation: "Để bắt lỗi vượt đèn đỏ, AI cần nhận diện được vật thể tĩnh/động (xe, đèn tín hiệu) và sau đó theo dõi (Track) vị trí tọa độ của xe qua từng khung hình xem nó có cắt qua vạch giới hạn hay không."
  },
  {
    id: "Q_MOD_C_006", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Bạn xây dựng một Chatbot AI tư vấn tuyển sinh cho trường Đại học. Trong tuần đầu tiên ra mắt, hệ thống gặp hiện tượng \"ảo tưởng\" (Hallucination) – Chatbot tự bịa ra một ngành học không hề có thật của trường và tư vấn sai cho học sinh. Giải pháp nào dưới đây là tối ưu nhất?",
    options: [
      "A. Xóa bỏ chatbot và thuê người trực chat thủ công như cũ.",
      "B. Áp dụng kỹ thuật RAG (Retrieval-Augmented Generation) để bắt buộc Chatbot chỉ được tìm và trả lời dựa trên tài liệu tuyển sinh chính thức được cung cấp.",
      "C. Phạt tiền mô hình AI mỗi lần nó trả lời sai.",
      "D. Khóa tính năng đặt câu hỏi của học sinh, chỉ cho chọn các câu hỏi có sẵn."
    ],
    correct_option: "B",
    explanation: "RAG (Retrieval-Augmented Generation) giới hạn không gian dữ liệu của LLM vào kho tài liệu chuẩn được cung cấp, giúp giảm thiểu tối đa hiện tượng \"bịa đặt\" thông tin (Hallucination)."
  },
  {
    id: "Q_MOD_C_007", module_id: "Module_C", difficulty: "Hard",
    tags: ["overfitting"],
    content: "Khi huấn luyện một mô hình học máy, hiện tượng mô hình \"học vẹt\" – đạt độ chính xác cực kỳ cao ($99\\%$) trên tập dữ liệu dùng để học (Train set) nhưng khi áp dụng vào dữ liệu thực tế mới (Test set) thì kết quả lại rất tệ ($50\\%$) được gọi là hiện tượng gì?",
    options: [
      "A. Underfitting (Chưa khớp)",
      "B. Overfitting (Quá khớp)",
      "C. Optimization (Tối ưu hóa)",
      "D. Vanishing Gradient (Tiêu biến đạo hàm)"
    ],
    correct_option: "B",
    explanation: "Hiện tượng quá khớp (Overfitting) xảy ra khi mô hình quá phức tạp hoặc học quá kỹ các chi tiết, nhiễu của tập dữ liệu Train khiến nó mất đi khả năng khái quát hóa dữ liệu mới."
  },
  {
    id: "Q_MOD_C_008", module_id: "Module_C", difficulty: "Medium",
    tags: ["metrics"],
    content: "Một hệ thống AI tự động phát hiện thư rác (Spam Filter) nhận diện nhầm một email cực kỳ quan trọng từ đối tác của công ty là \"Spam\" và tự động xóa đi. Trong các chỉ số đo lường, sai sót này đã làm tăng chỉ số nào sau đây của mô hình?",
    options: [
      "A. True Positive",
      "B. False Positive",
      "C. True Negative",
      "D. False Negative"
    ],
    correct_option: "B",
    explanation: "Hệ thống báo động nhầm một mẫu vốn mang thuộc tính bình thường (Âm tính) thành thuộc tính vi phạm (Dương tính) được gọi là lỗi False Positive (Dương tính giả / Báo động nhầm)."
  },
  {
    id: "Q_MOD_C_009", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Công nghệ nào sau đây cho phép một ứng dụng dịch thuật AI (như Google Translate) có thể nghe giọng nói của bạn, chuyển nó thành văn bản, dịch sang ngôn ngữ khác, và phát lại bằng giọng nói nhân tạo?",
    options: [
      "A. Chỉ cần thị giác máy tính (Computer Vision)",
      "B. Sự kết hợp giữa Nhận diện giọng nói (STT), Xử lý ngôn ngữ tự nhiên (NLP) và Tổng hợp giọng nói (TTS).",
      "C. Hệ thống chuyên gia dựa trên các tập luật logic cố định (Rule-based).",
      "D. Thuật toán tìm kiếm đồ thị."
    ],
    correct_option: "B",
    explanation: "Quy trình này tích hợp 3 phân hệ AI độc lập: Speech-to-Text (STT) dịch âm thanh thành chữ; NLP dịch thuật ngôn ngữ; và Text-to-Speech (TTS) chuyển văn bản thành giọng đọc nhân tạo."
  },
  {
    id: "Q_MOD_C_010", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Nhà trường muốn phát triển một ứng dụng AI hỗ trợ sinh viên tự động tóm tắt nội dung các slide bài giảng dài thành các ý chính để ôn thi. Đầu vào là file PDF/Powerpoint, đầu ra là văn bản tóm tắt ngắn. Bạn nên đề xuất tích hợp mô hình AI thuộc nhóm nào?",
    options: [
      "A. Object Detection (Phát hiện vật thể)",
      "B. Generative AI / Large Language Model (AI tạo sinh / Mô hình ngôn ngữ lớn)",
      "C. Time Series Forecasting (Dự báo chuỗi thời gian)",
      "D. Clustering (Gom cụm dữ liệu)"
    ],
    correct_option: "B",
    explanation: "Hiểu ngữ cảnh và tóm tắt văn bản dài (Text Summarization) là tính năng cốt lời và là thế mạnh lớn nhất của AI tạo sinh và mô hình ngôn ngữ lớn (LLM)."
  },
  {
    id: "Q_MOD_C_011", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Bạn triển khai hệ thống AI nhận diện khuôn mặt để nhân viên điểm danh tại cửa công ty. Vào mùa đông, rất nhiều người phàn nàn hệ thống không nhận diện được do họ đeo khẩu trang dày và đội mũ len kín tai. Cách giải quyết nào là hợp lý và tối ưu nhất về mặt sản phẩm?",
    options: [
      "A. Yêu cầu toàn bộ nhân viên không được đội mũ và đeo khẩu trang khi đi làm bất kể thời tiết.",
      "B. Huấn luyện lại mô hình bằng cách bổ sung thêm dữ liệu hình ảnh người đeo khẩu trang/đội mũ, tập trung trích xuất đặc trưng từ vùng mắt và lông mày.",
      "C. Đổi sang dùng hệ thống nhận diện bằng giọng nói đặt ở ngoài đường.",
      "D. Hạ độ chính xác yêu cầu của hệ thống xuống $10\\%$ để ai đi qua cũng được điểm danh thành công."
    ],
    correct_option: "B",
    explanation: "Về mặt sản phẩm, ta không bắt người dùng thay đổi thói quen thiết yếu. Giải pháp tối ưu là bổ sung dữ liệu huấn luyện mang tính thực tế để AI học được cách nhận diện qua các bộ phận không bị che khuất (vùng mắt)."
  },
  {
    id: "Q_MOD_C_012", module_id: "Module_C", difficulty: "Easy",
    tags: ["unsupervised-learning"],
    content: "Thuật toán K-Means thuộc nhóm học máy nào sau đây?",
    options: [
      "A. Học có giám sát (Supervised Learning)",
      "B. Học không giám sát (Unsupervised Learning)",
      "C. Học tăng cường (Reinforcement Learning)",
      "D. Mạng nơ-ron sâu sinh tạo (Generative AI)"
    ],
    correct_option: "B",
    explanation: "K-Means là thuật toán gom cụm (Clustering). Nó hoạt động trên tập dữ liệu không có nhãn trước nhằm tự động phân nhóm các điểm dữ liệu tương đồng vào chung một cụm, thuộc nhóm Học không giám sát."
  },
  {
    id: "Q_MOD_C_013", module_id: "Module_C", difficulty: "Medium",
    tags: ["supervised-learning"],
    content: "Khi xây dựng mô hình AI dự báo giá cổ phiếu dựa trên dữ liệu lịch sử đóng cửa qua các ngày trong 5 năm qua, bản chất bài toán này thuộc loại nào?",
    options: [
      "A. Phân loại (Classification)",
      "B. Hồi quy chuỗi thời gian (Time Series Regression)",
      "C. Gom cụm dữ liệu (Clustering)",
      "D. Thị giác máy tính (Computer Vision)"
    ],
    correct_option: "B",
    explanation: "Giá cổ phiếu là một giá trị số liên tục (Hồi quy) và dữ liệu được sắp xếp phụ thuộc trực tiếp vào mốc thời gian liên tục (Chuỗi thời gian - Time Series)."
  },
  {
    id: "Q_MOD_C_014", module_id: "Module_C", difficulty: "Medium",
    tags: ["transfer-learning"],
    content: "Kỹ thuật nào dưới đây cho phép bạn lấy một mô hình AI lớn đã được huấn luyện sẵn trên hàng triệu hình ảnh (như ResNet hoặc MobileNet) để áp dụng và tinh chỉnh (Fine-tune) vào bài toán nhận diện bệnh cây trồng cụ thể của bạn với tập dữ liệu nhỏ?",
    options: [
      "A. Reinforcement Learning (Học tăng cường)",
      "B. Transfer Learning (Học chuyển giao)",
      "C. Random Forest",
      "D. Linear Regression"
    ],
    correct_option: "B",
    explanation: "Transfer Learning tận dụng mạng tri thức đặc trưng (đường nét, hình khối) mà mô hình lớn đã học được trước đó để tinh chỉnh sang một bài toán mới, giúp tiết kiệm tài nguyên và không cần tập dữ liệu khổng lồ."
  },
  {
    id: "Q_MOD_C_015", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Một ứng dụng thương mại điện tử tích hợp AI để gợi ý sản phẩm cho người dùng. Số liệu cho thấy hệ thống gợi ý rất chính xác các sản phẩm người dùng quan tâm, nhưng doanh thu không tăng vì giao diện hiển thị phần gợi ý này bị giấu quá sâu ở cuối trang, khiến người dùng không nhìn thấy. Vấn đề ở đây nằm ở đâu?",
    options: [
      "A. Thuật toán AI bị lỗi kỹ thuật nặng.",
      "B. Dữ liệu huấn luyện AI bị thiếu.",
      "C. Trải nghiệm người dùng (UX) và thiết kế sản phẩm chưa tối ưu để khai thác sức mạnh của AI.",
      "D. Mô hình AI chạy quá chậm."
    ],
    correct_option: "C",
    explanation: "Một sản phẩm AI thành công không chỉ cần mô hình thông minh, mà cần một thiết kế trải nghiệm người dùng (UI/UX) hợp lý để đưa kết quả của AI tiếp cận khách hàng một cách tự nhiên và đúng thời điểm."
  },
  {
    id: "Q_MOD_C_016", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Khi phát triển một ứng dụng camera AI giám sát giao thông ngoài trời để phạt nguội xe máy không đội mũ bảo hiểm, yếu tố môi trường nào sau đây ít ảnh hưởng nhất đến độ chính xác của mô hình Object Detection khi vận hành thực tế?",
    options: [
      "A. Sự thay đổi thời tiết giữa trời nắng gắt và trời mưa giông.",
      "B. Hậu cảnh có bóng cây đổ xuống lòng đường thay đổi theo thời gian trong ngày.",
      "C. Tiếng còi xe và âm thanh tiếng động cơ trên đường phố.",
      "D. Ánh đèn pha của ô tô rọi ngược chiều vào camera vào ban đêm."
    ],
    correct_option: "C",
    explanation: "Mô hình Object Detection xử lý đầu vào là dữ liệu hình ảnh, do đó các yếu tố về ánh sáng, bóng đổ trực tiếp tác động lên pixel ảnh. Tiếng ồn âm thanh không thuộc luồng đầu vào nên không ảnh hưởng."
  },
  {
    id: "Q_MOD_C_017", module_id: "Module_C", difficulty: "Easy",
    tags: ["supervised-learning"],
    content: "Trong học máy có giám sát (Supervised Learning), mô hình học từ loại dữ liệu nào?",
    options: [
      "A. Dữ liệu chỉ có các đặc trưng đầu vào (features), không có nhãn.",
      "B. Dữ liệu đã được gán nhãn trước (gồm cả đặc trưng đầu vào và nhãn kết quả mong muốn).",
      "C. Dữ liệu hoàn toàn ngẫu nhiên do máy tính sinh ra.",
      "D. Dữ liệu thu được qua tương tác thử và sai trực tiếp với môi trường."
    ],
    correct_option: "B",
    explanation: "Học có giám sát yêu cầu tập dữ liệu huấn luyện có nhãn (labeled data) gồm cặp đầu vào và đầu ra mong muốn để mô hình học cách ánh xạ."
  },
  {
    id: "Q_MOD_C_018", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Bài toán 'Phân tích cảm xúc' (Sentiment Analysis) từ các bình luận của khách hàng trên mạng xã hội thuộc lĩnh vực nào?",
    options: [
      "A. Thị giác máy tính",
      "B. Xử lý ngôn ngữ tự nhiên (NLP)",
      "C. Nhận diện giọng nói",
      "D. Hồi quy tuyến tính"
    ],
    correct_option: "B",
    explanation: "Phân tích cảm xúc là hiểu ý nghĩa và thái độ của con người thể hiện qua văn bản, thuộc lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP)."
  },
  {
    id: "Q_MOD_C_019", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Tham số 'Temperature' trong các mô hình ngôn ngữ lớn (LLM) điều khiển yếu tố nào của câu trả lời?",
    options: [
      "A. Tốc độ trả lời nhanh hay chậm.",
      "B. Số lượng từ tối đa trong câu trả lời.",
      "C. Tính ngẫu nhiên, sáng tạo và mức độ đa dạng của văn bản đầu ra.",
      "D. Dung lượng bộ nhớ GPU cần tiêu thụ."
    ],
    correct_option: "C",
    explanation: "Temperature càng cao thì mô hình càng chọn các từ có xác suất thấp hơn, tăng tính sáng tạo và ngẫu nhiên. Temperature thấp (gần 0) làm mô hình trả lời nhất quán và logic hơn."
  },
  {
    id: "Q_MOD_C_020", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Phép toán phổ biến nhất được sử dụng trong mạng nơ-ron tích chập (CNN) để trích xuất đặc trưng hình ảnh là gì?",
    options: [
      "A. Phép nhân ma trận nghịch đảo",
      "B. Phép toán tích chập (Convolution)",
      "C. Phép chia vector",
      "D. Phép biến đổi Fourier nhanh"
    ],
    correct_option: "B",
    explanation: "Phép toán tích chập (Convolution) sử dụng các bộ lọc (kernel) quét qua ảnh để trích xuất các đặc trưng như đường nét, góc cạnh, hoa văn."
  },
  {
    id: "Q_MOD_C_021", module_id: "Module_C", difficulty: "Easy",
    tags: ["supervised-learning"],
    content: "Thuật toán nào sau đây dùng để phân loại lớp (Classification) dựa trên khoảng cách đến các điểm dữ liệu lân cận gần nhất?",
    options: [
      "A. K-Means",
      "B. K-Nearest Neighbors (KNN)",
      "C. Linear Regression",
      "D. Principal Component Analysis (PCA)"
    ],
    correct_option: "B",
    explanation: "KNN phân loại mẫu mới dựa trên đa số phiếu bầu từ K mẫu huấn luyện gần nhất xung quanh nó trong không gian đặc trưng."
  },
  {
    id: "Q_MOD_C_022", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Trong NLP, việc loại bỏ các từ xuất hiện rất phổ biến nhưng ít mang giá trị ngữ nghĩa (như 'và', 'hoặc', 'thì', 'là' trong tiếng Việt) được gọi là gì?",
    options: [
      "A. Stemming",
      "B. Lemmatization",
      "C. Stopwords removal",
      "D. Word Embedding"
    ],
    correct_option: "C",
    explanation: "Các từ này được gọi là stop words (từ dừng). Loại bỏ chúng giúp mô hình tập trung vào các từ khóa mang nội dung thực sự của văn bản."
  },
  {
    id: "Q_MOD_C_023", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Mạng nơ-ron Transformer - nền tảng của các mô hình LLM hiện đại - hoạt động dựa trên cơ chế cốt lõi nào?",
    options: [
      "A. Cơ chế đệ quy (Recurrent mechanism)",
      "B. Cơ chế chú ý (Self-Attention mechanism)",
      "C. Cơ chế tích chập (Convolutional mechanism)",
      "D. Cơ chế lan truyền ngược (Backpropagation)"
    ],
    correct_option: "B",
    explanation: "Cơ chế Self-Attention cho phép mô hình đánh giá mức độ liên quan giữa tất cả các từ trong câu mà không bị giới hạn bởi khoảng cách xa gần."
  },
  {
    id: "Q_MOD_C_024", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-ux"],
    content: "Khi tích hợp Chatbot AI vào website hỗ trợ khách hàng, hành động nào giúp cải thiện UX tốt nhất đối với người dùng lần đầu?",
    options: [
      "A. Để màn hình trống và bắt người dùng tự nghĩ câu hỏi.",
      "B. Hiển thị các câu hỏi gợi ý phổ biến (Quick Prompts) để người dùng chỉ cần click.",
      "C. Bắt buộc người dùng phải đăng ký tài khoản VIP mới được chat.",
      "D. Dùng toàn các thuật ngữ kỹ thuật chuyên sâu để giải thích."
    ],
    correct_option: "B",
    explanation: "Các câu hỏi gợi ý nhanh giúp giảm tải nhận thức của người dùng, chỉ dẫn họ cách tương tác với hệ thống một cách dễ dàng nhất."
  },
  {
    id: "Q_MOD_C_025", module_id: "Module_C", difficulty: "Easy",
    tags: ["unsupervised-learning"],
    content: "Bài toán phân tích giỏ hàng mua sắm để tìm ra luật kết hợp (Association Rules), ví dụ: 'Người mua bỉm thường mua thêm bia', thuộc loại học máy nào?",
    options: [
      "A. Học có giám sát (Supervised Learning)",
      "B. Học không giám sát (Unsupervised Learning)",
      "C. Học tăng cường (Reinforcement Learning)",
      "D. Học bán giám sát (Semi-supervised Learning)"
    ],
    correct_option: "B",
    explanation: "Tìm luật kết hợp nhằm phát hiện mối quan hệ ẩn trong dữ liệu giao dịch không có nhãn trước, đây là một dạng của học không giám sát."
  },
  {
    id: "Q_MOD_C_026", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Trong Computer Vision, bài toán xác định vị trí của vật thể bằng một khung chữ nhật (Bounding Box) và gán nhãn cho nó được gọi là:",
    options: [
      "A. Image Classification (Phân loại ảnh)",
      "B. Object Detection (Phát hiện vật thể)",
      "C. Semantic Segmentation (Phân đoạn ngữ nghĩa)",
      "D. Image Generation (Sinh ảnh)"
    ],
    correct_option: "B",
    explanation: "Object Detection kết hợp việc phân loại lớp của vật thể và định vị tọa độ của nó dưới dạng Bounding Box trên ảnh."
  },
  {
    id: "Q_MOD_C_027", module_id: "Module_C", difficulty: "Easy",
    tags: ["metrics"],
    content: "Độ chính xác tổng thể (Accuracy) được tính bằng công thức nào?",
    options: [
      "A. $\\frac{TP + TN}{TP + TN + FP + FN}$",
      "B. $\\frac{TP}{TP + FP}$",
      "C. $\\frac{TP}{TP + FN}$",
      "D. $\\frac{TN}{TN + FP}$"
    ],
    correct_option: "A",
    explanation: "Accuracy là tỷ lệ số mẫu dự đoán đúng (cả True Positive và True Negative) trên tổng số mẫu."
  },
  {
    id: "Q_MOD_C_028", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-ux"],
    content: "Tại sao thời gian phản hồi (Latency) lại là một chỉ số UX quan trọng đối với các ứng dụng AI tạo sinh thời gian thực?",
    options: [
      "A. Latency càng cao thì mô hình càng thông minh.",
      "B. Người dùng có xu hướng bỏ cuộc hoặc nghĩ ứng dụng bị lỗi nếu phải chờ đợi câu trả lời quá lâu mà không có phản hồi tức thời.",
      "C. Latency không ảnh hưởng gì đến trải nghiệm người dùng.",
      "D. Latency cao giúp tiết kiệm điện năng cho máy chủ."
    ],
    correct_option: "B",
    explanation: "Thời gian phản hồi chậm gây khó chịu và giảm sút niềm tin của người dùng. Các hệ thống thường dùng kỹ thuật streaming chữ (word-by-word) để cải thiện cảm giác phản hồi nhanh."
  },
  {
    id: "Q_MOD_C_029", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Thuật ngữ 'Token' trong các mô hình ngôn ngữ lớn (LLM) là gì?",
    options: [
      "A. Một khóa bảo mật API.",
      "B. Một đơn vị văn bản nhỏ (như từ, cụm từ hoặc ký tự) mà mô hình dùng để đọc và xử lý ngôn ngữ.",
      "C. Số lượng tham số của mô hình.",
      "D. Bộ nhớ đệm của card đồ họa."
    ],
    correct_option: "B",
    explanation: "LLM chia nhỏ văn bản đầu vào thành các tokens. Một từ có thể gồm một hoặc nhiều tokens tùy thuộc vào bộ mã hóa từ vựng (tokenizer) được sử dụng."
  },
  {
    id: "Q_MOD_C_030", module_id: "Module_C", difficulty: "Easy",
    tags: ["supervised-learning"],
    content: "Thuật toán học máy nào xây dựng một tập hợp các Cây quyết định (Decision Trees) và kết hợp kết quả của chúng để đưa ra dự đoán cuối cùng?",
    options: [
      "A. Support Vector Machine (SVM)",
      "B. Random Forest",
      "C. Linear Regression",
      "D. K-Means"
    ],
    correct_option: "B",
    explanation: "Random Forest là mô hình học kết hợp (ensemble learning) hoạt động bằng cách xây dựng nhiều cây quyết định trong quá trình huấn luyện và lấy trung bình dự đoán (hoặc bỏ phiếu bầu)."
  },
  {
    id: "Q_MOD_C_031", module_id: "Module_C", difficulty: "Medium",
    tags: ["supervised-learning"],
    content: "Thuật toán tối ưu hóa Gradient Descent cập nhật trọng số $w$ theo công thức nào sau đây? (Với $\\eta$ là tốc độ học - learning rate, và $\\nabla L(w)$ là gradient của hàm mất mát).",
    options: [
      "A. $w = w + \\eta \\nabla L(w)$",
      "B. $w = w - \\eta \\nabla L(w)$",
      "C. $w = w \\times \\eta \\nabla L(w)$",
      "D. $w = w / (\\eta \\nabla L(w))$"
    ],
    correct_option: "B",
    explanation: "Để giảm thiểu hàm mất mát, chúng ta cần đi ngược hướng gradient, do đó công thức cập nhật là trừ đi lượng tỷ lệ với gradient: $w = w - \\eta \\nabla L(w)$."
  },
  {
    id: "Q_MOD_C_032", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp"],
    content: "Kỹ thuật 'Word Embedding' (ví dụ Word2Vec, GloVe) chuyển đổi các từ trong văn bản thành dạng nào?",
    options: [
      "A. Một số nguyên duy nhất đại diện cho từ đó.",
      "B. Một vector số thực nhiều chiều liên tục, giữ lại mối quan hệ ngữ nghĩa giữa các từ.",
      "C. Một chuỗi mã hóa nhị phân 0 và 1.",
      "D. Một hình ảnh biểu đồ tần suất của từ."
    ],
    correct_option: "B",
    explanation: "Word Embedding ánh xạ các từ vào không gian vector nhiều chiều (ví dụ 100-300 chiều) sao cho các từ có ngữ nghĩa tương đồng (như 'vua' và 'hoàng đế') nằm gần nhau."
  },
  {
    id: "Q_MOD_C_033", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Kỹ thuật 'Prompt Engineering' nào hướng dẫn mô hình LLM giải quyết bài toán phức tạp bằng cách yêu cầu nó hiển thị rõ ràng các bước suy luận trung gian?",
    options: [
      "A. Zero-shot Prompting",
      "B. Chain-of-Thought (CoT) Prompting",
      "C. Few-shot Prompting",
      "D. Negative Prompting"
    ],
    correct_option: "B",
    explanation: "Chain-of-Thought (Chuỗi suy luận) yêu cầu LLM phân tích từng bước logic trước khi đưa ra đáp án cuối cùng, giúp tăng độ chính xác trong toán học và logic."
  },
  {
    id: "Q_MOD_C_034", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Lớp 'Pooling' (như Max Pooling) trong kiến trúc mạng CNN có chức năng chính là gì?",
    options: [
      "A. Tăng số lượng kênh (channels) của ma trận đặc trưng.",
      "B. Giảm kích thước không gian (chiều rộng và chiều cao) của ma trận đặc trưng, giúp giảm số lượng tham số và tránh quá khớp.",
      "C. Thực hiện cập nhật trọng số cho mô hình.",
      "D. Thay đổi độ phân giải của hình ảnh đầu vào gốc."
    ],
    correct_option: "B",
    explanation: "Max Pooling giữ lại giá trị lớn nhất trong từng vùng cục bộ, giúp trích xuất các đặc trưng nổi bật nhất đồng thời giảm kích thước tính toán."
  },
  {
    id: "Q_MOD_C_035", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Trong hệ thống RAG (Retrieval-Augmented Generation), thành phần 'Vector Database' dùng để lưu trữ và truy vấn thông tin gì?",
    options: [
      "A. Lưu trữ mã nguồn của mô hình ngôn ngữ lớn.",
      "B. Lưu trữ các embeddings (vector số) của các đoạn tài liệu tri thức để tìm kiếm các đoạn văn bản có độ tương đồng ngữ nghĩa cao với câu hỏi.",
      "C. Lưu trữ lịch sử giao dịch thanh toán của người dùng.",
      "D. Lưu trữ hình ảnh chân dung người dùng."
    ],
    correct_option: "B",
    explanation: "Vector Database thực hiện lưu trữ các vector đại diện cho tri thức nội bộ. Khi người dùng hỏi, hệ thống chuyển câu hỏi thành vector rồi truy vấn vector gần nhất để lấy ngữ cảnh bổ sung cho LLM."
  },
  {
    id: "Q_MOD_C_036", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Khi thiết kế giao diện hiển thị câu trả lời từ mô hình AI tạo sinh văn bản (như ChatGPT), tại sao kiểu hiển thị 'streaming' (chữ xuất hiện từng từ) được ưa chuộng hơn hiển thị toàn bộ một lúc?",
    options: [
      "A. Do hiển thị streaming giúp tiết kiệm băng thông mạng và tài nguyên máy chủ.",
      "B. Do streaming làm giảm thời gian chờ nhận thức (perceived latency) của người dùng, mang lại cảm giác ứng dụng phản hồi ngay lập tức thay vì phải chờ đợi lâu.",
      "C. Do streaming làm cho văn bản sinh ra chính xác hơn.",
      "D. Do streaming bắt buộc người dùng phải đọc chậm hơn."
    ],
    correct_option: "B",
    explanation: "Hiển thị streaming (chunk-by-chunk) cải thiện trải nghiệm người dùng bằng cách cung cấp phản hồi hình ảnh tức thời khi mô hình bắt đầu tính toán, thay vì bắt họ nhìn vòng xoay tải dữ liệu."
  },
  {
    id: "Q_MOD_C_037", module_id: "Module_C", difficulty: "Medium",
    tags: ["unsupervised-learning"],
    content: "Làm thế nào để xác định số lượng cụm tối ưu $K$ trong thuật toán phân cụm K-Means?",
    options: [
      "A. Luôn chọn $K$ bằng nửa số lượng điểm dữ liệu.",
      "B. Sử dụng phương pháp Elbow (đường cong cùi chỏ) hoặc chỉ số Silhouette để đánh giá sự cân bằng giữa số cụm và tổng bình phương khoảng cách nội cụm.",
      "C. Chọn $K$ ngẫu nhiên bằng cách gieo xúc xắc.",
      "D. Chạy mô hình Linear Regression để tìm $K$."
    ],
    correct_option: "B",
    explanation: "Phương pháp Elbow vẽ đồ thị tổng sai số bình phương trong cụm (WCSS) theo K. Điểm mà đồ thị giảm chậm lại giống cùi chỏ là giá trị K tối ưu."
  },
  {
    id: "Q_MOD_C_038", module_id: "Module_C", difficulty: "Medium",
    tags: ["metrics"],
    content: "Độ đo F1-Score là trung bình điều hòa (harmonic mean) của hai chỉ số nào?",
    options: [
      "A. Accuracy và Sensitivity",
      "B. Precision và Recall",
      "C. Specificity và Recall",
      "D. Precision và Accuracy"
    ],
    correct_option: "B",
    explanation: "F1-Score bằng $2 \\times \\frac{Precision \\times Recall}{Precision + Recall}$. F1-Score cân bằng cả sai số báo nhầm (FP) và bỏ sót (FN), rất hữu ích khi tập dữ liệu mất cân bằng."
  },
  {
    id: "Q_MOD_C_039", module_id: "Module_C", difficulty: "Medium",
    tags: ["transfer-learning"],
    content: "Trong Transfer Learning, thuật ngữ 'Freezing' các lớp của mạng nơ-ron trước khi huấn luyện có nghĩa là gì?",
    options: [
      "A. Xóa bỏ hoàn toàn các lớp đó khỏi mạng nơ-ron.",
      "B. Giữ cố định trọng số của các lớp đó, không cập nhật chúng trong quá trình lan truyền ngược (backpropagation).",
      "C. Tăng tốc độ tính toán đạo hàm của các lớp đó lên gấp đôi.",
      "D. Cho mô hình chạy trên môi trường nhiệt độ thấp để tránh quá nhiệt."
    ],
    correct_option: "B",
    explanation: "Đóng băng (Freezing) trọng số của các lớp trích xuất đặc trưng cơ bản (những lớp đầu tiên) giúp giữ lại tri thức cũ và chỉ huấn luyện các lớp cuối phù hợp với tác vụ mới."
  },
  {
    id: "Q_MOD_C_040", module_id: "Module_C", difficulty: "Medium",
    tags: ["overfitting"],
    content: "Kỹ thuật 'Early Stopping' ngăn chặn Overfitting bằng cách nào?",
    options: [
      "A. Tự động dừng huấn luyện khi đạt đủ số epoch định trước bất chấp kết quả.",
      "B. Dừng huấn luyện khi sai số trên tập kiểm định (Validation loss) bắt đầu tăng liên tục, mặc dù sai số trên tập huấn luyện vẫn đang giảm.",
      "C. Dừng chương trình khi máy tính chạy nóng vượt quá nhiệt độ an toàn.",
      "D. Loại bỏ bớt dữ liệu huấn luyện khi bắt đầu quá trình học."
    ],
    correct_option: "B",
    explanation: "Early Stopping theo dõi hiệu năng trên tập validation độc lập. Khi validation loss tăng lên, chứng tỏ mô hình bắt đầu học quá khớp (overfit) vào tập train, dừng học lúc này là tối ưu nhất."
  },
  {
    id: "Q_MOD_C_041", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Kỹ thuật 'Fine-tuning' (Tinh chỉnh) mô hình LLM khác với RAG (Retrieval-Augmented Generation) như thế nào?",
    options: [
      "A. Fine-tuning không thay đổi trọng số mô hình, RAG thì có.",
      "B. Fine-tuning cập nhật trực tiếp trọng số mô hình trên tập dữ liệu chuyên biệt để học phong cách hoặc tri thức sâu; còn RAG cung cấp ngữ cảnh động bên ngoài vào prompt lúc chạy mà không đổi trọng số.",
      "C. RAG chạy chậm hơn Fine-tuning gấp 100 lần.",
      "D. Fine-tuning chỉ áp dụng cho ảnh, RAG chỉ áp dụng cho chữ."
    ],
    correct_option: "B",
    explanation: "Fine-tuning thay đổi bản thân mô hình (học thêm luật, hành vi mới). RAG là kỹ thuật tìm kiếm ngữ cảnh rồi gửi kèm vào prompt, mô hình chỉ 'đọc' tài liệu được đưa thêm để trả lời chứ bản chất không thay đổi trọng số."
  },
  {
    id: "Q_MOD_C_042", module_id: "Module_C", difficulty: "Hard",
    tags: ["supervised-learning"],
    content: "Trong các mạng nơ-ron sâu, hiện tượng 'Tiêu biến đạo hàm' (Vanishing Gradient) ảnh hưởng như thế nào đến việc huấn luyện mô hình và cách khắc phục nào sau đây là hiệu quả?",
    options: [
      "A. Làm trọng số tăng lên vô hạn; khắc phục bằng cách giảm learning rate.",
      "B. Làm cho các đạo hàm lan truyền ngược tiến dần về 0 ở các lớp gần đầu vào, khiến chúng không thể cập nhật trọng số; khắc phục bằng cách sử dụng hàm kích hoạt ReLU hoặc kết nối tắt (skip connections) như trong ResNet.",
      "C. Làm mô hình chạy quá nhanh gây tràn bộ nhớ; khắc phục bằng cách dùng Batch Normalization.",
      "D. Làm mô hình chỉ dự đoán lớp đa số; khắc phục bằng cách dùng thuật toán K-Means."
    ],
    correct_option: "B",
    explanation: "Các hàm kích hoạt như Sigmoid hoặc Tanh có đạo hàm cực đại nhỏ ($<0.25$). Khi nhân chuỗi đạo hàm qua nhiều lớp, giá trị đạo hàm giảm lũy thừa về 0. ReLU (đạo hàm = 1 khi x > 0) và kết nối tắt trong ResNet giải quyết hiệu quả vấn đề này."
  },
  {
    id: "Q_MOD_C_043", module_id: "Module_C", difficulty: "Hard",
    tags: ["nlp"],
    content: "Trong cơ chế Attention của mạng Transformer, công thức tính Attention nào sau đây là đúng? (Với $Q, K, V$ tương ứng là các ma trận Query, Key, Value và $d_k$ là kích thước của vector key).",
    options: [
      "A. $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$",
      "B. $\\text{Attention}(Q, K, V) = \\text{sigmoid}\\left(QK^T\\right) \\times V$",
      "C. $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(Q K V\\right)$",
      "D. $\\text{Attention}(Q, K, V) = \\frac{Q \\cdot K}{\\sqrt{d_k}} + V$"
    ],
    correct_option: "A",
    explanation: "Đây là công thức Scaled Dot-Product Attention nổi tiếng trong bài báo 'Attention Is All You Need'. Việc chia cho $\\sqrt{d_k}$ giúp giảm thiểu sự bùng nổ giá trị tích vô hướng khi số chiều lớn, giữ cho softmax hoạt động ở vùng có gradient ổn định."
  },
  {
    id: "Q_MOD_C_044", module_id: "Module_C", difficulty: "Hard",
    tags: ["computer-vision"],
    content: "Mạng đối địch sinh tạo (GAN - Generative Adversarial Networks) bao gồm hai thành phần Generator và Discriminator. Trò chơi minimax giữa chúng được tối ưu hóa như thế nào?",
    options: [
      "A. Cả hai cùng cố gắng tối đa hóa hàm mục tiêu chung.",
      "B. Generator cố gắng tạo ra ảnh giả giống thật nhất để đánh lừa Discriminator (giảm thiểu khả năng phân biệt); Discriminator cố gắng phân biệt chính xác ảnh thật và ảnh giả (tối đa hóa khả năng nhận diện).",
      "C. Generator cố gắng phân loại ảnh, Discriminator cố gắng sinh ảnh.",
      "D. Chúng chạy độc lập không tương tác với nhau."
    ],
    correct_option: "B",
    explanation: "GAN hoạt động như một trò chơi hai người có tổng bằng không. Generator sinh ảnh giả G(z) từ nhiễu z, Discriminator D(x) chấm điểm độ thật. Generator tối thiểu hóa $\\log(1 - D(G(z)))$ trong khi Discriminator tối đa hóa $\\log D(x) + \\log(1 - D(G(z)))$."
  },
  {
    id: "Q_MOD_C_045", module_id: "Module_C", difficulty: "Hard",
    tags: ["llm"],
    content: "Khi huấn luyện các mô hình ngôn ngữ lớn (LLM), kỹ thuật RLHF (Reinforcement Learning from Human Feedback) đóng vai trò gì trong giai đoạn sau tiền huấn luyện?",
    options: [
      "A. Giúp mô hình đọc nhanh hơn.",
      "B. Căn chỉnh (Align) hành vi và câu trả lời của mô hình theo tiêu chuẩn an toàn, trung thực, hữu ích của con người bằng cách dùng mô hình phần thưởng (Reward Model) để tối ưu hóa chính sách qua PPO.",
      "C. Nén kích thước mô hình để chạy được trên điện thoại.",
      "D. Dùng để sinh thêm dữ liệu văn bản thô cho mô hình học."
    ],
    correct_option: "B",
    explanation: "Sau khi học dự đoán từ (Pre-training) và học theo hướng dẫn (SFT), LLM có thể sinh nội dung độc hại hoặc vô ích. RLHF căn chỉnh mô hình thông qua phản hồi từ con người để đưa ra các câu trả lời tối ưu và an toàn nhất."
  },
  {
    id: "Q_MOD_C_046", module_id: "Module_C", difficulty: "Hard",
    tags: ["metrics"],
    content: "Chỉ số AUC-ROC (Area Under the Receiver Operating Characteristic curve) thể hiện năng lực nào của mô hình phân loại nhị phân?",
    options: [
      "A. Độ chính xác tại một ngưỡng quyết định cố định bằng 0.5.",
      "B. Khả năng phân biệt giữa hai lớp (dương tính và âm tính) trên tất cả các ngưỡng quyết định (thresholds) có thể có.",
      "C. Tổng số lượng mẫu dự đoán đúng chia cho tổng thời gian chạy mô hình.",
      "D. Độ rộng phân bổ của hàm phân phối chuẩn của dữ liệu."
    ],
    correct_option: "B",
    explanation: "ROC curve biểu diễn tỷ lệ True Positive Rate theo False Positive Rate tại các ngưỡng khác nhau. AUC (diện tích dưới đường cong) nằm trong $[0, 1]$. AUC càng gần 1 chứng tỏ mô hình phân loại cực tốt mà không phụ thuộc vào việc chọn ngưỡng ban đầu."
  },
  {
    id: "Q_MOD_C_047", module_id: "Module_C", difficulty: "Hard",
    tags: ["product-ux"],
    content: "Khi thiết kế một sản phẩm AI phát hiện tin giả (Fake News Detection) hỗ trợ người kiểm duyệt nội dung mạng xã hội, làm sao để giải quyết vấn đề UX về niềm tin và tính minh bạch (Transparency) của AI?",
    options: [
      "A. Chỉ hiển thị nhãn 'Thật' hoặc 'Giả' mà không giải thích gì thêm.",
      "B. Cung cấp chỉ số độ tin cậy (Confidence Score) kèm theo việc highlight các từ khóa/đoạn văn bản nghi vấn và liên kết đến các nguồn kiểm chứng độc lập (Explainable AI).",
      "C. Ẩn kết quả dự đoán của AI đi để tránh gây hoang mang.",
      "D. Tuyên bố với người dùng rằng hệ thống AI chính xác 100% để họ tuyệt đối tin tưởng."
    ],
    correct_option: "B",
    explanation: "Sản phẩm AI cần giải thích được quyết định của mình (Explainability). Việc highlight bằng chứng và hiển thị độ tự tin giúp con người có cơ sở để đánh giá lại và tăng sự hợp tác người - máy."
  },
  {
    id: "Q_MOD_C_048", module_id: "Module_C", difficulty: "Hard",
    tags: ["rag"],
    content: "Trong kiến trúc RAG nâng cao (Advanced RAG), kỹ thuật 'Query Rewriting' hoặc 'Query Expansion' giải quyết vấn đề gì?",
    options: [
      "A. Chuyển ngữ câu hỏi sang tiếng Anh để truy vấn nhanh hơn.",
      "B. Viết lại hoặc mở rộng câu hỏi ban đầu của người dùng (thường ngắn và thiếu ngữ nghĩa) thành các câu chi tiết hơn để nâng cao độ chính xác khi tìm kiếm trong cơ sở dữ liệu vector.",
      "C. Tự động xóa câu hỏi nếu nó quá khó.",
      "D. Chuyển câu hỏi từ văn bản thành giọng nói."
    ],
    correct_option: "B",
    explanation: "Người dùng thường đặt câu hỏi ngắn hoặc mơ hồ. Query Rewriting sử dụng LLM để diễn đạt lại câu hỏi theo nhiều hướng khác nhau, tăng khả năng khớp ngữ nghĩa với tài liệu gốc trong vector database."
  },
  {
    id: "Q_MOD_C_049", module_id: "Module_C", difficulty: "Hard",
    tags: ["overfitting"],
    content: "Kỹ thuật Regularization nào sau đây (được gọi là L1 Regularization) thêm số hạng phạt bằng tổng giá trị tuyệt đối của các trọng số vào hàm mất mát, giúp tạo ra ma trận trọng số thưa thớt (sparse weights)?",
    options: [
      "A. Ridge Regularization",
      "B. Lasso Regularization",
      "C. Dropout",
      "D. Batch Normalization"
    ],
    correct_option: "B",
    explanation: "Lasso Regression (L1) thêm lượng phạt $\\lambda \\sum |w_i|$ vào hàm loss. Nó có xu hướng đẩy các trọng số của đặc trưng không quan trọng về bằng đúng 0, hoạt động như một cơ chế chọn lọc đặc trưng tự động."
  },
  {
    id: "Q_MOD_C_050", module_id: "Module_C", difficulty: "Hard",
    tags: ["transfer-learning"],
    content: "Phương pháp 'Parameter-Efficient Fine-Tuning' (PEFT), tiêu biểu là LoRA (Low-Rank Adaptation), hoạt động dựa trên nguyên lý nào để tiết kiệm tài nguyên tính toán?",
    options: [
      "A. Cắt bỏ bớt 90% số lượng neuron trong mô hình gốc trước khi chạy.",
      "B. Đóng băng hoàn toàn trọng số gốc $W_0$ của mô hình, và huấn luyện thêm một cặp ma trận phân tách hạng thấp (low-rank decomposition matrices $A$ và $B$) song song với lớp đó, giúp giảm số lượng tham số cần cập nhật xuống hàng ngàn lần.",
      "C. Chỉ chạy mô hình trên kiểu dữ liệu số nguyên 4-bit.",
      "D. Chuyển toàn bộ các lớp Transformer thành các lớp tích chập CNN."
    ],
    correct_option: "B",
    explanation: "LoRA giả định sự cập nhật trọng số $\\Delta W$ có 'hạng nội tại' thấp. Nó biểu diễn $\\Delta W = B \\times A$ với B cỡ $d \\times r$ và A cỡ $r \\times k$ ($r \\ll d$). Chỉ có A và B được cập nhật, tiết kiệm đáng kể bộ nhớ GPU khi huấn luyện LLM."
  }
];
