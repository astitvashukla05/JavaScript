export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchOptions = uploadData
      ? {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        }
      : {};

    const res = await fetch(url, fetchOptions);

    if (!res.ok) throw new Error(`${res.status} Could not fetch data`);

    return await res.json();
  } catch (err) {
    throw new Error(`Something went wrong: ${err.message}`);
  }
};
