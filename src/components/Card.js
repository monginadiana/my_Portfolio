import LazyLoad from "react-lazy-load";


export default function Card(props){

    console.log(props)
    function capitalizeWord(words){
        let nonSymbolWords = words.replace(/[^a-zA-Z ]/g, "")
        let wordArray = nonSymbolWords.split(" ")

        for (var i = 0; i < wordArray.length; i++) {
            wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        }
        return wordArray.join(" ");
    }

    return(
        <>
            <div class="row cols-md-3 g-4">
                <div class="col">
                <div class="card ">
                    <img src={props.picture} class="card-img-top" alt="Skyscrapers"/>
                    <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                        {props.description}
                    </p>
                    </div>
                    <div class="card-footer">
                    <a target="_blank" rel="noreferrer" href={props.url} class="text-muted">Read More</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}