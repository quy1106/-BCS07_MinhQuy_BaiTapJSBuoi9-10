var arrNhanVien = [];

getStorage();

renderGiaoDien(arrNhanVien);

function renderGiaoDien(arr) {
  var content = "";
  for (let index = 0; index < arr.length; index++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arr[index];
    Object.assign(nhanVien, nhanVienItem);
    content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.hoTen}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>									
        <td>${nhanVien.tinhTongLuong()}</td>
        <td>${nhanVien.xepLoai()}</td>
        <td>
                <button onclick="xoaNhanVien('${
                  nhanVien.taiKhoan
                }')" class="btn btn-danger mb-2">
                <i class="fa-solid fa-delete-left"></i>
                </button>
                <button onclick="editNhanVien('${
                  nhanVien.taiKhoan
                }')" class="btn btn-warning" data-toggle="modal"
                data-target="#myModal">
                <i class="fa-solid fa-user-pen"></i>
                </button>
              </td>
    </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// Thêm nhân viên
document.getElementById("btnThem").onclick = function () {
  ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  document.getElementById("tbTKNV").style.display = "none";
  document.getElementById("tbTen").style.display = "none";
  document.getElementById("tbEmail").style.display = "none";
  document.getElementById("tbMatKhau").style.display = "none";
  document.getElementById("tbNgay").style.display = "none";
  document.getElementById("tbLuongCB").style.display = "none";
  document.getElementById("tbChucVu").style.display = "none";
  document.getElementById("tbGiolam").style.display = "none";
  document.getElementById("tknv").readOnly = false;

}
document.getElementById("btnThemNV").onclick = function themNhanVien() {
  var nhanVien = layGiaTriInput();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);

    saveStorage(arrNhanVien);
    renderGiaoDien(arrNhanVien);
    ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  }
};

// Xóa Nhân Viên
function xoaNhanVien(taiKhoan) {
  var index = timViTriNV(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveStorage(arrNhanVien);
    renderGiaoDien(arrNhanVien);
  }
}

// Cập nhật nhân viên
function editNhanVien(taiKhoan) {
  
  var index = timViTriNV(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriChoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam,
  );
  document.getElementById("tknv").readOnly = true;
}

document.getElementById("btnCapNhat").onclick = function capNhatThongTinNhanVien() {
  var nhanVienDaChinhSua = layGiaTriInput();
  var index = timViTriNV(nhanVienDaChinhSua.taiKhoan);
  
  arrNhanVien[index] = nhanVienDaChinhSua;
  saveStorage(arrNhanVien);
  renderGiaoDien(arrNhanVien);
}

// Tìm nhân viên
document.getElementById("btnTimNV").onclick = function timNhanVien (){
  var xepLoai = document.getElementById("searchName").value;
//   if (xepLoai == "Xuất sắc" || xepLoai == "Giỏi" || xepLoai == "Khá" || xepLoai == "Trung bình" ) {
//     
//     var arrTimNhanVien =[];
//   arrTimNhanVien = arrNhanVien.filter(function(e) {
//     return e.xepLoai() == "Nhân viên " + xepLoai;
// });
switch (xepLoai) {
  case "Xuất sắc":
    document.getElementById("tbTimNV").style.display ="none";
    arrTimNhanVien = arrNhanVien.filter(function(e) {
       return e.gioLam >= 192;
    });
    break;
  case "Giỏi":
    document.getElementById("tbTimNV").style.display ="none";
    arrTimNhanVien = arrNhanVien.filter(function(e) {
       return e.gioLam >= 176 && e.gioLam<192;
    });
    break;
  case "Khá":
    document.getElementById("tbTimNV").style.display ="none";
    arrTimNhanVien = arrNhanVien.filter(function(e) {
       return e.gioLam >= 160 && e.gioLam<176;
    });
    break;
  case "Trung bình":
    document.getElementById("tbTimNV").style.display ="none";
    arrTimNhanVien = arrNhanVien.filter(function(e) {
       return e.gioLam <160;
    });
    break;

  default:  
  document.getElementById("tbTimNV").style.display ="inline-block";
  document.getElementById("tbTimNV").innerHTML = "Trường dữ liệu nhập không chính xác!";

    break;
  }
  renderGiaoDien(arrTimNhanVien);
    
  }
  

  



