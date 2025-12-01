const Main =()=>{
    return(
        <main className="main" id="main">
            <div className="container">
                <p className="greetings text-capitalize text-center">We hope that you find what you're looking for 😄</p>
                <img src={process.env.PUBLIC_URL + "/images/home_page.jpg"} alt="placeholder img" className="img-fluid image" id="homeImg" />
                
            </div>
        </main>
    )
}

export default Main