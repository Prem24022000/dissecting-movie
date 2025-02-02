export function Hero({ innerData }) {
  console.log(innerData);

  return (
    <section className="container mx-auto mt-28">
      <div className="">
        <h1 className="text-4xl mb-7">{innerData.title}</h1>
        <p className="text-base !leading-normal">{innerData.description}</p>
      </div>
    </section>
  );
}
