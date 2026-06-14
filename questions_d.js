const QUESTIONS_D = [
  {
    id: "Q_MOD_D_001", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Có 3 mô hình AI: X, Y, và Z. Biết rằng: Mô hình X xử lý nhanh hơn mô hình Y. Mô hình Z xử lý chậm hơn mô hình Y. Phát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Mô hình Z xử lý nhanh nhất.",
      "B. Mô hình X xử lý nhanh hơn mô hình Z.",
      "C. Mô hình Y xử lý nhanh nhất.",
      "D. Mô hình X và mô hình Z có tốc độ bằng nhau."
    ],
    correct_option: "B",
    explanation: "Từ dữ kiện bài toán, ta có thứ tự tốc độ xử lý từ nhanh đến chậm là: $X > Y > Z$. Do đó, mô hình X chắc chắn xử lý nhanh hơn mô hình Z."
  },
  {
    id: "Q_MOD_D_002", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Bạn được giao nhiệm vụ thu thập hình ảnh khuôn mặt của sinh viên trong trường để xây dựng hệ thống điểm danh tự động. Hành vi nào sau đây tuân thủ đúng nguyên tắc **Đạo đức dữ liệu (Data Ethics)**?",
    options: [
      "A. Bí mật đặt camera ẩn tại cửa lớp để thu thập dữ liệu tự nhiên nhất mà không cần báo trước.",
      "B. Tự ý tải toàn bộ ảnh cá nhân công khai của sinh viên trên mạng xã hội về làm dữ liệu huấn luyện.",
      "C. Thông báo rõ ràng mục đích, cách thức bảo mật thông tin và gửi biểu mẫu cam kết đồng thuận (Consent form) cho sinh viên ký trước khi chụp ảnh thu thập dữ liệu.",
      "D. Chia sẻ công khai tập dữ liệu khuôn mặt này lên mạng để các khóa sau cùng sử dụng làm bài tập lớn."
    ],
    correct_option: "C",
    explanation: "Quyền riêng tư và sự đồng thuận minh bạch (Informed Consent) từ chủ thể dữ liệu là nguyên tắc cốt lõi mang tính pháp lý trong đạo đức dữ liệu AI."
  },
  {
    id: "Q_MOD_D_003", module_id: "Module_D", difficulty: "Hard",
    tags: ["ai-bias"],
    content: "Một công ty công nghệ dùng dữ liệu hồ sơ tuyển dụng của 10 năm qua để huấn luyện AI lọc CV kỹ sư phần mềm. Do lịch sử ngành này trong quá khứ có tỷ lệ nam giới nộp đơn vượt trội, AI sau khi huấn luyện có xu hướng tự động đánh rớt các CV có chứa từ khóa liên quan đến \"nữ\" (Ví dụ: \"Hội cựu nữ sinh viên\"). Hiện tượng này được gọi là gì?",
    options: [
      "A. Lỗi quá khớp (Overfitting)",
      "B. Định kiến hệ thống trong dữ liệu (Data Bias / Algorithmic Bias)",
      "C. Lỗi ảo tưởng dữ liệu (Hallucination)",
      "D. Tối ưu hóa toàn cục"
    ],
    correct_option: "B",
    explanation: "AI học từ dữ liệu lịch sử. Nếu dữ liệu phản ánh sự mất cân bằng hoặc định kiến sẵn có của con người, AI sẽ lặp lại và khuếch đại định kiến đó. Đây gọi là hiện tượng Định kiến (Bias)."
  },
  {
    id: "Q_MOD_D_004", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Một nhóm nghiên cứu AI tuyên bố: *\"Tất cả các mô hình deep learning có trên 1 tỷ tham số đều cần GPU để chạy. Mô hình AI mang tên 'Alpha' không cần GPU để chạy.\"* Dựa vào tuyên bố trên, kết luận nào sau đây là chính xác nhất?",
    options: [
      "A. Mô hình Alpha có trên 1 tỷ tham số.",
      "B. Mô hình Alpha không phải là deep learning.",
      "C. Mô hình Alpha có dưới hoặc bằng 1 tỷ tham số.",
      "D. Tuyên bố của nhóm nghiên cứu bị sai."
    ],
    correct_option: "C",
    explanation: "Theo quy tắc phủ định của mệnh đề kéo theo ($P \\rightarrow Q$ thì $\\neg Q \\rightarrow \\neg P$). Vì Alpha không cần GPU ($\\neg Q$), nên Alpha không thể là \"mô hình deep learning có trên 1 tỷ tham số\". Do đó, nó phải có dưới hoặc bằng 1 tỷ tham số."
  },
  {
    id: "Q_MOD_D_005", module_id: "Module_D", difficulty: "Hard",
    tags: ["data-privacy"],
    content: "Bạn đang làm việc với một tập dữ liệu lớn chứa thông tin hành vi mua sắm của khách hàng để huấn luyện AI. Bạn phát hiện ra trong file dữ liệu có chứa cả số CCCD, số điện thoại và địa chỉ nhà riêng của khách hàng dưới dạng văn bản thô (Plain text). Hành động nào sau đây thể hiện tư duy đúng đắn về an toàn dữ liệu?",
    options: [
      "A. Cứ để nguyên dữ liệu như vậy và huấn luyện mô hình vì dữ liệu càng chi tiết AI càng thông minh.",
      "B. Tiến hành loại bỏ hoặc mã hóa băm (Anonymization/Hashing) các trường thông tin định danh cá nhân (PII) này trước khi đưa vào huấn luyện hoặc chia sẻ với đội nhóm.",
      "C. Đăng tải tập dữ liệu này lên các hội nhóm lập trình công khai để nhờ họ tối ưu hộ code xử lý dữ liệu.",
      "D. Xóa toàn bộ tập dữ liệu và báo cáo là không thể làm được dự án."
    ],
    correct_option: "B",
    explanation: "CCCD, số điện thoại, địa chỉ là các thông tin định danh cá nhân nhạy cảm (PII). Việc ẩn danh hóa hoặc băm mã hóa bảo mật là bắt buộc để bảo vệ quyền riêng tư trước khi đưa vào các phân hệ huấn luyện."
  },
  {
    id: "Q_MOD_D_006", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic dựa trên các dữ kiện sau:\n\n* Mọi sinh viên học ngành Công nghệ thông tin (CNTT) đều phải học môn Lập trình.\n* Một số thành viên của Câu lạc bộ AI không phải là sinh viên ngành CNTT.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. Mọi thành viên của Câu lạc bộ AI đều không biết lập trình.",
      "B. Một số thành viên của Câu lạc bộ AI biết lập trình.",
      "C. Có những người học môn Lập trình nhưng không thuộc ngành CNTT.",
      "D. Không có đủ cơ sở để khẳng định các phát biểu A, B, C chắc chắn đúng."
    ],
    correct_option: "D",
    explanation: "Mệnh đề 1: CNTT $\\rightarrow$ Lập trình (không có nghĩa Lập trình $\\rightarrow$ CNTT). Mệnh đề 2: Một số thành viên CLB AI không thuộc CNTT, những người này có thể tự học lập trình hoặc không học (đề bài không nhắc tới). Vì vậy các phát biểu A, B, C đều là suy đoán vô căn cứ."
  },
  {
    id: "Q_MOD_D_007", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic từ các phát biểu sau:\n\n* Không có kỹ sư AI nào lười biếng.\n* Một số người thích chơi game là kỹ sư AI.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. Tất cả những người thích chơi game đều không lười biếng.",
      "B. Một số người thích chơi game không lười biếng.",
      "C. Mọi người lười biếng đều thích chơi game.",
      "D. Kỹ sư AI không thích chơi game."
    ],
    correct_option: "B",
    explanation: "Dữ kiện 2 cho biết một nhóm giao nhau: Một số người chơi game là kỹ sư AI. Dữ kiện 1 khẳng định toàn bộ kỹ sư AI đều chăm chỉ (không lười biếng). Do đó, những người vừa thích chơi game vừa là kỹ sư AI chắc chắn là những người không lười biếng."
  },
  {
    id: "Q_MOD_D_008", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Một lập trình viên sử dụng mã nguồn mở của một tác giả khác được chia sẻ trên GitHub với giấy phép **MIT License** để xây dựng ứng dụng AI thương mại kiếm tiền cho mình. Hành vi này có vi phạm đạo đức hoặc bản quyền không?",
    options: [
      "A. Có vi phạm, vì dùng code của người khác để kiếm tiền là trái phép.",
      "B. Không vi phạm, vì giấy phép MIT cho phép sao chép, sửa đổi và thương mại hóa hoàn toàn miễn phí, miễn là đính kèm tuyên bố bản quyền gốc của tác giả.",
      "C. Có vi phạm, trừ khi lập trình viên này phải chia cho tác giả gốc $50\\%$ doanh thu.",
      "D. Chỉ vi phạm nếu hệ thống AI đó chạy bị lỗi."
    ],
    correct_option: "B",
    explanation: "Giấy phép MIT là giấy phép mã nguồn mở tự do. Nó cho phép thương mại hóa hoàn toàn miễn phí, yêu cầu duy nhất là phải giữ nguyên thông báo bản quyền và quyền miễn trừ trách nhiệm của tác giả gốc trong source code."
  },
  {
    id: "Q_MOD_D_009", module_id: "Module_D", difficulty: "Hard",
    tags: ["data-ethics"],
    content: "Trong việc phát triển AI y tế giúp bác sĩ chẩn đoán ung thư qua ảnh chụp X-quang, hành vi nào sau đây được coi là **thiếu trách nhiệm đạo đức nghề nghiệp**?",
    options: [
      "A. Thử nghiệm và kiểm định mô hình cực kỳ khắt khe trên nhiều bệnh viện khác nhau trước khi đưa vào sử dụng.",
      "B. Giấu kín các ca mà AI chẩn đoán sai để làm đẹp báo cáo và tăng doanh số bán phần mềm.",
      "C. Luôn thiết kế hệ thống hiển thị rõ \"Mức độ tin cậy\" (Confidence) để bác sĩ làm căn cứ tham khảo cuối cùng.",
      "D. Bảo mật tuyệt đối danh tính và hồ sơ của các bệnh nhân cung cấp ảnh X-quang."
    ],
    correct_option: "B",
    explanation: "Việc cố tình che giấu sai sót của mô hình AI trong y tế là hành vi vi phạm nghiêm trọng đạo đức, vì nó có thể trực tiếp làm sai lệch kết quả điều trị và gây nguy hiểm đến tính mạng của người bệnh."
  },
  {
    id: "Q_MOD_D_010", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Đọc tình huống sau: Ba sinh viên An, Bình, và Cường cùng tham gia một cuộc thi Hackathon về AI.\n\n* Nếu An đoạt giải thì Bình cũng đoạt giải.\n* Thừa nhận rằng An đã đoạt giải.\nKết luận nào sau đây chắc chắn đúng về mặt logic?",
    options: [
      "A. Chỉ có An đoạt giải.",
      "B. Bình chắc chắn đoạt giải.",
      "C. Cường chắc chắn đoạt giải.",
      "D. Cả ba bạn đều không đoạt giải."
    ],
    correct_option: "B",
    explanation: "Mệnh đề logic có dạng: $A \\rightarrow B$ (Nếu An được giải thì Bình được giải). Đề bài khẳng định vế $A$ xảy ra (An đã đoạt giải), theo quy tắc Modus Ponens, vế $B$ chắc chắn phải xảy ra $\\rightarrow$ Bình chắc chắn đoạt giải."
  },
  {
    id: "Q_MOD_D_011", module_id: "Module_D", difficulty: "Hard",
    tags: ["ai-bias"],
    content: "Một ứng dụng AI tuyển dụng nhân sự tự động liên tục loại bỏ hồ sơ của các ứng viên đến từ một vùng miền cụ thể mà không dựa trên năng lực. Nguyên nhân gốc rễ của hành vi phân biệt đối xử này của AI thường bắt nguồn từ đâu?",
    options: [
      "A. Do AI tự phát triển ý thức và ghét vùng miền đó.",
      "B. Do dữ liệu dùng để huấn luyện AI trong quá khứ chứa định kiến của con người (người lọc hồ sơ cũ có xu hướng loại bỏ hồ sơ vùng miền đó), và AI đã học lại định kiến này.",
      "C. Do thuật toán sử dụng quá nhiều ma trận.",
      "D. Do máy tính chạy hệ thống bị quá nhiệt."
    ],
    correct_option: "B",
    explanation: "Mô hình AI không tự sinh ra định kiến vùng miền. Hiện tượng phân biệt đối xử này xảy ra là do dữ liệu lịch sử đầu vào được thu thập từ con người đã có sẵn định kiến đó và AI ghi nhận lại quy luật này."
  },
  {
    id: "Q_MOD_D_012", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic dựa trên các dữ kiện sau:\n\n* Mọi mô hình ngôn ngữ lớn (LLM) đều tiêu tốn rất nhiều tài nguyên phần cứng.\n* Hệ thống AI mang tên \"EcoChat\" không tiêu tốn nhiều tài nguyên phần cứng.\nPhát biểu nào sau đây **chắc chắn đúng**?",
    options: [
      "A. EcoChat là một mô hình ngôn ngữ lớn chạy tối ưu.",
      "B. EcoChat không phải là một mô hình ngôn ngữ lớn.",
      "C. EcoChat sử dụng thuật toán nhân ma trận thông minh.",
      "D. EcoChat là phần mềm độc hại."
    ],
    correct_option: "B",
    explanation: "Mệnh đề: $LLM \\rightarrow Tốn\\_tài\\_nguyên$. Do EcoChat không tốn tài nguyên, theo logic phản chứng ($\\neg Q \\rightarrow \\neg P$), EcoChat chắc chắn không phải là mô hình LLM."
  },
  {
    id: "Q_MOD_D_013", module_id: "Module_D", difficulty: "Hard",
    tags: ["data-privacy"],
    content: "Việc một kỹ sư AI âm thầm cài đặt một đoạn code ngầm trong ứng dụng để thu thập toàn bộ lịch sử gõ bàn phím (Keylogger) của người dùng nhằm lấy dữ liệu hội thoại thực tế huấn luyện AI mà không được sự cho phép của họ là vi phạm nguyên tắc đạo đức nào nghiêm trọng nhất?",
    options: [
      "A. Tính minh bạch và Quyền riêng tư cá nhân (Privacy).",
      "B. Hiện tượng Quá khớp dữ liệu.",
      "C. Tốc độ tối ưu hóa hệ thống.",
      "D. Giấy phép mã nguồn mở MIT."
    ],
    correct_option: "A",
    explanation: "Thu thập dữ liệu nhạy cảm một cách lén lút vi phạm nghiêm trọng quyền riêng tư và tính minh bạch thông tin cốt lõi đối với người dùng (Informed Consent)."
  },
  {
    id: "Q_MOD_D_014", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Đọc tình huống logic sau: Có 3 lập trình viên là Nam, Hải và Quốc. Biết rằng:\n\n* Người giỏi Python nhất là người lớn tuổi nhất.\n* Hải trẻ tuổi hơn Quốc.\n* Nam lớn tuổi hơn Quốc.\nAi là người giỏi Python nhất?",
    options: [
      "A. Hải",
      "B. Quốc",
      "C. Nam",
      "D. Không thể xác định được từ dữ kiện trên."
    ],
    correct_option: "C",
    explanation: "Sắp xếp thứ tự tuổi từ lớn đến nhỏ dựa vào dữ kiện: Nam > Quốc, Quốc > Hải $\\Rightarrow$ Nam > Quốc > Hải. Vậy Nam là người lớn tuổi nhất, đồng nghĩa Nam là người giỏi Python nhất."
  },
  {
    id: "Q_MOD_D_015", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Thuật ngữ \"Explainable AI\" (XAI - AI có thể giải thích được) hướng tới mục tiêu đạo đức và kỹ thuật nào trong phát triển Trí tuệ nhân tạo?",
    options: [
      "A. Làm cho AI có khả năng tự viết báo cáo văn bản thay con người.",
      "B. Biến các mô hình AI từ dạng \"Hộp đen\" (Black-box) phức tạp thành các hệ thống có quy trình ra quyết định rõ ràng, minh bạch để con người hiểu được tại sao AI đưa ra kết quả đó.",
      "C. Giúp AI tự động giải thích các bài tập toán cho học sinh.",
      "D. Tăng độ chính xác của mô hình lên $100\\%$."
    ],
    correct_option: "B",
    explanation: "XAI giúp minh bạch hóa các quyết định nội bộ của AI, điều này đặc biệt quan trọng và mang tính bắt buộc trong các lĩnh vực nhạy cảm cao như Y tế (Chẩn đoán bệnh) và Tài chính (Duyệt hồ sơ vay vốn)."
  },
  {
    id: "Q_MOD_D_016", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Khi một dự án AI thất bại do mô hình liên tục đưa ra dự đoán sai lệch nghiêm trọng gây thiệt hại về tiền bạc cho khách hàng, trách nhiệm giải trình cuối cùng thuộc về ai?",
    options: [
      "A. Thuật toán AI vì nó tự tính toán sai.",
      "B. Chiếc máy tính/máy chủ chạy thuật toán do bị quá tải.",
      "C. Đội ngũ con người phát triển, kiểm định và vận hành dự án AI đó.",
      "D. Khách hàng vì họ đã tin tưởng vào công nghệ."
    ],
    correct_option: "C",
    explanation: "AI là một công cụ do con người tạo ra, huấn luyện và vận hành. Do đó, con người (kỹ sư, quản lý dự án, công ty công nghệ) phải chịu trách nhiệm hoàn toàn về mặt pháp lý và đạo đức đối với các hệ quả do sản phẩm của mình gây ra."
  },
  {
    id: "Q_MOD_D_017", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Khi đăng ký tài khoản trên một ứng dụng học tập AI mới, hành động nào của nhà cung cấp dịch vụ giúp bảo vệ quyền lợi của người dùng rõ ràng nhất?",
    options: [
      "A. Ẩn điều khoản sử dụng và tự động đồng ý mọi điều khoản.",
      "B. Cung cấp bản Điều khoản dịch vụ và Chính sách bảo mật rõ ràng, giải thích cách thu thập và sử dụng dữ liệu cá nhân của người dùng trước khi họ đăng ký.",
      "C. Bắt buộc người dùng nhập mật khẩu tài khoản mạng xã hội khác.",
      "D. Không công khai bất cứ thông tin nào về cách ứng dụng hoạt động."
    ],
    correct_option: "B",
    explanation: "Sự minh bạch thông tin thông qua Điều khoản dịch vụ và Chính sách bảo mật là yếu tố pháp lý và đạo đức bắt buộc để người dùng đưa ra quyết định đồng thuận."
  },
  {
    id: "Q_MOD_D_018", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Nếu phát biểu: 'Mọi chatbot AI đều bị ảo tưởng thông tin' là đúng, phát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Không có chatbot AI nào bị ảo tưởng thông tin.",
      "B. Nếu ChatGPT là một chatbot AI, ChatGPT bị ảo tưởng thông tin.",
      "C. Chỉ những chatbot AI lớn mới bị ảo tưởng thông tin.",
      "D. Các chatbot AI không bao giờ bị lỗi."
    ],
    correct_option: "B",
    explanation: "Theo tam đoạn luận logic, nếu tất cả các phần tử thuộc tập hợp Chatbot AI đều có tính chất X, thì một phần tử cụ thể (ChatGPT) thuộc tập hợp đó chắc chắn cũng mang tính chất X."
  },
  {
    id: "Q_MOD_D_019", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Thuật ngữ 'PII' trong bảo mật thông tin và đạo đức dữ liệu viết tắt của cụm từ nào?",
    options: [
      "A. Private Image Intelligence",
      "B. Personally Identifiable Information (Thông tin định danh cá nhân)",
      "C. Product Interface Integration",
      "D. Public Internet Infrastructure"
    ],
    correct_option: "B",
    explanation: "PII (Personally Identifiable Information) là bất kỳ thông tin nào có thể dùng để phân biệt hoặc xác định danh tính của một cá nhân, ví dụ: số CCCD, tên, số điện thoại, email."
  },
  {
    id: "Q_MOD_D_020", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Giấy phép mã nguồn mở nào sau đây yêu cầu rằng bất kỳ mã nguồn sửa đổi hoặc phái sinh nào cũng phải được phát hành dưới cùng một giấy phép nguồn mở (tính chất lan truyền/copyleft)?",
    options: [
      "A. MIT License",
      "B. Apache License 2.0",
      "C. GNU General Public License (GPL)",
      "D. BSD License"
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
      "A. Thu thập càng nhiều thông tin càng tốt vì sau này có thể cần dùng đến.",
      "B. Chỉ thu thập những dữ liệu thực sự cần thiết và liên quan trực tiếp đến tính năng hoạt động của ứng dụng.",
      "C. Thu thập dữ liệu của trẻ em mà không cần hỏi ý kiến phụ huynh.",
      "D. Bán dữ liệu thu thập được để bù đắp chi phí phát triển."
    ],
    correct_option: "B",
    explanation: "Tối thiểu hóa dữ liệu (Data Minimization) yêu cầu chỉ thu thập phần dữ liệu tối thiểu cần thiết cho mục đích đã nêu, giúp hạn chế rủi ro lộ lọt thông tin cá nhân."
  },
  {
    id: "Q_MOD_D_023", module_id: "Module_D", difficulty: "Easy",
    tags: ["ai-bias"],
    content: "Một công ty tuyển dụng sử dụng mô hình AI chấm điểm thấp hơn cho các CV có địa chỉ nhà ở các vùng nông thôn. Hiện tượng này thể hiện vấn đề gì?",
    options: [
      "A. Mô hình hoạt động rất chính xác.",
      "B. Định kiến thuật toán (Algorithmic Bias) dựa trên địa lý.",
      "C. Lỗi tràn bộ nhớ RAM.",
      "D. Mô hình đang tự tối ưu hóa thời gian chạy."
    ],
    correct_option: "B",
    explanation: "Đây là định kiến hệ thống (bias) gây ra sự bất bình đẳng dựa trên các thuộc tính nhạy cảm như vùng miền, địa lý."
  },
  {
    id: "Q_MOD_D_024", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Hành động nào sau đây là biện pháp an toàn cơ bản nhất để bảo vệ mật khẩu của người dùng trong cơ sở dữ liệu?",
    options: [
      "A. Lưu mật khẩu dưới dạng văn bản thô để dễ tra cứu khi người dùng quên.",
      "B. Sử dụng thuật toán băm một chiều (Hashing) kết hợp Salt (muối) để mã hóa mật khẩu trước khi lưu.",
      "C. Gửi mật khẩu qua email hàng tuần cho người dùng.",
      "D. Không cần lưu mật khẩu, ai nhập gì cũng cho đăng nhập."
    ],
    correct_option: "B",
    explanation: "Băm mật khẩu (Password Hashing with Salt) đảm bảo rằng ngay cả khi cơ sở dữ liệu bị rò rỉ, kẻ tấn công cũng không thể dễ dàng giải mã ngược lại để lấy mật khẩu thô."
  },
  {
    id: "Q_MOD_D_025", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Phủ định của mệnh đề logic 'Tất cả sinh viên đều học lập trình' là mệnh đề nào?",
    options: [
      "A. Tất cả sinh viên đều không học lập trình.",
      "B. Có ít nhất một sinh viên không học lập trình.",
      "C. Mọi sinh viên đều học toán.",
      "D. Có ít nhất một sinh viên học lập trình."
    ],
    correct_option: "B",
    explanation: "Phủ định của mệnh đề lượng từ toàn thể '$\\forall x, P(x)$' là mệnh đề lượng từ tồn tại '$\\exists x, \\neg P(x)$' (Có ít nhất một phần tử không thỏa mãn)."
  },
  {
    id: "Q_MOD_D_026", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Thuật ngữ 'Deepfake' dùng để chỉ công nghệ AI thực hiện hành vi nào sau đây?",
    options: [
      "A. Tự động sao lưu dữ liệu đám mây.",
      "B. Sử dụng deep learning để tạo ra hình ảnh, âm thanh hoặc video giả mạo trông giống như thật (như hoán đổi khuôn mặt hoặc giọng nói của một người).",
      "C. Quét virus cho máy tính.",
      "D. Dịch thuật tự động giữa các ngôn ngữ."
    ],
    correct_option: "B",
    explanation: "Deepfake kết hợp giữa 'deep learning' và 'fake'. Công nghệ này thường được dùng để tạo video giả mạo người nổi tiếng hoặc lừa đảo tài chính."
  },
  {
    id: "Q_MOD_D_027", module_id: "Module_D", difficulty: "Easy",
    tags: ["open-source-licensing"],
    content: "Nếu bạn sử dụng thư viện AI có giấy phép 'Apache License 2.0', bạn được quyền làm gì?",
    options: [
      "A. Chỉ được dùng cho mục đích cá nhân, tuyệt đối không được thương mại hóa.",
      "B. Được tự do sử dụng, sửa đổi và phân phối lại cho cả mục đích phi thương mại lẫn thương mại, miễn là đính kèm giấy phép gốc và ghi rõ các thay đổi.",
      "C. Phải trả phí bản quyền hàng năm cho tác giả gốc.",
      "D. Phải công khai toàn bộ mã nguồn của phần mềm do bạn viết ra."
    ],
    correct_option: "B",
    explanation: "Apache 2.0 là giấy phép nguồn mở rất thông thoáng và thân thiện với doanh nghiệp, cho phép thương mại hóa và không có tính chất 'lan truyền' bắt buộc mở mã nguồn như GPL."
  },
  {
    id: "Q_MOD_D_028", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho phát biểu: 'Nếu trời mưa thì đường ướt'. Biết rằng thực tế đường đang khô (không ướt). Kết luận logic nào sau đây là đúng?",
    options: [
      "A. Trời đang mưa.",
      "B. Trời không mưa.",
      "C. Trời sắp mưa.",
      "D. Không thể kết luận được gì."
    ],
    correct_option: "B",
    explanation: "Theo luật Modus Tollens ($P \\rightarrow Q$ và $\\neg Q \\Rightarrow \\neg P$), vì đường không ướt ($\\neg Q$), ta suy ra trời không mưa ($\\neg P$)."
  },
  {
    id: "Q_MOD_D_029", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-privacy"],
    content: "Hành vi nào sau đây được coi là vi phạm luật an toàn dữ liệu cá nhân khi chia sẻ tập dữ liệu huấn luyện AI công khai?",
    options: [
      "A. Chỉ chia sẻ các chỉ số thống kê tổng hợp.",
      "B. Chia sẻ dữ liệu đã được ẩn danh hóa và băm kỹ các trường PII.",
      "C. Chia sẻ dữ liệu chứa tên, số điện thoại và địa chỉ thực tế của khách hàng mà chưa được sự đồng ý của họ.",
      "D. Chia sẻ mã nguồn huấn luyện mô hình."
    ],
    correct_option: "C",
    explanation: "Chia sẻ PII thô khi chưa có sự đồng ý rõ ràng của chủ thể dữ liệu là hành vi vi phạm pháp luật nghiêm trọng (ví dụ luật GDPR hoặc Luật An toàn thông tin mạng của Việt Nam)."
  },
  {
    id: "Q_MOD_D_030", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Trong các dự án AI, hành vi 'Data Scraping' (cào dữ liệu tự động) từ website khác mà không tuân theo file cấu hình `robots.txt` hoặc điều khoản dịch vụ của trang web đó thể hiện điều gì?",
    options: [
      "A. Sự thông minh và sáng tạo của kỹ sư AI.",
      "B. Thiếu tôn trọng quyền kiểm soát dữ liệu và quy định sở hữu trí tuệ của bên thứ ba.",
      "C. Giúp website đó tải nhanh hơn.",
      "D. Luôn được pháp luật khuyến khích."
    ],
    correct_option: "B",
    explanation: "File `robots.txt` quy định các vùng dữ liệu mà chủ sở hữu website cho phép hoặc cấm bot cào thông tin. Bỏ qua file này là hành vi thiếu đạo đức dữ liệu và có thể đối mặt với rủi ro pháp lý."
  },
  {
    id: "Q_MOD_D_031", module_id: "Module_D", difficulty: "Easy",
    tags: ["pure-logic"],
    content: "Cho hai mệnh đề: 'Hải thích học AI' và 'Hải giỏi toán'. Mệnh đề phủ định của mệnh đề hội (Hải thích học AI và Hải giỏi toán) là mệnh đề nào?",
    options: [
      "A. Hải không thích học AI và Hải không giỏi toán.",
      "B. Hải không thích học AI hoặc Hải không giỏi toán (Luật De Morgan).",
      "C. Hải thích học AI nhưng không giỏi toán.",
      "D. Hải giỏi toán nhưng không thích học AI."
    ],
    correct_option: "B",
    explanation: "Theo luật De Morgan: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$ (Phủ định của hội là tuyển các phủ định)."
  },
  {
    id: "Q_MOD_D_032", module_id: "Module_D", difficulty: "Easy",
    tags: ["data-ethics"],
    content: "Tại sao việc công bố các lỗ hổng bảo mật của mô hình AI (như khả năng bị tấn công adversarial) cho nhà phát triển trước khi công khai rộng rãi ra công chúng lại được coi là đạo đức nghề nghiệp?",
    options: [
      "A. Để nhà phát triển có thời gian vá lỗi và tăng cường bảo mật hệ thống, tránh bị kẻ xấu lợi dụng tấn công gây thiệt hại thực tế.",
      "B. Để đòi tiền chuộc từ nhà phát triển.",
      "C. Để chứng minh mình giỏi hơn nhà phát triển.",
      "D. Hành động này không mang lại lợi ích gì."
    ],
    correct_option: "A",
    explanation: "Đây gọi là nguyên tắc 'Responsible Disclosure' (Công bố có trách nhiệm) trong an ninh mạng và đạo đức công nghệ."
  },
  {
    id: "Q_MOD_D_033", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Xét suy luận sau:\n\n* Mọi loài chim đều bay được.\n* Con đà điểu là một loài chim.\n* Vì vậy, con đà điểu bay được.\nSuy luận này bị lỗi gì?",
    options: [
      "A. Lỗi suy luận logic sai hình thức.",
      "B. Lỗi lập luận dựa trên tiền đề sai thực tế ('Mọi loài chim đều bay được' là sai, vì đà điểu, chim cánh cụt không bay được).",
      "C. Suy luận hoàn toàn đúng đắn về mọi mặt.",
      "D. Lỗi do không định nghĩa đà điểu là gì."
    ],
    correct_option: "B",
    explanation: "Về mặt hình thức (form), suy luận tuân theo đúng luật tam đoạn luận ($A \\rightarrow B, C \\rightarrow A \\Rightarrow C \\rightarrow B$). Tuy nhiên, suy luận không có tính chân thực (soundness) vì tiền đề ban đầu 'Mọi loài chim bay được' là một khẳng định sai thực tế."
  },
  {
    id: "Q_MOD_D_034", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Kỹ thuật 'Differential Privacy' (Bảo mật vi sai) bảo vệ quyền riêng tư của cá nhân trong tập dữ liệu bằng cách nào?",
    options: [
      "A. Xóa bỏ hoàn toàn tất cả các hàng dữ liệu.",
      "B. Thêm một lượng nhiễu toán học được kiểm soát vào dữ liệu hoặc kết quả truy vấn sao cho không ai có thể xác định chắc chắn sự hiện diện của một cá nhân cụ thể trong tập dữ liệu.",
      "C. Mã hóa dữ liệu bằng khóa đối xứng AES-256.",
      "D. Chỉ cho phép các quản trị viên cấp cao đọc dữ liệu."
    ],
    correct_option: "B",
    explanation: "Differential Privacy cung cấp một hàng rào toán học chống lại việc rò rỉ thông tin cá nhân bằng cách thêm nhiễu ngẫu nhiên được tính toán kỹ lưỡng, giữ nguyên các đặc trưng thống kê chung của tập dữ liệu."
  },
  {
    id: "Q_MOD_D_035", module_id: "Module_D", difficulty: "Medium",
    tags: ["pii-masking"],
    content: "Hành động che bớt hoặc thay thế một phần ký tự của số thẻ tín dụng (ví dụ: '4111-XXXX-XXXX-1234') trước khi hiển thị trên màn hình hoặc lưu vào file log được gọi là kỹ thuật gì?",
    options: [
      "A. Hashing (Băm dữ liệu)",
      "B. Data Masking (Che mặt nạ dữ liệu)",
      "C. Data Augmentation (Tăng cường dữ liệu)",
      "D. Symmetric Encryption (Mã hóa đối xứng)"
    ],
    correct_option: "B",
    explanation: "Data Masking (Che mặt nạ dữ liệu) giúp ẩn các ký tự nhạy cảm khi hiển thị hoặc lưu trữ log, tránh việc nhân viên vận hành vô tình nhìn thấy thông tin nhạy cảm."
  },
  {
    id: "Q_MOD_D_036", module_id: "Module_D", difficulty: "Medium",
    tags: ["ai-bias"],
    content: "Khi thu thập dữ liệu để huấn luyện AI nhận diện các bệnh về da, nếu đội ngũ phát triển chỉ chụp ảnh từ những người có tông màu da sáng. Khi đưa vào thực tế ở các quốc gia có nhiều người da màu, mô hình dự đoán sai liên tục. Loại bias nào xuất hiện ở đây?",
    options: [
      "A. Historical Bias (Định kiến lịch sử)",
      "B. Representation Bias / Sampling Bias (Định kiến đại diện / Sai số chọn mẫu)",
      "C. Algorithmic Bias (Định kiến thuật toán)",
      "D. Evaluation Bias (Định kiến đánh giá)"
    ],
    correct_option: "B",
    explanation: "Representation Bias xảy ra khi một nhóm đối tượng không được đại diện đầy đủ hoặc bị bỏ qua trong tập dữ liệu huấn luyện, khiến mô hình không thể khái quát hóa tốt cho nhóm đó."
  },
  {
    id: "Q_MOD_D_037", module_id: "Module_D", difficulty: "Medium",
    tags: ["open-source-licensing"],
    content: "Sự khác biệt cốt lõi giữa hai giấy phép mã nguồn mở 'MIT License' và 'GNU GPL v3' là gì?",
    options: [
      "A. MIT yêu cầu trả tiền bản quyền, GPL thì không.",
      "B. MIT cho phép đóng gói phần mềm phái sinh thành mã nguồn đóng và thương mại hóa mà không cần mở code; trong khi GPL v3 bắt buộc bất kỳ sản phẩm phái sinh nào sử dụng mã nguồn của nó cũng phải mở mã nguồn dưới giấy phép GPL v3.",
      "C. GPL v3 cho phép thương mại hóa, MIT thì cấm thương mại hóa.",
      "D. Cả hai giấy phép hoàn toàn giống nhau về mọi điều khoản."
    ],
    correct_option: "B",
    explanation: "MIT là giấy phép cho phép tối đa (permissive license). GPL v3 là giấy phép copyleft (lan truyền), bảo vệ tính chất nguồn mở của phần mềm phái sinh."
  },
  {
    id: "Q_MOD_D_038", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Một nhà phát triển AI tạo sinh phát hành một mô hình sinh ảnh nghệ thuật cực kỳ đẹp mắt. Tuy nhiên, mô hình này được huấn luyện trên hàng triệu tác phẩm của các họa sĩ mà không xin phép hay trả tiền bản quyền cho họ. Vấn đề đạo đức chính ở đây là:",
    options: [
      "A. Pygmalion effect.",
      "B. Xâm phạm bản quyền tác giả, trục lợi trên công sức sáng tạo của người khác mà không có sự đồng thuận và đền bù xứng đáng.",
      "C. Ảnh sinh ra có độ phân giải không cao.",
      "D. Người dùng không biết cách sử dụng prompt."
    ],
    correct_option: "B",
    explanation: "Sử dụng tác phẩm có bản quyền làm dữ liệu huấn luyện AI thương mại mà không có sự đồng thuận (consent) hoặc đền bù hợp lý là chủ đề tranh chấp đạo đức và pháp lý lớn nhất hiện nay của AI tạo sinh."
  },
  {
    id: "Q_MOD_D_039", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Cho phát biểu logic sau: 'Mọi kỹ sư AI giỏi đều biết thuật toán tích chập CNN hoặc thuật toán Transformer'. Biết rằng Quốc là một kỹ sư AI giỏi và Quốc không biết thuật toán tích chập CNN. Kết luận nào sau đây chắc chắn đúng?",
    options: [
      "A. Quốc biết thuật toán Transformer.",
      "B. Quốc không biết thuật toán Transformer.",
      "C. Quốc không phải là một kỹ sư AI giỏi.",
      "D. Quốc biết cả hai thuật toán."
    ],
    correct_option: "A",
    explanation: "Mệnh đề logic có dạng: $P \\rightarrow (Q \\lor R)$. Biết rằng P đúng (Quốc là kỹ sư AI giỏi) và Q sai (Quốc không biết CNN), thì mệnh đề R (Quốc biết Transformer) chắc chắn phải đúng để tuyển ($Q \\lor R$) đúng."
  },
  {
    id: "Q_MOD_D_040", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Quy định 'Quyền được lãng quên' (Right to be Forgotten) trong luật bảo vệ dữ liệu GDPR của Châu Âu yêu cầu các hệ thống AI và doanh nghiệp điều gì?",
    options: [
      "A. Cho phép người dùng yêu cầu xóa bỏ vĩnh viễn toàn bộ dữ liệu cá nhân của họ khỏi hệ thống lưu trữ của doanh nghiệp khi không còn nhu cầu sử dụng.",
      "B. Bắt buộc người dùng phải quên đi mật khẩu cũ sau 90 ngày.",
      "C. Tự động xóa dữ liệu của người dùng sau mỗi năm mà không cần hỏi ý kiến.",
      "D. Không được phép lưu trữ bất kỳ dữ liệu nào ngay từ đầu."
    ],
    correct_option: "A",
    explanation: "Quyền được lãng quên cho phép cá nhân yêu cầu xóa dữ liệu của mình khi rút lại sự đồng thuận, hoặc dữ liệu không còn cần thiết cho mục đích ban đầu."
  },
  {
    id: "Q_MOD_D_041", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-ethics"],
    content: "Khi xây dựng hệ thống AI dự báo khả năng tái phạm tội của các phạm nhân để hỗ trợ tòa án xét xử, nếu hệ thống dựa trên các dữ liệu lịch sử chứa định kiến chủng tộc sâu sắc. Kết quả là hệ thống liên tục đánh giá mức độ nguy hiểm của một nhóm người cao hơn các nhóm khác dù hành vi phạm tội giống nhau. Với tư cách là kỹ sư AI, hành động nào là đúng đắn?",
    options: [
      "A. Tiếp tục triển khai vì AI luôn khách quan hơn con người.",
      "B. Tạm dừng triển khai hệ thống, thực hiện kiểm định bias chuyên sâu, cân bằng lại dữ liệu huấn luyện và khuyến nghị tòa án chỉ dùng AI làm kênh tham khảo phụ kèm theo sự giám sát chặt chẽ của con người.",
      "C. Thay đổi nhãn dữ liệu ngẫu nhiên để đánh lừa kiểm duyệt.",
      "D. Đổ lỗi cho thuật toán toán học phức tạp."
    ],
    correct_option: "B",
    explanation: "Hệ thống AI tác động trực tiếp đến tự do và quyền con người đòi hỏi tính trách nhiệm và giám sát tối cao. Việc phát hiện bias lịch sử yêu cầu phải hiệu chỉnh và có sự can thiệp của con người (Human-in-the-loop)."
  },
  {
    id: "Q_MOD_D_042", module_id: "Module_D", difficulty: "Medium",
    tags: ["pure-logic"],
    content: "Hãy suy luận logic từ các phát biểu sau:\n\n* Không có mô hình AI nào là hoàn hảo.\n* Một số mô hình AI được sử dụng trong y tế.\nPhát biểu nào sau đây chắc chắn đúng?",
    options: [
      "A. Mọi mô hình AI được sử dụng trong y tế đều hoàn hảo.",
      "B. Một số mô hình AI được sử dụng trong y tế không hoàn hảo.",
      "C. Tất cả các mô hình AI hoàn hảo đều dùng trong y tế.",
      "D. Không có mô hình AI y tế nào bị lỗi."
    ],
    correct_option: "B",
    explanation: "Vì không có mô hình AI nào hoàn hảo (Tất cả AI $\\rightarrow$ Không hoàn hảo). Do một số mô hình AI dùng trong y tế, nên những mô hình AI y tế này chắc chắn không hoàn hảo."
  },
  {
    id: "Q_MOD_D_043", module_id: "Module_D", difficulty: "Medium",
    tags: ["data-privacy"],
    content: "Trong quá trình huấn luyện mô hình ngôn ngữ lớn (LLM), hiện tượng 'Data Leakage' (Rò rỉ dữ liệu) thông qua câu trả lời (ví dụ: người dùng prompt yêu cầu LLM hiển thị số điện thoại cá nhân có trong tập train) thuộc về nguy cơ an toàn nào?",
    options: [
      "A. Phá hoại vật lý máy chủ.",
      "B. Rò rỉ thông tin cá nhân và vi phạm quyền riêng tư thông qua việc ghi nhớ dữ liệu huấn luyện (Memorization).",
      "C. Lỗi biên dịch code Python.",
      "D. Mô hình bị giảm độ chính xác."
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
      "A. Vì bài viết do AI tạo ra có định dạng không đẹp mắt.",
      "B. Vì hành vi này làm ô nhiễm và suy giảm tính trung thực của kho tri thức khoa học, đánh tráo công sức nghiên cứu thực tiễn bằng nội dung tổng hợp tự động không qua kiểm chứng thực tế.",
      "C. Vì AI viết bài quá ngắn.",
      "D. Vì tạp chí khoa học không cho phép sử dụng máy tính."
    ],
    correct_option: "B",
    explanation: "Đạo đức nghiên cứu khoa học yêu cầu tính thực nghiệm, trung thực và đóng góp tri thức thực sự từ con người. Việc spam bài viết do AI sinh ra làm loãng học thuật và tạo ra các thông tin sai lệch nguy hiểm."
  },
  {
    id: "Q_MOD_D_046", module_id: "Module_D", difficulty: "Hard",
    tags: ["pure-logic"],
    content: "Cho ba mệnh đề logic sau:\n\n1. Nếu Nam học giỏi AI (P) hoặc Nam giỏi Toán (Q), thì Nam sẽ đỗ kỳ thi tuyển sinh (R).\n2. Nếu Nam đỗ kỳ thi tuyển sinh (R), Nam sẽ được nhận học bổng (S).\n3. Thực tế Nam không nhận được học bổng ($\\neg$S).\nPhát biểu nào sau đây chắc chắn đúng về mặt logic?",
    options: [
      "A. Nam đỗ kỳ thi tuyển sinh nhưng không nhận học bổng.",
      "B. Nam không học giỏi AI và Nam không giỏi Toán.",
      "C. Nam học giỏi AI nhưng không giỏi Toán.",
      "D. Nam giỏi Toán nhưng không học giỏi AI."
    ],
    correct_option: "B",
    explanation: "Từ (2) và (3): $R \\rightarrow S$ và $\\neg S \\Rightarrow \\neg R$ (Nam không đỗ kỳ thi). Từ (1) và $\\neg R$: $(P \\lor Q) \\rightarrow R$ và $\\neg R \\Rightarrow \\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$ (Nam không học giỏi AI và Nam không giỏi Toán)."
  },
  {
    id: "Q_MOD_D_047", module_id: "Module_D", difficulty: "Hard",
    tags: ["data-privacy"],
    content: "Kỹ thuật mã hóa đồng cấu (Homomorphic Encryption) mang lại lợi ích đột phá nào cho an toàn dữ liệu và quyền riêng tư trong các ứng dụng AI đám mây?",
    options: [
      "A. Giúp nén dữ liệu hình ảnh xuống kích thước cực nhỏ.",
      "B. Cho phép mô hình AI thực hiện các phép tính toán trực tiếp trên dữ liệu đã được mã hóa mà không cần giải mã dữ liệu đó trước, đảm bảo dữ liệu luôn được bảo mật tuyệt đối ngay cả khi máy chủ bị hack.",
      "C. Tự động phát hiện và xóa bỏ mã độc trên máy tính người dùng.",
      "D. Loại bỏ hoàn toàn định kiến bias trong dữ liệu."
    ],
    correct_option: "B",
    explanation: "Mã hóa đồng cấu cho phép xử lý dữ liệu ở dạng mã hóa. Kết quả tính toán sau khi giải mã bởi người sở hữu khóa sẽ trùng khớp với kết quả tính trên dữ liệu thô, giúp bảo vệ dữ liệu nhạy cảm tối đa."
  },
  {
    id: "Q_MOD_D_048", module_id: "Module_D", difficulty: "Hard",
    tags: ["ai-bias"],
    content: "Phương pháp 'Pre-processing bias mitigation' giải quyết hiện tượng định kiến (bias) trong AI bằng cách nào?",
    options: [
      "A. Thay đổi trọng số của mô hình trong quá trình lan truyền ngược.",
      "B. Điều chỉnh dữ liệu huấn luyện trước khi đưa vào mô hình (như cân bằng lại tỷ lệ các nhóm nhạy cảm, gán lại nhãn hoặc biến đổi không gian đặc trưng để loại bỏ sự tương quan giữa đặc trưng nhạy cảm và nhãn).",
      "C. Thay đổi ngưỡng quyết định của kết quả đầu ra của mô hình.",
      "D. Tăng số lượng epoch khi huấn luyện mô hình."
    ],
    correct_option: "B",
    explanation: "Pre-processing bias mitigation can thiệp vào giai đoạn chuẩn bị dữ liệu (ví dụ re-weighting, tối ưu hóa biểu diễn dữ liệu) để triệt tiêu bias ngay từ nguồn trước khi mô hình học."
  },
  {
    id: "Q_MOD_D_049", module_id: "Module_D", difficulty: "Hard",
    tags: ["open-source-licensing"],
    content: "Một công ty công nghệ sử dụng một thư viện AI có giấy phép 'GNU AGPL v3' (Affero GPL v3) để xây dựng dịch vụ SaaS chạy trên đám mây cho người dùng truy cập qua web. Công ty sửa đổi một phần code của thư viện này để tối ưu hóa. Công ty có nghĩa vụ gì về mặt bản quyền?",
    options: [
      "A. Không có nghĩa vụ gì vì phần mềm chạy trên đám mây chứ không phân phối file cài đặt trực tiếp cho người dùng.",
      "B. Bắt buộc phải công khai toàn bộ mã nguồn sửa đổi và mã nguồn tích hợp đi kèm của dịch vụ SaaS đó cho người dùng dịch vụ tải về dưới cùng giấy phép AGPL v3.",
      "C. Chỉ cần đính kèm tên của tác giả gốc trên website.",
      "D. Phải trả 10% doanh thu dịch vụ cho tác giả gốc của thư viện."
    ],
    correct_option: "B",
    explanation: "AGPL v3 được thiết kế đặc biệt để lấp đầy 'lỗ hổng SaaS' của GPL. Nó quy định việc chạy phần mềm trên mạng cho người dùng tương tác từ xa cũng tương đương với việc phân phối phần mềm, buộc phải cung cấp mã nguồn phái sinh cho người dùng mạng."
  },
  {
    id: "Q_MOD_D_050", module_id: "Module_D", difficulty: "Hard",
    tags: ["data-ethics"],
    content: "Trong các xe tự lái tích hợp AI, bài toán 'Tình huống khó xử đạo đức' (Ethical Dilemma - ví dụ: xe mất phanh buộc phải chọn đâm vào 1 người già hay 3 người trẻ) thường được các nhà nghiên cứu tiếp cận giải quyết như thế nào dưới góc độ thiết kế sản phẩm có trách nhiệm?",
    options: [
      "A. Lập trình cứng cho xe luôn đâm vào người già.",
      "B. Không lập trình gì, để xe chọn ngẫu nhiên hoàn toàn lúc đó.",
      "C. Tránh đưa ra quyết định phán xét giá trị mạng sống con người; thay vào đó, lập trình thuật toán ưu tiên tối đa giảm thiểu động năng va chạm, phanh khẩn cấp và bảo vệ hành khách trong cabin mà không phân biệt đối tượng va chạm.",
      "D. Bắt tài xế xe tự lái phải chịu trách nhiệm bấm nút chọn đối tượng va chạm lúc đó."
    ],
    correct_option: "C",
    explanation: "Về mặt thiết kế đạo đức công nghệ, việc xếp hạng giá trị mạng sống con người là không thể chấp nhận được. Cách tiếp cận có trách nhiệm là thiết lập quy trình giảm thiểu va chạm vật lý tổng thể và tuân thủ các quy tắc an toàn khách quan."
  }
];
