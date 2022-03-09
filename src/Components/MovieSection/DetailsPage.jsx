import {React, useState, useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
import api from "../Commons/api";

const DetailsPage = () => {
  const params = useParams();
  const [movie, MovieDetails] = useState(null);

  // Get details from wp-json/wp/v2/posts?slug={slug}
  useEffect(() => {
    const url = `/posts?slug=${params.slug}`;
    api.get(url).then((res) => {
      MovieDetails(res.data);
    });
  }, [params.slug]);

  return (
    
    <section className="body-font overflow-hidden justify-center items-center">
        <Header />
      <section className="breadcrumb-area" >
			<div>
						<div className="breadcrumb-area-content">
							<h1>Movie Detail Page</h1>
						</div>
			</div>
		</section>
    
      {movie && (
        <div className="container movie-details-box">
                <Link to="/">
        <div className="backBtn">
      <span className="line tLine"></span>
      <span className="line mLine"></span>
      <span className="label">Back</span>
      <span className="line bLine"></span>
	</div>
      </Link>
          <div className="lg:w-full mx-auto flex flex-wrap justify-center  rounded-xl ">
            <img
               alt={movie[0].title.rendered}
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded-3xl shadow-sm"
               src={movie[0].featured_media_large}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
                {movie[0].title.rendered}
              </h1>

              <p className="text-gray-400 mb-1">
                Time : {movie[0].acf.length}
              </p>
              <p className="text-gray-400  mb-1">
               Rate :  {movie[0].acf.rate}
              </p>
              
              <p className="text-gray-400 mb-1">
               Stars :  {movie[0].acf.stars}
              </p> 
              <p className="text-gray-400 mb-1">
                Director :  {movie[0].acf.director}
              </p> 

              <div className="pt-8" dangerouslySetInnerHTML={{ __html: movie[0].content.rendered }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default DetailsPage;
