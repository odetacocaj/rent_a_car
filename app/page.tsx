import { CustomFilter, MainBanner, SearchBar } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainBanner />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore some of our cars</p>
        </div>
        <div className="home__filter">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}
