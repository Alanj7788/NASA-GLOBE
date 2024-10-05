import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Welcomepage from './pages/student/welcomepage/Welcomepage.jsx';
import Sem2 from './pages/student/SemPage/sem2/Sem2.jsx';
import Sem3 from './pages/student/SemPage/sem3/Sem3.jsx';
import Sem4 from './pages/student/SemPage/sem4/Sem4.jsx';
import Sem5 from './pages/student/SemPage/sem5/Sem5.jsx';
import Sem6 from './pages/student/SemPage/sem6/Sem6.jsx';
import Sem7 from './pages/student/SemPage/sem7/Sem7.jsx';
import Sem8 from './pages/student/SemPage/sem8/Sem8.jsx';
import CLab from './pages/student/SemPage/sem2/c/CLab.jsx';
import JavaLab from './pages/student/SemPage/sem3/java/JavaLab.jsx';
import DsLab from './pages/student/SemPage/sem3/ds/DsLab.jsx';
import MasmLab from './pages/student/SemPage/sem5/masm/MasmLab.jsx';
import CompilerLab from './pages/student/SemPage/sem7/compiler/CompilerLab.jsx';
import About from './pages/student/footercomponents/About.jsx';
import TopNavig from './pages/common/TopNavig.jsx';
import NetworkLab from './pages/student/SemPage/sem6/network/NetworkLab.jsx';
import OsLab from './pages/student/SemPage/sem4/os/OsLab.jsx';
import ShellLab from './pages/student/SemPage/sem4/shell/ShellLab.jsx';
import SsLab from './pages/student/SemPage/sem5/ss/SsLab.jsx';
import Intromasm from './pages/student/SemPage/sem5/masm/Intromasm.jsx';
import IntroDbms from './pages/student/SemPage/sem5/dbms/IntroDbms.jsx';
import IntroC from './pages/student/SemPage/sem2/c/IntroC.jsx';
import CompilerAlgorithm from './pages/student/SemPage/sem7/compiler/CompilerAlgorithm.jsx';
import Sem1 from './pages/student/SemPage/sem1/Sem1.jsx';
import Python from './pages/student/SemPage/sem1/python/Python.jsx';
import Mod1 from './pages/student/SemPage/sem1/python/mod1/Mod1.jsx';
import Mod5 from './pages/student/SemPage/sem1/python/mod5/Mod5.jsx';
import Mod4 from './pages/student/SemPage/sem1/python/mod4/Mod4.jsx';
import Mod3 from './pages/student/SemPage/sem1/python/mod3/Mod3.jsx';
import Mod2 from './pages/student/SemPage/sem1/python/mod2/Mod2.jsx';
import PythonLabAlgorithm from './pages/student/SemPage/sem1/pythonlab/PythonLabAlgorithm.jsx';
import PythonLab from './pages/student/SemPage/sem1/pythonlab/PythonLab.jsx';
import { Header } from './pages/student/landingpage/Header.jsx';
import Landing from './pages/student/landingpage/Landing.jsx';
import Lab from './pages/hss/Lab.jsx';
import Competitive from './pages/Competitive/Competitive.jsx';
import DsAlgorithm from './pages/student/SemPage/sem3/dsalgorithm/DsAlgorithm.jsx';
import PrivacyPolicyPage from './pages/student/footercomponents/PrivacyPolicy.jsx';
import  TopNavbar  from './pages/common/TopNavbar.jsx';
import ChatBottemp from './Chatbottemp.jsx';
import Chatbot from './Chatbot.jsx';


const NotFound = () => {
  return <div>Sorry, the page you are looking for does not exist.</div>;
}

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Routes>


        <Route path='/' element={<Landing />}/>
        <Route path='/about' element={<About />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />

          <Route path="/btech" element={<Welcomepage />} />
          <Route path="/hss" element={<Lab />} />
          <Route path="/competitive-python" element={<Competitive />} />

          <Route path="/btech/sem1" element={<PythonLab />} />
          <Route path="/btech/sem2" element={<CLab />} />
          <Route path="/btech/sem3" element={<DsLab />} />
          <Route path="/btech/sem4" element={<OsLab />} />
          <Route path="/btech/sem5" element={<Sem5 />} />
          <Route path="/btech/sem6" element={<Sem6 />} />
          <Route path="/btech/sem7" element={<Sem7 />} />
          <Route path="/btech/sem8" element={<Sem8 />} />

          <Route path="/btech/sem1/python" element={<PythonLab />} />
          <Route path="/btech/sem1/python/mod1" element={<Mod1 />} />
          <Route path="/btech/sem1/python/mod2" element={<Mod2 />} />
          <Route path="/btech/sem1/python/mod3" element={<Mod3 />} />
          <Route path="/btech/sem1/python/mod4" element={<Mod4 />} />
          <Route path="/btech/sem1/python/mod5" element={<Mod5 />} />
          
          <Route path='/btech/sem2/clab' element={<CLab />} />
          <Route path='/btech/sem3/javalab' element={<JavaLab />} />
          <Route path='/btech/sem3/dslab' element={<DsLab />} />
          <Route path='/btech/sem3/dsalgorithm' element={<DsAlgorithm />} />
          <Route path='/btech/sem5/masmlab' element={<MasmLab />} />
          <Route path='/btech/sem7/compilerlab' element={<CompilerLab />} />
          
          <Route path='/btech/sem6/networklab' element={<NetworkLab />} />
          <Route path='/btech/sem4/oslab' element={<OsLab />} />
          <Route path='/btech/sem4/shelllab' element={<ShellLab />} />
          <Route path='/btech/sem5/sslab' element={<SsLab />} />
          <Route path='/btech/sem5/intromasmlab' element={<Intromasm />} />
          <Route path='/btech/sem5/introdbms' element={<IntroDbms />} />
          <Route path='/btech/sem2/introc' element={<IntroC />} />
          <Route path='/btech/sem7/compileralgorithm' element={<CompilerAlgorithm />} />
          <Route path='/btech/sem1/pythonlab' element={<PythonLab />} />
          <Route path='/btech/sem1/pythonlabalgorithm' element={<PythonLabAlgorithm />} />
          

          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
        <Chatbot/>
      </div>
    </Router>
  );
}

export default App;
