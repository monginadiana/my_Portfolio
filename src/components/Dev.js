import Card from "./Card";

export default function Dev({projects}) {
    return(
        <>
        <div className="container mt-3">
            <center>
                <h1 className="arrow">Web Applications</h1>
            </center>
            <div className="row">
            <div className="col-md-1"></div> 
            <div className="col-md-10">
                {
                    projects.map(project => {
                    return <Card key={project.id} title={project.title} picture={project.picture}
                    description={project.description} tags={project.tags} url={project.url} />
                })
               } 
            </div> 
            <div className="col-md-1"></div> 
            </div>
        </div>
        </>
    )
}