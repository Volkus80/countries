import type { FunctionComponent } from "react";
import { Header } from "./Header";
import { Wrapper } from "./Wrapper";
import { Outlet } from "react-router";

const Layout: FunctionComponent = () => {
    return <>
        <Header />
        <Wrapper>
            <Outlet />
        </Wrapper>
    </>
}