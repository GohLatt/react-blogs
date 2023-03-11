import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

function ShowBlogPage() {
  const { id } = useParams();
  const [sBlog, setSBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fatchData = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
      }
      if (data) {
        setSBlog(data);
        setLoading(false);
      }
    };
    fatchData();
  }, []);
  return (
    <div className="show-blog-page">
      {loading && <h2 className="heading-secondary text-center">Loading...</h2>}
      {sBlog && (
        <div className="show-single-page">
          <div className="item1">
            <div className="blog-head">
              <h2 className="heading-secondary">{sBlog.title}</h2>
              <p>{sBlog.category}</p>
            </div>
            <img src={sBlog.img} alt="photo" className="sblog-img" />
            <p className="blog-text">{sBlog.text}</p>
          </div>
          <div className="item2">
            <h2 className="heading-secondary edit-text">
              Start Your Life With BMPS
            </h2>
            <img src="./bmps.jpg" alt="photo" className="sblog-img" />
            <div className="infor-box">
              <h2 className="contact">Contact us</h2>
              <div className="box">
                <ion-icon name="logo-github" className="icon"></ion-icon>
                <p>
                  <a href="https://github.com/GohLatt">contact with Github</a>
                </p>
              </div>
              <div className="box">
                <ion-icon name="logo-facebook" className="icon"></ion-icon>
                <p>
                  <a href="https://www.facebook.com/goh.lattoo">
                    contact with Facebook
                  </a>
                </p>
              </div>
              <div className="box">
                <ion-icon name="mail-outline" className="icon"></ion-icon>
                <p>
                  <a href="mailto:gohlattoo12@gmail.com">
                    gohlattoo12@gamil.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBlogPage;
