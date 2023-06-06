const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerInfo = document.createElement("div");
  headerInfo.classList.add("header");

	const dateDiv = document.createElement("span");
	dateDiv.classList.add("date");
	dateDiv.textContent = `${tarih}`;
  headerInfo.append(dateDiv);
  
  const baslikDiv = document.createElement("h1");
	baslikDiv.textContent = `${baslik}`;
  headerInfo.append(baslikDiv);

  const yaziDiv = document.createElement("span");
	yaziDiv.classList.add("temp")
	yaziDiv.textContent = `${yazi}`;
  headerInfo.append(yaziDiv);

  return headerInfo;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  const headerSection = document.querySelector(secici);
  headerSection.appendChild(Header("Challenge5", Date(), "Güzel!"));
};

export { Header, headerEkleyici }
