import { useState, useEffect } from "react";

export default function CustomHook(URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}