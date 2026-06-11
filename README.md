<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>GitHub 사용 시험 코치 노트</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header>
  <div class="wrap top">
    <div class="brand">GitHub 시험 코치 노트 <span class="badge">README 보강판</span></div>
    <nav>
      <a href="#roles">역할</a>
      <a href="#readme">README</a>
      <a href="#flow">흐름</a>
      <a href="#issue-pr">Issue/PR</a>
      <a href="#conflict">충돌</a>
      <a href="#templates">기록</a>
      <a href="#commands">명령어</a>
    </nav>
  </div>
</header>

<main class="wrap">
<section class="hero">
  <h1>GitHub 사용 시험 즉시 대응 자료</h1>
  <p>역할이 랜덤으로 배정되어도 바로 행동할 수 있게 만든 오픈북용 정리입니다. README 작성법을 더 자세히 보강했습니다.</p>
  <input id="search" class="search" oninput="filterCards()" placeholder="검색: README, PR, Issue, Reviewer, conflict, push rejected ...">
  <div class="quick">
    <a href="#readme-template">README 템플릿</a>
    <a href="#readme-check">README 점검</a>
    <a href="#branch-manager">Branch Manager</a>
    <a href="#issue-manager">Issue Manager</a>
    <a href="#pr-manager">PR Manager</a>
    <a href="#reviewer">Reviewer</a>
    <a href="#recorder">Recorder</a>
    <a href="#push-rejected">push 거절</a>
    <a href="#merge-conflict">충돌 해결</a>
  </div>
</section>

<section id="panic" data-key>
  <h2>0. 시험장에서 먼저 볼 것</h2>
  <div class="grid">
    <div class="card ok">
      <h3>작업 시작 전</h3>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>git checkout main
git pull origin main --no-rebase
git checkout -b docs/번호-작업내용</code></pre>
    </div>
    <div class="card warn">
      <h3>문제 생기면</h3>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>git status
git branch
git log --oneline --graph --all</code></pre>
    </div>
    <div class="card danger">
      <h3>충돌 났으면</h3>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code># 파일 직접 수정 후
git add .
git commit -m "resolve conflict"
git push origin main</code></pre>
    </div>
  </div>
</section>

<section id="readme" data-key>
  <h2>1. README 작성법</h2>
  <div class="card">
    <h3>README의 목적</h3>
    <p>README는 저장소 메인 화면에 자동으로 보이는 첫 문서입니다. 처음 보는 사람이 30초 안에 아래 3가지를 알 수 있어야 합니다.</p>
    <ol>
      <li>이 프로젝트는 무엇을 하는가?</li>
      <li>왜 만들었는가?</li>
      <li>어떻게 확인하거나 사용하는가?</li>
    </ol>
  </div>

  <div class="grid2">
    <div class="card">
      <h3>필수 항목</h3>
      <ul>
        <li>프로젝트 제목</li>
        <li>한 줄 소개</li>
        <li>소개 / 목적</li>
        <li>저장소 구조</li>
        <li>사용 방법 또는 확인 방법</li>
        <li>팀원 / 역할</li>
        <li>라이선스 또는 수업용 문구</li>
      </ul>
    </div>
    <div class="card">
      <h3>시험에서 README 담당이면</h3>
      <p>완벽한 문서보다, 처음 보는 사람이 저장소 목적과 협업 흐름을 이해하게 만드는 것이 우선입니다.</p>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>1. 제목과 한 줄 소개 작성
2. 팀원 표 작성
3. docs/, members/, weekly/ 설명
4. Git 협업 흐름 작성
5. 저장 후 commit/push/PR</code></pre>
    </div>
  </div>

  <div id="readme-template" class="card">
    <h3>복사해서 쓰는 README.md 템플릿</h3>
    <pre><button class="copy" onclick="copyBlock(this)">복사</button><code># OSS Git Mission - Team 1

&gt; 오픈소스SW및협업실무 수업에서 GitHub 협업을 연습하기 위한 팀 저장소입니다.

## 소개

이 저장소는 팀원들이 Git branch, commit, push, Pull Request, review, merge, conflict 해결 과정을 연습하기 위해 만들었습니다.

## 목차

