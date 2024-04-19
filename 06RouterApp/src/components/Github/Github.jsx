import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/gowtham-chandrasekaran")
  //     .then((res) => res.json())
  //     .then((resJSON) => setData(resJSON));
  //   console.log(data);
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
      <p className="text-lg">{data.bio}</p>
      <p className="mt-2">
        <strong>Followers:</strong> {data.followers}
      </p>
      <p>
        <strong>Following:</strong> {data.following}
      </p>
      <p>
        <strong>Public Repos:</strong> {data.public_repos}
      </p>
      <p>
        <strong>Location:</strong> {data.location}
      </p>
      <p>
        <strong>Joined GitHub:</strong>{" "}
        {new Date(data.created_at).toLocaleDateString()}
      </p>
      <p>
        <a href={data.html_url} className="text-blue-400 hover:underline">
          Visit Profile
        </a>
      </p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/gowtham-chandrasekaran"
  );
  return response.json();
};
