import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import logo from 'assets/img/logo.png'

function Navbar(){
    return(
        <nav className='w-full py-4 shadow-md fixed'>
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                    <img
                    src={logo}
                    width={65}
                    height={70}
                    className=""/>
                    </div>
                    <div className="ml-4 mt-2 inline-flex flex-shrink-0">
                    <Link to='/casos' className="text-lg font-medium leading-6 text-gray-900 mx-4">Casos</Link>
                    <Link to='/servicios' className="text-lg font-medium leading-6 text-gray-900 mx-4">Servicios</Link>
                    <Link to='/nosotros' className="text-lg font-medium leading-6 text-gray-900 mx-4">Nosotros</Link>
                    <Link to='/carreras' className="text-lg font-medium leading-6 text-gray-900 mx-4">Carreras</Link>
                    <Link to='/blog' className="text-lg font-medium leading-6 text-gray-900 mx-4">Blog</Link>
                    <Link to='/contacto' className="text-lg font-medium leading-6 text-gray-900 mx-4">Contacto</Link>
                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Hire us
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

}) (Navbar)