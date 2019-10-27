
const render = new Renderer()


$("#findRecipeBTN").on("click", function () {
    let ingredient = $("#recipeInput").val()

    $.get(`/recipes/${ingredient}`, function (response) {
        render.renderer(response)
        // const source = $("#recipe-template").html()
        // const template = Handlebars.compile(source)
        // const newHTML = template({ response }) 
        // $("#container").append(newHTML)
    })
})