document.querySelector('button').addEventListener('click',nasa)
function nasa(){
    const choice = document.querySelector('input').value
    console.log(choice)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=GmZtamWWCcp4osPqkE0cyPeg3W25r6JeK2iL45S9&date=${choice}`).then(Response =>{
        return Response.json()

    }).then(data=>{
        console.log(data)
        if(data.media_type ==='image'){
            document.querySelector('img').src = data.hdurl
        }
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title

    })
    .catch(err=> {
        console.log(`error ${err}`)
    })
    }


    nasa()