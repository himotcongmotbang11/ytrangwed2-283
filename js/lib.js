
  const Products = [
    {
        id: "1",
        name: "Mèo Đen Siêu Ngầu Nam Cực",
        price: "500 usd/con",
        description: "Đây là giống mèo thuần chủng đến từ Nam Cực.<br>Để thuận lợi cho việc sinh tồn, giống mèo này đã tiến hóa cơ thể với kích cỡ nhỏ nhắn nhằm săn bắt tôm núi lửa nằm sâu dưới đáy đại dương. Vì thời tiết khắc nghiệt, chúng đã thoái hóa hoàn toàn bộ lông của mình.",
        image: "../asserts/images/meo.png",
        description1: "Một chú mèo mang phong cách cực kỳ cool ngầu, thần thái chuẩn đại ca phối đồ bao chất!",
        link: "chitiet.html"
    },
    {
        id: "2",
        name: "Mèo Cam Quái Xế Phiên Bản A",
        price: "500 usd/con",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../asserts/images/meo1.png",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chitiet.html"
    },
    {
        id: "3",
        name: "Mèo Thần Biển Siêu Nảy",
        price: "500 usd/con",
        description: "Giống mèo mang trong mình dòng máu hoàng gia của vương quốc Nam Cực cổ đại.<br>Chúng tiến hóa cơ thể nhỏ bé để dễ dàng luồn lách săn bắt tôm núi lửa dưới đáy đại dương sâu thẳm, đồng thời rũ bỏ toàn bộ lông để bơi lội linh hoạt hơn.",
        image: "../asserts/images/meo2.jpg",
        description1: "Ngoại hình siêu nảy và đẹp xuất sắc, có nguồn gốc bí ẩn từ một nền văn minh cổ đại ẩn mình dưới lòng nước.",
        link: "chitiet.html"
    },
    {
        id: "4",
        name: "Mèo Đại Sứ Thân Thiện (Like Me)",
        price: "10000 usd/con",
        description: "Dòng mèo Nam Cực quý hiếm mang năng lượng tích cực tối thượng.<br>Cơ thể nhỏ nhắn giúp chúng dễ dàng sinh tồn và săn tôm núi lửa dưới đáy biển. Lớp lông đã thoái hóa hoàn toàn để thích nghi với các dòng hải lưu nóng.",
        image: "../asserts/images/meo3.jpg",
        description1: "Hay giơ ngón tay cái để ban phát sự 'Like' dạo khắp nơi. Vì độ thân thiện đạt điểm tuyệt đối nên em này có giá lên tới 10.000 USD!<br>",
        link: "chitiet.html"
    },
    {
        id: "5",
        name: "Mèo Cam Hóa Ong Ong",
        price: "500 usd/con",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../asserts/images/meo4.jpg",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chitiet.html"
    },
    {
        id: "6",
        name: "Mèo Cam Quái Xế Phiên Bản C",
        price: "500 usd/con",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../asserts/images/meo5.jpg",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chitiet.html"
    },
    {
        id: "7",
        name: "Mèo Xám Thích Ngủ",
        price: "500 usd/con",
        description: "Giống mèo thuần chủng đột biến màu sắc đến từ vùng băng giá Nam Cực.<br>Sở hữu kích thước nhỏ gọn giúp chúng lặn xuống lòng biển sâu săn tôm núi lửa. Do thích nghi khí hậu đặc biệt, cơ thể chúng hoàn toàn không cần đến lớp lông dày.",
        image: "../asserts/images/meo6.jpg",
        description1: "Chú mèo sở hữu bộ lông màu cam rất xinh đẹp, có niềm đam mê mãnh liệt với tốc độ và thích chạy xe máy lượn phố.",
        link: "chitiet.html"
    }
];
function createItem(obj)
{		
		
		const listProducts =document.getElementById("product-list");
		
		const item = document.createElement("div");
		item.className = "col-12 col-md-4 mb-4";
		
		item.className = "col item position-relative";

    

		const containerImage = document.createElement("div");
		containerImage.setAttribute("class","image");

		const img = document.createElement("img");
		img.setAttribute("src",obj.image);
		img.setAttribute("alt",obj.name);
        img.setAttribute("style","border-radius: 30px");
		

		containerImage.appendChild(img);

		const containerInfo = document.createElement("div")
		containerInfo.setAttribute("class","info card-body");

		const namepro = document.createElement("p");
		namepro.innerHTML=obj.name;

		const price = document.createElement("p");
		price.innerHTML =obj.price +"/con";

		const description = document.createElement("p");
		description.setAttribute("class","card-title");
		description.innerHTML=obj.description;
		
		const linkProduct = document.createElement("a");
		linkProduct.innerHTML="xem chi tiết";
		linkProduct.setAttribute("href",obj.link+"?id="+obj.id);
		linkProduct.setAttribute("class","btn btn-danger");

		containerInfo.appendChild(namepro);
		containerInfo.appendChild(price);
		containerInfo.appendChild(description);
		containerInfo.appendChild(linkProduct);

		item.appendChild(containerImage);
		item.appendChild(containerInfo);
		listProducts.appendChild(item);
       
       
}
   function loadAllProducts(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        createItem(objArray[i]); 
    }
}
