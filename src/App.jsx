import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import All from './assets/components/All';
import Fullstack from './assets/components/Fullstack';
import Cybersecurity from './assets/components/Cybersecurity';
import Datascience from './assets/components/Datascience';
import Carrer from './assets/components/Carrer';

import './App.css';

 
const App = () => {
  const data = [{
    

      image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
  
      head:"Full Stack Development",
  
      content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  
      date:"28",
  
      month:"January"
  
    },
    
    {
      image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
  
      head:"Cyber Security",
  
      content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  
      date:"28",
  
      month:"January"

    },
    {
      image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
  
      head:"Data Science",
  
      content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  
      date:"28",
  
      month:"January"
    },
    {
      image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
  
      head:"Career",
  
      content:"A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS, JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version Control, and Web Hosting Platforms ...",
  
      date:"28",
  
      month:"January"
    }
   
  ]
  return (
    <BrowserRouter>
    
      <div>
        <Navbar />
      </div>

      <Routes>

        <Route path ='/' element={<All data ={data} />} />
        <Route path ='/Fullstack' element={<Fullstack data={data} />} />
        <Route path ='/Cybersecurity' element={<Cybersecurity  data ={data} />} />
        <Route path ='/Datascience' element={<Datascience data= {data} />} />
        <Route path ='/Carrer' element={<Carrer data={data} />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;