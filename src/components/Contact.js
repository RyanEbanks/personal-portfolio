import '../index.css';

const Contact = () => {

    return (
        <>
        <div>
            <h1>GET IN TOUCH</h1>
            <h2>From logo design to video animation,
                web development to website copy, expert
                designers developers.
            </h2>
            <form>
                <input type='text' id='name' name='name' />
                <input type='text' id='email' name='email' />
                <input type='text' id='number' name='number' />
                <input type='text' id='msg' name='msg' />
                <input type='submit' />
            </form>
        </div>
        </>
    );
}

export default Contact;