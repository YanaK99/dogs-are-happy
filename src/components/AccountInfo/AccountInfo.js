import React from "react";
import { Status } from "../Status";
import { Account } from "../Account";
import { AccountWrapper, Patch } from "./styled";
import PatchImg from "../../images/patch.png";

const AccountInfo = () => {
    return (
        <AccountWrapper>
            <Patch index={0} src={PatchImg} alt="cover" />
            <Patch index={1} src={PatchImg} alt="cover" />
            <Patch index={2} src={PatchImg} alt="cover" />
            <Patch index={3} src={PatchImg} alt="cover" />
            <Status />
            <Account />
        </AccountWrapper>
    );
};

export default AccountInfo;
