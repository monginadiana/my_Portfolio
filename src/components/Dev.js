import Card from "./Card";

export default function Dev({projects}) {
    return(
        <>
        <div className="container mt-3">
            <center>
                <h1 className="arrow">Projects</h1>
            </center>
            
            <div className="card-deck">
            <div className="row">
            
            
                {
                    projects.map(project => {
                    return <Card key={project.id} title={project.title} picture={project.picture}
                    description={project.description} tags={project.tags} url={project.url} />
                })
               } 
             
            </div>
            </div>
        </div>
        </>
    )
}