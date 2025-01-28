import React, { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: ""
  });
  const [daysDifference, setDaysDifference] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { startDate, endDate } = formData;

    if (new Date(endDate) < new Date(startDate)) {
      alert("La fecha de fin no puede ser anterior a la fecha de inicio.");
      return;
    }

    // Calcular la diferencia de días
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffInTime = end - start; // Diferencia en milisegundos
    const diffInDays = diffInTime / (1000 * 60 * 60 * 24); // Convertir a días

    setDaysDifference(diffInDays); // Actualizar el estado con la diferencia en días

    // alert(`El número de días entre las fechas es: ${diffInDays}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Ingresa fecha de inicio y retorno de viaje
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="startDate">
              Fecha Inicio
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="endDate">
              Fecha Fin
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Calcular días
          </button>
        </form>

        {daysDifference !== null && (
          <div
            className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50"
          >
            <p className="text-center">
              <strong>Días totales:</strong> {daysDifference} días
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicForm;
