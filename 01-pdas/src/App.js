import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="title">Personal Digital Assistants</div>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                imgSrc={AlexaImage}
                                description="Alexa was created by the Amazon. Amazon is one of the world's largest ecommerce platform."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                imgSrc={CortanaImage}
                                description="Cortana was made by Microsoft and nobody knows what it does."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                imgSrc={SiriImage}
                                description="Created by Apple Inc. and is the best AI ever made..."
                            />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default App;