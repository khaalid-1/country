
countries()

let main=document.querySelector(".main")
async  function countries(){

    let api="https://restcountries.com/v3.1/all"
    let data = await fetch(api);
    let response= await data.json()
  
    response.forEach(items => {
        

        let country_name=items.name.common
        let country_img=items.flags.png
        
 

        let country_continents=items.region
        let country_population=items.population

        let card=document.createElement("div")

        card.classList.add("card")
        let img_part=document.createElement("div")

        img_part.classList.add("img-part")


        let img=document.createElement("img")
        img.src=country_img;
        img.classList.add("img")
        let info_party=document.createElement("div")

        info_party.classList.add("info-party")


        let region=document.createElement("p")
        let population=document.createElement("p")
        let cname=document.createElement("p")

        cname.innerText="country name :    "+country_name
        region.innerText="region :  "+country_continents
        population.innerText="population :  "+country_population



        img_part.append(img)
    
        info_party.append(cname)
        info_party.append(region)
        info_party.append(population)
        card.append(img_part)
        card.append(info_party)
        main.append(card)
         
    });
}

 