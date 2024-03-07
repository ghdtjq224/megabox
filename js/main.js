let currentMovieIndex = 0;
const totalMovies = document.querySelectorAll('.move-gnb li').length;
const movieList = document.querySelector('.move-gnb ul');

function changeMovie(direction) {
  currentMovieIndex += direction;

  if (currentMovieIndex < 0) {
    currentMovieIndex = totalMovies - 1;
  } else if (currentMovieIndex >= totalMovies) {
    currentMovieIndex = 0;
  }

  updateMovieList();
}

function updateMovieList() {
  const moveAmount = -currentMovieIndex * (110 / totalMovies);
  movieList.style.transform = `translateX(${moveAmount}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
  let currentBackgroundIndex = 0;
  const backgroundImages = [
    {
      image: 'url(img/abouttime2.jpg)',
      number: '01',
      name: '어바웃 타임',
      genre: '멜로, 로맨스',
      times: ['15:00', '17:30', '19:40', '23:00'],
    },
    {
      image: 'url(img/서울봄.jpg)',
      number: '02',
      name: '서울의 봄',
      genre: '드라마',
      times: ['14:00', '16:30', '19:40', '만석'],
    },
    {
      image: 'url(img/너와100번째사랑yoyo.jpg)',
      number: '03',
      name: '너와 100번째 사랑',
      genre: '멜로, 로맨스',
      times: ['11:00', '13:30', '16:00', '20:00'],
    },
    {
      image: 'url(img/윙카.jpg)',
      number: '04',
      name: '웡카',
      genre: '판타지',
      times: ['만석', '13:00', '15:50', '19:20'],
    },
    {
      image: 'url(img/1917yo.jpg)',
      number: '05',
      name: '1917',
      genre: '드라마',
      times: ['12:30', '15:00', '17:50', '21:00'],
    },
    {
      image: 'url(img/aladdin1.jpg)',
      number: '06',
      name: '알라딘',
      genre: '모험',
      times: ['11:30', '만석', '17:50', '20:00'],
    },
    {
      image: 'url(img/배트맨.jpg)',
      number: '07',
      name: '다크나이트',
      genre: '액션',
      times: ['14:50', '16:00', '만석', '만석'],
    },
    {
      image: 'url(img/테넷yo.jpg)',
      number: '08',
      name: '테넷',
      genre: '액션, SF',
      times: ['10:00', '15:00', '18:30', '19:50'],
    },
    {
      image: 'url(img/show.jpg)',
      number: '09',
      name: '위대한 쇼맨',
      genre: '드라마',
      times: ['15:20', '만석', '19:00', '21:10'],
    },
    {
      image: 'url(img/주토피아.jpg)',
      number: '10',
      name: '주토피아',
      genre: '애니메이션',
      times: ['11:10', '13:00', '15:40', '18:50'],
    },
  ];

  function changeBackground(direction) {
    currentBackgroundIndex += direction;

    if (currentBackgroundIndex < 0) {
      currentBackgroundIndex = backgroundImages.length - 1;
    } else if (currentBackgroundIndex >= backgroundImages.length) {
      currentBackgroundIndex = 0;
    }

    updateBackground();
  }

  function updateBackground() {
    const moveSection = document.querySelector('.move');

    try {
      moveSection.style.backgroundImage = backgroundImages[currentBackgroundIndex].image;
      updateMovieInfo();
    } catch (error) {
      console.error('Error updating background:', error.message);
    }
  }

  function updateMovieInfo() {
    const moveNumber = document.querySelector('.move-name li.number');
    const imageNumber = document.querySelector('.image-number');
    const moveName = document.querySelector('.move-name li:nth-child(2)');
    const moveGenre = document.querySelector('.move-explanation li:nth-child(3)');
    const moveTime = document.querySelectorAll('.move-time li');

    const currentMovie = backgroundImages[currentBackgroundIndex];

    moveNumber.textContent = currentMovie.number;
    //    imageNumber.textContent = currentMovie.number;
    moveName.textContent = currentMovie.name;
    moveGenre.textContent = currentMovie.genre;

    for (let i = 0; i < moveTime.length; i++) {
      moveTime[i].textContent = currentMovie.times[i];
    }
  }

  // 이벤트 리스너 함수명 변경
  function handleLeftButtonClick() {
    changeBackground(-1);
  }

  function handleRightButtonClick() {
    changeBackground(1);
  }

  // 버튼에 이벤트 리스너 추가
  const leftButton = document.querySelector('.arrow-left');
  const rightButton = document.querySelector('.arrow-right');

  leftButton.addEventListener('click', handleLeftButtonClick);
  rightButton.addEventListener('click', handleRightButtonClick);

  // 페이지 로드시 초기화
  updateBackground();
});

// 새로운 코드
const moreButton = document.querySelector('.move-tiket li:nth-child(2)');
const newContentArea = document.querySelector('.new-content-area');
const moveName = document.querySelector('.move-name');
const moveGnb = document.querySelector('.move-gnb');
const moveButtons = document.querySelector('.arrow-buttons');

moreButton.addEventListener('click', function () {
  newContentArea.classList.toggle('visible');
  moveGnb.classList.toggle('visible');
  moveName.classList.add('move-out-left', 'number-hidden');
  moveGnb.classList.add('move-out-right');

  const moveSchedule = document.querySelector('#move-schedule');
  moveSchedule.style.transform = 'translateX(-130%)';

  setTimeout(() => {
    moveName.classList.add('move-out-up');
  }, 1500);

  moveButtons.classList.add('move-out-left');

  setTimeout(() => {
    moveButtons.style.opacity = 0;
  }, 500);
});

function toggleSearchBox() {
  const searchBox = document.getElementById('search-box');
  searchBox.classList.toggle('visible');
}

function search() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  //영화 데이터
  const movies = [
    { name: '어바웃 타임', image: 'url(img/abouttime2.jpg)' },
    { name: '서울의 봄', image: 'url(img/서울봄.jpg)' },
    {
      name: '너와 100번째 사랑',
      image: 'url(img/너와 100번째 사랑.jpg)',
    },
    { name: '웡카', image: 'url(img/윙카.jpg)' },
    { name: '1917', image: 'url(img/1917yo.jpg)' },
    { name: '알라딘', image: 'url(img/aladdin1.jpg)' },
    { name: '다크나이트', image: 'url(img/배트맨.jpg)' },
    { name: '트루먼 쇼', image: 'url(img/트루먼쇼.jpg)' },
    { name: '위대한 쇼맨', image: 'url(img/show.jpg)' },
    { name: '주토피아', image: 'url(img/주토피아.jpg)' },
    // 필요한 만큼 영화를 추가
  ];

  const foundMovie = movies.find((movie) => movie.name.toLowerCase() === searchTerm);

  if (foundMovie) {
    console.log(`영화 "${foundMovie.name}"를 찾았습니다.`);
    handleFoundMovie(foundMovie);
  } else {
    alert(`"${searchTerm}"에 해당하는 영화를 찾지 못했습니다.`);
  }
}

let currentStarringIndex = 0;
const totalStarring = document.querySelectorAll('.move-starring li').length;
const moveStarringList = document.querySelector('.move-starring');

function changeStarring(direction) {
  currentStarringIndex += direction;

  if (currentStarringIndex < 0) {
    currentStarringIndex = totalStarring - 1;
  } else if (currentStarringIndex >= totalStarring) {
    currentStarringIndex = 0;
  }

  updateStarringList();
}

// 더보기 > actor
function updateStarringList() {
  currentStarringIndex = (currentStarringIndex + totalStarring) % totalStarring;
  const moveAmount = -currentStarringIndex * (100 / totalStarring);
  moveStarringList.style.transform = `translateX(${moveAmount}%)`;
}

// 페이지 로드시 초기화
updateStarringList();

function updateMovieDetails(movieIndex) {
  const newContentArea = document.querySelector('.new-content-area');
  const movieDescriptions = [
    {
      // 어바웃 타임
      genre: '멜로/로맨스, 코미디',
      country: '영국',
      runtime: '123',
      language: '영어',
      distributor: '유니버설 픽처스',
      actorOne: 'img/도널 글리슨.jpeg',
      actorTwo: 'img/레이첼 맥아담스.jpeg',
      actorThree: 'img/빌 나이.jpeg',
      actorFour: 'img/Lindsay Duncan.jpg',
      story:
        '모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다. 바로 시간을되돌릴 수 있는 능력이 있다는 것! 그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만,여자친구는 만들어 줄 순 있으리.. 꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에반하게 된다. 그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀. 어설픈 대시, 어색한 웃음은리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이! 꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다. 하지만 그와그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고, 예상치 못한 사건들이 여기저기나타나기 시작하는데… 어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?',
      videoOne: 'video/about time2.mp4',
    },
    {
      // 서울의 봄
      genre: '드라마',
      country: '대한민국',
      runtime: '141',
      language: '한국어',
      distributor: '플러스엠 엔터테인먼트',
      actorOne: 'img/황정민.jpg',
      nameOne: '황정민',
      actorTwo: 'img/정우성.jpg',
      nameTow: '정우성',
      actorThree: 'img/이성민.jpg',
      nameThree: '이성민',
      actorFour: 'img/박해준.jpg',
      nameFour: '박해준',
      story:
        '1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 서울로 불러들인다. 권력에 눈이 먼 전두광의 반란군과 이에 맞선 수도경비사령관 이태신을 비롯한 진압군 사이, 일촉즉발의 9시간이 흘러가는데… 목숨을 건 두 세력의 팽팽한 대립 오늘 밤, 대한민국 수도에서 가장 치열한 전쟁이 펼쳐진다!',
      videoOne: 'video/seoul.mp4',
    },
    {
      // 너와 100번째 사랑
      genre: '드라마, 멜로/로맨스',
      country: '일본',
      runtime: '116',
      language: '일본어',
      distributor: '(주)디스테이션',
      actorOne: 'img/사카구치 켄타로.jpg',
      nameOne: '사카구치 켄타로',
      actorTwo: 'img/미와.jpg',
      nameTow: '미와',
      actorThree: 'img/류세이 료.jpg',
      nameThree: '류세이 료',
      actorFour: 'img/이즈미사와 유키.jpg',
      nameFour: '이즈미사와 유키',
      story:
        '‘리쿠’는 시간을 되돌릴 수 있는 ‘인생 레코드’로 인해 타임리프 능력을 가지게 된다. 첫사랑 소녀인 ‘아오이’가 웃는 것을 보기 위해 사용했던 ‘인생 레코드’. 하지만 이제 그녀의 슬픈 운명을 바꾸기 위한 시간 여행을 시작한다.졸다가 잠에서 깼는데, 지나간 하루가 똑같이 반복된다. 그리고 오랫동안 짝사랑한 소꿉친구가 시간을 돌릴 수 있다는 말과 함께, 처음부터 좋아했다고 고백한다. 혼란스럽지만 행복한 시간, 하지만 시곗바늘은 정해진 미래로 또다시 움직인다.',
      videoOne: 'video/100th love with you.mp4',
    },
    {
      // 웡카
      genre: '판타지, 드라마',
      country: '미국',
      runtime: '116',
      language: '영어',
      distributor: '워너 브라더스',
      actorOne: 'img/티모시 샬라메.jpg',
      nameOne: '티모시 샬라메',
      actorTwo: 'img/올리비아 콜맨.jpg',
      nameTow: '올리비아 콜맨',
      actorThree: 'img/휴 그랜트.jpg',
      nameThree: '휴 그랜트',
      actorFour: 'img/샐리 호킨스.jpg',
      nameFour: '샐리 호킨스',
      story:
        '세상에서 가장 달콤한 여정 좋은 일은 모두 꿈에서부터 시작된다! 마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의 초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈 12소버린 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데…',
      videoOne: 'video/wonka.mp4',
    },
    {
      // 1917
      genre: '드라마, 전쟁',
      country: '미국',
      runtime: '119',
      language: '영어',
      distributor: '(주)스마일이엔티',
      actorOne: 'img/조지 맥케이.jpg',
      nameOne: '조지 맥케이',
      actorTwo: 'img/딘 찰스채프먼.jpg',
      nameTow: '딘 찰스채프먼',
      actorThree: 'img/콜린 퍼스.jpg',
      nameThree: '콜린 퍼스',
      actorFour: 'img/베네딕트 컴버배치.jpg',
      nameFour: '베네딕트 컴버배치',
      story:
        '제1차 세계대전이 한창인 1917년. 독일군에 의해 모든 통신망이 파괴된 상황 속에서 영국군 병사 스코필드(조지 맥케이)와 블레이크(딘-찰스 채프먼)에게 하나의 미션이 주어졌다. 함정에 빠진 영국군 부대의 수장 매켄지 중령(베네딕트 컴버배치)에게 에린무어 장군(콜린 퍼스)의 공격 중지 명령을 전하는 것! 둘은 1600명의 아군과 블레이크의 형(리차드 매든)을 구하기 위해 전쟁터 한복판을 가로지르며 사투를 이어가는데...',
      videoOne: 'video/1917.mp4',
    },
    {
      // 알라딘
      genre: '모험, 판타지, 뮤지컬',
      country: '미국',
      runtime: '128',
      language: '미국',
      distributor: '월트디즈니',
      actorOne: 'img/메나 마수드.jpg',
      nameOne: '메나 마수드',
      actorTwo: 'img/윌 스미스.jpg',
      nameTow: '윌 스미스',
      actorThree: 'img/나오미 스콧.jpg',
      nameThree: '나오미 스콧',
      actorFour: 'img/마르완 켄자리.jpg',
      nameFour: '마르완 켄자리',
      story:
        '머나먼 사막 속 신비의 아그라바 왕국의 시대. 좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가 주인에게 세 가지 소원을 들어주는 지니를 만나게 되고, 자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…',
      videoOne: 'video/aladdin.mp4',
    },
    {
      // 다크나이트
      genre: '액션, 범죄, 미스터리',
      country: '미국',
      runtime: '152',
      language: '영어',
      distributor: '워너 브라더스',
      actorOne: 'img/크리스찬 베일.jpg',
      nameOne: '크리스찬 베일',
      actorTwo: 'img/히스 레저.jpg',
      nameTow: '히스 레저',
      actorThree: 'img/아론 에크하트.jpg',
      nameThree: '아론 에크하트',
      actorFour: 'img/마이클 케인.jpg',
      nameFour: '마이클 케인',
      story:
        '정의로운 지방 검사 ‘하비 덴트’, ‘짐 고든’ 반장과 함께 범죄 소탕 작전을 펼치며 범죄와 부패로 들끓는 고담시를 지켜나가는 ‘배트맨’ 그러던 어느 날, 살아남기 위해 발버둥치던 범죄 조직은 배트맨을 제거하기 위해 광기어린 악당 ‘조커’를 끌어들이고 정체를 알 수 없는 조커의 등장에 고담시 전체가 깊은 혼돈 속으로 빠져든다. 급기야 배트맨을 향한 강한 집착을 드러낸 조커는 그가 시민들 앞에 정체를 밝힐 때까지 매일 새로운 사람들을 죽이겠다 선포하고 배트맨은 사상 최악의 악당 조커를 막기 위해 자신의 모든 것을 내던진 마지막 대결을 준비한다.',
      videoOne: 'video/dark knight.mp4',
    },
    {
      // 테넷
      genre: '액션, SF',
      country: '영국, 미국',
      runtime: '150',
      language: '영어',
      distributor: '워너 브라더스',
      actorOne: 'img/존 데이비드 워싱턴.jpg',
      nameOne: '존 데이비드 워싱턴',
      actorTwo: 'img/로버트 패틴슨.jpg',
      nameTow: '로버트 패틴슨',
      actorThree: 'img/엘리자베스 데비키.jpg',
      nameThree: '엘리자베스 데비키',
      actorFour: 'img/마이클 케인.jpg',
      nameFour: '마이클 케인',
      story:
        '시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르(케네스 브래너)를 막기 위해 투입된 작전의 주도자(존 데이비드 워싱턴). 인버전에 대한 정보를 가진 닐(로버트 패틴슨)과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣(엘리자베스 데비키)과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다!',
      videoOne: 'video/tenet.mp4',
    },
    {
      // 위대한 쇼맨
      genre: '드라마, 뮤지컬',
      country: '미국',
      runtime: '104',
      language: '영어',
      distributor: '이십세기폭스',
      actorOne: 'img/휴 잭맨.jpg',
      nameOne: '휴 잭맨',
      actorTwo: 'img/잭 에프론.jpg',
      nameTow: '잭 에프론',
      actorThree: 'img/미셸 윌리엄스.jpg',
      nameThree: '미셸 윌리엄스',
      actorFour: 'img/레베카 퍼거슨.jpg',
      nameFour: '레베카 퍼거슨',
      story:
        '쇼 비즈니스의 창시자이자, 꿈의 무대로 전세계를 매료시킨 남자 ‘바넘’의 이야기에서 영감을 받아 탄생한 오리지널 뮤지컬 영화 <위대한 쇼맨>. <레미제라블> 이후 다시 뮤지컬 영화로 돌아온 휴 잭맨부터 잭 에프론, 미셸 윌리엄스, 레베카 퍼거슨, 젠다야까지 할리우드 최고의 배우들이 합류해 환상적인 앙상블을 선보인다. 여기에 <미녀와 야수> 제작진과 <라라랜드> 작사팀의 합류로 더욱 풍성해진 비주얼과 스토리, 음악까지 선보일 <위대한 쇼맨>은 ‘우리는 누구나 특별하다’는 메시지로 관객들에게 재미는 물론, 감동까지 선사할 것이다. THIS IS ME! 우리는 누구나 특별하다!',
      videoOne: 'video/show.mp4',
    },
    {
      // 주토피아
      genre: '애니메이션, 모험, 코미디',
      country: '미국',
      runtime: '108',
      language: '미국',
      distributor: '월트 디즈니',
      actorOne: 'img/지니퍼 굿윈.jpg',
      nameOne: '지니퍼 굿윈',
      actorTwo: 'img/제이슨 베이트먼.jpg',
      nameTow: '제이슨 베이트먼',
      actorThree: 'img/샤키라.jpg',
      nameThree: '샤키라',
      actorFour: 'img/이드리스 엘바.jpg',
      nameFour: '이드리스 엘바',
      story:
        '누구나 살고 싶은 도시 1위, 주토피아 연쇄 실종 사건 발생! “미치도록 잡고 싶었다!” 교양 있고 세련된 라이프 스타일을 주도하는 도시 주토피아. 이 곳을 단숨에 혼란에 빠트린 연쇄 실종사건이 발생한다! 주토피아 최초의 토끼 경찰관 주디 홉스는 48시간 안에 사건 해결을 지시 받자 뻔뻔한 사기꾼 여우 닉 와일드에게 협동 수사를 제안하는데… 스릴 넘치는 추격전의 신세계가 열린다!',
      videoOne: 'video/zootopia.mp4',
    },
  ];

  const currentMovie = movieDescriptions[movieIndex];

  const updatedContent = `
  <ul id="movieDescription">
    <li>필름<span>IMAX 3D</span></li>
    <li>등급<span>15세 관람가</span></li>
    <li>장르<span>${currentMovie.genre}</span></li>
    <li>국가<span>${currentMovie.country}</span></li>
    <li>러닝타임<span class="time">${currentMovie.runtime}분</span></li>
    <li>언어<span>${currentMovie.language}</span></li>
    <li>배급<span>${currentMovie.distributor}</span></li>
  </ul>
  <ul class="move-starring">
            <li>
              <img src="${currentMovie.actorOne}" alt="Domhnall Gleeson" />
              <div class="star-name">${currentMovie.nameOne}</div>
            </li>
            <li>
              <img src="${currentMovie.actorTwo}" alt="Rachel Anne McAdams" />
              <div class="star-name">${currentMovie.nameTow}</div>
            </li>
            <li>
              <img src="${currentMovie.actorThree}" alt="Bill Nighy" />
              <div class="star-name">${currentMovie.nameThree}</div>
            </li>
            <li>
              <img src="${currentMovie.actorFour}" alt="린제이 던칸" />
              <div class="star-name">${currentMovie.nameFour}</div>
            </li>
          </ul>
    <!-- ... 배우 정보 업데이트 ... -->
  </div>
  <div class="story">
    <h3>Storyline</h3>
    <p>
      ${currentMovie.story}
    </p>
  </div>
  <div class="modal">
      <a href="#" class="btn" onclick="playVideo(${movieIndex})">watch video</a>
      <div class="video-container">
        <span class="close" onclick="closeVideo()">&#10006;</span>
        <video src="${currentMovie.videoOne}" muted playsinline controls></video>
      </div>
    </div>
  `;

  newContentArea.innerHTML = updatedContent;
}

// 예시: 더보기 버튼 클릭 시 설명 갱신
function playVideo() {
  const videoContainer = document.querySelector('.modal .video-container');
  videoContainer.classList.add('show');

  // 비디오 소스 업데이트
  const video = videoContainer.querySelector('video');
  video.src = currentMovie.videoOne;

  // 비디오 메타데이터 로드가 완료되면 자동으로 재생
  function playVideoHandler() {
    // 영상 재생
    video.play();

    // 이벤트 리스너 제거
    video.removeEventListener('loadedmetadata', playVideoHandler);
  }

  video.addEventListener('loadedmetadata', playVideoHandler, { once: true });
}

function closeVideo() {
  const videoContainer = document.querySelector('.modal .video-container');
  const video = videoContainer.querySelector('video');
  video.pause();
  video.currentTime = 0;
  videoContainer.classList.remove('show');
}

document.querySelector('.move-tiket li:nth-child(2)').addEventListener('click', function () {
  updateMovieDetails(currentMovieIndex);
  // 더보기 버튼 클릭 시는 갱신만 하고 동영상은 보이지 않도록 설정
});

const close = document.querySelector('.modal .close');
close.addEventListener('click', closeVideo);

// 더보기 > watch video 버튼 클릭 시 영상 재생
const btn = document.querySelector('.btn');
btn.addEventListener('click', playVideo);

close.addEventListener('click', closeVideo);
