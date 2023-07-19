import React from 'react'
import './Aside.css'
import {Link} from 'react-router-dom'
function Aside() {
    const bgText1 = `url(./svg/download-c.svg)`;
    const style1 = { backgroundImage: bgText1};
    const bgText2 = `url(./svg/documentation-c.svg)`;
    const style2 = { backgroundImage: bgText2};
    const bgText3 = `url(./svg/play-c.svg)`;
    const style3 = { backgroundImage: bgText3};
    const bgText4 = `url(./svg/forum-c.svg)`;
    const style4 = { backgroundImage: bgText4};
  return (
<aside class="aside">
        <div class="section_content">
            <div>
                <Link to="/download/">
                    <figure style={style1}></figure>
                    <p><strong>다운로드</strong></p>
                    <p>모든 Apple 플랫폼을 위한 최신 SDK 및 베타 운영 체제를 다운로드하세요.</p>
                    <p><span>리소스 다운로드하기(영문)</span></p>
                </Link>
            </div>
            <div>
                <Link to="/documentation/">
                    <figure style={style2}></figure>
                    <p><strong>문서</strong></p>
                    <p>API 참조, 자료 및 샘플 코드를 비롯하여 최신 문서를 찾아보세요.</p>
                    <p><span>문서 읽기(영문)</span></p>
                </Link>
            </div>
            <div>
                <Link to="/play/">
                    <figure style={style3}></figure>
                    <p><strong>비디오</strong></p>
                    <p>Apple Developer 이벤트에서 소개된 최신 기술을 알아보세요.</p>
                    <p><span>비디오 보기(일부 한국어 자막)</span></p>
                </Link>
            </div>
            <div>
                <Link to="/forum/">
                    <figure style={style4}></figure>
                    <p><strong>포럼</strong></p>
                    <p>Apple 엔지니어 및 다른 개발자에게 개발에 관해 질문하고 이야기를 나눌 수 있습니다.</p>
                    <p><span>포럼 방문(영문)</span></p>
                </Link>
            </div>
        </div>
    </aside>
  )
}

export default Aside