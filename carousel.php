<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="carousel.css">
    <title>HeroCarousel</title>
</head>
<body>
    <div class="carousel">
        <!-- double hyphen indicates its a modifier -->
        <button class="carousel__button carousel__button--left is-hidden">
            <!-- <img src="" alt=""> -->-
        </button>
        <div class="carousel__track-container">
            <ul class="carousel__track">
                <li class="carousel__slide current-slide">
                    <img class="carousel__image" src="images/da894a22-f60c-4ab3-ac42-0a615d886358[7595].JPG" alt="">
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="images/21d10acb-4873-45dc-9d6d-f15b207b9559[7587].JPG" alt="">
                </li>
                <li class="carousel__slide">
                    <img class="carousel__image" src="images/IMG_0028[7525] - Copy.JPG" alt="">
                </li>
            </ul>
        </div>
        <button class="carousel__button carousel__button--right">+</button>
    <div class="carousel__nav">
        <button class="carousel__indicator current-slide"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
    </div>
    </div>
    <script src="carousel.js"></script>
</body>
</html> 