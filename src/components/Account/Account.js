import {
    InfoContainer,
    PhotoContainer,
    PhotoImage,
    PersonalInfo,
    PawsImage,
} from "./styled";
import PawsImg from "../../images/paw.png";
import AvatarImg from "../../images/Avatar.jpg";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 */
function Account() {
    return (
        <div>
            <InfoContainer>
                <PhotoContainer>
                    <PhotoImage src={AvatarImg} alt="cover" />
                    <span>online</span>
                </PhotoContainer>
                <PersonalInfo>
                    <PawsImage src={PawsImg} />
                    <span>NAME : Goldy</span>
                    <span>SEX : male</span>
                    <span>AGE : 32 dogs year</span>
                    <span>HOBBY : bark, catch birds</span>
                    <span>FAVOURITE DISHES : fish, poop</span>
                    <span>CHARACTER TRAITS : good boy</span>
                </PersonalInfo>
            </InfoContainer>
        </div>
    );
}

export default Account;
