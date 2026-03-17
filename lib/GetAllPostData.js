export default async function GetAllPostData() {
  const bloData = await fetch(
    'https://backend-apexadvisor.vercel.app/site/blog',
    {
      cache: 'no-store',
    },
  );
  return bloData.json();
}
