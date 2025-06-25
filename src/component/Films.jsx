import { useState } from "react";
import Poster from "./Poster.jsx";
import Details from "./Details.jsx";

import bibadan from "../assets/img/bibadan.jpg";
import bibadanBg from "../assets/img/bgbi.jpg";
import yadegar from "../assets/img/yadegar.jpg";
import yadegarBg from "../assets/img/bgya.jpg";
import asb from "../assets/img/asb.jpg";
import asbBg from "../assets/img/bgasb.jpg";
import khorshid from "../assets/img/khorshid.jpg";
import khorshidBg from "../assets/img/bgkhor.jpg";
import nilgun from "../assets/img/nilgun.jpg";
import nilgunBg from "../assets/img/bgni.jpg";
import temsah from "../assets/img/temsah.jpg";
import temsahBg from "../assets/img/bgt.jpg";

export default function Films({ status }) {
  const [focusIndex, setFocusIndex] = useState(4);

  function handleFocus(index) {
    setFocusIndex(index);
  }
  return (
    <>
      <section className={`${status === 1 ? "hidden" : "flex"}`}>
        <div className=" flex  items-center  justify-center mx-10 overflow-x-scroll  w-full px-8">
          <div className="flex my-20 space-x-20 ">
            <Poster
              focus={() => handleFocus(1)}
              focusNumber={focusIndex}
              img={bibadan}
              x={1}
            />
            <Poster
              focus={() => handleFocus(2)}
              focusNumber={focusIndex}
              img={yadegar}
              x={2}
            />
            <Poster
              focus={() => handleFocus(3)}
              focusNumber={focusIndex}
              img={asb}
              x={3}
            />
            <Poster
              focus={() => handleFocus(4)}
              focusNumber={focusIndex}
              img={khorshid}
              x={4}
            />
            <Poster
              focus={() => handleFocus(5)}
              focusNumber={focusIndex}
              img={nilgun}
              x={5}
            />
            <Poster
              focus={() => handleFocus(6)}
              focusNumber={focusIndex}
              img={temsah}
              x={6}
            />
            <Poster
              focus={() => handleFocus(7)}
              focusNumber={focusIndex}
              img={yadegar}
              x={7}
            />
          </div>
        </div>
      </section>
      <div className={`${status === 1 ? "hidden" : "flex"}`}>
        <Details
          img={bibadanBg}
          show={focusIndex}
          y={1}
          name="بی بدن"
          nameE="Bibadan"
          kargardan="مرتضی علیزاده"
          like="70%"
          imdb="5.7"
          zhanr="جنایی"
          kholase="سارا مقدم پس از گم شدن دخترش ارغوان، به دادسرا مراجعه می کند. موبایل ارغوان ردیابی می شود تا آخرین فردی که او را دیده مشخص شود. یافته ها از وقوع اتفاقاتی هولناک پرده بر می دارد."
          time="بالای ۱۵ سال - یک ساعت و ۵۱ دقیقه - محصول ایران - ۱۴۰۲ - کیفیت HD"
        />
        <Details
          img={yadegarBg}
          show={focusIndex}
          y={2}
          name="یادگار جنوب"
          nameE="yadegar jonub"
          kargardan=" حسین دوماری"
          like="50%"
          imdb="4.4"
          zhanr="عاشقانه"
          kholase="وحید، عشقش را در کالبد رعنا، زنی روسپی می جوید ..."
          time="بالای ۱۵ سال - یک ساعت و ۴۱ دقیقه - محصول ایران - ۱۴۰۱ - کیفیت HD"
        />
        <Details
          img={asbBg}
          show={focusIndex}
          y={3}
          name="اسب سفید پادشاه"
          nameE="asb sefid padeshah"
          kargardan="محمد حسین لطیفی"
          like="85%"
          imdb="6.8"
          zhanr="درام"
          kholase="فیلم اسب سفید پادشاه داستان دختر جوانی به نام مریم معروف به ماری است که پس از چند ماه از زندان آزاد می شود و در صدد یافتن نامزد خود و خروج از بحرانی است که در زندگی گرفتار آن شده است ...."
          time="یک ساعت و ۲۹ دقیقه - محصول ایران - ۱۳۹۴ - کیفیت HD"
        />
        <Details
          img={khorshidBg}
          show={focusIndex}
          y={4}
          name=" خورشید آن ماه"
          nameE="khorshid an mah"
          kargardan="ستاره اسکندری"
          like="70%"
          imdb="6.2"
          zhanr="درام"
          kholase="در جنوب شرقی استان سیستان و بلوچستان، یک بیوه بلوچ به نام بیبان تصمیم می گیرد سکوت کند و دیگر حرفی نزند. او با پسرش میران در خانه پدرشوهرش زندگی می کند. وقتی همبازی دوران کودکی او، همراز، به خانه برمی گردد، عشقی میانشان جان می گیرد؛ اما همه سعی می کنند بیبان را وادار کنند که این عشق ممنوعه را فراموش کند."
          time="بالای ۱۵ سال - یک ساعت و ۳۱ دقیقه - محصول ایران - ۱۳۹۹ - کیفیت HD"
        />
        <Details
          img={nilgunBg}
          show={focusIndex}
          y={5}
          name="نیلگون"
          nameE="Nilgun"
          kargardan="حسین سهیلی زاده"
          like="70%"
          imdb="5.5"
          zhanr="خانوادگی"
          kholase="نیلگون فیلمی به کارگردانی حسین سهیلی زاده، نویسندگی بابک کایدان و تهیه کنندگی ایرج محمدی محصول سال ۱۳۹۸ است."
          time="بالای ۱۵ سال - یک ساعت و ۲۶ دقیقه - محصول ایران - ۱۳۹۸ - کیفیت HD"
        />
        <Details
          img={temsahBg}
          show={focusIndex}
          y={6}
          name="تمساح خونی"
          nameE="Temsah khuni"
          kargardan="جواد عزتی"
          like="60%"
          imdb="5.2"
          zhanr="کمدی"
          kholase="من یه تمساحم، یه تمساح خونی ! یه آدم زخمی که کل زندگیش فقط باخته و چیزی برای از دست دادن نداره… ولی باز دلش ریسک های بزرگ می خواد!"
          time="بالای ۱۵ سال - یک ساعت و ۴۶ دقیقه - محصول ایران - ۱۴۰۳ - کیفیت HD"
        />
        <Details
          img={yadegarBg}
          show={focusIndex}
          y={7}
          name="یادگار جنوب"
          nameE="yadegar jonub"
          kargardan=" حسین دوماری"
          like="50%"
          imdb="4.4"
          zhanr="عاشقانه"
          kholase="وحید، عشقش را در کالبد رعنا، زنی روسپی می جوید ..."
          time="بالای ۱۵ سال - یک ساعت و ۴۱ دقیقه - محصول ایران - ۱۴۰۱ - کیفیت HD"
        />
      </div>
    </>
  );
}
