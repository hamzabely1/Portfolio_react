import React from 'react'
import mon_image from "../img/moi.jpg"

function Parte_Principal() {
  return (
    <div>


<section className='section_principal'
        class="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
        <div class="px-1 w-full lg:w-4/5">
            <div
                class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max lg:text-left">
                <h2 class="mb-4 text-3xl font-bold text-left text-white lg:text-5xl">
                   

                    <span class="text-5xl text-blue-500 leading-relaxeds"
                        >Hamza Belyahiaoui
                    </span>

         </h2>
<span className='text-2xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-500 '>
Developpeur web
</span>
       
                <p
                    class="visible mx-0 mt-3 mb-0 text-m leading-relaxed text-center text-white">
                   Jeune développeur web de la formation Développeur web & web mobile. Je maîtrise les technologies front-end, notamment Html, Css, et JavaScript avec les frameworks Bootstrap et React je fait aussi du back-end, et particulièrement PHP avec le frameworks Laravel. Pour les CMS, je me suis familiarisé avec le WordPress Pour la partie gestion de projets, j’ai des connaissances en méthode agile ainsi que l’outil Git pour la gestion de version de projet
                </p>
            </div>

            <div class="text-center lg:text-left">
                <a
                    class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                    >Key Features</a
                >

                <a
                    class="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                    >How We Work?</a
                >
            </div>
        </div>

        <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            <div class="flex justify-center items-center">
            
            </div>
        </div>
    </section>

    </div>
  )
}

export default Parte_Principal