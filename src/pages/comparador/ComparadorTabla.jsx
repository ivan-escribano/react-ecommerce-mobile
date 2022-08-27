import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductAdd from "../home/components/ProductAdd";
import ProductWishBtn from "../home/components/ProductWishBtn";
const ComparadorTabla = () => {
  const { state } = useOutletContext();
  const { mobile1, mobile2 } = state;
  const { specification: spec1 } = mobile1;
  const { specification: spec2 } = mobile2;

  return (
    <div className="w-75 bg-light comparator-table">
      {/* MOBILE 1 */}
      <table class="table table-light text-left table-hover ">
        <thead className="text-left">
          <tr>
            <th scope="col">Especificaciones</th>
            <th scope="col" className="text-center">
              <img
                src={mobile1.img}
                alt=""
                className="w-25 img-table__comparator"
              />
            </th>
            <th scope="col" className="text-center">
              <img
                src={mobile2.img}
                alt=""
                className="w-25 img-table__comparator"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Nombre</th>
            <td>{mobile1.name} </td>
            <td>{mobile2.name} </td>
          </tr>
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
            <th scope="row">Sistema </th>
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
            <th scope="row">Acciones</th>
            <td>
              <div className="d-flex comparator-btn ">
                <ProductAdd product={mobile1} />
                <ProductWishBtn product={mobile1} />
              </div>
            </td>
            <td>
              <div className="d-flex comparator-btn">
                <ProductAdd product={mobile2} />
                <ProductWishBtn product={mobile2} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparadorTabla;
