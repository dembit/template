import React from 'react';
import styled from "styled-components"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Header } from './components/Header/Header';
import { MenuLeft } from './components/MenuLefft/MenuLeft';
import { Sidebar } from './components/SideBar/Sidebar';
import { Content } from './components/Content/Content';


const AppDivStyle = styled.div`
    display: grid;
    grid-template-areas: "menu header header" "menu content sidebar";
    width: 100%;
    height: 100%;
    grid-template-columns: 80px 1fr 318px;
    grid-template-rows: 82px 1fr;

`
const HeaderSectionStyle = styled.section`
  grid-area: header;

`
const MenuLeftSectionStyle = styled.section`
  grid-area: menu;
`
const ContentSectionStyle = styled.section`
  grid-area: content;
`

const SidebarSectionStyle = styled.section`
  grid-area: sidebar;
`

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <AppDivStyle >
          <HeaderSectionStyle >
            <Header />
          </HeaderSectionStyle>
          <MenuLeftSectionStyle>
            <MenuLeft />
          </MenuLeftSectionStyle>
          <ContentSectionStyle>
            <Route path='/' component={Content} />
          </ContentSectionStyle>
          <SidebarSectionStyle>
            <Sidebar />
          </SidebarSectionStyle>
        </AppDivStyle>
      </Switch>
    </BrowserRouter>
  );
}




export default App;
