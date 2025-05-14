export async function searchUser<T>(username: string): Promise<T> {
  const response = await fetch(
    `https://api.github.com/search/users?q=${username}`,
  );
  const data = await response.json();
  return data;
}

export async function getUser<T>(username: string): Promise<T> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

export async function getUserRepos<T>(username: string): Promise<T> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const data = await response.json();
  return data;
}
