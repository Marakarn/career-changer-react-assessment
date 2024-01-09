import './App.css'
import Layout from './Layout'

const Owner = () => {

    return (
    <Layout>
        <h1>Karn - Group B - 27</h1>
        <img className='owner_pic' src={"/Assets/20651e.jpg"} alt="owner_picture" />
        <p>Short Biography:</p>
        <p className='bio_text'>I am a Student from Generation's Junior Software Developer. I have 2 years of experience in Graphic Design.  My passion for technology has driven me to explore web development and Cloud computing. I am determined to pursue a career as a Front-end Software Developer. Drawing on my background in Graphic Design, I aim to enhance website development with a keen eye for aesthetics and user experience.</p>
        <img className='coffee_pic' src={"/Assets/HotCoffee.gif"} alt="coffee_picture" />
    </Layout>
    )
}
export default Owner