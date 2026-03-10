import logoImage from "/src/assets/image/Group.png";
import shapeImage from "/src/assets/image/shape.png";
import faceImage from "/src/assets/image/face.png";
import tiktokImage from "/src/assets/image/tiktok.png";
import zaloImage from "/src/assets/image/zalo.png";
import flowerImage from "/src/assets/image/flower.png";

export function Footer() {
  return (
    <footer className="bg-[#291E0A] px-4 lg:px-[96px] py-[64px] relative">
      <div className="grid grid-cols-12 gap-8 text-[#E8D9B5]">
        <img
          className="col-span-12 lg:col-span-6 w-40"
          src={logoImage}
          alt="Logo"
        />
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-10">
          <div>
            <p className="text-[10px] tracking-widest mb-6 opacity-70 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B19879] rounded-full inline-block"></span>
              <span className="w-2 h-2 border border-[#B19879] rounded-full inline-block"></span>
              SITEMAP
            </p>
            <ul className="space-y-3 text-[28px] font-normal">
              <li className="hover:opacity-80 cursor-pointer">Trang chủ</li>
              <li className="hover:opacity-80 cursor-pointer">Giới thiệu</li>
              <li className="hover:opacity-80 cursor-pointer">Dịch vụ</li>
            </ul>
          </div>
          <div className="pt-10">
            <ul className="space-y-3 text-[28px] font-normal">
              <li className="hover:opacity-80 cursor-pointer">Tin tức</li>
              <li className="hover:opacity-80 cursor-pointer">Liên hệ</li>
            </ul>
          </div>

          <div className="col-span-1 mt-10">
            <p className="text-xs tracking-widest mb-6 opacity-70 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B19879] rounded-full inline-block"></span>
              <span className="w-2 h-2 border border-[#B19879] rounded-full inline-block"></span>
              Liên hệ
            </p>
            <div className="space-y-3 text-sm leading-relaxed opacity-90 text-[#F5EAD6]">
              <p>+84 89 812 12 97</p>
              <p>
                6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh
                <br />
                (gần Crescent Mall)
              </p>
              <p>
                Thứ 2 - Thứ 6: <span className="ml-3">09:00 - 19:00</span>
              </p>
              <p>
                Thứ 7 - Chủ nhật: <span className="ml-3">09:00 - 20:00</span>
              </p>
            </div>
          </div>
          <div className="col-span-1 mt-10 relative w-[254px] h-[168px] flex items-center justify-center">
            <img
              src={shapeImage}
              alt="Shape"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <span className="relative text-[#E8D9B5] text-sm font-bold hover:text-[#2B1A0D] transition cursor-pointer">
              Đặt lịch ngay
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <ul className="flex gap-6">
          <li>
            <img src={faceImage} alt="Facebook" />
          </li>
          <li>
            <img src={tiktokImage} alt="TikTok" />
          </li>
          <li>
            <img src={zaloImage} alt="Zalo" />
          </li>
        </ul>
        <div className="text-[#625B5A] font-medium text-[10px]">
          © 2025 — Copyright The OM Lounge. All rights reserved.
        </div>
      </div>
      <img src={flowerImage} alt="Flower" className="absolute right-0 top-0" />
    </footer>
  );
}
