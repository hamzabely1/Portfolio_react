import React from 'react';
import Competence from '../Component/Competence';
import Parte_Principal from '../Component/Parte_Principal';
import Presentation from '../Component/Header';
import Projets from '../Component/Projets';

function Home(props) {
    return (
        <div>
       <main class="flex flex-col items-center justify-center mt-32">
            
   <Presentation/>
      <Parte_Principal/>

   </main>
   <Competence/>
<Projets/>

        </div>
    );
}

export default Home;