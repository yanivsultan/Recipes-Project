$("#findRecipeBTN").on("click", function () {
    let ingredient = $("#recipeInput").val()

    $.get(`/recipes/${ingredient}`, function (response) {
        const render = new Renderer()
        render.renderer(response)
    })
})

