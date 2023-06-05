// Kiểm tra rỗng
function kiemTraRong(checkInput, idThongBao) {
    // check xem input đó được nhập dữ liệu vô hay không, nếu không có thì báo lỗi và trả về một kết quả false, nếu có thì trả về true
    if (checkInput) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
        document.getElementById(idThongBao).style.display ="inline-block";
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập trường dữ liệu này";
      return false;
    }
  }
  
  function kiemTraEmail(checkInput, idThongBao) {
    // kiểm tra email bằng một regex
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức .test để kiểm tra xem email nhập vào có phù hợp hay không
    // khi sử dụng .test sẽ trả về giá trị true hoặc false
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email";
      return false;
    }
  }

// Kiểm tra tài khoản
  function kiemTraTaiKhoan(checkInput, idThongBao) {
    const number = String(checkInput);
    if (number.length >= 4 && number.length <= 6) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
      document.getElementById(idThongBao).style = "display: inline";
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập đúng 4 đến 6 ký tự";
      return false;
    }
  }

  //  kiểm tra mật khẩu
function kiemTraPassword(checkInput, idThongBao) {
  if (/^(?=.{6,})(?=.*[a-z]+)(?=.*\d+)(?=.*[A-Z]+)(?=.*[^\w])[ -~]+$/.test(checkInput) && checkInput.length<=10 ) {
    
    return true;
  }else{
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng mật khẩu!(6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  }

}
//  kiểm tra tên
function kiemTraHoTen(checkInput, idThongBao) {
  if (/^[A-Za-z]+$/.test(checkInput)) {
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng Tên!";
    return false;
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }

}


// kiểm tra định dạng ngày
function kiemTraDinhDangNgay(checkInput, idThongBao) {
  const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
  if (pattern.test(checkInput)) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng định dạng mm/dd/yyyy";
    return false;
  }
}


// kiểm tra lương
function kiemTraLuong(checkInput, idThongBao) {
  if (checkInput <= 20000000 && checkInput >= 1000000) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng số lương 1.000.000 - 20.000.000";
    return false;
  }
}
//  kiểm tra chức vụ
function kiemTraChucVu(checkInput, idThongBao) {
  if (checkInput == "") {
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng chọn đúng chức vụ";
    return false;
    
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }
}
// kiểm tra giờ làm
function kiemTraGioLam(checkInput, idThongBao) {
  if (checkInput <= 200 && checkInput >= 80) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).style = "display: inline";
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập đúng số giờ làm: 80-200 giờ";
    return false;
  }
}