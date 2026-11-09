# 보그쌤의 리액트 — 실습 소스

교재 **「보그쌤의 리액트」** 의 장·절별 실습 완성 소스다. 교재를 따라 하다 막히면 해당 폴더의 코드와 내 코드를 비교해 본다.

## 기준 버전

| 항목 | 버전 |
| --- | --- |
| Node.js | 24.x LTS |
| React | 19.x |
| Vite | 7.x |
| React Router | 7.x |
| Supabase JS | 2.x |

## 폴더 구조

```
ch1/ ~ ch7/                       장별 폴더
  <장>_<절>_<순번>_<실습이름>/      절별 실습 (예: ch3/3_6_1_props)
```

- 예: `ch1/1_4_1_tasko` = 1장 4절의 첫 번째 실습.
- 각 폴더는 그 단계까지 완성된 상태로 **혼자서 실행되는 프로젝트**다.
- 교재 각 절 끝의 `> 실습 소스:` 줄에 적힌 `ch3/3_6_1_props` 같은 부분이 이 안의 폴더를 가리킨다.

> 교재에서 실습하는 `react-study` 폴더와 섞이지 않도록, 이 소스는 다른 곳에 둔다.

## 실행 방법

**React(Vite) 프로젝트** — `package.json`이 있는 폴더(1·3·4·5·6·7장):

```bash
cd ch3/3_6_1_props   # 실행할 폴더로 이동
npm install          # 처음 한 번만 (node_modules 설치)
npm run dev          # 개발 서버 실행 → 브라우저에서 http://localhost:5173
```

끝낼 때는 터미널에서 `Ctrl+C`를 누른다.

**JavaScript 문법 실습** — 2장(`.js` 파일만 있음):

```bash
cd ch2/2_1_1_task-class
node task-class.js
```

## 주의

- `node_modules/`, `dist/`는 들어 있지 않다. 처음 실행할 때 `npm install`이 꼭 필요하다.
- 6장은 외부 서비스 없이 `npm install` → `npm run dev`만으로 실행된다.
- 7장의 Supabase 주소·키는 들어 있지 않다. `.env.example`을 복사해 `.env.local`을 만들고 **자기 프로젝트의 값**을 넣는다(교재 7장 참고).
