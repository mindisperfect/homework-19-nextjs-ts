import call1 from "@/components/images/call-1.jpg";
import location2 from "@/components/images/location-2.jpg";
import facebook3 from "@/components/images/facebook-3.webp";
import insta4 from "@/components/images/insta-4.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h1>Biz haqimizda</h1>
            <div className="footer-icons">
              <Image src={call1} alt="title" width={20} height={50} style={{width: "50px"}} />
              <Image src={location2} alt="title" width={50} height={50} style={{width: "50px"}} />
              <Image src={facebook3} alt="title" width={50} height={50} style={{width: "50px"}} />
              <Image src={insta4} alt="title" width={50} height={50} style={{width: "50px"}} />
            </div>
          </div>
          <div className="footer-right">
             <h1>Biz bilan aloqa</h1>
             <p>Fargona viloyati</p>
             <p>+998993433443</p>
             <p>vodiyShopOnline@gmail.uz</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
