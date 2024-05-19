import '../index.css';
import Location from '../images/location.svg';

const Contact = () => {

    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <button className='location-btn'>
                    <img
                        src={Location}
                        alt='location' />
                </button>
                <h1>New Jersey</h1>
                <div class="google-map">
                    <iframe src="https://maps.app.goo.gl/JHZm6KRdeYtXxDuX6" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='my-form border-margin'>
                <h1 className='contact-h1 outfit-font'>GET IN TOUCH</h1>
                <h2 className='contact-h2 outfit-font'>From logo design to video animation,
                    web development to website copy, expert
                    designers developers.
                </h2>
                <form>
                    <input type='text' id='name' name='name' className='input-shape' placeholder='Enter your name' />
                    <input type='text' id='email' name='email' className='input-shape' placeholder='Enter your email' />
                    <input type='text' id='number' name='number' className='input-shape' placeholder='Enter your phone number' />
                    <input type='text' id='msg' name='msg' className='input-shape input-msg' placeholder='Message' />
                    <button type='submit' className='submit-btn'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;