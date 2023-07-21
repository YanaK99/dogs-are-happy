import React from "react";
import { MainPage, PageWrapper } from "./styled";
import { Status } from "../../components/Status";
import { Account } from "../../components/Account";

const MyPage = () => (
    <div>
        <MainPage>
            <PageWrapper>
                <div>
                    <Status />
                    <Account />
                </div>
            </PageWrapper>
        </MainPage>
    </div>
);

export default MyPage;
