const QUESTIONS_D = [
  {
    id: "Q_MOD_D_001", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Có 3 mô hình AI: X, Y, và Z. Biết rằng: Mô hình X xử lý nhanh hơn mô hình Y. Mô hình Z xử lý chậm hơn mô hình Y. Phát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Mô hình Z chắc chắn sẽ xử lý nhanh nhất.",
      "B. Mô hình X chắc chắn xử lý nhanh hơn mô hình Z.",
      "C. Mô hình Y chắc chắn sẽ xử lý nhanh nhất.",
      "D. Mô hình X và mô hình Z có tốc độ xử lý bằng nhau."
    ],
    correct_option: "B",
    explanation: "Từ dữ kiện bài toán, ta có thứ tự tốc độ xử lý từ nhanh đến chậm là: $X > Y > Z$. Do đó, mô hình X chắc chắn xử lý nhanh hơn mô hình Z."
  },
  {
    id: "Q_MOD_D_002", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Bạn được giao nhiệm vụ thu thập hình ảnh khuôn mặt của sinh viên trong trường để xây dựng hệ thống điểm danh tự động. Hành vi nào sau đây tuân thủ đúng nguyên tắc **Đạo đức dữ liệu (Data Ethics)**?",
    options: [
      "A. Lắp đặt hệ thống camera ẩn bí mật tại các cửa lớp học để thu thập hình ảnh tự nhiên của sinh viên mà không thông báo trước.",
      "B. Tự ý tải về toàn bộ hình ảnh cá nhân được sinh viên chia sẻ công khai trên mạng xã hội để đưa vào làm dữ liệu huấn luyện.",
      "C. Gửi văn bản thông báo rõ ràng mục đích sử dụng và biểu mẫu cam kết đồng thuận cho sinh viên ký trước khi chụp ảnh thu thập.",
      "D. Đăng tải công khai tập dữ liệu hình ảnh khuôn mặt lên internet để các khóa sinh viên sau có thể tự do dùng làm bài tập lớn."
    ],
    correct_option: "C",
    explanation: "Quyền riêng tư và sự đồng thuận minh bạch (Informed Consent) từ chủ thể dữ liệu là nguyên tắc cốt lõi mang tính pháp lý trong đạo đức dữ liệu AI."
  },
  {
    id: "Q_MOD_D_003", module_id: "Module_D", difficulty: "Medium",
    tags: ["ai-bias"],
    content: "Một công ty công nghệ dùng dữ liệu hồ sơ tuyển dụng của 10 năm qua để huấn luyện AI lọc CV kỹ sư phần mềm. Do lịch sử ngành này trong quá khứ có tỷ lệ nam giới nộp đơn vượt trội, AI sau khi huấn luyện có xu hướng tự động đánh rớt các CV có chứa từ khóa liên quan đến \"nữ\" (Ví dụ: \"Hội cựu nữ sinh viên\"). Hiện tượng này được gọi là gì?",
    options: [
      "A. Lỗi quá khớp dữ liệu (Overfitting).",
      "B. Định kiến thuật toán (Algorithmic Bias).",
      "C. Lỗi ảo tưởng thông tin (Hallucination).",
      "D. Lỗi tối ưu hóa toàn cục (Optimization)."
    ],
    correct_option: "B",
    explanation: "AI học từ dữ liệu lịch sử. Nếu dữ liệu phản ánh sự mất cân bằng hoặc định kiến sẵn có của con người, AI sẽ lặp lại và khuếch đại định kiến đó. Đây gọi là hiện tượng Định kiến (Bias)."
  },
  {
    id: "Q_MOD_D_004", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Một nhóm nghiên cứu AI tuyên bố: *\"Tất cả các mô hình deep learning có trên 1 tỷ tham số đều cần GPU để chạy. Mô hình AI mang tên 'Alpha' không cần GPU để chạy.\"* Dựa vào tuyên bố trên, kết luận nào sau đây là chính xác nhất?",
    options: [
      "A. Mô hình Alpha chắc chắn có trên 1 tỷ tham số.",
      "B. Mô hình Alpha không phải là mô hình deep learning.",
      "C. Mô hình Alpha có số tham số dưới hoặc bằng 1 tỷ.",
      "D. Tuyên bố của nhóm nghiên cứu chắc chắn bị sai."
    ],
    correct_option: "C",
    explanation: "Theo quy tắc phủ định của mệnh đề kéo theo ($P \\rightarrow Q$ thì $\\neg Q \\rightarrow \\neg P$). Vì Alpha không cần GPU ($\\neg Q$), nên Alpha không thể là \"mô hình deep learning có trên 1 tỷ tham số\". Do đó, nó phải có dưới hoặc bằng 1 tỷ tham số."
  },
  {
    id: "Q_MOD_D_005", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Bạn đang làm việc với một tập dữ liệu lớn chứa thông tin hành vi mua sắm của khách hàng để huấn luyện AI. Bạn phát hiện ra trong file dữ liệu có chứa cả số CCCD, số điện thoại và địa chỉ nhà riêng của khách hàng dưới dạng văn bản thô (Plain text). Hành động nào sau đây thể hiện tư duy đúng đắn về an toàn dữ liệu?",
    options: [
      "A. Giữ nguyên các thông tin nhạy cảm này để huấn luyện vì dữ liệu thô càng chi tiết thì mô hình AI sẽ hoạt động càng chính xác.",
      "B. Ẩn danh hóa hoặc mã hóa băm các trường thông tin định danh cá nhân (PII) trước khi chia sẻ dữ liệu hoặc đưa vào huấn luyện.",
      "C. Đăng tải toàn bộ tập dữ liệu thô lên các diễn đàn công nghệ mở để nhờ cộng đồng lập trình hỗ trợ viết mã nguồn xử lý nhanh.",
      "D. Hủy bỏ toàn bộ dự án nghiên cứu ngay lập tức và báo cáo với cấp trên rằng không thể xử lý dữ liệu chứa thông tin nhạy cảm."
    ],
    correct_option: "B",
    explanation: "CCCD, số điện thoại, địa chỉ là các thông tin định danh cá nhân nhạy cảm (PII). Việc ẩn danh hóa hoặc băm mã hóa bảo mật là bắt buộc để bảo vệ quyền riêng tư trước khi đưa vào các phân hệ huấn luyện."
  },
  {
    id: "Q_MOD_D_006", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic dựa trên các dữ kiện sau:\n\n* Mọi sinh viên học ngành Công nghệ thông tin (CNTT) đều phải học môn Lập trình.\n* Một số thành viên của Câu lạc bộ AI không phải là sinh viên ngành CNTT.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. Tất cả các thành viên của Câu lạc bộ AI đều không biết lập trình.",
      "B. Một số thành viên nhất định của Câu lạc bộ AI biết lập trình.",
      "C. Có những người đang học môn Lập trình nhưng không học ngành CNTT.",
      "D. Không có đủ cơ sở để khẳng định các phát biểu trên là đúng."
    ],
    correct_option: "D",
    explanation: "Mệnh đề 1: CNTT $\\rightarrow$ Lập trình (không có nghĩa Lập trình $\\rightarrow$ CNTT). Mệnh đề 2: Một số thành viên CLB AI không thuộc CNTT, những người này có thể tự học lập trình hoặc không học (đề bài không nhắc tới). Vì vậy các phát biểu A, B, C đều là suy đoán vô căn cứ."
  },
  {
    id: "Q_MOD_D_007", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic từ các phát biểu sau:\n\n* Không có kỹ sư AI nào lười biếng.\n* Một số người thích chơi game là kỹ sư AI.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. Tất cả những người có sở thích chơi game đều không lười biếng.",
      "B. Một số người có sở thích chơi game chắc chắn không lười biếng.",
      "C. Mọi người lười biếng chắc chắn đều có sở thích thích chơi game.",
      "D. Tất cả các kỹ sư AI đều không có sở thích thích chơi game."
    ],
    correct_option: "B",
    explanation: "Dữ kiện 2 cho biết một nhóm giao nhau: Một số người chơi game là kỹ sư AI. Dữ kiện 1 khẳng định toàn bộ kỹ sư AI đều chăm chỉ (không lười biếng). Do đó, những người vừa thích chơi game vừa là kỹ sư AI chắc chắn là những người không lười biếng."
  },
  {
    id: "Q_MOD_D_008", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Một lập trình viên sử dụng mã nguồn mở của một tác giả khác được chia sẻ trên GitHub với giấy phép **MIT License** để xây dựng ứng dụng AI thương mại kiếm tiền cho mình. Hành vi này có vi phạm đạo đức hoặc bản quyền không?",
    options: [
      "A. Có vi phạm, vì việc khai thác mã nguồn của người khác để xây dựng sản phẩm thương mại sinh lời là hành vi trái pháp luật.",
      "B. Không vi phạm, vì giấy phép MIT cho phép tự do sửa đổi và thương mại hóa sản phẩm, chỉ cần giữ nguyên tuyên bố bản quyền.",
      "C. Có vi phạm, trừ trường hợp lập trình viên trích chia sẻ lại một phần doanh thu cụ thể theo thỏa thuận riêng với tác giả gốc.",
      "D. Chỉ vi phạm trong trường hợp hệ thống phần mềm AI thương mại đó hoạt động không ổn định hoặc gây ra lỗi cho khách hàng."
    ],
    correct_option: "B",
    explanation: "Giấy phép MIT là giấy phép mã nguồn mở tự do. Nó cho phép thương mại hóa hoàn toàn miễn phí, yêu cầu duy nhất là phải giữ nguyên thông báo bản quyền và quyền miễn trừ trách nhiệm của tác giả gốc trong source code."
  },
  {
    id: "Q_MOD_D_009", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong việc phát triển AI y tế giúp bác sĩ chẩn đoán ung thư qua ảnh chụp X-quang, hành vi nào sau đây được coi là **thiếu trách nhiệm đạo đức nghề nghiệp**?",
    options: [
      "A. Thực hiện thử nghiệm và kiểm định mô hình cực kỳ khắt khe tại nhiều cơ sở y tế độc lập trước khi đưa vào sử dụng.",
      "B. Chủ động giấu các ca bệnh chẩn đoán sai sót nhằm làm đẹp kết quả báo cáo và tối ưu hóa doanh thu bán sản phẩm phần mềm.",
      "C. Thiết kế hệ thống luôn hiển thị mức độ tin cậy của dự đoán giúp bác sĩ có thêm căn cứ đưa ra quyết định lâm sàng cuối.",
      "D. Áp dụng quy trình bảo mật nghiêm ngặt để ẩn danh hoàn toàn thông tin cá nhân và bệnh án của bệnh nhân trong tập dữ liệu."
    ],
    correct_option: "B",
    explanation: "Việc cố tình che giấu sai sót của mô hình AI trong y tế là hành vi vi phạm nghiêm trọng đạo đức, vì nó có thể trực tiếp làm sai lệch kết quả điều trị và gây nguy hiểm đến tính mạng của người bệnh."
  },
  {
    id: "Q_MOD_D_010", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Đọc tình huống sau: Ba sinh viên An, Bình, và Cường cùng tham gia một cuộc thi Hackathon về AI.\n\n* Nếu An đoạt giải thì Bình cũng đoạt giải.\n* Thừa nhận rằng An đã đoạt giải.\nKết luận nào sau đây chắc chắn đúng về mặt logic?",
    options: [
      "A. Chỉ có An chắc chắn đoạt giải.",
      "B. Bình chắc chắn sẽ đoạt giải.",
      "C. Cường chắc chắn sẽ đoạt giải.",
      "D. Cả ba bạn đều không đoạt giải."
    ],
    correct_option: "B",
    explanation: "Mệnh đề logic có dạng: $A \\rightarrow B$ (Nếu An được giải thì Bình được giải). Đề bài khẳng định vế $A$ xảy ra (An đã đoạt giải), theo quy tắc Modus Ponens, vế $B$ chắc chắn phải xảy ra $\\rightarrow$ Bình chắc chắn đoạt giải."
  },
  {
    id: "Q_MOD_D_011", module_id: "Module_D", difficulty: "Medium",
    tags: ["ai-bias"],
    content: "Một ứng dụng AI tuyển dụng nhân sự tự động liên tục loại bỏ hồ sơ của các ứng viên đến từ một vùng miền cụ thể mà không dựa trên năng lực. Nguyên nhân gốc rễ của hành vi phân biệt đối xử này của AI thường bắt nguồn từ đâu?",
    options: [
      "A. Do mô hình AI tự hình thành ý thức độc lập và nảy sinh định kiến tiêu cực đối với người dân sinh sống tại vùng miền đó.",
      "B. Do dữ liệu huấn luyện chứa định kiến sẵn có của con người trong quá khứ và mô hình AI đã tự động học lại khuôn mẫu sai này.",
      "C. Do các thuật toán học máy sử dụng quá nhiều phép biến đổi ma trận phức tạp khiến cho độ chính xác bị suy giảm cục bộ.",
      "D. Do hệ thống máy chủ vận hành mô hình bị quá nhiệt dẫn đến các sai số ngẫu nhiên trong việc tính toán kết quả tuyển dụng."
    ],
    correct_option: "B",
    explanation: "Mô hình AI không tự sinh ra định kiến vùng miền. Hiện tượng phân biệt đối xử này xảy ra là do dữ liệu lịch sử đầu vào được thu thập từ con người đã có sẵn định kiến đó và AI ghi nhận lại quy luật này."
  },
  {
    id: "Q_MOD_D_012", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic dựa trên các dữ kiện sau:\n\n* Mọi mô hình ngôn ngữ lớn (LLM) đều tiêu tốn rất nhiều tài nguyên phần cứng.\n* Hệ thống AI mang tên \"EcoChat\" không tiêu tốn nhiều tài nguyên phần cứng.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. EcoChat chắc chắn là một mô hình ngôn ngữ lớn hoạt động cực kỳ tối ưu.",
      "B. EcoChat chắc chắn không phải là một mô hình ngôn ngữ lớn theo định nghĩa.",
      "C. EcoChat chỉ sử dụng các thuật toán nhân ma trận đơn giản và thông minh.",
      "D. EcoChat thực chất là một loại phần mềm độc hại xâm nhập vào hệ thống."
    ],
    correct_option: "B",
    explanation: "Mệnh đề: $LLM \\rightarrow Tốn\\_tài\\_nguyên$. Do EcoChat không tốn tài nguyên, theo logic phản chứng ($\\neg Q \\rightarrow \\neg P$), EcoChat chắc chắn không phải là mô hình LLM."
  },
  {
    id: "Q_MOD_D_013", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Việc một kỹ sư AI âm thầm cài đặt một đoạn code ngầm trong ứng dụng để thu thập toàn bộ lịch sử gõ bàn phím (Keylogger) của người dùng nhằm lấy dữ liệu hội thoại thực tế huấn luyện AI mà không được sự cho phép của họ là vi phạm nguyên tắc đạo đức nào nghiêm trọng nhất?",
    options: [
      "A. Sự minh bạch và quyền riêng tư cá nhân của người sử dụng.",
      "B. Sự tối ưu hóa của thuật toán và hiện tượng quá khớp dữ liệu.",
      "C. Khả năng bảo mật của máy chủ và tốc độ tối ưu hóa hệ thống.",
      "D. Các quy định pháp lý liên quan đến giấy phép mã nguồn mở MIT."
    ],
    correct_option: "A",
    explanation: "Thu thập dữ liệu nhạy cảm một cách lén lút vi phạm nghiêm trọng quyền riêng tư và tính minh bạch thông tin cốt lõi đối với người dùng (Informed Consent)."
  },
  {
    id: "Q_MOD_D_014", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Đọc tình huống logic sau: Có 3 lập trình viên là Nam, Hải và Quốc. Biết rằng:\n\n* Người giỏi Python nhất là người lớn tuổi nhất.\n* Hải trẻ tuổi hơn Quốc.\n* Nam lớn tuổi hơn Quốc.\nAi là người giỏi Python nhất?",
    options: [
      "A. Lập trình viên Hải.",
      "B. Lập trình viên Quốc.",
      "C. Lập trình viên Nam.",
      "D. Không thể xác định."
    ],
    correct_option: "C",
    explanation: "Sắp xếp thứ tự tuổi từ lớn đến nhỏ dựa vào dữ kiện: Nam > Quốc, Quốc > Hải $\\Rightarrow$ Nam > Quốc > Hải. Vậy Nam là người lớn tuổi nhất, đồng nghĩa Nam là người giỏi Python nhất."
  },
  {
    id: "Q_MOD_D_015", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Thuật ngữ \"Explainable AI\" (XAI - AI có thể giải thích được) hướng tới mục tiêu đạo đức và kỹ thuật nào trong phát triển Trí tuệ nhân tạo?",
    options: [
      "A. Phát triển các công cụ tự động tạo báo cáo kỹ thuật và kiểm thử thay thế hoàn toàn vai trò của các lập trình viên.",
      "B. Chuyển đổi các mô hình dạng hộp đen phức tạp thành các hệ thống có cơ chế ra quyết định rõ ràng, dễ hiểu đối với con người.",
      "C. Xây dựng các ứng dụng dạy học thông minh có khả năng tự động giải bài tập toán và tóm tắt kiến thức cho học sinh.",
      "D. Tập trung tối ưu hóa các tham số để tăng độ chính xác của mô hình dự đoán lên mức tuyệt đối $100\\%$ trong thực tế."
    ],
    correct_option: "B",
    explanation: "XAI giúp minh bạch hóa các quyết định nội bộ của AI, điều này đặc biệt quan trọng và mang tính bắt buộc trong các lĩnh vực nhạy cảm cao như Y tế (Chẩn đoán bệnh) và Tài chính (Duyệt hồ sơ vay vốn)."
  },
  {
    id: "Q_MOD_D_016", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Khi một dự án AI thất bại do mô hình liên tục đưa ra dự đoán sai lệch nghiêm trọng gây thiệt hại về tiền bạc cho khách hàng, trách nhiệm giải trình cuối cùng thuộc về ai?",
    options: [
      "A. Thuật toán học máy và mô hình AI do chúng tự động tính toán sai sót.",
      "B. Hệ thống máy chủ vận hành mô hình do bị quá tải phần cứng khi xử lý.",
      "C. Đội ngũ con người tham gia thiết kế, phát triển và vận hành hệ thống.",
      "D. Khách hàng sử dụng dịch vụ vì đã đặt niềm tin vào sản phẩm công nghệ."
    ],
    correct_option: "C",
    explanation: "AI là một công cụ do con người tạo ra, huấn luyện và vận hành. Do đó, con người (kỹ sư, quản lý dự án, công ty công nghệ) phải chịu trách nhiệm hoàn toàn về mặt pháp lý và đạo đức đối với các hệ quả do sản phẩm của mình gây ra."
  },
  {
    id: "Q_MOD_D_017", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Khi đăng ký tài khoản trên một ứng dụng học tập AI mới, hành động nào của nhà cung cấp dịch vụ giúp bảo vệ quyền lợi của người dùng rõ ràng nhất?",
    options: [
      "A. Ẩn toàn bộ các điều khoản sử dụng chi tiết và tự động tích chọn đồng ý thay cho khách hàng.",
      "B. Cung cấp rõ ràng tài liệu về điều khoản sử dụng và cách thu thập dữ liệu cá nhân để người dùng duyệt.",
      "C. Yêu cầu bắt buộc người sử dụng phải cung cấp thông tin mật khẩu của các tài khoản mạng xã hội khác.",
      "D. Giữ bí mật hoàn toàn các chính sách bảo mật để tránh rò rỉ cấu trúc vận hành của ứng dụng ra ngoài."
    ],
    correct_option: "B",
    explanation: "Sự minh bạch thông tin thông qua Điều khoản dịch vụ và Chính sách bảo mật là yếu tố pháp lý và đạo đức bắt buộc để người dùng đưa ra quyết định đồng thuận."
  },
  {
    id: "Q_MOD_D_018", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Nếu phát biểu: 'Mọi chatbot AI đều bị ảo tưởng thông tin' là đúng, phát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Chắc chắn không có bất kỳ chatbot AI nào bị gặp hiện tượng ảo tưởng thông tin.",
      "B. Nếu ChatGPT thực sự là một chatbot AI thì ChatGPT sẽ bị ảo tưởng thông tin.",
      "C. Chỉ có những chatbot AI có số lượng tham số cực lớn mới bị ảo tưởng thông tin.",
      "D. Tất cả các mô hình chatbot AI đang vận hành trên thế giới đều không bị lỗi."
    ],
    correct_option: "B",
    explanation: "Theo tam đoạn luận logic, nếu tất cả các phần tử thuộc tập hợp Chatbot AI đều có tính chất X, thì một phần tử cụ thể (ChatGPT) thuộc tập hợp đó chắc chắn cũng mang tính chất X."
  },
  {
    id: "Q_MOD_D_019", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Thuật ngữ 'PII' trong bảo mật thông tin và đạo đức dữ liệu viết tắt của cụm từ nào?",
    options: [
      "A. Private Image Intelligence (Trí tuệ hình ảnh riêng tư)",
      "B. Personally Identifiable Information (Thông tin định danh cá nhân)",
      "C. Product Interface Integration (Tích hợp giao diện sản phẩm)",
      "D. Public Internet Infrastructure (Hạ tầng Internet công cộng)"
    ],
    correct_option: "B",
    explanation: "PII (Personally Identifiable Information) là bất kỳ thông tin nào có thể dùng để phân biệt hoặc xác định danh tính của một cá nhân, ví dụ: số CCCD, tên, số điện thoại, email."
  },
  {
    id: "Q_MOD_D_020", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Giấy phép mã nguồn mở nào sau đây yêu cầu rằng bất kỳ mã nguồn sửa đổi hoặc phái sinh nào cũng phải được phát hành dưới cùng một giấy phép nguồn mở (tính chất lan truyền/copyleft)?",
    options: [
      "A. Giấy phép nguồn mở MIT License thông thường.",
      "B. Giấy phép nguồn mở Apache License phiên bản 2.0.",
      "C. Giấy phép nguồn mở GNU General Public License (GPL).",
      "D. Giấy phép nguồn mở BSD License ba điều khoản."
    ],
    correct_option: "C",
    explanation: "GPL (GNU General Public License) là một giấy phép copyleft mạnh. Nó yêu cầu mã nguồn phái sinh cũng phải mở và sử dụng giấy phép GPL, không cho phép đóng gói thành phần mềm thương mại mã nguồn đóng."
  },
  {
    id: "Q_MOD_D_021", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Mệnh đề logic kéo theo $P \\rightarrow Q$ (Nếu có P thì có Q) chỉ sai trong trường hợp duy nhất nào?",
    options: [
      "A. P đúng và Q đúng.",
      "B. P sai và Q đúng.",
      "C. P đúng và Q sai.",
      "D. P sai và Q sai."
    ],
    correct_option: "C",
    explanation: "Mệnh đề kéo theo chỉ sai khi giả thiết đúng mà kết luận lại sai ($1 \\rightarrow 0$ là sai). Trong tất cả các trường hợp khác, mệnh đề đều được coi là đúng."
  },
  {
    id: "Q_MOD_D_022", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Khi thu thập dữ liệu từ người dùng thông qua ứng dụng di động, nguyên tắc đạo đức 'Minimization' (Tối thiểu hóa dữ liệu) khuyên kỹ sư AI điều gì?",
    options: [
      "A. Thu thập tối đa tất cả thông tin có thể lấy được nhằm phòng ngừa nhu cầu phân tích phát sinh trong tương lai.",
      "B. Chỉ thu thập những thông tin thực sự cần thiết để phục vụ trực tiếp cho các tính năng cốt lõi của ứng dụng.",
      "C. Tập trung thu thập dữ liệu hành vi của đối tượng trẻ em mà không cần xin ý kiến đồng ý từ phía phụ huynh học sinh.",
      "D. Cho phép chuyển nhượng và bán thông tin người dùng cho bên thứ ba để có kinh phí duy trì hoạt động của hệ thống."
    ],
    correct_option: "B",
    explanation: "Tối thiểu hóa dữ liệu (Data Minimization) yêu cầu chỉ thu thập phần dữ liệu tối thiểu cần thiết cho mục đích đã nêu, giúp hạn chế rủi ro lộ lọt thông tin cá nhân."
  },
  {
    id: "Q_MOD_D_023", module_id: "Module_D", difficulty: "Easy",
    tags: ["ai-bias"],
    content: "Một công ty tuyển dụng sử dụng mô hình AI chấm điểm thấp hơn cho các CV có địa chỉ nhà ở các vùng nông thôn. Hiện tượng này thể hiện vấn đề gì?",
    options: [
      "A. Hệ thống tuyển dụng đang hoạt động với độ chính xác cao.",
      "B. Định kiến thuật toán (Algorithmic Bias) dựa trên địa lý.",
      "C. Hệ thống gặp lỗi tràn bộ nhớ RAM trong khi xử lý dữ liệu.",
      "D. Mô hình học máy đang tự động tối ưu hóa thời gian vận hành."
    ],
    correct_option: "B",
    explanation: "Đây là định kiến hệ thống (bias) gây ra sự bất bình đẳng dựa trên các thuộc tính nhạy cảm như vùng miền, địa lý."
  },
  {
    id: "Q_MOD_D_024", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Hành động nào sau đây là biện pháp an toàn cơ bản nhất để bảo vệ mật khẩu của người dùng trong cơ sở dữ liệu?",
    options: [
      "A. Lưu trữ mật khẩu dưới dạng văn bản thô để hỗ trợ tra cứu nhanh khi người dùng quên mật khẩu đăng nhập.",
      "B. Băm mật khẩu bằng thuật toán một chiều kết hợp kỹ thuật thêm Salt (muối) trước khi lưu vào cơ sở dữ liệu.",
      "C. Gửi mật khẩu dạng thô định kỳ hàng tuần qua email cá nhân để nhắc nhở người dùng không bị quên tài khoản.",
      "D. Bỏ qua hoàn toàn bước lưu trữ mật khẩu, cho phép mọi tài khoản đăng nhập tự do không cần kiểm tra bảo mật."
    ],
    correct_option: "B",
    explanation: "Băm mật khẩu (Password Hashing with Salt) đảm bảo rằng ngay cả khi cơ sở dữ liệu bị rò rỉ, kẻ tấn công cũng không thể dễ dàng giải mã ngược lại để lấy mật khẩu thô."
  },
  {
    id: "Q_MOD_D_025", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Phủ định của mệnh đề logic 'Tất cả sinh viên đều học lập trình' là mệnh đề nào?",
    options: [
      "A. Tất cả sinh viên trong trường đều không học lập trình.",
      "B. Có ít nhất một sinh viên trong trường không học lập trình.",
      "C. Mọi sinh viên trong trường đều phải chuyển sang học toán.",
      "D. Có ít nhất một sinh viên trong trường học môn lập trình."
    ],
    correct_option: "B",
    explanation: "Phủ định của mệnh đề lượng từ toàn thể '$\\forall x, P(x)$' là mệnh đề lượng từ tồn tại '$\\exists x, \\neg P(x)$' (Có ít nhất một phần tử không thỏa mãn)."
  },
  {
    id: "Q_MOD_D_026", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Thuật ngữ 'Deepfake' dùng để chỉ công nghệ AI thực hiện hành vi nào sau đây?",
    options: [
      "A. Giải pháp tự động sao lưu dữ liệu hệ thống lên nền tảng điện toán đám mây.",
      "B. Tạo ra hình ảnh, âm thanh hoặc video giả mạo như thật nhờ công nghệ deep learning.",
      "C. Chương trình tự động quét virus và mã độc để bảo vệ an toàn cho máy tính cá nhân.",
      "D. Ứng dụng hỗ trợ dịch thuật tự động thời gian thực giữa nhiều ngôn ngữ khác nhau."
    ],
    correct_option: "B",
    explanation: "Deepfake kết hợp giữa 'deep learning' and 'fake'. Công nghệ này thường được dùng để tạo video giả mạo người nổi tiếng hoặc lừa đảo tài chính."
  },
  {
    id: "Q_MOD_D_027", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Nếu bạn sử dụng thư viện AI có giấy phép 'Apache License 2.0', bạn được quyền làm gì?",
    options: [
      "A. Chỉ được phép sử dụng cho nghiên cứu cá nhân và tuyệt đối cấm mọi hành vi khai thác thương mại.",
      "B. Được tự do sử dụng, sửa đổi và phân phối lại sản phẩm thương mại, miễn là đính kèm giấy phép gốc.",
      "C. Phải thanh toán một khoản phí bản quyền định kỳ hàng năm cho tác giả hoặc tổ chức sở hữu ban đầu.",
      "D. Bắt buộc phải công khai toàn bộ phần mã nguồn đóng của ứng dụng do doanh nghiệp tự phát triển thêm."
    ],
    correct_option: "B",
    explanation: "Apache 2.0 là giấy phép nguồn mở rất thông thoáng và thân thiện với doanh nghiệp, cho phép thương mại hóa và không có tính chất 'lan truyền' bắt buộc mở mã nguồn như GPL."
  },
  {
    id: "Q_MOD_D_028", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho phát biểu: 'Nếu trời mưa thì đường ướt'. Biết rằng thực tế đường đang khô (không ướt). Kết luận logic nào sau đây là đúng?",
    options: [
      "A. Trời chắc chắn đang mưa.",
      "B. Trời chắc chắn không mưa.",
      "C. Trời chắc chắn sắp đổ mưa.",
      "D. Không thể đưa ra kết luận nào."
    ],
    correct_option: "B",
    explanation: "Theo luật Modus Tollens ($P \\rightarrow Q$ và $\\neg Q \\Rightarrow \\neg P$), vì đường không ướt ($\\neg Q$), ta suy ra trời không mưa ($\\neg P$)."
  },
  {
    id: "Q_MOD_D_029", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Hành vi nào sau đây được coi là vi phạm luật an toàn dữ liệu cá nhân khi chia sẻ tập dữ liệu huấn luyện AI công khai?",
    options: [
      "A. Chỉ chia sẻ các chỉ số thống kê tổng hợp cuối cùng của tập dữ liệu.",
      "B. Chia sẻ dữ liệu đã được tiến hành ẩn danh hóa và băm kỹ các trường PII.",
      "C. Chia sẻ thông tin cá nhân thô của khách hàng khi chưa nhận được sự đồng thuận.",
      "D. Chia sẻ toàn bộ phần mã nguồn dùng để xây dựng và huấn luyện mô hình AI."
    ],
    correct_option: "C",
    explanation: "Chia sẻ PII thô khi chưa có sự đồng ý rõ ràng của chủ thể dữ liệu là hành vi vi phạm pháp luật nghiêm trọng (ví dụ luật GDPR hoặc Luật An toàn thông tin mạng của Việt Nam)."
  },
  {
    id: "Q_MOD_D_030", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Trong các dự án AI, hành vi 'Data Scraping' (cào dữ liệu tự động) từ website khác mà không tuân theo file cấu hình `robots.txt` hoặc điều khoản dịch vụ của trang web đó thể hiện điều gì?",
    options: [
      "A. Khả năng tư duy sáng tạo của kỹ sư AI trong việc thu thập thông tin.",
      "B. Hành vi xâm phạm quy định sở hữu trí tuệ và quyền kiểm soát dữ liệu của bên khác.",
      "C. Phương pháp tối ưu hóa giúp cho website đích tải dữ liệu nhanh chóng hơn.",
      "D. Hoạt động khai thác thông tin lành mạnh luôn được luật pháp quốc tế bảo hộ."
    ],
    correct_option: "B",
    explanation: "File `robots.txt` quy định các vùng dữ liệu mà chủ sở hữu website cho phép hoặc cấm bot cào thông tin. Bỏ qua file này là hành vi thiếu đạo đức dữ liệu và có thể đối mặt với rủi ro pháp lý."
  },
  {
    id: "Q_MOD_D_031", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho hai mệnh đề: 'Hải thích học AI' và 'Hải giỏi toán'. Mệnh đề phủ định của mệnh đề hội (Hải thích học AI và Hải giỏi toán) là mệnh đề nào?",
    options: [
      "A. Hải không thích học AI đồng thời Hải cũng không học giỏi môn toán.",
      "B. Hải không thích học AI hoặc Hải không học giỏi môn toán theo De Morgan.",
      "C. Hải vẫn thích học AI nhưng thực tế Hải lại không học giỏi môn toán.",
      "D. Hải rất học giỏi môn toán nhưng Hải lại không thích thú học môn AI."
    ],
    correct_option: "B",
    explanation: "Theo luật De Morgan: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$ (Phủ định của hội là tuyển các phủ định)."
  },
  {
    id: "Q_MOD_D_032", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Tại sao việc công bố các lỗ hổng bảo mật của mô hình AI (như khả năng bị tấn công adversarial) cho nhà phát triển trước khi công khai rộng rãi ra công chúng lại được coi là đạo đức nghề nghiệp?",
    options: [
      "A. Để nhà phát triển có thời gian vá lỗi bảo mật kịp thời, hạn chế nguy cơ bị kẻ xấu lợi dụng phá hoại.",
      "B. Để tạo áp lực đàm phán và đòi một khoản tiền chuộc lớn từ phía công ty chủ quản sở hữu hệ thống AI.",
      "C. Để công khai năng lực cá nhân và chứng minh trình độ của bản thân vượt trội hơn đội ngũ phát triển.",
      "D. Hành động này hoàn toàn mang tính thủ tục và không mang lại bất kỳ lợi ích thực tế nào cho bảo mật."
    ],
    correct_option: "A",
    explanation: "Đây gọi là nguyên tắc 'Responsible Disclosure' (Công bố có trách nhiệm) trong an ninh mạng và đạo đức công nghệ."
  },
  {
    id: "Q_MOD_D_033", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Xét suy luận sau:\n\n* Mọi loài chim đều bay được.\n* Con đà điểu là một loài chim.\n* Vì vậy, con đà điểu bay được.\nSuy luận này bị lỗi gì?",
    options: [
      "A. Suy luận gặp lỗi vi phạm quy tắc logic về mặt hình thức lập luận.",
      "B. Suy luận dựa trên tiền đề sai thực tế là mọi loài chim đều bay được.",
      "C. Suy luận hoàn toàn logic và phản ánh đúng thực tế khách quan.",
      "D. Lập luận thiếu chính xác do chưa đưa ra định nghĩa đà điểu là gì."
    ],
    correct_option: "B",
    explanation: "Về mặt hình thức (form), suy luận tuân theo đúng luật tam đoạn luận ($A \\rightarrow B, C \\rightarrow A \\Rightarrow C \\rightarrow B$). Tuy nhiên, suy luận không có tính chân thực (soundness) vì tiền đề ban đầu 'Mọi loài chim bay được' là một khẳng định sai thực tế."
  },
  {
    id: "Q_MOD_D_034", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Kỹ thuật 'Differential Privacy' (Bảo mật vi sai) bảo vệ quyền riêng tư của cá nhân trong tập dữ liệu bằng cách nào?",
    options: [
      "A. Xóa bỏ toàn bộ các bản ghi chứa thông tin cá nhân của người dùng trước khi tiến hành chia sẻ.",
      "B. Thêm nhiễu toán học vào kết quả truy vấn để ngăn chặn việc xác định danh tính cụ thể của cá nhân.",
      "C. Mã hóa toàn bộ dữ liệu lưu trữ bằng các thuật toán mã hóa khóa đối xứng tiêu chuẩn như AES-256.",
      "D. Thiết lập phân quyền truy cập chặt chẽ, chỉ cho phép cán bộ quản trị cấp cao nhất được đọc dữ liệu."
    ],
    correct_option: "B",
    explanation: "Differential Privacy cung cấp một hàng rào toán học chống lại việc rò rỉ thông tin cá nhân bằng cách thêm nhiễu ngẫu nhiên được tính toán kỹ lưỡng, giữ nguyên các đặc trưng thống kê chung của tập dữ liệu."
  },
  {
    id: "Q_MOD_D_035", module_id: "Module_D", difficulty: "Medium",
    tags: ["pii-masking"],
    content: "Hành động che bớt hoặc thay thế một phần ký tự của số thẻ tín dụng (ví dụ: '4111-XXXX-XXXX-1234') trước khi hiển thị trên màn hình hoặc lưu vào file log được gọi là kỹ thuật gì?",
    options: [
      "A. Kỹ thuật Hashing (Băm dữ liệu một chiều).",
      "B. Kỹ thuật Data Masking (Che mặt nạ dữ liệu).",
      "C. Kỹ thuật Data Augmentation (Tăng cường dữ liệu).",
      "D. Kỹ thuật Symmetric Encryption (Mã hóa đối xứng)."
    ],
    correct_option: "B",
    explanation: "Data Masking (Che mặt nạ dữ liệu) giúp ẩn các ký tự nhạy cảm khi hiển thị hoặc lưu trữ log, tránh việc nhân viên vận hành vô tình nhìn thấy thông tin nhạy cảm."
  },
  {
    id: "Q_MOD_D_036", module_id: "Module_D", difficulty: "Medium",
    tags: ["ai-bias"],
    content: "Khi thu thập dữ liệu để huấn luyện AI nhận diện các bệnh về da, nếu đội ngũ phát triển chỉ chụp ảnh từ những người có tông màu da sáng. Khi đưa vào thực tế ở các quốc gia có nhiều người da màu, mô hình dự đoán sai liên tục. Loại bias nào xuất hiện ở đây?",
    options: [
      "A. Historical Bias (Định kiến xuất phát từ lịch sử xã hội).",
      "B. Representation Bias (Định kiến do dữ liệu thiếu đại diện).",
      "C. Algorithmic Bias (Định kiến phát sinh từ chính thuật toán).",
      "D. Evaluation Bias (Định kiến trong quá trình đánh giá mô hình)."
    ],
    correct_option: "B",
    explanation: "Representation Bias xảy ra khi một nhóm đối tượng không được đại diện đầy đủ hoặc bị bỏ qua trong tập dữ liệu huấn luyện, khiến mô hình không thể khái quát hóa tốt cho nhóm đó."
  },
  {
    id: "Q_MOD_D_037", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Sự khác biệt cốt lõi giữa hai giấy phép mã nguồn mở 'MIT License' và 'GNU GPL v3' là gì?",
    options: [
      "A. MIT yêu cầu thanh toán bản quyền đối với các mục đích thương mại, trong khi GPL thì hoàn toàn miễn phí.",
      "B. MIT cho phép đóng mã nguồn phái sinh khi thương mại hóa, còn GPL v3 bắt buộc sản phẩm phái sinh phải mở code.",
      "C. GPL v3 cho phép sử dụng thương mại tự do, còn giấy phép MIT nghiêm cấm mọi hành vi tạo doanh thu trực tiếp.",
      "D. Cả hai giấy phép này có tính chất pháp lý tương đương và hoàn toàn trùng khớp nhau về các điều khoản áp dụng."
    ],
    correct_option: "B",
    explanation: "MIT là giấy phép cho phép tối đa (permissive license). GPL v3 là giấy phép copyleft (lan truyền), bảo vệ tính chất nguồn mở của phần mềm phái sinh."
  },
  {
    id: "Q_MOD_D_038", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Một nhà phát triển AI tạo sinh phát hành một mô hình sinh ảnh nghệ thuật cực kỳ đẹp mắt. Tuy nhiên, mô hình này được huấn luyện trên hàng triệu tác phẩm của các họa sĩ mà không xin phép hay trả tiền bản quyền cho họ. Vấn đề đạo đức chính ở đây là:",
    options: [
      "A. Gây ra hiện tượng Pygmalion làm sai lệch kỳ vọng của người dùng.",
      "B. Xâm hại quyền tác giả và trục lợi trên chất xám mà không có sự đồng ý.",
      "C. Khiến cho các bức ảnh do mô hình sinh ra có chất lượng hiển thị kém.",
      "D. Gây khó khăn cho người sử dụng trong việc thiết kế các prompt đầu vào."
    ],
    correct_option: "B",
    explanation: "Sử dụng tác phẩm có bản quyền làm dữ liệu huấn luyện AI thương mại mà không có sự đồng thuận (consent) hoặc đền bù hợp lý là chủ đề tranh chấp đạo đức và pháp lý lớn nhất hiện nay của AI tạo sinh."
  },
  {
    id: "Q_MOD_D_039", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho phát biểu logic sau: 'Mọi kỹ sư AI giỏi đều biết thuật toán tích chập CNN hoặc thuật toán Transformer'. Biết rằng Quốc là một kỹ sư AI giỏi và Quốc không biết thuật toán tích chập CNN. Kết luận nào sau đây chắc chắn đúng?",
    options: [
      "A. Quốc chắc chắn biết thuật toán Transformer.",
      "B. Quốc chắc chắn không biết thuật toán Transformer.",
      "C. Quốc chắc chắn không phải kỹ sư AI trình độ giỏi.",
      "D. Quốc chắc chắn am hiểu tường tận cả hai thuật toán."
    ],
    correct_option: "A",
    explanation: "Mệnh đề logic có dạng: $P \\rightarrow (Q \\lor R)$. Biết rằng P đúng (Quốc là kỹ sư AI giỏi) và Q sai (Quốc không biết CNN), thì mệnh đề R (Quốc biết Transformer) chắc chắn phải đúng để tuyển ($Q \\lor R$) đúng."
  },
  {
    id: "Q_MOD_D_040", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Quy định 'Quyền được lãng quên' (Right to be Forgotten) trong luật bảo vệ dữ liệu GDPR của Châu Âu yêu cầu các hệ thống AI và doanh nghiệp điều gì?",
    options: [
      "A. Yêu cầu hệ thống xóa vĩnh viễn dữ liệu cá nhân của người dùng khi có yêu cầu hợp lệ.",
      "B. Buộc người sử dụng phải thực hiện thay đổi mật khẩu định kỳ để đảm bảo tính an toàn.",
      "C. Tự động thanh lọc dữ liệu lưu trữ hàng năm mà không cần thông báo cho khách hàng biết.",
      "D. Cấm hoàn toàn việc ghi nhận và lưu trữ bất kỳ dữ liệu nào ngay từ thời điểm ban đầu."
    ],
    correct_option: "A",
    explanation: "Quyền được lãng quên cho phép cá nhân yêu cầu xóa dữ liệu của mình khi rút lại sự đồng thuận, hoặc dữ liệu không còn cần thiết cho mục đích ban đầu."
  },
  {
    id: "Q_MOD_D_041", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Khi xây dựng hệ thống AI dự báo khả năng tái phạm tội của các phạm nhân để hỗ trợ tòa án xét xử, nếu hệ thống dựa trên các dữ liệu lịch sử chứa định kiến chủng tộc sâu sắc. Kết quả là hệ thống liên tục đánh giá mức độ nguy hiểm của một nhóm người cao hơn các nhóm khác dù hành vi phạm tội giống nhau. Với tư cách là kỹ sư AI, hành động nào là đúng đắn?",
    options: [
      "A. Vẫn tiến hành đưa hệ thống vào áp dụng thực tế vì các mô hình AI luôn đưa ra quyết định công bằng hơn con người.",
      "B. Tạm ngưng áp dụng, thực hiện khử sai lệch dữ liệu và khuyến cáo chỉ dùng AI làm kênh tham khảo dưới sự giám sát.",
      "C. Thực hiện xáo trộn ngẫu nhiên nhãn của dữ liệu đầu vào để vượt qua các bước kiểm duyệt về đạo đức của cơ quan chức năng.",
      "D. Đổ lỗi cho cấu trúc toán học của thuật toán và tiếp tục sử dụng hệ thống bình thường mà không cần hiệu chỉnh gì thêm."
    ],
    correct_option: "B",
    explanation: "Hệ thống AI tác động trực tiếp đến tự do và quyền con người đòi hỏi tính trách nhiệm và giám sát tối cao. Việc phát hiện bias lịch sử yêu cầu phải hiệu chỉnh và có sự can thiệp của con người (Human-in-the-loop)."
  },
  {
    id: "Q_MOD_D_042", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic từ các phát biểu sau:\n\n* Không có mô hình AI nào là hoàn hảo.\n* Một số mô hình AI được sử dụng trong y tế.\nPhát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Tất cả các mô hình AI đang được áp dụng trong lĩnh vực y tế đều hoàn hảo.",
      "B. Có một số mô hình AI áp dụng trong y tế không đạt được sự hoàn hảo tuyệt đối.",
      "C. Mọi mô hình AI đạt trạng thái hoàn hảo đều bắt buộc phải dùng trong ngành y tế.",
      "D. Các mô hình AI hoạt động trong y tế chắc chắn không bao giờ phát sinh sai sót."
    ],
    correct_option: "B",
    explanation: "Vì không có mô hình AI nào hoàn hảo (Tất cả AI $\\rightarrow$ Không hoàn hảo). Do một số mô hình AI dùng trong y tế, nên những mô hình AI y tế này chắc chắn không hoàn hảo."
  },
  {
    id: "Q_MOD_D_043", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Trong quá trình huấn luyện mô hình ngôn ngữ lớn (LLM), hiện tượng 'Data Leakage' (Rò rỉ dữ liệu) thông qua câu trả lời (ví dụ: người dùng prompt yêu cầu LLM hiển thị số điện thoại cá nhân có trong tập train) thuộc về nguy cơ an toàn nào?",
    options: [
      "A. Nguy cơ bị phá hoại vật lý trực tiếp lên hệ thống máy chủ lưu trữ.",
      "B. Nguy cơ rò rỉ dữ liệu cá nhân do mô hình ghi nhớ nhầm thông tin nhạy cảm.",
      "C. Lỗi biên dịch cú pháp trong mã nguồn Python khi xử lý huấn luyện mô hình.",
      "D. Sự suy giảm nghiêm trọng về độ chính xác dự đoán của mạng nơ-ron nhân tạo."
    ],
    correct_option: "B",
    explanation: "Mô hình LLM có khả năng ghi nhớ (memorize) các đoạn văn bản thô trong tập train. Nếu tập train chứa PII nhạy cảm, kẻ xấu có thể trích xuất ra qua prompt độc hại."
  },
  {
    id: "Q_MOD_D_044", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Đọc tình huống sau: Có 4 mô hình AI A, B, C, D được kiểm thử. Kết quả cho thấy:\n\n* Mô hình A chính xác hơn mô hình B.\n* Mô hình C chính xác hơn mô hình D.\n* Mô hình B chính xác hơn mô hình C.\nSắp xếp thứ tự độ chính xác từ cao đến thấp là:",
    options: [
      "A. A > B > C > D",
      "B. A > C > B > D",
      "C. C > D > A > B",
      "D. D > C > B > A"
    ],
    correct_option: "A",
    explanation: "Ta có các bất đẳng thức: A > B, C > D, và B > C. Kết hợp lại: A > B > C > D."
  },
  {
    id: "Q_MOD_D_045", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Tại sao việc lạm dụng AI tạo sinh để viết tự động các bài báo khoa học giả, sau đó gửi đăng hàng loạt lên các tạp chí lại bị coi là vi phạm nghiêm trọng đạo đức học thuật?",
    options: [
      "A. Do các bài viết được tạo ra từ AI thường có cấu trúc trình bày và định dạng không đạt chuẩn thẩm mỹ khoa học.",
      "B. Do hành vi này làm xói mòn tính trung thực học thuật bằng cách đưa vào hệ thống các tri thức giả lập không qua thực nghiệm.",
      "C. Do các bài báo do trí tuệ nhân tạo sinh ra có dung lượng nội dung quá ngắn và không đáp ứng yêu cầu số trang tối thiểu.",
      "D. Do đa số các nhà xuất bản tạp chí uy tín trên thế giới hiện nay nghiêm cấm sử dụng máy tính trong quá trình nghiên cứu."
    ],
    correct_option: "B",
    explanation: "Đạo đức nghiên cứu khoa học yêu cầu tính thực nghiệm, trung thực và đóng góp tri thức thực sự từ con người. Việc spam bài viết do AI sinh ra làm loãng học thuật và tạo ra các thông tin sai lệch nguy hiểm."
  },
  {
    id: "Q_MOD_D_046", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho ba mệnh đề logic sau:\n\n1. Nếu Nam học giỏi AI (P) hoặc Nam giỏi Toán (Q), thì Nam sẽ đỗ kỳ thi tuyển sinh (R).\n2. Nếu Nam đỗ kỳ thi tuyển sinh (R), Nam sẽ được nhận học bổng (S).\n3. Thực tế Nam không nhận được học bổng ($\\neg$S).\nPhát biểu nào sau đây chắc chắn đúng về mặt logic?",
    options: [
      "A. Nam đã đỗ kỳ thi tuyển sinh nhưng cuối cùng lại không được nhận học bổng.",
      "B. Nam chắc chắn không học giỏi AI và đồng thời Nam cũng không giỏi môn Toán.",
      "C. Nam thực tế học giỏi AI nhưng đáng tiếc là Nam lại không giỏi môn Toán học.",
      "D. Nam thực tế rất giỏi môn Toán học nhưng Nam lại không học giỏi môn học AI."
    ],
    correct_option: "B",
    explanation: "Từ (2) và (3): $R \\rightarrow S$ và $\\neg S \\Rightarrow \\neg R$ (Nam không đỗ kỳ thi). Từ (1) và $\\neg R$: $(P \\lor Q) \\rightarrow R$ và $\\neg R \\Rightarrow \\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$ (Nam không học giỏi AI và Nam không giỏi Toán)."
  },
  {
    id: "Q_MOD_D_047", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Kỹ thuật mã hóa đồng cấu (Homomorphic Encryption) mang lại lợi ích đột phá nào cho an toàn dữ liệu và quyền riêng tư trong các ứng dụng AI đám mây?",
    options: [
      "A. Giúp nén toàn bộ thông tin hình ảnh xuống mức dung lượng cực nhỏ để dễ dàng lưu trữ.",
      "B. Cho phép AI tính toán trực tiếp trên dữ liệu đã mã hóa mà không cần giải mã trước.",
      "C. Hỗ trợ tự động dò quét và tiêu diệt các phần mềm độc hại xâm nhập máy tính người dùng.",
      "D. Triệt tiêu hoàn toàn sự sai lệch định kiến (bias) tồn tại sẵn trong dữ liệu đầu vào."
    ],
    correct_option: "B",
    explanation: "Mã hóa đồng cấu cho phép xử lý dữ liệu ở dạng mã hóa. Kết quả tính toán sau khi giải mã bởi người sở hữu khóa sẽ trùng khớp với kết quả tính trên dữ liệu thô, giúp bảo vệ dữ liệu nhạy cảm tối đa."
  },
  {
    id: "Q_MOD_D_048", module_id: "Module_D", difficulty: "Medium",
    tags: ["ai-bias"],
    content: "Phương pháp 'Pre-processing bias mitigation' giải quyết hiện tượng định kiến (bias) trong AI bằng cách nào?",
    options: [
      "A. Thực hiện điều chỉnh trực tiếp các trọng số của mô hình nơ-ron trong pha lan truyền ngược.",
      "B. Xử lý và cân bằng lại tập dữ liệu huấn luyện để loại bỏ thiên vị trước khi đưa vào mô hình.",
      "C. Tinh chỉnh lại ngưỡng xác suất quyết định ở đầu ra của mô hình sau khi quá trình học hoàn tất.",
      "D. Gia tăng số lượng chu kỳ huấn luyện (epochs) nhằm cải thiện khả năng tối ưu hóa của mô hình."
    ],
    correct_option: "B",
    explanation: "Pre-processing bias mitigation can thiệp vào giai đoạn chuẩn bị dữ liệu (ví dụ re-weighting, tối ưu hóa biểu diễn dữ liệu) để triệt tiêu bias ngay từ nguồn trước khi mô hình học."
  },
  {
    id: "Q_MOD_D_049", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Một công ty công nghệ sử dụng một thư viện AI có giấy phép 'GNU AGPL v3' (Affero GPL v3) để xây dựng dịch vụ SaaS chạy trên đám mây cho người dùng truy cập qua web. Công ty sửa đổi một phần code của thư viện này để tối ưu hóa. Công ty có nghĩa vụ gì về mặt bản quyền?",
    options: [
      "A. Không chịu bất kỳ ràng buộc nào do chỉ triển khai sản phẩm chạy trên máy chủ đám mây không phân phối trực tiếp.",
      "B. Bắt buộc phải công khai toàn bộ mã nguồn sửa đổi của dịch vụ SaaS cho người dùng dưới cùng giấy phép AGPL v3.",
      "C. Chỉ cần tiến hành đính kèm thông tin bản quyền và tên của các tác giả gốc tại mục giới thiệu trên giao diện web.",
      "D. Phải trích xuất và thanh toán mười phần trăm doanh thu từ dịch vụ đám mây cho nhóm phát triển thư viện ban đầu."
    ],
    correct_option: "B",
    explanation: "AGPL v3 được thiết kế đặc biệt để lấp đầy 'lỗ hổng SaaS' của GPL. Nó quy định việc chạy phần mềm trên mạng cho người dùng tương tác từ xa cũng tương đương với việc phân phối phần mềm, buộc phải cung cấp mã nguồn phái sinh cho người dùng mạng."
  },
  {
    id: "Q_MOD_D_050", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong các xe tự lái tích hợp AI, bài toán 'Tình huống khó xử đạo đức' (Ethical Dilemma - ví dụ: xe mất phanh buộc phải chọn đâm vào 1 người già hay 3 người trẻ) thường được các nhà nghiên cứu tiếp cận giải quyết như thế nào dưới góc độ thiết kế sản phẩm có trách nhiệm?",
    options: [
      "A. Thiết lập quy tắc cứng nhắc buộc xe tự lái luôn chủ động va chạm vào đối tượng có độ tuổi cao hơn.",
      "B. Không xây dựng bất kỳ giải pháp nào, để hệ thống điều khiển tự động lựa chọn ngẫu nhiên khi xảy ra tai nạn.",
      "C. Lập trình thuật toán tập trung giảm thiểu tối đa lực va chạm vật lý tổng thể và kích hoạt phanh khẩn cấp.",
      "D. Yêu cầu người lái xe tự điều khiển thủ công hoặc bấm nút lựa chọn hướng tránh va chạm ngay trong tích tắc."
    ],
    correct_option: "C",
    explanation: "Về mặt thiết kế đạo đức công nghệ, việc xếp hạng giá trị mạng sống con người là không thể chấp nhận được. Cách tiếp cận có trách nhiệm là thiết lập quy trình giảm thiểu va chạm vật lý tổng thể và tuân thủ các quy tắc an toàn khách quan."
  },
  {
    id: "Q_MOD_D_051", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Trong mệnh đề logic, mệnh đề hội $P \\land Q$ chỉ nhận giá trị Đúng (True) khi nào?",
    options: [
      "A. Khi cả hai mệnh đề P và Q đều có giá trị Đúng.",
      "B. Khi chỉ có một trong hai mệnh đề P hoặc Q Đúng.",
      "C. Khi cả hai mệnh đề P và Q đều có giá trị Sai.",
      "D. Khi mệnh đề P có giá trị Đúng và Q có giá trị Sai."
    ],
    correct_option: "A",
    explanation: "Mệnh đề hội (AND) chỉ nhận giá trị đúng khi cả hai mệnh đề thành phần đều đúng. Trong các trường hợp khác, nó nhận giá trị sai."
  },
  {
    id: "Q_MOD_D_052", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Phủ định của mệnh đề kéo theo $P \\rightarrow Q$ tương đương với mệnh đề logic nào sau đây?",
    options: [
      "A. Mệnh đề $P \\land \\neg Q$.",
      "B. Mệnh đề $\\neg P \\lor Q$.",
      "C. Mệnh đề $\\neg P \\land Q$.",
      "D. Mệnh đề $P \\lor \\neg Q$."
    ],
    correct_option: "A",
    explanation: "Ta có $P \\rightarrow Q \\equiv \\neg P \\lor Q$. Phủ định của nó là $\\neg(P \\rightarrow Q) \\equiv \\neg(\\neg P \\lor Q) \\equiv P \\land \\neg Q$ theo luật De Morgan."
  },
  {
    id: "Q_MOD_D_053", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Trong các nguyên tắc đạo đức dữ liệu, thuật ngữ 'Informed Consent' được hiểu là gì?",
    options: [
      "A. Sự đồng thuận tự nguyện của chủ thể dữ liệu dựa trên thông tin đầy đủ.",
      "B. Việc chia sẻ dữ liệu tự do giữa các tổ chức mà không cần xin phép.",
      "C. Quá trình tự động ẩn danh hóa các thông tin định danh của cá nhân.",
      "D. Quy trình mã hóa dữ liệu người dùng để ngăn chặn sự xâm nhập trái phép."
    ],
    correct_option: "A",
    explanation: "'Informed Consent' (Đồng thuận dựa trên thông tin) yêu cầu tổ chức phải giải thích rõ ràng cách thu thập, sử dụng dữ liệu và chủ thể dữ liệu đồng ý trước khi thực hiện."
  },
  {
    id: "Q_MOD_D_054", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Giấy phép Creative Commons 'CC BY' cho phép người khác làm gì với tác phẩm của bạn?",
    options: [
      "A. Tự do sao chép, phân phối và chỉnh sửa tác phẩm nhưng bắt buộc phải ghi công bạn.",
      "B. Chỉ được phép sử dụng tác phẩm cho các mục đích phi thương mại và nghiên cứu.",
      "C. Không được phép tạo ra các tác phẩm phái sinh từ tác phẩm gốc của bạn dưới mọi hình thức.",
      "D. Sử dụng tác phẩm hoàn toàn tự do mà không cần ghi nhận bất kỳ thông tin nào về tác giả."
    ],
    correct_option: "A",
    explanation: "Giấy phép CC BY là giấy phép ghi nhận tác giả (BY). Nó cho phép phân phối, phối lại, điều chỉnh và xây dựng dựa trên tác phẩm, miễn là ghi công tác giả gốc."
  },
  {
    id: "Q_MOD_D_055", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Thuật ngữ 'Fairness' (Sự công bằng) trong hệ thống AI hướng đến mục tiêu chính nào sau đây?",
    options: [
      "A. Đảm bảo mô hình AI đưa ra các dự đoán không thiên vị hay phân biệt đối xử với các nhóm đối tượng.",
      "B. Đảm bảo tốc độ huấn luyện mô hình AI đạt mức tối đa trên mọi kiến trúc phần cứng khác nhau.",
      "C. Đảm bảo tính toán chính xác của các phép toán đại số tuyến tính trong thuật toán học máy.",
      "D. Đảm bảo mã nguồn của mô hình AI được phân phối rộng rãi dưới các giấy phép nguồn mở."
    ],
    correct_option: "A",
    explanation: "Sự công bằng (Fairness) trong AI hướng tới việc loại bỏ hoặc giảm thiểu định kiến phân biệt đối xử đối với các cá nhân hoặc nhóm dựa trên giới tính, chủng tộc, độ tuổi, v.v."
  },
  {
    id: "Q_MOD_D_056", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Giấy phép nguồn mở nào sau đây thuộc nhóm 'Permissive' (Thông thoáng/Cho phép tối đa)?",
    options: [
      "A. Giấy phép MIT License.",
      "B. Giấy phép GNU GPL v3.",
      "C. Giấy phép GNU AGPL v3.",
      "D. Giấy phép GNU LGPL v3."
    ],
    correct_option: "A",
    explanation: "MIT License là giấy phép cực kỳ thông thoáng (permissive), cho phép sao chép, sửa đổi, phân phối và sử dụng thương mại mà không bắt buộc phải mở mã nguồn."
  },
  {
    id: "Q_MOD_D_057", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho mệnh đề logic: 'Nếu bạn giải được bài toán này (A) thì bạn sẽ được điểm cao (B)'. Biết rằng bạn được điểm cao. Kết luận nào sau đây là đúng đắn về mặt logic?",
    options: [
      "A. Chưa thể đưa ra kết luận chắc chắn rằng bạn đã giải được bài toán này.",
      "B. Bạn chắc chắn đã giải được bài toán này trước khi nhận điểm số cao.",
      "C. Bạn chắc chắn không giải được bài toán này nhưng vẫn nhận điểm cao.",
      "D. Kết luận rằng mệnh đề kéo theo ban đầu là một mệnh đề hoàn toàn sai."
    ],
    correct_option: "A",
    explanation: "Đây là lỗi khẳng định hệ quả (affirming the consequent). Từ $A \\rightarrow B$ và $B$ đúng, ta không thể suy ra $A$ đúng hay sai."
  },
  {
    id: "Q_MOD_D_058", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Việc thu thập dữ liệu vị trí GPS của người dùng 24/7 mà không có lý do chức năng rõ ràng vi phạm nguyên tắc bảo mật dữ liệu nào?",
    options: [
      "A. Nguyên tắc tối thiểu hóa dữ liệu (Data Minimization).",
      "B. Nguyên tắc bảo đảm tính chính xác (Data Accuracy).",
      "C. Nguyên tắc lưu trữ giới hạn thời gian (Storage Limitation).",
      "D. Nguyên tắc bảo mật và toàn vẹn dữ liệu (Integrity)."
    ],
    correct_option: "A",
    explanation: "Nguyên tắc Data Minimization yêu cầu chỉ thu thập dữ liệu cần thiết cho mục đích cụ thể. Thu thập dữ liệu vị trí liên tục không phục vụ chức năng là vi phạm nguyên tắc này."
  },
  {
    id: "Q_MOD_D_059", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Mệnh đề phủ định của mệnh đề tuyển $P \\lor Q$ là mệnh đề logic nào theo luật De Morgan?",
    options: [
      "A. Mệnh đề $\\neg P \\land \\neg Q$.",
      "B. Mệnh đề $\\neg P \\lor \\neg Q$.",
      "C. Mệnh đề $P \\land \\neg Q$.",
      "D. Mệnh đề $\\neg P \\lor Q$."
    ],
    correct_option: "A",
    explanation: "Theo luật De Morgan, phủ định của tuyển là hội các phủ định: $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$."
  },
  {
    id: "Q_MOD_D_060", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Trong đạo đức AI, khái niệm 'Transparency' (Tính minh bạch) yêu cầu các nhà phát triển điều gì?",
    options: [
      "A. Cung cấp thông tin rõ ràng về cách thức hoạt động và dữ liệu huấn luyện của hệ thống AI.",
      "B. Đảm bảo phần mềm AI chạy không bị trễ hoặc gặp lỗi kết nối mạng trong quá trình sử dụng.",
      "C. Cấm hoàn toàn việc thương mại hóa các mô hình AI để bảo vệ quyền lợi cho người dùng.",
      "D. Thiết lập các rào cản mật khẩu phức tạp để bảo vệ hệ thống khỏi các cuộc tấn công mạng."
    ],
    correct_option: "A",
    explanation: "Tính minh bạch yêu cầu giải thích rõ ràng về cấu trúc, cách thức hoạt động, mục đích và nguồn gốc dữ liệu huấn luyện của mô hình AI cho các bên liên quan."
  },
  {
    id: "Q_MOD_D_061", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Giấy phép Creative Commons 'CC0' (CC Zero) có ý nghĩa như thế nào đối với một tác phẩm?",
    options: [
      "A. Tác giả từ bỏ mọi quyền sở hữu trí tuệ để đưa tác phẩm vào miền công cộng tự do.",
      "B. Người dùng phải trả phí bản quyền sau khi sử dụng tác phẩm quá một số lần quy định.",
      "C. Tác phẩm chỉ được sử dụng cho mục đích phi thương mại và tuyệt đối cấm chỉnh sửa.",
      "D. Bắt buộc người sử dụng phải chia sẻ sản phẩm phái sinh dưới cùng giấy phép CC0."
    ],
    correct_option: "A",
    explanation: "CC0 cho phép tác giả từ bỏ quyền tác giả của mình trong phạm vi pháp luật cho phép, đưa tác phẩm vào miền công cộng (Public Domain) để bất kỳ ai cũng có thể sử dụng tự do không điều kiện."
  },
  {
    id: "Q_MOD_D_062", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho mệnh đề logic: 'Tất cả các mô hình học máy đều cần dữ liệu'. Mệnh đề phủ định của mệnh đề này là mệnh đề nào?",
    options: [
      "A. Có ít nhất một mô hình học máy không cần dữ liệu.",
      "B. Tất cả các mô hình học máy đều không cần dữ liệu.",
      "C. Không có mô hình học máy nào cần dữ liệu đầu vào.",
      "D. Mọi mô hình học máy chỉ cần một lượng ít dữ liệu."
    ],
    correct_option: "A",
    explanation: "Phủ định của $\\forall x, P(x)$ là $\\exists x, \\neg P(x)$ (Có ít nhất một phần tử không thỏa mãn tính chất P)."
  },
  {
    id: "Q_MOD_D_063", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Phương pháp nào sau đây giúp loại bỏ định danh cá nhân trực tiếp như họ tên, số định danh khỏi cơ sở dữ liệu?",
    options: [
      "A. De-identification (Khử định danh dữ liệu).",
      "B. Data Augmentation (Tăng cường dữ liệu).",
      "C. Overfitting Prevention (Chống quá khớp).",
      "D. Feature Scaling (Chuẩn hóa đặc trưng)."
    ],
    correct_option: "A",
    explanation: "Khử định danh (De-identification) là quá trình loại bỏ các thông tin định danh trực tiếp nhằm bảo vệ quyền riêng tư của cá nhân trước khi chia sẻ dữ liệu."
  },
  {
    id: "Q_MOD_D_064", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho mệnh đề: 'Hôm nay trời không mưa hoặc tôi đi đá bóng'. Biết rằng hôm nay trời mưa. Kết luận logic nào là đúng?",
    options: [
      "A. Hôm nay tôi chắc chắn đi đá bóng.",
      "B. Hôm nay tôi chắc chắn không đi đá bóng.",
      "C. Hôm nay trời không mưa và tôi đi đá bóng.",
      "D. Chưa thể kết luận được tôi có đi đá bóng hay không."
    ],
    correct_option: "A",
    explanation: "Mệnh đề tuyển: $\\neg R \\lor B$. Biết rằng trời mưa tức là $R$ đúng $\\Rightarrow \\neg R$ sai. Để mệnh đề tuyển đúng thì vế còn lại $B$ (tôi đi đá bóng) buộc phải đúng."
  },
  {
    id: "Q_MOD_D_065", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Tại sao việc sử dụng hình ảnh của trẻ em làm dữ liệu huấn luyện AI cần được kiểm soát cực kỳ nghiêm ngặt?",
    options: [
      "A. Do trẻ em chưa đủ năng lực hành vi để tự đưa ra sự đồng thuận hợp pháp về quyền riêng tư.",
      "B. Do hình ảnh trẻ em thường có kích thước dung lượng nhỏ hơn và độ phân giải không cao.",
      "C. Do các mô hình AI không thể nhận diện được các đặc trưng khuôn mặt của đối tượng trẻ em.",
      "D. Do việc xử lý hình ảnh trẻ em làm tiêu tốn nhiều năng lượng và tài nguyên phần cứng hơn."
    ],
    correct_option: "A",
    explanation: "Trẻ em là đối tượng dễ bị tổn thương và pháp luật quy định cha mẹ hoặc người giám hộ hợp pháp phải cung cấp sự đồng thuận thay thế."
  },
  {
    id: "Q_MOD_D_066", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Điểm chung cốt lõi giữa hai giấy phép nguồn mở MIT License và Apache License 2.0 là gì?",
    options: [
      "A. Cả hai đều cho phép người dùng tự do sử dụng thương mại mà không cần mở mã nguồn.",
      "B. Cả hai đều bắt buộc người dùng phải mở mã nguồn phái sinh dưới cùng một giấy phép gốc.",
      "C. Cả hai đều yêu cầu người dùng phải trả một khoản phí định quyền thương mại hàng năm.",
      "D. Cả hai đều nghiêm cấm việc sửa đổi cấu trúc mã nguồn gốc của thư viện khi phát hành."
    ],
    correct_option: "A",
    explanation: "Cả MIT và Apache 2.0 đều là giấy phép permissive, cho phép thương mại hóa và đóng mã nguồn sản phẩm phái sinh thoải mái."
  },
  {
    id: "Q_MOD_D_067", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Hai mệnh đề logic P và Q được gọi là tương đương logic ($P \\equiv Q$) khi và chỉ khi nào?",
    options: [
      "A. Chúng có cùng bảng giá trị chân lý trong mọi trường hợp của các biến thành phần.",
      "B. Chúng có cùng số lượng các biến logic và cùng sử dụng các toán tử logic giống nhau.",
      "C. Một trong hai mệnh đề luôn nhận giá trị Đúng và mệnh đề còn lại nhận giá trị Sai.",
      "D. Chúng đều nhận giá trị Đúng trong ít nhất một trường hợp cụ thể của bảng chân lý."
    ],
    correct_option: "A",
    explanation: "Hai mệnh đề tương đương logic khi và chỉ khi chúng có cùng giá trị chân lý (Đúng/Sai) trong mọi dòng của bảng chân trị."
  },
  {
    id: "Q_MOD_D_068", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Theo GDPR, chủ thể dữ liệu có quyền yêu cầu hạn chế xử lý dữ liệu cá nhân của họ khi nào?",
    options: [
      "A. Khi họ nghi ngờ tính chính xác của dữ liệu hoặc tính hợp pháp của việc xử lý dữ liệu.",
      "B. Khi họ muốn chuyển sang sử dụng dịch vụ của một nhà cung cấp cạnh tranh khác trên thị trường.",
      "C. Khi hệ thống của doanh nghiệp bị quá tải phần cứng và không thể xử lý dữ liệu kịp thời.",
      "D. Khi họ không muốn trả phí dịch vụ hàng tháng cho nhà cung cấp giải pháp công nghệ."
    ],
    correct_option: "A",
    explanation: "Theo GDPR, chủ thể dữ liệu có quyền yêu cầu hạn chế xử lý nếu họ phản đối tính chính xác của dữ liệu hoặc việc xử lý là bất hợp pháp nhưng họ không muốn xóa dữ liệu."
  },
  {
    id: "Q_MOD_D_069", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Vấn đề đạo đức nào xuất hiện khi một ứng dụng AI tạo nội dung tự động phát tán các thông tin sai sự thật?",
    options: [
      "A. Vấn đề tin giả và lan truyền thông tin sai lệch gây mất an toàn trật tự xã hội.",
      "B. Vấn đề suy giảm hiệu suất xử lý toán học của hệ thống máy chủ vận hành mô hình.",
      "C. Vấn đề vi phạm điều khoản phân phối mã nguồn mở của các giấy phép copyleft lan truyền.",
      "D. Vấn đề không tối ưu hóa được không gian lưu trữ cơ sở dữ liệu của ứng dụng tạo sinh."
    ],
    correct_option: "A",
    explanation: "AI sinh thông tin giả (hallucination hoặc cố tình tạo tin giả) gây ra các hệ lụy đạo đức lớn về truyền thông và trật tự xã hội."
  },
  {
    id: "Q_MOD_D_070", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho mệnh đề logic: $P \\leftrightarrow Q$ (Mệnh đề tương đương). Mệnh đề này nhận giá trị Đúng (True) khi nào?",
    options: [
      "A. Khi cả hai mệnh đề P và Q có cùng giá trị chân lý (cùng Đúng hoặc cùng Sai).",
      "B. Khi mệnh đề P có giá trị Đúng và mệnh đề Q nhận giá trị Sai trong mọi trường hợp.",
      "C. Khi mệnh đề P có giá trị Sai và mệnh đề Q nhận giá trị Đúng trong mọi trường hợp.",
      "D. Khi chỉ có một trong hai mệnh đề nhận giá trị Đúng và mệnh đề còn lại nhận giá trị Sai."
    ],
    correct_option: "A",
    explanation: "Mệnh đề tương đương $P \\leftrightarrow Q$ đúng khi P và Q có cùng giá trị chân lý (cùng True hoặc cùng False)."
  },
  {
    id: "Q_MOD_D_071", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho suy luận logic sau: 'Nếu mô hình bị quá khớp (P), thì độ chính xác trên tập kiểm thử sẽ thấp (Q). Thực tế, độ chính xác trên tập kiểm thử của mô hình rất cao ($\\neg$Q)'. Kết luận nào là đúng đắn?",
    options: [
      "A. Mô hình chắc chắn không bị quá khớp.",
      "B. Mô hình chắc chắn đã bị hiện tượng quá khớp.",
      "C. Chưa thể kết luận về việc mô hình có quá khớp không.",
      "D. Mệnh đề kéo theo ban đầu là mệnh đề hoàn toàn sai."
    ],
    correct_option: "A",
    explanation: "Áp dụng luật Modus Tollens: $P \\rightarrow Q$ và $\\neg Q \\Rightarrow \\neg P$. Vì độ chính xác kiểm thử cao ($\\neg Q$), suy ra mô hình không bị quá khớp ($\\neg P$)."
  },
  {
    id: "Q_MOD_D_072", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong phát triển AI, khái niệm 'Human-in-the-loop' (Con người trong vòng lặp) có vai trò đạo đức nào?",
    options: [
      "A. Giữ vai trò giám sát, đưa ra quyết định hoặc can thiệp khi mô hình AI hoạt động không chính xác.",
      "B. Thay thế hoàn toàn các máy chủ GPU bằng sức lao động thủ công của con người để huấn luyện mô hình.",
      "C. Bắt buộc con người phải thực hiện nhập thủ công toàn bộ dữ liệu đầu vào của hệ thống AI hàng ngày.",
      "D. Tăng cường khả năng tự học của thuật toán học máy mà không cần bất kỳ nhãn dữ liệu có sẵn nào."
    ],
    correct_option: "A",
    explanation: "Con người trong vòng lặp (Human-in-the-loop) đảm bảo có sự giám sát và can thiệp của con người vào quyết định của AI, đặc biệt là các quyết định quan trọng ảnh hưởng đến con người."
  },
  {
    id: "Q_MOD_D_073", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Sự khác biệt chính giữa giấy phép Creative Commons 'CC BY-NC' và 'CC BY-ND' là gì?",
    options: [
      "A. CC BY-NC cấm sử dụng thương mại, trong khi CC BY-ND cấm tạo ra các tác phẩm phái sinh từ bản gốc.",
      "B. CC BY-ND cấm sử dụng thương mại, trong khi CC BY-NC cấm tạo ra các tác phẩm phái sinh từ bản gốc.",
      "C. CC BY-NC yêu cầu mở mã nguồn sản phẩm, còn CC BY-ND yêu cầu trả phí bản quyền cho tác giả gốc.",
      "D. CC BY-ND yêu cầu mở mã nguồn sản phẩm, còn CC BY-NC yêu cầu trả phí bản quyền cho tác giả gốc."
    ],
    correct_option: "A",
    explanation: "NC = Non-Commercial (phi thương mại - cấm dùng kiếm tiền). ND = No-Derivatives (không phái sinh - cấm chỉnh sửa, chế tác lại)."
  },
  {
    id: "Q_MOD_D_074", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Xét tính đúng đắn của mệnh đề: 'Hệ thống AI này an toàn nếu và chỉ nếu nó không bị tấn công từ chối dịch vụ và không chứa lỗ hổng bảo mật'. Mệnh đề này sai khi nào?",
    options: [
      "A. Hệ thống được đánh giá là an toàn nhưng thực tế phát hiện ra có chứa lỗ hổng bảo mật.",
      "B. Hệ thống không bị tấn công và không có lỗ hổng bảo mật, đồng thời nó hoạt động an toàn.",
      "C. Hệ thống bị tấn công từ chối dịch vụ hoặc có chứa lỗ hổng bảo mật, đồng thời nó không an toàn.",
      "D. Hệ thống không bị tấn công nhưng có chứa lỗ hổng bảo mật, đồng thời nó hoạt động không an toàn."
    ],
    correct_option: "A",
    explanation: "Mệnh đề tương đương $P \\leftrightarrow Q$ chỉ sai khi hai vế ngược giá trị chân trị. Ở phương án A, vế 1 (An toàn) là Đúng, nhưng vế 2 (không bị tấn công và không có lỗ hổng) bị Sai vì có lỗ hổng, dẫn đến mệnh đề tương đương bị sai."
  },
  {
    id: "Q_MOD_D_075", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Tại sao kỹ thuật 'K-Anonymity' lại quan trọng trong việc xuất bản dữ liệu nghiên cứu y tế công cộng?",
    options: [
      "A. Nó đảm bảo mỗi cá nhân trong tập dữ liệu không thể bị phân biệt với ít nhất $k-1$ cá nhân khác.",
      "B. Nó nén dữ liệu y tế xuống $k$ lần giúp tăng tốc độ truyền tải thông tin qua mạng internet.",
      "C. Nó tự động chuyển đổi toàn bộ cơ sở dữ liệu y tế sang định dạng mã hóa khóa công khai RSA.",
      "D. Nó ngăn chặn tuyệt đối các cuộc tấn công vật lý vào hệ thống lưu trữ dữ liệu của bệnh viện."
    ],
    correct_option: "A",
    explanation: "K-Anonymity là kỹ thuật bảo vệ quyền riêng tư bằng cách ẩn danh dữ liệu sao cho mỗi bản ghi tương đồng với ít nhất $k-1$ bản ghi khác trên các thuộc tính định danh gián tiếp (quasi-identifiers)."
  },
  {
    id: "Q_MOD_D_076", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong đạo đức dữ liệu, hiện tượng 'Feedback Loop' (Vòng phản hồi định kiến) trong hệ thống gợi ý tin tức hoạt động như thế nào?",
    options: [
      "A. AI gợi ý tin tức dựa trên định kiến của người dùng, người dùng đọc và củng cố định kiến đó rồi tiếp tục cấp dữ liệu.",
      "B. AI liên tục gửi email phản hồi lỗi lập trình về hệ thống của nhà phát triển để yêu cầu cập nhật bản vá mới.",
      "C. Người dùng phản hồi trực tiếp các ý kiến đánh giá chất lượng sản phẩm lên các kho ứng dụng di động công khai.",
      "D. Máy chủ tự động phản hồi tín hiệu ping để kiểm tra kết nối mạng giữa các nút trong hệ thống điện toán đám mây."
    ],
    correct_option: "A",
    explanation: "Vòng phản hồi (Feedback Loop) xảy ra khi hệ thống gợi ý học từ dữ liệu hành vi của người dùng và tiếp tục gợi ý các nội dung tương tự, làm phân cực thông tin và củng cố định kiến của họ."
  },
  {
    id: "Q_MOD_D_077", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Tại sao các tập đoàn công nghệ lớn thường e ngại việc sử dụng thư viện nguồn mở có giấy phép 'GPL v3' trong sản phẩm thương mại mã nguồn đóng của họ?",
    options: [
      "A. Vì GPL v3 bắt buộc họ phải công khai toàn bộ mã nguồn của sản phẩm thương mại đó cho người dùng.",
      "B. Vì GPL v3 yêu cầu họ phải trả một tỷ lệ doanh thu bán hàng rất cao cho cộng đồng lập trình viên nguồn mở.",
      "C. Vì GPL v3 nghiêm cấm mọi hình thức phân phối sản phẩm phần mềm thương mại ra thị trường đại chúng.",
      "D. Vì GPL v3 không bảo đảm tính an toàn bảo mật và có thể tự động xóa dữ liệu trên hệ thống máy chủ."
    ],
    correct_option: "A",
    explanation: "GPL v3 có điều khoản copyleft lan truyền. Nếu tích hợp code GPL v3 vào phần mềm đóng, toàn bộ phần mềm phái sinh đó cũng phải mở mã nguồn dưới GPL v3 khi phân phối."
  },
  {
    id: "Q_MOD_D_078", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho phát biểu logic sau: 'Mọi thuật toán phân loại đều cần nhãn dữ liệu hoặc là thuật toán học không giám sát'. Biết rằng K-Means là thuật toán học không giám sát. Phát biểu nào sau đây chắc chắn đúng về mặt logic?",
    options: [
      "A. Chưa thể khẳng định chắc chắn K-Means có cần nhãn dữ liệu hay không từ dữ kiện của phát biểu.",
      "B. Thuật toán K-Means chắc chắn cần nhãn dữ liệu để thực hiện phân cụm các điểm dữ liệu đầu vào.",
      "C. Thuật toán K-Means chắc chắn không cần nhãn dữ liệu để thực hiện phân cụm các điểm dữ liệu đầu vào.",
      "D. Phát biểu logic ban đầu là một mệnh đề sai do thuật toán phân loại bắt buộc phải cần nhãn dữ liệu."
    ],
    correct_option: "A",
    explanation: "Phát biểu có dạng: $C \\rightarrow (L \\lor U)$. Biết rằng K-Means là học không giám sát ($U$ đúng), thì mệnh đề tuyển ($L \\lor U$) luôn đúng bất kể $L$ đúng hay sai. Do đó, ta chưa thể kết luận K-Means có cần nhãn dữ liệu ($L$) hay không dựa trên phát biểu này."
  },
  {
    id: "Q_MOD_D_079", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Quy định nào sau đây của Luật An ninh mạng Việt Nam liên quan trực tiếp đến việc lưu trữ dữ liệu người dùng của các công ty công nghệ nước ngoài?",
    options: [
      "A. Yêu cầu lưu trữ dữ liệu cá nhân của người sử dụng Việt Nam tại Việt Nam (Địa phương hóa dữ liệu).",
      "B. Bắt buộc các công ty công nghệ phải mở toàn bộ mã nguồn thuật toán AI cho cơ quan quản lý kiểm tra.",
      "C. Nghiêm cấm các công ty công nghệ cung cấp dịch vụ có thu phí đối với người sử dụng trong nước.",
      "D. Yêu cầu các công ty công nghệ phải thanh toán thuế tài nguyên thông tin hàng tháng cho chính phủ."
    ],
    correct_option: "A",
    explanation: "Luật An ninh mạng Việt Nam quy định các doanh nghiệp trong và ngoài nước cung cấp dịch vụ trên mạng viễn thông, Internet tại Việt Nam có hoạt động thu thập, khai thác, phân tích, xử lý dữ liệu về thông tin cá nhân... phải lưu trữ dữ liệu này tại Việt Nam."
  },
  {
    id: "Q_MOD_D_080", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Việc sử dụng mô hình học máy dự đoán khả năng tài chính để tự động từ chối hồ sơ vay vốn mà không cung cấp lý do cụ thể vi phạm quyền đạo đức nào của khách hàng?",
    options: [
      "A. Quyền được giải thích (Right to Explanation) về quy trình ra quyết định tự động ảnh hưởng cá nhân.",
      "B. Quyền được lãng quên dữ liệu cá nhân hoàn toàn khỏi hệ thống lưu trữ của tổ chức tài chính.",
      "C. Quyền được chuyển đổi dữ liệu số từ tổ chức tín dụng này sang tổ chức tín dụng đối thủ cạnh tranh.",
      "D. Quyền được yêu cầu bồi thường thiệt hại tài chính do mô hình AI đưa ra quyết định sai sót."
    ],
    correct_option: "A",
    explanation: "Khách hàng có quyền được biết lý do tại sao họ bị từ chối vay vốn (Explainability / Right to Explanation) để đảm bảo tính công bằng và chống phân biệt đối xử."
  },
  {
    id: "Q_MOD_D_081", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Khi sử dụng phần mềm có giấy phép 'GPL v3' để làm công cụ nội bộ trong công ty mà không phân phối ra bên ngoài, công ty có nghĩa vụ phải công khai mã nguồn của các sửa đổi không?",
    options: [
      "A. Không cần công khai mã nguồn, vì nghĩa vụ mở mã nguồn của GPL chỉ phát sinh khi phần mềm được phân phối.",
      "B. Bắt buộc phải công khai mã nguồn lên các nền tảng công cộng ngay sau khi tiến hành sửa đổi mã nguồn.",
      "C. Phải trả một khoản phí phạt bản quyền cho tổ chức sáng lập phần mềm nguồn mở tự do FSF hàng năm.",
      "D. Chỉ cần công khai mã nguồn sửa đổi cho các đối tác chiến lược có ký hợp đồng bảo mật với công ty."
    ],
    correct_option: "A",
    explanation: "Giấy phép GPL quy định nghĩa vụ mở mã nguồn phát sinh khi phân phối (distribute) phần mềm ra ngoài. Sử dụng nội bộ (internal use) không cấu thành hành vi phân phối, do đó không bắt buộc mở mã nguồn."
  },
  {
    id: "Q_MOD_D_082", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho ba mệnh đề logic $P, Q, R$. Biết rằng mệnh đề kéo theo $(P \\land Q) \\rightarrow R$ có giá trị Sai (False). Phát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Mệnh đề P nhận giá trị Đúng, mệnh đề Q nhận giá trị Đúng và mệnh đề R nhận giá trị Sai.",
      "B. Mệnh đề P nhận giá trị Sai, mệnh đề Q nhận giá trị Đúng và mệnh đề R nhận giá trị Đúng.",
      "C. Mệnh đề P nhận giá trị Đúng, mệnh đề Q nhận giá trị Sai và mệnh đề R nhận giá trị Sai.",
      "D. Mệnh đề P nhận giá trị Sai, mệnh đề Q nhận giá trị Sai và mệnh đề R nhận giá trị Đúng."
    ],
    correct_option: "A",
    explanation: "Mệnh đề kéo theo $A \\rightarrow B$ chỉ sai khi vế trước $A$ Đúng và vế sau $B$ Sai. Ở đây $P \\land Q$ phải Đúng (tức là cả P và Q đều Đúng) và R phải Sai."
  },
  {
    id: "Q_MOD_D_083", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Kỹ thuật 'Anonymization' (Ẩn danh hóa) khác biệt cốt lõi như thế nào so với 'Pseudonymization' (Giả danh hóa) trong quản lý dữ liệu?",
    options: [
      "A. Ẩn danh hóa không thể đảo ngược để xác định danh tính, còn giả danh hóa có thể đảo ngược bằng thông tin bổ sung.",
      "B. Giả danh hóa không thể đảo ngược để xác định danh tính, còn ẩn danh hóa có thể đảo ngược bằng thông tin bổ sung.",
      "C. Ẩn danh hóa sử dụng thuật toán mã hóa đối xứng, còn giả danh hóa sử dụng thuật toán mã hóa bất đối xứng.",
      "D. Giả danh hóa bắt buộc phải xóa bỏ toàn bộ dữ liệu, còn ẩn danh hóa cho phép lưu trữ dữ liệu thô vô thời hạn."
    ],
    correct_option: "A",
    explanation: "Ẩn danh hóa (Anonymization) loại bỏ thông tin định danh vĩnh viễn, không thể khôi phục lại. Giả danh hóa (Pseudonymization) thay thế định danh bằng mã giả, có thể đối chiếu lại danh tính nếu có khóa giải mã hoặc thông tin bổ sung."
  },
  {
    id: "Q_MOD_D_084", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Tại sao định kiến 'Automation Bias' lại nguy hiểm trong việc triển khai các hệ thống hỗ trợ quyết định bằng AI?",
    options: [
      "A. Con người có xu hướng tin tưởng mù quáng vào quyết định của máy tính và bỏ qua các dấu hiệu cảnh báo lỗi.",
      "B. Thuật toán AI tự động tăng độ phức tạp tính toán dẫn đến hệ thống bị quá tải phần cứng liên tục.",
      "C. Người dùng tự động chia sẻ thông tin cá nhân lên internet mà không qua các bước kiểm duyệt bảo mật.",
      "D. Mô hình AI tự động sửa đổi mã nguồn và tự phát hành các phiên bản mới trên kho lưu trữ trực tuyến."
    ],
    correct_option: "A",
    explanation: "Automation Bias (Định kiến tự động hóa) là xu hướng con người quá tin tưởng vào kết quả từ hệ thống tự động, bỏ qua các kiểm chứng thực tế hoặc phản biện cá nhân, dẫn đến bỏ lọt sai sót của AI."
  },
  {
    id: "Q_MOD_D_085", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Giấy phép 'GNU LGPL' thường được áp dụng cho loại sản phẩm phần mềm nào và mang lại lợi ích gì?",
    options: [
      "A. Thư viện phần mềm, cho phép liên kết động với phần mềm thương mại đóng mà không buộc mở nguồn phần mềm đó.",
      "B. Ứng dụng web, bắt buộc các nhà cung cấp dịch vụ SaaS phải công khai toàn bộ mã nguồn của dịch vụ đám mây.",
      "C. Cơ sở dữ liệu lớn, nghiêm cấm mọi hành vi sao chép và phân phối dữ liệu cho các mục đích thương mại kiếm tiền.",
      "D. Hệ điều hành máy tính, yêu cầu người sử dụng phải đóng góp mã nguồn sửa đổi cho cộng đồng hàng tháng."
    ],
    correct_option: "A",
    explanation: "LGPL (Lesser GPL) được thiết kế cho các thư viện (libraries). Nó cho phép liên kết (link) với các chương trình đóng mà không làm chương trình đóng đó bị nhiễm tính chất copyleft của GPL, miễn là thư viện LGPL được liên kết động."
  },
  {
    id: "Q_MOD_D_086", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho mệnh đề logic kéo theo: 'Nếu thuật toán học máy hoạt động tốt (A) thì tập dữ liệu huấn luyện không bị nhiễu (B)'. Mệnh đề đảo của mệnh đề này là mệnh đề nào?",
    options: [
      "A. Nếu tập dữ liệu huấn luyện không bị nhiễu thì thuật toán học máy hoạt động tốt.",
      "B. Nếu thuật toán học máy không hoạt động tốt thì tập dữ liệu huấn luyện bị nhiễu.",
      "C. Nếu tập dữ liệu huấn luyện bị nhiễu thì thuật toán học máy hoạt động không tốt.",
      "D. Nếu thuật toán học máy hoạt động tốt thì tập dữ liệu huấn luyện bị nhiễu nặng."
    ],
    correct_option: "A",
    explanation: "Mệnh đề đảo của $A \\rightarrow B$ là $B \\rightarrow A$ (Đổi chỗ giả thiết và kết luận)."
  },
  {
    id: "Q_MOD_D_087", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Trong các nguyên tắc thiết kế hệ thống, khái niệm 'Privacy by Design' yêu cầu nhà phát triển điều gì?",
    options: [
      "A. Tích hợp các biện pháp bảo vệ quyền riêng tư ngay từ giai đoạn đầu tiên của quá trình thiết kế hệ thống.",
      "B. Thiết kế giao diện ứng dụng sao cho người dùng không thể nhìn thấy các thông tin cá nhân của người khác.",
      "C. Chỉ tiến hành xem xét các giải pháp bảo mật dữ liệu sau khi sản phẩm đã được đưa vào vận hành thực tế.",
      "D. Chuyển giao toàn bộ trách nhiệm bảo vệ dữ liệu cá nhân cho người dùng tự quản lý trên thiết bị của họ."
    ],
    correct_option: "A",
    explanation: "'Privacy by Design' (Riêng tư ngay từ khâu thiết kế) yêu cầu bảo vệ dữ liệu cá nhân phải được tích hợp sẵn vào công nghệ và quy trình hệ thống ngay từ đầu, thay vì thêm vào như một tính năng phụ sau này."
  },
  {
    id: "Q_MOD_D_088", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong đạo đức dữ liệu, việc 'Data Poisoning' (Đầu độc dữ liệu) gây ra hậu quả nguy hại nào cho hệ thống AI?",
    options: [
      "A. Làm cho mô hình AI học sai quy luật, đưa ra dự đoán sai lệch hoặc tạo ra các cửa sau bảo mật cho kẻ tấn công.",
      "B. Làm hỏng phần cứng của máy chủ chạy thuật toán do các dòng lệnh độc hại gây ra quá nhiệt hệ thống.",
      "C. Làm tăng dung lượng lưu trữ của cơ sở dữ liệu lên gấp nhiều lần khiến hệ thống bị cạn kiệt bộ nhớ.",
      "D. Làm suy giảm tốc độ kết nối internet và băng thông truyền tải dữ liệu giữa các máy trạm trong mạng."
    ],
    correct_option: "A",
    explanation: "Đầu độc dữ liệu (Data Poisoning) là việc kẻ tấn công cố tình đưa dữ liệu sai lệch hoặc độc hại vào tập huấn luyện nhằm thao túng hành vi của mô hình AI theo ý muốn."
  },
  {
    id: "Q_MOD_D_089", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Giấy phép Creative Commons 'CC BY-SA' quy định điều kiện gì đối với các tác phẩm phái sinh?",
    options: [
      "A. Bắt buộc phải được chia sẻ dưới cùng một giấy phép gốc hoặc giấy phép tương thích (Share-Alike).",
      "B. Nghiêm cấm hoàn toàn việc chỉnh sửa, sao chép hoặc phân phối tác phẩm cho các mục đích thương mại.",
      "C. Bắt buộc người sử dụng phải đóng mã nguồn của ứng dụng phần mềm có tích hợp tác phẩm nghệ thuật này.",
      "D. Chỉ được phép phân phối tác phẩm phái sinh trong phạm vi nội bộ của tổ chức mà không được công khai."
    ],
    correct_option: "A",
    explanation: "SA = Share-Alike (Chia sẻ tương tự). Yêu cầu sản phẩm phái sinh phải áp dụng cùng giấy phép hoặc giấy phép tương thích với tác phẩm gốc."
  },
  {
    id: "Q_MOD_D_090", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Phủ định của mệnh đề logic 'Có ít nhất một thuật toán AI không bị bias' là mệnh đề logic nào?",
    options: [
      "A. Mọi thuật toán AI đều bị bias.",
      "B. Có ít nhất một thuật toán AI bị bias.",
      "C. Mọi thuật toán AI đều không bị bias.",
      "D. Tất cả các thuật toán AI đều hoạt động tốt."
    ],
    correct_option: "A",
    explanation: "Phủ định của mệnh đề tồn tại $\\exists x, \\neg P(x)$ là mệnh đề toàn thể $\\forall x, P(x)$ (Tất cả phần tử đều thỏa mãn P)."
  },
  {
    id: "Q_MOD_D_091", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Chứng minh mệnh đề logic bằng phương pháp phản chứng (Proof by Contradiction) được thực hiện dựa trên nguyên lý toán học nào?",
    options: [
      "A. Giả thuyết mệnh đề cần chứng minh là sai, sau đó suy luận logic để dẫn tới một mâu thuẫn hiển nhiên.",
      "B. Giả thuyết mệnh đề cần chứng minh là đúng, từ đó chứng tỏ mọi tiền đề liên quan đều nhận giá trị đúng.",
      "C. Thực hiện kiểm tra tính đúng đắn của mệnh đề trên toàn bộ các phần tử hữu hạn của tập hợp xác định.",
      "D. Xây dựng một bảng chân trị đầy đủ cho tất cả các mệnh đề thành phần và kiểm tra cột kết quả cuối cùng."
    ],
    correct_option: "A",
    explanation: "Phương pháp phản chứng bắt đầu bằng cách giả sử mệnh đề cần chứng minh là sai (tức là $\\neg P$ đúng). Từ đó, thông qua các bước suy luận logic đúng đắn, ta chỉ ra một mâu thuẫn (như $A \\land \\neg A$). Do đó giả thiết $\\neg P$ sai, suy ra P phải đúng."
  },
  {
    id: "Q_MOD_D_092", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Trong đạo đức dữ liệu y tế, nguy cơ 'Re-identification' (Tái định danh) xảy ra khi kẻ tấn công thực hiện hành vi nào sau đây?",
    options: [
      "A. Kết hợp tập dữ liệu đã ẩn danh với các nguồn dữ liệu công khai khác để khôi phục danh tính thực của cá nhân.",
      "B. Sử dụng các thuật toán giải mã khóa công khai RSA để bẻ khóa các tập tin dữ liệu bệnh án đã được mã hóa.",
      "C. Xâm nhập vật lý trực tiếp vào phòng máy chủ lưu trữ của bệnh viện để sao chép các hồ sơ thông tin gốc.",
      "D. Gửi các email lừa đảo (phishing) trực tiếp đến các bác sĩ điều trị để yêu cầu họ cung cấp mật khẩu tài khoản."
    ],
    correct_option: "A",
    explanation: "Tái định danh (Re-identification) là quá trình liên kết dữ liệu ẩn danh (đã bị loại bỏ các PII trực tiếp) với các nguồn dữ liệu phụ trợ bên ngoài (như danh sách cử tri, mạng xã hội) để tìm ra danh tính thực của chủ thể dữ liệu."
  },
  {
    id: "Q_MOD_D_093", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Giấy phép nguồn mở 'GNU AGPL v3' giải quyết triệt để 'lỗ hổng dịch vụ ứng dụng' (SaaS loophole) của giấy phép 'GPL v3' bằng cách nào?",
    options: [
      "A. Quy định việc cung cấp phần mềm qua mạng như dịch vụ đám mây cũng bắt buộc phải công khai mã nguồn sửa đổi.",
      "B. Yêu cầu các nhà cung cấp dịch vụ SaaS phải trả phí bản quyền dựa trên số lượng người dùng truy cập hàng tháng.",
      "C. Nghiêm cấm hoàn toàn việc triển khai và chạy phần mềm sửa đổi trên mọi hệ thống hạ tầng điện toán đám mây.",
      "D. Cho phép các doanh nghiệp đóng gói mã nguồn phái sinh thành sản phẩm thương mại đóng mà không cần mở nguồn."
    ],
    correct_option: "A",
    explanation: "AGPL v3 (Affero GPL) quy định rằng nếu phần mềm được sửa đổi và cho phép người dùng tương tác qua mạng (như SaaS), nhà phát triển phải công khai mã nguồn sửa đổi cho người dùng mạng đó, điều mà GPL v3 không bắt buộc vì không coi đó là phân phối phần mềm truyền thống."
  },
  {
    id: "Q_MOD_D_094", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho phát biểu logic sau: 'Mọi mô hình AI đạt độ chính xác cao trên tập train thì đều bị overfitting hoặc có dữ liệu chất lượng cao. Mô hình AI Alpha không bị overfitting và không có dữ liệu chất lượng cao'. Kết luận logic nào là đúng?",
    options: [
      "A. Mô hình Alpha chắc chắn không đạt độ chính xác cao trên tập dữ liệu train.",
      "B. Mô hình Alpha chắc chắn đạt độ chính xác cao trên tập dữ liệu train.",
      "C. Chưa thể kết luận về độ chính xác trên tập train của mô hình Alpha.",
      "D. Phát biểu logic ban đầu là mệnh đề sai do chứa mâu thuẫn về điều kiện."
    ],
    correct_option: "A",
    explanation: "Mệnh đề: $Acc \\rightarrow (Over \\lor Qual)$. Từ luật Modus Tollens, nếu phủ định hệ quả $\\neg(Over \\lor Qual) \\equiv \\neg Over \\land \\neg Qual$ xảy ra (Alpha không overfitting và không có dữ liệu chất lượng cao), ta suy ra phủ định giả thiết $\\neg Acc$ phải xảy ra (Alpha không đạt độ chính xác cao trên tập train)."
  },
  {
    id: "Q_MOD_D_095", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Thuật toán 'Local Differential Privacy' (LDP) khác biệt cốt lõi như thế nào so với 'Centralized Differential Privacy' (CDP)?",
    options: [
      "A. LDP thêm nhiễu trực tiếp trên thiết bị người dùng trước khi gửi đi, còn CDP thêm nhiễu trên máy chủ tập trung.",
      "B. CDP thêm nhiễu trực tiếp trên thiết bị người dùng trước khi gửi đi, còn LDP thêm nhiễu trên máy chủ tập trung.",
      "C. LDP chỉ sử dụng thuật toán mã hóa đối xứng, còn CDP sử dụng thuật toán mã hóa bất đối xứng khóa công khai.",
      "D. CDP yêu cầu loại bỏ hoàn toàn dữ liệu người dùng, còn LDP cho phép lưu trữ dữ liệu thô vô thời hạn trên máy chủ."
    ],
    correct_option: "A",
    explanation: "Local Differential Privacy (LDP) thêm nhiễu trực tiếp tại nguồn (thiết bị của người dùng) trước khi gửi về máy chủ, do đó người thu thập dữ liệu cũng không biết dữ liệu thật của cá nhân. Centralized DP (CDP) giả định người thu thập dữ liệu là đáng tin cậy, dữ liệu thô được gửi về máy chủ và nhiễu được thêm vào khi truy vấn hoặc công bố kết quả."
  },
  {
    id: "Q_MOD_D_096", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Tại sao phương pháp giảm định kiến 'In-processing bias mitigation' lại khó triển khai hơn phương pháp 'Pre-processing' trong thực tế phát triển AI?",
    options: [
      "A. Nó yêu cầu sửa đổi trực tiếp hàm mất mát hoặc kiến trúc của mô hình, đòi hỏi quyền can thiệp vào quá trình huấn luyện.",
      "B. Nó yêu cầu phải thu thập thêm một lượng lớn dữ liệu mới từ các nhóm đối tượng nhạy cảm trong xã hội.",
      "C. Nó làm tăng kích thước dung lượng lưu trữ của tập tin trọng số mô hình lên gấp nhiều lần sau khi huấn luyện.",
      "D. Nó nghiêm cấm việc sử dụng các thư viện học máy thông dụng và buộc nhà phát triển phải tự viết lại mã nguồn."
    ],
    correct_option: "A",
    explanation: "In-processing bias mitigation can thiệp trực tiếp vào thuật toán học (ví dụ: thêm ràng buộc công bằng vào hàm tối ưu/loss function), do đó phức tạp và đòi hỏi quyền can thiệp sâu vào code huấn luyện, trong khi Pre-processing chỉ cần biến đổi dữ liệu đầu vào."
  },
  {
    id: "Q_MOD_D_097", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Một lập trình viên tích hợp một thư viện có giấy phép 'GNU GPL v3' vào sản phẩm thương mại của mình bằng phương thức liên kết động (Dynamic Linking). Hành vi này có thể dẫn tới hậu quả pháp lý nào đối với sản phẩm thương mại đó?",
    options: [
      "A. Sản phẩm thương mại đó vẫn có thể bị coi là sản phẩm phái sinh và bị buộc phải mở mã nguồn dưới GPL v3 theo luật.",
      "B. Lập trình viên chắc chắn bị phạt tiền rất nặng do vi phạm nghiêm trọng quy định sử dụng thương mại của GPL v3.",
      "C. Sản phẩm thương mại đó chắc chắn được bảo hộ mã nguồn đóng hoàn toàn và không chịu bất kỳ ràng buộc nào từ GPL v3.",
      "D. Thư viện GPL v3 sẽ tự động kích hoạt mã độc để xóa bỏ toàn bộ dữ liệu trên hệ thống máy chủ thương mại."
    ],
    correct_option: "A",
    explanation: "Tổ chức FSF (Free Software Foundation) giữ quan điểm rằng việc liên kết (dù là động hay tĩnh) một thư viện GPL vào phần mềm đều tạo ra một sản phẩm phái sinh, do đó toàn bộ chương trình phải mở mã nguồn dưới GPL v3. Điều này gây ra rủi ro pháp lý lớn cho các phần mềm thương mại đóng."
  },
  {
    id: "Q_MOD_D_098", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Trong logic mệnh đề, một tập hợp các mệnh đề $\{P_1, P_2, ..., P_n\}$ được gọi là 'Satisfiable' (Khả thỏa) khi nào?",
    options: [
      "A. Có ít nhất một cách gán giá trị chân lý cho các biến mệnh đề sao cho tất cả các mệnh đề trong tập hợp đều Đúng.",
      "B. Với mọi cách gán giá trị chân lý cho các biến mệnh đề, tất cả các mệnh đề trong tập hợp đều nhận giá trị Đúng.",
      "C. Có ít nhất một cách gán giá trị chân lý cho các biến mệnh đề sao cho tất cả các mệnh đề trong tập hợp đều Sai.",
      "D. Với mọi cách gán giá trị chân lý cho các biến mệnh đề, tất cả các mệnh đề trong tập hợp đều nhận giá trị Sai."
    ],
    correct_option: "A",
    explanation: "Khả thỏa (Satisfiable) nghĩa là tồn tại ít nhất một cách gán giá trị chân lý cho các biến logic làm cho tất cả các mệnh đề trong hệ đồng thời nhận giá trị True. Nếu không tồn tại cách gán nào như vậy, tập hợp mệnh đề được gọi là bất khả thỏa (unsatisfiable/contradiction)."
  },
  {
    id: "Q_MOD_D_099", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Trong đạo đức AI, nguyên tắc 'Accountability' (Trách nhiệm giải trình) đối mặt với thách thức lớn nào từ hiện tượng 'Black Box' (Hộp đen AI)?",
    options: [
      "A. Do tính chất phức tạp của mô hình nơ-ron, rất khó giải thích rõ ràng cơ chế ra quyết định để quy trách nhiệm khi xảy ra lỗi.",
      "B. Do các máy chủ vận hành mô hình hoạt động hoàn toàn tự động và không chịu sự kiểm soát vật lý của con người.",
      "C. Do các quy định pháp lý hiện hành chưa công nhận quyền sở hữu trí tuệ đối với các mô hình mạng nơ-ron sâu.",
      "D. Do chi phí vận hành và nâng cấp các giải pháp an ninh mạng cho mô hình AI vượt quá ngân sách của doanh nghiệp."
    ],
    correct_option: "A",
    explanation: "Hiện tượng 'hộp đen' của học sâu (deep learning) làm cho việc truy vết và giải thích tại sao AI đưa ra một quyết định cụ thể trở nên cực kỳ khó khăn. Khi AI đưa ra dự đoán sai gây thiệt hại (ví dụ: tai nạn xe tự lái, chẩn đoán bệnh sai), việc quy trách nhiệm giải trình (accountability) cho các bên liên quan gặp trở ngại lớn."
  },
  {
    id: "Q_MOD_D_100", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Nếu bạn muốn đóng góp mã nguồn cho một dự án nguồn mở lớn nhưng không muốn bị kiện tụng về bản quyền sáng chế sau này, thỏa thuận pháp lý nào sau đây bảo vệ bạn tốt nhất?",
    options: [
      "A. Đóng góp dưới điều khoản của giấy phép có cấp quyền sáng chế rõ ràng như Apache License 2.0 hoặc ký thỏa thuận CLA.",
      "B. Đóng góp mã nguồn dưới dạng ẩn danh hoàn toàn để tránh việc bị truy vết danh tính cá nhân trên môi trường mạng.",
      "C. Đóng góp mã nguồn dưới giấy phép MIT License thông thường mà không cần ký thêm bất kỳ tài liệu pháp lý nào khác.",
      "D. Yêu cầu dự án nguồn mở đó ký hợp đồng cam kết chia sẻ một phần doanh thu thương mại phát sinh từ việc sử dụng code."
    ],
    correct_option: "A",
    explanation: "Giấy phép Apache 2.0 có chứa điều khoản cấp quyền sáng chế rõ ràng (patent grant) và điều khoản chấm dứt quyền này nếu bất kỳ bên nào kiện tụng về sáng chế. Đồng thời, CLA (Contributor License Agreement) là thỏa thuận đóng góp giúp làm rõ quyền sở hữu trí tuệ và bảo vệ cả người đóng góp lẫn dự án khỏi các tranh chấp pháp lý."
  }
];
