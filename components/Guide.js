import React from "react";

const Guide = ({ guide }) => {
  return (
    <table className="w-full">
      <tbody>
        <tr className="text-accent font-semibold pb-3 border-b border-grey-lighter h-10">
          <th className="text-left">Pointure</th>
          <th className="text-center">Longueur de la semelle</th>
          <th className="text-right">Âge à choisir</th>
        </tr>
        {guide.map((item, index) => (
          <tr
            className="border-b border-grey-lighter h-10 last:border-none"
            key={`tableline-${index}`}
          >
            <td>{item.pointure}</td>
            <td className="text-center">{item.longueur}</td>
            <td className="text-right">{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Guide;
