class Renderer{

    constructor(){}

    renderer (data){
        const source = $("#recipe-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ data }) 
        $("#container").append(newHTML)
    }
}






