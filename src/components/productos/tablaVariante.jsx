export default function TablaVariante(){
    return(
        <table className="border-separate border-spacing-2 w-[100%]">
        <thead>
          <tr>
            {/* Encabezados de la tabla */}
            {['Modelo', 'Voltage <br/> (V)', 'Frecuencia <br/>(Hz)', 'Corriente <br/>(A)', 'Potencia <br/>(W)', 'Velocidad de <br/>rotación (r/min)', 'Velocidad <br/>del aire <br/>(m/s)', 'Flujo de <br/>aire (m³/h)', 'Ruido <br/>(dB)', 'Distancia de <br/> suministro de <br/> aire (m)'].map((col, index) => (
              <th className="bg-[#ed6c00] text-black p-3 py-2 text-xl rounded-sm" key={index} style={{ width: '10%' }}>
                <p dangerouslySetInnerHTML={{__html: col}}></p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
    {/* Fila 1 - color crema */}
    <tr className="bg-[#ffffff]">
      {['HDB-200', '220/380', '50/60', '8/4.6', '1100', '300', '6', '70000', '≤45', '≤24'].map((cell, index) => (
        <td key={index} className="text-center text-lg font-bold p-1">
          {cell}
        </td>
      ))}
    </tr>

    {/* Fila 2 - color naranja */}
    <tr className="bg-[#f8c499]">
      {['HDB-150', '220/380', '50/60', '5.9/3.4', '750', '390', '6.1', '40000', '≤45', '≤24'].map((cell, index) => (
        <td key={index} className="text-center text-lg font-bold p-1">
          {cell}
        </td>
      ))}
    </tr>

    {/* Fila 3 - color crema */}
    <tr className="bg-[#ffffff]">
      {['HDB-120', '220/380', '50/60', '3.4/2', '550', '450', '6.3', '26000', '≤45', '≤20'].map((cell, index) => (
        <td key={index} className="text-center text-lg font-bold p-1">
          {cell}
        </td>
      ))}
    </tr>

    {/* Fila 4 - color naranja */}
    <tr className="bg-[#f8c499]">
      {['HDB-90', '220/380', '50/60', '2.8/1.6', '370', '630', '6.8', '16000', '≤45', '≤20'].map((cell, index) => (
        <td key={index} className="text-center text-lg font-bold p-1">
          {cell}
        </td>
      ))}
    </tr>
  </tbody>
      </table>
      
    )
}