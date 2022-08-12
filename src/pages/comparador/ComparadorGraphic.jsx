// import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const ComparadorGraphic = () => {
  const { state } = useOutletContext();
  const { mobile1, mobile2 } = state;
  const { opinion: op1 } = mobile1;
  const { opinion: op2 } = mobile2;
  const data = [
    {
      subject: "Diseño/Pantalla",
      A: op1.design,
      B: op2.design,
      fullMark: 10,
    },
    {
      subject: "Potencia/Hardaware",
      A: op1.hardware,
      B: op2.hardware,
      fullMark: 10,
    },
    {
      subject: "Cámara",
      A: op1.camara,
      B: op2.camara,
      fullMark: 10,
    },
    {
      subject: "Conectividad",
      A: op1.conectivity,
      B: op2.conectivity,
      fullMark: 10,
    },
    {
      subject: "Batería",
      A: op1.battery,
      B: op2.battery,
      fullMark: 10,
    },
  ];
  return (
    <>
      <div className="bg-light comparator-puntuation">
        <h5 className="d-flex">
          Puntuación de los móviles <i class="mx-2 fa-solid fa-medal"></i> :
        </h5>
        <RadarChart outerRadius={180} width={500} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar
            name={mobile1.name}
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name={mobile2.name}
            dataKey="B"
            stroke="#82ca9d"
            fill="#b8e0c7"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </>
  );
};

export default ComparadorGraphic;
