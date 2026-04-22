import img1 from "../assets/IMG_0244.jpeg"
import img2 from "../assets/IMG_0814.jpeg"
import "../styling/Home.css";

export default function Home() {
  return (
    <div className="home-images">
      <img src={img1} alt="Ceramic work 1" className="img1"/>
      <img src={img2} alt="Ceramic work 2" />
    </div>
  );
}