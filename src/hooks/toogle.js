import React, { useState } from "react";

export default function toogle(active = false) {
  const [isActive, setIsActive] = useState(active);
  console.log({active});
  return [isActive,setIsActive]
}
