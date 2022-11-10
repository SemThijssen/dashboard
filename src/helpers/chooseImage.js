
import disneycastleImage from "../img/pexels-benjamin-suter-2362002.jpg";
import pinnochioImage from "../img/pinnochio.jpeg";
import WaltandMickeyImage from"../img/pexels-david-guerrero-8183995.jpg";
import WaltStarImage from"../img/pexels-ekaterina-belinskaya-4700140.jpg";
function chooseImage(inputFromPopup){
    let toBeAddedImage;
switch(inputFromPopup){
    case("Pinnochio"):
    toBeAddedImage = pinnochioImage;
    break;
    case("Disney Kasteel"):
    toBeAddedImage = disneycastleImage;
    break;
    case("Walt en Mickey"):
    toBeAddedImage = WaltandMickeyImage;
    break;
    default:
    toBeAddedImage = WaltStarImage;
    break;
  }
  return toBeAddedImage
}

export default chooseImage;