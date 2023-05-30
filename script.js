function toggleMode() {
    const html = document.documentElement
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    }

    //pegar a tag img 
    const img= document.querySelector("#profile img")

    //substituir img
    if(html.classList.contains('light')){
        //se tiver light mode, add a img light
    img.setAttribute("src", "./avatar_1.png")
    }else{
        //se tiver sem light mode, manter img normal
    img.setAttribute("src", "./avatar_2.png")
    }

    
}