USE DBMS_App;

CREATE TABLE answer_question (
  CID varchar(9) NOT NULL,
  SSN varchar(9) DEFAULT NULL,
  TimeQues date NOT NULL,
  TimeAns date DEFAULT NULL,
  Question varchar(750) NOT NULL,
  Answer varchar(1000) DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng answer_question
--

INSERT INTO answer_question (CID, SSN, TimeQues, TimeAns, Question, Answer) VALUES
('000905346', '023881237', '2021-11-20', '2021-11-21', 'Khi nào chương trình khuyến mãi Giáng sinh bắt đầu vậy ạ?', 'Chào Quý khách, cảm ơn Quý khách đã quan tâm, Chương trình này sẽ bắt đầu vào đầu tháng 12 nhé!'),
('000905346', NULL, '2022-04-23', NULL, 'Xinh đẹp tuyệt vời', NULL);

-- --------------------------------------------------------


CREATE TABLE branch (
  BID varchar(3) NOT NULL,
  Name varchar(255) NOT NULL,
  Phone varchar(10) DEFAULT NULL,
  NumberStreet varchar(100) DEFAULT NULL,
  Wards varchar(50) DEFAULT NULL,
  District varchar(50) DEFAULT NULL,
  City varchar(20) DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng branch
--

INSERT INTO branch (BID, Name, Phone, NumberStreet, Wards, District, City) VALUES
('001', 'Chi nhánh Bình Thạnh', '0793333001', '575, Võ Văn Ngân', 'Phường 3', 'Quận Bình Thạnh', 'TP.HCM'),
('002', 'Chi nhánh Tân Bình', '0793333002', '512, Nguyễn Đình Chiểu', 'Phường 5', 'Quận Tân Bình', 'TP.HCM'),
('003', 'Chi nhánh Quận 3', '0793333003', '230, Điện Biên Phủ', 'Phường 1', 'Quận 3', 'TP.HCM'),
('004', 'Chi nhánh Thủ Đức', '0793333004', '967, Phạm Văn Đồng', 'Phường 6', 'Quận Thủ Đức', 'TP.HCM'),
('005', 'Chi nhánh Ninh Kiều', '0793333005', '111, Lý Tự Trọng', 'Phường Cái Nước', 'Quận Ninh Kiều', 'Cần Thơ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng contact
--

CREATE TABLE contact (
  SID varchar(9) NOT NULL,
  SSN varchar(9) NOT NULL,
  SupplierContent varchar(700) NOT NULL,
  EmployeeContent varchar(1000) DEFAULT NULL,
  TimeQues date NOT NULL,
  TimeAns date DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng contact
--

INSERT INTO contact (SID, SSN, SupplierContent, EmployeeContent, TimeQues, TimeAns) VALUES
('218312118', '023881237', 'Tình hình khuyến mãi bên chúng tôi như thế nào?', 'Chào quý doanh nghiệp, khuyến mãi được đánh giá khá cao', '2021-07-26', '2021-07-27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng customer
--

CREATE TABLE customer (
  CID varchar(9) NOT NULL,
  SSN varchar(9) NOT NULL UNIQUE,
  LastName varchar(20) NOT NULL,
  FirstName varchar(20) NOT NULL,
  Gender varchar(5) DEFAULT 'Nữ',
  BirthDay date DEFAULT NULL CHECK (year(BirthDay) <= '2003'),
  Email varchar(50) DEFAULT NULL,
  PhoneNumber varchar(10) DEFAULT NULL,
  NumberStreet varchar(100) DEFAULT NULL,
  Wards varchar(100) DEFAULT NULL,
  District varchar(100) DEFAULT NULL,
  City varchar(100) DEFAULT NULL,
  AccumulatedPoints int DEFAULT 0 CHECK (AccumulatedPoints >= 0)
);

--
-- Đang đổ dữ liệu cho bảng customer
--

INSERT INTO customer (CID, SSN, LastName, FirstName, Gender, BirthDay, Email, PhoneNumber, NumberStreet, Wards, District, City, AccumulatedPoints) VALUES
('000905346', '544029643', 'Nguyễn', 'Hà', 'Nữ', '1960-01-01', 'ha.nguyen123@gmail.com', '0354000643', '554 Pauster', 'Phường 1', 'Quận 1', 'Thành Phố Hồ Chí Minh', 346),
('018718140', '176532439', 'Lê Văn', 'Định', 'Nam', '1975-02-22', 'levandinh@gmail.com', '0317018439', '176 Trần Hưng Đạo', 'Phường 2', 'Quận 2', 'Thành Phố Hồ Chí Minh', 140),
('029631343', '724982197', 'Trần Thị', 'Út', 'Nữ', '1990-08-13', 'tran.ut@gmail.com', '0372', '724 Hậu Giang', 'Phường 3', 'Quận 3', 'Thành Phố Hồ Chí Minh', 343),
('035903313', '013776102', 'Nguyễn Thị Thanh', 'Trúc', 'Nam', '1988-08-19', 'thanhtruc@gmail.com', '0372', '013 Huyền Trân Công Chúa', 'Phường 4', 'Quận 4', 'Thành Phố Hồ Chí Minh', 313),
('133978858', '418807479', 'Ngô Minh', 'Huệ', 'Nữ', '1970-05-01', 'ngo.minh.hue@gmail.com', '0372', '418 Nguyễn Thị Định', 'Phường 5', 'Quận 5', 'Thành Phố Hồ Chí Minh', 858),
('306140124', '167129026', 'Lý Anh', 'Hòa', 'Nam', '1990-06-07', 'anhhoaly@gmail.com', '0372', '167 Trương Công Định', 'Phường 6', 'Quận 6', 'Thành Phố Hồ Chí Minh', 124),
('329386473', '475688981', 'Trương Trần Thị', 'Ngọc', 'Nữ', '1975-11-02', 'ngoc.truong@gmail.com', '0372', '475 Cộng Hòa', 'Phường 7', 'Quận 7', 'Thành Phố Hồ Chí Minh', 473),
('473800373', '159993535', 'Lý Thị Uyên', 'Linh', 'Nữ', '1988-12-13', 'uyenlinhly@gmail.com', '0372', '159 Võ Văn Ngân', 'Phường 8', 'Quận 8', 'Thành Phố Hồ Chí Minh', 373),
('519045238', '610820723', 'Hoàng Hương Quỳnh', 'Mai', 'Nữ', '2000-10-30', 'maimusic@gmail.com', '0372', '610 Phạm Văn Đồng', 'Phường 9', 'Quận Thủ Đức', 'Thành Phố Hồ Chí Minh', 238),
('555907439', '761502382', 'Nguyễn Trấn', 'Thành', 'Nam', '1975-04-11', 'thanh.cry@gmail.com', '0372', '761 Phan Đăng Lưu', 'Phường 1', 'Quận Tân Bình', 'Thành Phố Hồ Chí Minh', 439),
('661961999', '822046916', 'Võ Thị Khánh', 'Thi', 'Nữ', '1991-03-25', 'khanhthi91@gmail.com', '0372', '822 Lý Tự Trọng', 'Phường 2', 'Quận Bình Tân', 'Thành Phố Hồ Chí Minh', 999),
('704055098', '872960385', 'Nguyễn Thị Hương', 'Giang', 'Nữ', '2000-12-27', 'nuhoangdaoly@gmail.com', '0372', '872 Trần Xuân Soạn', 'Phường 3', 'Quận Tân Phú', 'Thành Phố Hồ Chí Minh', 385),
('716423229', '440449116', 'Trần Đào Trúc', 'Linh', 'Nữ', '1988-01-18', 'tructhik88@gmail.com', '0372', '440 Nguyễn Văn Linh', 'Phường 4', 'Quận Bình Thạnh', 'Thành Phố Hồ Chí Minh', 229),
('718925500', '063364570', 'Nguyễn Hoàng Gia', 'Đạo', 'Nam', '1990-07-16', 'giadaobinhan@gmail.com', '0372', '063 Xa Lộ Hà Nội', 'Phường 5', 'Quận Bình Chánh', 'Thành Phố Hồ Chí Minh', 500),
('816494467', '491725597', 'Trần Thị Ái', 'Châu', 'Nữ', '1970-10-02', 'aichaunuocuong@gmail.com', '0372', '491 Lý Thái Tổ', 'Phường 6', 'Quận 1', 'Thành Phố Hồ Chí Minh', 467),
('887310742', '714207105', 'Nguyễn Thị Huệ', 'Minh', 'Nữ', '1975-08-14', 'hueminhho@gmail.com', '0372', '714 Nam Kỳ Khởi Nghĩa', 'Phường 7', 'Quận 2', 'Thành Phố Hồ Chí Minh', 742);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng employee
--

CREATE TABLE employee (
  SSN varchar(9) NOT NULL,
  ELastName varchar(20) DEFAULT NULL,
  EFirstName varchar(20) DEFAULT NULL,
  Gender varchar(5) DEFAULT 'Nữ',
  BirthDay date DEFAULT NULL CHECK (year(BirthDay) <= '2000'),
  PhoneNumber varchar(10) DEFAULT NULL,
  Email varchar(50) DEFAULT NULL,
  NumberStreet varchar(100) DEFAULT NULL,
  Wards varchar(100) DEFAULT NULL,
  District varchar(100) DEFAULT NULL,
  City varchar(100) DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng employee
--

INSERT INTO employee (SSN, ELastName, EFirstName, Gender, BirthDay, PhoneNumber, Email, NumberStreet, Wards, District, City) VALUES
('023881237', 'Nguyễn Trần Trung', 'Kiên', 'Nam', '1960-01-01', '0323881237', 'trungkien123@gmail.com', '692 Trường Chinh', 'Phường 11', 'Quận 1', 'Thành phố Hồ Chí Minh'),
('062235088', 'Nguyễn Khoa Gia', 'Bảo', 'Nam', '1987-07-17', '0362235088', 'bao.nguyengia@gmail.com', '297 Cộng Hòa', 'Phường 10', 'Quận 2', 'Thành phố Hồ Chí Minh'),
('188070870', 'Trần Minh Anh', 'Hào', 'Nam', '1995-08-11', '0388070870', 'hao.tran@gmail.com', '246 Lý Thái Tổ', 'Phường 9', 'Quận 3', 'Thành phố Hồ Chí Minh'),
('217066472', 'Trần Văn', 'Tín', 'Nam', '1990-11-18', '0317066472', 'tranvantin@example.com', '881 Phạm Văn Đồng', 'Phường 8', 'Quận 4', 'Thành phố Hồ Chí Minh'),
('234104899', 'Hoàng Minh', 'Hưng', 'Nam', '1991-04-03', '0334104899', 'minh.hung@gmail.com', '351 Võ Văn Ngân', 'Phường 7', 'Quận 5', 'Thành phố Hồ Chí Minh'),
('281758084', 'Dương Thị Mộng', 'Mơ', 'Nữ', '1996-07-10', '0381758084', 'mong.moduong@gmail.com', '890 Hòa Hoa Thám', 'Phường 6', 'NewJersey', 'Thành phố Hồ Chí Minh'),
('309716608', 'Võ Thị Hương', 'Ly', 'Nữ', '1982-05-30', '0309716608', 'vohuongly@gmail.com', '323 Nguyễn Thị Minh Khai', 'Phường 5', 'Quận 6', 'Thành phố Hồ Chí Minh'),
('373303964', 'Nguyễn Hoàng', 'Tiến', 'Nam', '1997-03-03', '0373303964', 'tien.nguyen@gmail.com', '654 Lê Hồng Phong', 'Phường 4', 'Quận 7', 'Thành phố Hồ Chí Minh'),
('618296818', 'Lê Thị Minh', 'Ngọc', 'Nữ', '1996-06-24', '0318296818', 'minhngoc@gmail.com', '332 Hoàng Diệu', 'Phường 3', 'Quận 8', 'Thành phố Hồ Chí Minh'),
('643836378', 'Lê Trần Mỹ', 'Linh', 'Nữ', '1992-10-08', '0343836378', 'mylinh@example.com', '921 Kim Đồng', 'Phường 2', 'Quận 9', 'Thành phố Hồ Chí Minh'),
('647397692', 'Phạm Thị Quỳnh', 'My', 'Nữ', '1993-02-15', '0347397692', 'phamquynhmy@gmail.com', '694 Võ Thị Sáu', 'Phường 1', 'Quận 10', 'Thành phố Hồ Chí Minh'),
('653547927', 'Phan Nguyễn Quỳnh', 'Chi', 'Nữ', '1996-01-11', '0353547927', 'phan.quynhcheese@gmail.com', '812 Hai Bà Trưng', 'Phường 8', 'Quận 11', 'Thành phố Hồ Chí Minh'),
('698195942', 'Trương Võ Quỳnh', 'Anh', 'Nữ', '1994-02-23', '0398195942', 'quinanh@example.com', '499 Bà Triệu', 'Phường 9', 'Quận Thủ Đức', 'Thành phố Hồ Chí Minh'),
('709248366', 'Nguyễn Quốc', 'Tuấn', 'Nam', '1978-10-07', '0309248366', 'tuannguyen@gmail.com', '71 Xa Lộ Hà Nội', 'Phường 5', 'Quận Tân Bình', 'Thành phố Hồ Chí Minh'),
('764290410', 'Nguyễn Tấn', 'Minh', 'Nam', '1993-01-29', '0364290410', 'tuannam.nguyen@gmail.com', '31 Nam Kì Khởi Nghĩa', 'Phường 6', 'Quận Bình Tân', 'Thành phố Hồ Chí Minh'),
('800961928', 'Phạm Hoàng', 'Trọng', 'Nam', '1995-08-23', '0300961928', 'hoangtrong@gmail.com', '974 Pauster', 'Phường 1', 'Quận Bình Thạnh', 'Thành phố Hồ Chí Minh'),
('833418914', 'Hồ Ngọc', 'Ánh', 'Nữ', '1982-10-21', '03', 'ho.anhngoc@gmail.com', '663 Huyền Trân Công Chúa', 'Phường 2', 'Tân Phú', 'Thành phố Hồ Chí Minh'),
('883343528', 'Mai An', 'Tiêm', 'Nam', '1976-04-10', '03', 'maiantiemduahau@gmail.com', '625 Võ Văn Ngân', 'Phường 3', 'Thủ Đức', 'Thành phố Hồ Chí Minh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng join_in
--

CREATE TABLE join_in (
  PID varchar(10) NOT NULL,
  SID varchar(9) NOT NULL,
  BID varchar(3) NOT NULL,
  CID varchar(9) NOT NULL,
  Time date NOT NULL
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng promotion
--

CREATE TABLE promotion (
  PID varchar(10) NOT NULL,
  PName varchar(50) NOT NULL,
  SID varchar(9) NOT NULL,
  PType varchar(255) DEFAULT NULL,
  FromDate date DEFAULT '2021-10-31',
  ToDate date DEFAULT '2021-11-05',
  NumofPercentRedution float DEFAULT NULL,
  Infomation varchar(1000) DEFAULT NULL,
  GName varchar(100) NOT NULL
);

--
-- Đang đổ dữ liệu cho bảng promotion
--

INSERT INTO promotion (PID, PName, SID, PType, FromDate, ToDate, NumofPercentRedution, Infomation, GName) VALUES
('1234', 'Dui dẻ vào mùa deadline', '633991571', 'Sự kiện hàng năm', '2022-10-28', '2022-12-28', 10, 'Sự kiện hàng năm', 'Chổi lau nhà'),
('GS123', 'Giáng sinh anh lành', '128312118', 'Năm mới', '2022-10-28', '2022-12-28', 0, 'Abcde', 'Áo khoác'),
('Summer2022', 'Dui dẻ vào hè', '128312118', 'Sự kiện hàng năm', '2022-03-31', '2022-08-04', 10, 'ABCD', 'Nước suối');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng rate_branch
--

CREATE TABLE rate_branch (
  CID varchar(9) NOT NULL,
  BID varchar(3) NOT NULL,
  Time date NOT NULL,
  Detail varchar(1000) DEFAULT NULL,
  Point int DEFAULT NULL CHECK (Point >= 0 and Point <= 10)
);

--
-- Đang đổ dữ liệu cho bảng rate_branch
--

INSERT INTO rate_branch (CID, BID, Time, Detail, Point) VALUES
('000905346', '001', '2021-10-10', 'Chất lượng tốt, phục vụ tận tâm, nhiều khuyến mãi', 10),
('000905346', '001', '2022-04-23', 'Xinh đẹp tuyệt vời', 10),
('000905346', '003', '2022-04-23', 'Xinh đẹp tuyệt vời', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng rate_employee
--

CREATE TABLE rate_employee (
  CID varchar(9) NOT NULL,
  SSN varchar(9) NOT NULL,
  Time date NOT NULL,
  Detail varchar(1000) DEFAULT NULL,
  Point_for_quality int DEFAULT NULL CHECK (Point_for_quality >= 0 and Point_for_quality <= 10),
  Point_for_attitude int DEFAULT NULL CHECK (Point_for_attitude >= 0 and Point_for_attitude <= 10)
);

--
-- Đang đổ dữ liệu cho bảng rate_employee
--

INSERT INTO rate_employee (CID, SSN, Time, Detail, Point_for_quality, Point_for_attitude) VALUES
('000905346', '023881237', '2021-10-02', 'Tư vấn lịch sự, nhiệt tình, chất lượng tốt', 10, 10),
('000905346', '281758084', '2022-04-23', 'Xinh đẹp tuyệt vời', 10, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng role
--

CREATE TABLE role (
  Account_Name varchar(255) NOT NULL,
  Account_Pass varchar(255) NOT NULL,
  Role varchar(50) NOT NULL
);

--
-- Đang đổ dữ liệu cho bảng role
--

INSERT INTO role (Account_Name, Account_Pass, Role) VALUES
('000905346', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('018718140', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('023881237', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('029631343', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('035903313', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('062235088', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('128312118', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('133978858', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('159124697', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('188070870', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('217066472', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('218312118', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('234104899', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('236792567', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('281758084', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('306140124', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('309716608', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('326792567', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('329386473', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('336991571', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('373303964', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('473800373', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('519045238', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('555907439', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('591124697', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('618296818', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('633991571', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'supplier'),
('643836378', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('647397692', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('653547927', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('661961999', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('698195942', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('704055098', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('709248366', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('716423229', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('718925500', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('764290410', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('800961928', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('816494467', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('833418914', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('883343528', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'employee'),
('887310742', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'user'),
('admin@admin', '$2a$10$XLHDJQjNz0i7KgT2.eu6m.wJgCMUUukscaotq0pvdH2rh02sN/hzG', 'admin'),
('lethanhsang', '123456789', 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng supplier
--

CREATE TABLE supplier (
  SID varchar(9) NOT NULL,
  SName varchar(255) NOT NULL,
  BusinessAreas varchar(255) DEFAULT NULL,
  Email varchar(255) DEFAULT NULL,
  PhoneNumber varchar(10) DEFAULT NULL,
  NumberStreet varchar(255) DEFAULT NULL,
  Wards varchar(255) DEFAULT NULL,
  District varchar(255) DEFAULT NULL,
  City varchar(255) DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng supplier
--

INSERT INTO supplier (SID, SName, BusinessAreas, Email, PhoneNumber, NumberStreet, Wards, District, City) VALUES
('128312118', 'Công ty Đồng Tâm', 'Đa lĩnh vực', 'DongTam123@gmail.com', '0328312118', '730 An Dương Vương', 'Phường 6', 'Quận 3', 'Thành phố Hồ Chí Minh'),
('159124697', 'Công ty Kim Hoàng', 'Đa lĩnh vực', 'KimHoang@gmail.com', '0359124697', '74 Lý Thường Kiệt', 'Phường 14', 'Quận 10', 'Thành phố Hồ Chí Minh'),
('218312118', 'Công ty Lợi Hòa Đường', 'Thực phẩm', 'LoiHoaDuong@gmail.com', '0321831211', '730 Nam Kỳ Khởi Nghĩa', 'Phường 3', 'Quận 5', 'Thành phố Hồ Chí Minh'),
('236792567', 'Công ty Thái Minh', 'Quần áo', 'ThaiMinh@gmail.com', '0323679256', '257 Đông Hòa', 'Phường 2', 'Quận 7', 'Thành phố Hồ Chí Minh'),
('326792567', 'Công ty Minh Hải', 'Quần Áo', 'MinhHai@gmail.com', '0326792567', '257 Võ Thị Sáu', 'Phường 7', 'Quận 2', 'Thành phố Hồ Chí Minh'),
('336991571', 'Công ty Phượng Hoàng đỏ', 'Hàng gia dụng', 'PhuongHoangDo@gmail.com', '0333699157', '957 Cộng Hòa', 'Phường 1', 'Quận 8', 'Thành phố Hồ Chí Minh'),
('591124697', 'Công ty Hồng Thiện Mỹ', 'Điện tử-Điện lạnh', 'HongThienMy@gmail.com', '0359112469', '74 Lý Thái Tổ', 'Phường 5', 'Quận 1', 'Thành phố Hồ Chí Minh'),
('633991571', 'Công ty Cường Thịnh', 'Đa lĩnh vực', 'CuongThinh@gmail.com', '0333991571', '957 Cách Mạng Tháng Tám', 'Phường 4', 'Quận 6', 'Thành phố Hồ Chí Minh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng typeofgoods
--

CREATE TABLE typeofgoods (
  Name varchar(100) NOT NULL,
  Type varchar(50) NOT NULL,
  Information varchar(1000) DEFAULT NULL
);

--
-- Đang đổ dữ liệu cho bảng typeofgoods
--

INSERT INTO typeofgoods (Name, Type, Information) VALUES
('Áo khoác', 'Fashion', 'Áo mới Cà Mau'),
('Bộ dao kéo', 'HouseWare', 'Dao kéo rất bén'),
('Chổi lau nhà', 'HouseWare', 'Chổi lau rất sạch'),
('Dụng cụ làm bếp', 'HouseWare', 'Dụng cụ làm bếp rất hay'),
('Máy giặt', 'Electronic', 'Máy giặt rất sạch'),
('Máy hút bụi', 'HouseWare', 'Máy hút bụi rất sạch'),
('Máy lạnh', 'Electronic', 'Máy lạnh rất lạnh'),
('Máy lọc nước', 'Electronic', 'Máy lọc nước trong lành'),
('Mì gói', 'Food', 'Mì gói cứu sinh viên'),
('Nồi chiên không dầu', 'HouseWare', 'Nồi chiên không dầu không cần dầu'),
('Nước suối', 'Food', 'Nước suối mát lạnh'),
('Quần áo bơi', 'Fashion', 'Quần áo bơi cho mùa hè rất tuyệt'),
('Quần áo Công sở', 'Fashion', 'Quần áo công sở đi làm rất phù hợp'),
('Quần áo Noel', 'Fashion', 'Quần áo Noel đi chơi rất vui'),
('Quần áo Tết', 'Fashion', 'Quần áo Tết, mới may rất tuyệt'),
('Rau củ', 'Food', 'Rau củ, nhà trồng, thơm ngon mời bạn ăn nha'),
('Thịt heo', 'Food', 'Thịt heo, tươi, ngon'),
('Trái Cây', 'Food', 'Trái cây tươi, nhập khẩu nguyên lô'),
('Tủ chén', 'HouseWare', 'Tủ chén rất rộng, phù hợp với không gian nhà bếp'),
('Tủ lạnh', 'Electronic', 'Tủ lạnh làm lạnh nhanh, ít tốn điện');


-- Chỉ mục cho bảng answer_question
--
ALTER TABLE answer_question
  ADD PRIMARY KEY (CID,Question,TimeQues);

--
-- Chỉ mục cho bảng branch
--
ALTER TABLE branch
  ADD PRIMARY KEY (BID);

--
-- Chỉ mục cho bảng contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (SID,SupplierContent,TimeQues);

--
-- Chỉ mục cho bảng customer
--
ALTER TABLE customer
  ADD PRIMARY KEY (CID);

--
-- Chỉ mục cho bảng employee
--
ALTER TABLE employee
  ADD PRIMARY KEY (SSN);

--
-- Chỉ mục cho bảng join_in
--
ALTER TABLE join_in
  ADD PRIMARY KEY (PID,SID,BID,CID,Time);
--  ADD KEY BID (BID),
--  ADD KEY CID (CID);

--
-- Chỉ mục cho bảng promotion
--
ALTER TABLE promotion
  ADD PRIMARY KEY (PID,SID);

--
-- Chỉ mục cho bảng rate_branch
--
ALTER TABLE rate_branch
  ADD PRIMARY KEY (CID,BID,Time);

--
-- Chỉ mục cho bảng rate_employee
--
ALTER TABLE rate_employee
  ADD PRIMARY KEY (CID,SSN,Time);

--
-- Chỉ mục cho bảng role
--
ALTER TABLE role
  ADD PRIMARY KEY (Account_Name);

--
-- Chỉ mục cho bảng supplier
--
ALTER TABLE supplier
  ADD PRIMARY KEY (SID);

--
-- Chỉ mục cho bảng typeofgoods
--
ALTER TABLE typeofgoods
  ADD PRIMARY KEY (Name);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng answer_question
--
ALTER TABLE answer_question
  ADD CONSTRAINT answer_question_ibfk_1 FOREIGN KEY (CID) REFERENCES customer (CID) ON DELETE CASCADE ON UPDATE CASCADE;

 ALTER TABLE answer_question
  ADD CONSTRAINT answer_question_ibfk_2 FOREIGN KEY (SSN) REFERENCES employee (SSN) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Các ràng buộc cho bảng contact
--
ALTER TABLE contact
  ADD CONSTRAINT contact_ibfk_1 FOREIGN KEY (SID) REFERENCES supplier (SID) ON DELETE CASCADE ON UPDATE CASCADE;

 ALTER TABLE contact
  ADD CONSTRAINT contact_ibfk_2 FOREIGN KEY (SSN) REFERENCES employee (SSN) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Các ràng buộc cho bảng join_in
--
ALTER TABLE join_in
  ADD CONSTRAINT join_in_ibfk_1 FOREIGN KEY (PID,SID) REFERENCES promotion (PID, SID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE join_in
  ADD CONSTRAINT join_in_ibfk_2 FOREIGN KEY (BID) REFERENCES branch (BID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE join_in
  ADD CONSTRAINT join_in_ibfk_3 FOREIGN KEY (CID) REFERENCES customer (CID) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Các ràng buộc cho bảng promotion
--
ALTER TABLE promotion
  ADD CONSTRAINT promotion_ibfk_1 FOREIGN KEY (SID) REFERENCES supplier (SID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE promotion
  ADD CONSTRAINT promotion_ibfk_2 FOREIGN KEY (GName) REFERENCES typeofgoods (Name) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng rate_branch
--
ALTER TABLE rate_branch
  ADD CONSTRAINT rate_branch_ibfk_1 FOREIGN KEY (CID) REFERENCES customer (CID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE rate_branch
  ADD CONSTRAINT rate_branch_ibfk_2 FOREIGN KEY (BID) REFERENCES branch (BID) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Các ràng buộc cho bảng rate_employee
--
ALTER TABLE rate_employee
  ADD CONSTRAINT rate_employee_ibfk_1 FOREIGN KEY (CID) REFERENCES customer (CID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE rate_employee
  ADD CONSTRAINT rate_employee_ibfk_2 FOREIGN KEY (SSN) REFERENCES employee (SSN) ON DELETE CASCADE ON UPDATE CASCADE;


