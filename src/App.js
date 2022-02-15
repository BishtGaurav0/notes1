
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Library v/s Framework:-</h2>
     <p>: Library is a collection of functions </p>
       <p> : Framework is a collection of multiple other libraries. </p>
        <p>: Inversion of Control = In case of library the Execution of code will be decided 
           by the developers whereas in case of framework the execution is already defined 
           or decided. </p>
        <p>: In case of Framework, it follows MVC structure (model view controller), 
          whereas a library can only be the one for example React is View of MVC. </p>
       <p> : Framework provides you a structure in which you just put down the code your 
          functionality , in case of library its developers duty to design the structure.  </p>

      <h2>React folder structure</h2>
      <h3>Readme.md :</h3>
      <p>This contains information about the project that which file contains what 
information and also contains info like how a new person who is starting with the 
project how they have to start with the project.</p>

<h3>package.json :</h3>
<p>It contains the information about the project and also contains the 
libraries which the project is using and it also has the description of the commands 
which gets used to run test or build your project.
</p>


<h3>package-lock.json :</h3>
<p>It contains information about the major libraries and if these 
libraries are having any extra dependency on other libraries so that information will 
also be stored over here.</p>


<h3>.gitignore:</h3>
<p>we can list down all the folders or file which we do not want to push 
during pushing the changes in github like node_modules.</p>

<h3>public/index.html:</h3>
<p>this file contains one div element in which a id is stored which 
is used to render your complete application at this id.</p>

<h3>src/index.js:</h3>
<p>In this file you will render your complete React application at the id 
given in index.html file.</p>

<h3>src/App.js:</h3>
<p>From this file , developers start building their React application.</p>




    </div>
  );
}

export default App;
