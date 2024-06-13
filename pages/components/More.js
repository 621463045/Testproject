import styles from "@/styles/Home.module.css";

export default function More() {
    return (
        <div className={styles.more}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col fs-4 fw-bold mb-4">smezreview.com</div>
                    <div className="col fs-4 fw-bold mb-4">เกี่ยวกับเรา</div>
                    <div className="col fs-4 fw-bold mb-4">บทความล่าสุด</div>
                    <div className="col fs-4 fw-bold mb-4">ติดตามข่าวสารได้ที่</div>
                </div>
                <div className="row pb-4">
                    <div className="col">
                        <p style={{ lineHeight: 0.5 }}>smezreview.com เว็บไซต์รวมร้าน</p>
                        <p style={{ lineHeight: 0.5 }}>อาหาร,สถานที่ท่องเที่ยว,โรงแรม</p>
                        <p style={{ lineHeight: 0.5 }}>ที่พัก,ร้านสปาเสริมความงาม และอื่นๆ</p>
                        <p style={{ lineHeight: 0.5 }}>เว็บไซต์ของเราเน้นเรื่องการรีวิวและความ</p>
                        <p style={{ lineHeight: 0.5 }}>เห็นที่ตรงไปตรงมา เรามีการให้คะแนนที่</p>
                        <p style={{ lineHeight: 0.5 }}>ชัดเจน เพื่อเป้นข้อมูลสำหรับผู้บริโภค</p>
                        <p style={{ lineHeight: 0.5 }}>ทุกท่าน</p>
                    </div>
                    <div className="col">
                        <p style={{ lineHeight: 0.5 }}>เกี่ยวกับเรา</p>
                        <p style={{ lineHeight: 0.5 }}>ข้อตกลงและเงื่อนไข</p>
                        <p style={{ lineHeight: 0.5 }}>นโยบายความเป็นส่วนตัว</p>
                        <p style={{ lineHeight: 0.5 }}>ร้านยอดนิยม</p>
                    </div>
                    <div className="col">
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src="/cake.jpg" alt="Description" style={{ width: '70px', height: '60px', marginRight: '5px', borderRadius: '5px' }} />
                            <div>
                                <p style={{ margin: 0 }}>lorem ipsum dolor sit amet conseteurs</p>
                                <p style={{ margin: 0 }}>scdicing siti sed</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/hotel.jpg" alt="Description" style={{ width: '70px', height: '60px', marginRight: '5px', borderRadius: '5px' }} />
                            <div>
                                <p style={{ margin: 0 }}>conseteurs scdicing siti sed conseteurs</p>
                                <p style={{ margin: 0 }}>scdicing siti sed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/facebook.png" alt="facebook" className={styles.scicon} />
                        <img src="/line.png" alt="line" className={styles.scicon} />
                        <img src="/google-plus.png" alt="google" className={styles.scicon} />
                        <img src="/youtube.png" alt="youtube" className={styles.scicon} />
                    </div>
                </div>
            </div>
        </div>
    );
}