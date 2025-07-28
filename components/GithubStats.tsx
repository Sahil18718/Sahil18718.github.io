const GitHubStats = () => {
  const title = "06. GitHub Activities"
  return (
    <section className="githubstates" id="githubstates" data-aos="fade-up">
      <div className="section_title">
        {title.split(".")[0]}. <span>{title.split(". ")[1]}</span>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide github_carousel_container carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner github-carousel-window">
          <div className="carousel-item active">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=Sahil18718&theme=github-dark&hide_border=true&date_format=j%20M%5B%20Y%5D"
              className="d-block w-100"
              alt="GitHub Streak Stats"
              id="github-streak-stats"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sahil18718&show_icons=true&locale=en&layout=compact&theme=github_dark&hide_border=true"
              className="d-block w-100"
              alt="GitHub Top Languages"
              id="github-top-langs"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Sahil18718&show_icons=true&locale=en&theme=github_dark&hide_border=true"
              className="d-block w-100"
              alt="GitHub Stats Card"
              id="github-stats-card"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats
