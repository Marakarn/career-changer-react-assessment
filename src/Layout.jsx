import Navbar from './Navbar';

function Layout({ children }) {
    return (
    <>
        <Navbar />
        <main className='main'>
        {children}
        </main>
    </>
    );
}


export default Layout