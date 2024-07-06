import React, { useEffect, useState } from "react";

const ReporteEntradas = ({ data }) => {
  const [reporteMensual, setReporteMensual] = useState([]);
  const [totalGeneral, setTotalGeneral] = useState(0);

  useEffect(() => {
    const calcularReporte = () => {
      if (!data || !Array.isArray(data)) return;

      const agrupadoPorMes = data.reduce((acc, entrada) => {
        const fecha = typeof entrada.fecha === "string" ? entrada.fecha : "";
        const mes = fecha.slice(0, 7); // Obtener año y mes (YYYY-MM)
        if (!acc[mes]) {
          acc[mes] = { totalMensual: 0, entradas: [] };
        }
        acc[mes].totalMensual += parseFloat(entrada.monto);
        acc[mes].entradas.push(entrada);
        return acc;
      }, {});

      const reporte = Object.keys(agrupadoPorMes).map((mes) => ({
        mes,
        totalMensual: agrupadoPorMes[mes].totalMensual,
        entradas: agrupadoPorMes[mes].entradas,
      }));

      const total = data.reduce(
        (sum, entrada) => sum + parseFloat(entrada.monto),
        0,
      );

      setReporteMensual(reporte);
      setTotalGeneral(total);
    };

    if (data && data.length > 0) {
      calcularReporte();
    }
  }, [data]);

  return (
    <div>
      <h2>Reporte de Entradas Mensuales</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Total Mensual</th>
          </tr>
        </thead>
        <tbody>
          {reporteMensual.map((reporte) => (
            <tr key={reporte.mes}>
              <td>{reporte.mes}</td>
              <td>{reporte.totalMensual}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total General: {totalGeneral}</h2>
    </div>
  );
};

export default ReporteEntradas;
