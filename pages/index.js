import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";
import More from "@/pages/components/More";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar, faShare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="navbar navbar-expand-lg mt-2">
            <div className="navbar-nav">
              <a style={{fontSize: '26px'}}className="nav-link" href="/">หน้าแรก</a>
              <span style={{fontSize: '26px'}}className="nav-link">/</span>
              <a style={{fontSize: '26px'}}className="nav-link" href="/">ดีล</a>
              <span style={{fontSize: '26px'}}className="nav-link">/</span>
              <a style={{fontSize: '26px'}}className="nav-link" href="/">ส่วนลดร้าน Tenyuu Grand สาทร 6 ลด 25%</a>
              <span style={{fontSize: '26px'}}className="nav-link">/</span>
            </div>
          </div>
          <div className="col-12">
            <div className={`card mt-2 ${styles.Boxcontainer}`}>
              <div className="card-body">
                <div className="row">
                  <div className="col-5">
                    <Image src="/test.jpg" alt="Card Body" width={500} height={250} className={`img-fluid ${styles.cardImage}`} />
                  </div>
                  <div className="col-7">
                    <h2 style={{ fontWeight: "bold" }}>Course Tenyuu Grand Omakase 15 Items</h2>
                    <p style={{ fontSize: "22px", marginTop: "10px" }}>ซื้อไปแล้ว: 20</p>
                    <div className="d-flex justify-content-start">
                      <p style={{ fontSize: "42px", color: "hsl(16, 100%, 58%)", fontWeight: "bold" }}>$2900</p>
                      <p style={{ fontSize: "22px", marginTop: "18px", marginLeft: "10px", textDecoration: "line-through", color: 'gray' }}>$3900</p>
                    </div>
                    <button className={styles.btnBuy}>ซื้อเลย</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className={`card mt-2 ${styles.Boxcontainer}`}>
              <div className="card-body">
                <p style={{ fontSize: "25px", fontWeight: "bold" }}> เวลาเปิดทำการ</p>
                <div className="d-flex justify-content-start">
                  <span style={{ fontSize: "22px", marginLeft: "14px" }}>ทุกวัน</span>
                  <span style={{ fontSize: "22px", marginLeft: "auto" }}>10.00 - 22.00 น</span>
                </div>
                <hr />
                <span style={{ fontSize: "25px", fontWeight: "bold" }}>ค่าบริการ</span>
                <div className="d-flex justify-content-start"><span style={{ fontSize: "22px", marginLeft: "14px" }}>ผู้ใหญ่</span>
                  <span style={{ fontSize: "22px", marginLeft: "auto" }}>ฟรี</span>
                </div>
                <div className="d-flex justify-content-start">
                  <p style={{ fontSize: "22px", marginLeft: "14px" }}>เด็ก</p>
                  <p style={{ fontSize: "22px", marginLeft: "auto" }}>ฟรี</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className={`card mt-2 ${styles.Boxcontainer}`}>
              <div className="card-body">
                <p style={{ fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: "#d77423" }} className="me-1" />{" "}สีลม, กรุงเทพ
                </p>
                <p style={{ fontSize: "30px", fontWeight: "bold", marginTop: "-20px" }}>Tenyuu Grand สาทร 6 - สีลม |<span style={{ color: "green" }}> เปิดอยู่ ณ ขนาดนี้ จนถึง 22:00</span>
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "28px", marginTop: "-10px", marginBottom: "20px" }}>ร้านอาหาร</span>
                </div>
                <div className="d-flex justify-content-start">
                  <button
                    style={{
                      fontSize: "28px",
                      backgroundColor: "#d77423",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    4.9
                    <FontAwesomeIcon icon={faStar} style={{ marginLeft: "8px", color: "white", fontSize: "20px" }} />
                  </button>
                  <p style={{ fontSize: "30px", marginLeft: "14px" }}>35 รีวิว</p>
                  <p style={{ fontSize: "30px", marginLeft: "20px" }}>| ฿฿฿</p>
                  <button
                    style={{
                      fontSize: "28px",
                      backgroundColor: "#4CBB17",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      marginLeft: "auto", // เพิ่ม margin-left เพื่อเว้นระยะห่างระหว่าง <h4> และ <button>
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "50px",
                    }}
                  >
                    <FontAwesomeIcon icon={faShare} style={{ marginLeft: "8px", color: "white", fontSize: "20px" }} className="me-2" />แชร์
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={`card mt-2 ${styles.Boxcontainer}`}>
              <div className="card-body">
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                  แผนที่ร้าน
                </p>
                <img src="/map.png" style={{ width: "100%", height: "100%", marginBottom: "20px" }} />
                <button 
                style={{ 
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "18px",
                  backgroundColor: "#d77423",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  cursor: "pointer"
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "white" }} className="me-2"/>{" "}ดูแผนที่
              </button>
                <span style={{ fontSize: "25px", fontWeight: "bold" }}>ที่อยู่ร้าน : lorem ipsum dolor sit amet</span>
                <div>
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>เบอร์โทรศัพท์ : 0926913901</span>
                </div>
                <div>
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>Facebook : xxxxxxxx</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className={`card mt-2 ${styles.Boxcontainer}`}>
              <div className="card-body">
                <p style={{ fontSize: "22px" }}>รายละเอียด</p>
                <p style={{ fontSize: "22px", marginTop: '-10px' }}>ซื้อได้ถึง 31 ม.ค 2024</p>
                <p style={{ fontSize: "22px", marginTop: '-10px' }}>ใช้ได้ถึงได้ถึง 31 ม.ค 2024</p>
                <p style={{ fontSize: "22px", fontWeight: "bold" }}>#SpecialPrice</p>
                <p style={{ fontSize: "22px", marginTop: "-20px" }}>Couse Tenyuu Grand Omakase 15 Items ราคาปกติ Course ฿3,990++ จองผ่าน Wongnai เหลือเพียง ฿2,990- Net เท่านั้น</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "22px", marginTop: "-10px", marginBottom: "20px" }}>
                    เชตโอมากาเสะ (set Omakase)
                  </span>
                </div>
                <span style={{ fontSize: "22px", marginTop: "-10px", marginBottom: "20px" }}>ดีลนี้เหมาะสมสำหรับประทาน 1 ท่าน</span>
                <button className={styles.btnBuyBox}>ซื้อเลย</button>
              </div>
            </div>
            <div className={`card mt-ภ ${styles.Boxcontainer}`}>
              <div className="card-body">
            <div className="row">
              <div className="col-12 d-flex justify-content-between" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                <div>
                  <p style={{ fontSize: "22px" }}>แนะนำสำหรับคุณ</p>
                </div>
                <div>
                  <p style={{ fontSize: "22px", color: "hsl(16, 100%, 58%)", fontWeight: "bold", marginLeft: '80px' }}>ดูทั้งหมด</p>
                </div>
              </div>
            </div>
          </div>
          </div>
            <div className={`card mt-2 ${styles.Boxcontainerend}`}>
              <div className="card-body">
              <div className="row">
              <div className="col-4">
                <div className="card h-100">
                  <div style={{ position: 'relative' }}>
                    <img src="/images.jpg" style={{ width: '100%', height: '180px' }} className="card-img-top" alt="..." />
                    <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'gold' }}>&#x2605;</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '24px' }}>Lorem ipsum dolor sit amet</h5>
                    <p className="card-text" style={{ fontSize: '20px' }}>ซื้อได้ถึง 31 ม.ค 2024 - ใช้ได้ถึง 29 ก.พ</p>
                    <p style={{ fontSize: "22px", marginTop: '-10px' }}>
                      <span style={{ textDecoration: "line-through", color: 'gray' }}>$3900</span>
                      <span style={{ fontSize: "32px", color: "orange", marginLeft: "5px", fontWeight: 'bold' }}>$2900</span>
                    </p>
                  </div>
                </div>
            </div> 
              <div className="col-4">
                <div className="card h-100">
                  <div style={{ position: 'relative' }}>
                    <img src="/images.jpg" style={{ width: '100%', height: '180px' }} className="card-img-top" alt="..." />
                    <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'gold' }}>&#x2605;</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '24px' }}>Lorem ipsum dolor sit amet</h5>
                    <p className="card-text" style={{ fontSize: '20px' }}>ซื้อได้ถึง 31  2024 - ใช้ได้ถึง 29 ก.พ</p>
                    <p style={{ fontSize: "22px", marginTop: '-10px' }}>
                      <span style={{ textDecoration: "line-through", color: 'gray' }}>$3900</span>
                      <span style={{ fontSize: "32px", color: "orange", marginLeft: "5px", fontWeight: 'bold' }}>$2900</span>
                    </p>
                  </div>
                </div>
            </div> 
              <div className="col-4">
                <div className="card h-100">
                  <div style={{ position: 'relative' }}>
                    <img src="/images.jpg" style={{ width: '100%', height: '180px' }} className="card-img-top" alt="..." />
                    <span style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'gold' }}>&#x2605;</span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '24px' }}>Lorem ipsum dolor sit amet</h5>
                    <p className="card-text" style={{ fontSize: '20px' }}>ซื้อได้ถึง 31 8 2024 - ใช้ได้ถึง 29 ก.พ</p>
                    <p style={{ fontSize: "22px", marginTop: '-10px' }}>
                      <span style={{ textDecoration: "line-through", color: 'gray' }}>$3900</span>
                      <span style={{ fontSize: "32px", color: "orange", marginLeft: "5px", fontWeight: 'bold' }}>$2900</span>
                    </p>
                  </div>
                </div>
            </div>  
            </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <More/>
      <Footer />
    </>
  );
}