import React from 'react'
import img from "../img/img.png"

function Parte_Principal() {
    return (
        <div >


            <section className="flex_pp section_principal items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md">
                <div class="px-5 w-full lg:w-4/5">
                    <div
                        class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max ">
                        <h2 class="mb-4 text-3xl font-bold text-left text-white lg:text-5xl">


                            <span class="text-5xl text-center text-white leading-relaxeds"
                            >Hamza Belyahiaoui
                            </span>

                        </h2>
                        <span className='text-2xl font-extrabold border-b text-white'>
                            Developpeur web et web mobile
                        </span>

                        <p
                            class="visible mx-0 mt-3 mb-0 text-m leading-relaxed text-center text-white">
                            Jeune développeur web de la formation Développeur web & web mobile. Je maîtrise les technologies front-end, notamment Html, Css, et JavaScript avec les frameworks Bootstrap et React je fait aussi du back-end, et particulièrement PHP avec le frameworks Laravel. Pour les CMS, je me suis familiarisé avec le WordPress Pour la partie gestion de projets, j’ai des connaissances en méthode agile ainsi que l’outil Git pour la gestion de version de projet
                        </p>
                    </div>


                   
                </div>
            
                <div class="flex justify-center">
    <a class="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 mb-20">
        <div class="relative group w-full overflow-hidden bg-transaprent h-32 rounded-t-3xl">
           
            <div class="absolute -to-t from-black w-full h-full flex items-end justify-center -inset-y-0"><h1 class="font-bold text-2xl text-white mb-2">Plus sur moi</h1></div>
        </div>
        <div class="bg-transparent text-white">
            <div class="text-center px-3 pb-6 pt-2">
                <p class=" flex mt-2 font-sans font-light text-slate-700">
                   <img style={{height:"20px",marginTop:"3px",margin:"5px"}} src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" />
                hamzaciao80@gmail.com
                </p>
                <p class="flex mt-2 font-sans font-light text-slate-700">
                <img style={{height:"20px",marginTop:"3px",margin:"5px"}} src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="" />
 
                   07 73 86 74 96
                   </p>
                   <p class=" flex mt-2 font-sans font-light text-slate-700">
                   <img style={{height:"20px",marginTop:"3px",margin:"5px"}} src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="" />

2 rue Claude Farérre
<br />
(Saint-Priest)
                   </p>  
            </div>
            <div class="flex justify-center pb-3 text-slate-700">
                <div class="text-center mr-3 border-r pr-3 last:border-r-0">
                    <a href=""></a>
                    <img style={{height:"45px",color:"white"}} src="https://cdn-icons-png.flaticon.com/512/3488/3488435.png" alt="" />
                </div>
                <div class="text-center mr-3 border-r pr-3 last:border-r-0">
                  <img style={{height:"40px",}} src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
                </div>
                <a href="https://www.linkedin.com/in/hamza-belyahiaoui-544648240/">
                <div class="text-center mr-3 ">
                   

                                          <img style={{height:"40px",}} src="https://cdn-icons-png.flaticon.com/512/408/408703.png" alt="" />

                   
                </div>
 </a>
            </div>
        </div>
    </a>

</div>



            </section>

        </div>
    )
}

export default Parte_Principal