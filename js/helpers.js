export const fetchData = async (url) => {
  try {
    const responce = await fetch(url);
    return await responce.json();
  } catch (error) {
    throw new Error(error);
  }
};
