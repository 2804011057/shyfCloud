//所有页面网址 ID
//var url_all = 'http://211.144.96.170:8088'; 
//var url_all = 'http://192.168.3.8:8088'; 
//var url_ws = '211.144.96.170:8088';   
//var url_ws = '192.168.3.12:8088';

var url_all = 'http://47.101.33.180:8090';
var tenantId = 'da9476e0b4424ff9a83ec8f2ac603e5e';


//刷新所有页面
window.addEventListener("pageflowrefresh", function (e) {
//  location.reload();
       alert('刷新');

});

//改变字体大小ll
var size = localStorage.getItem('size');
document.getElementsByTagName('html')[0].style.fontSize=size;

//$.ajax({
//	url: url_all+"/api/MobileV2/ModifyPassword?",		 
//	dataType: 'json',
//	data:{
//		
//	},
//	method: 'get',
//	success: function(data) {
//		
//	},
//	error: function(xhr) {
//
//	}
//});

//			$.get(url_all+"/api/MobileV2/QueryInfo?",
//				{ UserId:localStorage.getItem('MyUserId'),
//					PageIndex:vm.count_up,
//					PageSize:10 },
//			  function(data){
//
//			  }
//			);