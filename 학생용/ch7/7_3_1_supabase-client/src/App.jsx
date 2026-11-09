// src/App.jsx — 7.3절: Supabase 연결 확인용(7.4절에서 전체 교체)
import { useEffect } from "react";
import { supabaseClient } from "./lib/supabaseClient.js";

function App() {
  useEffect(() => {
    supabaseClient
      .from("tasks")
      .select("*")
      .then(({ data, error }) => {
        console.log("data:", data); // 성공하면 tasks 테이블의 행 배열
        console.log("error:", error); // 성공하면 null
      });
  }, []);

  return <h1>Tasko</h1>;
}
export default App;
