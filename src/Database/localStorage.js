//  local storage e 2 dhape kaj setup krbo 

//  1. age item set krbo 
const getJobs = () =>{
    const storedJob = localStorage.getItem('job')
    if(storedJob){
        return JSON.parse(storedJob)
    }return []
}

const setJob = (id) =>{
   const storedJobs = getJobs();
   const exites = storedJobs.find(jobId=>jobId===id)
   if(!exites){
     storedJobs.push(id)
     localStorage.setItem('job', JSON.stringify(storedJobs))
   }
}
//  2. tarpor localStorage theke get kre nibo 
export {getJobs, setJob}
