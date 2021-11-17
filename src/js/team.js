const team = [
  {
    name: 'John Doe',
    profission: 'Develpoper',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: './dist/assets/img/pales1.png',
  },
  {
    name: 'Brad Doe',
    profission: 'Front-End',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam.',
    image: './dist/assets/img/pales2.png',
  },
  {
    name: 'Anne Doe',
    profission: 'instructional designer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam perspiciatis, ipsam obcaecati id.',
    image: './dist/assets/img/pales3.png',
  },
  {
    name: 'Marry Doe',
    profission: 'Develpoper',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam perspiciatis.',
    image: './dist/assets/img/pales4.png',
  },

];

const generateTeam = () => {
  const placeTeam = document.querySelector('#our-team');
  team.forEach((e) => {
    placeTeam.insertAdjacentHTML('beforeend',
      `<li>
        <div>
          <div class="bg-square"></div>
          <img src="${e.image}" alt="">
        </div>
        <div class="description">
          <h3>${e.name}</h3>
          <p>${e.profission} </p>
          <hr>
          <p>${e.description}</p>
        </div>
    </li>`);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  generateTeam();
});
