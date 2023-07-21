import {
    InfoContent,
    InfoContainer,
    PhotoContainer,
    PhotoImage,
    PersonalInfo,
    PatchImageBox,
    PawsImage,
} from "./styled";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 */
function Account() {
    return (
        <div>
            <PatchImageBox>
                <div />
                <div />
                <div />
                <div />
            </PatchImageBox>
            <InfoContainer>
                <InfoContent>
                    <PhotoContainer>
                        <PhotoImage alt="cover" />
                        <span>online</span>
                    </PhotoContainer>
                    <PersonalInfo>
                        <PawsImage />
                        <span>NAME : Goldy</span>
                        <span>SEX : male</span>
                        <span>AGE : 32 dogs year</span>
                        <span>HOBBY : bark, catch birds</span>
                        <span>FAVOURITE DISHES : fish, poop</span>
                        <span>CHARACTER TRAITS : good boy</span>
                    </PersonalInfo>
                </InfoContent>
            </InfoContainer>
        </div>
    );
}

export default Account;
