$(function () {
    $(".change-devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        let newDevourState = {
            devoured: newDevour
        };
        //update data
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
        const name = $("#bu").val().trim();
        let newBurger = {
            name: name,
            devoured: 0
        } //check for valid input in order to post
        if (name) {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    location.reload();
                }
            );
        } else {
            alert('Enter a burger name please');
        }
        // name ? ($.ajax("/api/burgers", {
        //     type: "POST",
        //     data: newBurger
        // }).then(
        //     function () {
        //         console.log("created new burger");
        //         location.reload();
        //     }
        // )) : alert('Enter a burger name please');

    });

});