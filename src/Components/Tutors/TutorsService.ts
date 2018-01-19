import { TutorItem } from './TutorModel';

const WEB_API_ADRESS = 'https://randomuser.me/api/?results=30';

type RandomUser = {
  name: {first: string, last: string},
  picture: {thumbnail: string}
};

function convertToTutorItem(randomUser: RandomUser): TutorItem {
  return {
    fullName: `${randomUser.name.first} ${randomUser.name.last}`,
    thumbnail: randomUser.picture.thumbnail,
    rating: Math.floor(Math.random() * 5) + 1
  };
}

export async function getTutorsAsync() {
  let response = await fetch(WEB_API_ADRESS);
  let respJson: {results: RandomUser[]} = await response.json();
  return respJson.results.map(randUser => convertToTutorItem(randUser));
}
