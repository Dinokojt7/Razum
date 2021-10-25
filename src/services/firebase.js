import  {firebase, FieldValue } from '../lib/firebase'; 

export async function doesUserNameExist(userName) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userName', '==', userName )
        .get();

    return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserName(userName) {
  const result = await firebase
      .firestore()
      .collection('users')
      .where('userName', '==', userName )
      .get();

    return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
}



// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
    const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId )
    .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}

// export async function getSuggestedProfiles(userId, following) {
//     const result = await firebase
//     .firestore()
//     .collection('users')
//     .limit(10)
//     .get();
    
//     return result.docs

//     .map((user) => ({ ...user.data(), docId: user.Id}))
//     .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));

// }

export async function getSuggestedProfiles(userId, following) {
    let query = firebase.firestore().collection('users');
  
    if (following.length > 0) {
      query = query.where('userId', 'not-in', [...following, userId]);
    } else {
      query = query.where('userId', '!=', userId);
    }
    const result = await query.limit(10).get();
  
    const profiles = result.docs.map((user) => ({
      ...user.data(),
      docId: user.Id
    }));
  
    return profiles;
  }

  //UpdateLoggedInUserFollowing

  export async function updateLoggedInUserFollowing(
    loggedInUserDocId, 
    profileId, 
    isFollowingProfile
    ) {
    return firebase
      .firestore()
      .collection('users')
      .doc(loggedInUserDocId)
      .update({follwers: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId)
      });
  }

  //UpdateFollowedUserFollowers
  export async function updateFollowedUserFollowers(
    profileDocId, 
    loggedInUserDocId, 
    isFollowingProfile
    ) {
    return firebase
      .firestore()
      .collection('users')
      .doc(profileDocId)
      .update({followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId)
      });
  }

  //Get fuckups from firebase
  export async function getFuckups(userId, following) {
    const result = await firebase
      .firestore()
      .collection('fuckups')
      .get();

      const userFollowedFuckups = result.docs.map((fuckup) => ({
        ...fuckup.data(),
        docId: fuckup.Id 
      }));
      
      // return userFollowedFuckups; 

      const fuckupsWithUserDetails = await Promise.all(
        userFollowedFuckups.map(async (fuckup) => {
          let fuckupFoundHelpful = false;
          if (fuckup.foundHelpful.includes(userId)) {
            fuckupFoundHelpful = true;
          }

          const user = await getUserByUserId(fuckup.userId);
          const { userHandle } = user[0];
          return { userHandle, ...fuckup, fuckupFoundHelpful };
        })
      );

      return fuckupsWithUserDetails;   
  }

  // export async function getFuckups(userId, following) {
  //   const result = await firebase
  //   .firestore()
  //   .collection('fuckups')
  //   .orderBy('createdAt', 'desc')
  //   .get()
  //   .then(data => {
  //       let fuckups
  //       data.forEach(doc => {
  //           fuckups.push({
  //               fuckupId: doc.id,
  //               body: doc.data().body,
  //               userHandle: doc.data().userHandle,
  //               // createdAt: doc.data(),createdAt
  //           });
  //       });
  //       return getFuckups();
  //   })
  //   .catch(err => console.error(err));
  
  //     // return fuckupsWithUserDetails;   
  // }

export async function getUserFuckupsByUserName(userName) {
    const [user] = await getUserByUserName(userName);
    const result = await firebase
    .firestore()
    .collection('fuckups')
    .where('userId', '==', user.userId)
    .get();

    return result.docs.map((item) => ({
      ...item.data(),
      docId: item.id
    }));
}

export async function isUserFollowingProfile(loggedInUserUserName, profileUserId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userName', '==', loggedInUserUserName)
    .where('following', 'array-contains', profileUserId)
    .get();

    const [response = {}] = result.docs.map((item) => ({
      ...item.data(),
      docId: item.id
    }));

}

export async function toggleFollow(
  isFollowingProfile, 
  activeUserDocId, 
  profileDocId, 
  profileUserId, 
  followingUserId
  ) {
  await updateLoggedInUserFollowing(activeUserDocId, profileUserId, isFollowingProfile);

  await updateFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile);
  }

  

