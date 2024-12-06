"use client";
import info from "./info.json";
import { useState } from "react";
import Image from "next/image";
import TablaVariante from "@/components/productos/tablaVariante";

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
                    <p className="font-semibold text-neutral-400 roboto">EQUIPOS /  {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" || e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" ? "ENFRIADOR EVAPORATIVO INDUSTRIAL" : enlace
                        } {e.serie}</p>
                    <h3 className="text-4xl font-semibold text-[#1d4674] mt-5 mb-4 roboto border-b-4 border-neutral-400 pb-3 w-fit" dangerouslySetInnerHTML={{__html: e.titulo}}></h3>
                    <button className={`py-2 mb-8 px-12 rounded-md roboto lg:text-xl font-semibold  mt-3
                        ${e.titulo === "Ventilador de Techo Industrial" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Ventilador de Techo Comercial" && "bg-[#f0c50b] text-white"}
                        ${e.titulo === "Ventilador Móvil Industrial" && "bg-[#ff3131] text-white"} 
                        ${e.titulo === "Ventilador Móvil de 45° Industrial" && "bg-[#f0c50b] text-white"}
                        ${e.titulo === "Ventilador de Pared" && "bg-[#1d4674] text-white"}
                        ${e.titulo === "Ventilador Comercial Vertical" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Ventilador Industrial Vertical" && "bg-[#e6e6d4] text-[#090d12]"}
                        ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" && "bg-[#fe7604] text-white"}`} 
                        >Enviar consulta</button>
                    <p className="text-xl helvetica text-justify" style={{lineHeight: 1.8}} dangerouslySetInnerHTML={{__html: e.descripcion1}} />
                    {e.rango != "no" && <p className="w-full mt-8 text-xl helvetica text-justify"><strong>Rango de diámetro del ventilador:</strong> <br /><span dangerouslySetInnerHTML={{__html: e.rango}}></span></p>}
                    {e.gama != "no" && <p className="mt-8 text-xl helvetica"><strong>Gama de motores PMSM:</strong> <span dangerouslySetInnerHTML={{__html: e.gama}}></span></p>}
                    {e.caracteristicas != "no" && <p className="mt-8 text-xl helvetica"><strong>Características: </strong> <span dangerouslySetInnerHTML={{__html: e.caracteristicas}}></span></p>}
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
                    <>
                        {e.descripcion2.map((ev,index) => (
                            <p key={index} className={`text-xl text-justify px-7 helvetica
                                ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" && "hidden" }
                                `} style={{lineHeight: 1.9}} dangerouslySetInnerHTML={{ __html: ev }} />
                        ))}
                        {
                            e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" &&
                            <div className="flex">
                                <ul style={{lineHeight: 1.9}} className="list-disc text-xl text-justify px-10 helvetica italic ml-20 mt-7 w-[45%]" >
                                    <li>De fácil instalación y mantenimiento.</li>
                                    <li>Permite una colocación fija o móvil con o sin manga de distribución del aire.</li>
                                    <li>Material de alta tecnología, acero galvanizado con aluminio y un revestimiento principalmente hecho en magnesio.</li>
                                </ul>
                                <ul style={{lineHeight: 1.9}} className="list-disc text-xl text-justify px-0 helvetica italic ml-20 mt-7 w-[45%]" >
                                <li>Elevada resistencia a la corrosión puede ser instalado en cualquier ambiente.</li>
                                <li>Los tres paneles evaporativos pueden ser removidos fácilmente para su mantenimiento.</li>
                                <li>Equipado con un tanque de agua de gran capacidad 335 Litros. </li>
                            </ul>
                            </div>
                        }
                        {
                            e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" &&
                            <div className="flex">   
                                <div className="w-[70%]">
                                    {e.descripcion2.map((ev,index) => (
                                        <p key={index} className="text-xl text-justify px-7 helvetica" style={{lineHeight: 1.9}} dangerouslySetInnerHTML={{ __html: ev }} />
                                    ))}
                                </div>
                                <div>
                                    <Image src="/productos/11/12.jpg" className="mt-7" width={400} height={300} alt="" />
                                </div>
                            </div>
                        }
                    </>    
                }
                {
                    pestaña === 1 &&
                    <div className="flex flex-col lg:flex-row">
                        {
                            e.titulo === "Ventilador de Pared" ?
                                <TablaVariante/>
                            :                        
                            <>
                                {
                                    e.titulo === "Ventilador Industrial Vertical" || e.titulo === "Ventilador Comercial Vertical"  ?
                                            
                                    <table class="border-separate border-spacing-2 w-[90%] border-b-2 border-red-400">
                                    <thead>
                                      <tr>
                                            <th className="bg-[#ed6c00] p-2">MODELO</th>
                                            <th className="bg-[#ed6c00] p-2">ESPECIFICACIONES <br/> (m/ft)</th>
                                            <th className="bg-[#ed6c00] p-2">Ød <br/>(mm)</th>
                                            <th className="bg-[#ed6c00] p-2">ØD  <br/>(mm)</th>
                                            <th className="bg-[#ed6c00] p-2">h <br/>(m)</th>
                                            <th className="bg-[#ed6c00] p-2">H <br/>(m)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center ">
                                      
                                      <tr>
                                        <td class=" p-3 text-center" rowspan="3">HDS/L</td>
                                        <td class=" flex space-x-1 justify-around">
                                            <p className=" p-4">3-3.7m</p>
                                            <p className=" p-4">10-12ft</p>
                                        </td>
                                            <td class=" p-3">80</td>
                                        <td class=" p-3">114</td>
                                        <td class=" p-3">3</td>
                                        <td class=" p-3">3.5</td>
                                      </tr>
                                      <tr className="">
                                        <td class=" flex space-x-1 justify-around border-b-2 border-red-400">
                                            <p className="bg-[#f8c499] w-full p-4">4.3-5m</p>
                                            <p className="bg-[#f8c499] w-full p-4">14-16ft</p>
                                        </td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">114</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">140</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">3</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">4</td>
                                      </tr>
                                      <tr>
                                        <td class=" flex space-x-1 justify-around">
                                            <p className=" p-4">6.1-7.3m</p>
                                            <p className=" p-4">20-24ft</p>
                                        </td>
                                        <td class=" p-3">160</td>
                                        <td class=" p-3">220</td>
                                        <td class=" p-3">6</td>
                                        <td class=" p-3">7</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  
                                    :

                                
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
                        e.id === "" ?
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
                  className={`text-center text-lg rounded-sm font-bold p-3 ${isLastRow ? 'bg-[#eb5347] text-white' : isEvenIndex ? 'bg-[#e6e6d4]' : 'bg-[#f0a84d]'}
                  ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && "bg-none"}
                  
                  `} 
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
                  }
                  </>
                        }
                    {
                        e.titulo != "Ventilador de Pared" && e.titulo != "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && e.titulo != "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" &&
                        <div className="ml-20 flex flex-col justify-center">
                            <p className="font-bold text-lg italic">{e.espePuntos[0]}</p>
                            <ul>
                            {
                                e.espePuntos[1].map((e,index)=> (
                                    <li className="list-disc italic text-lg ml-5 mt-1 helvetica" key={index} dangerouslySetInnerHTML={{__html:e}} ></li>
                                ))
                            }
                            </ul>
                        </div>
                    }
                    {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L"  &&
                        <div className="w-[70%]">
                            <Image src="/productos/10/12.jpg" width={700} height={600} alt="" className="mt-10 ml-10" />
                        </div>
                    }
                    {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY"  &&
                        <div className="w-[70%]">
                            <Image src="/productos/10/12.jpg" width={700} height={600} alt="" className="mt-10 ml-10" />
                        </div>
                    }
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
            <div className={`flex  mt-28 pb-52 px-28
                ${e.titulo === "Ventilador Móvil Industrial" ? "justify-between px-0" : "justify-evenly"}
                ${e.titulo === "Ventilador Industrial Vertical" && " grid  grid-cols-3 gap-y-8 mx-auto w-[66vw] h-[800px]"}
                ${e.titulo === "Ventilador Comercial Vertical" && " grid  grid-cols-4 gap-x-9 gap-y-8 mx-auto w-[90vw] h-[800px]"}
                     ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && "h-[81vh]"}
                    ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" && "hidden"}
                
                `}>
                <div className={`absolute z-0 w-[80%] h-[460px]  rounded-md
                    ${e.titulo === "Ventilador de Techo Industrial" && "mt-[8%] bg-[#fe7604]"}   
                    ${e.titulo === "Ventilador de Techo Comercial" && "bg-[#f0c50b] h-[360px] mt-[-4%]"}   
                    ${e.titulo === "Ventilador Móvil Industrial" && "bg-[#ff3131] w-[99%] ml-[-102px] mt-[-3%] h-[350px]"} 
                    ${e.titulo === "Ventilador Móvil de 45° Industrial" && "bg-[#fecb17] relative w-[57vw] ml-[-40%] mt-[-9vh] h-[340px]"}
                    ${e.titulo === "Ventilador de Pared" && "bg-[#1e4675] w-[99vw] mt-[-5%] h-[345px]"}
                    ${e.titulo === "Ventilador Industrial Vertical" && "bg-[#ddddcb] w-[51vw] mt-[-3vh] ml-[-22%] h-[550px]"}
                    ${e.titulo === "Ventilador Comercial Vertical" && "bg-[#fe7604] w-[59vw] mt-[-1.3%] ml-[-9%] h-[480px]"}

                    `} ></div>
                    {
                        e.titulo === "Ventilador Móvil de 45° Industrial" &&
                        <div className={`z-0 absolute rounded-md bg-[#fecb17] w-[56%] ml-[42%] mt-[13%] h-[360px] `} ></div>
                    }
                    {
                        e.titulo === "Ventilador Industrial Vertical" && 
                        <div className={`z-0 absolute rounded-md bg-[#ddddcc] w-[54vw] mt-[14%] ml-[22%] h-[550px] `} ></div>
                    }
                    {
                        e.titulo === "Ventilador Comercial Vertical" && 
                        <div className={`z-0 absolute rounded-md bg-[#fe7604] w-[53vw] mt-[14%] ml-[35%] h-[430px] `} ></div>
                    }
                <Image src={e.img2[0]} width={ e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" ? 1500 : 450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4 
                    ${e.titulo === "Ventilador de Techo Industrial" && "bg-[#fe7604] hover:border-[#fe7604]" } 

                    ${e.titulo === "Ventilador de Techo Comercial" && "bg-[#f0c50b] hover:border-[#f0c50b]"} 
                    ${e.titulo === "Ventilador Móvil Industrial" && " hover:border-[#ff3131] bg-[#ff3131] ml-20"}
                    ${e.titulo === "Ventilador Móvil de 45° Industrial" && "w-[480px] h-[330px] hover:scale-[1.6] hover:border-none scale-150 relative top-32 right-[40%] transition"}
                    ${e.titulo === "Ventilador de Pared" && "mt-20 mr-40 hover:border-[#1d4675]"}
                     ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0 hover:border-none w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && "hover:border-none  w-[400px] rounded-2xl"}
                     ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && "hover:border-none hover:scale-[1] w-[99vw] absolute  pt-0 rounded-2xl z-40 mt-[-90px]"}

                    `}/>
                <Image src={e.img2[1]} width={530} height={530} alt=""  className={`absolute z-20 mt-20 border-4 hover:cursor-pointer 
                    ${e.titulo === "Ventilador de Techo Industrial" && "bg-[#fe7604] border-[#fe7604]" } 
                    ${e.titulo === "Ventilador de Techo Comercial" && "border-[#f0c50b] "}
                    ${e.titulo === "Ventilador Móvil Industrial" && "border-[#ff3131] bg-[#ff3131] ml-[23.4%] mt-[7%] w-[450px] h-[450px]"}
                    ${e.titulo === "Ventilador Móvil de 45° Industrial" && "w-[500px] scale-125 ml-[30%] mt-[-20px] border-none"}
                    ${e.titulo === "Ventilador de Pared" && "w-[600px] mt-[-20px] border-[#1d4675]"}
                     ${e.titulo === "Ventilador Industrial Vertical" && "hover:border-4 hover:border-[#fe7604] border-[0px] hover:scale-105 transition  mt-[0px] relative hover:border-none w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && "hover:border-none border-[0px] hover:scale-105 transition  mt-[0px] relative  w-[400px] rounded-2xl"}
                    `} 
                    style={{animationDuration: "10s"}} />
                {
                    e.titulo != "Ventilador Móvil de 45° Industrial" &&
                <Image src={e.img2[2]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer relative bottom-10 hover:border-4 
                    
                    ${e.titulo === "Ventilador de Techo Industrial" && "bg-[#fe7604] hover:border-[#fe7604]" } 

                    ${e.titulo === "Ventilador de Techo Comercial" && "bg-[#f0c50b] hover:border-[#f0c50b]" } 
                    ${e.titulo === "Ventilador Móvil Industrial" && "bottom-[0px] hover:border-[#ff3131] bg-[#ff3131] mr-[25%]"}
                    ${e.titulo === "Ventilador de Pared" && "mt-[120px] ml-52  hover:border-[#1d4675]"}
                    ${e.titulo === "Ventilador Industrial Vertical" && "hover:border-none hover:border-0  mt-[0px] bottom-[0px]  w-[300px]"}
                    ${e.titulo === "Ventilador Comercial Vertical" && "hover:border-none hover:border-0  mt-[0px] bottom-[0px]  w-[400px] rounded-2xl"}
                    ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" && "hidden"}
                    `}/>
                }
                {
                    e.titulo === "Ventilador Industrial Vertical" &&
                    <>
                    <Image src={e.img2[3]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4                     
                     ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0   w-[300px] hover:border-none"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0   w-[400px] rounded-2xl"}

                    `}/>
                <Image src={e.img2[4]} width={530} height={530} alt=""  className={`absolute z-20 mt-20 border-4 hover:cursor-pointer 
                    
                     ${e.titulo === "Ventilador Industrial Vertical" && "hover:border-4 hover:border-[#fe7604] border-[0px] hover:scale-105 transition   mt-[0px] relative  w-[300px] hover:border-none"}
                     ${e.titulo === "Ventilador Comercial Vertical" && "  hover:scale-105 transition   mt-[0px] relative  w-[400px] rounded-2xl"}
                    `} 
                    style={{animationDuration: "10s"}} />
                {
                    e.titulo != "Ventilador Móvil de 45° Industrial" &&
                <Image src={e.img2[5]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer relative bottom-10 hover:border-4 hover:border-[#fe7604]
                   
                    ${e.titulo === "Ventilador Industrial Vertical" && "hover:border-none hover:border-0  mt-[0px] bottom-[0px]  w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0  mt-[0px] bottom-[0px]  w-[400px] rounded-2xl"}
                    `}/>
                }
                    </>
                }

