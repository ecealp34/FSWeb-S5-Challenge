import axios from "axios"

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
	headline.classList.add("headline");
	headline.textContent = `${makale.anabaslik}`;
  card.append(headline);

  const authorDiv = document.createElement("div");
	authorDiv.classList.add("author");
  card.append(authorDiv);

  const imgContainer = document.createElement("div");
	imgContainer.classList.add("img-container");
  authorDiv.append(imgContainer);
  
  const imgDiv = document.createElement("img");
  imgDiv.setAttribute("src", `${makale.yazarFoto}`);
  imgContainer.append(imgDiv);
  
  const nameDiv = document.createElement("span");
	nameDiv.textContent = `${ makale.yazarAdi } tarafından` ;
  authorDiv.append(nameDiv);
  
card.addEventListener("click", () => {
  console.log(makale.anabaslik);
});
return card;
};



const cardEkleyici = (secici) => { 
  const articleExample = {"id": "d03affc6-b06e-4b4a-9909-3981c7cb8389",
                "anabaslik": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
                "yazarFoto": "https://picsum.photos/510",
                "yazarAdi": "MAX GOODBOYE" }

  axios
  .get("http://localhost:5001/api/makaleler")
  .then((response) => {
    console.log(response);
  for(let i in response.data.makaleler) {
    response.data.makaleler[i].map((article) => {
    document.querySelector(secici).appendChild(Card(article)) 
});
}})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    
  })
 
}
 
  

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

export { Card, cardEkleyici }
