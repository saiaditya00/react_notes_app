import logo from '../../assets/notes_logo.png'
export default function Navbar() {
    return (
        <>
            <header className='flex px-5 py-1 gap-3 border-b-2 border-b-gray-200'>
                <div className='w-12 h-12' >
                    <img className='w-full h-full' src={logo} alt="logo" />
                </div>
                <h1 className=" text-indigo-800 text-4xl font-bold">Notes App</h1>

            </header>
        </>

    )
}