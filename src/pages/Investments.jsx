const Investments = () => {
  const fetchData = async () => {
    const data = await fetch("https://interviews.deno.dev/asset/crypto");
    const response = await data.json();
    console.log(response);
  };

  fetchData();
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default Investments;
