import axios from 'axios';
import { useState,useEffect } from 'react';
function ProjectPages() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProjects = async () => {
        const url = import.meta.env.VITE_BASE_URL + '/api/project/';
        try {
            
            const response = await axios.get(url);
            setProjects(response.data.projects);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getProjects();
    }, [])
   if(loading){
         return <>
         <section className="bg-white w-screen ">
         <header className=" text-black bg-white p-6 text-center ">
           <div className="container mx-auto">
             <img 
               src="/new_logo.svg" 
               alt="Logo" 
               className="mx-auto mb-4 w-24 h-24"
             />
             <h1 className="text-4xl font-bold">Welcome to Our Services Page</h1>
             <p className="text-lg mt-2">Discover the amazing services we offer to make your life easier.</p>
           </div>
         </header>
         <div className="container max-w-max bg-white mx-auto flex  justify-center items-center">
         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-6 bg-white ">
           {Array.from({ length: 8 }).map((_, index) => (
             <div key={index}
             className="flex flex-col bg-neutral-300 w-72 h-64 animate-pulse rounded-xl p-4 gap-4"
           >
             <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
             <div className="flex flex-col gap-2">
               <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
               <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
               <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
               <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
             </div>
           </div>
           ))}
         </div>
         </div>
         
         </section>
       </>
   }
    return (
<>
        <header className=" text-black bg-white p-6 text-center ">
        <div className="container mx-auto">
          <img 
            src="/new_logo.svg" 
            alt="Logo" 
            className="mx-auto mb-4 w-24 h-24"
          />
          <h1 className="text-4xl font-bold">Welcome to Our Projects Page</h1>
          <p className="text-lg mt-2">Discover the amazing project we have done so far</p>
        </div>
      </header>
        <div className="justify-center items-center flex mx-auto bg-white min-h-screen">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
            {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
            ))}
        </div>
        </div>
        </>
    )
}

export default ProjectPages




function ProjectCard(project) {
    return (
       

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
  <img
    alt=""
    src={project.image}
    className="h-56 w-full object-cover"
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        {project.title}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {project.description}
    </p>

    {project.brochure && < a href={project.brochure} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      view brochure

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>}
  </div>
</article>
    );
}