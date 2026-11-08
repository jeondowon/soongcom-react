import React from 'react';
import { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import DetailMenu from './DetailMenu';


function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [isChoosing, setIsChoosing] = useState(false);

  const handleMouseHover = useCallback(() => {
    setIsHovering((isHovering) => !isHovering);
  }, [])

  const handleMouseChoose = useCallback(() => {
    setIsChoosing((isChoosing) => !isChoosing);
  }, [])

  return (
    <div>
      <div style={HeaderStyle}>
        <Link to ='/' style={TitleStyle}>
          <b>한동타자연습</b>
        </Link>
        <div style={MenuStyle}
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover} >
          <div style={MenuItemStyle}>연습하기</div>
          <div style={MenuItemStyle}>스크립트</div>
        </div>
        <div style={AvatarStyle}>
          <img width='50px' height='50px' src='/handong.svg' alt='한동대학교 로고' style={LogoStyle} />
        </div>
      </div>
      {(isHovering || isChoosing) && <DetailMenu onChoose={handleMouseChoose}/>}
    </div>
  )
}

const HeaderStyle = {
  width: '100%',
  overflow: 'hidden',
  background: '#1F3A68',
  height: '100px',
  fontSize: '25px',
  fontWeight: '400',
  fontFamily: 'Helvetica Neue',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'space-around',
  display: 'flex',
}

const TitleStyle = {
  position: 'absolute',
  color: 'white',
  fontSize: '2rem',
  left: '80px',
  textDecoration: 'none',
}

const MenuStyle = {
  width: '40%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const MenuItemStyle = {
  flex: 1,
  color: 'white',
  fontWeight: '700',
  fontSize: '20px',
  textAlign: 'center',
}

const AvatarStyle = {
  position: 'absolute',
  right: '60px',
}

// 네이비 헤더에서 로고 테두리가 잘 보이도록 흰 원 배경을 넣음
const LogoStyle = {
  background: 'white',
  borderRadius: '50%',
  padding: '3px',
}

export default Header;