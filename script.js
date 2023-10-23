function toggleMode(){
    const html = document.documentElement
    //cria uma variavel html que vai buscar a tag html com o documentElement

    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    //     //se conter, usando o classList.remove remove ela
    // }else{
    //     html.classList.add('light')
    //     //se não tiver adiciona a classe light
    // }
    //classList se trata de um objeto onde irá existir algumas propiedades
    //usando a contains, verifica se contém
    //a lógica é(se na classlist do html conter a classe light faz algo)

    //OOOUU

    html.classList.toggle('light')
    //pegar a tag img, após isso substituir a imagem
    //se tiver light mode, adicionar a imagem light
    //senão manter a imagem
    const img = document.querySelector("#profile img")
    //"pesquisa pelo seletor"

    if(html.classList.contains('light')){
             img.setAttribute('src', './assets/avatar-light.png')
             //função que adiciona ou modifica uma atributo
    }else{
       img.setAttribute('src', './assets/avatar-eu.png')
    }
};