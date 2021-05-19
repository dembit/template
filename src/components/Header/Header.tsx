import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { NavigationWithLine } from '../Common/Navigation/CustomMenuWithLine/NavigationWithLine'
import { Divider } from 'antd';
import LogoText from '../Common/Logo/LogoText/LogoText';
import LogoSvg from "./../../img/logo.svg"
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions';
import { getPost } from '../../Redux/reducers/reducerTollKitExample';




const HeaderStyle = styled.div`
  height: 80px;
  border-bottom: 1px solid #F2F2F7;
  display: grid;
  grid-template-columns: 1fr 318px;
  grid-template-rows: 1fr;
  

`




let menuArray = [
  {
    text: "menu1",
    path: "/"
  },
  {
    text: "menu2",
    path: "/menu2"
  },
  {
    text: "menu",
    path: "/menu3"
  },



]

type Props = {

}

let name = "Dima Kalin"

export const Header: FC<Props> = () => {

   const status = useAppSelector((state) => state.counterSlice.status)
   const list = useAppSelector((state) => state.counterSlice.list)
   const dispatch = useAppDispatch()


   useEffect(() => {
      dispatch(getPost())
   }, [])

  return (
    <HeaderStyle>
      <div>
        <NavigationWithLine showLine={true} menuArray={menuArray} />
        <Divider type="vertical" style={{ height: "30%" }} />   
      </div>
      <div>
        <LogoText avatar={{src: LogoSvg}} text={name}/>
      </div>
    </HeaderStyle>
  )
}



