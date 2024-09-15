import React, { useEffect } from 'react';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from "react-router-dom";


import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';
import '../../../node_modules/swiper/swiper-bundle.min.css';



const Home = () => {
    useEffect(() => {
        const nextButton = document.querySelector('.swiper-button-next');
        const prevButton = document.querySelector('.swiper-button-prev');

        // Change button color on hover without sliding
        const handleMouseEnter = (e) => {
            e.target.style.backgroundColor = '#ddd'; // Example hover color
        };

        const handleMouseLeave = (e) => {
            e.target.style.backgroundColor = ''; // Reset to original color
        };

        if (nextButton) {
            nextButton.addEventListener('mouseenter', handleMouseEnter);
            nextButton.addEventListener('mouseleave', handleMouseLeave);
        }
        if (prevButton) {
            prevButton.addEventListener('mouseenter', handleMouseEnter);
            prevButton.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (nextButton) {
                nextButton.removeEventListener('mouseenter', handleMouseEnter);
                nextButton.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (prevButton) {
                prevButton.removeEventListener('mouseenter', handleMouseEnter);
                prevButton.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="home-page">
            <Navbar />
            <div className="img1"></div>
            <div className="text-wrapper-1">Wedding</div>
            <div className="overlap-1">
                <div className="img2"></div>
                <div className="img3"></div>
                <p className="text-wrapper-2">
                    Xin chào các cô dâu chú rể tương lai! Hãy để <Link to="https://www.facebook.com/samweddingstudio">Sam Wedding Studio</Link> đồng hành cùng bạn trong hành trình chuẩn bị cho ngày cưới.
                    Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn từng bước, từ việc chọn áo cưới hoàn hảo đến việc tạo nên album ảnh cưới đẹp lung linh.
                </p>
                <p className="text-wrapper-3">
                    Chúng tôi tự hào mang đến bộ sưu tập áo cưới đẹp mắt và đa dạng, phù hợp với mọi phong cách và sở thích.
                    Từ những thiết kế cổ điển, thanh lịch đến hiện đại, phá cách, chúng tôi cam kết mang đến cho bạn những lựa chọn hoàn hảo để bạn tỏa sáng trong ngày trọng đại.
                    Mỗi chiếc áo cưới đều được chúng tôi chọn lọc kỹ lưỡng, đảm bảo chất lượng cao và sự thoải mái tuyệt đối.
                </p>
            </div>
            <div className="overlap-2">
                <div className="img4"></div>
                <div className="overlap-3">
                    <div className="img5"></div>
                    <p className="text-wrapper-4">
                        Bên cạnh đó, chúng tôi cũng cung cấp dịch vụ chụp hình cưới chuyên nghiệp, giúp bạn lưu giữ những khoảnh khắc tuyệt đẹp và ý nghĩa nhất của cuộc đời.
                        Đội ngũ nhiếp ảnh gia tài năng và giàu kinh nghiệm của chúng tôi sẽ làm việc tận tâm để tạo ra những bức ảnh đầy cảm xúc, thể hiện trọn vẹn tình yêu và niềm hạnh phúc của bạn.
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
