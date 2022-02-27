"use strict";
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gOrderDb = {
  orders: [],
  // method
  filterOrder: function (paramFilterObj) {
    "use strict";
    var vFilterArr = [];
    vFilterArr = this.orders.filter(e =>
      (paramFilterObj.status === e.trangThai.toLowerCase() || paramFilterObj.status === "none")
      && (paramFilterObj.pizzaType === e.loaiPizza.toLowerCase() || paramFilterObj.pizzaType === "none")
    );
    return vFilterArr;
  }
};

const gCOL_ORDERID = 0;
const gCOL_KICKCO = 1;
const gCOL_LOAIPIZZA = 2;
const gCOL_NUOCUONG = 3;
const gCOL_THANHTIEN = 4;
const gCOL_HOVATEN = 5;
const gCOL_SODIENTHOAI = 6;
const gCOL_TRANGTHAI = 7;
const gCOL_CHITIET = 8;

var gColsName = [
  "orderId",
  "kickCo",
  "loaiPizza",
  "idLoaiNuocUong",
  "thanhTien",
  "hoTen",
  "soDienThoai",
  "trangThai",
  "chiTiet"];

var gOrderTable = $("#table-order").DataTable({
  "searching": false,
  "ordering": false,
  // khai báo các cột của DataTable
  "columns": [
    { data: gColsName[gCOL_ORDERID] },
    { data: gColsName[gCOL_KICKCO] },
    { data: gColsName[gCOL_LOAIPIZZA] },
    { data: gColsName[gCOL_NUOCUONG] },
    { data: gColsName[gCOL_THANHTIEN] },
    { data: gColsName[gCOL_HOVATEN] },
    { data: gColsName[gCOL_SODIENTHOAI] },
    { data: gColsName[gCOL_TRANGTHAI] },
    { data: gColsName[gCOL_CHITIET] }
  ],
  // định nghĩa lại 1 số cột
  "columnDefs": [
    {
      targets: gCOL_CHITIET,
      defaultContent: '<button class="btn btn-info detail">Chi tiết</button>'
    }
  ]
});
/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
$(document).ready(function () {
  onPageLoading();

  // gán sự kiện click cho btn Lọc
  $("#btn-filter").on("click", onBtnFilterClick);

  // gán sự kiện click cho btn Chi tiết
  $(document).on("click", ".detail", function () {
    onBtnDetailClick(this);
  });
});

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// Hàm thực hiện khi load trang
function onPageLoading() {
  "use strict";
  getAllOrders();
  $("#table-order tbody").on("click", ".details", function () {
    console.log("Nút Detail được click");
    onBtnUserDetailClick(this);
  });
  // console.log(gOrderDb.orders);
}

// Hàm xử lý sự kiện btn Filter click
function onBtnFilterClick() {
  "use strict";
  // B0: khai báo biến lưu trữ dữ liệu ở form Lọc
  var vFilterObj = {
    status: "",
    pizzaType: ""
  }
  // B1: thu thập dữ liệu
  vFilterObj.status = $("#select-status").find(":selected").val();
  vFilterObj.pizzaType = $("#select-pizza-type").find(":selected").val();
  // B2: validate dữ liệu
    // B3: xử lý sự kiện
    var vFilterArr = gOrderDb.filterOrder(vFilterObj);
    loadOrderToTable(vFilterArr);
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// Hàm xử lý sự kiện click vào nút Chi tiết (Detail)
function onBtnDetailClick(paramDetailBtn) {
  // B0: khai báo biến lưu trữ dữ liệu lấy trên table row
  var vRowData = {
    orderId: "",
    kickCo: "",
    loaiPizza: "",
    idLoaiNuocUong: "",
    thanhTien: -1,
    hoTen: "",
    soDienThoai: "",
    trangThai: ""
  };
  // B1: thu thập dữ liệu
  var vTableRow = $(paramDetailBtn).parents("tr");
  vRowData = gOrderTable.row(vTableRow).data();
  // B2: validate (bỏ qua)
  // B3: xử lý dữ liệu
  console.log(vRowData);
  // B4: xử lý sự kiện
  alert("Thông tin order hiện trong console");

}

// Hàm thực hiện việc load all orders từ server và load vào table
function getAllOrders() {
  "use strict";
  const vBASE_URL = "http://42.115.221.44:8080/devcamp-pizza365/orders";
  // B1: Thu thập dữ liệu (trong bài này bước này ko cần)
  // B2: Validate dữ liệu (trong bài này bước này ko cần)
  // B3: Thực hiện việc gọi API từ server Server
  $.ajax({
    url: vBASE_URL,
    type: "GET",
    dataType: "json",
    // async: false,
    success: function (res) {
      console.log(res);
      gOrderDb.orders = res;
      // B4: Xử lý trên front-end khi request xử lý xong và trả về response thành công
      loadOrderToTable(gOrderDb.orders); // load dữ liệu ra table
    },
    error: function (ajaxContext) {
      alert(ajaxContext.responseText);
    }
  });
}

// Hàm load dữ liệu ra bảng sau khi lấy được từ server
function loadOrderToTable(paramOrderArr) {
  // debugger;
  "use strict";
  gOrderTable.clear();
  gOrderTable.rows.add(paramOrderArr);
  gOrderTable.draw();
}
