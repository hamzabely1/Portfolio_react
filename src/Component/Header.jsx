import React from 'react';

function Presentation(props) {
    return (
        <div>
  
  <main class="flex flex-col items-center justify-center mt-32">
    <header class="container">

  <nav
            class="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
            
           

            <div
                class="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <a
                    class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                   Competénces
                </a>

                <a
                    class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold  hover:text-blue-500">
                    Portofolio
                </a>
                <a
                    class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold  hover:text-blue-500">
                   Présentation
                </a>
              

               
            </div>

            <div class="flex items-center space-x-5 hidden md:flex">
             
             
            </div>

            
        </nav>









</header>

</main>

        </div>
    );
}

export default Presentation;