$(function () {
    $(".change-devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        let newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            name: $("#bu").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );

    });
});