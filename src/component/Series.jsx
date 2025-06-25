import { useState } from "react";

import Details from "./Details.jsx";
import Poster from "./Poster.jsx";

import joker from "../assets/img/joker.jpg";
import jokerBg from "../assets/img/3.jpeg";
import sham from "../assets/img/sham.jpg";
import shamBg from "../assets/img/6.jpeg";
import aknun from "../assets/img/aknun.jpg";
import aknunBg from "../assets/img/5.jpeg";
import masti from "../assets/img/masti.jpg";
import mastiBg from "../assets/img/bgm.jpg";
import lala from "../assets/img/lala.jpg";
import lalaBg from "../assets/img/bgl.jpg";
import zakhm from "../assets/img/zakhm.jpg";
import zakhmBg from "../assets/img/2.jpeg";

export default function Series({ status }) {
  const [focusIndex, setFocusIndex] = useState(2);
  function handleFocus(index) {
    setFocusIndex(index);
  }
  return (
    <>
      <section className={`${status === 2 ? "hidden" : "flex"}`}>
        <div className=" flex items-center  justify-ceter mx-10 overflow-x-scroll  w-full px-8">
          <div className=" flex my-20 space-x-20">
            <Poster
              focus={() => handleFocus(1)}
              focusNumber={focusIndex}
              img={joker}
              x={1}
            />
            <Poster
              focus={() => handleFocus(2)}
              focusNumber={focusIndex}
              img={sham}
              x={2}
            />
            <Poster
              focus={() => handleFocus(3)}
              focusNumber={focusIndex}
              img={aknun}
              x={3}
            />
            <Poster
              focus={() => handleFocus(4)}
              focusNumber={focusIndex}
              img={masti}
              x={4}
            />
            <Poster
              focus={() => handleFocus(5)}
              focusNumber={focusIndex}
              img={lala}
              x={5}
            />
            <Poster
              focus={() => handleFocus(6)}
              focusNumber={focusIndex}
              img={zakhm}
              x={6}
            />
          </div>
        </div>
      </section>
      <div className={`${status === 2 ? "hidden" : "flex"}`}>
        <Details
          img={jokerBg}
          show={focusIndex}
          y={1}
          name="جوکر"
          nameE="joker2"
          kargardan="احسان علیخانی"
          like="78%"
          imdb="5.2"
          zhanr="کمدی"
          kholase="یه قسمت پر از اتفاقات عجیب و غریب که توش رژیم های غذایی نعیمه رو محاکمه می کنن، مریم سعادت فال می گیره و غول چراغ جادو ظاهر میشه…"
        />
        <Details
          img={shamBg}
          show={focusIndex}
          y={2}
          name="شام ایرانی"
          nameE="sham irani"
          kargardan="سعید ابوطالب"
          like="88%"
          imdb="3.2"
          zhanr="خانوادگی"
          kholase="شام ایرانی به خانه یکی از داوودنژادها رسید. واله داوودنژاد میهمانانش را به شام بی نظیری دعوت کرد که همه اجزایش را خودش به تنهایی درست کرده است. حالا نوبت صحرا اسداللهی و السا فیروز آذر و متین ستوده است که به او امتیاز بدهند. داورها هنوز سخت گیرند...."
          time="محصول ایران - ۱۴۰۳ - کیفیت HD"
        />
        <Details
          img={aknunBg}
          show={focusIndex}
          y={3}
          name="اکنون.."
          nameE="Aknun"
          kargardan="محمدرضا رضائیان"
          like="70%"
          imdb="5.2"
          zhanr="تاک شو"
          kholase="در پنجمین قسمت از برنامه «اکنون...»، پیمان قاسم خانی مهمان برنامه است. او که با فیلم هایش بارها لحظات را به کام ما شیرین کرده، اکنون با سروش صحت از زندگی، هنر و عشق می گوید."
          time="محصول ایران - ۱۴۰۳"
        />
        <Details
          img={mastiBg}
          show={focusIndex}
          y={4}
          name="ممیزی"
          nameE="Momayezi"
          kargardan="حامد جوادزاده"
          like="62%"
          imdb="5.2"
          zhanr="کمدی"
          kholase="همدیگه رو جاج نکنین!"
          time="محصول ایران - ۱۳۹۸"
        />
        <Details
          img={lalaBg}
          show={focusIndex}
          y={5}
          name="لالایی"
          nameE="lalaei"
          kargardan="احمد درویشعلی پور"
          like="75%"
          imdb="6.2"
          zhanr="خانوادگی"
          kholase="جهانگیر با به دست آوردن دفترچه قصد دارد با بر ملا کردن نقش پاداش، گلشن را در جریان اتفاقات پیش آمده قرار دهد و نقشه هایی را که در سر دارد عملی کند."
          time="محصول ایران - ۱۴۰۳"
        />
        <Details
          img={zakhmBg}
          show={focusIndex}
          y={6}
          name="زخم کاری"
          nameE="zakhm kari"
          kargardan="محمدحسین مهدویان"
          like="88%"
          imdb="7.2"
          zhanr="درام"
          kholase="مالک در جستجوی زنی است که پدر سیما را به جشن عروسی آورده. او سیما را به جای خود با تیمی از شرکایش به نروژ می فرستد. در نروژ اما مذاکره به مشکل می خورد. مالک در تلاش است از طریق سیما و باقی شرکا مشکل را حل کند اما…"
          time="۴ فصل و ۴۸ قسمت"
        />
      </div>
    </>
  );
}