{
                    e.titulo === "Ventilador Comercial Vertical" &&
                    <>
                    <Image src={e.img2[3]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4                     
                     ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0   w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0 hover:border-none  w-[400px] rounded-2xl"}

                    `}/>
                    <Image src={e.img2[3]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4                     
                     ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0   w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0 hover:border-none  w-[400px] rounded-2xl"}

                    `}/>
                    <Image src={e.img2[3]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer hover:border-4                     
                     ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0   w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0 hover:border-none  w-[400px] rounded-2xl"}

                    `}/>
                <Image src={e.img2[4]} width={530} height={530} alt=""  className={`absolute z-20 mt-20 border-4 hover:cursor-pointer 
                    
                     ${e.titulo === "Ventilador Industrial Vertical" && "hover:border-4 hover:border-[#fe7604] border-[0px] hover:scale-105 transition   mt-[0px] relative  w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && "hover:border-4 hover:border-[#fe7604] border-[0px] hover:scale-105 transition   mt-[0px] relative hover:border-none w-[400px] rounded-2xl"}
                    `} 
                    style={{animationDuration: "10s"}} />
                {
                    e.titulo != "Ventilador Móvil de 45° Industrial" &&
                <Image src={e.img2[5]} width={450} height={450} alt="" className={`z-10 hover:scale-105 transition hover:z-30 hover:cursor-pointer relative bottom-10 hover:border-4 hover:border-[#fe7604]
                   
                    ${e.titulo === "Ventilador Industrial Vertical" && " hover:border-0  mt-[0px] bottom-[0px]  w-[300px]"}
                     ${e.titulo === "Ventilador Comercial Vertical" && " hover:border-0 hover:border-none mt-[0px] bottom-[0px]  w-[400px] rounded-2xl"}
                    `}/>
                }
                    </>
                }

                {
                    e.titulo === "Ventilador Móvil Industrial" &&
                    <Image src={e.img2[3]} width={450} height={450} alt=""  className={`absolute ml-[60vw] z-20 mt-20 border-4 hover:cursor-pointer 
                        ${e.titulo === "Ventilador de Techo Comercial" ? "border-[#f0c50b]" : "border-[#fe7604] "}
                        ${e.titulo === "Ventilador Móvil Industrial" && "border-[#ff3131] bg-[#ff3131] mt-[7%] ml-[62%]"}`} 
                        style={{animationDuration: "10s"}} />
                }
            </div>
            {
                e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" &&
                <div className="mt-10 ml-28">
                    <Image src={e.img2[0]} width={800} height={400} alt=""/>
                </div>
            }
        </div>
    )
}