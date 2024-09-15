import React from 'react';
import './Service.css';
import Navbar from '../../Components/Navbar/Navbar';

import img1 from "../../Components/Image/7.jpg";

const Service = () => {
    return (
        <div className="home-page">
            <Navbar />
            <div className="img1"></div>
            <div className="text-wrapper-1">Các dịch vụ</div>
            <div className="overlap-1">
                <div className="img2"></div>
                <div className="img3"></div>
                <div className="img19"></div>
                <div className="img20"></div>
                <p className="text-wrapper-2">
                Chụp ảnh chân dung 
                <p >Dịch vụ chụp ảnh chân dung chuyên nghiệp với ánh sáng và bối cảnh tùy chỉnh</p>
                </p>
                <p className="text-wrapper-3">
                Quay video sự kiện 
                <p >Quay video chất lượng cao cho các sự kiện như đám cưới, hội thảo, và tiệc</p>
                </p>
                <p className="text-wrapper-4">
                Thiết Kế Đồ Họa 
                <p >Chúng tôi cung cấp dịch vụ thiết kế đồ họa chuyên nghiệp cho các dự án cá nhân và doanh nghiệp</p>
                </p>
                <p className="text-wrapper-5">
                Chỉnh Sửa Ảnh
                <p >Chỉnh sửa và retouch ảnh để đảm bảo chất lượng tốt nhất cho các dự án của bạn</p>
                </p>
            </div>
        </div>
        
    );
};

export default Service;