import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>エラーページ</h1>
      <Link to="/">戻る</Link>
    </div>
  );
}
