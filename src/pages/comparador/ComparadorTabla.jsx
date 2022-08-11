import React from "react";
import { useLocation } from "react-router-dom";
const ComparadorTabla = () => {
  const { state } = useLocation();
  const { mobile1, mobile2 } = state;
  const { specification: spec1 } = mobile1;
  const { specification: spec2 } = mobile2;
  console.log(spec1, mobile2);
  return (
    <div className="w-75 bg-light comparator-table">
      {/* MOBILE 1 */}
      <table class="table table-light text-left table-hover ">
        <thead className="text-left">
          <tr>
            <th scope="col">Especificaciones</th>
            <th scope="col" className="text-center">
              <img src={mobile1.img} alt="" className="w-25" />
              <h5 className="my-3">{mobile1.name}</h5>
            </th>
            <th scope="col" className="text-center">
              <img src={mobile2.img} alt="" className="w-25" />
              <h5 className="my-3">{mobile2.name}</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Precio</th>
            <td>{mobile1.price} €</td>
            <td>{mobile2.price} €</td>
          </tr>
          <tr>
            <th scope="row">CPU</th>
            <td>{spec1.cpu}</td>
            <td>{spec2.cpu}</td>
          </tr>
          <tr>
            <th scope="row">Batería</th>
            <td>{spec1.battery}</td>
            <td>{spec2.battery}</td>
          </tr>
          <tr>
            <th scope="row">Sistema Operativo</th>
            <td>{spec1.OperatingSystem}</td>
            <td>{spec2.OperatingSystem}</td>
          </tr>
          <tr>
            <th scope="row">Dimensiones</th>
            <td>{spec1.dimensions}</td>
            <td>{spec2.dimensions}</td>
          </tr>
          <tr>
            <th scope="row">Cámara frontal</th>
            <td>{spec1.camera_f}</td>
            <td>{spec2.camera_f}</td>
          </tr>
          <tr>
            <th scope="row">Cámara trasera</th>
            <td>{spec1.camera_t}</td>
            <td>{spec2.camera_t}</td>
          </tr>
          <tr>
            <th scope="row">Pantalla</th>
            <td>{spec1.screen}</td>
            <td>{spec2.screen}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparadorTabla;
