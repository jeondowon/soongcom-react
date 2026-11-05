import { scripts } from '../../data/practiceData';
import React, { useState }  from 'react';
import Title from '../../components/Title';
import {useEffect} from "react"
import { Link } from "react-router-dom";
import '../../sass/main.css';

function ShowScript() {
  const [practices, setPractices] = useState([]);

  function getList() {
    // 서버 대신 로컬 데이터 사용 (원본 배열이 바뀌지 않도록 복사 후 정렬)
    const scriptList = [...scripts];
    scriptList.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
    setPractices(scriptList);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="content">
      <Title title="스크립트 연습" />
      <form className="ListForm">
        <div className="TabSetting">
          <div className="NavyTab">
            <button className="NavyButton" type="button">
              탐색
            </button>
            <div className="Line"></div>
            <button className="NavyButton" type="button">
              인기
            </button>
          </div>
          <input
            className="SearchTab"
            type="text"
            placeholder="스크립트를 찾아보세요!"
          ></input>
        </div>
        <div className="ListBody">
          <ul className="ScriptList">
            {practices.map((practice, idx) => (
              <Link
                className="ScriptListItem"
                to={`/practice-script/id=${practice.id}`}
                key={`PRACTICE_LI_${idx}_${practice.date}`}
              >
                {practice.name}
              </Link>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default ShowScript;