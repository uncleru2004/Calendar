export default function Week({ monday, days }) {
  let str = [];
  for (let i = monday; i < monday + 7; i++) {
    let cell = String(i);
    if (i > days) cell = " ";
    if (i < 1) cell = " ";
    str.push(cell);
  }
  
  return (
    <tr>
      {str.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
}
