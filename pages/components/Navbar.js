import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.Navbar}`}>
            <div className="container">
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <p className={styles.textlogo}>สโลแกนการโฆษณา</p>
                <form className={`${styles.searchForm} d-flex`} action="/">
                    <input className={`form-control ${styles.searchInput}`} type="search" placeholder="ค้นหาร้านอาหาร โรงแรม ที่เที่ยว..." name="search" />
                    <select className="form-select" style={{ width: "40%", marginLeft: "40px", borderRadius: "10px", fontSize: "20px" }} aria-label="Default select example">
                        <option value="0">เลือกจังหวัด :</option>
                        <option value="1">กรุงเทพ</option>
                        <option value="2">สมุทรปราการ</option>
                    </select>
                </form>
                <button className={`btn ${styles.loginBut}`}>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontWeight: 'bold' }} className="me-2" /> เข้าสู่ระบบ
                </button>
            </div>
        </nav>
    );
}
