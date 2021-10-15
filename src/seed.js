export function seedDatabase(firebase) {
  // const users = [
  //   {
  //     userId: 'xPYc2u6rzPd9j5mcYtGVOgPMSF92',
  //     userName: 'tc',
  //     fullName: 'Tiisetso Dinoko',
  //     emailAddress: 'dinokovonteese@gmail.com',
  //     following: ['2'],
  //     followers: ['2', '3', '4'],
  //     dateCreated: Date.now()
  //   },
  //   {
  //     userId: '2',
  //     userName: 'raphael',
  //     fullName: 'Raffaello Sanzio da Urbino',
  //     emailAddress: 'raphael@sanzio.com',
  //     following: [],
  //     followers: ['xPYc2u6rzPd9j5mcYtGVOgPMSF92'],
  //     dateCreated: Date.now()
  //   },
  //   {
  //     userId: '3',
  //     userName: 'dali',
  //     fullName: 'Salvador Dalí',
  //     emailAddress: 'salvador@dali.com',
  //     following: [],
  //     followers: ['xPYc2u6rzPd9j5mcYtGVOgPMSF92'],
  //     dateCreated: Date.now()
  //   },
  //   {
  //     userId: '4',
  //     userName: 'orwell',
  //     fullName: 'George Orwell',
  //     emailAddress: 'george@orwell.com',
  //     following: [],
  //     followers: ['xPYc2u6rzPd9j5mcYtGVOgPMSF92'],
  //     dateCreated: Date.now()
  //   }
  // ];

  // // eslint-disable-next-line prefer-const
  // for (let k = 0; k < users.length; k++) {
  //   firebase.firestore().collection('users').add(users[k]);
  // }

  // eslint-disable-next-line prefer-const
  for (let i = 4; i <= 4; ++i) {
    firebase
      .firestore()
      .collection('fuckups')
      .add({
        fuckupId: i,
        userId: '7',
        dateCreated: Date.now(),
        "body": "Neclected our A/B testing strategy ",
        "takeAway": "Make a point to draw up a robust A/B testing plan, it'll help you build a highly optimized user experience.",
        "userHandle": "Jonathan",
        foundHelpful: [],
        beenThere: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'A/B Testing is as important as unit testing, no ways you should go full production without doing those two'
          },
          {
            displayName: 'orwell',
            comment: 'I agree with Dali on this, you really don\'t want to have your production come to a complete stand still because you shipped without doing proper' 
          }
        ],
      });
  }
}