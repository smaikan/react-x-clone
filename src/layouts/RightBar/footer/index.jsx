import { Link } from "react-router-dom"

const Footer=()=>{
    return(
        <div className="footer">
            <Link className="a">
            Hizmet şartları
            </Link>
            <Link className="a">
            Gizlilik politikası
            </Link>
            <Link style={{
                marginRight:'20px'
            }} className="a">
            Çerez politikası
            </Link>
            <br/>
            <Link className="a">
            Imprint
            </Link>

            <Link className="a">
            Erişebilirlik
            </Link>
            <Link style={{
                marginRight:'80px'
            }} className="a">
            Reklam bilgisi
            </Link>
            <br/>
            <Link className="a">
            Daha fazla ...
            </Link>
            <div className="b">© 2024 X Corp.</div>

        </div>
    )
}

export default Footer