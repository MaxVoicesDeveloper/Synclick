import './About.css'

export default function About(){
    return(
        <>
            <div className="containers about-page" id="about">
                <div className="about-text">
                    <h1 className="name">About</h1>
                    <p className="description">
                        Development team. Experienced professionals who will help you with your startup,
                        come up with an idea, and do everything as you like evelopment team.
                        Experienced professionals who will help you with your startup, come up with an idea,
                        and do everything as you like
                    </p>
                </div>
                <div className="fragments-block">
                    <div className="fragments">
                        <div className="fragment so-big-os"><img src="../assets/images/components/about-out/os/so-big-os.png" alt="fragment"/></div>
                        <div className="fragment big-os"><img src="../assets/images/components/about-out/os/big-os.png" alt="fragment"/></div>
                        <div className="fragment large-os"><img src="../assets/images/components/about-out/os/large-os.png" alt="fragment"/></div>
                        <div className="fragment small-os"><img src="../assets/images/components/about-out/os/small-os.png" alt="fragment"/></div>
                        <div className="fragment so-small-os"><img src="../assets/images/components/about-out/os/so-small-os.png" alt="fragment"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}