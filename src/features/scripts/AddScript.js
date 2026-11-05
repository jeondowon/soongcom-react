import React, { useState } from 'react';
import Title from '../../components/Title';
import { Link } from "react-router-dom";
import '../../sass/main.css';
import { scripts } from '../../data/practiceData';

function AddScript() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleTitleChange = ({target: {value}}) => setTitle(value)
  const handleContentsChange = ({target: {value}}) => setContents(value)
  const handleSubmit = () => {
    registerScript();
  }

  function registerScript() {
    // 서버 대신 로컬 글 목록 배열에 추가 (새로고침하면 사라짐)
    if (title.length === 0 || contents.length === 0) return;
    scripts.push({
      id: scripts.length + 1,
      name: title,
      content: contents,
    });
  }

  var now = 'unfinish';
  if(contents.length > 0 && title.length > 0) {
    now = 'finish'
  }

  return (
    <div className="content">
      <Title title = '스크립트 등록'/>
      <form id='script-add-form'>
        <p>
          <input id="script-title-form"
            autoComplete="off"
            type="text" 
            name="title"
            placeholder="제목을 입력하세요. (최대 50자)"
            maxLength="50"
            value={title}
            onChange={handleTitleChange}
          />
        </p>

        <p>
          <textarea 
            className="notes"
            autoComplete="off"
            type="text"
            name="content"
            placeholder="내용을 입력하세요. (최대 3000자)"
            maxLength="3000"
            value={contents}
            onChange={handleContentsChange}
          />
        </p>
        <p>
          
          <Link  to ='/show-script' onClick={handleSubmit}>
            {
              {
                unfinish : <button type="submit" id='script-offbutton-form' disabled>등록</button>,
                finish : <button type="submit" id='script-onbutton-form'>등록</button>
              }[now]
            }
          </Link>
        </p>
      </form>
      
    </div>
  );
}

export default AddScript;