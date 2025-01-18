import At from "@/assets/icons/at";
import IndianRupeeSign from "@/assets/icons/indian-rupee-sign";
import PhoneVolume from "@/assets/icons/phone-volume";
import RightToBracket from "@/assets/icons/right-to-bracket";
import { UserIcon } from "@/assets/icons/userIcon";



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
            case Icons.USER_Icon:
                return <UserIcon resource={resource} />;

            default:
                return null;
        }
    }
};

Icons.PHONEVOLUME = 1;
Icons.AT = 2;
Icons.RIGHTTOBRACKET = 3;
Icons.INDIAN_RUPEE_SIGN = 4;
Icons.USER_Icon = 5;

export default Icons;
