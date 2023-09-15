var numberOfStoryButtons = document.querySelectorAll(".story").length;

for (var i = 0; i <numberOfStoryButtons; i++) {

    document.querySelectorAll(".story")[i].addEventListener("click", function() {

        var buttons = this.innerText;

        switch (buttons) {

            case "thunder":
                var thunder = new Audio ("Audio/thunder.mp3")
                thunder.play();
                break;

            case "rain":
                var rain = new Audio ("Audio/rain.mp3")
                rain.play();
                break;

            case "wind":
                var wind = new Audio ("Audio/wind.mp3")
                wind.play();
                break;

            case "cry":
                var cry = new Audio ("Audio/cry.mp3")
                cry.play();
                break;

                case "landslide":
                var landslide = new Audio ("Audio/landslide.mp3")
                landslide.play();
                break;

                case "endstorm":
                var endstorm = new Audio ("Audio/endstorm.mp3")
                endstorm.play();
                break;
            default:
               
        }

});
}
