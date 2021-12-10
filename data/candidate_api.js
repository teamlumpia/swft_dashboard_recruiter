import { v4 as uuidv4 } from 'uuid';

const id1 = uuidv4();
const id2 = uuidv4();
const id3 = uuidv4();
const id4 = uuidv4();
const id5 = uuidv4();
const id6 = uuidv4();
const id7 = uuidv4();
const id8 = uuidv4();
const id9 = uuidv4();
const id10 = uuidv4();
const id11 = uuidv4();
const id12 = uuidv4();
const id13 = uuidv4(); 

let candidates = {
[id1]: {
    id: 'a1',
    jobId: '0',
    firstName: 'Tina',
    lastName: 'Belcher',
    city:'Seattle', 
    state: 'WA',
    imageURL: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/tina-belcher.jpg',
    keywords:  'keyword',
    score: 75, 
    jobTitle:'Software Engineer',
    jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar ullamcorper augue at interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pellentesque dictum urna, vitae euismod turpis porta non. Aenean elit mi, rutrum efficitur imperdiet non, gravida nec erat.',
    resumePDF:'TBD', 
    swiped: '01/03/2021',
    email:'ealasagas@gmail.com'
},
[id2]: {   id: 'a2', 
    jobId: '0', 
    firstName:'Gene', 
    lastName: 'Belcher', 
    city: 'Seattle', 
    state: 'WA', 
    imageURL: 'https://images.adagio.com/images2/custom_blends/143892.jpg', 
    keywords: 'keyword', 
    score:'85', 
    jobTitle:'Software Developer', 
    jobDetails:'Aenean non suscipit leo. Sed ut enim tellus. Fusce nec dignissim dui. Pellentesque hendrerit, diam eget eleifend dapibus, urna ante imperdiet odio, eget dictum est metus ac nunc. Donec consequat odio consectetur tellus suscipit, non pellentesque risus ultricies. Nam vel malesuada lacus.', 
    resumePDF:'TBD', 
    swiped: '01/03/2021',
    email: 'teamlumpiadesign@gmail.com'
}, 
[id3]: {   id: 'a3', 
    jobId: '0', 
    firstName:'Jimmy Jr.', 
    lastName: 'Pesto', 
    city:'Seattle', 
    state: 'WA', 
    imageURL: 'https://pbs.twimg.com/profile_images/671046007254204416/31YIPXey_400x400.png', 
    keywords: 'keyword', 
    score: '90', 
    jobTitle: 'Senior Software Developer', 
    jobDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna dolor, fringilla id volutpat non, finibus nec nisi. Integer maximus sed sem non aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
    resumePDF: 'TBD', 
    swiped: '01/03/2021',
    email:'john.laceda@gmail.com'
}, 
[id4]: {   id: 'a4', 
    jobId: '0', 
    firstName:'Darryl', 
    lastName: 'Ansari', 
    city:'Seattle', 
    state: 'WA', 
    imageURL: 'https://static.wikia.nocookie.net/bobsburgerpedia/images/5/5a/Darryl-2.jpg/revision/latest/scale-to-width-down/200?cb=20150725093554', 
    keywords: 'keyword', 
    score: '95', 
    jobTitle: 'Senior Engineer', 
    jobDetails: 'In ullamcorper lacinia erat sit amet eleifend. Sed sed quam et dolor suscipit luctus ornare et nunc. Nulla feugiat dui libero, ut congue erat faucibus non. Ut sed enim viverra, varius velit a, hendrerit ex. In sit amet viverra mauris, eu aliquet eros. Integer tristique sit amet ante id convallis. Duis a enim dui. ', 
    resumePDF: 'TBD', 
    swiped: '01/03/2021',
    email:'marie.marcos25@gmail.com'
}, 
[id5]: {   id: 'a5', 
    jobId: '1', 
    firstName:'Linda', 
    lastName: 'Belcher', 
    city:'Seattle', 
    state: 'WA',
    imageURL: 'https://imgix.bustle.com/2015/11/28/linda.jpg',
    keywords: 'keyword',
    score: '20',
    jobTitle: 'Executive Assistant',
    jobDetails: 'Curabitur mollis fermentum ex quis dapibus. Nullam orci neque, tempus id urna vitae, porta luctus ex. Quisque dictum efficitur pharetra.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email:'ealasagas@gmail.com'
}, 
[id6]: {   id:'a6', 
    jobId:'1', 
    firstName:'Teddy',
    lastName: 'Hammer',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/bobs-burgers/4/4f/Teddy1.jpg',
    keywords:'keyword',
    score: '40',
    jobTitle: 'Administrative Assistant',
    jobDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique enim semper ultrices tristique. Sed condimentum sapien quis urna auctor, nec finibus leo placerat. Nullam faucibus euismod purus sit amet tempor.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'teamlumpiadesign@gmail.com'
}, 
[id7]: {   id:'a7', 
    jobId: '1', 
    firstName:'Mort',
    lastName: 'Creamatorium',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://static.wikia.nocookie.net/bobsburgerpedia/images/8/81/Mort2.png/revision/latest/scale-to-width-down/150?cb=20130305233503',
    keywords:'keyword',
    score: '20',
    jobTitle: 'Executive Assistant',
    jobDetails:' Etiam at eros vel justo auctor aliquet at sit amet mi. Proin elementum cursus aliquet. Integer ac lectus ac nisi cursus pellentesque sit amet non est.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'john.laceda@gmail.com'
}, 
[id8]: {   id:'a8', 
    jobId:'2', 
    firstName:'Bob',
    lastName: 'Belcher',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/bob-belcher.jpg',
    keywords:'keyword',
    score: '10',
    jobTitle: 'UX Designer',
    jobDetails:'Donec a ultrices diam, ac sollicitudin mi. Praesent pellentesque tortor vitae erat porta, et mollis lacus tempus. Duis ornare cursus dolor. Suspendisse dignissim ligula nisi, vel fermentum ante lacinia eget. Praesent vel faucibus felis.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'marie.marcos25@gmail.com'
}, 
[id9]: {   id: 'a9', 
    jobId:'2', 
    firstName:'Mister',
    lastName: 'Fischoeder',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://i.imgur.com/s3mTiZG.jpg',
    keywords:'keyword',
    score: '88',
    jobTitle: 'UX/UI Developer',
    jobDetails:'Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce blandit mollis tortor, in pulvinar felis sodales quis. Etiam convallis nulla vitae nisl rutrum aliquet. Nulla aliquet nisi sed elit ultrices tincidunt. Sed condimentum vulputate metus sed consectetur. Fusce vehicula vehicula lacus, eget pulvinar eros iaculis vel. Praesent nec metus sodales nibh tincidunt interdum. Suspendisse potenti. Vivamus tristique egestas leo, sed facilisis odio.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'ealasagas@gmail.com'
}, 
[id10]: {   id: 'a10',
    jobId: '2',
    firstName:'Andy',
    lastName: 'Pesto',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/36178/1516315826-5932-2675/tumblr_mdrrljr4kS1r69o11o1_400_large.jpg',
    keywords:'keyword',
    score: '87',
    jobTitle: 'UI Designer',
    jobDetails:'Aenean eleifend ornare accumsan. Proin mollis euismod varius. Curabitur quis felis semper, lobortis elit eget, tempor nunc. Nunc congue ipsum nec molestie fermentum.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'teamlumpiadesign@gmail.com'
}, 
[id11]: {   id:'a11',
    jobId:'2',
    firstName:'Ollie',
    lastName: 'Pesto',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/36176/1516315786-10576-6700/tumblr_mdrrljr4kS1r69o11o1_400_large.jpg',
    keywords:'keyword',
    score: '54',
    jobTitle: 'UX Designer',
    jobDetails:'Cras eu luctus eros. Ut commodo rhoncus est eget faucibus. Nullam vitae vehicula urna, vitae elementum nulla. Nam hendrerit placerat augue non accumsan. Duis vel diam ante. Phasellus vitae sodales tortor, ac convallis nisl.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'john.laceda@gmail.com'
}, 
[id12]: {   id:'a12',
    jobId:'3',
    firstName:'Louise',
    lastName: 'Belcher',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://cdn.costumewall.com/wp-content/uploads/2018/09/louise-belcher.jpg',
    keywords:'keyword',
    score: '46',
    jobTitle: 'Front End Engineer',
    jobDetails:'Morbi ut libero dapibus, tempus ipsum eget, aliquet eros. In lacinia mauris libero, non aliquam est vestibulum non. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi mattis posuere nisi vel laoreet.',
    resumePDF: 'TBD',
    swiped: '01/03/2021',
    email: 'marie.marcos25@gmail.com'
}, 
[id13]: {   id:'a13',
    jobId:'3',
    firstName:'Rudy',
    lastName: 'Regular Sized',
    city:'Seattle',
    state: 'WA',
    imageURL: 'https://static.wikia.nocookie.net/bobsburgerpedia/images/8/8d/Regular-Rudy.jpg/revision/latest/scale-to-width-down/200?cb=20160410170923',
    keywords:'keyword',
    score: '73',
    jobTitle: 'Web Developer', 
    jobDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non varius dolor, vel cursus nulla. Duis eu justo sapien. Morbi luctus rutrum turpis, vitae accumsan erat faucibus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis egestas pretium sem, vitae sodales neque dignissim vitae.', 
    resumePDF: 'TBD', 
    swiped: '01/03/2021',
    email: 'ealasagas@gmail.com'
}
};

const getCandidates = () => {
    new Promise((resolve, reject) => {
        if (!candidates) {
          return setTimeout(
            () => reject(new Error('Candidates not found')),
            250
          );
        }
    
        setTimeout(() => resolve(Object.values(candidates)), 250);
      });
}


const createCandidate = (data) =>  {
    new Promise((resolve, reject) => {
        if (!data.firstName || !data.lastName) {
          reject(new Error('Not all information provided'));
        }
    
        const id = uuidv4();
        const newCandidate = { id, ...data };
    
        candidates = { ...candidates, [id]: newCandidate };
    
        setTimeout(() => resolve(true), 250);
      });
}


  const deleteCandidate = (id) => {
    new Promise((resolve, reject) => {
        const { [id]: candidate, ...rest } = candidates;
    
        if (!candidate) {
          return setTimeout(
            () => reject(new Error('Candidate not found')),
            250
          );
        }
    
        candidates = { ...rest };
    
        return setTimeout(() => resolve(true), 250);
      });
  }


  export default (getCandidates, createCandidate, deleteCandidate);
