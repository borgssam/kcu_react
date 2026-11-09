// src/App.jsx
import { useState } from "react";

const PRIORITIES = [
  { value: "high", label: "긴급" },
  { value: "normal", label: "보통" },
  { value: "low", label: "낮음" },
];

const TAGS = ["공부", "운동", "생활"];

function PrioritySelect() {
  const [priority, setPriority] = useState("normal");

  return (
    <div>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        {PRIORITIES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
      <p>선택한 우선순위 값: {priority}</p>
    </div>
  );
}

function TagSelect() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const values = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setSelectedTags(values);
  };

  return (
    <div>
      <select multiple value={selectedTags} onChange={handleChange}>
        {TAGS.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <p>선택한 태그: {selectedTags.join(", ")}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>우선순위 선택 (하나만)</h2>
      <PrioritySelect />
      <h2>태그 선택 (여러 개)</h2>
      <TagSelect />
    </div>
  );
}
export default App;
