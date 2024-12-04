"use client";
import info from "./info.json";
import { useState } from "react";
import Image from "next/image";

export default function Producto({params}){

    const parametro = params;
    let ne = info.filter((e) => e.id == parametro.id)
    const e = ne[0];

    const [ pestaña, setPestaña ] = useState(0);
    const [ imagen, setImagen ] = useState(e.img[0]);

    const mostrarPestaña = (e)=> {
        if(e === 0){
            setPestaña(0);
        } else if(e === 1) {
            setPestaña(1);
        } else if(e === 2){
            setPestaña(2);
        }
    }
    const mostrarImagen = (ev)=>{
        setImagen(e.img[ev])
    }




    const enlace = e.titulo.toUpperCase();

    return(
        <div className="mt-20 mb-20">
            <div className="flex lg:space-x-7">
                    <div className="lg:w-[13%] h-[60vh] overflow-auto flex flex-col items-end pr-10 justify-start space-y-4 scrollable-div" >
                    {
                        e.img.map((e,index) => (
                            
                            <Image onClick={()=> mostrarImagen(index)}  key={index} src={e} width={90} height={90} alt="" className="relative top-1 cursor-pointer hover:translate-y-[-3px] hover:border transition w-[100px] h-[100px] " />
                        ))
                    }
                </div>
                <div className="lg:w-[33%] h-[66%] my-auto relative  flex justify-center items-center">
                    
                    <Image className="w-full h-full " src={imagen} width={2000} height={2000} alt="producto" />
                    
                </div>
                <div className="lg:w-[46%]">
                    <p className="font-semibold text-neutral-400 roboto">EQUIPOS /  {enlace} {e.serie}</p>
                    <h3 className="text-4xl font-semibold text-[#1d4674] mt-5 mb-4 roboto border-b-4 border-neutral-400 pb-3 w-fit">{e.titulo}</h3>
                    <button className={` ${e.titulo === "Ventilador de Techo Comercial" ? "bg-[#f0c50b]" : "bg-[#fe7604]"} py-2 mb-10 px-12 rounded-md roboto lg:text-xl font-semibold text-white mt-3`} >Enviar consulta</button>
                    <p className="text-xl helvetica text-justify" style={{lineHeight: 1.8}} dangerouslySetInnerHTML={{__html: e.descripcion1}} />
                    {e.rango != "no" && <p className="w-full mt-8 text-xl helvetica text-justify"><strong>Rango de diámetro del ventilador:</strong> <br /><span dangerouslySetInnerHTML={{__html: e.rango}}></span></p>}
                    {e.gama != "no" && <p className="mt-8 text-xl helvetica"><strong>Gama de motores PMSM:</strong> <span dangerouslySetInnerHTML={{__html: e.gama}}></span></p>}
                </div>
            </div>
            <div className=" p-3 w-[90%] mx-auto mt-20">
                <div className="flex space-x-2">
                    <button onClick={()=> mostrarPestaña(0)} className={`open border-2 p-4 px-6 text-xl font-semibold hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 0 ? " text-black" : "text-neutral-400"}`}>Descripción</button>
                    <button onClick={()=> mostrarPestaña(1)} className={`open border-2 p-4 px-6 text-xl font-semibold hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 1 ? " text-black" : "text-neutral-400" }`}>Especificación Técnica</button>
                    <button onClick={()=> mostrarPestaña(2) } className={`open border-2 p-4 px-6 font-semibold text-xl hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 2 ? " text-black" : "text-neutral-400"}`}>Manual Técnico</button>
                </div>
                
                
                <div className="border-2 p-10">
                {
                    pestaña === 0 &&    
                        e.descripcion2.map((ev,index) => (
                            <p key={index} className="text-xl text-justify px-7 helvetica" style={{lineHeight: 1.9}} dangerouslySetInnerHTML={{ __html: ev }} />
                        ))
                }
                {
                    pestaña === 1 &&
                    <div className="flex flex-col lg:flex-row">
                        
                    <table className="border-separate border-spacing-2 w-[60%]">
                    {
                        e.titulo !== "Recubrimiento Superior Solar" ?
                        
                        <thead>
                        <tr className="">
                        {
                            // Iteramos sobre la primera fila del JSON (encabezados)
                            e.especificacion[0].map((ev, index) => (
                                <th 
                                className={`bg-[#1d4674] text-white p-2 py-4 text-xl rounded-sm`} 
                                style={{width: `${ev.num}1%`}} 
                                key={index}
                                colSpan={ev.num > 1 ? ev.num : 1} // Si 'num' es mayor a 1, usamos colspan
                                >
                                {ev.text}
                            </th>
                            ))
                        }
                        </tr>
                    </thead>
                    :
                    <thead className="border-separate border-spacing-2">
                        <tr className="">
                        {
                            // Iteramos sobre la primera fila del JSON (encabezados)
                            e.especificacion[0].map((ev, index) => (
                                <th 
                                className={`bg-[#1d4674] text-white p-2 py-4 text-xl rounded-sm`} 
                                style={{width: `${ev.num}1%`}} 
                                key={index}
                                colSpan={ev.num > 1 ? ev.num : 1} // Si 'num' es mayor a 1, usamos colspan
                                dangerouslySetInnerHTML={{__html: ev.text}}>
                                
                            </th>
                            ))
                        }
                        </tr>
                    </thead>    
                    }
                    {
                        e.id === "8" ?
                        <tbody>
                            {
      e.especificacion.slice(1).map((row, rowIndex) => (
        <tr key={rowIndex}>
          {
            row.map((cell, index) => {
              const colspan = cell.num > 1 ? cell.num : 1;

              // Definimos el color para las celdas alternas
              const isEvenIndex = index % 2 === 0; // Si el índice es par
              const isLastRow = rowIndex === e.especificacion.length - 2; // Verifica si es la última fila

              return (
                <td 
                  className={`text-center text-lg rounded-sm font-bold p-3 ${isLastRow ? 'bg-[#eb5347] text-white' : isEvenIndex ? 'bg-[#e6e6d4]' : 'bg-[#f0a84d]'}`} 
                  style={{width: `${cell.num}1%`}} 
                  key={index}
                  colSpan={colspan}
                >
                  {cell.text}
                </td>
              );
            })
          }
        </tr>
      ))
    }
                        </tbody>
                        :

                    <tbody>
                        {
                            e.especificacion.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                            {
                                row.map((cell, index) => {
                                    const colspan = cell.num > 1 ? cell.num : 1;
                                    // Determinamos el estilo para la primera celda de cada fila y las demás
                                    const isFirstCell = index === 0; // Es la primera celda
                                    const isFirstCellInRow = rowIndex >= 1; // A partir de la segunda fila

                                    return (
                                        <td 
                                        className={`rounded-sm px-3 py-4 text-lg font-bold
                                            ${isFirstCellInRow ? '' : ''} 
                                        ${isFirstCell ? 'bg-[#eb5347] text-white' : 'bg-[#e6e6d4] text-center'}`} 
                                        style={{width: `${cell.num}1%`}} 
                                        key={index}
                                        colSpan={colspan}
                                        >
                                    {cell.text}
                                    </td>
                                );
                                })
                            }
                            </tr>
                        ))
                        }
                    </tbody>
                    }
                    
                  </table>
                    <div className="ml-20 flex flex-col justify-center">
                        <p className="font-bold text-lg">{e.espePuntos[0]}</p>
                        <ul>
                        {
                            e.espePuntos[1].map((e,index)=> (
                                <li className="list-disc italic text-lg ml-5 mt-1 helvetica" key={index}>{e}</li>
                            ))
                        }
                        </ul>
                    </div>
                  </div>
                }
                {
                    pestaña === 2 &&
                    <div className="flex space-x-12 justify-center items-center">
                        <div className="flex flex-col space-y-5">
                            <input type="text" placeholder="Nombre *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <input type="text" placeholder="Email *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <input type="text" placeholder="Teléfono" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <textarea placeholder="Mensaje *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white resize-none h-28"/>
                            </div>
                        <div>
                            <p className="font-semibold text-2xl open">Solicita el Manual</p>
                            <button className="py-3 w-full rounded-md mt-3 text-white bg-[#fe7604]">Enviar</button>
                        </div>
                    </div>
                }
                    
                </div>
                    
                    
            </div>
            <div className="flex justify-evenly  mt-28 pb-52 px-28">
                <div className={`absolute z-0 mt-[8%] w-[80%] h-[460px] ${e.titulo === "Ventilador de Techo Comercial" ? "bg-[#f0c50b] h-[400px] mt-[-3%]" : "bg-[#fe7604]"} rounded-md`}></div>
                <Image src={e.img2[0]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4 
                    ${e.titulo === "Ventilador de Techo Comercial" ? "bg-[#f0c50b] hover:border-[#f0c50b]" : "bg-[#fe7604] hover:border-[#fe7604]"}`}/>
                <Image src={e.img2[1]} width={530} height={530} alt=""  className={`absolute z-20 mt-20 border-4 hover:cursor-pointer ${e.titulo === "Ventilador de Techo Comercial" ? "border-[#f0c50b]" : "border-[#fe7604] "}
                     `} style={{animationDuration: "10s"}} />
                <Image src={e.img2[2]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer relative bottom-10 hover:border-4 hover:border-[#fe7604]
                    ${e.titulo === "Ventilador de Techo Comercial" ? "bg-[#f0c50b] hover:border-[#f0c50b]" : "bg-[#fe7604] hover:border-[#fe7604]"}`}/>

            </div>
        </div>
    )
}