import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './menu.css';

DetailMenu.propTypes = {
  onChoose: PropTypes.func
};

function DetailMenu({onChoose}) {
  const PracticeModes = 
    [{ title: '자리연습',
      href: '/practice-key' }, 
    { title: '단어연습',
      href: '/practice-word' },
    { title: '문장연습',
      href: '/practice-sentence' }, 
    { title: '스크립트 연습',
      href: '/practice-script/list' }];    
  const PracticeList = PracticeModes.map((menu,index) => 
    <Link id = 'detail' to = {menu.href} key = {index}>
      <li id='list'>{menu.title}</li>
    </Link>);

  const ScriptAttach = 
    [{ title: '스크립트 보기',
      href: '/show-script' }, 
    { title: '스크립트 등록',
      href: '/add-script' }]; 
  const ScriptList = ScriptAttach.map((menu,index) => 
    <Link id = 'detail' to = {menu.href} key = {index}>
      <li id='list'>{menu.title}</li>
    </Link>);

  return (
    <div style={DetailMenuStyle}
      onMouseEnter={onChoose}
      onMouseLeave={onChoose}>
      <div style={MenuWrapperStyle}>
        <ul id='detail-list'>{PracticeList}</ul>
        <ul id='detail-list'>{ScriptList}</ul>
      </div>
    </div>
  )
}

const DetailMenuStyle = {
  position: 'relative',
  width: '100%',
  background: '#FFFFFF',
  height: '175px',
  fontSize: '16px',
  fontWeight: '350',
  fontFamily: 'Noto Serif KR',
  borderBottom: '2px solid #eeeeee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#828282',
  zIndex: '9999',
}

const MenuWrapperStyle = {
  width : '40%', 
  justifyContent: 'space-around',
  display: 'flex',
}

export default React.memo(DetailMenu);