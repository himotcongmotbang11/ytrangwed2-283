const Products=[
    {
		id:"1",
    name:"con meo mau 333gi do",
    price:"500 usd/con",
    description:"com meof này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo.png",
	description1:"con meo nay rat la ngau",
    link:"chitiet.html"
    },
    {
		id:"2",
    name:"con meo mau gi do",
    price:"500 usd/con",
    description:"này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo1.png",
	description1:"con meo nay co mau cam va rất là xinh đẹp và thích chạy xe máy",
    link:"chitiet.html"
    },
	{
	id:"3",
    name:"meo",
    price:"500 usd/con",
    description:"fwjhfjfhiosdfjiciodhvusyvsduifydufyuifyhefuyhe com meof này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo2.jpg",
	description1:"con meo sieu nay va dẹp, co nguon gốc từ nề van minh dưới nước ",
    link:"chitiet.html"
	},
	{
	id:"4",
    name:"tên meo like",
    price:"500 usd/con",
    description:"fwjhfjfhiosdfjiciodhvusyvsduifydufyuifyhefuyhe com meof này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo2.jpg",
	description1:"con meu nay co sơ thích giơ ngón cái để thể hiện sự yêu thích của mình"+"<br>gia 10000 usd<br>",
    link:"chitiet.html"
	},
	{
	id:"2",
    name:"con meo mau gi do",
    price:"500 usd/con",
    description:"này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo1.png",
	description1:"con meo nay co mau cam va rất là xinh đẹp và thích chạy xe máy",
    link:"chitiet.html"
    },
    {
    id:"2",
    name:"con meo mau gi do",
    price:"500 usd/con",
    description:"này là giống mèo thuần chủng đến từ nam cực,<br> để thuận lợi cho việc sinh tồn gióng mèo này đã tiến hóa cơ thể của với ký cỡ nhỏ nhắn nhằm săn bắt tôm<br> núi lửa nằm sâu dưới đáy đại dương,vì thời tiết khắc nghiệt giống meok này đã thoái hóa hoàn toàn bộ lông<br> của chúng",
    image:"../asserts/images/meo1.png",
	description1:"con meo nay co mau cam va rất là xinh đẹp và thích chạy xe máy",
    link:"chitiet.html"
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
