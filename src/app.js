const ul = document.getElementById("ulLista") 


class KenzieApi {

  static Api (){
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
    .then(res => res.json())
    
    .then(res  => {
      Card.Percorrer(res)})     
  }
}

class Card {

  static Percorrer(arr){
       
    
    for(let i = 0; i < arr.length ; i++){
      const liSolo = document.createElement("li")

      const li = document.createElement("li")
      li.className="ListaBox"
      
      const img = document.createElement("img")
      const ptag = document.createElement("p")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const fonte = document.createElement("p")



      img.src=arr[i].imagem
      img.className="imagemCard"
      h3.innerText=arr[i].titulo
      h3.className="tituloCard"
      p.innerText=arr[i].resumo
      p.className="paragrafoCard"
      ptag.innerText=arr[i].categoria
      ptag.className="tagCard"
      fonte.innerText=arr[i].fonte
      fonte.className="fonteCard"

      li.append(img,ptag,h3,p,fonte)
      
      ul.append(li)



       }
  }

}
KenzieApi.Api()