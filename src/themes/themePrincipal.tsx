import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const responsiveSize ={
    wp: widthPercentageToDP,
    hp: heightPercentageToDP,
    fz: RFPercentage
}

export const colors ={
    black: '#1E293B'
}