- [소개](#소개)
- [팀원](#팀원)
- [저장소 구조](#저장소-구조)
- [Git 협업 흐름](#git-협업-흐름)
- [자주 쓰는 명령어](#자주-쓰는-명령어)
- [라이선스](#라이선스)

## 팀원

| 이름 | 역할 | GitHub ID |
|------|------|-----------|
| 이윤서 | Branch Manager | @yunseo134 |
| 팀원2 | Issue Manager | @github-id |
| 팀원3 | PR Manager | @github-id |
| 팀원4 | Reviewer | @github-id |
| 팀원5 | Recorder | @github-id |
| 팀원6 | Repository Owner | @github-id |

## 저장소 구조

```text
.
├── README.md
├── TEAM.md
├── CONTRIBUTING.md
├── docs/
│   ├── git-convention.md
│   ├── conflict-log.md
│   ├── error-log.md
│   └── command-note.md
├── members/
│   └── 팀원별 자기소개 파일
└── weekly/
    └── 주차별 미션 기록
```

## Git 협업 흐름

1. Issue를 만든다.
2. 작업 전 `main` branch를 최신화한다.
3. 개인 작업 branch를 만든다.
4. 파일을 수정하고 commit한다.
5. 작업 branch를 GitHub에 push한다.
6. Pull Request를 만든다.
7. 팀원의 review를 받는다.
8. 문제가 없으면 main branch에 merge한다.

## 자주 쓰는 명령어

```bash
git pull origin main --no-rebase
git checkout -b docs/번호-작업내용
git add .
git commit -m "docs: 작업 내용"
git push origin docs/번호-작업내용
```

## 충돌 해결 기록

충돌이 발생하면 `docs/conflict-log.md`에 발생 파일, 원인, 최종 결정, 사용 명령어를 기록합니다.

## 라이선스

이 저장소는 수업 실습용 저장소입니다.</code></pre>
  </div>

  <div id="readme-check" class="card warn">
    <h3>README 점검표</h3>
    <table>
      <tr><th>확인 항목</th><th>질문</th></tr>
      <tr><td>제목</td><td>저장소가 무슨 프로젝트인지 바로 보이는가?</td></tr>
      <tr><td>한 줄 소개</td><td>30초 안에 목적을 알 수 있는가?</td></tr>
      <tr><td>팀원</td><td>이름, 역할, GitHub ID가 표로 정리되어 있는가?</td></tr>
      <tr><td>저장소 구조</td><td>docs, members, weekly 폴더 의미가 적혀 있는가?</td></tr>
      <tr><td>협업 흐름</td><td>issue → branch → commit → push → PR → review → merge가 보이는가?</td></tr>
      <tr><td>명령어</td><td>따라 할 수 있는 명령어 예시가 있는가?</td></tr>
      <tr><td>최신성</td><td>실제 저장소 내용과 README 내용이 맞는가?</td></tr>
    </table>
  </div>
</section>

<section id="roles">
  <h2>2. 역할별 해야 할 일</h2>
  <div class="grid2">
    <div id="branch-manager" class="card" data-key>
      <h3>Branch Manager</h3>
      <p><b>한 줄:</b> main 직접 작업을 막고 브랜치 규칙을 확인.</p>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>git branch
git checkout main
git pull origin main --no-rebase
git checkout -b docs/3-readme-intro</code></pre>
      <p>시험 멘트: “main에 직접 작업하지 않도록 확인하고, 작업 전 main을 최신화한 뒤 개인 branch에서 작업하도록 하겠습니다.”</p>
    </div>
    <div id="issue-manager" class="card" data-key>
      <h3>Issue Manager</h3>
      <p><b>한 줄:</b> 작업을 Issue로 나누고 담당자 지정.</p>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>Issue 제목: docs/conflict-log.md 작성

## 작업 내용
충돌 발생 원인과 해결 과정을 기록합니다.

## 완료 기준
- 발생 파일 기록
- 충돌 원인 기록
- 사용 명령어 기록
- 최종 해결 방법 기록</code></pre>
    </div>
    <div id="pr-manager" class="card" data-key>
      <h3>PR Manager</h3>
      <p><b>한 줄:</b> PR 제목, 설명, Issue 연결, 대상 branch 확인.</p>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>제목: [#3] docs: add README intro

## 작업 내용
- README.md에 프로젝트 소개를 추가했습니다.

## 확인한 내용
- [ ] 개인 branch에서 작업했습니다.
- [ ] commit message를 의미 있게 작성했습니다.
- [ ] 관련 issue 번호를 연결했습니다.

Closes #3</code></pre>
    </div>
    <div id="reviewer" class="card" data-key>
      <h3>Reviewer</h3>
      <p><b>한 줄:</b> PR 변경 내용을 읽고 구체적인 comment 작성.</p>
      <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>README 첫 문장이 프로젝트 목적을 잘 설명합니다.
다만 처음 보는 사람이 따라 하기 쉽도록 사용 방법을 한 줄 추가하면 더 좋겠습니다.</code></pre>
    </div>
    <div id="recorder" class="card" data-key>
      <h3>Recorder</h3>
      <p><b>한 줄:</b> 오류, 충돌, 명령어, 해결 과정을 문서로 기록.</p>
      <p>git status 결과, 오류 메시지, 충돌 파일, 최종 결정, 사용 명령어를 기록합니다.</p>
    </div>
    <div class="card" data-key>
      <h3>팀장 / Repository Owner</h3>
      <p><b>한 줄:</b> 저장소와 전체 진행 상황 관리.</p>
      <p>저장소 생성, collaborator 초대, 기본 파일 생성, 역할별 진행 상황 조정을 담당합니다.</p>
    </div>
  </div>
</section>

<section id="flow" data-key>
  <h2>3. 기본 Git 작업 흐름</h2>
  <div class="card">
    <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>git checkout main
git pull origin main --no-rebase
git checkout -b docs/번호-작업내용

# 파일 수정

git status
git add .
git commit -m "docs: 작업 내용 설명"
git push origin docs/번호-작업내용</code></pre>
  </div>
</section>

<section id="issue-pr" data-key>
  <h2>4. Issue와 Pull Request</h2>
  <div class="grid2">
    <div class="card">
      <h3>Issue 분리 예시</h3>
      <table>
        <tr><th>Issue</th><th>브랜치</th><th>PR 제목</th></tr>
        <tr><td>#1 README 소개 추가</td><td>docs/1-readme-intro</td><td>[#1] docs: add README intro</td></tr>
        <tr><td>#5 명령어 노트 작성</td><td>docs/5-command-note</td><td>[#5] docs: add command note</td></tr>
        <tr><td>#6 충돌 기록 작성</td><td>docs/6-conflict-log</td><td>[#6] docs: add conflict log</td></tr>
      </table>
    </div>
    <div class="card">
      <h3>PR 만드는 순서</h3>
      <ol>
        <li>작업 브랜치 push</li>
        <li>GitHub 저장소 → Compare & pull request</li>
        <li>base: main / compare: 내 브랜치 확인</li>
        <li>제목, 작업 내용, Closes #번호 작성</li>
        <li>Create pull request</li>
        <li>review 후 Merge pull request</li>
      </ol>
    </div>
  </div>
</section>

<section id="conflict" data-key>
  <h2>5. 충돌 상황 대응</h2>
  <div id="push-rejected" class="card danger">
    <h3>push rejected</h3>
    <p><b>원인:</b> 원격 저장소가 내 로컬보다 최신입니다.</p>
    <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>git pull origin main --no-rebase
git push origin 현재브랜치</code></pre>
  </div>
  <div id="merge-conflict" class="card warn">
    <h3>일반 conflict</h3>
    <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
현재 branch 또는 main 쪽 내용
=======
병합하려는 branch 쪽 내용
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-branch

# 최종 내용만 남긴 뒤
git add .
git commit -m "resolve merge conflict"
git push origin main</code></pre>
  </div>
</section>

<section id="templates" data-key>
  <h2>6. 기록 양식</h2>
  <div class="card">
    <h3>docs/conflict-log.md</h3>
    <pre><button class="copy" onclick="copyBlock(this)">복사</button><code>## 충돌 1

### 발생 파일
branch-conflict.txt

### 충돌 원인
두 branch가 같은 파일의 같은 줄을 서로 다르게 수정했다.

### 최종 결정
브랜치는 협업을 더 안전하게 만들지만 충돌은 여전히 발생할 수 있다.

### 사용한 명령어
git status
git add branch-conflict.txt
git commit -m "resolve branch merge conflict"
git push origin main

### 배운 점
충돌은 Git이 자동으로 정답을 고르지 못하는 상황이며, 사람이 최종 내용을 결정해야 한다.</code></pre>
  </div>
</section>

<section id="commands" data-key>
  <h2>7. 명령어 치트시트</h2>
  <table>
    <tr><th>명령어</th><th>의미</th><th>언제 쓰나</th></tr>
    <tr><td><code>git clone &lt;주소&gt;</code></td><td>원격 저장소 가져오기</td><td>처음 시작</td></tr>
    <tr><td><code>git pull origin main --no-rebase</code></td><td>원격 main 최신화</td><td>작업 전, push 거절 후</td></tr>
    <tr><td><code>git checkout -b &lt;branch&gt;</code></td><td>새 브랜치 생성+이동</td><td>새 작업 시작</td></tr>
    <tr><td><code>git branch</code></td><td>현재 브랜치 확인</td><td>어디서 작업 중인지 확인</td></tr>
    <tr><td><code>git status</code></td><td>현재 상태 확인</td><td>문제 발생 시 제일 먼저</td></tr>
    <tr><td><code>git add .</code></td><td>변경 파일 stage</td><td>commit 전</td></tr>
    <tr><td><code>git commit -m "메시지"</code></td><td>변경 내용 기록</td><td>작업 단위 저장</td></tr>
    <tr><td><code>git push origin &lt;branch&gt;</code></td><td>브랜치 업로드</td><td>PR 만들기 전</td></tr>
    <tr><td><code>git merge &lt;branch&gt;</code></td><td>브랜치 병합</td><td>작업 내용을 합칠 때</td></tr>
    <tr><td><code>git merge --abort</code></td><td>merge 취소</td><td>충돌 전 상태로 되돌릴 때</td></tr>
    <tr><td><code>git rm &lt;파일&gt;</code></td><td>파일 삭제를 Git에 기록</td><td>삭제/수정 충돌 해결</td></tr>
  </table>
</section>

<footer>
  <p>정적 HTML 오픈북 자료입니다. 시험 중 AI 사용이 금지되어 있다면 이 페이지와 GitHub 문서만 참고하세요.</p>
</footer>
</main>
<script src="assets/script.js"></script>
</body>
</html>
