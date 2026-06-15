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
      "A. Thiết kế tắt hoàn toàn hệ thống gợi ý cũ, chuyển sang hiển thị các món ăn ngẫu nhiên cho người dùng.",
      "B. Thiết kế tăng mạnh trọng số của món ăn cũ trong lịch sử để tối ưu hóa độ chính xác của mô hình gợi ý.",
      "C. Thiết kế thêm cơ chế khám phá lồng ghép món ăn mới có thuộc tính tương đồng hoặc món đang thịnh hành.",
      "D. Thiết kế yêu cầu người dùng nhập thủ công danh sách món ăn họ muốn thưởng thức vào mỗi buổi sáng."
    ],
    correct_option: "C",
    explanation: "Một hệ thống gợi ý tốt cần cân bằng giữa \"Khai thác\" (Exploitation - những gì người dùng đã thích) và \"Khám phá\" (Exploration - đề xuất cái mới tương tự) để tránh hiện tượng \"bẫy lọc\" gây nhàm chán."
  },
  {
    id: "Q_MOD_C_003", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Mô hình ngôn ngữ lớn (LLM) như GPT-4 hay các hệ thống chatbot thông minh hoạt động dựa trên việc dự đoán từ tiếp theo trong câu thuộc nhóm học máy nào?",
    options: [
      "A. Học có giám sát (Supervised) hoặc tự giám sát (Self-Supervised)",
      "B. Học không giám sát thuần túy (Unsupervised Learning) truyền thống",
      "C. Học tăng cường phản hồi từ môi trường (Reinforcement Learning)",
      "D. Học theo thuật toán tìm kiếm trên đồ thị cây (Depth-First Search)"
    ],
    correct_option: "A",
    explanation: "Việc dự đoán từ tiếp theo dựa trên các từ đã xuất hiện phía trước sử dụng chính các văn bản có sẵn làm \"nhãn\" tự nhiên để học, đây là bản chất của Học tự giám sát (Self-Supervised)."
  },
  {
    id: "Q_MOD_C_004", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Trường đại học muốn tích hợp một AI kiểm duyệt bài viết tự động trên mạng xã hội nội bộ của sinh viên nhằm loại bỏ các nội dung toxic, thô tục hoặc spam. Tuy nhiên, hệ thống ban đầu hoạt động quá nhạy cảm, liên tục khóa nhầm các bài viết thảo luận học thuật bình thường chỉ vì có chứa một vài từ ngữ mang tính tranh luận gay gắt. Là người phát triển sản phẩm, bạn nên làm gì?",
    options: [
      "A. Tắt hoàn toàn mô hình kiểm duyệt tự động bằng AI, quay lại cơ chế phân công nhân viên duyệt bài thủ công.",
      "B. Tăng ngưỡng tin cậy của AI khi khóa bài vi phạm, đồng thời thiết kế thêm tính năng khiếu nại cho sinh viên.",
      "C. Chuyển đổi toàn bộ từ ngữ tranh luận thành từ cấm để mô hình AI tự động quét và khóa triệt để các bài viết.",
      "D. Thiết lập hệ thống tự động khóa vĩnh viễn tài khoản của những sinh viên có phản hồi không tốt về bộ duyệt."
    ],
    correct_option: "B",
    explanation: "Nâng ngưỡng tin cậy (Confidence Threshold) giúp giảm tỷ lệ phạt nhầm (False Positive), và quy trình vận hành sản phẩm luôn cần một bước dự phòng (nút khiếu nại) để con người can thiệp khi AI sai sót."
  },
  {
    id: "Q_MOD_C_005", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Một công ty phát triển hệ thống AI để tự động phát hiện hành vi \"vượt đèn đỏ\" từ camera giao thông. Hệ thống hoạt động bằng cách kiểm tra xem xe có cắt qua vạch dừng khi đèn đang đỏ hay không. Bài toán này sử dụng luồng xử lý chính nào dưới đây?",
    options: [
      "A. Sử dụng mô hình nhận diện giọng nói để nghe tiếng còi và tiếng động cơ xe tại ngã tư giao thông.",
      "B. Sử dụng mô hình phát hiện vật thể để tìm xe và đèn, kết hợp theo dõi chuyển động qua các khung hình.",
      "C. Sử dụng mô hình ngôn ngữ lớn (LLM) để phân tích biển số xe và tự động suy luận ra hành vi vi phạm.",
      "D. Sử dụng thuật toán phân cụm không giám sát (Clustering) để phân nhóm hành vi di chuyển của xe máy."
    ],
    correct_option: "B",
    explanation: "Để bắt lỗi vượt đèn đỏ, AI cần nhận diện được vật thể tĩnh/động (xe, đèn tín hiệu) và sau đó theo dõi (Track) vị trí tọa độ của xe qua từng khung hình xem nó có cắt qua vạch giới hạn hay không."
  },
  {
    id: "Q_MOD_C_006", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Bạn xây dựng một Chatbot AI tư vấn tuyển sinh cho trường Đại học. Trong tuần đầu tiên ra mắt, hệ thống gặp hiện tượng \"ảo tưởng\" (Hallucination) – Chatbot tự bịa ra một ngành học không hề có thật của trường và tư vấn sai cho học sinh. Giải pháp nào dưới đây là tối ưu nhất?",
    options: [
      "A. Gỡ bỏ hoàn toàn hệ thống chatbot tự động, tuyển thêm nhân sự để trực và phản hồi tin nhắn thủ công.",
      "B. Áp dụng kỹ thuật RAG nhằm giới hạn phạm vi trả lời của chatbot trong tài liệu tuyển sinh được cung cấp.",
      "C. Tiến hành phạt tiền nhà phát triển mô hình AI hoặc cấu hình lại tham số phạt lỗi của thuật toán học máy.",
      "D. Vô hiệu hóa ô nhập câu hỏi tự do của học sinh, chỉ cho phép lựa chọn các câu hỏi mẫu có sẵn trong menu."
    ],
    correct_option: "B",
    explanation: "RAG (Retrieval-Augmented Generation) giới hạn không gian dữ liệu của LLM vào kho tài liệu chuẩn được cung cấp, giúp giảm thiểu tối đa hiện tượng \"bịa đặt\" thông tin (Hallucination)."
  },
  {
    id: "Q_MOD_C_007", module_id: "Module_C", difficulty: "Medium",
    tags: ["overfitting"],
    content: "Khi huấn luyện một mô hình học máy, hiện tượng mô hình \"học vẹt\" – đạt độ chính xác cực kỳ cao ($99\\%$) trên tập dữ liệu dùng để học (Train set) nhưng khi áp dụng vào dữ liệu thực tế mới (Test set) thì kết quả lại rất tệ ($50\\%$) được gọi là hiện tượng gì?",
    options: [
      "A. Hiện tượng Underfitting (Chưa khớp)",
      "B. Hiện tượng Overfitting (Quá khớp)",
      "C. Hiện tượng Optimization (Tối ưu hóa)",
      "D. Hiện tượng Vanishing (Tiêu biến đạo hàm)"
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
      "A. Chỉ cần sử dụng hệ thống thị giác máy tính (Computer Vision) kết hợp bộ lọc âm thanh tần số thấp.",
      "B. Kết hợp giữa nhận diện giọng nói (STT), xử lý ngôn ngữ tự nhiên (NLP) và tổng hợp giọng nói (TTS).",
      "C. Sử dụng hệ thống chuyên gia dựa trên các tập luật logic cố định (Rule-based) để dịch nghĩa trực tiếp.",
      "D. Áp dụng thuật toán tìm kiếm đồ thị kết hợp phân tích cú pháp tĩnh để suy luận và chuyển ngữ văn bản."
    ],
    correct_option: "B",
    explanation: "Quy trình này tích hợp 3 phân hệ AI độc lập: Speech-to-Text (STT) dịch âm thanh thành chữ; NLP dịch thuật ngôn ngữ; và Text-to-Speech (TTS) chuyển văn bản thành giọng đọc nhân tạo."
  },
  {
    id: "Q_MOD_C_010", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Nhà trường muốn phát triển một ứng dụng AI hỗ trợ sinh viên tự động tóm tắt nội dung các slide bài giảng dài thành các ý chính để ôn thi. Đầu vào là file PDF/Powerpoint, đầu ra là văn bản tóm tắt ngắn. Bạn nên đề xuất tích hợp mô hình AI thuộc nhóm nào?",
    options: [
      "A. Sử dụng mô hình phát hiện vật thể (Object Detection) để định vị chữ.",
      "B. Sử dụng mô hình ngôn ngữ lớn (LLM) hoặc các công nghệ AI tạo sinh.",
      "C. Sử dụng thuật toán dự báo chuỗi thời gian (Time Series Forecasting).",
      "D. Sử dụng phương pháp gom cụm dữ liệu (Clustering) không có giám sát."
    ],
    correct_option: "B",
    explanation: "Hiểu ngữ cảnh và tóm tắt văn bản dài (Text Summarization) là tính năng cốt lời và là thế mạnh lớn nhất của AI tạo sinh và mô hình ngôn ngữ lớn (LLM)."
  },
  {
    id: "Q_MOD_C_011", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Bạn triển khai hệ thống AI nhận diện khuôn mặt để nhân viên điểm danh tại cửa công ty. Vào mùa đông, rất nhiều người phàn nàn hệ thống không nhận diện được do họ đeo khẩu trang dày và đội mũ len kín tai. Cách giải quyết nào là hợp lý và tối ưu nhất về mặt sản phẩm?",
    options: [
      "A. Yêu cầu nhân viên tháo mũ và khẩu trang khi đi qua cửa quét bất kể tình trạng thời tiết khắc nghiệt.",
      "B. Thu thập thêm ảnh nhân viên đeo khẩu trang hoặc đội mũ để huấn luyện lại mô hình nhận diện khuôn mặt.",
      "C. Thay thế hoàn toàn bằng hệ thống nhận dạng giọng nói ngoài trời để tránh các tác động từ việc che mặt.",
      "D. Điều chỉnh ngưỡng tin cậy của hệ thống xuống mức rất thấp để đảm bảo mọi người đi qua đều được chấp nhận."
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
      "A. Bài toán phân loại nhãn (Classification)",
      "B. Bài toán hồi quy chuỗi thời gian (Regression)",
      "C. Bài toán gom cụm dữ liệu (Clustering)",
      "D. Bài toán thị giác máy tính (Computer Vision)"
    ],
    correct_option: "B",
    explanation: "Giá cổ phiếu là một giá trị số liên tục (Hồi quy) và dữ liệu được sắp xếp phụ thuộc trực tiếp vào mốc thời gian liên tục (Chuỗi thời gian - Time Series)."
  },
  {
    id: "Q_MOD_C_014", module_id: "Module_C", difficulty: "Medium",
    tags: ["transfer-learning"],
    content: "Kỹ thuật nào dưới đây cho phép bạn lấy một mô hình AI lớn đã được huấn luyện sẵn trên hàng triệu hình ảnh (như ResNet hoặc MobileNet) để áp dụng và tinh chỉnh (Fine-tune) vào bài toán nhận diện bệnh cây trồng cụ thể của bạn với tập dữ liệu nhỏ?",
    options: [
      "A. Thuật toán học tăng cường (Reinforcement Learning)",
      "B. Phương pháp học chuyển giao (Transfer Learning)",
      "C. Mô hình cây quyết định ngẫu nhiên (Random Forest)",
      "D. Thuật toán hồi quy tuyến tính (Linear Regression)"
    ],
    correct_option: "B",
    explanation: "Transfer Learning tận dụng mạng tri thức đặc trưng (đường nét, hình khối) mà mô hình lớn đã học được trước đó để tinh chỉnh sang một bài toán mới, giúp tiết kiệm tài nguyên và không cần tập dữ liệu khổng lồ."
  },
  {
    id: "Q_MOD_C_015", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Một ứng dụng thương mại điện tử tích hợp AI để gợi ý sản phẩm cho người dùng. Số liệu cho thấy hệ thống gợi ý rất chính xác các sản phẩm người dùng quan tâm, nhưng doanh thu không tăng vì giao diện hiển thị phần gợi ý này bị giấu quá sâu ở cuối trang, khiến người dùng không nhìn thấy. Vấn đề ở đây nằm ở đâu?",
    options: [
      "A. Mô hình AI bị lỗi logic và đưa ra dự đoán hoàn toàn không khớp với nhu cầu của khách hàng.",
      "B. Dữ liệu huấn luyện mô hình bị thiếu hụt nghiêm trọng khiến chất lượng gợi ý sản phẩm quá kém.",
      "C. Thiết kế trải nghiệm người dùng (UX) chưa tối ưu để khai thác được kết quả từ thuật toán gợi ý.",
      "D. Tốc độ xử lý của mô hình quá chậm chạp khiến hệ thống không thể hiển thị kết quả kịp thời."
    ],
    correct_option: "C",
    explanation: "Một sản phẩm AI thành công không chỉ cần mô hình thông minh, mà cần một thiết kế trải nghiệm người dùng (UI/UX) hợp lý để đưa kết quả của AI tiếp cận khách hàng một cách tự nhiên và đúng thời điểm."
  },
  {
    id: "Q_MOD_C_016", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Khi phát triển một ứng dụng camera AI giám sát giao thông ngoài trời để phạt nguội xe máy không đội mũ bảo hiểm, yếu tố môi trường nào sau đây ít ảnh hưởng nhất đến độ chính xác của mô hình Object Detection khi vận hành thực tế?",
    options: [
      "A. Sự thay đổi thời tiết cực đoan từ trời nắng gắt sang mưa giông lớn.",
      "B. Bóng cây đổ xuống mặt đường thay đổi vị trí theo thời gian trong ngày.",
      "C. Tiếng còi xe inh ỏi và âm thanh động cơ ồn ào phát ra từ các phương tiện.",
      "D. Ánh đèn pha từ các xe đi ngược chiều chiếu thẳng vào ống kính camera."
    ],
    correct_option: "C",
    explanation: "Mô hình Object Detection xử lý đầu vào là dữ liệu hình ảnh, do đó các yếu tố về ánh sáng, bóng đổ trực tiếp tác động lên pixel ảnh. Tiếng ồn âm thanh không thuộc luồng đầu vào nên không ảnh hưởng."
  },
  {
    id: "Q_MOD_C_017", module_id: "Module_C", difficulty: "Easy",
    tags: ["supervised-learning"],
    content: "Trong học máy có giám sát (Supervised Learning), mô hình học từ loại dữ liệu nào?",
    options: [
      "A. Dữ liệu chỉ chứa các đặc trưng đầu vào (features) và hoàn toàn không có nhãn kết quả.",
      "B. Dữ liệu đã được gán nhãn trước (gồm cả các đặc trưng đầu vào và nhãn đầu ra tương ứng).",
      "C. Dữ liệu được sinh ngẫu nhiên từ hệ thống máy tính mà không dựa trên thực tế thu thập.",
      "D. Dữ liệu phản hồi thu được thông qua việc thử và sai khi tương tác trực tiếp với môi trường."
    ],
    correct_option: "B",
    explanation: "Học có giám sát yêu cầu tập dữ liệu huấn luyện có nhãn (labeled data) gồm cặp đầu vào và đầu ra mong muốn để mô hình học cách ánh xạ."
  },
  {
    id: "Q_MOD_C_018", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Bài toán 'Phân tích cảm xúc' (Sentiment Analysis) từ các bình luận của khách hàng trên mạng xã hội thuộc lĩnh vực nào?",
    options: [
      "A. Lĩnh vực Thị giác máy tính (Computer Vision)",
      "B. Lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP)",
      "C. Lĩnh vực Nhận dạng giọng nói (Speech Recognition)",
      "D. Lĩnh vực Hồi quy tuyến tính (Linear Regression)"
    ],
    correct_option: "B",
    explanation: "Phân tích cảm xúc là hiểu ý nghĩa và thái độ của con người thể hiện qua văn bản, thuộc lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP)."
  },
  {
    id: "Q_MOD_C_019", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Tham số 'Temperature' trong các mô hình ngôn ngữ lớn (LLM) điều khiển yếu tố nào của câu trả lời?",
    options: [
      "A. Tốc độ phản hồi nhanh hay chậm của mô hình khi xử lý truy vấn.",
      "B. Giới hạn số lượng từ tối đa được phép sinh ra trong câu trả lời.",
      "C. Độ ngẫu nhiên, sự sáng tạo và tính đa dạng của văn bản sinh ra.",
      "D. Mức tiêu thụ tài nguyên và dung lượng bộ nhớ GPU của máy chủ."
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
      "C. Phép chia vector đặc trưng",
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
      "A. Thuật toán phân cụm K-Means",
      "B. Thuật toán lân cận K-Nearest Neighbors",
      "C. Thuật toán hồi quy Linear Regression",
      "D. Thuật toán giảm chiều dữ liệu PCA"
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
      "A. Thiết kế khung chat trống hoàn toàn để kích thích người dùng tự suy nghĩ câu hỏi.",
      "B. Hiển thị gợi ý các câu hỏi nhanh (Quick Prompts) để người dùng có thể nhấp chọn.",
      "C. Yêu cầu bắt buộc người dùng đăng ký tài khoản VIP trước khi bắt đầu cuộc hội thoại.",
      "D. Sử dụng thuật ngữ kỹ thuật chuyên sâu khi phản hồi để chứng tỏ sự chuyên nghiệp."
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
      "A. Bài toán phân loại hình ảnh (Image Classification)",
      "B. Bài toán phát hiện vật thể (Object Detection)",
      "C. Bài toán phân đoạn ngữ nghĩa (Semantic Segmentation)",
      "D. Bài toán sinh hình ảnh tự động (Image Generation)"
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
      "A. Chỉ số Latency càng cao sẽ phản ánh mô hình AI có độ thông minh và khả năng suy luận tốt hơn.",
      "B. Người dùng dễ bỏ cuộc hoặc nghĩ ứng dụng lỗi nếu phản hồi chậm mà không có tín hiệu tức thời.",
      "C. Chỉ số Latency hoàn toàn không gây ảnh hưởng đến trải nghiệm sử dụng thực tế của khách hàng.",
      "D. Chỉ số Latency cao sẽ hỗ trợ hệ thống tiết kiệm được tối đa năng lượng tiêu thụ cho máy chủ."
    ],
    correct_option: "B",
    explanation: "Thời gian phản hồi chậm gây khó chịu và giảm sút niềm tin của người dùng. Các hệ thống thường dùng kỹ thuật streaming chữ (word-by-word) để cải thiện cảm giác phản hồi nhanh."
  },
  {
    id: "Q_MOD_C_029", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Thuật ngữ 'Token' trong các mô hình ngôn ngữ lớn (LLM) là gì?",
    options: [
      "A. Chuỗi ký tự đóng vai trò làm khóa bảo mật khi truy cập vào hệ thống API của mô hình.",
      "B. Đơn vị văn bản nhỏ như từ hoặc ký tự được mô hình sử dụng để biểu diễn và xử lý ngôn ngữ.",
      "C. Tổng số lượng tham số học được chứa trong các lớp liên kết của mô hình ngôn ngữ lớn.",
      "D. Vùng nhớ đệm tạm thời trên card đồ họa chuyên dụng dùng để lưu trữ các phép tính song song."
    ],
    correct_option: "B",
    explanation: "LLM chia nhỏ văn bản đầu vào thành các tokens. Một từ có thể gồm một hoặc nhiều tokens tùy thuộc vào bộ mã hóa từ vựng (tokenizer) được sử dụng."
  },
  {
    id: "Q_MOD_C_030", module_id: "Module_C", difficulty: "Easy",
    tags: ["supervised-learning"],
    content: "Thuật toán học máy nào xây dựng một tập hợp các Cây quyết định (Decision Trees) và kết hợp kết quả của chúng để đưa ra dự đoán cuối cùng?",
    options: [
      "A. Thuật toán máy vector hỗ trợ (Support Vector Machine)",
      "B. Mô hình rừng quyết định ngẫu nhiên (Random Forest)",
      "C. Phương pháp hồi quy tuyến tính (Linear Regression)",
      "D. Thuật toán phân cụm dữ liệu tự động (K-Means)"
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
      "A. Một giá trị số nguyên duy nhất được gán cho từ đó dựa trên thứ tự trong từ điển.",
      "B. Một vector số thực nhiều chiều liên tục biểu diễn mối quan hệ ngữ nghĩa giữa các từ.",
      "C. Một chuỗi mã hóa nhị phân gồm các ký tự 0 và 1 dùng để tối ưu hóa không gian lưu trữ.",
      "D. Một biểu đồ tần suất mô tả số lần xuất hiện của từ trong toàn bộ tập văn bản huấn luyện."
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
      "A. Tăng số lượng kênh của ma trận đặc trưng qua các lớp ẩn.",
      "B. Giảm kích thước không gian ma trận để hạn chế việc quá khớp.",
      "C. Cập nhật và tinh chỉnh trực tiếp các tham số của mô hình.",
      "D. Biến đổi trực tiếp độ phân giải của file hình ảnh đầu vào."
    ],
    correct_option: "B",
    explanation: "Max Pooling giữ lại giá trị lớn nhất trong từng vùng cục bộ, giúp trích xuất các đặc trưng nổi bật nhất đồng thời giảm kích thước tính toán."
  },
  {
    id: "Q_MOD_C_035", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Trong hệ thống RAG (Retrieval-Augmented Generation), thành phần 'Vector Database' dùng để lưu trữ và truy vấn thông tin gì?",
    options: [
      "A. Lưu trữ mã nguồn chính và toàn bộ các cấu hình khởi tạo của mô hình ngôn ngữ lớn.",
      "B. Lưu trữ vector biểu diễn tài liệu để tìm kiếm nội dung tương đồng ngữ nghĩa câu hỏi.",
      "C. Lưu trữ thông tin định danh và lịch sử thực hiện giao dịch tài chính của người dùng.",
      "D. Lưu trữ kho hình ảnh chân dung và các tệp đa phương tiện của người dùng hệ thống."
    ],
    correct_option: "B",
    explanation: "Vector Database thực hiện lưu trữ các vector đại diện cho tri thức nội bộ. Khi người dùng hỏi, hệ thống chuyển câu hỏi thành vector rồi truy vấn vector gần nhất để lấy ngữ cảnh bổ sung cho LLM."
  },
  {
    id: "Q_MOD_C_036", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Khi thiết kế giao diện hiển thị câu trả lời từ mô hình AI tạo sinh văn bản (như ChatGPT), tại sao kiểu hiển thị 'streaming' (chữ xuất hiện từng từ) được ưa chuộng hơn hiển thị toàn bộ một lúc?",
    options: [
      "A. Giúp tiết kiệm đáng kể băng thông đường truyền mạng và giảm tải cho các tài nguyên máy chủ.",
      "B. Giảm thời gian chờ nhận thức của người dùng bằng cách hiển thị ngay lập tức các từ đầu tiên.",
      "C. Cải thiện độ chính xác và chất lượng ngữ nghĩa của các câu văn do mô hình AI tự sinh ra.",
      "D. Định hướng người dùng đọc chậm rãi và tập trung phân tích kỹ nội dung thông tin được phản hồi."
    ],
    correct_option: "B",
    explanation: "Hiển thị streaming (chunk-by-chunk) cải thiện trải nghiệm người dùng bằng cách cung cấp phản hồi hình ảnh tức thời khi mô hình bắt đầu tính toán, thay vì bắt họ nhìn vòng xoay tải dữ liệu."
  },
  {
    id: "Q_MOD_C_037", module_id: "Module_C", difficulty: "Medium",
    tags: ["unsupervised-learning"],
    content: "Làm thế nào để xác định số lượng cụm tối ưu $K$ trong thuật toán phân cụm K-Means?",
    options: [
      "A. Thiết lập mặc định giá trị K bằng một nửa tổng số lượng mẫu dữ liệu đầu vào.",
      "B. Sử dụng phương pháp đường cong cùi chỏ (Elbow) hoặc chỉ số phân tích Silhouette.",
      "C. Thực hiện lựa chọn giá trị K hoàn toàn ngẫu nhiên thông qua gieo số ngẫu nhiên.",
      "D. Xây dựng một mô hình hồi quy tuyến tính (Linear Regression) để tính toán tối ưu."
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
      "A. Xóa bỏ hoàn toàn các lớp đó ra khỏi cấu trúc mạng nơ-ron nhằm tinh giản mô hình.",
      "B. Giữ cố định trọng số của các lớp đó, không cập nhật chúng khi lan truyền ngược.",
      "C. Nhân đôi tốc độ tính toán đạo hàm của các lớp được chọn trong suốt quá trình học.",
      "D. Vận hành mô hình trong điều kiện nhiệt độ phòng máy chủ cực thấp để tránh quá nhiệt."
    ],
    correct_option: "B",
    explanation: "Đóng băng (Freezing) trọng số của các lớp trích xuất đặc trưng cơ bản (những lớp đầu tiên) giúp giữ lại tri thức cũ và chỉ huấn luyện các lớp cuối phù hợp với tác vụ mới."
  },
  {
    id: "Q_MOD_C_040", module_id: "Module_C", difficulty: "Medium",
    tags: ["overfitting"],
    content: "Kỹ thuật 'Early Stopping' ngăn chặn Overfitting bằng cách nào?",
    options: [
      "A. Kết thúc quá trình huấn luyện ngay khi đạt đủ số vòng lặp tối đa được thiết lập ban đầu.",
      "B. Dừng học khi sai số kiểm định bắt đầu tăng liên tục dù sai số trên tập huấn luyện vẫn giảm.",
      "C. Tự động ngắt hệ thống khi nhiệt độ vận hành của thiết bị phần cứng vượt ngưỡng an toàn.",
      "D. Loại bỏ bớt một phần dữ liệu huấn luyện có độ nhiễu cao trước khi bắt đầu huấn luyện."
    ],
    correct_option: "B",
    explanation: "Early Stopping theo dõi hiệu năng trên tập validation độc lập. Khi validation loss tăng lên, chứng tỏ mô hình bắt đầu học quá khớp (overfit) vào tập train, dừng học lúc này là tối ưu nhất."
  },
  {
    id: "Q_MOD_C_041", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Kỹ thuật 'Fine-tuning' (Tinh chỉnh) mô hình LLM khác với RAG (Retrieval-Augmented Generation) như thế nào?",
    options: [
      "A. Fine-tuning không làm thay đổi các trọng số của mô hình gốc, trong khi đó RAG thì cập nhật liên tục.",
      "B. Fine-tuning thay đổi trọng số mô hình; RAG chỉ cung cấp ngữ cảnh bổ sung vào prompt mà không đổi trọng số.",
      "C. RAG đòi hỏi chi phí và thời gian tính toán phản hồi chậm hơn so với phương pháp Fine-tuning gấp 100 lần.",
      "D. Fine-tuning là kỹ thuật chỉ áp dụng cho hình ảnh, còn RAG là giải pháp chỉ thiết kế riêng cho văn bản."
    ],
    correct_option: "B",
    explanation: "Fine-tuning thay đổi bản thân mô hình (học thêm luật, hành vi mới). RAG là kỹ thuật tìm kiếm ngữ cảnh rồi gửi kèm vào prompt, mô hình chỉ 'đọc' tài liệu được đưa thêm để trả lời chứ bản chất không thay đổi trọng số."
  },
  {
    id: "Q_MOD_C_042", module_id: "Module_C", difficulty: "Medium",
    tags: ["supervised-learning"],
    content: "Trong các mạng nơ-ron sâu, hiện tượng 'Tiêu biến đạo hàm' (Vanishing Gradient) ảnh hưởng như thế nào đến việc huấn luyện mô hình và cách khắc phục nào sau đây là hiệu quả?",
    options: [
      "A. Làm các giá trị trọng số bùng nổ tăng dần lên vô hạn; khắc phục bằng cách giảm mạnh learning rate.",
      "B. Làm đạo hàm lan truyền ngược triệt tiêu về 0; khắc phục bằng cách dùng hàm kích hoạt ReLU hoặc kết nối tắt.",
      "C. Làm cho quá trình xử lý diễn ra quá nhanh dẫn đến lỗi tràn bộ nhớ; khắc phục bằng cách dùng Batch Norm.",
      "D. Làm mô hình bị thiên lệch chỉ dự đoán duy nhất lớp đa số; khắc phục bằng cách áp dụng gom cụm K-Means."
    ],
    correct_option: "B",
    explanation: "Các hàm kích hoạt như Sigmoid hoặc Tanh có đạo hàm cực đại nhỏ ($<0.25$). Khi nhân chuỗi đạo hàm qua nhiều lớp, giá trị đạo hàm giảm lũy thừa về 0. ReLU (đạo hàm = 1 khi x > 0) và kết nối tắt trong ResNet giải quyết hiệu quả vấn đề này."
  },
  {
    id: "Q_MOD_C_043", module_id: "Module_C", difficulty: "Medium",
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
    id: "Q_MOD_C_044", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Mạng đối địch sinh tạo (GAN - Generative Adversarial Networks) bao gồm hai thành phần Generator và Discriminator. Trò chơi minimax giữa chúng được tối ưu hóa như thế nào?",
    options: [
      "A. Cả hai thành phần cùng phối hợp hành vi nhằm tối đa hóa một hàm mục tiêu toán học chung.",
      "B. Generator cố gắng sinh ảnh giả đánh lừa bộ phân biệt; Discriminator cố phân biệt ảnh thật giả.",
      "C. Generator tập trung thực hiện tác vụ phân loại hình ảnh, còn Discriminator tập sinh dữ liệu ảnh.",
      "D. Hai phân hệ này chạy song song độc lập và hoàn toàn không có sự tương tác hay truyền tin cho nhau."
    ],
    correct_option: "B",
    explanation: "GAN hoạt động như một trò chơi hai người có tổng bằng không. Generator sinh ảnh giả G(z) từ nhiễu z, Discriminator D(x) chấm điểm độ thật. Generator tối thiểu hóa $\\log(1 - D(G(z)))$ trong khi Discriminator tối đa hóa $\\log D(x) + \\log(1 - D(G(z)))$."
  },
  {
    id: "Q_MOD_C_045", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Khi huấn luyện các mô hình ngôn ngữ lớn (LLM), kỹ thuật RLHF (Reinforcement Learning from Human Feedback) đóng vai trò gì trong giai đoạn sau tiền huấn luyện?",
    options: [
      "A. Thúc đẩy tốc độ đọc và xử lý các token đầu vào của mô hình trong quá trình suy luận thực tế.",
      "B. Căn chỉnh câu trả lời theo tiêu chuẩn an toàn, hữu ích của người dùng nhờ mô hình phần thưởng.",
      "C. Thực hiện nén kích thước lưu trữ và giảm số lượng tham số để mô hình chạy được trên di động.",
      "D. Tự động sinh thêm các đoạn văn bản thô chất lượng cao để làm giàu tập dữ liệu huấn luyện gốc."
    ],
    correct_option: "B",
    explanation: "Sau khi học dự đoán từ (Pre-training) và học theo hướng dẫn (SFT), LLM có thể sinh nội dung độc hại hoặc vô ích. RLHF căn chỉnh mô hình thông qua phản hồi từ con người để đưa ra các câu trả lời tối ưu và an toàn nhất."
  },
  {
    id: "Q_MOD_C_046", module_id: "Module_C", difficulty: "Medium",
    tags: ["metrics"],
    content: "Chỉ số AUC-ROC (Area Under the Receiver Operating Characteristic curve) thể hiện năng lực nào của mô hình phân loại nhị phân?",
    options: [
      "A. Đo lường chính xác hiệu năng phân loại tại một ngưỡng phân tách quyết định cố định bằng $0.5$.",
      "B. Đo năng lực phân tách lớp âm tính và dương tính của mô hình trên toàn bộ các ngưỡng có thể có.",
      "C. Phản ánh tỷ số giữa tổng các mẫu được dự đoán chính xác trên tổng thời gian thực thi mô hình.",
      "D. Biểu thị độ rộng phân tán của hàm mật độ xác suất chuẩn đối với các biến đặc trưng dữ liệu."
    ],
    correct_option: "B",
    explanation: "ROC curve biểu diễn tỷ lệ True Positive Rate theo False Positive Rate tại các ngưỡng khác nhau. AUC (diện tích dưới đường cong) nằm trong $[0, 1]$. AUC càng gần 1 chứng tỏ mô hình phân loại cực tốt mà không phụ thuộc vào việc chọn ngưỡng ban đầu."
  },
  {
    id: "Q_MOD_C_047", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Khi thiết kế một sản phẩm AI phát hiện tin giả (Fake News Detection) hỗ trợ người kiểm duyệt nội dung mạng xã hội, làm sao để giải quyết vấn đề UX về niềm tin và tính minh bạch (Transparency) của AI?",
    options: [
      "A. Chỉ hiển thị trực tiếp kết quả phân loại Thật hoặc Giả và không cung cấp thêm bất kỳ lý do gì.",
      "B. Hiển thị độ tin cậy, highlight từ khóa nghi vấn và dẫn link tới nguồn đối chứng độc lập.",
      "C. Chọn giải pháp ẩn toàn bộ các kết quả dự đoán từ mô hình AI để tránh gây hoang mang cho độc giả.",
      "D. Cam kết và tuyên bố với người sử dụng rằng mô hình AI đạt độ chính xác tuyệt đối trong mọi trường hợp."
    ],
    correct_option: "B",
    explanation: "Sản phẩm AI cần giải thích được quyết định của mình (Explainability). Việc highlight bằng chứng và hiển thị độ tự tin giúp con người có cơ sở để đánh giá lại và tăng sự hợp tác người - máy."
  },
  {
    id: "Q_MOD_C_048", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Trong kiến trúc RAG nâng cao (Advanced RAG), kỹ thuật 'Query Rewriting' hoặc 'Query Expansion' giải quyết vấn đề gì?",
    options: [
      "A. Tự động chuyển ngữ câu hỏi đầu vào sang ngôn ngữ phổ biến để hệ thống truy vấn thông tin nhanh hơn.",
      "B. Diễn đạt lại hoặc mở rộng câu hỏi của người dùng để cải thiện độ chính xác khi tìm kiếm trong vector DB.",
      "C. Thực hiện kiểm duyệt và tự động loại bỏ các câu hỏi quá phức tạp hoặc nằm ngoài phạm vi hỗ trợ.",
      "D. Chuyển đổi định dạng câu hỏi từ ký tự văn bản sang dạng sóng âm thanh trước khi thực hiện tìm kiếm."
    ],
    correct_option: "B",
    explanation: "Người dùng thường đặt câu hỏi ngắn hoặc mơ hồ. Query Rewriting sử dụng LLM để diễn đạt lại câu hỏi theo nhiều hướng khác nhau, tăng khả năng khớp ngữ nghĩa với tài liệu gốc trong vector database."
  },
  {
    id: "Q_MOD_C_049", module_id: "Module_C", difficulty: "Medium",
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
    id: "Q_MOD_C_050", module_id: "Module_C", difficulty: "Medium",
    tags: ["transfer-learning"],
    content: "Phương pháp 'Parameter-Efficient Fine-Tuning' (PEFT), tiêu biểu là LoRA (Low-Rank Adaptation), hoạt động dựa trên nguyên lý nào để tiết kiệm tài nguyên tính toán?",
    options: [
      "A. Thực hiện cắt tỉa bớt $90\\%$ số lượng neuron không quan trọng trong mô hình gốc trước khi thực thi.",
      "B. Đóng băng trọng số gốc và chỉ huấn luyện thêm cặp ma trận phân rã hạng thấp song song các lớp cũ.",
      "C. Chuyển đổi và chỉ chạy mô hình trên các kiểu dữ liệu số nguyên độ chính xác thấp ở dạng 4-bit.",
      "D. Thay thế toàn bộ các cơ chế tự chú ý (Self-Attention) trong Transformer bằng các lớp tích chập CNN."
    ],
    correct_option: "B",
    explanation: "LoRA giả định sự cập nhật trọng số $\\Delta W$ có 'hạng nội tại' thấp. Nó biểu diễn $\\Delta W = B \\times A$ với B cỡ $d \\times r$ và A cỡ $r \\times k$ ($r \\ll d$). Chỉ có A và B được cập nhật, tiết kiệm đáng kể bộ nhớ GPU khi huấn luyện LLM."
  },
  {
    id: "Q_MOD_C_051", module_id: "Module_C", difficulty: "Easy",
    tags: ["machine-learning", "supervised-learning"],
    content: "Trong học máy, bài toán nào sau đây là bài toán hồi quy (Regression)?",
    options: [
      "A. Dự đoán xem một email nhận được có phải là thư rác hay không.",
      "B. Dự đoán nhiệt độ trung bình của ngày mai dựa trên dữ liệu cũ.",
      "C. Phân nhóm khách hàng siêu thị thành các phân khúc tiêu dùng.",
      "D. Nhận diện khuôn mặt của nhân viên để tự động mở cửa ra vào."
    ],
    correct_option: "B",
    explanation: "Bài toán hồi quy nhằm dự đoán một giá trị số thực liên tục (như nhiệt độ). Các phương án còn lại là phân loại (A, D) hoặc phân cụm (C)."
  },
  {
    id: "Q_MOD_C_052", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Ứng dụng nào sau đây KHÔNG phải là ứng dụng trực tiếp của lĩnh vực Thị giác máy tính (Computer Vision)?",
    options: [
      "A. Tự động phát hiện lỗi sản phẩm trên băng chuyền nhà máy.",
      "B. Phân tích tần số âm thanh để nhận diện người đang nói.",
      "C. Nhận diện biển số xe từ hình ảnh chụp của camera đường.",
      "D. Phân đoạn tế bào ung thư từ ảnh chụp cộng hưởng từ MRI."
    ],
    correct_option: "B",
    explanation: "Phân tích âm thanh để nhận diện người nói thuộc lĩnh vực Xử lý âm thanh (Audio Processing) hoặc Nhận dạng giọng nói (Speech Recognition), không thuộc thị giác máy tính."
  },
  {
    id: "Q_MOD_C_053", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Trong xử lý ngôn ngữ tự nhiên (NLP), tác vụ chuyển dịch tự động văn bản từ ngôn ngữ này sang ngôn ngữ khác được gọi là:",
    options: [
      "A. Dịch máy (Machine Translation)",
      "B. Phân tích cảm xúc (Sentiment)",
      "C. Nhận diện thực thể (NER)",
      "D. Tóm tắt văn bản (Summarization)"
    ],
    correct_option: "A",
    explanation: "Dịch máy (Machine Translation) là tác vụ sử dụng máy tính để dịch tự động văn bản hoặc giọng nói từ ngôn ngữ này sang ngôn ngữ khác."
  },
  {
    id: "Q_MOD_C_054", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-metrics"],
    content: "Khi đánh giá hiệu quả của một hệ thống chatbot AI hỗ trợ khách hàng, chỉ số 'CSAT' (Customer Satisfaction) đo lường điều gì?",
    options: [
      "A. Tốc độ phản hồi trung bình của hệ thống chatbot.",
      "B. Mức độ hài lòng của khách hàng đối với dịch vụ.",
      "C. Tỷ lệ phần trăm các câu hỏi chatbot tự giải quyết.",
      "D. Tổng số lượng tin nhắn trao đổi trong một phiên."
    ],
    correct_option: "B",
    explanation: "CSAT (Customer Satisfaction Score) là chỉ số đo lường mức độ hài lòng của khách hàng đối với một dịch vụ hoặc trải nghiệm cụ thể."
  },
  {
    id: "Q_MOD_C_055", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Trong ngữ cảnh sử dụng các API của mô hình ngôn ngữ lớn (LLM), 'token' thường được tính phí dựa trên:",
    options: [
      "A. Số lượng ký tự chữ và số xuất hiện trong prompt.",
      "B. Cả số lượng token đầu vào và số token đầu ra sinh ra.",
      "C. Tổng thời gian máy chủ xử lý để trả lời câu hỏi.",
      "D. Dung lượng lưu trữ của tệp văn bản gửi lên hệ thống."
    ],
    correct_option: "B",
    explanation: "Các nhà cung cấp API LLM thường tính phí dựa trên cả số lượng token đầu vào (prompt tokens) và số lượng token đầu ra (completion tokens)."
  },
  {
    id: "Q_MOD_C_056", module_id: "Module_C", difficulty: "Easy",
    tags: ["machine-learning"],
    content: "Trong học máy, tập dữ liệu nào sau đây được sử dụng để trực tiếp điều chỉnh các tham số (trọng số) của mô hình?",
    options: [
      "A. Tập huấn luyện (Training Set)",
      "B. Tập kiểm định (Validation Set)",
      "C. Tập kiểm thử (Test Set)",
      "D. Tập dữ liệu ngoại lai (Outliers)"
    ],
    correct_option: "A",
    explanation: "Tập huấn luyện (Training Set) được mô hình sử dụng trực tiếp để cập nhật các trọng số trong quá trình học."
  },
  {
    id: "Q_MOD_C_057", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-ux"],
    content: "Khi thiết kế một ứng dụng AI tạo ảnh nghệ thuật từ văn bản, yếu tố nào giúp giảm cảm giác sốt ruột của người dùng khi chờ AI xử lý?",
    options: [
      "A. Hiển thị thông báo yêu cầu người dùng kiên nhẫn chờ.",
      "B. Hiển thị thanh tiến trình tiến độ hoặc hình ảnh mờ dần.",
      "C. Ẩn hoàn toàn giao diện tải để người dùng làm việc khác.",
      "D. Tự động chuyển hướng người dùng sang trang quảng cáo."
    ],
    correct_option: "B",
    explanation: "Hiển thị thanh tiến trình (progress bar) hoặc quá trình hiển thị ảnh rõ nét dần giúp giảm thời gian chờ nhận thức (perceived latency) và cải thiện UX."
  },
  {
    id: "Q_MOD_C_058", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Trong quá trình tiền xử lý văn bản tiếng Anh cho NLP, việc đưa các từ như 'running', 'runs', 'ran' về từ gốc 'run' được gọi là:",
    options: [
      "A. Phân đoạn câu (Sentence Segmentation)",
      "B. Chuẩn hóa dạng gốc (Stemming/Lemmatization)",
      "C. Loại bỏ các từ dừng (Stopwords Removal)",
      "D. Trích xuất đặc trưng (Feature Extraction)"
    ],
    correct_option: "B",
    explanation: "Stemming và Lemmatization là các kỹ thuật biến đổi các dạng khác nhau của một từ về dạng gốc của nó để giảm kích thước từ vựng."
  },
  {
    id: "Q_MOD_C_059", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Thuật ngữ 'Pixel' trong xử lý hình ảnh kỹ thuật số đại diện cho điều gì?",
    options: [
      "A. Tên một thuật toán nhận diện vật thể tự động.",
      "B. Đơn vị nhỏ nhất của một bức ảnh kỹ thuật số.",
      "C. Thời gian phản hồi của cảm biến máy ảnh.",
      "D. Kích thước vật lý của một bức ảnh in ra."
    ],
    correct_option: "B",
    explanation: "Pixel (điểm ảnh) là đơn vị nhỏ nhất cấu thành nên một bức ảnh kỹ thuật số, chứa thông tin về màu sắc và độ sáng."
  },
  {
    id: "Q_MOD_C_060", module_id: "Module_C", difficulty: "Easy",
    tags: ["machine-learning"],
    content: "Bài toán nào sau đây thuộc nhóm học máy không giám sát (Unsupervised Learning)?",
    options: [
      "A. Phân loại email là thư rác hay thư thông thường.",
      "B. Dự báo doanh số bán hàng của tháng tiếp theo.",
      "C. Phân nhóm các khách hàng dựa trên hành vi mua.",
      "D. Nhận diện các ký tự viết tay từ ảnh quét số."
    ],
    correct_option: "C",
    explanation: "Phân nhóm khách hàng (Clustering) không cần gán nhãn trước cho dữ liệu đầu vào, do đó thuộc nhóm học máy không giám sát."
  },
  {
    id: "Q_MOD_C_061", module_id: "Module_C", difficulty: "Easy",
    tags: ["llm"],
    content: "Trong các mô hình sinh văn bản, hiện tượng AI đưa ra các thông tin hoàn toàn sai lệch nhưng được viết rất thuyết phục gọi là:",
    options: [
      "A. Quá khớp dữ liệu (Overfitting)",
      "B. Sự ảo tưởng (Hallucination)",
      "C. Tiêu biến gradient (Vanishing)",
      "D. Độ lệch hệ thống (System Bias)"
    ],
    correct_option: "B",
    explanation: "Ảo tưởng (Hallucination) là hiện tượng mô hình ngôn ngữ lớn sinh ra các thông tin không có thực hoặc sai lệch so với nguồn dữ liệu chuẩn."
  },
  {
    id: "Q_MOD_C_062", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-metrics"],
    content: "Để đánh giá xem người dùng có thực sự tương tác tích cực với tính năng gợi ý của AI hay không, chỉ số nào sau đây là phù hợp nhất?",
    options: [
      "A. Tỷ lệ nhấp chuột vào gợi ý (Click-Through Rate - CTR)",
      "B. Tổng số lượng gợi ý được hệ thống sinh ra mỗi ngày.",
      "C. Dung lượng bộ nhớ RAM của máy chủ chạy mô hình gợi ý.",
      "D. Số lần cập nhật cơ sở dữ liệu sản phẩm trong một tuần."
    ],
    correct_option: "A",
    explanation: "CTR đo lường tỷ lệ người dùng nhấp vào gợi ý trên tổng số lần gợi ý hiển thị, phản ánh trực tiếp mức độ quan tâm của họ."
  },
  {
    id: "Q_MOD_C_063", module_id: "Module_C", difficulty: "Easy",
    tags: ["ethics"],
    content: "Khi triển khai hệ thống AI tuyển dụng, nếu dữ liệu huấn luyện lịch sử chỉ chứa hồ sơ của nam giới, hệ thống có nguy cơ cao gặp lỗi gì?",
    options: [
      "A. Mô hình sẽ chạy chậm hơn do thiếu đa dạng dữ liệu.",
      "B. Định kiến và thiên vị giới tính (Bias) đối với nữ giới.",
      "C. Quá khớp mô hình do dữ liệu huấn luyện quá phức tạp.",
      "D. Tiêu biến gradient ở các lớp sâu của mạng nơ-ron."
    ],
    correct_option: "B",
    explanation: "Nếu dữ liệu huấn luyện bị mất cân bằng hoặc chứa định kiến lịch sử, mô hình AI sẽ học theo định kiến đó, dẫn đến thiên vị giới tính (Bias)."
  },
  {
    id: "Q_MOD_C_064", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Trong xử lý ngôn ngữ tự nhiên, từ viết tắt 'NLP' đại diện cho thuật ngữ tiếng Anh nào sau đây?",
    options: [
      "A. Natural Language Processing",
      "B. Network Link Protocol",
      "C. Neural Logic Program",
      "D. National Language Project"
    ],
    correct_option: "A",
    explanation: "NLP là viết tắt của Natural Language Processing, tức Xử lý ngôn ngữ tự nhiên."
  },
  {
    id: "Q_MOD_C_065", module_id: "Module_C", difficulty: "Easy",
    tags: ["computer-vision"],
    content: "Tác vụ nào sau đây xác định ranh giới chi tiết của từng vật thể ở mức độ điểm ảnh (pixel) thay vì dùng khung hình chữ nhật?",
    options: [
      "A. Phân loại hình ảnh (Image Classification)",
      "B. Phân đoạn hình ảnh (Image Segmentation)",
      "C. Phát hiện vật thể (Object Detection)",
      "D. Trích xuất đặc trưng (Feature Extraction)"
    ],
    correct_option: "B",
    explanation: "Image Segmentation (Phân đoạn hình ảnh) phân loại từng điểm ảnh (pixel) thuộc về vật thể nào, xác định ranh giới chi tiết của vật thể."
  },
  {
    id: "Q_MOD_C_066", module_id: "Module_C", difficulty: "Easy",
    tags: ["machine-learning"],
    content: "Trong mô hình học máy, các tham số như tốc độ học (learning rate) hay số lượng cây quyết định được gọi chung là:",
    options: [
      "A. Trọng số mô hình (Model Weights)",
      "B. Siêu tham số (Hyperparameters)",
      "C. Hàm mất mát (Loss Functions)",
      "D. Nhãn dữ liệu (Data Labels)"
    ],
    correct_option: "B",
    explanation: "Siêu tham số (Hyperparameters) là các tham số được thiết lập trước quá trình huấn luyện mô hình để điều khiển quá trình học."
  },
  {
    id: "Q_MOD_C_067", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-ux"],
    content: "Khi giới thiệu một tính năng AI mới cho người dùng, cách tiếp cận nào về mặt UX giúp họ dễ dàng tiếp nhận nhất?",
    options: [
      "A. Hiển thị bảng giải thích các thuật toán toán học sâu.",
      "B. Hướng dẫn từng bước trực quan kèm theo ví dụ cụ thể.",
      "C. Ép buộc người dùng sử dụng và khóa các tính năng cũ.",
      "D. Yêu cầu người dùng tự đọc tài liệu kỹ thuật của API."
    ],
    correct_option: "B",
    explanation: "Hướng dẫn trực quan (onboarding) giúp người dùng hiểu giá trị và cách dùng tính năng AI mà không bị quá tải thông tin."
  },
  {
    id: "Q_MOD_C_068", module_id: "Module_C", difficulty: "Easy",
    tags: ["nlp"],
    content: "Tác vụ nào dưới đây xác định các từ chỉ tên người, địa danh, hoặc tổ chức trong một câu văn bản?",
    options: [
      "A. Nhận diện thực thể liên kết (Entity Linking)",
      "B. Nhận diện thực thể tên (Named Entity Recognition)",
      "C. Gán nhãn từ loại (Part-of-Speech Tagging)",
      "D. Phân tích cú pháp câu (Dependency Parsing)"
    ],
    correct_option: "B",
    explanation: "Named Entity Recognition (NER) là tác vụ định vị và phân loại các thực thể có tên trong văn bản thành các nhóm như người, tổ chức, địa điểm."
  },
  {
    id: "Q_MOD_C_069", module_id: "Module_C", difficulty: "Easy",
    tags: ["machine-learning"],
    content: "Mục tiêu chính của việc chia dữ liệu thành tập huấn luyện (Train) và tập kiểm thử (Test) là để làm gì?",
    options: [
      "A. Tăng dung lượng lưu trữ của cơ sở dữ liệu huấn luyện.",
      "B. Đánh giá khả năng khái quát hóa của mô hình trên dữ liệu mới.",
      "C. Đảm bảo mô hình đạt độ chính xác $100\\%$ trên tập Train.",
      "D. Rút ngắn thời gian huấn luyện mô hình trên máy tính."
    ],
    correct_option: "B",
    explanation: "Chia tập dữ liệu giúp kiểm tra khả năng dự đoán của mô hình trên dữ liệu chưa từng thấy (Test set), tránh tình trạng học vẹt."
  },
  {
    id: "Q_MOD_C_070", module_id: "Module_C", difficulty: "Easy",
    tags: ["product-metrics"],
    content: "Chỉ số 'Precision' trong mô hình phân loại email rác đo lường điều gì?",
    options: [
      "A. Tỷ lệ email rác thực tế được mô hình nhận diện chính xác.",
      "B. Tỷ lệ email được dự đoán là rác thực sự là email rác.",
      "C. Tốc độ trung bình để phân loại một email của hệ thống.",
      "D. Tổng số lượng email rác được người dùng báo cáo thủ công."
    ],
    correct_option: "B",
    explanation: "Precision (Độ chính xác) đo tỷ lệ mẫu dự đoán dương tính thực sự là dương tính thực tế: $Precision = \\frac{TP}{TP + FP}$."
  },
  {
    id: "Q_MOD_C_071", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning", "metrics"],
    content: "Một mô hình phân loại bệnh có kết quả như sau: Trong 100 người thực sự mắc bệnh, mô hình dự đoán đúng 90 người mắc bệnh. Chỉ số 0.9 ($90\\%$) này đại diện cho chỉ số nào?",
    options: [
      "A. Độ chính xác dương tính (Precision)",
      "B. Độ nhạy của mô hình phân loại (Recall / Sensitivity)",
      "C. Độ đặc hiệu của mô hình (Specificity)",
      "D. Chỉ số cân bằng hài hòa (F1-Score)"
    ],
    correct_option: "B",
    explanation: "Recall đo tỷ lệ phát hiện được các trường hợp dương tính thực tế: $Recall = \\frac{TP}{TP + FN} = \\frac{90}{100} = 0.9$."
  },
  {
    id: "Q_MOD_C_072", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Kỹ thuật tăng cường dữ liệu hình ảnh (Image Data Augmentation) nào dưới đây giúp cải thiện tính bất biến đối với hướng quay của vật thể trong mô hình CNN?",
    options: [
      "A. Thay đổi ngẫu nhiên độ sáng và độ tương phản của ảnh.",
      "B. Thực hiện xoay ngẫu nhiên (Rotation) và lật ảnh (Flipping).",
      "C. Cắt tỉa bớt kích thước biên ngoài của bức ảnh gốc.",
      "D. Chuẩn hóa phân phối giá trị các pixel ảnh về $[0, 1]$."
    ],
    correct_option: "B",
    explanation: "Xoay và lật ảnh giúp mô hình CNN học được các đặc trưng độc lập với hướng xoay và vị trí của vật thể trong không gian ảnh."
  },
  {
    id: "Q_MOD_C_073", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp"],
    content: "Trong kiến trúc mạng nơ-ron tuần hoàn (RNN), hiện tượng các đạo hàm bị giảm lũy thừa về 0 khi lan truyền ngược qua các bước thời gian dài được gọi là gì và mạng nào giải quyết được?",
    options: [
      "A. Lỗi bùng nổ đạo hàm (Exploding Gradient); giải quyết bằng mạng CNN.",
      "B. Lỗi tiêu biến đạo hàm (Vanishing Gradient); giải quyết bằng LSTM.",
      "C. Lỗi quá khớp dữ liệu huấn luyện; giải quyết bằng mô hình hồi quy.",
      "D. Lỗi phân tách ma trận trọng số; giải quyết bằng thuật toán KNN."
    ],
    correct_option: "B",
    explanation: "RNN truyền thống gặp lỗi tiêu biến đạo hàm khi lưu trữ thông tin dài hạn. LSTM (Long Short-Term Memory) với các cổng thông tin giải quyết vấn đề này."
  },
  {
    id: "Q_MOD_C_074", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Một tính năng AI gợi ý sản phẩm hiển thị thông báo: 'Sản phẩm này được gợi ý dựa trên lịch sử mua sách lịch sử của bạn'. Thiết kế này áp dụng nguyên lý UX nào?",
    options: [
      "A. Tăng tính bảo mật thông tin cá nhân của khách hàng.",
      "B. Giải thích được quyết định của AI (AI Explainability).",
      "C. Tối ưu hóa thời gian phản hồi của thuật toán gợi ý.",
      "D. Giảm dung lượng truyền tải dữ liệu của trang web."
    ],
    correct_option: "B",
    explanation: "Giải thích lý do gợi ý giúp xây dựng niềm tin của người dùng đối với các dự đoán của AI, thuộc nhóm thiết kế giải thích được (Explainable AI)."
  },
  {
    id: "Q_MOD_C_075", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Khi sử dụng mô hình LLM thông qua API, việc tăng tham số 'Top-P' (Nucleus Sampling) từ $0.1$ lên $0.9$ sẽ ảnh hưởng như thế nào đến văn bản sinh ra?",
    options: [
      "A. Giảm kích thước bộ nhớ cần thiết để sinh ra một từ.",
      "B. Tăng tính đa dạng và độ sáng tạo của văn bản đầu ra.",
      "C. Làm cho câu trả lời ngắn gọn và nhất quán logic hơn.",
      "D. Đẩy nhanh thời gian phản hồi trung bình của máy chủ."
    ],
    correct_option: "B",
    explanation: "Top-P giới hạn việc chọn từ tiếp theo trong nhóm các từ có tổng xác suất tích lũy đạt P. P tăng lên $0.9$ cho phép mô hình cân nhắc nhiều từ ứng viên hơn, tăng tính đa dạng."
  },
  {
    id: "Q_MOD_C_076", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning"],
    content: "Trong các thuật toán phân loại, mô hình Support Vector Machine (SVM) tìm kiếm đường ranh giới quyết định (Decision Boundary) dựa trên tiêu chí nào?",
    options: [
      "A. Tối thiểu hóa tổng bình phương các sai số dự đoán.",
      "B. Tối đa hóa lề (Margin) giữa các điểm hỗ trợ gần nhất.",
      "C. Tính toán xác suất hậu nghiệm dựa trên định lý Bayes.",
      "D. Xây dựng cấu trúc cây quyết định có độ lợi thông tin."
    ],
    correct_option: "B",
    explanation: "SVM tìm một siêu phẳng phân tách các lớp sao cho khoảng cách lề (Margin) giữa các điểm hỗ trợ (Support Vectors) gần nhất của hai lớp là lớn nhất."
  },
  {
    id: "Q_MOD_C_077", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Trong quy trình xây dựng hệ thống RAG, tại sao chúng ta cần chia tài liệu văn bản dài thành các đoạn nhỏ (Chunking) trước khi tạo vector embedding?",
    options: [
      "A. Để giảm dung lượng lưu trữ của cơ sở dữ liệu quan hệ.",
      "B. Giúp giữ ngữ cảnh tập trung và khớp chính xác hơn khi tìm kiếm.",
      "C. Bắt buộc để mô hình LLM có thể đọc được tài liệu gốc.",
      "D. Để ẩn đi các thông tin nhạy cảm của tài liệu gốc."
    ],
    correct_option: "B",
    explanation: "Chia nhỏ tài liệu (Chunking) giúp các đoạn văn bản giữ nội dung tập trung vào một chủ đề cụ thể, tăng hiệu năng tìm kiếm ngữ nghĩa."
  },
  {
    id: "Q_MOD_C_078", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-metrics"],
    content: "Một công ty muốn đo lường tỷ lệ người dùng tiếp tục sử dụng ứng dụng AI sau 30 ngày kể từ ngày cài đặt. Chỉ số này được gọi là gì?",
    options: [
      "A. Tỷ lệ chuyển đổi (Conversion Rate)",
      "B. Tỷ lệ giữ chân người dùng (Retention Rate)",
      "C. Tỷ lệ rời bỏ dịch vụ (Churn Rate)",
      "D. Tốc độ tăng trưởng người dùng (Growth Rate)"
    ],
    correct_option: "B",
    explanation: "Retention Rate (Tỷ lệ giữ chân) đo lường phần trăm người dùng tiếp tục hoạt động trong hệ thống sau một khoảng thời gian nhất định."
  },
  {
    id: "Q_MOD_C_079", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning"],
    content: "Khi tập dữ liệu huấn luyện gặp hiện tượng mất cân bằng lớp nghiêm trọng (ví dụ $99\\%$ bình thường, $1\\%$ gian lận), phương pháp 'SMOTE' giải quyết bằng cách nào?",
    options: [
      "A. Loại bỏ ngẫu nhiên các mẫu thuộc lớp đa số để cân bằng.",
      "B. Tự động sinh thêm mẫu giả cho lớp thiểu số bằng cách nội suy.",
      "C. Tăng hệ số phạt sai số đối với mẫu thuộc lớp đa số.",
      "D. Sử dụng mạng nơ-ron tích chập để tự trích xuất đặc trưng."
    ],
    correct_option: "B",
    explanation: "SMOTE (Synthetic Minority Over-sampling Technique) sinh ra các mẫu dữ liệu mới cho lớp thiểu số bằng cách nội suy giữa các điểm dữ liệu lân cận."
  },
  {
    id: "Q_MOD_C_080", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Trong mô hình phát hiện vật thể YOLO, chỉ số IoU (Intersection over Union) được sử dụng để làm gì?",
    options: [
      "A. Tăng tốc độ tính toán các lớp tích chập của mạng CNN.",
      "B. Đo mức độ chồng lấp giữa khung dự đoán và khung thực tế.",
      "C. Xác định nhãn phân loại chính xác nhất cho vật thể.",
      "D. Giảm độ phân giải hình ảnh đầu vào của mô hình học."
    ],
    correct_option: "B",
    explanation: "IoU đo tỷ lệ diện tích phần giao nhau trên phần hợp nhau của khung dự đoán (predicted bounding box) và khung thực tế (ground truth box)."
  },
  {
    id: "Q_MOD_C_081", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp"],
    content: "Phương pháp biểu diễn văn bản TF-IDF đánh giá tầm quan trọng của một từ trong một văn bản dựa trên những yếu tố nào?",
    options: [
      "A. Tổng số lượng ký tự cấu thành nên từ đó trong văn bản gốc.",
      "B. Tần suất xuất hiện trong văn bản và nghịch đảo tần suất tài liệu.",
      "C. Vị trí xuất hiện của từ ở đầu hay ở cuối câu văn bản.",
      "D. Mối quan hệ ngữ nghĩa của từ đó đối với các từ xung quanh."
    ],
    correct_option: "B",
    explanation: "TF-IDF kết hợp tần suất xuất hiện của từ trong tài liệu (TF) và nghịch đảo tần suất xuất hiện của từ đó trong toàn bộ tập tài liệu (IDF)."
  },
  {
    id: "Q_MOD_C_082", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Khi AI thực hiện dự đoán sai lệch đối với hành vi người dùng, cơ chế UX 'Implicit Feedback' (phản hồi ngầm định) thu thập dữ liệu bằng cách nào?",
    options: [
      "A. Hiển thị thông báo yêu cầu người dùng đánh giá 5 sao.",
      "B. Theo dõi hành vi tắt gợi ý hoặc bỏ qua không nhấp chọn.",
      "C. Gửi email khảo sát ý kiến khách hàng hàng tuần.",
      "D. Yêu cầu người dùng viết báo cáo lỗi gửi về bộ phận hỗ trợ."
    ],
    correct_option: "B",
    explanation: "Phản hồi ngầm định (Implicit Feedback) thu thập thông tin qua hành vi tự nhiên của người dùng (như bỏ qua gợi ý, thời gian xem) thay vì yêu cầu đánh giá trực tiếp."
  },
  {
    id: "Q_MOD_C_083", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning"],
    content: "Kỹ thuật kiểm định chéo K-Fold Cross-Validation giải quyết vấn đề gì khi đánh giá hiệu năng mô hình học máy?",
    options: [
      "A. Giúp giảm thiểu thời gian huấn luyện mô hình trên máy chủ.",
      "B. Tránh việc đánh giá mô hình bị thiên lệch do chia tập Train/Test.",
      "C. Tăng số lượng tham số học được của các mạng nơ-ron sâu.",
      "D. Khắc phục lỗi tiêu biến đạo hàm khi lan truyền ngược."
    ],
    correct_option: "B",
    explanation: "K-Fold chia dữ liệu thành K phần, huấn luyện K lần trên K-1 phần và kiểm thử trên phần còn lại. Điều này giúp đánh giá khách quan và ổn định hiệu năng mô hình."
  },
  {
    id: "Q_MOD_C_084", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm"],
    content: "Trong prompt engineering, kỹ thuật 'Few-shot Prompting' khác biệt như thế nào so với 'Zero-shot Prompting'?",
    options: [
      "A. Few-shot sử dụng mô hình AI có số lượng tham số lớn hơn.",
      "B. Few-shot cung cấp thêm một vài ví dụ minh họa trong prompt.",
      "C. Few-shot cập nhật trọng số của mô hình ngôn ngữ lớn.",
      "D. Few-shot chạy nhanh hơn nhiều so với Zero-shot."
    ],
    correct_option: "B",
    explanation: "Few-shot Prompting đưa kèm một vài ví dụ (cặp đầu vào-đầu ra mẫu) vào trong ngữ cảnh prompt để mô hình học theo phong cách trả lời."
  },
  {
    id: "Q_MOD_C_085", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-metrics"],
    content: "Khi triển khai hệ thống AI lọc tin nhắn độc hại, chỉ số FDR (False Discovery Rate) tăng cao sẽ ảnh hưởng trực tiếp đến người dùng như thế nào?",
    options: [
      "A. Tin nhắn độc hại lọt qua bộ lọc nhiều hơn bình thường.",
      "B. Nhiều tin nhắn bình thường bị hệ thống khóa nhầm hơn.",
      "C. Thời gian gửi và nhận tin nhắn bị trễ lâu hơn.",
      "D. Tài khoản người dùng tự động bị đăng xuất khỏi hệ thống."
    ],
    correct_option: "B",
    explanation: "False Discovery Rate là tỷ lệ mẫu bị dự báo sai là dương tính trên tổng số mẫu dự báo dương tính. FDR cao nghĩa là trong số các tin nhắn bị khóa, có nhiều tin nhắn thường bị nhận nhầm."
  },
  {
    id: "Q_MOD_C_086", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning"],
    content: "Khi huấn luyện cây quyết định (Decision Tree), thuật toán sử dụng chỉ số Gini Impurity hay Entropy nhằm mục đích:",
    options: [
      "A. Tối đa hóa khoảng cách lề giữa hai lớp cần phân loại.",
      "B. Lựa chọn đặc trưng phân nhánh tối ưu nhất để phân tách dữ liệu.",
      "C. Tính toán đạo hàm giảm dần cho quá trình cập nhật trọng số.",
      "D. Gom cụm các mẫu dữ liệu không có nhãn vào các nhóm."
    ],
    correct_option: "B",
    explanation: "Chỉ số Gini Impurity và Entropy đo lường độ tinh khiết (phân tán) của dữ liệu. Thuật toán chọn đặc trưng phân nhánh làm giảm tối đa độ không tinh khiết sau phân tách."
  },
  {
    id: "Q_MOD_C_087", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Thuật toán Non-Maximum Suppression (NMS) trong các mô hình phát hiện vật thể (như YOLO) có vai trò gì ở giai đoạn hậu xử lý?",
    options: [
      "A. Tăng kích thước các khung chứa vật thể để bao trọn.",
      "B. Loại bỏ bớt các khung dự đoán trùng lặp đè lên cùng vật thể.",
      "C. Thay đổi màu sắc của khung hiển thị để dễ nhìn hơn.",
      "D. Trích xuất thêm các đặc trưng biên của vật thể trong ảnh."
    ],
    correct_option: "B",
    explanation: "NMS lọc và loại bỏ các khung dự đoán có độ tin cậy thấp và trùng lặp (dựa trên IoU) đè lên cùng một vật thể, chỉ giữ lại một khung tối ưu nhất."
  },
  {
    id: "Q_MOD_C_088", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp"],
    content: "Trong xử lý ngôn ngữ tự nhiên, sự khác biệt chính giữa mô hình BERT và mô hình GPT là gì?",
    options: [
      "A. BERT chỉ chạy trên CPU, trong khi GPT chạy trên các GPU.",
      "B. BERT học ngữ cảnh hai chiều; GPT học ngữ cảnh một chiều tự hồi quy.",
      "C. BERT chỉ xử lý được tiếng Anh, còn GPT xử lý đa ngôn ngữ.",
      "D. BERT được huấn luyện bằng học máy không giám sát hoàn toàn."
    ],
    correct_option: "B",
    explanation: "BERT sử dụng bộ mã hóa (Encoder) hai chiều để hiểu ngữ cảnh xung quanh một từ. GPT sử dụng bộ giải mã (Decoder) một chiều để dự đoán từ tiếp theo từ trái sang phải."
  },
  {
    id: "Q_MOD_C_089", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux"],
    content: "Để đảm bảo quyền riêng tư của người dùng đối với các ứng dụng AI trên điện thoại, giải pháp kiến trúc nào là tối ưu nhất?",
    options: [
      "A. Gửi toàn bộ dữ liệu thô của người dùng lên máy chủ đám mây.",
      "B. Chạy trực tiếp mô hình AI ngay trên thiết bị (On-device AI).",
      "C. Mã hóa dữ liệu bằng mật khẩu rồi lưu trữ trên thẻ nhớ ngoài.",
      "D. Tắt tính năng lưu trữ dữ liệu tạm thời của hệ điều hành."
    ],
    correct_option: "B",
    explanation: "On-device AI cho phép xử lý dữ liệu trực tiếp trên thiết bị của người dùng mà không cần truyền dữ liệu thô về máy chủ, bảo vệ quyền riêng tư tối đa."
  },
  {
    id: "Q_MOD_C_090", module_id: "Module_C", difficulty: "Medium",
    tags: ["ethics"],
    content: "Khái niệm 'Model Drift' (sự trôi dạt mô hình) trong vận hành sản phẩm AI thực tế mô tả hiện tượng nào?",
    options: [
      "A. Tốc độ xử lý của mô hình chậm dần do phần cứng bị hao mòn.",
      "B. Hiệu năng mô hình giảm do phân phối dữ liệu thực tế thay đổi.",
      "C. Lỗi tràn bộ nhớ xảy ra khi lưu trữ quá nhiều tệp log.",
      "D. Mô hình tự động cập nhật trọng số mà không cần lập trình."
    ],
    correct_option: "B",
    explanation: "Model Drift xảy ra khi các mối quan hệ trong dữ liệu thay đổi theo thời gian (ví dụ: xu hướng thị trường thay đổi), khiến các dự đoán huấn luyện trước đó không còn chính xác."
  },
  {
    id: "Q_MOD_C_091", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning", "optimization"],
    content: "Tại sao phương pháp tối ưu hóa Adam (Adaptive Moment Estimation) thường hội tụ nhanh hơn Gradient Descent truyền thống trong các mạng nơ-ron sâu?",
    options: [
      "A. Adam nhân đôi tốc độ học ở mỗi vòng lặp huấn luyện bất kể độ lớn gradient.",
      "B. Adam kết hợp Momentum và điều chỉnh tốc độ học riêng biệt cho mỗi tham số.",
      "C. Adam bỏ qua các phép tính lan truyền ngược để đẩy nhanh tiến trình hội tụ.",
      "D. Adam tự động chuyển đổi cấu trúc mạng nơ-ron thành các cây quyết định."
    ],
    correct_option: "B",
    explanation: "Adam kết hợp cả Momentum (quán tính của các gradient trước) và RMSProp (chia tốc độ học cho căn bậc hai của trung bình động bình phương gradient) để tự điều chỉnh tốc độ học cho từng trọng số."
  },
  {
    id: "Q_MOD_C_092", module_id: "Module_C", difficulty: "Medium",
    tags: ["computer-vision"],
    content: "Trong kiến trúc mạng Transformer dành cho thị giác máy tính (Vision Transformer - ViT), hình ảnh đầu vào được xử lý thế nào trước khi đưa vào các lớp Self-Attention?",
    options: [
      "A. Ảnh được đưa qua mạng CNN sâu để chuyển đổi thành ma trận đặc trưng kích thước lớn.",
      "B. Ảnh được chia nhỏ thành các patches, phẳng hóa thành vector và cộng vector vị trí.",
      "C. Ảnh được chuyển thành văn bản mô tả chi tiết nhờ tích hợp một mô hình OCR phụ trợ.",
      "D. Ảnh được nén thành chuỗi nhị phân tần số thấp để hạn chế tối đa tài nguyên bộ nhớ."
    ],
    correct_option: "B",
    explanation: "ViT chia ảnh đầu vào kích thước $H \\times W$ thành các patches kích thước $P \\times P$. Mỗi patch được phẳng hóa thành một vector độ dài $P^2 \\cdot C$, sau đó được ánh xạ tuyến tính và cộng thêm position embedding trước khi nạp vào Transformer Encoder."
  },
  {
    id: "Q_MOD_C_093", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp", "llm"],
    content: "Hàm kích hoạt 'SwiGLU' (Swish Gated Linear Unit) thường được sử dụng trong các LLM hiện đại (như LLaMA) có điểm cải tiến gì nổi bật so với ReLU truyền thống?",
    options: [
      "A. SwiGLU loại bỏ các phép nhân ma trận phức tạp để đẩy nhanh tốc độ suy luận của mô hình.",
      "B. SwiGLU kết hợp cơ chế cổng và Swish giúp dòng gradient mượt mà, tránh hiện tượng neuron chết.",
      "C. SwiGLU ép giá trị đầu ra về số nguyên để tạo điều kiện thuận lợi cho việc lượng hóa 8-bit.",
      "D. SwiGLU tự động đóng băng các trọng số không có sự đóng góp lớn vào hàm mất mát mục tiêu."
    ],
    correct_option: "B",
    explanation: "SwiGLU là một dạng của Gated Linear Unit sử dụng Swish làm hàm kích hoạt. Nó cung cấp sự kiểm soát dòng thông tin tốt hơn và duy trì đạo hàm phi tuyến tính mượt mà ở cả vùng âm, giúp mô hình hội tụ tốt hơn ReLU."
  },
  {
    id: "Q_MOD_C_094", module_id: "Module_C", difficulty: "Medium",
    tags: ["rag"],
    content: "Trong hệ thống RAG nâng cao, kỹ thuật 'Re-ranking' đóng vai trò gì để tối ưu hóa ngữ cảnh cung cấp cho LLM?",
    options: [
      "A. Thay đổi cấu trúc và thứ tự từ trong câu hỏi đầu vào để tăng khả năng so khớp ngữ nghĩa.",
      "B. Sử dụng Cross-Encoder để chấm điểm và lọc ra các đoạn tài liệu có độ liên quan cao nhất.",
      "C. Tự động điều chỉnh thứ tự từ của văn bản đầu ra nhằm tối ưu hóa tính mạch lạc ngữ pháp.",
      "D. Định dạng lại cấu trúc lưu trữ của cơ sở dữ liệu vector theo bảng chữ cái tiếng Anh."
    ],
    correct_option: "B",
    explanation: "Mô hình Bi-Encoder tìm kiếm vector rất nhanh nhưng độ chính xác chưa tối ưu. Re-ranking sử dụng Cross-Encoder (nhập cả câu hỏi và đoạn văn cùng lúc) để tính điểm tương tác chi tiết hơn, giúp lọc ra các ngữ cảnh chuẩn xác nhất trước khi gửi tới LLM."
  },
  {
    id: "Q_MOD_C_095", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-metrics"],
    content: "Để đánh giá hiệu năng của hệ thống AI khuyến nghị (Recommender System), chỉ số 'NDCG' (Normalized Discounted Cumulative Gain) ưu việt hơn Recall ở điểm nào?",
    options: [
      "A. NDCG sở hữu thuật toán tính toán nhanh hơn trên tập dữ liệu quy mô lớn.",
      "B. NDCG có xem xét đến vị trí xếp hạng hiển thị của các sản phẩm gợi ý.",
      "C. NDCG hoàn toàn độc lập với tổng số lượng sản phẩm được đề xuất hiển thị.",
      "D. NDCG hỗ trợ thu thập trực tiếp ý kiến đánh giá chủ quan từ khách hàng."
    ],
    correct_option: "B",
    explanation: "NDCG đo lường mức độ hữu ích của sản phẩm dựa trên vị trí của nó trong danh sách gợi ý. Sản phẩm liên quan cao xuất hiện càng sớm (ở trên cùng) thì điểm NDCG càng cao, điều mà Recall truyền thống không đo lường được."
  },
  {
    id: "Q_MOD_C_096", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning", "overfitting"],
    content: "Phương pháp chuẩn hóa 'Batch Normalization' giúp đẩy nhanh quá trình huấn luyện mạng nơ-ron sâu chủ yếu nhờ cơ chế nào?",
    options: [
      "A. Triệt tiêu các tham số trọng số thiên lệch (bias weights) trong các lớp của mô hình.",
      "B. Giảm hiện tượng dịch chuyển phân phối nội bộ bằng cách chuẩn hóa đầu vào của mỗi lớp ẩn.",
      "C. Loại bỏ ngẫu nhiên một nửa số lượng liên kết neuron trong suốt quá trình lan truyền ngược.",
      "D. Giảm đáng kể chiều rộng và chiều cao của các ma trận đặc trưng đi qua lớp mạng nơ-ron sâu."
    ],
    correct_option: "B",
    explanation: "Batch Normalization thực hiện chuẩn hóa đầu vào của mỗi lớp ẩn theo mini-batch, giúp giảm hiện tượng Internal Covariate Shift (sự thay đổi phân phối đầu vào của các lớp sau do cập nhật trọng số ở lớp trước), làm quá trình huấn luyện ổn định và cho phép dùng tốc độ học cao hơn."
  },
  {
    id: "Q_MOD_C_097", module_id: "Module_C", difficulty: "Medium",
    tags: ["product-ux", "metrics"],
    content: "Khi xây dựng mô hình AI nhận diện giọng nói (Speech-to-Text), làm sao để tối ưu hóa trải nghiệm người dùng đối với ứng dụng dịch thuật thời gian thực dựa trên các chỉ số mô hình?",
    options: [
      "A. Tập trung cải thiện độ chính xác của từ đơn lẻ và bỏ qua hoàn toàn độ trễ xử lý âm thanh.",
      "B. Cân bằng giữa tỷ lệ lỗi từ (WER) thấp và độ trễ xử lý dưới ngưỡng nhận thức của con người.",
      "C. Bỏ qua chỉ số WER để tập trung tối đa cho việc rút ngắn thời gian xử lý âm thanh về mức 0ms.",
      "D. Kéo dài thời gian ghi âm của người dùng để mô hình AI có thêm thời gian phân tích cú pháp."
    ],
    correct_option: "B",
    explanation: "Đối với dịch thuật thời gian thực, độ trễ cực kỳ quan trọng đối với UX. Do đó, cần cân bằng giữa chất lượng dịch (WER thấp) và độ trễ (latency) sao cho phản hồi mượt mà không gây cảm giác đứt quãng cho người dùng."
  },
  {
    id: "Q_MOD_C_098", module_id: "Module_C", difficulty: "Medium",
    tags: ["nlp", "llm"],
    content: "Cơ chế 'RoPE' (Rotary Position Embedding) được sử dụng phổ biến trong các mô hình LLaMA cải tiến việc mã hóa vị trí trong Transformer như thế nào so với mã hóa vị trí tuyệt đối của Attention Is All You Need?",
    options: [
      "A. RoPE loại bỏ thông tin vị trí của từ nhằm tối ưu hóa tốc độ nhân các ma trận tự chú ý.",
      "B. RoPE biểu diễn thông tin vị trí bằng phép xoay vector để giữ lại khoảng cách tương đối.",
      "C. RoPE gán cho mỗi vị trí từ một giá trị số nguyên ngẫu nhiên được học trong quá trình huấn luyện.",
      "D. RoPE thay thế hoàn toàn cơ chế tự chú ý bằng một bộ lọc tích chập một chiều để định vị từ."
    ],
    correct_option: "B",
    explanation: "RoPE áp dụng một ma trận quay xoay các vector Query và Key tùy theo vị trí của chúng. Phép toán này đảm bảo rằng tích vô hướng $q_m^T k_n$ chỉ phụ thuộc vào khoảng cách tương đối $m - n$, giúp mô hình mở rộng độ dài ngữ cảnh tốt hơn."
  },
  {
    id: "Q_MOD_C_099", module_id: "Module_C", difficulty: "Medium",
    tags: ["machine-learning", "optimization"],
    content: "Khi gặp hiện tượng mất cân bằng dữ liệu cực kỳ nghiêm trọng trong bài toán phân loại nhãn, tại sao hàm mất mát 'Focal Loss' hiệu quả hơn Cross-Entropy truyền thống?",
    options: [
      "A. Focal Loss loại bỏ các mẫu lớp đa số ra khỏi quá trình tính toán giá trị hàm mất mát.",
      "B. Focal Loss giảm trọng số của mẫu dễ phân loại và tập trung tối đa vào các mẫu khó học.",
      "C. Focal Loss chuyển đổi bài toán phân loại phi tuyến tính thành bài toán tuyến tính đơn giản.",
      "D. Focal Loss tự động nhân đôi tốc độ học mỗi khi mô hình dự báo sai mẫu thuộc lớp thiểu số."
    ],
    correct_option: "B",
    explanation: "Focal Loss thêm thừa số $(1 - p_t)^\\gamma$ vào hàm Cross Entropy. Đối với mẫu dễ phân loại ($p_t$ tiến gần 1), thừa số này tiến về 0 làm giảm mạnh đóng góp của chúng vào loss, buộc mô hình tập trung vào các mẫu khó phân loại."
  },
  {
    id: "Q_MOD_C_100", module_id: "Module_C", difficulty: "Medium",
    tags: ["llm", "quantization"],
    content: "Trong kỹ thuật lượng hóa mô hình ngôn ngữ lớn (LLM Quantization), phương pháp lượng hóa sau huấn luyện (Post-Training Quantization - PTQ) khác gì so với lượng hóa trong khi huấn luyện (Quantization-Aware Training - QAT)?",
    options: [
      "A. PTQ chỉ thực thi được trên CPU, còn QAT yêu cầu bắt buộc chạy trên hệ thống GPU hiệu năng cao.",
      "B. PTQ chuyển đổi trực tiếp trọng số sau khi học; QAT mô phỏng sai số lượng hóa trong lúc huấn luyện.",
      "C. PTQ đòi hỏi dung lượng bộ nhớ lớn hơn nhiều để lưu giữ các tham số mô phỏng trong quá trình chạy.",
      "D. PTQ làm tăng kích thước mô hình, còn QAT hỗ trợ thu nhỏ mô hình về kích thước lưu trữ tối thiểu."
    ],
    correct_option: "B",
    explanation: "PTQ lượng hóa mô hình đã được huấn luyện đầy đủ trực tiếp, rất nhanh nhưng có thể suy giảm độ chính xác. QAT mô phỏng sai số lượng hóa trong quá trình lan truyền xuôi và ngược (dùng fake quantization), giúp mô hình thích ứng với việc giảm độ chính xác của trọng số, giữ vững hiệu năng tốt hơn."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_C;
}
