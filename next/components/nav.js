import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import style from './nav.module.css'

const nav =()=>{
    return(
        <nav>
            <Link href="/">
                <a className='me-3'>Home</a>
            </Link>
            <Link href="/about">
                <a className={style.Link}>About</a>
            </Link>
        </nav>
    )
}
export default nav