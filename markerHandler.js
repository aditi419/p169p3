AFRAME.registerComponent("markerHandler", {
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is Found");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            console.log("Marker is Lost");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var rateButton = document.getElementById("order-summary-button");

        orderButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Thanks for Ordering",
                text: "Your order will be complete soon"
            });
        });

        rateButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in Progress"
            });
        });
    },

    handleMarkerLost(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
})