const source = $("#recipe-template").html()
const template = Handlebars.compile(source)



class Renderer{

    constructor(){}

    domTraversalCheck(){
        $(".recipeThumbnail").on("click",function(){
            let print = $(this).siblings(".recipeIngredients").text().split(",")[0]
            console.log(print)
        })
    }

    renderer (data){
        $("#container").empty()

        const newHTML = template({ data }) 
        $("#container").append(newHTML)
        
        this.domTraversalCheck()
    }
}





