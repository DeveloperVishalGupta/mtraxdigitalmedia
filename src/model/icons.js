// import At from '@/assets/Icons/at';
// import PhoneVolume from '@/assets/Icons/phone-volume';
// import RightToBracket from '@/assets/Icons/right-to-bracket';

import At from "@/assets/icons/at";
import IndianRupeeSign from "@/assets/icons/indian-rupee-sign";
import PhoneVolume from "@/assets/icons/phone-volume";
import RightToBracket from "@/assets/icons/right-to-bracket";



const Icons = class {
    static getComponent(value, resource) {
        switch (value) {

            case Icons.PHONEVOLUME:
                return <PhoneVolume resource={resource} />;
            case Icons.AT:
                return <At resource={resource} />;
            case Icons.RIGHTTOBRACKET:
                return <RightToBracket resource={resource} />;
            case Icons.INDIAN_RUPEE_SIGN:
                return <IndianRupeeSign resource={resource} />;

            default:
                return null;
        }
    }
};

Icons.PHONEVOLUME = 1;
Icons.AT = 2;
Icons.RIGHTTOBRACKET = 3;
Icons.INDIAN_RUPEE_SIGN = 4;

export default Icons;
