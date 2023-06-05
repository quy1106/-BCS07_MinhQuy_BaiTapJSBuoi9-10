function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLamTrongThang,
){
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen; 
    this.email = _email; 
    this.matKhau = _matKhau; 
    this.ngayLam = _ngayLam; 
    this.luongCoBan = _luongCoBan; 
    this.chucVu = _chucVu; 
    this.gioLam = _gioLamTrongThang;

    this.xepLoai = function () {
        var soGioLam = this.gioLam;
        if (soGioLam >=192) {
          return "Nhân viên xuất sắc";
        } else if (soGioLam >=176) {
            return "Nhân viên giỏi";
        } else if (soGioLam >=160) {
            return "Nhân viên khá";
        } else{
            return "Nhân viên trung bình"
        }
      };

    this.tinhTongLuong = function (){
        var chucVu = this.chucVu;
        if (chucVu == "Giám đốc") {
            return  this.luongCoBan * 3;
        } else if (chucVu == "Trưởng phòng") {
            return this.luongCoBan * 2;
        } else if (chucVu == "Nhân viên") {
            return this.luongCoBan * 1;
        }
    };
}