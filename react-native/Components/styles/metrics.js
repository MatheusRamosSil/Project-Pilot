import { Dimensions,PixelRatio } from "react-native";

const {width} = Dimensions.get('window');

const pathFigmaWidth = 360;

const px = (valuePX) =>{
    const widthPercent = (valuePX/pathFigmaWidth) * 100;
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent))/100
    );

    return screenPixel
}

export const metrics = {
    px,
}