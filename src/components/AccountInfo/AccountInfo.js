import React from "react";
import { Status } from "../Status";
import { Account } from "../Account";
import { AccountWrapper, Patch } from "./styled";
import PatchImg from "../../images/patch.png";

const AccountInfo = () => {
    const PATCH_COUNT = 4;
    const patches = Array.from({ length: PATCH_COUNT }, (_, i) => (
        <Patch key={i} index={i} src={PatchImg} alt="cover" />
    ));
    return (
        <AccountWrapper>
            {patches}
            <Status />
            <Account />
        </AccountWrapper>
    );
};

export default AccountInfo;
