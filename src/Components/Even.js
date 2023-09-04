import React, { useEffect } from "react";

function Even() {
  useEffect( () => {
    return () => {
      console.log("Even 컴포넌트 업데이트");
    }
  },[]);

  return (
    <div>현재 카운트는 짝수입니다.</div>
  )
}

export default Even;